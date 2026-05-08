#!/usr/bin/python3

specialize_cardnames = [
  # Normal                           , White,                         , Blue                              , Black                           , Red                               , Green                             # ,
  ["Alora, Rogue Companion"          , "Alora, Cheerful Mastermind"   , "Alora, Cheerful Thief"           , "Alora, Cheerful Assassin"      , "Alora, Cheerful Swashbuckler"    , "Alora, Cheerful Scout"           ] ,
  ["Ambergris, Citadel Agent"        , "Ambergris, Agent of Law"      , "Ambergris, Agent of Progress"    , "Ambergris, Agent of Tyranny"   , "Ambergris, Agent of Destruction" , "Ambergris, Agent of Balance"     ] ,
  ["Gale, Conduit of the Arcane"     , "Gale, Holy Conduit"           , "Gale, Temporal Conduit"          , "Gale, Abyssal Conduit"         , "Gale, Storm Conduit"             , "Gale, Primeval Conduit"          ] ,
  ["Gut, Fanatical Priestess"        , "Gut, Zealous Fanatic"         , "Gut, Devious Fanatic"            , "Gut, Brutal Fanatic"           , "Gut, Furious Fanatic"            , "Gut, Bestial Fanatic"            ] ,
  ["Imoen, Trickster Friend"         , "Imoen, Honorable Trickster"   , "Imoen, Wily Trickster"           , "Imoen, Occult Trickster"       , "Imoen, Chaotic Trickster"        , "Imoen, Wise Trickster"           ] ,
  ["Jaheira, Harper Emissary"        , "Jaheira, Heroic Harper"       , "Jaheira, Insightful Harper"      , "Jaheira, Ruthless Harper"      , "Jaheira, Stirring Harper"        , "Jaheira, Merciful Harper"        ] ,
  ["Karlach, Raging Tiefling"        , "Karlach, Tiefling Zealot"     , "Karlach, Tiefling Spellrager"    , "Karlach, Tiefling Punisher"    , "Karlach, Tiefling Berserker"     , "Karlach, Tiefling Guardian"      ] ,
  ["Klement, Novice Acolyte"         , "Klement, Life Acolyte"        , "Klement, Knowledge Acolyte"      , "Klement, Death Acolyte"        , "Klement, Tempest Acolyte"        , "Klement, Nature Acolyte"         ] ,
  ["Lae'zel, Githyanki Warrior"      , "Lae'zel, Blessed Warrior"     , "Lae'zel, Illithid Thrall"        , "Lae'zel, Callous Warrior"      , "Lae'zel, Wrathful Warrior"       , "Lae'zel, Primal Warrior"         ] ,
  ["Lukamina, Moon Druid"            , "Lukamina, Hawk Form"          , "Lukamina, Crocodile Form"        , "Lukamina, Scorpion Form"       , "Lukamina, Wolf Form"             , "Lukamina, Bear Form"             ] ,
  ["Lulu, Forgetful Hollyphant"      , "Lulu, Helpful Hollyphant"     , "Lulu, Curious Hollyphant"        , "Lulu, Vengeful Hollyphant"     , "Lulu, Inspiring Hollyphant"      , "Lulu, Wild Hollyphant"           ] ,
  ["Rasaad, Monk of Selûne"          , "Rasaad, Radiant Monk"         , "Rasaad, Dragon Monk"             , "Rasaad, Shadow Monk"           , "Rasaad, Warrior Monk"            , "Rasaad, Sylvan Monk"             ] ,
  ["Sarevok the Usurper"             , "Sarevok, Divine Usurper"      , "Sarevok, Deceitful Usurper"      , "Sarevok, Deadly Usurper"       , "Sarevok, Ferocious Usurper"      , "Sarevok, Mighty Usurper"         ] ,
  ["Shadowheart, Sharran Cleric"     , "Shadowheart, Cleric of Order" , "Shadowheart, Cleric of Trickery" , "Shadowheart, Cleric of Graves" , "Shadowheart, Cleric of War"      , "Shadowheart, Cleric of Twilight" ] ,
  ["Skanos, Dragon Vassal"           , "Skanos, White Dragon Vassal"  , "Skanos, Blue Dragon Vassal"      , "Skanos, Black Dragon Vassal"   , "Skanos, Red Dragon Vassal"       , "Skanos, Green Dragon Vassal"     ] ,
  ["Vhal, Eager Scholar"             , "Vhal, Scholar of Tactics"     , "Vhal, Scholar of Prophecy"       , "Vhal, Scholar of Mortality"    , "Vhal, Scholar of Elements"       , "Vhal, Scholar of Creation"       ] ,
  ["Viconia, Nightsinger's Disciple" , "Viconia, Disciple of Rebirth" , "Viconia, Disciple of Arcana"     , "Viconia, Disciple of Blood"    , "Viconia, Disciple of Violence"   , "Viconia, Disciple of Strength"   ] ,
  ["Wilson, Bear Comrade"            , "Wilson, Urbane Bear"          , "Wilson, Subtle Bear"             , "Wilson, Fearsome Bear"         , "Wilson, Ardent Bear"             , "Wilson, Majestic Bear"           ] ,
  ["Wyll, Pact-Bound Duelist"        , "Wyll of the Celestial Pact"   , "Wyll of the Elder Pact"          , "Wyll of the Fiend Pact"        , "Wyll of the Blade Pact"          , "Wyll of the Fey Pact"            ] ]

