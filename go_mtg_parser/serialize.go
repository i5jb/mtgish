package main

import "log"
import "encoding/json"
import "os"
import "fmt"

func lineAndCharacter(input string, offset int) (line int, character int, err error) {
  lf := rune(0x0A)

  if offset > len(input) || offset < 0 {
    return 0, 0, fmt.Errorf("couldn't find offset %d within the input", offset)
  }

  // Humans tend to count from 1.
  line = 1

  for i, b := range input {
    if b == lf {
      line++
      character = 0
    }
    character++
    if i == offset {
      break
    }
  }

  return line, character, nil
}

func ReportJsonError(filename string, content []byte, err error) {
  if jsonError, ok := err.(*json.SyntaxError); ok {
    line, character, lcErr := lineAndCharacter(string(content), int(jsonError.Offset))
    fmt.Fprintf(os.Stderr, "Cannot parse JSON file '%s' due to a syntax error at line %d, character %d: %v\n", filename, line, character, jsonError.Error())
    if lcErr != nil {
      fmt.Fprintf(os.Stderr, "Couldn't find the line and character position of the error due to error %v\n", lcErr)
    }
    return
  }
  if unmarshalError, ok := err.(*json.UnmarshalTypeError); ok {
    line, character, lcErr := lineAndCharacter(string(content), int(unmarshalError.Offset))
    fmt.Fprintf(os.Stderr, "Cannot parse JSON file '%s' due to an unmarshal error at line %d, character %d: %v\n", filename, line, character, unmarshalError.Error())
    if lcErr != nil {
      fmt.Fprintf(os.Stderr, "Couldn't find the line and character position of the error due to error %v\n", lcErr)
    }
    return
  }
  if err != nil {
    fmt.Fprintf(os.Stderr, "%v\n", err)
  }
}

func ReadJsoncMap[T any](filename string) map[string]T {
  contentJsonc, err := os.ReadFile(filename)
  if err != nil { log.Fatal(err) }

  content := ToJSONInPlace(contentJsonc)

  var obj map[string]T
  err = json.Unmarshal(content, &obj)
  ReportJsonError(filename, contentJsonc, err)
  if err != nil {
    log.Fatalf("%v: %v\n", filename, err) }

  return obj
}

func ReadJsoncArray[T any](filename string) []T {
  contentJsonc, err := os.ReadFile(filename)
  if err != nil { log.Fatal(err) }

  content := ToJSONInPlace(contentJsonc)

  var payload []T
  err = json.Unmarshal(content, &payload)
  ReportJsonError(filename, content, err)
  if err != nil {
    log.Fatalf("%v: %v\n", filename, err) }

  return payload
}

func PrintJson[T any](value T) {
  out, _ := json.MarshalIndent(value, "", "  ")
  fmt.Println(string(out))
}

