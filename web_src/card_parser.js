
importScripts("./third_party/json5.umd.js")

let ignore_list     = undefined
let short_names     = undefined
let find_replace    = undefined
let atomic_cards    = undefined
let english_grammar = undefined
let mtgish_grammar  = undefined

let english_grammar_tree = undefined
let mtgish_grammar_tree  = undefined

let parsed_cards    = undefined
let parsed_output   = undefined
let parsed_mtgish   = undefined

// ======================================================================================
// Download external data files
// ======================================================================================
async function DownloadData() {
  async function RequestData(requestURL) {
    const request = new Request("data/" + requestURL);
    //const response = await fetch(request, { cache: "reload" });
    const response = await fetch(request);
    const text = await response.text();
    const result = JSON5.parse(text);

    return result
  }

  const atomic_cards_filenames = [
    "dungeons.json",
    "oracle.json",
  ] 
  const english_grammar_filenames = new Array(
    "english_grammar.json5",
    "english_grammar-INPUT.json5",
    "english_grammar-ability_word.json5",
    "english_grammar-counters.json5",
    "english_grammar-flavor_word.json5",
    "english_grammar-named_cards.json5",
    "english_grammar-null_text.json5",
    "english_grammar-reminder_text.json5",
    "english_grammar-type_line.json5",
  )
  const ignore_list_filename = "ignore.json5"
  const find_replace_filename = "find_replace.json5"
  const short_names_filename = "short_names.json5"
  const mtgish_grammar_filenames = new Array(
    "mtgish_grammar.json5",
    "mtgish_grammar-create_tokens.json5",
    "mtgish_grammar-mana.json5",
    "mtgish_grammar-named_cards.json5",
    "mtgish_grammar-triggers.json5",
    "mtgish_grammar-type_line.json5",
    "mtgish_grammar-vote_option.json5",
  )

  // --------------------------------------------------------------------------------------
  // Load data
  // --------------------------------------------------------------------------------------
  postMessage(["starting download", "ignore_list"])  ; ignore_list  = new Set(await RequestData(ignore_list_filename))                 ; postMessage(["downloads", "ignore_list",  ignore_list])
  postMessage(["starting download", "short_names"])  ; short_names  = new Map(Object.entries(await RequestData(short_names_filename))) ; postMessage(["downloads", "short_names",  short_names])
  postMessage(["starting download", "find_replace"]) ; find_replace = new Array(... await RequestData(find_replace_filename))          ; postMessage(["downloads", "find_replace", find_replace])

  postMessage(["starting download", "atomic_cards"])
  let atomic_cards_base = new Array()
  for (const filename of atomic_cards_filenames) {
    atomic_cards_base.push(... await RequestData(filename)) }

  atomic_cards = new Array()
  for (const card_of_interest of atomic_cards_base) {
    if (ignore_list.has(card_of_interest.name)) {
      continue }
    // if (card_of_interest.name != "Xander's Wake") { continue }
    atomic_cards.push(card_of_interest) }
  postMessage(["downloads", "atomic_cards", atomic_cards])

  postMessage(["starting download", "english_grammar"])
  let english_grammar_files = new Array()
  for (const filename of english_grammar_filenames) {
    english_grammar_files.push(new Map(Object.entries(await RequestData(filename)))) }
  english_grammar = CombineGrammarFiles(english_grammar_files)
  postMessage(["downloads", "english_grammar", english_grammar])

  postMessage(["starting download", "mtgish_grammar"])
  let mtgish_grammar_files = new Array()
  for (const filename of mtgish_grammar_filenames) {
    mtgish_grammar_files.push(new Map(Object.entries(await RequestData(filename)))) }
  mtgish_grammar = CombineGrammarFiles(mtgish_grammar_files)

  let quoted_card_names = new Map()
  for (const full_card of atomic_cards) {
    for (const card of full_card.cards) {
      if (card["type"] == "Stickers") { continue }
      quoted_card_names.set(JSON.stringify(card.name), "") } }
  mtgish_grammar.set("QUOTED_NAME", quoted_card_names)

  postMessage(["downloads", "mtgish_grammar", mtgish_grammar])

}

function CombineGrammarFiles(grammar_files) {
  let grammar = new Map()
  for (let data of grammar_files) {
    for (const [templateName, templateData] of data) {
      let templateDataMap = new Map(Object.entries(templateData))
      let output = new Map()
      for(let [templateString, resultString] of templateDataMap) {
        output.set(templateString, resultString) }
      grammar.set(templateName.slice(2,-2), output)
    }
  }
  return grammar
}

// ======================================================================================
// Parse Files
// ======================================================================================
async function BuildTrees() {
  postMessage(["building grammar tree"])
  english_grammar_tree = new Map()
  for (const [templateName, templates] of english_grammar) {
    english_grammar_tree.set(templateName, BuildTokenReTrie(templates))
  }
  mtgish_grammar_tree = new Map()
  for (const [templateName, templates] of mtgish_grammar) {
    mtgish_grammar_tree.set(templateName, BuildTokenReTrie(templates))
  }
  postMessage(["done building grammar tree"])
}

function PrepareEnglishGrammarForCard(card_of_interest) {
  if (card_of_interest.cards.length == 1) {
    const cardName  = card_of_interest.cards[0].name
    english_grammar.get("FullName").set(cardName, JSON.stringify(cardName))
  }

  if (card_of_interest.cards.length == 2) {
    const cardNameA  = card_of_interest.cards[0].name
    const cardNameB  = card_of_interest.cards[1].name
    english_grammar.get("CardAFullName").set(cardNameA, JSON.stringify(cardNameA))
    english_grammar.get("CardBFullName").set(cardNameB, JSON.stringify(cardNameB))
  }
}



function PrepareEnglishGrammarTreeForCard(card_of_interest) {
  english_grammar_tree.set("FullName",        BuildTokenReTrie(new Map([["|FullName|", ""]])))
  english_grammar_tree.set("LongName",        BuildTokenReTrie(new Map([["|LongName|", ""]])))
  english_grammar_tree.set("ShortName",       BuildTokenReTrie(new Map([["|ShortName|", ""]])))
  english_grammar_tree.set("CommaName",       BuildTokenReTrie(new Map([["|CommaName|", ""]])))
  english_grammar_tree.set("SemicName",       BuildTokenReTrie(new Map([["|SemicName|", ""]])))
  english_grammar_tree.set("CardAFullName",   BuildTokenReTrie(new Map([["|CardAFullName|", ""]])))
  english_grammar_tree.set("CardBFullName",   BuildTokenReTrie(new Map([["|CardBFullName|", ""]])))
  english_grammar_tree.set("CardALongName",   BuildTokenReTrie(new Map([["|CardALongName|", ""]])))
  english_grammar_tree.set("CardBLongName",   BuildTokenReTrie(new Map([["|CardBLongName|", ""]])))
  english_grammar_tree.set("CardAShortName",  BuildTokenReTrie(new Map([["|CardAShortName|", ""]])))
  english_grammar_tree.set("CardBShortName",  BuildTokenReTrie(new Map([["|CardBShortName|", ""]])))
  english_grammar_tree.set("CardACommaName",  BuildTokenReTrie(new Map([["|CardACommaName|", ""]])))
  english_grammar_tree.set("CardBCommaName",  BuildTokenReTrie(new Map([["|CardBCommaName|", ""]])))
  english_grammar_tree.set("CardABCommaName", BuildTokenReTrie(new Map([["|CardABCommaName|", ""]])))

  if (card_of_interest.cards.length == 1) {
    const cardName  = card_of_interest.cards[0].name
    const longName  = getLongName(cardName)
    const shortName = getShortName(longName)
    const commaName = getCommaName(longName)

    english_grammar_tree.set("FullName",  BuildTokenReTrie(new Map([[cardName, cardName]])))
    english_grammar_tree.set("LongName",  BuildTokenReTrie(new Map([[longName, ""]])))
    if (shortName) { english_grammar_tree.set("ShortName", BuildTokenReTrie(new Map([[shortName, ""]]))) }
    if (commaName) { english_grammar_tree.set("CommaName", BuildTokenReTrie(new Map([[commaName, ""]]))) }
  }

  if (card_of_interest.cards.length == 2) {
    const cardNameA  = card_of_interest.cards[0].name
    const longNameA  = getLongName(cardNameA)
    const shortNameA = getShortName(longNameA)
    const commaNameA = getCommaName(longNameA)

    const cardNameB  = card_of_interest.cards[1].name
    const longNameB  = getLongName(cardNameB)
    const shortNameB = getShortName(longNameB)
    const commaNameB = getCommaName(longNameB)

    english_grammar_tree.set("CardAFullName",  BuildTokenReTrie(new Map([[cardNameA, cardNameA]])))
    english_grammar_tree.set("CardBFullName",  BuildTokenReTrie(new Map([[cardNameB, cardNameB]])))
    english_grammar_tree.set("CardALongName",  BuildTokenReTrie(new Map([[longNameA, ""]])))
    english_grammar_tree.set("CardBLongName",  BuildTokenReTrie(new Map([[longNameB, ""]])))
    if (shortNameA) { english_grammar_tree.set("CardAShortName", BuildTokenReTrie(new Map([[shortNameA, ""]]))) }
    if (shortNameB) { english_grammar_tree.set("CardBShortName", BuildTokenReTrie(new Map([[shortNameB, ""]]))) }
    if (commaNameA && commaNameB && commaNameA == commaNameB) {
      english_grammar_tree.set("CardABCommaName", BuildTokenReTrie(new Map([[commaNameA, ""]])))
    } else {
      if (commaNameA) { english_grammar_tree.set("CardACommaName", BuildTokenReTrie(new Map([[commaNameA, ""]]))) }
      if (commaNameB) { english_grammar_tree.set("CardBCommaName", BuildTokenReTrie(new Map([[commaNameB, ""]]))) }
    }
  }

}

async function ParseEnglishData() {
  postMessage(["starting english parse"])
  parsed_cards = new Map()
  let num_cards_parsed = 0
  for (let card_of_interest of atomic_cards) {
    if (ignore_list.has(card_of_interest.name)) { continue }

//    if (false ||
//        (card_of_interest.name == "Chandra, Fire of Kaladesh // Chandra, Roaring Flame") ||
//        (card_of_interest.name == "Dryad Arbor") ||
//        false) {} else { continue }

//    if (card_of_interest.name != "A-Alrund, God of the Cosmos // A-Hakka, Whispering Raven") {
//      continue
//    }

    let cardLine = GetFullLine(card_of_interest)

    PrepareEnglishGrammarTreeForCard(card_of_interest)
    let parsed_card = TokenReTriesMatch(english_grammar_tree, "FullCard", cardLine)
    if (parsed_card == undefined) {
      console.log("Error parsing card -- ", card_of_interest, cardLine)
      continue
    }
    parsed_cards.set(card_of_interest.name, { Card: card_of_interest, Text: cardLine, Match: parsed_card })

    num_cards_parsed = num_cards_parsed + 1

    if (num_cards_parsed % 25 == 0) {
      postMessage(["number of cards parsed", num_cards_parsed]) }
    //if (num_cards_parsed >= 10) {
    //  break }
  }
  postMessage(["number of cards parsed", num_cards_parsed])

  postMessage(["done english parse"])
}

async function ParseMtgishData() {
  postMessage(["starting mtgish parse"])
  parsed_mtgish = new Map()
  let num_cards_parsed = 0
  for (let [cardname, mtgish] of parsed_output) {
    let parsed = TokenReTriesMatch(mtgish_grammar_tree, "FULL_CARD", mtgish)
    if (!parsed) {
      console.log("Bad parse?", cardname)
      debugger
      continue }

    parsed_mtgish.set(cardname, parsed)

    num_cards_parsed = num_cards_parsed + 1

    if (num_cards_parsed % 25 == 0) {
      postMessage(["number of mtgish parsed", num_cards_parsed]) }
  }
  postMessage(["number of mtgish parsed", num_cards_parsed])

  postMessage(["done mtgish parse"])
}



function evalTree(breadcrumb, outsideVariables, globalVariables) {
  function getBreadcrumb(breadcrumbs, matchTemplate, matchIndex) {
    let foundSoFar = 0
    for(const breadcrumb of breadcrumbs) {
      if (breadcrumb.MatchReference == matchTemplate) {
        if (foundSoFar == matchIndex) {
          return breadcrumb }
        foundSoFar++; } }
    return undefined
  }

  if (!breadcrumb) {
    console.log(breadcrumb)
    console.log(outsideVariables)
    console.log(globalVariables)
    debugger
  }
  const outputTemplate = english_grammar.get(breadcrumb.MatchReference).get(breadcrumb.MatchIndex)
  if (!outputTemplate) {
    console.log(english_grammar)
    console.log(breadcrumb)
    debugger }
  let splitTemplate = outputTemplate.split(outputTemplateFinder)

  let outputStrings = new Array()
  for (let j = 0; j < splitTemplate.length; j++) {
    let substring = splitTemplate[j]
    if (j % 2 == 0) {
      outputStrings.push(substring)
    } else {
      const templateWithIndex = substring.match(templateWithIndexSplitter)
      if (!templateWithIndex) {
        // Raw Variable
        let variableName = substring
        let variableValue = undefined

        if (globalVariables.has(variableName)) {
          variableValue = globalVariables.get(variableName)
        } else if (outsideVariables.has(variableName)) {
          variableValue = outsideVariables.get(variableName)
        }
        outputStrings.push(variableValue)
        continue;
      }

      const matchTemplate    = templateWithIndex[1]
      const matchIndexString = templateWithIndex[2]
      const matchIndex       = parseInt(matchIndexString)

      const functionWithArgs = matchTemplate.match(functionWithArgsSplitter)
      if (!functionWithArgs) {
        // Local Sub-Match
        let subBreadcrumb = getBreadcrumb(breadcrumb.Breadcrumbs, matchTemplate, matchIndex);
        outputStrings.push(evalTree(subBreadcrumb, new Map(), globalVariables));
        continue;
      }

      // Function with args
      const functionName = functionWithArgs[1]
      const fullArgsList = functionWithArgs[2]
      const individualArgs = fullArgsList.split(",")

      let variables = new Map()
      for (const individualArg of individualArgs) {
        const splitArg = individualArg.split("=")
        const argName  = splitArg[0]
        const argValue = splitArg[1]

        if (argValue[0] == "^") {
          variables.set(argName, outsideVariables.get(argValue.slice(1)))
        } else {
          variables.set(argName, argValue)
        }
      }

      const simplifiedMatchTemplate = functionName + "(" + Array.from(variables.keys()).join(",") + ")"
      let subBreadcrumb = getBreadcrumb(breadcrumb.Breadcrumbs, simplifiedMatchTemplate, matchIndex)

      outputStrings.push(evalTree(subBreadcrumb, variables, globalVariables))
      continue;
    }
  }

  const output = outputStrings.join("")
  return output
}


async function GenerateMTGish() {
  postMessage(["starting output mtgish"])

  let number_of_outputs_produced = 0
  parsed_output = new Map()
  for (const [card_name, parse_info] of parsed_cards) {
    PrepareEnglishGrammarForCard(parse_info.Card)

    const output = evalTree(parse_info.Match, new Map(), new Map([["~", JSON.stringify(card_name)]]))
    parsed_output.set(card_name, output)

    number_of_outputs_produced++;
    if (number_of_outputs_produced % 25 == 0) {
      postMessage(["number of outputs produced", number_of_outputs_produced]) }
  }
  postMessage(["number of outputs produced", number_of_outputs_produced])

  postMessage(["done output mtgish"])
}

async function Setup() {
  await DownloadData()
  await BuildTrees()
  await ParseEnglishData()
  await GenerateMTGish()
  await ParseMtgishData()
  postMessage(["done"])
}


onmessage = function(e) {
  if (e.data[0] == "setup") {
    Setup()
  }
  if (e.data[0] == "get card names") {
    let card_names = new Array()
    for (const cardname of parsed_cards.keys()) {
      card_names.push(cardname) }
    postMessage(["get card names result", card_names])
  }
  if (e.data[0] == "get card") {
    let card_name = e.data[1]
    if (parsed_cards.has(card_name)) {
      postMessage(["get card result", parsed_cards.get(card_name)])
    }
  }
}




// ======================================================================================
// Build parse trie
// ======================================================================================
const templateStringRegex  = new RegExp("{{([^}]*?)}}")
const tokenizeRegex        = new RegExp("{[WUBRGCPX0-9/]+}|[A-Za-z0-9]+|\n|.", "g")

const outputTemplateFinder      = new RegExp(/{{(.+?)}}/g)
const templateWithIndexSplitter = new RegExp(/(.+?)\[(\d+)]$/)
const functionWithArgsSplitter  = new RegExp(/(.+?)\((.*?)\)$/)

function BuildTokenReTrie(templateStrings) {
  function NewTokenReTrieEntry() {
    let entry = {
      References: new Map(),
      Tokens:     new Map(),
      Terminal:   null,
    }
    return entry
  }

  let tree = new Array()
  tree.push(NewTokenReTrieEntry())
  for (const [templateString, _result] of templateStrings) {
    let parsed = templateString.split(templateStringRegex)

    let treeCursor = 0
    let isString = true
    for (const s of parsed) {
      if  (isString && s != "") {
        let stringToInsert = s

        let tokens = stringToInsert.match(tokenizeRegex)
        let findingInsertLocation = true
        for (const token of tokens) {
          if (findingInsertLocation) {
            let child = tree[treeCursor].Tokens.get(token)
            if (child ) {
              treeCursor = child
            } else {
              findingInsertLocation = false } }
          // This isn't an else-if on purpose. if the above check fails,
          //  we start inserting immediately
          if (!findingInsertLocation) {
            let splitCursor = tree.length
            let split = NewTokenReTrieEntry()
            tree[treeCursor].Tokens.set(token, splitCursor)

            tree.push(split)
            treeCursor = splitCursor } } }
      if (!isString) {
        let referenceToInsert = s

        // Does it already exist?
        const child = tree[treeCursor].References.get(referenceToInsert)
        if (child != null) {
          // It already exists, follow the link
          treeCursor = child
        } else {
          // It doesn't exist, add it
          let splitCursor = tree.length
          let split = NewTokenReTrieEntry()
          tree[treeCursor].References.set(referenceToInsert, splitCursor)
          tree.push(split)

          treeCursor = splitCursor
        }
      }

      // We alternate between strings and references
      isString = !isString
    }
    tree[treeCursor].Terminal = templateString
  }
  return tree
}

// ======================================================================================
// Parse a string using the parse trie
// ======================================================================================
function TokenReTriesMatch(trees, startingTree, needle) {
  // console.log("Searching for ", needle)
  let tokens = needle.match(tokenizeRegex)
  // console.log("tokens = ", tokens)

  let bestCursor = 0
  let debug = true

  function MatchAgainstInner(treeName, tokenIndex, stringIndex) {
    let matchResults = new Array()

    let tree = trees.get(treeName)
    if (tree == null) {
      console.log(treeName, " does not exist? Typo?")
      return matchResults }

    // console.log("Checking tree ", treeName, ", current token = ", tokens[tokenIndex])

    // We're handling our own stack here. Start with the first node
    let startingCursor = {
      TreeCursor:   0,
      TokenCursor:  tokenIndex,
      StringCursor: stringIndex,
      Breadcrumbs:  new Array(), }

    let cursors = new Array()
    cursors.push(startingCursor)
    for(;;) {
      // No more cursors to check against, quit
      if (cursors.length == 0) {
        // console.log("no more cursors")
        return matchResults }

      // Pop off the current cursor
      let cursor = cursors.shift()

      // Handle current cursor
      let treeCursor  = cursor.TreeCursor
      let tokenCursor = cursor.TokenCursor
      let stringCursor = cursor.StringCursor

      let treeNode = tree[treeCursor]

      // If this is a token node, compare against the current token
      if (tokenCursor < tokens.length) {
        let currentToken = tokens[tokenCursor]

        let child = treeNode.Tokens.get(currentToken)
        if (child != null) {
          // if (debug) {
          //   console.log("Found token node, ", currentToken, ", ", treeName, "[", tokenCursor, "] = ", child) }
          let breadcrumbs = Array.from(cursor.Breadcrumbs)
          if (tokenCursor > bestCursor) { bestCursor = tokenCursor }
          let newCursor = {
            TreeCursor:   child,
            TokenCursor:  tokenCursor + 1,
            StringCursor: stringCursor + currentToken.length,
            Breadcrumbs:  breadcrumbs, }
          // console.log("Token node new cursor: ",newCursor)
          cursors.push(newCursor) } }

      // If this is a terminal node, add it to the results list
      if (treeNode.Terminal != null) {
        // if (debug) {
        //   console.log("Found terminal node, ", treeName, "[", treeCursor, "] = ", treeNode.Terminal) }
        let breadcrumbs = Array.from(cursor.Breadcrumbs)
        let matchResult = {
          MatchReference: treeName,
          MatchIndex:     treeNode.Terminal,
          StringStart:    stringIndex,
          StringEnd:      stringCursor,
          TokenStart:     tokenIndex,
          TokenEnd:       tokenCursor,
          Breadcrumbs:    breadcrumbs, }
        // console.log("Terminal node match", matchResult)
        matchResults.push(matchResult) }

      // If this node has multiple child references, follow those
      for (const [subTree, child] of treeNode.References) {
        let nodeResults = MatchAgainstInner(subTree, tokenCursor, stringCursor)
        // console.log("nodeResults = ",nodeResults)
        for (const result of nodeResults) {
          // console.log("result = ",result)
          let breadcrumbs = Array.from(cursor.Breadcrumbs) ; breadcrumbs.push(result)
          let newCursor = {
            TreeCursor:   child,
            TokenCursor:  result.TokenEnd,
            StringCursor: result.StringEnd,
            Breadcrumbs:  breadcrumbs, }
          // console.log(newCursor)
          cursors.push(newCursor) } }
    }
  }

  let allMatchResults = MatchAgainstInner(startingTree, 0, 0)
  let matchResults = new Array()
  for (const result of allMatchResults) {
    if (result.TokenEnd == tokens.length) {
      matchResults.push(result) } }

  if (matchResults.length == 1) { return matchResults[0] }
  console.log("Error parsing ", needle)
  console.log(tokens)
  console.log("Best cursor = ", bestCursor)
  debugger
  return undefined
}





// --------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------

function cleanTypeText(text, find_replace) {
  if (text == null) { return null }

  text = text.replaceAll("\u2014", "-")  // — (em-dash)
  text = text.replaceAll("\u2019", "'") // ’ (right quotation mark)

  for (let i = 0; i < find_replace.length; i++) {
    let findStr    = find_replace[i].find
    let replaceStr = find_replace[i].replace
    text = text.replaceAll(findStr, replaceStr)
  }

  return text
}

function cleanRulesText(text, find_replace) {
  if (text == null) { return null }

  // ----------------------------------------------
  // --              General Cleanup             --
  // ----------------------------------------------

  // Fix quoted strings to make parsing more consistent
  text = text.replaceAll(".'\"", "'\".")
  text = text.replaceAll(".\"",   "\".")
  text = text.replaceAll(",\"",   "\",")

  // Cleaved text in []'s is similar to quoted text
  text = text.replaceAll(".]",   "].")

  // The Attraction specific action "Claim the prize!"'s '!' is similar
  text = text.replaceAll("prize!",   "prize.")

  // Simplify emdash and bullet
  text = text.replaceAll("\u2014",  "-")
  text = text.replaceAll("\u2022",  "*")  // • bullet

  for (let i = 0; i < find_replace.length; i++) {
    let findStr    = find_replace[i].find
    let replaceStr = find_replace[i].replace
    text = text.replaceAll(findStr, replaceStr)
  }

  return text
}


// ======================================================================================
// PrepareTemplate
// ======================================================================================

function getLongName(cardname) {
  // Alternate cards: "A-Skull Skaab" => "Skull Skaab"
  let splitName = cardname.split("A-")
  if (splitName.length > 1) {
    return splitName[1]; }

  return cardname;
}

function getCommaName(longName) {
  // Try easy case: "Chandra, Fire of Kaladesh" => "Chandra"
  let splitName = longName.split(", ")
  if (splitName.length > 1) {
    return splitName[0]; }

  return undefined;
}

function getShortName(longName) {
  // Special cases: "Gorm the Great" => "Gorm"
  if (short_names.has(longName)) {
    return short_names.get(longName) }

  return undefined;
}

function GetLine(card) {
  let cardName  = card.name
  let cardType  = cleanTypeText(card.type, find_replace)
  let manaCost  = card.manaCost
  let colorIndicator = card.colorIndicator
  let cardText  = cleanRulesText(card.text, find_replace)
  let power     = card.power
  let toughness = card.toughness
  let loyalty   = card.loyalty
  let defense   = card.defense
  let life      = card.life
  let hand      = card.hand

  let line = ""
  line = line + cardName;
  if (cardType != undefined) { line = line + "\n" + cardType; }
  if (manaCost != undefined) { line = line + "\n" + manaCost; }
  if (colorIndicator != undefined) { line = line + "\nColor Indicator: " + colorIndicator; }
  if (cardText != undefined) { line = line + "\n" + cardText; }
  if (power != undefined && toughness != undefined) { line = line + "\n" + power + "/" + toughness }
  if (loyalty != undefined) { line = line + "\n" + loyalty; }
  if (defense != undefined) { line = line + "\nDefense: " + defense; }
  if (life != undefined && hand != undefined) { line = line + "\n" + "Life" + life + " / Hand" + hand; }

  return line
}

function GetFullLine(card) {
  let header = ""
  if (card.cards.length == 1) {
    if (card.layout == "meld_piece") { header = "Melds Into: " + card.melded + "\n\n" }
    if (card.layout == "melded")     { header = "Melded" + "\n\n" }
    if (card.layout == "single")     { header = "" }

    const fullCardLine = header + GetLine(card.cards[0])
    return fullCardLine
  }

  if (card.cards.length == 2) {
    if (card.layout == "room"      ) { header = "Room"       + "\n\n" + cleanTypeText(card.shared_typeline, find_replace) + "\n\n" }
    if (card.layout == "split"     ) { header = "Split"      + "\n\n" }
    if (card.layout == "flip"      ) { header = "Flip"       + "\n\n" }
    if (card.layout == "adventurer") { header = "Adventurer" + "\n\n" }
    if (card.layout == "ominous"   ) { header = "Ominous"    + "\n\n" }
    if (card.layout == "preparer"  ) { header = "Preparer"   + "\n\n" }
    if (card.layout == "modal_dfc" ) { header = "Modal DFC"  + "\n\n" }
    if (card.layout == "transform" ) { header = "Transform"  + "\n\n" }

    const fullCardLine = header + GetLine(card.cards[0]) + "\n\n" + GetLine(card.cards[1])
    return fullCardLine
  }
}
