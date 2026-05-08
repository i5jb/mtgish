mod mtg_types;

#[cfg(feature="ronl_to_bincode")]
fn main() {
  let args: Vec<String> = std::env::args().collect();

  if args.len() != 3 {
    println!("Usage: ./ronl_to_bincode <ronl_filename> <bincode_filename>");
    std::process::exit(1);
  }

  let ronl_filename    = args[1].clone();
  let bincode_filename = args[2].clone();

  let file   = std::fs::File::open(ronl_filename).expect("Could not open file");
  let reader = std::io::BufReader::new(file);
  let lines  = std::io::BufRead::lines(reader);

  let mut oracle_cards: Vec<mtg_types::OracleCard> = Vec::new();
  for line in lines.map_while(Result::ok) {
    type RonResult = ron::error::SpannedResult<mtg_types::OracleCard>;
    let x: RonResult = ron::from_str(line.as_str());
    match x {
      Ok(result) => { oracle_cards.push(result);     }
      Err(e)     => { eprintln!("{} ;; {}", line, e); }
    }
  }

  let bincode_config = bincode::config::standard();
  let encoded_data = bincode::encode_to_vec(&oracle_cards, bincode_config).unwrap();
  std::fs::write(bincode_filename, encoded_data).unwrap();
}

#[cfg(feature="ronl_to_pretty_ron")]
fn main() {
  let args: Vec<String> = std::env::args().collect();

  if args.len() != 2 {
    println!("Usage: ./ronl_to_pretty_ron <ronl_filename>");
    std::process::exit(1);
  }

  let ronl_filename     = args[1].clone();

  let file   = std::fs::File::open(ronl_filename).expect("Could not open file");
  let reader = std::io::BufReader::new(file);
  let lines  = std::io::BufRead::lines(reader);

  let pretty_config = ron::ser::PrettyConfig::new()
    .indentor("  ".to_string())
    .separate_tuple_members(true);

  for line in lines.map_while(Result::ok) {
    type RonResult = ron::error::SpannedResult<mtg_types::OracleCard>;
    let x: RonResult = ron::from_str(line.as_str());
    match x {
      Ok(result) => {
        println!(
          "------------------\n{}",
          ron::ser::to_string_pretty(&result, pretty_config.clone()).unwrap()); }
      Err(e)     => { eprintln!("{} ;; {}", line, e); }
    }
  }
}


#[cfg(feature="write_out_json")]
fn main() {
  let args: Vec<String> = std::env::args().collect();

  if args.len() != 2 {
    println!("Usage: ./bincode_to_jsonl <bincode_filename>");
    std::process::exit(1);
  }

  let bincode_filename = args[1].clone();

  let mut bytes = Vec::new();

  use std::io::Read;
  let mut file = std::fs::File::open(bincode_filename).expect("Could not open file");
  file.read_to_end(&mut bytes).expect("Could not read from file");

  let bincode_config = bincode::config::standard();
  let (oracle_cards, _len): (Vec<mtg_types::OracleCard>, usize) = bincode::decode_from_slice(&bytes[..], bincode_config).unwrap();

  for oracle_card in oracle_cards.iter() {
    let json_string = serde_json::to_string(&oracle_card).expect("error converting to json");
    println!("{}", json_string);  
  }
}







/*
    // println!("RON:\n{}", ron::to_string(&oracle_card).unwrap());
    // println!("Pretty RON:\n{}", ron::ser::to_string_pretty(&oracle_card, ron::ser::PrettyConfig::default()).unwrap());  

          //println!("SUCCESS: {}", ron::to_string(&result).unwrap());
          //println!("Pretty RON:\n{}", ron::ser::to_string_pretty(&result, ron::ser::PrettyConfig::default()).unwrap());

          // let j: Result<String> = serde_json::to_string(&result);

          // match j {
          //   Ok(j_str) => println!("JSON: {}", j_str),
          //   Err(_) => println!("JSON: ERROR")
          // }




  let example_ron: String = "
Card(
  Name: \"Alquist Proft, Master Sleuth\",
  Typeline: ([
      Legendary,
  ], [
      Creature,
  ], [
      Human,
      Detective,
  ]),
  ManaCost: [
      ManaCostGeneric(1),
      ManaCostW,
      ManaCostU,
  ],
  Rules: [
      Vigilance,
      TriggerA(WhenAPermanentEntersTheBattlefield(SinglePermanent(ThisPermanent)), ActionList([
          Investigate,
      ])),
      Activated(And([
          PayManaX([
              ManaCostX,
              ManaCostW,
              ManaCostU,
              ManaCostU,
          ], ValueX),
          TapPermanent(ThisPermanent),
          SacrificeAPermanent(IsArtifactType(Clue)),
      ]), ActionList([
          DrawNumberCards(ValueX),
          GainLife(ValueX),
      ])),
  ],
  CardPT: (
      Power: 3,
      Toughness: 3,
  ),
)".to_string();


  let _x: OracleCard = OracleCard::Card
    {
      name: "Alquist Proft, Master Sleuth".to_string(),
      typeline: Typeline(
        [SuperType::Legendary].to_vec(),
        [CardType::Creature].to_vec(),
        [SubType::Detective, SubType:: Human].to_vec()
      ),
      mana_cost: Some([ManaSymbolX::ManaCostGeneric(1), ManaSymbolX::ManaCostW, ManaSymbolX::ManaCostU].to_vec()),
      rules: [
        Rule::Vigilance,
        Rule::TriggerA(Trigger::WhenAPermanentEntersTheBattlefield(Box::new(Permanents::SinglePermanent(Box::new(Permanent::ThisPermanent)))), Box::new(Actions::ActionList([Action::Investigate].to_vec())))
      ].to_vec(),
      card_pt: Some(CardPT { power: 3, toughness: 3 }),
      color_indicator: None,
      defense: None,
      loyalty: None,
    }
  ;

//  let input_path = format!("{}/examples/example.ron", env!("CARGO_MANIFEST_DIR"));
//  let f = File::open(input_path).expect("Failed opening file");

  println!("Parsing x");
  let x: SpannedResult<OracleCard> = ron::from_str(example_ron.as_str());
  match x {
    Ok(result) => {
      println!("RON:\n{}", ron::to_string(&result).unwrap());
      println!("Pretty RON:\n{}", ron::ser::to_string_pretty(&result, ron::ser::PrettyConfig::default()).unwrap());

      let j: Result<String> = serde_json::to_string(&result);

      match j {
        Ok(j_str) => println!("JSON: {}", j_str),
        Err(_) => println!("JSON: ERROR")
      }
    }
    Err(e) => { println!("Error parsing x1: {}", e); }
  }
*/

