
package main

import (
  "errors"
  "fmt"
  "regexp"
  "strings"
)

var split_re = regexp.MustCompile(`{[WUBRGCPX0-9/]+}|[A-Za-z0-9]+|\n|.`)
var template_re = regexp.MustCompile(`{{[^}]*?}}`)

// ------------------------------------------------------------
type ExtractedTemplateInformation struct {
  RootTemplate  string
  MatchTemplate string
  MatchIndex    int
  Variables     map[string]string
}

type TemplateAndResult struct {
  TemplateStrings   []string
  ResultStrings     []string
  TemplateVariables [][]ExtractedTemplateInformation
}

type TemplatesAndResults map[string]TemplateAndResult

// ------------------------------------------------------------


// The paranthesis mess up parsing MTGish
//var split_re = regexp.MustCompile(`{[WUBRGCPX0-9/]+}|[A-Za-z0-9]+|\(.*\)|\n|.`)

// ------------------------------------------------------------

// ParseTemplateString
// Takes a TemplateString and returns an array of:
//   {string, [reference, string]*}
//
// There will always be 1 + 2*X values in the result array.
// string may be the empty string.
//
// Input:  "Hello, {{NAME}}!"
//         string      reference string
// Output: "Hello, " , "NAME" ,  "!"
//
// Input:  "{{NAME}}"
//         string      reference string
// Output: "" ,        "NAME" ,  ""
func ParseTemplateString(templateString string) []string {
  templates := template_re.FindAll([]byte(templateString), -1)
  surroundingStrings := template_re.Split(templateString, -1)

  if len(surroundingStrings) != (len(templates) + 1) {
    panic("Unexpected Split/FindAll result in ParseTemplateString") }

  result := []string{ surroundingStrings[0] }
  for i, template := range templates {
    result = append(result, strings.Trim(string(template), "{ }"))
    result = append(result, surroundingStrings[i+1]) }
  return result
}


// ------------------------------------------------------------



type Breadcrumb struct {
  MatchReference string
  MatchIndex     int

  TokenStart     int
  TokenEnd       int

//  StringStart    int
//  StringEnd      int

  Breadcrumbs    []Breadcrumb
}





// ------------------------------------------------------------

type TokenReTrieEntry struct {
  References    map[string]int
  Tokens        map[string]int
  TerminalIndex int
}

type TokenReTrie []TokenReTrieEntry

type TokenReTries map[string]TokenReTrie

// ------------------------------------------------------------

func TokenReTrieInsertReference(tree TokenReTrie, treeCursor int, referenceToInsert string) (TokenReTrie, int) {
  treeNode := &tree[treeCursor]

  // Does it already exist?
  if child, ok := treeNode.References[referenceToInsert]; ok {
    return tree, child }

  // It doesn't exist, add it
  splitCursor  := len(tree)
  split := NewTokenReTrieEntry()
  treeNode.AddRef(referenceToInsert, splitCursor)
  tree = append(tree, split)

  return tree, splitCursor
}

func TokenReTrieInsertTokens(tree TokenReTrie, treeCursor int, runesToInsert []string) (TokenReTrie, int) {
  // Nothing left to insert, we're at the correct spot
  if len(runesToInsert) == 0 {
    return tree, treeCursor
  }

  // Start at the current location
  treeNode := &tree[treeCursor]
  current := runesToInsert[0]
  remaining := runesToInsert[1:]

  if child, ok := treeNode.Tokens[current]; ok {
    return TokenReTrieInsertTokens(tree, child, remaining) }

  // No match found, create links / nodes for the remaining string
  for _, r := range(runesToInsert) {
    splitCursor := len(tree)
    split := NewTokenReTrieEntry()
    treeNode.AddToken(r, splitCursor)

    tree = append(tree, split)
    treeNode = &tree[splitCursor]
  }

  splitCursor := len(tree) - 1
  return tree, splitCursor
}

func BuildTokenReTrie(_ string, templateStrings []string) TokenReTrie {
  tree := []TokenReTrieEntry{}
  tree = append(tree, NewTokenReTrieEntry())
  for i, templateString := range(templateStrings) {
    parsed := ParseTemplateString(templateString)

    treeCursor := 0
    isString := true
    for _, s := range(parsed) {
      if  isString {
        tokens := split_re.FindAllString(s, -1)
        //fmt.Printf("%#v: %#v\n", s, tokens)
        tree, treeCursor = TokenReTrieInsertTokens    (tree, treeCursor, []string(tokens))
      }
      if !isString {
        tree, treeCursor = TokenReTrieInsertReference(tree, treeCursor, s) }

      // We alternate between strings and references
      isString = !isString
    }

    tree[treeCursor].SetTerminal(templateString, i)
  }

  return tree
}

// ------------------------------------------------------------

type TokenReTrieCursor struct {
  TreeName    string
  Node        int
  Breadcrumbs []Breadcrumb

  Stack *TokenReTrieCursor
}

func newTokenReTrieCursor(treeName string, stack *TokenReTrieCursor) TokenReTrieCursor {
  cursor := TokenReTrieCursor {
    TreeName: treeName,
    Node: 0,
    Breadcrumbs: []Breadcrumb{},
    Stack: stack }
  return cursor
}

func TokenReTrieExpandCursors(retries TokenReTries, characterIndex int, cursor TokenReTrieCursor, debug bool) []TokenReTrieCursor {
  debug = true

  // Always add the current cursor
  newCursors := []TokenReTrieCursor{ cursor }

  if cursor.TreeName == "" {
    return newCursors }

  // Expand any reference
  node := retries[cursor.TreeName][cursor.Node]
  for reference, child := range(node.References) {
    returnCursor := TokenReTrieCursor {
      TreeName: cursor.TreeName,
      Node: child,
      Breadcrumbs: append([]Breadcrumb{}, cursor.Breadcrumbs...),
      Stack: cursor.Stack }
    newCursor := newTokenReTrieCursor(reference, &returnCursor)

    newCursors = append(newCursors, TokenReTrieExpandCursors(retries, characterIndex, newCursor, debug)...)
  }

  // Expand terminals by popping elements from the stack
  if node.TerminalIndex != -1 {
    breadcrumb := Breadcrumb {
      MatchReference: cursor.TreeName,
      MatchIndex: node.TerminalIndex,
      Breadcrumbs: cursor.Breadcrumbs }
    if (debug) {
      fmt.Println("Found terminal, creating breadcrumb")
      fmt.Println(breadcrumb)
    }

    if cursor.Stack != nil {
      //fmt.Println("Stack is non-nil")
      stack := *cursor.Stack
      stack.Breadcrumbs = append(stack.Breadcrumbs, breadcrumb)
      newCursors = append(newCursors, TokenReTrieExpandCursors(retries, characterIndex, stack, debug)...)
    }
  }

  return newCursors
}

func GetTokens(needle string) []string {
  tokens := split_re.FindAllString(needle, -1)
  return tokens
}

func CustomPrintTree(grammar TemplatesAndResults, trees TokenReTries, breadcrumb Breadcrumb, depth int) {
  index := breadcrumb.MatchIndex;
  reference := breadcrumb.MatchReference;
  children := breadcrumb.Breadcrumbs;

  template_string := grammar[reference].TemplateStrings[index];

  fmt.Printf("%s%s: %#v\n", strings.Repeat(" ", depth), reference, template_string);
  for _, child := range(children) {
    CustomPrintTree(grammar, trees, child, depth + 1) }
}

func TokenReTriesBestMatch(grammar TemplatesAndResults, trees TokenReTries, treeName string, needle string, debug bool) (Breadcrumb, error) {
  if (debug && false) {
    fmt.Printf("TokenReTriesBestMatch(treeName=%#v, needle=%#v)\n", treeName, needle) }

  seen := map[string]bool{}

  tokens := split_re.FindAllString(needle, -1)
  if (debug && false) {
    for i, token := range(tokens) {
      fmt.Printf("Token[%d] = %#v\n", i, token) } }
  bestTokenCursor := 0

  type TokenMatchCursor struct {
    TreeCursor   int
    TokenCursor  int
    Breadcrumbs  []Breadcrumb
  }

  var MatchAgainstInner func(treeName string, tokenIndex int, depth int, debug bool) []Breadcrumb
  MatchAgainstInner = func(treeName string, tokenIndex int, depth int, debug bool) []Breadcrumb {
    if (debug && false) {
      fmt.Printf("%sMatchAgainstInner(treeName=%#v, tokenIndex=%d)\n", strings.Repeat(" ", depth), treeName, tokenIndex) }

    matchResults := []Breadcrumb{}

    tree, exists := trees[treeName]
    if !exists {
      fmt.Printf("trees[%s] does not exist\n", treeName)
      return matchResults }

    // We're handling our own stack here. Start with the first node
    startingCursor := TokenMatchCursor {
      TreeCursor:   0,
      TokenCursor:  tokenIndex,
      Breadcrumbs:  []Breadcrumb{}, }

    cursors := []TokenMatchCursor{ startingCursor }
    for {
      // No more cursors to check against, quit
      if len(cursors) == 0 {
        return matchResults }

      // Pop off the current cursor
      cursor := cursors[0]
      cursors = cursors[1:]

      // Handle current cursor
      treeCursor   := cursor.TreeCursor
      tokenCursor  := cursor.TokenCursor
      treeNode     := tree[treeCursor]

      breadcrumbs  := append([]Breadcrumb{}, cursor.Breadcrumbs...)

      // If this is a token node, compare against the current token
      if (tokenCursor < len(tokens)) {
        if (tokenCursor > bestTokenCursor) { bestTokenCursor = tokenCursor }
        currentToken := tokens[tokenCursor]

        child, exists := treeNode.Tokens[currentToken]
        if exists {
          if (debug && false) {
            fmt.Printf("%sFound token node, %#v, %s[%d] = %d\n", strings.Repeat(" ", depth), currentToken, treeName, tokenCursor, child) }
          newCursor := TokenMatchCursor {
            TreeCursor:  child,
            TokenCursor: tokenCursor + 1,
            Breadcrumbs: breadcrumbs, }
          cursors = append(cursors, newCursor) } }

      // If this is a terminal node, add it to the results list
      if (treeNode.TerminalIndex != -1) {
        if (debug && false) {
          fmt.Printf("%sFound terminal node, %s[%d] = %d\n", strings.Repeat(" ", depth), treeName, treeCursor, treeNode.TerminalIndex) }
        matchResult := Breadcrumb {
          MatchReference: treeName,
          MatchIndex:     treeNode.TerminalIndex,
          TokenStart:     tokenIndex,
          TokenEnd:       tokenCursor,
          Breadcrumbs:    breadcrumbs, }
        matchResults = append(matchResults, matchResult) }

      // If this node has multiple child references, follow those
      for subTree, child := range(treeNode.References) {
        subdebug := debug
        if (debug) {
          memoString := fmt.Sprintf("%s:%d", subTree, tokenCursor)
          if _, ok := seen[memoString]; ok {
            subdebug = false }
          seen[memoString] = true
        }
        nodeResults := MatchAgainstInner(subTree, tokenCursor, depth + 1, subdebug)
        for _, result := range(nodeResults) {
          newCursor := TokenMatchCursor {
            TreeCursor:   child,
            TokenCursor:  result.TokenEnd,
            Breadcrumbs:  append(breadcrumbs, result), }
          cursors = append(cursors, newCursor) } }
    }
  }

  allMatchResults := MatchAgainstInner(treeName, 0, 0, debug)
  if (debug) {
    fmt.Printf("Best token match: %d\n", bestTokenCursor)
    for i := 0; i < bestTokenCursor; i++ {
      fmt.Printf("%s", tokens[i]); }
    fmt.Printf("\n");
  }
  matchResults := []Breadcrumb{}
  for _, result := range(allMatchResults) {
    if result.TokenEnd == len(tokens) {
      //CustomPrintTree(grammar, trees, result, 0)
      matchResults = append(matchResults, result) } }
  switch len(matchResults) {
  case 1:  return matchResults[0], nil
  case 0:  return Breadcrumb{},   errors.New("No match")
  default:
    for _, result := range(allMatchResults) {
      CustomPrintTree(grammar, trees, result, 0);
      fmt.Println(result)
    }
    return Breadcrumb{},   errors.New("More than one match")
  }

}

func OriginalTokenReTriesBestMatch(retries TokenReTries, treeName string, needle string, debug bool) (Breadcrumb, error) {
  // Globals
  nullCursor := TokenReTrieCursor{
    TreeName:    "",
    Node:        -1,
    Breadcrumbs: []Breadcrumb{},
    Stack:      nil }
  startCursor := newTokenReTrieCursor(treeName, &nullCursor)

  debugInner := debug // && false
  // debugInner := true

  tokens := split_re.FindAllString(needle, -1)

  if (debugInner && false) {
    fmt.Printf("Line: %#v\n", needle)
    fmt.Printf("Tokens: %#v\n", tokens) }

  cursors := TokenReTrieExpandCursors(retries, 0, startCursor, debugInner)
  for index, token := range(tokens) {

    if (debugInner) {
      fmt.Printf("Reading token [%d]: %#v\n", index, token)
      for cursorIndex, cursor := range(cursors) {
        fmt.Printf("Cursor[%d]: %s[%d]\n", cursorIndex, cursor.TreeName, cursor.Node)
      }
    }

    newCursors := []TokenReTrieCursor{}
    for _, cursor := range(cursors) {
      // We got to the top level early, don't expand
      if cursor.TreeName == "" { continue }

      tree := retries[cursor.TreeName][cursor.Node]

      if child, ok := tree.Tokens[token]; ok {
        newCursor := cursor
        newCursor.Node = child
        newCursors = append(newCursors, TokenReTrieExpandCursors(retries, index, newCursor, debugInner)...)
      }
    }
    cursors = newCursors

    if (len(cursors) == 0) {
      if (debugInner) {
        fmt.Printf("No match at cursor index %d '%s'", index, token); }
      break }
  }

  //fmt.Println(cursors)
  for _, cursor := range(cursors) {
    if cursor.Stack == nil {
      //fmt.Println(("Found final cursor"))
      resultBreadcrumb := cursor.Breadcrumbs[0]
      return resultBreadcrumb, nil
    }
  }

  return Breadcrumb{}, errors.New("No match")
}




// -----------------
// Utility functions
// -----------------

func HasSubstringAt(s string, sub string, cursor int) bool {
  if cursor > len(s) { return false }
  partial := s[cursor:]
  return strings.HasPrefix(partial, sub)
}

func CommonPrefix(a, b string) string {
  if len(a) > len(b) { return CommonPrefix(b, a) }
  for i := range(a) {
    if (a[i] != b[i]) { return a[:i] } }
  return a[:]
}

// -----------------




// -----------------


type TokenReTrieConfigureFunc = func(entry *TokenReTrieEntry)
func NewTokenReTrieEntry(configures ...TokenReTrieConfigureFunc) TokenReTrieEntry {
  entry := TokenReTrieEntry{
    References:    map[string]int{},
    Tokens:        map[string]int{},
    TerminalIndex: -1,
  }
  for _, configure := range(configures) {
    configure(&entry)
  }
  return entry
}


func (entry *TokenReTrieEntry) AddToken(s string, i int) {
  entry.Tokens[s] = i }

func (entry *TokenReTrieEntry) AddRef(r string, i int) {
  entry.References[r] = i  }

func (entry *TokenReTrieEntry) SetTerminal(r string, i int) {
  if entry.TerminalIndex != -1 {
    fmt.Println(r)
    panic("More than one terminal?") }
  entry.TerminalIndex = i }


// -----------------

