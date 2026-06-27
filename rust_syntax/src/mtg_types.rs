#![allow(non_camel_case_types)]

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub enum SuperType {
  Basic,
  Legendary,
  Ongoing,
  Snow,
  World,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub enum CardType {
  Artifact,
  Battle,
  Conspiracy,
  Creature,
  Dungeon,
  Enchantment,
  Instant,
  Kindred,
  Land,
  Phenomenon,
  Plane,
  Planeswalker,
  Scheme,
  Sorcery,
  Vanguard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[allow(dead_code)]
pub enum DungeonType {
  Undercity,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[allow(dead_code)]
pub enum BattleType {
  Siege,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub enum CreatureType {
  Advisor,
  Aetherborn,
  Alien,
  Ally,
  Angel,
  Antelope,
  Ape,
  Archer,
  Archon,
  Armadillo,
  Army,
  Artificer,
  Assassin,
  AssemblyWorker,
  Astartes,
  Atog,
  Aurochs,
  Avatar,
  Azra,
  Badger,
  Balloon,
  Barbarian,
  Bard,
  Basilisk,
  Bat,
  Bear,
  Beast,
  Beaver,
  Beeble,
  Beholder,
  Berserker,
  Bird,
  Bison,
  Blinkmoth,
  Boar,
  Bringer,
  Brushwagg,
  Camarid,
  Camel,
  Capybara,
  Caribou,
  Carrier,
  Cat,
  Centaur,
  Chimera,
  Citizen,
  Cleric,
  Clown,
  Cockatrice,
  Construct,
  Coward,
  Coyote,
  Crab,
  Crocodile,
  Ctan,
  Custodes,
  Cyberman,
  Cyclops,
  Dalek,
  Dauthi,
  Demigod,
  Demon,
  Deserter,
  Detective,
  Devil,
  Dinosaur,
  Djinn,
  Doctor,
  Dog,
  Dragon,
  Drake,
  Dreadnought,
  Drix,
  Drone,
  Druid,
  Dryad,
  Dwarf,
  Echidna,
  Efreet,
  Egg,
  Elder,
  Eldrazi,
  Elemental,
  Elephant,
  Elf,
  Elk,
  Employee,
  Eternal,
  Eye,
  Faerie,
  Ferret,
  Fish,
  Flagbearer,
  Fox,
  Fractal,
  Frog,
  Fungus,
  Gamer,
  Gamma,
  Gargoyle,
  Germ,
  Giant,
  Giraffe,
  Gith,
  Glimmer,
  Gnoll,
  Gnome,
  Goat,
  Goblin,
  God,
  Golem,
  Gorgon,
  Graveborn,
  Gremlin,
  Griffin,
  Guest,
  Hag,
  Halfling,
  Hamster,
  Harpy,
  Hedgehog,
  Hellion,
  Hero,
  Hippo,
  Hippogriff,
  Homarid,
  Homunculus,
  Horror,
  Horse,
  Human,
  Hydra,
  Hyena,
  Illusion,
  Imp,
  Incarnation,
  Inhuman,
  Inkling,
  Inquisitor,
  Insect,
  Jackal,
  Jellyfish,
  Juggernaut,
  Kangaroo,
  Kavu,
  Kirin,
  Kithkin,
  Knight,
  Kobold,
  Kor,
  Kraken,
  Kree,
  Lamia,
  Lammasu,
  Leech,
  Lemur,
  Leviathan,
  Lhurgoyf,
  Licid,
  Lizard,
  Llama,
  Lobster,
  Manticore,
  Masticore,
  Mercenary,
  Merfolk,
  Metathran,
  Minion,
  Minotaur,
  Mite,
  Mole,
  Monger,
  Mongoose,
  Monk,
  Monkey,
  Moogle,
  Mount,
  Moonfolk,
  Mouse,
  Mutant,
  Myr,
  Mystic,
  Nautilus,
  Necron,
  Nephilim,
  Nightmare,
  Nightstalker,
  Ninja,
  Noble,
  Noggle,
  Nomad,
  Nymph,
  Octopus,
  Officer,
  Ogre,
  Ooze,
  Orb,
  Orc,
  Orgg,
  Otter,
  Ouphe,
  Ox,
  Oyster,
  Pangolin,
  Peasant,
  Pegasus,
  Pentavite,
  Performer,
  Pest,
  Phelddagrif,
  Phoenix,
  Phyrexian,
  Pilot,
  Pincher,
  Pirate,
  Plant,
  Platypus,
  Porcupine,
  Possum,
  Praetor,
  Primarch,
  Prism,
  Processor,
  Qu,
  Rabbit,
  Raccoon,
  Ranger,
  Rat,
  Rebel,
  Reflection,
  Rhino,
  Rigger,
  Robot,
  Rogue,
  Sable,
  Salamander,
  Samurai,
  Sand,
  Saproling,
  Satyr,
  Scarecrow,
  Scientist,
  Scion,
  Scorpion,
  Scout,
  Sculpture,
  Seal,
  Serf,
  Serpent,
  Servo,
  Shade,
  Shaman,
  Shapeshifter,
  Shark,
  Sheep,
  Shiar,
  Siren,
  Skeleton,
  Skrull,
  Skunk,
  Slith,
  Sliver,
  Sloth,
  Slug,
  Snail,
  Snake,
  Soldier,
  Soltari,
  Sorcerer,
  Spawn,
  Specter,
  Spellshaper,
  Sphinx,
  Spider,
  Spike,
  Spirit,
  Splinter,
  Sponge,
  Spy,
  Squid,
  Squirrel,
  Starfish,
  Surrakar,
  Survivor,
  Symbiote,
  Synth,
  Tentacle,
  Tetravite,
  Thalakos,
  Thopter,
  Thrull,
  Tiefling,
  TimeLord,
  Toy,
  Treefolk,
  Trilobite,
  Triskelavite,
  Troll,
  Turtle,
  Tyranid,
  Unicorn,
  Utrom,
  Vampire,
  Varmint,
  Vedalken,
  Villain,
  Volver,
  Wall,
  Walrus,
  Warlock,
  Warrior,
  Weasel,
  Weird,
  Werewolf,
  Whale,
  Wizard,
  Wolf,
  Wolverine,
  Wombat,
  Worm,
  Wraith,
  Wurm,
  Yeti,
  Zombie,
  Zubera,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub enum LandType {
  Cave,
  Desert,
  Forest,
  Gate,
  Island,
  Lair,
  Locus,
  Mine,
  Mountain,
  Plains,
  Planet,
  PowerPlant,
  Sphere,
  Swamp,
  Tower,
  Town,
  Urzas,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub enum SpellType {
  Adventure,
  Arcane,
  Lesson,
  Chorus,
  Trap,
  Omen,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub enum EnchantmentType {
  Aura,
  Background,
  Cartouche,
  Case,
  Class,
  Curse,
  Plan,
  Role,
  Room,
  Rune,
  Saga,
  Shard,
  Shrine,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub enum ArtifactType {
  Attraction,
  Blood,
  Bobblehead,
  Book,
  Clue,
  Equipment,
  Food,
  Fortification,
  Gold,
  Incubator,
  Infinity,
  Junk,
  Lander,
  Map,
  Mutagen,
  Powerstone,
  Spacecraft,
  Stone,
  Treasure,
  Vehicle,
  Vibranium,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub enum PlaneswalkerType {
  Ajani,
  Aminatou,
  Angrath,
  Arlinn,
  Ashiok,
  Bahamut,
  Basri,
  Bolas,
  Calix,
  Chandra,
  Comet,
  Dack,
  Dakkon,
  Daretti,
  Davriel,
  Deb,
  Dellian,
  Dihada,
  Domri,
  Dovin,
  Ellywick,
  Elminster,
  Elspeth,
  Estrid,
  Freyalise,
  Garruk,
  Gideon,
  Grist,
  Guff,
  Huatli,
  Jace,
  Jared,
  Jaya,
  Jeska,
  Kaito,
  Karn,
  Kasmina,
  Kaya,
  Kiora,
  Koth,
  Liliana,
  Lolth,
  Lukka,
  Minsc,
  Mordenkainen,
  Nahiri,
  Narset,
  Niko,
  Nissa,
  Nixilis,
  Oko,
  Quintorius,
  Ral,
  Rowan,
  Saheeli,
  Samut,
  Sarkhan,
  Serra,
  Sivitri,
  Sorin,
  Szat,
  Tamiyo,
  Tasha,
  Teferi,
  Teyo,
  Tezzeret,
  Tibalt,
  Tyvar,
  Ugin,
  Urza,
  Venser,
  Vivien,
  Vraska,
  Vronos,
  Will,
  Windgrace,
  Wrenn,
  Xenagos,
  Yanggu,
  Yanling,
  Zariel,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[allow(dead_code)]
pub enum PlaneType {
  Alara,
  AlfavaMetraxis,
  Amonkhet,
  AndrozaniMinor,
  Antausia,
  Apalapucia,
  Arcavios,
  Arkhos,
  Avishkar,
  Azgol,
  Belenon,
  BolassMeditationRealm,
  Capenna,
  Cridhe,
  Darillium,
  Dominaria,
  Earth,
  Echoir,
  Eldraine,
  Equilor,
  Ergamon,
  Fabacin,
  Fiora,
  Gallifrey,
  Gargantikar,
  Gobakhan,
  HorseheadNebula,
  Ikoria,
  Innistrad,
  Iquatana,
  Ir,
  Ixalan,
  Kaldheim,
  Kamigawa,
  Kandoka,
  Karsus,
  Kephalai,
  Kinshala,
  Kolbahan,
  Kylem,
  Kyneth,
  Lorwyn,
  Luvion,
  Mars,
  Mercadia,
  Mirrodin,
  Moag,
  Mongseng,
  Moon,
  Muraganda,
  Necros,
  NewEarth,
  NewPhyrexia,
  OutsideMuttersSpiral,
  Phyrexia,
  Pyrulea,
  Rabiah,
  Rath,
  Ravnica,
  Regatha,
  Segovia,
  SerrasRealm,
  Shadowmoor,
  Shandalar,
  Shenmeng,
  Skaro,
  Spaceship,
  Tarkir,
  TheAbyss,
  TheDalekAsylum,
  TheLibrary,
  Theros,
  Time,
  Trenzalore,
  UnknownPlanet,
  Ulgrotha,
  Valla,
  Vryn,
  Wildfire,
  Xerex,
  Zendikar,
  Zhalfir,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub enum SubType {
  // DungeonType
  Undercity,

  // BattleType
  Siege,

  // CreatureType
  Advisor,
  Aetherborn,
  Alien,
  Ally,
  Angel,
  Antelope,
  Ape,
  Archer,
  Archon,
  Armadillo,
  Army,
  Artificer,
  Assassin,
  AssemblyWorker,
  Astartes,
  Atog,
  Aurochs,
  Avatar,
  Azra,
  Badger,
  Balloon,
  Barbarian,
  Bard,
  Basilisk,
  Bat,
  Bear,
  Beast,
  Beaver,
  Beeble,
  Beholder,
  Berserker,
  Bird,
  Bison,
  Blinkmoth,
  Boar,
  Bringer,
  Brushwagg,
  Camarid,
  Camel,
  Capybara,
  Caribou,
  Carrier,
  Cat,
  Centaur,
  Chimera,
  Citizen,
  Cleric,
  Clown,
  Cockatrice,
  Construct,
  Coward,
  Coyote,
  Crab,
  Crocodile,
  Ctan,
  Custodes,
  Cyberman,
  Cyclops,
  Dalek,
  Dauthi,
  Demigod,
  Demon,
  Deserter,
  Detective,
  Devil,
  Dinosaur,
  Djinn,
  Doctor,
  Dog,
  Dragon,
  Drake,
  Dreadnought,
  Drix,
  Drone,
  Druid,
  Dryad,
  Dwarf,
  Echidna,
  Efreet,
  Egg,
  Elder,
  Eldrazi,
  Elemental,
  Elephant,
  Elf,
  Elk,
  Employee,
  Eternal,
  Eye,
  Faerie,
  Ferret,
  Fish,
  Flagbearer,
  Fox,
  Fractal,
  Frog,
  Fungus,
  Gamer,
  Gamma,
  Gargoyle,
  Germ,
  Giant,
  Giraffe,
  Gith,
  Glimmer,
  Gnoll,
  Gnome,
  Goat,
  Goblin,
  God,
  Golem,
  Gorgon,
  Graveborn,
  Gremlin,
  Griffin,
  Guest,
  Hag,
  Halfling,
  Hamster,
  Harpy,
  Hedgehog,
  Hellion,
  Hero,
  Hippo,
  Hippogriff,
  Homarid,
  Homunculus,
  Horror,
  Horse,
  Human,
  Hydra,
  Hyena,
  Illusion,
  Imp,
  Incarnation,
  Inhuman,
  Inkling,
  Inquisitor,
  Insect,
  Jackal,
  Jellyfish,
  Juggernaut,
  Kangaroo,
  Kavu,
  Kirin,
  Kithkin,
  Knight,
  Kobold,
  Kor,
  Kraken,
  Kree,
  Lamia,
  Lammasu,
  Leech,
  Lemur,
  Leviathan,
  Lhurgoyf,
  Licid,
  Lizard,
  Llama,
  Lobster,
  Manticore,
  Masticore,
  Mercenary,
  Merfolk,
  Metathran,
  Minion,
  Minotaur,
  Mite,
  Mole,
  Monger,
  Mongoose,
  Monk,
  Monkey,
  Moogle,
  Mount,
  Moonfolk,
  Mouse,
  Mutant,
  Myr,
  Mystic,
  Nautilus,
  Necron,
  Nephilim,
  Nightmare,
  Nightstalker,
  Ninja,
  Noble,
  Noggle,
  Nomad,
  Nymph,
  Octopus,
  Officer,
  Ogre,
  Ooze,
  Orb,
  Orc,
  Orgg,
  Otter,
  Ouphe,
  Ox,
  Oyster,
  Pangolin,
  Peasant,
  Pegasus,
  Pentavite,
  Performer,
  Pest,
  Phelddagrif,
  Phoenix,
  Phyrexian,
  Pilot,
  Pincher,
  Pirate,
  Plant,
  Platypus,
  Porcupine,
  Possum,
  Praetor,
  Primarch,
  Prism,
  Processor,
  Qu,
  Rabbit,
  Raccoon,
  Ranger,
  Rat,
  Rebel,
  Reflection,
  Rhino,
  Rigger,
  Robot,
  Rogue,
  Sable,
  Salamander,
  Samurai,
  Sand,
  Saproling,
  Satyr,
  Scarecrow,
  Scientist,
  Scion,
  Scorpion,
  Scout,
  Sculpture,
  Seal,
  Serf,
  Serpent,
  Servo,
  Shade,
  Shaman,
  Shapeshifter,
  Shark,
  Sheep,
  Shiar,
  Siren,
  Skeleton,
  Skrull,
  Skunk,
  Slith,
  Sliver,
  Sloth,
  Slug,
  Snail,
  Snake,
  Soldier,
  Soltari,
  Sorcerer,
  Spawn,
  Specter,
  Spellshaper,
  Sphinx,
  Spider,
  Spike,
  Spirit,
  Splinter,
  Sponge,
  Spy,
  Squid,
  Squirrel,
  Starfish,
  Surrakar,
  Survivor,
  Symbiote,
  Synth,
  Tentacle,
  Tetravite,
  Thalakos,
  Thopter,
  Thrull,
  Tiefling,
  TimeLord,
  Toy,
  Treefolk,
  Trilobite,
  Triskelavite,
  Troll,
  Turtle,
  Tyranid,
  Unicorn,
  Utrom,
  Vampire,
  Varmint,
  Vedalken,
  Villain,
  Volver,
  Wall,
  Walrus,
  Warlock,
  Warrior,
  Weasel,
  Weird,
  Werewolf,
  Whale,
  Wizard,
  Wolf,
  Wolverine,
  Wombat,
  Worm,
  Wraith,
  Wurm,
  Yeti,
  Zombie,
  Zubera,

  // LandType
  Cave,
  Desert,
  Forest,
  Gate,
  Island,
  Lair,
  Locus,
  Mine,
  Mountain,
  Plains,
  Planet,
  PowerPlant,
  Sphere,
  Swamp,
  Tower,
  Town,
  Urzas,

  // SpellType
  Adventure,
  Arcane,
  Lesson,
  Chorus,
  Trap,
  Omen,

  // EnchantmentType
  Aura,
  Background,
  Cartouche,
  Case,
  Class,
  Curse,
  Plan,
  Role,
  Room,
  Rune,
  Saga,
  Shard,
  Shrine,

  // ArtifactType
  Attraction,
  Blood,
  Bobblehead,
  Book,
  Clue,
  Equipment,
  Food,
  Fortification,
  Gold,
  Incubator,
  Infinity,
  Junk,
  Lander,
  Map,
  Mutagen,
  Powerstone,
  Spacecraft,
  Stone,
  Treasure,
  Vehicle,
  Vibranium,

  // PlaneswalkerType
  Ajani,
  Aminatou,
  Angrath,
  Arlinn,
  Ashiok,
  Bahamut,
  Basri,
  Bolas,
  Calix,
  Chandra,
  Comet,
  Dack,
  Dakkon,
  Daretti,
  Davriel,
  Deb,
  Dellian,
  Dihada,
  Domri,
  Dovin,
  Ellywick,
  Elminster,
  Elspeth,
  Estrid,
  Freyalise,
  Garruk,
  Gideon,
  Grist,
  Guff,
  Huatli,
  Jace,
  Jared,
  Jaya,
  Jeska,
  Kaito,
  Karn,
  Kasmina,
  Kaya,
  Kiora,
  Koth,
  Liliana,
  Lolth,
  Lukka,
  Minsc,
  Mordenkainen,
  Nahiri,
  Narset,
  Niko,
  Nissa,
  Nixilis,
  Oko,
  Quintorius,
  Ral,
  Rowan,
  Saheeli,
  Samut,
  Sarkhan,
  Serra,
  Sivitri,
  Sorin,
  Szat,
  Tamiyo,
  Tasha,
  Teferi,
  Teyo,
  Tezzeret,
  Tibalt,
  Tyvar,
  Ugin,
  Urza,
  Venser,
  Vivien,
  Vraska,
  Vronos,
  Will,
  Windgrace,
  Wrenn,
  Xenagos,
  Yanggu,
  Yanling,
  Zariel,

  // PlaneType
  Alara,
  AlfavaMetraxis,
  Amonkhet,
  AndrozaniMinor,
  Antausia,
  Apalapucia,
  Arcavios,
  Arkhos,
  Avishkar,
  Azgol,
  Belenon,
  BolassMeditationRealm,
  Capenna,
  Cridhe,
  Darillium,
  Dominaria,
  Earth,
  Echoir,
  Eldraine,
  Equilor,
  Ergamon,
  Fabacin,
  Fiora,
  Gallifrey,
  Gargantikar,
  Gobakhan,
  HorseheadNebula,
  Ikoria,
  Innistrad,
  Iquatana,
  Ir,
  Ixalan,
  Kaldheim,
  Kamigawa,
  Kandoka,
  Karsus,
  Kephalai,
  Kinshala,
  Kolbahan,
  Kylem,
  Kyneth,
  Lorwyn,
  Luvion,
  Mars,
  Mercadia,
  Mirrodin,
  Moag,
  Mongseng,
  Moon,
  Muraganda,
  Necros,
  NewEarth,
  NewPhyrexia,
  OutsideMuttersSpiral,
  Phyrexia,
  Pyrulea,
  Rabiah,
  Rath,
  Ravnica,
  Regatha,
  Segovia,
  SerrasRealm,
  Shadowmoor,
  Shandalar,
  Shenmeng,
  Skaro,
  Spaceship,
  Tarkir,
  TheAbyss,
  TheDalekAsylum,
  TheLibrary,
  Theros,
  Time,
  Trenzalore,
  UnknownPlanet,
  Ulgrotha,
  Valla,
  Vryn,
  Wildfire,
  Xerex,
  Zendikar,
  Zhalfir,
}

type CreatureTypeWord = CreatureType;

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
pub struct CardPT {
  power: i32,
  toughness: i32
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
pub struct OracleTypeline {
  supertypes: Vec<SuperType>,
  cardtypes: Vec<CardType>,
  subtypes: Vec<SubType>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CreatureTypeVariable", content = "args"))]
pub enum CreatureTypeVariable {
  CreatureTypesOfExiled(Box<CardInExile>),
  TheChosenCreatureType,
  TheChosenCreatureTypes,
  TheNotedCreatureType,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardtypeVariable", content = "args"))]
pub enum CardtypeVariable {
  EachableCardtype,
  TheChosenCardtype,
  CardtypeOfExiled(Box<CardInExile>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_LandTypeVariable", content = "args"))]
pub enum LandTypeVariable {
  AnyBasicLandTypeAmongPermanents(Box<Permanents>),
  AnyLandTypeOfPermanent(Box<Permanent>),
  EachBasicLandType,
  TheChosenLandType,
  TheFirstChosenLandType,
  TheSecondChosenLandType,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PlaneswalkerTypeVariable", content = "args"))]
pub enum PlaneswalkerTypeVariable {
  TheChosenPlaneswalkerType,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CounterType", content = "args"))]
pub enum CounterType {
  // PT Counter
  PTCounter(i32, i32),

  // Player Counter
  ExperienceCounter,
  PoisonCounter,
  RadCounter,

  // Planeswalker / Siege / Saga Counter
  DefenseCounter,
  LoreCounter,
  LoyaltyCounter,

  // Ability Counter
  DeathtouchCounter,
  DoubleStrikeCounter,
  ExaltedCounter,
  FirstStrikeCounter,
  FlyingCounter,
  HasteCounter,
  HexproofCounter,
  IndestructibleCounter,
  LifelinkCounter,
  MenaceCounter,
  ReachCounter,
  ShadowCounter,
  TrampleCounter,
  VigilanceCounter,
  DecayedCounter,

  // Normal Counter
  AcornCounter,
  AegisCounter,
  AgeCounter,
  AimCounter,
  ArrowCounter,
  ArrowheadCounter,
  AwakeningCounter,
  BaitCounter,
  BlazeCounter,
  BlessingCounter,
  BlightCounter,
  BloodCounter,
  BloodlineCounter,
  BloodstainCounter,
  BookCounter,
  BoreCounter,
  BountyCounter,
  BrainCounter,
  BriberyCounter,
  BrickCounter,
  BurdenCounter,
  CageCounter,
  CarrionCounter,
  CellCounter,
  ChargeCounter,
  ChorusCounter,
  CoinCounter,
  CollectionCounter,
  ComponentCounter,
  ConquerorCounter,
  ContestedCounter,
  CorpseCounter,
  CorruptionCounter,
  CreditCounter,
  CroakCounter,
  CrystalCounter,
  CubeCounter,
  CurrencyCounter,
  DeathCounter,
  DelayCounter,
  DepletionCounter,
  DescentCounter,
  DespairCounter,
  DevotionCounter,
  DiscoveryCounter,
  DivinityCounter,
  DoomCounter,
  DreadCounter,
  DreamCounter,
  DutyCounter,
  EchoCounter,
  EggCounter,
  ElixirCounter,
  EmberCounter,
  EnlightenedCounter,
  EonCounter,
  EruptionCounter,
  EverythingCounter,
  ExposureCounter,
  EyeballCounter,
  FadeCounter,
  FateCounter,
  FeatherCounter,
  FeedingCounter,
  FellowshipCounter,
  FetchCounter,
  FilibusterCounter,
  FilmCounter,
  FinalityCounter,
  FireCounter,
  FlameCounter,
  FloodCounter,
  ForeshadowCounter,
  FungusCounter,
  FuryCounter,
  FuseCounter,
  GemCounter,
  GhostformCounter,
  GlyphCounter,
  GoldCounter,
  GrowthCounter,
  HarmonyCounter,
  HatchingCounter,
  HatchlingCounter,
  HealingCounter,
  HitCounter,
  HoneCounter,
  HoofprintCounter,
  HopeCounter,
  HourCounter,
  HourglassCounter,
  HungerCounter,
  IceCounter,
  ImpostorCounter,
  IncarnationCounter,
  IncubationCounter,
  InfectionCounter,
  InfluenceCounter,
  IngenuityCounter,
  IngredientCounter,
  IntelCounter,
  InterventionCounter,
  InvasionCounter,
  InvitationCounter,
  IsolationCounter,
  JavelinCounter,
  JudgmentCounter,
  KiCounter,
  KickCounter,
  KnowledgeCounter,
  LandmarkCounter,
  LevelCounter,
  LootCounter,
  LuckCounter,
  MagnetCounter,
  ManifestationCounter,
  MannequinCounter,
  MatrixCounter,
  MemoryCounter,
  MidwayCounter,
  MineCounter,
  MiningCounter,
  MireCounter,
  MusicCounter,
  MusterCounter,
  NecrodermisCounter,
  NestCounter,
  NetCounter,
  NightCounter,
  OilCounter,
  OmenCounter,
  OreCounter,
  PageCounter,
  PainCounter,
  PalliationCounter,
  ParalyzationCounter,
  PetalCounter,
  PetrificationCounter,
  PhylacteryCounter,
  PhyresisCounter,
  PinCounter,
  PlagueCounter,
  PlanCounter,
  PlotCounter,
  PointCounter,
  PolypCounter,
  PossessionCounter,
  PressureCounter,
  PreyCounter,
  PupaCounter,
  QuestCounter,
  RallyCounter,
  RejectionCounter,
  ReprieveCounter,
  RevCounter,
  RevivalCounter,
  RibbonCounter,
  RitualCounter,
  RopeCounter,
  RustCounter,
  SamuraiCounter,
  SaurianCounter,
  ScreamCounter,
  ScrollCounter,
  ShellCounter,
  ShredCounter,
  SilverCounter,
  SkewerCounter,
  SleepCounter,
  SleightCounter,
  SlimeCounter,
  SlumberCounter,
  SootCounter,
  SoulCounter,
  SpiteCounter,
  SporeCounter,
  StashCounter,
  StorageCounter,
  StoryCounter,
  StrifeCounter,
  StudyCounter,
  SupplyCounter,
  SuspectCounter,
  TakeoverCounter,
  TaskCounter,
  TheftCounter,
  TideCounter,
  TimeCounter,
  TowerCounter,
  TrapCounter,
  TreasureCounter,
  UnityCounter,
  UnlockCounter,
  ValorCounter,
  VelocityCounter,
  VerseCounter,
  VitalityCounter,
  VoidCounter,
  VortexCounter,
  VowCounter,
  VoyageCounter,
  WageCounter,
  WinchCounter,
  WindCounter,
  WishCounter,
  WreckCounter,

  // Action Counter
  ShieldCounter,
  StunCounter,
}

#[allow(dead_code)]
type PlayerId = i32;

type PermanentId = i32;
type CardInExileId = i32;
type EffectId = i32;
type MutateIndex = i32;
type VoteOption = String;
type DungeonRoomName = String;
type NameString = String;
type LetterString = String;
type SpellBookName = String;
type Offerer = String;

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_LoyaltyNumber", content = "args"))]
pub enum LoyaltyNumber {
  Integer(i32),
  LoyaltyX,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Expiration", content = "args"))]
pub enum Expiration {
  Or(Vec<Expiration>),

  AsLongAsPlaneIsFaceUp(Plane),
  DuringPlayersNextTurn(Box<Player>),
  DuringPlayersNextUntapStep(Box<Player>),
  DuringTheCombatPhaseCreatedThisWay,
  DuringTheExtraTurnCreatedThisWay,
  ForAsLongAsPermanentHasACounterOfTypeOnIt(Box<Permanent>, CounterType),
  ForAsLongAsPermanentRemainsAttachedToPermanent(Box<Permanent>, Box<Permanent>),
  ForAsLongAsPermanentRemainsFaceDown(Box<Permanent>),
  ForAsLongAsPermanentRemainsTapped(Box<Permanent>),
  UntilAPlayerBecomesTheMonarch(Box<Players>),
  UntilAPlayerCastsASpell(Box<Players>, Box<Spells>),
  UntilAPlayerExilesACardWithThisAbility(Box<Players>),
  UntilAPlayerIsNoLongerTheMonarch(Box<Players>),
  UntilAPlayerPlaneswalks(Box<Players>),
  UntilAPlayerRollsValue(Box<Players>, Box<Comparison>),
  UntilCardIsCastFromExile(Box<CardInExile>),
  UntilCardIsNoLongerExiled(Box<CardInExile>),
  UntilCardIsNoLongerInGraveyard(Box<CardInGraveyards>),
  UntilCardsAreNoLongerExiled(Box<CardsInExile>),
  UntilEndOfCombat,
  UntilEndOfGame,
  UntilEndOfNextTurn(Box<Player>),
  UntilEndOfTheNextTurn,
  UntilEndOfTurn,
  UntilItIsNoLongerEnchanted,
  UntilItIsNoLongerExiled,
  UntilItLeavesTheBattlefield,
  UntilNextUpkeep(Box<Player>),
  UntilPermanentChangesControl(Box<Player>, Box<Permanent>),
  UntilPermanentIsTurnedFaceDown(Box<Permanent>),
  UntilPermanentIsTurnedFaceUp(Box<Permanent>),
  UntilPermanentLeavesBattlefield(Box<Permanent>),
  UntilPermanentNoLongerPassesFilter(Box<Permanent>, Box<Permanents>),
  UntilPlayerExilesAnotherCardWithPermanent(Box<Player>, Box<Permanent>),
  UntilPlayerPaysMana(Box<Player>, ManaCost),
  UntilPlayerRollsValueWhileRollingToVisitAttractions(Box<Player>, Box<Comparison>),
  UntilPlayersNextEndStep(Box<Player>),
  UntilPlayersNextTurn(Box<Player>),
  UntilPlayersNextUntapStep(Box<Player>),
  UntilTheBeginningOfPlayersNextUpkeep(Box<Player>),
  UntilTheBeginningOfTheNextEndStep,
  UntilTheEndOfCombatOnPlayersNextTurn(Box<Player>),
  UntilTheEndOfPlayersNextTurn(Box<Player>),
  UntilTopCardOfPlayersLibraryChanges(Box<Player>)
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
//#[cfg_attr(feature = "write_out_json", serde(tag = "_ColorIndicatorColor", content = "args"))]
pub enum ColorIndicatorColor {
  White, Blue, Black, Red, Green
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub enum SimpleColor {
  White, Blue, Black, Red, Green
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SettableColor", content = "args"))]
pub enum SettableColor {
  AllColors,
  Colorless,
  Devoid,
  SimpleColorList(Vec<SimpleColor>),
  TheChosenColor,
  TheChosenColors,
  TheManaColorChosenThisWay,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Color", content = "args"))]
pub enum Color {
  TheChosenColor,
  TheChosenColors,
  TheColorChosenByItsController,
  Colorless,
  White, Blue, Black, Red, Green,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ManaSymbol", content = "args"))]
pub enum ManaSymbol {
  ManaCostGeneric(i32),
  ManaCostW,
  ManaCostU,
  ManaCostB,
  ManaCostR,
  ManaCostG,
  ManaCostC,
  ManaCostS,
  ManaCostWP,
  ManaCostUP,
  ManaCostBP,
  ManaCostRP,
  ManaCostGP,
  // ManaCostRWP,
  // ManaCostRGP,
  // ManaCostGWP,
  // ManaCostGUP,
  // ManaCost2W,
  ManaCost2U,
  ManaCost2B,
  ManaCost2R,
  ManaCost2G,
  // ManaCostCW,
  // ManaCostCU,
  // ManaCostCB,
  // ManaCostCR,
  // ManaCostCG,
  ManaCostWU,
  ManaCostUB,
  ManaCostBR,
  ManaCostRG,
  ManaCostGW,
  ManaCostWB,
  ManaCostUR,
  ManaCostBG,
  ManaCostRW,
  ManaCostGU,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ManaSymbol", content = "args"))]
pub enum ManaSymbolX {
  ManaCostGeneric(i32),
  ManaCostW,
  ManaCostU,
  ManaCostB,
  ManaCostR,
  ManaCostG,
  ManaCostC,
  ManaCostS,
  ManaCostWP,
  ManaCostUP,
  ManaCostBP,
  ManaCostRP,
  ManaCostGP,
  ManaCostRWP,
  ManaCostRGP,
  ManaCostGWP,
  ManaCostGUP,
  ManaCost2W,
  ManaCost2U,
  ManaCost2B,
  ManaCost2R,
  ManaCost2G,
  ManaCostCW,
  ManaCostCU,
  ManaCostCB,
  ManaCostCR,
  ManaCostCG,
  ManaCostWU,
  ManaCostUB,
  ManaCostBR,
  ManaCostRG,
  ManaCostGW,
  ManaCostWB,
  ManaCostUR,
  ManaCostBG,
  ManaCostRW,
  ManaCostGU,

  ManaCostX,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ActivateModifier", content = "args"))]
pub enum ActivateModifier {
  And(Vec<ActivateModifier>),

  PowerUp,
  CantBeCopied,
  Exhaust,
  ReduceManaCostForEachAlternateCost(Box<Cost>),
  ActivateNoMoreThanNumberTimesEachTurn(Box<GameNumber>),
  ReduceCostIfItTargetsANumberOfPermanent(Box<Comparison>, Box<Permanents>, CostReduction),
  ReduceCostIfItTargetsAPermanent(Box<Permanents>, CostReduction),
  ActivateOnlyAsASorcery,
  ActivateOnlyAsAnInstant,
  ActivateOnlyDuringTheirTurn,
  ActivateOnlyIf(Condition),
  ActivateOnlyOnce,
  ActivateOnlyOnceEachTurn,
  Boast,
  CantActivateIf(Condition),
  Forecast,
  IncreaseManaCostForEach(ManaCost, Box<GameNumber>),
  OnlyOtherPlayersMayActivate(Box<Players>),
  OnlyPlayerMayActivate(Box<Player>),
  OtherPlayersMayActivate(Box<Players>),
  ReduceCostForEach(CostReduction, Box<GameNumber>),
  ReduceCostIf(Condition, CostReduction),
  ReduceCostX(CostReductionX, Box<GameNumber>),
  SpendOnlyColoredManaOnX(Color),
  SpendOnlyColoredMana(Color),
  XCantBeZero,
  XCantBeGreaterThan(Box<GameNumber>),
  XIs(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CastModifier", content = "args"))]
pub enum CastModifier {
  SpendOnlyColoredManaOnXAndAtMostOneManaOfEachColor,
  ReduceCostX(CostReductionX, Box<GameNumber>),
  XCantBeZero,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Craftable", content = "args"))]
pub enum Craftable {
  And(Vec<Craftable>),
  Or(Vec<Craftable>),
  IsNonCardtype(CardType),
  HasAbility(CheckHasable),
  IsCreatureType(CreatureType),
  IsLandType(LandType),
  IsColor(Color),
  IsCardtype(CardType),
  AnyCard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_GameEffect", content = "args"))]
pub enum GameEffect {
  PowerUpAbilitiesCantBeActivated,
  CardsCantEnterTheBattlefieldFromExile(Box<Cards>),
  CreaturesCantBlock,
  DamageCantBePrevented,
  DefendingPlayersChooseCreaturesToDefendAttackersAtRandom,
  PermanentCantPhaseIn(Box<Permanent>),
  PermanentsCantPhaseIn(Box<Permanents>),
  PermanentsTappedByPlayerForManaProduceColorlessInstead(Box<Permanents>, Box<Players>),
  PlanarDieBlanksRollsAreChaos,
  SchemesCantBeSetInMotion,
  SpellsAndAbilitiesCantTargetPermanents(SpellsAndAbilities, Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PermanentRule", content = "args"))]
pub enum PermanentRule {
  CantHaveCountersOfTypePutOnIt(CounterType),
  CantHaveCountersOfTypeRemovedFromIt(CounterType),
  CantHaveCountersPutOnIt,

  StationsPermanentsAsThoughPowerWereGreater(Box<GameNumber>),
  StationsPermanentsUsingToughnessRatherThanPower,
  CanBlockCreaturesWithShadowAsThoughItHadShadow,
  PlaneswalkerCantBeAttacked,
  SaddlesMountsUsingToughnessRatherThanPower,

  CantBecomeUntapped,
  AbilitiesCantBeActivated,
  CantGainAbility(CheckHasable),
  AbilitiesOfTypeCantBeActivated(Box<ActivatedAbilities>),
  AllCreaturesMustBlockIt(Box<Permanents>),
  AssignsCombatDamageAsThoughNotBlocked,
  AssignsNoCombatDamage,
  AssignsToughnessCombatDamage,
  AttackingCausesOthersToAttack(Box<Permanents>),
  CanAttackAPlayerAsThoughItDidntHaveDefender(Box<Players>),
  CanAttackAsThoughItDidntHaveDefender,
  CanAttackAsThoughItHadHaste,
  CanAttackPlayersAndPlaneswalkersAsThoughItHadHaste(Box<Players>),
  CanBeAttachedOnlyToAPermanent(Box<Permanents>),
  CanBeBlockedAsThoughItDidntHave(CheckHasable),
  CanBeTheTargetOfSpellsAndAbilitiesAsThoughTheyDidntHaveHexproof(SpellsAndAbilities),
  CanBeTheTargetOfSpellsOrAbilitiesAsThoughItDidntHaveShroud(SpellsAndAbilities),
  CanBlockAnAdditionalCreature,
  CanBlockAnAdditionalNumberCreatures(Box<GameNumber>),
  CanBlockAnyNumberOfCreatures,
  CanBlockAsThoughUntapped,
  CanBlockCreaturesWithFlyingAsThoughItHadReach(Box<Permanents>),
  CanBlockCreaturesWithLandwalkAbilitiesAsThoughTheyDidntHaveThem,
  CanBlockCreaturesWithShadowAsThoughTheyDidntHaveShadow,
  CanBlockOnly(Box<Permanents>),
  CanBoastTwice,
  CanOnlyAttackAlone,
  CanOnlyBeDestroyedByLethalDamageFromASingleSource,
  CantAttack,
  CantAttackAPermanent(Box<Permanents>),
  CantAttackAPermanentUnlessCost(Box<Permanents>, Box<Cost>),
  CantAttackAPlayer(Box<Players>),
  CantAttackAlone,
  CantAttackAnyPlayerOrPlaneswalkerControlledBy(Box<Players>),
  CantAttackIfDefendingPlayer(Condition),
  CantAttackPlayer(Box<Player>),
  CantAttackPlayerOrPlaneswalkerControlledBy(Box<Player>),
  CantAttackPlayerOrPlaneswalkerControlledByUnlessCost(Box<Player>, Box<Cost>),
  CantAttackPlayerUnlessCost(Box<Player>, Box<Cost>),
  CantAttackUnlessANumberOfOtherCreatureAttacks(Box<Comparison>, Box<Permanents>),
  CantAttackUnlessAnotherCreatureAttacks(Box<Permanents>),
  CantAttackUnlessCost(Box<Cost>),
  CantAttackUnlessDefendingPlayer(Condition),
  CantBeBlocked,
  CantBeBlockedByDefenders(Box<Permanents>),
  CantBeBlockedByMoreThanOne,
  CantBeBlockedExceptByDefenders(Box<Permanents>),
  CantBeBlockedExceptByMultipleDefenders(Box<Comparison>, Box<Permanents>),
  CantBeBlockedIfDefendingPlayer(Box<Players>),
  CantBeBlockedUnlessAllDefendersBlockIt,
  CantBeBlockedUnlessCost(Box<Cost>),
  CantBeBlockedUnlessDefendingPlayer(Box<Players>),
  CantBeEnchanted,
  CantBeEnchantedAndDoesntRemove(Box<Permanents>),
  CantBeEnchantedByAnEnchantment(Box<Permanents>),
  CantBeEquipped,
  CantBeGainedControlOf,
  CantBeRegenerated,
  CantBeSacrificed,
  CantBeTheTargetOfAbilities(Abilities),
  CantBeTheTargetOfSpells(Box<Spells>),
  CantBeTheTargetOfSpellsOrAbilities(SpellsAndAbilities),
  CantBeTurnedFaceUp,
  CantBecomeSuspected,
  CantBecomeTappedUnlessItIsBeingDeclaredAsAnAttacker,
  CantBlock,
  CantBlockAlone,
  CantBlockAttacker(Box<Permanent>),
  CantBlockAttackers(Box<Permanents>),
  CantBlockAttackersUnlessCost(Box<Permanents>, Box<Cost>),
  CantBlockUnlessAnotherDefender(Box<Permanents>),
  CantBlockUnlessAttackingPlayer(Condition),
  CantBlockUnlessCost(Box<Cost>),
  CantBlockUnlessOtherDefenders(Box<Comparison>, Box<Permanents>),
  CantCrew,
  CantHaveMoreThanNumberCountersOfType(Box<GameNumber>, CounterType),
  CantPhaseOut,
  CantTransform,
  SaddlesMountsAsThoughPowerWereGreater(Box<GameNumber>),
  CrewsVehiclesAsThoughPowerWereGreater(Box<GameNumber>),
  CrewsVehiclesUsingToughnessRatherThanPower,
  DamageDealtToItCantBePreventedOrRedirected,
  DecreaseEquipAbilityCostWhenTargetingAPermanent(CostReduction, Box<Permanents>),
  DetermineLethalDamageUsingPowerRatherThanToughness,
  DoesntUntapDuringControllersUntap,
  IsAColorlessSourceOfDamage,
  IsGoadedByPlayer(Box<Player>),
  MayAssignCombatDamageAsThoughNotBlocked,
  MayAssignCombatDamageDividedAsYouChooseAmongPlayerOrCreaturesAndPlaneswalkers(Box<Player>, Box<Permanents>),
  MayAssignCombatDamageToAPermanent(Box<Permanents>),
  MayBeExertedAsItAttacks,
  MayBeExertedAsItAttacksWithTrigger(Box<Actions>),
  MayChooseNotToUntapDuringUntap,
  MustAttack,
  MustAttackAPlayer(Box<Players>),
  MustAttackIfAnotherCreatureAttacks(Box<Permanents>),
  MustAttackPlaneswalker(Box<Permanent>),
  MustAttackPlayer(Box<Player>),
  MustBeBlocked,
  MustBeBlockedByADefender(Box<Permanents>),
  MustBeBlockedByAtLeastNumberDefenders(Box<GameNumber>),
  MustBeBlockedByEachDefender(Box<Permanents>),
  MustBeBlockedByExactlyOneDefender(Box<Permanents>),
  MustBlock,
  MustBlockAttacker(Box<Permanent>),
  MustBlockEachAttacker,
  UntapsDuringOtherPlayersUntapSteps(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ProtectableColor", content = "args"))]
pub enum ProtectableColor {
  AnyColor,
  Colored,
  Colors(Vec<Color>),
  ColorsOfPermanent(Box<Permanent>),
  ColorsOfPermanents(Box<Permanents>),
  ColorsWithMostVotesOrTiedForMostVotes,
  ItsOwnColors,
  Monocolored,
  Multicolored,
  NotAColorInCommanderColorIdentity,
  TheChosenColor,
  TheColorsOfSpell(Box<Spell>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Protectable", content = "args"))]
pub enum Protectable {
  FromActivatedAndTriggeredAbilities,
  FromCardName(NameFilter),
  FromTypes(Box<Cards>),
  FromColor(ProtectableColor),
  FromEverything,
  FromManaValue(Box<Comparison>),
  FromPermanents(Box<Permanents>),
  FromPlayers(Box<Players>),
  FromSpells(Box<Spells>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_UnspentMana", content = "args"))]
pub enum UnspentMana {
  AnyUnspentMana,
  UnspentGreenMana,
  UnspentRedMana,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PlayerEffect", content = "args"))]
pub enum PlayerEffect {
  CantGetCounters,
  CantGetCountersOfType(CounterType),

  MayActivatePowerUpAbilitiesOfPermanentsAnAdditionalTime(Box<Permanents>),
  MayPayAlternateCostForFirstPowerUpCostEachTurn(ManaCost),

  MayCastExiledCardForAlternateCost(Box<CardInExile>, Box<Cost>),
  MayCastASpellFromAmongExileWithoutPayingOnceEachTurn(Box<Spells>, Box<CardsInExile>),
  MayCastASpellFromHandWithoutPayingOnceEachPlayersTurn(Box<Spells>),
  MayCastExiledCardAndMaySpendManaAsThoughAnyTypeToCastIntoExile(Box<CardInExile>),
  MayCastSpellsFromAmongExiledAndMaySpendManaAsThoughAnyTypeToCastAndAsThoughTheyHadFlash(Box<Spells>, Box<CardsInExile>),
  MayCastSpellsFromGraveyardUsingTheirSneakAbility(Box<Spells>, Box<CardsInGraveyards>),
  MayCastSpellsFromGraveyardWithEffect(Box<Spells>, Box<CardsInGraveyards>, Vec<SpellEffect>),
  MayCastSpellsFromTopOfLibraryAndSpellsOfTypeWithEffect(Box<Spells>, Box<Spells>, Vec<SpellEffect>),
  MayCastTopCardOfLibrary,
  MayPlayCardsMilledThisWay,
  SpellsCastGainAbility(Box<Spells>, Vec<SpellEffect>),

  MayPlayLandsFromAmongExiledWithEffect(Box<CardsInExile>, Vec<EnterFlag>),
  MayPlayOneCardFromAmongExiledWithoutPaying(Box<CardsInExile>),

  FirstTwoCoinFlipsEachTurnAreHeadsAndYouWin,
  MayCastASpellFromAmongCardsMilledThisWay(Box<Spells>),
  MayCastASpellFromTheirGraveyardOnceEachTurnWithEffect(Box<Spells>, Vec<SpellEffect>),
  MayCastGraveyardCardUsingWarpAbility(Box<CardInGraveyards>),
  MayCastSpellsFromAmongExiledForAdditionalCost(Box<Spells>, Box<CardsInExile>, Box<Cost>),
  MayPlayExiledCardsWithEffect(Box<CardsInExile>, Vec<SpellEffect>),
  MayPlayTopCardOfLibraryForAlternateCost(Box<Cost>),

  MayPlayExiledCardsIf(Box<CardsInExile>, Box<Condition>),
  MayCastASpellFromGraveyardWithAdditionalCostOnceEachPlayersTurn(Box<Spells>, Box<Cost>, Box<Player>),
  MayPayAlternateCostForFirstUnearthCostEachTurn(ManaCost),
  MayActivateExhaustAbilitiesAsThoughTheyHaventBeenActivated,
  MayCastSpellsFromTopOfLibraryWithEffect(Box<Spells>, Vec<SpellEffect>),
  MayPlayGraveyardCards(Box<CardsInGraveyards>),
  MayCastGraveyardCardAsAnAdventure(Box<CardInGraveyards>),

  DecreaseCostToTurnPermanentsFaceUp(Box<Permanents>, CostReduction),
  MayPlayCardsFromTopOfLibrary,
  DecreaseUnlockCost(CostReduction),
  MayCastSpellsForAlternateCostAsThoughTheyHadFlash(Box<Spells>, Box<Cost>),
  MayCastSpellsFromGraveyardForAdditionalCostWithEffect(Box<Spells>, Box<Player>, Box<Cost>, Vec<SpellEffect>),
  CantPlayCardsFromHand,
  DecreaseFlashbackCosts(ManaCost),
  DecreaseCyclingCosts(ManaCost),
  MayCastSpellsFromGraveyardForAdditionalCost(Box<Spells>, Box<Player>, Box<Cost>),
  DecreasePlotFromHandCost(CostReduction),
  MayCastGraveyardCardUsingBestowAbility(Box<CardInGraveyards>),
  MayPlayALandOrCastASpellFromAmongCardsInGraveyardsOnceEachTurn(Box<CardsInGraveyards>, Box<Players>),
  MayPlayExiledCardsAndPayAlternateCostToCast(CardsInExile, Box<Cost>),
  MayPlayExiledCardsAndMaySpendManaAsThoughAnyTypeToCastWithTrigger(CardsInExile, Box<Actions>),
  AsLoseUnspentMana(UnspentMana, Vec<Action>),
  MayCastASpellFromAmongCardsInPlayersGraveyardOnceEachTurn(Box<Spells>, Box<CardsInGraveyards>, Box<Player>),
  MayPlayExiledCardsAndMaySpendManaAsThoughAnyTypeToCast(Box<CardsInExile>),
  MayCastExiledCardAndMaySpendColorlessManaAsThoughAnyColorToCast(Box<CardInExile>),
  MayPlotCardsFromTheTopOfTheirLibrary(CardsInLibrary),
  MayPlayLandsFromAmongCardsInPlayersGraveyard(Box<CardsInGraveyards>, Box<Player>),
  MayCastSpellsFromAmongCardsInPlayersGraveyard(Box<Spells>, Box<CardsInGraveyards>, Box<Player>),
  MayCastSpellsFromAmongCardsInPlayersGraveyardForAlternateCost(Box<Spells>, Box<CardsInGraveyards>, Box<Player>, Box<Cost>),
  GainsLifeRatherThanLoseLifeFromRadiation,
  CantAttackPlayerOrPlaneswalkerControlledBy(Box<Player>),
  CantAttackAPermanent(Box<Permanents>),
  CantBeCausedToSacrificePermanentsByAbilities(Box<Permanents>, Abilities),
  CantBeCausedToExilePermanentsByAbilities(Box<Permanents>, Abilities),
  MayCastASpellFromGraveyardWithEffect(Box<Spells>, Box<Player>, Vec<SpellEffect>),
  SpellsCastFromExileHaveAbility(Box<Spells>, Vec<SpellEffect>),
  MayCastASpellFromAmongExiledCardsAndMaySpendManaAsThoughAnyColorToCastOnceEachPlayersTurn(Box<Spells>, CardsInExile, Box<Player>),
  MayCastASpellFromAmongExiledCardsWithEffect(Box<Spells>, CardsInExile, Vec<SpellEffect>),
  DrawsCardsFromBottomOfTheirLibrary,
  MayPlayExiledCardAndMaySpendManaAsThoughAnyTypeToCast(Box<CardInExile>),
  MayCastOneSpellFromAmongExiledWithoutPaying(Box<Spells>, CardsInExile),
  ReduceManaCostOfActivatedAbilitiesNotLessThanOneX(Box<ActivatedAbilities>, CostReductionX, Box<GameNumber>),
  AsTheyCascadeTheyMayPutACardFromAmongExiledCardsOnBattlefiled(Box<Cards>, Vec<EnterFlag>),
  AssignsCombatDamageOfAttackingCreatures(Box<Permanents>),
  AttackingDoesntCauseCreaturesToTapIf(Box<Permanents>, Condition),
  CanActivateAbilitiesOnlyDuringTheirTurn,
  CanBeTheTargetOfSpellsAndAbilitiesAsThoughTheyDidntHaveHexproof(SpellsAndAbilities),
  CanCastSpellsFromRevealedHandOfPlayer(Box<Player>),
  CanCastSpellsOnlyAnyTimeTheyCouldCastASorcery,
  CanCastSpellsOnlyDuringTheirTurn,
  CanForetellCardsDuringEachPlayersTurn(Box<Players>),
  CanOnlyCastSpellsFromThierHand,
  CanOnlyUntapCardsOfTypeOfTheirChoiceDuringTheirUntapStep(Vec<CardType>),
  CanPlayLandsFromRevealedHandOfPlayer(Box<Player>),
  CantActivateAbilities(Box<ActivatedAbilities>),
  CantActivateAbilitiesOfCardsInGraveyards,
  CantActivateNonManaAbilities,
  CantAttackPlayer(Box<Player>),
  CantAttackWithCreatures(Box<Permanents>),
  CantBeAttackedExceptBy(Box<Permanents>),
  CantBeCausedToDiscardCardsBySpellAndAbilities(SpellsAndAbilities),
  CantBeCausedToSacrificePermanentsBySpellAndAbilities(Box<Permanents>, SpellsAndAbilities),
  CantBeTheTargetOfSpellsOrAbilities(SpellsAndAbilities),
  CantBecomeTheMonarch,
  CantBlockWithCreatures(Box<Permanents>),
  CantBlockWithMoreThanOneCreature,
  CantCastMoreThanNumberSpellsEachTurn(Box<GameNumber>, Box<Spells>),
  CantCastSpells(Box<Spells>),
  CantCastSpellsFromExile(Box<Spells>),
  CantCastSpellsFromGraveyards(Box<Spells>),
  CantCastSpellsFromLibraries(Box<Spells>),
  CantCastSpellsFromTheirHand(Box<Spells>),
  CantCycleCards,
  CantDrawCards,
  CantDrawMoreThanOneCardEachTurn,
  CantGainLife,
  CantLoseLife,
  CantLoseTheGame,
  CantPayLifeToActivateAbilities(Box<ActivatedAbilities>),
  CantPayLifeToCastSpells(Box<Spells>),
  CantPlayCardInHand(CardInHand),
  CantPlayLands,
  CantPlayLandsFromGraveyards,
  CantPlayLandsFromTheirHand,
  CantPlayLandsOfType(Box<Permanents>),
  CantSacrificePermanents(Box<Permanents>),
  CantSacrificePermanentsToActivateAbilities(Box<Permanents>, Box<ActivatedAbilities>),
  CantSacrificePermanentsToCastSpells(Box<Permanents>, Box<Spells>),
  CantSearchLibraries,
  CantUntapMoreThanNumberPermanentsDuringTheirUntapStep(Box<GameNumber>, Box<Permanents>),
  CantVentureIntoTheDungeonMoreThanOnceEachTurn,
  CantWinTheGame,
  ChoosesHowCreaturesBlock(Box<Permanents>),
  ChoosesHowPlayersVote,
  ChoosesWhichCreaturesAttack,
  ChoosesWhichCreaturesBlockAndHowTheyBlock,
  ControlsPlayersWhileTheyAreSearchingLibraries(Box<Players>),
  DamageDoesntCauseLifeLoss,
  DamageThatWouldReduceLifeTotalToLessThanNumberReducesItToThatNumberInstead(Box<GameNumber>),
  DecreaseAbilityCostOfCardsInPlayersGraveyard(Box<Cards>, Box<Player>, CostReduction),
  DecreaseBlitzCostsForEach(ManaCost, Box<GameNumber>),
  DecreaseBoastAbilityCostForEach(CostReduction, Box<GameNumber>),
  DecreaseCostOfForetellingCardsFromHand(ManaCost),
  DecreaseDashCost(CostReduction),
  DecreaseEquipAbilityCost(CostReduction),
  DecreaseEquipAbilityCostWhenTargetingPermanent(CostReduction, Box<Permanent>),
  DecreaseNinjutsuAbilityCost(CostReduction),
  DecreaseSpellCost(Box<Spells>, CostReduction),
  DecreaseSpellCostForEach(Box<Spells>, CostReduction, Box<GameNumber>),
  DecreaseSpellCostForEachTarget(Box<Spells>, CostReduction),
  DecreaseSpellCostOnlyColored(Box<Spells>, CostReduction),
  DecreaseSpellCostX(Box<Spells>, CostReductionX, Box<GameNumber>),
  DoesntLoseColoredManaAsStepsAndPhasesEnd(UnspentMana),
  DoesntLoseManaAsStepsAndPhasesEnd,
  DoesntLoseTheGameForHaving0OrLessLife,
  DrawsACardDuringEachPlayersUntapStep(Box<Players>),
  GetsAnAdditionalVote,
  GetsAnOptionalAdditionalVote,
  HasNoMaximumHandSize,
  Hexproof,
  HexproofFrom(Protectable),
  IncreaseAbilityCost(Box<ActivatedAbilities>, Box<Cost>),
  IncreaseDevotionToColorAndColorCombinationsByNumber(Box<GameNumber>),
  IncreaseFlashBackCosts(ManaCost),
  IncreaseMaximumHandSize(Box<GameNumber>),
  IncreaseSpellCost(Box<Spells>, Box<Cost>),
  IncreaseSpellCostForEach(Box<Spells>, Box<Cost>, Box<GameNumber>),
  IncreaseSpellCostForEachTarget(Box<Spells>, Box<Cost>),
  LifeTotalCantChange,
  MayActionOnce(Box<Action>),
  MayActivateAbilitiesOfCreaturesAsThoughTheyHadHaste(Box<Permanents>),
  MayActivateEquipAbilitiesAnyTimeTheyCouldCastAnInstant,
  MayActivateLoyaltyAbilitiesOfPlanewalkerTwice(Box<Permanent>),
  MayActivateLoyaltyAbilitiesTwiceEachTurn(Box<Permanents>),
  MayActivateLoyaltyAbilityOfPlaneswalkerAnyTimeTheyCouldCastAnInstant(Box<Permanent>),
  MayActivateLoyaltyAbilityOfPlaneswalkerDuringEachPlayersTurnAndAnyTimeTheyCouldCastAnInstant(Box<Permanent>, Box<Players>),
  MayActivateLoyaltyAbilityOfPlaneswalkersDuringEachPlayersTurnAndAnyTimeTheyCouldCastAnInstant(Box<Permanents>, Box<Players>),
  MayActivateLoyaltyAbilityOfPlanewalkerAnAdditionalNumberTimes(Box<Permanent>, Box<GameNumber>),
  MayActivateLoyaltyAbilityOfPlanewalkerAnAdditionalTime(Box<Permanent>),
  MayActivateLoyaltyAbilityOfPlanewalkersAnAdditionalTime(Box<Permanents>),
  MayAttackOnlyPlayerOrPlaneswalkersControlledBy(Box<Player>),
  MayCastASpellForAlternateCostOnceDuringEachPlayersTurn(Box<Spells>, Box<Cost>, Box<Players>),
  MayCastASpellFromGraveyard(Box<Spells>, Box<Player>),
  MayCastASpellFromGraveyardIntoExileAndMaySpendManaAsThoughAnyColorToCastOnce(Box<Spells>, Box<Player>),
  MayCastASpellFromGraveyardIntoExileWithAdditionalCostOnceEachPlayersTurn(Box<Spells>, Vec<Action>, Box<Player>),
  MayCastASpellFromGraveyardOnceEachPlayersTurn(Box<Spells>, Box<Player>),
  MayCastASpellFromHandOrTopOfLibraryWithoutPayingOnceEachPlayersTurn(Box<Spells>),
  MayCastASpellFromTopOfLibraryOnceEachTurn(Box<Spells>),
  MayCastASpellOfEachNonlandCardtypeFromAmongExiledCardsWithoutPaying(Box<CardsInExile>),
  MayCastCardFromGraveyardByPayingAddedCost(Box<CardInGraveyards>, Box<Cost>),
  MayCastCardInHandWithoutPaying(CardInHand),
  MayCastExiledCard(Box<CardInExile>),
  MayCastExiledCardAndMaySpendManaAsThoughAnyColorToCast(Box<CardInExile>),
  MayCastExiledCardAndMaySpendManaAsThoughAnyColorToCastIf(CardInExile, Condition),
  MayCastExiledCardAndMaySpendManaAsThoughAnyTypeToCast(Box<CardInExile>),
  MayCastExiledCardForAdditionalCost(CardInExile, Box<Cost>),
  MayCastExiledCardIntoExile(Box<CardInExile>),
  MayCastExiledCardWithEffect(CardInExile, Vec<SpellEffect>),
  MayCastExiledCardWithoutPaying(Box<CardInExile>),
  MayCastExiledSpell(CardInExile, Box<Spells>),
  MayCastExiledSpellWithoutPaying(CardInExile, Box<Spells>),
  MayCastGraveyardCard(Box<CardInGraveyards>),
  MayCastGraveyardCardForAlternateCastingCost(Box<CardInGraveyards>, Box<Cost>),
  MayCastGraveyardCardForAlternateCastingCostWithEnterActions(Box<CardInGraveyards>, Box<Cost>, Vec<EnterFlag>),
  MayCastGraveyardCardIntoExile(Box<CardInGraveyards>),
  MayCastGraveyardCardIntoExileForAlternateCastingCost(Box<CardInGraveyards>, Box<Cost>),
  MayCastGraveyardCardIntoExileIfSpell(Box<CardInGraveyards>, Box<Spells>),
  MayCastGraveyardCardIntoExileIfSpellForIncreasedCost(Box<CardInGraveyards>, Box<Spells>, ManaCost),
  MayCastGraveyardCardUsingBlitzAbility(Box<CardInGraveyards>),
  MayCastGraveyardCardUsingMutateAbility(Box<CardInGraveyards>),
  MayCastGraveyardCardWithEnterActions(Box<CardInGraveyards>, Vec<EnterFlag>),
  MayCastGraveyardCardWithTrigger(Box<CardInGraveyards>, Box<Actions>),
  MayCastGraveyardCardWithoutPayingIntoExile(Box<CardInGraveyards>),
  MayCastOneSpellFromAmongExiledEachTurn(Box<Spells>, CardsInExile),
  MayCastSpellsAsThoughTheyHadFlash(Box<Spells>),
  MayCastSpellsFromAmongExiled(Box<Spells>, CardsInExile),
  MayCastSpellsFromAmongExiledAndMaySpendManaAsThoughAnyColorToCast(Box<Spells>, CardsInExile),
  MayCastSpellsFromAmongExiledAndMaySpendManaAsThoughAnyTypeToCast(Box<Spells>, CardsInExile),
  MayCastSpellsFromAmongExiledAndMaySpendManaFromSnowSourcesAsThoughItWereAnyColorToCast(Box<CardsInExile>),
  MayCastSpellsFromAmongExiledForAlternateCastingCost(Box<Spells>, CardsInExile, Box<Cost>),
  MayCastSpellsFromAmongExiledWithoutPaying(Box<Spells>, CardsInExile),
  MayCastSpellsFromGraveyard(Box<Spells>),
  MayCastSpellsFromGraveyardIntoExile(Box<Spells>),
  MayCastSpellsFromHandWithoutPaying,
  MayCastSpellsFromOtherPlayersGraveyards,
  MayCastSpellsFromTheTopOfTheirGraveyardIntoExile(Box<Spells>),
  MayCastSpellsFromTopOfLibrary(Box<Spells>),
  MayCastSpellsFromTopOfLibraryAsThoughTheyHadFlash(Box<Spells>),
  MayCastSpellsFromTopOfLibraryForAlternateCost(Box<Spells>, Box<Cost>),
  MayCastSpellsFromTopOfLibraryWithAdditionalCost(Box<Spells>, Box<Cost>),
  MayCastSpellsFromTopOfLibrary_SpellsWithTrigger(Box<Spells>, Box<Spells>, Box<Actions>),
  MayCastSpellsFromTopOfPlayersLibrary(Box<Spells>, Box<Players>),
  MayCastSpellsWithoutPaying(Box<Spells>),
  MayCastSpellsWithoutPayingAndAsThoughTheyHadFlash(Box<Spells>),
  MayDiscardCardAnyTimeTheyCouldCastAnInstant(CardInHand),
  MayLookAtAnAdditionalNumberCardsAsTheySurveil(Box<GameNumber>),
  MayLookAtAndPlayCardsFromTheTopOfOtherPlayersLibraryAndMaySpendManaAsThoughAnyColorToCast(Box<Player>),
  MayLookAtFaceDownExiledCard(Box<CardInExile>),
  MayLookAtFaceDownExiledCards(Box<CardsInExile>),
  MayLookAtFaceDownPermanents(Box<Permanents>),
  MayLookAtTopCardOfLibraryAnyTime,
  MayPayAdditionalCostToCastSpellsForEffect(Box<Spells>, Box<Cost>, Vec<EnterFlag>),
  MayPayAlternateCostForASpellOnceEachTurn(ManaCost, Box<Spells>),
  MayPayAlternateCostForFirstCyclingCostEachTurn(ManaCost),
  MayPayAlternateCostForFirstEquipCostEachTurn(ManaCost),
  MayPayAlternateCostForSpells(Box<Cost>, Box<Spells>),
  MayPayAlternateCyclingCosts(ManaCost),
  MayPayAlternateEchoCosts(Box<Cost>, Box<Permanents>),
  MayPayLifeRatherThanMana(Box<GameNumber>, ManaSymbol),
  MayPayLifeToProduceManaAsManaAbility(Box<GameNumber>, ManaProduceSymbol),
  MayPayManaAnyTimeTheyCouldCastAnInstant(ManaCost, Vec<Action>),
  MayPayToIncrementOrDecrementADiceRoll(Box<Cost>),
  MayPayToReduceColoredManaCostOfSpells(Box<Cost>, ManaCost, Box<Spells>),
  MayPlayALandOrCastASpellFromAmongCardsInTheirGraveyardThatWerePutThereFromTheirLibraryOnceEachPlayers(Box<Permanents>, Box<Spells>, Box<Cards>, Box<Player>),
  MayPlayALandOrCastASpellFromAmongExiledCardsAndMaySpendManaAsThoughAnyColorToCastOnceEachPlayersTurnWithTrigger(Box<Permanents>, Box<Spells>, CardsInExile, Box<Player>, Box<Actions>),
  MayPlayALandOrCastASpellFromTheirGraveyardOfEachPermanentTypeDuringPlayersTurn(Box<Player>),
  MayPlayALandOrCastASpellFromTheirGraveyardOnceEachPlayersTurnWithEffect(Box<Permanents>, Box<Spells>, Box<Player>, Vec<SpellEffect>),
  MayPlayAdditionalLands(Box<GameNumber>),
  MayPlayAnAdditionalLand,
  MayPlayAnyNumberOfLandsDuringThierTurn,
  MayPlayColoredCardsFromHandAsRandomBasicLandOfThatCouldProduceOneOfThoseColors,
  MayPlayExiledCard(Box<CardInExile>),
  MayPlayExiledCardAndMaySpendManaAsThoughAnyColorToCast(Box<CardInExile>),
  MayPlayExiledCardAndMaySpendManaAsThoughAnyColorToCastWithTrigger(CardInExile, Box<Actions>),
  MayPlayExiledCardIf(CardInExile, Condition),
  MayPlayExiledCardWithEffect(CardInExile, Vec<SpellEffect>),
  MayPlayExiledCardWithTrigger(CardInExile, Box<Actions>),
  MayPlayExiledCardWithoutPaying(Box<CardInExile>),
  MayPlayExiledCards(Box<CardsInExile>),
  MayPlayExiledCardsAndMaySpendManaAsThoughAnyColorToCast(Box<CardsInExile>),
  MayPlayExiledCardsWithoutPaying(Box<CardsInExile>),
  MayPlayGraveyardCard(Box<CardInGraveyards>),
  MayPlayGraveyardCardWithEffect(Box<CardInGraveyards>, Vec<SpellEffect>),
  MayPlayLandsFromAmongExiled(Box<CardsInExile>),
  MayPlayLandsFromGraveyard(Box<CardsInGraveyards>),
  MayPlayLandsFromOutsideTheGame(Box<Cards>),
  MayPlayLandsFromTopOfLibrary(Box<Cards>),
  MayPlayLandsFromTopOfPlayersLibrary(Box<Players>),
  MayPlayOneCardFromAmongExiled(Box<CardsInExile>),
  MayPlayOneCardFromAmongExiledAndPayAlternateCostToCast(CardsInExile, Box<Cost>),
  MayPlayOneCardFromAmongExiledAndMaySpendManaAsThoughAnyColorToCast(Box<CardsInExile>),
  MayPlayTopCardOfLibraryWithoutPaying,
  MayPlayTwoCardsFromAmongExiled(Box<CardsInExile>),
  MayPlaysLandsFromOtherPlayersGraveyards,
  MayRemoveACounterOfTypeFromAPermanentToPlayPermanentsCrewCost(CounterType, Box<Permanents>, Box<Permanent>),
  MayRevealFirstCardDrawnDuringEachPlayersTurn(Box<Players>),
  MaySpendColoredManaAsThoughItWereAnotherColor(Color, Color),
  MaySpendColoredManaAsThoughItWereAnyColor(Color),
  MaySpendColoredManaAsThoughItWereAnyColorAndMaySpendOtherManaOnlyAsThoughItWereColorless(Color),
  MaySpendColoredManaAsThoughItWereAnyColorToPayForAbilities(Color, Abilities),
  MaySpendManaAsThoughItWasAnyColor,
  MaySpendManaAsThoughItWasAnyColorToCastSpells(Box<Spells>),
  MaySpendManaAsThoughItWasAnyColorToPayForAbilities(Abilities),
  MaySpendManaAsThoughItWasAnyTypeToActivateAbilities(Box<ActivatedAbilities>),
  MaySuspendCardsFromHand(Box<Cards>),
  MayTapPermanentsTheyDontControlForManaWithModifiers(Box<Permanents>, ManaUseModifier),
  MustAttackPlaneswalkerWithEachCreature(Box<Permanent>, Box<Permanents>),
  MustAttackPlayerOrPlaneswalkersControlledBy(Box<Player>),
  MustAttackWithANumberOfCreatures(Box<Comparison>, Box<Permanents>),
  MustAttackWithEachCreature(Box<Permanents>),
  NoteManaValueOfExiledCard,
  OnceDuringEachPlayersTurnMayAction(Box<Player>, Box<Action>),
  OnceEachTurnMayAction(Box<Action>),
  OnceEachTurnMayPayToIncrementOrDecrementADiceRoll(Box<Cost>),
  OnceEachTurnMayPayToRerollAnyNumberOfDiceRolled(Box<Cost>),
  PlaysWithCardInHandRevealed(CardInHand),
  PlaysWithHandRevealed,
  PlaysWithTopOfLibraryRevealed,
  Protection(Protectable),
  ReduceActivatedCost(Box<ActivatedAbilities>, CostReduction),
  ReduceManaCostOfActivatedAbilities(Box<ActivatedAbilities>, CostReduction),
  ReduceManaCostOfActivatedAbilitiesNotLessThanOne(Box<ActivatedAbilities>, CostReduction),
  ReduceMaximumHandSize(Box<GameNumber>),
  ReplaceForetellCostOfFirstCardForetoldEachTurn(ManaCost),
  RevealFirstCardDrawnDuringEachPlayersTurn(Box<Players>),
  RevealFirstCardDrawnDuringPlayersTurn(Box<Player>),
  RevealsEachCardDrawn,
  SetMaximumHandSize(Box<GameNumber>),
  SetMinimumSpellCost(Box<Spells>, Box<GameNumber>),
  Shroud,
  SkipsCombatPhase,
  SkipsDrawStep,
  SkipsMainPhase,
  SkipsUntapStep,
  SkipsUpkeepStep,
  SpellsAndAbilitiesTheyCantCantCauseThemToSearchTheirLibrary,
  SpellsCastFromHandHaveAbility(Box<Spells>, Vec<SpellEffect>),
  SpellsCastHaveAbility(Box<Spells>, Vec<SpellEffect>),
  SpellsControlledHaveAbility(Box<Spells>, Vec<SpellEffect>),
  TheNthSpellCastEachTurnHasAbility(Box<GameNumber>, Box<Spells>, Vec<SpellEffect>),
  UnspentManaBecomesColor(Color),
  UnspentManaBecomesColorless,
  UntapsPermanentsDuringEachPlayersUntapSteps(Box<Permanents>, Box<Players>),
  WhileChoosingTargetsMustChooseAtLeastOnePermanentIfAble(Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SagaChapter", content = "args"))]
pub enum SagaChapter {
  SagaChapter(Vec<i32>, Box<Actions>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_EnterOrFaceUpAction", content = "args"))]
pub enum EnterOrFaceUpAction {
  MayActions(Vec<EnterOrFaceUpAction>),
  EntersWithNumberCounters(Box<GameNumber>, CounterType),
  EnterAsACopyOfAPermanentUntil(Box<Permanents>, CopyEffects, Expiration),
  EntersWithPTOfChoice(Vec<PT>)
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_TransformAction", content = "args"))]
pub enum TransformAction {
  ChooseAPlayer(Box<Players>),
  GetAnEmblem(Vec<Rule>),
  TransformsWithNumberCounters(Box<GameNumber>, CounterType),
  AttachPermanentToAPlayer(Box<Permanent>, Box<Players>),
  BecomeACopyOfAnExiledCard(CardsInExile, CopyEffects)
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CastEffect", content = "args"))]
pub enum CastEffect {
  AdditionalCastingCost(Box<Cost>),
  AdditionalCastingCostForAllTargets(Box<Cost>),
  AdditionalCastingCostForEachTarget(Box<Cost>),
  AdditionalCastingCostForEachTargetBeyondTheFirst(Box<Cost>),
  AdditionalCastingCostIf(Box<Cost>, Condition),
  AdditionalCastingCostIfItTargetsAPermanent(Box<Cost>, Box<Permanents>),
  AdditionalCastingCostX(Box<Cost>),
  AlternateCastingCost(Box<Cost>),
  AlternateCastingCostIf(Box<Cost>, Condition),
  CantBeCastFromAnywhereOtherThanGraveyard,
  CantBeCastIf(Condition),
  CantBeCastUnless(Condition),
  CantChooseATarget(Box<Permanents>),
  CantSpendManaToCast,
  MayCastAsThoughItHadFlashForAdditionalCost(Box<Cost>),
  MayCastAsThoughItHadFlashIf(Condition),
  MayCastAsThoughItHadFlashIfItTargetsAPermanent(Box<Permanents>),
  MayCastAsThoughItHadFlashIfXIs(Box<Comparison>),
  MayCastAsThoughItHadFlashWithSpecialAction(Vec<Action>),
  MayCastWithoutPayingIf(Condition),
  MaySpendManaAsThoughAnyColorToCast,
  MaySpendManaAsThoughAnyTypeToCast,
  OptionalAdditionalCastingCost(Box<Cost>),
  OptionalAdditionalCastingCostForReflexiveTrigger(Box<Cost>, Box<Actions>),
  PayLifeForEachPreviousCastRatherThanManaForEachPreviousCast(Box<GameNumber>),
  ReduceCastingCost(CostReduction),
  ReduceCastingCostForAlternateCost(CostReduction, Box<Cost>),
  ReduceCastingCostForEach(CostReduction, Box<GameNumber>),
  ReduceCastingCostForEachAlternateCost(CostReduction, Box<Cost>),
  ReduceCastingCostForEachWithMaxReduction(CostReduction, Box<GameNumber>, CostReduction),
  ReduceCastingCostIf(CostReduction, Condition),
  ReduceCastingCostIfItTargetsACard(CostReduction, Box<Cards>),
  ReduceCastingCostIfItTargetsAPermanent(CostReduction, Box<Permanents>),
  ReduceCastingCostIfItTargetsASpell(CostReduction, Box<Spells>),
  ReduceCastingCostIfItTargetsASpellOrAbility(CostReduction, SpellsAndAbilities),
  ReduceCastingCostIfItsBargained(CostReduction),
  ReduceCastingCostX(CostReductionX, Box<GameNumber>),
  SpendOnlyColorManaOnX(Color),
  SpendOnlyColorsOfManaOnX(Vec<Color>),
  SpendOnlyManaFromPermanentsToCast(Box<Permanents>),
  XCantBeZero,
  XIs(Box<Comparison>)
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ClassAbility", content = "args"))]
pub enum ClassAbility {
  ClassAbility(ManaCost, Vec<Rule>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Companion", content = "args"))]
pub enum Companion {
  AllCardsPassFilter(Box<Cards>),
  EachCardPassesFilter(Box<Cards>, Box<Cards>),
  EachCardPassesGroupFilter(Box<Cards>, GroupFilter),
  IncreaseStartingDeckSize(Box<GameNumber>),
  NoCardPassesFilter(Box<Cards>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_DeckConstruction", content = "args"))]
pub enum DeckConstruction {
  CanBeYourCommander,

  Partner,
  PartnerCharacterSelect,
  PartnerFatherAndSon,
  PartnerFriendsForever,
  PartnerSurvivors,
  PartnerWith(NameString),

  DoctorsCompanion,

  ChooseABackground,

  CanHaveAnyNumberOfThisCard,
  CanHaveUptoNumberOfThisCard(Box<GameNumber>),

  ThisCardIsBanned,
  RemoveFromDeckIfNotPlayingForAnte,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ConspiracyDeck", content = "args"))]
pub enum ConspiracyDeck {
  ReduceStartingDeckSize(Box<GameNumber>),
  NoCardPassesFilter(Box<Cards>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ActivatedAbilityEffect", content = "args"))]
pub enum ActivatedAbilityEffect {
  IncreaseManaCost(ManaCost),
  AdditionalCostForEachColorManaSymbolInCosts(Box<Cost>, Color),
  AdditionalCost(Box<Cost>),
  ReduceManaCostNotLessThanOne(CostReduction),
  CantBeActivated,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_DeckBuildingAction", content = "args"))]
pub enum DeckBuildingAction {
  ChooseAColor(ChoosableColor),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_DraftAction", content = "args"))]
pub enum DraftAction {
  DraftFaceUp,
  RevealThisDraftedCard,
  GuessNameOfNextCardAPlayerDraftsFromThisPackAndTheyRevealThatCard,
  MayAddBoosterBackToDraft,
  MayLookAtNextCraftDraftedFromThisPack,
  NoteNumberOfCardsDraftedThisRound,
  NotePlayerWhoPassedPackToYou,
  PlayerToRightChoosesAColor_YouChooseAColor_PlayerToLeftChoosesAColor,
  RevealAndNoteNameOfNextDraftedCard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FaceUpDraftEffect", content = "args"))]
pub enum FaceUpDraftEffect {
  DraftCardsAtRandomUntilNumberCardsHaveBeenDrafted_TurnThisDraftCardFaceDown(Box<GameNumber>),
  AsDraftACardMayDraftAnAdditionalCardFromPack_PutThisDraftCardIntoThatBooster,
  AsDraftACardMayDraftAnAdditionalCardFromPack_TurnThisDraftCardCardFaceDown_PassNextBoosterWithoutDrafting,
  MayRemoveCardsFromDraftFaceDown,
  MayRemoveCardsFromDraftFaceUp,
  AsDraftACardOfType_MayRevealIt_NoteItsCreatureTypes_TurnThisDraftCardFaceDown(Box<Cards>),
  AsDraftACardOfType_MayRevealIt_NoteItsName_TurnThisDraftCardFaceDown(Box<Cards>),
  AsDraftACard_MayRevealIt_NoteItsName_TurnThisDraftCardFaceDown,
  MayTurnThisDraftCardFaceDown_LookAtAnUnopenedBoosterPackOrABoosterPackNotBeingLookedAt,
  MayTurnThisDraftCardFaceDown_LookAtNextCardDraftedByPlayerOfChoice,
  LastCardInEachBoosterGoesToThisPlayer,
  AfterDraftMayOfferATradeWithOtherPlayers,
  MayTurnThisDraftCardFaceDown_DraftEachCardInCurrentBoosterPackInsteadOfDraftingCardsThisRound,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PermanentAndSpellEffect", content = "args"))]
pub enum PermanentAndSpellEffect {
  ReplaceAllColorWordsWithNewColorWord(Color),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PermanentsAndSpells", content = "args"))]
pub enum PermanentsAndSpells {
  AnyPermanentOrSpell,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SpreeAction", content = "args"))]
pub enum SpreeAction {
  SpreeAction(Box<Cost>, Box<Actions>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_TieredAction", content = "args"))]
pub enum TieredAction {
  TieredAction(Box<Cost>, Box<Actions>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PawMode", content = "args"))]
pub enum PawMode {
  PawMode(i32, Box<Actions>),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CDA_Types", content = "args"))]
pub enum CDA_Types {
  AddCreatureTypeVariable(CreatureTypeVariable),
  Changeling,
  HasAllCreatureTypes,
  HasAllNonbasicLandTypes,
  AddCreatureTypes(Vec<CreatureType>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct CastUsingTeamwork(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct NotCastUsingTeamwork(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct WasAwakened(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct WasntAwakened(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct WasKicked(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct WasntKicked(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct CleavePaid(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct CleaveNotPaid(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct OverloadPaid(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct OverloadNotPaid(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct MadnessXWasPaid(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct MadnessXWasntPaid(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[allow(dead_code)]
pub struct Gift(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct GiftWasPromised(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct GiftWasntPromised(Box<Actions>);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
pub struct TriggerAndActions(Trigger, Box<Actions>);


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Rule", content = "args"))]
pub enum Rule {
  AnchorWord(VoteOption, Box<Rule>),

  StationChargedAnimate(GameRange, Vec<Rule>, PT),
  StationCharged(GameRange, Vec<Rule>),
  Station,

  BasicMayhem,
  Mayhem(Box<Cost>),
  WebSlinging(Box<Cost>),
  WarpX(Box<Cost>),
  Warp(Box<Cost>),
  CombatDamageCantBePrevented,
  Firebending(Box<GameNumber>),
  JobSelect,

  StackSpellsEffect(Box<Spells>, Vec<SpellEffect>),
  StackEffect(Box<SpellsAndAbilities>, Vec<StackEffect>),


  AllDamageIsDealtAsThoughItsSourceHadWither,
  NoMoreThanNumberCreaturesCanBlock(Box<GameNumber>),
  PermanentsCantPhaseIn(Box<Permanents>),
  PermanentsDyingDontCauseAbilitiesToTrigger(Box<Permanents>),
  CardsInEachPlayersLibrariesCantEnterTheBattlefield(Box<Cards>, Box<Players>),

  // Prevent Triggers
  PermanentsEnteringTheBattlefieldDontCauseAbilitiesToTrigger(Box<Permanents>),
  WardAbilitiesOfPermanentsDontTrigger(Box<Permanents>),

  // Duplicate Triggers
  APlayerDrawingACardCausesAbilitiesToTriggerAnAdditionalTime(Box<Players>, Abilities),
  APermanentAttackingCausesAbilitiesToTriggerAnAdditionalTime(Box<Permanents>, Abilities),
  APermanentBecomingTheTargetOfASpellOrAbilityCausesAbilitiesToTriggerAnAdditionalTime(Box<Permanents>, Box<SpellsAndAbilities>, Abilities),
  APermanentBeingDealtDamageCausesAbilitiesToTriggerAnAdditionalTime(Box<Permanents>, Abilities),
  APermanentDealingCombatDamageToAPlayerCausesAbilitiesToTriggerAnAdditionalTime(Box<Permanents>, Box<Players>, Abilities),
  APermanentDyingCausesAbilitiesToTriggerAnAdditionalTime(Box<Permanents>, Abilities),
  APermanentEnteringTheBattlefieldCausesAbilitiesToTriggerAnAdditionalTime(Box<Permanents>, Abilities),
  APermanentTurningFaceUpCausesAbilitiesToTriggerAnAdditionalTime(Box<Permanents>, Abilities),
  APermanentLeavingTheBattlefieldCausesAbilitiesToTriggerAnAdditionalTime(Box<Permanents>, Abilities),
  APlayerCastingOrCopyingASpellCausesAnAbilityToTriggerAnAdditionalTime(Box<Players>, Box<Spells>, Abilities),
  AbilitiesTriggerAnAdditionalTime(Abilities),

  // Villainous Choice
  APlayerFacingAVillainousChoiceFacesItAnAdditionalTime(Box<Players>),

  // Legends Rule
  TheLegendsRuleDoesntApply,
  TheLegendsRuleDoesntApplyToPermanents(Box<Permanents>),

  // Craft With
  CraftWithCraftables(Vec<Craftable>, ManaCost),
  CraftWithACraftable(Craftable, ManaCost),
  CraftWithANumberOfCraftables(Comparison, Craftable, ManaCost),
  CraftWithANumberOfGroupCraftables(Comparison, Craftable, GroupFilter, ManaCost),

  CardsCantEnterTheBattlefield(Box<Cards>),
  CardsInEachPlayersGraveyardsCantEnterTheBattlefield(Box<Cards>, Box<Players>),
  CombatDamageOfCreaturesCantBePrevented(Box<Permanents>),

  DamageCantBePrevented,
  DamageFromPermanentCantBePrevented(Box<Permanent>),
  DamageIsntRemovedFromCreatureDuringCleanup(Box<Permanent>),
  DamageIsntRemovedFromCreaturesDuringCleanup(Box<Permanents>),

  IncreaseBuybackCosts(ManaCost),
  IncreaseMorphCosts(ManaCost),

  ItCantBecomeNight,

  NoMoreThanNumberCreaturesCanAttack(Box<GameNumber>),
  NoMoreThanNumberCreaturesCanAttackPermanent(Box<GameNumber>, Box<Permanent>),
  NoMoreThanNumberCreaturesCanAttackPlayer(Box<GameNumber>, Box<Player>),

  WhilePlayersAreSearchingTheirLibraryTheyExileEachCardTheyFindAndPlayerMayPlayThoseCardsWhileTheyRemainExiledAndMaySpendManaAsThoughItWereAnyColor(Box<Players>, Box<Player>),

  ReplaceWouldLearn(ReplacableEventWouldLearn, Vec<ReplacementActionWouldLearn>),
  ReplaceWouldConnive(ReplacableEventWouldConnive, Vec<ReplacementActionWouldConnive>),

  // Rule: Keyword
  StartYourEngines,
  Harmonize(Box<Cost>),
  HarmonizeX(ManaCostX),
  Mobilize(Box<GameNumber>),
  AnnihilatorX(Box<GameNumber>),
  BestowX(Box<Cost>),
  CrewOnceEachTurn(i32),
  EmergeFromArtifact(Box<Cost>),
  Freerunning(Box<Cost>),
  FreerunningX(Box<Cost>),
  Impending(Box<GameNumber>, Box<Cost>),
  Offspring(Box<Cost>),
  Permanent_Gift(Vec<Action>),
  Saddle(Box<GameNumber>),
  Bargain,
  Plot(Box<Cost>),
  TopCardOfPlayersLibraryEffect(Box<Cards>, Box<Player>, Vec<LibraryCardEffect>),
  Mystery(Condition, Vec<Rule>),
  Disguise(Box<Cost>),
  Aftermath,
  BasicSuspend,
  KickerX(ManaCostX),
  DisguiseX(ManaCostX),
  SpaceSculptor,
  KickerForSpellAbility(Box<Cost>, Box<Rule>),
  SpliceOnto(Box<Spells>, Box<Cost>),
  ReinforceX(ManaCostX),
  MorphX(ManaCostX),
  SurgeX(ManaCostX),
  MiracleX(ManaCostX),
  FlashbackX(ManaCostX),
  // Awaken(Box<GameNumber>, Box<Cost>),
  Offering(Box<Cards>),
  Affinity(Box<Permanents>),
  Devour(Box<Permanents>, Box<GameNumber>),
  Backup(i32, Vec<Rule>),
  Suspend(Box<GameNumber>, Box<Cost>),
  SuspendX(ManaCostX, ActivateModifier),
  ProtectionAndDoesntRemovePermanents(Protectable, Box<Permanents>),

  #[serde(rename_all="PascalCase")]
  Prototype {
    mana_cost: CardManaCost,
    #[serde(rename="CardPT")]
    card_pt:   CardPT },

  Reinforce(Box<GameNumber>, Box<Cost>),
  Protection(Protectable),
  HexproofFrom(Protectable),
  TypeCycling(Box<Cards>, Box<Cost>),
  EnchantPlayer(Box<Players>),
  Fortify(Box<Cost>),
  Prowl(ManaCost),
  Absorb(i32),
  Equip(Box<Permanents>, Box<Cost>),
  EquipWithModifiers(Box<Permanents>, Box<Cost>, ActivateModifier),
  Annihilator(i32),
  Amplify(i32),
  Afterlife(i32),
  Afflict(i32),
  Surge(ManaCost),
  Ascend,
  Assist,
  AuraSwamp(Box<Cost>),
  Banding,
  BandsWithOthers(Box<Permanents>),
  BattleCry,
  Bestow(Box<Cost>),
  Blitz(Box<Cost>),
  Bloodthirst(Box<GameNumber>),
  BloodthirstX,
  Bushido(Box<GameNumber>),
  Buyback(Box<Cost>),
  Cascade,
  Casualty(Box<GameNumber>),
  CasualtyX,
  Champion(Box<Permanents>),
  // Cipher,
  CommanderNinjutsu(Box<Cost>),
  Compleated,
  Conspire,
  Convoke,
  Crew(i32),
  CumulativeUpkeep(Box<Cost>),
  Cycling(Box<Cost>),
  CyclingX(ManaCostX),
  Dash(Box<Cost>),
  Daybound,
  Deathtouch,
  Decayed,
  Defender,
  Delve,
  Demonstrate,
  Dethrone,
  Disturb(Box<Cost>),
  DoubleAgenda,
  DoubleStrike,
  DoubleTeam,
  Dredge(Box<GameNumber>),
  Echo(Box<Cost>),
  Embalm(Box<Cost>),
  Emerge(Box<Cost>),
  EnchantPermanent(Box<Permanents>),
  EnchantGraveyardCard(Box<CardsInGraveyards>, Box<Players>),
  Encore(Box<Cost>),
  Enlist,
  // Epic,
  Escape(Box<Cost>),
  Eternalize(Box<Cost>),
  Evoke(Box<Cost>),
  Evolve,
  Exalted,
  Exploit,
  Extort,
  Fabricate(i32),
  Fading(i32),
  Fear,
  FirstStrike,
  Flanking,
  Flash,
  FlashForCasters(Condition),
  Flashback(Box<Cost>),
  Flying,
  ForMirrodin,
  Foretell(Box<Cost>),
  ForetellX(Box<Cost>),
  Frenzy(i32),
  Fuse,
  Graft(i32),
  Gravestorm,
  Haste,
  Haunt,
  Hexproof,
  HiddenAgenda,
  Hideaway(i32),
  Horsemanship,
  Improvise,
  Increment,
  Indestructible,
  Infect,
  Ingest,
  Intimidate,
  JumpStart,
  Kicker(Box<Cost>),
  KickerXWithModifiers(ManaCostX, CastModifier),
  FlashbackWithModifier(Box<Cost>, CastModifier),
  SpecializeWithModifiers(Box<Cost>, ActivateModifier),
  Landwalk(Box<Permanents>),
  Lifelink,
  LivingMetal,
  LivingWeapon,
  Madness(Box<Cost>),
  Megamorph(Box<Cost>),
  Melee,
  Menace,
  Mentor,
  Miracle(Box<Cost>),
  Modular(Box<GameNumber>),
  MoreThanMeetsTheEye(Box<Cost>),
  Morph(Box<Cost>),
  Multikicker(Box<Cost>),
  Mutate(Box<Cost>),
  Myriad,
  Nightbound,
  Ninjutsu(Box<Cost>),
  Persist,
  Phasing,
  Poisonous(i32),
  Provoke,
  Prowess,
  Rampage(i32),
  Ravenous,
  Reach,
  ReadAhead,
  Rebound,
  Reconfigure(Box<Cost>),
  Recover(Box<Cost>),
  Renown(i32),
  Replicate(Box<Cost>),
  Retrace,
  Riot,
  Ripple(Box<GameNumber>),
  Scavenge(Box<Cost>),
  Shadow,
  Shroud,
  Skulk,
  Sneak(Box<Cost>),
  Soulbond,
  Soulshift(Box<GameNumber>),
  Specialize(Box<Cost>),
  SpecializeFromGraveyard(Box<Cost>),
  Spectacle(Box<Cost>),
  SplitSecond,
  Squad(Box<Cost>),
  StartingIntensity(Box<GameNumber>),
  Storm,
  Sunburst,
  UmbraArmor,
  Toxic(i32),
  Training,
  Trample,
  TrampleOverPlaneswalkers,
  Transmute(Box<Cost>),
  Tribute(i32),
  Undaunted,
  Undying,
  Unearth(Box<Cost>),
  Unleash,
  Vanishing,
  VanishingEnters(i32),
  Vigilance,
  Ward(Box<Cost>),
  Outlast(Box<Cost>),
  Transfigure(Box<Cost>),
  Wither,

  // Rule: CDA
  CDA_ColorButNotColorIdentity(SettableColor),
  CDA_Color(SettableColor),
  CDA_Power(Box<GameNumber>),
  CDA_Toughness(Box<GameNumber>),
  CDA_Types(CDA_Types),

  Companion(Companion),
  DeckConstruction(DeckConstruction),
  ConspiracyDeck(ConspiracyDeck),
  StartingHandSizeIs(Box<GameNumber>),
  SpellActions(Box<Actions>),

  SpellActions_Teamwork(i32, CastUsingTeamwork, NotCastUsingTeamwork),
  SpellActions_Awaken(Box<Cost>, WasAwakened, WasntAwakened),
  SpellActions_Tiered(Vec<TieredAction>),
  SpellActions_Kicker(Box<Cost>, WasKicked, WasntKicked),
  SpellActions_Cleave(Box<Cost>, CleavePaid, CleaveNotPaid),
  SpellActions_Overload(Box<Cost>, OverloadPaid, OverloadNotPaid),
  SpellActions_MadnessX(Box<Cost>, MadnessXWasPaid, MadnessXWasntPaid),
  SpellActions_Gift(Box<Action>, GiftWasPromised, GiftWasntPromised),

  SpellActions_Spree(Vec<SpreeAction>),
  SpellActions_AdditionalCostOptions(Vec<AdditionalCostOption>),
  SelfEffect(Vec<CardEffect>),
  SelfEffect_NonBattlefield(Vec<CardEffect>),
  AsSelfDraft(Vec<DraftAction>),
  FaceUpDraftEffect(FaceUpDraftEffect),
  AsSchemeIsSetInMotion(SingleScheme, Vec<SetInMotionAction>),
  AsPutIntoAGraveyardFromAnywhere(SingleCard, Vec<PutIntoGraveyardAction>),
  AsPermanentBecomesAttachedToAPermanent(Box<Permanent>, Box<Permanents>, Vec<AttachAction>),
  AsPermanentEnters(Box<Permanent>, Vec<ReplacementActionWouldEnter>),
  AsPermanentEscapes(Box<Permanent>, Vec<ReplacementActionWouldEnter>),
  AsPermanentEntersOrIsTurnedFaceUp(Box<Permanent>, Vec<EnterOrFaceUpAction>),
  AsPermanentIsTurnedFaceUp(Box<Permanent>, Vec<FaceUpAction>),
  AsPermanentTransforms(Box<Permanent>, Vec<TransformAction>),
  PlayerEffect(Box<Player>, Vec<PlayerEffect>),
  PlayerEffect_PlayerMayPayToIgnoreEffectUntil(Box<Players>, Vec<PlayerEffect>, Box<Cost>, Expiration),
  EachPlayerEffect(Box<Players>, Vec<PlayerEffect>),
  ThisSpellEffect(Vec<SpellEffect>),
  CardEffect(Box<Cards>, Vec<CardEffect>),
  EachCardInPlayersLibraryEffect(Box<Cards>, Box<Player>, Vec<LibraryCardEffect>),
  EachCardInPlayersHandEffect(Box<Cards>, Box<Player>, Vec<HandEffect>),
  EachCardInEachPlayersHandEffect(Box<Cards>, Box<Players>, Vec<HandEffect>),
  EachPermanentAndSpellEffect(PermanentsAndSpells, PermanentAndSpellEffect),
  PermanentLayerEffect(Box<Permanent>, Vec<StaticLayerEffect>),
  EachPermanentLayerEffect(Box<Permanents>, Vec<StaticLayerEffect>),
  EachPermanentStickyLayerEffect(Box<Permanents>, Vec<StaticLayerEffect>, Expiration),
  PermanentRuleEffect(Box<Permanent>, Vec<PermanentRule>),
  PermanentRuleEffect_PlayerMayPayToIgnoreEffectUntil(Box<Permanent>, Vec<PermanentRule>, Box<Player>, Box<Cost>, Expiration),
  EachPermanentRuleEffect(Box<Permanents>, Vec<PermanentRule>),
  EachCardInGraveyardEffect(Box<CardsInGraveyards>, Box<Player>, Vec<GraveyardCardEffect>),
  EachCardInAGraveyardEffect(Box<CardsInGraveyards>, Box<Players>, Vec<GraveyardCardEffect>),

  TriggerMayOnceEachTurnI(Trigger, Condition, Box<Actions>),
  TriggerMayOnceEachTurn(Trigger, Box<Actions>),
  TriggerModalA(Vec<TriggerAndActions>),
  TriggerA(Trigger, Box<Actions>),
  TriggerOnce(Trigger, Box<Actions>),
  TriggerOnceEachTurn(Trigger, Box<Actions>),
  TriggerOnceEachTurnI(Trigger, Condition, Box<Actions>),
  TriggerTwiceEachTurn(Trigger, Box<Actions>),
  TriggerI(Trigger, Condition, Box<Actions>),
  TriggerIOnce(Trigger, Condition, Box<Actions>),
  TriggerIOnceEachTurn(Trigger, Condition, Box<Actions>),
  TriggerI_Covercast(Trigger, Condition, Box<Actions>),

  Activated(Box<Cost>, Box<Actions>),
  ActivatedWithModifiers(Box<Cost>, Box<Actions>, ActivateModifier),
  FromExileOrBattlefield(Box<Rule>),
  FromExile(Box<Rule>),
  FromExileIf(Condition, Box<Rule>),
  FromStack(Box<Rule>),
  FromStackIf(Condition, Box<Rule>),
  FromGraveyardOrBattlefield(Box<Rule>),
  FromGraveyard(Box<Rule>),
  FromGraveyardIf(Condition, Box<Rule>),
  FromTopOfLibrary_Digital(Vec<Rule>),
  FromHand(Box<Rule>),
  FromAnyZone(Box<Rule>),
  FromCommandZone(Box<Rule>),
  FromCommandZoneOrBattlefield(Box<Rule>),
  SagaChapters(Vec<SagaChapter>),
  Visit(Box<Actions>),
  VisitAndPrize(Box<Actions>, Box<Actions>),
  DungeonLevel(DungeonRoomName, Box<Actions>, Vec<DungeonRoomName>),
  ClassAbilities(Vec<ClassAbility>),
  LevelUp(Box<Cost>, Vec<Level>),
  If(Condition, Vec<Rule>),
  Unless(Condition, Vec<Rule>),
  IfElse(Condition, Vec<Rule>, Vec<Rule>),
  IfCardIsInOpeningHand(Vec<Action>),
  MaxSpeed(Box<Rule>),

  AsGameBegins(Vec<Action>),
  BeforeDrawingOpeningHand(Vec<Action>),
  DrawAnAdditionalHandBeforeMulligans,
  YouAreTheStartingPlayer,
  BeforeShufflingDeckToStartTheGame(Vec<PregameAction>),

  PreventDamage(EventPreventDamage, Vec<ActionPreventDamage>),

  ReplaceAPlayerWouldCreateAToken(ReplacableEventAPlayerWouldCreateAToken, Vec<ReplacementActionAPlayerWouldCreateAToken>),
  ReplaceAPlayerWouldCreateTokens(ReplacableEventAPlayerWouldCreateTokens, Vec<ReplacementActionAPlayerWouldCreateTokens>),
  ReplaceAnEffectWouldCreateAnyNumberOfTokens(ReplacableEventAnEffectWouldCreateAnyNumberOfTokens, Vec<ReplacementActionAnEffectWouldCreateAnyNumberOfTokens>),
  ReplaceAnyNumberOfTokensWouldBeCreated(ReplacableEventAnyNumberOfTokensWouldBeCreated, Vec<ReplacementActionAnyNumberOfTokensWouldBeCreated>),
  ReplaceWouldBeginATurn(ReplacableEventWouldBeginATurn, Vec<ReplacementActionWouldBeginATurn>),
  ReplaceWouldBeginDrawStep(ReplacableEventWouldBeginDrawStep, Vec<ReplacementActionWouldBeginDrawStep>),
  ReplaceWouldCopyASpell(ReplacableEventWouldCopyASpell, Vec<ReplacementActionWouldCopyASpell>),
  ReplaceWouldCounterASpell(ReplacableEventWouldCounterASpell, Vec<ReplacementActionWouldCounterASpell>),
  ReplaceWouldDealDamage(ReplacableEventWouldDealDamage, Vec<ReplacementActionWouldDealDamage>),
  ReplaceWouldDestroy(ReplacableEventWouldDestroy, Vec<ReplacementActionWouldDestroy>),
  ReplaceWouldDiscard(ReplacableEventWouldDiscard, Vec<ReplacementActionWouldDiscard>),
  ReplaceWouldDraw(ReplacableEventWouldDraw, Vec<ReplacementActionWouldDraw>),
  ReplaceWouldEnter(ReplacableEventWouldEnter, Vec<ReplacementActionWouldEnter>),
  ReplaceWouldExplore(ReplacableEventWouldExplore, Vec<ReplacementActionWouldExplore>),
  ReplaceWouldFlipACoin(ReplacableEventWouldFlipACoin, Vec<ReplacementActionWouldFlipACoin>),
  ReplaceWouldGainLife(ReplacableEventWouldGainLife, Vec<ReplacementActionWouldGainLife>),
  ReplaceWouldGetEnergy(ReplacableEventWouldGetEnergy, Vec<ReplacementActionWouldGetEnergy>),
  ReplaceWouldLeaveTheBattlefield(ReplacableEventWouldLeaveTheBattlefield, Vec<ReplacementActionWouldLeaveTheBattlefield>),
  ReplaceWouldLoseLife(ReplacableEventWouldLoseLife, Vec<ReplacementActionWouldLoseLife>),
  ReplaceWouldLoseTheGame(ReplacableEventWouldLoseTheGame, Vec<ReplacementActionWouldLoseTheGame>),
  ReplaceWouldMill(ReplacableEventWouldMill, Vec<ReplacementActionWouldMill>),
  ReplaceWouldPayLife(ReplacableEventWouldPayLife, Vec<ReplacementActionWouldPayLife>),
  ReplaceWouldPlaneswalk(ReplacableEventWouldPlaneswalk, Vec<ReplacementActionWouldPlaneswalk>),
  ReplaceWouldProduceMana(ReplacableEventWouldProduceMana, Vec<ReplacementActionWouldProduceMana>),
  ReplaceWouldProliferate(ReplacableEventWouldProliferate, Vec<ReplacementActionWouldProliferate>),
  ReplaceWouldPutAPermanentOnTheBattlefield(ReplacableEventWouldPutAPermanentOnTheBattlefield, Vec<ReplacementActionWouldPutAPermanentOnTheBattlefield>),
  ReplaceWouldPutCounters(ReplacableEventWouldPutCounters, Vec<ReplacementActionWouldPutCounters>),
  ReplaceWouldPutIntoGraveyard(ReplacableEventWouldPutIntoGraveyard, Vec<ReplacementActionWouldPutIntoGraveyard>),
  ReplaceWouldReduceLife(ReplacableEventWouldReduceLife, Vec<ReplacementActionWouldReduceLife>),
  ReplaceWouldRollDice(ReplacableEventWouldRollDice, Vec<ReplacementActionWouldRollDice>),
  ReplaceWouldRollPlanarDice(ReplacableEventWouldRollPlanarDice, Vec<ReplacementActionWouldRollPlanarDice>),
  ReplaceWouldScry(ReplacableEventWouldScry, Vec<ReplacementActionWouldScry>),
  ReplaceWouldSearchLibrary(ReplacableEventWouldSearchLibrary, Vec<ReplacementActionWouldSearchLibrary>),
  ReplaceWouldUntap(ReplacableEventWouldUntap, Vec<ReplacementActionWouldUntap>),

  CastEffect(CastEffect),
  ActivatedAbilityEffect(Box<ActivatedAbilities>, ActivatedAbilityEffect),
  CantVentureIntoThisDungeonUnlessNamed,
  CountsAsACardWithNameForSpellsNamed(NameString, NameString),
  DeckBuildingIfCommander(Vec<DeckBuildingAction>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldPlaneswalkLookAtTheTopNumberCardsOfPlanarDeckAction", content = "args"))]
pub enum ReplacementActionWouldPlaneswalkLookAtTheTopNumberCardsOfPlanarDeckAction {
  PutACardOnBottom,
  PutTheRemainingCardOnTopInAnyOrder,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction", content = "args"))]
pub enum ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction {
  PutAGenericCardIntoGraveyard,
  PutAGenericCardIntoHand,
  PutAGenericCardOnTopOfLibrary,
  PutTheRemainingCardsIntoGraveyard,
  PutTheRemainingCardsOnTheBottomOfLibraryInARandomOrder,
  PutTheRemainingCardsOnTheBottomOfLibraryInAnyOrder,
  PutTheRemainingCardsOnTopOfLibraryInAnyOrder,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldPutIntoGraveyardCost", content = "args"))]
pub enum ReplacementActionWouldPutIntoGraveyardCost {
  ExileItInstead
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldPayLife", content = "args"))]
pub enum ReplacementActionWouldPayLife {
  ExileTheTopNumberCardsOfLibrary(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldPlaneswalk", content = "args"))]
pub enum ReplacementActionWouldPlaneswalk {
  ChaosEnsues,
  LookAtTheTopNumberCardsOfPlanarDeck(Box<GameNumber>, Vec<ReplacementActionWouldPlaneswalkLookAtTheTopNumberCardsOfPlanarDeckAction>),
  Planeswalk,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldGetEnergy", content = "args"))]
pub enum ReplacementActionWouldGetEnergy {
  GetEnergy(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldLeaveTheBattlefield", content = "args"))]
pub enum ReplacementActionWouldLeaveTheBattlefield {
  ExileItInstead,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldPutIntoGraveyardPutCounters", content = "args"))]
pub enum ReplacementActionWouldPutIntoGraveyardPutCounters {
  ACounterOfTypeOnCardInExile(CounterType, Box<CardInExile>),
  NumberCountersOfTypeOnPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldPutIntoGraveyard", content = "args"))]
pub enum ReplacementActionWouldPutIntoGraveyard {
  CreateFutureTrigger(FutureTrigger, Box<Actions>),
  CreatePlayerEffectUntil(Box<Player>, Vec<PlayerEffect>, Expiration),
  CreateTokens(Vec<CreatableToken>),
  ExileItInstead,
  ExileItWithACounterInstead(CounterType),
  ExileItWithNumberCountersInstead(Box<GameNumber>, CounterType),
  GainLife(Box<GameNumber>),
  If(Condition, Vec<ReplacementActionWouldPutIntoGraveyard>),
  LoseLife(Box<GameNumber>),
  MayAction(Box<ReplacementActionWouldPutIntoGraveyard>),
  MustCost(ReplacementActionWouldPutIntoGraveyardCost),
  PlayerAction(Box<Player>, Box<ReplacementActionWouldPutIntoGraveyard>),
  PutCounters(Vec<ReplacementActionWouldPutIntoGraveyardPutCounters>),
  PutItInOwnersHandInstead,
  PutItOnBottomOfOwnersLibraryInstead,
  PutItOnTopOfOwnersLibraryInstead,
  ReflexiveTrigger(Box<Actions>),
  RevealItAndPutItOnBottomOfOwnersLibraryInstead,
  ShuffleItIntoLibraryInstead,
  TakeAnExtraTurn,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldGainLife", content = "args"))]
pub enum ReplacementActionWouldGainLife {
  DrawNumberCards(Box<GameNumber>),
  GainLife(Box<GameNumber>),
  GainNoLifeInstead,
  LoseLife(Box<GameNumber>),
  PlayerAction(Box<Player>, Box<ReplacementActionWouldGainLife>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldMill", content = "args"))]
pub enum ReplacementActionWouldMill {
  PlayerAction(Box<Player>, Box<ReplacementActionWouldMill>),
  MillNumberCards(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldProduceMana", content = "args"))]
pub enum ReplacementActionWouldProduceMana {
  WouldProduceMana_AddMana(ManaProduce),
  WouldProduceMana_ProduceMultiple(Box<GameNumber>),
  WouldProduceMana_ReplaceColor(Color),
  WouldProduceMana_ReplaceType(ManaProduce),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldDrawCost", content = "args"))]
pub enum ReplacementActionWouldDrawCost {
  DiscardACard,
  PutAGraveyardCardOntoBattlefield(Box<CardsInGraveyards>, Vec<EnterFlag>),
  PutACardFromGraveyardIntoHand(Box<CardsInGraveyards>),
  PayLife(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldDrawPutCounters", content = "args"))]
pub enum ReplacementActionWouldDrawPutCounters {
  ACounterOfTypeOnPermanent(CounterType, Box<Permanent>),
  NumberCountersOfTypeOnPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldDraw", content = "args"))]
pub enum ReplacementActionWouldDraw {
  AnyPlayerMayCost(Box<Players>, ReplacementActionWouldDrawCost),
  CastExiledCardWithoutPaying(CardInExile),
  ChooseAPlayer(Box<Players>),
  ChooseAnAction(Vec<Vec<ReplacementActionWouldDraw>>),
  CreatePlayerEffectUntil(Box<Player>, Vec<PlayerEffect>, Expiration),
  CreateTokens(Vec<CreatableToken>),
  DiscardACard,
  DiscardTheCardDrawnThisWay,
  DrawACard,
  DrawNumberCards(Box<GameNumber>),
  EachPlayerAction(Box<Players>, Box<ReplacementActionWouldDraw>),
  ExileCardsFromTheTopOfLibraryUntilACardOfTypeIsExiled(Box<CardsInLibrary>),
  ExileTheTopCardOfPlayersLibrary(Box<Player>),
  ExileTheTopNumberCardsOfLibrary(Box<GameNumber>),
  ExileTopCardOfLibrary,
  ExileTopCardOfLibraryFaceDown,
  GainLife(Box<GameNumber>),
  If(Condition, Vec<ReplacementActionWouldDraw>),
  IfElse(Condition, Vec<ReplacementActionWouldDraw>, Vec<ReplacementActionWouldDraw>),
  LookAtTheTopNumberCardsOfLibrary(Box<GameNumber>, Vec<ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction>),
  LoseLife(Box<GameNumber>),
  LoseTheGame,
  MayAction(Box<ReplacementActionWouldDraw>),
  MillACard,
  MustCost(ReplacementActionWouldDrawCost),
  PermanentDealsDamage(Box<Permanent>, Box<GameNumber>, Box<DamageRecipients>),
  PlayerAction(Box<Player>, Box<ReplacementActionWouldDraw>),
  PlayerActions(Box<Player>, Vec<ReplacementActionWouldDraw>),
  PlayerMustCost(Box<Player>, ReplacementActionWouldDrawCost),
  PutACardFromOutsideGameInHand(Box<Cards>),
  PutAPermanentIntoItsOwnersHand(Box<Permanents>),
  PutCounters(Vec<ReplacementActionWouldDrawPutCounters>),
  PutEachExiledCardOnTheBottomOfTheirOwnersLibraryInARandomOrder(CardsInExile),
  PutExiledCardIntoOwnersHand(CardInExile),
  PutTheTopCardOfTheExiledPileIntoHand,
  PutTopOfLibraryInGraveyard,
  RevealCardsFromTheTopOfLibraryUntilACardOfTypeIsRevealed(Box<Cards>, Vec<RevealTheTopNumberCardsOfLibraryAction>),
  RevealTheCardDrawnThisWay,
  RevealTheTopNumberCardsOfLibrary(Box<GameNumber>, Vec<RevealTheTopNumberCardsOfLibraryAction>),
  RevealTopCardOfLibrary,
  SearchLibrary(Vec<SearchLibraryAction>),
  SkipThatDraw,
  Unless(Condition, Vec<ReplacementActionWouldDraw>),
  WinTheGame,
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ActionPreventDamagePutCounters", content = "args"))]
pub enum ActionPreventDamagePutCounters {
  ACounterOfTypeOnPermanent(CounterType, Box<Permanent>),
  NumberCountersOfTypeOnPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
  NumberCountersOfTypeOnEachPlayer(Box<GameNumber>, CounterType, Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ActionPreventDamageRemoveCounters", content = "args"))]
pub enum ActionPreventDamageRemoveCounters {
  ACounterOfTypeFromPermanent(CounterType, Box<Permanent>),
  NumberCountersOfTypeFromPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ActionPreventDamageCost", content = "args"))]
pub enum ActionPreventDamageCost {
  PayMana(ManaCost),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ActionPreventDamageReflesiveActionTriggerRemoveCounters", content = "args"))]
pub enum ActionPreventDamageReflesiveActionTriggerRemoveCounters {
  RemoveCounters(Vec<ActionPreventDamageRemoveCounters>)
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ActionPreventDamage", content = "args"))]
pub enum ActionPreventDamage {
  If(Condition, Vec<ActionPreventDamage>),
  IfElse(Condition, Vec<ActionPreventDamage>, Vec<ActionPreventDamage>),
  Unless(Condition, Vec<ActionPreventDamage>),

  PreventAllButSomeOfThatDamage(Box<GameNumber>),
  PreventSomeOfThatDamage(Box<GameNumber>),
  PreventThatDamage,

  PermanentDealsDamage(Box<Permanent>, Box<GameNumber>, Box<DamageRecipient>),
  SpellDealsDamage(Box<Spell>, Box<GameNumber>, Box<DamageRecipient>),
  HaveSpellDealDamage(Box<Spell>, Box<GameNumber>, Box<DamageRecipient>),
  VanguardDealsDamage(SingleVanguard, Box<GameNumber>, Box<DamageRecipient>),

  EachPlayerAction(Box<Players>, Box<ActionPreventDamage>),
  MayAction(Box<ActionPreventDamage>),
  MayActions(Vec<ActionPreventDamage>),
  PlayerMayCost(Box<Player>, ActionPreventDamageCost),

  ChooseAPlayer(Box<Players>),

  CreateFutureTrigger(FutureTrigger, Box<Actions>),
  ReflexiveTrigger(Box<Actions>),
  ReflexiveActionTrigger_CountersRemoved(Box<ActionPreventDamageReflesiveActionTriggerRemoveCounters>, Box<Actions>),

  CreateTokens(Vec<CreatableToken>),
  DrawNumberCards(Box<GameNumber>),
  ExileNumberGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
  ExileTheTopNumberCardsOfLibrary(Box<GameNumber>),
  GainLife(Box<GameNumber>),
  MillNumberCards(Box<GameNumber>),
  PlayerAction(Box<Player>, Box<ReplacementActionWouldDealDamage>),

  PutCounters(Vec<ActionPreventDamagePutCounters>),
  RemoveCounters(Vec<ActionPreventDamageRemoveCounters>),
  ShufflePermanentIntoLibrary(Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldDealDamageCost", content = "args"))]
pub enum ReplacementActionWouldDealDamageCost {
  ExileNumberGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldDealDamagePutCounters", content = "args"))]
pub enum ReplacementActionWouldDealDamagePutCounters {
  NumberCountersOfTypeOnPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldDealDamageRemoveCounters", content = "args"))]
pub enum ReplacementActionWouldDealDamageRemoveCounters {
  ACounterOfTypeFromPermanent(CounterType, Box<Permanent>),
  NumberCountersOfTypeFromPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldDealDamage", content = "args"))]
pub enum ReplacementActionWouldDealDamage {
  Unless(Condition, Vec<ReplacementActionWouldDealDamage>),

  PutCounters(Vec<ReplacementActionWouldDealDamagePutCounters>),
  RemoveCounters(Vec<ReplacementActionWouldDealDamageRemoveCounters>),

  LoseTheGame,

  CancelThatDamage,
  ContinueDealingDamage,
  DealDamageAsThoughItHadInfect,
  DealDamageButHealPreviousDamage,

  DealDamageInstead(Box<GameNumber>),
  DealSomeDamageToRecipientInstead(Box<GameNumber>, Box<DamageRecipients>),
  DealToAnyTargetInstead(Box<SingleDamageRecipient>),
  DealToCreatureOrPlaneswalkerInstead(Box<Permanent>),
  DealToPlayerInstead(Box<Player>),

  SpellDealsDamage(Box<Spell>, Box<GameNumber>, Box<DamageRecipient>),

  MayActions(Vec<ReplacementActionWouldDealDamage>),
  MustCost(ReplacementActionWouldDealDamageCost),

  DestroyPermanent(Box<Permanent>),
  DrawNumberCards(Box<GameNumber>),
  ExileTheTopNumberCardsOfLibrary(Box<GameNumber>),
  GainControlOfPermanent(Box<Permanent>),
  MillNumberCards(Box<GameNumber>),
  PlayerAction(Box<Player>, Box<ReplacementActionWouldDealDamage>),
  SacrificeNumberPermanents(Box<GameNumber>, Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldScry", content = "args"))]
pub enum ReplacementActionWouldScry {
  DrawNumberCards(Box<GameNumber>),
  Scry(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldReduceLife", content = "args"))]
pub enum ReplacementActionWouldReduceLife {
  TransformPermanent(Box<Permanent>),
  SetLifeTotal(Box<GameNumber>),
  Unless(Box<Condition>, Vec<ReplacementActionWouldReduceLife>),
  LoseTheGame,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldLoseTheGame", content = "args"))]
pub enum ReplacementActionWouldLoseTheGame {
  DrawNumberCards(Box<GameNumber>),
  ExilePermanent(Box<Permanent>),
  ShuffleHandGraveyardAndPermanentsIntoLibrary,
  SetLifeTotal(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldBeginDrawStepCost", content = "args"))]
pub enum ReplacementActionWouldBeginDrawStepCost {
  SkipThisDrawStep,
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldBeginDrawStep", content = "args"))]
pub enum ReplacementActionWouldBeginDrawStep {
  MayCost(ReplacementActionWouldBeginDrawStepCost),
  If(Box<Condition>, Vec<ReplacementActionWouldBeginDrawStep>),
  GainLife(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldBeginATurnCost", content = "args"))]
pub enum ReplacementActionWouldBeginATurnCost {
  SkipThisTurn,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldBeginATurn", content = "args"))]
pub enum ReplacementActionWouldBeginATurn {
  MayCost(ReplacementActionWouldBeginATurnCost),
  SkipTurn,
  UntapPermanent(Box<Permanent>),
  If(Condition, Vec<ReplacementActionWouldBeginATurn>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldSearchLibrary", content = "args"))]
pub enum ReplacementActionWouldSearchLibrary {
  SearchTopNumberCardsOfLibraryInstead(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldRollDice", content = "args"))]
pub enum ReplacementActionWouldRollDice {
  RollThatManyAndMayExchangeOneWithPermanentsBasePowerOrBaseToughness(Box<Permanent>),
  RollThatManyPlusOneAndIgnoreLowestInstead,
  RollThatManyPlusOneAndPlayerChoosesOneToIgnore(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldRollPlanarDice", content = "args"))]
pub enum ReplacementActionWouldRollPlanarDice {
  WouldRollDice_RollThatManyPlusOneAndIgnoreOne,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureReplacableEventWouldAdapt", content = "args"))]
pub enum FutureReplacableEventWouldAdapt {
  NextTimeCreatureAdaptsThisTurn(Box<Permanent>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldAdapt", content = "args"))]
pub enum ReplacementActionWouldAdapt {
  AdaptAsThoughtItHadNoCounters(CounterType),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldPutCounters", content = "args"))]
pub enum ReplacementActionWouldPutCounters {
  PutNewAmount(Box<GameNumber>),
  CreatePlayerEffectUntil(Box<Player>, Vec<PlayerEffect>, Expiration),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldUntapCost", content = "args"))]
pub enum ReplacementActionWouldUntapCost {
  RemoveCounters(Vec<ReplacementActionWouldUntapRemoveCounters>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldUntapPutCounters", content = "args"))]
pub enum ReplacementActionWouldUntapPutCounters {
  NumberCountersOfTypeOnPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldUntapRemoveCounters", content = "args"))]
pub enum ReplacementActionWouldUntapRemoveCounters {
  ACounterOfTypeFromPermanent(CounterType, Box<Permanent>),
  AllCountersOfTypeFromPermanent(CounterType, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldUntap", content = "args"))]
pub enum ReplacementActionWouldUntap {
  If(Box<Condition>, Vec<ReplacementActionWouldUntap>),
  MustCost(ReplacementActionWouldUntapCost),
  PutCounters(Vec<ReplacementActionWouldUntapPutCounters>),
  RemoveCounters(Vec<ReplacementActionWouldUntapRemoveCounters>),
  UntapPermanent(Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldDestroy", content = "args"))]
pub enum ReplacementActionWouldDestroy {
  RegeneratePermanent(Box<Permanent>),
  CancelDestroy,
  RemoveAllDamageFromPermanent(Box<Permanent>),
  SacrificePermanent(Box<Permanent>),
  CreatePermanentLayerEffectUntil(Box<Permanent>, Vec<LayerEffect>, Expiration),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldDiscard", content = "args"))]
pub enum ReplacementActionWouldDiscard {
  DiscardItToTopOfLibraryInstead,
  MayAction(Box<ReplacementActionWouldDiscard>),
  MayActions(Vec<ReplacementActionWouldDiscard>),
  RevealItAndPutItOnTopOfLibraryInstead,
  PutItOntoTheBattlefieldInstead(Vec<EnterFlag>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldCounterASpell", content = "args"))]
pub enum ReplacementActionWouldCounterASpell {
  ExileSpell(Box<Spell>),
  MayAction(Box<ReplacementActionWouldCounterASpell>),
  PlayExiledCardWithoutPaying(Box<CardInExile>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldFlipACoin", content = "args"))]
pub enum ReplacementActionWouldFlipACoin {
  FlipTwoCoinsAndIgnoreOne,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldPutAPermanentOnTheBattlefield", content = "args"))]
pub enum ReplacementActionWouldPutAPermanentOnTheBattlefield {
  WouldPutPermanentOnBattlefield_PutPermanentOnBattlefield,
  SacrificeAPermanent(Box<Permanents>),
  PlayerAction(Box<Player>, Box<ReplacementActionWouldPutAPermanentOnTheBattlefield>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldCopyASpell", content = "args"))]
pub enum ReplacementActionWouldCopyASpell {
  WouldCopyASpell_CopyAnAdditionalTimeAndMayChooseNewTargets,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldProliferate", content = "args"))]
pub enum ReplacementActionWouldProliferate {
  ProliferateNumberTimes(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldLearn", content = "args"))]
pub enum ReplacementActionWouldLearn {
  PutGraveyardCardOntoBattlefield(Box<CardInGraveyards>, Vec<EnterFlag>),
  Learn,
  ChooseAnAction(Vec<Vec<ReplacementActionWouldLearn>>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldConnive", content = "args"))]
pub enum ReplacementActionWouldConnive {
  DrawACard,
  CreatureConnives(Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldMask", content = "args"))]
pub enum ReplacementActionWouldMask {
  TurnItFaceUpInstead,
}





#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldEnterCost", content = "args"))]
pub enum ReplacementActionWouldEnterCost {
  DiscardACardOfType(Box<Cards>),
  EntersTapped,
  ExileNumberGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
  ExileTwoCardsFromAmongPlayersGraveyards(Box<CardsInGraveyards>, Box<Players>),
  PayLife(Box<GameNumber>),
  PutANumberOfExiledCardsIntoOwnersGraveyard(Box<GameNumber>, CardsInExile),
  PutAPermanentIntoItsOwnersHand(Box<Permanents>),
  RevealACardOfTypeFromHand(Box<Cards>),
  RevealAnyNumberOfCardsOfTypeFromHand(Box<Cards>),
  SacrificeAPermanent(Box<Permanents>),
  SacrificeNumberPermanents(Box<GameNumber>, Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_EnterFlag", content = "args"))]
pub enum EnterFlag {
  EntersWithLayerEffectUntil(Vec<LayerEffect>, Expiration),
  EntersAsFaceDownArtifactCreature(PT, CreatureType),
  EntersAsFaceDownCreatureWithAbilitiesAndNotedName(PT, Vec<Rule>, NameFilter),
  EntersAsFaceDownLand(LandType),
  EntersAsNonAuraEnchantment,
  EntersAttachedToAPermanent(Box<Permanents>),
  EntersAttachedToPermanent(Box<Permanent>),
  EntersAttachedToPlayer(Box<Player>),
  EntersAttacking,
  EntersAttackingPlayer(Box<Player>),
  EntersAttackingPlayerOrPlaneswalkerControlledBy(Box<Player>),
  EntersBlockingAttacker(Box<Permanent>),
  EntersConverted,
  EntersFaceDown,
  EntersFlipped,
  EntersNormally,
  EntersTapped,
  EntersTransformed,
  EntersUnderAPlayersControl(Box<Players>),
  EntersUnderOwnersControl,
  EntersUnderPlayersControl(Box<Player>),
  EntersWithACounter(CounterType),
  EntersWithLayerEffect(Vec<LayerEffect>),
  EntersWithNotedCounters,
  EntersWithNumberCounters(Box<GameNumber>, CounterType),
  EntersWithPerpetualEffect(Vec<PerpetualEffect>),
  If(Condition, Vec<EnterFlag>),
  IfCardPassesFilter(Box<Cards>, Vec<EnterFlag>),
  IfPassesFilter(Box<Permanents>, Vec<EnterFlag>),
  MayActions(Vec<EnterFlag>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldEnterPutCounters", content = "args"))]
pub enum ReplacementActionWouldEnterPutCounters {
  ACounterOfTypeOnAPermanent(CounterType, Box<Permanents>),
  NumberCountersOfTypeOnPlayer(Box<GameNumber>, CounterType, Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldEnterRemoveCounters", content = "args"))]
pub enum ReplacementActionWouldEnterRemoveCounters {
  AllCountersFromAnyNumberOfPermanents(Box<Permanents>),
  AllCountersFromEachPermanent(Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldEnter", content = "args"))]
pub enum ReplacementActionWouldEnter {
  APlayerAction(Box<Players>, Box<ReplacementActionWouldEnter>),
  BecomeDay,
  ChooseABasicLandType,
  ChooseACardName(Box<CardsInOracle>),
  ChooseACardtype,
  ChooseACardtypeExceptFromList(Vec<CardType>),
  ChooseACardtypeFromList(Vec<CardType>),
  ChooseACardtypeSharedAmongExiledCards(Box<CardsInExile>),
  ChooseAColor(ChoosableColor),
  ChooseAColorAndCreatureType(Vec<ColorAndCreatureType>),
  ChooseACreatureType,
  ChooseACreatureTypeFromList(Vec<CreatureType>),
  ChooseADirection,
  ChooseALandType,
  ChooseANumberBetween(i32, i32),
  ChooseANumberFromAmongAtRandom(Vec<i32>),
  ChooseANumberGreaterThanNumber(i32),
  ChooseAPermanent(Box<Permanents>),
  ChooseAPlaneswalkerType,
  ChooseAPlayer(Box<Players>),
  ChooseEvenOrOdd,
  ChooseLandType(Vec<LandType>),
  ChooseNumberAbilities(Box<GameNumber>, Vec<Rule>),
  ChooseTwoBasicLandTypes,
  ChooseTwoColors,
  ChooseTwoPlayers(Box<Players>),
  ChooseUptoNumberColors(Box<GameNumber>, Box<ChoosableColor>),
  ChooseWord(Vec<VoteOption>),
  CreateFutureTrigger(FutureTrigger, Box<Actions>),
  DiscardAnyNumberOfCardsOfType(Box<Cards>),
  DiscardHand,
  DraftACardFromSpellBook(SpellBookName),
  EachPlayerAction(Box<Players>, Box<ReplacementActionWouldEnter>),
  EnterAsACopyOfACardInAPlayersGraveyard(Box<CardsInGraveyards>, Box<Players>, CopyEffects),
  EnterAsACopyOfACardInExile(CardsInExile, CopyEffects),
  EnterAsACopyOfAPermanent(Box<Permanents>, CopyEffects),
  EnterAsACopyOfAPermanentUntil(Box<Permanents>, CopyEffects, Expiration),
  EnterAsACopyOfPermanent(Box<Permanent>, CopyEffects),
  EnterAsCopyOfExiled(CardInExile, CopyEffects),
  EntersAttachedToAPermanent(Box<Permanents>),
  EntersNormally,
  EntersPrepared,
  EntersTapped,
  EntersUnderAPlayersControl(Box<Players>),
  EntersUnderPlayersControl(Box<Player>),
  EntersUntapped,
  EntersWithACounter(CounterType),
  EntersWithACounterOfChoice(Vec<CounterType>),
  EntersWithACounterOfTypeForEachKindOfCounterOnPermanent(Box<Permanent>),
  EntersWithAnAbilityCounterForEachAbilityOnACardDiscardedThisWay(Vec<CheckHasable>),
  EntersWithLayerEffect(Vec<LayerEffect>),
  EntersWithLayerEffectOfChoice(Vec<Vec<LayerEffect>>),
  EntersWithLayerEffectUntil(Vec<LayerEffect>, Expiration),
  EntersWithNumberCombinationCountersOfChoice(Box<GameNumber>, Vec<CounterType>),
  EntersWithNumberCounters(Box<GameNumber>, CounterType),
  EntersWithNumberCountersForEach(Box<GameNumber>, CounterType, Box<GameNumber>),
  EntersWithNumberDifferentCountersOfChoice(Box<GameNumber>, Vec<CounterType>),
  ExchangeTextBoxesOfTwoPermanents(Box<Permanent>, Box<Permanent>),
  Exile(Vec<Exilable>),
  ExileAnyNumberOfCardsFromPlayersGraveyard(Box<Cards>, Box<Player>),
  ExileCardFromHand(CardInHand),
  ExileCardFromHandFaceDown(CardInHand),
  ExileItInstead,
  ExileUptoNumberGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
  FlipACoin_OnHeadAndOnTails(Vec<ReplacementActionWouldEnter>, Vec<ReplacementActionWouldEnter>),
  GetAnEmblem(Vec<Rule>),
  If(Condition, Vec<ReplacementActionWouldEnter>),
  IfElse(Box<Condition>, Vec<ReplacementActionWouldEnter>, Vec<ReplacementActionWouldEnter>),
  IfElsePassesFilter(Box<Permanents>, Vec<ReplacementActionWouldEnter>, Vec<ReplacementActionWouldEnter>),
  IfPassesFilter(Box<Permanents>, Vec<ReplacementActionWouldEnter>),
  LookAtAPlayersHand(Box<Players>),
  LoseLife(Box<GameNumber>),
  MayActions(Vec<ReplacementActionWouldEnter>),
  MayCost(ReplacementActionWouldEnterCost),
  MillNumberCards(Box<GameNumber>),
  MillNumberCardsForEach(Box<GameNumber>, Box<GameNumber>),
  MustCost(ReplacementActionWouldEnterCost),
  NoteTheMostPrevalentCreaturTypeInAPlayersLibrary(Box<Players>),
  PayAnyAmountOfLife,
  PayAnyAmountOfLifeUpto(Box<GameNumber>),
  PutCounters(Vec<ReplacementActionWouldEnterPutCounters>),
  PutIntoGraveyardInstead,
  ReflexiveTrigger(Box<Actions>),
  RememberLifeTotal,
  RemoveCounters(Vec<ReplacementActionWouldEnterRemoveCounters>),
  RevealHand,
  RollNumberD6(Box<GameNumber>),
  RollTwoD6,
  SacrificeAnyNumberOfPermanents(Box<Permanents>),
  SacrificeEachPermanent(Box<Permanents>),
  SecretlyChooseANumberBetween(i32, i32),
  SecretlyChooseAPlayer(Box<Players>),
  ShuffleItIntoLibraryInstead,
  TurnEachPermanentFaceDown(Box<Permanents>),
  Unless(Condition, Vec<ReplacementActionWouldEnter>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionAPlayerWouldCreateAToken", content = "args"))]
pub enum ReplacementActionAPlayerWouldCreateAToken {
  CreateTokensInstead(Vec<CreatableToken>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionAPlayerWouldCreateTokensCost", content = "args"))]
pub enum ReplacementActionAPlayerWouldCreateTokensCost {
  ChooseAPermanent(Box<Permanents>)
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionAPlayerWouldCreateTokens", content = "args"))]
pub enum ReplacementActionAPlayerWouldCreateTokens {
  CreateTokensInstead(Vec<CreatableToken>),
  ChooseAnAction(Vec<Vec<ReplacementActionAPlayerWouldCreateTokens>>),
  MayCost(Box<ReplacementActionAPlayerWouldCreateTokensCost>),
  IfElse(Box<Condition>, Vec<ReplacementActionAPlayerWouldCreateTokens>, Vec<ReplacementActionAPlayerWouldCreateTokens>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionAnEffectWouldCreateAnyNumberOfTokens", content = "args"))]
pub enum ReplacementActionAnEffectWouldCreateAnyNumberOfTokens {
  CreateTokensInstead(Vec<CreatableToken>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionAnyNumberOfTokensWouldBeCreated", content = "args"))]
pub enum ReplacementActionAnyNumberOfTokensWouldBeCreated {
  CreateTokensInstead(Vec<CreatableToken>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventAPlayerWouldCreateAToken", content = "args"))]
pub enum ReplacableEventAPlayerWouldCreateAToken {
  APlayerWouldCreateAToken(Box<Players>, Box<Permanents>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventAPlayerWouldCreateTokens", content = "args"))]
pub enum ReplacableEventAPlayerWouldCreateTokens {
  APlayerWouldCreateTokens(Box<Players>, Box<Permanents>),
  APlayerWouldCreateTokensForTheFirstTimeEachTurn(Box<Players>, Box<Permanents>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventAnEffectWouldCreateAnyNumberOfTokens", content = "args"))]
pub enum ReplacableEventAnEffectWouldCreateAnyNumberOfTokens {
  AnEffectWouldCreateAnyNumberOfTokensUnderAPlayersControl(Box<Permanents>, Box<Players>),
  AnEffectWouldCreateAnyNumberOfTokens(Box<Permanents>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventAnyNumberOfTokensWouldBeCreated", content = "args"))]
pub enum ReplacableEventAnyNumberOfTokensWouldBeCreated {
  AnyNumberOfTokensWouldBeCreatedUnderAPlayersControl(Box<Permanents>, Box<Players>),
  AnyNumberOfTokensWouldBeCreated(Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldLoseLife", content = "args"))]
pub enum ReplacementActionWouldLoseLife {
  LoseLife(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldExplore", content = "args"))]
pub enum ReplacementActionWouldExplore {
  ItExplores,
  Scry(Box<GameNumber>),

}




#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldExplore", content = "args"))]
pub enum ReplacableEventWouldExplore {
  APermanentWouldExplore(Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureReplacableEventWouldEnter", content = "args"))]
pub enum FutureReplacableEventWouldEnter {
  NextTimePermanentsWouldEnterTheBattlefield(Box<Permanents>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldEnter", content = "args"))]
pub enum ReplacableEventWouldEnter {
  APermanentWouldEnterTheBattlefieldFromExileOrAfterBeingCastFromExile(Box<Permanents>),
  APermanentWouldEnterTheBattlefieldUnderAPlayersControl(Box<Permanents>, Box<Players>),
  APermanentWouldEnterTheBattlefieldAndWasntCast(Box<Permanents>),
  APermanentWouldEnterTheBattlefield(Box<Permanents>),
  PermanentWouldEnterTheBattlefieldAndWasntCastOrNoManaWasSpentToCast(Box<Permanent>),
  PermanentWouldEnterTheBattlefield(Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldPayLife", content = "args"))]
pub enum ReplacableEventWouldPayLife {
  APlayerWouldPayAnAmountOfLife(Box<Players>, Box<Comparison>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldLoseLife", content = "args"))]
pub enum ReplacableEventWouldLoseLife {
  APlayerWouldLoseLife(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldPlaneswalk", content = "args"))]
pub enum ReplacableEventWouldPlaneswalk {
  APlayerWouldPlaneswalkAsAResultOfRollingThePlanarDie(Box<Players>),
  APlayerWouldPlaneswalk(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldGetEnergy", content = "args"))]
pub enum ReplacableEventWouldGetEnergy {
  APlayerWouldGetEnergy(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureReplacableEventWouldLeaveTheBattlefield", content = "args"))]
pub enum FutureReplacableEventWouldLeaveTheBattlefield {
  PermanentWouldLeaveTheBattlefield(Box<Permanent>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldLeaveTheBattlefield", content = "args"))]
pub enum ReplacableEventWouldLeaveTheBattlefield {
  PermanentWouldLeaveTheBattlefield(Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldPutIntoGraveyard", content = "args"))]
pub enum ReplacableEventWouldPutIntoGraveyard {
  Or(Vec<ReplacableEventWouldPutIntoGraveyard>),

  APermanentWouldDie(Box<Permanents>),
  APermanentWouldBePutIntoAGraveyard(Box<Permanents>),
  WouldPutAPermanentIntoAPlayersGraveyard(Box<Permanents>, Box<Players>),
  WouldPutACardInPlayersGraveyardFromAnywhereNotCycled(Box<Cards>, Box<Player>),
  WouldPutACardInPlayersGraveyardFromAnywhere(Box<Cards>, Box<Player>),
  WouldPutACardInAPlayersGraveyardFromAnywhereOtherThanBattlefield(Box<Cards>, Box<Players>),
  WouldPutACardInAPlayersGraveyardFromAnywhere(Box<Cards>, Box<Players>),
  WouldPutACardOrTokenInAPlayersGraveyardFromAnywhere(Box<Cards>, Box<Players>),
  WouldPutAPermanentIntoPlayersGraveyard(Box<Permanents>, Box<Player>),
  WouldPutAPermanentASpellOrACardIntoAPlayersGraveyard(Box<Permanents>, Box<Spells>, Box<Cards>, Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldGainLife", content = "args"))]
pub enum ReplacableEventWouldGainLife {
  APlayerWouldGainLife(Box<Players>),
  PlayerWouldGainLife(Box<Player>),
  ASpellOrAbilityWouldCauseItsControllerToGainLife(SpellsAndAbilities),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldMill", content = "args"))]
pub enum ReplacableEventWouldMill {
  APlayerWouldMillAnyNumberOfCards(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldProduceMana", content = "args"))]
pub enum ReplacableEventWouldProduceMana {
  TappingPermanentWouldProduceMana(Box<Permanent>),
  TappingAPermanentWouldProduceMana(Box<Permanents>),
  TappingAPermanentWouldProduceTwoOrMoreMana(Box<Permanents>),
  PlayerTappingAPermanentWouldProduceMana(Box<Player>, Box<Permanents>),
  ASpellOrAbilityWouldProduceColoredMana(SpellsAndAbilities),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureReplacableEventWouldDraw", content = "args"))]
pub enum FutureReplacableEventWouldDraw {
  NextTimePlayerWouldDrawACardThisTurn(Box<Player>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldDraw", content = "args"))]
pub enum ReplacableEventWouldDraw {
  APlayerWouldDrawOneOrMoreCards(Box<Players>),
  APlayerWouldDrawACard(Box<Players>),
  PlayerWouldDrawACardForTheFirstTimeEachPlayersTurn(Box<Player>, Box<Players>),
  PlayerWouldDrawACardForTheFirstTimeEachPlayersTurnExceptFirstDrawStepDraw(Box<Player>),
  PlayerWouldDrawDuringTheirDrawStep(Box<Player>),
  APlayerWouldDrawExceptFirstDrawStepDraw(Box<Players>),
  APlayerWouldDrawTwoOrMoreCards(Box<Players>),
  PlayerWouldDrawExceptFirstDrawStepDraw(Box<Player>),
  ACyclingAbilityOfAPermanentWouldCausePlayerToDrawACard(Box<Permanents>, Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureEventPreventDamage", content = "args"))]
pub enum FutureEventPreventDamage {
  NextDistributedDamageThisTurn,

  NextAmountOfDamageThatWouldBeDealtThisTurnByPermanent(Box<GameNumber>, Box<Permanent>),
  NextAmountOfDamageThatWouldBeDealtThisTurnBySourceToARecipient(Box<GameNumber>, Box<SingleDamageSource>, Box<DamageRecipientsList>),
  NextAmountOfDamageThatWouldBeDealtThisTurnBySourceToRecipient(Box<GameNumber>, Box<SingleDamageSource>, Box<SingleDamageRecipient>),
  NextAmountOfDamageThatWouldBeDealtThisTurnBySpellToRecipient(Box<GameNumber>, Box<Spell>, Box<SingleDamageRecipient>),
  NextAmountOfDamageThatWouldBeDealtThisTurnToARecipient(Box<GameNumber>, Box<DamageRecipientsList>),
  NextAmountOfDamageThatWouldBeDealtThisTurnToEachRecipient(Box<GameNumber>, Box<MultipleDamageRecipients>),
  NextAmountOfDamageThatWouldBeDealtThisTurnToRecipient(Box<GameNumber>, Box<SingleDamageRecipient>),

  NextTimeCombatDamageWouldBeDealtThisTurnByCreature(Box<Permanent>),
  NextTimeCombatDamageWouldBeDealtThisTurnByCreatureToAnyNumberOfRecipients(Box<Permanent>, Box<DamageRecipientsList>),
  NextTimeCombatDamageWouldBeDealtThisTurnByCreatureToRecipient(Box<Permanent>, Box<SingleDamageRecipient>),
  NextTimeDamageWouldBeDealtThisTurnByAPermanentToRecipient(Box<Permanents>, Box<SingleDamageRecipient>),
  NextTimeDamageWouldBeDealtThisTurnByPermanent(Box<Permanent>),
  NextTimeDamageWouldBeDealtThisTurnByPermanentToRecipient(Box<Permanent>, Box<SingleDamageRecipient>),
  NextTimeDamageWouldBeDealtThisTurnBySource(Box<SingleDamageSource>),
  NextTimeDamageWouldBeDealtThisTurnBySourceToARecipient(Box<SingleDamageSource>, Box<DamageRecipientsList>),
  NextTimeDamageWouldBeDealtThisTurnBySourceToRecipient(Box<SingleDamageSource>, Box<SingleDamageRecipient>),
  NextTimeDamageWouldBeDealtThisTurnToRecipient(Box<SingleDamageRecipient>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_EventPreventDamage", content = "args"))]
pub enum EventPreventDamage {
  Or(Vec<EventPreventDamage>),

  // (DamageType)(WouldBeDealt)BySource
  // (DamageType)(WouldBeDealt)BySourceToRecipient
  // (DamageType)(WouldBeDealt)ToRecipient

  ASpellOrAbilityWouldCauseASourceToDealDamageToRecipient(SpellsAndAbilities, DamageSources, SingleDamageRecipient),
  EachDamageWouldBeDealtToRecipient(SingleDamageRecipient),
  AnAmountOfDamageWouldBeDealtByASourceToRecipient(Box<Comparison>, DamageSources, SingleDamageRecipient),

  CombatDamageWouldBeDealt,
  CombatDamageWouldBeDealtByACreature(Box<Permanents>),
  CombatDamageWouldBeDealtByACreatureToASetOfRecipients(Box<Permanents>, DamageRecipientsList),
  CombatDamageWouldBeDealtByACreatureToARecipient(Box<Permanents>, DamageRecipientsList),
  CombatDamageWouldBeDealtByACreatureToRecipient(Box<Permanents>, SingleDamageRecipient),
  CombatDamageWouldBeDealtByCreature(Box<Permanent>),
  CombatDamageWouldBeDealtByCreatureToARecipient(Box<Permanent>, DamageRecipientsList),
  CombatDamageWouldBeDealtToARecipient(DamageRecipientsList),
  CombatDamageWouldBeDealtToRecipient(SingleDamageRecipient),
  DamageWouldBeDealtByAPermanent(Box<Permanents>),
  DamageWouldBeDealtByAPermanentToARecipient(Box<Permanents>, DamageRecipientsList),
  DamageWouldBeDealtByAPermanentToRecipient(Box<Permanents>, SingleDamageRecipient),
  DamageWouldBeDealtByASource(DamageSources),
  DamageWouldBeDealtByASourceToARecipient(DamageSources, DamageRecipientsList),
  DamageWouldBeDealtByASourceToRecipient(DamageSources, SingleDamageRecipient),
  DamageWouldBeDealtByASpell(Box<Spells>),
  DamageWouldBeDealtByASpellToARecipient(Box<Spells>, DamageRecipientsList),
  DamageWouldBeDealtByASpellToRecipient(Box<Spells>, SingleDamageRecipient),
  DamageWouldBeDealtByPermanent(Box<Permanent>),
  DamageWouldBeDealtByPermanentToRecipient(Box<Permanent>, SingleDamageRecipient),
  DamageWouldBeDealtByPermanentToARecipient(Box<Permanent>, DamageRecipientsList),
  DamageWouldBeDealtBySource(SingleDamageSource),
  DamageWouldBeDealtBySourceToRecipient(SingleDamageSource, SingleDamageRecipient),
  DamageWouldBeDealtBySpell(Box<Spell>),
  DamageWouldBeDealtToARecipient(DamageRecipientsList),
  DamageWouldBeDealtToRecipient(SingleDamageRecipient),
  DamageWouldBeDealtByAPlaneToARecipient(Planes, DamageRecipientsList),
  NoncombatDamageWouldBeDealtToARecipient(DamageRecipientsList),
  NoncombatDamageWouldBeDealtToRecipient(SingleDamageRecipient),
}



#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureReplacableEventWouldDealDamage", content = "args"))]
pub enum FutureReplacableEventWouldDealDamage {
  NextAmountOfDamageThatWouldBeDealtThisTurnBySourceToARecipient(Box<GameNumber>, Box<SingleDamageSource>, Box<DamageRecipientsList>),
  NextAmountOfDamageThatWouldBeDealtThisTurnToRecipient(Box<GameNumber>, Box<SingleDamageRecipient>),

  NextTimeCombatDamageWouldBeDealtThisTurnByCreature(Box<Permanent>),
  NextTimeCombatDamageWouldBeDealtThisTurnByCreatureToRecipient(Box<Permanent>, Box<SingleDamageRecipient>),
  NextTimeDamageWouldBeDealtThisTurnByASpellToRecipient(Box<Spells>, Box<SingleDamageRecipient>),
  NextTimeDamageWouldBeDealtThisTurnByPermanentToARecipient(Box<Permanent>, Box<DamageRecipientsList>),
  NextTimeDamageWouldBeDealtThisTurnBySource(Box<SingleDamageSource>),
  NextTimeDamageWouldBeDealtThisTurnBySourceToRecipient(Box<SingleDamageSource>, Box<SingleDamageRecipient>),
  NextTimeDamageWouldBeDealtThisTurnToARecipient(Box<DamageRecipientsList>),
  NextTimeDamageWouldBeDealtThisTurnToRecipient(Box<SingleDamageRecipient>),

  NextTimeDamageWouldBeDealtToRecipient(Box<SingleDamageRecipient>),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldDealDamage", content = "args"))]
pub enum ReplacableEventWouldDealDamage {
  Or(Vec<ReplacableEventWouldDealDamage>),

  // (DamageType)(WouldBeDealt)BySource
  // (DamageType)(WouldBeDealt)BySourceToRecipient
  // (DamageType)(WouldBeDealt)ToRecipient
  LethalLoyaltyDamageWouldBeDealtToAPlaneswalker(Box<Permanents>),

  AnAmountOfNonCombatDamageWouldBeDealtByASourceToARecipient(Box<Comparison>, DamageSources, DamageRecipientsList),
  AnAmountOfDamageWouldBeDealtByASourceToARecipient(Box<Comparison>, DamageSources, DamageRecipientsList),
  AnAmountOfDamageWouldBeDealtByASourceToRecipient(Box<Comparison>, DamageSources, SingleDamageRecipient),

  CombatDamageWouldBeDealtByCreatureToRecipient(Box<Permanent>, SingleDamageRecipient),
  CombatDamageWouldBeDealtByACreatureToARecipient(Box<Permanents>, DamageRecipientsList),
  CombatDamageWouldBeDealtByACreatureToRecipient(Box<Permanents>, SingleDamageRecipient),
  CombatDamageWouldBeDealtByCreature(Box<Permanent>),
  CombatDamageWouldBeDealtByCreatureToARecipient(Box<Permanent>, DamageRecipientsList),
  CombatDamageWouldBeDealtToRecipient(SingleDamageRecipient),
  DamageWouldBeDealtByAPermanent(Box<Permanents>),
  DamageWouldBeDealtByAPermanentToARecipient(Box<Permanents>, DamageRecipientsList),
  DamageWouldBeDealtByAPermanentToRecipient(Box<Permanents>, SingleDamageRecipient),
  DamageWouldBeDealtByASource(DamageSources),
  DamageWouldBeDealtByASourceToARecipient(DamageSources, DamageRecipientsList),
  DamageWouldBeDealtByASourceToRecipient(DamageSources, SingleDamageRecipient),
  DamageWouldBeDealtByASpell(Box<Spells>),
  DamageWouldBeDealtByASpellToARecipient(Box<Spells>, DamageRecipientsList),
  DamageWouldBeDealtByASpellToRecipient(Box<Spells>, SingleDamageRecipient),
  DamageWouldBeDealtByPermanent(Box<Permanent>),
  DamageWouldBeDealtByPermanentToRecipient(Box<Permanent>, SingleDamageRecipient),
  DamageWouldBeDealtByPermanentToARecipient(Box<Permanent>, DamageRecipientsList),
  DamageWouldBeDealtBySourceToRecipient(SingleDamageSource, SingleDamageRecipient),
  DamageWouldBeDealtBySpell(Box<Spell>),
  DamageWouldBeDealtToARecipient(DamageRecipientsList),
  DamageWouldBeDealtToRecipient(SingleDamageRecipient),
  NoncombatDamageWouldBeDealtByASourceToARecipient(DamageSources, DamageRecipientsList),
  NoncombatDamageWouldBeDealtBySpellToARecipient(Box<Spell>, DamageRecipientsList),

  Each1DamagePlayerWouldBeDealt(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldScry", content = "args"))]
pub enum ReplacableEventWouldScry {
  PlayerWouldScry(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldReduceLife", content = "args"))]
pub enum ReplacableEventWouldReduceLife {
  PlayersLifeTotalWouldBeReducedToNumberOrLess(Box<Player>, Box<GameNumber>),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureReplacableEventWouldLoseTheGame", content = "args"))]
pub enum FutureReplacableEventWouldLoseTheGame {
  NextTimePlayerWouldLoseTheGameThisTurn(Box<Player>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldLoseTheGame", content = "args"))]
pub enum ReplacableEventWouldLoseTheGame {
  PlayerWouldLoseTheGame(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldBeginDrawStep", content = "args"))]
pub enum ReplacableEventWouldBeginDrawStep {
  PlayerWouldBeginTheirDrawStep(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldBeginATurn", content = "args"))]
pub enum ReplacableEventWouldBeginATurn {
  PlayerWouldBeginTheirTurn(Box<Player>),
  APlayerWouldBeginAnExtraTurn(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldSearchLibrary", content = "args"))]
pub enum ReplacableEventWouldSearchLibrary {
  APlayerWouldSearchTheirLibrary(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureReplacableEventWouldRollDice", content = "args"))]
pub enum FutureReplacableEventWouldRollDice {
  NextTimePlayerWouldRollDiceThisTurn(Box<Player>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldRollDice", content = "args"))]
pub enum ReplacableEventWouldRollDice {
  APlayerWouldRollANumberOfDice(Box<Players>),
  APlayerWouldRollANumberOfD6(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldRollPlanarDice", content = "args"))]
pub enum ReplacableEventWouldRollPlanarDice {
  APlayerWouldRollANumberOfPlanarDice(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldPutCounters", content = "args"))]
pub enum ReplacableEventWouldPutCounters {
  APlayerWouldPutAnyNumberOfCountersOfTypeOnAPermanent(Box<Players>, CounterType, Box<Permanents>),
  APlayerWouldPutCountersOnAPermanent(Box<Players>, Box<Permanents>),
  APlayerWouldPutCountersOnAPermanentOrAPlayer(Box<Players>, Box<Permanents>, Box<Players>),
  AnAbilityWouldPutCountersOfTypeOnAPermanent(Abilities, CounterType, Box<Permanents>),
  AnEffectWouldPutCountersOnAPermanent(Box<Permanents>),
  AnyNumberOfCountersOfTypeWouldBePutOnAPlayer(CounterType, Box<Players>),
  AnyNumberOfCountersWouldBePutOnAPlayer(Box<Players>),
  CountersOfTypeWouldBePointOnAPermanent(CounterType, Box<Permanents>),
  CountersWouldBePutOnAPermanent(Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldUntap", content = "args"))]
pub enum ReplacableEventWouldUntap {
  APermanentWouldUntapDuringsItsControllersUntapStep(Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureReplacableEventWouldDestroy", content = "args"))]
pub enum FutureReplacableEventWouldDestroy {
  NextTimePermanentWouldBeDestroyedThisTurn(Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldDestroy", content = "args"))]
pub enum ReplacableEventWouldDestroy {
  PermanentWouldBeDestroyed(Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldDiscard", content = "args"))]
pub enum ReplacableEventWouldDiscard {
  ASpellOrAbilityWouldCausePlayerToDiscardCard(SpellsAndAbilities, Box<Player>, CardInHand),
  ASpellOrAbilityWouldCausePlayerToDiscardACard(SpellsAndAbilities, Box<Player>),
  AnEffectWouldCausePlayerToDiscardACard(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldCounterASpell", content = "args"))]
pub enum ReplacableEventWouldCounterASpell {
  ASpellOrAbilityWouldCounterASpell(SpellsAndAbilities, Box<Spells>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldFlipACoin", content = "args"))]
pub enum ReplacableEventWouldFlipACoin {
  PlayerWouldFlipACoin(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldPutAPermanentOnTheBattlefield", content = "args"))]
pub enum ReplacableEventWouldPutAPermanentOnTheBattlefield {
  APlayerWouldPutAPermanentOnTheBattlefield(Box<Players>, Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldCopyASpell", content = "args"))]
pub enum ReplacableEventWouldCopyASpell {
  APlayerWouldCopyASpellAnyNumberOfTimes(Box<Players>, Box<Spells>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldProliferate", content = "args"))]
pub enum ReplacableEventWouldProliferate {
  APlayerWouldProliferate(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldLearn", content = "args"))]
pub enum ReplacableEventWouldLearn {
  APlayerWouldLearn(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldConnive", content = "args"))]
pub enum ReplacableEventWouldConnive {
  APermanentWouldConnive(Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventWouldMask", content = "args"))]
pub enum ReplacableEventWouldMask {
  PermanentWouldAssignDamageDealDamageBeDealDamageOrBecomeTapped(Box<Permanent>),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureReplacableEventWouldSetASchemeInMotion", content = "args"))]
pub enum FutureReplacableEventWouldSetASchemeInMotion {
  NextTimePlayerWouldSetASchemeInMotion(Box<Player>),
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionWouldSetASchemeInMotion", content = "args"))]
pub enum ReplacementActionWouldSetASchemeInMotion {
  WouldSetASchemeInMotion_SetNumberSchemesInMotionInstead(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacableEventTokensWouldBeCreatedUnderAPlayersControl", content = "args"))]
pub enum ReplacableEventTokensWouldBeCreatedUnderAPlayersControl {
  TokensWouldBeCreatedUnderAPlayersControl(Box<Players>)
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ReplacementActionTokensWouldBeCreatedUnderAPlayersControl", content = "args"))]
pub enum ReplacementActionTokensWouldBeCreatedUnderAPlayersControl {
  CreateTokensUnderPlayersControlInstead(Vec<CreatableToken>, Box<Player>)
}






#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PregameAction", content = "args"))]
pub enum PregameAction {
  MayActions(Vec<PregameAction>),
  ExileNumberDraftedCardsNotInDeck(Box<GameNumber>, Box<Cards>),
  RevealCardFromDeck,
  ExileADraftedCardNotInDeck,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_AttackingPlayers", content = "args"))]
pub enum AttackingPlayers {
  AttackedPlayerOrPlaneswalkerTheyControl(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Condition", content = "args"))]
pub enum Condition {
  // Steps and Phases End
  IsDuringUpkeep,
  IsAfterUpkeep,
  IsDuringDrawStep,
  IsDuringAMainPhase,
  IsBeforeCombat,
  IsBeforeFirstCombatPhaseOfTurn,
  IsFirstCombatPhaseOfTurn,
  IsDuringCombat,
  IsBeforeAttackersDeclared,
  IsDuringDeclareAttackersStep,
  IsBeforeBlockersDeclared,
  IsDuringDeclareBlockersStep,
  IsAfterBlockersAreDeclared,
  IsBeforeCombatDamageStep,
  IsBeforeEndOfCombatStep,
  IsDuringEndOfCombatStep,
  IsAfterCombat,
  IsBeforeEndStep,
  IsFirstEndStepOfTheTurn,
  IsDuringEndStep,

  // Operators
  Or(Vec<Condition>),
  And(Vec<Condition>),

  ACardLeftPlayersGraveyardThisTurn(Box<Cards>, Box<Player>),
  ACardOfTypeWasExiledThisTurn(Box<CardsInExile>),
  ACardOfTypeWasFoundThisWay(Box<Cards>),
  ACardWasChosenThisWay,
  ACardWasDiscardedThisWay(Box<Cards>),
  ACardWasExiledThisWay(Box<Cards>),
  ACardWasFoundThisWay,
  ACardWasMilledThisWay(Box<Cards>),
  ACardWasPutIntoGraveyardThisWay(Box<Cards>),
  ACardWasPutIntoHandThisWay(Box<Cards>),
  ACardWasPutIntoPlayersGraveyardFromAnywhereThisTurn(Box<Cards>, Box<Player>),
  ACardWasRevealedByPlayerThisWay(Box<Cards>, Box<Player>),
  ACardWasRevealedThisWay(Box<Cards>),
  ACardWasSurveiledIntoGraveyardThisWay(Box<Cards>),
  ACardWasntDrawnThisWay,
  AColorIsTheMostCommonColorAmongPermanentsButNotTiedForTheMostComon(Color, Box<Permanents>),
  AColorIsTheMostCommonOrTiedForMostCommonColorAmongPermanents(Color, Box<Permanents>),
  AColorWasChosen,
  ACombatPermanentPassesFilter(Box<Permanent>, Box<Permanents>),
  ACreatureOrPlaneswalkerDiedThisTurn(Box<Permanents>),
  ACreatureOrPlaneswalkerWasDealtDamageThisWay(Box<Permanents>),
  ACreatureTypeWasChosen,
  ACreatureWasExploitedThisWay(Box<Permanents>),
  ADiceResultIs(Box<Comparison>),
  AGraveyardCardWasReturnedToHandThisWay(Box<Cards>),
  ALibraryCardWasPutIntoHandThisWay,
  ANumberDiceValuesAre(Box<Comparison>, Box<Comparison>),
  ANumberOfCardsWereDiscardedThisWay(Box<Comparison>),
  ANumberOfCardsWereExildThisWay(Box<Comparison>, Box<Cards>),
  ANumberOfCardsWerePutIntoExileThisTurn(Box<Comparison>, Box<Cards>),
  ANumberOfCardsWerePutIntoPlayersGraveyardFromAnywhereOtherThanTheBattlefieldThisTurn(Box<Comparison>, Box<Cards>, Box<Players>),
  ANumberOfCardsWerePutIntoPlayersGraveyardFromAnywhereThisTurn(Box<Comparison>, Box<Cards>, Box<Players>),
  ANumberOfCardsWereRevealedThisWay(Box<Comparison>, Box<Cards>),
  ANumberOfCreaturesAttackedThisTurn(Box<Comparison>, Box<Permanents>),
  ANumberOfGraveyardCardsLeftThisTurn(Box<Comparison>, Box<CardsInGraveyards>),
  ANumberOfGraveyardCardsWereReturnedToHandThisWay(Box<Comparison>),
  ANumberOfGroupCardsWereExiledThisWay(Box<Comparison>, Box<Cards>, GroupFilter),
  ANumberOfPermanentsDiedThisTurn(Box<Comparison>, Box<Permanents>),
  ANumberOfPlayersHaveLostTheGame(Box<Comparison>),
  ANumberOfSourcesDealtDamageThisTurn(Box<Comparison>, DamageSources),
  ANumberOfTokensWereCreatedThisWay(Box<Comparison>),
  APermanentAttackedThisCombat(Box<Permanents>),
  APermanentDiesThisWay(Box<Permanents>),
  APermanentEnteredTheBattlefieldThisWay,
  APermanentEnteredTheBattlefieldUnderAPlayersControlThisTurn(Box<Permanents>, Box<Players>),
  APermanentEnteredTheBattlefieldUnderPlayersControlThisTurn(Box<Permanents>, Box<Player>),
  APermanentExploredThisTurn(Box<Permanents>),
  APermanentLeftTheBattlefieldThisTurn(Box<Permanents>),
  APermanentOfTypeWasPutOntoTheBattlefieldThisWay(Box<Permanents>),
  APermanentPassesFilter(Box<Permanents>, Box<Permanents>),
  APermanentWasChosenThisWay,
  APermanentWasCopiedThisWay(Box<Permanents>),
  APermanentWasDestroyedByASpellOrAbilityThisTurn(Box<Permanents>, SpellsAndAbilities),
  APermanentWasDestroyedThisWay(Box<Permanents>),
  APermanentWasExiledThisWay(Box<Permanents>),
  APermanentWasPutIntoAPlayersGraveyardThisTurn(Box<Permanents>, Box<Players>),
  APermanentWasPutIntoHandThisWay(Box<Permanents>),
  APermanentWasPutIntoPlayersGraveyardThisTurn(Box<Permanents>, Box<Player>),
  APermanentWasPutOntoTheBattlefieldByPlayerThisWay(Box<Permanents>, Box<Player>),
  APermanentWasPutOntoTheBattlefieldThisWay(Box<Permanents>),
  APermanentWasReturnedToPlayersHandThisTurn(Box<Permanents>, Box<Player>),
  APermanentWasSacrificedThisWay(Box<Permanents>),
  APermanentWasntSacrificedThisWay(Box<Permanents>),
  APermanentsAbilityIsCounteredThisWay(Box<Permanents>),
  APlayerPassesFilter(Box<Players>, Box<Players>),
  APlayerTurnedAPermanentFaceUpThisTurn(Box<Players>, Box<Permanents>),
  APlayerWasDealtDamageThisWay(Box<Players>),
  ASourceDealtDamageThisTurn(DamageSources, Box<Comparison>),
  ASpellWasCastThisWay(Box<Spells>),
  ASpellWasCountedByASpellOrAbilityThisTurn(Box<Spells>, SpellsAndAbilities),
  ASpellWasWarpedThisTurn,
  ASpellWasntCastThisWay,
  ATokenWasCreatedThisWay,
  ActivatedAbilityPassesFilter(ActivatedAbility, Box<ActivatedAbilities>),
  AllCardsRevealedThisWayAreCardsOfType(Box<Cards>),
  AllCoinsCameUpHeads,
  AllPermanentsPassFilter(Box<Permanents>, Box<Permanents>),
  AllPlayersPassFilter(Box<Players>, Box<Players>),
  AllVotesWereForWord(VoteOption),
  AnAmountOfEnergyWasPaidThisWay(Box<Comparison>),
  AnAmountOfExcessDamageWasDealtThisWay(Box<Comparison>),
  AnExiledCardPassesFilter(CardsInExile, CardsInExile),
  AnyCardInAnyPlayersGraveyardPassesFilter(Box<Cards>, Box<Players>),
  AttackingCreaturesPassFilter(Box<Comparison>, Box<Permanents>),
  AttackingPlayerPassesFilter(AttackingPlayers),
  CardIsExiled(Box<CardInExile>),
  CardIsInPlayersGraveyard(Box<CardInGraveyards>, Box<Player>),
  CardIsInPlayersGraveyardWithACardAboveIt(Box<CardInGraveyards>, Box<Player>, Box<Cards>),
  CardIsInPlayersGraveyardWithANumberOfCardsAboveIt(Box<CardInGraveyards>, Box<Player>, Box<Comparison>, Box<Cards>),
  CardIsOnlyCardInPlayersGraveyard(Box<CardInGraveyards>, Box<Cards>, Box<Player>),
  CastByAPlayer(Box<Players>),
  CastSpellOrActivatedAbilityPassesFilter(SpellsAndAbilities),
  CastSpellPassesFilter(Box<Spells>),
  CombatDamageWasDealtByACreature(Box<Permanents>),
  CopiedCardPassesFilter(Box<Cards>),
  CostWasPaid,
  CostWasntPaid,
  DamageFromAPermanentSourceWasPreventedThisWay(Box<Permanents>),
  DamageFromASourceWasPreventedThisWay(DamageSources),
  DamageWasPreventedThisWay,
  DeadCardPassesFilter(Box<Cards>),
  DeadPermanentPassesFilter(Box<Permanents>),
  DestroyedPermanentIsPutInAGraveyardThisWay,
  DiceResultIs(Box<Comparison>),
  DifferenceIs(Box<GameNumber>, Box<GameNumber>, Box<Comparison>),
  DiscardedCardPassesFilter(Box<Cards>),
  EnergyWasPaidThisWay,
  EnteringPermanentPassesFilter(Box<Permanents>),
  EvidenceWasCollectedThisWay,
  ExcessDamageWasDealtThisWay,
  ExcessDamageWasDealtToACreatureOrPlaneswalkerThisTurn(Box<Permanents>),
  ExcessDamageWasDealtToAPermanentThisWay(Box<Permanents>),
  ExiledCardPassesFilter(CardInExile, CardsInExile),
  ExiledPermanentWasUnearthed,
  FreerunningCostWasPaid,
  GraveyardCardPassesFilter(Box<CardInGraveyards>, Box<Cards>),
  GuestWasUnattachedFromAPermanentThisWay(Box<Permanents>),
  IsAPlayersTurn(Box<Players>),
  IsAnExtraTurn,
  IsDuringUntapStep,
  IsNotPlayersTurn(Box<Player>),
  IsNotTheFirstTurnOfTheGame,
  IsPlayersNthTurn(Box<Player>, Box<Comparison>),
  IsPlayersTurn(Box<Player>),
  IsTheNthTurnOfTheGame(Box<Comparison>),
  ItWasAnArtSticker,
  ItsNeitherDayOrNight,
  ItsNight,
  LeavingPermanentPassesFilter(Box<Permanents>),
  ManaFromAPermanentWasSpentToActivateThisAbility(Box<Permanents>),
  MayhemCostWasPaid,
  MostVotesForWordIs(VoteOption),
  MostVotesOrTiedForMostVotesForWordIs(VoteOption),
  NoCardsOfTypeWereRevealedThisWay(Box<Cards>),
  NoCardsWerePutIntoHandThisWay,
  NoCardsWereRevealedThisWay,
  NoLifeWasPaidThisWay,
  NoOneTookAnActionThisWay,
  NoPermanentsLeftTheBattlefieldThisTurn(Box<Permanents>),
  NoPermanentsPassFilter(Box<Permanents>, Box<Permanents>),
  NoPlayersPassFilter(Box<Players>, Box<Players>),
  NoVotesWereCastThisWay,
  NumCardsDiscardedThisWayPassGroupFilter(Box<Comparison>, Box<Cards>, GroupFilter),
  NumCardsFromHandRevealedThisWayPassGroupFilter(Box<Comparison>, Box<Cards>, GroupFilter),
  NumCardsHaveBeenMilledIntoGraveyardThisWay(Box<Comparison>, Box<Cards>),
  NumCardsInExileIs(Box<Comparison>, CardsInExile),
  NumCoinFlipsLostIs(Box<Comparison>),
  NumCoinFlipsWonIs(Box<Comparison>),
  NumCombatPermanentsPassFilter(Box<Comparison>, Box<Permanents>, Box<Permanents>),
  NumDifferentManaValueAmongCardsInPlayersGraveyardIs(Box<Comparison>, Box<Cards>, Box<Player>),
  NumDifferentManaValuesAmongCardsInExileIs(Box<Comparison>, CardsInExile),
  NumGraveyardCardsPassFilter(Box<Comparison>, Box<Cards>, Box<Players>),
  NumGroupCardsWereMilledThisWay(Box<Comparison>, Box<Cards>, GroupFilter),
  NumPermanentsIs(Box<Comparison>, Box<Permanents>),
  NumPermanentsPassFilter(Box<Comparison>, Box<Permanents>, Box<Permanents>),
  NumPlayersPassFilter(Box<Comparison>, Box<Players>, Box<Players>),
  NumSpellsCastLastTurnIs(Box<Comparison>, Box<Spells>),
  NumberDiceAreEqual(Box<Comparison>),
  NumberOfCardTypesAmongThePermanentsSacrificedThisWayIs(Box<Comparison>),
  NumberOfColorsOfManaSpentToActivateThisAbilityIs(Box<Comparison>),
  NumberPermanentsEnteredTheBattlefieldThisWay(Box<Comparison>, Box<Permanents>),
  NumberPermanentsEnteredTheBattlefieldUnderPlayersControlThisTurn(Box<Comparison>, Box<Permanents>, Box<Player>),
  PermanentDealtDamageToACreatureOrPlaneswalkerThisWay(Box<Permanent>, Box<Permanents>),
  PermanentDealtDamageToPlayerThisWay(Box<Permanent>, Box<Player>),
  PermanentDiesThisWay,
  PermanentPassesFilter(Box<Permanent>, Box<Permanents>),
  PermanentPutInGraveyardPassesFilter(PermanentsAndGraveyardCards),
  PermanentRegeneratedThisWay,
  PermanentTransformedThisWay(Box<Permanent>),
  PermanentWasDestroyedThisWay,
  PermanentsChangedControlThisWay,
  PermanentsPassGroupFilter(Box<Permanents>, GroupFilter),
  PlayerControlledAPermanentAsCast(Box<Player>, Box<Permanents>),
  PlayerDidntDrawACardThisWay,
  PlayerGuessedWrong,
  PlayerIsPlayer(Box<Player>, Box<Player>),
  PlayerPassesFilter(Box<Player>, Box<Players>),
  PlayerRevealedACardAsCast(Box<Player>, Box<Cards>),
  PlayersRevealTopCardOfLibraryAndFindHighestManaValue_HasASingleWinner,
  RevealedCardsWerePutInHand,
  SourcesDealtNonCombatDamageThisTurn(DamageSources, Box<Comparison>),
  SpellOrAbilityPassesFilter(SpellOrAbility, SpellsAndAbilities),
  SpellPassesFilter(Box<Spell>, Box<Spells>),
  SpellXIs(Box<Comparison>),
  TheCardExiledThisWayIsStillExiled,
  TheCardInHandPassesFilter(CardInHand, Box<Cards>),
  TheCardReturnedToHandThisWayPassesFilter(Box<Cards>),
  TheChosenGraveyardCardPassesFilter(Box<Cards>),
  TheChosenNumbersMatch,
  TheChosenWordWas(VoteOption),
  TheGiftWasPromised,
  TheGiftWasntPromised,
  TheLastCardExiledThisWayWasACard(Box<Cards>),
  TheNumberOfCardsOfTypeInPlayersLibraryIs(Box<Cards>, Box<Player>, Box<Comparison>),
  TheNumberOfPermanentsReturnedToHandThisWayIs(Box<Comparison>, Box<Permanents>),
  TheTotalManaValueOfExiledCardsIs(CardsInExile, Box<Comparison>),
  ThereAreANumberOfBasicLandTypesAmongPermanents(Box<Comparison>, Box<Permanents>),
  ThereAreANumberOfPermanentTypesAmongCardsInPlayersGraveyards(Box<Comparison>, Box<Players>),
  ThereAreNumberCardTypesAmongExiled(Box<Comparison>, CardsInExile),
  ThereAreNumberCardTypesInPlayersGraveyard(Box<Comparison>, Box<Player>),
  ThereAreNumberNamesAmongUnlockedDoorsOfPermanents(Box<Comparison>, Box<Permanents>),
  ThereAreNumberUnlockedDoorsAmongPermanents(Box<Comparison>, Box<Permanents>),
  ThisCardIsInExileOrOnTheBattlefield,
  ThisCardIsInTheCommandZone,
  ThisCardIsInTheCommandZoneOrOnTheBattlefield,
  ThisCardIsInYourGraveyard,
  ThisCardIsOnTheBattlefield,
  TimesThisAbilityHasResolvedThisTurnIs(Box<Comparison>),
  TopCardOfPlayersLibraryPassesFilter(Box<Player>, Box<Cards>),
  TopCardOfPlayersLibraryPassesFilter_Digital(Box<Player>, Box<Cards>),
  TotalPowerOfPermanentsIs(Box<Comparison>, Box<Permanents>),
  TotalToughnessOfPermanentsIs(Box<Comparison>, Box<Permanents>),
  TriggerChoseCreatureAsRingBearer(Box<Permanents>),
  TriggerDiceResultIs(Box<Comparison>),
  TriggerXIs(Box<Comparison>),
  Trigger_WonTheClash,
  ValueIs(Box<GameNumber>, Box<Comparison>),
  WhenAPermanentBecomesTapped_NotTappedForAttacking,
  WhenAPlayerRollsAnyNumberOfDice_AnyDiceResultIs(Box<Comparison>),
  WordWasVotedFor(VoteOption),
  YouLostTheCoinFlip,
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardInHand", content = "args"))]
pub enum CardInHand {
  TheCardChosenThisWay,
  TheCardConjuredIntoHandThisWay,
  TheCardConjuredThisWay,
  TheCardDraftedThisWay,
  TheCardInHandChosenThisWay,
  TheCardInHandRevealedThisWay,
  TheCardPutInHandThisWay,
  TheCardReturnedToHandThisWay,
  TheCardRevealedFromHandThisWay,
  TheCardRevealedThisWay,
  TheCardSeekedThisWay,
  TheChosenCardInHand,
  TheLastCardDrawnThisTurn,
  ThisCardInHand,
  Trigger_ThatCardInHand,
  Trigger_ThatDiscardedCard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CostReductionSymbol", content = "args"))]
pub enum CostReductionSymbol {
  CostReduceW,
  CostReduceU,
  CostReduceB,
  CostReduceR,
  CostReduceG,
  CostReduceGeneric(i32),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CostReductionSymbolX", content = "args"))]
pub enum CostReductionSymbolX {
  CostReduceX,
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SearchLibraryCost", content = "args"))]
pub enum SearchLibraryCost {
  PayManaX(ManaCostX, Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SearchLibraryActionValueAction", content = "args"))]
pub enum SearchLibraryActionValueAction {
  ValueAction(GameRange, Vec<SearchLibraryAction>)
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SearchLibraryAction", content = "args"))]
pub enum SearchLibraryAction {
  CreatePermanentLayerEffectUntil(Box<Permanent>, Vec<LayerEffect>, Expiration),
  CreateTokens(Vec<CreatableToken>),
  DiscardACardAtRandom,
  EachPlayerLosesLife(Box<Players>, Box<GameNumber>),
  ExileLibraryAndGraveyard,
  GainLife(Box<GameNumber>),
  RollAD20,
  ValueActions(Vec<SearchLibraryActionValueAction>),
  PlayerChoosesACardName(Box<Player>, Box<CardsInOracle>),

  If(Condition, Vec<SearchLibraryAction>),
  IfElse(Condition, Vec<SearchLibraryAction>, Vec<SearchLibraryAction>),
  MayCost(SearchLibraryCost),
  ChooseAnAction(Vec<SearchLibraryAction>),

  // --------------

  FindACardOfType(Box<CardsInLibrary>),
  FindACardOfTypeAtRandom(Box<CardsInLibrary>),
  FindAllCardsOfType(Box<CardsInLibrary>),
  FindAnyNumberOfCardsOfType(Box<CardsInLibrary>),
  FindCardsOfType(Vec<Cards>),
  FindUptoNumberCardsOfType(Box<GameNumber>, Box<CardsInLibrary>),
  FindNumberCardsOfType(Box<GameNumber>, Box<CardsInLibrary>),

  FindAGenericCard,
  FindNumberGenericCards(Box<GameNumber>),
  FindUptoNumberGenericCards(Box<GameNumber>),

  FindAnyNumberOfGroupCards(Box<CardsInLibrary>, GroupFilter),
  FindExactlyNumberGroupCards(Box<GameNumber>, Box<CardsInLibrary>, GroupFilter),
  FindNumberGroupCards(Box<GameNumber>, Box<CardsInLibrary>, GroupFilter),
  FindUptoNumberGroupCards(Box<GameNumber>, Box<CardsInLibrary>, GroupFilter),

  RevealFoundCards,

  ExileFoundCards,
  ExileFoundCardsFaceDown,
  ExileFoundCardsInShuffledFaceDownPile,
    APlayerChooseACardExiledThisWay(Box<Players>),

  CastFoundCardsWithoutPaying,
  MayCastFoundCardsWithoutPaying,
  MayPlayFoundCardsWithoutPaying,

  MayPutFoundCardsOntoBattlefield(Vec<EnterFlag>),
  PutAFoundCardIntoHand,
  PutAFoundCardOntoBattlefield(Vec<EnterFlag>),
  PutFoundCardsAndExiledCardsOntoBattlefield(Box<CardsInExile>, Vec<EnterFlag>),
  PutFoundCardsIntoGraveyard,
  PutFoundCardsIntoHand,
  PutFoundCardsOnBottomOfLibrary,
  PutFoundCardsOntoBattlefield(Vec<EnterFlag>),
  PutNumberFoundCardsOntoBattlefield(Box<GameNumber>, Vec<EnterFlag>),

  SetAsideFoundCards,

  ChooseAFoundCardAtRandom,
  APlayerChoosesAFoundCard(Box<Players>),
  APlayerChoosesNumberFoundCards(Box<Players>, Box<GameNumber>),
    PutChosenFoundCardIntoHand,
    PutChosenFoundCardsIntoGraveyard,
    PutChosenFoundCardsIntoHand,
    SetAsideNonchosenFoundCards,

  PutExiledCardsOnTopOfLibraryIgnoreOrder(Box<CardsInExile>),

  DontShuffle,
  Shuffle,
  ShuffleLibraryIfSearched,

  PutSetAsideCardsNthFromTheTop(Box<GameNumber>),
  PutSetAsideCardsIntoHand,
  PutSetAsideCardsOnTopOfLibrary,
  PutSetAsideCardsOntoBattlefield(Vec<EnterFlag>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Cost", content = "args"))]
pub enum Cost {
  And(Vec<Cost>),
  Or(Vec<Cost>),

  AbandonScheme(SingleScheme),
  AddMana(ManaProduce),
  Amass(Box<GameNumber>, CreatureType),
  AnteAPermanent(Box<Permanents>),
  AnteTopCardOfLibrary,
  AttachAPermanentToAPlayer(Box<Permanents>, Box<Players>),
  AttachAPermanentToPermanent(Box<Permanents>, Box<Permanent>),
  AttachEachPermanentToPermanent(Box<Permanents>, Box<Permanent>),
  AttachPermanentToAPermanent(Box<Permanent>, Box<Permanents>),
  AttachPermanentToPermanent(Box<Permanent>, Box<Permanent>),
  BeginGameWithCardOnBattlefield(PregameCard, Vec<EnterFlag>),
  BeholdA(Box<CardsInHand>),
  BeholdAndExile(Box<CardsInHand>),
  BeholdNumber(Box<GameNumber>, Box<CardsInHand>),
  Blight(Box<GameNumber>),
  BlightX,
  CastASpellFromHandWithoutPaying(Box<Spells>),
  CastASpellFromPlayersGraveyardWithoutPaying(Box<Spells>, Box<Player>),
  CastCopiedCard,
  CastCopiedCardWithoutPaying,
  CastGraveyardCard(Box<CardInGraveyards>),
  CastGraveyardCardWithAdditionalCostIntoExile(Box<CardInGraveyards>, Box<Cost>),
  CastGraveyardCardWithoutPaying(Box<CardInGraveyards>),
  CastSpellFromExile(Box<Spells>, CardInExile),
  CastSpellFromExileWithoutPaying(Box<Spells>, CardInExile),
  CastTopCardOfLibraryWithoutPaying,
  CastTopSpellOfLibraryWithoutPaying(Box<Spells>),
  ChooseACardFromPlayersRevealedHand(Box<CardsInHand>, Box<Player>),
  ChooseACardInHand(Box<CardsInHand>),
  ChooseACardInPlayersGraveyard(Box<CardsInGraveyards>, Box<Player>),
  ChooseACardtype,
  ChooseACheckableAbility(Vec<CheckHasable>),
  ChooseAColor(ChoosableColor),
  ChooseACreatureType,
  ChooseANumberBetween(i32, i32),
  ChooseAPermanent(Box<Permanents>),
  ChooseAPlayer(Box<Players>),
  ChooseAPlayerAtRandom(Box<Players>),
  ChooseAnExiledCard(Box<CardsInExile>),
  ChooseAnyNumberPermanentsAndPayManaForEach(Box<Permanents>, ManaCost),
  ChooseColors,
  CollectEvidence(Box<GameNumber>),
  CollectEvidenceAnyX,
  ConjureDuplicateOfPermanentIntoHand(Box<Permanent>),
  ConvertPermanent(Box<Permanent>),
  CopyAnExiledCard(Box<CardsInExile>),
  CopyExiledCard(Box<CardInExile>),
  CopySpellAndMayChooseNewTargets(Box<Spell>),
  CounterSpell(Box<Spell>),
  CreatePermanentLayerEffect(Box<Permanent>, Vec<LayerEffect>),
  CreatePermanentLayerEffectUntil(Box<Permanent>, Vec<LayerEffect>, Expiration),
  CreatePermanentRuleEffectUntil(Box<Permanent>, Vec<PermanentRule>, Expiration),
  CreatePlayerEffectUntil(Box<Player>, Vec<PlayerEffect>, Expiration),
  CreateTokens(Vec<CreatableToken>),
  CreateTokensWithFlags(Vec<CreatableToken>, Vec<TokenFlag>),
  CreatureConnives(Box<Permanent>),
  DestroyPermanent(Box<Permanent>),
  DiscardACard,
  DiscardACardAtRandom,
  DiscardACardOfType(Box<Cards>),
  DiscardAnyNumberOfCards,
  DiscardAnyNumberOfCardsOfType(Box<Cards>),
  DiscardCard(CardInHand),
  DiscardHand,
  DiscardNumberCards(Box<GameNumber>),
  DiscardNumberCardsAtRandom(Box<GameNumber>),
  DiscardNumberCardsOfType(Box<GameNumber>, Box<Cards>),
  DiscardNumberGroupCards(Box<GameNumber>, GroupFilter),
  DiscardNumberGroupCardsOfType(Box<GameNumber>, Box<Cards>, GroupFilter),
  DrawACard,
  DrawNumberCards(Box<GameNumber>),
  Earthbend(Box<Permanent>, Box<GameNumber>),
  ExchangeControl(Box<Permanent>, Box<Permanent>),
  ExchangeControlOfSpellAndPermanent(Box<Spell>, Box<Permanent>),
  ExertPermanent(Box<Permanent>),
  Exile(Vec<Exilable>),
  ExileACardFromHand,
  ExileACardFromPlayersGraveyardAndPayItsManaCost(Box<CardsInGraveyards>, Box<Player>),
  ExileACardOfTypeFromHand(Box<Cards>),
  ExileACardOfTypeFromHandWithANumberOfCountersOfType(Box<Cards>, Box<GameNumber>, CounterType),
  ExileAFaceDownPermanentFaceUp(Box<Permanents>),
  ExileAGraveyardCard(Box<CardsInGraveyards>),
  ExileAPermanent(Box<Permanents>),
  ExileAPermanentUntil(Box<Permanents>, Expiration),
  ExileASpell(Box<Spells>),
  ExileAnyNumberOfCardsFromPlayersGraveyard(Box<CardsInGraveyards>, Box<Player>),
  ExileAnyNumberOfGroupCardsFromPlayersGraveyard(Box<CardsInGraveyards>, Box<Player>, GroupFilter),
  ExileAnyNumberOfPermanents(Box<Permanents>),
  ExileCardFromHand(CardInHand),
  ExileEachGraveyardCard(Box<CardsInGraveyards>),
  ExileEachPermanent(Box<Permanents>),
  ExileGraveyardCard(Box<CardInGraveyards>),
  ExileGraveyardCardFaceDown(Box<CardInGraveyards>),
  ExileGraveyardCardWithNumberCountersOfType(Box<CardInGraveyards>, Box<GameNumber>, CounterType),
  ExileHand,
  ExileHandFaceDown,
  ExileNumberCardsFromASinglePlayersGraveyard(Box<GameNumber>, Box<CardsInGraveyards>, Box<Players>),
  ExileNumberCardsOfTypeFromHand(Box<GameNumber>, Box<Cards>),
  ExileNumberGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
  ExileNumberOrMoreCardsFromPlayersGraveyard(Box<GameNumber>, Box<CardsInGraveyards>, Box<Player>),
  ExileNumberOrMoreGroupPermanents(Box<GameNumber>, Box<Permanents>, GroupFilter),
  ExileNumberPermanents(Box<GameNumber>, Box<Permanents>),
  ExilePermanent(Box<Permanent>),
  ExilePermanentUntil(Box<Permanent>, Expiration),
  ExilePlayersGraveyard(Box<Player>),
  ExileSpell(Box<Spell>),
  ExileTheTopNumberCardsOfLibraryFaceDown(Box<GameNumber>),
  ExileTheTopNumberCardsOfPlayersLibrary(Box<GameNumber>, Box<Player>),
  ExileTopCardOfLibrary,
  FlipACoinAndCallIt,
  Forage,
  GainControlOfAPermanent(Box<Permanents>),
  GainControlOfPermanent(Box<Permanent>),
  GainControlOfPermanentUntil(Box<Permanent>, Expiration),
  GainLife(Box<GameNumber>),
  GainLifeForEach(Box<GameNumber>, Box<GameNumber>),
  GetEnergy(Box<GameNumber>),
  HaveAPlayerTakeAction(Box<Players>, CostPlayerAction),
  HaveEachPlayerTakeAction(Box<Players>, CostPlayerAction),
  HavePermanentDealDamage(Box<Permanent>, Box<GameNumber>, Box<DamageRecipient>),
  HavePlayerTakeAction(Box<Player>, CostPlayerAction),
  HaveSpellDealDamage(Box<Spell>, Box<GameNumber>, Box<DamageRecipient>),
  Investigate,
  ItsManaCost,
  ItsManaCostReducedBy(CostReduction),
  LookAtPlayersHandAndChooseACardToExile(Box<Player>, Box<CardsInHand>),
  LookAtPlayersHandAndChooseACardToExileUntil(Box<Player>, CardsInHand, Expiration),
  LookAtTheTopCardOfPlayersLibrary(Box<Player>),
  LookAtTopOfLibrary,
  Loyalty(i32),
  LoyaltyMinusX,
  MillACard,
  MillNumberCards(Box<GameNumber>),
  MoveCounters(Vec<MoveCountersCost>),
  PayAnyAmountOfEnergy,
  PayAnyAmountOfLife,
  PayAnyAmountOfMana,
  PayEnergy(Box<GameNumber>),
  PayItsSuspendCost,
  PayLife(Box<GameNumber>),
  PayLifeEqualToItsManaValue,
  PayLifeForEach(Box<GameNumber>, Box<GameNumber>),
  PayMana(ManaCost),
  PayManaAnyNumberOfTimes(ManaCost),
  PayManaAnyX(ManaCostX),
  PayManaAnyXRestricted(ManaCostX, Box<Comparison>),
  PayManaCostOfPermanent(Box<Permanent>),
  PayManaCostOfPermanentReducedBy(Box<Permanent>, CostReduction),
  PayManaCostOfSpell(Box<Spell>),
  PayManaForEach(ManaCost, Box<GameNumber>),
  PayManaReduceForEach(ManaCost, CostReduction, Box<GameNumber>),
  PayManaUptoNumberTimes(ManaCost, Box<GameNumber>),
  PayManaX(ManaCostX, Box<GameNumber>),
  PayMana_OnlyProducedByTreasure(ManaCost),
  PayOneOrMoreEnergy,
  PlayALandFromTopOfLibrary(Box<Cards>),
  PlayTopCardOfLibraryWithoutPaying,
  PutACardFromGraveyardIntoHand(Box<CardsInGraveyards>),
  PutACardFromHandOnBattlefield(Box<Cards>, Vec<EnterFlag>),
  PutACardFromHandOnBottomOfLibrary,
  PutACardFromHandOnTopOfLibrary,
  PutACardFromHandOrGraveyardOnBattlefield(Box<Cards>, Box<Player>, Vec<EnterFlag>),
  PutACardFromPlayersGraveyardOnBattlefield(Box<CardsInGraveyards>, Box<Player>, Vec<EnterFlag>),
  PutACardOfTypeMilledThisWayIntoHand(Box<Cards>),
  PutAGraveyardCardOnTheBottomOfItsOwnersLibrary(Box<CardsInGraveyards>),
  PutANameStickerOnPermanent(Box<Permanent>),
  PutANumberOfExiledCardsIntoOwnersGraveyard(Box<GameNumber>, CardsInExile),
  PutAPermanentIntoItsOwnersHand(Box<Permanents>),
  PutAnExiledCardIntoOwnersGraveyard(Box<CardsInExile>),
  PutCounters(Vec<PutCountersCost>),
  PutExiledCardIntoOwnersHand(Box<CardInExile>),
  PutExiledCardOnTheBottomOfItsOwnersLibrary(Box<CardInExile>),
  PutExiledCardOntoBattlefield(CardInExile, Vec<EnterFlag>),
  PutGraveyardCardIntoHand(Box<CardInGraveyards>),
  PutGraveyardCardOnBottomOfLibrary(Box<CardInGraveyards>),
  PutGraveyardCardOnTopOfLibrary(Box<CardInGraveyards>),
  PutGraveyardCardOntoBattlefield(Box<CardInGraveyards>, Vec<EnterFlag>),
  PutNumberCardsFromASinglePlayersGraveyardOnBottomOfLibrary(Box<GameNumber>, Box<Players>),
  PutNumberCardsFromPlayersGraveyardOnBottomOfLibrary(Box<GameNumber>, Box<Player>),
  PutNumberPermanentsIntoOwnersHand(Box<GameNumber>, Box<Permanents>),
  PutPermanentIntoItsOwnersHand(Box<Permanent>),
  PutPermanentOnBottomOfOwnersLibrary(Box<Permanent>),
  PutPermanentOnTopOfOwnersLibrary(Box<Permanent>),
  PutSpellOnBottomOfOwnersLibrary(Box<Spell>),
  PutTopCardOfEachPlayersLibraryInGraveyard(Box<Players>),
  PutTopCardOfLibraryOfTypeOnBattlefield(Box<Cards>, Vec<EnterFlag>),
  RegeneratePermanent(Box<Permanent>),
  RemoveCounters(Vec<RemoveCountersCost>),
  RevealACardFromHandAtRandom,
  RevealACardOfTypeFromHand(Box<Cards>),
  RevealAnyNumberOfCardsOfTypeFromHand(Box<Cards>),
  RevealCardFromHand(CardInHand),
  RevealHand,
  RevealHandAndPutEachCardOnBattlefield(Box<Cards>, Vec<EnterFlag>),
  RevealNumberGroupCardsFromHand(Box<GameNumber>, Box<Cards>, GroupFilter),
  RevealTheChosenPlayer,
  RevealTheSecretlyChosenCreatureType,
  RevealTopCardOfLibrary,
  RevealTopCardOfLibraryAndPutIntoHand(Box<Cards>),
  RevealTopCardOfLibraryOfType(Box<Cards>),
  RollAD6,
  RollAD8,
  SacrificeAPermanent(Box<Permanents>),
  SacrificeAnyNumberOfGroupPermanents(Box<Permanents>, GroupFilter),
  SacrificeAnyNumberOfPermanents(Box<Permanents>),
  SacrificeEachPermanent(Box<Permanents>),
  SacrificeNumberGroupPermanents(Box<GameNumber>, Box<Permanents>, GroupFilter),
  SacrificeNumberPermanents(Box<GameNumber>, Box<Permanents>),
  SacrificeOneOrMorePermanents(Box<Permanents>),
  SacrificePermanent(Box<Permanent>),
  SacrificeUptoNumberPermanents(Box<GameNumber>, Box<Permanents>),
  SearchLibrary(Vec<SearchLibraryAction>),
  SeekACard(Box<Cards>),
  ShuffleACardFromHandIntoLibrary,
  ShuffleCardsFromHandIntoLibrary(Box<CardsInHand>),
  ShuffleGraveyardCardIntoLibrary(Box<CardInGraveyards>),
  ShufflePermanentIntoLibrary(Box<Permanent>),
  Surveil(Box<GameNumber>),
  SuspectAPermanent(Box<Permanents>),
  TapAPermanent(Box<Permanents>),
  TapAnyNumberOfGroupPermanents(Box<Permanents>, GroupFilter),
  TapAnyNumberOfPermanents(Box<Permanents>),
  TapNumberGroupPermanents(Box<GameNumber>, Box<Permanents>, GroupFilter),
  TapNumberPermanents(Box<GameNumber>, Box<Permanents>),
  TapPermanent(Box<Permanent>),
  Teamwork(i32),
  TransformPermanent(Box<Permanent>),
  TurnPermanentFaceUp(Box<Permanent>),
  UnattachAPermanentFromAPermanent(Box<Permanents>, Box<Permanents>),
  UnattachPermanent(Box<Permanent>),
  UnspecializeGraveyardCard(Box<CardInGraveyards>),
  UntapAPermanent(Box<Permanents>),
  UntapEachPermanent(Box<Permanents>),
  UntapNumberPermanents(Box<GameNumber>, Box<Permanents>),
  UntapPermanent(Box<Permanent>),
  Waterbend(ManaCost),
  WaterbendCustomX(ManaCostX, Box<GameNumber>),
  WaterbendX(ManaCostX),
}

type ReflexiveAction = Cost;

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_NameFilter", content = "args"))]
pub enum NameFilter {
  NamedCard(NameString),
  ANameChosenByPermanent(Box<Permanent>),
  TheNamePlayerNotedForCardDuringDraft(Box<Player>, NameString),
  TheNameOfTheSacrificedCreature,
  NameOfGraveyardCard(Box<CardInGraveyards>),
  OneOfTheChosenNames,
  TheChosenName,
  TheChosenCardName,
  TheNameChosenByPlayer(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Card", content = "args"))]
pub enum SingleCard {
  ThisCard,
  TheCardPutOntoTheBattlefieldThisWay,
  TheCardWithTheChosenName,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardsInOracle", content = "args"))]
pub enum CardsInOracle {
  AnyOracleCard,
  And(Vec<CardsInOracle>),
  Or(Vec<CardsInOracle>),
  Not(Box<CardsInOracle>),
  FromTheLorwynEclipsedExpansion,
  IsNamed(NameFilter),
  SharesANameWithACardInHandRevealedThisWay,
  IsSupertype(SuperType),
  IsNonSupertype(SuperType),
  IsCardtype(CardType),
  IsNonCardtype(CardType),
  IsCreatureType(CreatureType),
  IsNonCreatureType(CreatureType),
  IsArtifactType(ArtifactType),
  ManaValueIs(Box<Comparison>),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Cards", content = "args"))]
pub enum Cards {
  Not(Box<Cards>),
  And(Vec<Cards>),
  Or(Vec<Cards>),
  Other(SingleCard),
  SingleCard(SingleCard),

  // IsNonSpellType(SpellType),
  TheCardsSeekedThisWay,
  IsCardtypeVariable(CardtypeVariable),
  DoesntShareACardtypeWithTheCardsDiscardedThisWay,
  NumCreatureTypesIs(Box<Comparison>),
  HasXInManaCost,
  HasNumberCardTypes(Box<Comparison>),
  AnyCard,
  SharesACardtypeWithThePermanentDestroyedThisWay,
  SharesACreatureTypeWithDeadPermanent,
  DoesntHaveAbility(CheckHasable),
  DoesntShareANameWithSpell(Box<Spell>),
  HasAbility(CheckHasable),
  HasAnAdventure,
  HasBasicLandType,
  IsArtifactType(ArtifactType),
  IsNonArtifactType(ArtifactType),
  IsCardtype(CardType),
  IsColor(Color),
  IsColored,
  IsColorless,
  IsCreatureType(CreatureType),
  IsCreatureTypeVariable(CreatureTypeVariable),
  IsDoubleFaced,
  IsEnchantmentType(EnchantmentType),
  IsHistoric,
  IsLandType(LandType),
  IsNonLandType(LandType),
  IsMulticolored,
  IsNamed(NameFilter),
  IsNonCardtype(CardType),
  IsNonColor(Color),
  IsNonCreatureType(CreatureType),
  IsNonEnchantmentType(EnchantmentType),
  IsNonSupertype(SuperType),
  IsNotNamed(NameFilter),
  IsNumberColors(Box<Comparison>),
  IsPermanent,
  IsPlaneswalkerType(PlaneswalkerType),
  IsSpellType(SpellType),
  IsSupertype(SuperType),
  IsYourCommander,
  ManaValueIs(Box<Comparison>),
  NumberOfDifferentManaColorSymbolsInCostIs(Box<Comparison>),
  PowerIs(Box<Comparison>),
  SharesACardtypeWithCardDiscardedByPlayerThisWay(Box<Player>),
  SharesACardtypeWithCardsDiscardedThisWay,
  SharesACardtypeWithEachableExiledPermanent,
  SharesACardtypeWithExiledCard(Box<CardInExile>),
  SharesACardtypeWithPermanent(Box<Permanent>),
  SharesACardtypeWithSpell(Box<Spell>),
  SharesAColorWithAPermanent(Box<Permanents>),
  SharesAColorWithPermanent(Box<Permanent>),
  SharesAColorWithIt,
  SharesACreatureTypeWithMostPrevalentCreatureTypeInPlayersLibrary(Box<Player>),
  SharesACreatureTypeWithPermanent(Box<Permanent>),
  SharesACreatureTypeWithPermanents(Box<Permanents>),
  SharesAManaValueWithSpell(Box<Spell>),
  SharesANameWithACardSpliceOntoSpell(Box<Spell>),
  SharesANameWithAPermanent(Box<Permanents>),
  SharesANameWithAnExiled(Box<CardsInExile>),
  SharesANameWithAGraveyardCard(Box<CardsInGraveyards>),
  SharesANameWithGraveyardCard(Box<CardInGraveyards>),
  SharesANameWithPermanent(Box<Permanent>),
  SharesANameWithSpell(Box<Spell>),
  ToughnessIs(Box<Comparison>),
  HasMoreThanOneOfTheSameManaSymbolInCost,
  IsAllColors,
  OwnedByAPlayer(Box<Players>),
  ControlledByAPlayer(Box<Players>),
  TheChosenLibraryFilter,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ExchangeOwnershipCard", content = "args"))]
pub enum ExchangeOwnershipCard {
  Ref_TargetPermanent,
  TheCardRevealedFromHandThisWay,
  TheFirstCardExiledThisWay,
  TheSecondCardExiledThisWay,
  ThisPermanent,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Permanents", content = "args"))]
pub enum Permanents {
  TheTokensCreatedByAPlayerThisWay(Box<Players>),
  IsNonToken,
  IsToken,
  TheCreatedTokens,
  TheTokensCreatedThisWay,

  APermanentWithTheHighestManaValue(Box<Permanents>),
  APermanentWithTheLowestManaValue(Box<Permanents>),
  AdditionalCostWasPaid,
  And(Vec<Permanents>),
  AnyPermanent,
  AttachedToAPermanent(Box<Permanents>),
  AttachedToPermanent(Box<Permanent>),
  AttachedToPlayer(Box<Player>),
  AttackedABattleThisTurn(Box<Permanents>),
  AttackedDuringLastPlayersTurn(Box<Player>),
  AttackedPlayerThisCombat(Box<Player>),
  AttackedPlayerThisTurn(Box<Player>),
  AttackedSincePlayersLastUpkeep(Box<Player>),
  AttackedThisCombat,
  AttackedThisTurn,
  BandedWith(Box<Permanent>),
  BasePowerAndToughnessIsEqualTo(PT),
  BasePowerIs(Box<Comparison>),
  BaseToughnessIs(Box<Comparison>),
  BlockedAnAttackerThisTurn(Box<Permanents>),
  BlockedAttackerThisTurn(Box<Permanent>),
  BlockedDeadAttacker,
  BlockedSincePlayersLastUpkeep(Box<Player>),
  BlockedThisCombat,
  BlockedThisTurn,
  CanBeEnchantedByDeadGuest,
  CastByPlayer(Box<Player>),
  CastByPlayerDuringPlayersMainPhase(Box<Player>, Box<Player>),
  CastByPlayerFromAnyPlayersGraveyard(Box<Player>, Box<Players>),
  CastByPlayerFromHand(Box<Player>, Box<Player>),
  CastByPlayerFromPlayersGraveyard(Box<Player>, Box<Player>),
  CastByPlayerThisTurn(Box<Player>),
  CastFromPlayersLibrary(Box<Player>),
  CoinCameUpTails,
  ControlledByAPlayer(Box<Players>),
  ControlledByPlayer(Box<Player>),
  ControlledSinceBeforeCombatThisTurn,
  ControlledSinceBeginningOfMostRecentTurn,
  ControlledSinceBeginningOfTurn,
  ConvokedPermanent(Box<Permanent>),
  ConvokedSpell(Box<Spell>),
  CouldBeTargetedBySpell(Box<Spell>),
  CouldBeTargetedBySpell_ThoseTargets,
  CouldProduce(ManaProduceSymbol),
  CouldProduceAnyManaColorPermanentCouldProduce(Box<Permanent>),
  CouldntAttackThisTurn,
  CreatedByPermanent(Box<Permanent>),
  CrewedVehicleThisTurn(Box<Permanent>),
  DealtCombatDamageToAPlayerThisCombat(Box<Players>),
  DealtCombatDamageToAPlayerThisTurn(Box<Players>),
  DealtCombatDamageToCreatureThisTurn(Box<Permanents>),
  DealtDamageAmountThisTurn(Box<Comparison>),
  DealtDamageAmountToPlayerThisTurn(Box<Comparison>, Box<Player>),
  DealtDamageThisTurn,
  DealtDamageToAPermanentThisTurn(Box<Permanents>),
  DealtDamageToAnyPlayerThisTurn(Box<Players>),
  DealtDamageToPermanentThisTurn(Box<Permanent>),
  DealtDamageToPlayerThisTurn(Box<Player>),
  DevouredACreature,
  DidntAttackThisTurn,
  DidntEnterTheBattlefieldThisTurn,
  DidntExertThisTurn,
  DoesntHaveAName,
  DoesntHaveAbility(CheckHasable),
  DoesntShareACreatureTypeWithPermanent(Box<Permanent>),
  DoesntShareANameWithACardInPlayersGraveyard(Box<Cards>, Box<Player>),
  DoesntShareANameWithAPermanent(Box<Permanents>),
  EmergeCostWasPaid,
  EnlistedAPermanentThisCombat(Box<Permanents>),
  EnteredFromAPlayersGraveyard(Box<Players>),
  EnteredFromPlayersGraveyard(Box<Player>),
  EnteredFromPlayersLibrary(Box<Player>),
  EnteredTheBattlefieldSinceLastTurnOf(Box<Player>),
  EnteredTheBattlefieldThisTurn,
  EnteredTheBattlefieldUnderPlayersControlThisTurn(Box<Player>),
  EnteredUnderPlayersControl(Box<Player>),
  Escaped,
  ExceptFor(Box<Permanents>),
  ExploitedCreature(Box<Permanent>),
  FoughtThisTurn,
  HadAnAbilityActivatedThisTurn,
  HadCountersOfTypePutOnItByAPlayerThisTurn(CounterType, Box<Players>),
  HadCountersPutOnItThisWay,
  HadToAttackThisCombat,
  HasACounter,
  HasACounterOfType(CounterType),
  HasANameSticker,
  HasAPowerAndToughnessSticker,
  HasASticker,
  HasAbilities,
  HasAbility(CheckHasable),
  HasAnActivatedAbilityOtherThanThisActivatedAbility,
  HasAnAdventure,
  HasAnArtSticker,
  HasAnAttachment(Box<Permanents>),
  HasBeenGoaded,
  HasDealtDamageThisGame,
  HasExiledCards,
  HasExiledNumCards(Box<Comparison>),
  HasNoAbilities,
  HasNoCounters,
  HasNoCountersOfType(CounterType),
  HasNonBasicLandType,
  HasNumberCounters(Box<Comparison>),
  HasNumberCountersOfType(Box<Comparison>, CounterType),
  HasTheMostVotesOrTiedForTheMostVotes,
  HasXInManaCost,
  HasntBeenPhasedOutWithThisAbility,
  HasntDealtDamageThisGame,
  InTheChosenPile,
  InTheChosenPiles,
  InTheChosenSector,
  InThePermanentPileChosenThisWay,
  InThePileChosenForPermanent(Box<Permanent>),
  IntensityIs(Box<Comparison>),
  IsACommander,
  IsARingBearer,
  IsAllColors,
  IsAnOutlaw,
  IsArtifactType(ArtifactType),
  IsAttacking,
  IsAttackingABattle(Box<Permanents>),
  IsAttackingAPermanent(Box<Permanents>),
  IsAttackingAPlayer(Box<Players>),
  IsAttackingAPlayerOrPlaneswalkerTheyControl(Box<Players>),
  IsAttackingAlone,
  IsAttackingPlayer(Box<Player>),
  IsAttackingPlayerOrPlaneswalkerTheyControl(Box<Player>),
  IsAttackingTheSamePlayerOrPlaneswalkerAsCreature(Box<Permanent>),
  IsBlocked,
  IsBlockedByADefender(Box<Permanents>),
  IsBlockedByDefender(Box<Permanent>),
  IsBlocking,
  IsBlockingAlone,
  IsBlockingAnAttacker(Box<Permanents>),
  IsBlockingAttacker(Box<Permanent>),
  IsCardtype(CardType),
  IsCardtypeVariable(CardtypeVariable),
  IsColor(Color),
  IsColored,
  IsColorless,
  IsCreatureType(CreatureType),
  IsCreatureTypePlayerNotedForCardDuringDraft(Box<Player>, NameString),
  IsCreatureTypeVariable(CreatureTypeVariable),
  IsDamaged,
  IsDoubleFaced,
  IsEnchanted,
  IsEnchantedByANumberOfEnchantingPermanents(Box<Comparison>, Box<Permanents>),
  IsEnchantedByAPermanent(Box<Permanents>),
  IsEnchantingPermanent(Box<Permanent>),
  IsEnchantmentType(EnchantmentType),
  IsEquipped,
  IsFaceDown,
  IsFaceUp,
  IsFirstLandPlayedByPlayerThisTurn,
  IsHarnessed,
  IsHistoric,
  IsLandType(LandType),
  IsLandTypeVariable(LandTypeVariable),
  IsModified,
  IsMonocolored,
  IsMonstrous,
  IsMulticolored,
  IsNamed(NameFilter),
  IsNonArtifactType(ArtifactType),
  IsNonCardtype(CardType),
  IsNonColor(Color),
  IsNonCreatureType(CreatureType),
  IsNonCreatureTypeVariable(CreatureTypeVariable),
  IsNonEnchantmentType(EnchantmentType),
  IsNonLandType(LandType),
  IsNonOutlaw,
  IsNonPlaneswalkerType(PlaneswalkerType),
  IsNonSupertype(SuperType),
  IsNotACommander,
  IsNotAllColors,
  IsNotNamed(NameFilter),
  IsNotSuspected,
  IsNumberColors(Box<Comparison>),
  IsPaired,
  IsPairedWithA(Box<Permanents>),
  IsPermanent,
  IsPlaneswalkerType(PlaneswalkerType),
  IsPlaneswalkerTypeVariable(PlaneswalkerTypeVariable),
  IsRenowned,
  IsSaddled,
  IsSupertype(SuperType),
  IsSuspected,
  IsTapped,
  IsTheChosenPermanentFilter,
  IsTheFirstChosenPermanentFilter,
  IsTheSecondChosenPermanentFilter,
  IsTheThirdChosenPermanentFilter,
  IsTransformed,
  IsUnblocked,
  IsUntapped,
  IsWorthy,
  IsYourCommander,
  IsntAttacking,
  IsntBlocking,
  IsntEnchanted,
  IsntSaddled,
  ItEscaped,
  ItWasCast,
  MadnessCostWasPaid,
  ManaAmountOfSameColorWasSpentToCastIt(Box<Comparison>),
  ManaAmountOfTypeWasSpentToCastIt(Box<Comparison>, Color),
  ManaFromAPermanentWasSpentToCastIt(Box<Permanents>),
  ManaValueIs(Box<Comparison>),
  ManaWasSpentToCastIt(Vec<ManaProduce>),
  NoManaWasSpentToCastIt,
  Not(Box<Permanents>),
  NotChosenByAPlayerThisWay(Box<Players>),
  NotChosenThisWay,
  NotControlledSinceBeginningOfTurn,
  NotInTheChosenPile,
  NotPutOntoBattlefieldByAbility(Ability),
  NumOtherPermanentsAreOnTheBattlefield(Box<Comparison>, Box<Permanents>),
  NumberOfColorsOfManaSpentToCastItIs(Box<Comparison>),
  OnTheBattlefield,
  Or(Vec<Permanents>),
  Other(Box<Permanent>),
  OwnedByAPlayer(Box<Players>),
  PermanentHasNotRemovedACounterOfTypeFromIt(Box<Permanent>, CounterType),
  PermanentPutACounterOfTypeOnIt(Box<Permanent>, CounterType),
  PlayedByAPlayer(Box<Players>),
  PlayerControlledAPermanentAsCast(Box<Player>, Box<Permanents>),
  PlayerHasCastAnotherSpellThisTurn(Box<Player>, Box<Spells>),
  PlayerRevealedACardAsCast(Box<Player>, Box<Cards>),
  PowerAndToughnessAreEqual,
  PowerAndToughnessArentEqual,
  PowerAndToughnessIsEqualTo(PT),
  PowerIs(Box<Comparison>),
  PowerIsDifferentFromItsBasePower,
  PowerIsGreaterThanBasePower,
  PowerIsLessThanToughness,
  ProtectedByAPlayer(Box<Players>),
  ProwlCostWasPaid,
  PutOntoBattlefieldByPermanent(Box<Permanent>),
  PutOntoBattlefieldByScheme(SingleScheme),
  ReceivedAVote,
  Ref_TargetPermanents,
  Ref_TargetPermanents1,
  Ref_TargetPermanents2,
  RegeneratedThisTurn,
  RemovedFromCombatThisWay,
  SaddledPermanentThisTurn(Box<Permanent>),
  SharesACardtypeWithExiledCard(Box<CardInExile>),
  SharesACardtypeWithGraveyardCard(Box<CardInGraveyards>),
  SharesACardtypeWithPermanent(Box<Permanent>),
  SharesACardtypeWithPermanentFromAmongCardtypes(Box<Permanent>, Vec<CardType>),
  SharesACardtypeWithThatDeadPermanent,
  SharesACardtypeWithTheSacrificedPermanent,
  SharesAColorWithAnyManaColorProduced,
  SharesAColorWithColorChosenByPlayerDuringDraft(Box<Player>, NameString),
  SharesAColorWithPermanent(Box<Permanent>),
  SharesAColorWithTheTopCardOfPlayersLibrary(Box<Player>),
  SharesAColorWithhTheMostCommonColorOrAColorTiedForMostCommonColorAmongPermanents(Box<Permanents>),
  SharesACreatureTypeWithDeadPermanent,
  SharesACreatureTypeWithExiledCard(Box<CardInExile>),
  SharesACreatureTypeWithPermanent(Box<Permanent>),
  SharesACreatureTypeWithPermanents(Box<Permanents>),
  SharesANameOriginallyPrintedInAntiquities,
  SharesANameOriginallyPrintedInArabianNights,
  SharesANameOriginallyPrintedInHomelands,
  SharesANameWithAPermanent(Box<Permanents>),
  SharesANameWithAPermanentThatDealtDamageToPlayerLastTurn(Box<Player>),
  SharesANameWithCardInPlayersGraveyard(Box<Cards>, Box<Player>),
  SharesANameWithExiled(Box<CardInExile>),
  SharesANameWithGraveyardCard(Box<CardInGraveyards>),
  SharesANameWithPermanent(Box<Permanent>),
  SharesANameWithSpell(Box<Spell>),
  SharesANameWithTheLeavingPermanent,
  SharesAPermanentCardtypeWithPermanent(Box<Permanent>),
  SharesASectorWithPermanent(Box<Permanent>),
  SharesCardtypeWithPermanent(CardType, Box<Permanent>),
  SinglePermanent(Box<Permanent>),
  SneakCostWasPaid,
  SneakCostWasPaidThisTurn,
  SnowManaWasSpentToCastIt,
  SpectacleCostWasPaid,
  StartedThisTurnUntapped,
  SurgeCostWasPaid,
  TargetsAPermanent_ThosePermanents,
  TheCardsConjuredOntoTheBattlefieldThisWay,
  TheChosenCreatures,
  TheChosenPermanents,
  TheNthSpellCastByPlayerThisTurn(Box<GameNumber>, Box<Spells>, Box<Player>),
  ThePermanentsAffectedThisWay,
  ThePermanentsChosenThisWay,
  ThePermanentsExiledThisWay,
  ThePermanentsGainedControlOfThisWay,
  ThePermanentsList,
  ThePermanentsListForPlayer(Box<Player>),
  ThePermanentsNotChosenThisWay,
  ThePermanentsPhasedOutThisWay,
  ThePermanentsPutOnTheBattlefieldThisWay,
  ThePermanentsSacrificedThisWay,
  ThePermanentsTappedThisWay,
  TheSacrificedPermanents,
  TheSecretlyChosenPermanents,
  TheUnchosenPermanents,
  TotalPowerAndToughnessIs(Box<Comparison>),
  ToughnessIs(Box<Comparison>),
  TributeWasntPaid,
  Trigger_ThoseCreatures,
  Trigger_ThosePermanents,
  WasAttachedToDeadPermanent,
  WasBargained,
  WasBlockedByADefenderThisTurn(Box<Permanents>),
  WasBlockedByDefenderThisCombat(Box<Permanent>),
  WasBlockedByDefenderThisTurn(Box<Permanent>),
  WasBlockedSincePlayersLastUpkeep(Box<Player>),
  WasBlockedThisTurn,
  WasBlockingDeadDefender,
  WasCast,
  WasCastByAPlayer(Box<Players>),
  WasCastForItsWarpCost,
  WasCastFromAPlayersGraveyard(Box<Players>),
  WasCastFromTheirHand,
  WasCastThisTurn,
  WasCastUsingWebSlinging,
  WasCrewedByACreatureThisTurn(Box<Permanents>),
  WasCrewedByNumberCreatures(Box<Comparison>),
  WasDealtAnAmountOfDamageThisTurn(Box<Comparison>),
  WasDealtDamageByASourceThisTurn(DamageSources),
  WasDealtDamageByAnyPermanentThisTurn(Box<Permanents>),
  WasDealtDamageByPermanentThisGame(Box<Permanent>),
  WasDealtDamageByPermanentThisTurn(Box<Permanent>),
  WasDealtDamageBySpellThisTurn(Box<Spells>),
  WasDealtDamageByThisSpell,
  WasDealtDamageThisTurn,
  WasDealtDamageThisWay,
  WasDealtExcessDamageThisTurn,
  WasDealtExcessDamageThisWay,
  WasDealtNoncombatDamageThisTurn,
  WasEmbalmed,
  WasGoadedThisWay,
  WasKicked,
  WasKickedTwice,
  WasKickedWithKicker(ManaCost),
  WasTappedToPayForAbilitiesOfPermanent(Box<Permanent>),
  WasTurnedFaceUpThisTurn,
  WasUnearthed,
  WasUntappedThisWay,
  WasntCast,
  WasntCastFromAPlayersHand(Box<Players>),
  WasntCastFromHand,
  WasntCastFromTheirHand,
  WasntDealtDamageThisTurn,
  WasntKicked,
  XIs(Box<Comparison>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Permanent", content = "args"))]
pub enum Permanent {
  // Internal
  ById(PermanentId),

  // Normal
  WouldConnive_ThatPermanent,

  TheChosenPermanentForPlayer(Box<Player>),
  ThePermanentBlightedThisWay,
  ThePermanentAttachedThisWay,
  ThePermanentBeheldThisWay,
  TheTransformedPermanent,
  ThePermanentThatGrantedThisAbility,
  ThePermanentExiledByPlayerThisWay(Box<Player>),
  TheCardConjuredOntoTheBattlefieldThisWay,
  ThePermanentCloakedThisWay,
  ThePermanentPhasedOutThisWay,
  RefOuter_TargetPermanent,
  TheFirstPermanentChosenByPlayerThisWay(Box<Player>),
  TheSecondPermanentChosenByPlayerThisWay(Box<Player>),
  ActionPermanent,
  WouldDealDamage_DamageRecipientPermanent,
  ThePermanentAttachedToThisWay,
  ThisPermanentOrThisCommandCard,
  ThePermanentGainedControlOfThisWay,
  ThePermanentThisSpellBecame,
  Ref_TargetPermanent5,
  ThePermanentPutOnTheBattlefieldByPlayerThisWay(Box<Player>),
  ThePermanentSpellResolvedThisWay,
  WouldDealDamage_ThatPermanent,
  WouldBeDestroyed_ThatPermanent,
  WouldDealDamage_DamageSourceAsPermanent,
  WouldUntapDuringsItsControllersUntapStep_ThatPermanent,
  WouldDie_ThatPermanent,
  PermanentSourceOfAbilityCounteredThisWay,
  PermanentSourceOfAbility(Ability),
  CreatePermanentEffect_It,
  EachPermanentEffect_It,
  ThePermanentThatCreatedThisEmblem,
  TheFirstChosenPermanent,
  ThisExiledPermanentCard,
  TheCreatureHauntedByExiledCard(Box<CardInExile>),
  TheSacrificedPermanent,
  PlayersRingBearer(Box<Player>),
  ThePermanentExiledThisWay,
  Ref_TargetPermanentOfPlayersChoice,
  TheCreatureBolsteredThisWay,
  ThisSacrificedPermanent,
  ThePermanentThatCreatedIt,
  Ref_TargetPermanentControlledBy(Box<Player>),
  TheSecondChosenPermanent,
  TheCreaturePairedWithPermanent(Box<Permanent>),
  SingleTargetPermanentOfSpell(Box<Spell>),
  TheArmyAmassedThisWay,
  Trigger_ThatLand,
  Ref_TargetPermanents_0,
  Ref_TargetPermanents_1,
  ThePermanentDestroyedThisWay,
  AnyTargetAsAPermanent,
  ApplyPermanentEffect_It,
  DealsDamage_ThatPermanent,
  EachablePermanent,
  GuestPermanent,
  HostPermanent,
  HostPermanentOf(Box<Permanent>),
  Ref_TargetPermanent,
  Ref_TargetPermanent1,
  Ref_TargetPermanent2,
  Ref_TargetPermanent3,
  Ref_TargetPermanent4,
  Self_It,
  ThatEnteringPermanent,
  TheChosenPermanent,
  TheCreatureUnequippedThisWay,
  ThePermanentChosenByPlayerThisWay(Box<Player>),
  ThePermanentChosenThisWay,
  ThePermanentPutOnTheBattlefieldThisWay,
  ThePermanentReturnedToHandThisWay,
  ThePermanentSacrificedThisWay,
  ThePermanentTappedThisWay,
  ThePermanentThatDiedThisWay,
  ThisGuest,
  ThisPermanent,
  Trigger_ThatArtifact,
  Trigger_ThatCreature,
  Trigger_ThatCreatureOrPlaneswalker,
  Trigger_ThatDeadPermanent,
  Trigger_ThatOtherCreature,
  Trigger_ThatOtherPermanent,
  Trigger_ThatPermanent,
  Trigger_ThatSacrificedPermanent,
  Trigger_ThatVehicle,
  Trigger_TheAttackingCreature,
  Trigger_TheBlockingCreature,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SpellCopyEffects", content = "args"))]
pub enum SpellCopyEffects {
  NoSpellCopyEffects,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_TokenCopyEffects", content = "args"))]
pub enum TokenCopyEffects {
  TokenCopyEffects(Vec<TokenCopyEffect>),
  NoTokenCopyEffects,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_TokenCopyEffect", content = "args"))]
pub enum TokenCopyEffect {
  AddSupertypes(Vec<SuperType>),
  RemoveSupertypes(Vec<SuperType>),
  AddCardtypes(Vec<CardType>),
  SetCardtypes(Vec<CardType>),
  AddCreatureTypes(Vec<CreatureType>),
  AddArtifactTypes(Vec<ArtifactType>),
  SetArtifactTypes(Vec<ArtifactType>),
  SetCreatureTypes(Vec<CreatureType>),
  AddAbility(Vec<Rule>),
  LosesAbility(CheckHasable),
  RemoveThisAbility,
  AddAbilityFromEachExiledHasable(CardsInExile, Vec<CheckHasable>),
  AddColor(SettableColor),
  SetColor(SettableColor),
  SetName(NameString),
  SetPT(PT),
  SetLoyalty(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CopyEffects", content = "args"))]
pub enum CopyEffects {
  CopyEffects(Vec<CopyEffect>),
  NoCopyEffects,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CopyEffect", content = "args"))]
pub enum CopyEffect {
  // Typeline
  AddSupertypes(Vec<SuperType>),
  RemoveSupertypes(Vec<SuperType>),
  AddCardtypes(Vec<CardType>),
  SetCardtypes(Vec<CardType>),
  AddArtifactTypes(Vec<ArtifactType>),
  AddCreatureTypes(Vec<CreatureType>),
  AddLandTypes(Vec<LandType>),
  SetArtifactTypes(Vec<ArtifactType>),
  SetCreatureTypes(Vec<CreatureType>),
  MergeTypeline,

  // Abilities
  AddAbilityVariable(AbilityVariable),
  AddAbility(Vec<Rule>),
  AddAbilityIfItDoesntHaveAbility(Box<Rule>, CheckHasable),

  // Color
  KeepColor,
  AddColor(SettableColor),
  SetColor(SettableColor),

  // Name
  KeepName,
  SetName(NameString),

  // P/T
  KeepPT,
  SetPT(PT),

  // ManaCost
  HasNoManaCost,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StaticCopyEffect", content = "args"))]
pub enum StaticCopyEffect {
  // Name
  KeepName,
  SetName(NameString),

  // Typeline
  MergeTypeline,
  AddSupertypes(Vec<SuperType>),
  RemoveSupertypes(Vec<SuperType>),
  AddCardtypes(Vec<CardType>),
  SetCardtypes(Vec<CardType>),
  AddArtifactTypes(Vec<ArtifactType>),
  AddCreatureTypes(Vec<CreatureType>),
  AddLandTypes(Vec<LandType>),
  SetArtifactTypes(Vec<ArtifactType>),

  // ManaCost
  HasNoManaCost,

  // Color
  KeepColor,
  AddColor(SettableColor),
  SetColor(SettableColor),

  // Abilities
  AddAbility(Vec<Rule>),
  AddAbilityIfItDoesntHaveAbility(Box<Rule>, CheckHasable),
  // P/T
  KeepPT,
  SetPT(CardPT),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StaticCopyEffects", content = "args"))]
pub enum StaticCopyEffects {
  NoStaticCopyEffects,
  StaticCopyEffects(Vec<StaticCopyEffect>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_TokenFlag", content = "args"))]
pub enum TokenFlag {
  EntersAttachedToAPermanent(Box<Permanents>),
  EntersWithACounter(CounterType),
  EntersBlockingAttacker(Box<Permanent>),
  EntersWithNumberCounters(Box<GameNumber>, CounterType),
  EntersAttackingPlayerOrPlaneswalkerControlledBy(Box<Player>),
  EntersWithRuleEffectUntil(Vec<PermanentRule>, Expiration),
  EntersAttachedToPermanent(Box<Permanent>),
  EntersTapped,
  EntersAttackingPlayer(Box<Player>),
  EntersAttacking,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SetInMotionAction", content = "args"))]
pub enum SetInMotionAction {
  ChooseAPlayer(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PutIntoGraveyardAction", content = "args"))]
pub enum PutIntoGraveyardAction {
  ExileItInstead,
  RevealItAndShuffleItIntoLibraryInstead,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_AttachAction", content = "args"))]
pub enum AttachAction {
  ChooseAColor(ChoosableColor),
  ChooseAnExiledCardToCopy(Box<CardsInExile>),
  ChooseACardName(Box<CardsInOracle>),
  ChooseACreatureType,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FaceUpActionPutCounters", content = "args"))]
pub enum FaceUpActionPutCounters {
  NumberCountersOfTypeOnPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FaceUpAction", content = "args"))]
pub enum FaceUpAction {
  MayActions(Vec<FaceUpAction>),
  PutCounters(Vec<FaceUpActionPutCounters>),
  AttachPermanentToAPermanent(Box<Permanent>, Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_NameStickerFilter", content = "args"))]
pub enum NameStickerFilter {
  TheNameStickerPutOnPermanentThisWay,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Commander", content = "args"))]
pub enum Commander {
  TheCommanderChosenThisWay,
  ThisCommandCard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PregameCard", content = "args"))]
pub enum PregameCard {
  ThisPregameCard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Letter", content = "args"))]
pub enum Letter {
  TheChosenLetter,
  SingleLetter(LetterString),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ManaSpent", content = "args"))]
pub enum ManaSpent {
  Or(Vec<ManaProduceSymbol>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ManaSources", content = "args"))]
pub enum ManaSources {
  IsCardtype(CardType),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_GameNumber", content = "args"))]
pub enum GameNumber {
  AManaValueOfAnExiledCard(Box<CardsInExile>),
  ANumberOfCardsInAPlayersHand(Box<Players>),
  APlayerWouldMillAnyNumberOfCards_ThatMuch,
  AmountOfExcessDamageDealtThisWay,
  AmountOfExcessDamageDealtToPermanentThisTurn(Box<Permanent>),
  AmountOfExcessDamageDealtToPermanentsThisWay(Box<Permanents>),
  AmountOfGenericManaInSpellsManaCost(Box<Spell>),
  AmountOfLifePaidThisWay,
  AmountOfManaOfTypeSpentOnCumulativeUpkeep(ManaSpent),
  AmountOfManaPaidThisWay,
  AmountOfManaSpentToCastSpell(Box<Spell>),
  AmountOfUnspentManaOfColorPlayerHas(Color, Box<Player>),
  AmountOfUnspentManaPlayerHas(Box<Player>),
  AsLoseUnspentMana_AmountOfUnspentMana,
  BasePowerOfPermanent(Box<Permanent>),
  CounterSpell_ManaValueOfCounteredSpell,
  CurrentStake,
  DamageDealtByResolvedSpell(Box<Spell>),
  DamageDealtToAnyPlayerThisTurn(Box<Players>),
  DamageDealtToPlayerThisTurn(Box<Player>),
  DamageDealtToPlayerThisTurnByPermanents(Box<Player>, Box<Permanents>),
  DifferenceBetween(Box<GameNumber>, Box<GameNumber>),
  DistributedNumber,
  DivideRoundedDown(Box<GameNumber>, Box<GameNumber>),
  EachAdditionalManaCostPaid(ManaCost),
  EachableNumber,
  Emerge_ToughnessOfTheSacrificedCreature,
  FlipACoinUntilLose_NumFlipsWon,
  GreatestNumberOfPermanentsThatHaveCreatureTypeInCommon(Box<Permanents>),
  HalfRoundedDown(Box<GameNumber>),
  HalfRoundedUp(Box<GameNumber>),
  HighestLifeTotalAmongPlayers(Box<Players>),
  HighestManaValueAmongCardsMilledThisWay,
  HighestNotedValueForPermanent(Box<Permanent>),
  HighestNumberPlayerNotedForCardDuringDraft(Box<Player>, NameString),
  Integer(i32),
  IntensityOfPermanent(Box<Permanent>),
  IntensityOfSpell(Box<Spell>),
  ItsManaValue,
  LastNotedLifeTotalForPermanent(Box<Permanent>),
  LifeGainedByPlayerThisTurn(Box<Player>),
  LifeLostByPlayerThisTurn(Box<Player>),
  LifeLostThisWay,
  LifePaidWithVanguard(SingleVanguard),
  LifeTotalOfPlayer(Box<Player>),
  LifeTotalOfPlayerAsTurnBegan(Box<Player>),
  LowestLifeTotalAmongPlayers(Box<Players>),
  LoyaltyOfPermanent(Box<Permanent>),
  ManaCostsOfCombatCreatures(Box<Permanents>),
  ManaValueOfCardDiscardedByPlayerThisWay(Box<Player>),
  ManaValueOfCardPutInGraveyard,
  ManaValueOfCardPutInHandThisWay,
  ManaValueOfDeadPermanent,
  ManaValueOfExiled(Box<CardInExile>),
  ManaValueOfGraveyardCard(Box<CardInGraveyards>),
  ManaValueOfPermanent(Box<Permanent>),
  ManaValueOfSpell(Box<Spell>),
  ManaValueOfTheCardDiscardedThisWay,
  ManaValueOfTheCardExiledThisWay,
  ManaValueOfTheCardFoundThisWay,
  ManaValueOfTheCardMilledThisWay,
  ManaValueOfTheCardRevealedByPlayerThisWay(Box<Player>),
  ManaValueOfTheCardRevealedThisWay,
  ManaValueOfTheCardsRevealedByPlayersThisWay(Box<Players>),
  ManaValueOfTheCardsRevealedThisWay,
  ManaValueOfTheDiscardedCard,
  ManaValueOfTheExiledCardUsedToCraftPermanent(Box<Permanent>),
  ManaValueOfTheFoundCard,
  ManaValueOfThePermanentSacrificedThisWay,
  ManaValueOfThePermanentUnattachedThisWay,
  ManaValueOfTheSacrificedPermanent,
  ManaValueOfTheWebslungCreature,
  ManaValueOfYourCommander,
  MaxPermanentsControlledByAPlayer(Box<Permanents>, Box<Players>),
  MaximumOf(Box<GameNumber>, Box<GameNumber>),
  MinPermanentsControlledByAPlayer(Box<Permanents>, Box<Players>),
  MinimumOf(Box<GameNumber>, Box<GameNumber>),
  Minus(Box<GameNumber>, Box<GameNumber>),
  Multiply(Box<GameNumber>, Box<GameNumber>),
  NumCardTypesOfCardDiscardedThisWay,
  NumCardsDiscardedThisWay,
  NumCardsDrawnByPlayerThisTurn(Box<Player>),
  NumCardsInExile(Box<CardsInExile>),
  NumCardsInPlayersLibrary(Box<Player>),
  NumCardsMilledIntoGraveyardThisWay(Box<Cards>),
  NumCardsMilledThisWay(Box<Cards>),
  NumCardsOfTypeDiscardedThisWay(Box<Cards>),
  NumCardsOfTypeInPlayersLibrary(Box<Cards>, Box<Player>),
  NumCardsPlayerCycledOrDiscardedThisTurn(Box<Player>),
  NumCardsPlayerDiscardedThisTurn(Box<Player>),
  NumCardsPlayerRemovedWithCardDuringDraft(Box<Player>, NameString),
  NumCardsPutIntoGraveyardFromAnywhereThisTurn(Box<Cards>, Box<Player>),
  NumCardsPutIntoLibraryThisWay,
  NumCardsReturnedToHandThisWay,
  NumCardsShuffledIntoLibraryThisWay,
  NumCoinFlipsLost,
  NumCoinFlipsWon,
  NumColorManaSymbolsInCostsOfCardsInPlayersGraveyard(Color, Box<Cards>, Box<Player>),
  NumColorManaSymbolsInCostsOfPermanent(Color, Box<Permanent>),
  NumColorManaSymbolsInCostsOfPermanents(Color, Box<Permanents>),
  NumColorsAmongPermanents(Box<Permanents>),
  NumColorsManaSpentToCastEnteringPermanent,
  NumColorsManaSpentToCastSelf,
  NumColorsManaSpentToCastSpell(Box<Spell>),
  NumColorsOfPermanent(Box<Permanent>),
  NumCreaturesInPlayersParty(Box<Player>),
  NumCreaturesOrPlaneswalkersThatDiedThisTurn(Box<Permanents>),
  NumCreaturesPlayerAttackedWithThisTurn(Box<Permanents>, Box<Player>),
  NumDifferentManaValueAmongCardsInPlayersGraveyard(Box<Cards>, Box<Player>),
  NumDifferentManaValuesAmongCardsInExile(Box<CardsInExile>),
  NumDifferentManaValuesAmongPermanents(Box<Permanents>),
  NumDifferentlyNamedDungeonsPlayerHasComplete(Box<Player>),
  NumDifferentlyPoweredCreaturesAmongPermanents(Box<Permanents>),
  NumEnteredTheBattlefieldThisTurn(Box<Permanents>),
  NumGraveyardCardsExiledThisWay,
  NumGraveyardCardsOfTypeExiledThisWay(Box<Cards>),
  NumGroupPermanents(Box<Permanents>, GroupFilter),
  NumHandCardsExiledFaceDownThisWay,
  NumHandCardsExiledThisWay,
  NumLibraryCardsRevealedThisWay(Box<Cards>),
  NumManaSymbolsInCostOfSpell(ManaSymbol, Box<Spell>),
  NumPermanentsAttachedToDeadPermanent(Box<Permanents>),
  NumPermanentsDestroyedThisWay(Box<Permanents>),
  NumPermanentsDevouredByEnteringPermanent(Box<Permanents>),
  NumPermanentsExiledThisWay,
  NumPermanentsOfTypeExiledThisWay(Box<Permanents>),
  NumPermanentsPhasedOutThisWay,
  NumPermanentsShuffledIntoLibraryThisWay,
  NumPermanentsShuffledIntoLibraryThisWayByPlayer(Box<Player>),
  NumPlayers(Box<Players>),
  NumPointsOfBushidoPermanentHas(Box<Permanent>),
  NumSpellsCastByAnyPlayerBeforeSpellThisTurn(Box<Spells>, Box<Players>, Box<Spell>),
  NumSpellsCastByAnyPlayerThisTurn(Box<Spells>, Box<Players>),
  NumSpellsCastByPlayerBeforeSpellThisTurn(Box<Spells>, Box<Player>, Box<Spell>),
  NumSpellsCastByPlayerThisTurn(Box<Spells>, Box<Player>),
  NumSpellsCastThisTurn(Box<Spells>),
  NumTimesCreatureHasMutated(Box<Permanent>),
  NumTimesPaidMana,
  NumTimesPermanentAttackedThisTurn(Box<Permanent>),
  NumTimesPermanentRegeneratedThisTurn(Box<Permanent>),
  NumTimesPlayerHasACastACommanderFromCommandZone(Box<Player>),
  NumTimesPlayerHasCastACommanderFromCommandZone(Box<Player>),
  NumTimesPlayerHasCastTheirCommanderFromCommandZone(Box<Player>),
  NumTimesSpellWasKicked(Box<Spell>),
  NumberOfBasicLandTypesAmongPermanents(Box<Permanents>),
  NumberOfCardsDrawnThisWay,
  NumberOfCardsOfTypeExiledThisWay(Box<Cards>),
  NumberOfCardsPutIntoGraveyardThisWay,
  NumberOfColorManaSymbolsInManaCostOfTheSacrificedPermanent(Color),
  NumberOfColorsInPlayersCommandersColorIdentity(Box<Player>),
  NumberOfCreatureTypesNotedByPermanent(Box<Permanent>),
  NumberOfPermanentsSacrificedByPlayerThisTurn(Box<Permanents>, Box<Player>),
  NumberOfPermanentsTappedThisWayByPlayer(Box<Player>),
  NumberOfTimesThisAbilityHasResolvedThisTurn,
  NumberOfTurnsPlayerHasBeguan(Box<Player>),
  PermanentItTargets(Box<Permanents>),
  PlayerDevotionTo(Box<Player>, Color),
  PlayersChosenNumber(Box<Player>),
  Plus(Box<GameNumber>, Box<GameNumber>),
  Plus3(Box<GameNumber>, Box<GameNumber>, Box<GameNumber>),
  Power(Box<GameNumber>, Box<GameNumber>),
  PowerOfDeadPermanent,
  PowerOfExiledCard(Box<CardInExile>),
  PowerOfGraveyardCard(Box<CardInGraveyards>),
  PowerOfPermanent(Box<Permanent>),
  PowerOfSpell(Box<Spell>),
  PowerOfTheCreatureItTargets,
  PowerOfTheDevouredCreature,
  PowerOfTheDiscardedCard,
  PowerOfTheExiledCreature,
  PowerOfTheRevealedCard,
  PowerOfTheSacrificedCreature,
  PowerOfTheSelectedPermanent,
  SpeedOfPlayer(Box<Player>),
  StartingLifeTotalOfPlayer(Box<Player>),
  TenthRoundedUp(Box<GameNumber>),
  ThatManyCounters,
  TheAmountOfColorManaSpentOnX(ManaSymbol),
  TheAmountOfDamageDealtThisWay,
  TheAmountOfDamageDealtToPermanentThisTurn(Box<Permanent>),
  TheAmountOfDamageDealtToPermanentThisTurnBySources(Box<Permanent>, DamageSources),
  TheAmountOfDamagePreventedThisWay,
  TheAmountOfEnergyPaidOrLostByPlayersThisTurn(Box<Players>),
  TheAmountOfEnergyPaidThisWay,
  TheAmountOfEnergyPlayerHas(Box<Player>),
  TheAmountOfManaFromATreasureSpentToActivateThisAbility,
  TheAmountOfManaFromATreasureSpentToCastSpell(Box<Spell>),
  TheAmountOfManaFromPermanentsSpentToCastSpell(Box<Permanents>, Box<Spell>),
  TheAmountOfManaFromSourcesSpentToCastIt(Box<ManaSources>),
  TheAmountOfManaLostThisWay,
  TheAmountOfSnowManaSpentToCastSpell(Box<Spell>),
  TheChosenNumber,
  TheClampedAmountOfDamageDealtThisWay,
  TheDiceResult,
  TheFirstDiceResult,
  TheGreatestAmongOfDamageDealtByASourceToAPlayerOrAPermanentThisTurn(DamageSources, Box<Players>, Box<Permanents>),
  TheGreatestManaValueAmongCardsInPlayersHand(Box<CardsInHand>, Box<Player>),
  TheGreatestManaValueAmongExiledCards(Box<CardsInExile>),
  TheGreatestManaValueAmongPermanents(Box<Permanents>),
  TheGreatestManaValueAmongSpellsCastThisTurn(Box<Spells>),
  TheGreatestManaValueAmongTheCardsDiscardedThisWay,
  TheGreatestManaValueAmongTheCardsThatLeftTheGraveyardThisWay,
  TheGreatestManaValueOfACommanderInTheCommandZoneOrOnTheBattlefield(Commanders),
  TheGreatestNumberOfCardsDiscardedThisWay,
  TheGreatestNumberOfCardsDrawnByAPlayerThisTurn(Box<Players>),
  TheGreatestNumberOfPermanentsControlledAmongPlayers(Box<Permanents>, Box<Players>),
  TheGreatestNumberOfStoredDiceResultsThatAreEqual,
  TheGreatestPowerAmongCardsInPlayersGraveyard(Box<Cards>, Box<Players>),
  TheGreatestPowerAmongCardsPutIntoGraveyardThisWay(Box<Cards>),
  TheGreatestPowerAmongPermanents(Box<Permanents>),
  TheGreatestPowerAmongPermanentsAndCardsInPlayersGraveyard(Box<Permanents>, Box<Cards>, Box<Player>),
  TheGreatestPowerAmongPermanentsAsSpellWasCast(Box<Permanents>),
  TheGreatestPowerOrToughnessAmongPermanents(Box<Permanents>),
  TheGreatestToughnessAmongPermanents(Box<Permanents>),
  TheHighestLifeTotalAmongPlayers(Box<Players>),
  TheHighestManaValueAmongCardsInPlayersGraveyard(Box<Cards>, Box<Player>),
  TheHighestManaValueAmongCardsInPlayersHand(Box<Cards>, Box<Player>),
  TheHighestManaValueAmongCardsInPlayersLibrary(Box<Cards>, Box<Player>),
  TheHighestManaValueAmongGraveyardCards(Box<CardsInGraveyards>),
  TheHighestManaValueAmongPermanents(Box<Permanents>),
  TheHighestManaValueAmongPermanentsOrCardsInTheCommandZone(Commanders),
  TheHighestNumberChosen,
  TheHighestNumberOfCardsInHandAmongPlayers(Box<Players>),
  TheHighestSpeedAmongPlayers(Box<Players>),
  TheLeastPowerAmongPermanents(Box<Permanents>),
  TheLeastToughnessAmongPermanents(Box<Permanents>),
  TheLifePaid,
  TheLowestNumberOfCardsInHandAmongPlayers(Box<Players>),
  TheLowestNumberOfPermanentsControlledAmongPlayers(Box<Permanents>, Box<Players>),
  TheManaValueMinusTheManaSpentOnSpell(Box<Spell>),
  TheManaValueOfCommander(Commander),
  TheManaValueOfTheCardDiscoveredThisWay,
  TheNotedNumber,
  TheNumberChosenForPermanent(Box<Permanent>),
  TheNumberChosenThisWay,
  TheNumberOfAbilitiesAmongPermanents(Vec<CheckHasable>, Box<Permanents>),
  TheNumberOfAttractionsPlayerHasVisitedThisTurn(Box<Player>),
  TheNumberOfCardTypesAmongCardsPutInGraveyardThisWay,
  TheNumberOfCardTypesAmongPermanents(Box<Permanents>),
  TheNumberOfCardTypesAmongSpellsCastThisTurn(Box<Spells>),
  TheNumberOfCardTypesAmongThePermanentsSacrificedThisTurn,
  TheNumberOfCardTypesItSharesWithAnyExiledCard(Box<CardsInExile>),
  TheNumberOfCardTypesPermanentHas(Box<Permanent>),
  TheNumberOfCardsDiscardedByPlayerThisWay(Box<Player>),
  TheNumberOfCardsInHandExiledThisWay,
  TheNumberOfCardsInHandRevealedByPlayerThisWay(Box<Player>),
  TheNumberOfCardsInHandRevealedThisWay,
  TheNumberOfCardsInHandRevealedThisWayThatShareAManaValue,
  TheNumberOfCardsInPlayersGraveyardThatWerePutThereFromTheBattlefieldThisTurn(Box<Cards>, Box<Player>),   // FIXME: Cards to CardsInGraveyard, and shouldn't need "ThatWerePutThereFromTheBattlefieldThisTurn"
  TheNumberOfCardsInPlayersHand(Box<Player>),
  TheNumberOfCardsManifestedThisWay,
  TheNumberOfCardsOfTypeInPlayersHand(Box<Cards>, Box<Player>),
  TheNumberOfCardsOfTypeRevealedFromHandThisWay(Box<Cards>),
  TheNumberOfCardsPlayerDiscardedThisWay(Box<Player>),
  TheNumberOfCardsPlayerShuffledIntoLibraryThisWay(Box<Player>),
  TheNumberOfCardsPutIntoAGraveyardThisWay(Box<CardsInGraveyards>),
  TheNumberOfCardsPutIntoHandThisWay,
  TheNumberOfCardsReturnedToTheBattlefieldThisWay,
  TheNumberOfCardsScryedOnTopOfLibraryThisWay,
  TheNumberOfCardsThatWerePutIntoAPlayersLibraryFromTheirHandOrLibraryThisTurn(Box<Players>),
  TheNumberOfCardtypesAmongCardsDiscardedThisWay,
  TheNumberOfCardtypesAmongGraveyardCards(Box<CardsInGraveyards>),
  TheNumberOfChosenColorsItIs,
  TheNumberOfChosenColorsSpellIs(Box<Spell>),
  TheNumberOfCoinsThatCameUpHeads,
  TheNumberOfColorsAmongPermanentsAndSpellsCastThisTurn(Box<Permanents>, Box<Spells>),
  TheNumberOfColorsAmongTheCardsUsedToCraftPermanent(Box<Permanent>),
  TheNumberOfColorsOfManaSpentToCastSpell(Box<Spell>),
  TheNumberOfColorsOfTheSacrificedPermanent,
  TheNumberOfColorsSpellIs(Box<Spell>),
  TheNumberOfCounterTypesAmongPermanents(Box<Permanents>),
  TheNumberOfCountersOfTypeMovedThisWay(CounterType),
  TheNumberOfCountersOfTypeOnPlane(CounterType, Box<Plane>),
  TheNumberOfCountersOfTypeOnScheme(CounterType, Box<SingleScheme>),
  TheNumberOfCountersOfTypeOnSpell(CounterType, Box<Spell>),
  TheNumberOfCountersOfTypeOnVanguard(CounterType, Box<SingleVanguard>),
  TheNumberOfCountersOfTypePlayersHavePutOnPermanentsThisTurn(CounterType, Box<Players>, Box<Permanents>),
  TheNumberOfCountersOfTypePutOnPermanentsThisTurn(CounterType, Box<Permanents>),
  TheNumberOfCountersOfTypeRemovedFromPermanentsThisTurn(CounterType, Box<Permanents>),
  TheNumberOfCountersPlayersHavePutOnPermanentsThisTurn(Box<Players>, Box<Permanents>),
  TheNumberOfCountersPutOnPermanentsThisTurn(Box<Permanents>),
  TheNumberOfCountersPutThisWay,
  TheNumberOfCountersRemovedThisWay,
  TheNumberOfCreatureTypesAmongPermanents(Box<Permanents>),
  TheNumberOfCreaturesGoadedThisWay,
  TheNumberOfCreaturesThatAttackedThisTurn(Box<Permanents>),
  TheNumberOfCreaturesThatConvokedPermanent(Box<Permanent>),
  TheNumberOfCreaturesThatDealtCombatDamageToAPlayer(Box<Permanents>, Box<Players>),
  TheNumberOfDiceResults(Box<Comparison>),
  TheNumberOfDifferentColorPairsAmongPermanents(Box<Permanents>),
  TheNumberOfDifferentDiceResults,
  TheNumberOfDifferentManaCostsAmongCardsInPlayersGraveyard(Box<Cards>, Box<Player>),
  TheNumberOfGraveyardCards(Box<CardsInGraveyards>),
  TheNumberOfLettersInNameStickersOnPermanent(Letter, Box<Permanent>),
  TheNumberOfLibraryCardsExiledThisWay,
  TheNumberOfLibraryCardsOfTypeExiledThisWay(Box<Cards>),
  TheNumberOfLibraryCardsRevealedThisWay,
  TheNumberOfManaSymbolsInManaCostOfSpell(Box<Spell>),
  TheNumberOfNameStickersOnPermanent(Box<Permanent>),
  TheNumberOfNameStickersOnPermanentThatBeginWithLetter(Box<Permanent>, Letter),
  TheNumberOfNameStickersOnPermanentWithLength(Box<Permanent>, Box<Comparison>),
  TheNumberOfOtherCardsInPlayersGraveyard(Box<CardInGraveyards>, Box<Cards>, Box<Player>),
  TheNumberOfPermanentCardsReturnedToPlayersHandThisWay(Box<Player>),
  TheNumberOfPermanentTypesAmongGraveyardCards(Box<CardsInGraveyards>),
  TheNumberOfPermanentsDealtDamageThisWay(Box<Permanents>),
  TheNumberOfPermanentsExiledThisTurn(Box<Permanents>),
  TheNumberOfPermanentsGainedControlOfThisWay,
  TheNumberOfPermanentsOfTypeSacrificedThisWay(Box<Permanents>),
  TheNumberOfPermanentsOnTheBattlefield(Box<Permanents>),
  TheNumberOfPermanentsOnTheBattlefieldAsSpellWasCast(Box<Permanents>),
  TheNumberOfPermanentsOnTheBattlefieldAtBeginningOfTurn(Box<Permanents>),
  TheNumberOfPermanentsPutIntoAPlayersGraveyardThisTurn(Box<Permanents>, Box<Players>),
  TheNumberOfPermanentsPutIntoAPlayersGraveyardThisWay(Box<Permanents>, Box<Players>),
  TheNumberOfPermanentsPutIntoPlayersGraveyardThisTurn(Box<Permanents>, Box<Player>),
  TheNumberOfPermanentsPutOntoTheBattlefieldThisWay(Box<Permanents>),
  TheNumberOfPermanentsReturnedToHandThisWay,
  TheNumberOfPermanentsSacrificedAsPermenantEnteredBattlefield(Box<Permanents>, Box<Permanent>),
  TheNumberOfPermanentsSacrificedThisTurn(Box<Permanents>),
  TheNumberOfPermanentsSacrificedThisWay,
  TheNumberOfPermanentsTappedThisWay,
  TheNumberOfPermanentsThatDiedThisWay(Box<Permanents>),
  TheNumberOfPermanentsThatHadCountersPutOnItThisWay,
  TheNumberOfPermanentsThatLeftTheBattlefieldUnderPlayersControlThisTurn(Box<Permanents>, Box<Player>),
  TheNumberOfPlayersAttackedByPlayerThisCombat(Box<Players>, Box<Player>),
  TheNumberOfPlayersThatDidntPayCost,
  TheNumberOfPlayersThatHaveLostTheGame,
  TheNumberOfPlayersThatPaidCost,
  TheNumberOfPlayersWhoTookAnActionThisWay,
  TheNumberOfRepeatedCostsNotPaid,
  TheNumberOfRepeatedCostsNotPaidByPlayer(Box<Player>),
  TheNumberOfSpellsAndAbilitiesCounteredThisWay,
  TheNumberOfSpellsCastByAnyPlayerSinceTheBeginningOfPlayersLastTurn(Box<Spells>, Box<Players>, Box<Player>),
  TheNumberOfSpellsCounteredThisWay,
  TheNumberOfSpellsOrAbilitiesThatCausedAnyNumberOfPlayersToGuessOrToGroupCardsOrPermanentsIntoAPileThisTurn(SpellsAndAbilities, Box<Players>),
  TheNumberOfSubtypesPermanentHas(Box<Permanent>),
  TheNumberOfSupertypesPermanentHas(Box<Permanent>),
  TheNumberOfTimesCreatureAttackedThisGame(Box<Permanent>),
  TheNumberOfTimesModeChosenForSpell(Box<Spell>),
  TheNumberOfTimesPermanentWasKicked(Box<Permanent>),
  TheNumberOfTimesPlayerHasDecendedThisTurn(Box<Player>),
  TheNumberOfTokensCreatedThisWay,
  TheNumberOfTurnsPlayerHasBegunSinceItWasForetold,
  TheNumberOfUniqueVowelsOnNameSticker(NameStickerFilter),
  TheNumberOfUnlockedDoorsAmongPermanents(Box<Permanents>),
  TheNumberOfVotesForWord(VoteOption),
  TheNumberOfVotesReceivedByPermanent(Box<Permanent>),
  TheNumberOfVotesReceivedByPlayer(Box<Player>),
  TheSecondDiceResult,
  TheTotalAmountOfManaPaidThisWay,
  TheTotalManaValueOfSpellsCastThisTurn(Box<Spells>),
  TheTotalManaValueOfThePermanentsThisSpellTargets,
  TheTotalNumberOfCardsDrawnByPlayesThisTurn(Box<Players>),
  TheTotalNumberOfCardsInPlayersHands(Box<Players>),
  TheTotalNumberOfColorManaSymbolsInManaCostsOfTheCardsInHandRevealedThisWay(Color),
  TheTotalNumberOfColorManaSymbolsInManaCostsOfTheLibraryCardsRevealedThisWay(Color),
  TheTotalNumberOfCountersAmongPermanents(Box<Permanents>),
  TheTotalNumberOfCountersAmongPlayers(Box<Players>),
  TheTotalNumberOfCountersOfTypeAmongCardsInExile(CounterType, Box<CardsInExile>),
  TheTotalNumberOfCountersOfTypeAmongCardsInGraveyards(CounterType, Box<CardsInGraveyards>),
  TheTotalNumberOfCountersOfTypeAmongPermanents(CounterType, Box<Permanents>),
  TheTotalNumberOfCountersOfTypeAmongPlayers(CounterType, Box<Players>),
  TheTotalNumberOfTokensPlayersCreatedThisTurn(Box<Permanents>, Box<Players>),
  TheTotalOfTheDiceResults,
  TheTotalPowerOfAllStickersOnPermanents(Box<Permanents>),
  TheTotalPowerOfPermanentsThatDiedThisTurn(Box<Permanents>),
  TheTotalPowerOfThePermanentsSacrificedThisWay,
  TheTotalToughnessOfAllStickersOnPermanents(Box<Permanents>),
  TheWinningBid,
  ThirdRoundedUp(Box<GameNumber>),
  Thrice(Box<GameNumber>),
  TotalLifeLostByPlayersThisTurn(Box<Players>),
  TotalManaValueOfCardsInPlayersGraveyard(Box<Cards>, Box<Player>),
  TotalManaValueOfEachPermanentDestroyedThisWay(Box<Permanents>),
  TotalManaValueOfExiledCards(Box<CardsInExile>),
  TotalManaValueOfGraveyardCards(Box<CardsInGraveyards>),
  TotalManaValueOfMilledCards,
  TotalManaValueOfPermanents(Box<Permanents>),
  TotalManaValueOfSpells(Box<Spells>),
  TotalManaValueOfTheCardsDiscardedThisWay,
  TotalManaValueOfTheCardsRevealedThisWay,
  TotalNoncombatDamageDealtToPlayersThisTurn(Box<Players>),
  TotalPowerOfExiledCards(Box<CardsInExile>),
  TotalPowerOfPermanents(Box<Permanents>),
  TotalPowerOfPermanentsExiledThisWay(Box<Permanents>),
  TotalToughnessOfExiledCards(Box<CardsInExile>),
  TotalToughnessOfPermanents(Box<Permanents>),
  ToughnessOfCardInHand(CardInHand),
  ToughnessOfCreatureDestroyedThisWay,
  ToughnessOfCreaturePutOnBattlefieldThisWay,
  ToughnessOfCreatureSacrificedThisWay,
  ToughnessOfDeadPermanent,
  ToughnessOfExiledCard(Box<CardInExile>),
  ToughnessOfGraveyardCard(Box<CardInGraveyards>),
  ToughnessOfPermanent(Box<Permanent>),
  ToughnessOfTheExiledCreature,
  ToughnessOfTheRevealedCard,
  ToughnessOfTheSacrificedCreature,
  ToxicValueOfPermanent(Box<Permanent>),
  TriggerTheDiceResult,
  Trigger_AmountOfCards,
  Trigger_AmountOfCreatures,
  Trigger_AmountOfDamageDealt,
  Trigger_AmountOfDamagePrevented,
  Trigger_AmountOfExcessDamage,
  Trigger_AmountOfLifeGained,
  Trigger_AmountOfLifeLost,
  Trigger_DiscoverValue,
  Trigger_ManaValueOfTheSacrificedPermanent,
  Trigger_NumberOfCreatures,
  Trigger_NumberOfPlayersBeingAttacked,
  Trigger_ThatMuch,
  Trigger_TheNumberOfCardsOfTypeMilledThisWay(Box<Cards>),
  Trigger_ValueXOfThatSpell,
  Twice(Box<GameNumber>),
  ValueX,
  WhenAPermanentEntersTheBattlefield_AmountOfManaFromAPermanentSpentToCast(Box<Permanents>),
  WhenAPermanentEntersTheBattlefield_AmountOfManaFromTreasureSpentToCast,
  WhenAPermanentEntersTheBattlefield_AmountOfManaOfTypeSpentToCast(Vec<ManaProduceSymbol>),
  WhenAPermanentEntersTheBattlefield_AmountOfManaSpentToCast,
  WhenAPermanentEntersTheBattlefield_NumberOfColorsOfManaSpentToCast,
  WhenAPlayerCastsASpell_ManaValueOfThatSpell,
  WhenAPlayerCastsASpell_ThatSpellX,
  WhenAPlayerDiscardsCardsForTheFirstTimeEachTurn_AmountOfCardsDiscarded,
  WhenAPlayerPaysLife_AmountOfLifePaid,
  WhenASpellOrAbilityExilesAnyNumberOfPermanents_AmountOfPermanents,
  WhenAnyNumberOfCreaturesDealCombatDamageToAnyNumberOfPlayers_AmountOfOpponentsDealtDamage,
  WhenAnyNumberOfPermanentEnterTheBattlefieldUnderControl_AmountOfPermanents,
  WhenPermanentsDealDamageToPlayers_NumPlayersDealtDamage,
  WouldCreateTokens_NumberTokens,
  WouldDealDamage_ThatMuchDamage,
  WouldDrawACard_ThatMany,
  WouldGainLife_LifeAmount,
  WouldLoseLife_ThatMuch,
  WouldPayLife_ThatMuch,
  WouldScry_ThatMuch,
  X_From_Casting,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Schemes", content = "args"))]
pub enum Schemes {
  SingleScheme(SingleScheme),
  IsNonSupertype(SuperType),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ColorAndCreatureType", content = "args"))]
pub enum ColorAndCreatureType {
  ColorAndCreatureType(Color, CreatureType),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PlayerOrPermanent", content = "args"))]
pub enum PlayerOrPermanent {
  Ref_AnyTarget,
  Ref_TargetPlayerOrPermanent,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Player", content = "args"))]
pub enum Player {
  SelfPlayer,
  Trigger_ThatOtherPlayer,
  ThePlayerThatAddedThisAbility,
  TheGiftedPlayer,
  APlayerWouldMillAnyNumberOfCards_ThatPlayer,
  ThePlayerWhoGuessedThisWay,
  ThePlayerChosenThisWay,
  ControllerOfPermanentTheLastTimeItWasBlockedByPermanentThisTurn(Box<Permanent>, Box<Permanent>),
  NextOpponentInTurnOrder,
  AsLoseUnspentMana_ThePlayerLosingMana,
  ControllerOfEachableDestroyedPermanent,
  OwnerOfSpell(Box<Spell>),
  ThePlayerThatChoseTheMode,
  SingleControllerOfTargetPermanents,
  WouldGainLife_ThatPlayer,
  WouldPutAPermanentOnBattlefield_ThatPlayer,
  OwnerOfTheCardReturnedToHandThisWay,
  ActionForEachPlayer_ThatPlayer,
  ActionPlayer,
  AssociatedPlayerForPermanent(Box<Permanent>),
  AttackingPlayer,
  ClashOpponent,
  Condition_ThatPlayer,
  ControllerOfAbility(Ability),
  ControllerOfDeadPermanent,
  ControllerOfDestroyedPermanent,
  ControllerOfEachableExiledPermanent,
  ControllerOfEachableRemovedPermanent,
  ControllerOfLeavingPermanent,
  ControllerOfPermanent(Box<Permanent>),
  ControllerOfSpell(Box<Spell>),
  ControllerOfSpellOrAbility(SpellOrAbility),
  ControllerOfTargetPermanent,
  ControllerOfTargetPermanent2,
  ControllerOfTargetSpell,
  ControllerOfTriggeredAbility(Ability),
  DealsDamage_ThatPlayer,
  DefendingPlayer,
  EachPlayerAction_ThatPlayer,
  EachablePlayer,
  HostController,
  HostPlayer,
  ItsController,
  LoseLifeForEach_ThatPlayer,
  LoseLife_ThatPlayer,
  MillCards_ThatPlayer,
  NearestPlayerInChosenDirection(Box<Players>),
  NumPlayers_ThatPlayer,
  OpponentToTheLeftOfYou,
  OwnerOfDeadPermanent,
  OwnerOfExiledCard(Box<CardInExile>),
  OwnerOfGraveyrdCard(Box<CardInGraveyards>),
  OwnerOfPermanent(Box<Permanent>),
  OwnerOfTargetPermanent,
  PlayerAction_ThatPlayer,
  PlayerCreatureIsAttacking(Box<Permanent>),
  PlayerInTheChosenDirectionOf(Box<Player>),
  PlayerOrControllerOfPermanent(PlayerOrPermanent),
  PlayerOrControllerOfPlaneswalkerCreatureIsAttacking(Box<Permanent>),
  PlayerToTheLeftOf(Box<Player>),
  PlayerToTheRightOf(Box<Player>),
  PlayersRevealTopCardOfLibraryAndFindHighestManaValue_SingleWinner,
  Ref_TargetPlayer,
  Ref_TargetPlayer1,
  Ref_TargetPlayer2,
  Ref_TargetPlayer3,
  Ref_TargetPlayers_0,
  Ref_TargetPlayers_1,
  RememberedPlayer,
  SingleGraveyardOwner,
  SingleTargetPlayerOfSpell(Box<Spell>),
  SpellDealsDamage_ThatPlayer,
  ThatSpellsController,
  TheActivePlayer,
  TheAttackingPlayer,
  TheChosenPlayer,
  TheFirstPlayerChosenThisWay,
  TheMonarch,
  TheOtherChosenPlayer(Box<Player>),
  ThePlayerThatChoseAction,
  ThePlayerWhoControlsTheMostPermanents(Box<Permanents>),
  ThePlayerWhoCreatedThisAbility,
  ThePlayerWhoExiledTheCardWithTheHighestManaValue,
  ThePlayerWithTheInitiative,
  ThePlayerWithTheMostCardsInHand,
  ThePlayerWithTheMostLife,
  TheSecondPlayerChosenThisWay,
  TheThirdPlayerChosenThisWay,
  Trigger_ControllerOfThatPermanent,
  Trigger_ControllerOfThatSource,
  Trigger_ControllerOfThatSpell,
  Trigger_ControllerOfThatSpellOrAbility,
  Trigger_ControllerOfThoseCreatures,
  Trigger_DefendingPlayer,
  Trigger_ThatPlayer,
  // WhenAPlayerAttacksAnotherPlayer_ThatOtherPlayer,
  WinningBidder,
  WouldDealDamage_ControllerOfDamageSource,
  WouldDealDamage_DamageRecipientPlayer,
  WouldDrawACard_ThatPlayer,
  You,
  ControllerOfLastSpellThatDealtDamageToPlayerThisTurn(Box<Spells>, Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Players", content = "args"))]
pub enum Players {
  AnyPlayer,
  And(Vec<Players>),
  Or(Vec<Players>),
  Other(Box<Player>),
  SinglePlayer(Box<Player>),

  AControllerOfTheLeastPermanentsAmongPlayers(Box<Players>, Box<Permanents>),
  AControllerOfTheMostPermanentsAmongPlayers(Box<Players>, Box<Permanents>),
  APlayerNotedByPlayerForCardDuringDraft(Box<Player>, NameString),
  AllCardsInHandAre(Box<CardsInHand>, Box<CardsInHand>),
  AttackedAPlaneswalkerThisTurn(Box<Permanents>),
  AttackedByACreatureThisTurn(Box<Permanents>),
  AttackedByCreatureThisTurn(Box<Permanent>),
  AttackedByPlayerThisCombat(Box<Player>),
  AttackedByPlayerThisTurn(Box<Player>),
  AttackedPlayerDuringTheirLastTurn(Box<Player>),
  AttackedPlayerLastTurn(Box<Player>),
  AttackedPlayerThisTurn(Box<Player>),
  AttackedThisTurn,
  AttackedWithACreatureThisTurn(Box<Permanents>),
  AttackedWithCreatureThisTurn(Box<Permanent>),
  AttackedWithCreaturesThisTurn,
  AttackedWithCreaturesWithTotalPowerThisCombat(Box<Comparison>),
  AttackedWithNumCreaturesThisTurn(Box<Comparison>, Box<Permanents>),
  CastASpellDuringTheirLastTurn(Box<Spells>),
  CastASpellFromAGraveyardThisTurn(Box<Spells>, Box<Players>),
  CastASpellFromAnywhereOtherThanTheirHandThisTurn(Box<Spells>),
  CastASpellSincePlayersLastTurnEnded(Box<Spells>, Box<Player>),
  CastASpellThisGame(Box<Spells>),
  CastASpellThisTurn(Box<Spells>),
  CastNumSpellsThisTurn(Box<Comparison>, Box<Spells>),
  ChoseAFirstPermanentThisWay,
  ChoseAPermanentThisWay,
  ChoseASecondPermanentThisWay,
  ChoseHighestNumber,
  ChoseLowestNumber,
  ChoseWord(VoteOption),
  CoinCameUpTails,
  CommitedACrimeThisTurn,
  CompletedADungeon,
  ControlledAPermanentDestroyedThisWay,
  ControlledAPermanentExiledThisWay,
  ControlledAPermanentReturnToHandThisWay,
  ControlledAPermanentShuffledIntoLibraryThisWay,
  ControlsA(Box<Permanents>),
  ControlsALandOfEachBasicLandType,
  ControlsAPermanentOfEachColor(Box<Permanents>),
  ControlsAll(Box<Permanents>),
  ControlsLessPermanentThanPlayer(Box<Player>, Box<Permanents>),
  ControlsLessPermanentsThanEachPlayer(Box<Players>, Box<Permanents>),
  ControlsMorePermanentThanPlayer(Box<Player>, Box<Permanents>),
  ControlsMorePermanentsThanEachPlayer(Box<Players>, Box<Permanents>),
  ControlsNo(Box<Permanents>),
  ControlsNum(Box<Comparison>, Box<Permanents>),
  ControlsNumBasicLandTypes(Box<Comparison>, Box<Permanents>),
  ControlsNumColorsOfPermanents(Box<Comparison>),
  ControlsNumThatShareACreatureType(Box<Comparison>, Box<Permanents>),
  ControlsNumThatShareAName(Box<Comparison>, Box<Permanents>),
  ControlsNumWithDifferentNames(Box<Comparison>, Box<Permanents>),
  ControlsNumWithDifferentPowers(Box<Comparison>, Box<Permanents>),
  ControlsPermanent(Box<Permanent>),
  CouldMulligan,
  CreatedATokenThisTurn,
  CycledANumberOfCardsThisGame(Box<Comparison>, Box<Cards>),
  CycledANumberOfCardsThisTurn(Box<Comparison>, Box<Cards>),
  DefendingPlayerThisCombat,
  Descended,
  DevotionToColorsIs(Vec<SimpleColor>, Box<Comparison>),
  DidntActivateAnAbilityThisTurn(Box<ActivatedAbilities>),
  DidntAttackPlayerThisTurn(Box<Player>),
  DidntAttackWithCreaturesThisTurn,
  DidntCastASpellThisTurn(Box<Spells>),
  DidntDiscardedACardOfTypeThisWay(Box<Cards>),
  DidntLoseLifeThisTurn,
  DidntPayCost,
  DidntPlayACardFromExileThisTurn(Box<Cards>),
  DidntPlayALandThisTurn,
  DidntReceiveAVote,
  DidntSacrificeAPermanentThisWay(Box<Permanents>),
  DidntWinTheSubgameThisWay,
  DiscardedACardOfTypeThisWay(Box<Cards>),
  DiscardedACardThisTurn,
  DiscardedACardThisWay,
  DiscardedACardWithTheHighestManaValueAmongCardsDiscardedThisWay,
  DoesntControlPermanent(Box<Permanent>),
  DoesntHaveMaxSpeed,
  DrewACardLastTurn,
  EveryCardInTheirCardPoolStartedTheGameInTheirLibraryOrTheCommandZone,
  ExceptFor(Box<Players>),
  GainedLifeAmountThisTurn(Box<Comparison>),
  GainedLifeThisTurn,
  GuessedCorrectlyForDraftCard(NameString),
  HadANumberOfCardsEnterTheirGraveyardFromAnywhereThisTurn(Box<Comparison>, Box<Cards>),
  HadANumberOfPermanentsEnterTheBattlefieldUnderTheirControlThisTurn(Box<Comparison>, Box<Permanents>),
  HadAPermanentEnterTheBattlefieldUnderTheirControlLastTurn(Box<Permanents>),
  HadAPermanentEnterTheBattlefieldUnderTheirControlThisTurn(Box<Permanents>),
  HasABoon,
  HasACardInGraveyard(Box<CardsInGraveyards>),
  HasACardInHand(Box<CardsInHand>),
  HasACounterOfType(CounterType),
  HasAFullParty,
  HasANumberOfCardsAmongCardsInGraveyardHandAndLibrary(Box<Comparison>, Box<Cards>),
  HasANumberOfCountersOfType(Box<Comparison>, CounterType),
  HasActivatedAnAbilityOfAGraveyardCardThisTurn(Box<Players>),
  HasBeenTemptedByTheRingNumberTimes(Box<Comparison>),
  HasHighestNumberOfCardsInHandAmongPlayers(Box<Players>),
  HasMaxSpeed,
  HasNoCardsOfTypeInHand(Box<Cards>),
  HasNoCardsOfTypeInLibrary(Box<Cards>),
  HasNoCountersOfType(CounterType),
  HasNotActivatedAnExhaustAbilityThisTurn,
  HasNotCompletedDungeon(NameString),
  HasTheCitysBlessing,
  HasTheInitiative,
  HasWaterEarthFireAndAirBendedThisTurn,
  HasntBeenDealtCombatDamageSinceTheirLastTurn,
  HasntCastASpellThisGame(Box<Spells>),
  HasntCastASpellThisTurn(Box<Spells>),
  HaventAddedManaWithThisAbility,
  IsAttacked,
  IsAttackedByPlayer(Box<Player>),
  IsAttackingNumberPlayers(Box<Comparison>, Box<Players>),
  IsAttackingPlayer(Box<Player>),
  IsNotAttackingAPlayer(Box<Players>),
  IsNotTheMonarch,
  IsNotTheStartingPlayer,
  IsNotTheirTurn,
  IsProtectingBattle(Box<Permanent>),
  IsTheMonarch,
  IsTheStartingPlayer,
  IsTheirMainPhase,
  IsTheirTurn,
  IsTheirUpkeep,
  IsntBeingAttacked,
  LifeTotalIs(Box<Comparison>),
  LostLifeAmountThisTurn(Box<Comparison>),
  LostLifeLastTurn,
  LostLifeThisTurn,
  NumCardTypesInGraveyardIs(Box<Comparison>),
  NumCardsDrawnThisTurnIs(Box<Comparison>),
  NumCardsInGraveyardIs(Box<Comparison>, Box<Cards>),
  NumCardsInHandAtBeginningOfTurnWas(Box<Comparison>),
  NumCardsInHandIs(Box<Comparison>),
  NumCardsInLibraryIs(Box<Comparison>),
  NumCardsOfTypeInHandIs(Box<Comparison>, Box<CardsInHand>),
  NumCardsOwnedInExileIs(Box<Comparison>, CardsInExile),
  NumCardtypesOnBattlefiendAndInGraveyardIs(Box<Comparison>),
  NumOpponentsIs(Box<Comparison>),
  NumPlayersPassFilter_ThosePlayers,
  NumSpellsCastLastTurnIs(Box<Comparison>, Box<Spells>),
  OneOfTheChosenPlayers,
  Opponent,
  OpponentOf(Box<Player>),
  OwnedAPermanentChosenThisWay,
  OwnerOfACardWithTheLowestManaValueRevealedThisWay(Box<Cards>),
  OwnersOfExiledCards(Box<CardsInExile>),
  OwnsACardInExile(Box<CardsInExile>),
  OwnsAPermanent(Box<Permanents>),
  OwnsASpell(Box<Spells>),
  OwnsAndControls(Box<Permanent>),
  OwnsAndControlsA(Box<Permanents>),
  PaidCost,
  PaidOrLostAnAmountOfEnergyThisTurn(Box<Comparison>),
  PlaneswalkedToAPlaneThisTurn(Planes),
  PlayedALandFromAnywhereOtherThanTheirHandThisTurn,
  PlayedALandThisTurn,
  PlayerDealtDamageThisWay,
  PlayerWhoTookActionThisWay,
  Poisoned,
  PossibleDefendingPlayerThisCombat,
  PutAPermanentOnBattleDuringTheirLastTurn(Box<Permanents>),
  ReceivedAVote,
  Ref_TargetPlayers,
  RolledADiceValueThisTurn(Box<Comparison>),
  RolledHighestD20Value,
  RolledNumberDiceThisTurn(Box<Comparison>),
  SacrificedAPermanentThisTurn(Box<Permanents>),
  SacrificedAPermanentThisWay(Box<Permanents>),
  SacrificedNumPermanentsThisTurn(Box<Comparison>, Box<Permanents>),
  SearchedTheirLibraryThisTurn,
  ShuffledAPermanentIntoTheirLibraryThisWay(Box<Permanents>),
  ShuffledLibraryThisWay,
  SpeedIs(Box<Comparison>),
  SpellDefendingPlayer,
  SurveilledThisTurn,
  TappedAPermanentForManaThisTurn(Box<Permanents>),
  TheChosenPlayers,
  Trigger_IsDefendingPlayer,
  Trigger_ThosePlayers,
  VisitedAnAttractionThisTurn,
  VotedForADifferentChoiceThanPlayer(Box<Player>),
  VotedForTheSameChoiceAsPlayer(Box<Player>),
  VotedForWord(VoteOption),
  WasDealtAnAmountOfCombatDamageThisTurn(Box<Comparison>),
  WasDealtAnAmountOfDamageThisTurn(Box<Comparison>),
  WasDealtCombatDamageByAPermanentThisGame(Box<Permanents>),
  WasDealtCombatDamageByAPermanentThisTurn(Box<Permanents>),
  WasDealtCombatDamageByNumPermanentsThisTurn(Box<Comparison>, Box<Permanents>),
  WasDealtCombatDamageByPermanentThisTurn(Box<Permanent>),
  WasDealtCombatDamageThisTurn,
  WasDealtDamageByNumPermantsThisTurn(Box<Comparison>, Box<Permanents>),
  WasDealtDamageByPermanentThisCombat(Box<Permanent>),
  WasDealtDamageByPermanentThisGame(Box<Permanent>),
  WasDealtDamageByPermanentThisTurn(Box<Permanent>),
  WasDealtDamageBySpellThisTurn(Box<Spells>),
  WasDealtDamageThisTurn,
  WasDealtDamageThisWay,
  WasTheMonarchAsTheTurnBegan,
  WasntAttackedByCreatureDuringPlayersLastCombat(Box<Permanent>, Box<Player>),
  YourTeam,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Spell", content = "args"))]
pub enum Spell {
  TheNthSpellCastByPlayerThisTurn(Box<GameNumber>, Box<Spells>, Box<Player>),
  Trigger_ThatSpell,
  TheSpellThatGrantedThisAbility,
  TheSpellExiledThisWay,
  ASpellWouldBeCountered_ThatSpell,
  ThatSpell,
  TheSpellCastThisWay,
  TheResolvedSpellChosenThisWay,
  Ref_TargetSpell,
  TheSpellMostRecentlyCastThisTurn,
  DecreaseSpellCost_ThatSpell,
  ThatEnteringPermanent,
  TheCopiedSpell,
  ThisSpell,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Spells", content = "args"))]
pub enum Spells {
  ExceptFor(Box<Spells>),
  And(Vec<Spells>),
  Not(Box<Spells>),
  Or(Vec<Spells>),
  Other(Box<Spell>),
  AnySpell,

  // ManaAmountOfTypeWasSpentToCastIt", Box<Comparison>, ManaProduceSymbol: "Colorless, // FIXME: ManaAmountOfTypeWasSpentToCastIt / Colorless
  // ManaAmountOfTypeWasSpentToCastIt", Box<Comparison>, ManaProduceSymbol: color }       // FIXME: ManaAmountOfTypeWasSpentToCastIt / Color
  ManaAmountOfTypeWasSpentToCastIt(Box<Comparison>, Color),

  HasColorManaSymbolInManaCost(Color),
  HasHybridManaInCost,
  PowerIsLessThanToughness,
  NotInAPlayersStartingDeck(Box<Players>),
  WasCastFromTheirGraveyard,

  SneakCostWasPaid,
  WasCastForItsWarpCost,
  WasCastUsingTeamwork,
  DoesntHaveAbility(CheckHasable),
  IsNonEnchantmentType(EnchantmentType),
  DoesntShareANameWithACardInPlayersLibrary(Box<Player>),
  HasAbility(CheckHasable),
  ManaSpentIsLessThanManaValue,
  HasAnAdventure,
  HasNoAbilities,
  HasXInManaCost,
  IsACommander,
  IsAllColors,
  IsAnOutlaw,
  IsArtifactType(ArtifactType),
  IsCardtype(CardType),
  IsCreatureTypeVariable(CreatureTypeVariable),
  IsCardtypeVariable(CardtypeVariable),
  IsColor(Color),
  IsColored,
  IsColorless,
  IsCreatureType(CreatureType),
  IsEnchantmentType(EnchantmentType),
  IsHistoric,
  IsMonocolored,
  IsMulticolored,
  IsNamed(NameFilter),
  IsNonCardtype(CardType),
  IsNonColor(Color),
  IsNonCreatureType(CreatureType),
  IsNonSupertype(SuperType),
  IsNumberColors(Box<Comparison>),
  IsParty,
  IsPermanent,
  IsPlaneswalkerType(PlaneswalkerType),
  IsSpellType(SpellType),
  IsSupertype(SuperType),
  IsYourCommander,
  ManaValueIs(Box<Comparison>),
  PowerIs(Box<Comparison>),
  SharesACardtypeWithAnExiledCard(Box<CardsInExile>),
  SharesACardtypeWithExiledCard(Box<CardInExile>),
  SharesACardtypeWithSpell(Box<Spell>),
  SharesACardtypeWithTopOfAnyPlayersLibrary(Box<Players>),
  SharesAColorWith(Color),
  SharesAColorWithACardInPlayersGraveyard(Box<Cards>, Box<Player>),
  SharesAColorWithAPermanent(Box<Permanents>),
  SharesAColorWithExiledCard(Box<CardInExile>),
  SharesAColorWithSpell(Box<Spell>),
  SharesACreatureTypeWithPermanent(Box<Permanent>),
  SharesACreatureTypeWithYourCommander,
  SharesAManaValueWithExiledCard(Box<CardInExile>),
  SharesAManaValueWithSpell(Box<Spell>),
  SharesANameWithAGraveyardCard(Box<CardsInGraveyards>),
  SharesANameOriginallyPrintedInArabianNights,
  SharesANameWithAPermanent(Box<Permanents>),
  SharesANameWithASpellCastThisTurn,
  SharesANameWithAnExiled(Box<CardsInExile>),
  SharesANameWithCardInPlayersGraveyard(Box<Cards>, Box<Player>),
  SharesANameWithExiled(Box<CardInExile>),
  SharesANameWithPermanent(Box<Permanent>),
  SharesANameWithSpell(Box<Spell>),
  SharesANameWithTheCardRevealedThisWay,
  ToughnessIs(Box<Comparison>),
  AdditionalCostWasPaid,
  AlternateCostWasPaid(ManaCost),
  AmongCardsDrawByAPlayerThisTurn(Box<Players>),
  AmongCardsDrawByPlayerThisTurn(Box<Player>),
  AnAmountOfManaFromPermanentSpentWasToCastIt(Box<Comparison>, Box<Permanents>),
  AnAmountOfManaWasSpentToCastIt(Box<Comparison>),
  CanTargetOnly(Box<Permanents>),
  CastByAPlayer(Box<Players>),
  CastByPlayer(Box<Player>),
  CastByPlayerFromHand(Box<Player>, Box<Player>),
  ControlledByAPlayer(Box<Players>),
  DoesntTargetAPermanent(Box<Permanents>),
  HasASingleTarget,
  HasPhyrexianInManaCost,
  HasXInCost,
  IntensityIs(Box<Comparison>),
  IsCard,
  IsFaceDown,
  IsModal,
  IsntTheTargetOfAnAbility(Abilities),
  ManaFromAPermanentWasSpentToCastIt(Box<Permanents>),
  ManaFromATeasureWasSpentToCastIt,
  ManaFromTeasureWasSpentToCast,
  ManaWasSpentToCastIt(Vec<ManaProduce>),
  ManaWasntSpentToCastIt(ManaProduce),
  NoColoredManaWasSpentToCastIt,
  NoManaWasSpentToCastIt,
  OwnedByAPlayer(Box<Players>),
  PlayerChoseAPermanentAsCast(Box<Player>, Box<Permanents>),
  PlayerControlledAPermanentAsCast(Box<Player>, Box<Permanents>),
  PlayerRevealedACardAsCast(Box<Player>, Box<Cards>),
  ProwlCostWasPaid,
  Ref_TargetSpells,
  SingleSpell(Box<Spell>),
  SnowManaOfSpellsColorWasSpentToCastIt,
  SurgeCostWasPaid,
  TargetsAPermanent(Box<Permanents>),
  TargetsAPlayer(Box<Players>),
  TargetsOnlyASinglePermanent(Box<Permanents>),
  TargetsOnlyASinglePermanentOrPlayer,
  TargetsOnlyASinglePlayer(Box<Players>),
  TargetsOnlyASingleTarget,
  TargetsOnlySinglePermanent(Box<Permanent>),
  TargetsPermanent(Box<Permanent>),
  TargetsPlayer(Box<Player>),
  TargetsSpell(Box<Spell>),
  TheNthSpellCastByPlayerThisTurn(Box<GameNumber>, Box<Spells>, Box<Player>),
  TheNthSpellCastThisTurn(Box<GameNumber>),
  TheSpellsCastThisWay,
  WasBargained,
  WasCastByPlayerDuringTheirMainPhase,
  WasCastFromAPlayersGraveyard(Box<Players>),
  WasCastFromAmongCardsInExile(Box<CardsInExile>),
  WasCastFromAmongCardsPutIntoTheirHandThisTurn,
  WasCastFromExile,
  WasCastFromPlayersHand(Box<Player>),
  WasCastFromTheirHand,
  WasCastFromTheirLibrary,
  WasForetold,
  WasKicked,
  WasKickedWithKicker(ManaCost),
  WasntCast,
  WasntCastFromExile,
  WasntCastFromTheirHand,
  WouldDestroyAPermanent(Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Planes", content = "args"))]
pub enum Planes {
  SinglePlane(Plane),
  IsNamed(NameFilter),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Phenomena", content = "args"))]
pub enum Phenomena {
  SinglePhenomenon(Phenomenon),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Phenomenon", content = "args"))]
pub enum Phenomenon {
  ThisPhenomenon,
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardsInExile", content = "args"))]
pub enum CardsInExile {
  And(Vec<CardsInExile>),
  Or(Vec<CardsInExile>),
  Not(Box<CardsInExile>),
  Other(Box<CardInExile>),

  SingleExiledCard(Box<CardInExile>),

  AnyCard,
  AnyExiledCard,

  InExile,

  IsFaceUp,
  IsFaceDown,

  IsWarped,
  IsForetold,
  IsSuspended,

  IsNamed(NameFilter),
  SharesANameWithThePlayedCard,
  SharesANameWithSpell(Box<Spell>),
  SharesANameWithAnExiled(Box<CardsInExile>),

  HasAbility(CheckHasable),
  DoesntHaveAbility(CheckHasable),
  HasAnAdventure,

  IsColor(Color),

  ManaValueIs(Box<Comparison>),

  IsCardtype(CardType),
  IsCreatureType(CreatureType),
  IsNonCardtype(CardType),
  IsNonEnchantmentType(EnchantmentType),
  IsPermanent,
  IsSupertype(SuperType),

  OwnedByAPlayer(Box<Players>),

  HasACounterOfType(CounterType),
  HasNoCountersOfType(CounterType),

  InTheChosenPile,
  InTheExiledPileChosenThisWay,
  InTheExiledPileNotChosenThisWay,
  TheExiledCardChosenThisWay,
  TheCardsConjuredThisWay,
  TheCardsExiledByPlayerThisWay(Box<Player>),
  TheCardsExiledThisWay,
  TheExiledCards,
  TheExiledCardsChosenThisWay,
  TheExiledPileChosenThisWay,
  TheNonSpecificCardsExiledThisWay,
  TheOtherPermanentsExiledThisWay,
  ThePilesExiledThisWay,
  TheSpecificCardsExiledThisWay,
  Trigger_ThoseExiledCards,
  WasPutIntoExileFromAPlayersGraveyardThisTurn(Box<Players>),
  UsedToCraftPermanent(Box<Permanent>),
  WasExiledByPlayer(Box<Player>),
  WasExiledByPlayerForDraftCard(Box<Player>, NameString),
  WasExiledByPlayerThisWay(Box<Player>),
  WasExiledByPlayerWithPermanent(Box<Player>, Box<Permanent>),
  WasExiledByPlayerWithPermanentThisTurn(Box<Player>, Box<Permanent>),
  WasExiledThisTurn,
  WasExiledThisWay,
  WasExiledWithAnAbility(Abilities),
  WasExiledWithDeadPermanent,
  WasExiledWithPermanent(Box<Permanent>),
  WasExiledWithPermanentsDelveAbility(Box<Permanent>),
  WasExiledWithPlane(Plane),
  WasTurnedFaceUpThisWay,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardInExile", content = "args"))]
pub enum CardInExile {
  TheLastExiledCard,
  Ref_TargetExiledCard,
  TheCardConjuredIntoExileThisWay,
  Ref_TargetExiledCard1,
  TheSecondCardExiledThisWay,
  Ref_TargetExiledCard2,
  TheExiledCardChosenThisWay,
  EachableExiled,
  TopCardOfExiledPile,
  WhenAPermanentIsExiled_ThatExiledPermanent,
  TheExiledDeadPermanent,
  TheExiledTopOfLibrary,
  TheOtherExiledCard(Box<CardsInExile>),
  ThisExiledPermanentCard,
  TheCardExiledThisWay,
  TheChosenExiledCard,
  TheExiledCard,
  TheExiledCardFoundThisWay,
  TheFirstCardExiledThisWay,
  TheSingleCardExiledThisWay,
  TheSinglePermanentExiledThisWay,
  TheSpecificCardExiledThisWay,
  ThisExiledCard,
  Trigger_ThatExiledCard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardsInHand", content = "args"))]
pub enum CardsInHand {
  And(Vec<CardsInHand>),
  Or(Vec<CardsInHand>),
  AnyCard,
  ExceptFor(Box<CardsInHand>),
  Other(CardInHand),
  SingleCardInHand(CardInHand),

  TotalPowerAndToughnessIs(Box<Comparison>),
  DoesntHaveAbility(CheckHasable),
  IsColorless,
  IsParty,
  IsSpellType(SpellType),
  IsLandType(LandType),
  IsMulticolored,
  IsColor(Color),
  IsArtifactType(ArtifactType),
  IsHistoric,
  IsSupertype(SuperType),
  SharesACreatureTypeWithPermanents(Box<Permanents>),
  HasAbility(CheckHasable),
  IsCardtype(CardType),
  IsCreatureType(CreatureType),
  IsCreatureTypeVariable(CreatureTypeVariable),
  IsEnchantmentType(EnchantmentType),
  IsNonCardtype(CardType),
  IsPermanent,
  IsNamed(NameFilter),
  ManaCostIsSubsetOfManaPaidForThisAbility,
  ManaValueIs(Box<Comparison>),
  ToughnessIs(Box<Comparison>),
  PowerIs(Box<Comparison>),
  SharesACardtypeWithSpell(Box<Spell>),
  SharesANameWithSpell(Box<Spell>),
  IsNonColor(Color),
  SharesANameWithAnotherCardInHandRevealedThisWay,
  TheCardsConjuredIntoHandThisWay,
  TheCardsConjuredThisWay,
  TheCardsDraftedThisWay,
  TheCardsInHandChosenThisWay,
  TheCardsInHandNotChosenThisWay,
  TheCardsOfTypeRevealedThisWay(Box<Cards>),
  TheCardsReturnedToHandThisWay,
  TheCardsSeekedThisWay,
  TheChosenCardsInHand,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SpellsAndAbilities", content = "args"))]
pub enum SpellsAndAbilities {
  AnySpellOrAbility,
  And(Vec<SpellsAndAbilities>),
  Or(Vec<SpellsAndAbilities>),

  Ref_TargetSpellsAndAbilities,
  ControlledByAPlayer(Box<Players>),
  HasXInCost,
  ManaFromATeasureWasSpentToCastItOrActivateIt,
  NotAnAbilityOfAPermanent(Box<Permanents>),
  HasASingleTarget,
  HasOneOrMoreTargets,
  TargetsAPermanent(Box<Permanents>),
  TargetsOnlyASinglePermanentOrPlayer,
  TargetsPermanent(Box<Permanent>),
  TargetsPlayer(Box<Player>),
  ActivatedAbility,
  LoyaltyAbility,
  TriggeredAbility,
  IsSpell(Box<Spells>),
}

// FIXME: Can I replace this with check_hasable? Most places are saying you can't activate abilities, which aren't on the stack or activated yet...}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ActivatedAbility", content = "args"))]
pub enum ActivatedAbility {
  Trigger_ThatActivatedAbility,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ActivatedAbilities", content = "args"))]
pub enum ActivatedAbilities {
  And(Vec<ActivatedAbilities>),
  Or(Vec<ActivatedAbilities>),
  AnyAbility,

  NonManaAbility,
  ManaAbility,

  TargetsAPlayer(Box<Players>),
  TargetsOnlySinglePermanent(Box<Permanent>),
  TargetsAPermanent(Box<Permanents>),
  TargetsPermanent(Box<Permanent>),

  NinjutsuAbility,
  AbilityOfACardInPlayersGraveyard(Box<Cards>, Box<Player>),
  AbilityOfASource(AbilitySources),
  FirstAbilityActivatedByPlayerThisTurn(Box<ActivatedAbilities>, Box<Player>),
  AbilityOfAPermanent(Box<Permanents>),
  AbilityOfPermanent(Box<Permanent>),
  EternalizeAbility,
  EmbalmAbility,
  DoesntHaveTapSelfInCost,
  EquipAbility,
  BoastAbility,
  OutlastAbility,
  ExhaustAbility,
  PowerUpAbility,

  HasXInCost,
  HasTapSelfInCost,

  NonLoyaltyAbility,
  LoyaltyAbility,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_AbilitySources", content = "args"))]
pub enum AbilitySources {
  And(Vec<AbilitySources>),
  Or(Vec<AbilitySources>),

  IsAnOutlaw,
  IsCreatureType(CreatureType),
  IsCreatureTypeVariable(CreatureTypeVariable),
  IsNamed(NameFilter),
  ControlledByAPlayer(Box<Players>),
  IsCardtype(CardType),
  IsColor(Color),
  IsNonColor(Color),
  IsColorless,
  IsNotACommander,
  IsSupertype(SuperType),
  IsNonCardtype(CardType),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SingleDungeon", content = "args"))]
pub enum SingleDungeon {
  OwnedByAPlayer(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Abilities", content = "args"))]
pub enum Abilities {
  Other(Ability),
  And(Vec<Abilities>),
  Or(Vec<Abilities>),
  AnyAbility,

  TargetsAPermanent(Box<Permanents>),
  TargetsOnlySinglePermanent(Box<Permanent>),
  HasASingleTarget,

  CanTargetOnly(Box<Permanents>),

  AbilityOfAnEmblem(Box<Emblem>),
  AbilityOfPermanent(Box<Permanent>),
  AbilityOfAPermanent(Box<Permanents>),
  AbilityOfASource(AbilitySources),
  AbilityOfASpell(Box<Spells>),

  IsCardtype(CardType),
  ControlledByAPlayer(Box<Players>),
  RoomAbilityOfDungeon(SingleDungeon),
  BackupAbility,
  ModularAbility,
  LoyaltyAbility,
  TriggeredAbility,
  ActivatedAbility,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Ability", content = "args"))]
pub enum Ability {
  Trigger_ThatTriggeredAbility,
  Trigger_ThatActivatedAbility,
  Ref_TargetAbility,
  ThisAbility,
  Trigger_ThatAbility,
}
#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_DamageSource", content = "args"))]
pub enum DamageSource {
  Trigger_ThatPermanent,
  ThisDamageSource,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_DamageSources", content = "args"))]
pub enum DamageSources {
  And(Vec<DamageSources>),
  Or(Vec<DamageSources>),
  Other(DamageSource),
  AnyDamageSource,

  IsCreatureTypeVariable(CreatureTypeVariable),
  ManaValueIs(Box<Comparison>),
  SharesAColorWithAColorOfManaSpendOnActivationCost,
  IsNonCreatureType(CreatureType),
  SharesAColorWithExiledCard(Box<CardInExile>),
  IsCreatureType(CreatureType),
  IsCardtype(CardType),
  IsNonCardtype(CardType),
  IsNotPermanentSource(Box<Permanent>),
  IsNamed(NameFilter),
  ControlledByAPlayer(Box<Players>),
  IsColor(Color),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Comparison", content = "args"))]
pub enum Comparison {
  TheChosenQuality,
  NotTheChosenQuality,
  AnyManaValueAmongPermanents(Box<Permanents>),
  ANumberOfCardsInAPlayersGraveyard(Box<Cards>, Box<Players>),
  AnyManaValueAmongCardsInPlayersGraveyard(Box<CardsInGraveyards>, Box<Player>),
  OneOf(Vec<i32>),
  AnyNumber,
  Even,
  Odd,
  Prime,
  LessThanOrEqualTo(Box<GameNumber>),
  GreaterThanOrEqualTo(Box<GameNumber>),
  GreaterThan(Box<GameNumber>),
  LessThan(Box<GameNumber>),
  EqualTo(Box<GameNumber>),
  NotEqualTo(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CheckHasable", content = "args"))]
pub enum CheckHasable {
  // ReplaceEvent(ReplacableEvent, Vec<Action>),
  And(Vec<CheckHasable>),

  PreventDamage(EventPreventDamage, Vec<ActionPreventDamage>),

  ThisAbility,
  OtherThanThisAbility,

  AbilityStickerAbility,
  StickerAbility,

  ActivatedAbility,
  LoyaltyAbility,
  NonManaAbility,
  HasTapSelfInCost,
  ExhaustAbility,

  AnyWarp,
  AnyAwaken,
  AnyBandsWithOthers,
  AnyBlitz,
  AnyCumulativeUpkeep,
  AnyCycling,
  AnyDisturb,
  AnyEmbalm,
  AnyEternalize,
  AnyFading,
  AnyFlashback,
  AnyForetell,
  AnyFreerunning,
  AnyHexproof,
  AnyKicker,
  AnyLandwalk,
  AnyMadness,
  AnyModular,
  AnyMorph,
  AnyMutate,
  AnyPartner,
  AnyProtection,
  AnyProtectionFromColor,
  AnyRampage,
  AnySuspend,
  AnyToxic,
  AnyUnearth,
  AnyVanishing,
  AnyWard,

  Banding,
  Cascade,
  Convoke,
  Deathtouch,
  Decayed,
  Defender,
  Devoid,
  Disguise,
  DoctorsCompanion,
  DoubleStrike,
  Fear,
  FirstStrike,
  Flanking,
  Flash,
  Flying,
  Haste,
  Horsemanship,
  Indestructible,
  Infect,
  LevelUp,
  Lifelink,
  ManaAbility,
  Menace,
  Phasing,
  Reach,
  Shadow,
  Shroud,
  Skulk,
  Soulbond,
  StartYourEngines,
  Trample,
  Vigilance,

  Enchant(Box<Permanents>),
  Landwalk(Box<Permanents>),
  ProtectionFromColor(Color),

  EachableAbility,
  TheChosenAbility,
  TriggeredAbility,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ChoosableColor", content = "args"))]
pub enum ChoosableColor {
  AnyColor,

  Other(Color),
  ColorList(Vec<Color>),

  ColorsInPlayersHand(Box<Player>),
  ColorsOfCardsInPlayersGraveyard(Box<Cards>, Box<Player>),

  ColorAmoungPermanents(Box<Permanents>),
  NotColorAmoungPermanents(Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ManaProduceSymbol", content = "args"))]
pub enum ManaProduceSymbol {
  ManaProduceW,
  ManaProduceU,
  ManaProduceB,
  ManaProduceR,
  ManaProduceG,
  ManaProduceC,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ManaProduce", content = "args"))]
pub enum ManaProduce {
  ManaProduceW,
  ManaProduceU,
  ManaProduceB,
  ManaProduceR,
  ManaProduceG,
  ManaProduceC,

  Or(Vec<ManaProduce>),
  And(Vec<ManaProduce>),

  ManaOfAChosenColor,
  EachColorAmongCardsUsedToCraftPermanent(Box<Permanent>),
  AnyManaColorChosenByPlayerDuringDraft(Box<Player>, NameString),
  LastNotedManaTypeAndAmount,
  ManaOfTheLastNotedType,
  OneManaOfEachColorInManaCostOfTheMilledCard,
  AnyOtherManaColor,
  AnyTwoDifferentManaColors,
  AnyColorManaSymbolInTheCardRevealedThisWay,
  AnyManaColorAmongCardsInAPlayersGraveyard(Box<CardsInGraveyards>, Box<Players>),
  AnyManaColorCircled,
  AnyManaColorOfPermanent(Box<Permanent>),
  TheManaLostThisWay,
  AnyManaColorOfExiledCard(Box<CardInExile>),
  AnyManaColorOfAnExiledCard(Box<CardsInExile>),
  Trigger_AnyManaTypeProduced,
  ManaCostOfPermanent(Box<Permanent>),
  AnyManaColorAmongPermanents(Box<Permanents>),
  AnyManaColorAPermanentCouldProduce(Box<Permanents>),
  AnyManaTypeAPermanentCouldProduce(Box<Permanents>),
  AnyManaTypePermanentCouldProduce(Box<Permanent>),
  EachManaColorAmongPermanents(Box<Permanents>),
  ManaOfTheChosenColor,
  AnyManaTypeTheSacrificedPermanentCouldProduce,
  AnyManaColor,
  AnyManaColorInCommanderColorIdentity,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ColorWord", content = "args"))]
pub enum ColorWord {
  TheFirstChosenColorWord,
  TheSecondChosenColorWord
}

type ColorWordVariable = ColorWord;

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_LandTypeWord", content = "args"))]
pub enum LandTypeWord {
  TheFirstChosenLandType,
  TheSecondChosenLandType
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_AbilityVariable", content = "args"))]
pub enum AbilityVariable {
  ThisAbility,
  TheChosenAbility,
  TheChosenAbilities,
}



#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_LayerEffect", content = "args"))]
pub enum LayerEffect {
  // Layer 1
  SetCopiablePT(PT),
  AddCopiableCardtype(CardType),
  AddCopiableCreatureType(CreatureType),
  AddCopiableAbility(Vec<Rule>),
  IsACopyOfPermanentSpell(Box<Spell>, CopyEffects),
  IsACopyOfPermanent(Box<Permanent>, CopyEffects),
  IsACopyOfLibraryCard(CardInLibrary, CopyEffects),
  IsACopyOfGraveyardCard(Box<CardInGraveyards>, CopyEffects),
  IsACopyOfExiledCard(CardInExile, CopyEffects),
  IsACopyOfTheRevealedCard(CopyEffects),
  IsACopyOfThatCard(CopyEffects),

  // Layer 2
  SetController(Box<Player>),

  // Layer 3
  ReplaceColorWordVariableWithNewColorWordVariable(ColorWord, ColorWord),
  ReplaceLandTypeVariableWithNewLandTypeVariable(LandTypeWord, LandTypeWord),
  ReplaceCreatureTypeVariableWithNewCreatureType(CreatureTypeVariable, CreatureTypeWord),
  SetName(NameString),

  // Layer 4
  AddCardtype(CardType),
  RemoveCardtype(CardType),
  HasAllCreatureTypes,

  AddCreatureTypeVariable(CreatureTypeVariable),
  AddLandTypeVariable(LandTypeVariable),
  SetCreatureTypeVariable(CreatureTypeVariable),
  SetLandTypeVariable(LandTypeVariable),

  AddCreatureType(CreatureType),
  AddArtifactType(ArtifactType),
  AddEnchantmentType(EnchantmentType),
  AddLandType(LandType),
  AddSupertype(SuperType),
  RemoveSupertype(SuperType),
  SetArtifactType(ArtifactType),
  SetCardtype(CardType),
  SetCardtypes(Vec<CardType>),
  SetCreatureType(CreatureType),
  SetCreatureTypes(Vec<CreatureType>),
  SetLandType(LandType),
  RemoveArtifactType(ArtifactType),
  RemoveAllCreatureTypes,
  RemoveAllLandTypes,
  RemoveCreatureType(CreatureType),

  // Layer 5
  AddColor(SettableColor),
  SetColor(SettableColor),

  // Layer 6
  AddAbility(Vec<Rule>),
  AddAbilityVariable(AbilityVariable),
  AddAbility_ActivatedWithModifiers(Box<Cost>, Box<Actions>, ActivateModifier),
  AddActivatedAbilitiesAndMaySpendColorManaAsThoughAnyColorToActivate(Box<ActivatedAbilities>, Color),
  AddAbilityFromGraveyardCardHasable(Box<CardInGraveyards>, Vec<CheckHasable>),
  AddAbilityFromCardsInHandHasable(Box<CardsInHand>, Vec<CheckHasable>),
  AddAbilityAndLoseAllOtherAbilities(Vec<Rule>),
  AddAbilityIfItDoesntHaveIt(Vec<Rule>),
  AddAbilityFromCardsInPlayersGraveyardHasable(Box<Cards>, Box<Player>, Vec<CheckHasable>),
  AddAbilityFromPermanentHasable(Box<Permanent>, Vec<CheckHasable>),
  AddAbilityFromEachPermanentHasable(Box<Permanents>, Vec<CheckHasable>),
  LosesAbility(CheckHasable),
  LosesAllAbilities,

  // Layer 7
  SetPower(Box<GameNumber>),
  SetToughness(Box<GameNumber>),
  AdjustPTXY(ModX, ModY, Box<GameNumber>, Box<GameNumber>),
  SetPowerAndToughnessBoth(Box<GameNumber>),
  SwitchPT,
  SetPT(PT),
  #[serde(rename = "AdjustPT_TheChosenPTMod")]
  AdjustPTTheChosenPTMod,
  AdjustPT(i32, i32),
  AdjustPTX(ModX, ModX, Box<GameNumber>),
  AdjustPTForEach(i32, i32, Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PTXValue", content = "args"))]
pub enum PTXValue {
  Integer(i32),
  X,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PT", content = "args"))]
pub enum PT {
  PT(i32, i32),
  PTX(PTXValue, PTXValue, Box<GameNumber>),
  ManualPT(Box<GameNumber>, Box<GameNumber>),
}



#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ModX", content = "args"))]
pub enum ModX {
  Integer(i32),
  PlusX,
  MinusX,
  Zero,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ModY", content = "args"))]
pub enum ModY {
  PlusY,
  MinusY,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PTMod", content = "args"))]
pub enum PTMod {
  PTMod(i32, i32),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Commanders", content = "args"))]
pub enum Commanders {
  IsCardtype(CardType),
  ManaValueIs(Box<Comparison>),
  And(Vec<Commanders>),
  OwnedByAPlayer(Box<Players>),
  IsYourCommander,
  IsACommander,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardInGraveyards", content = "args"))]
pub enum CardInGraveyards {
  TheGraveyardCardChosenThisWay,
  TheChosenGraveyardCard,
  TheCardMilledThisWay,
  TheSacrificedPermanent,
  EnchantedGraveyardCard,
  TheCardConjuredIntoGraveyardThisWay,
  TopCardOfPlayersGraveyard(Box<Player>),
  Ref_TargetGraveyardCardInPlayersGraveyard(Box<Player>),
  ThisSacrificedPermanent,
  TheCardPutIntoGraveyardThisWay,
  TheLastGraveyardCardChosenThisWay,
  ThePermanentSacrificedThisWay,
  Trigger_ThatSacrificedPermanent,
  TopCardOfTypeOfPlayersGraveyard(Box<Cards>, Box<Player>),
  Trigger_ThatGraveyardCard,
  TheCardDiscardedThisWay,
  Ref_TargetGraveyardCard,
  Ref_TargetGraveyardCard1,
  Ref_TargetGraveyardCard2,
  Ref_TargetGraveyardCard3,
  Ref_TargetGraveyardCard4,
  Ref_TargetGraveyardCard5,
  ThisGraveyardCard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardsInGraveyards", content = "args"))]
pub enum CardsInGraveyards {
  AnyCardInAnyGraveyard,

  And(Vec<CardsInGraveyards>),
  Not(Box<CardsInGraveyards>),
  Or(Vec<CardsInGraveyards>),

  IsNonSpellType(SpellType),
  IsNumberColors(Box<Comparison>),
  SharesANameWithGraveyardCard(Box<CardInGraveyards>),

  Other(Box<CardInGraveyards>),
  SingleGraveyardCard(Box<CardInGraveyards>),

  DoesntHaveAbility(CheckHasable),
  Ref_TargetGraveyardCards1,
  Ref_TargetGraveyardCards2,

  TheCardsSurveiledThisWay,
  InTheGraveyardPileChosenThisWay,
  TheDiscardedCardsChosenThisWay,
  ThePermanentsSacrificedThisWay,
  TheCardsPutIntoAGraveyardThisWay,
  DiedThisTurn(Box<Permanents>),
  TheGraveyardCardsNotChosenThisWay,
  GraveyardCardWithMostVotesOrTiedForMostVotes,
  TheChosenGraveyardCards,
  InTheGraveyardPileNotChosenThisWay,

  TheGraveyardCardsChosenThisWay,
  WasPutIntoGraveyardFromAnywhereOtherThanTheBattlefieldThisTurn,

  CanEnchantAPermanent(Box<Permanents>),
  DoesntSharesACardtypeWithSpell(Box<Spell>),
  HasASticker,
  HasAbility(CheckHasable),
  HasAnAdventure,
  HasAnArtSticker,
  HasNoAbilities,
  InAPlayersGraveyard(Box<Players>),
  IsAnOutlaw,
  IsArtifactType(ArtifactType),
  IsCardtype(CardType),
  IsColor(Color),
  IsColorless,
  IsCreatureType(CreatureType),
  IsCreatureTypeVariable(CreatureTypeVariable),
  IsEnchantmentType(EnchantmentType),
  IsHistoric,
  IsLandType(LandType),
  IsMonocolored,
  IsMulticolored,
  IsNamed(NameFilter),
  IsNonCardtype(CardType),
  IsNonCreatureType(CreatureType),
  IsNonEnchantmentType(EnchantmentType),
  IsNonSupertype(SuperType),
  IsNotNamed(NameFilter),
  IsPermanent,
  IsPlaneswalkerType(PlaneswalkerType),
  IsSpellType(SpellType),
  IsSupertype(SuperType),
  ManaValueIs(Box<Comparison>),
  Ref_TargetGraveyardCards,
  SharesANameWithSpell(Box<Spell>),
  PowerIs(Box<Comparison>),
  ToughnessIs(Box<Comparison>),
  TheTopNumberCardsOfTypeInPlayersGraveyard(Box<GameNumber>, Box<Cards>, Box<Player>),
  CardsOfTypeMilledThisWay(Box<Cards>),
  WasPutIntoGraveyardByPlayerThisWay(Box<Player>),
  WasntPutIntoGraveyardThisWay,
  WasPutIntoGraveyardThisWay,
  Trigger_ThoseGraveyardCards,
  WasAttachedToDeadPermanent,
  WasDiscardedIntoGraveyardThisTurn,
  WasMilledIntoGraveyardThisTurn,
  WasPutIntoGraveyardFromAnywhereThisTurn,
  WasPutIntoGraveyardFromLibraryThisTurn,
  WasPutIntoGraveyardFromTheBattlefieldThisTurn,
  WasSurveilledThisTurn,
  WasntPutIntoGraveyardThisCombat,
}



#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_TokenColorList", content = "args"))]
pub enum TokenColorList {
  AllColors,
  TheChosenColor,
  Colors(Vec<SimpleColor>),
  Colorless,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_TokenSubtypes", content = "args"))]
pub enum TokenSubtypes {
  SubtypesList(Vec<SubType>),
  TheChosenCreatureType,
  AllBasicLandTypes,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CostPlayerAction", content = "args"))]
pub enum CostPlayerAction {
  GainControlOfPermanentUntil(Box<Permanent>, Expiration),
  CreateTokens(Vec<CreatableToken>),
  GainControlOfPermanent(Box<Permanent>),
  DrawACard,
  LoseLife(Box<GameNumber>),
  DrawNumberCards(Box<GameNumber>),
  PutExiledCardIntoOwnersHand(Box<CardInExile>),
  PutGraveyardCardIntoHand(Box<CardInGraveyards>),
  ActivateAManaAbilityOfEachPermanentAndLoseUnspentMana(Box<Permanents>),
  PutTopOfLibraryInGraveyard,
  GainLife(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_AttackAssignment", content = "args"))]
pub enum AttackAssignment {
  ThePlayerOrPlaneswalkerChosenThisWay,
  Player(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SingleScheme", content = "args"))]
pub enum SingleScheme {
  ThisScheme,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SingleVanguard", content = "args"))]
pub enum SingleVanguard {
  ThisVanguard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Plane", content = "args"))]
pub enum Plane {
  ThisPlane,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PlayersAndPermanents", content = "args"))]
pub enum PlayersAndPermanents {
  APlayerOrAPermanent(Box<Players>, Box<Permanents>),
  Ref_AnyTargets,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureTrigger", content = "args"))]
pub enum FutureTrigger {
  WhenAPlayerNextAttacksThisTurn(Box<Players>),
  WhenPlayerNextActivatesAnAbilityThisTurn(Box<Player>, Box<ActivatedAbilities>),
  AtTheBeginningOfTheNextUpkeep,
  AtTheBeginningOfPlayersNextDeclareAttackersStep(Box<Player>),
  WhenPermanentWinsAFightAgainstPermanent(Box<Permanent>, Box<Permanent>),

  Or(Vec<FutureTrigger>),
  WhenAPlayerPlaneswalks(Box<Players>),
  WhenPlayerNextActivatesAnAbilityBySpendingAnAmountOfMana(Box<Player>, Box<ActivatedAbilities>, Box<Comparison>),
  WhenAPlayerNextActivatesAnAbilityThisTurn(Box<Players>, Box<ActivatedAbilities>),
  AtTheBeginningOfPlayersDeclareAttackersStepOnTheirNextTurn(Box<Player>),
  AtTheBeginningOfPlayersNextDrawStep(Box<Player>),
  AtTheBeginningOfPlayersNextMainPhase(Box<Player>),
  AtTheBeginningOfPlayersNextFirstMainPhase(Box<Player>),
  AtTheBeginningOfPlayersFirstMainPhaseOfTheGame(Box<Player>),
  AtNextEndOfCombatThisTurn,
  AtTheEndOfThisCombat,
  AtTheNextEndOfCombat,
  AtTheBeginningOfTheEndStepOfTheExtraTurnCreatedThisWay,
  AtTheBeginningOfPlayersEndStepNextTurn(Box<Player>),
  AtTheBeginningOfPlayersFirstUpkeep(Box<Player>),
  AtTheBeginningOfPlayersNextEndStep(Box<Player>),
  AtTheBeginningOfPlayersNextUpkeep(Box<Player>),
  AtTheBeginningOfTheFirstUpkeep,
  AtTheBeginningOfTheNextCleanupStep,
  AtTheBeginningOfTheNextCombatPhaseThisTurn,
  AtTheBeginningOfTheNextCombat,
  AtTheBeginningOfTheNextEndStep,
  AtTheBeginningOfTheNextMainPhaseThisTurn,
  AtTheBeginningOfTheNextTurnsUpkeep,
  WhenPlayerCastsTheirNextSpellOrActivatesTheirNextAbilityThisTurn(Box<Player>, SpellsAndAbilities),
  WhenPlayerCastsTheirNextSpellThisGame(Box<Player>, Box<Spells>),
  WhenPlayerCastsTheirNextSpellThisTurn(Box<Player>, Box<Spells>),
  WhenPlayerCastsTheirNextSpellFromTheirHandThisTurn(Box<Player>, Box<Spells>),
  WhenAPermanentDies(Box<Permanents>),
  WhenPermanentDies(Box<Permanent>),
  WhenPermanentBecomesUntapped(Box<Permanent>),
  WhenPermanentLeavesTheBattlefield(Box<Permanent>),
  WhenAPermanentLeavesTheBattlefield(Box<Permanents>),
  WhenPermanentIsPutIntoAPlayersGraveyard(Box<Permanent>, Box<Players>),
  WhenPlayerLosesControlOfPermanent(Box<Player>, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_DamageRecipients", content = "args"))]
pub enum DamageRecipients {
  EachPermanent(Box<Permanents>),
  EachPlayer(Box<Players>),
  Permanent(Box<Permanent>),

  Ref_AnyTarget,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_MultipleDamageRecipients", content = "args"))]
pub enum MultipleDamageRecipients {
  MultipleRecipients(Vec<DamageRecipients>),
  EachPermanent(Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_DamageRecipientsList", content = "args"))]
pub enum DamageRecipientsList {
  APermanent(Box<Permanents>),
  APlayer(Box<Players>),
  APlayerOrAPermanent(Box<Players>, Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SingleDamageRecipient", content = "args"))]
pub enum SingleDamageRecipient {
  Player(Box<Player>),
  DistributedAnyTarget,
  Ref_AnyTargets_1,
  Ref_AnyTargets_2,
  Ref_AnyTarget,
  Ref_TargetPlayerOrPermanent,
  Permanent(Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SingleDamageSource", content = "args"))]
pub enum SingleDamageSource {
  TheChosenDamageSource,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_LookAtTopOfLibraryCost", content = "args"))]
pub enum LookAtTopOfLibraryCost {
  And(Vec<LookAtTopOfLibraryCost>),

  PayLife(Box<GameNumber>),
  SacrificePermanent(Box<Permanent>),
  SacrificeAPermanent(Box<Permanents>),
  PayMana(ManaCost),
  PutTheRemainingCardsOnTheBottomOfLibraryInAnyOrder,
  PutACardOfTypeOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  RevealACardOfType(Box<Cards>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PerpetualEffect", content = "args"))]
pub enum PerpetualEffect {
  AddAbilityFromPermanentHasable(Box<Permanent>, Vec<CheckHasable>),
  AddSupertype(SuperType),
  SetColor(SettableColor),
  SetManaCost(CardManaCost),

  Incorporate(ManaCost),
  SetCreatureTypes(Vec<CreatureType>),
  AddColor(SettableColor),

  AddAbility(Vec<Rule>),
  AddAbilityVariable(AbilityVariable),
  AddAbilityFromCardsHasable(Vec<CheckHasable>),

  AddArtifactType(ArtifactType),
  AddCardtype(CardType),
  AddCreatureType(CreatureType),
  AddLandType(LandType),
  AdjustPT(i32, i32),
  AdjustPTX(ModX, ModX, Box<GameNumber>),
  DoubleCreaturesPowerAndToughness,
  LosesAbility(CheckHasable),
  LosesAllAbilities,
  SetCardtype(CardType),
  SetCreatureType(CreatureType),
  SetPT(PT),
  SetPower(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_LookAtTopOfLibraryAction", content = "args"))]
pub enum LookAtTopOfLibraryAction {
  TransformPermanent(Box<Permanent>),
  PutRemainingSetAsideCardsIntoHand,
  PutSetAsideCardsOfTypeOntoBattlefield(Box<Cards>, Vec<EnterFlag>),
  MayPutUptoNumberGroupCardsOntoTheBattlefield(Box<GameNumber>, Box<Cards>, GroupFilter, Vec<EnterFlag>),
  MayRevealUptoNumberCardsOfTypeAndSetAside(Box<GameNumber>, Box<Cards>),
  ExileNumberGenericCardsFaceDown(Box<GameNumber>),
  PutAnyNumberOfCardsOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  MayAction(Box<LookAtTopOfLibraryAction>),
  PutTheRemainingCardsOnTopOfLibraryInAnyOrder,
  ShuffleAndPutTheRemainingCardsOnTopOfLibraryInAnyOrder,
  ConjureADuplicateOfCardOntoTheBattlefield(SingleCard, Vec<EnterFlag>),
  RevealACardOfType(Box<Cards>),
  PutFoundCardOntoBattlefield(Vec<EnterFlag>),
  MayRevealAndPutACardOfTypeOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  MayPutFoundCardOntoBattlefield(Vec<EnterFlag>),
  ExileAGenericCard,
  PutFoundCardIntoHand,
  ExileTheRemainingCardsFaceDown,
  CloakNumberGenericCards(Box<GameNumber>),
  CreateExiledCardEffect(CardInExile, Vec<ExiledCardEffect>),
  PutRemainingCardsInHand,
  ExileAnyNumberOfGenericCardsInAFaceDownPile,
  ExileTheRemainingCardsInAFaceUpPile,
  PutUptoNumberGenericCardsOnTopOfLibraryInAnyOrder(Box<GameNumber>),
  MayPutAnyNumberOfGroupCardsOntoTheBattlefield(Box<Cards>, GroupFilter, Vec<EnterFlag>),
  APlayerChoosesAPileTopPutIntoHand(Box<Players>),
  ExileAGenericCardWithACounter(CounterType),
  MayExileUptoNumberCardsOfType(Box<GameNumber>, Box<Cards>),
  PutAGenericCardAndAllCardsWithTheSameNameIntoHand,
  LoseLifeForEach(Box<GameNumber>, Box<GameNumber>),
  ExileAGenericCardFaceDown,
  ExileAnyNumberOfGenericCards,
  ExileTheRemainingCards,
  ManifestAGenericCard,
  MayExileACardOfType(Box<Cards>),
  MayExileAGenericCard,
  MayExileAnyNumberOfGenericCards,
  MayPutACardOfTypeOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  MayPutAGenericCardIntoHand,
  MayPutAnyNumberOfCardsOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  MayRevealACardOfTypeAndPutIntoHand(Box<Cards>),
  MayRevealACardOfTypeAndPutOnTopOfLibrary(Box<Cards>),
  MayRevealAnyNumberOfCardOfTypeAndPutOnTopOfLibrary(Box<Cards>),
  MayRevealAnyNumberOfCardsOfTypeAndPutOnTopOfLibraryInAnyOrder(Box<Cards>),
  MayRevealAnyNumberOfCardsOfTypeAndPutThemIntoHand(Box<Cards>),
  PutAGenericCardIntoGraveyard,
  PutAGenericCardIntoHand,
  PutAGenericCardOnBottomOfLibrary,
  PutAGenericCardOnTopOfLibrary,
  PutAnyNumberOfGenericCardsIntoHand,
  PutAnyNumberOfGenericCardsOnBottomOfLibraryAnyOrder,
  PutNumberGenericCardsIntoHand(Box<GameNumber>),
  PutRemainingCardsOnTheTopOrBottomOfLibraryInAnyOrder,
  PutTheRemainingCardsBackIntoLibraryAndShuffle,
  PutTheRemainingCardsIntoGraveyard,
  PutTheRemainingCardsIntoHand,
  PutTheRemainingCardsOnTheBottomOfLibraryInARandomOrder,
  PutTheRemainingCardsOnTheBottomOfLibraryInAnyOrder,
  MayRevealUptoNumberCardsOfTypeAndPutIntoHand(Box<GameNumber>, Box<Cards>),
  SeparateIntoFaceUpFileAndFaceDownPile,
  PlayerChoosesPileTopPutIntoHand(Box<Player>),
  LeaveRemainingCardsOnTopOfLibraryInSameOrder,
  SeparateIntoTwoFaceDownPiles,
  PlayerExilesAPile(Box<Player>),
  PlayerLooksAtRemainingCardsAndPutsAGenericCardIntoHand(Box<Player>),
  MayRevealMultipleCardsOfTypeAndPutIntoHand(Vec<Cards>),
  CreatePermanentLayerEffectUntil(Box<Permanent>, Vec<LayerEffect>, Expiration),
  If(Condition, Vec<LookAtTopOfLibraryAction>),
  Unless(Condition, Vec<LookAtTopOfLibraryAction>),
  MayActions(Vec<LookAtTopOfLibraryAction>),
  IfElse(Condition, Vec<LookAtTopOfLibraryAction>, Vec<LookAtTopOfLibraryAction>),
  AttachPermanentToAPermanent(Box<Permanent>, Box<Permanents>),
  RepeatableActions(Vec<LookAtTopOfLibraryAction>),
  MayCost(LookAtTopOfLibraryCost),
  LookAtTheNextNumberCardsOnTopOfLibrary(Box<GameNumber>),
  RepeatThisProcess,
  PutUptoNumberGenericCardsIntoHand(Box<GameNumber>),
  MayCastASpellFromAmongThemWithoutPaying(Box<Spells>),
  ForEachCardPutIntoGraveyardUnlessCost(LookAtTopOfLibraryCost),
  ExileNumberGenericCardsAtRandom(Box<GameNumber>),
  CreatePerpetualPermanentEffect(Box<Permanent>, Vec<PerpetualEffect>),
  MayPutUptoNumberCardsOntoTheBattlefield(Box<GameNumber>, Box<Cards>, Vec<EnterFlag>),
  GainLife(Box<GameNumber>),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ResolveAction", content = "args"))]
pub enum ResolveAction {
  ExileResolvingSpell,
  ExileResolvingSpellAndPlotIt,
  ExileResolvingSpellWithNumberCountersOfTypeAndEffects(Box<GameNumber>, CounterType, Vec<ExiledCardEffect>),
  CreateFutureTrigger(FutureTrigger, Box<Actions>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ManaUseModifier", content = "args"))]
pub enum ManaUseModifier {
  // ManaBonus
  CreatePermanentSpellLayerEffect(Expiration, Box<Spells>, Vec<LayerEffect>),
  FlagSpellsCastWith(Box<Spells>, Vec<SpellEffect>),
  DontLoseAsStepsAndPhasesEnd(Box<Expiration>),
  TriggerSpentOnSpell(Box<Spells>, Box<Actions>),
  TriggerSpentOnSpellOrAbility(SpellsAndAbilities, Box<Actions>),
  FlagPermanentsCastWith(Box<Permanents>, Vec<EnterFlag>),

  // Mana Restrictions
  CanOnlySpendToActivatePowerUpAbilities,
  CanOnlySpendOnCumulativeUpkeepCosts,
  CanOnlySpendOnMorphCosts,
  CanOnlySpendOnSpells(Box<Spells>),
  CanOnlySpendOnXCost,
  CanOnlySpendToActivateAbilities,
  CanOnlySpendToActivateAbilitiesOfPermanents(Box<Permanents>),
  CanOnlySpendToActivateAbilitiesOfSources(AbilitySources),
  CanOnlySpendToActivateEquipAbilities,
  CanOnlySpendToCastExiledCard(Box<CardInExile>),
  CanOnlySpendToCastForetoldSpells,
  CanOnlySpendToCastGraveyardSpells(Box<Spells>),
  CanOnlySpendToCastSpellsFromAPlayersGraveyard(Box<Spells>, Box<Players>),
  CanOnlySpendToCastSpellsFromAnywhereOtherThanPlayersHand(Box<Spells>, Box<Players>),
  CanOnlySpendToCastSpellsFromExile(Box<Spells>),
  CanOnlySpendToCastTheirCommander,
  CanOnlySpendToForetellCards,
  CanOnlySpendToGainAClassLevel,
  CanOnlySpendToPayACostThatContainsManaSymbol(ManaSymbol),
  CanOnlySpendToPayDisturbCosts,
  CanOnlySpendToTurnACreatureFaceUp,
  CanOnlySpendToTurnAManifestedCreatureFaceUp,
  CanOnlySpendToTurnAPermanentFaceUp,
  CanOnlySpendToUnlockDoors,
  CantSpendOnGenericCosts,
  CantSpendOnSpells(Box<Spells>),

  And(Vec<ManaUseModifier>),
  Or(Vec<ManaUseModifier>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PermanentsAndGraveyardCards", content = "args"))]
pub enum PermanentsAndGraveyardCards {
  IsCardtype(CardType),
  Ref_TargetPermanentsAndGraveyardCards,
  WasntSacrificed,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PermanentOrExiledCard", content = "args"))]
pub enum PermanentOrExiledCard {
  Ref_TargetPermanentOrExiledCard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PhasedOutEffect", content = "args"))]
pub enum PhasedOutEffect {
  TapAsPhasesIn,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_GroupExiledEffect", content = "args"))]
pub enum GroupExiledEffect {
  OneMayBePlayedBy(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SpellOrPermanent", content = "args"))]
pub enum SpellOrPermanent {
  Ref_TargetSpellOrPermanent,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SpellOrAbility", content = "args"))]
pub enum SpellOrAbility {
  Trigger_ThatSpellOrAbility,
  Ref_TargetSpellOrAbility,
  EachableSpellOrAbility,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardsInLibrary", content = "args"))]
pub enum CardsInLibrary {
  CanEnchantPermanent(Box<Permanent>),
  CanEnchantThatEnteringPermanent,
  DoesntShareALandTypeWithAPermanent(Box<Permanents>),
  DoesntShareANameWithAPermanent(Box<Permanents>),
  IsColor(Color),
  ManaCostIs(ManaCost),
  SharesAColorWithPermanent(Box<Permanent>),
  SharesACreatureTypeWithPermanent(Box<Permanent>),
  SharesANameWithAGraveyardCard(Box<CardsInGraveyards>),
  SharesTotalPowerAndToughnessWithPermanent(Box<Permanent>),

  IsNumberColors(Box<Comparison>),
  IsNonCreatureType(CreatureType),
  HasBasicLandType,
  HasNoAbilities,
  IsColored,
  IsColorless,
  Not(Box<CardsInLibrary>),
  PowerIs(Box<Comparison>),
  ToughnessIs(Box<Comparison>),
  And(Vec<CardsInLibrary>),
  AnyCardInLibrary,
  HasAbility(CheckHasable),
  IsArtifactType(ArtifactType),
  IsCardtype(CardType),
  IsCreatureType(CreatureType),
  IsEnchantmentType(EnchantmentType),
  IsLandType(LandType),
  IsMonocolored,
  IsMulticolored,
  IsNamed(NameFilter),
  IsNonCardtype(CardType),
  IsNonSupertype(SuperType),
  IsNotNamed(NameFilter),
  IsPermanent,
  IsSpellType(SpellType),
  IsSupertype(SuperType),
  ManaValueIs(Box<Comparison>),
  Or(Vec<CardsInLibrary>),
  SharesACardtypeWithTheCycledCard,
  SharesAColorWithAPermanent(Box<Permanents>),
  SharesANameWithAPermanent(Box<Permanents>),
  SharesANameWithAnExiled(Box<CardsInExile>),
  SharesANameWithDeadPermanent,
  SharesANameWithExiled(Box<CardInExile>),
  SharesANameWithPermanent(Box<Permanent>),
  SharesANameWithSpell(Box<Spell>),
  SharesANameWithTheCardChosenThisWay,
  SharesANameWithTheCardRevealedThisWay,
  TheCardsConjuredInLibraryThisWay,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardInLibrary", content = "args"))]
pub enum CardInLibrary {
  TheLibraryCardFoundThisWay,
  TheCardConjureIntoLibraryThisWay,
  TheTopCardOfTypeInPlayersLibrary(Box<Cards>, Box<Player>),
  ARandomCardOfTypeFromPlayersLibrary(Box<Cards>, Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FutureSpell", content = "args"))]
pub enum FutureSpell {
  TheNextSpellPlayerCasts(Box<Spells>, Box<Player>),
  TheNextSpellPlayerCastsThisTurn(Box<Spells>, Box<Player>),
  TheNextSpellPlayerCastsFromTheirHandThisTurn(Box<Spells>, Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ChoosableCreatureType", content = "args"))]
pub enum ChoosableCreatureType {
  AnyCreatureType,
  CreatureTypesOfSpell(Box<Spell>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Level", content = "args"))]
pub enum Level {
  Level(GameRange, PT, Vec<Rule>),
  LevelNoRules(GameRange, PT),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_GameRange", content = "args"))]
pub enum GameRange {
  BetweenValues(i32, i32),
  ValueOrBigger(i32),
  ValueOrSmaller(i32),
  ExactValue(i32),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ValueAction", content = "args"))]
pub enum ValueAction {
  ValueAction(GameRange, Vec<Action>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_NamedAction", content = "args"))]
pub enum NamedAction {
  NamedAction(VoteOption, Vec<Action>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_FuturePlayerEffect", content = "args"))]
pub enum FuturePlayerEffect {
  CanCastOnlyOneMoreSpellThisTurn,
  MayCastTheirNextSpellThisTurnWithoutPaying(Box<Spells>),
  MayCastTheirNextSpellThisTurnAsThoughItHadFlashWithEffects(Box<Spells>, Vec<SpellEffect>),
  MayCastTheirNextSpellThisTurnAsThoughItHadFlash(Box<Spells>),
  NextCardPlayedThisCanCanBePlayedAsThoughItHadFlash(Box<Cards>),
  MayCastTheirNextSpellThisTurnForAlternateCost(Box<Spells>, Box<Cost>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SpellOrPermanentEffect", content = "args"))]
pub enum SpellOrPermanentEffect {
  SetColor(SettableColor),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_RevealTheTopNumberCardsOfLibraryCost", content = "args"))]
pub enum RevealTheTopNumberCardsOfLibraryCost {
  PayLife(Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_RevealTheTopNumberCardsOfLibraryAction", content = "args"))]
pub enum RevealTheTopNumberCardsOfLibraryAction {
  PlayerAction(Box<Player>, Box<RevealTheTopNumberCardsOfLibraryAction>),
  PutAGenericCardOnBottomOfLibrary,
  PutRemainingCardsInHand,

  ForEachColorAmongPermanentsYouMayExileACardOfThatColorFoundThisWay(Box<Permanents>),
  PutAnyNumberOfFoundCardsOntoBattlefield(Vec<EnterFlag>),
  ChooseAPlayer(Box<Players>),
  ReflexiveTrigger(Box<Actions>),
  APlayerChoosesACardOfType(Box<Players>, Box<Cards>),
  MayPutAnyNumberOfGroupCardsIntoHand(Box<Cards>, GroupFilter),
  MayExileACardOfEachCardType,
  PutEachCardOfTypeIntoGraveyard(Box<Cards>),
  CreateExiledCardEffect(CardInExile, Vec<ExiledCardEffect>),
  ExileTheCardFoundThisWayWithNumberCountersOfType(Box<GameNumber>, CounterType),
  SacrificePermanent(Box<Permanent>),
  SpellDealsDamage(Box<Spell>, Box<GameNumber>, Box<DamageRecipient>),
  APlayerChoosesMultipleCardsOfType(Box<Players>, Vec<Cards>),
  PutACardFoundThisWayOntoTheBattlefield(Vec<EnterFlag>),
  APlayerChoosesAGenericCard(Box<Players>),
  APlayerChoosesAPile(Box<Players>),
  APlayerChoosesFinalDestination(Box<Players>, Box<RevealTheTopNumberCardsOfLibraryAction>, Box<RevealTheTopNumberCardsOfLibraryAction>),
  APlayerExilesACardOfType(Box<Players>, Box<Cards>),
  APlayerMayCastASpellFromAmongThemWithoutPaying(Box<Players>, Box<Spells>),
  APlayerMayCastUptoNumberSpellsFromAmongThemWithoutPaying(Box<Players>, Box<GameNumber>, Box<Spells>),
  APlayerMayPutACardOfTypeOntoTheBattlefield(Box<Players>, Box<Cards>, Vec<EnterFlag>),
  APlayerPutsAGenericCardIntoGraveyard(Box<Players>),
  APlayerPutsNumberGenericCardsIntoGraveyard(Box<Players>, Box<GameNumber>),
  APlayerPutsTheRemainingCardsOnTheTopOfLibraryInAnyOrder(Box<Players>),
  APlayerSeparatesThoseCardsIntoTwoPiles(Box<Players>),
  ChooseACardThatsExactlyEachColorPair,
  ChooseAnyNumberOfCards(Box<Cards>),
  ChooseMultipleCardsOfType(Vec<Cards>),
  CreatePermanentLayerEffect(Box<Permanent>, Vec<LayerEffect>),
  CreatePermanentLayerEffectUntil(Box<Permanent>, Vec<LayerEffect>, Expiration),
  EachPlayerStartingWithChoosesADifferentCardToPutIntoHand(Box<Players>, Box<Player>, Box<Cards>),
  ExileTheCardFoundThisWay,
  ExileTheRemainingCards,
  ExileTheRemainingCardsWithACounterOfType(CounterType),
  ForEachCardPutIntoHandUnlessAnyPlayerAction(Box<Players>, RevealTheTopNumberCardsOfLibraryCost),
  IfElse(Condition, Vec<RevealTheTopNumberCardsOfLibraryAction>, Vec<RevealTheTopNumberCardsOfLibraryAction>),
  If(Condition, Vec<RevealTheTopNumberCardsOfLibraryAction>),
  LeaveTheRemainingCardsOnTopOfLibraryInTheSameOrder,
  MayCastASpellFromAmongThemWithoutPaying(Box<Spells>),
  MayCastTheCardFoundThisWayWithoutPaying,
  MayPutACardOfEachCardtypeAmongSpellsCastThisTurnIntoHand(Box<Spells>),
  MayPutACardOfEachCardtypeIntoHand,
  MayPutACardOfTypeIntoHand(Box<Cards>),
  MayPutACardOfTypeOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  MayPutAnyNumberOfCardsOfTypeIntoHand(Box<Cards>),
  MayPutAnyNumberOfCardsOfTypeOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  MayPutMultipleCardsOfTypeIntoHand(Vec<Cards>),
  MayPutMultipleCardsOfTypeIntoHandOrOntoTheBattlefield(Vec<Cards>, Vec<EnterFlag>),
  MayPutTheCardFoundThisWayOntoTheBattlefield(Vec<EnterFlag>),
  MayPutUptoNumberCardsOfTypeOntoTheBattlefield(Box<GameNumber>, Box<Cards>, Vec<EnterFlag>),
  MayPutUptoNumberGroupCardsOntoTheBattlefield(Box<GameNumber>, Box<Cards>, GroupFilter, Vec<EnterFlag>),
  PlayerMillsNumberCards(Box<Player>, Box<GameNumber>),
  PutACardOfTypeIntoHand(Box<Cards>),
  PutACardOfTypeOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  PutAChosenCardOntoTheBattlefield(Vec<EnterFlag>),
  PutAGenericCardFromTheChosenPileIntoHand,
  PutAGenericCardIntoHand,
  PutAPileIntoHand,
  PutEachCardOfTypeChosenThisWayOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  PutEachCardOfTypeIntoHand(Box<Cards>),
  PutEachCardOfTypeOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  PutTheCardFoundThisWayIntoHand,
  PutTheCardFoundThisWayOnTopOfLibrary,
  PutTheCardFoundThisWayOntoTheBattlefield(Vec<EnterFlag>),
  PutTheCardsFoundThisWayIntoExile,
  PutTheCardsFoundThisWayIntoGraveyard,
  PutTheCardsFoundThisWayIntoHand,
  PutTheCardsFoundThisWayOntoTheBattlefield(Vec<EnterFlag>),
  PutTheCardsNotFoundThisWayIntoGraveyard,
  PutTheChosenCardIntoGraveyard,
  PutTheChosenCardIntoHand,
  PutTheChosenCardOntoTheBattlefield(Vec<EnterFlag>),
  PutTheChosenCardsIntoHand,
  PutTheChosenPileIntoHand,
  PutTheRemainingCardsBackIntoLibraryAndShuffle,
  PutTheRemainingCardsIntoGraveyard,
  PutTheRemainingCardsIntoHand,
  PutTheRemainingCardsOnTheBottomOfLibraryInARandomOrder,
  PutTheRemainingCardsOnTheBottomOfLibraryInAnyOrder,
  PutUptoNumberCardsOfTypeIntoHand(Box<GameNumber>, Box<Cards>),
  SeperateThoseCardsIntoTwoPiles,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_AnteCards", content = "args"))]
pub enum AnteCards {
  OwnedByAPlayer(Box<Players>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CreatableToken", content = "args"))]
pub enum CreatableToken {
  // Number Tokens
  NumberTokens(Box<GameNumber>, Box<CreatableToken>),
  NumberTokensForEach(Box<GameNumber>, Box<GameNumber>, Box<CreatableToken>),

  // Manually Defined Tokens
  Token(TokenColorList, Vec<SuperType>, Vec<CardType>, TokenSubtypes, Vec<Rule>),
  TokenWithPT(PT, TokenColorList, Vec<SuperType>, Vec<CardType>, TokenSubtypes, Vec<Rule>),
  NamedToken(NameString, TokenColorList, Vec<SuperType>, Vec<CardType>, TokenSubtypes, Vec<Rule>),
  NamedTokenWithPT(NameString, PT, TokenColorList, Vec<SuperType>, Vec<CardType>, TokenSubtypes, Vec<Rule>),
  NamedTokenWithPTAndWithCopyEffects(NameString, PT, TokenColorList, Vec<SuperType>, Vec<CardType>, TokenSubtypes, Vec<Rule>, TokenCopyEffects),
  TransformingToken(Box<CreatableToken>, Box<CreatableToken>),

  // Token Copies of Things
  TokenCopyOfDiscardedCard(Box<CardInHand>, TokenCopyEffects),
  TokenCopyOfEachCardOfTypeRevealedThisWay(Box<Cards>, TokenCopyEffects),
  TokenCopyOfAPermanent(Box<Permanents>, TokenCopyEffects),
  TokenCopyOfEachExiledCard(CardsInExile, TokenCopyEffects),
  TokenCopyOfAnExiledCard(CardsInExile, TokenCopyEffects),
  TokenCopyOfEachPermanentDestroyedThisWay(TokenCopyEffects),
  TokenCopyOfExiledCard(CardInExile, TokenCopyEffects),
  TokenCopyOfNamedCard(NameString, TokenCopyEffects),
  TokenCopyOfSpell(Box<Spell>, TokenCopyEffects),
  TokenFromCopy,
  TokenCopyOfGraveyardCard(Box<CardInGraveyards>, TokenCopyEffects),
  TokenCopyOfACardAtRandom(Box<CardsInOracle>),
  TokenCopyOfCommander(TokenCopyEffects),
  TokenCopyOfEachGraveyardCard(Box<CardsInGraveyards>, TokenCopyEffects),
  TokenCopyOfEachPermanent(Box<Permanents>, TokenCopyEffects),
  TokenCopyOfPermanent(Box<Permanent>, TokenCopyEffects),
  TokenCopyOfAnEnteringPermanent(Box<Permanents>, TokenCopyEffects),

  // Replacement-Effect Tokens
  ThoseTokens,

  // Oracle Tokens
  OracleToken(NameString),

  // Pre-defined
  VirtuousRoleToken,
  WickedRoleToken,
  YoungHeroRoleToken,
  CursedRoleToken,
  MonsterRoleToken,
  RoyalRoleToken,
  SorcererRoleToken,

  BloodToken,
  ClueToken,
  FishToken,
  FoodToken,
  GoldToken,
  JunkToken,
  LanderToken,
  MapToken,
  MutagenToken,
  OctopusToken,
  PowerstoneToken,
  IncubatorToken,
  ShardToken,
  TreasureToken,
  VibraniumToken,
  WalkerToken,
}



#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Exilable", content = "args"))]
pub enum Exilable {
  // Stack
  Spell(Box<Spell>),

  // Cards In Graveyards
  AGraveyardCard(Box<CardsInGraveyards>),
  AGraveyardCardAtRandom(Box<CardsInGraveyards>),
  AGraveyardCardAtRandomInEachPlayersGraveyard(Box<CardsInGraveyards>, Box<Players>),
  AnyNumberOfGraveyardCards(Box<CardsInGraveyards>),
  AnyNumberOfGroupGraveyardCards(Box<CardsInGraveyards>, GroupFilter),
  GraveyardCards(Box<CardsInGraveyards>),
  GraveyardCard(Box<CardInGraveyards>),
  NumberGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
  UptoOneGraveyardCard(Box<CardsInGraveyards>),

  // Cards In Hand
  ARandomCardFromPlayersHand(Box<Player>),
  CardInHand(Box<CardInHand>),
  ACardOfTypeFromPlayersHand(Box<CardsInHand>, Box<Player>),

  // Cards In Library
  TheTopCardOfPlayersLibrary(Player ),
  TheTopNumberCardsOfPlayersLibrary(Box<GameNumber>, Box<Player>),
  ARandomCardFromPlayersLibrary(Player ),
  ARandomCardOfTypeFromPlayersLibrary(CardsInLibrary, Box<Player>),

  // Permanents
  APermanent(Box<Permanents>),
  Permanent(Box<Permanent>),
  Permanents(Box<Permanents>),
  UptoOnePermanent(Box<Permanents>),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_DamageRecipient", content = "args"))]
pub enum DamageRecipient {
  MultipleRecipients(Vec<DamageRecipient>),

  CreatureOrPlaneswalkerChosenAtRandom(Box<Permanents>),
  EachPermanent(Box<Permanents>),
  EachPlayer(Box<Players>),
  EachableTarget,
  Permanent(Box<Permanent>),
  Player(Box<Player>),
  PlayerOrPlaneswalkerPermanentIsAttacking(Box<Permanent>),
  Ref_AnyTarget,
  Ref_AnyTarget1,
  Ref_AnyTarget2,
  Ref_AnyTargets,
  Ref_AnyTargets_1,
  Ref_AnyTargets_2,
  Ref_AnyTargets_3,
  Ref_TargetPlayerOrPermanent,
  TheChosenDamageRecipient,
  Trigger_ThatRecipient,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_DamageToRecipients", content = "args"))]
pub enum DamageToRecipients {
  DamageToRecipients(Box<GameNumber>, Box<DamageRecipient>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Emblem", content = "args"))]
pub enum Emblem {
  OwnedByAPlayer(Box<Players>),
  ThisEmblem,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Boon", content = "args"))]
pub enum Boon {
  ThisBoon,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Direction", content = "args"))]
pub enum Direction {
  TheChosenDirection,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ActionOption", content = "args"))]
pub enum ActionOption {
  ActionOption(Box<Cost>, Vec<Action>),
  DoNothingOption(Vec<Action>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Targets", content = "args"))]
pub enum Targets {
  Ref_TargetPlayersAndPermanents,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_RemoveCountersAction", content = "args"))]
pub enum RemoveCountersAction {
  ACounterFromCardInExile(Box<CardInExile>),
  ACounterFromPermanent(Box<Permanent>),
  ACounterFromPlayer(Box<Player>),
  ACounterOfTypeFromCardInExile(CounterType, Box<CardInExile>),
  ACounterOfTypeFromEachCardInExile(CounterType, Box<CardsInExile>),
  ACounterOfTypeFromEachOfAnyNumberOfPermanents(CounterType, Box<Permanents>),
  ACounterOfTypeFromEachPermanent(CounterType, Box<Permanents>),
  ACounterOfTypeFromPermanent(CounterType, Box<Permanent>),
  AllCountersFromEachPermanent(Box<Permanents>),
  AllCountersFromEachPlayer(Box<Players>),
  AllCountersFromPermanent(Box<Permanent>),
  AllCountersFromPlayer(Box<Player>),
  AllCountersOfTypeFromAPermanent(CounterType, Box<Permanents>),
  AllCountersOfTypeFromEachPermanent(CounterType, Box<Permanents>),
  AllCountersOfTypeFromPermanent(CounterType, Box<Permanent>),
  AllCountersOfTypeFromPlayer(CounterType, Box<Player>),
  AnyNumberOfCountersFromAmongPermanents(Box<Permanents>),
  AnyNumberOfCountersFromPermanent(Box<Permanent>),
  NumberCountersFromPermanent(Box<GameNumber>, Box<Permanent>),
  NumberCountersOfTypeFromACardInExile(Box<GameNumber>, CounterType, Box<CardsInExile>),
  NumberCountersOfTypeFromCardInExile(Box<GameNumber>, CounterType, Box<CardInExile>),
  NumberCountersOfTypeFromEachCardInExile(Box<GameNumber>, CounterType, Box<CardsInExile>),
  NumberCountersOfTypeFromEachPermanent(Box<GameNumber>, CounterType, Box<Permanents>),
  NumberCountersOfTypeFromPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
  TheCountersDistributedThisWay,
  UptoNumberCountersFromPermanent(Box<GameNumber>, Box<Permanent>),
  UptoNumberCountersFromPlayer(Box<GameNumber>, Box<Player>),
  UptoNumberCountersOfTypeFromAmongPermanents(Box<GameNumber>, CounterType, Box<Permanents>),
  UptoNumberCountersOfTypeFromPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_MoveCountersAction", content = "args"))]
pub enum MoveCountersAction {
  ACounterFromPermanentOntoNewPermanent(Box<Permanent>, Box<Permanent>),
  ACounterOfEachTypeFromPermanentOntoNewPermanentThatNewPermanentDoesntHave(Box<Permanent>, Box<Permanent>),
  ACounterOfTypeFromPermanentOntoNewPermanent(CounterType, Box<Permanent>, Box<Permanent>),
  AllCountersFromPermanentOntoNewPermanent(Box<Permanent>, Box<Permanent>),
  AllCountersOfTypeFromEachPermanentOntoNewPermanent(CounterType, Box<Permanents>, Box<Permanent>),
  AllCountersOfTypeFromPermanentOntoNewPermanent(CounterType, Box<Permanent>, Box<Permanent>),
  AnyNumberOfCountersFromAmongPermanentsOntoNewPermanent(Box<Permanents>, Box<Permanent>),
  AnyNumberOfCountersFromPermanentOntoNewPermanent(Box<Permanent>, Box<Permanent>),
  AnyNumberOfCountersOfTypeFromAmongPermanentsOntoNewPermanent(CounterType, Box<Permanents>, Box<Permanent>),
  AnyNumberOfCountersOfTypeFromPermanentOntoNewPermanent(CounterType, Box<Permanent>, Box<Permanent>),
  DistributeAnyNumberOfCountersOfTypeFromPermanentOntoNewPermanents(CounterType, Box<Permanent>, Box<Permanents>),
  NumberCountersOfTypeFromPermanentOntoNewPermanent(Box<GameNumber>, CounterType, Box<Permanent>, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_MoveCountersCost", content = "args"))]
pub enum MoveCountersCost {
  AtLeastOneCounterFromPermanentOntoNewPermanent(Box<Permanent>, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_RemoveCountersCost", content = "args"))]
pub enum RemoveCountersCost {
  ACounterFromAPermanent(Box<Permanents>),
  ACounterFromPermanent(Box<Permanent>),
  ACounterOfTypeFromACardInExile(CounterType, Box<CardsInExile>),
  ACounterOfTypeFromAPermanent(CounterType, Box<Permanents>),
  ACounterOfTypeFromEachOfNumberPermanents(CounterType, Box<GameNumber>, Box<Permanents>),
  ACounterOfTypeFromPermanent(CounterType, Box<Permanent>),
  AllCountersOfTypeFromPermanent(CounterType, Box<Permanent>),
  AnyNumberOfCountersOfTypeFromAmongPermanents(CounterType, Box<Permanents>),
  AnyNumberOfCountersOfTypeFromPermanent(CounterType, Box<Permanent>),
  NumberCountersFromAPermanent(Box<GameNumber>, Box<Permanents>),
  NumberCountersFromAmongPermanents(Box<GameNumber>, Box<Permanents>),
  NumberCountersFromPermanent(Box<GameNumber>, Box<Permanent>),
  NumberCountersOfTypeFromAmongPermanents(Box<GameNumber>, CounterType, Box<Permanents>),
  NumberCountersOfTypeFromPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
  NumberOrMoreCountersOfTypeFromAmongPermanents(Box<GameNumber>, CounterType, Box<Permanents>),
  NumberOrMoreCountersOfTypeFromPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PutOrRemoveCountersAction", content = "args"))]
pub enum PutOrRemoveCountersAction {
  DuplicateOrRemoveACounterOfEachKindOnPermanent(Box<Permanent>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PutCountersCost", content = "args"))]
pub enum PutCountersCost {
  ACounterOfTypeOnAPermanent(CounterType, Box<Permanents>),
  ACounterOfTypeOnCardInExile(CounterType, Box<CardInExile>),
  ACounterOfTypeOnPermanent(CounterType, Box<Permanent>),
  NumberCountersOfTypeOnAPermanent(Box<GameNumber>, CounterType, Box<Permanents>),
  NumberCountersOfTypeOnPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
  NumberCountersOfTypeOnPlayer(Box<GameNumber>, CounterType, Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PutRestriction", content = "args"))]
pub enum PutRestriction {
  CantCauseTheNumberOfCountersOfTypeOnPermanentToBeGreaterThan(CounterType, Box<Permanent>, Box<GameNumber>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_PutCountersAction", content = "args"))]
pub enum PutCountersAction {

  ACounterOfTypeAtRandomThatPermanentDoesHaveOnPermanent(Vec<CounterType>, Box<Permanent>, Box<Permanent>),
  ACounterOfTypeOfMultipleChoiceOnEachPermanent(Vec<CounterType>, Box<Permanents>),
  ACounterOfTypeOnAPermanent(CounterType, Box<Permanents>),
  ACounterOfTypeOnAPermanentOfEachColor(CounterType, Box<Permanents>),
  ACounterOfTypeOnCardInExile(CounterType, Box<CardInExile>),
  ACounterOfTypeOnEachCardInExile(CounterType, Box<CardsInExile>),
  ACounterOfTypeOnEachPermanent(CounterType, Box<Permanents>),
  ACounterOfTypeOnEachPlayer(CounterType, Box<Players>),
  ACounterOfTypeOnPermanent(CounterType, Box<Permanent>),
  ACounterOfTypeOnPlane(CounterType, Box<Plane>),
  ACounterOfTypeOnPlayer(CounterType, Box<Player>),
  ACounterOfTypeOnScheme(CounterType, Box<SingleScheme>),
  ACounterOfTypeOnUptoNumberPermanents(CounterType, Box<GameNumber>, Box<Permanents>),
  ACounterOfTypeOnVanguard(CounterType, Box<SingleVanguard>),
  ADuplicateOfEachKindOfCounterAmongPermanentDistibutedToPermanents(Box<Permanents>, Box<Permanents>),
  ADuplicateOfEachKindOfCounterAmoungPermanentsOrACounterOfTypeOnPermanent(Box<Permanents>, CounterType, Box<Permanent>),
  ADuplicateOfEachKindOfCounterOnPermanentOnPermanent(Box<Permanent>, Box<Permanent>),
  ADuplicateOfEachKindOfCounterOnPlayerOnPlayer(Box<Player>, Box<Player>),
  AnAbilityCounterOnAPermanentForEachAbilityOnCardsInGraveyards(Box<Permanents>, Vec<CheckHasable>, Box<CardsInGraveyards>),
  AnAbilityCounterOnPermanentForEachAbilityOnPermanentIfItDoesntHaveIt(Box<Permanent>, Vec<CheckHasable>, Box<Permanent>),
  DifferentNumberCountersOfTypeOnEachCardInExile(Box<GameNumber>, CounterType, Box<CardsInExile>),
  DifferentNumberCountersOfTypeOnEachPermanent(Box<GameNumber>, CounterType, Box<Permanents>),
  DistributeNumberCountersOfTypeAmongAnyNumberOfPermanents(Box<GameNumber>, CounterType, Box<Permanents>),
  DistributeNumberCountersOfTypeAmongPermanents(Box<GameNumber>, CounterType, Box<Permanents>),
  DistributedCounters(CounterType),
  DoubleAllCountersOnEachPermanent(Box<Permanents>),
  DoubleAllCountersOnPermanent(Box<Permanent>),
  DoubleAllCountersPlayerHas(Box<Player>),
  DoubleCountersOfTypeOnEachPermanent(CounterType, Box<Permanents>),
  DoubleCountersOfTypeOnPermanent(CounterType, Box<Permanent>),
  DuplicateACounterOfAPermanentOnEachOtherPermanent(Box<Permanents>, Box<Permanents>),
  DuplicateACounterOfAPermanentThatPermanentDoesntHaveOnPermanent(Box<Permanents>, Box<Permanent>, Box<Permanent>),
  DuplicateACounterOfCardInExileOnCardInExile(Box<CardInExile>, Box<CardInExile>),
  DuplicateACounterOfEachOfThoseKindsOnPermanent(Box<Permanent>),
  DuplicateACounterOfPermanentOnPermanent(Box<Permanent>, Box<Permanent>),
  DuplicateACounterOfPlayerOnPlayer(Box<Player>, Box<Player>),
  DuplicateCountersOfPermanentOnEachPermanent(Box<Permanent>, Box<Permanents>),
  DuplicateCountersOfPermanentOnPermanent(Box<Permanent>, Box<Permanent>),
  DuplicateCountersOfTypeOfPermanentOnPermanent(CounterType, Box<Permanent>, Box<Permanent>),
  DuplicateThoseCounterOnPermanent(Box<Permanent>),
  ForEachPermanentMayDuplicateACounterOfPermanentOnPermanent(Box<Permanents>, Box<Permanent>, Box<Permanent>),
  NumberCountersOfTypeOnAPermanent(Box<GameNumber>, CounterType, Box<Permanents>),
  NumberCountersOfTypeOnCardInExile(Box<GameNumber>, CounterType, Box<CardInExile>),
  NumberCountersOfTypeOnCardInGraveyard(Box<GameNumber>, CounterType, Box<CardInGraveyards>),
  NumberCountersOfTypeOnEachCardInExile(Box<GameNumber>, CounterType, Box<CardsInExile>),
  NumberCountersOfTypeOnEachPermanent(Box<GameNumber>, CounterType, Box<Permanents>),
  NumberCountersOfTypeOnEachPlayer(Box<GameNumber>, CounterType, Box<Players>),
  NumberCountersOfTypeOnPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
  NumberCountersOfTypeOnPlayer(Box<GameNumber>, CounterType, Box<Player>),
  NumberCountersOfTypeOnSpell(Box<GameNumber>, CounterType, Box<Spell>),
  UptoNumberCountersOfTypeOnPermanent(Box<GameNumber>, CounterType, Box<Permanent>),
  UptoSingleNumberCountersOfTypeOnEachPermanent(Box<GameNumber>, CounterType, Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Action", content = "args"))]
pub enum Action {
  APlayerAction(Box<Players>, Box<Action>),
  APlayerActions(Box<Players>, Vec<Action>),
  APlayerGainsControlOfPermanent(Box<Players>, Box<Permanent>),
  APlayerMayAction(Box<Players>, Box<Action>),
  AbandonScheme(SingleScheme),
  AcceptARandomCondition(Offerer),
  AcceptARandomOffer(Offerer),
  ActionForEachCardtype(Vec<CardType>, Vec<Action>),
  ActionForEachCheckableAbility(Vec<CheckHasable>, Vec<Action>),
  ActionForEachDistributedAnyTarget(Vec<Action>),
  ActionForEachExiledCard(CardsInExile, Vec<Action>),
  ActionForEachPermanent(Box<Permanents>, Vec<Action>),
  ActionForEachPermanentByController(Box<Permanents>, Vec<Action>),
  ActionForEachPermanentDestroyedThisWay(Vec<Action>),
  ActionForEachPermanentExiledThisWay(Vec<Action>),
  ActionForEachPermanentExiledThisWayByController(Vec<Action>),
  ActionForEachPermanentPutInGraveyardThisWay(Vec<Action>),
  ActionForEachPermanentThatDiedThisWay(Vec<Action>),
  ActionForEachPlayer(Box<Players>, Vec<Action>),
  ActionForEachPlayerInTurnOrder(Box<Players>, Vec<Action>),
  ActionForEachSpellAndAbility(SpellsAndAbilities, Vec<Action>),
  ActionForEachTarget(Targets, Vec<Action>),
  ActionNumberTimes(Box<GameNumber>, Vec<Action>),
  ActivateAManaAbilityOfEachPermanentAndLoseUnspentMana(Box<Permanents>),
  Adapt(Box<GameNumber>),
  AddCombinationMana(ManaProduce, Box<GameNumber>),
  AddCombinationManaWithModifers(ManaProduce, Box<GameNumber>, ManaUseModifier),
  AddMana(ManaProduce),
  AddManaRepeated(ManaProduce, Box<GameNumber>),
  AddManaRepeatedTwiceWithModifiers(ManaProduce, Box<GameNumber>, ManaProduce, Box<GameNumber>, ManaUseModifier),
  AddManaRepeatedWithModifiers(ManaProduce, Box<GameNumber>, ManaUseModifier),
  AddManaWithModifiers(ManaProduce, ManaUseModifier),
  AfterTheSecondMainPhaseThisTurnThereIsAnAdditionalCombatPhaseAndAnAdditionalMainPhaseWithAtTheBeginningOfCombatTrigger(Box<Actions>),
  AfterThisMainPhaseThereAreAnAdditionalNumberCombatPhases(Box<GameNumber>),
  AirbendPermanent(Box<Permanent>),
  AirbendPermanents(Box<Permanents>),
  AirbendSpell(Box<Spell>),
  Amass(Box<GameNumber>, CreatureType),
  AnteTopCardOfLibrary,
  AnyPlayerMayCost(Box<Players>, Box<Cost>),
  AnyPlayerMayPayMana(Box<Players>, ManaCost, Vec<Action>, Vec<Action>),
  Ascend,
  AttachAPermanentToAPermanent(Box<Permanents>, Box<Permanents>),
  AttachAPermanentToPermanent(Box<Permanents>, Box<Permanent>),
  AttachAnyNumberOfPermanentsToAnyPermanents(Box<Permanents>, Box<Permanents>),
  AttachAnyNumberOfPermanentsToPermanent(Box<Permanents>, Box<Permanent>),
  AttachAnyNumberOfPermanentsToPlayerOrPermanent(Box<Permanents>, PlayerOrPermanent),
  AttachEachPermanentToAPermanent(Box<Permanents>, Box<Permanents>),
  AttachEachPermanentToPermanent(Box<Permanents>, Box<Permanent>),
  AttachPermanentToACardInAPlayersGraveyard(Box<Permanent>, Box<Cards>, Box<Players>),
  AttachPermanentToAPermanent(Box<Permanent>, Box<Permanents>),
  AttachPermanentToPermanent(Box<Permanent>, Box<Permanent>),
  AttachPermanentToPlayer(Box<Permanent>, Box<Player>),
  AttachPermanentsToPermanent(Box<Permanents>, Box<Permanent>),
  AttachUptoOnePermanentToEachPermanent(Box<Permanents>, Box<Permanents>),
  AwakenPermanent(Box<GameNumber>, Box<Permanent>),
  BecomeDay,
  BecomeNight,
  BecomeTheMonarch,
  BeginGameWithCardOnBattlefield(PregameCard, Vec<EnterFlag>),
  Blight(Box<GameNumber>),
  Bolster(Box<GameNumber>),
  BoonDealsDamage(Boon, Box<GameNumber>, Box<DamageRecipient>),
  CastACopiedCardWithoutPaying,
  CastASpellAndMaySpendManaAsThoughAnyColorToCast(Box<Spells>),
  CastASpellDrawnThisWayWithoutPaying,
  CastASpellFromAPlayersGraveyardWithoutPayingIntoExile(Box<Spells>, Box<Players>),
  CastASpellFromExile(Box<Spells>, CardsInExile),
  CastASpellFromExileOntoBottomOfLibrary(Box<Spells>, CardsInExile),
  CastASpellFromExileWithEffect(Box<Spells>, CardsInExile, Vec<SpellEffect>),
  CastASpellFromExileWithoutPaying(Box<Spells>, CardsInExile),
  CastASpellFromHandForAlternateCost(Box<Spells>, Box<Cost>),
  CastASpellFromHandGraveyardOrExileWithoutPaying(Box<Spells>, Box<Cards>, Cards, CardsInExile),
  CastASpellFromHandWithoutPaying(Box<Spells>),
  CastASpellFromMilledCardsWithoutPaying(Box<Spells>),
  CastASpellFromPlayersGraveyardWithoutPaying(Box<Spells>, Box<Player>),
  CastASpellFromPlayersGraveyardWithoutPayingIntoExile(Box<Spells>, Box<Player>),
  CastASpellFromRevealedCardInHandsWithoutPaying(Box<Spells>, Box<Cards>),
  CastASpellFromTopOfLibraryWithoutPaying(Box<Spells>),
  CastAnExiledCardAndMaySpendManaAsThoughAnyTypeToCast(Box<CardsInExile>),
  CastAnyNumberOfCardsInPlayersGraveyardWithoutPaying(Box<Cards>, Box<Player>),
  CastAnyNumberOfCopiedCards,
  CastAnyNumberOfCopiedCardsWithoutPaying,
  CastAnyNumberOfExiledCardsWithoutPaying(Box<CardsInExile>),
  CastAnyNumberOfGraveyardCardsWithoutPayingIntoExile(Box<CardsInGraveyards>),
  CastAnyNumberOfGroupSpellsFromExileWithoutPaying(Box<Spells>, GroupFilter, CardsInExile),
  CastAnyNumberOfSpellsFromExileWithoutPaying(Box<Spells>, CardsInExile),
  CastAnyNumberOfSpellsFromHandWithoutPaying(Box<Spells>),
  CastAnyNumberOfSpellsFromOutsideTheGameWithoutPaying(Box<Spells>),
  CastCardInHandWithoutPaying(CardInHand),
  CastCardInHandWithoutPayingAsAFacedownCreatureSpell(CardInHand, PT),
  CastCommanderFromCommandZoneWithoutPaying,
  CastCopiedCard,
  CastCopiedCardForAlternateCost(Box<Cost>),
  CastCopiedCardForReducedCost(ManaCost),
  CastCopiedCardWithoutPaying,
  CastEachCopiedCardWithoutPaying,
  CastExiledCardAndMaySpendManaAsThoughAnyColorToCast(Box<CardInExile>),
  CastExiledCardForAlternateCost(CardInExile, Box<Cost>),
  CastExiledCardForReducedCost(CardInExile, CostReduction),
  CastExiledCardWithoutPaying(Box<CardInExile>),
  CastExiledCardWithoutPayingIntoExile(Box<CardInExile>),
  CastExiledCardWithoutPayingOntoBottomOfLibrary(Box<CardInExile>),
  CastGraveyardCard(Box<CardInGraveyards>),
  CastGraveyardCardIntoExile(Box<CardInGraveyards>),
  CastGraveyardCardWithoutPaying(Box<CardInGraveyards>),
  CastGraveyardCardWithoutPayingIntoExile(Box<CardInGraveyards>),
  CastSpellFromExile(Box<Spells>, CardInExile),
  CastSpellFromExileWithoutPaying(Box<Spells>, CardInExile),
  CastSpellFromExileWithoutPayingAndFlagSpellsCastWithEffect(Box<Spells>, CardInExile, Box<Spells>, Vec<SpellEffect>),
  CastSpellFromGraveyardWithoutPayingIntoExile(Box<Spells>, Box<CardInGraveyards>),
  CastSpellFromHandOrGraveyardAlternateCost(Box<Spells>, Box<Cost>),
  CastSpellsFromExileWithoutPaying(Box<Spells>, CardsInExile),
  CastTheCardDiscardedThisWayWithoutPaying,
  CastTheCardRevealedThisWayWithoutPaying,
  CastTopCardOfLibraryForAlternateCost(ManaCost),
  CastTopCardOfLibraryWithoutPaying,
  CastTopCardOfPlayersLibraryWithoutPaying(Box<Player>),
  CastTopSpellOfLibraryWithoutPaying(Box<Spells>),
  CastUptoNumberCopiedCardsWithoutPaying(Box<GameNumber>),
  CastUptoNumberExiledCardsWithoutPaying(Box<GameNumber>, CardsInExile),
  CastUptoNumberGroupSpellsFromGraveyardOrHandWithoutPayingIntoExile(Box<GameNumber>, Box<Spells>, GroupFilter),
  CastUptoNumberSpellsFromExileWithoutPaying(Box<GameNumber>, Box<Spells>, CardsInExile),
  CastUptoNumberSpellsFromHandWithoutPaying(Box<GameNumber>, Box<Spells>),
  ChangeATargetOfSpellOrAbilityToPermanent(SpellOrAbility, Box<Permanent>),
  ChangeTargetsOfAbility(Ability),
  ChangeTargetsOfSpell(Box<Spell>),
  ChangeTargetsOfSpellOrAbility(SpellOrAbility),
  ChangeTheTargetOfAbility(Ability),
  ChangeTheTargetOfSpell(Box<Spell>),
  ChangeTheTargetOfSpellOrAbility(SpellOrAbility),
  ChangeTheTargetOfSpellToAPermanent(Box<Spell>, Box<Permanents>),
  ChangeTheTargetOfSpellToPermanent(Box<Spell>, Box<Permanent>),
  ChangeTheTargetsOfSpellToAPlayer(Box<Spell>, Box<Players>),
  ChaosEnsues,
  ChooseABasicLandType,
  ChooseACardFromAmongCardsDiscardedThisWay(Box<Cards>),
  ChooseACardFromAmongTheTopNumberCardsInPlayersGraveyard(Box<Cards>, Box<GameNumber>, Box<Player>),
  ChooseACardFromPlayersRevealedHand(Box<Cards>, Box<Player>),
  ChooseACardInEachPlayersGraveyard(Box<Cards>, Box<Players>),
  ChooseACardInHand(Box<CardsInHand>),
  ChooseACardInHandAtRandom(Box<Cards>),
  ChooseACardInHandOfEachColor(Box<Cards>),
  ChooseACardInHandOrAPermanent(Box<Cards>, Box<Permanents>),
  ChooseACardInPlayersGraveyard(Box<Cards>, Box<Player>),
  ChooseACardInPlayersGraveyardAtRandom(Box<Cards>, Box<Player>),
  ChooseACardName(Box<CardsInOracle>),
  ChooseACardNameThatHasntBeenChosen(Box<CardsInOracle>),
  ChooseACardOfTypeInPlayersHandAtRandom(Box<Cards>, Box<Player>),
  ChooseACardtype,
  ChooseACardtypeFromList(Vec<CardType>),
  ChooseACheckableAbility(Vec<CheckHasable>),
  ChooseAColor(ChoosableColor),
  ChooseAColorOrColorless(ChoosableColor),
  ChooseACommanderOnTheBattlefieldOrInTheCommandZone(Commanders),
  ChooseACreatureType,
  ChooseACreatureTypeOtherThan(CreatureType),
  ChooseACreatureType_And_ChooseACreatureTypeOtherThan(CreatureType),
  ChooseADamageNumber,
  ChooseADamageRecipient(DamageRecipientsList),
  ChooseADamageSource(DamageSources),
  ChooseAGraveyardCard(Box<CardsInGraveyards>),
  ChooseAGraveyardCardThatHasntBeenChosen(Box<CardsInGraveyards>),
  ChooseAGraveyardPile,
  ChooseALandType,
  ChooseALandTypeAndABasicLandType,
  ChooseALetter,
  ChooseANamedAction(Vec<NamedAction>),
  ChooseANonBasicLandType,
  ChooseANumber,
  ChooseANumberBetween(i32, i32),
  ChooseANumberBetweenAtRandom(Box<GameNumber>, Box<GameNumber>),
  ChooseANumberFromAmongAtRandom(Vec<i32>),
  ChooseANumberGreaterThanNumber(i32),
  ChooseAPartyFromAmongPermanents(Box<Permanents>),
  ChooseAPermanent(Box<Permanents>),
  ChooseAPermanentAtRandom(Box<Permanents>),
  ChooseAPermanentForEachPlayer(Box<Players>, Box<Permanents>),
  ChooseAPermanentOfEachBasicLandTypeAvailable(Box<Permanents>),
  ChooseAPermanentOfEachPermanentTypeAvailable(Box<Permanents>),
  ChooseAPermanentOfEachPowerAvailable(Box<Permanents>),
  ChooseAPermanentPile,
  ChooseAPermanentThatHasntBeenChosen(Box<Permanents>),
  ChooseAPermanentType,
  ChooseAPileCreatedByEachPlayer(Box<Players>),
  ChooseAPileCreatedByEachPlayerAtRandom(Box<Players>),
  ChooseAPlaneswalkerType,
  ChooseAPlayer(Box<Players>),
  ChooseAPlayerAtRandom(Box<Players>),
  ChooseAPlayerOrPlaneswalkerCurrentlyAttackedByPlayer(Box<Player>),
  ChooseARandomColor(ChoosableColor),
  ChooseASecondPermanentAtRandom(Box<Permanents>),
  ChooseASector,
  ChooseASpellThatResolvedThisTurn(Box<Spells>),
  ChooseActionAtRandom(Vec<Vec<Action>>),
  ChooseAnAbility(Vec<Rule>),
  ChooseAnAbilityAtRandom(Vec<Rule>),
  ChooseAnAction(Vec<Vec<Action>>),
  ChooseAnAttackingCreatureForBlockerToBlock(Box<Permanents>, Box<Permanent>),
  ChooseAnExiledCard(Box<CardsInExile>),
  ChooseAnExiledCardAtRandom(Box<CardsInExile>),
  ChooseAnExiledPile,
  ChooseAnOrderForCardTypes(Vec<CardType>),
  ChooseAnUnchosenCardInPlayersGraveyard(Box<Cards>, Box<Player>),
  ChooseAnyNumberOfGroupPermanents(Box<Permanents>, GroupFilter),
  ChooseAnyNumberOfPermanents(Box<Permanents>),
  ChooseAnyNumberPermanentsAndPayManaForEach(Box<Permanents>, ManaCost),
  ChooseColors,
  ChooseCopyFromCopies,
  ChooseEvenOrOdd,
  ChooseLandType(Vec<LandType>),
  ChooseLeftOrRight,
  ChooseLibraryFilter(Vec<Cards>),
  ChooseMultiplePermanentsAmoungPermanents(Vec<Permanents>, Box<Permanents>),
  ChooseMultiplePermanentsAmoungPermanentsForEachPlayer(Box<Players>, Vec<Permanents>, Box<Permanents>),
  ChooseNamedPileForPermanent(Vec<VoteOption>, Box<Permanent>),
  ChooseNewTargetsForAnyNumberOfSpellsOrAbilities(SpellsAndAbilities),
  ChooseNewTargetsForSpell(Box<Spell>),
  ChooseNewTargetsForSpellOrAbility(SpellOrAbility),
  ChooseNumberAbilitiesAtRandom(Box<GameNumber>, Vec<Rule>),
  ChooseNumberCardsFromAmongCardsInHandRevealedThisWay(Box<GameNumber>, Box<Cards>),
  ChooseNumberCardsInEachPlayersGraveyard(Box<GameNumber>, Box<Cards>, Box<Players>),
  ChooseNumberCardsInHand(Box<GameNumber>),
  ChooseNumberCardsInPlayersGraveyard(Box<GameNumber>, Box<Cards>, Box<Player>),
  ChooseNumberGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
  ChooseNumberPermanents(Box<GameNumber>, Box<Permanents>),
  ChooseOneOrTwoPermanents(Box<Permanents>),
  ChoosePTMod(Vec<PTMod>),
  ChoosePermanentFilter(Vec<Permanents>),
  ChooseProtectionFromAColorOrFromArtifact,
  ChooseRandomColorPermanentDoesntHaveProtectionFrom(Box<Permanent>),
  ChooseTwoBasicLandTypes,
  ChooseTwoColorWords,
  ChooseUptoNumberCardsFromAmongCardsInPlayersHandRevealedThisWay(Box<GameNumber>, Box<Cards>, Box<Player>),
  ChooseUptoNumberCardsInHand(Box<GameNumber>, Box<Cards>),
  ChooseUptoNumberExiledCards(Box<GameNumber>, CardsInExile),
  ChooseUptoNumberPermanents(Box<GameNumber>, Box<Permanents>),
  ChooseUptoNumberPermanentsForEach(Box<GameNumber>, Box<Permanents>, Box<GameNumber>),
  ChooseUptoOnePermanent(Box<Permanents>),
  ChooseUptoOnePermanentForEachPlayer(Box<Permanents>),
  ChooseWord(Vec<VoteOption>),
  Cipher(Box<Spell>),
  CircleNumberColors(Box<GameNumber>, ChoosableColor),
  ClaimThePrize,
  Clash(Box<Players>, Vec<Action>, Vec<Action>),
  CloakACardFromHand,
  CloakCardFromHand(CardInHand),
  CloakEachExiledCard(CardsInExile, Vec<EnterFlag>),
  CloakTheTopCardOfPlayersLibrary(Box<Player>),
  CollectEvidence(Box<GameNumber>),
  ConjureACardIntoGraveyard(NameString),
  ConjureACardOfChoiceFromSpellBookIntoHand(SpellBookName),
  ConjureACardOfChoiceFromSpellBookOntoBattlefield(SpellBookName, Vec<EnterFlag>),
  ConjureACardOfTypeFromSpellBookOntoBattlefield(SpellBookName, Box<CardsInOracle>, Vec<EnterFlag>),
  ConjureADuplicateOfEachPermanentIntoGraveyard(Box<Permanents>),
  ConjureADuplicateOfEachPermanentOntoTheBattlefield(Box<Permanents>, Vec<EnterFlag>),
  ConjureADuplicateOfPermanentOntoTheBattlefield(Box<Permanent>, Vec<EnterFlag>),
  ConjureADuplicateOfSpellCardOntoTheBattlefield(Box<Spell>, Vec<EnterFlag>),
  ConjureARandomCardFromSpellBookIntoExile(SpellBookName),
  ConjureARandomCardFromSpellBookIntoExileFaceDown(SpellBookName),
  ConjureARandomCardFromSpellBookIntoHand(SpellBookName),
  ConjureARandomCardFromSpellBookOntoBattlefield(SpellBookName, Vec<EnterFlag>),
  ConjureARandomCardFromSpellbookIntoTheTopNumberCardsOfLibrary(SpellBookName, Box<GameNumber>),
  ConjureARandomCardIntoExile(Box<CardsInOracle>),
  ConjureARandomCardOntoBattlefield(Box<CardsInOracle>, Vec<EnterFlag>),
  ConjureCardIntoHand(NameString),
  ConjureCardIntoLibraryNthFromTop(NameString, Box<GameNumber>),
  ConjureCardIntoTheTopNumberCardsOfLibraryAtRandom(NameString, Box<GameNumber>),
  ConjureCardOntoBattlefield(NameString, Vec<EnterFlag>),
  ConjureCardOrCardIntoHand(NameString, NameString),
  ConjureCardsIntoGraveyard(Box<GameNumber>, NameString),
  ConjureCardsOntoTheBattlefield(Vec<NameString>, Vec<EnterFlag>),
  ConjureDuplicateOfARandomCardOfTypeFromAPlayersLibraryIntoHand(Box<Cards>, Box<Players>),
  ConjureDuplicateOfARandomCardOfTypeFromPlayersLibraryIntoHand(Box<Cards>, Box<Player>),
  ConjureDuplicateOfARandomCardOfTypeIntoHand(Box<Cards>),
  ConjureDuplicateOfARandomCardOfTypeOntoBattlefield(Box<Cards>, Vec<EnterFlag>),
  ConjureDuplicateOfCardInHandIntoHand(CardInHand),
  ConjureDuplicateOfEachCardSeekedThisWayIntoHand,
  ConjureDuplicateOfEachDestroyedPermanentIntoHand(Box<Permanents>),
  ConjureDuplicateOfEachExiledCardIntoHand(Box<CardsInExile>),
  ConjureDuplicateOfEachPermanentIntoHand(Box<Permanents>),
  ConjureDuplicateOfExiledCardIntoHand(Box<CardInExile>),
  ConjureDuplicateOfExiledCardIntoPlayersGraveyard(CardInExile, Box<Player>),
  ConjureDuplicateOfExiledCardIntoTheTopNumberCardsOfLibraryAtRandom(CardInExile, Box<GameNumber>),
  ConjureDuplicateOfGraveyardCardIntoHand(Box<CardInGraveyards>),
  ConjureDuplicateOfGraveyardCardIntoPlayersGraveyard(Box<CardInGraveyards>, Box<Player>),
  ConjureDuplicateOfGraveyardCardOnTopOfPlayersLibrary(Box<CardInGraveyards>, Box<Player>),
  ConjureDuplicateOfPermanentIntoExile(Box<Permanent>),
  ConjureDuplicateOfPermanentIntoHand(Box<Permanent>),
  ConjureDuplicateOfPermanentIntoPlayersGraveyard(Box<Permanent>, Box<Player>),
  ConjureDuplicateOfPermanentIntoTopNumberCardsOfPlayersLibraryAtRandom(Box<Permanent>, Box<GameNumber>, Box<Player>),
  ConjureDuplicateOfSpellIntoHand(Box<Spell>),
  ConjureDuplicateOfThePermanentSacrificedThisWayIntoHand,
  ConjureDuplicateOfTheTopCardOfPlayersIntoHand(Box<Player>),
  ConjureDuplicatesOfNumberRandomCardsOfTypeFromPlayersLibraryIntoHand(Box<GameNumber>, Box<Cards>, Box<Player>),
  ConjureEachCardFromSpellBookIntoLibrary(SpellBookName),
  ConjureEachCardFromSpellBookOntoTheBattlefield(SpellBookName, Vec<EnterFlag>),
  ConjureMultipleCardsIntoLibraryAndShuffle(NameString, NameString, NameString),
  ConjureNumberCardsIntoHand(Box<GameNumber>, NameString),
  ConjureNumberCardsIntoLibrary(Box<GameNumber>, NameString),
  ConjureNumberCardsIntoLibraryAndShuffle(Box<GameNumber>, NameString),
  ConjureNumberCardsIntoPlayersGraveyard(Box<GameNumber>, NameString, Box<Player>),
  ConjureNumberCardsIntoTheTopNumberCardsOfEachPlayersLibraryAtRandom(Box<GameNumber>, NameString, Box<GameNumber>, Box<Players>),
  ConjureNumberCardsOfChoiceFromSpellBookIntoHand(Box<GameNumber>, SpellBookName),
  ConjureNumberCardsOnTopOfLibrary(Box<GameNumber>, NameString),
  ConjureNumberCardsOntoBattlefield(Box<GameNumber>, NameString, Vec<EnterFlag>),
  ConjureNumberDuplicateCardsIntoGraveyard(Box<GameNumber>, CardInHand),
  ConjureNumberDuplicatesOfAnOutsideCardIntoHand(Box<GameNumber>, Box<Cards>),
  ConjureNumberDuplicatesOfGraveyardCardIntoExile(Box<GameNumber>, Box<CardInGraveyards>),
  ConjureNumberRandomCardsFromSpellBookIntoHand(Box<GameNumber>, SpellBookName),
  ConjureThePowerNineIntoLibraryAndShuffle,
  ControllersSacrificeEachPermanent(Box<Permanents>),
  ConvertPermanent(Box<Permanent>),
  CopyAbilityAndMayChooseNewTargets(Ability),
  CopyAbilityForEachPermanentItCouldTarget(Ability, Box<Permanents>),
  CopyAbilityNumberTimesAndMayChooseNewTargets(Box<Ability>, Box<GameNumber>),
  CopyActivatedAbilityAndMayChooseNewTargets(ActivatedAbility),
  CopyAnExiledCard(Box<CardsInExile>),
  CopyAnExiledCardNumberTimes(CardsInExile, Box<GameNumber>),
  CopyCard(Box<SingleCard>),
  CopyCardInHand(CardInHand),
  CopyCardWithTheNotedName,
  CopyEachAbilityAndMayChooseNewTargets(Abilities),
  CopyEachSpellAndMayChooseNewTargets(Box<Spells>),
  CopyEnchantedGraveyardCard,
  CopyExiledCard(Box<CardInExile>),
  CopyExiledCardNumberTimes(CardInExile, Box<GameNumber>),
  CopyExiledCards(Box<CardsInExile>),
  CopyNumberCardsAtRandom(Box<GameNumber>, Box<Cards>),
  CopySpell(Box<Spell>),
  CopySpellAndMayChooseNewTargets(Box<Spell>),
  CopySpellAndMayChooseNewTargetsWithEffects(Box<Spell>, Vec<SpellEffect>),
  CopySpellAndMustChooseNewTarget(Box<Spell>, Box<Permanent>),
  CopySpellAndRandomlyChooseNewTargetsExceptFor(Box<Spell>, PlayersAndPermanents),
  CopySpellForEach(Box<Spell>, Box<GameNumber>),
  CopySpellForEachAndMayChooseNewTargets(Box<Spell>, Box<GameNumber>),
  CopySpellForEachOtherPermanentOrPlayerAndMustChooseThemAsNewTarget(Box<Spell>),
  CopySpellForEachPermanentAndMustChooseItAsNewTarget(Box<Spell>, Box<Permanents>),
  CopySpellForEachPlayerAndMustChooseNewTargetPermanentTheyControl(Box<Spell>, Box<Players>),
  CopySpellForEachPlayerAndMustChooseThemAsNewTarget(Box<Spell>, Box<Players>),
  CopySpellForEachSpellPermanentCardAndOrPlayerItCouldTarget(Box<Spell>),
  CopySpellNumberTimes(Box<Spell>, Box<GameNumber>),
  CopySpellNumberTimesAndMayChooseNewTargets(Box<Spell>, Box<GameNumber>),
  CopySpellOrAbilityAndMayChooseNewTargets(SpellOrAbility),
  CopySpellOrAbilityForEachPermanentOrPlayerItCouldTarget(SpellOrAbility),
  CopySpellOrAbilityNumberTimesAndMayChooseNewTargets(SpellOrAbility, Box<GameNumber>),
  CopySpellWithModifiers(Box<Spell>, Vec<SpellEffect>),
  CounterAbility(Ability),
  CounterEachAbility(Abilities),
  CounterEachSpell(Box<Spells>),
  CounterEachSpellAndAbility(SpellsAndAbilities),
  CounterSpell(Box<Spell>),
  CounterSpellAndSpellsOfTypeAreCounteredOntoTheBattlefield(Box<Spell>, Box<Spells>, Vec<EnterFlag>),
  CounterSpellIntoBottomOfLibrary(Box<Spell>),
  CounterSpellIntoExile(Box<Spell>),
  CounterSpellIntoExileWithANumberOfCountersAndWithEffects(Box<Spell>, Box<GameNumber>, CounterType, Vec<ExiledCardEffect>),
  CounterSpellIntoHand(Box<Spell>),
  CounterSpellIntoTopOfLibrary(Box<Spell>),
  CounterSpellIntoTopOrBottomOfLibrary(Box<Spell>),
  CounterSpellOrAbility(SpellOrAbility),
  CreateCardInHandEffectUntil(Box<CardInHand>, Vec<CardEffect>, Box<Expiration>),
  CreateCopiesOfRandomCardsWithManaCosts(Box<GameNumber>),
  CreateEachCardInPlayersGraveyardEffectUntil(Box<Cards>, Box<Player>, Vec<GraveyardCardEffect>, Expiration),
  CreateEachExiledCardEffect(CardsInExile, Vec<ExiledCardEffect>),
  CreateEachPermanentLayerEffect(Box<Permanents>, Vec<LayerEffect>),
  CreateEachPermanentLayerEffectUntil(Box<Permanents>, Vec<LayerEffect>, Expiration),
  CreateEachPermanentRuleEffect(Box<Permanents>, Vec<PermanentRule>),
  CreateEachPermanentRuleEffectUntil(Box<Permanents>, Vec<PermanentRule>, Expiration),
  CreateEachPlayerEffectUntil(Box<Players>, Vec<PlayerEffect>, Expiration),
  CreateEachSpellEffect(Box<Spells>, Vec<SpellEffect>, Expiration),
  CreateExiledCardEffect(CardInExile, Vec<ExiledCardEffect>),
  CreateFuturePlayerEffect(Box<Player>, FuturePlayerEffect),
  CreateFuturePreventDamage(FutureEventPreventDamage, Vec<ActionPreventDamage>),
  CreateFutureReplaceWouldAdapt(FutureReplacableEventWouldAdapt, Vec<ReplacementActionWouldAdapt>),
  CreateFutureReplaceWouldDealDamage(FutureReplacableEventWouldDealDamage, Vec<ReplacementActionWouldDealDamage>),
  CreateFutureReplaceWouldDestroy(FutureReplacableEventWouldDestroy, Vec<ReplacementActionWouldDestroy>),
  CreateFutureReplaceWouldDraw(FutureReplacableEventWouldDraw, Vec<ReplacementActionWouldDraw>),
  CreateFutureReplaceWouldEnter(FutureReplacableEventWouldEnter, Vec<ReplacementActionWouldEnter>),
  CreateFutureReplaceWouldLeaveTheBattlefield(FutureReplacableEventWouldLeaveTheBattlefield, Vec<ReplacementActionWouldLeaveTheBattlefield>),
  CreateFutureReplaceWouldLoseTheGame(FutureReplacableEventWouldLoseTheGame, Vec<ReplacementActionWouldLoseTheGame>),
  CreateFutureReplaceWouldRollDice(FutureReplacableEventWouldRollDice, Vec<ReplacementActionWouldRollDice>),
  CreateFutureReplaceWouldSetASchemeInMotion(FutureReplacableEventWouldSetASchemeInMotion, Vec<ReplacementActionWouldSetASchemeInMotion>),
  CreateFutureSpellEffect(FutureSpell, Vec<SpellEffect>),
  CreateFutureTrigger(FutureTrigger, Box<Actions>),
  CreateFutureTriggerI(FutureTrigger, Condition, Box<Actions>),
  CreateFutureTrigger_UnlessPlayerPaysManaBefore(FutureTrigger, Box<Actions>, Box<Player>, ManaCost),
  CreateGameEffect(Expiration, GameEffect),
  CreateGraveyardCardEffectUntil(Box<CardInGraveyards>, Vec<GraveyardCardEffect>, Expiration),
  CreateGroupExileEffect(Expiration, CardsInExile, Vec<GroupExiledEffect>),
  CreateLimitedSpellEffect(Expiration, Box<Spell>, Vec<SpellEffect>),
  CreatePermanentLayerEffect(Box<Permanent>, Vec<LayerEffect>),
  CreatePermanentLayerEffectUntil(Box<Permanent>, Vec<LayerEffect>, Expiration),
  CreatePermanentRuleEffect(Box<Permanent>, Vec<PermanentRule>),
  CreatePermanentRuleEffectUntil(Box<Permanent>, Vec<PermanentRule>, Expiration),
  CreatePermanentSpellLayerEffect(Expiration, Box<Spell>, Vec<LayerEffect>),
  CreatePermanentsList(Box<Permanents>),
  CreatePerpetualAllCardsEffect(Box<Cards>, Vec<PerpetualEffect>),
  CreatePerpetualCardInHandEffect(CardInHand, Vec<PerpetualEffect>),
  CreatePerpetualCardInLibraryEffect(CardInLibrary, Vec<PerpetualEffect>),
  CreatePerpetualCardsInEachPlayersHandEffect(Box<CardsInHand>, Box<Players>, Vec<PerpetualEffect>),
  CreatePerpetualCardsInHandEffect(Box<CardsInHand>, Vec<PerpetualEffect>),
  CreatePerpetualCardsInPlayersGraveyardEffect(Box<CardsInGraveyards>, Box<Player>, Vec<PerpetualEffect>),
  CreatePerpetualCardsInPlayersHandAndCardsInPlayersLibraryEffect(CardsInHand, Box<Players>, CardsInLibrary, Box<Players>, Vec<PerpetualEffect>),
  CreatePerpetualCardsInPlayersHandEffect(Box<CardsInHand>, Box<Player>, Vec<PerpetualEffect>),
  CreatePerpetualCardsInPlayersLibraryEffect(CardsInLibrary, Box<Player>, Vec<PerpetualEffect>),
  CreatePerpetualDeadCardEffect(Vec<PerpetualEffect>),
  CreatePerpetualEachExiledCardEffect(CardsInExile, Vec<PerpetualEffect>),
  CreatePerpetualEachGraveyardCardEffect(Box<CardsInGraveyards>, Vec<PerpetualEffect>),
  CreatePerpetualEachPermanentEffect(Box<Permanents>, Vec<PerpetualEffect>),
  CreatePerpetualExiledCardEffect(CardInExile, Vec<PerpetualEffect>),
  CreatePerpetualGraveyardCardEffect(Box<CardInGraveyards>, Vec<PerpetualEffect>),
  CreatePerpetualPermanentEffect(Box<Permanent>, Vec<PerpetualEffect>),
  CreatePerpetualPermanentOrGraveyardCardEffect(Box<Permanent>, Box<CardInGraveyards>, Vec<PerpetualEffect>),
  CreatePerpetualSacrificedCardEffect(Vec<PerpetualEffect>),
  CreatePerpetualSpellEffect(Box<Spell>, Vec<PerpetualEffect>),
  CreatePlayerEffect(Box<Player>, Vec<PlayerEffect>),
  CreatePlayerEffectUntil(Box<Player>, Vec<PlayerEffect>, Expiration),
  CreatePreventDamageUntil(EventPreventDamage, Vec<ActionPreventDamage>, Expiration),
  CreateReplaceAnyNumberOfTokensWouldBeCreatedUntil(ReplacableEventAnyNumberOfTokensWouldBeCreated, Vec<ReplacementActionAnyNumberOfTokensWouldBeCreated>, Expiration),
  CreateReplaceTokensWouldBeCreatedUnderAPlayersControlUntil(ReplacableEventTokensWouldBeCreatedUnderAPlayersControl, Vec<ReplacementActionTokensWouldBeCreatedUnderAPlayersControl>, Expiration),
  CreateReplaceWouldDealDamageUntil(ReplacableEventWouldDealDamage, Vec<ReplacementActionWouldDealDamage>, Expiration),
  CreateReplaceWouldDrawUntil(ReplacableEventWouldDraw, Vec<ReplacementActionWouldDraw>, Expiration),
  CreateReplaceWouldEnterUntil(ReplacableEventWouldEnter, Vec<ReplacementActionWouldEnter>, Expiration),
  CreateReplaceWouldGainLifeUntil(ReplacableEventWouldGainLife, Vec<ReplacementActionWouldGainLife>, Expiration),
  CreateReplaceWouldLeaveTheBattlefieldUntil(ReplacableEventWouldLeaveTheBattlefield, Vec<ReplacementActionWouldLeaveTheBattlefield>, Expiration),
  CreateReplaceWouldMaskUntil(ReplacableEventWouldMask, Vec<ReplacementActionWouldMask>, Expiration),
  CreateReplaceWouldPlaneswalkUntil(ReplacableEventWouldPlaneswalk, Vec<ReplacementActionWouldPlaneswalk>, Expiration),
  CreateReplaceWouldProduceManaUntil(ReplacableEventWouldProduceMana, Vec<ReplacementActionWouldProduceMana>, Expiration),
  CreateReplaceWouldPutCountersUntil(ReplacableEventWouldPutCounters, Vec<ReplacementActionWouldPutCounters>, Expiration),
  CreateReplaceWouldPutIntoGraveyardUntil(ReplacableEventWouldPutIntoGraveyard, Vec<ReplacementActionWouldPutIntoGraveyard>, Expiration),
  CreateSpellEffect(Box<Spell>, Vec<SpellEffect>),
  CreateSpellOrPermanentEffect(Expiration, SpellOrPermanent, Vec<SpellOrPermanentEffect>),
  CreateTokens(Vec<CreatableToken>),
  CreateTokensWithFlags(Vec<CreatableToken>, Vec<TokenFlag>),
  CreateTrigger(Trigger, Box<Actions>),
  CreateTriggerOnce(Expiration, Trigger, Box<Actions>),
  CreateTriggerUntil(Trigger, Box<Actions>, Expiration),
  CreateTriggerUntilI(Trigger, Condition, Box<Actions>, Expiration),
  CreateValueX(Box<GameNumber>),
  CreatureConnives(Box<Permanent>),
  CreatureConnivesNumber(Box<Permanent>, Box<GameNumber>),
  CreatureMustAttackDuringControllersNextCombatPhase(Box<Permanent>),
  DeadGuestPermanentDealsDamage(Box<GameNumber>, Box<DamageRecipient>),
  DeadPermanentDealsDamage(Box<GameNumber>, Box<DamageRecipient>),
  DeadPermanentDealsDistributedDamage,
  DestroyAPermanentAtRandom(Box<Permanents>),
  DestroyAPermanentNoRegen(Box<Permanents>),
  DestroyEachPermanent(Box<Permanents>),
  DestroyEachPermanentNoRegen(Box<Permanents>),
  DestroyEachPermanentNoRegenSubset(Box<Permanents>, Box<Permanents>),
  DestroyNumberPermanents(Box<GameNumber>, Box<Permanents>),
  DestroyPermanent(Box<Permanent>),
  DestroyPermanentNoRegen(Box<Permanent>),
  DestroyUptoNumberPermanents(Box<GameNumber>, Box<Permanents>),
  DestroyUptoOnePermanentEachPlayerControls(Box<Permanents>, Box<Players>),
  DetainEachPermanent(Box<Permanents>),
  DetainPermanent(Box<Permanent>),
  DigitallySearchLibrary(Vec<SearchLibraryAction>),
  DiscardACard,
  DiscardACardAtRandom,
  DiscardACardOfType(Box<Cards>),
  DiscardAllButNumberCards(Box<GameNumber>),
  DiscardAnyNumberOfCards,
  DiscardAnyNumberOfCardsAtRandom,
  DiscardAnyNumberOfCardsOfType(Box<Cards>),
  DiscardCard(CardInHand),
  DiscardCards(Box<CardsInHand>),
  DiscardEachCard(Box<CardsInHand>),
  DiscardHand,
  DiscardNumberCards(Box<GameNumber>),
  DiscardNumberCardsAtRandom(Box<GameNumber>),
  DiscardNumberCardsDrawnThisTurn(Box<GameNumber>),
  DiscardNumberCardsOfType(Box<GameNumber>, Box<Cards>),
  DiscardTheCardDrawnThisWay,
  DiscardTheCardRevealedThisWay,
  DiscardUptoNumberCards(Box<GameNumber>),
  DiscardedCardDealsDamage(CardInHand, Box<GameNumber>, Box<DamageRecipient>),
  Discover(Box<GameNumber>),
  DistrbuteUptoNumberArtStickersAmongAnyNumberOfPermanents(Box<GameNumber>, Box<Permanents>),
  DoNothing,
  DoubleCreaturesPowerAndToughnessUntilEndOfTurn(Box<Permanent>),
  DoubleCreaturesPowerNumberTimesUntilEndOfTurn(Box<Permanent>, Box<GameNumber>),
  DoubleCreaturesPowerUntilEndOfTurn(Box<Permanent>),
  DoubleEachCreaturesPowerAndToughnessUntilEndOfTurn(Box<Permanents>),
  DoubleEachCreaturesPowerUntilEndOfTurn(Box<Permanents>),
  DoubleEachCreaturesToughnessUntilEndOfTurn(Box<Permanents>),
  DoubleEachTypeOfUnspentMana,
  DoubleTheStake,
  DoubleXValueOfSpell(Box<Spell>),
  DraftACardFromSpellBook(SpellBookName),
  DraftACardFromSpellBookNumberTimes(SpellBookName, Box<GameNumber>),
  DrawACard,
  DrawNumberCards(Box<GameNumber>),
  DrawNumberCardsForEach(Box<GameNumber>, Box<GameNumber>),
  DrawNumberCardsThenDiscardNumberOfThem(Box<GameNumber>, Box<GameNumber>),
  DrawTheGame,
  DrawUptoNumberCards(Box<GameNumber>),
  DuringNextUntap(Box<Player>, Vec<Action>),
  EachCreatureConnives(Box<Permanents>),
  EachPermanentDealsDamage(Box<Permanents>, Box<GameNumber>, DamageRecipient),
  EachPermanentDoesntUntapDuringControllersNextUntap(Box<Permanents>),
  EachPlayerAction(Box<Players>, Box<Action>),
  EachPlayerActions(Box<Players>, Vec<Action>),
  EachPlayerCantCastSpellsDuringTheirNextTurn(Box<Players>, Box<Spells>),
  EachPlayerChoosesAnAction(Box<Players>, Vec<Action>),
  EachPlayerMakesAVillainousChoice(Box<Players>, Vec<Vec<Action>>),
  EachPlayerMayAction(Box<Players>, Box<Action>),
  EachPlayerMayActions(Box<Players>, Vec<Action>),
  EachPlayerMayCost(Box<Players>, Box<Cost>),
  EachPlayerMustCost(Box<Players>, Box<Cost>),
  EachPlayerRepeatedMayCost(Box<Players>, Box<GameNumber>, Box<Cost>),
  EachPlayerRevealsCardsFromTheTopOfTheirLibraryUntilTheyRevealACardOfType(Box<Players>, Box<Cards>, Vec<RevealTheTopNumberCardsOfLibraryAction>),
  EachPlayerStartingWithAction(Box<Players>, Box<Player>, Vec<Action>),
  EachPlayerStartingWithActionInDirection(Box<Players>, Box<Player>, Direction, Vec<Action>),
  EachPlayerStartingWithMayAction(Box<Players>, Box<Player>, Box<Action>),
  Earthbend(Box<Permanent>, Box<GameNumber>),
  EmblemDealsDamage(Emblem, Box<GameNumber>, Box<DamageRecipient>),
  EndTheCombatPhase,
  EndTheTurn,
  EndureWithPermanent(Box<GameNumber>, Box<Permanent>),
  Epic,
  ExchangeAnteCardWithTopCardOfPlayersLibrary(AnteCard, Box<Player>),
  ExchangeControl(Box<Permanent>, Box<Permanent>),
  ExchangeControlOfEachPermanentWithPlayer(Box<Permanents>, Box<Player>),
  ExchangeControlOfEachPermanentWithPlayerUntil(Box<Permanents>, Box<Player>, Expiration),
  ExchangeControlOfSpellAndPermanent(Box<Spell>, Box<Permanent>),
  ExchangeGraveyardAndLibrary,
  ExchangeHandAndGraveyard,
  ExchangeHandAndLibraryThenShuffle,
  ExchangeLifeTotalWithPermanentsPower(Box<Permanent>),
  ExchangeLifeTotalWithPermanentsToughness(Box<Permanent>),
  ExchangeLifeTotalWithPlayer(Box<Player>),
  ExchangeOwnershipOfTwoCards(ExchangeOwnershipCard, ExchangeOwnershipCard),
  ExchangePowerOfTwoCreaturesUntil(Box<Permanent>, Box<Permanent>, Expiration),
  ExchangeTextBoxesOfTwoPermanentsUntil(Box<Permanent>, Box<Permanent>, Expiration),
  Exile(Vec<Exilable>),
  ExileACardFromEachPlayersGraveyard(Box<CardsInGraveyards>, Box<Players>),
  ExileACardFromHand,
  ExileACardFromHandAtRandom,
  ExileACardFromHandFaceDown,
  ExileACardFromHandOrGraveyard(Box<Cards>),
  ExileACardFromHandUntil(Expiration),
  ExileACardFromPlayersGraveyardAtRandom(Box<CardsInGraveyards>, Box<Player>),
  ExileACardFromPlayersHandOrGraveyard(Box<Cards>, Box<Player>),
  ExileACardFromPlayersRevealedHand(Box<Cards>, Box<Player>),
  ExileACardOfTypeFromHand(Box<Cards>),
  ExileACardOfTypeFromHandWithANumberOfCountersOfType(Box<Cards>, Box<GameNumber>, CounterType),
  ExileACardOfTypeFromPlayersLibraryAtRandom(Box<Cards>, Box<Player>),
  ExileAGraveyardCard(Box<CardsInGraveyards>),
  ExileAPermanent(Box<Permanents>),
  ExileAPermanentUntil(Box<Permanents>, Expiration),
  ExileAllCardsInPlayersLibrary(Box<Player>),
  ExileAllCardsOfTypeFromLibrary(CardsInLibrary),
  ExileAllLibraryCards,
  ExileAllLibraryCardsFaceDown,
  ExileAnyNumberOfCardsFromHandFaceDown,
  ExileAnyNumberOfCardsFromPlayersGraveyard(Box<Cards>, Box<Player>),
  ExileAnyNumberOfPermanents(Box<Permanents>),
  ExileAnyNumberOfPermanentsUntil(Box<Permanents>, Expiration),
  ExileBottomCardOfOtherLibrariesFaceDown(Box<Players>),
  ExileBottomCardOfPlayersGraveyard(Box<Cards>, Box<Player>),
  ExileBottomCardOfTypeFromLibrary(Box<Cards>),
  ExileCardFromHand(CardInHand),
  ExileCardFromHandAndGraveyardCard(CardInHand, Box<CardInGraveyards>),
  ExileCardFromHandFaceDown(CardInHand),
  ExileCardsFromHand(Box<CardsInHand>),
  ExileCardsFromTheTopOfLibraryUntilACardOfTypeIsExiled(Box<Cards>),
  ExileCardsFromTheTopOfLibraryUntilANumberOfCardsOfTypeAreExiled(Box<GameNumber>, Box<Cards>),
  ExileCardsInGraveyardDiscardedThisWay,
  ExileEachCardFromEachPlayersGraveyard(Box<Cards>, Box<Players>),
  ExileEachCardFromHandAndGraveyard(Box<Cards>),
  ExileEachCardFromPlayersGraveyard(Box<Cards>, Box<Player>),
  ExileEachCardFromPlayersGraveyardInShuffledFaceDownPile(Box<Cards>, Box<Player>),
  ExileEachCardFromPlayersGraveyardUntil(Box<Cards>, Box<Player>, Expiration),
  ExileEachCardOfTypeFromPlayersHand(Box<Cards>, Box<Player>),
  ExileEachGraveyardCard(Box<CardsInGraveyards>),
  ExileEachPermanent(Box<Permanents>),
  ExileEachPermanentAndGraveyardCard(PermanentsAndGraveyardCards),
  ExileEachPermanentInAShuffledFaceDownPile(Box<Permanents>),
  ExileEachPermanentUntil(Box<Permanents>, Expiration),
  ExileEachPermanentUntilWithTriggerEntersUnderPlayersControl(Box<Permanents>, Expiration, Box<Player>, Box<Actions>),
  ExileEachPlayersGraveyard(Box<Players>),
  ExileEachPlayersHand(Box<Players>),
  ExileEachSpell(Box<Spells>),
  ExileEnchantedGraveyardCard,
  ExileGraveyardCard(Box<CardInGraveyards>),
  ExileGraveyardCardEachCardInEachPlayersGraveyardAndEachPermanent(Box<CardInGraveyards>, Box<Cards>, Box<Players>, Box<Permanents>),
  ExileGraveyardCardWithACounterOfType(Box<CardInGraveyards>, CounterType),
  ExileGraveyardCardWithNumberCountersOfType(Box<CardInGraveyards>, Box<GameNumber>, CounterType),
  ExileHand,
  ExileHandFaceDown,
  ExileInShuffledFaceDownPile(Vec<Exilable>),
  ExileNumberCardsFromHand(Box<GameNumber>),
  ExileNumberCardsFromLibraryFaceDownAtRandom(Box<GameNumber>),
  ExileNumberGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
  ExileNumberPermanents(Box<GameNumber>, Box<Permanents>),
  ExileNumberPermanentsCardsFromHandOrCardsFromGraveyard(Box<GameNumber>, Box<Permanents>, Box<Cards>, Box<Cards>),
  ExilePermanent(Box<Permanent>),
  ExilePermanentAndEachPermanentAndEachCardFromEachPlayersGraveyard(Box<Permanent>, Box<Permanents>, Box<Cards>, Box<Players>),
  ExilePermanentAndEachPermanentUntil(Box<Permanent>, Box<Permanents>, Expiration),
  ExilePermanentAndTheTopCardOfPlayersLibraryInShuffledFaceDownPile(Box<Permanent>, Box<Player>),
  ExilePermanentFaceDown(Box<Permanent>),
  ExilePermanentUntil(Box<Permanent>, Expiration),
  ExilePermanentWithACounter(Box<Permanent>, CounterType),
  ExilePermanentWithANumberOfCounters(Box<Permanent>, Box<GameNumber>, CounterType),
  ExilePermanentsAndMeldIntoNewPermanent(Box<Permanent>, Box<Permanents>, NameString, Vec<EnterFlag>),
  ExilePermanentsControlledByOrCardsFromHand(Box<Players>, Box<Permanents>, Box<Cards>, Box<GameNumber>),
  ExilePlayersGraveyard(Box<Player>),
  ExilePlayersHand(Box<Player>),
  ExilePlayersHandFaceDown(Box<Player>),
  ExileSinglePermanentAndEachPermanent(Box<Permanent>, Box<Permanents>),
  ExileSpell(Box<Spell>),
  ExileSpellWithANumberOfCountersOnIt(Box<Spell>, Box<GameNumber>, CounterType),
  ExileTheBottomNumberCardsOfLibrary(Box<GameNumber>),
  ExileTheCardRevealedThisWay,
  ExileTheTopCardOfPlayersLibrary(Box<Player>),
  ExileTheTopCardOfPlayersLibraryFaceDown(Box<Player>),
  ExileTheTopNumberCardsOfLibrary(Box<GameNumber>),
  ExileTheTopNumberCardsOfLibraryFaceDown(Box<GameNumber>),
  ExileTheTopNumberCardsOfLibraryInFaceDownPile(Box<GameNumber>),
  ExileTheTopNumberCardsOfLibraryInFaceUpPile(Box<GameNumber>),
  ExileTheTopNumberCardsOfPlayersLibrary(Box<GameNumber>, Box<Player>),
  ExileTopCardOfEachPlayersLibraries(Box<Players>),
  ExileTopCardOfEachPlayersLibrariesFaceDown(Box<Players>),
  ExileTopCardOfEachPlayersLibrariesWithACounterOfType(Box<Players>, CounterType),
  ExileTopCardOfLibrary,
  ExileTopCardOfLibraryFaceDown,
  ExileTopCardOfOtherLibraries(Box<Players>),
  ExileTopCardOfOtherLibrariesFaceDown(Box<Players>),
  ExileTopCardsOfLibraryUntilASingleCardOfTypeIsExiled(Box<Cards>),
  ExileTopCardsOfLibraryUntilGroupCardsAreExiled(GroupFilter),
  ExileTopNumberCardsOfOtherLibraryFaceDown(Box<GameNumber>, Box<Player>),
  ExileTopOfLibraryForEachPlayerOrPermanentWithAction(PlayersAndPermanents, Box<Action>),
  ExileTwoPermanents(Box<Permanent>, Box<Permanent>),
  ExileUptoNumberCardsOfTypeMilledThisWay(Box<GameNumber>, Box<Cards>),
  ExileUptoOneCardFromEachPlayersGraveyard(Box<Cards>, Box<Players>),
  ExileUptoOneCardOfEachCardTypeFromPlayersGraveyard(Box<Player>),
  ExiledCardDealsDamage(CardInExile, Box<GameNumber>, Box<DamageRecipient>),
  ExploreWithEachPermanent(Box<Permanents>),
  ExploreWithPermanent(Box<Permanent>),
  ExploreWithPermanentNumberTimes(Box<Permanent>, Box<GameNumber>),
  FaceAVillianousChoice(Vec<Vec<Action>>),
  Fateseal(Box<GameNumber>),
  Fight(Box<Permanent>, Box<Permanent>),
  FlipACoin,
  FlipACoinAndCallIt,
  FlipACoinForEachPermanent(Box<Permanents>),
  FlipACoinNumberTimesOrUntilLose(Box<GameNumber>),
  FlipACoinUntilLose,
  FlipACoinUntilLoseOrStop,
  FlipACoin_OnHeadAndOnTails(Vec<Action>, Vec<Action>),
  FlipACoin_OnLose(Vec<Action>),
  FlipACoin_OnWin(Vec<Action>),
  FlipACoin_OnWinAndLose(Vec<Action>, Vec<Action>),
  FlipCoins(Box<GameNumber>),
  FlipPermanent(Box<Permanent>),
  ForEachPermanentConjureCardOntoBattlefield(Box<Permanents>, NameString, Vec<EnterFlag>),
  ForEachPermanentCreateTokens(Box<Permanents>, Vec<CreatableToken>),
  ForEachPermanentCreateTokensWithFlags(Box<Permanents>, Vec<CreatableToken>, Vec<TokenFlag>),
  ForEachPlayerChooseAWord(Box<Players>, Vec<VoteOption>),
  ForEachPlayerCreateTokens(Box<Players>, Vec<CreatableToken>),
  ForEachPlayerCreateTokensWithFlags(Box<Players>, Vec<CreatableToken>, Vec<TokenFlag>),
  ForEachPlayerSearchLibrary(Box<Players>, Vec<SearchLibraryAction>),
  ForEachValueInRangeConjureDuplicateOfARandomCardOfTypeOntoBattlefield(Box<GameNumber>, Box<GameNumber>, Box<Cards>, Vec<EnterFlag>),
  Forage,
  GainControlOfAPermanentControlledByEachPlayer(Box<Permanents>, Box<Players>),
  GainControlOfAPermanentUntil(Box<Permanents>, Expiration),
  GainControlOfEachPermanent(Box<Permanents>),
  GainControlOfEachPermanentUntil(Box<Permanents>, Expiration),
  GainControlOfPermanent(Box<Permanent>),
  GainControlOfPermanentUntil(Box<Permanent>, Expiration),
  GainControlOfPlayerDuringTheirNextCombatStep(Box<Player>),
  GainControlOfPlayerDuringTheirNextTurn(Box<Player>),
  GainControlOfSpellAndMayChooseNewTargets(Box<Spell>),
  GainControlOfSpellAndRandomlyChooseNewTargetsExceptFor(Box<Spell>, PlayersAndPermanents),
  GainLife(Box<GameNumber>),
  GainLifeAndLifeForEach(Box<GameNumber>, Box<GameNumber>, Box<GameNumber>),
  GainLifeForEach(Box<GameNumber>, Box<GameNumber>),
  GetANumberTimeBoon(Box<GameNumber>, Trigger, Box<Actions>),
  GetAnEmblem(Vec<Rule>),
  GetEnergy(Box<GameNumber>),
  GetNumberTickets(Box<GameNumber>),
  GetOneTimeBoon(Trigger, Box<Actions>),
  GetOneTimeConditionalBoon(Trigger, Condition, Box<Actions>),
  GoadCreature(Box<Permanent>),
  GoadCreatureUntil(Box<Permanent>, Expiration),
  GoadEachCreature(Box<Permanents>),
  GraveyardCardDealsDamage(Box<CardInGraveyards>, Box<GameNumber>, Box<DamageRecipient>),
  GraveyardCardDealsMultipleDamage(Box<CardInGraveyards>, Vec<DamageToRecipients>),
  GuessIfACardIsInPlayersHand(Box<Cards>, Box<Player>),
  GuessIfCardInHandPassesFilter(CardInHand, Box<Cards>),
  GuessWhichNumberWasSecretlyChosen,
  HarnessPermanent(Box<Permanent>),
  HaveDeadPermanentDealDamage(Box<GameNumber>, Box<DamageRecipient>),
  HaveDiscardedCardDealDamage(CardInHand, Box<GameNumber>, Box<DamageRecipient>),
  HaveEachPlayerLoseLife(Box<Players>, Box<GameNumber>),
  HavePermanentDealDamage(Box<Permanent>, Box<GameNumber>, Box<DamageRecipient>),
  HavePlayerTakeAction(Box<Player>, Box<Action>),
  HeistPlayersLibrary(Box<Player>),
  If(Condition, Vec<Action>),
  IfElse(Condition, Vec<Action>, Vec<Action>),
  IfHavePlayerAction(Box<Player>, Box<Action>, Vec<Action>),
  Incubate(Box<GameNumber>),
  IncubateNumberTimes(Box<GameNumber>, Box<GameNumber>),
  IntensifyCard(Box<SingleCard>),
  IntensifyPermanent(Box<Permanent>),
  Investigate,
  InvestigateTimes(Box<GameNumber>),
  Learn,
  LockOrUnlockADoorOfPermanent(Box<Permanent>),
  LookAtARandomCardInPlayersHand(Box<Player>),
  LookAtCardsOfTypeInPlayersHand(Box<Cards>, Box<Player>),
  LookAtEachFaceDownPermanent(Box<Permanents>),
  LookAtFaceDownExiledCards(Box<CardsInExile>),
  LookAtFaceDownPermanent(Box<Permanent>),
  LookAtPlayersHand(Box<Player>),
  LookAtPlayersHandAndChooseACardForPlayerToPlayControllingThemToDoSo(Box<Player>, Box<Cards>),
  LookAtPlayersHandAndChooseACardToDiscard(Box<Player>, Box<Cards>),
  LookAtPlayersHandAndChooseACardToPutOnBattlefield(Box<Player>, Box<Cards>, Vec<EnterFlag>),
  LookAtPlayersHandAndChooseNumCardsToDiscard(Box<Player>, Box<GameNumber>, Box<Cards>),
  LookAtPlayersHandAndChooseNumberCardsToPutOnTopOfTheirLibraryInAnyOrder(Box<Player>, Box<GameNumber>, Box<Cards>),
  LookAtPlayersHandAndMayChooseACardToCastWithoutPaying(Box<Player>, Box<Cards>),
  LookAtTheTopCardOfEachPlayersLibrary(Box<Players>),
  LookAtTheTopCardOfPlayersLibrary(Box<Player>),
  LookAtTheTopNumberCardsOfLibrary(Box<GameNumber>, Vec<LookAtTopOfLibraryAction>),
  LookAtTheTopNumberCardsOfPlayersLibrary(Box<Player>, Box<GameNumber>, Vec<LookAtTopOfLibraryAction>),
  LookAtTopOfLibrary,
  LoseLife(Box<GameNumber>),
  LoseLifeAndLifeForEach(Box<GameNumber>, Box<GameNumber>, Box<GameNumber>),
  LoseLifeForEach(Box<GameNumber>, Box<GameNumber>),
  LoseTheGame,
  LoseUnspentMana,
  Loyalty(i32),
  ManifestACardFromHand,
  ManifestCardFromHand(Box<CardInHand>),
  ManifestDread,
  ManifestDreadNumberTimes(Box<GameNumber>),
  ManifestEachCardOfTypeFromHand(Box<CardsInHand>),
  ManifestEachExiledCard(Box<CardsInExile>),
  ManifestNumberCardsFromHand(Box<GameNumber>),
  ManifestTheTopCardOfPlayersLibrary(Box<Player>),
  ManifestTheTopNumberCardsOfPlayersLibrary(Box<GameNumber>, Box<Player>),
  MayAction(Box<Action>),
  MayActionOnceEachTurn(Box<Action>),
  MayActions(Vec<Action>),
  MayCastASpellFromAmongGraveyardCardsIntoExileOrBattlefield(Box<Spells>, Box<CardsInGraveyards>),
  MayCastASpellFromEachPlayersGraveyardWithoutPayingIntoExile(Box<Spells>, Box<Players>),
  MayCastASpellFromGraveyardIntoExile(Box<Spells>, Box<Player>),
  MayCastGraveyardCardAndMaySpendManaAsThoughAnyType(Box<CardInGraveyards>),
  MayCastGraveyardCardIntoExileAndMaySpendManaAsThoughAnyType(Box<CardInGraveyards>),
  MayCost(Box<Cost>),
  MayHavePlayerAction(Box<Player>, Box<Action>),
  MayPutACardFromHandOrGraveyardOnBattlefieldForEachPermanent(Box<Cards>, Vec<EnterFlag>, Box<Permanents>),
  MayPutTheTopCardOfPlayersLibraryOfTypeInGraveyardForCost(Box<Player>, Box<Cards>, Box<Cost>),
  MayReflexiveAction(Box<Cost>),
  MayReflexiveActionTrigger(ReflexiveAction, Box<Actions>),
  MayReselectWhichPlayerOrPermanentEachCreatureIsAttacking(Box<Permanents>),
  MillACard,
  MillCardsUntilACardOfTypeIsMilledOrUntilNumberCardsHaveBeenPutIntoGraveyardThisWay(Box<Cards>, Box<GameNumber>),
  MillNumberCards(Box<GameNumber>),
  Monstrosity(Box<GameNumber>),
  MoveCounters(Vec<MoveCountersAction>),
  MultiFight(Box<Permanents>, Box<Permanents>),
  MustCost(Box<Cost>),
  NoteAnUnnotedCreatureType(ChoosableCreatureType),
  NoteCountersOnPermanent(Box<Permanent>),
  NoteManaTypeAndAmountSpentToActivateThisAbility,
  NoteNumber(Box<GameNumber>),
  NoteTypeOfManaSpentToActivateThisAbility,
  NumberEachPermanentStartingFromZero(Box<Permanents>),
  OnlyAllowedAttackersDuringTheAdditionalCombatStepAddedThisWay(Box<Permanents>),
  OnlyAllowedAttackersUntilEndOfTurn(Box<Permanents>),
  OnlyAllowedAttackingPlayersUntilEndOfTurn(Box<Players>),
  OnlyAllowedBlockersUntilEndOfTurn(Box<Permanents>),
  OnlyAllowedCastingPlayersUntilEndOfTurn(Box<Players>),
  OpenAnAttraction,
  OpenNumberAttractions(Box<GameNumber>),
  Paradigm(Box<Spell>),
  PayAnyAmountOfEnergy,
  PayAnyAmountOfLife,
  PayAnyAmountOfMana,
  PermanentDealsDamage(Box<Permanent>, Box<GameNumber>, Box<DamageRecipient>),
  PermanentDealsDamageAndPermanentDealsDamage(Box<Permanent>, Box<GameNumber>, DamageRecipient, Box<Permanent>, Box<GameNumber>, DamageRecipient),
  PermanentDealsDamageAndPreventSomeOfIt(Box<Permanent>, Box<GameNumber>, Box<DamageRecipient>, Box<GameNumber>),
  PermanentDealsDamageDividedAsPlayerChooses(Box<Permanent>, Box<GameNumber>, Box<DamageRecipient>, Box<Player>),
  PermanentDealsDamageExcessReplacable(Box<Permanent>, Box<GameNumber>, Box<DamageRecipient>, Vec<Action>),
  PermanentDealsDamageForEach(Box<Permanent>, Box<GameNumber>, Box<DamageRecipient>, Box<GameNumber>),
  PermanentDealsDistributedDamage(Box<Permanent>),
  PermanentDealsMultipleDamage(Box<Permanent>, Vec<DamageToRecipients>),
  PermanentDoesntUntapDuringControllersNextNumberUntaps(Box<Permanent>, Box<GameNumber>),
  PermanentDoesntUntapDuringControllersNextUntap(Box<Permanent>),
  PermanentOrDeadPermanentDealsDamage(Box<GameNumber>, Box<DamageRecipient>),
  PerpetuallyExchangePowerOfPermanentAndPermanent(Box<Permanent>, Box<Permanent>),
  PerpetuallyIncreaseIntensityOfCardsOwnedByPlayer(Box<Cards>, Box<Player>, Box<GameNumber>),
  PerpetuallyIncreaseIntensityOfPermanent(Box<Permanent>, Box<GameNumber>),
  PhaseInEachPermanent(Box<Permanents>),
  PhaseInEachPermanentAndPhaseOutEachPermanent(Box<Permanents>, Box<Permanents>),
  PhaseInPermanent(Box<Permanent>),
  PhaseOutAnyNumberOfPermanents(Box<Permanents>),
  PhaseOutEachPermanent(Box<Permanents>),
  PhaseOutEachPermanentUntil(Box<Permanents>, Expiration),
  PhaseOutPermanent(Box<Permanent>),
  PhaseOutPermanentUntil(Box<Permanent>, Expiration),
  PhaseOutPermanentUntilWithEffects(Box<Permanent>, Expiration, PhasedOutEffect),
  PlaneDealsDamage(Plane, Box<GameNumber>, Box<DamageRecipient>),
  Planeswalk,
  PlayACardFromExileWithoutPaying(Box<CardsInExile>),
  PlayACardFromOutsideGame,
  PlayALandFromTopOfLibraryOrCastASpellFromTopOfLibraryWithTrigger(Box<Permanents>, Box<Spells>, Box<Actions>),
  PlayALandOrCastASpellFromAmongExiledCardsWithoutPaying(Box<Permanents>, Box<Spells>, CardsInExile),
  PlayAMagicSubgame,
  PlayAnExiledCardAndMaySpendManaAsThoughAnyColorToCast(Box<CardsInExile>),
  PlayAnyNumberOfExiledCards(Box<CardsInExile>),
  PlayAnyNumberOfLandsOrCastAnyNumberOfSpellsFromExileWithoutPaying(Box<Spells>, CardsInExile),
  PlayExiledCard(Box<CardInExile>),
  PlayExiledCardWithoutPaying(Box<CardInExile>),
  PlayGraveyardCardWithoutPaying(Box<CardInGraveyards>),
  PlayTopCardOfLibraryWithoutPaying,
  PlayerAction(Box<Player>, Box<Action>),
  PlayerActions(Box<Player>, Vec<Action>),
  PlayerChooseAnAction(Box<Player>, Vec<Action>),
  PlayerChoosesCostActionForEachPermanent(Box<Player>, Box<Permanents>, Vec<ActionOption>),
  PlayerMayAction(Box<Player>, Box<Action>),
  PlayerMayActions(Box<Player>, Vec<Action>),
  PlayerMayCost(Box<Player>, Box<Cost>),
  PlayerMustCost(Box<Player>, Box<Cost>),
  PlayerRepeatedMayCost(Box<Player>, Box<GameNumber>, Box<Cost>),
  PlayersDiscardCards(Box<CardsInHand>),
  PlayersExchangeLifeTotals(Box<Player>, Box<Player>),
  PlayersExileTopCardOfLibraryAndFindHighestManaValueUntilSingleWinner(Box<Players>),
  PlayersRevealTopCardOfLibraryAndFindHighestManaValue(Box<Players>),
  Populate,
  PopulateNumberTimes(Box<GameNumber>),
  PopulateWithFlags(Vec<EnterFlag>),
  PreparePermanent(Box<Permanent>),
  Proliferate,
  ProliferateNumberTimes(Box<GameNumber>),
  PutACardAndOrACardFromHandOnBattlefield(Box<CardsInHand>, Box<CardsInHand>, Vec<EnterFlag>),
  PutACardDiscardedThisWayOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  PutACardFromAGraveyardOnBattlefield(Box<CardsInGraveyards>, Box<Players>, Vec<EnterFlag>),
  PutACardFromGraveyardIntoHand(Box<CardsInGraveyards>),
  PutACardFromGraveyardIntoHandAtRandom(Box<CardsInGraveyards>),
  PutACardFromGraveyardIntoHandExceptForGraveyardCard(Box<CardsInGraveyards>, Box<CardInGraveyards>),
  PutACardFromHandIntoGraveyard(Box<Cards>),
  PutACardFromHandOnBattlefield(Box<CardsInHand>, Vec<EnterFlag>),
  PutACardFromHandOnBottomOfLibrary,
  PutACardFromHandOnTopOfLibrary,
  PutACardFromHandOrGraveyardOnBattlefield(Box<Cards>, Box<Player>, Vec<EnterFlag>),
  PutACardFromOutsideGameInHand(Box<Cards>),
  PutACardFromOutsideGameOnTopOfLibrary(Box<Cards>),
  PutACardFromPlayersGraveyardOnBattlefield(Box<CardsInGraveyards>, Box<Player>, Vec<EnterFlag>),
  PutACardFromPlayersGraveyardOnTopOfLibrary(Box<Cards>, Box<Player>),
  PutACardOfTypeAndOrACardOfTypeMilledThisWayOntoTheBattlefield(Vec<Cards>, Vec<EnterFlag>),
  PutACardOfTypeMilledThisWayIntoHand(Box<Cards>),
  PutACardOfTypeMilledThisWayOnTopOfLibrary(Box<Cards>),
  PutACardOfTypeMilledThisWayOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  PutACommanderFromCommandZoneIntoHand(Commanders),
  PutACommanderFromCommandZoneOntoBattlefield(Commanders, Vec<EnterFlag>),
  PutAGraveyardCardIntoHand(Box<CardsInGraveyards>),
  PutAGraveyardCardOntoBattlefield(Box<CardsInGraveyards>, Vec<EnterFlag>),
  PutANameStickerOnAPermanent(Box<Permanents>),
  PutANameStickerOnPermanent(Box<Permanent>),
  PutAPermanentIntoItsOwnersHand(Box<Permanents>),
  PutAPowerAndToughnessStickerOnAPermanent(Box<Permanents>),
  PutARandomCardFromLibraryIntoGraveyard(Box<Cards>),
  PutARandomCardFromLibraryOntoBattlefield(Box<Cards>, Vec<EnterFlag>),
  PutARandomCardFromPlayersLibraryOntoBattlefield(Box<Cards>, Box<Player>, Vec<EnterFlag>),
  PutARandomCardOfTypeFromAmongTheTopNumberCardsOfLibraryIntoHand(Box<Cards>, Box<GameNumber>),
  PutAStickerOnACardInPlayersGraveyard(Box<CardsInGraveyards>, Box<Player>),
  PutAStickerOnAPermanent(Box<Permanents>),
  PutAllCardsFromHandOnBottomOfLibraryAnyOrder,
  PutAllCardsFromHandOnTopOfLibraryRandomOrder,
  PutAnAbilityStickerWithTicketCostOnPermanentWithoutPaying(Box<Comparison>, Box<Permanent>),
  PutAnArtStickerOnAPermanent(Box<Permanents>),
  PutAnExiledCardIntoOwnersGraveyard(Box<CardsInExile>),
  PutAnExiledCardIntoOwnersHand(Box<CardsInExile>),
  PutAnExiledCardOntoBattlefield(Box<CardsInExile>, Vec<EnterFlag>),
  PutAnyNumberOfCardsFromAmongExileOntoBattlefield(Box<Cards>, CardsInExile, Vec<EnterFlag>),
  PutAnyNumberOfCardsFromExileOntoBattlefield(CardsInExile, Vec<EnterFlag>),
  PutAnyNumberOfCardsFromHandOnBottomOfLibraryInAnyOrder,
  PutAnyNumberOfCardsFromHandOntoBattlefield(Box<Cards>, Vec<EnterFlag>),
  PutAnyNumberOfCardsFromHandOntoBattlefieldAsFaceDownArtifactCreatures(PT),
  PutAnyNumberOfCardsFromHandOrFromPlayersGraveyardOnBattlefield(Box<Cards>, Box<Player>, Vec<EnterFlag>),
  PutAnyNumberOfCardsOfTypeMilledThisWayIntoHand(Box<Cards>),
  PutAnyNumberOfCardsOfTypeMilledThisWayOntoTheBattlefield(Box<Cards>, Vec<EnterFlag>),
  PutCardFromAnywhereIntoPlayersGraveyard(SingleCard),
  PutCardFromHandIntoGraveyard(CardInHand),
  PutCardFromHandIntoPlayersHand(CardInHand, Box<Player>),
  PutCardFromHandOnBattlefield(CardInHand, Vec<EnterFlag>),
  PutCardFromHandOnBottomOfLibrary(CardInHand),
  PutCardFromHandOnTopOfLibrary(CardInHand),
  PutCardInHandIntoLibraryNthFromTop(CardInHand),
  PutCardsFromHandOnBattlefield(Box<CardsInHand>, Vec<EnterFlag>),
  PutCardsInHandIntoGraveyard(Box<CardsInHand>),
  PutCommanderFromCommandZoneOntoBattlefield(Commander, Vec<EnterFlag>),
  PutCounters(Vec<PutCountersAction>),
  PutCountersWithRestriction(Vec<PutCountersAction>, Box<PutRestriction>),
  PutDeadPermanentOnBottomOfLibrary,
  PutDeadPermanentOnTopOfLibrary,
  PutDeadPermanentOnTopOfLibraryOrOnBottomOfLibrary,
  PutEachCardFromAnteInGraveyard(AnteCards),
  PutEachCardFromEachPlayersGraveyardOntoTheBattlefield(Box<Cards>, Box<Players>, Vec<EnterFlag>),
  PutEachCardInGraveyardOntoBottomOfLibraryInRandomOrder(Box<Cards>),
  PutEachCardOfTypeMilledThisWayIntoHand(Box<Cards>),
  PutEachCardOfTypeMilledThisWayOntoTheBattlefield(Box<CardsInLibrary>, Vec<EnterFlag>),
  PutEachCardOfTypeMilledThisWayOntoTheBattlefieldAsFaceDownArtifactCreatures(Box<Cards>, PT, CreatureType),
  PutEachCommanderFromCommandZoneIntoHand(Commanders),
  PutEachCommanderFromCommandZoneOntoBattlefield(Commanders, Vec<EnterFlag>),
  PutEachCommanderFromGraveyardIntoHand,
  PutEachExiledCardOnTheBottomOfTheirOwnersLibraryInARandomOrder(Box<CardsInExile>),
  PutEachExiledCardOnTheBottomOfTheirOwnersLibraryInAnyOrder(Box<CardsInExile>),
  PutEachExiledCardOntoTheBattlefield(CardsInExile, Vec<EnterFlag>),
  PutEachExiledCardOntoTheBattlefieldFaceDownAsAnArtifactCreature(CardsInExile, PT, CreatureType),
  PutEachGraveyardCardIntoHand(Box<CardsInGraveyards>),
  PutEachGraveyardCardOntoBattlefield(Box<CardsInGraveyards>, Vec<EnterFlag>),
  PutEachGraveyardCardOntoBattlefieldFaceDownAsAnArtifactCreature(Box<CardsInGraveyards>, Vec<EnterFlag>, PT, CreatureType),
  PutEachPermanentInOwnersLibraryNthFromTheTop(Box<Permanents>, Box<GameNumber>),
  PutEachPermanentIntoItsOwnersHand(Box<Permanents>),
  PutEachPermanentOnBottomOfOwnersLibraryInOrderOfOwnersChoice(Box<Permanents>),
  PutEachPermanentOnTheTopOfOwnersLibraryInOrderOfOwnersChoice(Box<Permanents>),
  PutEachPermanentOnTopOfOwnersLibrariesThenShuffleThoseLibraries(Box<Permanents>),
  PutEachPermanentToTopOrBottomOfLibrary(Box<Permanents>),
  PutExiledCardInOwnersLibraryNthFromTheTop(CardInExile, Box<GameNumber>),
  PutExiledCardIntoOwnersGraveyard(Box<CardInExile>),
  PutExiledCardIntoOwnersHand(Box<CardInExile>),
  PutExiledCardOnStackAsCopyOfSpell(CardInExile, Box<Spell>, SpellCopyEffects),
  PutExiledCardOnTheBottomOfItsOwnersLibrary(Box<CardInExile>),
  PutExiledCardOntoBattlefield(CardInExile, Vec<EnterFlag>),
  PutExiledCardsIntoOwnersGraveyards(Box<CardsInExile>),
  PutExiledCardsIntoOwnersHand(Box<CardsInExile>),
  PutExiledCardsOnTopOfLibraryInAnyOrder(Box<CardsInExile>),
  PutExiledPileIntoOwnersHand(Box<CardsInExile>),
  PutGraveyardCardInOwnersLibraryNthFromTheTop(Box<CardInGraveyards>, Box<GameNumber>),
  PutGraveyardCardIntoHand(Box<CardInGraveyards>),
  PutGraveyardCardIntoHandOrOntoBattlefield(Box<CardInGraveyards>, Vec<EnterFlag>),
  PutGraveyardCardOnBottomOfLibrary(Box<CardInGraveyards>),
  PutGraveyardCardOnTopOfLibrary(Box<CardInGraveyards>),
  PutGraveyardCardOntoBattlefield(Box<CardInGraveyards>, Vec<EnterFlag>),
  PutNumCardsFromHandOnBottomOfLibraryAnyOrder(Box<GameNumber>),
  PutNumCardsFromHandOnTopOfLibraryAnyOrder(Box<GameNumber>),
  PutNumberCardsFromAmongPlayersGraveyardsOntoTheBattlefield(Box<GameNumber>, Box<CardsInGraveyards>, Box<Players>, Vec<EnterFlag>),
  PutNumberCardsFromExileOntoBattlefield(Box<GameNumber>, CardsInExile, Vec<EnterFlag>),
  PutNumberGraveyardCardsOnTopOfLibraryInAnyOrder(Box<GameNumber>, Box<CardsInGraveyards>),
  PutNumberPermanentsIntoOwnersHand(Box<GameNumber>, Box<Permanents>),
  PutOrRemoveCounters(Vec<PutOrRemoveCountersAction>),
  PutPermanentInOwnersLibraryBeneathNumberCards(Box<Permanent>, Box<GameNumber>),
  PutPermanentInOwnersLibraryNthFromTheTop(Box<Permanent>, Box<GameNumber>),
  PutPermanentIntoItsOwnersHand(Box<Permanent>),
  PutPermanentIntoOwnersGraveyard(Box<Permanent>),
  PutPermanentOnBottomOfOwnersLibrary(Box<Permanent>),
  PutPermanentOnTopOfOwnersLibrary(Box<Permanent>),
  PutSpellInOwnersLibraryNthFromTheTop(Box<Spell>, Box<GameNumber>),
  PutSpellOnBottomOfOwnersLibrary(Box<Spell>),
  PutTheBottomCardOfPlayersLibraryIntoGraveyard(Box<Player>),
  PutTheTopCardOfPlayersLibraryInGraveyard(Box<Player>),
  PutTheTopCardOfPlayersLibraryOnTheBottomOfTheirLibrary(Box<Player>),
  PutTheTopNumberCardsOfLibraryInHand(Box<GameNumber>),
  PutTheTopNumberCardsOfPlayersLibraryOntoBattlefieldAsFaceDownArtifactCreatures(Box<GameNumber>, PT, CreatureType),
  PutTopCardOfLibraryOfTypeOnBattlefield(Box<Cards>, Vec<EnterFlag>),
  PutTopOfLibraryInGraveyard,
  PutTopOfLibraryInHand,
  PutTopOfLibraryOnBattlefield(Vec<EnterFlag>),
  PutTopOfLibraryOnBottomOfLibrary,
  PutTopOfOtherLibraryInGraveyard(Box<Player>),
  PutTopOfPlanarDeckOnBottomOfPlanarDeck,
  PutUptoNumberCardsFromGraveyardToHand(Box<GameNumber>, Box<Cards>),
  PutUptoNumberCardsFromHandAndOrGraveyardOnBattlefield(Box<GameNumber>, Box<Cards>, Box<Player>, Vec<EnterFlag>),
  PutUptoNumberCardsFromHandOntoBattlefield(Box<GameNumber>, Box<Cards>, Vec<EnterFlag>),
  PutUptoNumberCardsOfTypeMilledThisWayIntoHand(Box<GameNumber>, Box<Cards>),
  PutUptoNumberGraveyardCardsOntoTheBattlefield(Box<GameNumber>, Box<CardsInGraveyards>, Vec<EnterFlag>),
  PutUptoNumberNameStickersOnPermanent(Box<GameNumber>, Box<Permanent>),
  PutUptoOneCardOfEachCardtypeAmongPermanentsFromHandOnTheBattlefield(Box<Permanents>, Vec<EnterFlag>),
  RedistributeLifeTotalsOfPlayers(Box<Players>),
  ReducePlayersSpeed(Box<Player>, Box<GameNumber>),
  ReflexiveAction(Box<Cost>),
  ReflexiveActionTrigger(ReflexiveAction, Box<Actions>),
  ReflexiveActionTriggerI(ReflexiveAction, Condition, Box<Actions>),
  ReflexiveTrigger(Box<Actions>),
  ReflexiveTriggerI(Condition, Box<Actions>),
  ReflexiveTriggerNumberTimes(Box<GameNumber>, Box<Actions>),
  RegenerateEachPermanent(Box<Permanents>),
  RegeneratePermanent(Box<Permanent>),
  RememberLifeTotal,
  RememberPlayer(Box<Player>),
  RemoveCounters(Vec<RemoveCountersAction>),
  RemoveCreatureFromCombat(Box<Permanent>),
  RemoveCreatureFromCombatAndUnblockBlockers(Box<Permanent>),
  RemoveEachCreatureFromCombat(Box<Permanents>),
  ReorderPlayersGraveyard(Box<Player>),
  RepeatThisProcess,
  RepeatableActions(Vec<Action>),
  RepeatableActionsNumTimes(Box<GameNumber>, Vec<Action>),
  RepeatedMayCost(Box<GameNumber>, Box<Cost>),
  RerollAnyNumberOfTheStoredD6Results,
  ReselectTargetOfSpellOrAbilityAtRandom(SpellOrAbility),
  ReselectWhichPlayerCreatureIsAttacking(Box<Permanent>),
  ReselectWhichPlayerOrPermanentCreatureIsAttacking(Box<Permanent>),
  RestartTheGameLeavingEachExiledCardInExileThenPutThoseCardsOntoTheBattlefield(CardsInExile, Vec<EnterFlag>),
  ReturnACardFromAnyPlayersGraveyardToBattlefield(Box<CardsInGraveyards>, Box<Players>, Vec<EnterFlag>),
  ReturnACardFromGraveyardToBattlefield(Box<Cards>, Vec<EnterFlag>),
  ReturnACardFromGraveyardToBattlefieldAtRandom(Box<Cards>, Vec<EnterFlag>),
  ReturnACardFromGraveyardToHandAtRandom(Box<Cards>),
  ReturnACardFromGraveyardToTopOfLibrary(Box<Cards>),
  ReturnACardFromPlayersGraveyardToBattlefield(Box<Cards>, Box<Player>, Vec<EnterFlag>),
  ReturnACardMilledThisWayToBattlefield(Box<Cards>, Vec<EnterFlag>),
  ReturnAGraveyardCardToHand(Box<Cards>),
  ReturnAPermanentToTopOfLibrary(Box<Permanents>),
  ReturnAnExiledCardToBattlefield(CardsInExile, Vec<EnterFlag>),
  ReturnAnExiledCardToOwnersHand(Box<CardsInExile>),
  ReturnAnyNumberCardsMilledThisWayToHand(Box<Cards>),
  ReturnAnyNumberOfCardsFromGraveyardToBattlefield(Box<CardsInGraveyards>, Box<Player>, Vec<EnterFlag>),
  ReturnAnyNumberOfCardsFromGraveyardToHand(Box<Cards>),
  ReturnAnyNumberOfGroupCardsFromGraveyardToHand(Box<Cards>, GroupFilter),
  ReturnAnyNumberOfGroupCardsFromPlayersGraveyardToBattlefield(Box<CardsInGraveyards>, GroupFilter, Box<Player>, Vec<EnterFlag>),
  ReturnAnyNumberOfGroupCardsMilledThisWayToBattlefield(Box<Cards>, GroupFilter, Vec<EnterFlag>),
  ReturnAnyNumberOfPermanentsToTheirOwnersHands(Box<Permanents>),
  ReturnDeadGraveyardCardToBattlefield(Vec<EnterFlag>),
  ReturnDeadGraveyardCardToBottomOfLibrary,
  ReturnDeadGraveyardCardToHand,
  ReturnDeadGraveyardCardToTopOfLibrary,
  ReturnDeadGuestGraveyardCardToBattlefield(Vec<EnterFlag>),
  ReturnDeadGuestGraveyardCardToHand,
  ReturnEachCardFromEachPlayersGraveyardToBattlefieldThatWasPutThereFromAnywhereThisTurn(Box<Cards>, Box<Players>, Vec<EnterFlag>),
  ReturnEachCardFromEachPlayersGraveyardToBattlefieldThatWasPutThereFromTheBattlefieldThisTurn(Box<Cards>, Box<Players>, Vec<EnterFlag>),
  ReturnEachCardFromEachPlayersGraveyardToOwnersHand(Box<Cards>, Box<Players>),
  ReturnEachCardFromGraveyardToHand(Box<Cards>),
  ReturnEachCardFromGraveyardToHandThatWasCycledOrDiscardedThisTurn(Box<Cards>),
  ReturnEachCardFromGraveyardToHandThatWasPutThereFromAnywhereThisTurn(Box<Cards>),
  ReturnEachCardFromGraveyardToHandThatWasPutThereFromBattlefieldThisTurn(Box<Cards>),
  ReturnEachCardFromPlayersGraveyardToBattlefield(Box<CardsInGraveyards>, Box<Player>, Vec<EnterFlag>),
  ReturnEachCardFromPlayersGraveyardToBattlefieldThatWasDestroyThisWay(Box<Cards>, Box<Player>, Vec<EnterFlag>),
  ReturnEachCardFromPlayersGraveyardToBattlefieldThatWasPutThereFromBattlefieldThisTurn(Box<Cards>, Box<Player>, Vec<EnterFlag>),
  ReturnEachCardFromPlayersGraveyardToHand(Box<Cards>, Box<Player>),
  ReturnEachCardFromPlayersGraveyardToHandThatWasPutThereFromBattlefieldThisTurn(Box<Cards>, Box<Player>),
  ReturnEachExiledCardToBottomOfOwnersLibraryRandomOrder(Box<CardsInExile>),
  ReturnEachExiledCardToGraveyard(Box<CardsInExile>),
  ReturnEachExiledCardToOwnersHand(Box<CardsInExile>),
  ReturnEachGraveyardCardToBattlefield(Box<CardsInGraveyards>, Vec<EnterFlag>),
  ReturnEachGraveyardCardToBottomOfLibraryInAnyOrder(Box<CardsInGraveyards>),
  ReturnEachPermanentToCommandZone(Box<Permanents>),
  ReturnEnchantingGraveyardCardToBattlefield(Vec<EnterFlag>),
  ReturnEnchantingGraveyardCardToHand,
  ReturnGraveyardCardToHand(Box<CardInGraveyards>),
  ReturnGraveyardCardToTopOrBottomOfLibrary(Box<CardInGraveyards>),
  ReturnGraveyardCardsToHand(Box<CardsInGraveyards>),
  ReturnGraveyardCardsToTopOfLibraryInAnyOrder(Box<CardsInGraveyards>),
  ReturnMultipleCardsFromPlayersGraveyardToBattlefield(Vec<Cards>, Box<Player>, Vec<EnterFlag>),
  ReturnNewGraveyardCardToBattlefield(Vec<EnterFlag>),
  ReturnNumberCardsFromGraveyardToBattlefield(Box<GameNumber>, Box<Cards>, Vec<EnterFlag>),
  ReturnNumberCardsFromGraveyardToBattlefieldAtRandom(Box<GameNumber>, Box<Cards>, Vec<EnterFlag>),
  ReturnNumberCardsFromPlayersGraveyardToHand(Box<GameNumber>, Box<Cards>, Box<Player>),
  ReturnNumberCardsFromPlayersGraveyardToHandAtRandom(Box<GameNumber>, Box<Cards>, Box<Player>),
  ReturnNumberGraveyardCardsToBattlefieldAtRandom(Box<GameNumber>, Box<CardsInGraveyards>, Vec<EnterFlag>),
  ReturnPermanentOrExiledCardToOwnersHand(PermanentOrExiledCard),
  ReturnPermanentToBottomOfLibrary(Box<Permanent>),
  ReturnPermanentToCommandZone(Box<Permanent>),
  ReturnPermanentToLibraryUnderNumberCards(Box<Permanent>, Box<GameNumber>),
  ReturnPermanentToTopOrBottomOfLibrary(Box<Permanent>),
  ReturnSpellOrPermanentToOwnersHand(SpellOrPermanent),
  ReturnSpellToBottomOfLibrary(Box<Spell>),
  ReturnSpellToOwnersHand(Box<Spell>),
  ReturnSpellToTopOrBottomOfLibrary(Box<Spell>),
  ReturnTheExiledDeadPermanentToGraveyard,
  ReturnThisExiledCardToBattlefield(Vec<EnterFlag>),
  ReturnUptoNumberCardsFromAmongPlayersGraveyardsToBattlefield(Box<GameNumber>, Box<CardsInGraveyards>, Box<Players>, Vec<EnterFlag>),
  ReturnUptoNumberCardsFromExileToOwnersHand(Box<GameNumber>, CardsInExile),
  ReturnUptoNumberCardsFromPlayersGraveyardToBattlefield(Box<GameNumber>, Box<Cards>, Box<Player>, Vec<EnterFlag>),
  ReturnUptoNumberPermanentsToOwnersHand(Box<GameNumber>, Box<Permanents>),
  ReturnUptoOneCardOfEachPermanentTypeInPlayersGraveyardToBattlefield(Box<Player>, Vec<EnterFlag>),
  RevealACardFromHand,
  RevealACardFromHandAtRandom,
  RevealACardFromHandAtRandomAndDiscardIfItIsACardOfType(Box<Cards>),
  RevealACardOfTypeFromHand(Box<Cards>),
  RevealACardOfTypeFromHandAtRandom(Box<Cards>),
  RevealANumberOfCardsFromHandAndPlayerChoosesACardToDiscard(Box<GameNumber>, Box<Player>),
  RevealANumberOfCardsFromHandAndPlayerChoosesACardToExile(Box<GameNumber>, Box<Player>, Box<Cards>),
  RevealANumberOfCardsFromHandAndPlayerMayCastASpellFromAmongThemWithoutPaying(Box<GameNumber>, Box<Player>, Box<Spells>),
  RevealAllCardsOfTypeFromHand(Box<Cards>),
  RevealAllCardsOfTypeFromHandAndPlayerChoosesACardToExile(Box<Cards>, Box<Player>),
  RevealAllCardsOfTypeFromHandAndPlayerChoosesCard(Box<Cards>, Box<Player>),
  RevealAnyNumberOfCardsOfTypeFromHand(Box<Cards>),
  RevealCardFromHand(CardInHand),
  RevealCardFromOutsideGameAndPutInHand(Box<Cards>),
  RevealCardFromOutsideGameAndPutInHandOrPutAnExiledCardInOwnersHand(Box<Cards>, CardsInExile),
  RevealCardsFromTheTopOfLibraryUntilACardOfTypeIsRevealed(Box<Cards>, Vec<RevealTheTopNumberCardsOfLibraryAction>),
  RevealCardsFromTheTopOfLibraryUntilACardOfTypeIsRevealedOrUntilNumberCardsAreRevealed(Box<Cards>, Box<GameNumber>, Vec<RevealTheTopNumberCardsOfLibraryAction>),
  RevealCardsFromTheTopOfLibraryUntilANumberOfCardsOfTypeAreRevealed(Box<GameNumber>, Box<Cards>, Vec<RevealTheTopNumberCardsOfLibraryAction>),
  RevealCardsFromTheTopOfPlanarDeckUntilRevealAPlaneCardThenChaosEnsuresOnThatPlaneThenPutAllCardsOnBottomInAnyOrder,
  RevealCardsFromTheTopOfPlanarDeckUntilRevealAPlaneCardThenPlaneswalkToItWhileNotPlaneswalkingAwayAndPutTheRestOnBottomInAnyOrder,
  RevealCardsFromTheTopOfPlanarDeckUntilRevealNumberPlaneCardsAndPutAPlaneCardFromAmongOnTopAndTheRestOnBottomInAnyOrder(Box<GameNumber>),
  RevealCardsFromTheTopOfPlanarDeckUntilRevealNumberPlaneCardsSimultaneouslyPlaneswalkToThemThenPutOnBottomInAnyOrder(Box<GameNumber>),
  RevealFaceDownPermanent(Box<Permanent>),
  RevealHand,
  RevealHandAndAlternateExilingCardsWithPlayer(Box<Player>),
  RevealHandAndDiscardACardOfTypeAtRandom(Box<Cards>),
  RevealHandAndDiscardEachCard(Box<Cards>),
  RevealHandAndExileEachCardOfType(Box<Cards>),
  RevealHandAndPlayerChoosesACard(Box<Player>, Box<Cards>),
  RevealHandAndPlayerChoosesACardToDiscard(Box<Player>, Box<Cards>),
  RevealHandAndPlayerChoosesACardToExile(Box<Player>, Box<Cards>),
  RevealHandAndPlayerChoosesACardToExileUntil(Box<Player>, Box<Cards>, Expiration),
  RevealHandAndPlayerChoosesACardToPutOnBattlefield(Box<Player>, Box<Cards>, Vec<EnterFlag>),
  RevealHandAndPlayerChoosesMultipleCardsToDiscard(Box<Player>, Vec<Cards>),
  RevealHandAndPlayerChoosesNumberCardsToDiscard(Box<Player>, Box<GameNumber>),
  RevealHandAndPlayerChoosesNumberCardsToExile(Box<Player>, Box<GameNumber>, Box<Cards>),
  RevealHandAndPlayerMayCastASpellFromAmongThemWithoutPaying(Box<Player>, Box<Spells>),
  RevealHandAndPlayerMayChooseACardToDiscard(Box<Player>, Box<Cards>),
  RevealHandAndPlayerMayChooseACardToExile(Box<Player>, Box<Cards>),
  RevealLibrary(Vec<RevealTheTopNumberCardsOfLibraryAction>),
  RevealNumberCardsFromHand(Box<GameNumber>),
  RevealNumberCardsFromHandAndPlayerChoosesACardToExile(Box<GameNumber>, Box<Player>, Box<Cards>),
  RevealNumberCardsFromHandAtRandom(Box<GameNumber>),
  RevealNumberCardsFromHandAtRandomAndDiscardEachCardOfType(Box<GameNumber>, Box<Cards>),
  RevealSecretlyChosenNumbers,
  RevealSecretlyChosenPermanents,
  RevealTheCardDrawnThisWay,
  RevealTheCardPutInHandThisWay,
  RevealTheCardsDrawnThisWay,
  RevealTheSecretlyChosenNumber,
  RevealTheTopCardOfPlayersLibrary(Box<Player>),
  RevealTheTopNumberCardsOfLibrary(Box<GameNumber>, Vec<RevealTheTopNumberCardsOfLibraryAction>),
  RevealTheTopNumberCardsOfPlanarDeckAndTriggerEachCHAOSAbilityThenPutOnBottomOfPlanarDeckInAnyOrder(Box<GameNumber>),
  RevealTopCardOfLibrary,
  RevealTopCardOfLibraryAndPutIntoHand(Box<Cards>),
  RevealTopCardOfPlanarDeck,
  RevealUptoNumberCardsOfTypeFromHand(Box<GameNumber>, Box<CardsInHand>),
  RevealVotesForPermanent,
  RevealVotesForPlayer,
  RevealVotesForWord,
  ReverseTurnOrder,
  RollAD10,
  RollAD12,
  RollAD20,
  RollAD4,
  RollAD6,
  RollAD8,
  RollNumberD20AndIgnoreAllButHighest(Box<GameNumber>),
  RollNumberD6(Box<GameNumber>),
  RollNumberD6AndStoreTheResult(Box<GameNumber>),
  RollThePlanarDie,
  RollToVisitAttractions,
  RollTwoD10AndChooseAnOrder,
  RollTwoD12AndChooseAnOrder,
  RollTwoD4AndChooseAnOrder,
  RollTwoD6AndChooseAnOrder,
  RollTwoD8AndChooseAnOrder,
  SacrificeAPermanent(Box<Permanents>),
  SacrificeAPermanentOfAPlayersChoice(Box<Permanents>, Box<Players>),
  SacrificeAllPermanentsExceptForAPermanentOfEachLandType(Box<Permanents>),
  SacrificeAllPermanentsExceptForASpecificPermanentOfEachTypeOfTheirChoice(Box<Permanents>, Vec<Permanents>),
  SacrificeAllPermanentsExceptForNum(Box<Permanents>, Box<GameNumber>),
  SacrificeAnyNumberOfPermanents(Box<Permanents>),
  SacrificeEachPermanent(Box<Permanents>),
  SacrificeHalfOfThePermanentsRoundedUp(Box<Permanents>),
  SacrificeNumberPermanents(Box<GameNumber>, Box<Permanents>),
  SacrificePermanent(Box<Permanent>),
  SacrificePermanents(Vec<Permanents>),
  SacrificedPermanentDealsDamage(Box<GameNumber>, Box<DamageRecipient>),
  SacrificedPermanentDealsDistributedDamage,
  SaddlePermanent(Box<Permanent>),
  SchemeDealsDamage(SingleScheme, Box<GameNumber>, Box<DamageRecipient>),
  Scry(Box<GameNumber>),
  SearchHandAndLibrary(Vec<SearchLibraryAction>),
  SearchHandAndOrLibrary(Vec<SearchLibraryAction>),
  SearchLibrary(Vec<SearchLibraryAction>),
  SearchLibraryAndGraveyard(Vec<SearchLibraryAction>),
  SearchLibraryAndGraveyardAndHand(Vec<SearchLibraryAction>),
  SearchLibraryAndOrGraveyard(Vec<SearchLibraryAction>),
  SearchLibraryAndOrGraveyardAndOrHand(Vec<SearchLibraryAction>),
  SearchLibraryAndOrGraveyardAndOrOutsideTheGame(Vec<SearchLibraryAction>),
  SearchLibraryAndOrOutsideTheGame(Vec<SearchLibraryAction>),
  SearchPlayersLibrary(Box<Player>, Vec<SearchLibraryAction>),
  SearchPlayersLibraryAndGraveyardAndHand(Box<Player>, Vec<SearchLibraryAction>),
  SearchTheTopNumberCardsOfLibrary(Box<GameNumber>, Vec<SearchLibraryAction>),
  SecretlyChooseACreatureTypeFromList(Vec<CreatureType>),
  SecretlyChooseAGraveyardCard(Box<CardsInGraveyards>),
  SecretlyChooseANumber,
  SecretlyChooseANumberBetween(i32, i32),
  SecretlyChooseANumberBetweenThatHasntBeenChosen(i32, i32),
  SecretlyChooseANumberGreaterThanNumber(i32),
  SecretlyChooseAPermanent(Box<Permanents>),
  SecretlyChooseAPlayer(Box<Players>),
  SecretlyChooseLibraryFilter(Vec<Cards>),
  SecretlyVoteForAPermanent(Box<Permanents>),
  SecretlyVoteForAPlayer(Box<Players>),
  SecretlyVoteForAWord(Vec<VoteOption>),
  SecretlyVoteForUptoOnePermanent(Box<Permanents>),
  SeekACard(Box<Cards>),
  SeekACardFromTheTopNumberCardsOfLibrary(Box<Cards>, Box<GameNumber>),
  SeekCards(Vec<Cards>),
  SeekNumberCards(Box<GameNumber>, Box<Cards>),
  SeekNumberCardsFromTheTopNumberCardsOfLibrary(Box<GameNumber>, Box<Cards>, Box<GameNumber>),
  SeparateCardsInPlayersGraveyardIntoTwoPiles(Box<Cards>, Box<Player>),
  SeparateExiledCardsIntoTwoPiles(Box<CardsInExile>),
  SeparatePermanentsIntoNamedPiles(Box<Permanents>, Vec<VoteOption>),
  SeparatePermanentsIntoNumberPiles(Box<Permanents>, Box<GameNumber>),
  SeparatePermanentsIntoTwoPilesAndAPlayerChoosesAPile(Box<Permanents>, Box<Players>),
  SetAttackAssignmentOfCreature(Box<Permanent>, AttackAssignment),
  SetAttackAssignmentOfCreatures(Box<Permanents>, AttackAssignment),
  SetCreatureAsBlocked(Box<Permanent>),
  SetEachCreatureAsBlocked(Box<Permanents>),
  SetLifeTotal(Box<GameNumber>),
  SetSchemeInMotion(SingleScheme),
  SetStake(Box<GameNumber>),
  Shuffle,
  ShuffleAPermanentIntoLibrary(Box<Permanents>),
  ShuffleAllButNumberCardsInHandIntoLibrary(Box<GameNumber>),
  ShuffleAnyNumberOfCardsFromHandIntoLibrary,
  ShuffleCardFromHandIntoLibrary(CardInHand),
  ShuffleCardsFromHandIntoLibrary(Box<CardsInHand>),
  ShuffleEachCardInGraveyardIntoLibrary(Box<Cards>),
  ShuffleEachCardInPlayersGraveyardIntoLibrary(Box<Cards>, Box<Player>),
  ShuffleEachExiledCardIntoLibrary(Box<CardsInExile>),
  ShuffleEachGraveyardCardIntoLibrary(Box<CardsInGraveyards>),
  ShuffleEachPermanentIntoLibrary(Box<Permanents>),
  ShuffleExiledCardIntoLibrary(Box<CardInExile>),
  ShuffleExiledCardsAndPutOnTopOfLibrary(Box<CardsInExile>),
  ShuffleGraveyard,
  ShuffleGraveyardCardIntoLibrary(Box<CardInGraveyards>),
  ShuffleGraveyardIntoLibrary,
  ShuffleHandAndGraveyardIntoLibrary,
  ShuffleHandAndPermanentsIntoLibrary,
  ShuffleHandGraveyardAndPermanentsIntoLibrary,
  ShuffleHandIntoLibrary,
  ShuffleLibraryIfSearched,
  ShufflePermanentAndGraveyardIntoLibrary(Box<Permanent>),
  ShufflePermanentIntoLibrary(Box<Permanent>),
  ShuffleSpellAndGraveyardCardsIntoLibraries(Box<Spell>, Box<CardsInGraveyards>),
  ShuffleSpellIntoLibrary(Box<Spell>),
  ShuffleUptoNumberCardsFromOutsideTheGameIntoLibrary(Box<GameNumber>),
  ShuffleUptoNumberCardsFromPlayersGraveyardIntoLibrary(Box<GameNumber>, Box<Cards>, Box<Player>),
  SimultaneouslySacrificePermanentAndPutGraveyardCardOntoBattlefield(Box<Permanent>, Box<CardInGraveyards>, Vec<EnterFlag>),
  SimultaneouslyTapEachPermanentAndUntapEachPermanent(Box<Permanents>, Box<Permanents>),
  SkipAllCombatPhasesTheirNextTurn,
  SkipNextCombatPhase,
  SkipNextCombatPhaseThisTurn,
  SkipNextDrawStep,
  SkipNextNumberTurns(Box<GameNumber>),
  SkipNextTurn,
  SkipNextUntapStep,
  SpellDealsDamage(Box<Spell>, Box<GameNumber>, Box<DamageRecipient>),
  SpellDealsDamageCantBePrevented(Box<Spell>, Box<GameNumber>, Box<DamageRecipient>),
  SpellDealsDamageDividedAmongRecipientsRoundedDown(Box<Spell>, Box<GameNumber>, Box<DamageRecipient>),
  SpellDealsDamageEachPlayer(Box<Players>, Box<Spell>, Box<GameNumber>, Box<DamageRecipient>),
  SpellDealsDamageEachPlayerForEach(Box<Players>, Box<Spell>, Box<GameNumber>, Box<DamageRecipient>, Box<GameNumber>),
  SpellDealsDamageExcessReplacable(Box<Spell>, Box<GameNumber>, Box<DamageRecipient>, Vec<Action>),
  SpellDealsDamageForEach(Box<Spell>, Box<GameNumber>, Box<DamageRecipient>, Box<GameNumber>),
  SpellDealsDistributedDamage(Box<Spell>),
  SpellDealsMultipleDamage(Box<Spell>, Vec<DamageToRecipients>),
  StartBiddingWarAmongPlayersAtAnyNumber(Box<Players>),
  StartBiddingWarAmongPlayersAtNumber(Box<Players>, Box<GameNumber>),
  StartBiddingWarWithPlayer(Box<Player>, Box<GameNumber>),
  Support(Box<Permanents>),
  Surveil(Box<GameNumber>),
  SuspectEachPermanent(Box<Permanents>),
  SuspectPermanent(Box<Permanent>),
  SwapWordChoice(VoteOption, VoteOption),
  TakeANumberOfExtraTurns(Box<GameNumber>),
  TakeAnExtraTurn,
  TakeAnExtraTurnAfterNextTurn,
  TakeAnExtraTurnAndSkipUntapStepOfThatTurn,
  TakeTheInitiative,
  TapAllButNumberPermanents(Box<GameNumber>, Box<Permanents>),
  TapAnyNumberOfPermanents(Box<Permanents>),
  TapEachPermanent(Box<Permanents>),
  TapNumberPermanents(Box<GameNumber>, Box<Permanents>),
  TapOrUntapPermanent(Box<Permanent>),
  TapPermanent(Box<Permanent>),
  TemptWithRing,
  ThereAreNumberAdditionalUpkeepSteps(Box<GameNumber>),
  ThereIsAnAdditionalBeginningPhase,
  ThereIsAnAdditionalCombatPhase,
  ThereIsAnAdditionalCombatPhaseAndAnAdditionalMainPhase,
  ThereIsAnAdditionalCombatPhaseWithTrigger(Box<Actions>),
  ThereIsAnAdditionalEndStep,
  ThereIsAnAdditionalUpkeepStep,
  TimeTravel,
  TimeTravelNumberTimes(Box<GameNumber>),
  TransformAPermanent(Box<Permanents>),
  TransformAnyNumberOfPermanents(Box<Permanents>),
  TransformEachPermanent(Box<Permanents>),
  TransformPermanent(Box<Permanent>),
  TripleCreaturesPowerAndToughnessUntilEndOfTurn(Box<Permanent>),
  TrySwappingBlockAssignmentsOfTwoAttackingCreatures(Box<Permanent>, Box<Permanent>),
  TrySwappingBlockAssignmentsOfTwoBlockingCreatures(Box<Permanent>, Box<Permanent>),
  TurnAPermanentFaceUp(Box<Permanents>),
  TurnAnExiledPileFaceUp,
  TurnEachExiledCardFaceUp(Box<CardsInExile>),
  TurnEachMorphPermanentFaceDown(Box<Permanents>),
  TurnEachPermanentFaceDownAsCreature(Box<Permanents>, PT, CreatureType),
  TurnExiledCardFaceUp(Box<CardInExile>),
  TurnPermanentFaceDown(Box<Permanent>),
  TurnPermanentFaceDownAsArtifactCreature(Box<Permanent>, PT, CreatureType),
  TurnPermanentFaceUp(Box<Permanent>),
  UnattachEachPermanentFromEachPermanent(Box<Permanents>, Box<Permanents>),
  UnattachEachPermanentFromPermanent(Box<Permanents>, Box<Permanent>),
  UnattachPermanent(Box<Permanent>),
  UngoadEachCreature(Box<Permanents>),
  Unless(Condition, Vec<Action>),
  UnlockADoorOfAPermanent(Box<Permanents>),
  UnlockADoorOfPermanent(Box<Permanent>),
  UnpreparePermanent(Box<Permanent>),
  UnsuspectEachPermanent(Box<Permanents>),
  UnsuspectPermanent(Box<Permanent>),
  UntapAPermanent(Box<Permanents>),
  UntapEachPermanent(Box<Permanents>),
  UntapPermanent(Box<Permanent>),
  UntapUptoNumberPermanents(Box<GameNumber>, Box<Permanents>),
  ValueActions(Box<GameNumber>, Vec<ValueAction>),
  VanguardDealsDamage(SingleVanguard, Box<GameNumber>, Box<DamageRecipient>),
  VentureIntoTheDungeon,
  VoteForACardInGraveyard(Box<CardsInGraveyards>),
  VoteForAPermanent(Box<Permanents>),
  VoteForAWord(Vec<VoteOption>),
  VoteForColor(Vec<Color>),
  WinTheGame,
  WouldDealExcessDamage_DealExcessToPlayerInstead(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OtherTarget", content = "args"))]
pub enum OtherTarget {
  Ref_TargetPermanent,
  Ref_AnyTarget1,
  Ref_AnyTarget,
  ThisPermanent
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SpellsAndPermanents", content = "args"))]
pub enum SpellsAndPermanents {
  // ManaValueIs(Box<Comparison>),
  AnySpellOrPermanent,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_GroupFilter", content = "args"))]
pub enum GroupFilter {
  HasNumberSymbolsAmongCosts(Box<Comparison>, ManaProduceSymbol),
  DifferentControllers,
  ShareAGraveyard,
  ANumberOfDifferentCardTypes(Box<Comparison>),
  ControlledByDifferentPlayers,
  SameToughness,
  ControlledByTheSamePlayer,
  DifferentManaValues,
  DifferentNames,
  DifferentPowers,
  EachBasicLandType,
  HasAColorNotInCommon,
  SameNames,
  ShareAllCardTypes,
  ShareACardType,
  ShareAColor,
  ShareACreatureType,
  ShareACreatureTypeOfChoice,
  ShareALandType,
  SharesANameWithEachPermanent(Box<Permanents>),
  SharesNoCreatureTypes,
  TotalManaValueIs(Box<Comparison>),
  TotalPowerIs(Box<Comparison>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_AnteCard", content = "args"))]
pub enum AnteCard {
  Ref_TargetAnteCard,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Target", content = "args"))]
pub enum Target {
  BetweenOneAndNumberAnyTargets(Box<GameNumber>),
  BetweenOneAndNumberTargetGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
  UptoNumberTargetSpellsOrAbilities(Box<GameNumber>, Box<SpellsAndAbilities>),
  OneOrTwoTargetGraveyardCards(Box<CardsInGraveyards>),
  AnyNumberOfTargetGraveyardCards(Box<CardsInGraveyards>),
  AnyNumberOfTargetGroupGraveyardCards(Box<CardsInGraveyards>, GroupFilter),
  NumberTargetGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
  NumberTargetGroupGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>, GroupFilter),
  TargetGraveyardCard(Box<CardsInGraveyards>),
  TargetGraveyardCardAtRandom(Box<CardsInGraveyards>),
  TargetGraveyardCardInEachPlayersGraveyard(Box<CardsInGraveyards>, Box<Players>),
  UptoNumberTargetGraveyardCardsFromList(Box<GameNumber>, Vec<CardsInGraveyards>),
  UptoNumberTargetGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>),
  UptoNumberTargetGroupGraveyardCards(Box<GameNumber>, Box<CardsInGraveyards>, GroupFilter),
  UptoOneTargetGraveyardCard(Box<CardsInGraveyards>),
  UptoOneTargetGraveyardCardInEachPlayersGraveyard(Box<CardsInGraveyards>, Box<Players>),
  UptoOneTargetGraveyardCardOfEachColor(Box<CardsInGraveyards>),
  AnyNumberOfAnyTargets,
  AnyNumberOfTargetGroupPermanents(Box<Permanents>, GroupFilter),
  AnyNumberOfTargetPermanents(Box<Permanents>),
  AnyNumberOfTargetPlayers(Box<Players>),
  AnyNumberOfTargetPlayersOrPermanents(Box<Players>, Box<Permanents>),
  AnyNumberOfTargetSpells(Box<Spells>),
  AnyOtherTarget(OtherTarget),
  AnyTarget,
  AnyTargetChosenAtRandom,
  AnyTargetExceptAPermanent(Box<Permanents>),
  AnyTargetExceptPermanent(Box<Permanent>),
  AnyTargetOfAPlayersChoice(Box<Players>),
  AnyTargetOfPlayersChoice(Box<Player>),
  AnyTargetThatWasDealtDamageThisTurn,
  NumberAnyTargets(Box<GameNumber>),
  NumberTargetGroupPermanents(Box<GameNumber>, Box<Permanents>, GroupFilter),
  NumberTargetPermanents(Box<GameNumber>, Box<Permanents>),
  NumberTargetPlayers(Box<GameNumber>, Box<Players>),
  OneOrMoreTargetPermanents(Box<Permanents>),
  OneOrTwoTargetPermanents(Box<Permanents>),
  TargetAbility(Abilities),
  TargetAnteCard(Box<Cards>),
  TargetGraveyardCardOfAPlayersChoice(Box<CardsInGraveyards>, Box<Players>),
  TargetExiledCard(Box<CardsInExile>),
  TargetPermanent(Box<Permanents>),
  TargetPermanentAtRandom(Box<Permanents>),
  TargetPermanentEachPlayerControls(Box<Permanents>, Box<Players>),
  TargetPermanentOfAPlayersChoice(Box<Permanents>, Box<Players>),
  TargetPermanentOfAPlayersChoiceTheyControl(Box<Permanents>, Box<Players>),
  TargetPermanentOfPlayersChoice(Box<Permanents>, Box<Player>),
  TargetPermanentOrExiledCard(Box<Permanents>, CardsInExile),
  TargetPlayer(Box<Players>),
  TargetPlayerAtRandom(Box<Players>),
  TargetPlayerAtTime(Box<Players>, Box<Players>),
  TargetPlayerOfPlayersChoice(Box<Players>, Box<Player>),
  TargetPlayerOrPermanent(Box<Players>, Box<Permanents>),
  TargetSpell(Box<Spells>),
  TargetSpellOrAbility(SpellsAndAbilities),
  TargetSpellOrPermanent(SpellsAndPermanents),
  TargetSpellOrTargetPermanent(Box<Spells>, Box<Permanents>),
  UptoNumberAnyTargets(Box<GameNumber>),
  UptoNumberAnyTargetsExcept(Box<GameNumber>, OtherTarget),
  UptoNumberTargetGroupPermanents(Box<GameNumber>, Box<Permanents>, GroupFilter),
  UptoNumberTargetPermanents(Box<GameNumber>, Box<Permanents>),
  UptoNumberTargetPermanentsAndOrCardsInAnyPlayersGraveyard(Box<GameNumber>, Box<Permanents>, Box<Cards>, Box<Players>),
  UptoNumberTargetPermanentsTargetPlayerControls(Box<GameNumber>, Box<Permanents>, Box<Players>),
  UptoNumberTargetPlayers(Box<GameNumber>, Box<Players>),
  UptoNumberTargetSpells(Box<GameNumber>, Box<Spells>),
  UptoOneTargetAbility(Abilities),
  UptoOneTargetExiledCard(Box<CardsInExile>),
  UptoOneTargetPermanent(Box<Permanents>),
  UptoOneTargetPermanentEachPlayerControls(Box<Permanents>, Box<Players>),
  UptoOneTargetPermanent_Optional(Box<Permanents>),
  UptoOneTargetPlayer(Box<Players>),
  UptoOneTargetPlayerOrPermanent(Box<Players>, Box<Permanents>),
  UptoOneTargetSpell(Box<Spells>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_DistributedTarget", content = "args"))]
pub enum DistributedTarget {
  TargetPermanent(Box<Permanents>),
  BetweenOneAndNumberTargetPermanents(Box<GameNumber>, Box<Permanents>),
  AnyNumberOfTargetPermanents(Box<Permanents>),
  NumberTargetPermanents(Box<GameNumber>, Box<Permanents>),
  TargetPlayer(Box<Players>),
  UptoNumberAnyTargets(Box<GameNumber>),
  AnyNumberOfAnyTargets,
  BetweenOneAndNumberAnyTargets(Box<GameNumber>),
  UptoNumberTargetPermanents(Box<GameNumber>, Box<Permanents>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Distribution", content = "args"))]
pub enum Distribution {
  DistributeNumberAmongAnyTargets(Box<GameNumber>),
  DistributeNumberAmongTargets(Box<GameNumber>),
  IfElse(Condition, Box<Distribution>, Box<Distribution>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_AdditionalCostOption", content = "args"))]
pub enum AdditionalCostOption {
  AdditionalCost(Box<Cost>, Box<Actions>),
  NoAdditionalCost(Box<Actions>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Actions", content = "args"))]
pub enum Actions {
  AdditionalCost_Modal(Vec<AdditionalCostOption>),

  Targeted_Modal(Vec<Actions>),
  Targeted_DifferentTargets(Vec<Target>, Box<Actions>),
  TargetedDistributed(Vec<DistributedTarget>, Box<Distribution>, Box<Actions>),
  Targeted(Vec<Target>, Box<Actions>),

  ActionList(Vec<Action>),

  WithX(Box<Comparison>, Box<Actions>),
  X(Box<Comparison>, Box<Actions>),

  Modal_ChooseUptoNumberPawsMayChooseSameModeMoreThanOnce(Box<GameNumber>, Vec<PawMode>),
  Modal_ChooseOneOrChooseOneOrMoreIf(Condition, Vec<Actions>),
  Modal_ChooseOneAtRandom(Vec<Actions>),
  Modal_APlayerChoosesOne(Box<Players>, Vec<Actions>),
  Modal_ChooseAnyNumber(Vec<Actions>),
  Modal_ChooseNumberMayChooseSameModeMoreThanOnce(Box<GameNumber>, Vec<Actions>),
  Modal_ChooseOne(Vec<Actions>),
  Modal_ChooseBoth(Vec<Actions>),
  Modal_ChooseOneOrBoth(Vec<Actions>),
  Modal_ChooseOneOrBothIf(Condition, Vec<Actions>),
  Modal_ChooseOneOrMayChooseTwoIf(Condition, Vec<Actions>),
  Modal_ChooseOneOrMore(Vec<Actions>),
  Modal_ChooseOneOrMore_DifferentTargets(Vec<Actions>),
  Modal_ChooseOneOrMore_Escalate(Box<Cost>, Vec<Actions>),
  Modal_ChooseOneThatHasntBeenChosen(Vec<Actions>),
  Modal_ChooseOneThatHasntBeenChosenThisTurn(Vec<Actions>),
  Modal_ChooseOneThatWasntChosenDuringPlayersLastCombat(Box<Player>, Vec<Actions>),
  Modal_ChooseOne_Entwine(Box<Cost>, Vec<Actions>),
  Modal_ChooseThree(Vec<Actions>),
  Modal_ChooseTwo(Vec<Actions>),
  Modal_ChooseTwo_DifferentTargets(Vec<Actions>),
  Modal_ChooseTwo_Entwine(Box<Cost>, Vec<Actions>),
  Modal_ChooseUptoNumber(Box<GameNumber>, Vec<Actions>),
  Modal_ChooseUptoOne(Vec<Actions>),
  Modal_IfElse(Condition, Box<Actions>, Box<Actions>),
  Modal_MayChooseTwo_DifferentTargets(Vec<Actions>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_LibraryCardEffect", content = "args"))]
pub enum LibraryCardEffect {
  AddSupertype(SuperType),
  AddAbility(Vec<Rule>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_HandEffect", content = "args"))]
pub enum HandEffect {
  AddAbility(Vec<Rule>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_ExiledCardEffect", content = "args"))]
pub enum ExiledCardEffect {
  AddAbility(Vec<Rule>),
  AddAbilityIfItDoesntHaveIt(Vec<Rule>),
  IsPlotted,
  IsForetold,
  IsForetoldForCost(Box<Cost>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardEffect", content = "args"))]
pub enum CardEffect {
  SetPT(PT),

  AddLandType(LandType),
  SetCreatureTypeVariable(CreatureTypeVariable),
  AddCreatureType(CreatureType),
  AddCreatureTypeVariable(CreatureTypeVariable),
  AddCardtype(CardType),

  AddColor(SettableColor),
  SetColor(SettableColor),

  AddAbility(Vec<Rule>),
  HasAllCreatureTypes,

  MayCastFromLibraryWhileSearchingLibrary,
  CountersRemainOnCardAsItMovesBetweenZonesExceptforHandAndLibrary,
  CantBePlayed,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StackEffect", content = "args"))]
pub enum StackEffect {
  CantBeCountered,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_SpellEffect", content = "args"))]
pub enum SpellEffect {
  EntersWithLayerEffectUntil(Vec<LayerEffect>, Box<Expiration>),
  WebSlinging(Box<Cost>),

  ResolvesIntoExileInsteadOfGraveyardWithACounter(CounterType),
  Wither,
  Evoke(Box<Cost>),
  Delve,
  CastWithPerpetualEffect(Vec<PerpetualEffect>),
  AsResolves(Vec<ResolveAction>),
  Offspring(ManaCost),
  Emerge(Box<Cost>),
  Freerunning(ManaCost),
  EntersWithLayerEffect(Vec<LayerEffect>),
  MayCastAsThoughItHadFlash,
  Prowl(ManaCost),
  SplitSecond,
  Conspire,
  CantBeCopied,
  CantBeCountered,
  AdditionalCostForEachColorManaSymbolInCosts(Box<Cost>, Color),
  ReplaceLandTypeVariableWithNewLandTypeVariable(LandTypeWord, LandTypeWord),
  DamageToPermanentsCantBePreventedOrRedirected(Box<Permanents>),
  IfPermanentSpell(Vec<SpellEffect>),
  ReplaceColorWordVariableWithNewColorWordVariable(ColorWordVariable, ColorWordVariable),
  Undaunted,
  ResolvesIntoExileInsteadOfGraveyard,
  If(Condition, Box<SpellEffect>),
  DecreaseManaCostForEach(CostReduction, Box<GameNumber>),
  EntersWithNumberCounters(Box<GameNumber>, CounterType),
  IncreaseManaCostForEach(ManaCost, Box<GameNumber>),
  SetCreatureTypeVariable(CreatureTypeVariable),
  EntersWithACounterOfChoice(Vec<CounterType>),
  IncreaseManaCost(ManaCost),
  DecreaseManaCost(CostReduction),
  DecreaseManaCostX(CostReductionX, Box<GameNumber>),
  EntersWithACounter(CounterType),
  CantBeCounteredBySpells(Box<Spells>),
  Ripple(Box<GameNumber>),
  StickerKicker(Box<Cost>),
  Devour(Box<Permanents>, Box<GameNumber>),
  Blitz(Box<Cost>),
  Affinity(Box<Permanents>),
  Replicate(Box<Cost>),
  AddColor(SettableColor),
  SetColor(SettableColor),
  AddCreatureType(CreatureType),
  AddCreatureTypeVariable(CreatureTypeVariable),
  AddAbilityUntil(Box<Rule>, Expiration),
  AddAbility(Vec<Rule>),
  SetPT(PT),
  Bloodthirst(Box<GameNumber>),
  Casualty(Box<GameNumber>),
  AddCardtype(CardType),
  ResolvesIntoHandInsteadOfGraveyard,
  Storm,
  HasAllCreatureTypes,
  Demonstrate,
  Improvise,
  EntersTapped,
  CantBeCast,
  Sunburst,
  IsAColorlessSourceOfDamage,
  RemoveSupertypes(Vec<SuperType>),
  Cascade,
  Deathtouch,
  Convoke,
  Riot,
  Lifelink,
  Rebound,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_GraveyardCardEffect", content = "args"))]
pub enum GraveyardCardEffect {
  AddAbility(Vec<Rule>),
  CantBeTheTargetOfSpellsOrAbilities(SpellsAndAbilities),
  LosesAllAbilities,
  AddCreatureTypeVariable(CreatureTypeVariable),
}


// ------------------------------------------------------------------------- //
// --                        Static Layer Effects                         -- //
// ------------------------------------------------------------------------- //

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StaticLayerEffect", content = "args"))]
#[allow(dead_code)]
pub enum StaticLayer1Effect {
  IsACopyOf_TheObjectChosenToCopy(StaticCopyEffects),

  // Layer 1 Effect - Copy Of (Internal)
  IsACopyOf(NormalObject, StaticCopyEffects),

  // Layer 1 Effect - Copiable (Internal)
  SetCopiableManaCost(CardManaCost),
  SetCopiablePT(CardPT),
  AddCopiableCardtype(CardType),
  AddCopiableSubtype(SubType),
  AddCopiableAbility(Vec<Rule>),

  // Layer 1 Effect -- Mutate (Internal)
  MutateOnTop(MutateIndex),
  MutateUnder(MutateIndex),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StaticLayerEffect", content = "args"))]
#[allow(dead_code)]
pub enum StaticLayer2Effect {
  // Layer 2 Effect
  SetController(Box<Player>),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StaticLayerEffect", content = "args"))]
#[allow(dead_code)]
pub enum StaticLayer3Effect {
  // Layer 3 Effect
  HasAllNamesOfNonlegendaryCreatures,
  HasTextOfGraveyardCardAndTheText(Box<CardInGraveyards>, Vec<Rule>),
  SetNameToTheChosenName,
  SetName(NameString),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StaticLayerEffect", content = "args"))]
#[allow(dead_code)]
pub enum StaticLayer4Effect {
  // Layer 4 Effect
  AddCardtype(CardType),
  RemoveCardtype(CardType),
  HasAllCreatureTypes,
  AddCreatureType(CreatureType),
  AddArtifactType(ArtifactType),
  AddCreatureTypeVariable(CreatureTypeVariable),
  SetCreatureTypeVariable(CreatureTypeVariable),
  AddLandTypeVariable(LandTypeVariable),
  SetLandTypeVariable(LandTypeVariable),
  AddLandType(LandType),
  AddSupertype(SuperType),
  RemoveSupertype(SuperType),
  SetArtifactType(ArtifactType),
  SetCardtype(CardType),
  SetCardtypes(Vec<CardType>),
  SetCreatureType(CreatureType),
  SetCreatureTypes(Vec<CreatureType>),
  SetLandType(LandType),
  SetLandTypes(Vec<LandType>),
  HasAllLandTypes,
  RemoveAllCreatureTypes,
  RemoveAllLandTypes,

}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StaticLayerEffect", content = "args"))]
#[allow(dead_code)]
pub enum StaticLayer5Effect {
  // Layer 5 Effect
  AddColor(SettableColor),
  SetColor(SettableColor),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StaticLayerEffect", content = "args"))]
#[allow(dead_code)]
pub enum StaticLayer6Effect {
  // Layer 6 Effect
  AddAbilityVariable(AbilityVariable),
  AddAbility(Vec<Rule>),
  AddAbilityFromAnExiledHasable_MayOnlyActivateOnecEachTurn(CardsInExile, Vec<CheckHasable>),
  AddAbilityFromAnExiledHasable(CardsInExile, Vec<CheckHasable>),
  AddAbilityFromExiledHasable(CardInExile, Vec<CheckHasable>),
  AddActivatedAbilitiesAndMaySpendManaAsThoughItWasAnyColorToActivate(Box<ActivatedAbilities>),
  AddAbilityFromTopOfLibraryHasable(Vec<CheckHasable>),
  AddAbilityAndLoseAllOtherAbilities(Vec<Rule>),
  AddAbilityFromCardsRemovedFromDraftWithCardsNamedHasable(Box<Cards>, NameString, Vec<CheckHasable>),
  AddAbilityFromPermanentHasable(Box<Permanent>, Vec<CheckHasable>),
  AddAbilityFromCardsInAPlayersGraveyardHasable(Box<Cards>, Box<Players>, Vec<CheckHasable>),
  AddAbilityFromEachPermanentHasable(Box<Permanents>, Vec<CheckHasable>),
  AddAbilityFromCardsInPlayersGraveyardHasable(Box<Cards>, Box<Player>, Vec<CheckHasable>),
  LosesAbility(CheckHasable),
  LosesAllAbilities,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StaticLayerEffect", content = "args"))]
#[allow(dead_code)]
pub enum StaticLayer7Effect {
  // Layer 7 Effect
  SetPower(Box<GameNumber>),
  SetToughness(Box<GameNumber>),
  AdjustPTX(ModX, ModX, Box<GameNumber>),
  AdjustPTXY(ModX, ModY, Box<GameNumber>, Box<GameNumber>),
  SetPowerAndToughnessBoth(Box<GameNumber>),
  AdjustPT(i32, i32),
  SetPT(PT),
  AdjustPTForEach(i32, i32, Box<GameNumber>),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_StaticLayerEffect", content = "args"))]
pub enum StaticLayerEffect {
  // Layer 1 Effect - Copy Of
  IsACopyOf(NormalObject, StaticCopyEffects),

  IsACopyOf_TheObjectChosenToCopy(StaticCopyEffects),

  // Layer 1 Effect - Copiable (Internal)
  SetCopiableManaCost(CardManaCost),
  SetCopiablePT(CardPT),
  AddCopiableCardtype(CardType),
  AddCopiableSubtype(SubType),
  AddCopiableAbility(Vec<Rule>),

  // Layer 1 Effect -- Mutate (Internal)
  MutateOnTop(MutateIndex),
  MutateUnder(MutateIndex),

  // Layer 2 Effect
  SetController(Box<Player>),

  // Layer 3 Effect
  HasAllNamesOfNonlegendaryCreatures,
  HasTextOfGraveyardCardAndTheText(Box<CardInGraveyards>, Vec<Rule>),
  SetNameToTheChosenName,
  SetName(NameString),

  // Layer 4 Effect
  AddCardtype(CardType),
  RemoveCardtype(CardType),
  HasAllCreatureTypes,
  AddCreatureType(CreatureType),
  AddArtifactType(ArtifactType),
  AddCreatureTypeVariable(CreatureTypeVariable),
  SetCreatureTypeVariable(CreatureTypeVariable),
  AddLandTypeVariable(LandTypeVariable),
  SetLandTypeVariable(LandTypeVariable),
  AddLandType(LandType),
  AddSupertype(SuperType),
  RemoveSupertype(SuperType),
  SetArtifactType(ArtifactType),
  SetCardtype(CardType),
  SetCardtypes(Vec<CardType>),
  SetCreatureType(CreatureType),
  SetCreatureTypes(Vec<CreatureType>),
  SetLandType(LandType),
  SetLandTypes(Vec<LandType>),
  HasAllLandTypes,
  RemoveAllCreatureTypes,
  RemoveAllLandTypes,

  // Layer 5 Effect
  AddColor(SettableColor),
  SetColor(SettableColor),

  // Layer 6 Effect
  AddAbilityVariable(AbilityVariable),
  AddAbility(Vec<Rule>),
  AddAbilityFromAnExiledHasable_MayOnlyActivateOnecEachTurn(CardsInExile, Vec<CheckHasable>),
  AddAbilityFromAnExiledHasable(CardsInExile, Vec<CheckHasable>),
  AddAbilityFromExiledHasable(CardInExile, Vec<CheckHasable>),
  AddActivatedAbilitiesAndMaySpendManaAsThoughItWasAnyColorToActivate(Box<ActivatedAbilities>),
  AddAbilityFromTopOfLibraryHasable(Vec<CheckHasable>),
  AddAbilityAndLoseAllOtherAbilities(Vec<Rule>),
  AddAbilityFromCardsRemovedFromDraftWithCardsNamedHasable(Box<Cards>, NameString, Vec<CheckHasable>),
  AddAbilityFromPermanentHasable(Box<Permanent>, Vec<CheckHasable>),
  AddAbilityFromCardsInAPlayersGraveyardHasable(Box<Cards>, Box<Players>, Vec<CheckHasable>),
  AddAbilityFromEachPermanentHasable(Box<Permanents>, Vec<CheckHasable>),
  AddAbilityFromCardsInPlayersGraveyardHasable(Box<Cards>, Box<Player>, Vec<CheckHasable>),
  LosesAbility(CheckHasable),
  LosesAllAbilities,

  // Layer 7 Effect
  SetPower(Box<GameNumber>),
  SetToughness(Box<GameNumber>),
  AdjustPTX(ModX, ModX, Box<GameNumber>),
  AdjustPTXY(ModX, ModY, Box<GameNumber>, Box<GameNumber>),
  SetPowerAndToughnessBoth(Box<GameNumber>),
  AdjustPT(i32, i32),
  SetPT(PT),
  AdjustPTForEach(i32, i32, Box<GameNumber>),
}

// ------------------------------------------------------------------------- //
// --                              Triggers                               -- //
// ------------------------------------------------------------------------- //

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Trigger", content = "args"))]
pub enum Trigger {
  // connive
  WhenAPermanentConnives(Box<Permanents>),

  // bending
  WhenAPlayerWaterEarthFireOrAirBends(Box<Players>),

  // teamwork
  WhenAPermanentBecomesTappedToPayATeamworkCost(Box<Permanents>),

  // station
  WhenAPermanentStationsAPermanent(Box<Permanents>, Box<Permanents>),

  // Activate an Ability
  WhenAPlayerActivatesAnAbility(Box<Players>, Box<ActivatedAbilities>),
  WhenAnAbilityIsActivated(Box<ActivatedAbilities>),

  // Add Mana
  WhenAPermanentIsTappedForMana(Box<Permanents>),
  WhenAPermanentIsTappedForManaOfColor(Box<Permanents>, ManaProduce),
  WhenAPlayerTapsAPermanentForMana(Box<Players>, Box<Permanents>),
  WhenAPlayerTapsAPermanentForManaOfColor(Box<Players>, Box<Permanents>, ManaProduce),
  WhenAManaAbilityOfAPermanentResolves(Box<Permanents>),
  WhenAnAbilityCausesAPlayerToAddMana(Abilities, Box<Players>, ManaProduce),

  // Archenemy
  WhenAPlayerSetsASchemeInMotion(Box<Players>, Schemes),

  // Attach
  WhenAPermanentBecomesAttachedToAPermanent(Box<Permanents>, Box<Permanents>),
  WhenAPermanentBecomesUnattachedFromAPermanent(Box<Permanents>, Box<Permanents>),

  // Attractions
  WhenAPlayerClaimsThePrizeOfAnAttraction(Box<Players>),
  WhenAPlayerOpensAnAttraction(Box<Players>),
  WhenAPlayerVisitsAnAttraction(Box<Players>, Box<Permanents>),
  WhenAPlayerRollsToVisitTheirAttractions(Box<Players>),

  // Cast a spell
  WhenASpellBecomesTheTargetOfASpellOrAbility(Box<Spells>, Box<SpellsAndAbilities>),
  WhenAPlayerCastsASpellWithANumberOfTargets(Box<Players>, Box<Spells>, Box<Comparison>),
  WhenAPlayerCastsASpell(Box<Players>, Box<Spells>),
  WhenAPlayerCastsASpellThatTargetsAnyNumberOfPermanents(Box<Players>, Box<Spells>, Box<Permanents>),
  WhenAPlayerCastsTheirNthSpellInATurn(Box<Players>, Box<Comparison>, Box<Spells>),
  WhenASpellIsCast(Box<Spells>),
  WhenTheNthSpellIsCastInATurn(Box<Spells>, Box<Comparison>),
  WhenAPlayerCastsASpellFromAnywhereOtherThanTheirHand(Box<Players>, Box<Spells>),

  // cast_a_spell_or_activate_an_ability
  WhenAPlayerCastsASpellOrActivatesAnAbility(Box<Players>, Box<Spells>, Box<ActivatedAbilities>),

  // cause_an_ability_to_trigger
  WhenAPermanentEnteringTheBattlefieldCausesAnAbilityToTrigger(Box<Permanents>),
  WhenAPermanentEnteringTheBattlefieldUnderAPlayersControlCausesItsAbilityToTrigger(Box<Permanents>, Box<Players>),
  WhenAPermanentAttackingCausesItsAbilityToTrigger(Box<Permanents>),

  // champion
  WhenAPermanentIsChampionedWithAPermanent(Box<Permanents>, Box<Permanents>),

  // clash
  WhenAPlayerClashes(Box<Players>),
  WhenAPlayerClashesAndWins(Box<Players>),

  // class
  WhenAClassBecomesLevel(Box<Permanents>, Box<GameNumber>),

  // commit_a_crime
  WhenAPlayerCommitsACrime(Box<Players>),

  // collect_evidence
  WhenAPlayerCollectsEvidence(Box<Players>),

  // conjure
  WhenAPlayerConjuresAnyNumberOfOtherCards(Box<Players>),
  WhenAPlayerConjuresAnyNumberOfCards(Box<Players>),

  // copy_a_spell
  WhenAPlayerCopiesASpell(Box<Players>, Box<Spells>),

  // counter_a_spell
  WhenASpellIsCountered(Box<Spells>),
  WhenASpellOrAbilityCountersASpell(SpellsAndAbilities, Box<Spells>),

  // craft
  WhenAPermanentIsExiledFromTheBattlefieldWhileAPlayerIsActivatingACraftAbility(Box<Permanents>, Box<Players>),

  // create_tokens
  WhenAPlayerCreatesAToken(Box<Players>, Box<Permanents>),
  WhenAPlayerCreatesAnyNumberOfTokensForTheFirstTimeEachTurn(Box<Players>, Box<Permanents>),
  WhenAPlayerCreatesAnyNumberOfTokens(Box<Players>, Box<Permanents>),

  // crew
  WhenAVehicleBecoemsCrewedForTheFirstTimeEachTurn(Box<Permanents>),
  WhenAVehicleBecoemsCrewed(Box<Permanents>),
  WhenACreatureCrewsAVehicle(Box<Permanents>, Box<Permanents>),

  // cumulative_upkeep
  WhenAPlayerDoesntPayAPermanentsCumulativeUpkeepCost(Box<Players>, Box<Permanents>),
  WhenAPlayerPaysAPermanentsCumulativeUpkeepCost(Box<Players>, Box<Permanents>),
  WhenAPermanentsCumulativeUpkeepCostIsPaid(Box<Permanents>),

  // cycle_or_discard
  WhenAPlayerCyclesACard(Box<Players>, Box<CardsInHand>),
  WhenAPlayerCyclesACardForTheFirstTimeEachTurn(Box<Players>, Box<CardsInHand>),
  WhenAPlayerCyclesOrDiscardsACard(Box<Players>, Box<CardsInHand>),
  WhenAPlayerDiscardsACard(Box<Players>, Box<CardsInHand>),
  WhenAPlayerDiscardsAnyNumberOfCards(Box<Players>, Box<CardsInHand>),
  WhenAPlayerDiscardsAnyNumberOfCardsForTheFirstTimeEachTurn(Box<Players>, CardsInHand, Box<Players>),
  WhenASpellOrAbilityCausesAPlayerToDiscardACard(SpellsAndAbilities, Box<Players>, Box<CardsInHand>),
  WhenASpellOrAbilityCausesAPlayerToDiscardAnyNumberOfCards(SpellsAndAbilities, Box<Players>),
  WhenAnyNumberOfPlayersDiscardAnyNumberOfCards(Box<Players>, Box<CardsInHand>),

  // day_night
  WhenDayBecomesNightOrNightBecomesDay,

  // deal_damage
  WhenACreatureDealsCombatDamage(Box<Permanents>),
  WhenACreatureDealsCombatDamageToAPermanent(Box<Permanents>, Box<Permanents>),
  WhenACreatureDealsCombatDamageToAPlayer(Box<Permanents>, Box<Players>),
  WhenACreatureDealsCombatDamageToAPlayerForTheFirstTimeEachTurn(Box<Permanents>, Box<Players>),
  WhenACreatureDealsCombatDamageToAnyNumberOfPermanents(Box<Permanents>, Box<Permanents>),
  WhenAPermanentDealsAnAmountDamageToAPlayer(Box<Permanents>, Box<Comparison>, Box<Players>),
  WhenAPermanentDealsDamage(Box<Permanents>),
  WhenAPermanentDealsDamageToAPermanent(Box<Permanents>, Box<Permanents>),
  WhenAPermanentDealsDamageToAPlayer(Box<Permanents>, Box<Players>),
  WhenAPermanentDealsAnAmountDamage(Box<Permanents>, Box<Comparison>),
  WhenAPermanentDealsDamageToAnyNumberOfPermanents(Box<Permanents>, Box<Permanents>),
  WhenAPermanentDealsDamageToAnyNumberOfPlayersForTheFirstTimeEachTurn(Box<Permanents>, Box<Players>),
  WhenAPermanentIsDealtAnAmountOfDamage(Box<Permanents>, Box<Comparison>),
  WhenAPermanentIsDealtCombatDamage(Box<Permanents>),
  WhenAPermanentIsDealtDamage(Box<Permanents>),
  WhenAPermanentIsDealtDamageForTheFirstTimeEachTurn(Box<Permanents>),
  WhenAPermanentIsDealtExcessDamage(Box<Permanents>),
  WhenAPermanentIsDealtExcessNoncombatDamage(Box<Permanents>),
  WhenAPlayerIsDealtCombatDamage(Box<Players>),
  WhenAPlayerIsDealtDamage(Box<Players>),
  WhenAPlayerIsDealtNoncombatDamage(Box<Players>),
  WhenASourceDealsAnAmountOfDamageToAPermanent(DamageSources, Box<Comparison>, Box<Permanents>),
  WhenASourceDealsAnAmountOfDamageToAPlayer(DamageSources, Box<Comparison>, Box<Players>),
  WhenASourceDealsDamage(DamageSources),
  WhenASourceDealsDamageToAPermanent(DamageSources, Box<Permanents>),
  WhenASourceDealsNoncombatDamageToAPermanent(DamageSources, Box<Permanents>),
  WhenASourceDealsDamageToAPlayer(DamageSources, Box<Players>),
  WhenASourceDealsDamageToAnyNumberOfPlayersAndOrPermanents(DamageSources, Box<Players>, Box<Permanents>),
  WhenASourceDealsNoncombatDamageToAPlayer(DamageSources, Box<Players>),
  WhenASpellDealsDamage(Box<Spells>),
  WhenASpellDealsDamageToAPermanent(Box<Spells>, Box<Permanents>),
  WhenASpellDealsDamageToAPlayer(Box<Spells>, Box<Players>),
  WhenAnyNumberOfCreaturesAPlayerControlsDealCombatDamageToAnyNumberOfPlayers(Box<Permanents>, Box<Players>, Box<Players>),
  WhenAnyNumberOfCreaturesDealCombatDamageToAPermanent(Box<Permanents>, Box<Permanents>),
  WhenAnyNumberOfCreaturesDealCombatDamageToAPlayer(Box<Permanents>, Box<Players>),
  WhenAnyNumberOfCreaturesDealCombatDamageToAnyNumberOfPlayers(Box<Permanents>, Box<Players>),
  WhenAnyNumberOfCreaturesDealDamageToAPlayer(Box<Permanents>, Box<Players>),
  WhenAnyNumberOfPermanentsAreDealtExcessNoncombatDamage(Box<Permanents>),
  WhenAnyNumberOfPermanentsDealDamageToAnyNumberOfPlayers(Box<Permanents>, Box<Players>),
  WhenPlayersAreDealtCombatDamage(Box<Players>),

  // destroy
  WhenASpellOrAbilityDestroysAPermanent(SpellsAndAbilities, Box<Permanents>),
  WhenAPermanentIsDestroyed(Box<Permanents>),

  // devour
  WhenACreatureIsDevoured(Box<Permanents>),

  // discover
  WhenAPlayerDiscovers(Box<Players>),

  // draw_a_card__digital
  WhenAPlayerDrawsASpecificCard(Box<Players>, Box<Cards>),

  // draw_a_card__reveal_this_way
  WhenAPlayerDrawsARevealedCard(Box<Players>, Box<Cards>),
  WhenAPlayerRevealsFirstCardDrawn(Box<Players>, Box<Cards>),

  // draw_a_card
  WhenAPlayerDrawsACardExceptTheFirstCardDuringTheirDrawStep(Box<Players>),
  WhenAPlayerDrawsTheirNthCardEachTurn(Box<Players>, Box<Comparison>),
  WhenAPlayerDrawsACardDuringTheirTurn(Box<Players>),
  WhenAPlayerDrawsTheirNthCardDuringTheirTurn(Box<Players>, Box<Comparison>),
  WhenAPlayerDrawsACard(Box<Players>),
  WhenAPlayerDrawsTheirNthCardDuringTheirDrawStep(Box<Players>, Box<Comparison>),

  // dungeon
  WhenAPlayerCompletesADungeon(Box<Players>),

  // echo
  WhenAnEchoCostOfAPermanentIsPaid(Box<Permanents>),

  // energy
  WhenAPlayerGetsEnergy(Box<Players>),

  // enter_graveyard__from_anywhere_other_than_the_battlefield
  WhenACardIsPutIntoAGraveyardFromAnywhereOtherThanTheBattlefield(Box<Cards>, Box<Players>),

  // enter_graveyard__from_anywhere
  WhenACardIsPutIntoAPlayersGraveyardFromAnywhere(Box<Cards>, Box<Players>),
  WhenAnyNumberOfCardsArePutIntoAPlayersGraveyardFromAnywhere(Box<Cards>, Box<Players>),
  WhenAnyNumberOfCardsArePutIntoAPlayersGraveyardFromAnywhereForTheFirstTimeEachTurn(Box<Cards>, Box<Players>),
  WhenASpellOrAbilityCausesAPermanentToBePutIntoAPlayersGraveyard(SpellsAndAbilities, Box<Permanents>, Box<Players>),

  // enter_graveyard__from_battlefield
  WhenAPermanentDies(Box<Permanents>),
  WhenAnyNumberOfCreaturesOrPlaneswalkersDie(Box<Permanents>),
  WhenAPermanentIsPutIntoAPlayersGraveyard(Box<Permanents>, Box<Players>),
  WhenAnyNumberOfPermanentsArePutIntoAPlayersGraveyards(Box<Permanents>, Box<Players>),

  // enter_graveyard__from_hand
  WhenACardIsPutIntoAPlayersGraveyardFromTheirHand(Box<Cards>, Box<Players>),

  // enter_graveyard__from_library
  WhenACardIsPutIntoAPlayersGraveyardFromTheirLibrary(Box<Cards>, Box<Players>),
  WhenAnyNumberOfCardsArePutIntoAPlayersGraveyardFromTheirLibrary(Box<Cards>, Box<Players>),

  // enter_hand__from_graveyard
  WhenAGraveyardCardIsPutIntoHand(Box<CardsInGraveyards>),

  // enter_hand__from_library
  WhenASpecificCardIsPutIntoAPlayersHandFromTheirLibrary(Box<CardsInHand>, Box<Players>),

  // enter_library__from_anywhere
  WhenAnyNumberOfCardsArePutIntoAPlayersLibraryFromAnywhere(Box<Players>),

  // expend
  WhenAPlayerExpendsAnAmount(Box<Players>, Box<Comparison>),

  // gift
  WhenAPlayerGivesAGift(Box<Players>),

  // plot
  WhenACardBecomesPlotted(Box<CardsInHand>),

  // roll_dice
  WhenAPlayerRollsADie(Box<Players>),
  WhenAPlayerRollsADiesHighestNaturalResult(Box<Players>),
  WhenAPlayerRollsANatural20(Box<Players>),
  WhenAPlayerRollsAValueOnADie(Box<Players>, Box<Comparison>),
  WhenAPlayerRollsAnyNumberOfDice(Box<Players>),
  WhenAPlayerRollsTheirNthDieEachTurn(Box<Players>, Box<GameNumber>),

  // saddle
  WhenACreatureSaddlesAMount(Box<Permanents>, Box<Permanents>),

  // stickers
  WhenAPlayerPlacesASticker(Box<Players>),
  WhenAPlayerPutsAStickerOnAPermanent(Box<Players>, Box<Permanents>),
  WhenAPlayerPutsAnAbilityStickerOnAPermanent(Box<Players>, Box<Permanents>),
  WhenAPlayerPutsAnArtStickerOnAPermanent(Box<Players>, Box<Permanents>),
  WhenAPlayerPutsANameStickerOnAPermanent(Box<Players>, Box<Permanents>),

  // static
  WhenAPlayerHasNumberCardsInHand(Box<Players>, Box<Comparison>),
  WhenAPlayerHasAnAmountOfLife(Box<Players>, Box<Comparison>),
  WhenAPlayerControlsAPermanent(Box<Players>, Box<Permanents>),
  WhenAPlayerControlsNoPermanents(Box<Players>, Box<Permanents>),
  WhenAPlayerControlsNumberPermanents(Box<Players>, Box<Permanents>, Box<Comparison>),
  WhenPlayersControlsNoPermanents(Box<Players>, Box<Permanents>),
  WhenAPermanentHasNumberCountersOfType(Box<Permanents>, Box<Comparison>, CounterType),
  WhenAnyNumberOfPermanentsAreOnTheBattlefield(Box<Permanents>),
  WhenNoPermanentsAreOnTheBattlefield(Box<Permanents>),
  WhenAPermanentHasAbility(Box<Permanents>, CheckHasable),
  WhenAPermanentHasPower(Box<Permanents>, Box<Comparison>),
  WhenAPlayerHasNoCardsInTheirGraveyard(Box<Players>),
  WhenAColorIsntTheMostCommonOrTiedForMostCommonColorAmongPermanents(Color, Box<Permanents>),

  // turn__declare_attackers
  WhenACreatureAttacks(Box<Permanents>),
  WhenACreatureAttacksABattle(Box<Permanents>, Box<Permanents>),
  WhenACreatureAttacksAPlaneswalker(Box<Permanents>, Box<Permanents>),
  WhenACreatureAttacksAPlayer(Box<Permanents>, Box<Players>),
  WhenACreatureAttacksAPlayerOrPlaneswalkerTheyControl(Box<Permanents>, Box<Players>),
  WhenACreatureAttacksAlone(Box<Permanents>),
  WhenACreatureAttacksForTheFirstTimeEachTurn(Box<Permanents>),
  WhenANumberOfCreaturesAttack(Box<Comparison>, Box<Permanents>),
  WhenANumberOfCreaturesAttackAPlayer(Box<Comparison>, Box<Permanents>, Box<Players>),
  WhenAPlayerAttacks(Box<Players>),
  WhenAPlayerAttacksAPlaneswalkerWithAnyNumberOfCreatures(Box<Players>, Box<Permanents>, Box<Permanents>),
  WhenAPlayerAttacksAPlayer(Box<Players>, Box<Players>),
  WhenAPlayerAttacksAPlayerAndOrPlaneswalkerTheyControl(Box<Players>, Box<Players>),
  WhenAPlayerAttacksAPlayerWithANumberOfCreatures(Box<Players>, Box<Players>, Box<Comparison>, Box<Permanents>),
  WhenAPlayerAttacksAPlayerWithAnyNumberOfCreatures(Box<Players>, Box<Players>, Box<Permanents>),
  WhenAPlayerAttacksAnyNumberOfPlaneswalkers(Box<Players>, Box<Permanents>),
  WhenAPlayerAttacksAnyNumberOfPlayers(Box<Players>, Box<Players>),
  WhenAPlayerAttacksWithACreature(Box<Players>, Box<Permanents>),
  WhenAPlayerAttacksWithANumberOfCreatures(Box<Players>, Box<Comparison>, Box<Permanents>),
  WhenAPlayerAttacksWithASingleCreatureAndANumberOfOtherCreatures(Box<Players>, Box<Permanents>, Box<Comparison>, Box<Permanents>),
  WhenAPlayerAttacksWithAnyNumberOfCreatures(Box<Players>, Box<Permanents>),
  WhenAPlayerAttacksWithAnyNumberOfGroupCreatures(Box<Players>, Box<Permanents>, GroupFilter),
  WhenAPlayerIsAttacked(Box<Players>),
  WhenAnyNumberOfPlayersAreAttacked(Box<Players>),
  WhenASingleCreatureAndANumberOfOtherCreaturesAttack(Box<Permanent>, Box<Comparison>, Box<Permanents>),
  WhenASingleCreatureAndANumberOfOtherCreaturesAttackDifferentPlayers(Box<Permanent>, Box<Comparison>, Box<Permanents>),
  WhenASingleCreatureAttacksWithExactlyOneOtherCreature(Box<Permanent>),
  WhenAllCreaturesAttack(Box<Permanents>),
  WhenAnyNumberOfCreaturesAttack(Box<Permanents>),
  WhenAnyNumberOfCreaturesAttackAPlayer(Box<Permanents>, Box<Players>),
  WhenAnyNumberOfCreaturesAttackAPlayerOrPlaneswalkerTheyControl(Box<Permanents>, Box<Players>),
  WhenAnyNumberOfCreaturesAttackAnyNumberOfPlayers(Box<Permanents>, Box<Players>),

  // turn__declare_attackers__enlist
  WhenACreatureEnlistsACreature(Box<Permanents>, Box<Permanents>),

  // turn__declare_blockers
  WhenACreatureAttacksAPlayerAndIsntBlocked(Box<Permanents>, Box<Players>),
  WhenACreatureAttacksAndIsntBlocked(Box<Permanents>),
  WhenACreatureBecomesBlocked(Box<Permanents>),
  WhenACreatureBecomesBlockedByACreature(Box<Permanents>, Box<Permanents>),
  WhenACreatureBecomesBlockedByAnyNumberOfCreatures(Box<Permanents>, Box<Permanents>),
  WhenACreatureBecomesBlockedByANumberOfCreatures(Box<Permanents>, Box<Comparison>, Box<Permanents>),
  WhenACreatureBlocks(Box<Permanents>),
  WhenACreatureBlocksACreature(Box<Permanents>, Box<Permanents>),
  WhenACreatureBlocksANumberOfCreatures(Box<Permanents>, Box<Comparison>, Box<Permanents>),
  WhenACreatureBlocksAnyNumberOfCreatures(Box<Permanents>, Box<Permanents>),
  WhenANumberOfCreaturesAttacksAPlayerAndArentBlocked(Box<Comparison>, Box<Permanents>, Box<Players>),
  WhenAnyNumberOfCreaturesBecomeBlocked(Box<Permanents>),
  WhenAnyNumberOfCreaturesBlock(Box<Permanents>),

  // turn__end_of_combat
  AtTheEndOfCombat,
  AtTheEndOfTheFirstCombat,

  // enter_battlefield
  WhenAPermanentEntersTheBattlefieldOrTheCreatureItHauntsDies(Box<Permanents>),
  WhenAnyNumberOfPermanentsEnterTheBattlefieldUnderAPlayersControl(Box<Permanents>, Box<Players>),
  WhenAnyNumberOfPermanentsEnterTheBattlefield(Box<Permanents>),
  WhenAPermanentEntersTheBattlefield(Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldAttachedToAPermanent(Box<Permanents>, Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldAttacking(Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldDuringTheDeclareAttacksStep(Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldFromAPlayersGraveyard(Box<Permanents>, Box<Players>),
  WhenAPermanentEntersTheBattlefieldFromAPlayersHand(Box<Permanents>, Box<Players>),
  WhenAPermanentEntersTheBattlefieldFromAnywhereOtherThanAGraveyardOrExile(Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldFromAnywhereOtherThanTheirHand(Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldFromExile(Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldFromExileOrWasCastFromExile(Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldTapped(Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldTransformed(Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldUnderAPlayersControl(Box<Permanents>, Box<Players>),
  WhenAPermanentEntersTheBattlefieldUnderAPlayersControlWithoutBeingPlayed(Box<Permanents>, Box<Players>),
  WhenAPermanentEntersTheBattlefieldUntapped(Box<Permanents>),
  WhenAPermanentEntersTheBattlefieldWithAnyCounters(Box<Permanents>),

  // prevent_damage
  WhenDamageThatWouldBeDealtToAPlayerIsPrevented(Box<Players>),

  // proliferate
  WhenAPlayerProliferates(Box<Players>),

  // put_a_spell_or_ability_onto_the_stack
  WhenASpellOrAbilityIsPutOntoTheStack(SpellsAndAbilities),

  // enter_command_zone__from_battlefield
  WhenAPermanentIsPutIntoTheCommandZone(Box<Permanents>),

  // enter_command_zone__from_anywhere
  WhenACardIsPutIntoTheCommandZoneFromAnywhere(Box<Cards>),

  // leave_graveyard
  WhenAGraveyardCardLeaves(Box<CardsInGraveyards>),
  WhenAnyNumberOfGraveyardCardsLeave(Box<CardsInGraveyards>),

  // leave_battlefield
  WhenAPermanentLeavesTheBattlefield(Box<Permanents>),
  WhenAPermanentLeavesTheBattlefieldWithoutDying(Box<Permanents>),
  WhenAnyNumberOfPermanentsLeaveTheBattlefield(Box<Permanents>),
  WhenAnyNumberOfPermanentsLeaveTheBattlefieldWithoutDying(Box<Permanents>),

  // gain_control
  WhenAPlayerGainsControlOfAPermanentFromAPlayer(Box<Players>, Box<Permanents>, Box<Players>),

  // lose_control
  WhenAPlayerLosesControlOfAPermanent(Box<Players>, Box<Permanents>),

  // evolve
  WhenAPermanentEvolves(Box<Permanents>),

  // exile
  WhenAnyNumberOfPermanentsAndOrGraveyardCardsArePutIntoExile(Box<Permanents>, Box<CardsInGraveyards>),
  WhenAPermanentIsExiled(Box<Permanents>),
  WhenACardIsPutIntoExile(Box<Cards>),
  WhenAnyNumberOfCardsArePutIntoExile(Box<Cards>),
  WhenAnyNumberOfCardsArePutIntoExileFromAPlayersGraveyard(Box<Cards>, Box<Players>),
  WhenAnyNumberOfCardsArePutIntoExileFromAPlayersGraveyardAndOrLibrary(Box<Cards>, Box<Players>),
  WhenAnyNumberOfGenericCardsArePutIntoExileFromAPlayersHand(Box<Players>),
  WhenASpellOrAbilityExilesAnyNumberOfPermanents(SpellsAndAbilities, Box<Permanents>),

  // pays_life
  WhenAPlayerPaysLife(Box<Players>),
  WhenAPlayerPaysLifeToActivateAnAbility(Box<Players>, Box<ActivatedAbilities>),

  // forage
  WhenAPlayerForages(Box<Players>),

  // investigate
  WhenAPlayerInvestigatesForTheFirstTimeEachTurn(Box<Players>),
  WhenAPlayerInvestigates(Box<Players>),

  // kicker
  WhenAPlayerKicksASpell(Box<Players>, Box<Spells>),

  // mentor
  WhenACreatureMentorsACreature(Box<Permanents>, Box<Permanents>),

  // mill
  WhenAPlayerMillsASpecificCard(Box<Players>, Box<Cards>),
  WhenAPlayerMillsAnyNumberOfSpecificCards(Box<Players>, Box<Cards>),
  WhenAPlayerMillsAnyNumberOfCards(Box<Players>),
  WhenAnyNumberOfSpecificCardsAreMilled(Box<Cards>),

  // lose_life
  WhenAPlayerLosesLife(Box<Players>),
  WhenAPlayerLosesLifeDuringTheirTurn(Box<Players>),
  WhenAPlayerLosesLifeForTheFirstTimeEachTurn(Box<Players>),
  WhenAnyNumberOfPlayersEachLoseAnAmountOfLife(Box<Players>, Box<Comparison>),
  WhenAnyNumberOfPlayersLoseLife(Box<Players>),

  // exploit
  WhenAPermanentExploitsAPermanent(Box<Permanents>, Box<Permanents>),

  // explore
  WhenAPermanentExplores(Box<Permanents>),
  WhenAPermanentExploresACardOfType(Box<Permanents>, Box<Cards>),

  // fight
  WhenAPermanentFights(Box<Permanents>),
  WhenAnyNumberOfPermanentsFight(Box<Permanents>),

  // flip_coins
  WhenAPlayerWinsACoinFlip(Box<Players>),
  WhenAPlayerLosesACoinFlip(Box<Players>),

  // foretell
  WhenAPlayerForetellsACard(Box<Players>),

  // gain_life
  WhenAPlayerGainsLife(Box<Players>),
  WhenAPlayerGainsLifeDuringTheirTurn(Box<Players>),
  WhenAPlayerGainsLifeForTheFirstTimeEachTurn(Box<Players>),
  WhenASpellCausesAPlayerToGainLife(Box<Spells>, Box<Players>),

  // lose_the_game
  WhenAPlayerLosesTheGame(Box<Players>),

  // manifest_dread
  WhenAPlayerManifestsDread(Box<Players>),

  // monstrosity
  WhenAPermanentBecomesMonstrous(Box<Permanents>),

  // mutate
  WhenACreatureMutates(Box<Permanents>),

  // phasing
  WhenAPermanentPhasesOut(Box<Permanents>),
  WhenAPermanentPhasesIn(Box<Permanents>),
  WhenAnyNumberOfPermanentsPhaseOut(Box<Permanents>),

  // planechase
  WhenAPlaneHasNumberCountersOfType(Planes, Box<Comparison>, CounterType),
  WhenAPlayerEncountersAPhenomenon(Box<Players>, Phenomena),
  WhenAPlayerPlaneswalksAwayFromAPlane(Box<Players>, Planes),
  WhenAPlayerPlaneswalksToAPlane(Box<Players>, Planes),
  WhenAPlayerRollsABlankOnThePlanarDie(Box<Players>),
  WhenAPlayerRollsThePlanarDie(Box<Players>),
  WhenChaosEnsues,

  // play_a_card
  WhenAPlayerPlaysACard(Box<Players>, Box<Cards>),
  WhenAPlayerPlaysACardFromExile(Box<Players>, CardsInExile),

  // play_a_land
  WhenAPlayerPlaysALand(Box<Players>, Box<Permanents>),
  WhenAPlayerPlaysALandFromAmongCardsInExile(Box<Players>, Box<Permanents>, CardsInExile),
  WhenAPlayerPlaysALandFromExile(Box<Players>, Box<Permanents>),
  WhenAPlayerPlaysALandFromAnywhereOtherThanTheirHand(Box<Players>, Box<Permanents>),

  // put_counters
  WhenACounterOfTypeIsPutOnAPermanent(CounterType, Box<Permanents>),
  WhenAPlayerPutsACounterOfTypeOnAPermanent(Box<Players>, CounterType, Box<Permanents>),
  WhenAPlayerPutsAnyNumberOfCountersOfTypeOnAPermanent(Box<Players>, CounterType, Box<Permanents>),
  WhenAPlayerPutsAnyNumberOfCountersOfTypeOnAnyNumberOfPermanents(Box<Players>, CounterType, Box<Permanents>),
  WhenAPlayerPutsAnyNumberOfCountersOnAPermanent(Box<Players>, Box<Permanents>),
  WhenAPlayerPutsCountersOnAPlayer(Box<Players>, Box<Players>),
  WhenAnyNumberOfCountersArePutOnAPermanent(Box<Permanents>),
  WhenAnyNumberOfCountersArePutOnASpecificPermanentForTheFirstTimeEachTurn(Box<Permanents>),
  WhenAnyNumberOfCountersAreRemovedFromAPermanent(Box<Permanents>),
  WhenAnyNumberOfCountersOfTypeArePutOnAPermanent(CounterType, Box<Permanents>),
  WhenAnyNumberOfCountersOfTypeArePutOnASpecificPermanentForTheFirstTimeEachTurn(CounterType, Box<Permanents>),
  WhenAnyNumberOfCountersOfTypeArePutOnAnyNumberOfPermanents(CounterType, Box<Permanents>),
  WhenTheNthCounterOfTypeIsPutOnAPermanent(CounterType, Box<Permanents>, Box<GameNumber>),

  // put_permanent_on_battlefield
  WhenAPlayerPutsAPermanentOnTheBattlefield(Box<Players>, Box<Permanents>),

  // remove_counters__exile
  WhenACounterOfTypeIsRemovedFromAnExiledCard(CounterType, CardsInExile),
  WhenAPlayerRemovesACounterOfTypeFromAnExiledCard(Box<Players>, CounterType, CardsInExile),
  WhenTheLastCounterOfTypeIsRemovedFromAnExiledCard(CounterType, CardsInExile),

  // remove_counters
  WhenACounterOfTypeIsRemovedFromAPermanent(CounterType, Box<Permanents>),
  WhenAPlayerRemovesTheLastCounterOfTypeFromAPermanent(Box<Players>, CounterType, Box<Permanents>),
  WhenAnyNumberOfCountersOfTypeAreRemovedFromAPermanent(CounterType, Box<Permanents>),
  WhenTheLastCounterOfTypeIsRemovedFromAPermanent(CounterType, Box<Permanents>),

  // renown
  WhenACreatureBecomesRenowned(Box<Permanents>),

  // enter_hand__from_battlefield
  WhenAPermanentIsReturnedToAPlayersHand(Box<Permanents>, Box<Players>),
  WhenAnyNumberOfPermanentsAreReturnedToHand(Box<Permanents>),

  // room
  WhenAPlayerFullyUnlocksARoom(Box<Players>, Box<Permanents>),
  WhenAPlayerUnlocksADoor(Box<Players>, Box<Permanents>),

  // ring
  WhenAPlayerChoosesARingBearer(Box<Players>),
  WhenTheRingTemptsAPlayer(Box<Players>),

  // sacrifice
  WhenAPlayerSacrificesAPermanent(Box<Players>, Box<Permanents>),
  WhenAPlayerSacrificesAPermanentForEmerge(Box<Players>, Box<Permanents>),
  WhenAPlayerSacrificesAnyNumberOfPermanentsToActivateAnAbility(Box<Players>, Box<ActivatedAbilities>),
  WhenAPlayerSacrificesAnyNumberOfPermanents(Box<Players>),
  WhenAPermanentIsSacrificed(Box<Permanents>),

  // saddle
  WhenAPermanentBecomesSaddledForTheFirstTimeInATurn(Box<Permanents>),

  // saga
  WhenTheFinalChapterOfASagaTriggers(Box<Permanents>),
  WhenTheFinalChapterOfASagaResolves(Box<Permanents>),

  // scry
  WhenAPlayerScrys(Box<Players>),
  WhenAPlayerChoosesToPutAnyCardsOnTheBottomOfTheirLibraryWhileScrying(Box<Players>),

  // search_library
  WhenAPlayerSearchesTheirLibrary(Box<Players>),

  // seek
  WhenAPlayerSeeksAnyNumberOfCards(Box<Players>),

  // shuffle
  WhenASpellOrAbilityCausesAPlayerToShuffleTheirLibrary(SpellsAndAbilities, Box<Players>),
  WhenASpellOrAbilityCausesItsControllerToShuffleTheirLibrary(SpellsAndAbilities),
  WhenAPlayerShufflesTheirLibrary(Box<Players>),

  // solves_a_case
  WhenAPlayerSolvesACase(Box<Players>),

  // specialize
  WhenACreatureSpecializes(Box<Permanents>),
  WhenAGraveyardCardSpecializes(Box<CardsInGraveyards>),
  WhenCardSpecializes(SingleCard),

  // surveil
  WhenAPlayerSurveils(Box<Players>),
  WhenAPlayerSurveilsForTheFirstTimeEachTurn(Box<Players>),

  // tap
  WhenAnyNumberOfPermanentsBecomeTapped(Box<Permanents>),
  WhenAPermanentBecomesTapped(Box<Permanents>),
  WhenAPermanentBecomesTappedForTheFirstTimeEachTurn(Box<Permanents>),
  WhenAPlayerTapsAPermanent(Box<Players>, Box<Permanents>),

  // targets
  WhenAPermanentBecomesTheTargetOfASpell(Box<Permanents>, Box<Spells>),
  WhenAPermanentBecomesTheTargetOfASpellOrAbility(Box<Permanents>, SpellsAndAbilities),
  WhenAPermanentBecomesTheTargetOfASpellOrAbilityForTheFirstTimeEachTurn(Box<Permanents>, SpellsAndAbilities),
  WhenAPermanentBecomesTheTargetOfAnAbility(Box<Permanents>, Abilities),
  WhenAPlayerBecomesTheTargetOfAnAbility(Box<Players>, Abilities),
  WhenAPlayerBecomesTheTargetOfASpell(Box<Players>, Box<Spells>),
  WhenAPlayerBecomesTheTargetOfASpellOrAbility(Box<Players>, SpellsAndAbilities),
  WhenAPlayerChoosesTargetsForASpellOrAbility(Box<Players>, SpellsAndAbilities),
  WhenAnyNumberOfPlayersAndOrPermanentsBecomeTheTargetOfASpellOrAbility(Box<Players>, Box<Permanents>, SpellsAndAbilities),

  // the_monarch
  WhenAPlayerBecomesTheMonarch(Box<Players>),

  // training
  WhenAPermanentTrains(Box<Permanents>),

  // transform
  WhenAPermanentTransformsFromIntoAPermanent(Box<Permanents>, Box<Permanents>),
  WhenAPermanentTransforms(Box<Permanents>),

  // turn__beginning_of_combat
  AtTheBeginningOfCombatDuringAPlayersTurn(Box<Players>),
  AtTheBeginningOfCombat,

  // turn__beginning_of_game
  AtTheBeginningOfTheGame,

  // turn__declare_attackers__exert
  WhenAPlayerExertsACreature(Box<Players>, Box<Permanents>),

  // turn__draw_step
  AtTheBeginningOfAPlayersDrawStep(Box<Players>),

  // turn__end_step
  AtTheBeginningOfAPlayersEndStep(Box<Players>),

  // turn__main_phase
  AtTheBeginningOfAPlayersMainPhases(Box<Players>),
  AtTheBeginningOfAPlayersFirstMainPhase(Box<Players>),
  AtTheBeginningOfAPlayersSecondMainPhase(Box<Players>),
  AtTheBeginningOfAPlayersPostcombatMainPhase(Box<Players>),

  // turn__unkeep
  AtTheBeginningOfTheFirstUpkeepOfTheGame,
  AtTheBeginningOfAPlayersFirstUpkeepOfTheGame(Box<Players>),
  AtTheBeginningOfAPlayersFirstUpkeepEachTurn(Box<Players>),
  AtTheBeginningOfAPlayersUpkeep(Box<Players>),

  // untap
  WhenAPlayerUntapsAnyNumberOfPermanentDuringTheirUntapStep(Box<Players>, Box<Permanents>),
  WhenAPermanentBecomesUntapped(Box<Permanents>),

  // voting
  WhenPlayersFinishVoting,

  // turn_face_up
  WhenAPermanentIsTurnedFaceUp(Box<Permanents>),
  WhenAPlayerTurnsAPermanentFaceUp(Box<Players>, Box<Permanents>),

  // _operators
  Or(Vec<Trigger>),
  If(Box<Condition>, Box<Trigger>),
}


type StickerCost = u32;


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Sticker", content = "args"))]
pub enum Sticker {
  NameSticker(NameString),
  PTSticker(StickerCost, CardPT),
  AbilitySticker(StickerCost, Vec<Rule>),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
pub struct Card {
  name:     NameString,

  typeline: OracleTypeline,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="CardManaCost")]
  mana_cost: Option<CardManaCost>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="Array<ColorIndicatorColor>")]
  color_indicator: Option<Vec<ColorIndicatorColor>>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="Array<Rule>")]
  rules:    Option<Vec<Rule>>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[serde(rename="CardPT")]
  #[ts(optional, type="CardPT")]
  card_pt:   Option<CardPT>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="LoyaltyNumber")]
  loyalty:  Option<LoyaltyNumber>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="number")]
  defense:  Option<i32>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct MeldPiece {
  name:     NameString,

  typeline: OracleTypeline,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="CardManaCost")]
  mana_cost: Option<CardManaCost>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="Array<ColorIndicatorColor>")]
  color_indicator: Option<Vec<ColorIndicatorColor>>,

  rules:    Vec<Rule>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[serde(rename="CardPT")]
  #[ts(optional, type="CardPT")]
  card_pt:   Option<CardPT>,

  melds_into: NameString,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Melded {
  name:     NameString,

  typeline: OracleTypeline,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="Array<ColorIndicatorColor>")]
  color_indicator: Option<Vec<ColorIndicatorColor>>,

  rules:    Vec<Rule>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[serde(rename="CardPT")]
  #[ts(optional, type="CardPT")]
  card_pt:   Option<CardPT>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="LoyaltyNumber")]
  loyalty:  Option<LoyaltyNumber>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Adventurer {
  name:     NameString,

  typeline: OracleTypeline,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="CardManaCost")]
  mana_cost: Option<CardManaCost>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="Array<ColorIndicatorColor>")]
  color_indicator: Option<Vec<ColorIndicatorColor>>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="Array<Rule>")]
  rules:    Option<Vec<Rule>>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[serde(rename="CardPT")]
  #[ts(optional, type="CardPT")]
  card_pt:   Option<CardPT>,

  adventure: Card,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Preparer {
  name:     NameString,

  typeline: OracleTypeline,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="CardManaCost")]
  mana_cost: Option<CardManaCost>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="Array<ColorIndicatorColor>")]
  color_indicator: Option<Vec<ColorIndicatorColor>>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="Array<Rule>")]
  rules:    Option<Vec<Rule>>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[serde(rename="CardPT")]
  #[ts(optional, type="CardPT")]
  card_pt:   Option<CardPT>,

  prepared: Card,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Ominous {
  name:     NameString,

  typeline: OracleTypeline,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="CardManaCost")]
  mana_cost: Option<CardManaCost>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[ts(optional, type="Array<ColorIndicatorColor>")]
  color_indicator: Option<Vec<ColorIndicatorColor>>,

  rules:    Vec<Rule>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[serde(rename="CardPT")]
  #[ts(optional, type="CardPT")]
  card_pt:   Option<CardPT>,

  omen: Card,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct ModalDFC {
  front_face: Card,
  back_face: Card,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Transforming {
  front_face: Card,
  back_face: Card,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Flip {
  mana_cost: CardManaCost,
  unflipped: FlipInfo,
  flipped: FlipInfo,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Room {
  typeline: OracleTypeline,
  left_door: DoorInfo,
  right_door: DoorInfo,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Split {
  cards: Vec<Card>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Planar {
  name:     NameString,
  typeline: OracleTypeline,
  rules:    Vec<Rule>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Conspiracy {
  name:     NameString,
  typeline: OracleTypeline,
  rules:    Vec<Rule>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Scheme {
  name:     NameString,
  typeline: OracleTypeline,
  rules:    Vec<Rule>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Dungeon {
  name:     NameString,
  typeline: OracleTypeline,
  rules:    Vec<Rule>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct Vanguard {
  name:     NameString,
  typeline: OracleTypeline,
  rules:    Vec<Rule>,
  life_modifier: i32,
  hand_modifier: i32,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct StickerSheet {
  stickers: Vec<Sticker>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
pub struct FlipInfo {
  name:     NameString,
  typeline: OracleTypeline,
  rules:    Vec<Rule>,

  #[serde(default)]
  #[serde(skip_serializing_if = "Option::is_none")]
  #[serde(with = "::serde_with::rust::unwrap_or_skip")]
  #[serde(rename="CardPT")]
  #[ts(optional, type="CardPT")]
  card_pt:   Option<CardPT>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
pub struct DoorInfo {
  name:     NameString,
  rules:    Vec<Rule>,
  mana_cost: CardManaCost,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
pub enum OracleCard {
  #[serde(rename_all="PascalCase")]
  Card {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="CardManaCost")]
    mana_cost: Option<CardManaCost>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<Rule>")]
    rules:    Option<Vec<Rule>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="LoyaltyNumber")]
    loyalty:  Option<LoyaltyNumber>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="number")]
    defense:  Option<i32>,
  },

  #[serde(rename_all="PascalCase")]
  MeldPiece {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="CardManaCost")]
    mana_cost: Option<CardManaCost>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    rules:    Vec<Rule>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    melds_into: NameString,
  },

  #[serde(rename_all="PascalCase")]
  Melded {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    rules:    Vec<Rule>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="LoyaltyNumber")]
    loyalty:  Option<LoyaltyNumber>,
  },

  #[serde(rename_all="PascalCase")]
  Adventurer {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="CardManaCost")]
    mana_cost: Option<CardManaCost>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<Rule>")]
    rules:    Option<Vec<Rule>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    adventure: Card,
  },

  #[serde(rename_all="PascalCase")]
  Preparer {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="CardManaCost")]
    mana_cost: Option<CardManaCost>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<Rule>")]
    rules:    Option<Vec<Rule>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    prepared: Card,
  },

  #[serde(rename_all="PascalCase")]
  Ominous {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="CardManaCost")]
    mana_cost: Option<CardManaCost>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    rules:    Vec<Rule>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    omen: Card,
  },

  #[serde(rename_all="PascalCase")]
  ModalDFC {
    front_face: Card,
    back_face: Card,
  },

  #[serde(rename_all="PascalCase")]
  Transforming {
    front_face: Card,
    back_face: Card,
  },

  #[serde(rename_all="PascalCase")]
  Flip {
    mana_cost: CardManaCost,
    unflipped: FlipInfo,
    flipped: FlipInfo,
  },

  #[serde(rename_all="PascalCase")]
  Room {
    typeline: OracleTypeline,
    left_door: DoorInfo,
    right_door: DoorInfo,
  },

  #[serde(rename_all="PascalCase")]
  Split {
    cards: Vec<Card>,
  },

  #[serde(rename_all="PascalCase")]
  Planar {
    name:     NameString,
    typeline: OracleTypeline,
    rules:    Vec<Rule>,
  },

  #[serde(rename_all="PascalCase")]
  Conspiracy {
    name:     NameString,
    typeline: OracleTypeline,
    rules:    Vec<Rule>,
  },

  #[serde(rename_all="PascalCase")]
  Scheme {
    name:     NameString,
    typeline: OracleTypeline,
    rules:    Vec<Rule>,
  },

  #[serde(rename_all="PascalCase")]
  Dungeon {
    name:     NameString,
    typeline: OracleTypeline,
    rules:    Vec<Rule>,
  },

  #[serde(rename_all="PascalCase")]
  Vanguard {
    name:     NameString,
    typeline: OracleTypeline,
    rules:    Vec<Rule>,
    life_modifier: i32,
    hand_modifier: i32,
  },

  #[serde(rename_all="PascalCase")]
  StickerSheet {
    stickers: Vec<Sticker>,
  },

  #[serde(rename_all="PascalCase")]
  TokenDefinition {
    name: NameString,
    token: CreatableToken
  },
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub enum RegularCard {
  #[serde(rename_all="PascalCase")]
  Card {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="CardManaCost")]
    mana_cost: Option<CardManaCost>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<Rule>")]
    rules:    Option<Vec<Rule>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="LoyaltyNumber")]
    loyalty:  Option<LoyaltyNumber>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="number")]
    defense:  Option<i32>,
  },

  #[serde(rename_all="PascalCase")]
  MeldPiece {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="CardManaCost")]
    mana_cost: Option<CardManaCost>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    rules:    Vec<Rule>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    melds_into: NameString,
  },

  #[serde(rename_all="PascalCase")]
  Melded {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    rules:    Vec<Rule>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="LoyaltyNumber")]
    loyalty:  Option<LoyaltyNumber>,
  },

  #[serde(rename_all="PascalCase")]
  Adventurer {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="CardManaCost")]
    mana_cost: Option<CardManaCost>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<Rule>")]
    rules:    Option<Vec<Rule>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    adventure: Card,
  },

  #[serde(rename_all="PascalCase")]
  Preparer {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="CardManaCost")]
    mana_cost: Option<CardManaCost>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<Rule>")]
    rules:    Option<Vec<Rule>>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    prepared: Card,
  },

  #[serde(rename_all="PascalCase")]
  Ominous {
    name:     NameString,

    typeline: OracleTypeline,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="CardManaCost")]
    mana_cost: Option<CardManaCost>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    rules:    Vec<Rule>,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[serde(rename="CardPT")]
    #[ts(optional, type="CardPT")]
    card_pt:   Option<CardPT>,

    omen: Card,
  },

  #[serde(rename_all="PascalCase")]
  ModalDFC {
    front_face: Card,
    back_face: Card,
  },

  #[serde(rename_all="PascalCase")]
  Transforming {
    front_face: Card,
    back_face: Card,
  },

  #[serde(rename_all="PascalCase")]
  Flip {
    mana_cost: CardManaCost,
    unflipped: FlipInfo,
    flipped: FlipInfo,
  },

  #[serde(rename_all="PascalCase")]
  Room {
    typeline: OracleTypeline,
    left_door: DoorInfo,
    right_door: DoorInfo,
  },

  #[serde(rename_all="PascalCase")]
  Split {
    cards: Vec<Card>,
  },
}

// ------------------------------------- //
//  Internal State, not on Oracle Cards  //
// ------------------------------------- //
pub type ManaCost = Vec<ManaSymbol>;
pub type ManaCostX = Vec<ManaSymbolX>;
pub type CardManaCost = Vec<ManaSymbolX>;
pub type CostReduction = Vec<CostReductionSymbol>;
pub type CostReductionX = Vec<CostReductionSymbolX>;

#[derive(ts_rs::TS)]
#[ts(rename="ManaCost", export)]
#[allow(dead_code)]
pub struct ExportManaCost(ManaCost);
#[derive(ts_rs::TS)]
#[ts(rename="ManaCostX", export)]
#[allow(dead_code)]
pub struct ExportManaCostX(ManaCostX);
#[derive(ts_rs::TS)]
#[ts(rename="CardManaCost", export)]
#[allow(dead_code)]
pub struct ExportCardManaCost(CardManaCost);
#[derive(ts_rs::TS)]
#[ts(rename="CostReduction", export)]
#[allow(dead_code)]
pub struct ExportCostReduction(CostReduction);
#[derive(ts_rs::TS)]
#[ts(rename="CostReductionX", export)]
#[allow(dead_code)]
pub struct ExportCostReductionX(CostReductionX);

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_RuleSource"))]
pub enum RuleSource {
  Printed,

  #[serde(rename_all="PascalCase")]
  Copy              { effect_source: SourcedRule, copied_source: SourcedRule },

  #[serde(rename_all="PascalCase")]
  CopyModifier      { effect_source: SourcedRule },

  #[serde(rename_all="PascalCase")]
  AddCopiable       { effect_source: SourcedRule },

  #[serde(rename_all="PascalCase")]
  AddCopiableFromExiled { exiled_id: CardInExileId, exiled_source: Box<RuleSource> },
  
  #[serde(rename_all="PascalCase")]
  Mutate            { effect_source: SourcedRule },

  #[serde(rename_all="PascalCase")]
  BattlefieldEffect { effect_source: SourcedRule, permanent_id: PermanentId },

  #[serde(rename_all="PascalCase")]
  Effect            { effect_source: SourcedRule, effect_id: EffectId },

  TestCase,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
pub struct SourcedRule { rule_source: Box<RuleSource>, rule: Rule }

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Name"))]
pub enum ObjectName {
  #[serde(rename_all="PascalCase")]
  Name {
    name: NameString,
  },

  #[serde(rename_all="PascalCase")]
  FlipName {
    unflipped: NameString,
    flipped: NameString,
  }
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_Typeline"))]
pub enum ObjectTypeline {
  #[serde(rename_all="PascalCase")]
  Typeline {
    typeline: OracleTypeline,
  },

  #[serde(rename_all="PascalCase")]
  FlipTypeline {
    unflipped: OracleTypeline,
    flipped: OracleTypeline,
  }
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_CardPT"))]
pub enum ObjectPT {
  #[serde(rename_all="PascalCase")]
  CardPT {
    #[serde(rename="CardPT")]
    #[ts(type="CardPT")]
    card_pt: CardPT,
  },

  #[serde(rename_all="PascalCase")]
  FlipCardPT {
    #[ts(optional,type="CardPT")]
    unflipped: Option<CardPT>,
    #[ts(optional,type="CardPT")]
    flipped: Option<CardPT>,
  },
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
pub struct ObjectFlip {
  unflipped: Vec<SourcedRule>,
  flipped: Vec<SourcedRule>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
pub struct ObjectDoor {
    name:     NameString,

    #[serde(default)]
    #[ts(type="CardManaCost")]
    mana_cost: CardManaCost,

    #[serde(default)]
    #[serde(skip_serializing_if = "Option::is_none")]
    #[serde(with = "::serde_with::rust::unwrap_or_skip")]
    #[ts(optional, type="Array<ColorIndicatorColor>")]
    color_indicator: Option<Vec<ColorIndicatorColor>>,

    rules:    Vec<SourcedRule>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
pub struct ObjectDoors {
  left: ObjectDoor,
  right: ObjectDoor,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
pub struct NormalObject {
  #[ts(optional, type="ObjectName")]
  name:      Option<ObjectName>,

  typeline:  ObjectTypeline,

  #[serde(rename="CardPT")]
  #[ts(optional, type="ObjectPT")]
  card_pt:    Option<ObjectPT>,

  #[ts(optional, type="CardManaCost")]
  mana_cost:  Option<CardManaCost>,

  rules:      Vec<SourcedRule>,

  #[ts(optional, type="LoyaltyNumber")]
  loyalty: Option<LoyaltyNumber>,

  #[ts(optional, type="number")]
  defense:  Option<i32>,

  #[ts(optional, type="Array<ColorIndicatorColor>")]
  color_indicator:            Option<Vec<ColorIndicatorColor>>,

  #[ts(optional, type="Array<ColorIndicatorColor>")]
  additional_color_indicator: Option<Vec<ColorIndicatorColor>>,

  #[ts(optional, type="string")]
  melds_into:      Option<NameString>,

  #[ts(optional, type="ObjectFlip")]
  flip:      Option<ObjectFlip>,

  #[ts(optional, type="ObjectDoors")]
  doors:     Option<ObjectDoors>,

  #[ts(optional, type="NormalObject")]
  adventure: Option<Box<NormalObject>>,

  #[ts(optional, type="NormalObject")]
  omen:      Option<Box<NormalObject>>,

  #[ts(optional, type="NormalObject")]
  prepared:  Option<Box<NormalObject>>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct ModalDFCObject {
  front_face: NormalObject,
  back_face:  NormalObject }

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct TransformingObject {
  front_face: NormalObject,
  back_face:  NormalObject }

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct SplitObject {
  cards: Vec<NormalObject>
}

#[derive(ts_rs::TS)]
#[ts(rename="PlayerId", export)]
#[allow(dead_code)]
pub struct ExportPlayerId(PlayerId);

#[derive(ts_rs::TS)]
#[ts(rename="PermanentId", export)]
#[allow(dead_code)]
pub struct ExportPermanentId(PermanentId);

#[derive(ts_rs::TS)]
#[ts(rename="CardInExileId", export)]
#[allow(dead_code)]
pub struct ExportCardInExileId(CardInExileId);


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_EffectListItem"))]
#[allow(dead_code)]
pub enum EffectListItem {
  BattlefieldEffect(SourcedRule),
  Effect(SourcedRule),
  Testcase(SourcedRule),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[serde(untagged)]
#[allow(dead_code)]
pub enum RegularObject {
  NormalObject(NormalObject),
  ModalDFCObject(ModalDFCObject),
  TransformingObject(TransformingObject),
  SplitObject(SplitObject),
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[serde(untagged)]
#[allow(dead_code)]
pub enum RegularBattlefieldObject {
  NormalObject(NormalObject),
  TransformingObject(TransformingObject),
}


#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct FacedownProperties {
  #[ts(optional, type="ObjectName")]
  name:            Option<ObjectName>,
  typeline:        ObjectTypeline,
  rules:           Vec<SourcedRule>,
  #[serde(rename="CardPT")]
  #[ts(optional, type="ObjectPT")]
  card_pt:         Option<ObjectPT>,
  #[ts(optional, type="Array<ColorIndicatorColor>")]
  color_indicator: Option<Vec<ColorIndicatorColor>>,
}

#[derive(Clone, Debug, serde::Deserialize, serde::Serialize, bincode::Encode, bincode::Decode, ts_rs::TS)]
#[ts(export)]
#[serde(rename_all="PascalCase")]
#[cfg_attr(feature = "write_out_json", serde(tag = "_OracleCard"))]
#[allow(dead_code)]
pub struct MutateStackObject {
  #[ts(optional, type="ObjectName")]
  name:      Option<ObjectName>,
  #[ts(optional, type="CardManaCost")]
  mana_cost:  Option<CardManaCost>,
  typeline:  ObjectTypeline,
  rules:      Vec<SourcedRule>,
  #[serde(rename="CardPT")]
  #[ts(optional, type="ObjectPT")]
  card_pt:    Option<ObjectPT>,
  #[ts(optional, type="Array<ColorIndicatorColor>")]
  color_indicator:            Option<Vec<ColorIndicatorColor>>,
}
