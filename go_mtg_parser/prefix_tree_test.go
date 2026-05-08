
package main

import (
	"testing"
)

// -----------------
// Algorithm Helpers
// -----------------

func TestCommonPrefix(t *testing.T) {
  check := func(a, b, expected string) {
    result := CommonPrefix(a, b)
    if !(result == expected) {
      t.Errorf("CommonPrefix('%s', '%s') ; Got '%s' ; Expected '%s'", a, b, result, expected) }
  }

  check("hello", "hello", "hello")
  check("hello", "world", ""     )
  check("hello", "he"   , "he"   )
  check("he"   , "hello", "he"   )
}

// -----------------------------------------
