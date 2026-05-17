
// Main
package main

import "fmt"
import "strings"
import "sort"
import "regexp"
import "strconv"
import "errors"
import "os"

// ------------------------------------------------------------------------- //

var usage = `
Usage:
  ./go_mtg_parser
    --ignore-list-file      FILE_NAME    # json5 [ 'CARD_NAME', ... ]
    --short-names-file      FILE_NAME    # json5 { 'LONG_NAME': 'SHORT_NAME', ... }
    --find-replace-file     FILE_NAME    # json5 [ 'FIND', 'REPLACE', 'EXPLAIN', ... ]
    --english-grammar-files FILE_LIST    # json5 { '{{NAME}}': ['MATCH', 'OUTPUT', ... ], ... }
    --mtgjson-grammar-files FILE_LIST    # json5 { '{{NAME}}': ['MATCH', 'OUTPUT', ... ], ... }
    --mtgjson-files         FILE_LIST    # json  ; see README

    [--limit-to-subset       FILE_NAME]  json5 [ 'CARD_NAME', ... ]

    [--stop-after-first-failure | --continue-after-failures]
    [--print-preprocess |
     --print-english | --print-mtgish |
     --print-json5 | --print-typescript]
    [--stop-after-preprocess
    --stop-after-english
    --stop-after-mtgish
    --stop-after-none]
    [--debug-english]
    [--debug-mtgish]
    [--report-unused-grammar-rules]
`
// ------------------------------------------------------------------------- //

var Config_IgnoreListFilename      = ""
var Config_ShortNamesFilename      = ""
var Config_FindReplaceFilename     = ""
var Config_EnglishGrammarFilenames = []string {}
var Config_MtgishGrammarFilenames  = []string {}
var Config_MtgjsonFilenames        = []string {}

var Config_LimitToSubset = false
var Config_SubsetFile    = ""

var Config_StopAfterFirstFailure = false

var Config_PrintOutput = []string {}
var Config_StopAfter   = "none"

var Config_DebugEnglish = false
var Config_DebugMtgish  = false

var Config_ReportUnused = false

// ------------------------------------------------------------------------- //

func readArguments() {
  current_state := ""
  for _, arg := range(os.Args[1:]) {
    if (arg == "--help") {
      fmt.Printf(usage)
      os.Exit(0)
    }

    // Required
    if (arg == "--ignore-list-file")            { current_state = arg ; Config_IgnoreListFilename      = ""         ; continue }
    if (arg == "--short-names-file")            { current_state = arg ; Config_ShortNamesFilename      = ""         ; continue }
    if (arg == "--find-replace-file")           { current_state = arg ; Config_FindReplaceFilename     = ""         ; continue }
    if (arg == "--english-grammar-files")       { current_state = arg ; Config_EnglishGrammarFilenames = []string{} ; continue }
    if (arg == "--mtgish-grammar-files")        { current_state = arg ; Config_MtgishGrammarFilenames  = []string{} ; continue }
    if (arg == "--mtgjson-files")               { current_state = arg ; Config_MtgjsonFilenames        = []string{} ; continue }

    // Optional
    if (arg == "--limit-to-subset")             { current_state = arg ; Config_LimitToSubset          = true  ; Config_SubsetFile = "" ; continue }

    // Optional Flags
    if (arg == "--stop-after-first-failure")    { current_state = ""  ; Config_StopAfterFirstFailure  = true  ; continue }
    if (arg == "--continue-after-failures")     { current_state = ""  ; Config_StopAfterFirstFailure  = false ; continue }

    if (arg == "--stop-after-preprocess")       { current_state = ""  ; Config_StopAfter = "preprocess" ; continue }
    if (arg == "--stop-after-english")          { current_state = ""  ; Config_StopAfter = "english"    ; continue }
    if (arg == "--stop-after-mtgish")           { current_state = ""  ; Config_StopAfter = "mtgish"     ; continue }
    if (arg == "--stop-after-none")             { current_state = ""  ; Config_StopAfter = "none"       ; continue }

    if (arg == "--print-preprocess")            { current_state = ""  ; Config_PrintOutput = append(Config_PrintOutput, "preprocess") ; continue }
    if (arg == "--print-english")               { current_state = ""  ; Config_PrintOutput = append(Config_PrintOutput, "english")    ; continue }
    if (arg == "--print-mtgish")                { current_state = ""  ; Config_PrintOutput = append(Config_PrintOutput, "mtgish")     ; continue }
    // if (arg == "--print-json5")                 { current_state = ""  ; Config_PrintOutput = append(Config_PrintOutput, "json5")      ; continue }
    // if (arg == "--print-typescript")            { current_state = ""  ; Config_PrintOutput = append(Config_PrintOutput, "typescript") ; continue }

    if (arg == "--debug-english")               { current_state = ""  ; Config_DebugEnglish = true  ; continue }
    if (arg == "--debug-mtgish")                { current_state = ""  ; Config_DebugMtgish  = true  ; continue }

    if (arg == "--report-unused-grammar-rules") { current_state = ""  ; Config_ReportUnused = true  ; continue }

    // -------------------------------------

    if (current_state == "--ignore-list-file")      { Config_IgnoreListFilename  = arg ; current_state = "" ; continue }
    if (current_state == "--short-names-file")      { Config_ShortNamesFilename  = arg ; current_state = "" ; continue }
    if (current_state == "--find-replace-file")     { Config_FindReplaceFilename = arg ; current_state = "" ; continue }
    if (current_state == "--limit-to-subset")       { Config_SubsetFile          = arg ; current_state = "" ; continue }
    if (current_state == "--english-grammar-files") { Config_EnglishGrammarFilenames = append(Config_EnglishGrammarFilenames, arg) ; continue }
    if (current_state == "--mtgish-grammar-files")  { Config_MtgishGrammarFilenames  = append(Config_MtgishGrammarFilenames,  arg) ; continue }
    if (current_state == "--mtgjson-files")         { Config_MtgjsonFilenames        = append(Config_MtgjsonFilenames,        arg) ; continue }

    fmt.Printf("Unexpected argument '%s\n\n", arg)
    fmt.Printf(usage)
    os.Exit(-1)
  }
}

// ------------------------------------------------------------------------- //

func Contains(haystack []string, needle string) bool {
  for _, element := range haystack {
    if element == needle {
      return true } }
  return false
}

// ------------------------------------------------------------------------- //

func Filter[T any](list []T, filterFunc func(T) bool) []T {
  result := []T{}
  for _, item := range list {
    if filterFunc(item) {
      result = append(result, item) } }
  return result
}

// ------------------------------------------------------------------------- //

type UsedTemplates map[string][]int

func InitUsedTemplates(grammar TemplatesAndResults) UsedTemplates {
  usedTemplates := make(UsedTemplates)
  for name, templateAndResult := range(grammar) {
    usedTemplates[name] = make([]int, len(templateAndResult.TemplateStrings))
    for i := range(usedTemplates[name]) {
      usedTemplates[name][i] = 0 } }
  return usedTemplates
}

func ReportUnused(usedTemplates UsedTemplates, tokens []string, breadcrumb Breadcrumb, name string) {
  matchReference := breadcrumb.MatchReference
  matchIndex     := breadcrumb.MatchIndex
  if matchReference == "" { return }

  // if (matchReference == "CommaName") { fmt.Printf("{{CommaName}} = %s\n", name) }
  // if (matchReference == "CardACommaName") { fmt.Printf("{{CardACommaName}} = %s\n", name) }
  // if (matchReference == "CardBCommaName") { fmt.Printf("{{CardBCommaName}} = %s\n", name) }
  // if (matchReference == "CardABCommaName") { fmt.Printf("{{CardABCommaName}} = %s\n", name) }

   usedTemplates[matchReference][matchIndex]++
  for _, sub_breadcrumb := range breadcrumb.Breadcrumbs {
    ReportUnused(usedTemplates, tokens, sub_breadcrumb, name) }
}

func ReportUnusedTemplates(usedTemplates UsedTemplates, templatesAndResults TemplatesAndResults) {
  reportCounts := false
  reportUnused := true

  ignore := []string {
    // English grammar ignores
    "FullName" , "~" ,

    "Number" , "Digits" ,

    "Clue" ,
    "Curse" ,
    "Land" ,
    "Trap" ,

    "Lands" ,
    "Creatures" ,
    "Zombies" ,
    "Curses" ,
    "Swamps" ,
    "Traps" ,
    "Clues" ,

    "NonBlack" ,

    // Mtgish grammar ignores
    "VOTE_OPTION" , // Dupes of 'Death_', 'Time_', and 'Money_'
  }

  keys := make([]string, 0, len(usedTemplates))
  for k := range usedTemplates {
    keys = append(keys, k)
  }
  sort.Strings(keys)

  for _, name := range(keys) {
    intArray := usedTemplates[name]
    if Contains(ignore, name) { continue }

    if reportCounts {
      for index, used := range(intArray) {
        line := templatesAndResults[name].TemplateStrings[index]
        fmt.Printf( "Template[%s][%#v] = %d\n", name, line, used) } }

    if reportUnused {
      for index, used := range(intArray) {
        if used == 0 {
          line := templatesAndResults[name].TemplateStrings[index]
          line  = strings.Replace(line, "\n", "\\n", -1)
          fmt.Printf( "Unused template[%s] = '%s'\n", name, line) } } }
  }
}

// ------------------------------------------------------------------------- //

type MtgJsonAtomic struct {
  Name           string `json:"name,omitempty"`
  ManaCost       string `json:"manaCost,omitempty"`
  Type           string `json:"type,omitempty"`
  Text           string `json:"text,omitempty"`
  Power          string `json:"power,omitempty"`
  Toughness      string `json:"toughness,omitempty"`
  Loyalty        string `json:"loyalty,omitempty"`
  Defense        string `json:"defense,omitempty"`
  Life           string `json:"life,omitempty"`
  Hand           string `json:"hand,omitempty"`
  ColorIndicator string `json:"colorIndicator,omitempty"`
}

type MtgJsonEntry struct {
  Name   string          `json:"name"`
  Layout string          `json:"layout"`
  Melded string          `json:"melded,omitempty"`
  Token  string          `json:"token,omitempty"`
  SharedTypeline string  `json:"shared_typeline,omitempty"`
  Cards  []MtgJsonAtomic `json:"cards"`
}



// ------------------------------------------------------------

func LoadTemplatesFor(TemplateAndResultPairs map[string]string) TemplateAndResult {
  templateStrings := []string{}
  resultStrings   := []string{}
  variables       := [][]ExtractedTemplateInformation{}
  for template_string, result_string := range TemplateAndResultPairs {
    templateStrings = append(templateStrings, template_string)
    resultStrings   = append(resultStrings, result_string)
    variables       = append(variables, ExtractTemplateVariables(result_string))
  }
  result := TemplateAndResult {
    TemplateStrings: templateStrings,
    ResultStrings:   resultStrings,
    TemplateVariables: variables,
  }
  return result
}

// ------------------------------------------------------------

func ReadGrammarJsoncFiles(filenames []string) TemplatesAndResults {
  templatesAndResults := make(TemplatesAndResults)

  for _, filename := range(filenames) {
    templateAndResultStrings := ReadJsoncMap[map[string]string](filename)
    for key, value := range(templateAndResultStrings) {
      if !strings.HasPrefix(key, "{{") { panic("Invalid key") }
      if !strings.HasSuffix(key, "}}") { panic("Invalid key") }
      key = key[2:len(key)-2]
      if (false) { fmt.Println(key) }
      templatesAndResults[key] = LoadTemplatesFor(value) } }

  return templatesAndResults
}

// ------------------------------------------------------------------------- //

type CardInfo struct {
  Card               MtgJsonEntry
  Name               string
  EnglishText        string
  EnglishTokens      []string
  EnglishBreadcrumbs Breadcrumb
  EnglishErr         error
  MtgishText         string
  MtgishTokens       []string
  MtgishBreadcrumbs  Breadcrumb
  MtgishErr          error
  JsonText           string
}

// ------------------------------------------------------------------------- //

func CreateTokenReTriesFromTemplatesAndResults(templatesAndResults TemplatesAndResults) TokenReTries {
  result := make(map[string]TokenReTrie)
  for templateName, templateAndResult := range(templatesAndResults) {
    result[templateName] = BuildTokenReTrie(templateName, templateAndResult.TemplateStrings) }
  return result
}


var templateFinder            = regexp.MustCompile(`{{(.+?)}}`)
var templateWithIndexSplitter = regexp.MustCompile(`(.+?)\[(\d+)]$`)
var functionWithArgsSplitter  = regexp.MustCompile(`(.+?)\((.*?)\)$`)

func ExtractTemplateVariables(templateResultString string) []ExtractedTemplateInformation {
  extractedTemplates := []ExtractedTemplateInformation{}

  templateStrings := templateFinder.FindAllStringSubmatch(templateResultString, -1)
  for _, templateString := range(templateStrings) {
    rootTemplate := templateString[1]

    templateWithIndex := templateWithIndexSplitter.FindAllStringSubmatch(rootTemplate, -1)
    if len(templateWithIndex) == 0 {
      extractedTemplate := ExtractedTemplateInformation{
        RootTemplate: rootTemplate,
        MatchTemplate: "",
        MatchIndex: -1,
        Variables: make(map[string]string),
      }
      extractedTemplates = append(extractedTemplates, extractedTemplate)
      continue
    }

    matchTemplate    := templateWithIndex[0][1]
    matchIndexString := templateWithIndex[0][2]

    matchIndex, _    := strconv.Atoi(matchIndexString)

    functionWithArgs := functionWithArgsSplitter.FindAllStringSubmatch(matchTemplate, -1)
    if len(functionWithArgs) == 0 {
      extractedTemplate := ExtractedTemplateInformation{
        RootTemplate:  rootTemplate,
        MatchTemplate: matchTemplate,
        MatchIndex:    matchIndex,
        Variables:     make(map[string]string),
      }
      extractedTemplates = append(extractedTemplates, extractedTemplate)
      continue
    }

    functionName := functionWithArgs[0][1]
    fullArgsList := functionWithArgs[0][2]

    variables := make(map[string]string)
    argNames := []string{}

    individualArgs := strings.Split(fullArgsList, ",")
    for _, individualArg := range(individualArgs) {
      splitArg := strings.Split(individualArg, "=")

      if len(splitArg) != 2  {
        fmt.Printf("Invalid arg %s for '%s'\n", individualArg, templateResultString)
        continue
      }

      argName  := splitArg[0]
      argValue := splitArg[1]

      argNames  = append(argNames, splitArg[0])

      variables[argName] = argValue
    }

    simplifiedMatchTemplate := fmt.Sprintf("%s(%s)", functionName, strings.Join(argNames, ","))

    extractedTemplate := ExtractedTemplateInformation{
      RootTemplate:  rootTemplate,
      MatchTemplate: simplifiedMatchTemplate,
      MatchIndex:    matchIndex,
      Variables:     variables,
    }
    extractedTemplates = append(extractedTemplates, extractedTemplate)
    continue
  }

  return extractedTemplates
}

func GetBreadcrumb(breadcrumbs []Breadcrumb, matchTemplate string, matchIndex int) (Breadcrumb, error) {
  foundIndex := 0
  for _, breadcrumb := range breadcrumbs {
    if breadcrumb.MatchReference == matchTemplate {
      if foundIndex == matchIndex {
        return breadcrumb, nil
      }
      foundIndex = foundIndex + 1
    }
  }
  return Breadcrumb{}, errors.New("Breadcrumb not found")
}

// This takes a grammar with rules like:
//  {{GREETING}}:
//    "Hello, {{NAME}}": "Greeting(Hello, {{NAME[0]}})"
//  {{NAME}}:
//    "Alice": "AliceTheUnstoppable"
//    "Bob":   "BobbyTheGreat"
//
// The rules, like {{GREETING}} and {{NAME}} are indexed using tree.NameToNumber
// And the rows of each template are also index ("Alice" is 0, "Bob" is 1 ; "Hello, {{NAME}}" is 0)
//
// When a rule has successfully parsed an input like:
//   "Hello, Bob"
// It creates a result parse tree. MatchReference is the treeNumber, and MatchIndex is the row.
// The subtree is contained in a number of Breadcrumbs

func EvalMatch(templatesAndResults TemplatesAndResults, breadcrumb Breadcrumb, outsideVariables map[string]string, globalVariables map[string]string) string {
  matchReference := breadcrumb.MatchReference
  matchIndex     := breadcrumb.MatchIndex

  if matchReference == "" { return "" }

  resultString := templatesAndResults[matchReference].ResultStrings[matchIndex]

  //templateString := templatesAndResults[matchReference].TemplateStrings[matchIndex]
  //fmt.Printf("Evaluating string %s[%d] = '%#v' / '%s', with variables %#v and globals %v\n", matchReference, matchIndex, templateString, resultString, outsideVariables, globalVariables)

  //extractedTemplates := ExtractTemplateVariables(resultString)
  extractedTemplates := templatesAndResults[matchReference].TemplateVariables[matchIndex]

  variables := make(map[string]string)

  for variableName, variableValue := range(globalVariables) {
    variables[variableName] = variableValue
  }

  for _, template := range(extractedTemplates) {
    rootTemplate          := template.RootTemplate
    templateMatchTemplate := template.MatchTemplate
    templateMatchIndex    := template.MatchIndex

    templateVariables := make(map[string]string)
    for variableName, variableValue := range(template.Variables) {
      if strings.HasPrefix(variableValue, "^") {
        templateVariables[variableName] = outsideVariables[variableValue[1:]]
      } else {
        templateVariables[variableName] = variableValue
      }
    }

    if template.MatchTemplate == "" {
      if outsideValue, ok := globalVariables[rootTemplate] ; ok {
        variables[rootTemplate] = outsideValue
        //fmt.Printf("variable1 %s = %s\n", rootTemplate, outsideValue)
        continue
      }
      if outsideValue, ok := outsideVariables[rootTemplate] ; ok {
        variables[rootTemplate] = outsideValue
        //fmt.Printf("variable2 %s = %s\n", rootTemplate, outsideValue)
        continue
      }
      fmt.Printf("Unknown variable '%s' in %s[%d] = %s\n", rootTemplate, matchReference, matchIndex, resultString)
      continue
    }

    sub_breadcrumb, err := GetBreadcrumb(breadcrumb.Breadcrumbs, templateMatchTemplate, templateMatchIndex)
    if err != nil {
      fmt.Printf("Unknown breadcrumb variable '%s[%d] in %s[%d] = %s'\n", templateMatchTemplate, templateMatchIndex, matchReference, matchIndex, resultString)
      continue
    }
    // fmt.Printf("Found breadcrumb for '%s[%d]': %v\n", templateMatchTemplate, templateMatchIndex, sub_breadcrumb)
    variables[rootTemplate] = EvalMatch(templatesAndResults, sub_breadcrumb, templateVariables, globalVariables)
  }

  for name, value := range(variables) {
    variableName := fmt.Sprintf("{{%s}}", name)
    resultString = strings.ReplaceAll(resultString, variableName, value)
  }

  return resultString
}

// ------------------------------------------------------------------------- //

func getLine(face MtgJsonAtomic) string {
  face.Text = cleanRulesText(face.Text, face.Name)
  face.Type = cleanTypeText(face.Type, face.Name)

  line := ""
  line = line + face.Name;
  if (face.Type != "") {
    line = line + "\n" + face.Type; }
  if (face.ManaCost != "") {
    line = line + "\n" + face.ManaCost; }
  if (face.ColorIndicator != "") {
    line = line + "\n" + "Color Indicator: " + face.ColorIndicator; }
  if (face.Text != "") {
    line = line + "\n" + face.Text; }
  if (face.Power != "" && face.Toughness != "") {
    line = line + "\n" + face.Power + "/" + face.Toughness }
  if (face.Defense != "") {
    line = line + "\n" + "Defense: " + face.Defense; }
  if (face.Loyalty != "") {
    line = line + "\n" + face.Loyalty; }
  if (face.Life != "" && face.Hand != "") {
    line = line + "\n" + "Life" + face.Life + " / Hand" + face.Hand; }

  return line
}

func getEnglishText(card MtgJsonEntry) (string, error) {
  switch len(card.Cards) {
    case 0: {
      var header string
      switch card.Layout {
        case "token_def": header = "Token Definition" + "\n\n"
        default:
          return "", fmt.Errorf("Unknown Card layout: %s", card.Layout) }
      token_text := cleanRulesText(card.Token, card.Name);
      fullCardLine := header + card.Name + "\n\n" + token_text
      return fullCardLine, nil
    }
    case 1: {
      var header string
      switch card.Layout {
        case "meld_piece": header = "Melds Into: " + card.Melded + "\n\n"
        case "melded":     header = "Melded" + "\n\n"
        case "single":     header = ""
        default:
          return "", fmt.Errorf("Unknown Card layout: %s", card.Layout) }

      fullCardLine := header + getLine(card.Cards[0])
      return fullCardLine, nil
    }

    case 2: {
      // fmt.Printf("Starting card: %s\n", card.Name)
      var header string
      header = "ERROR\n\n" + card.Name + "\n\n"
      switch card.Layout {
        case "room":
          card.SharedTypeline = cleanTypeText(card.SharedTypeline, card.Cards[0].Name + " // " + card.Cards[1].Name)
          header = "Room\n\n" + card.SharedTypeline + "\n\n" ;
        case "split":     header = "Split\n\n" ;
        case "flip":      header = "Flip\n\n" ;
        case "adventurer":
          if ((card.Cards[1].Type == "Instant — Adventure") ||
              (card.Cards[1].Type == "Sorcery — Adventure")) {
            header = "Adventurer\n\n" ;
          }
        case "ominous":
          if ((card.Cards[1].Type == "Instant — Omen") ||
              (card.Cards[1].Type == "Sorcery — Omen")) {
            header = "Ominous\n\n" ;
          }
        case "preparer":
          if ((card.Cards[1].Type == "Instant") ||
              (card.Cards[1].Type == "Sorcery")) {
            header = "Preparer\n\n" ;
          }

        case "modal_dfc": header = "Modal DFC\n\n" ;
        case "transform": header = "Transform\n\n" ;
        default:
          return "", fmt.Errorf("Unknown Card layout: %s", card.Layout) }

      fullCardLine := header + getLine(card.Cards[0]) + "\n\n" + getLine(card.Cards[1])
      return fullCardLine, nil
    }

    default: {
      return "", errors.New("Unknown number of Card parts") } }
}

func ParseCard(englishGrammar TemplatesAndResults, englishGrammarTree TokenReTries, mtgishGrammar TemplatesAndResults, mtgishGrammarTree TokenReTries, shortNames map[string]string, jsonEntry MtgJsonEntry) (CardInfo, error) {
  getLongName   := func(cardname string) string {   // Alternate cards: "A-Skull Skaab" => "Skull Skaab"
    splitName := strings.Split(cardname, "A-")
    if (len(splitName) > 1) {
      return splitName[1] }
    return cardname }
  getCommaName := func (longname string) string {   // Try easy case: "Chandra, Fire of Kaladesh" => "Chandra"
    splitName := strings.Split(longname, ", ")
    if (len(splitName) > 1) {
      return splitName[0] }
    return "" }
  getShortName := func (longname string) string {   // Special cases: "Gorm the Great" => "Gorm"
    if shortName, ok := shortNames[longname]; ok {
      return shortName }
    return "" }

  processEnglishText := func(englishText string) (Breadcrumb, error) {
    match, err := TokenReTriesBestMatch(englishGrammar, englishGrammarTree, "FullCard", englishText, false)
    if (err != nil) {
      return Breadcrumb{}, err }
    return match, nil }

  updateGrammarTree := func(card MtgJsonEntry) {
    englishGrammarTree["FullName"]        = BuildTokenReTrie("FullName",        []string{"|FullName|"})
    englishGrammarTree["LongName"]        = BuildTokenReTrie("LongName",        []string{"|LongName|"})
    englishGrammarTree["ShortName"]       = BuildTokenReTrie("ShortName",       []string{"|ShortName|"})
    englishGrammarTree["CommaName"]       = BuildTokenReTrie("CommaName",       []string{"|CommaName|"})
    englishGrammarTree["CardAFullName"]   = BuildTokenReTrie("CardAFullName",   []string{"|CardAFullName|"})
    englishGrammarTree["CardBFullName"]   = BuildTokenReTrie("CardBFullName",   []string{"|CardBFullName|"})
    englishGrammarTree["CardALongName"]   = BuildTokenReTrie("CardALongName",   []string{"|CardALongName|"})
    englishGrammarTree["CardBLongName"]   = BuildTokenReTrie("CardBLongName",   []string{"|CardBLongName|"})
    englishGrammarTree["CardAShortName"]  = BuildTokenReTrie("CardAShortName",  []string{"|CardAShortName|"})
    englishGrammarTree["CardBShortName"]  = BuildTokenReTrie("CardBShortName",  []string{"|CardBShortName|"})
    englishGrammarTree["CardACommaName"]  = BuildTokenReTrie("CardACommaName",  []string{"|CardACommaName|"})
    englishGrammarTree["CardBCommaName"]  = BuildTokenReTrie("CardBCommaName",  []string{"|CardBCommaName|"})
    englishGrammarTree["CardABCommaName"] = BuildTokenReTrie("CardABCommaName", []string{"|CardABCommaName|"})

    switch len(card.Cards) {
    case 1:
      cardName  := card.Cards[0].Name
      longName  := getLongName(cardName)
      shortName := getShortName(longName)
      commaName := getCommaName(longName)

      englishGrammarTree["FullName"]  = BuildTokenReTrie("FullName", []string{cardName})
      englishGrammarTree["LongName"]  = BuildTokenReTrie("LongName", []string{longName})
      if (shortName != "") { englishGrammarTree["ShortName"] = BuildTokenReTrie("ShortName", []string{shortName }) }
      if (commaName != "") { englishGrammarTree["CommaName"] = BuildTokenReTrie("CommaName", []string{commaName }) }
    case 2:
      cardNameA  := card.Cards[0].Name
      longNameA  := getLongName(cardNameA)
      shortNameA := getShortName(longNameA)
      commaNameA := getCommaName(longNameA)

      cardNameB  := card.Cards[1].Name
      longNameB  := getLongName(cardNameB)
      shortNameB := getShortName(longNameB)
      commaNameB := getCommaName(longNameB)

      //fmt.Printf("Names = %s, %s, %s, %s ;; %s, %s, %s, %s\n", cardNameA , longNameA , shortNameA , commaNameA , cardNameB , longNameB , shortNameB , commaNameB)

      englishGrammarTree["CardAFullName"]  = BuildTokenReTrie("CardAFullName",  []string{cardNameA})
      englishGrammarTree["CardBFullName"]  = BuildTokenReTrie("CardBFullName",  []string{cardNameB})
      englishGrammarTree["CardALongName"]  = BuildTokenReTrie("CardALongName",  []string{longNameA})
      englishGrammarTree["CardBLongName"]  = BuildTokenReTrie("CardBLongName",  []string{longNameB})
      englishGrammarTree["CardAShortName"] = BuildTokenReTrie("CardAShortName", []string{shortNameA})
      englishGrammarTree["CardBShortName"] = BuildTokenReTrie("CardBShortName", []string{shortNameB})
      if (commaNameA == commaNameB) {
        if (commaNameA != "") { englishGrammarTree["CardABCommaName"] = BuildTokenReTrie("CardABCommaName", []string{commaNameA}) }
      } else {
        if (commaNameA != "") { englishGrammarTree["CardACommaName"] = BuildTokenReTrie("CardACommaName", []string{commaNameA}) }
        if (commaNameB != "") { englishGrammarTree["CardBCommaName"] = BuildTokenReTrie("CardBCommaName", []string{commaNameB}) }
      }
    }
  }

  updateGrammar := func(card MtgJsonEntry) {
    if len(card.Cards) == 0 {
      englishGrammar["FullName"]      = LoadTemplatesFor(map[string]string {"|FullName|": ""})
      englishGrammar["CardAFullName"] = LoadTemplatesFor(map[string]string {"|CardAFullName|": ""})
      englishGrammar["CardBFullName"] = LoadTemplatesFor(map[string]string {"|CardAFullName|": ""})
    } else if len(card.Cards) == 1 {
      englishGrammar["FullName"]      = LoadTemplatesFor(map[string]string {card.Cards[0].Name: fmt.Sprintf("%#v", card.Cards[0].Name)})
      englishGrammar["CardAFullName"] = LoadTemplatesFor(map[string]string {"|CardAFullName|": ""})
      englishGrammar["CardBFullName"] = LoadTemplatesFor(map[string]string {"|CardAFullName|": ""})
    } else if len(card.Cards) >= 2 {
      englishGrammar["FullName"]      = LoadTemplatesFor(map[string]string {"|FullName|": ""})
      englishGrammar["CardAFullName"] = LoadTemplatesFor(map[string]string {card.Cards[0].Name: fmt.Sprintf("%#v", card.Cards[0].Name)})
      englishGrammar["CardBFullName"] = LoadTemplatesFor(map[string]string {card.Cards[1].Name: fmt.Sprintf("%#v", card.Cards[1].Name)})
    }
  }

  debugCheckEnglish := func(err error, card MtgJsonEntry, englishText string) {
    if (err == nil) {
      // fmt.Printf("PASS %s\n", card.Name)
      if (Contains(Config_PrintOutput, "english")) {
        fmt.Printf("PASS %s\n", card.Name) }
    } else {
      Config_ReportUnused = false

      fullCardLineDisplay1 := strings.Replace(englishText, "\n", "@", -1)
      fmt.Printf("FAIL %s | %s \n", card.Name, fullCardLineDisplay1)

      if (Config_DebugEnglish) {
        fmt.Printf("%s\n%s\n\n%s\n\n", err.Error(), fullCardLineDisplay1, englishText)
        _, _ = TokenReTriesBestMatch(englishGrammar, englishGrammarTree, "FullCard", englishText, true)
      }
    }
  }

  debugCheckMtgish := func(err error, card MtgJsonEntry, englishText string, mtgishText string) {
    englishTextSingleLine  := strings.Replace(englishText, "\n", "@", -1)
    mtgishTextSingleLine := strings.Replace(mtgishText, "\n", "@", -1)

    if err == nil {
      if (Contains(Config_PrintOutput, "mtgish")) {
        fmt.Printf("%s\n", mtgishTextSingleLine) }
    } else {
      if Config_DebugMtgish {
        fmt.Printf("FAIL (%s): %s\n", err.Error(), card.Name)
        fmt.Printf("%s\n", mtgishTextSingleLine)
        fmt.Printf("%s\n", englishText)
        TokenReTriesBestMatch(mtgishGrammar, mtgishGrammarTree, "FULL_CARD", mtgishTextSingleLine, true)
      } else {
        fmt.Printf("FAIL: %s | %s -> %s\n", card.Name, englishTextSingleLine, mtgishTextSingleLine)
      }
    }
  }

  // Get Card Info
  cardInfo := CardInfo { Card: jsonEntry }
  cardInfo.Name = jsonEntry.Name

  // Update Grammar
  updateGrammar(jsonEntry)
  updateGrammarTree(jsonEntry)

  // Pre-process English Text
  englishText, err := getEnglishText(jsonEntry)
  if (err != nil) {
    cardInfo.EnglishErr = err
    return cardInfo, err }
  cardInfo.EnglishText = englishText

  if (Contains(Config_PrintOutput, "preprocess")) {
    fmt.Printf("-------------------------\n")
    fmt.Printf("%s\n\n", cardInfo.EnglishText)
    return cardInfo, err }

  // Parse English Text
  englishTokens := GetTokens(englishText)
  cardInfo.EnglishTokens = englishTokens

  englishBreadcrumbs, err := processEnglishText(englishText)
  debugCheckEnglish(err, jsonEntry, englishText)
  if (err != nil) {
    cardInfo.EnglishErr = err
    return cardInfo, err }

  cardInfo.EnglishBreadcrumbs = englishBreadcrumbs

  if (Contains(Config_PrintOutput, "english")) {
    return cardInfo, err }

  // Generate Mtgish
  mtgishText := EvalMatch(englishGrammar, englishBreadcrumbs, map[string]string{}, map[string]string{"~": fmt.Sprintf("%#v", jsonEntry.Name) })
  cardInfo.MtgishText = mtgishText

  // Parse Mtgish
  mtgishTokens := GetTokens(mtgishText)
  cardInfo.MtgishTokens = mtgishTokens

  mtgishBreadcrumbs, err := TokenReTriesBestMatch(mtgishGrammar, mtgishGrammarTree, "FULL_CARD", mtgishText, false)
  debugCheckMtgish(err, jsonEntry, englishText, mtgishText)
  if (err != nil) {
    cardInfo.MtgishErr = err
    return cardInfo, err }

  cardInfo.MtgishBreadcrumbs = mtgishBreadcrumbs

  if (Contains(Config_PrintOutput, "mtgish")) {
    return cardInfo, err }

  // Generate json5
  jsonText := EvalMatch(mtgishGrammar, mtgishBreadcrumbs, map[string]string{}, map[string]string{})
  // if (Contains(Config_PrintOutput, "typescript")) {
  //   fmt.Printf("test.set(%#v, %s)\n", jsonEntry.Name, jsonText) }
  // if (Contains(Config_PrintOutput, "json5")) {
  //   fmt.Printf(" %s ,\n", jsonText) }

  cardInfo.JsonText = jsonText

  return cardInfo, nil
}





func printCard(cards []MtgJsonEntry, cardname string) {
  for _, card := range(cards) {
    if card.Name == cardname {
      PrintJson(card) } } }

func makeSelfPairs(singles []string) map[string]string {
  result := map[string]string {}
  for i := range(singles) {
    result[singles[i]] = singles[i] }
  return result
}

func main() {
  readArguments()

  // Load all data
  englishGrammar     := ReadGrammarJsoncFiles(Config_EnglishGrammarFilenames)
  mtgishGrammar      := ReadGrammarJsoncFiles(Config_MtgishGrammarFilenames)
  ignoreCards        := ReadJsoncArray[string](Config_IgnoreListFilename)
  shortNames         := ReadJsoncMap[string](Config_ShortNamesFilename)
  findReplaceReasons  = ReadJsoncArray[FindReplaceEntry](Config_FindReplaceFilename)

  jsonCards := []MtgJsonEntry{}
  for _, mtgjson_filename := range(Config_MtgjsonFilenames) {
    jsonCardsForThisFile := ReadJsoncArray[MtgJsonEntry](mtgjson_filename)
    jsonCards = append(jsonCards, jsonCardsForThisFile...)
  }

  // Helper Functions
  ignore        := func(card MtgJsonEntry) bool {
    is_ignore := Contains(ignoreCards, card.Name)
    return !is_ignore
  }

  cardsOfInterest    := []string{}
  if (Config_LimitToSubset) {
    cardsOfInterest = ReadJsoncArray[string](Config_SubsetFile) }
  limitToSubset := func(card MtgJsonEntry) bool { return  Contains(cardsOfInterest, card.Name) }

  // Pre-processing
  jsonCards = Filter(jsonCards, ignore)
  if (Config_LimitToSubset) {
    jsonCards = Filter(jsonCards, limitToSubset) }

  cardNames := []string{}
  for _, fullcard := range(jsonCards) {
    for _, card := range(fullcard.Cards) {
      if card.Type == "Stickers" { continue }
      cardNames = append(cardNames, fmt.Sprintf("%#v", card.Name)) } }
  mtgishGrammar["QUOTED_NAME"] = LoadTemplatesFor(makeSelfPairs(cardNames))

  englishGrammarTree := CreateTokenReTriesFromTemplatesAndResults(englishGrammar)
  mtgishGrammarTree  := CreateTokenReTriesFromTemplatesAndResults(mtgishGrammar)

  // if (Contains(Config_PrintOutput, "json5")) {
  //   fmt.Printf("[\n") }

  results := []CardInfo{}
  for _, jsonCard := range(jsonCards) {
    //fmt.Printf("Processing: %s\n", jsonCard.Name);
    cardInfo, err := ParseCard(englishGrammar, englishGrammarTree, mtgishGrammar, mtgishGrammarTree, shortNames, jsonCard)
    if (err != nil) {
      if (Config_StopAfterFirstFailure) {
        //fmt.Printf("Stopping after first failure: %s, %#v\n", jsonCard.Name, err);
        return
      }
      //fmt.Printf("Success: %s\n", jsonCard.Name);
      continue
    }
    results = append(results, cardInfo)
  }

  // if (Contains(Config_PrintOutput, "json5")) {
  //   fmt.Printf("]\n") }

  if (Config_LimitToSubset == false) {
    reportUnusedCleanRulesText() }

  if (Config_ReportUnused) {
    if (!(Config_StopAfter == "preprocess")) {
      usedEnglishTemplates := InitUsedTemplates(englishGrammar)
      for i := range(results) {
        ReportUnused(usedEnglishTemplates, results[i].EnglishTokens, results[i].EnglishBreadcrumbs, results[i].Name)
      }
      ReportUnusedTemplates(usedEnglishTemplates, englishGrammar)
    }

    if (!(Config_StopAfter == "english" || Config_StopAfter == "mtgish")) {
      usedMtgishTemplates := InitUsedTemplates(mtgishGrammar)
      for i := range(results) {
        ReportUnused(usedMtgishTemplates, results[i].MtgishTokens, results[i].MtgishBreadcrumbs, "_")
      }
      ReportUnusedTemplates(usedMtgishTemplates, mtgishGrammar)
    }
  }
}

// ------------------------------------------------------------------------- //

