
[private]
@default:
  just --list --unsorted

BASE_DIR := justfile_directory()
TEMP_DIR := "/tmp/mtgish"

[private]
make_temp:
  #!/usr/bin/env bash
  mkdir -p {{TEMP_DIR}}

# --------------------------------
# Download and process latest data
# --------------------------------

[group('download')]
[doc("Download mtgjson data (this or scryfall, pick one)")]
download_mtgjson: make_temp
  #!/usr/bin/env bash
  curl https://mtgjson.com/api/v5/Meta.json                  | jq . > {{TEMP_DIR}}/Mtgjson-Meta-latest.json
  curl https://mtgjson.com/api/v5/AtomicCards.json.xz | unxz | jq . > {{TEMP_DIR}}/Mtgjson-AtomicCards-latest.json
  {{BASE_DIR}}/preprocess_mtgjson {{TEMP_DIR}}/Mtgjson-AtomicCards-latest.json > {{BASE_DIR}}/data/oracle.json

[group('download')]
[doc("Download scryfall data (this or mtgjson, pick one)")]
download_scryfall: make_temp
  #!/usr/bin/env bash
  curl -A "mtg-grammer-checker/0.1 (personal project, ran manually)" https://api.scryfall.com/bulk-data | jq . > {{TEMP_DIR}}/Scryfall-Bulk-Data-latest.json
  SCRYFALL_ORACLE_CARDS_URI=$( jq -r ".data | map(select(.name == \"Oracle Cards\"))[0].download_uri" {{TEMP_DIR}}/Scryfall-Bulk-Data-latest.json )
  curl -A "mtg-grammer-checker/0.1 (personal project, ran manually)" $SCRYFALL_ORACLE_CARDS_URI | jq . > {{TEMP_DIR}}/Scryfall-OracleCards-latest.json
  {{BASE_DIR}}/preprocess_scryfall {{TEMP_DIR}}/Scryfall-OracleCards-latest.json > {{BASE_DIR}}/data/oracle.json

# ------------------------
# Generate plural grammars
# ------------------------

[group('plurals')]
[doc("Single source of 'Zombie' <=> 'Zombies' plural mappings")]
plurals_generate:
  #!/usr/bin/env bash
  {{BASE_DIR}}/grammars/generate_plurals --english-grammar | jq -S . > {{BASE_DIR}}/grammars/english_grammar-type_line.json5
  {{BASE_DIR}}/grammars/generate_plurals --mtgish-grammar  | jq -S . > {{BASE_DIR}}/grammars/mtgish_grammar-type_line.json5
  {{BASE_DIR}}/grammars/generate_plurals --list-types                > {{BASE_DIR}}/typescript_types/subtypes.ts

# ---------------
# Generate mtgish
# ---------------

[group('parsing')]
[doc("Builds the go parser")]
parser_compile: make_temp
  #!/usr/bin/env bash
  cd {{BASE_DIR}}/go_mtg_parser/
    go build -o {{TEMP_DIR}}/go_mtg_parser
  cd {{BASE_DIR}}

[group('parsing')]
[doc("Shows cleaned up parser input for each card (used for debugging)")]
parser_show_input: plurals_generate parser_compile
  #!/usr/bin/env bash
  {{TEMP_DIR}}/go_mtg_parser \
    --ignore-list-file {{BASE_DIR}}/grammars/ignore.json5 \
    --short-names-file {{BASE_DIR}}/grammars/short_names.json5 \
    --find-replace-file {{BASE_DIR}}/grammars/find_replace.json5 \
    --english-grammar-files {{BASE_DIR}}/grammars/english_grammar*.json5 \
    --mtgish-grammar-files {{BASE_DIR}}/grammars/mtgish_grammar*.json5 \
    --mtgjson-files {{BASE_DIR}}/data/oracle.json \
                    {{BASE_DIR}}/data/dungeons.json \
    --print-preprocess \
    --stop-after-preprocess \
  > {{TEMP_DIR}}/preprocess.txt

[group('parsing')]
[doc("Checks all cards for syntax errors, outputing a grammar.failing.txt file")]
parser_check_grammar: plurals_generate parser_compile
  #!/usr/bin/env bash
  {{TEMP_DIR}}/go_mtg_parser \
    --ignore-list-file {{BASE_DIR}}/grammars/ignore.json5 \
    --short-names-file {{BASE_DIR}}/grammars/short_names.json5 \
    --find-replace-file {{BASE_DIR}}/grammars/find_replace.json5 \
    --english-grammar-files {{BASE_DIR}}/grammars/english_grammar*.json5 \
    --mtgish-grammar-files {{BASE_DIR}}/grammars/mtgish_grammar*.json5 \
    --mtgjson-files {{BASE_DIR}}/data/oracle.json \
                    {{BASE_DIR}}/data/dungeons.json \
    --report-unused-grammar-rules \
  > {{TEMP_DIR}}/grammar.failing.txt

[group('parsing')]
[doc("Debugs cards listed in data/debug.json5, showing one error at a time")]
parser_debug_subset: plurals_generate parser_compile
  #!/usr/bin/env bash
  {{TEMP_DIR}}/go_mtg_parser \
    --ignore-list-file {{BASE_DIR}}/grammars/ignore.json5 \
    --short-names-file {{BASE_DIR}}/grammars/short_names.json5 \
    --find-replace-file {{BASE_DIR}}/grammars/find_replace.json5 \
    --english-grammar-files {{BASE_DIR}}/grammars/english_grammar*.json5 \
    --mtgish-grammar-files {{BASE_DIR}}/grammars/mtgish_grammar*.json5 \
    --mtgjson-files {{BASE_DIR}}/data/oracle.json \
                    {{BASE_DIR}}/data/dungeons.json \
    --limit-to-subset {{BASE_DIR}}/data/debug.json5 \
    --debug-english \
    --debug-mtgish \
    --stop-after-first-failure

[group('parsing')]
[doc("Debugs cards listed in data/debug.json5, showing all cards with errors")]
parser_debug_remaining: plurals_generate parser_compile
  #!/usr/bin/env bash
  {{TEMP_DIR}}/go_mtg_parser \
    --ignore-list-file {{BASE_DIR}}/grammars/ignore.json5 \
    --short-names-file {{BASE_DIR}}/grammars/short_names.json5 \
    --find-replace-file {{BASE_DIR}}/grammars/find_replace.json5 \
    --english-grammar-files {{BASE_DIR}}/grammars/english_grammar*.json5 \
    --mtgish-grammar-files {{BASE_DIR}}/grammars/mtgish_grammar*.json5 \
    --mtgjson-files {{BASE_DIR}}/data/oracle.json \
                    {{BASE_DIR}}/data/dungeons.json \
    --limit-to-subset {{BASE_DIR}}/data/debug.json5

[group('parsing')]
[doc("Lists cards that pass/fail english parsing in data/debug.json5")]
parser_list_passing_english: plurals_generate parser_compile
  #!/usr/bin/env bash
  {{TEMP_DIR}}/go_mtg_parser \
    --ignore-list-file {{BASE_DIR}}/grammars/ignore.json5 \
    --short-names-file {{BASE_DIR}}/grammars/short_names.json5 \
    --find-replace-file {{BASE_DIR}}/grammars/find_replace.json5 \
    --english-grammar-files {{BASE_DIR}}/grammars/english_grammar*.json5 \
    --mtgish-grammar-files {{BASE_DIR}}/grammars/mtgish_grammar*.json5 \
    --mtgjson-files {{BASE_DIR}}/data/oracle.json \
                    {{BASE_DIR}}/data/dungeons.json \
    --limit-to-subset {{BASE_DIR}}/data/debug.json5 \
    --print-english \
    --continue-after-failures

[group('parsing')]
[doc("Generates mtgish.lines.ron. Only run if parser_check_grammar is clean")]
parser_generate_mtgish: plurals_generate parser_compile
  #!/usr/bin/env bash
  {{TEMP_DIR}}/go_mtg_parser \
    --ignore-list-file {{BASE_DIR}}/grammars/ignore.json5 \
    --short-names-file {{BASE_DIR}}/grammars/short_names.json5 \
    --find-replace-file {{BASE_DIR}}/grammars/find_replace.json5 \
    --english-grammar-files {{BASE_DIR}}/grammars/english_grammar*.json5 \
    --mtgish-grammar-files {{BASE_DIR}}/grammars/mtgish_grammar*.json5 \
    --mtgjson-files {{BASE_DIR}}/data/oracle.json \
                    {{BASE_DIR}}/data/dungeons.json \
    --print-mtgish \
  > {{BASE_DIR}}/data/mtgish.lines.ron

# ---------------------------------
# Convert mtgish.ron to mtgish.json
# ---------------------------------

[group('rust_binaries')]
[doc("Compile ronl -> pretty_ron converter")]
rust_build_ronl_to_pretty_ron:
  #!/usr/bin/env bash
  cd {{BASE_DIR}}/rust_syntax/
    cargo build --target-dir={{TEMP_DIR}} --features "ronl_to_pretty_ron" --bin rust_syntax
    cp {{TEMP_DIR}}/debug/rust_syntax {{TEMP_DIR}}/ronl_to_pretty_ron
  cd {{BASE_DIR}}

[group('rust_binaries')]
[doc("Compile ronl -> bincode converter")]
rust_build_ronl_to_bincode:
  #!/usr/bin/env bash
  cd {{BASE_DIR}}/rust_syntax/
    cargo build --target-dir={{TEMP_DIR}} --features "ronl_to_bincode" --bin rust_syntax
    cp {{TEMP_DIR}}/debug/rust_syntax {{TEMP_DIR}}/ronl_to_bincode
  cd {{BASE_DIR}}

[group('rust_binaries')]
[doc("Compile bincode -> json converter")]
rust_build_bincode_to_jsonl:
  #!/usr/bin/env bash
  cd {{BASE_DIR}}/rust_syntax/
    cargo build --target-dir={{TEMP_DIR}} --features "write_out_json"  --bin rust_syntax
    cp {{TEMP_DIR}}/debug/rust_syntax {{TEMP_DIR}}/bincode_to_jsonl
  cd {{BASE_DIR}}

[group('rust_binaries')]
[doc("Compile rust types -> ts bindings converter")]
rust_build_gen_ts_bindings:
  #!/usr/bin/env bash
  cd {{BASE_DIR}}/rust_syntax/
    cargo build --target-dir={{TEMP_DIR}} --message-format=json --tests --features "write_out_json" | jq -r 'select(.reason == "compiler-artifact") | select(.target.name == "rust_syntax") | .filenames[0]' > {{TEMP_DIR}}/ts_rs_filename
    cp `cat {{TEMP_DIR}}/ts_rs_filename` {{TEMP_DIR}}/generate_typescript_bindings
  cd {{BASE_DIR}}

[group('rust_binaries')]
[doc("Compile all rust converters")]
rust_build_all: rust_build_ronl_to_bincode rust_build_ronl_to_pretty_ron rust_build_bincode_to_jsonl rust_build_gen_ts_bindings
  @true

[group('convert')]
convert_to_ron_pretty:
  #!/usr/bin/env bash
  {{TEMP_DIR}}/ronl_to_pretty_ron data/mtgish.lines.ron > data/mtgish.pretty.ron

[group('convert')]
convert_to_json:
  #!/usr/bin/env bash
  {{TEMP_DIR}}/ronl_to_bincode    data/mtgish.lines.ron {{TEMP_DIR}}/mtgish.bincode
  {{TEMP_DIR}}/bincode_to_jsonl   {{TEMP_DIR}}/mtgish.bincode > data/mtgish.lines.json

[group('typescript')]
typescript_generate_bindings:
  #!/usr/bin/env bash
  cd {{TEMP_DIR}}
    rm -rf bindings
    {{TEMP_DIR}}/generate_typescript_bindings
  cd {{BASE_DIR}}
  cat {{TEMP_DIR}}/bindings/*.ts > typescript_types/oracle_cards.d.ts
  vim -S typescript_types/fix_generated_typescript.vim typescript_types/oracle_cards.d.ts

# -----------------------
# Check typescript output
# -----------------------

# This uses mtgish.lines.json and oracle_cards.d.ts to find unused and
#  unfound rules
# It's way faster (< 2 seconds) than running tsc (4 - 30 minutes), but you
#  should still run tsc after all the errors have been cleaned up.

[group('typescript')]
typescript_check_unused:
  #!/usr/bin/env bash
  {{BASE_DIR}}/check_unused_ts_types

# One giant mega-file is too large for the typescript compiler to handle,
#  split it into appropriate chunks
##./custom_split \
##  --header-file ./typescript_types/header.txt \
##  --footer-file ./typescript_types/footer.txt \
##  --line-prefix 'test.push(' \
##  --line-suffix ');' \
##  --lines 1000 \
##  data/mtgish.lines.json {{TEMP_DIR}}/cards- .ts

# Speed things up by running it over multiple processors,
#  and then wait.
# This takes ~3 minutes/file on my machine, but some files
#  are slow(?), at 12+ minutes/file. And there's almost
#  always one slow file per batch...
# This eats up RAM like crazy (~400 megs / thread over 26
#  files = 10 gigs), but CPU usage is a bigger bottleneck.
# Total time (deno check): 36 minutes (wall) / 126 minutes (cpu).
# Total time (bun + tsgo): 16 minutes (wall) /  57 minutes (cpu).
# Total time (node + tsc): 45 minutes (wall) / 162 minutes (cpu).
#  tsc      --noEmit <filename>
#  bun tsgo --noEmit <filename>
#  deno check        <filename>
# Note: deno check caches the results, so second runs are near
#  instant.
##cd {{TEMP_DIR}}
##  rm -f tsc_errors.txt
##
##  bun tsgo --noEmit cards-00.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-01.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-02.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-03.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-04.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-05.ts >> tsc_errors.txt 2>&1 &
##  wait
##
##  bun tsgo --noEmit cards-06.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-07.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-08.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-09.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-10.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-11.ts >> tsc_errors.txt 2>&1 &
##  wait
##
##  bun tsgo --noEmit cards-12.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-13.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-14.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-15.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-16.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-17.ts >> tsc_errors.txt 2>&1 &
##  wait
##
##  bun tsgo --noEmit cards-18.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-19.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-20.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-21.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-22.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-23.ts >> tsc_errors.txt 2>&1 &
##  wait
##
##  bun tsgo --noEmit cards-24.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-25.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-26.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-27.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-28.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-29.ts >> tsc_errors.txt 2>&1 &
##  wait
##
##  bun tsgo --noEmit cards-30.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-31.ts >> tsc_errors.txt 2>&1 &
##  bun tsgo --noEmit cards-32.ts >> tsc_errors.txt 2>&1 &
##  wait
##cd {{BASE_DIR}}

# You can take the tsc_errors.txt file and do some formatting of it to
#  output a smaller errors.tsc file to help update oracle_cards.d.ts.
# The formatting process is:
#  :% ! sort
#  trim out the lines that don't begin with "card-##.ts(##,####): error"
#  :%s/^\(cards-\d*.ts\)(\(\d*\),.*/sed -n "\2p" \1 >> errors.ts/
# The script you generate will look like:
#    sed -n "283p" cards-11.ts >> errors.ts
#  where 283 is the line number from tsc_errors.txt
#
# $ cat ../typescript_types/header.txt > errors.ts
# $ sh tsc_errors.txt
# $ cat ../typescript_types/footer.txt >> errors.ts

# -------------
# Build website
# -------------

## mkdir -p {{TEMP_DIR}}/web
## mkdir -p {{TEMP_DIR}}/web/data
## mkdir -p {{TEMP_DIR}}/web/typescript
##
## ln --force --symbolic $PWD/CNAME                                           {{TEMP_DIR}}/web
##
## ln --force --symbolic $PWD/data/dungeons.json                              {{TEMP_DIR}}/web/data/dungeons.json
## ln --force --symbolic $PWD/data/oracle.json                                {{TEMP_DIR}}/web/data/oracle.json
## ln --force --symbolic $PWD/data/version.json                               {{TEMP_DIR}}/web/data/version.json
##
## ln --force --symbolic $PWD/grammars/find_replace.json5                     {{TEMP_DIR}}/web/data/find_replace.json5
## ln --force --symbolic $PWD/grammars/ignore.json5                           {{TEMP_DIR}}/web/data/ignore.json5
## ln --force --symbolic $PWD/grammars/short_names.json5                      {{TEMP_DIR}}/web/data/short_names.json5
##
## ln --force --symbolic $PWD/grammars/english_grammar.json5                  {{TEMP_DIR}}/web/data/english_grammar.json5
## ln --force --symbolic $PWD/grammars/english_grammar-INPUT.json5            {{TEMP_DIR}}/web/data/english_grammar-INPUT.json5
## ln --force --symbolic $PWD/grammars/english_grammar-ability_word.json5     {{TEMP_DIR}}/web/data/english_grammar-ability_word.json5
## ln --force --symbolic $PWD/grammars/english_grammar-counters.json5         {{TEMP_DIR}}/web/data/english_grammar-counters.json5
## ln --force --symbolic $PWD/grammars/english_grammar-flavor_word.json5      {{TEMP_DIR}}/web/data/english_grammar-flavor_word.json5
## ln --force --symbolic $PWD/grammars/english_grammar-named_cards.json5      {{TEMP_DIR}}/web/data/english_grammar-named_cards.json5
## ln --force --symbolic $PWD/grammars/english_grammar-null_text.json5        {{TEMP_DIR}}/web/data/english_grammar-null_text.json5
## ln --force --symbolic $PWD/grammars/english_grammar-reminder_text.json5    {{TEMP_DIR}}/web/data/english_grammar-reminder_text.json5
## ln --force --symbolic $PWD/grammars/english_grammar-type_line.json5        {{TEMP_DIR}}/web/data/english_grammar-type_line.json5
##
## ln --force --symbolic $PWD/grammars/mtgish_grammar.json5                   {{TEMP_DIR}}/web/data/mtgish_grammar.json5
## ln --force --symbolic $PWD/grammars/mtgish_grammar-create_tokens.json5     {{TEMP_DIR}}/web/data/mtgish_grammar-create_tokens.json5
## ln --force --symbolic $PWD/grammars/mtgish_grammar-mana.json5              {{TEMP_DIR}}/web/data/mtgish_grammar-mana.json5
## ln --force --symbolic $PWD/grammars/mtgish_grammar-named_cards.json5       {{TEMP_DIR}}/web/data/mtgish_grammar-named_cards.json5
## ln --force --symbolic $PWD/grammars/mtgish_grammar-triggers.json5          {{TEMP_DIR}}/web/data/mtgish_grammar-triggers.json5
## ln --force --symbolic $PWD/grammars/mtgish_grammar-type_line.json5         {{TEMP_DIR}}/web/data/mtgish_grammar-type_line.json5
## ln --force --symbolic $PWD/grammars/mtgish_grammar-vote_option.json5       {{TEMP_DIR}}/web/data/mtgish_grammar-vote_option.json5
##
## ln --force --symbolic $PWD/typescript_types/oracle_cards.d.ts              {{TEMP_DIR}}/web/typescript/oracle_cards.d.ts
## ln --force --symbolic $PWD/typescript_types/subtypes.ts                    {{TEMP_DIR}}/web/typescript/subtypes.ts
##
## ln --force --symbolic $PWD/web_src/autocomplete.css                        {{TEMP_DIR}}/web
## ln --force --symbolic $PWD/web_src/card-display.css                        {{TEMP_DIR}}/web
## ln --force --symbolic $PWD/web_src/horizontal_progress.css                 {{TEMP_DIR}}/web
## ln --force --symbolic $PWD/web_src/vertical_progress.css                   {{TEMP_DIR}}/web
## ln --force --symbolic $PWD/web_src/index.css                               {{TEMP_DIR}}/web
##
## ln --force --symbolic $PWD/web_src/about.html                              {{TEMP_DIR}}/web
## ln --force --symbolic $PWD/web_src/index.html                              {{TEMP_DIR}}/web
## ln --force --symbolic $PWD/web_src/card-display.html                       {{TEMP_DIR}}/web
##
## ln --force --symbolic $PWD/web_src/card_parser.js                          {{TEMP_DIR}}/web
##
## ln --force --symbolic $PWD/web_src/third_party                             {{TEMP_DIR}}/web

# -------------
# Build website
# -------------

# The website built above is full of sym-links, which don't cooperate with surge, make a non-symlink version
##rsync --archive --copy-links {{TEMP_DIR}}/web/ {{TEMP_DIR}}/web_deploy

# ----------------
# Tidy up grammars
# ----------------

##cd ./grammars/
###Purposely don't tidy certain files:
### bun json5 english_grammar-INPUT.json5         | LC_ALL=C jq -S . | sponge english_grammar-INPUT.json5
### bun json5 mtgish_grammar-create_tokens.json5  | LC_ALL=C jq -S . | sponge mtgish_grammar-create_tokens.json5
### bun json5 mtgish_grammar-vote_option.json5    | LC_ALL=C jq -S . | sponge mtgish_grammar-vote_option.json5
##
##  bun json5 english_grammar.json5               | LC_ALL=C jq -S . | sponge english_grammar.json5
##  bun json5 english_grammar-ability_word.json5  | LC_ALL=C jq -S . | sponge english_grammar-ability_word.json5
##  bun json5 english_grammar-counters.json5      | LC_ALL=C jq -S . | sponge english_grammar-counters.json5
##  bun json5 english_grammar-flavor_word.json5   | LC_ALL=C jq -S . | sponge english_grammar-flavor_word.json5
##  bun json5 english_grammar-named_cards.json5   | LC_ALL=C jq -S . | sponge english_grammar-named_cards.json5
##  bun json5 english_grammar-null_text.json5     | LC_ALL=C jq -S . | sponge english_grammar-null_text.json5
##  bun json5 english_grammar-reminder_text.json5 | LC_ALL=C jq -S . | sponge english_grammar-reminder_text.json5
##  bun json5 english_grammar-type_line.json5     | LC_ALL=C jq -S . | sponge english_grammar-type_line.json5
##
##  bun json5 mtgish_grammar.json5                | LC_ALL=C jq -S . | sponge mtgish_grammar.json5
##  bun json5 mtgish_grammar-mana.json5           | LC_ALL=C jq -S . | sponge mtgish_grammar-mana.json5
##  bun json5 mtgish_grammar-named_cards.json5    | LC_ALL=C jq -S . | sponge mtgish_grammar-named_cards.json5
##  bun json5 mtgish_grammar-triggers.json5       | LC_ALL=C jq -S . | sponge mtgish_grammar-triggers.json5
##  bun json5 mtgish_grammar-type_line.json5      | LC_ALL=C jq -S . | sponge mtgish_grammar-type_line.json5
##cd {{BASE_DIR}}
