
// Main
package main

import "log"
import "fmt"
//import "strings"
//import "sort"
//import "regexp"
//import "strconv"
//import "errors"
import "os"

// ------------------------------------------------------------------------- //

var usage = `
Usage:
  ./go_jsoncc --help
  ./go_jsoncc FILE_NAME
`
// ------------------------------------------------------------------------- //

func main() {
  // --------------------------------------------------------------------- //
  if (len(os.Args) != 2) {
    fmt.Printf(usage)
    os.Exit(0)
  }
  if (os.Args[1] == "--help") {
    fmt.Printf(usage)
    os.Exit(0)
  }
  // --------------------------------------------------------------------- //

  filename := os.Args[1]

  contentJsonc, err := os.ReadFile(filename)
  if err != nil { log.Fatal(err) }

  content := ToJSONInPlace(contentJsonc)

  fmt.Println(string(content))
}

// ------------------------------------------------------------------------- //

