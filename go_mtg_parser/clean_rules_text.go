
package main

import "strings"
import "fmt"

var findReplaceUsed []bool
var findReplaceUsedInitialized = false

type FindReplaceEntry struct {
  Reason   string          `json:"reason"`
  Find     string          `json:"find"`
  Replace  string          `json:"replace"`
  Cards    []string        `json:"cards"`
}

var findReplaceReasons = []FindReplaceEntry{}

func initializeFindReplaceUsed() {
  if findReplaceUsedInitialized == false {
    findReplaceUsed = make([]bool, len(findReplaceReasons))
    for i := 0 ; i < len(findReplaceUsed) ; i++ {
      findReplaceUsed[i] = false
    }
    findReplaceUsedInitialized = true
  }
}

func cleanTypeText(text string, name string) string {
  initializeFindReplaceUsed()

  text = strings.ReplaceAll(text, "—", "-")
  text = strings.ReplaceAll(text, "’", "'")

  for i := 0 ; i < len(findReplaceReasons); i++ {
    findStr    := findReplaceReasons[i].Find
    replaceStr := findReplaceReasons[i].Replace
    reasonStr  := findReplaceReasons[i].Reason
    if strings.Contains(text, findStr) {
      text = strings.ReplaceAll(text, findStr, replaceStr)
      if (false){
        fmt.Printf("FIND_REPLACE - %s // %#v // %s\n", name, findStr, reasonStr) }
      findReplaceUsed[i] = true
    }
  }

  return text
}

func cleanRulesText(text string, name string) string {
  initializeFindReplaceUsed()

  // ----------------------------------------------
  // --              General Cleanup             --
  // ----------------------------------------------

  // Fix quoted strings to make parsing more consistent
  text = strings.ReplaceAll(text, ".'\"", "'\".")
  text = strings.ReplaceAll(text, ".\"",   "\".")
  text = strings.ReplaceAll(text, ",\"",   "\",")

  // Cleaved text in []'s is similar to quoted text
  text = strings.ReplaceAll(text, ".]",   "].")

  // The Attraction specific action "Claim the prize!"'s '!' is similar
  text = strings.ReplaceAll(text, "prize!",   "prize.")

  // Simplify emdash and bullet
  text = strings.ReplaceAll(text, "—",  "-")
  text = strings.ReplaceAll(text, "•",  "*")

  for i := 0 ; i < len(findReplaceReasons); i++ {
    findStr    := findReplaceReasons[i].Find
    replaceStr := findReplaceReasons[i].Replace
    reasonStr  := findReplaceReasons[i].Reason
    if strings.Contains(text, findStr) {
      text = strings.ReplaceAll(text, findStr, replaceStr)
      if (false){
        fmt.Printf("FIND_REPLACE - %s // %#v // %s\n", name, findStr, reasonStr) }
      findReplaceUsed[i] = true
    }
  }

  return text
}

func reportUnusedCleanRulesText() {
  for i := 0 ; i < len(findReplaceUsed) ; i++ {
    if findReplaceUsed[i] == false {
      fmt.Printf("NOT USED CLEAN RULE: %s\n", findReplaceReasons[i]);
    }
  }
}
