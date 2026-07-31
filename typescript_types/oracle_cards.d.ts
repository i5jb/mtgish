type Abilities =
| { "_Abilities": "Other", "args": Ability }
| { "_Abilities": "And", "args": Array<Abilities> }
| { "_Abilities": "Or", "args": Array<Abilities> }
| { "_Abilities": "AnyAbility" }
| { "_Abilities": "TargetsAPermanent", "args": Permanents }
| { "_Abilities": "TargetsOnlySinglePermanent", "args": Permanent }
| { "_Abilities": "HasASingleTarget" }
| { "_Abilities": "CanTargetOnly", "args": Permanents }
| { "_Abilities": "AbilityOfAnEmblem", "args": Emblem }
| { "_Abilities": "AbilityOfPermanent", "args": Permanent }
| { "_Abilities": "AbilityOfAPermanent", "args": Permanents }
| { "_Abilities": "AbilityOfASource", "args": AbilitySources }
| { "_Abilities": "AbilityOfASpell", "args": Spells }
| { "_Abilities": "IsCardtype", "args": CardType }
| { "_Abilities": "ControlledByAPlayer", "args": Players }
| { "_Abilities": "RoomAbilityOfDungeon", "args": SingleDungeon }
| { "_Abilities": "BackupAbility" }
| { "_Abilities": "ModularAbility" }
| { "_Abilities": "LoyaltyAbility" }
| { "_Abilities": "TriggeredAbility" }
| { "_Abilities": "ActivatedAbility" };
type Ability =
| { "_Ability": "Trigger_ThatTriggeredAbility" }
| { "_Ability": "Trigger_ThatActivatedAbility" }
| { "_Ability": "Ref_TargetAbility" }
| { "_Ability": "ThisAbility" }
| { "_Ability": "Trigger_ThatAbility" };
type AbilitySources =
| { "_AbilitySources": "And", "args": Array<AbilitySources> }
| { "_AbilitySources": "Or", "args": Array<AbilitySources> }
| { "_AbilitySources": "IsAnOutlaw" }
| { "_AbilitySources": "IsCreatureType", "args": CreatureType }
| { "_AbilitySources": "IsCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_AbilitySources": "IsNamed", "args": NameFilter }
| { "_AbilitySources": "ControlledByAPlayer", "args": Players }
| { "_AbilitySources": "IsCardtype", "args": CardType }
| { "_AbilitySources": "IsColor", "args": Color }
| { "_AbilitySources": "IsNonColor", "args": Color }
| { "_AbilitySources": "IsColorless" }
| { "_AbilitySources": "IsNotACommander" }
| { "_AbilitySources": "IsSupertype", "args": SuperType }
| { "_AbilitySources": "IsNonCardtype", "args": CardType };
type AbilityVariable =
| { "_AbilityVariable": "ThisAbility" }
| { "_AbilityVariable": "TheChosenAbility" }
| { "_AbilityVariable": "TheChosenAbilities" };
type Action =
| { "_Action": "Recruit" }
| { "_Action": "Assimilate", "args": CardInGraveyards }
| { "_Action": "MultiDraw", "args": Array<MultiDrawable> }
| { "_Action": "MultiCreateTokens", "args": Array<MultiCreateToken> }
| { "_Action": "CreateTokens", "args": [Array<CreatableToken>, Array<TokenFlag>] }
| { "_Action": "CreateTokensForEachPlayer", "args": [Players, Array<CreatableToken>, Array<TokenFlag>] }
| { "_Action": "CreateTokensForEachPermanent", "args": [Permanents, Array<CreatableToken>, Array<TokenFlag>] }
| { "_Action": "EachPlayerCreatesTokens", "args": [Players, Array<CreatableToken>, Array<TokenFlag>] }
| { "_Action": "EachPlayerCreatesTokensForEachPermanent", "args": [Players, Permanents, Array<CreatableToken>, Array<TokenFlag>] }
| { "_Action": "PutCardsInLibraryIntoGraveyard", "args": CardsInLibrary }
| { "_Action": "PutCardsInLibraryOntoTheBattlefield", "args": [CardsInLibrary, Array<EnterFlag>] }
| { "_Action": "PutCardsInLibraryOnTheBottomOfLibraryInAnyOrder", "args": CardsInLibrary }
| { "_Action": "PutCardsInLibraryOnTheBottomOfLibraryInARandomOrder", "args": CardsInLibrary }
| { "_Action": "PutLibraryCardsIntoHand", "args": CardsInLibrary }
| { "_Action": "EachPlayerRevealsCardsFromTheTopOfLibraryUntilANumberOfCardsOfTypeAreRevealed", "args": [Players, GameNumber, CardsInLibrary] }
| { "_Action": "EachPlayerRevealsTheTopNumberCardsOfLibrary", "args": [Players, GameNumber] }
| { "_Action": "ChooseNumberCardsInGraveyards", "args": [GameNumber, CardsInGraveyards] }
| { "_Action": "PutAllCardsFromGraveyardIntoHand", "args": CardsInGraveyards }
| { "_Action": "PutAnyNumberOfCardsFromGraveyardIntoHand", "args": CardsInGraveyards }
| { "_Action": "PutUptoNumberCardsFromGraveyardIntoHand", "args": [GameNumber, CardsInGraveyards] }
| { "_Action": "MeldExiledIntoNewPermanent", "args": [CardsInExile, string, Array<EnterFlag>] }
| { "_Action": "SetRepeatablePlayers", "args": Players }
| { "_Action": "APlayerAction", "args": [Players, Action] }
| { "_Action": "APlayerActions", "args": [Players, Array<Action>] }
| { "_Action": "APlayerGainsControlOfPermanent", "args": [Players, Permanent] }
| { "_Action": "APlayerMayAction", "args": [Players, Action] }
| { "_Action": "AbandonScheme", "args": SingleScheme }
| { "_Action": "AcceptARandomCondition", "args": string }
| { "_Action": "AcceptARandomOffer", "args": string }
| { "_Action": "ActionForEachCardtype", "args": [Array<CardType>, Array<Action>] }
| { "_Action": "ActionForEachCheckableAbility", "args": [Array<CheckHasable>, Array<Action>] }
| { "_Action": "ActionForEachDistributedAnyTarget", "args": Array<Action> }
| { "_Action": "ActionForEachExiledCard", "args": [CardsInExile, Array<Action>] }
| { "_Action": "ActionForEachPermanent", "args": [Permanents, Array<Action>] }
| { "_Action": "ActionForEachPermanentByController", "args": [Permanents, Array<Action>] }
| { "_Action": "ActionForEachPermanentDestroyedThisWay", "args": Array<Action> }
| { "_Action": "ActionForEachPermanentExiledThisWay", "args": Array<Action> }
| { "_Action": "ActionForEachPermanentExiledThisWayByController", "args": Array<Action> }
| { "_Action": "ActionForEachPermanentPutInGraveyardThisWay", "args": Array<Action> }
| { "_Action": "ActionForEachPermanentThatDiedThisWay", "args": Array<Action> }
| { "_Action": "ActionForEachPlayer", "args": [Players, Array<Action>] }
| { "_Action": "ActionForEachPlayerInTurnOrder", "args": [Players, Array<Action>] }
| { "_Action": "ActionForEachSpellAndAbility", "args": [SpellsAndAbilities, Array<Action>] }
| { "_Action": "ActionForEachTarget", "args": [Targets, Array<Action>] }
| { "_Action": "ActionNumberTimes", "args": [GameNumber, Array<Action>] }
| { "_Action": "ActivateAManaAbilityOfEachPermanentAndLoseUnspentMana", "args": Permanents }
| { "_Action": "Adapt", "args": GameNumber }
| { "_Action": "AddCombinationMana", "args": [ManaProduce, GameNumber] }
| { "_Action": "AddCombinationManaWithModifers", "args": [ManaProduce, GameNumber, ManaUseModifier] }
| { "_Action": "AddMana", "args": ManaProduce }
| { "_Action": "AddManaRepeated", "args": [ManaProduce, GameNumber] }
| { "_Action": "AddManaRepeatedTwiceWithModifiers", "args": [ManaProduce, GameNumber, ManaProduce, GameNumber, ManaUseModifier] }
| { "_Action": "AddManaRepeatedWithModifiers", "args": [ManaProduce, GameNumber, ManaUseModifier] }
| { "_Action": "AddManaWithModifiers", "args": [ManaProduce, ManaUseModifier] }
| { "_Action": "AfterTheSecondMainPhaseThisTurnThereIsAnAdditionalCombatPhaseAndAnAdditionalMainPhaseWithAtTheBeginningOfCombatTrigger", "args": Actions }
| { "_Action": "AfterThisMainPhaseThereAreAnAdditionalNumberCombatPhases", "args": GameNumber }
| { "_Action": "AirbendPermanent", "args": Permanent }
| { "_Action": "AirbendPermanents", "args": Permanents }
| { "_Action": "AirbendSpell", "args": Spell }
| { "_Action": "Amass", "args": [GameNumber, CreatureType] }
| { "_Action": "AnteTopCardOfLibrary" }
| { "_Action": "AnyPlayerMayCost", "args": [Players, Cost] }
| { "_Action": "AnyPlayerMayPayMana", "args": [Players, Array<ManaSymbol>, Array<Action>, Array<Action>] }
| { "_Action": "Ascend" }
| { "_Action": "AttachAPermanentToAPermanent", "args": [Permanents, Permanents] }
| { "_Action": "AttachAPermanentToPermanent", "args": [Permanents, Permanent] }
| { "_Action": "AttachAnyNumberOfPermanentsToAnyPermanents", "args": [Permanents, Permanents] }
| { "_Action": "AttachAnyNumberOfPermanentsToPermanent", "args": [Permanents, Permanent] }
| { "_Action": "AttachAnyNumberOfPermanentsToPlayerOrPermanent", "args": [Permanents, PlayerOrPermanent] }
| { "_Action": "AttachEachPermanentToAPermanent", "args": [Permanents, Permanents] }
| { "_Action": "AttachEachPermanentToPermanent", "args": [Permanents, Permanent] }
| { "_Action": "AttachPermanentToACardInAPlayersGraveyard", "args": [Permanent, Cards, Players] }
| { "_Action": "AttachPermanentToAPermanent", "args": [Permanent, Permanents] }
| { "_Action": "AttachPermanentToPermanent", "args": [Permanent, Permanent] }
| { "_Action": "AttachPermanentToPlayer", "args": [Permanent, Player] }
| { "_Action": "AttachPermanentsToPermanent", "args": [Permanents, Permanent] }
| { "_Action": "AttachUptoOnePermanentToEachPermanent", "args": [Permanents, Permanents] }
| { "_Action": "AwakenPermanent", "args": [GameNumber, Permanent] }
| { "_Action": "BecomeDay" }
| { "_Action": "BecomeNight" }
| { "_Action": "BecomeTheMonarch" }
| { "_Action": "BeginGameWithCardOnBattlefield", "args": [PregameCard, Array<EnterFlag>] }
| { "_Action": "Blight", "args": GameNumber }
| { "_Action": "Bolster", "args": GameNumber }
| { "_Action": "BoonDealsDamage", "args": [Boon, GameNumber, DamageRecipient] }
| { "_Action": "CastACopiedCardWithoutPaying" }
| { "_Action": "CastASpellAndMaySpendManaAsThoughAnyColorToCast", "args": Spells }
| { "_Action": "CastASpellDrawnThisWayWithoutPaying" }
| { "_Action": "CastASpellFromAPlayersGraveyardWithoutPayingIntoExile", "args": [Spells, Players] }
| { "_Action": "CastASpellFromExile", "args": [Spells, CardsInExile] }
| { "_Action": "CastASpellFromExileOntoBottomOfLibrary", "args": [Spells, CardsInExile] }
| { "_Action": "CastASpellFromExileWithEffect", "args": [Spells, CardsInExile, Array<SpellEffect>] }
| { "_Action": "CastASpellFromExileWithoutPaying", "args": [Spells, CardsInExile] }
| { "_Action": "CastASpellFromHandForAlternateCost", "args": [Spells, Cost] }
| { "_Action": "CastASpellFromHandGraveyardOrExileWithoutPaying", "args": [Spells, Cards, Cards, CardsInExile] }
| { "_Action": "CastASpellFromHandWithoutPaying", "args": Spells }
| { "_Action": "CastASpellFromMilledCardsWithoutPaying", "args": Spells }
| { "_Action": "CastASpellFromPlayersGraveyardWithoutPaying", "args": [Spells, Player] }
| { "_Action": "CastASpellFromPlayersGraveyardWithoutPayingIntoExile", "args": [Spells, Player] }
| { "_Action": "CastASpellFromRevealedCardInHandsWithoutPaying", "args": [Spells, Cards] }
| { "_Action": "CastASpellFromTopOfLibraryWithoutPaying", "args": Spells }
| { "_Action": "CastAnExiledCardAndMaySpendManaAsThoughAnyTypeToCast", "args": CardsInExile }
| { "_Action": "CastAnyNumberOfCardsInPlayersGraveyardWithoutPaying", "args": [Cards, Player] }
| { "_Action": "CastAnyNumberOfCopiedCards" }
| { "_Action": "CastAnyNumberOfCopiedCardsWithoutPaying" }
| { "_Action": "CastAnyNumberOfExiledCardsWithoutPaying", "args": CardsInExile }
| { "_Action": "CastAnyNumberOfGraveyardCardsWithoutPayingIntoExile", "args": CardsInGraveyards }
| { "_Action": "CastAnyNumberOfGroupSpellsFromExileWithoutPaying", "args": [Spells, GroupFilter, CardsInExile] }
| { "_Action": "CastAnyNumberOfSpellsFromExileWithoutPaying", "args": [Spells, CardsInExile] }
| { "_Action": "CastAnyNumberOfSpellsFromHandWithoutPaying", "args": Spells }
| { "_Action": "CastAnyNumberOfSpellsFromOutsideTheGameWithoutPaying", "args": Spells }
| { "_Action": "CastCardInHandWithoutPaying", "args": CardInHand }
| { "_Action": "CastCardInHandWithoutPayingAsAFacedownCreatureSpell", "args": [CardInHand, PT] }
| { "_Action": "CastCommanderFromCommandZoneWithoutPaying" }
| { "_Action": "CastCopiedCard" }
| { "_Action": "CastCopiedCardForAlternateCost", "args": Cost }
| { "_Action": "CastCopiedCardForReducedCost", "args": Array<ManaSymbol> }
| { "_Action": "CastCopiedCardWithoutPaying" }
| { "_Action": "CastEachCopiedCardWithoutPaying" }
| { "_Action": "CastExiledCardAndMaySpendManaAsThoughAnyColorToCast", "args": CardInExile }
| { "_Action": "CastExiledCardForAlternateCost", "args": [CardInExile, Cost] }
| { "_Action": "CastExiledCardForReducedCost", "args": [CardInExile, Array<CostReductionSymbol>] }
| { "_Action": "CastExiledCardWithoutPaying", "args": CardInExile }
| { "_Action": "CastExiledCardWithoutPayingIntoExile", "args": CardInExile }
| { "_Action": "CastExiledCardWithoutPayingOntoBottomOfLibrary", "args": CardInExile }
| { "_Action": "CastGraveyardCard", "args": CardInGraveyards }
| { "_Action": "CastGraveyardCardIntoExile", "args": CardInGraveyards }
| { "_Action": "CastGraveyardCardWithoutPaying", "args": CardInGraveyards }
| { "_Action": "CastGraveyardCardWithoutPayingIntoExile", "args": CardInGraveyards }
| { "_Action": "CastSpellFromExile", "args": [Spells, CardInExile] }
| { "_Action": "CastSpellFromExileWithoutPaying", "args": [Spells, CardInExile] }
| { "_Action": "CastSpellFromExileWithoutPayingAndFlagSpellsCastWithEffect", "args": [Spells, CardInExile, Spells, Array<SpellEffect>] }
| { "_Action": "CastSpellFromGraveyardWithoutPayingIntoExile", "args": [Spells, CardInGraveyards] }
| { "_Action": "CastSpellFromHandOrGraveyardAlternateCost", "args": [Spells, Cost] }
| { "_Action": "CastSpellsFromExileWithoutPaying", "args": [Spells, CardsInExile] }
| { "_Action": "CastTheCardDiscardedThisWayWithoutPaying" }
| { "_Action": "CastTheCardRevealedThisWayWithoutPaying" }
| { "_Action": "CastTopCardOfLibraryForAlternateCost", "args": Array<ManaSymbol> }
| { "_Action": "CastTopCardOfLibraryWithoutPaying" }
| { "_Action": "CastTopCardOfPlayersLibraryWithoutPaying", "args": Player }
| { "_Action": "CastTopSpellOfLibraryWithoutPaying", "args": Spells }
| { "_Action": "CastUptoNumberCopiedCardsWithoutPaying", "args": GameNumber }
| { "_Action": "CastUptoNumberExiledCardsWithoutPaying", "args": [GameNumber, CardsInExile] }
| { "_Action": "CastUptoNumberGroupSpellsFromGraveyardOrHandWithoutPayingIntoExile", "args": [GameNumber, Spells, GroupFilter] }
| { "_Action": "CastUptoNumberSpellsFromExileWithoutPaying", "args": [GameNumber, Spells, CardsInExile] }
| { "_Action": "CastUptoNumberSpellsFromHandWithoutPaying", "args": [GameNumber, Spells] }
| { "_Action": "ChangeATargetOfSpellOrAbilityToPermanent", "args": [SpellOrAbility, Permanent] }
| { "_Action": "ChangeTargetsOfAbility", "args": Ability }
| { "_Action": "ChangeTargetsOfSpell", "args": Spell }
| { "_Action": "ChangeTargetsOfSpellOrAbility", "args": SpellOrAbility }
| { "_Action": "ChangeTheTargetOfAbility", "args": Ability }
| { "_Action": "ChangeTheTargetOfSpell", "args": Spell }
| { "_Action": "ChangeTheTargetOfSpellOrAbility", "args": SpellOrAbility }
| { "_Action": "ChangeTheTargetOfSpellToAPermanent", "args": [Spell, Permanents] }
| { "_Action": "ChangeTheTargetOfSpellToPermanent", "args": [Spell, Permanent] }
| { "_Action": "ChangeTheTargetsOfSpellToAPlayer", "args": [Spell, Players] }
| { "_Action": "ChaosEnsues" }
| { "_Action": "ChooseABasicLandType" }
| { "_Action": "ChooseACardFromAmongCardsDiscardedThisWay", "args": Cards }
| { "_Action": "ChooseACardFromAmongTheTopNumberCardsInPlayersGraveyard", "args": [Cards, GameNumber, Player] }
| { "_Action": "ChooseACardFromPlayersRevealedHand", "args": [Cards, Player] }
| { "_Action": "ChooseACardInEachPlayersGraveyard", "args": [Cards, Players] }
| { "_Action": "ChooseACardInHand", "args": CardsInHand }
| { "_Action": "ChooseACardInHandAtRandom", "args": Cards }
| { "_Action": "ChooseACardInHandOfEachColor" }
| { "_Action": "ChooseACardInHandOrAPermanent", "args": [Cards, Permanents] }
| { "_Action": "ChooseACardInPlayersGraveyard", "args": [Cards, Player] }
| { "_Action": "ChooseACardInPlayersGraveyardAtRandom", "args": [Cards, Player] }
| { "_Action": "ChooseACardName", "args": CardsInOracle }
| { "_Action": "ChooseACardNameThatHasntBeenChosen", "args": CardsInOracle }
| { "_Action": "ChooseACardOfTypeInPlayersHandAtRandom", "args": [Cards, Player] }
| { "_Action": "ChooseACardtype" }
| { "_Action": "ChooseACardtypeFromList", "args": Array<CardType> }
| { "_Action": "ChooseACheckableAbility", "args": Array<CheckHasable> }
| { "_Action": "ChooseAColor", "args": ChoosableColor }
| { "_Action": "ChooseAColorOrColorless", "args": ChoosableColor }
| { "_Action": "ChooseACommanderOnTheBattlefieldOrInTheCommandZone", "args": Commanders }
| { "_Action": "ChooseACreatureType" }
| { "_Action": "ChooseACreatureTypeOtherThan", "args": CreatureType }
| { "_Action": "ChooseACreatureType_And_ChooseACreatureTypeOtherThan", "args": CreatureType }
| { "_Action": "ChooseADamageNumber" }
| { "_Action": "ChooseADamageRecipient", "args": DamageRecipientsList }
| { "_Action": "ChooseADamageSource", "args": DamageSources }
| { "_Action": "ChooseAGraveyardCard", "args": CardsInGraveyards }
| { "_Action": "ChooseAGraveyardCardThatHasntBeenChosen", "args": CardsInGraveyards }
| { "_Action": "ChooseAGraveyardPile" }
| { "_Action": "ChooseALandType" }
| { "_Action": "ChooseALandTypeAndABasicLandType" }
| { "_Action": "ChooseALetter" }
| { "_Action": "ChooseANamedAction", "args": Array<NamedAction> }
| { "_Action": "ChooseANonBasicLandType" }
| { "_Action": "ChooseANumber" }
| { "_Action": "ChooseANumberBetween", "args": [number, number] }
| { "_Action": "ChooseANumberBetweenAtRandom", "args": [GameNumber, GameNumber] }
| { "_Action": "ChooseANumberFromAmongAtRandom", "args": Array<number> }
| { "_Action": "ChooseANumberGreaterThanNumber", "args": number }
| { "_Action": "ChooseAPartyFromAmongPermanents", "args": Permanents }
| { "_Action": "ChooseAPermanent", "args": Permanents }
| { "_Action": "ChooseAPermanentAtRandom", "args": Permanents }
| { "_Action": "ChooseAPermanentForEachPlayer", "args": [Players, Permanents] }
| { "_Action": "ChooseAPermanentOfEachBasicLandTypeAvailable", "args": Permanents }
| { "_Action": "ChooseAPermanentOfEachPermanentTypeAvailable", "args": Permanents }
| { "_Action": "ChooseAPermanentOfEachPowerAvailable", "args": Permanents }
| { "_Action": "ChooseAPermanentPile" }
| { "_Action": "ChooseAPermanentThatHasntBeenChosen", "args": Permanents }
| { "_Action": "ChooseAPermanentType" }
| { "_Action": "ChooseAPileCreatedByEachPlayer", "args": Players }
| { "_Action": "ChooseAPileCreatedByEachPlayerAtRandom", "args": Players }
| { "_Action": "ChooseAPlaneswalkerType" }
| { "_Action": "ChooseAPlayer", "args": Players }
| { "_Action": "ChooseAPlayerAtRandom", "args": Players }
| { "_Action": "ChooseAPlayerOrPlaneswalkerCurrentlyAttackedByPlayer", "args": Player }
| { "_Action": "ChooseARandomColor", "args": ChoosableColor }
| { "_Action": "ChooseASecondPermanentAtRandom", "args": Permanents }
| { "_Action": "ChooseASector" }
| { "_Action": "ChooseASpellThatResolvedThisTurn", "args": Spells }
| { "_Action": "ChooseActionAtRandom", "args": Array<Array<Action>> }
| { "_Action": "ChooseAnAbility", "args": Array<Rule> }
| { "_Action": "ChooseAnAbilityAtRandom", "args": Array<Rule> }
| { "_Action": "ChooseAnAction", "args": Array<Array<Action>> }
| { "_Action": "ChooseAnAttackingCreatureForBlockerToBlock", "args": [Permanents, Permanent] }
| { "_Action": "ChooseAnExiledCard", "args": CardsInExile }
| { "_Action": "ChooseAnExiledCardAtRandom", "args": CardsInExile }
| { "_Action": "ChooseAnExiledPile" }
| { "_Action": "ChooseAnOrderForCardTypes", "args": Array<CardType> }
| { "_Action": "ChooseAnUnchosenCardInPlayersGraveyard", "args": [Cards, Player] }
| { "_Action": "ChooseAnyNumberOfGroupPermanents", "args": [Permanents, GroupFilter] }
| { "_Action": "ChooseAnyNumberOfPermanents", "args": Permanents }
| { "_Action": "ChooseAnyNumberPermanentsAndPayManaForEach", "args": [Permanents, Array<ManaSymbol>] }
| { "_Action": "ChooseColors" }
| { "_Action": "ChooseCopyFromCopies" }
| { "_Action": "ChooseEvenOrOdd" }
| { "_Action": "ChooseLandType", "args": Array<LandType> }
| { "_Action": "ChooseLeftOrRight" }
| { "_Action": "ChooseLibraryFilter", "args": Array<Cards> }
| { "_Action": "ChooseMultiplePermanentsAmoungPermanents", "args": [Array<Permanents>, Permanents] }
| { "_Action": "ChooseMultiplePermanentsAmoungPermanentsForEachPlayer", "args": [Players, Array<Permanents>, Permanents] }
| { "_Action": "ChooseNamedPileForPermanent", "args": [Array<string>, Permanent] }
| { "_Action": "ChooseNewTargetsForAnyNumberOfSpellsOrAbilities", "args": SpellsAndAbilities }
| { "_Action": "ChooseNewTargetsForSpell", "args": Spell }
| { "_Action": "ChooseNewTargetsForSpellOrAbility", "args": SpellOrAbility }
| { "_Action": "ChooseNumberAbilitiesAtRandom", "args": [GameNumber, Array<Rule>] }
| { "_Action": "ChooseNumberCardsFromAmongCardsInHandRevealedThisWay", "args": [GameNumber, Cards] }
| { "_Action": "ChooseNumberCardsInEachPlayersGraveyard", "args": [GameNumber, Cards, Players] }
| { "_Action": "ChooseNumberCardsInHand", "args": GameNumber }
| { "_Action": "ChooseNumberGraveyardCards", "args": [GameNumber, CardsInGraveyards] }
| { "_Action": "ChooseNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Action": "ChooseOneOrTwoPermanents", "args": Permanents }
| { "_Action": "ChoosePTMod", "args": Array<PTMod> }
| { "_Action": "ChoosePermanentFilter", "args": Array<Permanents> }
| { "_Action": "ChooseProtectionFromAColorOrFromArtifact" }
| { "_Action": "ChooseRandomColorPermanentDoesntHaveProtectionFrom", "args": Permanent }
| { "_Action": "ChooseTwoBasicLandTypes" }
| { "_Action": "ChooseTwoColorWords" }
| { "_Action": "ChooseUptoNumberCardsFromAmongCardsInPlayersHandRevealedThisWay", "args": [GameNumber, Cards, Player] }
| { "_Action": "ChooseUptoNumberCardsInHand", "args": [GameNumber, Cards] }
| { "_Action": "ChooseUptoNumberExiledCards", "args": [GameNumber, CardsInExile] }
| { "_Action": "ChooseUptoNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Action": "ChooseUptoNumberPermanentsForEach", "args": [GameNumber, Permanents, GameNumber] }
| { "_Action": "ChooseUptoOnePermanent", "args": Permanents }
| { "_Action": "ChooseUptoOnePermanentForEachPlayer", "args": Permanents }
| { "_Action": "ChooseWord", "args": Array<string> }
| { "_Action": "Cipher", "args": Spell }
| { "_Action": "CircleNumberColors", "args": [GameNumber, ChoosableColor] }
| { "_Action": "ClaimThePrize" }
| { "_Action": "Clash", "args": [Players, Array<Action>, Array<Action>] }
| { "_Action": "CloakACardFromHand" }
| { "_Action": "CloakCardFromHand", "args": CardInHand }
| { "_Action": "CloakEachExiledCard", "args": [CardsInExile, Array<EnterFlag>] }
| { "_Action": "CloakTheTopCardOfPlayersLibrary", "args": Player }
| { "_Action": "CollectEvidence", "args": GameNumber }
| { "_Action": "ConjureACardIntoGraveyard", "args": string }
| { "_Action": "ConjureACardOfChoiceFromSpellBookIntoHand", "args": string }
| { "_Action": "ConjureACardOfChoiceFromSpellBookOntoBattlefield", "args": [string, Array<EnterFlag>] }
| { "_Action": "ConjureACardOfTypeFromSpellBookOntoBattlefield", "args": [string, CardsInOracle, Array<EnterFlag>] }
| { "_Action": "ConjureADuplicateOfEachPermanentIntoGraveyard", "args": Permanents }
| { "_Action": "ConjureADuplicateOfEachPermanentOntoTheBattlefield", "args": [Permanents, Array<EnterFlag>] }
| { "_Action": "ConjureADuplicateOfPermanentOntoTheBattlefield", "args": [Permanent, Array<EnterFlag>] }
| { "_Action": "ConjureADuplicateOfSpellCardOntoTheBattlefield", "args": [Spell, Array<EnterFlag>] }
| { "_Action": "ConjureARandomCardFromSpellBookIntoExile", "args": string }
| { "_Action": "ConjureARandomCardFromSpellBookIntoExileFaceDown", "args": string }
| { "_Action": "ConjureARandomCardFromSpellBookIntoHand", "args": string }
| { "_Action": "ConjureARandomCardFromSpellBookOntoBattlefield", "args": [string, Array<EnterFlag>] }
| { "_Action": "ConjureARandomCardFromSpellbookIntoTheTopNumberCardsOfLibrary", "args": [string, GameNumber] }
| { "_Action": "ConjureARandomCardIntoExile", "args": CardsInOracle }
| { "_Action": "ConjureARandomCardOntoBattlefield", "args": [CardsInOracle, Array<EnterFlag>] }
| { "_Action": "ConjureCardIntoHand", "args": string }
| { "_Action": "ConjureCardIntoLibraryNthFromTop", "args": [string, GameNumber] }
| { "_Action": "ConjureCardIntoTheTopNumberCardsOfLibraryAtRandom", "args": [string, GameNumber] }
| { "_Action": "ConjureCardOntoBattlefield", "args": [string, Array<EnterFlag>] }
| { "_Action": "ConjureCardOrCardIntoHand", "args": [string, string] }
| { "_Action": "ConjureCardsIntoGraveyard", "args": [GameNumber, string] }
| { "_Action": "ConjureCardsOntoTheBattlefield", "args": [Array<string>, Array<EnterFlag>] }
| { "_Action": "ConjureDuplicateOfARandomCardOfTypeFromAPlayersLibraryIntoHand", "args": [Cards, Players] }
| { "_Action": "ConjureDuplicateOfARandomCardOfTypeFromPlayersLibraryIntoHand", "args": [Cards, Player] }
| { "_Action": "ConjureDuplicateOfARandomCardOfTypeIntoHand", "args": Cards }
| { "_Action": "ConjureDuplicateOfARandomCardOfTypeOntoBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Action": "ConjureDuplicateOfCardInHandIntoHand", "args": CardInHand }
| { "_Action": "ConjureDuplicateOfEachCardSeekedThisWayIntoHand" }
| { "_Action": "ConjureDuplicateOfEachDestroyedPermanentIntoHand", "args": Permanents }
| { "_Action": "ConjureDuplicateOfEachExiledCardIntoHand", "args": CardsInExile }
| { "_Action": "ConjureDuplicateOfEachPermanentIntoHand", "args": Permanents }
| { "_Action": "ConjureDuplicateOfExiledCardIntoHand", "args": CardInExile }
| { "_Action": "ConjureDuplicateOfExiledCardIntoPlayersGraveyard", "args": [CardInExile, Player] }
| { "_Action": "ConjureDuplicateOfExiledCardIntoTheTopNumberCardsOfLibraryAtRandom", "args": [CardInExile, GameNumber] }
| { "_Action": "ConjureDuplicateOfGraveyardCardIntoHand", "args": CardInGraveyards }
| { "_Action": "ConjureDuplicateOfGraveyardCardIntoPlayersGraveyard", "args": [CardInGraveyards, Player] }
| { "_Action": "ConjureDuplicateOfGraveyardCardOnTopOfPlayersLibrary", "args": [CardInGraveyards, Player] }
| { "_Action": "ConjureDuplicateOfPermanentIntoExile", "args": Permanent }
| { "_Action": "ConjureDuplicateOfPermanentIntoHand", "args": Permanent }
| { "_Action": "ConjureDuplicateOfPermanentIntoPlayersGraveyard", "args": [Permanent, Player] }
| { "_Action": "ConjureDuplicateOfPermanentIntoTopNumberCardsOfPlayersLibraryAtRandom", "args": [Permanent, GameNumber, Player] }
| { "_Action": "ConjureDuplicateOfSpellIntoHand", "args": Spell }
| { "_Action": "ConjureDuplicateOfThePermanentSacrificedThisWayIntoHand" }
| { "_Action": "ConjureDuplicateOfTheTopCardOfPlayersIntoHand", "args": Player }
| { "_Action": "ConjureDuplicatesOfNumberRandomCardsOfTypeFromPlayersLibraryIntoHand", "args": [GameNumber, Cards, Player] }
| { "_Action": "ConjureEachCardFromSpellBookIntoLibrary", "args": string }
| { "_Action": "ConjureEachCardFromSpellBookOntoTheBattlefield", "args": [string, Array<EnterFlag>] }
| { "_Action": "ConjureMultipleCardsIntoLibraryAndShuffle", "args": [string, string, string] }
| { "_Action": "ConjureNumberCardsIntoHand", "args": [GameNumber, string] }
| { "_Action": "ConjureNumberCardsIntoLibrary", "args": [GameNumber, string] }
| { "_Action": "ConjureNumberCardsIntoLibraryAndShuffle", "args": [GameNumber, string] }
| { "_Action": "ConjureNumberCardsIntoPlayersGraveyard", "args": [GameNumber, string, Player] }
| { "_Action": "ConjureNumberCardsIntoTheTopNumberCardsOfEachPlayersLibraryAtRandom", "args": [GameNumber, string, GameNumber, Players] }
| { "_Action": "ConjureNumberCardsOfChoiceFromSpellBookIntoHand", "args": [GameNumber, string] }
| { "_Action": "ConjureNumberCardsOnTopOfLibrary", "args": [GameNumber, string] }
| { "_Action": "ConjureNumberCardsOntoBattlefield", "args": [GameNumber, string, Array<EnterFlag>] }
| { "_Action": "ConjureNumberDuplicateCardsIntoGraveyard", "args": [GameNumber, CardInHand] }
| { "_Action": "ConjureNumberDuplicatesOfAnOutsideCardIntoHand", "args": [GameNumber, Cards] }
| { "_Action": "ConjureNumberDuplicatesOfGraveyardCardIntoExile", "args": [GameNumber, CardInGraveyards] }
| { "_Action": "ConjureNumberRandomCardsFromSpellBookIntoHand", "args": [GameNumber, string] }
| { "_Action": "ConjureThePowerNineIntoLibraryAndShuffle" }
| { "_Action": "ControllersSacrificeEachPermanent", "args": Permanents }
| { "_Action": "ConvertPermanent", "args": Permanent }
| { "_Action": "CopyAbilityAndMayChooseNewTargets", "args": Ability }
| { "_Action": "CopyAbilityForEachPermanentItCouldTarget", "args": [Ability, Permanents] }
| { "_Action": "CopyAbilityNumberTimesAndMayChooseNewTargets", "args": [Ability, GameNumber] }
| { "_Action": "CopyActivatedAbilityAndMayChooseNewTargets", "args": ActivatedAbility }
| { "_Action": "CopyAnExiledCard", "args": CardsInExile }
| { "_Action": "CopyAnExiledCardNumberTimes", "args": [CardsInExile, GameNumber] }
| { "_Action": "CopyCard", "args": SingleCard }
| { "_Action": "CopyCardInHand", "args": CardInHand }
| { "_Action": "CopyCardWithTheNotedName" }
| { "_Action": "CopyEachAbilityAndMayChooseNewTargets", "args": Abilities }
| { "_Action": "CopyEachSpellAndMayChooseNewTargets", "args": Spells }
| { "_Action": "CopyEnchantedGraveyardCard" }
| { "_Action": "CopyExiledCard", "args": CardInExile }
| { "_Action": "CopyExiledCardNumberTimes", "args": [CardInExile, GameNumber] }
| { "_Action": "CopyExiledCards", "args": CardsInExile }
| { "_Action": "CopyNumberCardsAtRandom", "args": [GameNumber, Cards] }
| { "_Action": "CopySpell", "args": Spell }
| { "_Action": "CopySpellAndMayChooseNewTargets", "args": Spell }
| { "_Action": "CopySpellAndMayChooseNewTargetsWithEffects", "args": [Spell, Array<SpellEffect>] }
| { "_Action": "CopySpellAndMustChooseNewTarget", "args": [Spell, Permanent] }
| { "_Action": "CopySpellAndRandomlyChooseNewTargetsExceptFor", "args": [Spell, PlayersAndPermanents] }
| { "_Action": "CopySpellForEach", "args": [Spell, GameNumber] }
| { "_Action": "CopySpellForEachAndMayChooseNewTargets", "args": [Spell, GameNumber] }
| { "_Action": "CopySpellForEachOtherPermanentOrPlayerAndMustChooseThemAsNewTarget", "args": Spell }
| { "_Action": "CopySpellForEachPermanentAndMustChooseItAsNewTarget", "args": [Spell, Permanents] }
| { "_Action": "CopySpellForEachPlayerAndMustChooseNewTargetPermanentTheyControl", "args": [Spell, Players] }
| { "_Action": "CopySpellForEachPlayerAndMustChooseThemAsNewTarget", "args": [Spell, Players] }
| { "_Action": "CopySpellForEachSpellPermanentCardAndOrPlayerItCouldTarget", "args": Spell }
| { "_Action": "CopySpellNumberTimes", "args": [Spell, GameNumber] }
| { "_Action": "CopySpellNumberTimesAndMayChooseNewTargets", "args": [Spell, GameNumber] }
| { "_Action": "CopySpellOrAbilityAndMayChooseNewTargets", "args": SpellOrAbility }
| { "_Action": "CopySpellOrAbilityForEachPermanentOrPlayerItCouldTarget", "args": SpellOrAbility }
| { "_Action": "CopySpellOrAbilityNumberTimesAndMayChooseNewTargets", "args": [SpellOrAbility, GameNumber] }
| { "_Action": "CopySpellWithModifiers", "args": [Spell, Array<SpellEffect>] }
| { "_Action": "CounterAbility", "args": Ability }
| { "_Action": "CounterEachAbility", "args": Abilities }
| { "_Action": "CounterEachSpell", "args": Spells }
| { "_Action": "CounterEachSpellAndAbility", "args": SpellsAndAbilities }
| { "_Action": "CounterSpell", "args": Spell }
| { "_Action": "CounterSpellAndSpellsOfTypeAreCounteredOntoTheBattlefield", "args": [Spell, Spells, Array<EnterFlag>] }
| { "_Action": "CounterSpellIntoBottomOfLibrary", "args": Spell }
| { "_Action": "CounterSpellIntoExile", "args": Spell }
| { "_Action": "CounterSpellIntoExileWithANumberOfCountersAndWithEffects", "args": [Spell, GameNumber, CounterType, Array<ExiledCardEffect>] }
| { "_Action": "CounterSpellIntoHand", "args": Spell }
| { "_Action": "CounterSpellIntoTopOfLibrary", "args": Spell }
| { "_Action": "CounterSpellIntoTopOrBottomOfLibrary", "args": Spell }
| { "_Action": "CounterSpellOrAbility", "args": SpellOrAbility }
| { "_Action": "CreateCardInHandEffectUntil", "args": [CardInHand, Array<CardEffect>, Expiration] }
| { "_Action": "CreateCopiesOfRandomCardsWithManaCosts", "args": GameNumber }
| { "_Action": "CreateEachCardInPlayersGraveyardEffectUntil", "args": [Cards, Player, Array<GraveyardCardEffect>, Expiration] }
| { "_Action": "CreateEachExiledCardEffect", "args": [CardsInExile, Array<ExiledCardEffect>] }
| { "_Action": "CreateEachPermanentLayerEffect", "args": [Permanents, Array<LayerEffect>] }
| { "_Action": "CreateEachPermanentLayerEffectUntil", "args": [Permanents, Array<LayerEffect>, Expiration] }
| { "_Action": "CreateEachPermanentRuleEffect", "args": [Permanents, Array<PermanentRule>] }
| { "_Action": "CreateEachPermanentRuleEffectUntil", "args": [Permanents, Array<PermanentRule>, Expiration] }
| { "_Action": "CreateEachPlayerEffectUntil", "args": [Players, Array<PlayerEffect>, Expiration] }
| { "_Action": "CreateEachSpellEffect", "args": [Spells, Array<SpellEffect>, Expiration] }
| { "_Action": "CreateExiledCardEffect", "args": [CardInExile, Array<ExiledCardEffect>] }
| { "_Action": "CreateFuturePlayerEffect", "args": [Player, FuturePlayerEffect] }
| { "_Action": "CreateFuturePreventDamage", "args": [FutureEventPreventDamage, Array<ActionPreventDamage>] }
| { "_Action": "CreateFutureReplaceWouldAdapt", "args": [FutureReplacableEventWouldAdapt, Array<ReplacementActionWouldAdapt>] }
| { "_Action": "CreateFutureReplaceWouldDealDamage", "args": [FutureReplacableEventWouldDealDamage, Array<ReplacementActionWouldDealDamage>] }
| { "_Action": "CreateFutureReplaceWouldDestroy", "args": [FutureReplacableEventWouldDestroy, Array<ReplacementActionWouldDestroy>] }
| { "_Action": "CreateFutureReplaceWouldDraw", "args": [FutureReplacableEventWouldDraw, Array<ReplacementActionWouldDraw>] }
| { "_Action": "CreateFutureReplaceWouldEnter", "args": [FutureReplacableEventWouldEnter, Array<ReplacementActionWouldEnter>] }
| { "_Action": "CreateFutureReplaceWouldLeaveTheBattlefield", "args": [FutureReplacableEventWouldLeaveTheBattlefield, Array<ReplacementActionWouldLeaveTheBattlefield>] }
| { "_Action": "CreateFutureReplaceWouldLoseTheGame", "args": [FutureReplacableEventWouldLoseTheGame, Array<ReplacementActionWouldLoseTheGame>] }
| { "_Action": "CreateFutureReplaceWouldRollDice", "args": [FutureReplacableEventWouldRollDice, Array<ReplacementActionWouldRollDice>] }
| { "_Action": "CreateFutureReplaceWouldSetASchemeInMotion", "args": [FutureReplacableEventWouldSetASchemeInMotion, Array<ReplacementActionWouldSetASchemeInMotion>] }
| { "_Action": "CreateFutureSpellEffect", "args": [FutureSpell, Array<SpellEffect>] }
| { "_Action": "CreateFutureTrigger", "args": [FutureTrigger, Actions] }
| { "_Action": "CreateFutureTriggerI", "args": [FutureTrigger, Condition, Actions] }
| { "_Action": "CreateFutureTrigger_UnlessPlayerPaysManaBefore", "args": [FutureTrigger, Actions, Player, Array<ManaSymbol>] }
| { "_Action": "CreateGameEffect", "args": [Expiration, GameEffect] }
| { "_Action": "CreateGraveyardCardEffectUntil", "args": [CardInGraveyards, Array<GraveyardCardEffect>, Expiration] }
| { "_Action": "CreateGroupExileEffect", "args": [Expiration, CardsInExile, Array<GroupExiledEffect>] }
| { "_Action": "CreateLimitedSpellEffect", "args": [Expiration, Spell, Array<SpellEffect>] }
| { "_Action": "CreatePermanentLayerEffect", "args": [Permanent, Array<LayerEffect>] }
| { "_Action": "CreatePermanentLayerEffectUntil", "args": [Permanent, Array<LayerEffect>, Expiration] }
| { "_Action": "CreatePermanentRuleEffect", "args": [Permanent, Array<PermanentRule>] }
| { "_Action": "CreatePermanentRuleEffectUntil", "args": [Permanent, Array<PermanentRule>, Expiration] }
| { "_Action": "CreatePermanentSpellLayerEffect", "args": [Expiration, Spell, Array<LayerEffect>] }
| { "_Action": "CreatePermanentsList", "args": Permanents }
| { "_Action": "CreatePerpetualAllCardsEffect", "args": [Cards, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualCardInHandEffect", "args": [CardInHand, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualCardInLibraryEffect", "args": [CardInLibrary, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualCardsInEachPlayersHandEffect", "args": [CardsInHand, Players, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualCardsInHandEffect", "args": [CardsInHand, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualCardsInPlayersGraveyardEffect", "args": [CardsInGraveyards, Player, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualCardsInPlayersHandAndCardsInPlayersLibraryEffect", "args": [CardsInHand, Players, CardsInLibrary, Players, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualCardsInPlayersHandEffect", "args": [CardsInHand, Player, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualCardsInPlayersLibraryEffect", "args": [CardsInLibrary, Player, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualDeadCardEffect", "args": Array<PerpetualEffect> }
| { "_Action": "CreatePerpetualEachExiledCardEffect", "args": [CardsInExile, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualEachGraveyardCardEffect", "args": [CardsInGraveyards, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualEachPermanentEffect", "args": [Permanents, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualExiledCardEffect", "args": [CardInExile, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualGraveyardCardEffect", "args": [CardInGraveyards, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualPermanentEffect", "args": [Permanent, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualPermanentOrGraveyardCardEffect", "args": [Permanent, CardInGraveyards, Array<PerpetualEffect>] }
| { "_Action": "CreatePerpetualSpellEffect", "args": [Spell, Array<PerpetualEffect>] }
| { "_Action": "CreatePlayerEffect", "args": [Player, Array<PlayerEffect>] }
| { "_Action": "CreatePlayerEffectUntil", "args": [Player, Array<PlayerEffect>, Expiration] }
| { "_Action": "CreatePreventDamageUntil", "args": [EventPreventDamage, Array<ActionPreventDamage>, Expiration] }
| { "_Action": "CreateReplaceAnyNumberOfTokensWouldBeCreatedUntil", "args": [ReplacableEventAnyNumberOfTokensWouldBeCreated, Array<ReplacementActionAnyNumberOfTokensWouldBeCreated>, Expiration] }
| { "_Action": "CreateReplaceTokensWouldBeCreatedUnderAPlayersControlUntil", "args": [ReplacableEventTokensWouldBeCreatedUnderAPlayersControl, Array<ReplacementActionTokensWouldBeCreatedUnderAPlayersControl>, Expiration] }
| { "_Action": "CreateReplaceWouldDealDamageUntil", "args": [ReplacableEventWouldDealDamage, Array<ReplacementActionWouldDealDamage>, Expiration] }
| { "_Action": "CreateReplaceWouldDrawUntil", "args": [ReplacableEventWouldDraw, Array<ReplacementActionWouldDraw>, Expiration] }
| { "_Action": "CreateReplaceWouldEnterUntil", "args": [ReplacableEventWouldEnter, Array<ReplacementActionWouldEnter>, Expiration] }
| { "_Action": "CreateReplaceWouldGainLifeUntil", "args": [ReplacableEventWouldGainLife, Array<ReplacementActionWouldGainLife>, Expiration] }
| { "_Action": "CreateReplaceWouldLeaveTheBattlefieldUntil", "args": [ReplacableEventWouldLeaveTheBattlefield, Array<ReplacementActionWouldLeaveTheBattlefield>, Expiration] }
| { "_Action": "CreateReplaceWouldMaskUntil", "args": [ReplacableEventWouldMask, Array<ReplacementActionWouldMask>, Expiration] }
| { "_Action": "CreateReplaceWouldPlaneswalkUntil", "args": [ReplacableEventWouldPlaneswalk, Array<ReplacementActionWouldPlaneswalk>, Expiration] }
| { "_Action": "CreateReplaceWouldProduceManaUntil", "args": [ReplacableEventWouldProduceMana, Array<ReplacementActionWouldProduceMana>, Expiration] }
| { "_Action": "CreateReplaceWouldPutCountersUntil", "args": [ReplacableEventWouldPutCounters, Array<ReplacementActionWouldPutCounters>, Expiration] }
| { "_Action": "CreateReplaceWouldPutIntoGraveyardUntil", "args": [ReplacableEventWouldPutIntoGraveyard, Array<ReplacementActionWouldPutIntoGraveyard>, Expiration] }
| { "_Action": "CreateSpellEffect", "args": [Spell, Array<SpellEffect>] }
| { "_Action": "CreateSpellOrPermanentEffect", "args": [Expiration, SpellOrPermanent, Array<SpellOrPermanentEffect>] }
| { "_Action": "CreateTrigger", "args": [Trigger, Actions] }
| { "_Action": "CreateTriggerOnce", "args": [Expiration, Trigger, Actions] }
| { "_Action": "CreateTriggerUntil", "args": [Trigger, Actions, Expiration] }
| { "_Action": "CreateTriggerUntilI", "args": [Trigger, Condition, Actions, Expiration] }
| { "_Action": "CreateValueX", "args": GameNumber }
| { "_Action": "CreatureConnives", "args": Permanent }
| { "_Action": "CreatureConnivesNumber", "args": [Permanent, GameNumber] }
| { "_Action": "CreatureMustAttackDuringControllersNextCombatPhase", "args": Permanent }
| { "_Action": "DeadGuestPermanentDealsDamage", "args": [GameNumber, DamageRecipient] }
| { "_Action": "DeadPermanentDealsDamage", "args": [GameNumber, DamageRecipient] }
| { "_Action": "DeadPermanentDealsDistributedDamage" }
| { "_Action": "DestroyAPermanentAtRandom", "args": Permanents }
| { "_Action": "DestroyAPermanentNoRegen", "args": Permanents }
| { "_Action": "DestroyEachPermanent", "args": Permanents }
| { "_Action": "DestroyEachPermanentNoRegen", "args": Permanents }
| { "_Action": "DestroyEachPermanentNoRegenSubset", "args": [Permanents, Permanents] }
| { "_Action": "DestroyNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Action": "DestroyPermanent", "args": Permanent }
| { "_Action": "DestroyPermanentNoRegen", "args": Permanent }
| { "_Action": "DestroyUptoNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Action": "DestroyUptoOnePermanentEachPlayerControls", "args": [Permanents, Players] }
| { "_Action": "DetainEachPermanent", "args": Permanents }
| { "_Action": "DetainPermanent", "args": Permanent }
| { "_Action": "DigitallySearchLibrary", "args": Array<SearchLibraryAction> }
| { "_Action": "DiscardACard" }
| { "_Action": "DiscardACardAtRandom" }
| { "_Action": "DiscardACardOfType", "args": Cards }
| { "_Action": "DiscardAllButNumberCards", "args": GameNumber }
| { "_Action": "DiscardAnyNumberOfCards" }
| { "_Action": "DiscardAnyNumberOfCardsAtRandom" }
| { "_Action": "DiscardAnyNumberOfCardsOfType", "args": Cards }
| { "_Action": "DiscardCard", "args": CardInHand }
| { "_Action": "DiscardCards", "args": CardsInHand }
| { "_Action": "DiscardEachCard", "args": CardsInHand }
| { "_Action": "DiscardHand" }
| { "_Action": "DiscardNumberCards", "args": GameNumber }
| { "_Action": "DiscardNumberCardsAtRandom", "args": GameNumber }
| { "_Action": "DiscardNumberCardsDrawnThisTurn", "args": GameNumber }
| { "_Action": "DiscardNumberCardsOfType", "args": [GameNumber, Cards] }
| { "_Action": "DiscardTheCardDrawnThisWay" }
| { "_Action": "DiscardTheCardRevealedThisWay" }
| { "_Action": "DiscardUptoNumberCards", "args": GameNumber }
| { "_Action": "DiscardedCardDealsDamage", "args": [CardInHand, GameNumber, DamageRecipient] }
| { "_Action": "Discover", "args": GameNumber }
| { "_Action": "DistrbuteUptoNumberArtStickersAmongAnyNumberOfPermanents", "args": [GameNumber, Permanents] }
| { "_Action": "DoNothing" }
| { "_Action": "DoubleCreaturesPowerAndToughnessUntilEndOfTurn", "args": Permanent }
| { "_Action": "DoubleCreaturesPowerNumberTimesUntilEndOfTurn", "args": [Permanent, GameNumber] }
| { "_Action": "DoubleCreaturesPowerUntilEndOfTurn", "args": Permanent }
| { "_Action": "DoubleEachCreaturesPowerAndToughnessUntilEndOfTurn", "args": Permanents }
| { "_Action": "DoubleEachCreaturesPowerUntilEndOfTurn", "args": Permanents }
| { "_Action": "DoubleEachCreaturesToughnessUntilEndOfTurn", "args": Permanents }
| { "_Action": "DoubleEachTypeOfUnspentMana" }
| { "_Action": "DoubleTheStake" }
| { "_Action": "DoubleXValueOfSpell", "args": Spell }
| { "_Action": "DraftACardFromSpellBook", "args": string }
| { "_Action": "DraftACardFromSpellBookNumberTimes", "args": [string, GameNumber] }
| { "_Action": "DrawACard" }
| { "_Action": "DrawNumberCards", "args": GameNumber }
| { "_Action": "DrawNumberCardsForEach", "args": [GameNumber, GameNumber] }
| { "_Action": "DrawNumberCardsThenDiscardNumberOfThem", "args": [GameNumber, GameNumber] }
| { "_Action": "DrawTheGame" }
| { "_Action": "DrawUptoNumberCards", "args": GameNumber }
| { "_Action": "DuringNextUntap", "args": [Player, Array<Action>] }
| { "_Action": "EachCreatureConnives", "args": Permanents }
| { "_Action": "EachPermanentDealsDamage", "args": [Permanents, GameNumber, DamageRecipient] }
| { "_Action": "EachPermanentDoesntUntapDuringControllersNextUntap", "args": Permanents }
| { "_Action": "EachPlayerAction", "args": [Players, Action] }
| { "_Action": "EachPlayerCantCastSpellsDuringTheirNextTurn", "args": [Players, Spells] }
| { "_Action": "EachPlayerChoosesAnAction", "args": [Players, Array<Action>] }
| { "_Action": "EachPlayerMakesAVillainousChoice", "args": [Players, Array<Array<Action>>] }
| { "_Action": "EachPlayerMayAction", "args": [Players, Action] }
| { "_Action": "EachPlayerMayActions", "args": [Players, Array<Action>] }
| { "_Action": "EachPlayerMayCost", "args": [Players, Cost] }
| { "_Action": "EachPlayerMustCost", "args": [Players, Cost] }
| { "_Action": "EachPlayerRepeatedMayCost", "args": [Players, GameNumber, Cost] }
| { "_Action": "EachPlayerRevealsCardsFromTheTopOfTheirLibraryUntilTheyRevealACardOfType", "args": [Players, Cards, Array<RevealTheTopNumberCardsOfLibraryAction>] }
| { "_Action": "EachPlayerStartingWithAction", "args": [Players, Player, Array<Action>] }
| { "_Action": "EachPlayerStartingWithActionInDirection", "args": [Players, Player, Direction, Array<Action>] }
| { "_Action": "EachPlayerStartingWithMayAction", "args": [Players, Player, Action] }
| { "_Action": "Earthbend", "args": [Permanent, GameNumber] }
| { "_Action": "EmblemDealsDamage", "args": [Emblem, GameNumber, DamageRecipient] }
| { "_Action": "EndTheCombatPhase" }
| { "_Action": "EndTheTurn" }
| { "_Action": "EndureWithPermanent", "args": [GameNumber, Permanent] }
| { "_Action": "Epic" }
| { "_Action": "ExchangeAnteCardWithTopCardOfPlayersLibrary", "args": [AnteCard, Player] }
| { "_Action": "ExchangeControl", "args": [Permanent, Permanent] }
| { "_Action": "ExchangeControlOfEachPermanentWithPlayer", "args": [Permanents, Player] }
| { "_Action": "ExchangeControlOfEachPermanentWithPlayerUntil", "args": [Permanents, Player, Expiration] }
| { "_Action": "ExchangeControlOfSpellAndPermanent", "args": [Spell, Permanent] }
| { "_Action": "ExchangeGraveyardAndLibrary" }
| { "_Action": "ExchangeHandAndGraveyard" }
| { "_Action": "ExchangeHandAndLibraryThenShuffle" }
| { "_Action": "ExchangeLifeTotalWithPermanentsPower", "args": Permanent }
| { "_Action": "ExchangeLifeTotalWithPermanentsToughness", "args": Permanent }
| { "_Action": "ExchangeLifeTotalWithPlayer", "args": Player }
| { "_Action": "ExchangeOwnershipOfTwoCards", "args": [ExchangeOwnershipCard, ExchangeOwnershipCard] }
| { "_Action": "ExchangePowerOfTwoCreaturesUntil", "args": [Permanent, Permanent, Expiration] }
| { "_Action": "ExchangeTextBoxesOfTwoPermanentsUntil", "args": [Permanent, Permanent, Expiration] }
| { "_Action": "Exile", "args": [Array<Exilable>, Array<ExileFlag>] }
| { "_Action": "ExiledCardDealsDamage", "args": [CardInExile, GameNumber, DamageRecipient] }
| { "_Action": "ExploreWithEachPermanent", "args": Permanents }
| { "_Action": "ExploreWithPermanent", "args": Permanent }
| { "_Action": "ExploreWithPermanentNumberTimes", "args": [Permanent, GameNumber] }
| { "_Action": "FaceAVillianousChoice", "args": Array<Array<Action>> }
| { "_Action": "Fateseal", "args": GameNumber }
| { "_Action": "Fight", "args": [Permanent, Permanent] }
| { "_Action": "FlipACoin" }
| { "_Action": "FlipACoinAndCallIt" }
| { "_Action": "FlipACoinForEachPermanent", "args": Permanents }
| { "_Action": "FlipACoinNumberTimesOrUntilLose", "args": GameNumber }
| { "_Action": "FlipACoinUntilLose" }
| { "_Action": "FlipACoinUntilLoseOrStop" }
| { "_Action": "FlipACoin_OnHeadAndOnTails", "args": [Array<Action>, Array<Action>] }
| { "_Action": "FlipACoin_OnLose", "args": Array<Action> }
| { "_Action": "FlipACoin_OnWin", "args": Array<Action> }
| { "_Action": "FlipACoin_OnWinAndLose", "args": [Array<Action>, Array<Action>] }
| { "_Action": "FlipCoins", "args": GameNumber }
| { "_Action": "FlipPermanent", "args": Permanent }
| { "_Action": "ForEachPermanentConjureCardOntoBattlefield", "args": [Permanents, string, Array<EnterFlag>] }
| { "_Action": "ForEachPlayerChooseAWord", "args": [Players, Array<string>] }
| { "_Action": "ForEachPlayerSearchLibrary", "args": [Players, Array<SearchLibraryAction>] }
| { "_Action": "ForEachValueInRangeConjureDuplicateOfARandomCardOfTypeOntoBattlefield", "args": [GameNumber, GameNumber, Cards, Array<EnterFlag>] }
| { "_Action": "Forage" }
| { "_Action": "GainControlOfAPermanentControlledByEachPlayer", "args": [Permanents, Players] }
| { "_Action": "GainControlOfAPermanentUntil", "args": [Permanents, Expiration] }
| { "_Action": "GainControlOfEachPermanent", "args": Permanents }
| { "_Action": "GainControlOfEachPermanentUntil", "args": [Permanents, Expiration] }
| { "_Action": "GainControlOfPermanent", "args": Permanent }
| { "_Action": "GainControlOfPermanentUntil", "args": [Permanent, Expiration] }
| { "_Action": "GainControlOfPlayerDuringTheirNextCombatStep", "args": Player }
| { "_Action": "GainControlOfPlayerDuringTheirNextTurn", "args": Player }
| { "_Action": "GainControlOfSpellAndMayChooseNewTargets", "args": Spell }
| { "_Action": "GainControlOfSpellAndRandomlyChooseNewTargetsExceptFor", "args": [Spell, PlayersAndPermanents] }
| { "_Action": "GainLife", "args": GameNumber }
| { "_Action": "GainLifeAndLifeForEach", "args": [GameNumber, GameNumber, GameNumber] }
| { "_Action": "GainLifeForEach", "args": [GameNumber, GameNumber] }
| { "_Action": "GetANumberTimeBoon", "args": [GameNumber, Trigger, Actions] }
| { "_Action": "GetAnEmblem", "args": Array<Rule> }
| { "_Action": "GetEnergy", "args": GameNumber }
| { "_Action": "GetNumberTickets", "args": GameNumber }
| { "_Action": "GetOneTimeBoon", "args": [Trigger, Actions] }
| { "_Action": "GetOneTimeConditionalBoon", "args": [Trigger, Condition, Actions] }
| { "_Action": "GoadCreature", "args": Permanent }
| { "_Action": "GoadCreatureUntil", "args": [Permanent, Expiration] }
| { "_Action": "GoadEachCreature", "args": Permanents }
| { "_Action": "GraveyardCardDealsDamage", "args": [CardInGraveyards, GameNumber, DamageRecipient] }
| { "_Action": "GraveyardCardDealsMultipleDamage", "args": [CardInGraveyards, Array<DamageToRecipients>] }
| { "_Action": "GuessIfACardIsInPlayersHand", "args": [Cards, Player] }
| { "_Action": "GuessIfCardInHandPassesFilter", "args": [CardInHand, Cards] }
| { "_Action": "GuessWhichNumberWasSecretlyChosen" }
| { "_Action": "HarnessPermanent", "args": Permanent }
| { "_Action": "HaveDeadPermanentDealDamage", "args": [GameNumber, DamageRecipient] }
| { "_Action": "HaveDiscardedCardDealDamage", "args": [CardInHand, GameNumber, DamageRecipient] }
| { "_Action": "HaveEachPlayerLoseLife", "args": [Players, GameNumber] }
| { "_Action": "HavePermanentDealDamage", "args": [Permanent, GameNumber, DamageRecipient] }
| { "_Action": "HavePlayerTakeAction", "args": [Player, Action] }
| { "_Action": "HeistPlayersLibrary", "args": Player }
| { "_Action": "If", "args": [Condition, Array<Action>] }
| { "_Action": "IfElse", "args": [Condition, Array<Action>, Array<Action>] }
| { "_Action": "IfHavePlayerAction", "args": [Player, Action, Array<Action>] }
| { "_Action": "Incubate", "args": GameNumber }
| { "_Action": "IncubateNumberTimes", "args": [GameNumber, GameNumber] }
| { "_Action": "IntensifyCard", "args": SingleCard }
| { "_Action": "IntensifyPermanent", "args": Permanent }
| { "_Action": "Investigate" }
| { "_Action": "InvestigateTimes", "args": GameNumber }
| { "_Action": "Learn" }
| { "_Action": "LockOrUnlockADoorOfPermanent", "args": Permanent }
| { "_Action": "LookAtARandomCardInPlayersHand", "args": Player }
| { "_Action": "LookAtCardsOfTypeInPlayersHand", "args": [Cards, Player] }
| { "_Action": "LookAtEachFaceDownPermanent", "args": Permanents }
| { "_Action": "LookAtFaceDownExiledCards", "args": CardsInExile }
| { "_Action": "LookAtFaceDownPermanent", "args": Permanent }
| { "_Action": "LookAtPlayersHand", "args": Player }
| { "_Action": "LookAtPlayersHandAndChooseACardForPlayerToPlayControllingThemToDoSo", "args": [Player, Cards] }
| { "_Action": "LookAtPlayersHandAndChooseACardToDiscard", "args": [Player, Cards] }
| { "_Action": "LookAtPlayersHandAndChooseACardToPutOnBattlefield", "args": [Player, Cards, Array<EnterFlag>] }
| { "_Action": "LookAtPlayersHandAndChooseNumCardsToDiscard", "args": [Player, GameNumber, Cards] }
| { "_Action": "LookAtPlayersHandAndChooseNumberCardsToPutOnTopOfTheirLibraryInAnyOrder", "args": [Player, GameNumber, Cards] }
| { "_Action": "LookAtPlayersHandAndMayChooseACardToCastWithoutPaying", "args": [Player, Cards] }
| { "_Action": "LookAtTheTopCardOfEachPlayersLibrary", "args": Players }
| { "_Action": "LookAtTheTopCardOfPlayersLibrary", "args": Player }
| { "_Action": "LookAtTheTopNumberCardsOfLibrary", "args": [GameNumber, Array<LookAtTopOfLibraryAction>] }
| { "_Action": "LookAtTheTopNumberCardsOfPlayersLibrary", "args": [Player, GameNumber, Array<LookAtTopOfLibraryAction>] }
| { "_Action": "LookAtTopOfLibrary" }
| { "_Action": "LoseLife", "args": GameNumber }
| { "_Action": "LoseLifeAndLifeForEach", "args": [GameNumber, GameNumber, GameNumber] }
| { "_Action": "LoseLifeForEach", "args": [GameNumber, GameNumber] }
| { "_Action": "LoseTheGame" }
| { "_Action": "LoseUnspentMana" }
| { "_Action": "Loyalty", "args": number }
| { "_Action": "ManifestACardFromHand" }
| { "_Action": "ManifestCardFromHand", "args": CardInHand }
| { "_Action": "ManifestDread" }
| { "_Action": "ManifestDreadNumberTimes", "args": GameNumber }
| { "_Action": "ManifestEachCardOfTypeFromHand", "args": CardsInHand }
| { "_Action": "ManifestEachExiledCard", "args": CardsInExile }
| { "_Action": "ManifestNumberCardsFromHand", "args": GameNumber }
| { "_Action": "ManifestTheTopCardOfPlayersLibrary", "args": Player }
| { "_Action": "ManifestTheTopNumberCardsOfPlayersLibrary", "args": [GameNumber, Player] }
| { "_Action": "MayAction", "args": Action }
| { "_Action": "MayActionOnceEachTurn", "args": Action }
| { "_Action": "MayActions", "args": Array<Action> }
| { "_Action": "MayCastASpellFromAmongGraveyardCardsIntoExileOrBattlefield", "args": [Spells, CardsInGraveyards] }
| { "_Action": "MayCastASpellFromEachPlayersGraveyardWithoutPayingIntoExile", "args": [Spells, Players] }
| { "_Action": "MayCastASpellFromGraveyardIntoExile", "args": [Spells, Player] }
| { "_Action": "MayCastGraveyardCardAndMaySpendManaAsThoughAnyType", "args": CardInGraveyards }
| { "_Action": "MayCastGraveyardCardIntoExileAndMaySpendManaAsThoughAnyType", "args": CardInGraveyards }
| { "_Action": "MayCost", "args": Cost }
| { "_Action": "MayHavePlayerAction", "args": [Player, Action] }
| { "_Action": "MayPutACardFromHandOrGraveyardOnBattlefieldForEachPermanent", "args": [Cards, Array<EnterFlag>, Permanents] }
| { "_Action": "MayPutTheTopCardOfPlayersLibraryOfTypeInGraveyardForCost", "args": [Player, Cards, Cost] }
| { "_Action": "MayReflexiveAction", "args": Cost }
| { "_Action": "MayReflexiveActionTrigger", "args": [Cost, Actions] }
| { "_Action": "MayReselectWhichPlayerOrPermanentEachCreatureIsAttacking", "args": Permanents }
| { "_Action": "MillACard" }
| { "_Action": "MillCardsUntilACardOfTypeIsMilledOrUntilNumberCardsHaveBeenPutIntoGraveyardThisWay", "args": [Cards, GameNumber] }
| { "_Action": "MillNumberCards", "args": GameNumber }
| { "_Action": "Monstrosity", "args": GameNumber }
| { "_Action": "MoveCounters", "args": Array<MoveCountersAction> }
| { "_Action": "MultiFight", "args": [Permanents, Permanents] }
| { "_Action": "MustCost", "args": Cost }
| { "_Action": "NoteAnUnnotedCreatureType", "args": ChoosableCreatureType }
| { "_Action": "NoteCountersOnPermanent", "args": Permanent }
| { "_Action": "NoteManaTypeAndAmountSpentToActivateThisAbility" }
| { "_Action": "NoteNumber", "args": GameNumber }
| { "_Action": "NoteTypeOfManaSpentToActivateThisAbility" }
| { "_Action": "NumberEachPermanentStartingFromZero", "args": Permanents }
| { "_Action": "OnlyAllowedAttackersDuringTheAdditionalCombatStepAddedThisWay", "args": Permanents }
| { "_Action": "OnlyAllowedAttackersUntilEndOfTurn", "args": Permanents }
| { "_Action": "OnlyAllowedAttackingPlayersUntilEndOfTurn", "args": Players }
| { "_Action": "OnlyAllowedBlockersUntilEndOfTurn", "args": Permanents }
| { "_Action": "OnlyAllowedCastingPlayersUntilEndOfTurn", "args": Players }
| { "_Action": "OpenAnAttraction" }
| { "_Action": "OpenNumberAttractions", "args": GameNumber }
| { "_Action": "Paradigm", "args": Spell }
| { "_Action": "PayAnyAmountOfEnergy" }
| { "_Action": "PayAnyAmountOfLife" }
| { "_Action": "PayAnyAmountOfMana" }
| { "_Action": "PermanentDealsDamage", "args": [Permanent, GameNumber, DamageRecipient] }
| { "_Action": "PermanentDealsDamageAndPermanentDealsDamage", "args": [Permanent, GameNumber, DamageRecipient, Permanent, GameNumber, DamageRecipient] }
| { "_Action": "PermanentDealsDamageAndPreventSomeOfIt", "args": [Permanent, GameNumber, DamageRecipient, GameNumber] }
| { "_Action": "PermanentDealsDamageDividedAsPlayerChooses", "args": [Permanent, GameNumber, DamageRecipient, Player] }
| { "_Action": "PermanentDealsDamageExcessReplacable", "args": [Permanent, GameNumber, DamageRecipient, Array<Action>] }
| { "_Action": "PermanentDealsDamageForEach", "args": [Permanent, GameNumber, DamageRecipient, GameNumber] }
| { "_Action": "PermanentDealsDistributedDamage", "args": Permanent }
| { "_Action": "PermanentDealsMultipleDamage", "args": [Permanent, Array<DamageToRecipients>] }
| { "_Action": "PermanentDoesntUntapDuringControllersNextNumberUntaps", "args": [Permanent, GameNumber] }
| { "_Action": "PermanentDoesntUntapDuringControllersNextUntap", "args": Permanent }
| { "_Action": "PermanentOrDeadPermanentDealsDamage", "args": [GameNumber, DamageRecipient] }
| { "_Action": "PerpetuallyExchangePowerOfPermanentAndPermanent", "args": [Permanent, Permanent] }
| { "_Action": "PerpetuallyIncreaseIntensityOfCardsOwnedByPlayer", "args": [Cards, Player, GameNumber] }
| { "_Action": "PerpetuallyIncreaseIntensityOfPermanent", "args": [Permanent, GameNumber] }
| { "_Action": "PhaseInEachPermanent", "args": Permanents }
| { "_Action": "PhaseInEachPermanentAndPhaseOutEachPermanent", "args": [Permanents, Permanents] }
| { "_Action": "PhaseInPermanent", "args": Permanent }
| { "_Action": "PhaseOutAnyNumberOfPermanents", "args": Permanents }
| { "_Action": "PhaseOutEachPermanent", "args": Permanents }
| { "_Action": "PhaseOutEachPermanentUntil", "args": [Permanents, Expiration] }
| { "_Action": "PhaseOutPermanent", "args": Permanent }
| { "_Action": "PhaseOutPermanentUntil", "args": [Permanent, Expiration] }
| { "_Action": "PhaseOutPermanentUntilWithEffects", "args": [Permanent, Expiration, PhasedOutEffect] }
| { "_Action": "PlaneDealsDamage", "args": [Plane, GameNumber, DamageRecipient] }
| { "_Action": "Planeswalk" }
| { "_Action": "PlayACardFromExileWithoutPaying", "args": CardsInExile }
| { "_Action": "PlayACardFromOutsideGame" }
| { "_Action": "PlayALandFromTopOfLibraryOrCastASpellFromTopOfLibraryWithTrigger", "args": [Permanents, Spells, Actions] }
| { "_Action": "PlayALandOrCastASpellFromAmongExiledCardsWithoutPaying", "args": [Permanents, Spells, CardsInExile] }
| { "_Action": "PlayAMagicSubgame" }
| { "_Action": "PlayAnExiledCardAndMaySpendManaAsThoughAnyColorToCast", "args": CardsInExile }
| { "_Action": "PlayAnyNumberOfExiledCards", "args": CardsInExile }
| { "_Action": "PlayAnyNumberOfLandsOrCastAnyNumberOfSpellsFromExileWithoutPaying", "args": [Spells, CardsInExile] }
| { "_Action": "PlayExiledCard", "args": CardInExile }
| { "_Action": "PlayExiledCardWithoutPaying", "args": CardInExile }
| { "_Action": "PlayGraveyardCardWithoutPaying", "args": CardInGraveyards }
| { "_Action": "PlayTopCardOfLibraryWithoutPaying" }
| { "_Action": "PlayerAction", "args": [Player, Action] }
| { "_Action": "PlayerActions", "args": [Player, Array<Action>] }
| { "_Action": "PlayerChooseAnAction", "args": [Player, Array<Action>] }
| { "_Action": "PlayerChoosesCostActionForEachPermanent", "args": [Player, Permanents, Array<ActionOption>] }
| { "_Action": "PlayerMayAction", "args": [Player, Action] }
| { "_Action": "PlayerMayActions", "args": [Player, Array<Action>] }
| { "_Action": "PlayerMayCost", "args": [Player, Cost] }
| { "_Action": "PlayerMustCost", "args": [Player, Cost] }
| { "_Action": "PlayerRepeatedMayCost", "args": [Player, GameNumber, Cost] }
| { "_Action": "PlayersExchangeLifeTotals", "args": [Player, Player] }
| { "_Action": "PlayersRevealTopCardOfLibraryAndFindHighestManaValue", "args": Players }
| { "_Action": "Populate" }
| { "_Action": "PopulateNumberTimes", "args": GameNumber }
| { "_Action": "PopulateWithFlags", "args": Array<EnterFlag> }
| { "_Action": "PreparePermanent", "args": Permanent }
| { "_Action": "Proliferate" }
| { "_Action": "ProliferateNumberTimes", "args": GameNumber }
| { "_Action": "PutACardAndOrACardFromHandOnBattlefield", "args": [CardsInHand, CardsInHand, Array<EnterFlag>] }
| { "_Action": "PutACardDiscardedThisWayOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Action": "PutACardFromAGraveyardOnBattlefield", "args": [CardsInGraveyards, Players, Array<EnterFlag>] }
| { "_Action": "PutACardFromGraveyardIntoHand", "args": CardsInGraveyards }
| { "_Action": "PutACardFromGraveyardIntoHandAtRandom", "args": CardsInGraveyards }
| { "_Action": "PutACardFromGraveyardIntoHandExceptForGraveyardCard", "args": [CardsInGraveyards, CardInGraveyards] }
| { "_Action": "PutACardFromHandIntoGraveyard", "args": Cards }
| { "_Action": "PutACardFromHandOnBattlefield", "args": [CardsInHand, Array<EnterFlag>] }
| { "_Action": "PutACardFromHandOnBottomOfLibrary" }
| { "_Action": "PutACardFromHandOnTopOfLibrary" }
| { "_Action": "PutACardFromHandOrGraveyardOnBattlefield", "args": [Cards, Player, Array<EnterFlag>] }
| { "_Action": "PutACardFromOutsideGameInHand", "args": Cards }
| { "_Action": "PutACardFromOutsideGameOnTopOfLibrary", "args": Cards }
| { "_Action": "PutACardFromPlayersGraveyardOnBattlefield", "args": [CardsInGraveyards, Player, Array<EnterFlag>] }
| { "_Action": "PutACardFromPlayersGraveyardOnTopOfLibrary", "args": [Cards, Player] }
| { "_Action": "PutACardOfTypeAndOrACardOfTypeMilledThisWayOntoTheBattlefield", "args": [Array<Cards>, Array<EnterFlag>] }
| { "_Action": "PutACardOfTypeMilledThisWayIntoHand", "args": Cards }
| { "_Action": "PutACardOfTypeMilledThisWayOnTopOfLibrary", "args": Cards }
| { "_Action": "PutACardOfTypeMilledThisWayOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Action": "PutACommanderFromCommandZoneIntoHand", "args": Commanders }
| { "_Action": "PutACommanderFromCommandZoneOntoBattlefield", "args": [Commanders, Array<EnterFlag>] }
| { "_Action": "PutAGraveyardCardIntoHand", "args": CardsInGraveyards }
| { "_Action": "PutAGraveyardCardOntoBattlefield", "args": [CardsInGraveyards, Array<EnterFlag>] }
| { "_Action": "PutANameStickerOnAPermanent", "args": Permanents }
| { "_Action": "PutANameStickerOnPermanent", "args": Permanent }
| { "_Action": "PutAPermanentIntoItsOwnersHand", "args": Permanents }
| { "_Action": "PutAPowerAndToughnessStickerOnAPermanent", "args": Permanents }
| { "_Action": "PutARandomCardFromLibraryIntoGraveyard", "args": Cards }
| { "_Action": "PutARandomCardFromLibraryOntoBattlefield", "args": [CardsInLibrary, Array<EnterFlag>] }
| { "_Action": "PutARandomCardFromPlayersLibraryOntoBattlefield", "args": [Cards, Player, Array<EnterFlag>] }
| { "_Action": "PutARandomCardOfTypeFromAmongTheTopNumberCardsOfLibraryIntoHand", "args": [Cards, GameNumber] }
| { "_Action": "PutAStickerOnACardInPlayersGraveyard", "args": [CardsInGraveyards, Player] }
| { "_Action": "PutAStickerOnAPermanent", "args": Permanents }
| { "_Action": "PutAllCardsFromHandOnBottomOfLibraryAnyOrder" }
| { "_Action": "PutAllCardsFromHandOnTopOfLibraryRandomOrder" }
| { "_Action": "PutAnAbilityStickerWithTicketCostOnPermanentWithoutPaying", "args": [Comparison, Permanent] }
| { "_Action": "PutAnArtStickerOnAPermanent", "args": Permanents }
| { "_Action": "PutAnExiledCardIntoOwnersGraveyard", "args": CardsInExile }
| { "_Action": "PutAnExiledCardIntoOwnersHand", "args": CardsInExile }
| { "_Action": "PutAnExiledCardOntoBattlefield", "args": [CardsInExile, Array<EnterFlag>] }
| { "_Action": "PutAnyNumberOfCardsFromAmongExileOntoBattlefield", "args": [Cards, CardsInExile, Array<EnterFlag>] }
| { "_Action": "PutAnyNumberOfCardsFromExileOntoBattlefield", "args": [CardsInExile, Array<EnterFlag>] }
| { "_Action": "PutAnyNumberOfCardsFromHandOnBottomOfLibraryInAnyOrder" }
| { "_Action": "PutAnyNumberOfCardsFromHandOntoBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Action": "PutAnyNumberOfCardsFromHandOntoBattlefieldAsFaceDownArtifactCreatures", "args": PT }
| { "_Action": "PutAnyNumberOfCardsFromHandOrFromPlayersGraveyardOnBattlefield", "args": [Cards, Player, Array<EnterFlag>] }
| { "_Action": "PutAnyNumberOfCardsOfTypeMilledThisWayIntoHand", "args": Cards }
| { "_Action": "PutAnyNumberOfCardsOfTypeMilledThisWayOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Action": "PutCardFromAnywhereIntoPlayersGraveyard", "args": SingleCard }
| { "_Action": "PutCardFromHandIntoGraveyard", "args": CardInHand }
| { "_Action": "PutCardFromHandIntoPlayersHand", "args": [CardInHand, Player] }
| { "_Action": "PutCardFromHandOnBattlefield", "args": [CardInHand, Array<EnterFlag>] }
| { "_Action": "PutCardFromHandOnBottomOfLibrary", "args": CardInHand }
| { "_Action": "PutCardFromHandOnTopOfLibrary", "args": CardInHand }
| { "_Action": "PutCardInHandIntoLibraryNthFromTop", "args": CardInHand }
| { "_Action": "PutCardsFromHandOnBattlefield", "args": [CardsInHand, Array<EnterFlag>] }
| { "_Action": "PutCardsInHandIntoGraveyard", "args": CardsInHand }
| { "_Action": "PutCommanderFromCommandZoneOntoBattlefield", "args": [Commander, Array<EnterFlag>] }
| { "_Action": "PutCounters", "args": Array<PutCountersAction> }
| { "_Action": "PutCountersWithRestriction", "args": [Array<PutCountersAction>, PutRestriction] }
| { "_Action": "PutDeadPermanentOnBottomOfLibrary" }
| { "_Action": "PutDeadPermanentOnTopOfLibrary" }
| { "_Action": "PutDeadPermanentOnTopOfLibraryOrOnBottomOfLibrary" }
| { "_Action": "PutEachCardFromAnteInGraveyard", "args": AnteCards }
| { "_Action": "PutEachCardFromEachPlayersGraveyardOntoTheBattlefield", "args": [Cards, Players, Array<EnterFlag>] }
| { "_Action": "PutEachCardInGraveyardOntoBottomOfLibraryInRandomOrder", "args": Cards }
| { "_Action": "PutEachCardOfTypeMilledThisWayIntoHand", "args": Cards }
| { "_Action": "PutEachCardOfTypeMilledThisWayOntoTheBattlefield", "args": [CardsInLibrary, Array<EnterFlag>] }
| { "_Action": "PutEachCardOfTypeMilledThisWayOntoTheBattlefieldAsFaceDownArtifactCreatures", "args": [Cards, PT, CreatureType] }
| { "_Action": "PutEachCommanderFromCommandZoneIntoHand", "args": Commanders }
| { "_Action": "PutEachCommanderFromCommandZoneOntoBattlefield", "args": [Commanders, Array<EnterFlag>] }
| { "_Action": "PutEachCommanderFromGraveyardIntoHand" }
| { "_Action": "PutEachExiledCardOnTheBottomOfTheirOwnersLibraryInARandomOrder", "args": CardsInExile }
| { "_Action": "PutEachExiledCardOnTheBottomOfTheirOwnersLibraryInAnyOrder", "args": CardsInExile }
| { "_Action": "PutEachExiledCardOntoTheBattlefield", "args": [CardsInExile, Array<EnterFlag>] }
| { "_Action": "PutEachExiledCardOntoTheBattlefieldFaceDownAsAnArtifactCreature", "args": [CardsInExile, PT, CreatureType] }
| { "_Action": "PutEachGraveyardCardIntoHand", "args": CardsInGraveyards }
| { "_Action": "PutEachGraveyardCardOntoBattlefield", "args": [CardsInGraveyards, Array<EnterFlag>] }
| { "_Action": "PutEachGraveyardCardOntoBattlefieldFaceDownAsAnArtifactCreature", "args": [CardsInGraveyards, Array<EnterFlag>, PT, CreatureType] }
| { "_Action": "PutEachPermanentInOwnersLibraryNthFromTheTop", "args": [Permanents, GameNumber] }
| { "_Action": "PutEachPermanentIntoItsOwnersHand", "args": Permanents }
| { "_Action": "PutEachPermanentOnBottomOfOwnersLibraryInOrderOfOwnersChoice", "args": Permanents }
| { "_Action": "PutEachPermanentOnTheTopOfOwnersLibraryInOrderOfOwnersChoice", "args": Permanents }
| { "_Action": "PutEachPermanentOnTopOfOwnersLibrariesThenShuffleThoseLibraries", "args": Permanents }
| { "_Action": "PutEachPermanentToTopOrBottomOfLibrary", "args": Permanents }
| { "_Action": "PutExiledCardInOwnersLibraryNthFromTheTop", "args": [CardInExile, GameNumber] }
| { "_Action": "PutExiledCardIntoOwnersGraveyard", "args": CardInExile }
| { "_Action": "PutExiledCardIntoOwnersHand", "args": CardInExile }
| { "_Action": "PutExiledCardOnStackAsCopyOfSpell", "args": [CardInExile, Spell, SpellCopyEffects] }
| { "_Action": "PutExiledCardOnTheBottomOfItsOwnersLibrary", "args": CardInExile }
| { "_Action": "PutExiledCardOntoBattlefield", "args": [CardInExile, Array<EnterFlag>] }
| { "_Action": "PutExiledCardsIntoOwnersGraveyards", "args": CardsInExile }
| { "_Action": "PutExiledCardsIntoOwnersHand", "args": CardsInExile }
| { "_Action": "PutExiledCardsOnTopOfLibraryInAnyOrder", "args": CardsInExile }
| { "_Action": "PutExiledPileIntoOwnersHand", "args": CardsInExile }
| { "_Action": "PutGraveyardCardInOwnersLibraryNthFromTheTop", "args": [CardInGraveyards, GameNumber] }
| { "_Action": "PutGraveyardCardIntoHand", "args": CardInGraveyards }
| { "_Action": "PutGraveyardCardIntoHandOrOntoBattlefield", "args": [CardInGraveyards, Array<EnterFlag>] }
| { "_Action": "PutGraveyardCardOnBottomOfLibrary", "args": CardInGraveyards }
| { "_Action": "PutGraveyardCardOnTopOfLibrary", "args": CardInGraveyards }
| { "_Action": "PutGraveyardCardOntoBattlefield", "args": [CardInGraveyards, Array<EnterFlag>] }
| { "_Action": "PutNumCardsFromHandOnBottomOfLibraryAnyOrder", "args": GameNumber }
| { "_Action": "PutNumCardsFromHandOnTopOfLibraryAnyOrder", "args": GameNumber }
| { "_Action": "PutNumberCardsFromAmongPlayersGraveyardsOntoTheBattlefield", "args": [GameNumber, CardsInGraveyards, Players, Array<EnterFlag>] }
| { "_Action": "PutNumberCardsFromExileOntoBattlefield", "args": [GameNumber, CardsInExile, Array<EnterFlag>] }
| { "_Action": "PutNumberGraveyardCardsOnTopOfLibraryInAnyOrder", "args": [GameNumber, CardsInGraveyards] }
| { "_Action": "PutNumberPermanentsIntoOwnersHand", "args": [GameNumber, Permanents] }
| { "_Action": "PutOrRemoveCounters", "args": Array<PutOrRemoveCountersAction> }
| { "_Action": "PutPermanentInOwnersLibraryBeneathNumberCards", "args": [Permanent, GameNumber] }
| { "_Action": "PutPermanentInOwnersLibraryNthFromTheTop", "args": [Permanent, GameNumber] }
| { "_Action": "PutPermanentIntoItsOwnersHand", "args": Permanent }
| { "_Action": "PutPermanentIntoOwnersGraveyard", "args": Permanent }
| { "_Action": "PutPermanentOnBottomOfOwnersLibrary", "args": Permanent }
| { "_Action": "PutPermanentOnTopOfOwnersLibrary", "args": Permanent }
| { "_Action": "PutSpellInOwnersLibraryNthFromTheTop", "args": [Spell, GameNumber] }
| { "_Action": "PutSpellOnBottomOfOwnersLibrary", "args": Spell }
| { "_Action": "PutTheBottomCardOfPlayersLibraryIntoGraveyard", "args": Player }
| { "_Action": "PutTheTopCardOfPlayersLibraryInGraveyard", "args": Player }
| { "_Action": "PutTheTopCardOfPlayersLibraryOnTheBottomOfTheirLibrary", "args": Player }
| { "_Action": "PutTheTopNumberCardsOfLibraryInHand", "args": GameNumber }
| { "_Action": "PutTheTopNumberCardsOfPlayersLibraryOntoBattlefieldAsFaceDownArtifactCreatures", "args": [GameNumber, PT, CreatureType] }
| { "_Action": "PutTopCardOfLibraryOfTypeOnBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Action": "PutTopOfLibraryInGraveyard" }
| { "_Action": "PutTopOfLibraryInHand" }
| { "_Action": "PutTopOfLibraryOnBattlefield", "args": Array<EnterFlag> }
| { "_Action": "PutTopOfLibraryOnBottomOfLibrary" }
| { "_Action": "PutTopOfOtherLibraryInGraveyard", "args": Player }
| { "_Action": "PutTopOfPlanarDeckOnBottomOfPlanarDeck" }
| { "_Action": "PutUptoNumberCardsFromGraveyardToHand", "args": [GameNumber, Cards] }
| { "_Action": "PutUptoNumberCardsFromHandAndOrGraveyardOnBattlefield", "args": [GameNumber, Cards, Player, Array<EnterFlag>] }
| { "_Action": "PutUptoNumberCardsFromHandOntoBattlefield", "args": [GameNumber, Cards, Array<EnterFlag>] }
| { "_Action": "PutUptoNumberCardsOfTypeMilledThisWayIntoHand", "args": [GameNumber, Cards] }
| { "_Action": "PutUptoNumberGraveyardCardsOntoTheBattlefield", "args": [GameNumber, CardsInGraveyards, Array<EnterFlag>] }
| { "_Action": "PutUptoNumberNameStickersOnPermanent", "args": [GameNumber, Permanent] }
| { "_Action": "PutUptoOneCardOfEachCardtypeAmongPermanentsFromHandOnTheBattlefield", "args": [Permanents, Array<EnterFlag>] }
| { "_Action": "RedistributeLifeTotalsOfPlayers", "args": Players }
| { "_Action": "ReducePlayersSpeed", "args": [Player, GameNumber] }
| { "_Action": "ReflexiveAction", "args": Cost }
| { "_Action": "ReflexiveActionTrigger", "args": [Cost, Actions] }
| { "_Action": "ReflexiveActionTriggerI", "args": [Cost, Condition, Actions] }
| { "_Action": "ReflexiveTrigger", "args": Actions }
| { "_Action": "ReflexiveTriggerI", "args": [Condition, Actions] }
| { "_Action": "ReflexiveTriggerNumberTimes", "args": [GameNumber, Actions] }
| { "_Action": "RegenerateEachPermanent", "args": Permanents }
| { "_Action": "RegeneratePermanent", "args": Permanent }
| { "_Action": "RememberLifeTotal" }
| { "_Action": "RememberPlayer", "args": Player }
| { "_Action": "RemoveCounters", "args": Array<RemoveCountersAction> }
| { "_Action": "RemoveCreatureFromCombat", "args": Permanent }
| { "_Action": "RemoveCreatureFromCombatAndUnblockBlockers", "args": Permanent }
| { "_Action": "RemoveEachCreatureFromCombat", "args": Permanents }
| { "_Action": "ReorderPlayersGraveyard", "args": Player }
| { "_Action": "RepeatThisProcess" }
| { "_Action": "RepeatableActions", "args": Array<Action> }
| { "_Action": "RepeatableActionsNumTimes", "args": [GameNumber, Array<Action>] }
| { "_Action": "RepeatedMayCost", "args": [GameNumber, Cost] }
| { "_Action": "RerollAnyNumberOfTheStoredD6Results" }
| { "_Action": "ReselectTargetOfSpellOrAbilityAtRandom", "args": SpellOrAbility }
| { "_Action": "ReselectWhichPlayerCreatureIsAttacking", "args": Permanent }
| { "_Action": "ReselectWhichPlayerOrPermanentCreatureIsAttacking", "args": Permanent }
| { "_Action": "RestartTheGameLeavingEachExiledCardInExileThenPutThoseCardsOntoTheBattlefield", "args": [CardsInExile, Array<EnterFlag>] }
| { "_Action": "ReturnACardFromAnyPlayersGraveyardToBattlefield", "args": [CardsInGraveyards, Players, Array<EnterFlag>] }
| { "_Action": "ReturnACardFromGraveyardToBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Action": "ReturnACardFromGraveyardToBattlefieldAtRandom", "args": [Cards, Array<EnterFlag>] }
| { "_Action": "ReturnACardFromGraveyardToHandAtRandom", "args": Cards }
| { "_Action": "ReturnACardFromGraveyardToTopOfLibrary", "args": Cards }
| { "_Action": "ReturnACardFromPlayersGraveyardToBattlefield", "args": [Cards, Player, Array<EnterFlag>] }
| { "_Action": "ReturnACardMilledThisWayToBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Action": "ReturnAGraveyardCardToHand", "args": Cards }
| { "_Action": "ReturnAPermanentToTopOfLibrary", "args": Permanents }
| { "_Action": "ReturnAnExiledCardToBattlefield", "args": [CardsInExile, Array<EnterFlag>] }
| { "_Action": "ReturnAnExiledCardToOwnersHand", "args": CardsInExile }
| { "_Action": "ReturnAnyNumberCardsMilledThisWayToHand", "args": Cards }
| { "_Action": "ReturnAnyNumberOfCardsFromGraveyardToBattlefield", "args": [CardsInGraveyards, Player, Array<EnterFlag>] }
| { "_Action": "ReturnAnyNumberOfGroupCardsFromGraveyardToHand", "args": [Cards, GroupFilter] }
| { "_Action": "ReturnAnyNumberOfGroupCardsFromPlayersGraveyardToBattlefield", "args": [CardsInGraveyards, GroupFilter, Player, Array<EnterFlag>] }
| { "_Action": "ReturnAnyNumberOfGroupCardsMilledThisWayToBattlefield", "args": [Cards, GroupFilter, Array<EnterFlag>] }
| { "_Action": "ReturnAnyNumberOfPermanentsToTheirOwnersHands", "args": Permanents }
| { "_Action": "ReturnDeadGraveyardCardToBattlefield", "args": Array<EnterFlag> }
| { "_Action": "ReturnDeadGraveyardCardToBottomOfLibrary" }
| { "_Action": "ReturnDeadGraveyardCardToHand" }
| { "_Action": "ReturnDeadGraveyardCardToTopOfLibrary" }
| { "_Action": "ReturnDeadGuestGraveyardCardToBattlefield", "args": Array<EnterFlag> }
| { "_Action": "ReturnDeadGuestGraveyardCardToHand" }
| { "_Action": "ReturnEachCardFromEachPlayersGraveyardToBattlefieldThatWasPutThereFromAnywhereThisTurn", "args": [Cards, Players, Array<EnterFlag>] }
| { "_Action": "ReturnEachCardFromEachPlayersGraveyardToBattlefieldThatWasPutThereFromTheBattlefieldThisTurn", "args": [Cards, Players, Array<EnterFlag>] }
| { "_Action": "ReturnEachCardFromEachPlayersGraveyardToOwnersHand", "args": [Cards, Players] }
| { "_Action": "ReturnEachCardFromGraveyardToHand", "args": Cards }
| { "_Action": "ReturnEachCardFromGraveyardToHandThatWasCycledOrDiscardedThisTurn", "args": Cards }
| { "_Action": "ReturnEachCardFromGraveyardToHandThatWasPutThereFromAnywhereThisTurn", "args": Cards }
| { "_Action": "ReturnEachCardFromGraveyardToHandThatWasPutThereFromBattlefieldThisTurn", "args": Cards }
| { "_Action": "ReturnEachCardFromPlayersGraveyardToBattlefield", "args": [CardsInGraveyards, Player, Array<EnterFlag>] }
| { "_Action": "ReturnEachCardFromPlayersGraveyardToBattlefieldThatWasDestroyThisWay", "args": [Cards, Player, Array<EnterFlag>] }
| { "_Action": "ReturnEachCardFromPlayersGraveyardToBattlefieldThatWasPutThereFromBattlefieldThisTurn", "args": [Cards, Player, Array<EnterFlag>] }
| { "_Action": "ReturnEachCardFromPlayersGraveyardToHand", "args": [Cards, Player] }
| { "_Action": "ReturnEachCardFromPlayersGraveyardToHandThatWasPutThereFromBattlefieldThisTurn", "args": [Cards, Player] }
| { "_Action": "ReturnEachExiledCardToBottomOfOwnersLibraryRandomOrder", "args": CardsInExile }
| { "_Action": "ReturnEachExiledCardToGraveyard", "args": CardsInExile }
| { "_Action": "ReturnEachExiledCardToOwnersHand", "args": CardsInExile }
| { "_Action": "ReturnEachGraveyardCardToBattlefield", "args": [CardsInGraveyards, Array<EnterFlag>] }
| { "_Action": "ReturnEachGraveyardCardToBottomOfLibraryInAnyOrder", "args": CardsInGraveyards }
| { "_Action": "ReturnEachPermanentToCommandZone", "args": Permanents }
| { "_Action": "ReturnEnchantingGraveyardCardToBattlefield", "args": Array<EnterFlag> }
| { "_Action": "ReturnEnchantingGraveyardCardToHand" }
| { "_Action": "ReturnGraveyardCardToHand", "args": CardInGraveyards }
| { "_Action": "ReturnGraveyardCardToTopOrBottomOfLibrary", "args": CardInGraveyards }
| { "_Action": "ReturnGraveyardCardsToHand", "args": CardsInGraveyards }
| { "_Action": "ReturnGraveyardCardsToTopOfLibraryInAnyOrder", "args": CardsInGraveyards }
| { "_Action": "ReturnMultipleCardsFromPlayersGraveyardToBattlefield", "args": [Array<Cards>, Player, Array<EnterFlag>] }
| { "_Action": "ReturnNewGraveyardCardToBattlefield", "args": Array<EnterFlag> }
| { "_Action": "ReturnNumberCardsFromGraveyardToBattlefield", "args": [GameNumber, Cards, Array<EnterFlag>] }
| { "_Action": "ReturnNumberCardsFromGraveyardToBattlefieldAtRandom", "args": [GameNumber, Cards, Array<EnterFlag>] }
| { "_Action": "ReturnNumberCardsFromPlayersGraveyardToHand", "args": [GameNumber, Cards, Player] }
| { "_Action": "ReturnNumberCardsFromPlayersGraveyardToHandAtRandom", "args": [GameNumber, Cards, Player] }
| { "_Action": "ReturnNumberGraveyardCardsToBattlefieldAtRandom", "args": [GameNumber, CardsInGraveyards, Array<EnterFlag>] }
| { "_Action": "ReturnPermanentOrExiledCardToOwnersHand", "args": PermanentOrExiledCard }
| { "_Action": "ReturnPermanentToBottomOfLibrary", "args": Permanent }
| { "_Action": "ReturnPermanentToCommandZone", "args": Permanent }
| { "_Action": "ReturnPermanentToLibraryUnderNumberCards", "args": [Permanent, GameNumber] }
| { "_Action": "ReturnPermanentToTopOrBottomOfLibrary", "args": Permanent }
| { "_Action": "ReturnSpellOrPermanentToOwnersHand", "args": SpellOrPermanent }
| { "_Action": "ReturnSpellToBottomOfLibrary", "args": Spell }
| { "_Action": "ReturnSpellToOwnersHand", "args": Spell }
| { "_Action": "ReturnSpellToTopOrBottomOfLibrary", "args": Spell }
| { "_Action": "ReturnTheExiledDeadPermanentToGraveyard" }
| { "_Action": "ReturnThisExiledCardToBattlefield", "args": Array<EnterFlag> }
| { "_Action": "ReturnUptoNumberCardsFromAmongPlayersGraveyardsToBattlefield", "args": [GameNumber, CardsInGraveyards, Players, Array<EnterFlag>] }
| { "_Action": "ReturnUptoNumberCardsFromExileToOwnersHand", "args": [GameNumber, CardsInExile] }
| { "_Action": "ReturnUptoNumberCardsFromPlayersGraveyardToBattlefield", "args": [GameNumber, Cards, Player, Array<EnterFlag>] }
| { "_Action": "ReturnUptoNumberPermanentsToOwnersHand", "args": [GameNumber, Permanents] }
| { "_Action": "ReturnUptoOneCardOfEachPermanentTypeInPlayersGraveyardToBattlefield", "args": [Player, Array<EnterFlag>] }
| { "_Action": "RevealACardFromHand" }
| { "_Action": "RevealACardFromHandAtRandom" }
| { "_Action": "RevealACardFromHandAtRandomAndDiscardIfItIsACardOfType", "args": Cards }
| { "_Action": "RevealACardOfTypeFromHand", "args": Cards }
| { "_Action": "RevealACardOfTypeFromHandAtRandom", "args": Cards }
| { "_Action": "RevealANumberOfCardsFromHandAndPlayerChoosesACardToDiscard", "args": [GameNumber, Player] }
| { "_Action": "RevealANumberOfCardsFromHandAndPlayerChoosesACardToExile", "args": [GameNumber, Player, Cards] }
| { "_Action": "RevealANumberOfCardsFromHandAndPlayerMayCastASpellFromAmongThemWithoutPaying", "args": [GameNumber, Player, Spells] }
| { "_Action": "RevealAllCardsOfTypeFromHand", "args": Cards }
| { "_Action": "RevealAllCardsOfTypeFromHandAndPlayerChoosesACardToExile", "args": [Cards, Player] }
| { "_Action": "RevealAllCardsOfTypeFromHandAndPlayerChoosesCard", "args": [Cards, Player] }
| { "_Action": "RevealAnyNumberOfCardsOfTypeFromHand", "args": Cards }
| { "_Action": "RevealCardFromHand", "args": CardInHand }
| { "_Action": "RevealCardFromOutsideGameAndPutInHand", "args": Cards }
| { "_Action": "RevealCardFromOutsideGameAndPutInHandOrPutAnExiledCardInOwnersHand", "args": [Cards, CardsInExile] }
| { "_Action": "RevealCardsFromTheTopOfLibraryUntilACardOfTypeIsRevealed", "args": [Cards, Array<RevealTheTopNumberCardsOfLibraryAction>] }
| { "_Action": "RevealCardsFromTheTopOfLibraryUntilACardOfTypeIsRevealedOrUntilNumberCardsAreRevealed", "args": [Cards, GameNumber, Array<RevealTheTopNumberCardsOfLibraryAction>] }
| { "_Action": "RevealCardsFromTheTopOfLibraryUntilANumberOfCardsOfTypeAreRevealed", "args": [GameNumber, Cards, Array<RevealTheTopNumberCardsOfLibraryAction>] }
| { "_Action": "RevealCardsFromTheTopOfPlanarDeckUntilRevealAPlaneCardThenChaosEnsuresOnThatPlaneThenPutAllCardsOnBottomInAnyOrder" }
| { "_Action": "RevealCardsFromTheTopOfPlanarDeckUntilRevealAPlaneCardThenPlaneswalkToItWhileNotPlaneswalkingAwayAndPutTheRestOnBottomInAnyOrder" }
| { "_Action": "RevealCardsFromTheTopOfPlanarDeckUntilRevealNumberPlaneCardsAndPutAPlaneCardFromAmongOnTopAndTheRestOnBottomInAnyOrder", "args": GameNumber }
| { "_Action": "RevealCardsFromTheTopOfPlanarDeckUntilRevealNumberPlaneCardsSimultaneouslyPlaneswalkToThemThenPutOnBottomInAnyOrder", "args": GameNumber }
| { "_Action": "RevealFaceDownPermanent", "args": Permanent }
| { "_Action": "RevealHand" }
| { "_Action": "RevealHandAndAlternateExilingCardsWithPlayer", "args": Player }
| { "_Action": "RevealHandAndDiscardACardOfTypeAtRandom", "args": Cards }
| { "_Action": "RevealHandAndDiscardEachCard", "args": Cards }
| { "_Action": "RevealHandAndExileEachCardOfType", "args": Cards }
| { "_Action": "RevealHandAndPlayerChoosesACard", "args": [Player, Cards] }
| { "_Action": "RevealHandAndPlayerChoosesACardToDiscard", "args": [Player, Cards] }
| { "_Action": "RevealHandAndPlayerChoosesACardToExile", "args": [Player, Cards] }
| { "_Action": "RevealHandAndPlayerChoosesACardToExileUntil", "args": [Player, Cards, Expiration] }
| { "_Action": "RevealHandAndPlayerChoosesACardToPutOnBattlefield", "args": [Player, Cards, Array<EnterFlag>] }
| { "_Action": "RevealHandAndPlayerChoosesMultipleCardsToDiscard", "args": [Player, Array<Cards>] }
| { "_Action": "RevealHandAndPlayerChoosesNumberCardsToDiscard", "args": [Player, GameNumber] }
| { "_Action": "RevealHandAndPlayerChoosesNumberCardsToExile", "args": [Player, GameNumber, Cards] }
| { "_Action": "RevealHandAndPlayerMayCastASpellFromAmongThemWithoutPaying", "args": [Player, Spells] }
| { "_Action": "RevealHandAndPlayerMayChooseACardToDiscard", "args": [Player, Cards] }
| { "_Action": "RevealHandAndPlayerMayChooseACardToExile", "args": [Player, Cards] }
| { "_Action": "RevealLibrary", "args": Array<RevealTheTopNumberCardsOfLibraryAction> }
| { "_Action": "RevealNumberCardsFromHand", "args": GameNumber }
| { "_Action": "RevealNumberCardsFromHandAndPlayerChoosesACardToExile", "args": [GameNumber, Player, Cards] }
| { "_Action": "RevealNumberCardsFromHandAtRandom", "args": GameNumber }
| { "_Action": "RevealNumberCardsFromHandAtRandomAndDiscardEachCardOfType", "args": [GameNumber, Cards] }
| { "_Action": "RevealSecretlyChosenNumbers" }
| { "_Action": "RevealSecretlyChosenPermanents" }
| { "_Action": "RevealTheCardDrawnThisWay" }
| { "_Action": "RevealTheCardPutInHandThisWay" }
| { "_Action": "RevealTheCardsDrawnThisWay" }
| { "_Action": "RevealTheSecretlyChosenNumber" }
| { "_Action": "RevealTheTopCardOfPlayersLibrary", "args": Player }
| { "_Action": "RevealTheTopNumberCardsOfLibraryNEW", "args": GameNumber }
| { "_Action": "RevealTheTopNumberCardsOfLibrary", "args": [GameNumber, Array<RevealTheTopNumberCardsOfLibraryAction>] }
| { "_Action": "RevealTheTopNumberCardsOfPlanarDeckAndTriggerEachCHAOSAbilityThenPutOnBottomOfPlanarDeckInAnyOrder", "args": GameNumber }
| { "_Action": "RevealTopCardOfLibrary" }
| { "_Action": "RevealTopCardOfLibraryAndPutIntoHand", "args": Cards }
| { "_Action": "RevealTopCardOfPlanarDeck" }
| { "_Action": "RevealUptoNumberCardsOfTypeFromHand", "args": [GameNumber, CardsInHand] }
| { "_Action": "RevealVotesForPermanent" }
| { "_Action": "RevealVotesForPlayer" }
| { "_Action": "RevealVotesForWord" }
| { "_Action": "ReverseTurnOrder" }
| { "_Action": "RollAD10" }
| { "_Action": "RollAD12" }
| { "_Action": "RollAD20" }
| { "_Action": "RollAD4" }
| { "_Action": "RollAD6" }
| { "_Action": "RollAD8" }
| { "_Action": "RollNumberD20AndIgnoreAllButHighest", "args": GameNumber }
| { "_Action": "RollNumberD6", "args": GameNumber }
| { "_Action": "RollNumberD6AndStoreTheResult", "args": GameNumber }
| { "_Action": "RollThePlanarDie" }
| { "_Action": "RollToVisitAttractions" }
| { "_Action": "RollTwoD10AndChooseAnOrder" }
| { "_Action": "RollTwoD12AndChooseAnOrder" }
| { "_Action": "RollTwoD4AndChooseAnOrder" }
| { "_Action": "RollTwoD6AndChooseAnOrder" }
| { "_Action": "RollTwoD8AndChooseAnOrder" }
| { "_Action": "SacrificeAPermanent", "args": Permanents }
| { "_Action": "SacrificeAPermanentOfAPlayersChoice", "args": [Permanents, Players] }
| { "_Action": "SacrificeAllPermanentsExceptForAPermanentOfEachLandType", "args": Permanents }
| { "_Action": "SacrificeAllPermanentsExceptForASpecificPermanentOfEachTypeOfTheirChoice", "args": [Permanents, Array<Permanents>] }
| { "_Action": "SacrificeAllPermanentsExceptForNum", "args": [Permanents, GameNumber] }
| { "_Action": "SacrificeAnyNumberOfPermanents", "args": Permanents }
| { "_Action": "SacrificeEachPermanent", "args": Permanents }
| { "_Action": "SacrificeHalfOfThePermanentsRoundedUp", "args": Permanents }
| { "_Action": "SacrificeNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Action": "SacrificePermanent", "args": Permanent }
| { "_Action": "SacrificePermanents", "args": Array<Permanents> }
| { "_Action": "SacrificedPermanentDealsDamage", "args": [GameNumber, DamageRecipient] }
| { "_Action": "SacrificedPermanentDealsDistributedDamage" }
| { "_Action": "SaddlePermanent", "args": Permanent }
| { "_Action": "SchemeDealsDamage", "args": [SingleScheme, GameNumber, DamageRecipient] }
| { "_Action": "Scry", "args": GameNumber }
| { "_Action": "SearchHandAndLibrary", "args": Array<SearchLibraryAction> }
| { "_Action": "SearchHandAndOrLibrary", "args": Array<SearchLibraryAction> }
| { "_Action": "SearchLibrary", "args": Array<SearchLibraryAction> }
| { "_Action": "SearchLibraryAndGraveyard", "args": Array<SearchLibraryAction> }
| { "_Action": "SearchLibraryAndGraveyardAndHand", "args": Array<SearchLibraryAction> }
| { "_Action": "SearchLibraryAndOrGraveyard", "args": Array<SearchLibraryAction> }
| { "_Action": "SearchLibraryAndOrGraveyardAndOrHand", "args": Array<SearchLibraryAction> }
| { "_Action": "SearchLibraryAndOrGraveyardAndOrOutsideTheGame", "args": Array<SearchLibraryAction> }
| { "_Action": "SearchLibraryAndOrOutsideTheGame", "args": Array<SearchLibraryAction> }
| { "_Action": "SearchPlayersLibrary", "args": [Player, Array<SearchLibraryAction>] }
| { "_Action": "SearchPlayersLibraryAndGraveyardAndHand", "args": [Player, Array<SearchLibraryAction>] }
| { "_Action": "SearchTheTopNumberCardsOfLibrary", "args": [GameNumber, Array<SearchLibraryAction>] }
| { "_Action": "SecretlyChooseACreatureTypeFromList", "args": Array<CreatureType> }
| { "_Action": "SecretlyChooseAGraveyardCard", "args": CardsInGraveyards }
| { "_Action": "SecretlyChooseANumber" }
| { "_Action": "SecretlyChooseANumberBetween", "args": [number, number] }
| { "_Action": "SecretlyChooseANumberBetweenThatHasntBeenChosen", "args": [number, number] }
| { "_Action": "SecretlyChooseANumberGreaterThanNumber", "args": number }
| { "_Action": "SecretlyChooseAPermanent", "args": Permanents }
| { "_Action": "SecretlyChooseAPlayer", "args": Players }
| { "_Action": "SecretlyChooseLibraryFilter", "args": Array<Cards> }
| { "_Action": "SecretlyVoteForAPermanent", "args": Permanents }
| { "_Action": "SecretlyVoteForAPlayer", "args": Players }
| { "_Action": "SecretlyVoteForAWord", "args": Array<string> }
| { "_Action": "SecretlyVoteForUptoOnePermanent", "args": Permanents }
| { "_Action": "SeekACard", "args": Cards }
| { "_Action": "SeekACardFromTheTopNumberCardsOfLibrary", "args": [Cards, GameNumber] }
| { "_Action": "SeekCards", "args": Array<Cards> }
| { "_Action": "SeekNumberCards", "args": [GameNumber, Cards] }
| { "_Action": "SeekNumberCardsFromTheTopNumberCardsOfLibrary", "args": [GameNumber, Cards, GameNumber] }
| { "_Action": "SeparateCardsInPlayersGraveyardIntoTwoPiles", "args": [Cards, Player] }
| { "_Action": "SeparateExiledCardsIntoTwoPiles", "args": CardsInExile }
| { "_Action": "SeparatePermanentsIntoNamedPiles", "args": [Permanents, Array<string>] }
| { "_Action": "SeparatePermanentsIntoNumberPiles", "args": [Permanents, GameNumber] }
| { "_Action": "SeparatePermanentsIntoTwoPilesAndAPlayerChoosesAPile", "args": [Permanents, Players] }
| { "_Action": "SetAttackAssignmentOfCreature", "args": [Permanent, AttackAssignment] }
| { "_Action": "SetAttackAssignmentOfCreatures", "args": [Permanents, AttackAssignment] }
| { "_Action": "SetCreatureAsBlocked", "args": Permanent }
| { "_Action": "SetEachCreatureAsBlocked", "args": Permanents }
| { "_Action": "SetLifeTotal", "args": GameNumber }
| { "_Action": "SetSchemeInMotion", "args": SingleScheme }
| { "_Action": "SetStake", "args": GameNumber }
| { "_Action": "Shuffle" }
| { "_Action": "ShuffleAPermanentIntoLibrary", "args": Permanents }
| { "_Action": "ShuffleAllButNumberCardsInHandIntoLibrary", "args": GameNumber }
| { "_Action": "ShuffleAnyNumberOfCardsFromHandIntoLibrary" }
| { "_Action": "ShuffleCardFromHandIntoLibrary", "args": CardInHand }
| { "_Action": "ShuffleCardsFromHandIntoLibrary", "args": CardsInHand }
| { "_Action": "ShuffleEachCardInGraveyardIntoLibrary", "args": Cards }
| { "_Action": "ShuffleEachCardInPlayersGraveyardIntoLibrary", "args": [Cards, Player] }
| { "_Action": "ShuffleEachExiledCardIntoLibrary", "args": CardsInExile }
| { "_Action": "ShuffleEachGraveyardCardIntoLibrary", "args": CardsInGraveyards }
| { "_Action": "ShuffleEachPermanentIntoLibrary", "args": Permanents }
| { "_Action": "ShuffleExiledCardIntoLibrary", "args": CardInExile }
| { "_Action": "ShuffleExiledCardsAndPutOnTopOfLibrary", "args": CardsInExile }
| { "_Action": "ShuffleGraveyard" }
| { "_Action": "ShuffleGraveyardCardIntoLibrary", "args": CardInGraveyards }
| { "_Action": "ShuffleGraveyardIntoLibrary" }
| { "_Action": "ShuffleHandAndGraveyardIntoLibrary" }
| { "_Action": "ShuffleHandAndPermanentsIntoLibrary" }
| { "_Action": "ShuffleHandGraveyardAndPermanentsIntoLibrary" }
| { "_Action": "ShuffleHandIntoLibrary" }
| { "_Action": "ShuffleLibraryIfSearched" }
| { "_Action": "ShufflePermanentAndGraveyardIntoLibrary", "args": Permanent }
| { "_Action": "ShufflePermanentIntoLibrary", "args": Permanent }
| { "_Action": "ShuffleSpellAndGraveyardCardsIntoLibraries", "args": [Spell, CardsInGraveyards] }
| { "_Action": "ShuffleSpellIntoLibrary", "args": Spell }
| { "_Action": "ShuffleUptoNumberCardsFromOutsideTheGameIntoLibrary", "args": GameNumber }
| { "_Action": "ShuffleUptoNumberCardsFromPlayersGraveyardIntoLibrary", "args": [GameNumber, Cards, Player] }
| { "_Action": "SimultaneouslySacrificePermanentAndPutGraveyardCardOntoBattlefield", "args": [Permanent, CardInGraveyards, Array<EnterFlag>] }
| { "_Action": "SimultaneouslyTapEachPermanentAndUntapEachPermanent", "args": [Permanents, Permanents] }
| { "_Action": "SkipAllCombatPhasesTheirNextTurn" }
| { "_Action": "SkipNextCombatPhase" }
| { "_Action": "SkipNextCombatPhaseThisTurn" }
| { "_Action": "SkipNextDrawStep" }
| { "_Action": "SkipNextNumberTurns", "args": GameNumber }
| { "_Action": "SkipNextTurn" }
| { "_Action": "SkipNextUntapStep" }
| { "_Action": "SpellDealsDamage", "args": [Spell, GameNumber, DamageRecipient] }
| { "_Action": "SpellDealsDamageCantBePrevented", "args": [Spell, GameNumber, DamageRecipient] }
| { "_Action": "SpellDealsDamageDividedAmongRecipientsRoundedDown", "args": [Spell, GameNumber, DamageRecipient] }
| { "_Action": "SpellDealsDamageEachPlayer", "args": [Players, Spell, GameNumber, DamageRecipient] }
| { "_Action": "SpellDealsDamageEachPlayerForEach", "args": [Players, Spell, GameNumber, DamageRecipient, GameNumber] }
| { "_Action": "SpellDealsDamageExcessReplacable", "args": [Spell, GameNumber, DamageRecipient, Array<Action>] }
| { "_Action": "SpellDealsDamageForEach", "args": [Spell, GameNumber, DamageRecipient, GameNumber] }
| { "_Action": "SpellDealsDistributedDamage", "args": Spell }
| { "_Action": "SpellDealsMultipleDamage", "args": [Spell, Array<DamageToRecipients>] }
| { "_Action": "StartBiddingWarAmongPlayersAtAnyNumber", "args": Players }
| { "_Action": "StartBiddingWarAmongPlayersAtNumber", "args": [Players, GameNumber] }
| { "_Action": "StartBiddingWarWithPlayer", "args": [Player, GameNumber] }
| { "_Action": "Support", "args": Permanents }
| { "_Action": "Surveil", "args": GameNumber }
| { "_Action": "SuspectEachPermanent", "args": Permanents }
| { "_Action": "SuspectPermanent", "args": Permanent }
| { "_Action": "SwapWordChoice", "args": [string, string] }
| { "_Action": "TakeANumberOfExtraTurns", "args": GameNumber }
| { "_Action": "TakeAnExtraTurn" }
| { "_Action": "TakeAnExtraTurnAfterNextTurn" }
| { "_Action": "TakeAnExtraTurnAndSkipUntapStepOfThatTurn" }
| { "_Action": "TakeTheInitiative" }
| { "_Action": "TapAllButNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Action": "TapAnyNumberOfPermanents", "args": Permanents }
| { "_Action": "TapEachPermanent", "args": Permanents }
| { "_Action": "TapNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Action": "TapOrUntapPermanent", "args": Permanent }
| { "_Action": "TapPermanent", "args": Permanent }
| { "_Action": "TemptWithRing" }
| { "_Action": "ThereAreNumberAdditionalUpkeepSteps", "args": GameNumber }
| { "_Action": "ThereIsAnAdditionalBeginningPhase" }
| { "_Action": "ThereIsAnAdditionalCombatPhase" }
| { "_Action": "ThereIsAnAdditionalCombatPhaseAndAnAdditionalMainPhase" }
| { "_Action": "ThereIsAnAdditionalCombatPhaseWithTrigger", "args": Actions }
| { "_Action": "ThereIsAnAdditionalEndStep" }
| { "_Action": "ThereIsAnAdditionalUpkeepStep" }
| { "_Action": "TimeTravel" }
| { "_Action": "TimeTravelNumberTimes", "args": GameNumber }
| { "_Action": "TransformAPermanent", "args": Permanents }
| { "_Action": "TransformAnyNumberOfPermanents", "args": Permanents }
| { "_Action": "TransformEachPermanent", "args": Permanents }
| { "_Action": "TransformPermanent", "args": Permanent }
| { "_Action": "TripleCreaturesPowerAndToughnessUntilEndOfTurn", "args": Permanent }
| { "_Action": "TrySwappingBlockAssignmentsOfTwoAttackingCreatures", "args": [Permanent, Permanent] }
| { "_Action": "TrySwappingBlockAssignmentsOfTwoBlockingCreatures", "args": [Permanent, Permanent] }
| { "_Action": "TurnAPermanentFaceUp", "args": Permanents }
| { "_Action": "TurnAnExiledPileFaceUp" }
| { "_Action": "TurnEachExiledCardFaceUp", "args": CardsInExile }
| { "_Action": "TurnEachMorphPermanentFaceDown", "args": Permanents }
| { "_Action": "TurnEachPermanentFaceDownAsCreature", "args": [Permanents, PT, CreatureType] }
| { "_Action": "TurnExiledCardFaceUp", "args": CardInExile }
| { "_Action": "TurnPermanentFaceDown", "args": Permanent }
| { "_Action": "TurnPermanentFaceDownAsArtifactCreature", "args": [Permanent, PT, CreatureType] }
| { "_Action": "TurnPermanentFaceUp", "args": Permanent }
| { "_Action": "UnattachEachPermanentFromEachPermanent", "args": [Permanents, Permanents] }
| { "_Action": "UnattachEachPermanentFromPermanent", "args": [Permanents, Permanent] }
| { "_Action": "UnattachPermanent", "args": Permanent }
| { "_Action": "UngoadEachCreature", "args": Permanents }
| { "_Action": "Unless", "args": [Condition, Array<Action>] }
| { "_Action": "UnlockADoorOfAPermanent", "args": Permanents }
| { "_Action": "UnlockADoorOfPermanent", "args": Permanent }
| { "_Action": "UnpreparePermanent", "args": Permanent }
| { "_Action": "UnsuspectEachPermanent", "args": Permanents }
| { "_Action": "UnsuspectPermanent", "args": Permanent }
| { "_Action": "UntapAPermanent", "args": Permanents }
| { "_Action": "UntapEachPermanent", "args": Permanents }
| { "_Action": "UntapPermanent", "args": Permanent }
| { "_Action": "UntapUptoNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Action": "ValueActions", "args": [GameNumber, Array<ValueAction>] }
| { "_Action": "VanguardDealsDamage", "args": [SingleVanguard, GameNumber, DamageRecipient] }
| { "_Action": "VentureIntoTheDungeon" }
| { "_Action": "VoteForACardInGraveyard", "args": CardsInGraveyards }
| { "_Action": "VoteForAPermanent", "args": Permanents }
| { "_Action": "VoteForAWord", "args": Array<string> }
| { "_Action": "VoteForColor", "args": Array<Color> }
| { "_Action": "WinTheGame" }
| { "_Action": "WouldDealExcessDamage_DealExcessToPlayerInstead", "args": Player };
type ActionOption =
| { "_ActionOption": "ActionOption", "args": [Cost, Array<Action>] }
| { "_ActionOption": "DoNothingOption", "args": Array<Action> };
type ActionPreventDamage =
| { "_ActionPreventDamage": "If", "args": [Condition, Array<ActionPreventDamage>] }
| { "_ActionPreventDamage": "IfElse", "args": [Condition, Array<ActionPreventDamage>, Array<ActionPreventDamage>] }
| { "_ActionPreventDamage": "Unless", "args": [Condition, Array<ActionPreventDamage>] }
| { "_ActionPreventDamage": "PreventAllButSomeOfThatDamage", "args": GameNumber }
| { "_ActionPreventDamage": "PreventSomeOfThatDamage", "args": GameNumber }
| { "_ActionPreventDamage": "PreventThatDamage" }
| { "_ActionPreventDamage": "PermanentDealsDamage", "args": [Permanent, GameNumber, DamageRecipient] }
| { "_ActionPreventDamage": "SpellDealsDamage", "args": [Spell, GameNumber, DamageRecipient] }
| { "_ActionPreventDamage": "HaveSpellDealDamage", "args": [Spell, GameNumber, DamageRecipient] }
| { "_ActionPreventDamage": "VanguardDealsDamage", "args": [SingleVanguard, GameNumber, DamageRecipient] }
| { "_ActionPreventDamage": "EachPlayerAction", "args": [Players, ActionPreventDamage] }
| { "_ActionPreventDamage": "MayAction", "args": ActionPreventDamage }
| { "_ActionPreventDamage": "MayActions", "args": Array<ActionPreventDamage> }
| { "_ActionPreventDamage": "PlayerMayCost", "args": [Player, ActionPreventDamageCost] }
| { "_ActionPreventDamage": "ChooseAPlayer", "args": Players }
| { "_ActionPreventDamage": "CreateFutureTrigger", "args": [FutureTrigger, Actions] }
| { "_ActionPreventDamage": "ReflexiveTrigger", "args": Actions }
| { "_ActionPreventDamage": "ReflexiveActionTrigger_CountersRemoved", "args": [ActionPreventDamageReflesiveActionTriggerRemoveCounters, Actions] }
| { "_ActionPreventDamage": "CreateTokens", "args": [Array<CreatableToken>, Array<TokenFlag>] }
| { "_ActionPreventDamage": "DrawNumberCards", "args": GameNumber }
| { "_ActionPreventDamage": "Exile", "args": [Array<ExilableCost>, Array<ExileFlag>] }
| { "_ActionPreventDamage": "GainLife", "args": GameNumber }
| { "_ActionPreventDamage": "MillNumberCards", "args": GameNumber }
| { "_ActionPreventDamage": "PlayerAction", "args": [Player, ReplacementActionWouldDealDamage] }
| { "_ActionPreventDamage": "PutCounters", "args": Array<ActionPreventDamagePutCounters> }
| { "_ActionPreventDamage": "RemoveCounters", "args": Array<ActionPreventDamageRemoveCounters> }
| { "_ActionPreventDamage": "ShufflePermanentIntoLibrary", "args": Permanent };
type ActionPreventDamageCost =
| { "_ActionPreventDamageCost": "PayMana", "args": Array<ManaSymbol> };
type ActionPreventDamagePutCounters =
| { "_ActionPreventDamagePutCounters": "ACounterOfTypeOnPermanent", "args": [CounterType, Permanent] }
| { "_ActionPreventDamagePutCounters": "NumberCountersOfTypeOnPermanent", "args": [GameNumber, CounterType, Permanent] }
| { "_ActionPreventDamagePutCounters": "NumberCountersOfTypeOnEachPlayer", "args": [GameNumber, CounterType, Players] };
type ActionPreventDamageReflesiveActionTriggerRemoveCounters =
| { "_ActionPreventDamageReflesiveActionTriggerRemoveCounters": "RemoveCounters", "args": Array<ActionPreventDamageRemoveCounters> };
type ActionPreventDamageRemoveCounters =
| { "_ActionPreventDamageRemoveCounters": "ACounterOfTypeFromPermanent", "args": [CounterType, Permanent] }
| { "_ActionPreventDamageRemoveCounters": "NumberCountersOfTypeFromPermanent", "args": [GameNumber, CounterType, Permanent] };
type Actions =
| { "_Actions": "AdditionalCost_Modal", "args": Array<AdditionalCostOption> }
| { "_Actions": "Targeted_Modal", "args": Array<Actions> }
| { "_Actions": "Targeted_DifferentTargets", "args": [Array<Target>, Actions] }
| { "_Actions": "TargetedDistributed", "args": [Array<DistributedTarget>, Distribution, Actions] }
| { "_Actions": "Targeted", "args": [Array<Target>, Actions] }
| { "_Actions": "ActionList", "args": Array<Action> }
| { "_Actions": "WithX", "args": [Comparison, Actions] }
| { "_Actions": "X", "args": [Comparison, Actions] }
| { "_Actions": "Modal_ChooseUptoNumberPawsMayChooseSameModeMoreThanOnce", "args": [GameNumber, Array<PawMode>] }
| { "_Actions": "Modal_ChooseOneOrChooseOneOrMoreIf", "args": [Condition, Array<Actions>] }
| { "_Actions": "Modal_ChooseOneAtRandom", "args": Array<Actions> }
| { "_Actions": "Modal_APlayerChoosesOne", "args": [Players, Array<Actions>] }
| { "_Actions": "Modal_ChooseAnyNumber", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseNumberMayChooseSameModeMoreThanOnce", "args": [GameNumber, Array<Actions>] }
| { "_Actions": "Modal_ChooseOne", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseBoth", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseOneOrBoth", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseOneOrBothIf", "args": [Condition, Array<Actions>] }
| { "_Actions": "Modal_ChooseOneOrMayChooseTwoIf", "args": [Condition, Array<Actions>] }
| { "_Actions": "Modal_ChooseOneOrMore", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseOneOrMore_DifferentTargets", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseOneOrMore_Escalate", "args": [Cost, Array<Actions>] }
| { "_Actions": "Modal_ChooseOneThatHasntBeenChosen", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseOneThatHasntBeenChosenThisTurn", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseOneThatWasntChosenDuringPlayersLastCombat", "args": [Player, Array<Actions>] }
| { "_Actions": "Modal_ChooseOne_Entwine", "args": [Cost, Array<Actions>] }
| { "_Actions": "Modal_ChooseThree", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseTwo", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseTwo_DifferentTargets", "args": Array<Actions> }
| { "_Actions": "Modal_ChooseTwo_Entwine", "args": [Cost, Array<Actions>] }
| { "_Actions": "Modal_ChooseUptoNumber", "args": [GameNumber, Array<Actions>] }
| { "_Actions": "Modal_ChooseUptoOne", "args": Array<Actions> }
| { "_Actions": "Modal_IfElse", "args": [Condition, Actions, Actions] }
| { "_Actions": "Modal_MayChooseTwo_DifferentTargets", "args": Array<Actions> };
type ActivatedAbilities =
| { "_ActivatedAbilities": "And", "args": Array<ActivatedAbilities> }
| { "_ActivatedAbilities": "Or", "args": Array<ActivatedAbilities> }
| { "_ActivatedAbilities": "AnyAbility" }
| { "_ActivatedAbilities": "NonManaAbility" }
| { "_ActivatedAbilities": "ManaAbility" }
| { "_ActivatedAbilities": "TargetsAPlayer", "args": Players }
| { "_ActivatedAbilities": "TargetsOnlySinglePermanent", "args": Permanent }
| { "_ActivatedAbilities": "TargetsAPermanent", "args": Permanents }
| { "_ActivatedAbilities": "TargetsPermanent", "args": Permanent }
| { "_ActivatedAbilities": "NinjutsuAbility" }
| { "_ActivatedAbilities": "AbilityOfACardInPlayersGraveyard", "args": [Cards, Player] }
| { "_ActivatedAbilities": "AbilityOfASource", "args": AbilitySources }
| { "_ActivatedAbilities": "FirstAbilityActivatedByPlayerThisTurn", "args": [ActivatedAbilities, Player] }
| { "_ActivatedAbilities": "AbilityOfAPermanent", "args": Permanents }
| { "_ActivatedAbilities": "AbilityOfPermanent", "args": Permanent }
| { "_ActivatedAbilities": "EternalizeAbility" }
| { "_ActivatedAbilities": "EmbalmAbility" }
| { "_ActivatedAbilities": "DoesntHaveTapSelfInCost" }
| { "_ActivatedAbilities": "EquipAbility" }
| { "_ActivatedAbilities": "BoastAbility" }
| { "_ActivatedAbilities": "OutlastAbility" }
| { "_ActivatedAbilities": "ExhaustAbility" }
| { "_ActivatedAbilities": "PowerUpAbility" }
| { "_ActivatedAbilities": "HasXInCost" }
| { "_ActivatedAbilities": "HasTapSelfInCost" }
| { "_ActivatedAbilities": "NonLoyaltyAbility" }
| { "_ActivatedAbilities": "LoyaltyAbility" };
type ActivatedAbility =
| { "_ActivatedAbility": "Trigger_ThatActivatedAbility" };
type ActivatedAbilityEffect =
| { "_ActivatedAbilityEffect": "IncreaseManaCost", "args": Array<ManaSymbol> }
| { "_ActivatedAbilityEffect": "AdditionalCostForEachColorManaSymbolInCosts", "args": [Cost, Color] }
| { "_ActivatedAbilityEffect": "AdditionalCost", "args": Cost }
| { "_ActivatedAbilityEffect": "ReduceManaCostNotLessThanOne", "args": Array<CostReductionSymbol> }
| { "_ActivatedAbilityEffect": "CantBeActivated" };
type ActivateModifier =
| { "_ActivateModifier": "And", "args": Array<ActivateModifier> }
| { "_ActivateModifier": "PowerUp" }
| { "_ActivateModifier": "CantBeCopied" }
| { "_ActivateModifier": "Exhaust" }
| { "_ActivateModifier": "ReduceManaCostForEachAlternateCost", "args": Cost }
| { "_ActivateModifier": "ActivateNoMoreThanNumberTimesEachTurn", "args": GameNumber }
| { "_ActivateModifier": "ReduceCostIfItTargetsANumberOfPermanent", "args": [Comparison, Permanents, Array<CostReductionSymbol>] }
| { "_ActivateModifier": "ReduceCostIfItTargetsAPermanent", "args": [Permanents, Array<CostReductionSymbol>] }
| { "_ActivateModifier": "ActivateOnlyAsASorcery" }
| { "_ActivateModifier": "ActivateOnlyAsAnInstant" }
| { "_ActivateModifier": "ActivateOnlyDuringTheirTurn" }
| { "_ActivateModifier": "ActivateOnlyIf", "args": Condition }
| { "_ActivateModifier": "ActivateOnlyOnce" }
| { "_ActivateModifier": "ActivateOnlyOnceEachTurn" }
| { "_ActivateModifier": "Boast" }
| { "_ActivateModifier": "CantActivateIf", "args": Condition }
| { "_ActivateModifier": "Forecast" }
| { "_ActivateModifier": "IncreaseManaCostForEach", "args": [Array<ManaSymbol>, GameNumber] }
| { "_ActivateModifier": "OnlyOtherPlayersMayActivate", "args": Players }
| { "_ActivateModifier": "OnlyPlayerMayActivate", "args": Player }
| { "_ActivateModifier": "OtherPlayersMayActivate", "args": Players }
| { "_ActivateModifier": "ReduceCostForEach", "args": [Array<CostReductionSymbol>, GameNumber] }
| { "_ActivateModifier": "ReduceCostIf", "args": [Condition, Array<CostReductionSymbol>] }
| { "_ActivateModifier": "ReduceCostX", "args": [Array<CostReductionSymbolX>, GameNumber] }
| { "_ActivateModifier": "SpendOnlyColoredManaOnX", "args": Color }
| { "_ActivateModifier": "SpendOnlyColoredMana", "args": Color }
| { "_ActivateModifier": "XCantBeZero" }
| { "_ActivateModifier": "XCantBeGreaterThan", "args": GameNumber }
| { "_ActivateModifier": "XIs", "args": GameNumber };
type AdditionalCostOption =
| { "_AdditionalCostOption": "AdditionalCost", "args": [Cost, Actions] }
| { "_AdditionalCostOption": "NoAdditionalCost", "args": Actions };
type Adventurer =
| { "_OracleCard": "Adventurer", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules?: Array<Rule>, CardPT?: CardPT, Adventure: Card, };
type AnteCard =
| { "_AnteCard": "Ref_TargetAnteCard" };
type AnteCards =
| { "_AnteCards": "OwnedByAPlayer", "args": Players };
type ArtifactType =
| "Attraction"
| "Blood"
| "Bobblehead"
| "Book"
| "Clue"
| "Equipment"
| "Food"
| "Fortification"
| "Gold"
| "Incubator"
| "Infinity"
| "Junk"
| "Lander"
| "Map"
| "Mutagen"
| "Powerstone"
| "Spacecraft"
| "Stone"
| "Treasure"
| "Vehicle"
| "Vibranium";
type AttachAction =
| { "_AttachAction": "ChooseAColor", "args": ChoosableColor }
| { "_AttachAction": "ChooseAnExiledCardToCopy", "args": CardsInExile }
| { "_AttachAction": "ChooseACardName", "args": CardsInOracle }
| { "_AttachAction": "ChooseACreatureType" };
type AttackAssignment =
| { "_AttackAssignment": "ThePlayerOrPlaneswalkerChosenThisWay" }
| { "_AttackAssignment": "Player", "args": Player };
type AttackingPlayers =
| { "_AttackingPlayers": "AttackedPlayerOrPlaneswalkerTheyControl", "args": Player };
type BattleType =
| "Siege";
type Boon =
| { "_Boon": "ThisBoon" };
type CardEffect =
| { "_CardEffect": "SetPT", "args": PT }
| { "_CardEffect": "AddLandType", "args": LandType }
| { "_CardEffect": "SetCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_CardEffect": "AddCreatureType", "args": CreatureType }
| { "_CardEffect": "AddCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_CardEffect": "AddCardtype", "args": CardType }
| { "_CardEffect": "AddColor", "args": SettableColor }
| { "_CardEffect": "SetColor", "args": SettableColor }
| { "_CardEffect": "AddAbility", "args": Array<Rule> }
| { "_CardEffect": "HasAllCreatureTypes" }
| { "_CardEffect": "MayCastFromLibraryWhileSearchingLibrary" }
| { "_CardEffect": "CountersRemainOnCardAsItMovesBetweenZonesExceptforHandAndLibrary" }
| { "_CardEffect": "CantBePlayed" };
type CardInExile =
| { "_CardInExile": "TheLastExiledCard" }
| { "_CardInExile": "Ref_TargetExiledCard" }
| { "_CardInExile": "TheCardConjuredIntoExileThisWay" }
| { "_CardInExile": "Ref_TargetExiledCard1" }
| { "_CardInExile": "TheSecondCardExiledThisWay" }
| { "_CardInExile": "Ref_TargetExiledCard2" }
| { "_CardInExile": "TheExiledCardChosenThisWay" }
| { "_CardInExile": "EachableExiled" }
| { "_CardInExile": "TopCardOfExiledPile" }
| { "_CardInExile": "WhenAPermanentIsExiled_ThatExiledPermanent" }
| { "_CardInExile": "TheExiledDeadPermanent" }
| { "_CardInExile": "TheExiledTopOfLibrary" }
| { "_CardInExile": "TheOtherExiledCard", "args": CardsInExile }
| { "_CardInExile": "ThisExiledPermanentCard" }
| { "_CardInExile": "TheCardExiledThisWay" }
| { "_CardInExile": "TheChosenExiledCard" }
| { "_CardInExile": "TheExiledCard" }
| { "_CardInExile": "TheExiledCardFoundThisWay" }
| { "_CardInExile": "TheFirstCardExiledThisWay" }
| { "_CardInExile": "TheSingleCardExiledThisWay" }
| { "_CardInExile": "TheSinglePermanentExiledThisWay" }
| { "_CardInExile": "TheSpecificCardExiledThisWay" }
| { "_CardInExile": "ThisExiledCard" }
| { "_CardInExile": "Trigger_ThatExiledCard" };
type CardInExileId =
| number;
type CardInGraveyards =
| { "_CardInGraveyards": "HostGraveyardCard" }
| { "_CardInGraveyards": "TheBottomCardOfPlayersGraveyard", "args": Player }
| { "_CardInGraveyards": "TheGraveyardCardChosenThisWay" }
| { "_CardInGraveyards": "TheChosenGraveyardCard" }
| { "_CardInGraveyards": "TheCardMilledThisWay" }
| { "_CardInGraveyards": "TheSacrificedPermanent" }
| { "_CardInGraveyards": "EnchantedGraveyardCard" }
| { "_CardInGraveyards": "TheCardConjuredIntoGraveyardThisWay" }
| { "_CardInGraveyards": "TopCardOfPlayersGraveyard", "args": Player }
| { "_CardInGraveyards": "Ref_TargetGraveyardCardInPlayersGraveyard", "args": Player }
| { "_CardInGraveyards": "ThisSacrificedPermanent" }
| { "_CardInGraveyards": "TheCardPutIntoGraveyardThisWay" }
| { "_CardInGraveyards": "TheLastGraveyardCardChosenThisWay" }
| { "_CardInGraveyards": "ThePermanentSacrificedThisWay" }
| { "_CardInGraveyards": "Trigger_ThatSacrificedPermanent" }
| { "_CardInGraveyards": "TopCardOfTypeOfPlayersGraveyard", "args": [Cards, Player] }
| { "_CardInGraveyards": "Trigger_ThatGraveyardCard" }
| { "_CardInGraveyards": "TheCardDiscardedThisWay" }
| { "_CardInGraveyards": "Ref_TargetGraveyardCard" }
| { "_CardInGraveyards": "Ref_TargetGraveyardCard1" }
| { "_CardInGraveyards": "Ref_TargetGraveyardCard2" }
| { "_CardInGraveyards": "Ref_TargetGraveyardCard3" }
| { "_CardInGraveyards": "Ref_TargetGraveyardCard4" }
| { "_CardInGraveyards": "Ref_TargetGraveyardCard5" }
| { "_CardInGraveyards": "ThisGraveyardCard" };
type CardInHand =
| { "_CardInHand": "TheCardChosenThisWay" }
| { "_CardInHand": "TheCardConjuredIntoHandThisWay" }
| { "_CardInHand": "TheCardConjuredThisWay" }
| { "_CardInHand": "TheCardDraftedThisWay" }
| { "_CardInHand": "TheCardInHandChosenThisWay" }
| { "_CardInHand": "TheCardInHandRevealedThisWay" }
| { "_CardInHand": "TheCardPutInHandThisWay" }
| { "_CardInHand": "TheCardReturnedToHandThisWay" }
| { "_CardInHand": "TheCardRevealedFromHandThisWay" }
| { "_CardInHand": "TheCardRevealedThisWay" }
| { "_CardInHand": "TheCardSeekedThisWay" }
| { "_CardInHand": "TheChosenCardInHand" }
| { "_CardInHand": "TheLastCardDrawnThisTurn" }
| { "_CardInHand": "ThisCardInHand" }
| { "_CardInHand": "Trigger_ThatCardInHand" }
| { "_CardInHand": "Trigger_ThatDiscardedCard" };
type CardInLibrary =
| { "_CardInLibrary": "TheLibraryCardFoundThisWay" }
| { "_CardInLibrary": "TheCardConjureIntoLibraryThisWay" }
| { "_CardInLibrary": "TheTopCardOfTypeInPlayersLibrary", "args": [Cards, Player] }
| { "_CardInLibrary": "ARandomCardOfTypeFromPlayersLibrary", "args": [Cards, Player] };
type CardManaCost =
| Array<ManaSymbolX>;
type Card =
| { "_OracleCard": "Card", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules?: Array<Rule>, CardPT?: CardPT, Loyalty?: LoyaltyNumber, Defense?: number, };
type CardPT =
| { Power: number, Toughness: number, };
type Cards =
| { "_Cards": "Not", "args": Cards }
| { "_Cards": "And", "args": Array<Cards> }
| { "_Cards": "Or", "args": Array<Cards> }
| { "_Cards": "Other", "args": SingleCard }
| { "_Cards": "SingleCard", "args": SingleCard }
| { "_Cards": "TheCardsSeekedThisWay" }
| { "_Cards": "IsCardtypeVariable", "args": CardtypeVariable }
| { "_Cards": "DoesntShareACardtypeWithTheCardsDiscardedThisWay" }
| { "_Cards": "NumCreatureTypesIs", "args": Comparison }
| { "_Cards": "HasXInManaCost" }
| { "_Cards": "HasNumberCardTypes", "args": Comparison }
| { "_Cards": "AnyCard" }
| { "_Cards": "SharesACardtypeWithThePermanentDestroyedThisWay" }
| { "_Cards": "SharesACreatureTypeWithDeadPermanent" }
| { "_Cards": "DoesntHaveAbility", "args": CheckHasable }
| { "_Cards": "HasAbility", "args": CheckHasable }
| { "_Cards": "HasAnAdventure" }
| { "_Cards": "HasBasicLandType" }
| { "_Cards": "IsArtifactType", "args": ArtifactType }
| { "_Cards": "IsNonArtifactType", "args": ArtifactType }
| { "_Cards": "IsCardtype", "args": CardType }
| { "_Cards": "IsColor", "args": Color }
| { "_Cards": "IsColored" }
| { "_Cards": "IsColorless" }
| { "_Cards": "IsCreatureType", "args": CreatureType }
| { "_Cards": "IsCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_Cards": "IsDoubleFaced" }
| { "_Cards": "IsEnchantmentType", "args": EnchantmentType }
| { "_Cards": "IsHistoric" }
| { "_Cards": "IsLandType", "args": LandType }
| { "_Cards": "IsNonLandType", "args": LandType }
| { "_Cards": "IsMulticolored" }
| { "_Cards": "IsNamed", "args": NameFilter }
| { "_Cards": "IsNonCardtype", "args": CardType }
| { "_Cards": "IsNonColor", "args": Color }
| { "_Cards": "IsNonCreatureType", "args": CreatureType }
| { "_Cards": "IsNonEnchantmentType", "args": EnchantmentType }
| { "_Cards": "IsNonSupertype", "args": SuperType }
| { "_Cards": "IsNotNamed", "args": NameFilter }
| { "_Cards": "IsNumberColors", "args": Comparison }
| { "_Cards": "IsPermanent" }
| { "_Cards": "IsPlaneswalkerType", "args": PlaneswalkerType }
| { "_Cards": "IsSpellType", "args": SpellType }
| { "_Cards": "IsSupertype", "args": SuperType }
| { "_Cards": "IsYourCommander" }
| { "_Cards": "ManaValueIs", "args": Comparison }
| { "_Cards": "NumberOfDifferentManaColorSymbolsInCostIs", "args": Comparison }
| { "_Cards": "PowerIs", "args": Comparison }
| { "_Cards": "SharesACardtypeWithCardDiscardedByPlayerThisWay", "args": Player }
| { "_Cards": "SharesACardtypeWithCardsDiscardedThisWay" }
| { "_Cards": "SharesACardtypeWithEachableExiledPermanent" }
| { "_Cards": "SharesACardtypeWithExiledCard", "args": CardInExile }
| { "_Cards": "SharesACardtypeWithPermanent", "args": Permanent }
| { "_Cards": "SharesACardtypeWithSpell", "args": Spell }
| { "_Cards": "SharesAColorWithAPermanent", "args": Permanents }
| { "_Cards": "SharesAColorWithPermanent", "args": Permanent }
| { "_Cards": "SharesAColorWithIt" }
| { "_Cards": "SharesACreatureTypeWithMostPrevalentCreatureTypeInPlayersLibrary", "args": Player }
| { "_Cards": "SharesACreatureTypeWithPermanent", "args": Permanent }
| { "_Cards": "SharesACreatureTypeWithPermanents", "args": Permanents }
| { "_Cards": "SharesAManaValueWithSpell", "args": Spell }
| { "_Cards": "SharesANameWithACardSpliceOntoSpell", "args": Spell }
| { "_Cards": "SharesANameWithAPermanent", "args": Permanents }
| { "_Cards": "SharesANameWithAnExiled", "args": CardsInExile }
| { "_Cards": "SharesANameWithAGraveyardCard", "args": CardsInGraveyards }
| { "_Cards": "SharesANameWithGraveyardCard", "args": CardInGraveyards }
| { "_Cards": "SharesANameWithPermanent", "args": Permanent }
| { "_Cards": "SharesANameWithSpell", "args": Spell }
| { "_Cards": "ToughnessIs", "args": Comparison }
| { "_Cards": "HasMoreThanOneOfTheSameManaSymbolInCost" }
| { "_Cards": "IsAllColors" }
| { "_Cards": "OwnedByAPlayer", "args": Players }
| { "_Cards": "ControlledByAPlayer", "args": Players }
| { "_Cards": "TheChosenLibraryFilter" };
type CardsInExile =
| { "_CardsInExile": "And", "args": Array<CardsInExile> }
| { "_CardsInExile": "Or", "args": Array<CardsInExile> }
| { "_CardsInExile": "Not", "args": CardsInExile }
| { "_CardsInExile": "Other", "args": CardInExile }
| { "_CardsInExile": "SingleExiledCard", "args": CardInExile }
| { "_CardsInExile": "AnyCard" }
| { "_CardsInExile": "AnyExiledCard" }
| { "_CardsInExile": "InExile" }
| { "_CardsInExile": "IsFaceUp" }
| { "_CardsInExile": "IsFaceDown" }
| { "_CardsInExile": "IsWarped" }
| { "_CardsInExile": "IsForetold" }
| { "_CardsInExile": "IsSuspended" }
| { "_CardsInExile": "IsNamed", "args": NameFilter }
| { "_CardsInExile": "SharesANameWithThePlayedCard" }
| { "_CardsInExile": "SharesANameWithSpell", "args": Spell }
| { "_CardsInExile": "SharesANameWithAnExiled", "args": CardsInExile }
| { "_CardsInExile": "HasAbility", "args": CheckHasable }
| { "_CardsInExile": "DoesntHaveAbility", "args": CheckHasable }
| { "_CardsInExile": "HasAnAdventure" }
| { "_CardsInExile": "IsColor", "args": Color }
| { "_CardsInExile": "ManaValueIs", "args": Comparison }
| { "_CardsInExile": "IsCardtype", "args": CardType }
| { "_CardsInExile": "IsCreatureType", "args": CreatureType }
| { "_CardsInExile": "IsNonCardtype", "args": CardType }
| { "_CardsInExile": "IsNonEnchantmentType", "args": EnchantmentType }
| { "_CardsInExile": "IsPermanent" }
| { "_CardsInExile": "IsSupertype", "args": SuperType }
| { "_CardsInExile": "OwnedByAPlayer", "args": Players }
| { "_CardsInExile": "HasACounterOfType", "args": CounterType }
| { "_CardsInExile": "HasNoCountersOfType", "args": CounterType }
| { "_CardsInExile": "InTheChosenPile" }
| { "_CardsInExile": "InTheExiledPileChosenThisWay" }
| { "_CardsInExile": "InTheExiledPileNotChosenThisWay" }
| { "_CardsInExile": "TheExiledCardChosenThisWay" }
| { "_CardsInExile": "TheCardsConjuredThisWay" }
| { "_CardsInExile": "TheCardsExiledByPlayerThisWay", "args": Player }
| { "_CardsInExile": "TheCardsExiledThisWay" }
| { "_CardsInExile": "TheExiledCards" }
| { "_CardsInExile": "TheExiledCardsChosenThisWay" }
| { "_CardsInExile": "TheExiledPileChosenThisWay" }
| { "_CardsInExile": "TheNonSpecificCardsExiledThisWay" }
| { "_CardsInExile": "TheOtherPermanentsExiledThisWay" }
| { "_CardsInExile": "ThePilesExiledThisWay" }
| { "_CardsInExile": "TheSpecificCardsExiledThisWay" }
| { "_CardsInExile": "Trigger_ThoseExiledCards" }
| { "_CardsInExile": "WasPutIntoExileFromAPlayersGraveyardThisTurn", "args": Players }
| { "_CardsInExile": "UsedToCraftPermanent", "args": Permanent }
| { "_CardsInExile": "WasExiledByPlayer", "args": Player }
| { "_CardsInExile": "WasExiledByPlayerForDraftCard", "args": [Player, string] }
| { "_CardsInExile": "WasExiledByPlayerThisWay", "args": Player }
| { "_CardsInExile": "WasExiledByPlayerWithPermanent", "args": [Player, Permanent] }
| { "_CardsInExile": "WasExiledByPlayerWithPermanentThisTurn", "args": [Player, Permanent] }
| { "_CardsInExile": "WasExiledThisTurn" }
| { "_CardsInExile": "WasExiledThisWay" }
| { "_CardsInExile": "WasExiledWithAnAbility", "args": Abilities }
| { "_CardsInExile": "WasExiledWithDeadPermanent" }
| { "_CardsInExile": "WasExiledWithPermanent", "args": Permanent }
| { "_CardsInExile": "WasExiledWithPermanentsDelveAbility", "args": Permanent }
| { "_CardsInExile": "WasExiledWithPlane", "args": Plane }
| { "_CardsInExile": "WasTurnedFaceUpThisWay" };
type CardsInGraveyards =
| { "_CardsInGraveyards": "AnyCardInAnyGraveyard" }
| { "_CardsInGraveyards": "And", "args": Array<CardsInGraveyards> }
| { "_CardsInGraveyards": "Not", "args": CardsInGraveyards }
| { "_CardsInGraveyards": "Or", "args": Array<CardsInGraveyards> }
| { "_CardsInGraveyards": "SharesANameWithPermanent", "args": Permanent }
| { "_CardsInGraveyards": "IsNonSpellType", "args": SpellType }
| { "_CardsInGraveyards": "IsNumberColors", "args": Comparison }
| { "_CardsInGraveyards": "SharesANameWithGraveyardCard", "args": CardInGraveyards }
| { "_CardsInGraveyards": "Other", "args": CardInGraveyards }
| { "_CardsInGraveyards": "SingleGraveyardCard", "args": CardInGraveyards }
| { "_CardsInGraveyards": "DoesntHaveAbility", "args": CheckHasable }
| { "_CardsInGraveyards": "Ref_TargetGraveyardCards1" }
| { "_CardsInGraveyards": "Ref_TargetGraveyardCards2" }
| { "_CardsInGraveyards": "TheGraveyardCardsSurveiledThisWay" }
| { "_CardsInGraveyards": "InTheGraveyardPileChosenThisWay" }
| { "_CardsInGraveyards": "TheDiscardedCardsChosenThisWay" }
| { "_CardsInGraveyards": "ThePermanentsSacrificedThisWay" }
| { "_CardsInGraveyards": "TheCardsPutIntoAGraveyardThisWay" }
| { "_CardsInGraveyards": "DiedThisTurn", "args": Permanents }
| { "_CardsInGraveyards": "TheGraveyardCardsNotChosenThisWay" }
| { "_CardsInGraveyards": "GraveyardCardWithMostVotesOrTiedForMostVotes" }
| { "_CardsInGraveyards": "TheChosenGraveyardCards" }
| { "_CardsInGraveyards": "InTheGraveyardPileNotChosenThisWay" }
| { "_CardsInGraveyards": "TheGraveyardCardsChosenThisWay" }
| { "_CardsInGraveyards": "WasPutIntoGraveyardFromAnywhereOtherThanTheBattlefieldThisTurn" }
| { "_CardsInGraveyards": "CanEnchantAPermanent", "args": Permanents }
| { "_CardsInGraveyards": "DoesntSharesACardtypeWithSpell", "args": Spell }
| { "_CardsInGraveyards": "HasASticker" }
| { "_CardsInGraveyards": "HasAbility", "args": CheckHasable }
| { "_CardsInGraveyards": "HasAnAdventure" }
| { "_CardsInGraveyards": "HasAnArtSticker" }
| { "_CardsInGraveyards": "HasNoAbilities" }
| { "_CardsInGraveyards": "InAPlayersGraveyard", "args": Players }
| { "_CardsInGraveyards": "IsAnOutlaw" }
| { "_CardsInGraveyards": "IsArtifactType", "args": ArtifactType }
| { "_CardsInGraveyards": "IsCardtype", "args": CardType }
| { "_CardsInGraveyards": "IsColor", "args": Color }
| { "_CardsInGraveyards": "IsColorless" }
| { "_CardsInGraveyards": "IsCreatureType", "args": CreatureType }
| { "_CardsInGraveyards": "IsCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_CardsInGraveyards": "IsEnchantmentType", "args": EnchantmentType }
| { "_CardsInGraveyards": "IsHistoric" }
| { "_CardsInGraveyards": "IsLandType", "args": LandType }
| { "_CardsInGraveyards": "IsMonocolored" }
| { "_CardsInGraveyards": "IsMulticolored" }
| { "_CardsInGraveyards": "IsNamed", "args": NameFilter }
| { "_CardsInGraveyards": "IsNonCardtype", "args": CardType }
| { "_CardsInGraveyards": "IsNonCreatureType", "args": CreatureType }
| { "_CardsInGraveyards": "IsNonEnchantmentType", "args": EnchantmentType }
| { "_CardsInGraveyards": "IsNonSupertype", "args": SuperType }
| { "_CardsInGraveyards": "IsNotNamed", "args": NameFilter }
| { "_CardsInGraveyards": "IsPermanent" }
| { "_CardsInGraveyards": "IsPlaneswalkerType", "args": PlaneswalkerType }
| { "_CardsInGraveyards": "IsSpellType", "args": SpellType }
| { "_CardsInGraveyards": "IsSupertype", "args": SuperType }
| { "_CardsInGraveyards": "ManaValueIs", "args": Comparison }
| { "_CardsInGraveyards": "Ref_TargetGraveyardCards" }
| { "_CardsInGraveyards": "SharesANameWithSpell", "args": Spell }
| { "_CardsInGraveyards": "PowerIs", "args": Comparison }
| { "_CardsInGraveyards": "ToughnessIs", "args": Comparison }
| { "_CardsInGraveyards": "TheTopNumberCardsOfTypeInPlayersGraveyard", "args": [GameNumber, Cards, Player] }
| { "_CardsInGraveyards": "CardsOfTypeMilledThisWay", "args": Cards }
| { "_CardsInGraveyards": "WasPutIntoGraveyardByPlayerThisWay", "args": Player }
| { "_CardsInGraveyards": "WasntPutIntoGraveyardThisWay" }
| { "_CardsInGraveyards": "WasPutIntoGraveyardThisWay" }
| { "_CardsInGraveyards": "Trigger_ThoseGraveyardCards" }
| { "_CardsInGraveyards": "WasAttachedToDeadPermanent" }
| { "_CardsInGraveyards": "WasDiscardedIntoGraveyardThisTurn" }
| { "_CardsInGraveyards": "WasMilledIntoGraveyardThisTurn" }
| { "_CardsInGraveyards": "WasPutIntoGraveyardFromAnywhereThisTurn" }
| { "_CardsInGraveyards": "WasPutIntoGraveyardFromLibraryThisTurn" }
| { "_CardsInGraveyards": "WasPutIntoGraveyardFromTheBattlefieldThisTurn" }
| { "_CardsInGraveyards": "WasSurveilledThisTurn" }
| { "_CardsInGraveyards": "WasntPutIntoGraveyardThisCombat" };
type CardsInHand =
| { "_CardsInHand": "And", "args": Array<CardsInHand> }
| { "_CardsInHand": "Or", "args": Array<CardsInHand> }
| { "_CardsInHand": "AnyCard" }
| { "_CardsInHand": "Other", "args": CardInHand }
| { "_CardsInHand": "SingleCardInHand", "args": CardInHand }
| { "_CardsInHand": "InAPlayersHand", "args": Players }
| { "_CardsInHand": "SharesANameWithPermanent", "args": Permanent }
| { "_CardsInHand": "TotalPowerAndToughnessIs", "args": Comparison }
| { "_CardsInHand": "DoesntHaveAbility", "args": CheckHasable }
| { "_CardsInHand": "IsColorless" }
| { "_CardsInHand": "IsParty" }
| { "_CardsInHand": "IsSpellType", "args": SpellType }
| { "_CardsInHand": "IsLandType", "args": LandType }
| { "_CardsInHand": "IsMulticolored" }
| { "_CardsInHand": "IsColor", "args": Color }
| { "_CardsInHand": "IsArtifactType", "args": ArtifactType }
| { "_CardsInHand": "IsHistoric" }
| { "_CardsInHand": "IsSupertype", "args": SuperType }
| { "_CardsInHand": "SharesACreatureTypeWithPermanents", "args": Permanents }
| { "_CardsInHand": "HasAbility", "args": CheckHasable }
| { "_CardsInHand": "IsCardtype", "args": CardType }
| { "_CardsInHand": "IsCreatureType", "args": CreatureType }
| { "_CardsInHand": "IsCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_CardsInHand": "IsEnchantmentType", "args": EnchantmentType }
| { "_CardsInHand": "IsNonCardtype", "args": CardType }
| { "_CardsInHand": "IsPermanent" }
| { "_CardsInHand": "IsNamed", "args": NameFilter }
| { "_CardsInHand": "ManaCostIsSubsetOfManaPaidForThisAbility" }
| { "_CardsInHand": "ManaValueIs", "args": Comparison }
| { "_CardsInHand": "ToughnessIs", "args": Comparison }
| { "_CardsInHand": "PowerIs", "args": Comparison }
| { "_CardsInHand": "SharesACardtypeWithSpell", "args": Spell }
| { "_CardsInHand": "SharesANameWithSpell", "args": Spell }
| { "_CardsInHand": "IsNonColor", "args": Color }
| { "_CardsInHand": "SharesANameWithAnotherCardInHandRevealedThisWay" }
| { "_CardsInHand": "TheCardsConjuredIntoHandThisWay" }
| { "_CardsInHand": "TheCardsConjuredThisWay" }
| { "_CardsInHand": "TheCardsDraftedThisWay" }
| { "_CardsInHand": "TheCardsInHandChosenThisWay" }
| { "_CardsInHand": "TheCardsInHandNotChosenThisWay" }
| { "_CardsInHand": "TheCardsOfTypeRevealedThisWay", "args": Cards }
| { "_CardsInHand": "TheCardsReturnedToHandThisWay" }
| { "_CardsInHand": "TheCardsSeekedThisWay" }
| { "_CardsInHand": "TheChosenCardsInHand" };
type CardsInLibrary =
| { "_CardsInLibrary": "SharesACardtypeWithSpell", "args": Spell }
| { "_CardsInLibrary": "DoesntShareANameWithSpell", "args": Spell }
| { "_CardsInLibrary": "RevealedFromLibraryThisWay" }
| { "_CardsInLibrary": "RevealedFromPlayersLibraryThisWay", "args": Player }
| { "_CardsInLibrary": "TheLibraryCardsFoundThisWay" }
| { "_CardsInLibrary": "CanEnchantPermanent", "args": Permanent }
| { "_CardsInLibrary": "CanEnchantThatEnteringPermanent" }
| { "_CardsInLibrary": "DoesntShareALandTypeWithAPermanent", "args": Permanents }
| { "_CardsInLibrary": "DoesntShareANameWithAPermanent", "args": Permanents }
| { "_CardsInLibrary": "IsColor", "args": Color }
| { "_CardsInLibrary": "ManaCostIs", "args": Array<ManaSymbol> }
| { "_CardsInLibrary": "SharesAColorWithPermanent", "args": Permanent }
| { "_CardsInLibrary": "SharesACreatureTypeWithPermanent", "args": Permanent }
| { "_CardsInLibrary": "SharesANameWithAGraveyardCard", "args": CardsInGraveyards }
| { "_CardsInLibrary": "SharesTotalPowerAndToughnessWithPermanent", "args": Permanent }
| { "_CardsInLibrary": "IsNumberColors", "args": Comparison }
| { "_CardsInLibrary": "IsNonCreatureType", "args": CreatureType }
| { "_CardsInLibrary": "HasBasicLandType" }
| { "_CardsInLibrary": "HasNoAbilities" }
| { "_CardsInLibrary": "IsColored" }
| { "_CardsInLibrary": "IsColorless" }
| { "_CardsInLibrary": "Not", "args": CardsInLibrary }
| { "_CardsInLibrary": "PowerIs", "args": Comparison }
| { "_CardsInLibrary": "ToughnessIs", "args": Comparison }
| { "_CardsInLibrary": "And", "args": Array<CardsInLibrary> }
| { "_CardsInLibrary": "AnyCardInLibrary" }
| { "_CardsInLibrary": "HasAbility", "args": CheckHasable }
| { "_CardsInLibrary": "IsArtifactType", "args": ArtifactType }
| { "_CardsInLibrary": "IsCardtype", "args": CardType }
| { "_CardsInLibrary": "IsCreatureType", "args": CreatureType }
| { "_CardsInLibrary": "IsEnchantmentType", "args": EnchantmentType }
| { "_CardsInLibrary": "IsLandType", "args": LandType }
| { "_CardsInLibrary": "IsMonocolored" }
| { "_CardsInLibrary": "IsMulticolored" }
| { "_CardsInLibrary": "IsNamed", "args": NameFilter }
| { "_CardsInLibrary": "IsNonCardtype", "args": CardType }
| { "_CardsInLibrary": "IsNonSupertype", "args": SuperType }
| { "_CardsInLibrary": "IsNotNamed", "args": NameFilter }
| { "_CardsInLibrary": "IsPermanent" }
| { "_CardsInLibrary": "IsSpellType", "args": SpellType }
| { "_CardsInLibrary": "IsSupertype", "args": SuperType }
| { "_CardsInLibrary": "ManaValueIs", "args": Comparison }
| { "_CardsInLibrary": "Or", "args": Array<CardsInLibrary> }
| { "_CardsInLibrary": "SharesACardtypeWithTheCycledCard" }
| { "_CardsInLibrary": "SharesAColorWithAPermanent", "args": Permanents }
| { "_CardsInLibrary": "SharesANameWithAPermanent", "args": Permanents }
| { "_CardsInLibrary": "SharesANameWithAnExiled", "args": CardsInExile }
| { "_CardsInLibrary": "SharesANameWithDeadPermanent" }
| { "_CardsInLibrary": "SharesANameWithExiled", "args": CardInExile }
| { "_CardsInLibrary": "SharesANameWithPermanent", "args": Permanent }
| { "_CardsInLibrary": "SharesANameWithSpell", "args": Spell }
| { "_CardsInLibrary": "SharesANameWithTheCardChosenThisWay" }
| { "_CardsInLibrary": "SharesANameWithTheCardRevealedThisWay" }
| { "_CardsInLibrary": "TheCardsConjuredInLibraryThisWay" };
type CardsInOracle =
| { "_CardsInOracle": "AnyOracleCard" }
| { "_CardsInOracle": "And", "args": Array<CardsInOracle> }
| { "_CardsInOracle": "Or", "args": Array<CardsInOracle> }
| { "_CardsInOracle": "Not", "args": CardsInOracle }
| { "_CardsInOracle": "FromTheLorwynEclipsedExpansion" }
| { "_CardsInOracle": "IsNamed", "args": NameFilter }
| { "_CardsInOracle": "SharesANameWithACardInHandRevealedThisWay" }
| { "_CardsInOracle": "IsSupertype", "args": SuperType }
| { "_CardsInOracle": "IsNonSupertype", "args": SuperType }
| { "_CardsInOracle": "IsCardtype", "args": CardType }
| { "_CardsInOracle": "IsNonCardtype", "args": CardType }
| { "_CardsInOracle": "IsCreatureType", "args": CreatureType }
| { "_CardsInOracle": "IsNonCreatureType", "args": CreatureType }
| { "_CardsInOracle": "IsArtifactType", "args": ArtifactType }
| { "_CardsInOracle": "ManaValueIs", "args": Comparison };
type CardType =
| "Artifact"
| "Battle"
| "Conspiracy"
| "Creature"
| "Dungeon"
| "Enchantment"
| "Instant"
| "Kindred"
| "Land"
| "Phenomenon"
| "Plane"
| "Planeswalker"
| "Scheme"
| "Sorcery"
| "Vanguard";
type CardtypeVariable =
| { "_CardtypeVariable": "EachableCardtype" }
| { "_CardtypeVariable": "TheChosenCardtype" }
| { "_CardtypeVariable": "CardtypeOfExiled", "args": CardInExile };
type CastEffect =
| { "_CastEffect": "AdditionalCastingCost", "args": Cost }
| { "_CastEffect": "AdditionalCastingCostForAllTargets", "args": Cost }
| { "_CastEffect": "AdditionalCastingCostForEachTarget", "args": Cost }
| { "_CastEffect": "AdditionalCastingCostForEachTargetBeyondTheFirst", "args": Cost }
| { "_CastEffect": "AdditionalCastingCostIf", "args": [Cost, Condition] }
| { "_CastEffect": "AdditionalCastingCostIfItTargetsAPermanent", "args": [Cost, Permanents] }
| { "_CastEffect": "AdditionalCastingCostX", "args": Cost }
| { "_CastEffect": "AlternateCastingCost", "args": Cost }
| { "_CastEffect": "AlternateCastingCostIf", "args": [Cost, Condition] }
| { "_CastEffect": "CantBeCastFromAnywhereOtherThanGraveyard" }
| { "_CastEffect": "CantBeCastIf", "args": Condition }
| { "_CastEffect": "CantBeCastUnless", "args": Condition }
| { "_CastEffect": "CantChooseATarget", "args": Permanents }
| { "_CastEffect": "CantSpendManaToCast" }
| { "_CastEffect": "MayCastAsThoughItHadFlashForAdditionalCost", "args": Cost }
| { "_CastEffect": "MayCastAsThoughItHadFlashIf", "args": Condition }
| { "_CastEffect": "MayCastAsThoughItHadFlashIfItTargetsAPermanent", "args": Permanents }
| { "_CastEffect": "MayCastAsThoughItHadFlashIfXIs", "args": Comparison }
| { "_CastEffect": "MayCastAsThoughItHadFlashWithSpecialAction", "args": Array<Action> }
| { "_CastEffect": "MayCastWithoutPayingIf", "args": Condition }
| { "_CastEffect": "MaySpendManaAsThoughAnyColorToCast" }
| { "_CastEffect": "MaySpendManaAsThoughAnyTypeToCast" }
| { "_CastEffect": "OptionalAdditionalCastingCost", "args": Cost }
| { "_CastEffect": "OptionalAdditionalCastingCostForReflexiveTrigger", "args": [Cost, Actions] }
| { "_CastEffect": "PayLifeForEachPreviousCastRatherThanManaForEachPreviousCast", "args": GameNumber }
| { "_CastEffect": "ReduceCastingCost", "args": Array<CostReductionSymbol> }
| { "_CastEffect": "ReduceCastingCostForAlternateCost", "args": [Array<CostReductionSymbol>, Cost] }
| { "_CastEffect": "ReduceCastingCostForEach", "args": [Array<CostReductionSymbol>, GameNumber] }
| { "_CastEffect": "ReduceCastingCostForEachAlternateCost", "args": [Array<CostReductionSymbol>, Cost] }
| { "_CastEffect": "ReduceCastingCostForEachWithMaxReduction", "args": [Array<CostReductionSymbol>, GameNumber, Array<CostReductionSymbol>] }
| { "_CastEffect": "ReduceCastingCostIf", "args": [Array<CostReductionSymbol>, Condition] }
| { "_CastEffect": "ReduceCastingCostIfItTargetsACard", "args": [Array<CostReductionSymbol>, Cards] }
| { "_CastEffect": "ReduceCastingCostIfItTargetsAPermanent", "args": [Array<CostReductionSymbol>, Permanents] }
| { "_CastEffect": "ReduceCastingCostIfItTargetsASpell", "args": [Array<CostReductionSymbol>, Spells] }
| { "_CastEffect": "ReduceCastingCostIfItTargetsASpellOrAbility", "args": [Array<CostReductionSymbol>, SpellsAndAbilities] }
| { "_CastEffect": "ReduceCastingCostIfItsBargained", "args": Array<CostReductionSymbol> }
| { "_CastEffect": "ReduceCastingCostX", "args": [Array<CostReductionSymbolX>, GameNumber] }
| { "_CastEffect": "SpendOnlyColorManaOnX", "args": Color }
| { "_CastEffect": "SpendOnlyColorsOfManaOnX", "args": Array<Color> }
| { "_CastEffect": "SpendOnlyManaFromPermanentsToCast", "args": Permanents }
| { "_CastEffect": "XCantBeZero" }
| { "_CastEffect": "XIs", "args": Comparison };
type CastModifier =
| { "_CastModifier": "SpendOnlyColoredManaOnXAndAtMostOneManaOfEachColor" }
| { "_CastModifier": "ReduceCostX", "args": [Array<CostReductionSymbolX>, GameNumber] }
| { "_CastModifier": "XCantBeZero" };
type CastUsingTeamwork =
| Actions;
type CDA_Types =
| { "_CDA_Types": "AddCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_CDA_Types": "Changeling" }
| { "_CDA_Types": "HasAllCreatureTypes" }
| { "_CDA_Types": "HasAllNonbasicLandTypes" }
| { "_CDA_Types": "AddCreatureTypes", "args": Array<CreatureType> };
type CheckHasable =
| { "_CheckHasable": "And", "args": Array<CheckHasable> }
| { "_CheckHasable": "PreventDamage", "args": [EventPreventDamage, Array<ActionPreventDamage>] }
| { "_CheckHasable": "ThisAbility" }
| { "_CheckHasable": "OtherThanThisAbility" }
| { "_CheckHasable": "AbilityStickerAbility" }
| { "_CheckHasable": "StickerAbility" }
| { "_CheckHasable": "ActivatedAbility" }
| { "_CheckHasable": "LoyaltyAbility" }
| { "_CheckHasable": "NonManaAbility" }
| { "_CheckHasable": "HasTapSelfInCost" }
| { "_CheckHasable": "ExhaustAbility" }
| { "_CheckHasable": "AnyWarp" }
| { "_CheckHasable": "AnyAwaken" }
| { "_CheckHasable": "AnyBandsWithOthers" }
| { "_CheckHasable": "AnyBlitz" }
| { "_CheckHasable": "AnyCumulativeUpkeep" }
| { "_CheckHasable": "AnyCycling" }
| { "_CheckHasable": "AnyDisturb" }
| { "_CheckHasable": "AnyEmbalm" }
| { "_CheckHasable": "AnyEternalize" }
| { "_CheckHasable": "AnyFading" }
| { "_CheckHasable": "AnyFlashback" }
| { "_CheckHasable": "AnyForetell" }
| { "_CheckHasable": "AnyFreerunning" }
| { "_CheckHasable": "AnyHexproof" }
| { "_CheckHasable": "AnyKicker" }
| { "_CheckHasable": "AnyLandwalk" }
| { "_CheckHasable": "AnyMadness" }
| { "_CheckHasable": "AnyModular" }
| { "_CheckHasable": "AnyMorph" }
| { "_CheckHasable": "AnyMutate" }
| { "_CheckHasable": "AnyPartner" }
| { "_CheckHasable": "AnyProtection" }
| { "_CheckHasable": "AnyProtectionFromColor" }
| { "_CheckHasable": "AnyRampage" }
| { "_CheckHasable": "AnySuspend" }
| { "_CheckHasable": "AnyToxic" }
| { "_CheckHasable": "AnyUnearth" }
| { "_CheckHasable": "AnyVanishing" }
| { "_CheckHasable": "AnyWard" }
| { "_CheckHasable": "Banding" }
| { "_CheckHasable": "Cascade" }
| { "_CheckHasable": "Convoke" }
| { "_CheckHasable": "Deathtouch" }
| { "_CheckHasable": "Decayed" }
| { "_CheckHasable": "Defender" }
| { "_CheckHasable": "Devoid" }
| { "_CheckHasable": "Disguise" }
| { "_CheckHasable": "DoctorsCompanion" }
| { "_CheckHasable": "DoubleStrike" }
| { "_CheckHasable": "Fear" }
| { "_CheckHasable": "FirstStrike" }
| { "_CheckHasable": "Flanking" }
| { "_CheckHasable": "Flash" }
| { "_CheckHasable": "Flying" }
| { "_CheckHasable": "Haste" }
| { "_CheckHasable": "Horsemanship" }
| { "_CheckHasable": "Indestructible" }
| { "_CheckHasable": "Infect" }
| { "_CheckHasable": "LevelUp" }
| { "_CheckHasable": "Lifelink" }
| { "_CheckHasable": "ManaAbility" }
| { "_CheckHasable": "Menace" }
| { "_CheckHasable": "Phasing" }
| { "_CheckHasable": "Reach" }
| { "_CheckHasable": "Shadow" }
| { "_CheckHasable": "Shroud" }
| { "_CheckHasable": "Skulk" }
| { "_CheckHasable": "Soulbond" }
| { "_CheckHasable": "StartYourEngines" }
| { "_CheckHasable": "Trample" }
| { "_CheckHasable": "Vigilance" }
| { "_CheckHasable": "Enchant", "args": Permanents }
| { "_CheckHasable": "Landwalk", "args": Permanents }
| { "_CheckHasable": "ProtectionFromColor", "args": Color }
| { "_CheckHasable": "EachableAbility" }
| { "_CheckHasable": "TheChosenAbility" }
| { "_CheckHasable": "TriggeredAbility" };
type ChoosableColor =
| { "_ChoosableColor": "AnyColor" }
| { "_ChoosableColor": "Other", "args": Color }
| { "_ChoosableColor": "ColorList", "args": Array<Color> }
| { "_ChoosableColor": "ColorsInPlayersHand", "args": Player }
| { "_ChoosableColor": "ColorsOfCardsInPlayersGraveyard", "args": [Cards, Player] }
| { "_ChoosableColor": "ColorAmoungPermanents", "args": Permanents }
| { "_ChoosableColor": "NotColorAmoungPermanents", "args": Permanents };
type ChoosableCreatureType =
| { "_ChoosableCreatureType": "AnyCreatureType" }
| { "_ChoosableCreatureType": "CreatureTypesOfSpell", "args": Spell };
type ClassAbility =
| { "_ClassAbility": "ClassAbility", "args": [Array<ManaSymbol>, Array<Rule>] };
type CleaveNotPaid =
| Actions;
type CleavePaid =
| Actions;
type ColorAndCreatureType =
| { "_ColorAndCreatureType": "ColorAndCreatureType", "args": [Color, CreatureType] };
type Color =
| { "_Color": "TheChosenColor" }
| { "_Color": "TheChosenColors" }
| { "_Color": "TheColorChosenByItsController" }
| { "_Color": "Colorless" }
| { "_Color": "White" }
| { "_Color": "Blue" }
| { "_Color": "Black" }
| { "_Color": "Red" }
| { "_Color": "Green" };
type ColorIndicatorColor =
| "White"
| "Blue"
| "Black"
| "Red"
| "Green";
type ColorWord =
| { "_ColorWord": "TheFirstChosenColorWord" }
| { "_ColorWord": "TheSecondChosenColorWord" };
type Commander =
| { "_Commander": "TheCommanderChosenThisWay" }
| { "_Commander": "ThisCommandCard" };
type Commanders =
| { "_Commanders": "IsCardtype", "args": CardType }
| { "_Commanders": "ManaValueIs", "args": Comparison }
| { "_Commanders": "And", "args": Array<Commanders> }
| { "_Commanders": "OwnedByAPlayer", "args": Players }
| { "_Commanders": "IsYourCommander" }
| { "_Commanders": "IsACommander" };
type Companion =
| { "_Companion": "AllCardsPassFilter", "args": Cards }
| { "_Companion": "EachCardPassesFilter", "args": [Cards, Cards] }
| { "_Companion": "EachCardPassesGroupFilter", "args": [Cards, GroupFilter] }
| { "_Companion": "IncreaseStartingDeckSize", "args": GameNumber }
| { "_Companion": "NoCardPassesFilter", "args": Cards };
type Comparison =
| { "_Comparison": "TheChosenQuality" }
| { "_Comparison": "NotTheChosenQuality" }
| { "_Comparison": "AnyManaValueAmongPermanents", "args": Permanents }
| { "_Comparison": "ANumberOfCardsInAPlayersGraveyard", "args": [Cards, Players] }
| { "_Comparison": "AnyManaValueAmongCardsInPlayersGraveyard", "args": [CardsInGraveyards, Player] }
| { "_Comparison": "OneOf", "args": Array<number> }
| { "_Comparison": "AnyNumber" }
| { "_Comparison": "Even" }
| { "_Comparison": "Odd" }
| { "_Comparison": "Prime" }
| { "_Comparison": "LessThanOrEqualTo", "args": GameNumber }
| { "_Comparison": "GreaterThanOrEqualTo", "args": GameNumber }
| { "_Comparison": "GreaterThan", "args": GameNumber }
| { "_Comparison": "LessThan", "args": GameNumber }
| { "_Comparison": "EqualTo", "args": GameNumber }
| { "_Comparison": "NotEqualTo", "args": GameNumber };
type Condition =
| { "_Condition": "IsDuringUpkeep" }
| { "_Condition": "IsAfterUpkeep" }
| { "_Condition": "IsDuringDrawStep" }
| { "_Condition": "IsDuringAMainPhase" }
| { "_Condition": "IsBeforeCombat" }
| { "_Condition": "IsBeforeFirstCombatPhaseOfTurn" }
| { "_Condition": "IsFirstCombatPhaseOfTurn" }
| { "_Condition": "IsDuringCombat" }
| { "_Condition": "IsBeforeAttackersDeclared" }
| { "_Condition": "IsDuringDeclareAttackersStep" }
| { "_Condition": "IsBeforeBlockersDeclared" }
| { "_Condition": "IsDuringDeclareBlockersStep" }
| { "_Condition": "IsAfterBlockersAreDeclared" }
| { "_Condition": "IsBeforeCombatDamageStep" }
| { "_Condition": "IsBeforeEndOfCombatStep" }
| { "_Condition": "IsDuringEndOfCombatStep" }
| { "_Condition": "IsAfterCombat" }
| { "_Condition": "IsBeforeEndStep" }
| { "_Condition": "IsFirstEndStepOfTheTurn" }
| { "_Condition": "IsDuringEndStep" }
| { "_Condition": "Or", "args": Array<Condition> }
| { "_Condition": "And", "args": Array<Condition> }
| { "_Condition": "ACardLeftPlayersGraveyardThisTurn", "args": [Cards, Player] }
| { "_Condition": "ACardOfTypeWasExiledThisTurn", "args": CardsInExile }
| { "_Condition": "ACardOfTypeWasFoundThisWay", "args": Cards }
| { "_Condition": "ACardWasChosenThisWay" }
| { "_Condition": "ACardWasDiscardedThisWay", "args": Cards }
| { "_Condition": "ACardWasExiledThisWay", "args": Cards }
| { "_Condition": "ACardWasFoundThisWay" }
| { "_Condition": "ACardWasMilledThisWay", "args": Cards }
| { "_Condition": "ACardWasPutIntoGraveyardThisWay", "args": Cards }
| { "_Condition": "ACardWasPutIntoHandThisWay", "args": Cards }
| { "_Condition": "ACardWasPutIntoPlayersGraveyardFromAnywhereThisTurn", "args": [Cards, Player] }
| { "_Condition": "ACardWasRevealedByPlayerThisWay", "args": [Cards, Player] }
| { "_Condition": "ACardWasRevealedThisWay", "args": Cards }
| { "_Condition": "ACardWasSurveiledIntoGraveyardThisWay", "args": Cards }
| { "_Condition": "ACardWasntDrawnThisWay" }
| { "_Condition": "AColorIsTheMostCommonColorAmongPermanentsButNotTiedForTheMostComon", "args": [Color, Permanents] }
| { "_Condition": "AColorIsTheMostCommonOrTiedForMostCommonColorAmongPermanents", "args": [Color, Permanents] }
| { "_Condition": "AColorWasChosen" }
| { "_Condition": "ACombatPermanentPassesFilter", "args": [Permanent, Permanents] }
| { "_Condition": "ACreatureOrPlaneswalkerDiedThisTurn", "args": Permanents }
| { "_Condition": "ACreatureOrPlaneswalkerWasDealtDamageThisWay", "args": Permanents }
| { "_Condition": "ACreatureTypeWasChosen" }
| { "_Condition": "ACreatureWasExploitedThisWay", "args": Permanents }
| { "_Condition": "ADiceResultIs", "args": Comparison }
| { "_Condition": "AGraveyardCardWasReturnedToHandThisWay", "args": Cards }
| { "_Condition": "ALibraryCardWasPutIntoHandThisWay" }
| { "_Condition": "ANumberDiceValuesAre", "args": [Comparison, Comparison] }
| { "_Condition": "ANumberOfCardsWereDiscardedThisWay", "args": Comparison }
| { "_Condition": "ANumberOfCardsWereExildThisWay", "args": [Comparison, Cards] }
| { "_Condition": "ANumberOfCardsWerePutIntoExileThisTurn", "args": [Comparison, Cards] }
| { "_Condition": "ANumberOfCardsWerePutIntoPlayersGraveyardFromAnywhereOtherThanTheBattlefieldThisTurn", "args": [Comparison, Cards, Players] }
| { "_Condition": "ANumberOfCardsWerePutIntoPlayersGraveyardFromAnywhereThisTurn", "args": [Comparison, Cards, Players] }
| { "_Condition": "ANumberOfCardsWereRevealedThisWay", "args": [Comparison, Cards] }
| { "_Condition": "ANumberOfCreaturesAttackedThisTurn", "args": [Comparison, Permanents] }
| { "_Condition": "ANumberOfGraveyardCardsLeftThisTurn", "args": [Comparison, CardsInGraveyards] }
| { "_Condition": "ANumberOfGraveyardCardsWereReturnedToHandThisWay", "args": Comparison }
| { "_Condition": "ANumberOfGroupCardsWereExiledThisWay", "args": [Comparison, Cards, GroupFilter] }
| { "_Condition": "ANumberOfPermanentsDiedThisTurn", "args": [Comparison, Permanents] }
| { "_Condition": "ANumberOfPlayersHaveLostTheGame", "args": Comparison }
| { "_Condition": "ANumberOfSourcesDealtDamageThisTurn", "args": [Comparison, DamageSources] }
| { "_Condition": "ANumberOfTokensWereCreatedThisWay", "args": Comparison }
| { "_Condition": "APermanentAttackedThisCombat", "args": Permanents }
| { "_Condition": "APermanentDiesThisWay", "args": Permanents }
| { "_Condition": "APermanentEnteredTheBattlefieldThisWay" }
| { "_Condition": "APermanentEnteredTheBattlefieldUnderAPlayersControlThisTurn", "args": [Permanents, Players] }
| { "_Condition": "APermanentEnteredTheBattlefieldUnderPlayersControlThisTurn", "args": [Permanents, Player] }
| { "_Condition": "APermanentExploredThisTurn", "args": Permanents }
| { "_Condition": "APermanentLeftTheBattlefieldThisTurn", "args": Permanents }
| { "_Condition": "APermanentOfTypeWasPutOntoTheBattlefieldThisWay", "args": Permanents }
| { "_Condition": "APermanentPassesFilter", "args": [Permanents, Permanents] }
| { "_Condition": "APermanentWasChosenThisWay" }
| { "_Condition": "APermanentWasCopiedThisWay", "args": Permanents }
| { "_Condition": "APermanentWasDestroyedByASpellOrAbilityThisTurn", "args": [Permanents, SpellsAndAbilities] }
| { "_Condition": "APermanentWasDestroyedThisWay", "args": Permanents }
| { "_Condition": "APermanentWasExiledThisWay", "args": Permanents }
| { "_Condition": "APermanentWasPutIntoAPlayersGraveyardThisTurn", "args": [Permanents, Players] }
| { "_Condition": "APermanentWasPutIntoHandThisWay", "args": Permanents }
| { "_Condition": "APermanentWasPutIntoPlayersGraveyardThisTurn", "args": [Permanents, Player] }
| { "_Condition": "APermanentWasPutOntoTheBattlefieldByPlayerThisWay", "args": [Permanents, Player] }
| { "_Condition": "APermanentWasPutOntoTheBattlefieldThisWay", "args": Permanents }
| { "_Condition": "APermanentWasReturnedToPlayersHandThisTurn", "args": [Permanents, Player] }
| { "_Condition": "APermanentWasSacrificedThisWay", "args": Permanents }
| { "_Condition": "APermanentWasntSacrificedThisWay", "args": Permanents }
| { "_Condition": "APermanentsAbilityIsCounteredThisWay", "args": Permanents }
| { "_Condition": "APlayerPassesFilter", "args": [Players, Players] }
| { "_Condition": "APlayerTurnedAPermanentFaceUpThisTurn", "args": [Players, Permanents] }
| { "_Condition": "APlayerWasDealtDamageThisWay", "args": Players }
| { "_Condition": "ASourceDealtDamageThisTurn", "args": [DamageSources, Comparison] }
| { "_Condition": "ASpellWasCastThisWay", "args": Spells }
| { "_Condition": "ASpellWasCountedByASpellOrAbilityThisTurn", "args": [Spells, SpellsAndAbilities] }
| { "_Condition": "ASpellWasWarpedThisTurn" }
| { "_Condition": "ASpellWasntCastThisWay" }
| { "_Condition": "ATokenWasCreatedThisWay" }
| { "_Condition": "ActivatedAbilityPassesFilter", "args": [ActivatedAbility, ActivatedAbilities] }
| { "_Condition": "AllCardsRevealedThisWayAreCardsOfType", "args": Cards }
| { "_Condition": "AllCoinsCameUpHeads" }
| { "_Condition": "AllPermanentsPassFilter", "args": [Permanents, Permanents] }
| { "_Condition": "AllPlayersPassFilter", "args": [Players, Players] }
| { "_Condition": "AllVotesWereForWord", "args": string }
| { "_Condition": "AnAmountOfEnergyWasPaidThisWay", "args": Comparison }
| { "_Condition": "AnAmountOfExcessDamageWasDealtThisWay", "args": Comparison }
| { "_Condition": "AnExiledCardPassesFilter", "args": [CardsInExile, CardsInExile] }
| { "_Condition": "AnyCardInAnyPlayersGraveyardPassesFilter", "args": [Cards, Players] }
| { "_Condition": "AttackingCreaturesPassFilter", "args": [Comparison, Permanents] }
| { "_Condition": "AttackingPlayerPassesFilter", "args": AttackingPlayers }
| { "_Condition": "CardIsExiled", "args": CardInExile }
| { "_Condition": "CardIsInPlayersGraveyard", "args": [CardInGraveyards, Player] }
| { "_Condition": "CardIsInPlayersGraveyardWithACardAboveIt", "args": [CardInGraveyards, Player, Cards] }
| { "_Condition": "CardIsInPlayersGraveyardWithANumberOfCardsAboveIt", "args": [CardInGraveyards, Player, Comparison, Cards] }
| { "_Condition": "CardIsOnlyCardInPlayersGraveyard", "args": [CardInGraveyards, Cards, Player] }
| { "_Condition": "CastByAPlayer", "args": Players }
| { "_Condition": "CastSpellOrActivatedAbilityPassesFilter", "args": SpellsAndAbilities }
| { "_Condition": "CastSpellPassesFilter", "args": Spells }
| { "_Condition": "CombatDamageWasDealtByACreature", "args": Permanents }
| { "_Condition": "CopiedCardPassesFilter", "args": Cards }
| { "_Condition": "CostWasPaid" }
| { "_Condition": "CostWasntPaid" }
| { "_Condition": "DamageFromAPermanentSourceWasPreventedThisWay", "args": Permanents }
| { "_Condition": "DamageFromASourceWasPreventedThisWay", "args": DamageSources }
| { "_Condition": "DamageWasPreventedThisWay" }
| { "_Condition": "DeadCardPassesFilter", "args": Cards }
| { "_Condition": "DeadPermanentPassesFilter", "args": Permanents }
| { "_Condition": "DestroyedPermanentIsPutInAGraveyardThisWay" }
| { "_Condition": "DiceResultIs", "args": Comparison }
| { "_Condition": "DifferenceIs", "args": [GameNumber, GameNumber, Comparison] }
| { "_Condition": "DiscardedCardPassesFilter", "args": Cards }
| { "_Condition": "EnergyWasPaidThisWay" }
| { "_Condition": "EnteringPermanentPassesFilter", "args": Permanents }
| { "_Condition": "EvidenceWasCollectedThisWay" }
| { "_Condition": "ExcessDamageWasDealtThisWay" }
| { "_Condition": "ExcessDamageWasDealtToACreatureOrPlaneswalkerThisTurn", "args": Permanents }
| { "_Condition": "ExcessDamageWasDealtToAPermanentThisWay", "args": Permanents }
| { "_Condition": "ExiledCardPassesFilter", "args": [CardInExile, CardsInExile] }
| { "_Condition": "ExiledPermanentWasUnearthed" }
| { "_Condition": "FreerunningCostWasPaid" }
| { "_Condition": "GraveyardCardPassesFilter", "args": [CardInGraveyards, Cards] }
| { "_Condition": "GuestWasUnattachedFromAPermanentThisWay", "args": Permanents }
| { "_Condition": "IsAPlayersTurn", "args": Players }
| { "_Condition": "IsAnExtraTurn" }
| { "_Condition": "IsDuringUntapStep" }
| { "_Condition": "IsNotPlayersTurn", "args": Player }
| { "_Condition": "IsNotTheFirstTurnOfTheGame" }
| { "_Condition": "IsPlayersNthTurn", "args": [Player, Comparison] }
| { "_Condition": "IsPlayersTurn", "args": Player }
| { "_Condition": "IsTheNthTurnOfTheGame", "args": Comparison }
| { "_Condition": "ItWasAnArtSticker" }
| { "_Condition": "ItsNeitherDayOrNight" }
| { "_Condition": "ItsNight" }
| { "_Condition": "LeavingPermanentPassesFilter", "args": Permanents }
| { "_Condition": "ManaFromAPermanentWasSpentToActivateThisAbility", "args": Permanents }
| { "_Condition": "MayhemCostWasPaid" }
| { "_Condition": "MostVotesForWordIs", "args": string }
| { "_Condition": "MostVotesOrTiedForMostVotesForWordIs", "args": string }
| { "_Condition": "NoCardsOfTypeWereRevealedThisWay", "args": Cards }
| { "_Condition": "NoCardsWerePutIntoHandThisWay" }
| { "_Condition": "NoCardsWereRevealedThisWay" }
| { "_Condition": "NoLifeWasPaidThisWay" }
| { "_Condition": "NoOneTookAnActionThisWay" }
| { "_Condition": "NoPermanentsLeftTheBattlefieldThisTurn", "args": Permanents }
| { "_Condition": "NoPermanentsPassFilter", "args": [Permanents, Permanents] }
| { "_Condition": "NoPlayersPassFilter", "args": [Players, Players] }
| { "_Condition": "NoVotesWereCastThisWay" }
| { "_Condition": "NumCardsDiscardedThisWayPassGroupFilter", "args": [Comparison, Cards, GroupFilter] }
| { "_Condition": "NumCardsFromHandRevealedThisWayPassGroupFilter", "args": [Comparison, Cards, GroupFilter] }
| { "_Condition": "NumCardsHaveBeenMilledIntoGraveyardThisWay", "args": [Comparison, Cards] }
| { "_Condition": "NumCardsInExileIs", "args": [Comparison, CardsInExile] }
| { "_Condition": "NumCoinFlipsLostIs", "args": Comparison }
| { "_Condition": "NumCoinFlipsWonIs", "args": Comparison }
| { "_Condition": "NumCombatPermanentsPassFilter", "args": [Comparison, Permanents, Permanents] }
| { "_Condition": "NumDifferentManaValueAmongCardsInPlayersGraveyardIs", "args": [Comparison, Cards, Player] }
| { "_Condition": "NumDifferentManaValuesAmongCardsInExileIs", "args": [Comparison, CardsInExile] }
| { "_Condition": "NumGraveyardCardsPassFilter", "args": [Comparison, Cards, Players] }
| { "_Condition": "NumGroupCardsWereMilledThisWay", "args": [Comparison, Cards, GroupFilter] }
| { "_Condition": "NumPermanentsIs", "args": [Comparison, Permanents] }
| { "_Condition": "NumPermanentsPassFilter", "args": [Comparison, Permanents, Permanents] }
| { "_Condition": "NumPlayersPassFilter", "args": [Comparison, Players, Players] }
| { "_Condition": "NumSpellsCastLastTurnIs", "args": [Comparison, Spells] }
| { "_Condition": "NumberDiceAreEqual", "args": Comparison }
| { "_Condition": "NumberOfCardTypesAmongThePermanentsSacrificedThisWayIs", "args": Comparison }
| { "_Condition": "NumberOfColorsOfManaSpentToActivateThisAbilityIs", "args": Comparison }
| { "_Condition": "NumberPermanentsEnteredTheBattlefieldThisWay", "args": [Comparison, Permanents] }
| { "_Condition": "NumberPermanentsEnteredTheBattlefieldUnderPlayersControlThisTurn", "args": [Comparison, Permanents, Player] }
| { "_Condition": "PermanentDealtDamageToACreatureOrPlaneswalkerThisWay", "args": [Permanent, Permanents] }
| { "_Condition": "PermanentDealtDamageToPlayerThisWay", "args": [Permanent, Player] }
| { "_Condition": "PermanentDiesThisWay" }
| { "_Condition": "PermanentPassesFilter", "args": [Permanent, Permanents] }
| { "_Condition": "PermanentPutInGraveyardPassesFilter", "args": PermanentsAndGraveyardCards }
| { "_Condition": "PermanentRegeneratedThisWay" }
| { "_Condition": "PermanentTransformedThisWay", "args": Permanent }
| { "_Condition": "PermanentWasDestroyedThisWay" }
| { "_Condition": "PermanentsChangedControlThisWay" }
| { "_Condition": "PermanentsPassGroupFilter", "args": [Permanents, GroupFilter] }
| { "_Condition": "PlayerControlledAPermanentAsCast", "args": [Player, Permanents] }
| { "_Condition": "PlayerDidntDrawACardThisWay" }
| { "_Condition": "PlayerGuessedWrong" }
| { "_Condition": "PlayerIsPlayer", "args": [Player, Player] }
| { "_Condition": "PlayerPassesFilter", "args": [Player, Players] }
| { "_Condition": "PlayerRevealedACardAsCast", "args": [Player, Cards] }
| { "_Condition": "PlayersRevealTopCardOfLibraryAndFindHighestManaValue_HasASingleWinner" }
| { "_Condition": "RevealedCardsWerePutInHand" }
| { "_Condition": "SourcesDealtNonCombatDamageThisTurn", "args": [DamageSources, Comparison] }
| { "_Condition": "SpellOrAbilityPassesFilter", "args": [SpellOrAbility, SpellsAndAbilities] }
| { "_Condition": "SpellPassesFilter", "args": [Spell, Spells] }
| { "_Condition": "SpellXIs", "args": Comparison }
| { "_Condition": "TheCardExiledThisWayIsStillExiled" }
| { "_Condition": "TheCardInHandPassesFilter", "args": [CardInHand, Cards] }
| { "_Condition": "TheCardReturnedToHandThisWayPassesFilter", "args": Cards }
| { "_Condition": "TheChosenGraveyardCardPassesFilter", "args": Cards }
| { "_Condition": "TheChosenNumbersMatch" }
| { "_Condition": "TheChosenWordWas", "args": string }
| { "_Condition": "TheGiftWasPromised" }
| { "_Condition": "TheGiftWasntPromised" }
| { "_Condition": "TheLastCardExiledThisWayWasACard", "args": Cards }
| { "_Condition": "TheNumberOfCardsOfTypeInPlayersLibraryIs", "args": [Cards, Player, Comparison] }
| { "_Condition": "TheNumberOfPermanentsReturnedToHandThisWayIs", "args": [Comparison, Permanents] }
| { "_Condition": "TheTotalManaValueOfExiledCardsIs", "args": [CardsInExile, Comparison] }
| { "_Condition": "ThereAreANumberOfBasicLandTypesAmongPermanents", "args": [Comparison, Permanents] }
| { "_Condition": "ThereAreANumberOfPermanentTypesAmongCardsInPlayersGraveyards", "args": [Comparison, Players] }
| { "_Condition": "ThereAreNumberCardTypesAmongExiled", "args": [Comparison, CardsInExile] }
| { "_Condition": "ThereAreNumberCardTypesInPlayersGraveyard", "args": [Comparison, Player] }
| { "_Condition": "ThereAreNumberNamesAmongUnlockedDoorsOfPermanents", "args": [Comparison, Permanents] }
| { "_Condition": "ThereAreNumberUnlockedDoorsAmongPermanents", "args": [Comparison, Permanents] }
| { "_Condition": "ThisCardIsInExileOrOnTheBattlefield" }
| { "_Condition": "ThisCardIsInTheCommandZone" }
| { "_Condition": "ThisCardIsInTheCommandZoneOrOnTheBattlefield" }
| { "_Condition": "ThisCardIsInYourGraveyard" }
| { "_Condition": "ThisCardIsOnTheBattlefield" }
| { "_Condition": "TimesThisAbilityHasResolvedThisTurnIs", "args": Comparison }
| { "_Condition": "TopCardOfPlayersLibraryPassesFilter", "args": [Player, Cards] }
| { "_Condition": "TopCardOfPlayersLibraryPassesFilter_Digital", "args": [Player, Cards] }
| { "_Condition": "TotalPowerOfPermanentsIs", "args": [Comparison, Permanents] }
| { "_Condition": "TotalToughnessOfPermanentsIs", "args": [Comparison, Permanents] }
| { "_Condition": "TriggerChoseCreatureAsRingBearer", "args": Permanents }
| { "_Condition": "TriggerDiceResultIs", "args": Comparison }
| { "_Condition": "TriggerXIs", "args": Comparison }
| { "_Condition": "Trigger_WonTheClash" }
| { "_Condition": "ValueIs", "args": [GameNumber, Comparison] }
| { "_Condition": "WhenAPermanentBecomesTapped_NotTappedForAttacking" }
| { "_Condition": "WhenAPlayerRollsAnyNumberOfDice_AnyDiceResultIs", "args": Comparison }
| { "_Condition": "WordWasVotedFor", "args": string }
| { "_Condition": "YouLostTheCoinFlip" };
type ConspiracyDeck =
| { "_ConspiracyDeck": "ReduceStartingDeckSize", "args": GameNumber }
| { "_ConspiracyDeck": "NoCardPassesFilter", "args": Cards };
type Conspiracy =
| { "_OracleCard": "Conspiracy", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, };
type CopyEffect =
| { "_CopyEffect": "AddSupertypes", "args": Array<SuperType> }
| { "_CopyEffect": "RemoveSupertypes", "args": Array<SuperType> }
| { "_CopyEffect": "AddCardtypes", "args": Array<CardType> }
| { "_CopyEffect": "SetCardtypes", "args": Array<CardType> }
| { "_CopyEffect": "AddArtifactTypes", "args": Array<ArtifactType> }
| { "_CopyEffect": "AddCreatureTypes", "args": Array<CreatureType> }
| { "_CopyEffect": "AddLandTypes", "args": Array<LandType> }
| { "_CopyEffect": "SetArtifactTypes", "args": Array<ArtifactType> }
| { "_CopyEffect": "SetCreatureTypes", "args": Array<CreatureType> }
| { "_CopyEffect": "MergeTypeline" }
| { "_CopyEffect": "AddAbilityVariable", "args": AbilityVariable }
| { "_CopyEffect": "AddAbility", "args": Array<Rule> }
| { "_CopyEffect": "AddAbilityIfItDoesntHaveAbility", "args": [Rule, CheckHasable] }
| { "_CopyEffect": "KeepColor" }
| { "_CopyEffect": "AddColor", "args": SettableColor }
| { "_CopyEffect": "SetColor", "args": SettableColor }
| { "_CopyEffect": "KeepName" }
| { "_CopyEffect": "SetName", "args": string }
| { "_CopyEffect": "KeepPT" }
| { "_CopyEffect": "SetPT", "args": PT }
| { "_CopyEffect": "HasNoManaCost" };
type CopyEffects =
| { "_CopyEffects": "CopyEffects", "args": Array<CopyEffect> }
| { "_CopyEffects": "NoCopyEffects" };
type Cost =
| { "_Cost": "And", "args": Array<Cost> }
| { "_Cost": "Or", "args": Array<Cost> }
| { "_Cost": "AbandonScheme", "args": SingleScheme }
| { "_Cost": "AddMana", "args": ManaProduce }
| { "_Cost": "Amass", "args": [GameNumber, CreatureType] }
| { "_Cost": "AnteAPermanent", "args": Permanents }
| { "_Cost": "AnteTopCardOfLibrary" }
| { "_Cost": "AttachAPermanentToAPlayer", "args": [Permanents, Players] }
| { "_Cost": "AttachAPermanentToPermanent", "args": [Permanents, Permanent] }
| { "_Cost": "AttachEachPermanentToPermanent", "args": [Permanents, Permanent] }
| { "_Cost": "AttachPermanentToAPermanent", "args": [Permanent, Permanents] }
| { "_Cost": "AttachPermanentToPermanent", "args": [Permanent, Permanent] }
| { "_Cost": "BeginGameWithCardOnBattlefield", "args": [PregameCard, Array<EnterFlag>] }
| { "_Cost": "BeholdA", "args": CardsInHand }
| { "_Cost": "BeholdAndExile", "args": CardsInHand }
| { "_Cost": "BeholdNumber", "args": [GameNumber, CardsInHand] }
| { "_Cost": "Blight", "args": GameNumber }
| { "_Cost": "BlightX" }
| { "_Cost": "CastASpellFromHandWithoutPaying", "args": Spells }
| { "_Cost": "CastASpellFromPlayersGraveyardWithoutPaying", "args": [Spells, Player] }
| { "_Cost": "CastCopiedCard" }
| { "_Cost": "CastCopiedCardWithoutPaying" }
| { "_Cost": "CastGraveyardCard", "args": CardInGraveyards }
| { "_Cost": "CastGraveyardCardWithAdditionalCostIntoExile", "args": [CardInGraveyards, Cost] }
| { "_Cost": "CastGraveyardCardWithoutPaying", "args": CardInGraveyards }
| { "_Cost": "CastSpellFromExile", "args": [Spells, CardInExile] }
| { "_Cost": "CastSpellFromExileWithoutPaying", "args": [Spells, CardInExile] }
| { "_Cost": "CastTopCardOfLibraryWithoutPaying" }
| { "_Cost": "CastTopSpellOfLibraryWithoutPaying", "args": Spells }
| { "_Cost": "ChooseACardFromPlayersRevealedHand", "args": [CardsInHand, Player] }
| { "_Cost": "ChooseACardInHand", "args": CardsInHand }
| { "_Cost": "ChooseACardInPlayersGraveyard", "args": [CardsInGraveyards, Player] }
| { "_Cost": "ChooseACardtype" }
| { "_Cost": "ChooseACheckableAbility", "args": Array<CheckHasable> }
| { "_Cost": "ChooseAColor", "args": ChoosableColor }
| { "_Cost": "ChooseACreatureType" }
| { "_Cost": "ChooseANumberBetween", "args": [number, number] }
| { "_Cost": "ChooseAPermanent", "args": Permanents }
| { "_Cost": "ChooseAPlayer", "args": Players }
| { "_Cost": "ChooseAPlayerAtRandom", "args": Players }
| { "_Cost": "ChooseAnExiledCard", "args": CardsInExile }
| { "_Cost": "ChooseAnyNumberPermanentsAndPayManaForEach", "args": [Permanents, Array<ManaSymbol>] }
| { "_Cost": "ChooseColors" }
| { "_Cost": "CollectEvidence", "args": GameNumber }
| { "_Cost": "CollectEvidenceAnyX" }
| { "_Cost": "ConjureDuplicateOfPermanentIntoHand", "args": Permanent }
| { "_Cost": "ConvertPermanent", "args": Permanent }
| { "_Cost": "CopyAnExiledCard", "args": CardsInExile }
| { "_Cost": "CopyExiledCard", "args": CardInExile }
| { "_Cost": "CopySpellAndMayChooseNewTargets", "args": Spell }
| { "_Cost": "CounterSpell", "args": Spell }
| { "_Cost": "CreatePermanentLayerEffect", "args": [Permanent, Array<LayerEffect>] }
| { "_Cost": "CreatePermanentLayerEffectUntil", "args": [Permanent, Array<LayerEffect>, Expiration] }
| { "_Cost": "CreatePermanentRuleEffectUntil", "args": [Permanent, Array<PermanentRule>, Expiration] }
| { "_Cost": "CreatePlayerEffectUntil", "args": [Player, Array<PlayerEffect>, Expiration] }
| { "_Cost": "CreateTokens", "args": [Array<CreatableToken>, Array<TokenFlag>] }
| { "_Cost": "CreatureConnives", "args": Permanent }
| { "_Cost": "DestroyPermanent", "args": Permanent }
| { "_Cost": "DiscardACard" }
| { "_Cost": "DiscardACardAtRandom" }
| { "_Cost": "DiscardACardOfType", "args": Cards }
| { "_Cost": "DiscardAnyNumberOfCards" }
| { "_Cost": "DiscardAnyNumberOfCardsOfType", "args": Cards }
| { "_Cost": "DiscardCard", "args": CardInHand }
| { "_Cost": "DiscardHand" }
| { "_Cost": "DiscardNumberCards", "args": GameNumber }
| { "_Cost": "DiscardNumberCardsAtRandom", "args": GameNumber }
| { "_Cost": "DiscardNumberCardsOfType", "args": [GameNumber, Cards] }
| { "_Cost": "DiscardNumberGroupCards", "args": [GameNumber, GroupFilter] }
| { "_Cost": "DiscardNumberGroupCardsOfType", "args": [GameNumber, Cards, GroupFilter] }
| { "_Cost": "DrawACard" }
| { "_Cost": "DrawNumberCards", "args": GameNumber }
| { "_Cost": "Earthbend", "args": [Permanent, GameNumber] }
| { "_Cost": "ExchangeControl", "args": [Permanent, Permanent] }
| { "_Cost": "ExchangeControlOfSpellAndPermanent", "args": [Spell, Permanent] }
| { "_Cost": "ExertPermanent", "args": Permanent }
| { "_Cost": "Exile", "args": [Array<ExilableCost>, Array<ExileFlag>] }
| { "_Cost": "ExileACardInGraveyardsAndPayItsManaCost", "args": CardsInGraveyards }
| { "_Cost": "FlipACoinAndCallIt" }
| { "_Cost": "Forage" }
| { "_Cost": "GainControlOfAPermanent", "args": Permanents }
| { "_Cost": "GainControlOfPermanent", "args": Permanent }
| { "_Cost": "GainControlOfPermanentUntil", "args": [Permanent, Expiration] }
| { "_Cost": "GainLife", "args": GameNumber }
| { "_Cost": "GainLifeForEach", "args": [GameNumber, GameNumber] }
| { "_Cost": "GetEnergy", "args": GameNumber }
| { "_Cost": "HaveAPlayerTakeAction", "args": [Players, CostPlayerAction] }
| { "_Cost": "HaveEachPlayerTakeAction", "args": [Players, CostPlayerAction] }
| { "_Cost": "HavePermanentDealDamage", "args": [Permanent, GameNumber, DamageRecipient] }
| { "_Cost": "HavePlayerTakeAction", "args": [Player, CostPlayerAction] }
| { "_Cost": "HaveSpellDealDamage", "args": [Spell, GameNumber, DamageRecipient] }
| { "_Cost": "Investigate" }
| { "_Cost": "ItsManaCost" }
| { "_Cost": "ItsManaCostReducedBy", "args": Array<CostReductionSymbol> }
| { "_Cost": "LookAtPlayersHandAndChooseACardToExile", "args": [Player, CardsInHand] }
| { "_Cost": "LookAtPlayersHandAndChooseACardToExileUntil", "args": [Player, CardsInHand, Expiration] }
| { "_Cost": "LookAtTheTopCardOfPlayersLibrary", "args": Player }
| { "_Cost": "LookAtTopOfLibrary" }
| { "_Cost": "Loyalty", "args": number }
| { "_Cost": "LoyaltyMinusX" }
| { "_Cost": "MillACard" }
| { "_Cost": "MillNumberCards", "args": GameNumber }
| { "_Cost": "MoveCounters", "args": Array<MoveCountersCost> }
| { "_Cost": "PayAnyAmountOfEnergy" }
| { "_Cost": "PayAnyAmountOfLife" }
| { "_Cost": "PayAnyAmountOfMana" }
| { "_Cost": "PayEnergy", "args": GameNumber }
| { "_Cost": "PayItsSuspendCost" }
| { "_Cost": "PayLife", "args": GameNumber }
| { "_Cost": "PayLifeEqualToItsManaValue" }
| { "_Cost": "PayLifeForEach", "args": [GameNumber, GameNumber] }
| { "_Cost": "PayMana", "args": Array<ManaSymbol> }
| { "_Cost": "PayManaAnyNumberOfTimes", "args": Array<ManaSymbol> }
| { "_Cost": "PayManaAnyX", "args": Array<ManaSymbolX> }
| { "_Cost": "PayManaAnyXRestricted", "args": [Array<ManaSymbolX>, Comparison] }
| { "_Cost": "PayManaCostOfPermanent", "args": Permanent }
| { "_Cost": "PayManaCostOfPermanentReducedBy", "args": [Permanent, Array<CostReductionSymbol>] }
| { "_Cost": "PayManaCostOfSpell", "args": Spell }
| { "_Cost": "PayManaForEach", "args": [Array<ManaSymbol>, GameNumber] }
| { "_Cost": "PayManaReduceForEach", "args": [Array<ManaSymbol>, Array<CostReductionSymbol>, GameNumber] }
| { "_Cost": "PayManaUptoNumberTimes", "args": [Array<ManaSymbol>, GameNumber] }
| { "_Cost": "PayManaX", "args": [Array<ManaSymbolX>, GameNumber] }
| { "_Cost": "PayMana_OnlyProducedByTreasure", "args": Array<ManaSymbol> }
| { "_Cost": "PayOneOrMoreEnergy" }
| { "_Cost": "PlayALandFromTopOfLibrary", "args": Cards }
| { "_Cost": "PlayTopCardOfLibraryWithoutPaying" }
| { "_Cost": "PutACardFromGraveyardIntoHand", "args": CardsInGraveyards }
| { "_Cost": "PutACardFromHandOnBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Cost": "PutACardFromHandOnBottomOfLibrary" }
| { "_Cost": "PutACardFromHandOnTopOfLibrary" }
| { "_Cost": "PutACardFromHandOrGraveyardOnBattlefield", "args": [Cards, Player, Array<EnterFlag>] }
| { "_Cost": "PutACardFromPlayersGraveyardOnBattlefield", "args": [CardsInGraveyards, Player, Array<EnterFlag>] }
| { "_Cost": "PutACardOfTypeMilledThisWayIntoHand", "args": Cards }
| { "_Cost": "PutAGraveyardCardOnTheBottomOfItsOwnersLibrary", "args": CardsInGraveyards }
| { "_Cost": "PutANameStickerOnPermanent", "args": Permanent }
| { "_Cost": "PutANumberOfExiledCardsIntoOwnersGraveyard", "args": [GameNumber, CardsInExile] }
| { "_Cost": "PutAPermanentIntoItsOwnersHand", "args": Permanents }
| { "_Cost": "PutAnExiledCardIntoOwnersGraveyard", "args": CardsInExile }
| { "_Cost": "PutCounters", "args": Array<PutCountersCost> }
| { "_Cost": "PutExiledCardIntoOwnersHand", "args": CardInExile }
| { "_Cost": "PutExiledCardOnTheBottomOfItsOwnersLibrary", "args": CardInExile }
| { "_Cost": "PutExiledCardOntoBattlefield", "args": [CardInExile, Array<EnterFlag>] }
| { "_Cost": "PutGraveyardCardIntoHand", "args": CardInGraveyards }
| { "_Cost": "PutGraveyardCardOnBottomOfLibrary", "args": CardInGraveyards }
| { "_Cost": "PutGraveyardCardOnTopOfLibrary", "args": CardInGraveyards }
| { "_Cost": "PutGraveyardCardOntoBattlefield", "args": [CardInGraveyards, Array<EnterFlag>] }
| { "_Cost": "PutNumberCardsFromASinglePlayersGraveyardOnBottomOfLibrary", "args": [GameNumber, Players] }
| { "_Cost": "PutNumberCardsFromPlayersGraveyardOnBottomOfLibrary", "args": [GameNumber, Player] }
| { "_Cost": "PutNumberPermanentsIntoOwnersHand", "args": [GameNumber, Permanents] }
| { "_Cost": "PutPermanentIntoItsOwnersHand", "args": Permanent }
| { "_Cost": "PutPermanentOnBottomOfOwnersLibrary", "args": Permanent }
| { "_Cost": "PutPermanentOnTopOfOwnersLibrary", "args": Permanent }
| { "_Cost": "PutSpellOnBottomOfOwnersLibrary", "args": Spell }
| { "_Cost": "PutTopCardOfEachPlayersLibraryInGraveyard", "args": Players }
| { "_Cost": "PutTopCardOfLibraryOfTypeOnBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Cost": "RegeneratePermanent", "args": Permanent }
| { "_Cost": "RemoveCounters", "args": Array<RemoveCountersCost> }
| { "_Cost": "RevealACardFromHandAtRandom" }
| { "_Cost": "RevealACardOfTypeFromHand", "args": Cards }
| { "_Cost": "RevealAnyNumberOfCardsOfTypeFromHand", "args": Cards }
| { "_Cost": "RevealCardFromHand", "args": CardInHand }
| { "_Cost": "RevealHand" }
| { "_Cost": "RevealHandAndPutEachCardOnBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_Cost": "RevealNumberGroupCardsFromHand", "args": [GameNumber, Cards, GroupFilter] }
| { "_Cost": "RevealTheChosenPlayer" }
| { "_Cost": "RevealTheSecretlyChosenCreatureType" }
| { "_Cost": "RevealTopCardOfLibrary" }
| { "_Cost": "RevealTopCardOfLibraryAndPutIntoHand", "args": Cards }
| { "_Cost": "RevealTopCardOfLibraryOfType", "args": Cards }
| { "_Cost": "RollAD6" }
| { "_Cost": "RollAD8" }
| { "_Cost": "SacrificeAPermanent", "args": Permanents }
| { "_Cost": "SacrificeAnyNumberOfGroupPermanents", "args": [Permanents, GroupFilter] }
| { "_Cost": "SacrificeAnyNumberOfPermanents", "args": Permanents }
| { "_Cost": "SacrificeEachPermanent", "args": Permanents }
| { "_Cost": "SacrificeNumberGroupPermanents", "args": [GameNumber, Permanents, GroupFilter] }
| { "_Cost": "SacrificeNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Cost": "SacrificeOneOrMorePermanents", "args": Permanents }
| { "_Cost": "SacrificePermanent", "args": Permanent }
| { "_Cost": "SacrificeUptoNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Cost": "SearchLibrary", "args": Array<SearchLibraryAction> }
| { "_Cost": "SeekACard", "args": Cards }
| { "_Cost": "ShuffleACardFromHandIntoLibrary" }
| { "_Cost": "ShuffleCardsFromHandIntoLibrary", "args": CardsInHand }
| { "_Cost": "ShuffleGraveyardCardIntoLibrary", "args": CardInGraveyards }
| { "_Cost": "ShufflePermanentIntoLibrary", "args": Permanent }
| { "_Cost": "Surveil", "args": GameNumber }
| { "_Cost": "SuspectAPermanent", "args": Permanents }
| { "_Cost": "TapAPermanent", "args": Permanents }
| { "_Cost": "TapAnyNumberOfGroupPermanents", "args": [Permanents, GroupFilter] }
| { "_Cost": "TapAnyNumberOfPermanents", "args": Permanents }
| { "_Cost": "TapNumberGroupPermanents", "args": [GameNumber, Permanents, GroupFilter] }
| { "_Cost": "TapNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Cost": "TapPermanent", "args": Permanent }
| { "_Cost": "Teamwork", "args": number }
| { "_Cost": "TransformPermanent", "args": Permanent }
| { "_Cost": "TurnPermanentFaceUp", "args": Permanent }
| { "_Cost": "UnattachAPermanentFromAPermanent", "args": [Permanents, Permanents] }
| { "_Cost": "UnattachPermanent", "args": Permanent }
| { "_Cost": "UnspecializeGraveyardCard", "args": CardInGraveyards }
| { "_Cost": "UntapAPermanent", "args": Permanents }
| { "_Cost": "UntapEachPermanent", "args": Permanents }
| { "_Cost": "UntapNumberPermanents", "args": [GameNumber, Permanents] }
| { "_Cost": "UntapPermanent", "args": Permanent }
| { "_Cost": "Waterbend", "args": Array<ManaSymbol> }
| { "_Cost": "WaterbendCustomX", "args": [Array<ManaSymbolX>, GameNumber] }
| { "_Cost": "WaterbendX", "args": Array<ManaSymbolX> };
type CostPlayerAction =
| { "_CostPlayerAction": "GainControlOfPermanentUntil", "args": [Permanent, Expiration] }
| { "_CostPlayerAction": "CreateTokens", "args": [Array<CreatableToken>, Array<TokenFlag>] }
| { "_CostPlayerAction": "GainControlOfPermanent", "args": Permanent }
| { "_CostPlayerAction": "DrawACard" }
| { "_CostPlayerAction": "LoseLife", "args": GameNumber }
| { "_CostPlayerAction": "DrawNumberCards", "args": GameNumber }
| { "_CostPlayerAction": "PutExiledCardIntoOwnersHand", "args": CardInExile }
| { "_CostPlayerAction": "PutGraveyardCardIntoHand", "args": CardInGraveyards }
| { "_CostPlayerAction": "ActivateAManaAbilityOfEachPermanentAndLoseUnspentMana", "args": Permanents }
| { "_CostPlayerAction": "PutTopOfLibraryInGraveyard" }
| { "_CostPlayerAction": "GainLife", "args": GameNumber };
type CostReduction =
| Array<CostReductionSymbol>;
type CostReductionSymbol =
| { "_CostReductionSymbol": "CostReduceW" }
| { "_CostReductionSymbol": "CostReduceU" }
| { "_CostReductionSymbol": "CostReduceB" }
| { "_CostReductionSymbol": "CostReduceR" }
| { "_CostReductionSymbol": "CostReduceG" }
| { "_CostReductionSymbol": "CostReduceGeneric", "args": number };
type CostReductionSymbolX =
| { "_CostReductionSymbolX": "CostReduceX" };
type CostReductionX =
| Array<CostReductionSymbolX>;
type CounterType =
| { "_CounterType": "PTCounter", "args": [number, number] }
| { "_CounterType": "ExperienceCounter" }
| { "_CounterType": "PoisonCounter" }
| { "_CounterType": "RadCounter" }
| { "_CounterType": "DefenseCounter" }
| { "_CounterType": "LoreCounter" }
| { "_CounterType": "LoyaltyCounter" }
| { "_CounterType": "DeathtouchCounter" }
| { "_CounterType": "DoubleStrikeCounter" }
| { "_CounterType": "ExaltedCounter" }
| { "_CounterType": "FirstStrikeCounter" }
| { "_CounterType": "FlyingCounter" }
| { "_CounterType": "HasteCounter" }
| { "_CounterType": "HexproofCounter" }
| { "_CounterType": "IndestructibleCounter" }
| { "_CounterType": "LifelinkCounter" }
| { "_CounterType": "MenaceCounter" }
| { "_CounterType": "ReachCounter" }
| { "_CounterType": "ShadowCounter" }
| { "_CounterType": "TrampleCounter" }
| { "_CounterType": "VigilanceCounter" }
| { "_CounterType": "DecayedCounter" }
| { "_CounterType": "PromotionCounter" }
| { "_CounterType": "AcornCounter" }
| { "_CounterType": "AegisCounter" }
| { "_CounterType": "AgeCounter" }
| { "_CounterType": "AimCounter" }
| { "_CounterType": "ArrowCounter" }
| { "_CounterType": "ArrowheadCounter" }
| { "_CounterType": "AwakeningCounter" }
| { "_CounterType": "BaitCounter" }
| { "_CounterType": "BlazeCounter" }
| { "_CounterType": "BlessingCounter" }
| { "_CounterType": "BlightCounter" }
| { "_CounterType": "BloodCounter" }
| { "_CounterType": "BloodlineCounter" }
| { "_CounterType": "BloodstainCounter" }
| { "_CounterType": "BookCounter" }
| { "_CounterType": "BoreCounter" }
| { "_CounterType": "BountyCounter" }
| { "_CounterType": "BrainCounter" }
| { "_CounterType": "BriberyCounter" }
| { "_CounterType": "BrickCounter" }
| { "_CounterType": "BurdenCounter" }
| { "_CounterType": "CageCounter" }
| { "_CounterType": "CarrionCounter" }
| { "_CounterType": "CellCounter" }
| { "_CounterType": "ChargeCounter" }
| { "_CounterType": "ChorusCounter" }
| { "_CounterType": "CoinCounter" }
| { "_CounterType": "CollectionCounter" }
| { "_CounterType": "ComponentCounter" }
| { "_CounterType": "ConquerorCounter" }
| { "_CounterType": "ContestedCounter" }
| { "_CounterType": "CorpseCounter" }
| { "_CounterType": "CorruptionCounter" }
| { "_CounterType": "CreditCounter" }
| { "_CounterType": "CroakCounter" }
| { "_CounterType": "CrystalCounter" }
| { "_CounterType": "CubeCounter" }
| { "_CounterType": "CurrencyCounter" }
| { "_CounterType": "DeathCounter" }
| { "_CounterType": "DelayCounter" }
| { "_CounterType": "DepletionCounter" }
| { "_CounterType": "DescentCounter" }
| { "_CounterType": "DespairCounter" }
| { "_CounterType": "DevotionCounter" }
| { "_CounterType": "DiscoveryCounter" }
| { "_CounterType": "DivinityCounter" }
| { "_CounterType": "DoomCounter" }
| { "_CounterType": "DreadCounter" }
| { "_CounterType": "DreamCounter" }
| { "_CounterType": "DutyCounter" }
| { "_CounterType": "EchoCounter" }
| { "_CounterType": "EggCounter" }
| { "_CounterType": "ElixirCounter" }
| { "_CounterType": "EmberCounter" }
| { "_CounterType": "EnlightenedCounter" }
| { "_CounterType": "EonCounter" }
| { "_CounterType": "EruptionCounter" }
| { "_CounterType": "EverythingCounter" }
| { "_CounterType": "ExposureCounter" }
| { "_CounterType": "EyeballCounter" }
| { "_CounterType": "FadeCounter" }
| { "_CounterType": "FateCounter" }
| { "_CounterType": "FeatherCounter" }
| { "_CounterType": "FeedingCounter" }
| { "_CounterType": "FellowshipCounter" }
| { "_CounterType": "FetchCounter" }
| { "_CounterType": "FilibusterCounter" }
| { "_CounterType": "FilmCounter" }
| { "_CounterType": "FinalityCounter" }
| { "_CounterType": "FireCounter" }
| { "_CounterType": "FlameCounter" }
| { "_CounterType": "FloodCounter" }
| { "_CounterType": "ForeshadowCounter" }
| { "_CounterType": "FungusCounter" }
| { "_CounterType": "FuryCounter" }
| { "_CounterType": "FuseCounter" }
| { "_CounterType": "GemCounter" }
| { "_CounterType": "GhostformCounter" }
| { "_CounterType": "GlyphCounter" }
| { "_CounterType": "GoldCounter" }
| { "_CounterType": "GrowthCounter" }
| { "_CounterType": "HarmonyCounter" }
| { "_CounterType": "HatchingCounter" }
| { "_CounterType": "HatchlingCounter" }
| { "_CounterType": "HealingCounter" }
| { "_CounterType": "HitCounter" }
| { "_CounterType": "HoneCounter" }
| { "_CounterType": "HoofprintCounter" }
| { "_CounterType": "HopeCounter" }
| { "_CounterType": "HourCounter" }
| { "_CounterType": "HourglassCounter" }
| { "_CounterType": "HungerCounter" }
| { "_CounterType": "IceCounter" }
| { "_CounterType": "ImpostorCounter" }
| { "_CounterType": "IncarnationCounter" }
| { "_CounterType": "IncubationCounter" }
| { "_CounterType": "InfectionCounter" }
| { "_CounterType": "InfluenceCounter" }
| { "_CounterType": "IngenuityCounter" }
| { "_CounterType": "IngredientCounter" }
| { "_CounterType": "IntelCounter" }
| { "_CounterType": "InterventionCounter" }
| { "_CounterType": "InvasionCounter" }
| { "_CounterType": "InvitationCounter" }
| { "_CounterType": "IsolationCounter" }
| { "_CounterType": "JavelinCounter" }
| { "_CounterType": "JudgmentCounter" }
| { "_CounterType": "KiCounter" }
| { "_CounterType": "KickCounter" }
| { "_CounterType": "KnowledgeCounter" }
| { "_CounterType": "LandmarkCounter" }
| { "_CounterType": "LevelCounter" }
| { "_CounterType": "LootCounter" }
| { "_CounterType": "LuckCounter" }
| { "_CounterType": "MagnetCounter" }
| { "_CounterType": "ManifestationCounter" }
| { "_CounterType": "MannequinCounter" }
| { "_CounterType": "MatrixCounter" }
| { "_CounterType": "MemoryCounter" }
| { "_CounterType": "MidwayCounter" }
| { "_CounterType": "MineCounter" }
| { "_CounterType": "MiningCounter" }
| { "_CounterType": "MireCounter" }
| { "_CounterType": "MusicCounter" }
| { "_CounterType": "MusterCounter" }
| { "_CounterType": "NecrodermisCounter" }
| { "_CounterType": "NestCounter" }
| { "_CounterType": "NetCounter" }
| { "_CounterType": "NightCounter" }
| { "_CounterType": "OilCounter" }
| { "_CounterType": "OmenCounter" }
| { "_CounterType": "OreCounter" }
| { "_CounterType": "PageCounter" }
| { "_CounterType": "PainCounter" }
| { "_CounterType": "PalliationCounter" }
| { "_CounterType": "ParalyzationCounter" }
| { "_CounterType": "PetalCounter" }
| { "_CounterType": "PetrificationCounter" }
| { "_CounterType": "PhylacteryCounter" }
| { "_CounterType": "PhyresisCounter" }
| { "_CounterType": "PinCounter" }
| { "_CounterType": "PlagueCounter" }
| { "_CounterType": "PlanCounter" }
| { "_CounterType": "PlotCounter" }
| { "_CounterType": "PointCounter" }
| { "_CounterType": "PolypCounter" }
| { "_CounterType": "PossessionCounter" }
| { "_CounterType": "PressureCounter" }
| { "_CounterType": "PreyCounter" }
| { "_CounterType": "PupaCounter" }
| { "_CounterType": "QuestCounter" }
| { "_CounterType": "RallyCounter" }
| { "_CounterType": "RejectionCounter" }
| { "_CounterType": "ReprieveCounter" }
| { "_CounterType": "RevCounter" }
| { "_CounterType": "RevivalCounter" }
| { "_CounterType": "RibbonCounter" }
| { "_CounterType": "RitualCounter" }
| { "_CounterType": "RopeCounter" }
| { "_CounterType": "RustCounter" }
| { "_CounterType": "SamuraiCounter" }
| { "_CounterType": "SaurianCounter" }
| { "_CounterType": "ScreamCounter" }
| { "_CounterType": "ScrollCounter" }
| { "_CounterType": "ShellCounter" }
| { "_CounterType": "ShredCounter" }
| { "_CounterType": "SilverCounter" }
| { "_CounterType": "SkewerCounter" }
| { "_CounterType": "SleepCounter" }
| { "_CounterType": "SleightCounter" }
| { "_CounterType": "SlimeCounter" }
| { "_CounterType": "SlumberCounter" }
| { "_CounterType": "SootCounter" }
| { "_CounterType": "SoulCounter" }
| { "_CounterType": "SpiteCounter" }
| { "_CounterType": "SporeCounter" }
| { "_CounterType": "StashCounter" }
| { "_CounterType": "StorageCounter" }
| { "_CounterType": "StoryCounter" }
| { "_CounterType": "StrifeCounter" }
| { "_CounterType": "StudyCounter" }
| { "_CounterType": "SupplyCounter" }
| { "_CounterType": "SuspectCounter" }
| { "_CounterType": "TakeoverCounter" }
| { "_CounterType": "TaskCounter" }
| { "_CounterType": "TheftCounter" }
| { "_CounterType": "TideCounter" }
| { "_CounterType": "TimeCounter" }
| { "_CounterType": "TowerCounter" }
| { "_CounterType": "TrapCounter" }
| { "_CounterType": "TreasureCounter" }
| { "_CounterType": "UnityCounter" }
| { "_CounterType": "UnlockCounter" }
| { "_CounterType": "ValorCounter" }
| { "_CounterType": "VelocityCounter" }
| { "_CounterType": "VerseCounter" }
| { "_CounterType": "VitalityCounter" }
| { "_CounterType": "VoidCounter" }
| { "_CounterType": "VortexCounter" }
| { "_CounterType": "VowCounter" }
| { "_CounterType": "VoyageCounter" }
| { "_CounterType": "WageCounter" }
| { "_CounterType": "WinchCounter" }
| { "_CounterType": "WindCounter" }
| { "_CounterType": "WishCounter" }
| { "_CounterType": "WreckCounter" }
| { "_CounterType": "ShieldCounter" }
| { "_CounterType": "StunCounter" };
type Craftable =
| { "_Craftable": "And", "args": Array<Craftable> }
| { "_Craftable": "Or", "args": Array<Craftable> }
| { "_Craftable": "IsNonCardtype", "args": CardType }
| { "_Craftable": "HasAbility", "args": CheckHasable }
| { "_Craftable": "IsCreatureType", "args": CreatureType }
| { "_Craftable": "IsLandType", "args": LandType }
| { "_Craftable": "IsColor", "args": Color }
| { "_Craftable": "IsCardtype", "args": CardType }
| { "_Craftable": "AnyCard" };
type CreatableToken =
| { "_CreatableToken": "NumberTokens", "args": [GameNumber, CreatableToken] }
| { "_CreatableToken": "NumberTokensForEach", "args": [GameNumber, GameNumber, CreatableToken] }
| { "_CreatableToken": "Token", "args": [TokenColorList, Array<SuperType>, Array<CardType>, TokenSubtypes, Array<Rule>] }
| { "_CreatableToken": "TokenWithPT", "args": [PT, TokenColorList, Array<SuperType>, Array<CardType>, TokenSubtypes, Array<Rule>] }
| { "_CreatableToken": "NamedToken", "args": [string, TokenColorList, Array<SuperType>, Array<CardType>, TokenSubtypes, Array<Rule>] }
| { "_CreatableToken": "NamedTokenWithPT", "args": [string, PT, TokenColorList, Array<SuperType>, Array<CardType>, TokenSubtypes, Array<Rule>] }
| { "_CreatableToken": "NamedTokenWithPTAndWithCopyEffects", "args": [string, PT, TokenColorList, Array<SuperType>, Array<CardType>, TokenSubtypes, Array<Rule>, TokenCopyEffects] }
| { "_CreatableToken": "TransformingToken", "args": [CreatableToken, CreatableToken] }
| { "_CreatableToken": "TokenCopyOfDiscardedCard", "args": [CardInHand, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfEachCardOfTypeRevealedThisWay", "args": [Cards, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfAPermanent", "args": [Permanents, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfEachExiledCard", "args": [CardsInExile, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfAnExiledCard", "args": [CardsInExile, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfEachPermanentDestroyedThisWay", "args": TokenCopyEffects }
| { "_CreatableToken": "TokenCopyOfExiledCard", "args": [CardInExile, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfNamedCard", "args": [string, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfSpell", "args": [Spell, TokenCopyEffects] }
| { "_CreatableToken": "TokenFromCopy" }
| { "_CreatableToken": "TokenCopyOfGraveyardCard", "args": [CardInGraveyards, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfACardAtRandom", "args": CardsInOracle }
| { "_CreatableToken": "TokenCopyOfCommander", "args": TokenCopyEffects }
| { "_CreatableToken": "TokenCopyOfEachGraveyardCard", "args": [CardsInGraveyards, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfEachPermanent", "args": [Permanents, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfPermanent", "args": [Permanent, TokenCopyEffects] }
| { "_CreatableToken": "TokenCopyOfAnEnteringPermanent", "args": [Permanents, TokenCopyEffects] }
| { "_CreatableToken": "ThoseTokens" }
| { "_CreatableToken": "OracleToken", "args": string }
| { "_CreatableToken": "VirtuousRoleToken" }
| { "_CreatableToken": "WickedRoleToken" }
| { "_CreatableToken": "YoungHeroRoleToken" }
| { "_CreatableToken": "CursedRoleToken" }
| { "_CreatableToken": "MonsterRoleToken" }
| { "_CreatableToken": "RoyalRoleToken" }
| { "_CreatableToken": "SorcererRoleToken" }
| { "_CreatableToken": "BloodToken" }
| { "_CreatableToken": "ClueToken" }
| { "_CreatableToken": "FishToken" }
| { "_CreatableToken": "FoodToken" }
| { "_CreatableToken": "GoldToken" }
| { "_CreatableToken": "JunkToken" }
| { "_CreatableToken": "LanderToken" }
| { "_CreatableToken": "MapToken" }
| { "_CreatableToken": "MutagenToken" }
| { "_CreatableToken": "OctopusToken" }
| { "_CreatableToken": "PowerstoneToken" }
| { "_CreatableToken": "IncubatorToken" }
| { "_CreatableToken": "ShardToken" }
| { "_CreatableToken": "TreasureToken" }
| { "_CreatableToken": "VibraniumToken" }
| { "_CreatableToken": "WalkerToken" }
| { "_CreatableToken": "HeartwoodToken" };
type CreatureType =
| "Advisor"
| "Aetherborn"
| "Alien"
| "Ally"
| "Angel"
| "Antelope"
| "Ape"
| "Archer"
| "Archon"
| "Armadillo"
| "Army"
| "Artificer"
| "Assassin"
| "AssemblyWorker"
| "Astartes"
| "Atog"
| "Aurochs"
| "Avatar"
| "Azra"
| "Badger"
| "Balloon"
| "Barbarian"
| "Bard"
| "Basilisk"
| "Bat"
| "Bear"
| "Beast"
| "Beaver"
| "Beeble"
| "Beholder"
| "Berserker"
| "Bird"
| "Bison"
| "Blinkmoth"
| "Boar"
| "Borg"
| "Bringer"
| "Brushwagg"
| "Camarid"
| "Camel"
| "Capybara"
| "Caribou"
| "Carrier"
| "Cat"
| "Centaur"
| "Chimera"
| "Citizen"
| "Cleric"
| "Clown"
| "Cockatrice"
| "Construct"
| "Coward"
| "Coyote"
| "Crab"
| "Crocodile"
| "Ctan"
| "Custodes"
| "Cyberman"
| "Cyclops"
| "Dalek"
| "Dauthi"
| "Demigod"
| "Demon"
| "Deserter"
| "Detective"
| "Devil"
| "Dinosaur"
| "Djinn"
| "Doctor"
| "Dog"
| "Dragon"
| "Drake"
| "Dreadnought"
| "Drix"
| "Drone"
| "Druid"
| "Dryad"
| "Dwarf"
| "Echidna"
| "Efreet"
| "Egg"
| "Elder"
| "Eldrazi"
| "Elemental"
| "Elephant"
| "Elf"
| "Elk"
| "Employee"
| "Eternal"
| "Eye"
| "Faerie"
| "Ferret"
| "Fish"
| "Flagbearer"
| "Fox"
| "Fractal"
| "Frog"
| "Fungus"
| "Gamer"
| "Gamma"
| "Gargoyle"
| "Germ"
| "Giant"
| "Giraffe"
| "Gith"
| "Glimmer"
| "Gnoll"
| "Gnome"
| "Goat"
| "Goblin"
| "God"
| "Golem"
| "Gorgon"
| "Graveborn"
| "Gremlin"
| "Griffin"
| "Guest"
| "Hag"
| "Halfling"
| "Hamster"
| "Harpy"
| "Hedgehog"
| "Hellion"
| "Hero"
| "Hippo"
| "Hippogriff"
| "Homarid"
| "Homunculus"
| "Horror"
| "Horse"
| "Human"
| "Hydra"
| "Hyena"
| "Illusion"
| "Imp"
| "Incarnation"
| "Inhuman"
| "Inkling"
| "Inquisitor"
| "Insect"
| "Jackal"
| "Jellyfish"
| "Juggernaut"
| "Kangaroo"
| "Kavu"
| "Kirin"
| "Kithkin"
| "Klingon"
| "Knight"
| "Kobold"
| "Kor"
| "Kraken"
| "Kree"
| "Lamia"
| "Lammasu"
| "Leech"
| "Lemur"
| "Leviathan"
| "Lhurgoyf"
| "Licid"
| "Lizard"
| "Llama"
| "Lobster"
| "Manticore"
| "Masticore"
| "Mercenary"
| "Merfolk"
| "Metathran"
| "Minion"
| "Minotaur"
| "Mite"
| "Mole"
| "Monger"
| "Mongoose"
| "Monk"
| "Monkey"
| "Moogle"
| "Moonfolk"
| "Mount"
| "Mouse"
| "Mutant"
| "Myr"
| "Mystic"
| "Nautilus"
| "Necron"
| "Nephilim"
| "Nightmare"
| "Nightstalker"
| "Ninja"
| "Noble"
| "Noggle"
| "Nomad"
| "Nymph"
| "Octopus"
| "Officer"
| "Ogre"
| "Ooze"
| "Orb"
| "Orc"
| "Orgg"
| "Otter"
| "Ouphe"
| "Ox"
| "Oyster"
| "Pangolin"
| "Peasant"
| "Pegasus"
| "Pentavite"
| "Performer"
| "Pest"
| "Phelddagrif"
| "Phoenix"
| "Phyrexian"
| "Pilot"
| "Pincher"
| "Pirate"
| "Plant"
| "Platypus"
| "Porcupine"
| "Possum"
| "Praetor"
| "Primarch"
| "Prism"
| "Processor"
| "Q"
| "Qu"
| "Rabbit"
| "Raccoon"
| "Ranger"
| "Rat"
| "Rebel"
| "Reflection"
| "Rhino"
| "Rigger"
| "Robot"
| "Rogue"
| "Romulan"
| "Sable"
| "Salamander"
| "Samurai"
| "Sand"
| "Saproling"
| "Satyr"
| "Scarecrow"
| "Scientist"
| "Scion"
| "Scorpion"
| "Scout"
| "Sculpture"
| "Seal"
| "Serf"
| "Serpent"
| "Servo"
| "Shade"
| "Shaman"
| "Shapeshifter"
| "Shark"
| "Sheep"
| "Shiar"
| "Siren"
| "Skeleton"
| "Skrull"
| "Skunk"
| "Slith"
| "Sliver"
| "Sloth"
| "Slug"
| "Snail"
| "Snake"
| "Soldier"
| "Soltari"
| "Sorcerer"
| "Spawn"
| "Specter"
| "Spellshaper"
| "Sphinx"
| "Spider"
| "Spike"
| "Spirit"
| "Splinter"
| "Sponge"
| "Spy"
| "Squid"
| "Squirrel"
| "Starfish"
| "Surrakar"
| "Survivor"
| "Symbiote"
| "Synth"
| "Tentacle"
| "Tetravite"
| "Thalakos"
| "Thopter"
| "Thrull"
| "Tiefling"
| "TimeLord"
| "Tosk"
| "Toy"
| "Treefolk"
| "Trilobite"
| "Triskelavite"
| "Troll"
| "Turtle"
| "Tyranid"
| "Unicorn"
| "Utrom"
| "Vampire"
| "Varmint"
| "Vedalken"
| "Villain"
| "Volver"
| "Vulcan"
| "Wall"
| "Walrus"
| "Warlock"
| "Warrior"
| "Weasel"
| "Weird"
| "Werewolf"
| "Whale"
| "Wizard"
| "Wolf"
| "Wolverine"
| "Wombat"
| "Worm"
| "Wraith"
| "Wurm"
| "Yeti"
| "Zombie"
| "Zubera";
type CreatureTypeVariable =
| { "_CreatureTypeVariable": "CreatureTypesOfExiled", "args": CardInExile }
| { "_CreatureTypeVariable": "TheCreatureTypeChosenByPlayerThisWay", "args": Player }
| { "_CreatureTypeVariable": "TheChosenCreatureType" }
| { "_CreatureTypeVariable": "TheChosenCreatureTypes" }
| { "_CreatureTypeVariable": "TheNotedCreatureType" };
type DamageRecipient =
| { "_DamageRecipient": "MultipleRecipients", "args": Array<DamageRecipient> }
| { "_DamageRecipient": "CreatureOrPlaneswalkerChosenAtRandom", "args": Permanents }
| { "_DamageRecipient": "EachPermanent", "args": Permanents }
| { "_DamageRecipient": "EachPlayer", "args": Players }
| { "_DamageRecipient": "EachableTarget" }
| { "_DamageRecipient": "Permanent", "args": Permanent }
| { "_DamageRecipient": "Player", "args": Player }
| { "_DamageRecipient": "PlayerOrPlaneswalkerPermanentIsAttacking", "args": Permanent }
| { "_DamageRecipient": "Ref_AnyTarget" }
| { "_DamageRecipient": "Ref_AnyTarget1" }
| { "_DamageRecipient": "Ref_AnyTarget2" }
| { "_DamageRecipient": "Ref_AnyTargets" }
| { "_DamageRecipient": "Ref_AnyTargets_1" }
| { "_DamageRecipient": "Ref_AnyTargets_2" }
| { "_DamageRecipient": "Ref_AnyTargets_3" }
| { "_DamageRecipient": "Ref_TargetPlayerOrPermanent" }
| { "_DamageRecipient": "TheChosenDamageRecipient" }
| { "_DamageRecipient": "Trigger_ThatRecipient" };
type DamageRecipients =
| { "_DamageRecipients": "EachPermanent", "args": Permanents }
| { "_DamageRecipients": "EachPlayer", "args": Players }
| { "_DamageRecipients": "Permanent", "args": Permanent }
| { "_DamageRecipients": "Ref_AnyTarget" };
type DamageRecipientsList =
| { "_DamageRecipientsList": "APermanent", "args": Permanents }
| { "_DamageRecipientsList": "APlayer", "args": Players }
| { "_DamageRecipientsList": "APlayerOrAPermanent", "args": [Players, Permanents] };
type DamageSource =
| { "_DamageSource": "Trigger_ThatPermanent" }
| { "_DamageSource": "ThisDamageSource" };
type DamageSources =
| { "_DamageSources": "And", "args": Array<DamageSources> }
| { "_DamageSources": "Or", "args": Array<DamageSources> }
| { "_DamageSources": "Other", "args": DamageSource }
| { "_DamageSources": "AnyDamageSource" }
| { "_DamageSources": "IsCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_DamageSources": "ManaValueIs", "args": Comparison }
| { "_DamageSources": "SharesAColorWithAColorOfManaSpendOnActivationCost" }
| { "_DamageSources": "IsNonCreatureType", "args": CreatureType }
| { "_DamageSources": "SharesAColorWithExiledCard", "args": CardInExile }
| { "_DamageSources": "IsCreatureType", "args": CreatureType }
| { "_DamageSources": "IsCardtype", "args": CardType }
| { "_DamageSources": "IsNonCardtype", "args": CardType }
| { "_DamageSources": "IsNotPermanentSource", "args": Permanent }
| { "_DamageSources": "IsNamed", "args": NameFilter }
| { "_DamageSources": "ControlledByAPlayer", "args": Players }
| { "_DamageSources": "IsColor", "args": Color };
type DamageToRecipients =
| { "_DamageToRecipients": "DamageToRecipients", "args": [GameNumber, DamageRecipient] };
type DeckBuildingAction =
| { "_DeckBuildingAction": "ChooseAColor", "args": ChoosableColor };
type DeckConstruction =
| { "_DeckConstruction": "CanBeYourCommander" }
| { "_DeckConstruction": "Partner" }
| { "_DeckConstruction": "PartnerCharacterSelect" }
| { "_DeckConstruction": "PartnerFatherAndSon" }
| { "_DeckConstruction": "PartnerFriendsForever" }
| { "_DeckConstruction": "PartnerSurvivors" }
| { "_DeckConstruction": "PartnerWith", "args": string }
| { "_DeckConstruction": "DoctorsCompanion" }
| { "_DeckConstruction": "ChooseABackground" }
| { "_DeckConstruction": "CanHaveAnyNumberOfThisCard" }
| { "_DeckConstruction": "CanHaveUptoNumberOfThisCard", "args": GameNumber }
| { "_DeckConstruction": "CardsCanBeOneAdditionalColor", "args": Cards }
| { "_DeckConstruction": "CanHaveAnyBasicLandCard" }
| { "_DeckConstruction": "ThisCardIsBanned" }
| { "_DeckConstruction": "RemoveFromDeckIfNotPlayingForAnte" };
type Direction =
| { "_Direction": "TheChosenDirection" };
type DistributedTarget =
| { "_DistributedTarget": "TargetPermanent", "args": Permanents }
| { "_DistributedTarget": "BetweenOneAndNumberTargetPermanents", "args": [GameNumber, Permanents] }
| { "_DistributedTarget": "AnyNumberOfTargetPermanents", "args": Permanents }
| { "_DistributedTarget": "NumberTargetPermanents", "args": [GameNumber, Permanents] }
| { "_DistributedTarget": "TargetPlayer", "args": Players }
| { "_DistributedTarget": "UptoNumberAnyTargets", "args": GameNumber }
| { "_DistributedTarget": "AnyNumberOfAnyTargets" }
| { "_DistributedTarget": "BetweenOneAndNumberAnyTargets", "args": GameNumber }
| { "_DistributedTarget": "UptoNumberTargetPermanents", "args": [GameNumber, Permanents] };
type Distribution =
| { "_Distribution": "DistributeNumberAmongAnyTargets", "args": GameNumber }
| { "_Distribution": "DistributeNumberAmongTargets", "args": GameNumber }
| { "_Distribution": "IfElse", "args": [Condition, Distribution, Distribution] };
type DoorInfo =
| { "_OracleCard": "DoorInfo", Name: string, Rules: Array<Rule>, ManaCost: Array<ManaSymbolX>, };
type DraftAction =
| { "_DraftAction": "DraftFaceUp" }
| { "_DraftAction": "RevealThisDraftedCard" }
| { "_DraftAction": "GuessNameOfNextCardAPlayerDraftsFromThisPackAndTheyRevealThatCard" }
| { "_DraftAction": "MayAddBoosterBackToDraft" }
| { "_DraftAction": "MayLookAtNextCraftDraftedFromThisPack" }
| { "_DraftAction": "NoteNumberOfCardsDraftedThisRound" }
| { "_DraftAction": "NotePlayerWhoPassedPackToYou" }
| { "_DraftAction": "PlayerToRightChoosesAColor_YouChooseAColor_PlayerToLeftChoosesAColor" }
| { "_DraftAction": "RevealAndNoteNameOfNextDraftedCard" };
type Dungeon =
| { "_OracleCard": "Dungeon", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, };
type DungeonType =
| "Undercity";
type EffectListItem =
| { "_EffectListItem": "BattlefieldEffect" } & SourcedRule
| { "_EffectListItem": "Effect" } & SourcedRule
| { "_EffectListItem": "Testcase" } & SourcedRule;
type Emblem =
| { "_Emblem": "OwnedByAPlayer", "args": Players }
| { "_Emblem": "ThisEmblem" };
type EnchantmentType =
| "Aura"
| "Background"
| "Cartouche"
| "Case"
| "Class"
| "Curse"
| "Plan"
| "Role"
| "Room"
| "Rune"
| "Saga"
| "Shard"
| "Shrine";
type EnterFlag =
| { "_EnterFlag": "EntersWithLayerEffectUntil", "args": [Array<LayerEffect>, Expiration] }
| { "_EnterFlag": "EntersAsFaceDownArtifactCreature", "args": [PT, CreatureType] }
| { "_EnterFlag": "EntersAsFaceDownCreatureWithAbilitiesAndNotedName", "args": [PT, Array<Rule>, NameFilter] }
| { "_EnterFlag": "EntersAsFaceDownLand", "args": LandType }
| { "_EnterFlag": "EntersAsNonAuraEnchantment" }
| { "_EnterFlag": "EntersAttachedToAPermanent", "args": Permanents }
| { "_EnterFlag": "EntersAttachedToPermanent", "args": Permanent }
| { "_EnterFlag": "EntersAttachedToPlayer", "args": Player }
| { "_EnterFlag": "EntersAttacking" }
| { "_EnterFlag": "EntersAttackingPlayer", "args": Player }
| { "_EnterFlag": "EntersAttackingPlayerOrPlaneswalkerControlledBy", "args": Player }
| { "_EnterFlag": "EntersBlockingAttacker", "args": Permanent }
| { "_EnterFlag": "EntersConverted" }
| { "_EnterFlag": "EntersFaceDown" }
| { "_EnterFlag": "EntersFlipped" }
| { "_EnterFlag": "EntersNormally" }
| { "_EnterFlag": "EntersTapped" }
| { "_EnterFlag": "EntersTransformed" }
| { "_EnterFlag": "EntersUnderAPlayersControl", "args": Players }
| { "_EnterFlag": "EntersUnderOwnersControl" }
| { "_EnterFlag": "EntersUnderPlayersControl", "args": Player }
| { "_EnterFlag": "EntersWithACounter", "args": CounterType }
| { "_EnterFlag": "EntersWithLayerEffect", "args": Array<LayerEffect> }
| { "_EnterFlag": "EntersWithNotedCounters" }
| { "_EnterFlag": "EntersWithNumberCounters", "args": [GameNumber, CounterType] }
| { "_EnterFlag": "EntersWithPerpetualEffect", "args": Array<PerpetualEffect> }
| { "_EnterFlag": "If", "args": [Condition, Array<EnterFlag>] }
| { "_EnterFlag": "IfCardPassesFilter", "args": [Cards, Array<EnterFlag>] }
| { "_EnterFlag": "IfPassesFilter", "args": [Permanents, Array<EnterFlag>] }
| { "_EnterFlag": "MayActions", "args": Array<EnterFlag> };
type EnterOrFaceUpAction =
| { "_EnterOrFaceUpAction": "MayActions", "args": Array<EnterOrFaceUpAction> }
| { "_EnterOrFaceUpAction": "EntersWithNumberCounters", "args": [GameNumber, CounterType] }
| { "_EnterOrFaceUpAction": "EnterAsACopyOfAPermanentUntil", "args": [Permanents, CopyEffects, Expiration] }
| { "_EnterOrFaceUpAction": "EntersWithPTOfChoice", "args": Array<PT> };
type EventPreventDamage =
| { "_EventPreventDamage": "Or", "args": Array<EventPreventDamage> }
| { "_EventPreventDamage": "ASpellOrAbilityWouldCauseASourceToDealDamageToRecipient", "args": [SpellsAndAbilities, DamageSources, SingleDamageRecipient] }
| { "_EventPreventDamage": "EachDamageWouldBeDealtToRecipient", "args": SingleDamageRecipient }
| { "_EventPreventDamage": "AnAmountOfDamageWouldBeDealtByASourceToRecipient", "args": [Comparison, DamageSources, SingleDamageRecipient] }
| { "_EventPreventDamage": "CombatDamageWouldBeDealt" }
| { "_EventPreventDamage": "CombatDamageWouldBeDealtByACreature", "args": Permanents }
| { "_EventPreventDamage": "CombatDamageWouldBeDealtByACreatureToASetOfRecipients", "args": [Permanents, DamageRecipientsList] }
| { "_EventPreventDamage": "CombatDamageWouldBeDealtByACreatureToARecipient", "args": [Permanents, DamageRecipientsList] }
| { "_EventPreventDamage": "CombatDamageWouldBeDealtByACreatureToRecipient", "args": [Permanents, SingleDamageRecipient] }
| { "_EventPreventDamage": "CombatDamageWouldBeDealtByCreature", "args": Permanent }
| { "_EventPreventDamage": "CombatDamageWouldBeDealtByCreatureToARecipient", "args": [Permanent, DamageRecipientsList] }
| { "_EventPreventDamage": "CombatDamageWouldBeDealtToARecipient", "args": DamageRecipientsList }
| { "_EventPreventDamage": "CombatDamageWouldBeDealtToRecipient", "args": SingleDamageRecipient }
| { "_EventPreventDamage": "DamageWouldBeDealtByAPermanent", "args": Permanents }
| { "_EventPreventDamage": "DamageWouldBeDealtByAPermanentToARecipient", "args": [Permanents, DamageRecipientsList] }
| { "_EventPreventDamage": "DamageWouldBeDealtByAPermanentToRecipient", "args": [Permanents, SingleDamageRecipient] }
| { "_EventPreventDamage": "DamageWouldBeDealtByASource", "args": DamageSources }
| { "_EventPreventDamage": "DamageWouldBeDealtByASourceToARecipient", "args": [DamageSources, DamageRecipientsList] }
| { "_EventPreventDamage": "DamageWouldBeDealtByASourceToRecipient", "args": [DamageSources, SingleDamageRecipient] }
| { "_EventPreventDamage": "DamageWouldBeDealtByASpell", "args": Spells }
| { "_EventPreventDamage": "DamageWouldBeDealtByASpellToARecipient", "args": [Spells, DamageRecipientsList] }
| { "_EventPreventDamage": "DamageWouldBeDealtByASpellToRecipient", "args": [Spells, SingleDamageRecipient] }
| { "_EventPreventDamage": "DamageWouldBeDealtByPermanent", "args": Permanent }
| { "_EventPreventDamage": "DamageWouldBeDealtByPermanentToRecipient", "args": [Permanent, SingleDamageRecipient] }
| { "_EventPreventDamage": "DamageWouldBeDealtByPermanentToARecipient", "args": [Permanent, DamageRecipientsList] }
| { "_EventPreventDamage": "DamageWouldBeDealtBySource", "args": SingleDamageSource }
| { "_EventPreventDamage": "DamageWouldBeDealtBySourceToRecipient", "args": [SingleDamageSource, SingleDamageRecipient] }
| { "_EventPreventDamage": "DamageWouldBeDealtBySpell", "args": Spell }
| { "_EventPreventDamage": "DamageWouldBeDealtToARecipient", "args": DamageRecipientsList }
| { "_EventPreventDamage": "DamageWouldBeDealtToRecipient", "args": SingleDamageRecipient }
| { "_EventPreventDamage": "DamageWouldBeDealtByAPlaneToARecipient", "args": [Planes, DamageRecipientsList] }
| { "_EventPreventDamage": "NoncombatDamageWouldBeDealtToARecipient", "args": DamageRecipientsList }
| { "_EventPreventDamage": "NoncombatDamageWouldBeDealtToRecipient", "args": SingleDamageRecipient };
type ExchangeOwnershipCard =
| { "_ExchangeOwnershipCard": "Ref_TargetPermanent" }
| { "_ExchangeOwnershipCard": "TheCardRevealedFromHandThisWay" }
| { "_ExchangeOwnershipCard": "TheFirstCardExiledThisWay" }
| { "_ExchangeOwnershipCard": "TheSecondCardExiledThisWay" }
| { "_ExchangeOwnershipCard": "ThisPermanent" };
type ExilableCost =
| { "_ExilableCost": "ACardOfTypeMilledThisWay", "args": CardsInLibrary }
| { "_ExilableCost": "Spell", "args": Spell }
| { "_ExilableCost": "ASpell", "args": Spells }
| { "_ExilableCost": "NumberCardsInASingleGraveyard", "args": [GameNumber, CardsInGraveyards, Players] }
| { "_ExilableCost": "ACardInGraveyards", "args": CardsInGraveyards }
| { "_ExilableCost": "AnyNumberOfCardsInGraveyards", "args": CardsInGraveyards }
| { "_ExilableCost": "AnyNumberOfGroupCardsInGraveyards", "args": [CardsInGraveyards, GroupFilter] }
| { "_ExilableCost": "CardInGraveyards", "args": CardInGraveyards }
| { "_ExilableCost": "EachCardInGraveyards", "args": CardsInGraveyards }
| { "_ExilableCost": "NumberCardsInGraveyards", "args": [GameNumber, CardsInGraveyards] }
| { "_ExilableCost": "NumberOrMoreCardsInGraveyards", "args": [GameNumber, CardsInGraveyards] }
| { "_ExilableCost": "CardInHand", "args": CardInHand }
| { "_ExilableCost": "ACardOfTypeFromPlayersHand", "args": [CardsInHand, Player] }
| { "_ExilableCost": "ACardFromHand" }
| { "_ExilableCost": "ACardOfTypeFromHand", "args": CardsInHand }
| { "_ExilableCost": "NumberCardsOfTypeFromHand", "args": [GameNumber, CardsInHand] }
| { "_ExilableCost": "PlayersHand", "args": Player }
| { "_ExilableCost": "TheTopCardOfLibrary" }
| { "_ExilableCost": "TheTopNumberCardsOfLibrary", "args": GameNumber }
| { "_ExilableCost": "Permanent", "args": Permanent }
| { "_ExilableCost": "EachPermanent", "args": Permanents }
| { "_ExilableCost": "APermanent", "args": Permanents }
| { "_ExilableCost": "NumberPermanents", "args": [GameNumber, Permanents] }
| { "_ExilableCost": "AnyNumberOfPermanents", "args": Permanents }
| { "_ExilableCost": "NumberOrMoreGroupPermanents", "args": [GameNumber, Permanents, GroupFilter] };
type Exilable =
| { "_Exilable": "NumberPermanentsOrCardsInHand", "args": [GameNumber, Permanents, CardsInHand] }
| { "_Exilable": "NumberPermanentsCardsInHandOrCardsInGraveyards", "args": [GameNumber, Permanents, CardsInHand, CardsInGraveyards] }
| { "_Exilable": "Spell", "args": Spell }
| { "_Exilable": "EachSpell", "args": Spells }
| { "_Exilable": "ACardOfTypeInEachPlayersGraveyard", "args": [CardsInGraveyards, Players] }
| { "_Exilable": "UptoNumberCardsInGraveyards", "args": [GameNumber, CardsInGraveyards] }
| { "_Exilable": "ACardInGraveyards", "args": CardsInGraveyards }
| { "_Exilable": "ACardInGraveyardsAtRandom", "args": CardsInGraveyards }
| { "_Exilable": "ACardInGraveyardsAtRandomInEachPlayersGraveyard", "args": [CardsInGraveyards, Players] }
| { "_Exilable": "AnyNumberOfCardsInGraveyards", "args": CardsInGraveyards }
| { "_Exilable": "CardInGraveyards", "args": CardInGraveyards }
| { "_Exilable": "EachCardInGraveyards", "args": CardsInGraveyards }
| { "_Exilable": "NumberCardsInGraveyards", "args": [GameNumber, CardsInGraveyards] }
| { "_Exilable": "NumberCardsInGraveyardsAtRandom", "args": [GameNumber, CardsInGraveyards] }
| { "_Exilable": "UptoOneCardInGraveyards", "args": CardsInGraveyards }
| { "_Exilable": "UptoOneCardOfEachCardTypeAmongCardsInGraveyards", "args": CardsInGraveyards }
| { "_Exilable": "UptoOneCardOfTypeInEachPlayersGraveyard", "args": [CardsInGraveyards, Players] }
| { "_Exilable": "ARandomCardFromPlayersHand", "args": Player }
| { "_Exilable": "CardInHand", "args": CardInHand }
| { "_Exilable": "ACardOfTypeFromPlayersHand", "args": [CardsInHand, Player] }
| { "_Exilable": "AnyNumberOfCardsFromHand" }
| { "_Exilable": "EachCardInHand", "args": CardsInHand }
| { "_Exilable": "EachPlayersHand", "args": Players }
| { "_Exilable": "ACardOfTypeFromEachPlayersHand", "args": [CardsInHand, Players] }
| { "_Exilable": "ACardFromHand" }
| { "_Exilable": "ACardFromHandAtRandom" }
| { "_Exilable": "ACardOfTypeFromHand", "args": CardsInHand }
| { "_Exilable": "NumberCardsFromHand", "args": GameNumber }
| { "_Exilable": "PlayersHand", "args": Player }
| { "_Exilable": "TheTopCardOfLibrary" }
| { "_Exilable": "TheTopNumberCardsOfLibrary", "args": GameNumber }
| { "_Exilable": "AllCardsFromLibrary" }
| { "_Exilable": "EachCardInLibrary", "args": CardsInLibrary }
| { "_Exilable": "TheBottomCardOfTypeInLibrary", "args": CardsInLibrary }
| { "_Exilable": "TheBottomNumberCardsOfLibrary", "args": GameNumber }
| { "_Exilable": "ACardFromPlayersLibraryAtRandom", "args": Player }
| { "_Exilable": "ACardOfTypeFromPlayersLibraryAtRandom", "args": [CardsInLibrary, Player] }
| { "_Exilable": "AllCardsFromPlayersLibrary", "args": Player }
| { "_Exilable": "AllCardsOfTypeFromPlayersLibrary", "args": [CardsInLibrary, Player] }
| { "_Exilable": "NumberCardsFromPlayersLibraryAtRandom", "args": [GameNumber, Player] }
| { "_Exilable": "TheBottomCardOfEachPlayersLibraries", "args": Players }
| { "_Exilable": "TheTopCardOfEachPlayersLibraries", "args": Players }
| { "_Exilable": "TheTopCardOfPlayersLibrary", "args": Player }
| { "_Exilable": "TheTopNumberCardsOfPlayersLibrary", "args": [GameNumber, Player] }
| { "_Exilable": "CardsFromTheTopOfLibraryUntilACardOfTypeIsExiled", "args": CardsInLibrary }
| { "_Exilable": "CardsFromTheTopOfLibraryUntilANumberOfCardsOfTypeAreExiled", "args": [GameNumber, CardsInLibrary] }
| { "_Exilable": "CardsFromTheTopOfLibraryUntilGroupCardsAreExiled", "args": GroupFilter }
| { "_Exilable": "Permanent", "args": Permanent }
| { "_Exilable": "EachPermanent", "args": Permanents }
| { "_Exilable": "APermanent", "args": Permanents }
| { "_Exilable": "NumberPermanents", "args": [GameNumber, Permanents] }
| { "_Exilable": "UptoOnePermanent", "args": Permanents }
| { "_Exilable": "AnyNumberOfPermanents", "args": Permanents };
type ExiledCardEffect =
| { "_ExiledCardEffect": "AddAbility", "args": Array<Rule> }
| { "_ExiledCardEffect": "AddAbilityIfItDoesntHaveIt", "args": Array<Rule> }
| { "_ExiledCardEffect": "IsPlotted" }
| { "_ExiledCardEffect": "IsForetold" }
| { "_ExiledCardEffect": "IsForetoldForCost", "args": Cost };
type ExileFlag =
| { "_ExileFlag": "ExilesIntoShuffledFaceDownPile" }
| { "_ExileFlag": "ExilesIntoFaceDownPile" }
| { "_ExileFlag": "ExilesIntoFaceUpPile" }
| { "_ExileFlag": "ExilesFaceDown" }
| { "_ExileFlag": "ExilesFaceUp" }
| { "_ExileFlag": "ExilesWithACounter", "args": CounterType }
| { "_ExileFlag": "ExilesWithNumberCounters", "args": [GameNumber, CounterType] }
| { "_ExileFlag": "Limited", "args": Expiration }
| { "_ExileFlag": "LimitedWithTriggerEnters", "args": [Expiration, Permanents, Actions] };
type Expiration =
| { "_Expiration": "Or", "args": Array<Expiration> }
| { "_Expiration": "ForAsLongAsCardIsExiled", "args": CardInExile }
| { "_Expiration": "AsLongAsPlaneIsFaceUp", "args": Plane }
| { "_Expiration": "DuringPlayersNextTurn", "args": Player }
| { "_Expiration": "DuringPlayersNextUntapStep", "args": Player }
| { "_Expiration": "DuringTheCombatPhaseCreatedThisWay" }
| { "_Expiration": "DuringTheExtraTurnCreatedThisWay" }
| { "_Expiration": "ForAsLongAsPermanentHasACounterOfTypeOnIt", "args": [Permanent, CounterType] }
| { "_Expiration": "ForAsLongAsPermanentRemainsAttachedToPermanent", "args": [Permanent, Permanent] }
| { "_Expiration": "ForAsLongAsPermanentRemainsFaceDown", "args": Permanent }
| { "_Expiration": "ForAsLongAsPermanentRemainsTapped", "args": Permanent }
| { "_Expiration": "UntilAPlayerBecomesTheMonarch", "args": Players }
| { "_Expiration": "UntilAPlayerCastsASpell", "args": [Players, Spells] }
| { "_Expiration": "UntilAPlayerExilesACardWithThisAbility", "args": Players }
| { "_Expiration": "UntilAPlayerIsNoLongerTheMonarch", "args": Players }
| { "_Expiration": "UntilAPlayerPlaneswalks", "args": Players }
| { "_Expiration": "UntilAPlayerRollsValue", "args": [Players, Comparison] }
| { "_Expiration": "UntilCardIsCastFromExile", "args": CardInExile }
| { "_Expiration": "UntilCardIsNoLongerExiled", "args": CardInExile }
| { "_Expiration": "UntilCardIsNoLongerInGraveyard", "args": CardInGraveyards }
| { "_Expiration": "UntilCardsAreNoLongerExiled", "args": CardsInExile }
| { "_Expiration": "UntilEndOfCombat" }
| { "_Expiration": "UntilEndOfGame" }
| { "_Expiration": "UntilEndOfNextTurn", "args": Player }
| { "_Expiration": "UntilEndOfTheNextTurn" }
| { "_Expiration": "UntilEndOfTurn" }
| { "_Expiration": "UntilItIsNoLongerEnchanted" }
| { "_Expiration": "UntilItIsNoLongerExiled" }
| { "_Expiration": "UntilItLeavesTheBattlefield" }
| { "_Expiration": "UntilNextUpkeep", "args": Player }
| { "_Expiration": "UntilPermanentChangesControl", "args": [Player, Permanent] }
| { "_Expiration": "UntilPermanentIsTurnedFaceDown", "args": Permanent }
| { "_Expiration": "UntilPermanentIsTurnedFaceUp", "args": Permanent }
| { "_Expiration": "UntilPermanentLeavesBattlefield", "args": Permanent }
| { "_Expiration": "UntilPermanentNoLongerPassesFilter", "args": [Permanent, Permanents] }
| { "_Expiration": "UntilPlayerExilesAnotherCardWithPermanent", "args": [Player, Permanent] }
| { "_Expiration": "UntilPlayerPaysMana", "args": [Player, Array<ManaSymbol>] }
| { "_Expiration": "UntilPlayerRollsValueWhileRollingToVisitAttractions", "args": [Player, Comparison] }
| { "_Expiration": "UntilPlayersNextEndStep", "args": Player }
| { "_Expiration": "UntilPlayersNextTurn", "args": Player }
| { "_Expiration": "UntilPlayersNextUntapStep", "args": Player }
| { "_Expiration": "UntilTheBeginningOfPlayersNextUpkeep", "args": Player }
| { "_Expiration": "UntilTheBeginningOfTheNextEndStep" }
| { "_Expiration": "UntilTheEndOfCombatOnPlayersNextTurn", "args": Player }
| { "_Expiration": "UntilTheEndOfPlayersNextTurn", "args": Player }
| { "_Expiration": "UntilTopCardOfPlayersLibraryChanges", "args": Player };
type FacedownProperties =
| { "_OracleCard": "Card", Name?: ObjectName, Typeline: ObjectTypeline, Rules: Array<SourcedRule>, CardPT?: ObjectPT, ColorIndicator?: Array<ColorIndicatorColor>, };
type FaceUpAction =
| { "_FaceUpAction": "MayActions", "args": Array<FaceUpAction> }
| { "_FaceUpAction": "PutCounters", "args": Array<FaceUpActionPutCounters> }
| { "_FaceUpAction": "AttachPermanentToAPermanent", "args": [Permanent, Permanents] };
type FaceUpActionPutCounters =
| { "_FaceUpActionPutCounters": "NumberCountersOfTypeOnPermanent", "args": [GameNumber, CounterType, Permanent] };
type FaceUpDraftEffect =
| { "_FaceUpDraftEffect": "DraftCardsAtRandomUntilNumberCardsHaveBeenDrafted_TurnThisDraftCardFaceDown", "args": GameNumber }
| { "_FaceUpDraftEffect": "AsDraftACardMayDraftAnAdditionalCardFromPack_PutThisDraftCardIntoThatBooster" }
| { "_FaceUpDraftEffect": "AsDraftACardMayDraftAnAdditionalCardFromPack_TurnThisDraftCardCardFaceDown_PassNextBoosterWithoutDrafting" }
| { "_FaceUpDraftEffect": "MayRemoveCardsFromDraftFaceDown" }
| { "_FaceUpDraftEffect": "MayRemoveCardsFromDraftFaceUp" }
| { "_FaceUpDraftEffect": "AsDraftACardOfType_MayRevealIt_NoteItsCreatureTypes_TurnThisDraftCardFaceDown", "args": Cards }
| { "_FaceUpDraftEffect": "AsDraftACardOfType_MayRevealIt_NoteItsName_TurnThisDraftCardFaceDown", "args": Cards }
| { "_FaceUpDraftEffect": "AsDraftACard_MayRevealIt_NoteItsName_TurnThisDraftCardFaceDown" }
| { "_FaceUpDraftEffect": "MayTurnThisDraftCardFaceDown_LookAtAnUnopenedBoosterPackOrABoosterPackNotBeingLookedAt" }
| { "_FaceUpDraftEffect": "MayTurnThisDraftCardFaceDown_LookAtNextCardDraftedByPlayerOfChoice" }
| { "_FaceUpDraftEffect": "LastCardInEachBoosterGoesToThisPlayer" }
| { "_FaceUpDraftEffect": "AfterDraftMayOfferATradeWithOtherPlayers" }
| { "_FaceUpDraftEffect": "MayTurnThisDraftCardFaceDown_DraftEachCardInCurrentBoosterPackInsteadOfDraftingCardsThisRound" };
type FlipInfo =
| { "_OracleCard": "FlipInfo", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, CardPT?: CardPT, };
type Flip =
| { "_OracleCard": "Flip", ManaCost: Array<ManaSymbolX>, Unflipped: FlipInfo, Flipped: FlipInfo, };
type FutureEventPreventDamage =
| { "_FutureEventPreventDamage": "NextDistributedDamageThisTurn" }
| { "_FutureEventPreventDamage": "NextAmountOfDamageThatWouldBeDealtThisTurnByPermanent", "args": [GameNumber, Permanent] }
| { "_FutureEventPreventDamage": "NextAmountOfDamageThatWouldBeDealtThisTurnBySourceToARecipient", "args": [GameNumber, SingleDamageSource, DamageRecipientsList] }
| { "_FutureEventPreventDamage": "NextAmountOfDamageThatWouldBeDealtThisTurnBySourceToRecipient", "args": [GameNumber, SingleDamageSource, SingleDamageRecipient] }
| { "_FutureEventPreventDamage": "NextAmountOfDamageThatWouldBeDealtThisTurnBySpellToRecipient", "args": [GameNumber, Spell, SingleDamageRecipient] }
| { "_FutureEventPreventDamage": "NextAmountOfDamageThatWouldBeDealtThisTurnToARecipient", "args": [GameNumber, DamageRecipientsList] }
| { "_FutureEventPreventDamage": "NextAmountOfDamageThatWouldBeDealtThisTurnToEachRecipient", "args": [GameNumber, MultipleDamageRecipients] }
| { "_FutureEventPreventDamage": "NextAmountOfDamageThatWouldBeDealtThisTurnToRecipient", "args": [GameNumber, SingleDamageRecipient] }
| { "_FutureEventPreventDamage": "NextTimeCombatDamageWouldBeDealtThisTurnByCreature", "args": Permanent }
| { "_FutureEventPreventDamage": "NextTimeCombatDamageWouldBeDealtThisTurnByCreatureToAnyNumberOfRecipients", "args": [Permanent, DamageRecipientsList] }
| { "_FutureEventPreventDamage": "NextTimeCombatDamageWouldBeDealtThisTurnByCreatureToRecipient", "args": [Permanent, SingleDamageRecipient] }
| { "_FutureEventPreventDamage": "NextTimeDamageWouldBeDealtThisTurnByAPermanentToRecipient", "args": [Permanents, SingleDamageRecipient] }
| { "_FutureEventPreventDamage": "NextTimeDamageWouldBeDealtThisTurnByPermanent", "args": Permanent }
| { "_FutureEventPreventDamage": "NextTimeDamageWouldBeDealtThisTurnByPermanentToRecipient", "args": [Permanent, SingleDamageRecipient] }
| { "_FutureEventPreventDamage": "NextTimeDamageWouldBeDealtThisTurnBySource", "args": SingleDamageSource }
| { "_FutureEventPreventDamage": "NextTimeDamageWouldBeDealtThisTurnBySourceToARecipient", "args": [SingleDamageSource, DamageRecipientsList] }
| { "_FutureEventPreventDamage": "NextTimeDamageWouldBeDealtThisTurnBySourceToRecipient", "args": [SingleDamageSource, SingleDamageRecipient] }
| { "_FutureEventPreventDamage": "NextTimeDamageWouldBeDealtThisTurnToRecipient", "args": SingleDamageRecipient };
type FuturePlayerEffect =
| { "_FuturePlayerEffect": "CanCastOnlyOneMoreSpellThisTurn" }
| { "_FuturePlayerEffect": "MayCastTheirNextSpellThisTurnWithoutPaying", "args": Spells }
| { "_FuturePlayerEffect": "MayCastTheirNextSpellThisTurnAsThoughItHadFlashWithEffects", "args": [Spells, Array<SpellEffect>] }
| { "_FuturePlayerEffect": "MayCastTheirNextSpellThisTurnAsThoughItHadFlash", "args": Spells }
| { "_FuturePlayerEffect": "NextCardPlayedThisCanCanBePlayedAsThoughItHadFlash", "args": Cards }
| { "_FuturePlayerEffect": "MayCastTheirNextSpellThisTurnForAlternateCost", "args": [Spells, Cost] };
type FutureReplacableEventWouldAdapt =
| { "_FutureReplacableEventWouldAdapt": "NextTimeCreatureAdaptsThisTurn", "args": Permanent };
type FutureReplacableEventWouldDealDamage =
| { "_FutureReplacableEventWouldDealDamage": "NextAmountOfDamageThatWouldBeDealtThisTurnBySourceToARecipient", "args": [GameNumber, SingleDamageSource, DamageRecipientsList] }
| { "_FutureReplacableEventWouldDealDamage": "NextAmountOfDamageThatWouldBeDealtThisTurnToRecipient", "args": [GameNumber, SingleDamageRecipient] }
| { "_FutureReplacableEventWouldDealDamage": "NextTimeCombatDamageWouldBeDealtThisTurnByCreature", "args": Permanent }
| { "_FutureReplacableEventWouldDealDamage": "NextTimeCombatDamageWouldBeDealtThisTurnByCreatureToRecipient", "args": [Permanent, SingleDamageRecipient] }
| { "_FutureReplacableEventWouldDealDamage": "NextTimeDamageWouldBeDealtThisTurnByASpellToRecipient", "args": [Spells, SingleDamageRecipient] }
| { "_FutureReplacableEventWouldDealDamage": "NextTimeDamageWouldBeDealtThisTurnByPermanentToARecipient", "args": [Permanent, DamageRecipientsList] }
| { "_FutureReplacableEventWouldDealDamage": "NextTimeDamageWouldBeDealtThisTurnBySource", "args": SingleDamageSource }
| { "_FutureReplacableEventWouldDealDamage": "NextTimeDamageWouldBeDealtThisTurnBySourceToRecipient", "args": [SingleDamageSource, SingleDamageRecipient] }
| { "_FutureReplacableEventWouldDealDamage": "NextTimeDamageWouldBeDealtThisTurnToARecipient", "args": DamageRecipientsList }
| { "_FutureReplacableEventWouldDealDamage": "NextTimeDamageWouldBeDealtThisTurnToRecipient", "args": SingleDamageRecipient }
| { "_FutureReplacableEventWouldDealDamage": "NextTimeDamageWouldBeDealtToRecipient", "args": SingleDamageRecipient };
type FutureReplacableEventWouldDestroy =
| { "_FutureReplacableEventWouldDestroy": "NextTimePermanentWouldBeDestroyedThisTurn", "args": Permanent };
type FutureReplacableEventWouldDraw =
| { "_FutureReplacableEventWouldDraw": "NextTimePlayerWouldDrawACardThisTurn", "args": Player };
type FutureReplacableEventWouldEnter =
| { "_FutureReplacableEventWouldEnter": "NextTimePermanentsWouldEnterTheBattlefield", "args": Permanents };
type FutureReplacableEventWouldLeaveTheBattlefield =
| { "_FutureReplacableEventWouldLeaveTheBattlefield": "PermanentWouldLeaveTheBattlefield", "args": Permanent };
type FutureReplacableEventWouldLoseTheGame =
| { "_FutureReplacableEventWouldLoseTheGame": "NextTimePlayerWouldLoseTheGameThisTurn", "args": Player };
type FutureReplacableEventWouldRollDice =
| { "_FutureReplacableEventWouldRollDice": "NextTimePlayerWouldRollDiceThisTurn", "args": Player };
type FutureReplacableEventWouldSetASchemeInMotion =
| { "_FutureReplacableEventWouldSetASchemeInMotion": "NextTimePlayerWouldSetASchemeInMotion", "args": Player };
type FutureSpell =
| { "_FutureSpell": "TheNextSpellPlayerCasts", "args": [Spells, Player] }
| { "_FutureSpell": "TheNextSpellPlayerCastsThisTurn", "args": [Spells, Player] }
| { "_FutureSpell": "TheNextSpellPlayerCastsFromTheirHandThisTurn", "args": [Spells, Player] };
type FutureTrigger =
| { "_FutureTrigger": "WhenAPlayerNextAttacksThisTurn", "args": Players }
| { "_FutureTrigger": "WhenPlayerNextActivatesAnAbilityThisTurn", "args": [Player, ActivatedAbilities] }
| { "_FutureTrigger": "AtTheBeginningOfTheNextUpkeep" }
| { "_FutureTrigger": "AtTheBeginningOfPlayersNextDeclareAttackersStep", "args": Player }
| { "_FutureTrigger": "WhenPermanentWinsAFightAgainstPermanent", "args": [Permanent, Permanent] }
| { "_FutureTrigger": "Or", "args": Array<FutureTrigger> }
| { "_FutureTrigger": "WhenAPlayerPlaneswalks", "args": Players }
| { "_FutureTrigger": "WhenPlayerNextActivatesAnAbilityBySpendingAnAmountOfMana", "args": [Player, ActivatedAbilities, Comparison] }
| { "_FutureTrigger": "WhenAPlayerNextActivatesAnAbilityThisTurn", "args": [Players, ActivatedAbilities] }
| { "_FutureTrigger": "AtTheBeginningOfPlayersDeclareAttackersStepOnTheirNextTurn", "args": Player }
| { "_FutureTrigger": "AtTheBeginningOfPlayersNextDrawStep", "args": Player }
| { "_FutureTrigger": "AtTheBeginningOfPlayersNextMainPhase", "args": Player }
| { "_FutureTrigger": "AtTheBeginningOfPlayersNextFirstMainPhase", "args": Player }
| { "_FutureTrigger": "AtTheBeginningOfPlayersFirstMainPhaseOfTheGame", "args": Player }
| { "_FutureTrigger": "AtNextEndOfCombatThisTurn" }
| { "_FutureTrigger": "AtTheEndOfThisCombat" }
| { "_FutureTrigger": "AtTheNextEndOfCombat" }
| { "_FutureTrigger": "AtTheBeginningOfTheEndStepOfTheExtraTurnCreatedThisWay" }
| { "_FutureTrigger": "AtTheBeginningOfPlayersEndStepNextTurn", "args": Player }
| { "_FutureTrigger": "AtTheBeginningOfPlayersFirstUpkeep", "args": Player }
| { "_FutureTrigger": "AtTheBeginningOfPlayersNextEndStep", "args": Player }
| { "_FutureTrigger": "AtTheBeginningOfPlayersNextUpkeep", "args": Player }
| { "_FutureTrigger": "AtTheBeginningOfTheFirstUpkeep" }
| { "_FutureTrigger": "AtTheBeginningOfTheNextCleanupStep" }
| { "_FutureTrigger": "AtTheBeginningOfTheNextCombatPhaseThisTurn" }
| { "_FutureTrigger": "AtTheBeginningOfTheNextCombat" }
| { "_FutureTrigger": "AtTheBeginningOfTheNextEndStep" }
| { "_FutureTrigger": "AtTheBeginningOfTheNextMainPhaseThisTurn" }
| { "_FutureTrigger": "AtTheBeginningOfTheNextTurnsUpkeep" }
| { "_FutureTrigger": "WhenPlayerCastsTheirNextSpellOrActivatesTheirNextAbilityThisTurn", "args": [Player, SpellsAndAbilities] }
| { "_FutureTrigger": "WhenPlayerCastsTheirNextSpellThisGame", "args": [Player, Spells] }
| { "_FutureTrigger": "WhenPlayerCastsTheirNextSpellThisTurn", "args": [Player, Spells] }
| { "_FutureTrigger": "WhenPlayerCastsTheirNextSpellFromTheirHandThisTurn", "args": [Player, Spells] }
| { "_FutureTrigger": "WhenAPermanentDies", "args": Permanents }
| { "_FutureTrigger": "WhenPermanentDies", "args": Permanent }
| { "_FutureTrigger": "WhenPermanentBecomesUntapped", "args": Permanent }
| { "_FutureTrigger": "WhenPermanentLeavesTheBattlefield", "args": Permanent }
| { "_FutureTrigger": "WhenAPermanentLeavesTheBattlefield", "args": Permanents }
| { "_FutureTrigger": "WhenPermanentIsPutIntoAPlayersGraveyard", "args": [Permanent, Players] }
| { "_FutureTrigger": "WhenPlayerLosesControlOfPermanent", "args": [Player, Permanent] };
type GameEffect =
| { "_GameEffect": "PowerUpAbilitiesCantBeActivated" }
| { "_GameEffect": "CardsCantEnterTheBattlefieldFromExile", "args": Cards }
| { "_GameEffect": "CreaturesCantBlock" }
| { "_GameEffect": "DamageCantBePrevented" }
| { "_GameEffect": "DefendingPlayersChooseCreaturesToDefendAttackersAtRandom" }
| { "_GameEffect": "PermanentCantPhaseIn", "args": Permanent }
| { "_GameEffect": "PermanentsCantPhaseIn", "args": Permanents }
| { "_GameEffect": "PermanentsTappedByPlayerForManaProduceColorlessInstead", "args": [Permanents, Players] }
| { "_GameEffect": "PlanarDieBlanksRollsAreChaos" }
| { "_GameEffect": "SchemesCantBeSetInMotion" }
| { "_GameEffect": "SpellsAndAbilitiesCantTargetPermanents", "args": [SpellsAndAbilities, Permanents] };
type GameNumber =
| { "_GameNumber": "AManaValueOfAnExiledCard", "args": CardsInExile }
| { "_GameNumber": "ANumberOfCardsInAPlayersHand", "args": Players }
| { "_GameNumber": "APlayerWouldMillAnyNumberOfCards_ThatMuch" }
| { "_GameNumber": "AmountOfExcessDamageDealtThisWay" }
| { "_GameNumber": "AmountOfExcessDamageDealtToPermanentThisTurn", "args": Permanent }
| { "_GameNumber": "AmountOfExcessDamageDealtToPermanentsThisWay", "args": Permanents }
| { "_GameNumber": "AmountOfGenericManaInSpellsManaCost", "args": Spell }
| { "_GameNumber": "AmountOfLifePaidThisWay" }
| { "_GameNumber": "AmountOfManaOfTypeSpentOnCumulativeUpkeep", "args": ManaSpent }
| { "_GameNumber": "AmountOfManaPaidThisWay" }
| { "_GameNumber": "AmountOfManaSpentToCastSpell", "args": Spell }
| { "_GameNumber": "AmountOfUnspentManaOfColorPlayerHas", "args": [Color, Player] }
| { "_GameNumber": "AmountOfUnspentManaPlayerHas", "args": Player }
| { "_GameNumber": "AsLoseUnspentMana_AmountOfUnspentMana" }
| { "_GameNumber": "BasePowerOfPermanent", "args": Permanent }
| { "_GameNumber": "CounterSpell_ManaValueOfCounteredSpell" }
| { "_GameNumber": "CurrentStake" }
| { "_GameNumber": "DamageDealtByResolvedSpell", "args": Spell }
| { "_GameNumber": "DamageDealtToAnyPlayerThisTurn", "args": Players }
| { "_GameNumber": "DamageDealtToPlayerThisTurn", "args": Player }
| { "_GameNumber": "DamageDealtToPlayerThisTurnByPermanents", "args": [Player, Permanents] }
| { "_GameNumber": "DifferenceBetween", "args": [GameNumber, GameNumber] }
| { "_GameNumber": "DistributedNumber" }
| { "_GameNumber": "DivideRoundedDown", "args": [GameNumber, GameNumber] }
| { "_GameNumber": "EachAdditionalManaCostPaid", "args": Array<ManaSymbol> }
| { "_GameNumber": "EachableNumber" }
| { "_GameNumber": "Emerge_ToughnessOfTheSacrificedCreature" }
| { "_GameNumber": "FlipACoinUntilLose_NumFlipsWon" }
| { "_GameNumber": "GreatestNumberOfPermanentsThatHaveCreatureTypeInCommon", "args": Permanents }
| { "_GameNumber": "HalfRoundedDown", "args": GameNumber }
| { "_GameNumber": "HalfRoundedUp", "args": GameNumber }
| { "_GameNumber": "HighestLifeTotalAmongPlayers", "args": Players }
| { "_GameNumber": "HighestManaValueAmongCardsMilledThisWay" }
| { "_GameNumber": "HighestNotedValueForPermanent", "args": Permanent }
| { "_GameNumber": "HighestNumberPlayerNotedForCardDuringDraft", "args": [Player, string] }
| { "_GameNumber": "Integer", "args": number }
| { "_GameNumber": "IntensityOfPermanent", "args": Permanent }
| { "_GameNumber": "IntensityOfSpell", "args": Spell }
| { "_GameNumber": "ItsManaValue" }
| { "_GameNumber": "LastNotedLifeTotalForPermanent", "args": Permanent }
| { "_GameNumber": "LifeGainedByPlayerThisTurn", "args": Player }
| { "_GameNumber": "LifeLostByPlayerThisTurn", "args": Player }
| { "_GameNumber": "LifeLostThisWay" }
| { "_GameNumber": "LifePaidWithVanguard", "args": SingleVanguard }
| { "_GameNumber": "LifeTotalOfPlayer", "args": Player }
| { "_GameNumber": "LifeTotalOfPlayerAsTurnBegan", "args": Player }
| { "_GameNumber": "LowestLifeTotalAmongPlayers", "args": Players }
| { "_GameNumber": "LoyaltyOfPermanent", "args": Permanent }
| { "_GameNumber": "ManaCostsOfCombatCreatures", "args": Permanents }
| { "_GameNumber": "ManaValueOfCardDiscardedByPlayerThisWay", "args": Player }
| { "_GameNumber": "ManaValueOfCardPutInGraveyard" }
| { "_GameNumber": "ManaValueOfCardPutInHandThisWay" }
| { "_GameNumber": "ManaValueOfDeadPermanent" }
| { "_GameNumber": "ManaValueOfExiled", "args": CardInExile }
| { "_GameNumber": "ManaValueOfGraveyardCard", "args": CardInGraveyards }
| { "_GameNumber": "ManaValueOfPermanent", "args": Permanent }
| { "_GameNumber": "ManaValueOfSpell", "args": Spell }
| { "_GameNumber": "ManaValueOfTheCardDiscardedThisWay" }
| { "_GameNumber": "ManaValueOfTheCardExiledThisWay" }
| { "_GameNumber": "ManaValueOfTheCardFoundThisWay" }
| { "_GameNumber": "ManaValueOfTheCardMilledThisWay" }
| { "_GameNumber": "ManaValueOfTheCardRevealedByPlayerThisWay", "args": Player }
| { "_GameNumber": "ManaValueOfTheCardRevealedThisWay" }
| { "_GameNumber": "ManaValueOfTheCardsRevealedByPlayersThisWay", "args": Players }
| { "_GameNumber": "ManaValueOfTheCardsRevealedThisWay" }
| { "_GameNumber": "ManaValueOfTheDiscardedCard" }
| { "_GameNumber": "ManaValueOfTheExiledCardUsedToCraftPermanent", "args": Permanent }
| { "_GameNumber": "ManaValueOfTheFoundCard" }
| { "_GameNumber": "ManaValueOfThePermanentSacrificedThisWay" }
| { "_GameNumber": "ManaValueOfThePermanentUnattachedThisWay" }
| { "_GameNumber": "ManaValueOfTheSacrificedPermanent" }
| { "_GameNumber": "ManaValueOfTheWebslungCreature" }
| { "_GameNumber": "ManaValueOfYourCommander" }
| { "_GameNumber": "MaxPermanentsControlledByAPlayer", "args": [Permanents, Players] }
| { "_GameNumber": "MaximumOf", "args": [GameNumber, GameNumber] }
| { "_GameNumber": "MinPermanentsControlledByAPlayer", "args": [Permanents, Players] }
| { "_GameNumber": "MinimumOf", "args": [GameNumber, GameNumber] }
| { "_GameNumber": "Minus", "args": [GameNumber, GameNumber] }
| { "_GameNumber": "Multiply", "args": [GameNumber, GameNumber] }
| { "_GameNumber": "NumCardTypesOfCardDiscardedThisWay" }
| { "_GameNumber": "NumCardsDiscardedThisWay" }
| { "_GameNumber": "NumCardsDrawnByPlayerThisTurn", "args": Player }
| { "_GameNumber": "NumCardsInExile", "args": CardsInExile }
| { "_GameNumber": "NumCardsInPlayersLibrary", "args": Player }
| { "_GameNumber": "NumCardsMilledIntoGraveyardThisWay", "args": Cards }
| { "_GameNumber": "NumCardsMilledThisWay", "args": Cards }
| { "_GameNumber": "NumCardsOfTypeDiscardedThisWay", "args": Cards }
| { "_GameNumber": "NumCardsOfTypeInPlayersLibrary", "args": [Cards, Player] }
| { "_GameNumber": "NumCardsPlayerCycledOrDiscardedThisTurn", "args": Player }
| { "_GameNumber": "NumCardsPlayerDiscardedThisTurn", "args": Player }
| { "_GameNumber": "NumCardsPlayerRemovedWithCardDuringDraft", "args": [Player, string] }
| { "_GameNumber": "NumCardsPutIntoGraveyardFromAnywhereThisTurn", "args": [Cards, Player] }
| { "_GameNumber": "NumCardsPutIntoLibraryThisWay" }
| { "_GameNumber": "NumCardsReturnedToHandThisWay" }
| { "_GameNumber": "NumCardsShuffledIntoLibraryThisWay" }
| { "_GameNumber": "NumCoinFlipsLost" }
| { "_GameNumber": "NumCoinFlipsWon" }
| { "_GameNumber": "NumColorManaSymbolsInCostsOfCardsInPlayersGraveyard", "args": [Color, Cards, Player] }
| { "_GameNumber": "NumColorManaSymbolsInCostsOfPermanent", "args": [Color, Permanent] }
| { "_GameNumber": "NumColorManaSymbolsInCostsOfPermanents", "args": [Color, Permanents] }
| { "_GameNumber": "NumColorsAmongPermanents", "args": Permanents }
| { "_GameNumber": "NumColorsManaSpentToCastEnteringPermanent" }
| { "_GameNumber": "NumColorsManaSpentToCastSelf" }
| { "_GameNumber": "NumColorsManaSpentToCastSpell", "args": Spell }
| { "_GameNumber": "NumColorsOfPermanent", "args": Permanent }
| { "_GameNumber": "NumCreaturesInPlayersParty", "args": Player }
| { "_GameNumber": "NumCreaturesOrPlaneswalkersThatDiedThisTurn", "args": Permanents }
| { "_GameNumber": "NumCreaturesPlayerAttackedWithThisTurn", "args": [Permanents, Player] }
| { "_GameNumber": "NumDifferentManaValueAmongCardsInPlayersGraveyard", "args": [Cards, Player] }
| { "_GameNumber": "NumDifferentManaValuesAmongCardsInExile", "args": CardsInExile }
| { "_GameNumber": "NumDifferentManaValuesAmongPermanents", "args": Permanents }
| { "_GameNumber": "NumDifferentlyNamedDungeonsPlayerHasComplete", "args": Player }
| { "_GameNumber": "NumDifferentlyPoweredCreaturesAmongPermanents", "args": Permanents }
| { "_GameNumber": "NumEnteredTheBattlefieldThisTurn", "args": Permanents }
| { "_GameNumber": "NumGraveyardCardsExiledThisWay" }
| { "_GameNumber": "NumGraveyardCardsOfTypeExiledThisWay", "args": Cards }
| { "_GameNumber": "NumGroupPermanents", "args": [Permanents, GroupFilter] }
| { "_GameNumber": "NumHandCardsExiledFaceDownThisWay" }
| { "_GameNumber": "NumHandCardsExiledThisWay" }
| { "_GameNumber": "NumLibraryCardsRevealedThisWay", "args": Cards }
| { "_GameNumber": "NumManaSymbolsInCostOfSpell", "args": [ManaSymbol, Spell] }
| { "_GameNumber": "NumPermanentsAttachedToDeadPermanent", "args": Permanents }
| { "_GameNumber": "NumPermanentsDestroyedThisWay", "args": Permanents }
| { "_GameNumber": "NumPermanentsDevouredByEnteringPermanent", "args": Permanents }
| { "_GameNumber": "NumPermanentsExiledThisWay" }
| { "_GameNumber": "NumPermanentsOfTypeExiledThisWay", "args": Permanents }
| { "_GameNumber": "NumPermanentsPhasedOutThisWay" }
| { "_GameNumber": "NumPermanentsShuffledIntoLibraryThisWayByPlayer", "args": Player }
| { "_GameNumber": "NumPlayers", "args": Players }
| { "_GameNumber": "NumPointsOfBushidoPermanentHas", "args": Permanent }
| { "_GameNumber": "NumSpellsCastByAnyPlayerBeforeSpellThisTurn", "args": [Spells, Players, Spell] }
| { "_GameNumber": "NumSpellsCastByAnyPlayerThisTurn", "args": [Spells, Players] }
| { "_GameNumber": "NumSpellsCastByPlayerBeforeSpellThisTurn", "args": [Spells, Player, Spell] }
| { "_GameNumber": "NumSpellsCastByPlayerThisTurn", "args": [Spells, Player] }
| { "_GameNumber": "NumSpellsCastThisTurn", "args": Spells }
| { "_GameNumber": "NumTimesCreatureHasMutated", "args": Permanent }
| { "_GameNumber": "NumTimesPaidMana" }
| { "_GameNumber": "NumTimesPermanentAttackedThisTurn", "args": Permanent }
| { "_GameNumber": "NumTimesPermanentRegeneratedThisTurn", "args": Permanent }
| { "_GameNumber": "NumTimesPlayerHasACastACommanderFromCommandZone", "args": Player }
| { "_GameNumber": "NumTimesPlayerHasCastACommanderFromCommandZone", "args": Player }
| { "_GameNumber": "NumTimesPlayerHasCastTheirCommanderFromCommandZone", "args": Player }
| { "_GameNumber": "NumTimesSpellWasKicked", "args": Spell }
| { "_GameNumber": "NumberOfBasicLandTypesAmongPermanents", "args": Permanents }
| { "_GameNumber": "NumberOfCardsDrawnThisWay" }
| { "_GameNumber": "NumberOfCardsOfTypeExiledThisWay", "args": Cards }
| { "_GameNumber": "NumberOfCardsPutIntoGraveyardThisWay" }
| { "_GameNumber": "NumberOfColorManaSymbolsInManaCostOfTheSacrificedPermanent", "args": Color }
| { "_GameNumber": "NumberOfColorsInPlayersCommandersColorIdentity", "args": Player }
| { "_GameNumber": "NumberOfCreatureTypesNotedByPermanent", "args": Permanent }
| { "_GameNumber": "NumberOfPermanentsSacrificedByPlayerThisTurn", "args": [Permanents, Player] }
| { "_GameNumber": "NumberOfPermanentsTappedThisWayByPlayer", "args": Player }
| { "_GameNumber": "NumberOfTimesThisAbilityHasResolvedThisTurn" }
| { "_GameNumber": "NumberOfTurnsPlayerHasBeguan", "args": Player }
| { "_GameNumber": "PermanentItTargets", "args": Permanents }
| { "_GameNumber": "PlayerDevotionTo", "args": [Player, Color] }
| { "_GameNumber": "PlayersChosenNumber", "args": Player }
| { "_GameNumber": "Plus", "args": [GameNumber, GameNumber] }
| { "_GameNumber": "Plus3", "args": [GameNumber, GameNumber, GameNumber] }
| { "_GameNumber": "Power", "args": [GameNumber, GameNumber] }
| { "_GameNumber": "PowerOfDeadPermanent" }
| { "_GameNumber": "PowerOfExiledCard", "args": CardInExile }
| { "_GameNumber": "PowerOfGraveyardCard", "args": CardInGraveyards }
| { "_GameNumber": "PowerOfPermanent", "args": Permanent }
| { "_GameNumber": "PowerOfSpell", "args": Spell }
| { "_GameNumber": "PowerOfTheCreatureItTargets" }
| { "_GameNumber": "PowerOfTheDevouredCreature" }
| { "_GameNumber": "PowerOfTheDiscardedCard" }
| { "_GameNumber": "PowerOfTheExiledCreature" }
| { "_GameNumber": "PowerOfTheRevealedCard" }
| { "_GameNumber": "PowerOfTheSacrificedCreature" }
| { "_GameNumber": "PowerOfTheSelectedPermanent" }
| { "_GameNumber": "SpeedOfPlayer", "args": Player }
| { "_GameNumber": "StartingLifeTotalOfPlayer", "args": Player }
| { "_GameNumber": "TenthRoundedUp", "args": GameNumber }
| { "_GameNumber": "ThatManyCounters" }
| { "_GameNumber": "TheAmountOfColorManaSpentOnX", "args": ManaSymbol }
| { "_GameNumber": "TheAmountOfDamageDealtThisWay" }
| { "_GameNumber": "TheAmountOfDamageDealtToPermanentThisTurn", "args": Permanent }
| { "_GameNumber": "TheAmountOfDamageDealtToPermanentThisTurnBySources", "args": [Permanent, DamageSources] }
| { "_GameNumber": "TheAmountOfDamagePreventedThisWay" }
| { "_GameNumber": "TheAmountOfEnergyPaidOrLostByPlayersThisTurn", "args": Players }
| { "_GameNumber": "TheAmountOfEnergyPaidThisWay" }
| { "_GameNumber": "TheAmountOfEnergyPlayerHas", "args": Player }
| { "_GameNumber": "TheAmountOfManaFromATreasureSpentToActivateThisAbility" }
| { "_GameNumber": "TheAmountOfManaFromATreasureSpentToCastSpell", "args": Spell }
| { "_GameNumber": "TheAmountOfManaFromPermanentsSpentToCastSpell", "args": [Permanents, Spell] }
| { "_GameNumber": "TheAmountOfManaFromSourcesSpentToCastIt", "args": ManaSources }
| { "_GameNumber": "TheAmountOfManaLostThisWay" }
| { "_GameNumber": "TheAmountOfSnowManaSpentToCastSpell", "args": Spell }
| { "_GameNumber": "TheChosenNumber" }
| { "_GameNumber": "TheClampedAmountOfDamageDealtThisWay" }
| { "_GameNumber": "TheDiceResult" }
| { "_GameNumber": "TheFirstDiceResult" }
| { "_GameNumber": "TheGreatestAmongOfDamageDealtByASourceToAPlayerOrAPermanentThisTurn", "args": [DamageSources, Players, Permanents] }
| { "_GameNumber": "TheGreatestManaValueAmongCardsInPlayersHand", "args": [CardsInHand, Player] }
| { "_GameNumber": "TheGreatestManaValueAmongExiledCards", "args": CardsInExile }
| { "_GameNumber": "TheGreatestManaValueAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheGreatestManaValueAmongSpellsCastThisTurn", "args": Spells }
| { "_GameNumber": "TheGreatestManaValueAmongTheCardsDiscardedThisWay" }
| { "_GameNumber": "TheGreatestManaValueAmongTheCardsThatLeftTheGraveyardThisWay" }
| { "_GameNumber": "TheGreatestManaValueOfACommanderInTheCommandZoneOrOnTheBattlefield", "args": Commanders }
| { "_GameNumber": "TheGreatestNumberOfCardsDiscardedThisWay" }
| { "_GameNumber": "TheGreatestNumberOfCardsDrawnByAPlayerThisTurn", "args": Players }
| { "_GameNumber": "TheGreatestNumberOfPermanentsControlledAmongPlayers", "args": [Permanents, Players] }
| { "_GameNumber": "TheGreatestNumberOfStoredDiceResultsThatAreEqual" }
| { "_GameNumber": "TheGreatestPowerAmongCardsInPlayersGraveyard", "args": [Cards, Players] }
| { "_GameNumber": "TheGreatestPowerAmongCardsPutIntoGraveyardThisWay", "args": Cards }
| { "_GameNumber": "TheGreatestPowerAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheGreatestPowerAmongPermanentsAndCardsInPlayersGraveyard", "args": [Permanents, Cards, Player] }
| { "_GameNumber": "TheGreatestPowerAmongPermanentsAsSpellWasCast", "args": Permanents }
| { "_GameNumber": "TheGreatestPowerOrToughnessAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheGreatestToughnessAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheHighestLifeTotalAmongPlayers", "args": Players }
| { "_GameNumber": "TheHighestManaValueAmongCardsInPlayersGraveyard", "args": [Cards, Player] }
| { "_GameNumber": "TheHighestManaValueAmongCardsInPlayersHand", "args": [Cards, Player] }
| { "_GameNumber": "TheHighestManaValueAmongCardsInPlayersLibrary", "args": [Cards, Player] }
| { "_GameNumber": "TheHighestManaValueAmongGraveyardCards", "args": CardsInGraveyards }
| { "_GameNumber": "TheHighestManaValueAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheHighestManaValueAmongPermanentsOrCardsInTheCommandZone", "args": Commanders }
| { "_GameNumber": "TheHighestNumberChosen" }
| { "_GameNumber": "TheHighestNumberOfCardsInHandAmongPlayers", "args": Players }
| { "_GameNumber": "TheHighestSpeedAmongPlayers", "args": Players }
| { "_GameNumber": "TheLeastPowerAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheLeastToughnessAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheLifePaid" }
| { "_GameNumber": "TheLowestNumberOfCardsInHandAmongPlayers", "args": Players }
| { "_GameNumber": "TheLowestNumberOfPermanentsControlledAmongPlayers", "args": [Permanents, Players] }
| { "_GameNumber": "TheManaValueMinusTheManaSpentOnSpell", "args": Spell }
| { "_GameNumber": "TheManaValueOfCommander", "args": Commander }
| { "_GameNumber": "TheManaValueOfTheCardDiscoveredThisWay" }
| { "_GameNumber": "TheNotedNumber" }
| { "_GameNumber": "TheNumberChosenForPermanent", "args": Permanent }
| { "_GameNumber": "TheNumberChosenThisWay" }
| { "_GameNumber": "TheNumberOfAbilitiesAmongPermanents", "args": [Array<CheckHasable>, Permanents] }
| { "_GameNumber": "TheNumberOfAttractionsPlayerHasVisitedThisTurn", "args": Player }
| { "_GameNumber": "TheNumberOfCardTypesAmongCardsPutInGraveyardThisWay" }
| { "_GameNumber": "TheNumberOfCardTypesAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheNumberOfCardTypesAmongSpellsCastThisTurn", "args": Spells }
| { "_GameNumber": "TheNumberOfCardTypesAmongThePermanentsSacrificedThisTurn" }
| { "_GameNumber": "TheNumberOfCardTypesItSharesWithAnyExiledCard", "args": CardsInExile }
| { "_GameNumber": "TheNumberOfCardTypesPermanentHas", "args": Permanent }
| { "_GameNumber": "TheNumberOfCardsDiscardedByPlayerThisWay", "args": Player }
| { "_GameNumber": "TheNumberOfCardsInHandExiledThisWay" }
| { "_GameNumber": "TheNumberOfCardsInHandRevealedByPlayerThisWay", "args": Player }
| { "_GameNumber": "TheNumberOfCardsInHandRevealedThisWay" }
| { "_GameNumber": "TheNumberOfCardsInHandRevealedThisWayThatShareAManaValue" }
| { "_GameNumber": "TheNumberOfCardsInPlayersGraveyardThatWerePutThereFromTheBattlefieldThisTurn", "args": [Cards, Player] }
| { "_GameNumber": "TheNumberOfCardsInPlayersHand", "args": Player }
| { "_GameNumber": "TheNumberOfCardsManifestedThisWay" }
| { "_GameNumber": "TheNumberOfCardsOfTypeInPlayersHand", "args": [Cards, Player] }
| { "_GameNumber": "TheNumberOfCardsOfTypeRevealedFromHandThisWay", "args": Cards }
| { "_GameNumber": "TheNumberOfCardsPlayerDiscardedThisWay", "args": Player }
| { "_GameNumber": "TheNumberOfCardsPlayerShuffledIntoLibraryThisWay", "args": Player }
| { "_GameNumber": "TheNumberOfCardsPutIntoAGraveyardThisWay", "args": CardsInGraveyards }
| { "_GameNumber": "TheNumberOfCardsPutIntoHandThisWay" }
| { "_GameNumber": "TheNumberOfCardsReturnedToTheBattlefieldThisWay" }
| { "_GameNumber": "TheNumberOfCardsScryedOnTopOfLibraryThisWay" }
| { "_GameNumber": "TheNumberOfCardsThatWerePutIntoAPlayersLibraryFromTheirHandOrLibraryThisTurn", "args": Players }
| { "_GameNumber": "TheNumberOfCardtypesAmongCardsDiscardedThisWay" }
| { "_GameNumber": "TheNumberOfCardtypesAmongGraveyardCards", "args": CardsInGraveyards }
| { "_GameNumber": "TheNumberOfChosenColorsItIs" }
| { "_GameNumber": "TheNumberOfChosenColorsSpellIs", "args": Spell }
| { "_GameNumber": "TheNumberOfCoinsThatCameUpHeads" }
| { "_GameNumber": "TheNumberOfColorsAmongPermanentsAndSpellsCastThisTurn", "args": [Permanents, Spells] }
| { "_GameNumber": "TheNumberOfColorsAmongTheCardsUsedToCraftPermanent", "args": Permanent }
| { "_GameNumber": "TheNumberOfColorsOfManaSpentToCastSpell", "args": Spell }
| { "_GameNumber": "TheNumberOfColorsOfTheSacrificedPermanent" }
| { "_GameNumber": "TheNumberOfColorsSpellIs", "args": Spell }
| { "_GameNumber": "TheNumberOfCounterTypesAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheNumberOfCountersOfTypeMovedThisWay", "args": CounterType }
| { "_GameNumber": "TheNumberOfCountersOfTypeOnPlane", "args": [CounterType, Plane] }
| { "_GameNumber": "TheNumberOfCountersOfTypeOnScheme", "args": [CounterType, SingleScheme] }
| { "_GameNumber": "TheNumberOfCountersOfTypeOnSpell", "args": [CounterType, Spell] }
| { "_GameNumber": "TheNumberOfCountersOfTypeOnVanguard", "args": [CounterType, SingleVanguard] }
| { "_GameNumber": "TheNumberOfCountersOfTypePlayersHavePutOnPermanentsThisTurn", "args": [CounterType, Players, Permanents] }
| { "_GameNumber": "TheNumberOfCountersOfTypePutOnPermanentsThisTurn", "args": [CounterType, Permanents] }
| { "_GameNumber": "TheNumberOfCountersOfTypeRemovedFromPermanentsThisTurn", "args": [CounterType, Permanents] }
| { "_GameNumber": "TheNumberOfCountersPlayersHavePutOnPermanentsThisTurn", "args": [Players, Permanents] }
| { "_GameNumber": "TheNumberOfCountersPutOnPermanentsThisTurn", "args": Permanents }
| { "_GameNumber": "TheNumberOfCountersPutThisWay" }
| { "_GameNumber": "TheNumberOfCountersRemovedThisWay" }
| { "_GameNumber": "TheNumberOfCreatureTypesAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheNumberOfCreaturesGoadedThisWay" }
| { "_GameNumber": "TheNumberOfCreaturesThatAttackedThisTurn", "args": Permanents }
| { "_GameNumber": "TheNumberOfCreaturesThatConvokedPermanent", "args": Permanent }
| { "_GameNumber": "TheNumberOfCreaturesThatDealtCombatDamageToAPlayer", "args": [Permanents, Players] }
| { "_GameNumber": "TheNumberOfDiceResults", "args": Comparison }
| { "_GameNumber": "TheNumberOfDifferentColorPairsAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheNumberOfDifferentDiceResults" }
| { "_GameNumber": "TheNumberOfDifferentManaCostsAmongCardsInPlayersGraveyard", "args": [Cards, Player] }
| { "_GameNumber": "TheNumberOfGraveyardCards", "args": CardsInGraveyards }
| { "_GameNumber": "TheNumberOfLettersInNameStickersOnPermanent", "args": [Letter, Permanent] }
| { "_GameNumber": "TheNumberOfLibraryCardsExiledThisWay" }
| { "_GameNumber": "TheNumberOfLibraryCardsOfTypeExiledThisWay", "args": Cards }
| { "_GameNumber": "TheNumberOfLibraryCardsRevealedThisWay" }
| { "_GameNumber": "TheNumberOfManaSymbolsInManaCostOfSpell", "args": Spell }
| { "_GameNumber": "TheNumberOfNameStickersOnPermanent", "args": Permanent }
| { "_GameNumber": "TheNumberOfNameStickersOnPermanentThatBeginWithLetter", "args": [Permanent, Letter] }
| { "_GameNumber": "TheNumberOfNameStickersOnPermanentWithLength", "args": [Permanent, Comparison] }
| { "_GameNumber": "TheNumberOfOtherCardsInPlayersGraveyard", "args": [CardInGraveyards, Cards, Player] }
| { "_GameNumber": "TheNumberOfPermanentCardsReturnedToPlayersHandThisWay", "args": Player }
| { "_GameNumber": "TheNumberOfPermanentTypesAmongGraveyardCards", "args": CardsInGraveyards }
| { "_GameNumber": "TheNumberOfPermanentsDealtDamageThisWay", "args": Permanents }
| { "_GameNumber": "TheNumberOfPermanentsExiledThisTurn", "args": Permanents }
| { "_GameNumber": "TheNumberOfPermanentsGainedControlOfThisWay" }
| { "_GameNumber": "TheNumberOfPermanentsOfTypeSacrificedThisWay", "args": Permanents }
| { "_GameNumber": "TheNumberOfPermanentsOnTheBattlefield", "args": Permanents }
| { "_GameNumber": "TheNumberOfPermanentsOnTheBattlefieldAsSpellWasCast", "args": Permanents }
| { "_GameNumber": "TheNumberOfPermanentsOnTheBattlefieldAtBeginningOfTurn", "args": Permanents }
| { "_GameNumber": "TheNumberOfPermanentsPutIntoAPlayersGraveyardThisTurn", "args": [Permanents, Players] }
| { "_GameNumber": "TheNumberOfPermanentsPutIntoAPlayersGraveyardThisWay", "args": [Permanents, Players] }
| { "_GameNumber": "TheNumberOfPermanentsPutIntoPlayersGraveyardThisTurn", "args": [Permanents, Player] }
| { "_GameNumber": "TheNumberOfPermanentsPutOntoTheBattlefieldThisWay", "args": Permanents }
| { "_GameNumber": "TheNumberOfPermanentsReturnedToHandThisWay" }
| { "_GameNumber": "TheNumberOfPermanentsSacrificedAsPermenantEnteredBattlefield", "args": [Permanents, Permanent] }
| { "_GameNumber": "TheNumberOfPermanentsSacrificedThisTurn", "args": Permanents }
| { "_GameNumber": "TheNumberOfPermanentsSacrificedThisWay" }
| { "_GameNumber": "TheNumberOfPermanentsTappedThisWay" }
| { "_GameNumber": "TheNumberOfPermanentsThatDiedThisWay", "args": Permanents }
| { "_GameNumber": "TheNumberOfPermanentsThatHadCountersPutOnItThisWay" }
| { "_GameNumber": "TheNumberOfPermanentsThatLeftTheBattlefieldUnderPlayersControlThisTurn", "args": [Permanents, Player] }
| { "_GameNumber": "TheNumberOfPlayersAttackedByPlayerThisCombat", "args": [Players, Player] }
| { "_GameNumber": "TheNumberOfPlayersThatDidntPayCost" }
| { "_GameNumber": "TheNumberOfPlayersThatHaveLostTheGame" }
| { "_GameNumber": "TheNumberOfPlayersThatPaidCost" }
| { "_GameNumber": "TheNumberOfPlayersWhoTookAnActionThisWay" }
| { "_GameNumber": "TheNumberOfRepeatedCostsNotPaid" }
| { "_GameNumber": "TheNumberOfRepeatedCostsNotPaidByPlayer", "args": Player }
| { "_GameNumber": "TheNumberOfSpellsAndAbilitiesCounteredThisWay" }
| { "_GameNumber": "TheNumberOfSpellsCastByAnyPlayerSinceTheBeginningOfPlayersLastTurn", "args": [Spells, Players, Player] }
| { "_GameNumber": "TheNumberOfSpellsCounteredThisWay" }
| { "_GameNumber": "TheNumberOfSpellsOrAbilitiesThatCausedAnyNumberOfPlayersToGuessOrToGroupCardsOrPermanentsIntoAPileThisTurn", "args": [SpellsAndAbilities, Players] }
| { "_GameNumber": "TheNumberOfSubtypesPermanentHas", "args": Permanent }
| { "_GameNumber": "TheNumberOfSupertypesPermanentHas", "args": Permanent }
| { "_GameNumber": "TheNumberOfTimesCreatureAttackedThisGame", "args": Permanent }
| { "_GameNumber": "TheNumberOfTimesModeChosenForSpell", "args": Spell }
| { "_GameNumber": "TheNumberOfTimesPermanentWasKicked", "args": Permanent }
| { "_GameNumber": "TheNumberOfTimesPlayerHasDecendedThisTurn", "args": Player }
| { "_GameNumber": "TheNumberOfTokensCreatedThisWay" }
| { "_GameNumber": "TheNumberOfTurnsPlayerHasBegunSinceItWasForetold" }
| { "_GameNumber": "TheNumberOfUniqueVowelsOnNameSticker", "args": NameStickerFilter }
| { "_GameNumber": "TheNumberOfUnlockedDoorsAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheNumberOfVotesForWord", "args": string }
| { "_GameNumber": "TheNumberOfVotesReceivedByPermanent", "args": Permanent }
| { "_GameNumber": "TheNumberOfVotesReceivedByPlayer", "args": Player }
| { "_GameNumber": "TheSecondDiceResult" }
| { "_GameNumber": "TheTotalAmountOfManaPaidThisWay" }
| { "_GameNumber": "TheTotalManaValueOfSpellsCastThisTurn", "args": Spells }
| { "_GameNumber": "TheTotalManaValueOfThePermanentsThisSpellTargets" }
| { "_GameNumber": "TheTotalNumberOfCardsDrawnByPlayesThisTurn", "args": Players }
| { "_GameNumber": "TheTotalNumberOfCardsInPlayersHands", "args": Players }
| { "_GameNumber": "TheTotalNumberOfColorManaSymbolsInManaCostsOfTheCardsInHandRevealedThisWay", "args": Color }
| { "_GameNumber": "TheTotalNumberOfColorManaSymbolsInManaCostsOfTheLibraryCardsRevealedThisWay", "args": Color }
| { "_GameNumber": "TheTotalNumberOfCountersAmongPermanents", "args": Permanents }
| { "_GameNumber": "TheTotalNumberOfCountersAmongPlayers", "args": Players }
| { "_GameNumber": "TheTotalNumberOfCountersOfTypeAmongCardsInExile", "args": [CounterType, CardsInExile] }
| { "_GameNumber": "TheTotalNumberOfCountersOfTypeAmongCardsInGraveyards", "args": [CounterType, CardsInGraveyards] }
| { "_GameNumber": "TheTotalNumberOfCountersOfTypeAmongPermanents", "args": [CounterType, Permanents] }
| { "_GameNumber": "TheTotalNumberOfCountersOfTypeAmongPlayers", "args": [CounterType, Players] }
| { "_GameNumber": "TheTotalNumberOfTokensPlayersCreatedThisTurn", "args": [Permanents, Players] }
| { "_GameNumber": "TheTotalOfTheDiceResults" }
| { "_GameNumber": "TheTotalPowerOfAllStickersOnPermanents", "args": Permanents }
| { "_GameNumber": "TheTotalPowerOfPermanentsThatDiedThisTurn", "args": Permanents }
| { "_GameNumber": "TheTotalPowerOfThePermanentsSacrificedThisWay" }
| { "_GameNumber": "TheTotalToughnessOfAllStickersOnPermanents", "args": Permanents }
| { "_GameNumber": "TheWinningBid" }
| { "_GameNumber": "ThirdRoundedUp", "args": GameNumber }
| { "_GameNumber": "Thrice", "args": GameNumber }
| { "_GameNumber": "TotalLifeLostByPlayersThisTurn", "args": Players }
| { "_GameNumber": "TotalManaValueOfCardsInPlayersGraveyard", "args": [Cards, Player] }
| { "_GameNumber": "TotalManaValueOfEachPermanentDestroyedThisWay", "args": Permanents }
| { "_GameNumber": "TotalManaValueOfExiledCards", "args": CardsInExile }
| { "_GameNumber": "TotalManaValueOfGraveyardCards", "args": CardsInGraveyards }
| { "_GameNumber": "TotalManaValueOfMilledCards" }
| { "_GameNumber": "TotalManaValueOfPermanents", "args": Permanents }
| { "_GameNumber": "TotalManaValueOfSpells", "args": Spells }
| { "_GameNumber": "TotalManaValueOfTheCardsDiscardedThisWay" }
| { "_GameNumber": "TotalManaValueOfTheCardsRevealedThisWay" }
| { "_GameNumber": "TotalNoncombatDamageDealtToPlayersThisTurn", "args": Players }
| { "_GameNumber": "TotalPowerOfExiledCards", "args": CardsInExile }
| { "_GameNumber": "TotalPowerOfPermanents", "args": Permanents }
| { "_GameNumber": "TotalPowerOfPermanentsExiledThisWay", "args": Permanents }
| { "_GameNumber": "TotalToughnessOfExiledCards", "args": CardsInExile }
| { "_GameNumber": "TotalToughnessOfPermanents", "args": Permanents }
| { "_GameNumber": "ToughnessOfCardInHand", "args": CardInHand }
| { "_GameNumber": "ToughnessOfCreatureDestroyedThisWay" }
| { "_GameNumber": "ToughnessOfCreaturePutOnBattlefieldThisWay" }
| { "_GameNumber": "ToughnessOfCreatureSacrificedThisWay" }
| { "_GameNumber": "ToughnessOfDeadPermanent" }
| { "_GameNumber": "ToughnessOfExiledCard", "args": CardInExile }
| { "_GameNumber": "ToughnessOfGraveyardCard", "args": CardInGraveyards }
| { "_GameNumber": "ToughnessOfPermanent", "args": Permanent }
| { "_GameNumber": "ToughnessOfTheExiledCreature" }
| { "_GameNumber": "ToughnessOfTheRevealedCard" }
| { "_GameNumber": "ToughnessOfTheSacrificedCreature" }
| { "_GameNumber": "ToxicValueOfPermanent", "args": Permanent }
| { "_GameNumber": "TriggerTheDiceResult" }
| { "_GameNumber": "Trigger_AmountOfCards" }
| { "_GameNumber": "Trigger_AmountOfCreatures" }
| { "_GameNumber": "Trigger_AmountOfDamageDealt" }
| { "_GameNumber": "Trigger_AmountOfDamagePrevented" }
| { "_GameNumber": "Trigger_AmountOfExcessDamage" }
| { "_GameNumber": "Trigger_AmountOfLifeGained" }
| { "_GameNumber": "Trigger_AmountOfLifeLost" }
| { "_GameNumber": "Trigger_DiscoverValue" }
| { "_GameNumber": "Trigger_ManaValueOfTheSacrificedPermanent" }
| { "_GameNumber": "Trigger_NumberOfCreatures" }
| { "_GameNumber": "Trigger_NumberOfPlayersBeingAttacked" }
| { "_GameNumber": "Trigger_ThatMuch" }
| { "_GameNumber": "Trigger_TheNumberOfCardsOfTypeMilledThisWay", "args": Cards }
| { "_GameNumber": "Trigger_ValueXOfThatSpell" }
| { "_GameNumber": "Twice", "args": GameNumber }
| { "_GameNumber": "ValueX" }
| { "_GameNumber": "WhenAPermanentEntersTheBattlefield_AmountOfManaFromAPermanentSpentToCast", "args": Permanents }
| { "_GameNumber": "WhenAPermanentEntersTheBattlefield_AmountOfManaFromTreasureSpentToCast" }
| { "_GameNumber": "WhenAPermanentEntersTheBattlefield_AmountOfManaOfTypeSpentToCast", "args": Array<ManaProduceSymbol> }
| { "_GameNumber": "WhenAPermanentEntersTheBattlefield_AmountOfManaSpentToCast" }
| { "_GameNumber": "WhenAPermanentEntersTheBattlefield_NumberOfColorsOfManaSpentToCast" }
| { "_GameNumber": "WhenAPlayerCastsASpell_ManaValueOfThatSpell" }
| { "_GameNumber": "WhenAPlayerCastsASpell_ThatSpellX" }
| { "_GameNumber": "WhenAPlayerDiscardsCardsForTheFirstTimeEachTurn_AmountOfCardsDiscarded" }
| { "_GameNumber": "WhenAPlayerPaysLife_AmountOfLifePaid" }
| { "_GameNumber": "WhenASpellOrAbilityExilesAnyNumberOfPermanents_AmountOfPermanents" }
| { "_GameNumber": "WhenAnyNumberOfCreaturesDealCombatDamageToAnyNumberOfPlayers_AmountOfOpponentsDealtDamage" }
| { "_GameNumber": "WhenAnyNumberOfPermanentEnterTheBattlefieldUnderControl_AmountOfPermanents" }
| { "_GameNumber": "WhenPermanentsDealDamageToPlayers_NumPlayersDealtDamage" }
| { "_GameNumber": "WouldCreateTokens_NumberTokens" }
| { "_GameNumber": "WouldDealDamage_ThatMuchDamage" }
| { "_GameNumber": "WouldDrawACard_ThatMany" }
| { "_GameNumber": "WouldGainLife_LifeAmount" }
| { "_GameNumber": "WouldLoseLife_ThatMuch" }
| { "_GameNumber": "WouldPayLife_ThatMuch" }
| { "_GameNumber": "WouldScry_ThatMuch" }
| { "_GameNumber": "X_From_Casting" };
type GameRange =
| { "_GameRange": "BetweenValues", "args": [number, number] }
| { "_GameRange": "ValueOrBigger", "args": number }
| { "_GameRange": "ValueOrSmaller", "args": number }
| { "_GameRange": "ExactValue", "args": number };
type Gift =
| Actions;
type GiftWasntPromised =
| Actions;
type GiftWasPromised =
| Actions;
type GraveyardCardEffect =
| { "_GraveyardCardEffect": "AddAbility", "args": Array<Rule> }
| { "_GraveyardCardEffect": "CantBeTheTargetOfSpellsOrAbilities", "args": SpellsAndAbilities }
| { "_GraveyardCardEffect": "LosesAllAbilities" }
| { "_GraveyardCardEffect": "AddCreatureTypeVariable", "args": CreatureTypeVariable };
type GroupExiledEffect =
| { "_GroupExiledEffect": "OneMayBePlayedBy", "args": Player };
type GroupFilter =
| { "_GroupFilter": "HasNumberSymbolsAmongCosts", "args": [Comparison, ManaProduceSymbol] }
| { "_GroupFilter": "DifferentControllers" }
| { "_GroupFilter": "ShareAGraveyard" }
| { "_GroupFilter": "ANumberOfDifferentCardTypes", "args": Comparison }
| { "_GroupFilter": "ControlledByDifferentPlayers" }
| { "_GroupFilter": "SameToughness" }
| { "_GroupFilter": "ControlledByTheSamePlayer" }
| { "_GroupFilter": "DifferentManaValues" }
| { "_GroupFilter": "DifferentNames" }
| { "_GroupFilter": "DifferentPowers" }
| { "_GroupFilter": "EachBasicLandType" }
| { "_GroupFilter": "HasAColorNotInCommon" }
| { "_GroupFilter": "SameNames" }
| { "_GroupFilter": "ShareAllCardTypes" }
| { "_GroupFilter": "ShareACardType" }
| { "_GroupFilter": "ShareAColor" }
| { "_GroupFilter": "ShareACreatureType" }
| { "_GroupFilter": "ShareACreatureTypeOfChoice" }
| { "_GroupFilter": "ShareALandType" }
| { "_GroupFilter": "SharesANameWithEachPermanent", "args": Permanents }
| { "_GroupFilter": "SharesNoCreatureTypes" }
| { "_GroupFilter": "TotalManaValueIs", "args": Comparison }
| { "_GroupFilter": "TotalPowerIs", "args": Comparison };
type HandEffect =
| { "_HandEffect": "AddAbility", "args": Array<Rule> };
type LandType =
| "Cave"
| "Desert"
| "Forest"
| "Gate"
| "Island"
| "Lair"
| "Locus"
| "Mine"
| "Mountain"
| "Plains"
| "Planet"
| "PowerPlant"
| "Sphere"
| "Swamp"
| "Tower"
| "Town"
| "Urzas";
type LandTypeVariable =
| { "_LandTypeVariable": "AnyBasicLandTypeAmongPermanents", "args": Permanents }
| { "_LandTypeVariable": "AnyLandTypeOfPermanent", "args": Permanent }
| { "_LandTypeVariable": "EachBasicLandType" }
| { "_LandTypeVariable": "TheChosenLandType" }
| { "_LandTypeVariable": "TheFirstChosenLandType" }
| { "_LandTypeVariable": "TheSecondChosenLandType" };
type LandTypeWord =
| { "_LandTypeWord": "TheFirstChosenLandType" }
| { "_LandTypeWord": "TheSecondChosenLandType" };
type LayerEffect =
| { "_LayerEffect": "SetCopiablePT", "args": PT }
| { "_LayerEffect": "AddCopiableCardtype", "args": CardType }
| { "_LayerEffect": "AddCopiableCreatureType", "args": CreatureType }
| { "_LayerEffect": "AddCopiableAbility", "args": Array<Rule> }
| { "_LayerEffect": "IsACopyOfPermanentSpell", "args": [Spell, CopyEffects] }
| { "_LayerEffect": "IsACopyOfPermanent", "args": [Permanent, CopyEffects] }
| { "_LayerEffect": "IsACopyOfLibraryCard", "args": [CardInLibrary, CopyEffects] }
| { "_LayerEffect": "IsACopyOfGraveyardCard", "args": [CardInGraveyards, CopyEffects] }
| { "_LayerEffect": "IsACopyOfExiledCard", "args": [CardInExile, CopyEffects] }
| { "_LayerEffect": "IsACopyOfTheRevealedCard", "args": CopyEffects }
| { "_LayerEffect": "IsACopyOfThatCard", "args": CopyEffects }
| { "_LayerEffect": "SetController", "args": Player }
| { "_LayerEffect": "ReplaceColorWordVariableWithNewColorWordVariable", "args": [ColorWord, ColorWord] }
| { "_LayerEffect": "ReplaceLandTypeVariableWithNewLandTypeVariable", "args": [LandTypeWord, LandTypeWord] }
| { "_LayerEffect": "ReplaceCreatureTypeVariableWithNewCreatureType", "args": [CreatureTypeVariable, CreatureType] }
| { "_LayerEffect": "SetName", "args": string }
| { "_LayerEffect": "AddCardtype", "args": CardType }
| { "_LayerEffect": "RemoveCardtype", "args": CardType }
| { "_LayerEffect": "HasAllCreatureTypes" }
| { "_LayerEffect": "AddCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_LayerEffect": "AddLandTypeVariable", "args": LandTypeVariable }
| { "_LayerEffect": "SetCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_LayerEffect": "SetLandTypeVariable", "args": LandTypeVariable }
| { "_LayerEffect": "AddCreatureType", "args": CreatureType }
| { "_LayerEffect": "AddArtifactType", "args": ArtifactType }
| { "_LayerEffect": "AddEnchantmentType", "args": EnchantmentType }
| { "_LayerEffect": "AddLandType", "args": LandType }
| { "_LayerEffect": "AddSupertype", "args": SuperType }
| { "_LayerEffect": "RemoveSupertype", "args": SuperType }
| { "_LayerEffect": "SetArtifactType", "args": ArtifactType }
| { "_LayerEffect": "SetCardtype", "args": CardType }
| { "_LayerEffect": "SetCardtypes", "args": Array<CardType> }
| { "_LayerEffect": "SetCreatureType", "args": CreatureType }
| { "_LayerEffect": "SetCreatureTypes", "args": Array<CreatureType> }
| { "_LayerEffect": "SetLandType", "args": LandType }
| { "_LayerEffect": "RemoveArtifactType", "args": ArtifactType }
| { "_LayerEffect": "RemoveAllCreatureTypes" }
| { "_LayerEffect": "RemoveAllLandTypes" }
| { "_LayerEffect": "RemoveCreatureType", "args": CreatureType }
| { "_LayerEffect": "AddColor", "args": SettableColor }
| { "_LayerEffect": "SetColor", "args": SettableColor }
| { "_LayerEffect": "AddAbility", "args": Array<Rule> }
| { "_LayerEffect": "AddAbilityVariable", "args": AbilityVariable }
| { "_LayerEffect": "AddAbility_ActivatedWithModifiers", "args": [Cost, Actions, ActivateModifier] }
| { "_LayerEffect": "AddActivatedAbilitiesAndMaySpendColorManaAsThoughAnyColorToActivate", "args": [ActivatedAbilities, Color] }
| { "_LayerEffect": "AddAbilityFromGraveyardCardHasable", "args": [CardInGraveyards, Array<CheckHasable>] }
| { "_LayerEffect": "AddAbilityFromCardsInHandHasable", "args": [CardsInHand, Array<CheckHasable>] }
| { "_LayerEffect": "AddAbilityAndLoseAllOtherAbilities", "args": Array<Rule> }
| { "_LayerEffect": "AddAbilityIfItDoesntHaveIt", "args": Array<Rule> }
| { "_LayerEffect": "AddAbilityFromCardsInPlayersGraveyardHasable", "args": [Cards, Player, Array<CheckHasable>] }
| { "_LayerEffect": "AddAbilityFromPermanentHasable", "args": [Permanent, Array<CheckHasable>] }
| { "_LayerEffect": "AddAbilityFromEachPermanentHasable", "args": [Permanents, Array<CheckHasable>] }
| { "_LayerEffect": "LosesAbility", "args": CheckHasable }
| { "_LayerEffect": "LosesAllAbilities" }
| { "_LayerEffect": "SetPower", "args": GameNumber }
| { "_LayerEffect": "SetToughness", "args": GameNumber }
| { "_LayerEffect": "AdjustPTXY", "args": [ModX, ModY, GameNumber, GameNumber] }
| { "_LayerEffect": "SetPowerAndToughnessBoth", "args": GameNumber }
| { "_LayerEffect": "SwitchPT" }
| { "_LayerEffect": "SetPT", "args": PT }
| { "_LayerEffect": "AdjustPT_TheChosenPTMod" }
| { "_LayerEffect": "AdjustPT", "args": [number, number] }
| { "_LayerEffect": "AdjustPTX", "args": [ModX, ModX, GameNumber] }
| { "_LayerEffect": "AdjustPTForEach", "args": [number, number, GameNumber] };
type Letter =
| { "_Letter": "TheChosenLetter" }
| { "_Letter": "SingleLetter", "args": string };
type Level =
| { "_Level": "Level", "args": [GameRange, PT, Array<Rule>] }
| { "_Level": "LevelNoRules", "args": [GameRange, PT] };
type LibraryCardEffect =
| { "_LibraryCardEffect": "AddSupertype", "args": SuperType }
| { "_LibraryCardEffect": "AddAbility", "args": Array<Rule> };
type LookAtTopOfLibraryAction =
| { "_LookAtTopOfLibraryAction": "TransformPermanent", "args": Permanent }
| { "_LookAtTopOfLibraryAction": "PutRemainingSetAsideCardsIntoHand" }
| { "_LookAtTopOfLibraryAction": "PutSetAsideCardsOfTypeOntoBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_LookAtTopOfLibraryAction": "MayPutUptoNumberGroupCardsOntoTheBattlefield", "args": [GameNumber, Cards, GroupFilter, Array<EnterFlag>] }
| { "_LookAtTopOfLibraryAction": "MayRevealUptoNumberCardsOfTypeAndSetAside", "args": [GameNumber, Cards] }
| { "_LookAtTopOfLibraryAction": "ExileNumberGenericCardsFaceDown", "args": GameNumber }
| { "_LookAtTopOfLibraryAction": "PutAnyNumberOfCardsOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_LookAtTopOfLibraryAction": "MayAction", "args": LookAtTopOfLibraryAction }
| { "_LookAtTopOfLibraryAction": "PutTheRemainingCardsOnTopOfLibraryInAnyOrder" }
| { "_LookAtTopOfLibraryAction": "ShuffleAndPutTheRemainingCardsOnTopOfLibraryInAnyOrder" }
| { "_LookAtTopOfLibraryAction": "ConjureADuplicateOfCardOntoTheBattlefield", "args": [SingleCard, Array<EnterFlag>] }
| { "_LookAtTopOfLibraryAction": "RevealACardOfType", "args": Cards }
| { "_LookAtTopOfLibraryAction": "PutFoundCardOntoBattlefield", "args": Array<EnterFlag> }
| { "_LookAtTopOfLibraryAction": "MayRevealAndPutACardOfTypeOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_LookAtTopOfLibraryAction": "MayPutFoundCardOntoBattlefield", "args": Array<EnterFlag> }
| { "_LookAtTopOfLibraryAction": "ExileAGenericCard" }
| { "_LookAtTopOfLibraryAction": "PutFoundCardIntoHand" }
| { "_LookAtTopOfLibraryAction": "ExileTheRemainingCardsFaceDown" }
| { "_LookAtTopOfLibraryAction": "CloakNumberGenericCards", "args": GameNumber }
| { "_LookAtTopOfLibraryAction": "CreateExiledCardEffect", "args": [CardInExile, Array<ExiledCardEffect>] }
| { "_LookAtTopOfLibraryAction": "PutRemainingCardsInHand" }
| { "_LookAtTopOfLibraryAction": "ExileAnyNumberOfGenericCardsInAFaceDownPile" }
| { "_LookAtTopOfLibraryAction": "ExileTheRemainingCardsInAFaceUpPile" }
| { "_LookAtTopOfLibraryAction": "PutUptoNumberGenericCardsOnTopOfLibraryInAnyOrder", "args": GameNumber }
| { "_LookAtTopOfLibraryAction": "MayPutAnyNumberOfGroupCardsOntoTheBattlefield", "args": [Cards, GroupFilter, Array<EnterFlag>] }
| { "_LookAtTopOfLibraryAction": "APlayerChoosesAPileTopPutIntoHand", "args": Players }
| { "_LookAtTopOfLibraryAction": "ExileAGenericCardWithACounter", "args": CounterType }
| { "_LookAtTopOfLibraryAction": "MayExileUptoNumberCardsOfType", "args": [GameNumber, Cards] }
| { "_LookAtTopOfLibraryAction": "PutAGenericCardAndAllCardsWithTheSameNameIntoHand" }
| { "_LookAtTopOfLibraryAction": "LoseLifeForEach", "args": [GameNumber, GameNumber] }
| { "_LookAtTopOfLibraryAction": "ExileAGenericCardFaceDown" }
| { "_LookAtTopOfLibraryAction": "ExileAnyNumberOfGenericCards" }
| { "_LookAtTopOfLibraryAction": "ExileTheRemainingCards" }
| { "_LookAtTopOfLibraryAction": "ManifestAGenericCard" }
| { "_LookAtTopOfLibraryAction": "MayExileACardOfType", "args": Cards }
| { "_LookAtTopOfLibraryAction": "MayExileAGenericCard" }
| { "_LookAtTopOfLibraryAction": "MayExileAnyNumberOfGenericCards" }
| { "_LookAtTopOfLibraryAction": "MayPutACardOfTypeOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_LookAtTopOfLibraryAction": "MayPutAGenericCardIntoHand" }
| { "_LookAtTopOfLibraryAction": "MayPutAnyNumberOfCardsOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_LookAtTopOfLibraryAction": "MayRevealACardOfTypeAndPutIntoHand", "args": Cards }
| { "_LookAtTopOfLibraryAction": "MayRevealACardOfTypeAndPutOnTopOfLibrary", "args": Cards }
| { "_LookAtTopOfLibraryAction": "MayRevealAnyNumberOfCardOfTypeAndPutOnTopOfLibrary", "args": Cards }
| { "_LookAtTopOfLibraryAction": "MayRevealAnyNumberOfCardsOfTypeAndPutOnTopOfLibraryInAnyOrder", "args": Cards }
| { "_LookAtTopOfLibraryAction": "MayRevealAnyNumberOfCardsOfTypeAndPutThemIntoHand", "args": Cards }
| { "_LookAtTopOfLibraryAction": "PutAGenericCardIntoGraveyard" }
| { "_LookAtTopOfLibraryAction": "PutAGenericCardIntoHand" }
| { "_LookAtTopOfLibraryAction": "PutAGenericCardOnBottomOfLibrary" }
| { "_LookAtTopOfLibraryAction": "PutAGenericCardOnTopOfLibrary" }
| { "_LookAtTopOfLibraryAction": "PutAnyNumberOfGenericCardsIntoHand" }
| { "_LookAtTopOfLibraryAction": "PutAnyNumberOfGenericCardsOnBottomOfLibraryAnyOrder" }
| { "_LookAtTopOfLibraryAction": "PutNumberGenericCardsIntoHand", "args": GameNumber }
| { "_LookAtTopOfLibraryAction": "PutRemainingCardsOnTheTopOrBottomOfLibraryInAnyOrder" }
| { "_LookAtTopOfLibraryAction": "PutTheRemainingCardsBackIntoLibraryAndShuffle" }
| { "_LookAtTopOfLibraryAction": "PutTheRemainingCardsIntoGraveyard" }
| { "_LookAtTopOfLibraryAction": "PutTheRemainingCardsIntoHand" }
| { "_LookAtTopOfLibraryAction": "PutTheRemainingCardsOnTheBottomOfLibraryInARandomOrder" }
| { "_LookAtTopOfLibraryAction": "PutTheRemainingCardsOnTheBottomOfLibraryInAnyOrder" }
| { "_LookAtTopOfLibraryAction": "MayRevealUptoNumberCardsOfTypeAndPutIntoHand", "args": [GameNumber, CardsInLibrary] }
| { "_LookAtTopOfLibraryAction": "SeparateIntoFaceUpFileAndFaceDownPile" }
| { "_LookAtTopOfLibraryAction": "PlayerChoosesPileTopPutIntoHand", "args": Player }
| { "_LookAtTopOfLibraryAction": "LeaveRemainingCardsOnTopOfLibraryInSameOrder" }
| { "_LookAtTopOfLibraryAction": "SeparateIntoTwoFaceDownPiles" }
| { "_LookAtTopOfLibraryAction": "PlayerExilesAPile", "args": Player }
| { "_LookAtTopOfLibraryAction": "PlayerLooksAtRemainingCardsAndPutsAGenericCardIntoHand", "args": Player }
| { "_LookAtTopOfLibraryAction": "MayRevealMultipleCardsOfTypeAndPutIntoHand", "args": Array<CardsInLibrary> }
| { "_LookAtTopOfLibraryAction": "MayRevealMultipleCardsOfType", "args": Array<CardsInLibrary> }
| { "_LookAtTopOfLibraryAction": "CreatePermanentLayerEffectUntil", "args": [Permanent, Array<LayerEffect>, Expiration] }
| { "_LookAtTopOfLibraryAction": "If", "args": [Condition, Array<LookAtTopOfLibraryAction>] }
| { "_LookAtTopOfLibraryAction": "Unless", "args": [Condition, Array<LookAtTopOfLibraryAction>] }
| { "_LookAtTopOfLibraryAction": "MayActions", "args": Array<LookAtTopOfLibraryAction> }
| { "_LookAtTopOfLibraryAction": "IfElse", "args": [Condition, Array<LookAtTopOfLibraryAction>, Array<LookAtTopOfLibraryAction>] }
| { "_LookAtTopOfLibraryAction": "AttachPermanentToAPermanent", "args": [Permanent, Permanents] }
| { "_LookAtTopOfLibraryAction": "RepeatableActions", "args": Array<LookAtTopOfLibraryAction> }
| { "_LookAtTopOfLibraryAction": "MayCost", "args": LookAtTopOfLibraryCost }
| { "_LookAtTopOfLibraryAction": "LookAtTheNextNumberCardsOnTopOfLibrary", "args": GameNumber }
| { "_LookAtTopOfLibraryAction": "RepeatThisProcess" }
| { "_LookAtTopOfLibraryAction": "PutUptoNumberGenericCardsIntoHand", "args": GameNumber }
| { "_LookAtTopOfLibraryAction": "MayCastASpellFromAmongThemWithoutPaying", "args": Spells }
| { "_LookAtTopOfLibraryAction": "ForEachCardPutIntoGraveyardUnlessCost", "args": LookAtTopOfLibraryCost }
| { "_LookAtTopOfLibraryAction": "ExileNumberGenericCardsAtRandom", "args": GameNumber }
| { "_LookAtTopOfLibraryAction": "CreatePerpetualPermanentEffect", "args": [Permanent, Array<PerpetualEffect>] }
| { "_LookAtTopOfLibraryAction": "MayPutUptoNumberCardsOntoTheBattlefield", "args": [GameNumber, Cards, Array<EnterFlag>] }
| { "_LookAtTopOfLibraryAction": "GainLife", "args": GameNumber };
type LookAtTopOfLibraryCost =
| { "_LookAtTopOfLibraryCost": "And", "args": Array<LookAtTopOfLibraryCost> }
| { "_LookAtTopOfLibraryCost": "PayLife", "args": GameNumber }
| { "_LookAtTopOfLibraryCost": "SacrificePermanent", "args": Permanent }
| { "_LookAtTopOfLibraryCost": "SacrificeAPermanent", "args": Permanents }
| { "_LookAtTopOfLibraryCost": "PayMana", "args": Array<ManaSymbol> }
| { "_LookAtTopOfLibraryCost": "PutTheRemainingCardsOnTheBottomOfLibraryInAnyOrder" }
| { "_LookAtTopOfLibraryCost": "PutACardOfTypeOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_LookAtTopOfLibraryCost": "RevealACardOfType", "args": Cards };
type LoyaltyNumber =
| { "_LoyaltyNumber": "Integer", "args": number }
| { "_LoyaltyNumber": "LoyaltyX" };
type MadnessXWasntPaid =
| Actions;
type MadnessXWasPaid =
| Actions;
type ManaCost =
| Array<ManaSymbol>;
type ManaCostX =
| Array<ManaSymbolX>;
type ManaProduce =
| { "_ManaProduce": "ManaProduceW" }
| { "_ManaProduce": "ManaProduceU" }
| { "_ManaProduce": "ManaProduceB" }
| { "_ManaProduce": "ManaProduceR" }
| { "_ManaProduce": "ManaProduceG" }
| { "_ManaProduce": "ManaProduceC" }
| { "_ManaProduce": "Or", "args": Array<ManaProduce> }
| { "_ManaProduce": "And", "args": Array<ManaProduce> }
| { "_ManaProduce": "ManaOfAChosenColor" }
| { "_ManaProduce": "EachColorAmongCardsUsedToCraftPermanent", "args": Permanent }
| { "_ManaProduce": "AnyManaColorChosenByPlayerDuringDraft", "args": [Player, string] }
| { "_ManaProduce": "LastNotedManaTypeAndAmount" }
| { "_ManaProduce": "ManaOfTheLastNotedType" }
| { "_ManaProduce": "OneManaOfEachColorInManaCostOfTheMilledCard" }
| { "_ManaProduce": "AnyOtherManaColor" }
| { "_ManaProduce": "AnyTwoDifferentManaColors" }
| { "_ManaProduce": "AnyColorManaSymbolInTheCardRevealedThisWay" }
| { "_ManaProduce": "AnyManaColorAmongCardsInAPlayersGraveyard", "args": [CardsInGraveyards, Players] }
| { "_ManaProduce": "AnyManaColorCircled" }
| { "_ManaProduce": "AnyManaColorOfPermanent", "args": Permanent }
| { "_ManaProduce": "TheManaLostThisWay" }
| { "_ManaProduce": "AnyManaColorOfExiledCard", "args": CardInExile }
| { "_ManaProduce": "AnyManaColorOfAnExiledCard", "args": CardsInExile }
| { "_ManaProduce": "Trigger_AnyManaTypeProduced" }
| { "_ManaProduce": "ManaCostOfPermanent", "args": Permanent }
| { "_ManaProduce": "AnyManaColorAmongPermanents", "args": Permanents }
| { "_ManaProduce": "AnyManaColorAPermanentCouldProduce", "args": Permanents }
| { "_ManaProduce": "AnyManaTypeAPermanentCouldProduce", "args": Permanents }
| { "_ManaProduce": "AnyManaTypePermanentCouldProduce", "args": Permanent }
| { "_ManaProduce": "EachManaColorAmongPermanents", "args": Permanents }
| { "_ManaProduce": "ManaOfTheChosenColor" }
| { "_ManaProduce": "AnyManaTypeTheSacrificedPermanentCouldProduce" }
| { "_ManaProduce": "AnyManaColor" }
| { "_ManaProduce": "AnyManaColorInCommanderColorIdentity" };
type ManaProduceSymbol =
| { "_ManaProduceSymbol": "ManaProduceW" }
| { "_ManaProduceSymbol": "ManaProduceU" }
| { "_ManaProduceSymbol": "ManaProduceB" }
| { "_ManaProduceSymbol": "ManaProduceR" }
| { "_ManaProduceSymbol": "ManaProduceG" }
| { "_ManaProduceSymbol": "ManaProduceC" };
type ManaSources =
| { "_ManaSources": "IsCardtype", "args": CardType };
type ManaSpent =
| { "_ManaSpent": "Or", "args": Array<ManaProduceSymbol> };
type ManaSymbol =
| { "_ManaSymbol": "ManaCostGeneric", "args": number }
| { "_ManaSymbol": "ManaCostW" }
| { "_ManaSymbol": "ManaCostU" }
| { "_ManaSymbol": "ManaCostB" }
| { "_ManaSymbol": "ManaCostR" }
| { "_ManaSymbol": "ManaCostG" }
| { "_ManaSymbol": "ManaCostC" }
| { "_ManaSymbol": "ManaCostS" }
| { "_ManaSymbol": "ManaCostWP" }
| { "_ManaSymbol": "ManaCostUP" }
| { "_ManaSymbol": "ManaCostBP" }
| { "_ManaSymbol": "ManaCostRP" }
| { "_ManaSymbol": "ManaCostGP" }
| { "_ManaSymbol": "ManaCost2U" }
| { "_ManaSymbol": "ManaCost2B" }
| { "_ManaSymbol": "ManaCost2R" }
| { "_ManaSymbol": "ManaCost2G" }
| { "_ManaSymbol": "ManaCostWU" }
| { "_ManaSymbol": "ManaCostUB" }
| { "_ManaSymbol": "ManaCostBR" }
| { "_ManaSymbol": "ManaCostRG" }
| { "_ManaSymbol": "ManaCostGW" }
| { "_ManaSymbol": "ManaCostWB" }
| { "_ManaSymbol": "ManaCostUR" }
| { "_ManaSymbol": "ManaCostBG" }
| { "_ManaSymbol": "ManaCostRW" }
| { "_ManaSymbol": "ManaCostGU" };
type ManaSymbolX =
| { "_ManaSymbol": "ManaCostGeneric", "args": number }
| { "_ManaSymbol": "ManaCostW" }
| { "_ManaSymbol": "ManaCostU" }
| { "_ManaSymbol": "ManaCostB" }
| { "_ManaSymbol": "ManaCostR" }
| { "_ManaSymbol": "ManaCostG" }
| { "_ManaSymbol": "ManaCostC" }
| { "_ManaSymbol": "ManaCostS" }
| { "_ManaSymbol": "ManaCostWP" }
| { "_ManaSymbol": "ManaCostUP" }
| { "_ManaSymbol": "ManaCostBP" }
| { "_ManaSymbol": "ManaCostRP" }
| { "_ManaSymbol": "ManaCostGP" }
| { "_ManaSymbol": "ManaCostRWP" }
| { "_ManaSymbol": "ManaCostRGP" }
| { "_ManaSymbol": "ManaCostGWP" }
| { "_ManaSymbol": "ManaCostGUP" }
| { "_ManaSymbol": "ManaCost2W" }
| { "_ManaSymbol": "ManaCost2U" }
| { "_ManaSymbol": "ManaCost2B" }
| { "_ManaSymbol": "ManaCost2R" }
| { "_ManaSymbol": "ManaCost2G" }
| { "_ManaSymbol": "ManaCostCW" }
| { "_ManaSymbol": "ManaCostCU" }
| { "_ManaSymbol": "ManaCostCB" }
| { "_ManaSymbol": "ManaCostCR" }
| { "_ManaSymbol": "ManaCostCG" }
| { "_ManaSymbol": "ManaCostWU" }
| { "_ManaSymbol": "ManaCostUB" }
| { "_ManaSymbol": "ManaCostBR" }
| { "_ManaSymbol": "ManaCostRG" }
| { "_ManaSymbol": "ManaCostGW" }
| { "_ManaSymbol": "ManaCostWB" }
| { "_ManaSymbol": "ManaCostUR" }
| { "_ManaSymbol": "ManaCostBG" }
| { "_ManaSymbol": "ManaCostRW" }
| { "_ManaSymbol": "ManaCostGU" }
| { "_ManaSymbol": "ManaCostX" };
type ManaUseModifier =
| { "_ManaUseModifier": "CreatePermanentSpellLayerEffect", "args": [Expiration, Spells, Array<LayerEffect>] }
| { "_ManaUseModifier": "FlagSpellsCastWith", "args": [Spells, Array<SpellEffect>] }
| { "_ManaUseModifier": "DontLoseAsStepsAndPhasesEnd", "args": Expiration }
| { "_ManaUseModifier": "TriggerSpentOnSpell", "args": [Spells, Actions] }
| { "_ManaUseModifier": "TriggerSpentOnSpellOrAbility", "args": [SpellsAndAbilities, Actions] }
| { "_ManaUseModifier": "FlagPermanentsCastWith", "args": [Permanents, Array<EnterFlag>] }
| { "_ManaUseModifier": "CanOnlySpendToActivatePowerUpAbilities" }
| { "_ManaUseModifier": "CanOnlySpendOnCumulativeUpkeepCosts" }
| { "_ManaUseModifier": "CanOnlySpendOnMorphCosts" }
| { "_ManaUseModifier": "CanOnlySpendOnSpells", "args": Spells }
| { "_ManaUseModifier": "CanOnlySpendOnXCost" }
| { "_ManaUseModifier": "CanOnlySpendToActivateAbilities" }
| { "_ManaUseModifier": "CanOnlySpendToActivateAbilitiesOfPermanents", "args": Permanents }
| { "_ManaUseModifier": "CanOnlySpendToActivateAbilitiesOfSources", "args": AbilitySources }
| { "_ManaUseModifier": "CanOnlySpendToActivateEquipAbilities" }
| { "_ManaUseModifier": "CanOnlySpendToCastExiledCard", "args": CardInExile }
| { "_ManaUseModifier": "CanOnlySpendToCastForetoldSpells" }
| { "_ManaUseModifier": "CanOnlySpendToCastGraveyardSpells", "args": Spells }
| { "_ManaUseModifier": "CanOnlySpendToCastSpellsFromAPlayersGraveyard", "args": [Spells, Players] }
| { "_ManaUseModifier": "CanOnlySpendToCastSpellsFromAnywhereOtherThanPlayersHand", "args": [Spells, Players] }
| { "_ManaUseModifier": "CanOnlySpendToCastSpellsFromExile", "args": Spells }
| { "_ManaUseModifier": "CanOnlySpendToCastTheirCommander" }
| { "_ManaUseModifier": "CanOnlySpendToForetellCards" }
| { "_ManaUseModifier": "CanOnlySpendToGainAClassLevel" }
| { "_ManaUseModifier": "CanOnlySpendToPayACostThatContainsManaSymbol", "args": ManaSymbol }
| { "_ManaUseModifier": "CanOnlySpendToPayDisturbCosts" }
| { "_ManaUseModifier": "CanOnlySpendToTurnACreatureFaceUp" }
| { "_ManaUseModifier": "CanOnlySpendToTurnAManifestedCreatureFaceUp" }
| { "_ManaUseModifier": "CanOnlySpendToTurnAPermanentFaceUp" }
| { "_ManaUseModifier": "CanOnlySpendToUnlockDoors" }
| { "_ManaUseModifier": "CantSpendOnGenericCosts" }
| { "_ManaUseModifier": "CantSpendOnSpells", "args": Spells }
| { "_ManaUseModifier": "And", "args": Array<ManaUseModifier> }
| { "_ManaUseModifier": "Or", "args": Array<ManaUseModifier> };
type Melded =
| { "_OracleCard": "Melded", Name: string, Typeline: OracleTypeline, ColorIndicator?: Array<ColorIndicatorColor>, Rules: Array<Rule>, CardPT?: CardPT, Loyalty?: LoyaltyNumber, };
type MeldPiece =
| { "_OracleCard": "MeldPiece", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules: Array<Rule>, CardPT?: CardPT, MeldsInto: string, };
type ModalDFCObject =
| { "_OracleCard": "ModalDFC", FrontFace: NormalObject, BackFace: NormalObject, };
type ModalDFC =
| { "_OracleCard": "ModalDFC", FrontFace: Card, BackFace: Card, };
type ModX =
| { "_ModX": "Integer", "args": number }
| { "_ModX": "PlusX" }
| { "_ModX": "MinusX" }
| { "_ModX": "Zero" };
type ModY =
| { "_ModY": "PlusY" }
| { "_ModY": "MinusY" };
type MoveCountersAction =
| { "_MoveCountersAction": "ACounterFromPermanentOntoNewPermanent", "args": [Permanent, Permanent] }
| { "_MoveCountersAction": "ACounterOfEachTypeFromPermanentOntoNewPermanentThatNewPermanentDoesntHave", "args": [Permanent, Permanent] }
| { "_MoveCountersAction": "ACounterOfTypeFromPermanentOntoNewPermanent", "args": [CounterType, Permanent, Permanent] }
| { "_MoveCountersAction": "AllCountersFromPermanentOntoNewPermanent", "args": [Permanent, Permanent] }
| { "_MoveCountersAction": "AllCountersOfTypeFromEachPermanentOntoNewPermanent", "args": [CounterType, Permanents, Permanent] }
| { "_MoveCountersAction": "AllCountersOfTypeFromPermanentOntoNewPermanent", "args": [CounterType, Permanent, Permanent] }
| { "_MoveCountersAction": "AnyNumberOfCountersFromAmongPermanentsOntoNewPermanent", "args": [Permanents, Permanent] }
| { "_MoveCountersAction": "AnyNumberOfCountersFromPermanentOntoNewPermanent", "args": [Permanent, Permanent] }
| { "_MoveCountersAction": "AnyNumberOfCountersOfTypeFromAmongPermanentsOntoNewPermanent", "args": [CounterType, Permanents, Permanent] }
| { "_MoveCountersAction": "AnyNumberOfCountersOfTypeFromPermanentOntoNewPermanent", "args": [CounterType, Permanent, Permanent] }
| { "_MoveCountersAction": "DistributeAnyNumberOfCountersOfTypeFromPermanentOntoNewPermanents", "args": [CounterType, Permanent, Permanents] }
| { "_MoveCountersAction": "NumberCountersOfTypeFromPermanentOntoNewPermanent", "args": [GameNumber, CounterType, Permanent, Permanent] };
type MoveCountersCost =
| { "_MoveCountersCost": "AtLeastOneCounterFromPermanentOntoNewPermanent", "args": [Permanent, Permanent] };
type MultiCreateToken =
| { "_MultiCreateToken": "CreateTokens", "args": [Array<CreatableToken>, Array<TokenFlag>] }
| { "_MultiCreateToken": "EachPlayerCreatesTokens", "args": [Players, Array<CreatableToken>, Array<TokenFlag>] };
type MultiDrawable =
| { "_MultiDraw": "DrawNumberCards", "args": GameNumber }
| { "_MultiDraw": "EachPlayerDrawsACard", "args": Players };
type MultipleDamageRecipients =
| { "_MultipleDamageRecipients": "MultipleRecipients", "args": Array<DamageRecipients> }
| { "_MultipleDamageRecipients": "EachPermanent", "args": Permanents };
type MutateStackObject =
| { "_OracleCard": "Card", Name?: ObjectName, ManaCost?: CardManaCost, Typeline: ObjectTypeline, Rules: Array<SourcedRule>, CardPT?: ObjectPT, ColorIndicator?: Array<ColorIndicatorColor>, };
type NamedAction =
| { "_NamedAction": "NamedAction", "args": [string, Array<Action>] };
type NameFilter =
| { "_NameFilter": "NamedCard", "args": string }
| { "_NameFilter": "ANameChosenByPermanent", "args": Permanent }
| { "_NameFilter": "TheNamePlayerNotedForCardDuringDraft", "args": [Player, string] }
| { "_NameFilter": "TheNameOfTheSacrificedCreature" }
| { "_NameFilter": "NameOfGraveyardCard", "args": CardInGraveyards }
| { "_NameFilter": "OneOfTheChosenNames" }
| { "_NameFilter": "TheChosenName" }
| { "_NameFilter": "TheChosenCardName" }
| { "_NameFilter": "TheNameChosenByPlayer", "args": Player };
type NameStickerFilter =
| { "_NameStickerFilter": "TheNameStickerPutOnPermanentThisWay" };
type NormalObject =
| { "_OracleCard": "Card", Name?: ObjectName, Typeline: ObjectTypeline, CardPT?: ObjectPT, ManaCost?: CardManaCost, Rules: Array<SourcedRule>, Loyalty?: LoyaltyNumber, Defense?: number, ColorIndicator?: Array<ColorIndicatorColor>, AdditionalColorIndicator?: Array<ColorIndicatorColor>, MeldsInto?: string, Flip?: ObjectFlip, Doors?: ObjectDoors, Adventure?: NormalObject, Omen?: NormalObject, Prepared?: NormalObject, };
type NotCastUsingTeamwork =
| Actions;
type ObjectDoor =
| { Name: string, ManaCost: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules: Array<SourcedRule>, };
type ObjectDoors =
| { Left: ObjectDoor, Right: ObjectDoor, };
type ObjectFlip =
| { Unflipped: Array<SourcedRule>, Flipped: Array<SourcedRule>, };
type ObjectName =
| { "_Name": "Name", Name: string, }
| { "_Name": "FlipName", Unflipped: string, Flipped: string, };
type ObjectPT =
| { "_CardPT": "CardPT", CardPT: CardPT, }
| { "_CardPT": "FlipCardPT", Unflipped?: CardPT, Flipped?: CardPT, };
type ObjectTypeline =
| { "_Typeline": "Typeline", Typeline: OracleTypeline, }
| { "_Typeline": "FlipTypeline", Unflipped: OracleTypeline, Flipped: OracleTypeline, };
type Ominous =
| { "_OracleCard": "Ominous", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules: Array<Rule>, CardPT?: CardPT, Omen: Card, };
type OracleCard =
| { "_OracleCard": "Card", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules?: Array<Rule>, CardPT?: CardPT, Loyalty?: LoyaltyNumber, Defense?: number, }
| { "_OracleCard": "MeldPiece", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules: Array<Rule>, CardPT?: CardPT, MeldsInto: string, }
| { "_OracleCard": "Melded", Name: string, Typeline: OracleTypeline, ColorIndicator?: Array<ColorIndicatorColor>, Rules: Array<Rule>, CardPT?: CardPT, Loyalty?: LoyaltyNumber, }
| { "_OracleCard": "Adventurer", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules?: Array<Rule>, CardPT?: CardPT, Adventure: Card, }
| { "_OracleCard": "Preparer", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules?: Array<Rule>, CardPT?: CardPT, Prepared: Card, }
| { "_OracleCard": "Ominous", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules: Array<Rule>, CardPT?: CardPT, Omen: Card, }
| { "_OracleCard": "ModalDFC", FrontFace: Card, BackFace: Card, }
| { "_OracleCard": "Transforming", FrontFace: Card, BackFace: Card, }
| { "_OracleCard": "Flip", ManaCost: Array<ManaSymbolX>, Unflipped: FlipInfo, Flipped: FlipInfo, }
| { "_OracleCard": "Room", Typeline: OracleTypeline, LeftDoor: DoorInfo, RightDoor: DoorInfo, }
| { "_OracleCard": "Split", Cards: Array<Card>, }
| { "_OracleCard": "Planar", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, }
| { "_OracleCard": "Conspiracy", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, }
| { "_OracleCard": "Scheme", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, }
| { "_OracleCard": "Dungeon", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, }
| { "_OracleCard": "Vanguard", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, LifeModifier: number, HandModifier: number, }
| { "_OracleCard": "StickerSheet", Stickers: Array<Sticker>, }
| { "_OracleCard": "TokenDefinition", Name: string, Token: CreatableToken, };
type OracleTypeline =
| { Supertypes: Array<SuperType>, Cardtypes: Array<CardType>, Subtypes: Array<SubType>, };
type OtherTarget =
| { "_OtherTarget": "Ref_TargetPermanent" }
| { "_OtherTarget": "Ref_AnyTarget1" }
| { "_OtherTarget": "Ref_AnyTarget" }
| { "_OtherTarget": "ThisPermanent" };
type OverloadNotPaid =
| Actions;
type OverloadPaid =
| Actions;
type PawMode =
| { "_PawMode": "PawMode", "args": [number, Actions] };
type PermanentAndSpellEffect =
| { "_PermanentAndSpellEffect": "ReplaceAllColorWordsWithNewColorWord", "args": Color };
type PermanentId =
| number;
type PermanentOrExiledCard =
| { "_PermanentOrExiledCard": "Ref_TargetPermanentOrExiledCard" };
type Permanent =
| { "_Permanent": "ById", "args": number }
| { "_Permanent": "WouldConnive_ThatPermanent" }
| { "_Permanent": "TheChosenPermanentForPlayer", "args": Player }
| { "_Permanent": "ThePermanentBlightedThisWay" }
| { "_Permanent": "ThePermanentAttachedThisWay" }
| { "_Permanent": "ThePermanentBeheldThisWay" }
| { "_Permanent": "TheTransformedPermanent" }
| { "_Permanent": "ThePermanentThatGrantedThisAbility" }
| { "_Permanent": "ThePermanentExiledByPlayerThisWay", "args": Player }
| { "_Permanent": "TheCardConjuredOntoTheBattlefieldThisWay" }
| { "_Permanent": "ThePermanentCloakedThisWay" }
| { "_Permanent": "ThePermanentPhasedOutThisWay" }
| { "_Permanent": "RefOuter_TargetPermanent" }
| { "_Permanent": "TheFirstPermanentChosenByPlayerThisWay", "args": Player }
| { "_Permanent": "TheSecondPermanentChosenByPlayerThisWay", "args": Player }
| { "_Permanent": "ActionPermanent" }
| { "_Permanent": "WouldDealDamage_DamageRecipientPermanent" }
| { "_Permanent": "ThePermanentAttachedToThisWay" }
| { "_Permanent": "ThisPermanentOrThisCommandCard" }
| { "_Permanent": "ThePermanentGainedControlOfThisWay" }
| { "_Permanent": "ThePermanentThisSpellBecame" }
| { "_Permanent": "Ref_TargetPermanent5" }
| { "_Permanent": "ThePermanentPutOnTheBattlefieldByPlayerThisWay", "args": Player }
| { "_Permanent": "ThePermanentSpellResolvedThisWay" }
| { "_Permanent": "WouldDealDamage_ThatPermanent" }
| { "_Permanent": "WouldBeDestroyed_ThatPermanent" }
| { "_Permanent": "WouldDealDamage_DamageSourceAsPermanent" }
| { "_Permanent": "WouldUntapDuringsItsControllersUntapStep_ThatPermanent" }
| { "_Permanent": "WouldDie_ThatPermanent" }
| { "_Permanent": "PermanentSourceOfAbilityCounteredThisWay" }
| { "_Permanent": "PermanentSourceOfAbility", "args": Ability }
| { "_Permanent": "CreatePermanentEffect_It" }
| { "_Permanent": "EachPermanentEffect_It" }
| { "_Permanent": "ThePermanentThatCreatedThisEmblem" }
| { "_Permanent": "TheFirstChosenPermanent" }
| { "_Permanent": "ThisExiledPermanentCard" }
| { "_Permanent": "TheCreatureHauntedByExiledCard", "args": CardInExile }
| { "_Permanent": "TheSacrificedPermanent" }
| { "_Permanent": "PlayersRingBearer", "args": Player }
| { "_Permanent": "ThePermanentExiledThisWay" }
| { "_Permanent": "Ref_TargetPermanentOfPlayersChoice" }
| { "_Permanent": "TheCreatureBolsteredThisWay" }
| { "_Permanent": "ThisSacrificedPermanent" }
| { "_Permanent": "ThePermanentThatCreatedIt" }
| { "_Permanent": "TheSecondChosenPermanent" }
| { "_Permanent": "TheCreaturePairedWithPermanent", "args": Permanent }
| { "_Permanent": "SingleTargetPermanentOfSpell", "args": Spell }
| { "_Permanent": "TheArmyAmassedThisWay" }
| { "_Permanent": "Trigger_ThatLand" }
| { "_Permanent": "Ref_TargetPermanents_0" }
| { "_Permanent": "Ref_TargetPermanents_1" }
| { "_Permanent": "ThePermanentDestroyedThisWay" }
| { "_Permanent": "AnyTargetAsAPermanent" }
| { "_Permanent": "ApplyPermanentEffect_It" }
| { "_Permanent": "DealsDamage_ThatPermanent" }
| { "_Permanent": "EachablePermanent" }
| { "_Permanent": "GuestPermanent" }
| { "_Permanent": "HostPermanent" }
| { "_Permanent": "HostPermanentOf", "args": Permanent }
| { "_Permanent": "Ref_TargetPermanent" }
| { "_Permanent": "Ref_TargetPermanent1" }
| { "_Permanent": "Ref_TargetPermanent2" }
| { "_Permanent": "Ref_TargetPermanent3" }
| { "_Permanent": "Ref_TargetPermanent4" }
| { "_Permanent": "Self_It" }
| { "_Permanent": "ThatEnteringPermanent" }
| { "_Permanent": "TheChosenPermanent" }
| { "_Permanent": "TheCreatureUnequippedThisWay" }
| { "_Permanent": "ThePermanentChosenByPlayerThisWay", "args": Player }
| { "_Permanent": "ThePermanentChosenThisWay" }
| { "_Permanent": "ThePermanentPutOnTheBattlefieldThisWay" }
| { "_Permanent": "ThePermanentReturnedToHandThisWay" }
| { "_Permanent": "ThePermanentSacrificedThisWay" }
| { "_Permanent": "ThePermanentTappedThisWay" }
| { "_Permanent": "ThePermanentThatDiedThisWay" }
| { "_Permanent": "ThisGuest" }
| { "_Permanent": "ThisPermanent" }
| { "_Permanent": "Trigger_ThatArtifact" }
| { "_Permanent": "Trigger_ThatCreature" }
| { "_Permanent": "Trigger_ThatCreatureOrPlaneswalker" }
| { "_Permanent": "Trigger_ThatDeadPermanent" }
| { "_Permanent": "Trigger_ThatOtherCreature" }
| { "_Permanent": "Trigger_ThatOtherPermanent" }
| { "_Permanent": "Trigger_ThatPermanent" }
| { "_Permanent": "Trigger_ThatSacrificedPermanent" }
| { "_Permanent": "Trigger_ThatVehicle" }
| { "_Permanent": "Trigger_TheAttackingCreature" }
| { "_Permanent": "Trigger_TheBlockingCreature" };
type PermanentRule =
| { "_PermanentRule": "CantHaveCountersOfTypePutOnIt", "args": CounterType }
| { "_PermanentRule": "CantHaveCountersOfTypeRemovedFromIt", "args": CounterType }
| { "_PermanentRule": "CantHaveCountersPutOnIt" }
| { "_PermanentRule": "StationsPermanentsAsThoughPowerWereGreater", "args": GameNumber }
| { "_PermanentRule": "StationsPermanentsUsingToughnessRatherThanPower" }
| { "_PermanentRule": "CanBlockCreaturesWithShadowAsThoughItHadShadow" }
| { "_PermanentRule": "PlaneswalkerCantBeAttacked" }
| { "_PermanentRule": "SaddlesMountsUsingToughnessRatherThanPower" }
| { "_PermanentRule": "CantBecomeUntapped" }
| { "_PermanentRule": "AbilitiesCantBeActivated" }
| { "_PermanentRule": "CantGainAbility", "args": CheckHasable }
| { "_PermanentRule": "AbilitiesOfTypeCantBeActivated", "args": ActivatedAbilities }
| { "_PermanentRule": "AllCreaturesMustBlockIt", "args": Permanents }
| { "_PermanentRule": "AssignsCombatDamageAsThoughNotBlocked" }
| { "_PermanentRule": "AssignsNoCombatDamage" }
| { "_PermanentRule": "AssignsToughnessCombatDamage" }
| { "_PermanentRule": "AttackingCausesOthersToAttack", "args": Permanents }
| { "_PermanentRule": "CanAttackAPlayerAsThoughItDidntHaveDefender", "args": Players }
| { "_PermanentRule": "CanAttackAsThoughItDidntHaveDefender" }
| { "_PermanentRule": "CanAttackAsThoughItHadHaste" }
| { "_PermanentRule": "CanAttackPlayersAndPlaneswalkersAsThoughItHadHaste", "args": Players }
| { "_PermanentRule": "CanBeAttachedOnlyToAPermanent", "args": Permanents }
| { "_PermanentRule": "CanBeBlockedAsThoughItDidntHave", "args": CheckHasable }
| { "_PermanentRule": "CanBeTheTargetOfSpellsAndAbilitiesAsThoughTheyDidntHaveHexproof", "args": SpellsAndAbilities }
| { "_PermanentRule": "CanBeTheTargetOfSpellsOrAbilitiesAsThoughItDidntHaveShroud", "args": SpellsAndAbilities }
| { "_PermanentRule": "CanBlockAnAdditionalCreature" }
| { "_PermanentRule": "CanBlockAnAdditionalNumberCreatures", "args": GameNumber }
| { "_PermanentRule": "CanBlockAnyNumberOfCreatures" }
| { "_PermanentRule": "CanBlockAsThoughUntapped" }
| { "_PermanentRule": "CanBlockCreaturesWithFlyingAsThoughItHadReach", "args": Permanents }
| { "_PermanentRule": "CanBlockCreaturesWithLandwalkAbilitiesAsThoughTheyDidntHaveThem" }
| { "_PermanentRule": "CanBlockCreaturesWithShadowAsThoughTheyDidntHaveShadow" }
| { "_PermanentRule": "CanBlockOnly", "args": Permanents }
| { "_PermanentRule": "CanBoastTwice" }
| { "_PermanentRule": "CanOnlyAttackAlone" }
| { "_PermanentRule": "CanOnlyBeDestroyedByLethalDamageFromASingleSource" }
| { "_PermanentRule": "CantAttack" }
| { "_PermanentRule": "CantAttackAPermanent", "args": Permanents }
| { "_PermanentRule": "CantAttackAPermanentUnlessCost", "args": [Permanents, Cost] }
| { "_PermanentRule": "CantAttackAPlayer", "args": Players }
| { "_PermanentRule": "CantAttackAlone" }
| { "_PermanentRule": "CantAttackAnyPlayerOrPlaneswalkerControlledBy", "args": Players }
| { "_PermanentRule": "CantAttackIfDefendingPlayer", "args": Condition }
| { "_PermanentRule": "CantAttackPlayer", "args": Player }
| { "_PermanentRule": "CantAttackPlayerOrPlaneswalkerControlledBy", "args": Player }
| { "_PermanentRule": "CantAttackPlayerOrPlaneswalkerControlledByUnlessCost", "args": [Player, Cost] }
| { "_PermanentRule": "CantAttackPlayerUnlessCost", "args": [Player, Cost] }
| { "_PermanentRule": "CantAttackUnlessANumberOfOtherCreatureAttacks", "args": [Comparison, Permanents] }
| { "_PermanentRule": "CantAttackUnlessAnotherCreatureAttacks", "args": Permanents }
| { "_PermanentRule": "CantAttackUnlessCost", "args": Cost }
| { "_PermanentRule": "CantAttackUnlessDefendingPlayer", "args": Condition }
| { "_PermanentRule": "CantBeBlocked" }
| { "_PermanentRule": "CantBeBlockedByDefenders", "args": Permanents }
| { "_PermanentRule": "CantBeBlockedByMoreThanOne" }
| { "_PermanentRule": "CantBeBlockedExceptByDefenders", "args": Permanents }
| { "_PermanentRule": "CantBeBlockedExceptByMultipleDefenders", "args": [Comparison, Permanents] }
| { "_PermanentRule": "CantBeBlockedIfDefendingPlayer", "args": Players }
| { "_PermanentRule": "CantBeBlockedUnlessAllDefendersBlockIt" }
| { "_PermanentRule": "CantBeBlockedUnlessCost", "args": Cost }
| { "_PermanentRule": "CantBeBlockedUnlessDefendingPlayer", "args": Players }
| { "_PermanentRule": "CantBeEnchanted" }
| { "_PermanentRule": "CantBeEnchantedAndDoesntRemove", "args": Permanents }
| { "_PermanentRule": "CantBeEnchantedByAnEnchantment", "args": Permanents }
| { "_PermanentRule": "CantBeEquipped" }
| { "_PermanentRule": "CantBeGainedControlOf" }
| { "_PermanentRule": "CantBeRegenerated" }
| { "_PermanentRule": "CantBeSacrificed" }
| { "_PermanentRule": "CantBeTheTargetOfAbilities", "args": Abilities }
| { "_PermanentRule": "CantBeTheTargetOfSpells", "args": Spells }
| { "_PermanentRule": "CantBeTheTargetOfSpellsOrAbilities", "args": SpellsAndAbilities }
| { "_PermanentRule": "CantBeTurnedFaceUp" }
| { "_PermanentRule": "CantBecomeSuspected" }
| { "_PermanentRule": "CantBecomeTappedUnlessItIsBeingDeclaredAsAnAttacker" }
| { "_PermanentRule": "CantBlock" }
| { "_PermanentRule": "CantBlockAlone" }
| { "_PermanentRule": "CantBlockAttacker", "args": Permanent }
| { "_PermanentRule": "CantBlockAttackers", "args": Permanents }
| { "_PermanentRule": "CantBlockAttackersUnlessCost", "args": [Permanents, Cost] }
| { "_PermanentRule": "CantBlockUnlessAnotherDefender", "args": Permanents }
| { "_PermanentRule": "CantBlockUnlessAttackingPlayer", "args": Condition }
| { "_PermanentRule": "CantBlockUnlessCost", "args": Cost }
| { "_PermanentRule": "CantBlockUnlessOtherDefenders", "args": [Comparison, Permanents] }
| { "_PermanentRule": "CantCrew" }
| { "_PermanentRule": "CantHaveMoreThanNumberCountersOfType", "args": [GameNumber, CounterType] }
| { "_PermanentRule": "CantPhaseOut" }
| { "_PermanentRule": "CantTransform" }
| { "_PermanentRule": "SaddlesMountsAsThoughPowerWereGreater", "args": GameNumber }
| { "_PermanentRule": "CrewsVehiclesAsThoughPowerWereGreater", "args": GameNumber }
| { "_PermanentRule": "CrewsVehiclesUsingToughnessRatherThanPower" }
| { "_PermanentRule": "DamageDealtToItCantBePreventedOrRedirected" }
| { "_PermanentRule": "DecreaseEquipAbilityCostWhenTargetingAPermanent", "args": [Array<CostReductionSymbol>, Permanents] }
| { "_PermanentRule": "DetermineLethalDamageUsingPowerRatherThanToughness" }
| { "_PermanentRule": "DoesntUntapDuringControllersUntap" }
| { "_PermanentRule": "IsAColorlessSourceOfDamage" }
| { "_PermanentRule": "IsGoadedByPlayer", "args": Player }
| { "_PermanentRule": "MayAssignCombatDamageAsThoughNotBlocked" }
| { "_PermanentRule": "MayAssignCombatDamageDividedAsYouChooseAmongPlayerOrCreaturesAndPlaneswalkers", "args": [Player, Permanents] }
| { "_PermanentRule": "MayAssignCombatDamageToAPermanent", "args": Permanents }
| { "_PermanentRule": "MayBeExertedAsItAttacks" }
| { "_PermanentRule": "MayBeExertedAsItAttacksWithTrigger", "args": Actions }
| { "_PermanentRule": "MayChooseNotToUntapDuringUntap" }
| { "_PermanentRule": "MustAttack" }
| { "_PermanentRule": "MustAttackAPlayer", "args": Players }
| { "_PermanentRule": "MustAttackIfAnotherCreatureAttacks", "args": Permanents }
| { "_PermanentRule": "MustAttackPlaneswalker", "args": Permanent }
| { "_PermanentRule": "MustAttackPlayer", "args": Player }
| { "_PermanentRule": "MustBeBlocked" }
| { "_PermanentRule": "MustBeBlockedByADefender", "args": Permanents }
| { "_PermanentRule": "MustBeBlockedByAtLeastNumberDefenders", "args": GameNumber }
| { "_PermanentRule": "MustBeBlockedByEachDefender", "args": Permanents }
| { "_PermanentRule": "MustBeBlockedByExactlyOneDefender", "args": Permanents }
| { "_PermanentRule": "MustBlock" }
| { "_PermanentRule": "MustBlockAttacker", "args": Permanent }
| { "_PermanentRule": "MustBlockEachAttacker" }
| { "_PermanentRule": "UntapsDuringOtherPlayersUntapSteps", "args": Players };
type PermanentsAndGraveyardCards =
| { "_PermanentsAndGraveyardCards": "IsCardtype", "args": CardType }
| { "_PermanentsAndGraveyardCards": "WasntSacrificed" };
type PermanentsAndSpells =
| { "_PermanentsAndSpells": "AnyPermanentOrSpell" };
type Permanents =
| { "_Permanents": "TheTokensCreatedByAPlayerThisWay", "args": Players }
| { "_Permanents": "IsNonToken" }
| { "_Permanents": "IsToken" }
| { "_Permanents": "TheCreatedTokens" }
| { "_Permanents": "TheTokensCreatedThisWay" }
| { "_Permanents": "IsntPrepared" }
| { "_Permanents": "APermanentWithTheHighestManaValue", "args": Permanents }
| { "_Permanents": "APermanentWithTheLowestManaValue", "args": Permanents }
| { "_Permanents": "AdditionalCostWasPaid" }
| { "_Permanents": "And", "args": Array<Permanents> }
| { "_Permanents": "AnyPermanent" }
| { "_Permanents": "AttachedToAPermanent", "args": Permanents }
| { "_Permanents": "AttachedToPermanent", "args": Permanent }
| { "_Permanents": "AttachedToPlayer", "args": Player }
| { "_Permanents": "AttackedABattleThisTurn", "args": Permanents }
| { "_Permanents": "AttackedDuringLastPlayersTurn", "args": Player }
| { "_Permanents": "AttackedPlayerThisCombat", "args": Player }
| { "_Permanents": "AttackedPlayerThisTurn", "args": Player }
| { "_Permanents": "AttackedSincePlayersLastUpkeep", "args": Player }
| { "_Permanents": "AttackedThisCombat" }
| { "_Permanents": "AttackedThisTurn" }
| { "_Permanents": "BandedWith", "args": Permanent }
| { "_Permanents": "BasePowerAndToughnessIsEqualTo", "args": PT }
| { "_Permanents": "BasePowerIs", "args": Comparison }
| { "_Permanents": "BaseToughnessIs", "args": Comparison }
| { "_Permanents": "BlockedAnAttackerThisTurn", "args": Permanents }
| { "_Permanents": "BlockedAttackerThisTurn", "args": Permanent }
| { "_Permanents": "BlockedDeadAttacker" }
| { "_Permanents": "BlockedSincePlayersLastUpkeep", "args": Player }
| { "_Permanents": "BlockedThisCombat" }
| { "_Permanents": "BlockedThisTurn" }
| { "_Permanents": "CanBeEnchantedByDeadGuest" }
| { "_Permanents": "CastByPlayer", "args": Player }
| { "_Permanents": "CastByPlayerDuringPlayersMainPhase", "args": [Player, Player] }
| { "_Permanents": "CastByPlayerFromAnyPlayersGraveyard", "args": [Player, Players] }
| { "_Permanents": "CastByPlayerFromHand", "args": [Player, Player] }
| { "_Permanents": "CastByPlayerFromPlayersGraveyard", "args": [Player, Player] }
| { "_Permanents": "CastByPlayerThisTurn", "args": Player }
| { "_Permanents": "CastFromPlayersLibrary", "args": Player }
| { "_Permanents": "CoinCameUpTails" }
| { "_Permanents": "ControlledByAPlayer", "args": Players }
| { "_Permanents": "ControlledByPlayer", "args": Player }
| { "_Permanents": "ControlledSinceBeforeCombatThisTurn" }
| { "_Permanents": "ControlledSinceBeginningOfMostRecentTurn" }
| { "_Permanents": "ControlledSinceBeginningOfTurn" }
| { "_Permanents": "ConvokedPermanent", "args": Permanent }
| { "_Permanents": "ConvokedSpell", "args": Spell }
| { "_Permanents": "CouldBeTargetedBySpell", "args": Spell }
| { "_Permanents": "CouldBeTargetedBySpell_ThoseTargets" }
| { "_Permanents": "CouldProduce", "args": ManaProduceSymbol }
| { "_Permanents": "CouldProduceAnyManaColorPermanentCouldProduce", "args": Permanent }
| { "_Permanents": "CouldntAttackThisTurn" }
| { "_Permanents": "CrewedVehicleThisTurn", "args": Permanent }
| { "_Permanents": "DealtCombatDamageToAPlayerThisCombat", "args": Players }
| { "_Permanents": "DealtCombatDamageToAPlayerThisTurn", "args": Players }
| { "_Permanents": "DealtCombatDamageToCreatureThisTurn", "args": Permanents }
| { "_Permanents": "DealtDamageAmountThisTurn", "args": Comparison }
| { "_Permanents": "DealtDamageAmountToPlayerThisTurn", "args": [Comparison, Player] }
| { "_Permanents": "DealtDamageThisTurn" }
| { "_Permanents": "DealtDamageToAPermanentThisTurn", "args": Permanents }
| { "_Permanents": "DealtDamageToAnyPlayerThisTurn", "args": Players }
| { "_Permanents": "DealtDamageToPermanentThisTurn", "args": Permanent }
| { "_Permanents": "DealtDamageToPlayerThisTurn", "args": Player }
| { "_Permanents": "DevouredACreature" }
| { "_Permanents": "DidntAttackThisTurn" }
| { "_Permanents": "DidntEnterTheBattlefieldThisTurn" }
| { "_Permanents": "DidntExertThisTurn" }
| { "_Permanents": "DoesntHaveAName" }
| { "_Permanents": "DoesntHaveAbility", "args": CheckHasable }
| { "_Permanents": "DoesntShareACreatureTypeWithPermanent", "args": Permanent }
| { "_Permanents": "DoesntShareANameWithACardInPlayersGraveyard", "args": [Cards, Player] }
| { "_Permanents": "DoesntShareANameWithAPermanent", "args": Permanents }
| { "_Permanents": "EmergeCostWasPaid" }
| { "_Permanents": "EnlistedAPermanentThisCombat", "args": Permanents }
| { "_Permanents": "EnteredFromAPlayersGraveyard", "args": Players }
| { "_Permanents": "EnteredFromPlayersGraveyard", "args": Player }
| { "_Permanents": "EnteredFromPlayersLibrary", "args": Player }
| { "_Permanents": "EnteredTheBattlefieldSinceLastTurnOf", "args": Player }
| { "_Permanents": "EnteredTheBattlefieldThisTurn" }
| { "_Permanents": "EnteredTheBattlefieldUnderPlayersControlThisTurn", "args": Player }
| { "_Permanents": "EnteredUnderPlayersControl", "args": Player }
| { "_Permanents": "Escaped" }
| { "_Permanents": "ExceptFor", "args": Permanents }
| { "_Permanents": "ExploitedCreature", "args": Permanent }
| { "_Permanents": "FoughtThisTurn" }
| { "_Permanents": "HadAnAbilityActivatedThisTurn" }
| { "_Permanents": "HadCountersOfTypePutOnItByAPlayerThisTurn", "args": [CounterType, Players] }
| { "_Permanents": "HadCountersPutOnItThisWay" }
| { "_Permanents": "HadToAttackThisCombat" }
| { "_Permanents": "HasACounter" }
| { "_Permanents": "HasACounterOfType", "args": CounterType }
| { "_Permanents": "HasANameSticker" }
| { "_Permanents": "HasAPowerAndToughnessSticker" }
| { "_Permanents": "HasASticker" }
| { "_Permanents": "HasAbilities" }
| { "_Permanents": "HasAbility", "args": CheckHasable }
| { "_Permanents": "HasAnActivatedAbilityOtherThanThisActivatedAbility" }
| { "_Permanents": "HasAnAdventure" }
| { "_Permanents": "HasAnArtSticker" }
| { "_Permanents": "HasAnAttachment", "args": Permanents }
| { "_Permanents": "HasBeenGoaded" }
| { "_Permanents": "HasDealtDamageThisGame" }
| { "_Permanents": "HasExiledCards" }
| { "_Permanents": "HasExiledNumCards", "args": Comparison }
| { "_Permanents": "HasNoAbilities" }
| { "_Permanents": "HasNoCounters" }
| { "_Permanents": "HasNoCountersOfType", "args": CounterType }
| { "_Permanents": "HasNonBasicLandType" }
| { "_Permanents": "HasNumberCounters", "args": Comparison }
| { "_Permanents": "HasNumberCountersOfType", "args": [Comparison, CounterType] }
| { "_Permanents": "HasTheMostVotesOrTiedForTheMostVotes" }
| { "_Permanents": "HasXInManaCost" }
| { "_Permanents": "HasntBeenPhasedOutWithThisAbility" }
| { "_Permanents": "HasntDealtDamageThisGame" }
| { "_Permanents": "InTheChosenPile" }
| { "_Permanents": "InTheChosenPiles" }
| { "_Permanents": "InTheChosenSector" }
| { "_Permanents": "InThePermanentPileChosenThisWay" }
| { "_Permanents": "InThePileChosenForPermanent", "args": Permanent }
| { "_Permanents": "IntensityIs", "args": Comparison }
| { "_Permanents": "IsACommander" }
| { "_Permanents": "IsARingBearer" }
| { "_Permanents": "IsAllColors" }
| { "_Permanents": "IsAnOutlaw" }
| { "_Permanents": "IsArtifactType", "args": ArtifactType }
| { "_Permanents": "IsAttacking" }
| { "_Permanents": "IsAttackingABattle", "args": Permanents }
| { "_Permanents": "IsAttackingAPermanent", "args": Permanents }
| { "_Permanents": "IsAttackingAPlayer", "args": Players }
| { "_Permanents": "IsAttackingAPlayerOrPlaneswalkerTheyControl", "args": Players }
| { "_Permanents": "IsAttackingAlone" }
| { "_Permanents": "IsAttackingPlayer", "args": Player }
| { "_Permanents": "IsAttackingPlayerOrPlaneswalkerTheyControl", "args": Player }
| { "_Permanents": "IsAttackingTheSamePlayerOrPlaneswalkerAsCreature", "args": Permanent }
| { "_Permanents": "IsBlocked" }
| { "_Permanents": "IsBlockedByADefender", "args": Permanents }
| { "_Permanents": "IsBlockedByDefender", "args": Permanent }
| { "_Permanents": "IsBlocking" }
| { "_Permanents": "IsBlockingAlone" }
| { "_Permanents": "IsBlockingAnAttacker", "args": Permanents }
| { "_Permanents": "IsBlockingAttacker", "args": Permanent }
| { "_Permanents": "IsCardtype", "args": CardType }
| { "_Permanents": "IsCardtypeVariable", "args": CardtypeVariable }
| { "_Permanents": "IsColor", "args": Color }
| { "_Permanents": "IsColored" }
| { "_Permanents": "IsColorless" }
| { "_Permanents": "IsCreatureType", "args": CreatureType }
| { "_Permanents": "IsCreatureTypePlayerNotedForCardDuringDraft", "args": [Player, string] }
| { "_Permanents": "IsCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_Permanents": "IsDamaged" }
| { "_Permanents": "IsDoubleFaced" }
| { "_Permanents": "IsEnchanted" }
| { "_Permanents": "IsEnchantedByANumberOfEnchantingPermanents", "args": [Comparison, Permanents] }
| { "_Permanents": "IsEnchantedByAPermanent", "args": Permanents }
| { "_Permanents": "IsEnchantingPermanent", "args": Permanent }
| { "_Permanents": "IsEnchantmentType", "args": EnchantmentType }
| { "_Permanents": "IsEquipped" }
| { "_Permanents": "IsFaceDown" }
| { "_Permanents": "IsFaceUp" }
| { "_Permanents": "IsFirstLandPlayedByPlayerThisTurn" }
| { "_Permanents": "IsHarnessed" }
| { "_Permanents": "IsHistoric" }
| { "_Permanents": "IsLandType", "args": LandType }
| { "_Permanents": "IsLandTypeVariable", "args": LandTypeVariable }
| { "_Permanents": "IsModified" }
| { "_Permanents": "IsMonocolored" }
| { "_Permanents": "IsMonstrous" }
| { "_Permanents": "IsMulticolored" }
| { "_Permanents": "IsNamed", "args": NameFilter }
| { "_Permanents": "IsNonArtifactType", "args": ArtifactType }
| { "_Permanents": "IsNonCardtype", "args": CardType }
| { "_Permanents": "IsNonColor", "args": Color }
| { "_Permanents": "IsNonCreatureType", "args": CreatureType }
| { "_Permanents": "IsNonCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_Permanents": "IsNonEnchantmentType", "args": EnchantmentType }
| { "_Permanents": "IsNonLandType", "args": LandType }
| { "_Permanents": "IsNonOutlaw" }
| { "_Permanents": "IsNonPlaneswalkerType", "args": PlaneswalkerType }
| { "_Permanents": "IsNonSupertype", "args": SuperType }
| { "_Permanents": "IsNotACommander" }
| { "_Permanents": "IsNotAllColors" }
| { "_Permanents": "IsNotNamed", "args": NameFilter }
| { "_Permanents": "IsNotSuspected" }
| { "_Permanents": "IsNumberColors", "args": Comparison }
| { "_Permanents": "IsPaired" }
| { "_Permanents": "IsPairedWithA", "args": Permanents }
| { "_Permanents": "IsPermanent" }
| { "_Permanents": "IsPlaneswalkerType", "args": PlaneswalkerType }
| { "_Permanents": "IsPlaneswalkerTypeVariable", "args": PlaneswalkerTypeVariable }
| { "_Permanents": "IsRenowned" }
| { "_Permanents": "IsSaddled" }
| { "_Permanents": "IsSupertype", "args": SuperType }
| { "_Permanents": "IsSuspected" }
| { "_Permanents": "IsTapped" }
| { "_Permanents": "IsTheChosenPermanentFilter" }
| { "_Permanents": "IsTheFirstChosenPermanentFilter" }
| { "_Permanents": "IsTheSecondChosenPermanentFilter" }
| { "_Permanents": "IsTheThirdChosenPermanentFilter" }
| { "_Permanents": "IsTransformed" }
| { "_Permanents": "IsUnblocked" }
| { "_Permanents": "IsUntapped" }
| { "_Permanents": "IsWorthy" }
| { "_Permanents": "IsYourCommander" }
| { "_Permanents": "IsntAttacking" }
| { "_Permanents": "IsntBlocking" }
| { "_Permanents": "IsntEnchanted" }
| { "_Permanents": "IsntSaddled" }
| { "_Permanents": "ItEscaped" }
| { "_Permanents": "ItWasCast" }
| { "_Permanents": "MadnessCostWasPaid" }
| { "_Permanents": "ManaAmountOfSameColorWasSpentToCastIt", "args": Comparison }
| { "_Permanents": "ManaAmountOfTypeWasSpentToCastIt", "args": [Comparison, Color] }
| { "_Permanents": "ManaFromAPermanentWasSpentToCastIt", "args": Permanents }
| { "_Permanents": "ManaValueIs", "args": Comparison }
| { "_Permanents": "ManaWasSpentToCastIt", "args": Array<ManaProduce> }
| { "_Permanents": "NoManaWasSpentToCastIt" }
| { "_Permanents": "Not", "args": Permanents }
| { "_Permanents": "NotChosenByAPlayerThisWay", "args": Players }
| { "_Permanents": "NotChosenThisWay" }
| { "_Permanents": "NotControlledSinceBeginningOfTurn" }
| { "_Permanents": "NotInTheChosenPile" }
| { "_Permanents": "NotPutOntoBattlefieldByAbility", "args": Ability }
| { "_Permanents": "NumOtherPermanentsAreOnTheBattlefield", "args": [Comparison, Permanents] }
| { "_Permanents": "NumberOfColorsOfManaSpentToCastItIs", "args": Comparison }
| { "_Permanents": "OnTheBattlefield" }
| { "_Permanents": "Or", "args": Array<Permanents> }
| { "_Permanents": "Other", "args": Permanent }
| { "_Permanents": "OwnedByAPlayer", "args": Players }
| { "_Permanents": "PermanentHasNotRemovedACounterOfTypeFromIt", "args": [Permanent, CounterType] }
| { "_Permanents": "PermanentPutACounterOfTypeOnIt", "args": [Permanent, CounterType] }
| { "_Permanents": "PlayedByAPlayer", "args": Players }
| { "_Permanents": "PlayerControlledAPermanentAsCast", "args": [Player, Permanents] }
| { "_Permanents": "PlayerHasCastAnotherSpellThisTurn", "args": [Player, Spells] }
| { "_Permanents": "PlayerRevealedACardAsCast", "args": [Player, Cards] }
| { "_Permanents": "PowerAndToughnessAreEqual" }
| { "_Permanents": "PowerAndToughnessArentEqual" }
| { "_Permanents": "PowerAndToughnessIsEqualTo", "args": PT }
| { "_Permanents": "PowerIs", "args": Comparison }
| { "_Permanents": "PowerIsDifferentFromItsBasePower" }
| { "_Permanents": "PowerIsGreaterThanBasePower" }
| { "_Permanents": "PowerIsLessThanToughness" }
| { "_Permanents": "ProtectedByAPlayer", "args": Players }
| { "_Permanents": "ProwlCostWasPaid" }
| { "_Permanents": "PutOntoBattlefieldByPermanent", "args": Permanent }
| { "_Permanents": "PutOntoBattlefieldByScheme", "args": SingleScheme }
| { "_Permanents": "ReceivedAVote" }
| { "_Permanents": "Ref_TargetPermanents" }
| { "_Permanents": "Ref_TargetPermanents1" }
| { "_Permanents": "Ref_TargetPermanents2" }
| { "_Permanents": "RegeneratedThisTurn" }
| { "_Permanents": "RemovedFromCombatThisWay" }
| { "_Permanents": "SaddledPermanentThisTurn", "args": Permanent }
| { "_Permanents": "SharesACardtypeWithExiledCard", "args": CardInExile }
| { "_Permanents": "SharesACardtypeWithGraveyardCard", "args": CardInGraveyards }
| { "_Permanents": "SharesACardtypeWithPermanent", "args": Permanent }
| { "_Permanents": "SharesACardtypeWithPermanentFromAmongCardtypes", "args": [Permanent, Array<CardType>] }
| { "_Permanents": "SharesACardtypeWithThatDeadPermanent" }
| { "_Permanents": "SharesACardtypeWithTheSacrificedPermanent" }
| { "_Permanents": "SharesAColorWithAnyManaColorProduced" }
| { "_Permanents": "SharesAColorWithColorChosenByPlayerDuringDraft", "args": [Player, string] }
| { "_Permanents": "SharesAColorWithPermanent", "args": Permanent }
| { "_Permanents": "SharesAColorWithTheTopCardOfPlayersLibrary", "args": Player }
| { "_Permanents": "SharesAColorWithhTheMostCommonColorOrAColorTiedForMostCommonColorAmongPermanents", "args": Permanents }
| { "_Permanents": "SharesACreatureTypeWithDeadPermanent" }
| { "_Permanents": "SharesACreatureTypeWithExiledCard", "args": CardInExile }
| { "_Permanents": "SharesACreatureTypeWithPermanent", "args": Permanent }
| { "_Permanents": "SharesACreatureTypeWithPermanents", "args": Permanents }
| { "_Permanents": "SharesANameOriginallyPrintedInAntiquities" }
| { "_Permanents": "SharesANameOriginallyPrintedInArabianNights" }
| { "_Permanents": "SharesANameOriginallyPrintedInHomelands" }
| { "_Permanents": "SharesANameWithAPermanent", "args": Permanents }
| { "_Permanents": "SharesANameWithAPermanentThatDealtDamageToPlayerLastTurn", "args": Player }
| { "_Permanents": "SharesANameWithCardInPlayersGraveyard", "args": [Cards, Player] }
| { "_Permanents": "SharesANameWithExiled", "args": CardInExile }
| { "_Permanents": "SharesANameWithGraveyardCard", "args": CardInGraveyards }
| { "_Permanents": "SharesANameWithPermanent", "args": Permanent }
| { "_Permanents": "SharesANameWithSpell", "args": Spell }
| { "_Permanents": "SharesAPermanentCardtypeWithPermanent", "args": Permanent }
| { "_Permanents": "SharesASectorWithPermanent", "args": Permanent }
| { "_Permanents": "SharesCardtypeWithPermanent", "args": [CardType, Permanent] }
| { "_Permanents": "SinglePermanent", "args": Permanent }
| { "_Permanents": "SneakCostWasPaid" }
| { "_Permanents": "SneakCostWasPaidThisTurn" }
| { "_Permanents": "SnowManaWasSpentToCastIt" }
| { "_Permanents": "SpectacleCostWasPaid" }
| { "_Permanents": "StartedThisTurnUntapped" }
| { "_Permanents": "SurgeCostWasPaid" }
| { "_Permanents": "TargetsAPermanent_ThosePermanents" }
| { "_Permanents": "TheCardsConjuredOntoTheBattlefieldThisWay" }
| { "_Permanents": "TheChosenCreatures" }
| { "_Permanents": "TheChosenPermanents" }
| { "_Permanents": "TheNthSpellCastByPlayerThisTurn", "args": [GameNumber, Spells, Player] }
| { "_Permanents": "ThePermanentsAffectedThisWay" }
| { "_Permanents": "ThePermanentsChosenThisWay" }
| { "_Permanents": "ThePermanentsExiledThisWay" }
| { "_Permanents": "ThePermanentsGainedControlOfThisWay" }
| { "_Permanents": "ThePermanentsList" }
| { "_Permanents": "ThePermanentsNotChosenThisWay" }
| { "_Permanents": "ThePermanentsPhasedOutThisWay" }
| { "_Permanents": "ThePermanentsPutOnTheBattlefieldThisWay" }
| { "_Permanents": "ThePermanentsSacrificedThisWay" }
| { "_Permanents": "ThePermanentsTappedThisWay" }
| { "_Permanents": "TheSacrificedPermanents" }
| { "_Permanents": "TheSecretlyChosenPermanents" }
| { "_Permanents": "TheUnchosenPermanents" }
| { "_Permanents": "TotalPowerAndToughnessIs", "args": Comparison }
| { "_Permanents": "ToughnessIs", "args": Comparison }
| { "_Permanents": "TributeWasntPaid" }
| { "_Permanents": "Trigger_ThoseCreatures" }
| { "_Permanents": "Trigger_ThosePermanents" }
| { "_Permanents": "WasAttachedToDeadPermanent" }
| { "_Permanents": "WasBargained" }
| { "_Permanents": "WasBlockedByADefenderThisTurn", "args": Permanents }
| { "_Permanents": "WasBlockedByDefenderThisCombat", "args": Permanent }
| { "_Permanents": "WasBlockedByDefenderThisTurn", "args": Permanent }
| { "_Permanents": "WasBlockedSincePlayersLastUpkeep", "args": Player }
| { "_Permanents": "WasBlockedThisTurn" }
| { "_Permanents": "WasBlockingDeadDefender" }
| { "_Permanents": "WasCast" }
| { "_Permanents": "WasCastByAPlayer", "args": Players }
| { "_Permanents": "WasCastForItsWarpCost" }
| { "_Permanents": "WasCastFromAPlayersGraveyard", "args": Players }
| { "_Permanents": "WasCastFromTheirHand" }
| { "_Permanents": "WasCastThisTurn" }
| { "_Permanents": "WasCastUsingWebSlinging" }
| { "_Permanents": "WasCrewedByACreatureThisTurn", "args": Permanents }
| { "_Permanents": "WasCrewedByNumberCreatures", "args": Comparison }
| { "_Permanents": "WasDealtAnAmountOfDamageThisTurn", "args": Comparison }
| { "_Permanents": "WasDealtDamageByASourceThisTurn", "args": DamageSources }
| { "_Permanents": "WasDealtDamageByAnyPermanentThisTurn", "args": Permanents }
| { "_Permanents": "WasDealtDamageByPermanentThisGame", "args": Permanent }
| { "_Permanents": "WasDealtDamageByPermanentThisTurn", "args": Permanent }
| { "_Permanents": "WasDealtDamageBySpellThisTurn", "args": Spells }
| { "_Permanents": "WasDealtDamageByThisSpell" }
| { "_Permanents": "WasDealtDamageThisTurn" }
| { "_Permanents": "WasDealtDamageThisWay" }
| { "_Permanents": "WasDealtExcessDamageThisTurn" }
| { "_Permanents": "WasDealtExcessDamageThisWay" }
| { "_Permanents": "WasDealtNoncombatDamageThisTurn" }
| { "_Permanents": "WasEmbalmed" }
| { "_Permanents": "WasGoadedThisWay" }
| { "_Permanents": "WasKicked" }
| { "_Permanents": "WasKickedTwice" }
| { "_Permanents": "WasKickedWithKicker", "args": Array<ManaSymbol> }
| { "_Permanents": "WasTappedToPayForAbilitiesOfPermanent", "args": Permanent }
| { "_Permanents": "WasTurnedFaceUpThisTurn" }
| { "_Permanents": "WasUnearthed" }
| { "_Permanents": "WasUntappedThisWay" }
| { "_Permanents": "WasntCast" }
| { "_Permanents": "WasntCastFromAPlayersHand", "args": Players }
| { "_Permanents": "WasntCastFromHand" }
| { "_Permanents": "WasntCastFromTheirHand" }
| { "_Permanents": "WasntDealtDamageThisTurn" }
| { "_Permanents": "WasntKicked" }
| { "_Permanents": "XIs", "args": Comparison };
type PerpetualEffect =
| { "_PerpetualEffect": "AddAbilityFromPermanentHasable", "args": [Permanent, Array<CheckHasable>] }
| { "_PerpetualEffect": "AddSupertype", "args": SuperType }
| { "_PerpetualEffect": "SetColor", "args": SettableColor }
| { "_PerpetualEffect": "SetManaCost", "args": Array<ManaSymbolX> }
| { "_PerpetualEffect": "Incorporate", "args": Array<ManaSymbol> }
| { "_PerpetualEffect": "SetCreatureTypes", "args": Array<CreatureType> }
| { "_PerpetualEffect": "AddColor", "args": SettableColor }
| { "_PerpetualEffect": "AddAbility", "args": Array<Rule> }
| { "_PerpetualEffect": "AddAbilityVariable", "args": AbilityVariable }
| { "_PerpetualEffect": "AddAbilityFromCardsHasable", "args": Array<CheckHasable> }
| { "_PerpetualEffect": "AddArtifactType", "args": ArtifactType }
| { "_PerpetualEffect": "AddCardtype", "args": CardType }
| { "_PerpetualEffect": "AddCreatureType", "args": CreatureType }
| { "_PerpetualEffect": "AddLandType", "args": LandType }
| { "_PerpetualEffect": "AdjustPT", "args": [number, number] }
| { "_PerpetualEffect": "AdjustPTX", "args": [ModX, ModX, GameNumber] }
| { "_PerpetualEffect": "DoubleCreaturesPowerAndToughness" }
| { "_PerpetualEffect": "LosesAbility", "args": CheckHasable }
| { "_PerpetualEffect": "LosesAllAbilities" }
| { "_PerpetualEffect": "SetCardtype", "args": CardType }
| { "_PerpetualEffect": "SetCreatureType", "args": CreatureType }
| { "_PerpetualEffect": "SetPT", "args": PT }
| { "_PerpetualEffect": "SetPower", "args": GameNumber };
type PhasedOutEffect =
| { "_PhasedOutEffect": "TapAsPhasesIn" };
type Phenomena =
| { "_Phenomena": "SinglePhenomenon", "args": Phenomenon };
type Phenomenon =
| { "_Phenomenon": "ThisPhenomenon" };
type Planar =
| { "_OracleCard": "Planar", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, };
type Plane =
| { "_Plane": "ThisPlane" };
type Planes =
| { "_Planes": "SinglePlane", "args": Plane }
| { "_Planes": "IsNamed", "args": NameFilter };
type PlaneswalkerType =
| "Ajani"
| "Aminatou"
| "Angrath"
| "Arlinn"
| "Ashiok"
| "Bahamut"
| "Basri"
| "Bolas"
| "Calix"
| "Chandra"
| "Comet"
| "Dack"
| "Dakkon"
| "Daretti"
| "Davriel"
| "Deb"
| "Dellian"
| "Dihada"
| "Domri"
| "Dovin"
| "Ellywick"
| "Elminster"
| "Elspeth"
| "Estrid"
| "Freyalise"
| "Garruk"
| "Gideon"
| "Grist"
| "Guff"
| "Huatli"
| "Jace"
| "Jared"
| "Jaya"
| "Jeska"
| "Kaito"
| "Karn"
| "Kasmina"
| "Kaya"
| "Kiora"
| "Koth"
| "Liliana"
| "Lolth"
| "Lukka"
| "Minsc"
| "Mordenkainen"
| "Nahiri"
| "Narset"
| "Niko"
| "Nissa"
| "Nixilis"
| "Oko"
| "Quintorius"
| "Ral"
| "Rowan"
| "Saheeli"
| "Samut"
| "Sarkhan"
| "Serra"
| "Sivitri"
| "Sorin"
| "Szat"
| "Tamiyo"
| "Tasha"
| "Teferi"
| "Teyo"
| "Tezzeret"
| "Tibalt"
| "Tyvar"
| "Ugin"
| "Urza"
| "Venser"
| "Vivien"
| "Vraska"
| "Vronos"
| "Will"
| "Windgrace"
| "Wrenn"
| "Xenagos"
| "Yanggu"
| "Yanling"
| "Zariel";
type PlaneswalkerTypeVariable =
| { "_PlaneswalkerTypeVariable": "TheChosenPlaneswalkerType" };
type PlaneType =
| "Alara"
| "AlfavaMetraxis"
| "Amonkhet"
| "AndrozaniMinor"
| "Antausia"
| "Apalapucia"
| "Arcavios"
| "Arkhos"
| "Avishkar"
| "Azgol"
| "Belenon"
| "BolassMeditationRealm"
| "Capenna"
| "Cridhe"
| "Darillium"
| "Dominaria"
| "Earth"
| "Echoir"
| "Eldraine"
| "Equilor"
| "Ergamon"
| "Fabacin"
| "Fiora"
| "Gallifrey"
| "Gargantikar"
| "Gobakhan"
| "HorseheadNebula"
| "Ikoria"
| "Innistrad"
| "Iquatana"
| "Ir"
| "Ixalan"
| "Kaldheim"
| "Kamigawa"
| "Kandoka"
| "Karsus"
| "Kephalai"
| "Kinshala"
| "Kolbahan"
| "Kylem"
| "Kyneth"
| "Lorwyn"
| "Luvion"
| "Mars"
| "Mercadia"
| "Mirrodin"
| "Moag"
| "Mongseng"
| "Moon"
| "Muraganda"
| "Necros"
| "NewEarth"
| "NewPhyrexia"
| "OutsideMuttersSpiral"
| "Phyrexia"
| "Pyrulea"
| "Rabiah"
| "Rath"
| "Ravnica"
| "Regatha"
| "Segovia"
| "SerrasRealm"
| "Shadowmoor"
| "Shandalar"
| "Shenmeng"
| "Skaro"
| "Spaceship"
| "Tarkir"
| "TheAbyss"
| "TheDalekAsylum"
| "TheLibrary"
| "Theros"
| "Time"
| "Trenzalore"
| "UnknownPlanet"
| "Ulgrotha"
| "Valla"
| "Vryn"
| "Wildfire"
| "Xerex"
| "Zendikar"
| "Zhalfir";
type PlayerEffect =
| { "_PlayerEffect": "CantGetCounters" }
| { "_PlayerEffect": "CantGetCountersOfType", "args": CounterType }
| { "_PlayerEffect": "MayActivatePowerUpAbilitiesOfPermanentsAnAdditionalTime", "args": Permanents }
| { "_PlayerEffect": "MayPayAlternateCostForFirstPowerUpCostEachTurn", "args": Array<ManaSymbol> }
| { "_PlayerEffect": "MayCastExiledCardForAlternateCost", "args": [CardInExile, Cost] }
| { "_PlayerEffect": "MayCastASpellFromAmongExileWithoutPayingOnceEachTurn", "args": [Spells, CardsInExile] }
| { "_PlayerEffect": "MayCastASpellFromHandWithoutPayingOnceEachPlayersTurn", "args": Spells }
| { "_PlayerEffect": "MayCastExiledCardAndMaySpendManaAsThoughAnyTypeToCastIntoExile", "args": CardInExile }
| { "_PlayerEffect": "MayCastSpellsFromAmongExiledAndMaySpendManaAsThoughAnyTypeToCastAndAsThoughTheyHadFlash", "args": [Spells, CardsInExile] }
| { "_PlayerEffect": "MayCastSpellsFromGraveyardUsingTheirSneakAbility", "args": [Spells, CardsInGraveyards] }
| { "_PlayerEffect": "MayCastSpellsFromGraveyardWithEffect", "args": [Spells, CardsInGraveyards, Array<SpellEffect>] }
| { "_PlayerEffect": "MayCastSpellsFromTopOfLibraryAndSpellsOfTypeWithEffect", "args": [Spells, Spells, Array<SpellEffect>] }
| { "_PlayerEffect": "MayCastTopCardOfLibrary" }
| { "_PlayerEffect": "MayPlayCardsMilledThisWay" }
| { "_PlayerEffect": "SpellsCastGainAbility", "args": [Spells, Array<SpellEffect>] }
| { "_PlayerEffect": "MayPlayLandsFromAmongExiledWithEffect", "args": [CardsInExile, Array<EnterFlag>] }
| { "_PlayerEffect": "MayPlayOneCardFromAmongExiledWithoutPaying", "args": CardsInExile }
| { "_PlayerEffect": "FirstTwoCoinFlipsEachTurnAreHeadsAndYouWin" }
| { "_PlayerEffect": "MayCastASpellFromAmongCardsMilledThisWay", "args": Spells }
| { "_PlayerEffect": "MayCastASpellFromTheirGraveyardOnceEachTurnWithEffect", "args": [Spells, Array<SpellEffect>] }
| { "_PlayerEffect": "MayCastGraveyardCardUsingWarpAbility", "args": CardInGraveyards }
| { "_PlayerEffect": "MayCastSpellsFromAmongExiledForAdditionalCost", "args": [Spells, CardsInExile, Cost] }
| { "_PlayerEffect": "MayPlayExiledCardsWithEffect", "args": [CardsInExile, Array<SpellEffect>] }
| { "_PlayerEffect": "MayPlayTopCardOfLibraryForAlternateCost", "args": Cost }
| { "_PlayerEffect": "MayPlayExiledCardsIf", "args": [CardsInExile, Condition] }
| { "_PlayerEffect": "MayCastASpellFromGraveyardWithAdditionalCostOnceEachPlayersTurn", "args": [Spells, Cost, Player] }
| { "_PlayerEffect": "MayPayAlternateCostForFirstUnearthCostEachTurn", "args": Array<ManaSymbol> }
| { "_PlayerEffect": "MayActivateExhaustAbilitiesAsThoughTheyHaventBeenActivated" }
| { "_PlayerEffect": "MayCastSpellsFromTopOfLibraryWithEffect", "args": [Spells, Array<SpellEffect>] }
| { "_PlayerEffect": "MayPlayGraveyardCards", "args": CardsInGraveyards }
| { "_PlayerEffect": "MayCastGraveyardCardAsAnAdventure", "args": CardInGraveyards }
| { "_PlayerEffect": "DecreaseCostToTurnPermanentsFaceUp", "args": [Permanents, Array<CostReductionSymbol>] }
| { "_PlayerEffect": "MayPlayCardsFromTopOfLibrary" }
| { "_PlayerEffect": "DecreaseUnlockCost", "args": Array<CostReductionSymbol> }
| { "_PlayerEffect": "MayCastSpellsForAlternateCostAsThoughTheyHadFlash", "args": [Spells, Cost] }
| { "_PlayerEffect": "MayCastSpellsFromGraveyardForAdditionalCostWithEffect", "args": [Spells, Player, Cost, Array<SpellEffect>] }
| { "_PlayerEffect": "CantPlayCardsFromHand" }
| { "_PlayerEffect": "DecreaseFlashbackCosts", "args": Array<ManaSymbol> }
| { "_PlayerEffect": "DecreaseCyclingCosts", "args": Array<ManaSymbol> }
| { "_PlayerEffect": "MayCastSpellsFromGraveyardForAdditionalCost", "args": [Spells, Player, Cost] }
| { "_PlayerEffect": "DecreasePlotFromHandCost", "args": Array<CostReductionSymbol> }
| { "_PlayerEffect": "MayCastGraveyardCardUsingBestowAbility", "args": CardInGraveyards }
| { "_PlayerEffect": "MayPlayALandOrCastASpellFromAmongCardsInGraveyardsOnceEachTurn", "args": [CardsInGraveyards, Players] }
| { "_PlayerEffect": "MayPlayExiledCardsAndPayAlternateCostToCast", "args": [CardsInExile, Cost] }
| { "_PlayerEffect": "MayPlayExiledCardsAndMaySpendManaAsThoughAnyTypeToCastWithTrigger", "args": [CardsInExile, Actions] }
| { "_PlayerEffect": "AsLoseUnspentMana", "args": [UnspentMana, Array<Action>] }
| { "_PlayerEffect": "MayCastASpellFromAmongCardsInPlayersGraveyardOnceEachTurn", "args": [Spells, CardsInGraveyards, Player] }
| { "_PlayerEffect": "MayPlayExiledCardsAndMaySpendManaAsThoughAnyTypeToCast", "args": CardsInExile }
| { "_PlayerEffect": "MayCastExiledCardAndMaySpendColorlessManaAsThoughAnyColorToCast", "args": CardInExile }
| { "_PlayerEffect": "MayPlotCardsFromTheTopOfTheirLibrary", "args": CardsInLibrary }
| { "_PlayerEffect": "MayPlayLandsFromAmongCardsInPlayersGraveyard", "args": [CardsInGraveyards, Player] }
| { "_PlayerEffect": "MayCastSpellsFromAmongCardsInPlayersGraveyard", "args": [Spells, CardsInGraveyards, Player] }
| { "_PlayerEffect": "MayCastSpellsFromAmongCardsInPlayersGraveyardForAlternateCost", "args": [Spells, CardsInGraveyards, Player, Cost] }
| { "_PlayerEffect": "GainsLifeRatherThanLoseLifeFromRadiation" }
| { "_PlayerEffect": "CantAttackPlayerOrPlaneswalkerControlledBy", "args": Player }
| { "_PlayerEffect": "CantAttackAPermanent", "args": Permanents }
| { "_PlayerEffect": "CantBeCausedToSacrificePermanentsByAbilities", "args": [Permanents, Abilities] }
| { "_PlayerEffect": "CantBeCausedToExilePermanentsByAbilities", "args": [Permanents, Abilities] }
| { "_PlayerEffect": "MayCastASpellFromGraveyardWithEffect", "args": [Spells, Player, Array<SpellEffect>] }
| { "_PlayerEffect": "SpellsCastFromExileHaveAbility", "args": [Spells, Array<SpellEffect>] }
| { "_PlayerEffect": "MayCastASpellFromAmongExiledCardsAndMaySpendManaAsThoughAnyColorToCastOnceEachPlayersTurn", "args": [Spells, CardsInExile, Player] }
| { "_PlayerEffect": "MayCastASpellFromAmongExiledCardsWithEffect", "args": [Spells, CardsInExile, Array<SpellEffect>] }
| { "_PlayerEffect": "DrawsCardsFromBottomOfTheirLibrary" }
| { "_PlayerEffect": "MayPlayExiledCardAndMaySpendManaAsThoughAnyTypeToCast", "args": CardInExile }
| { "_PlayerEffect": "MayCastOneSpellFromAmongExiledWithoutPaying", "args": [Spells, CardsInExile] }
| { "_PlayerEffect": "ReduceManaCostOfActivatedAbilitiesNotLessThanOneX", "args": [ActivatedAbilities, Array<CostReductionSymbolX>, GameNumber] }
| { "_PlayerEffect": "AsTheyCascadeTheyMayPutACardFromAmongExiledCardsOnBattlefiled", "args": [Cards, Array<EnterFlag>] }
| { "_PlayerEffect": "AssignsCombatDamageOfAttackingCreatures", "args": Permanents }
| { "_PlayerEffect": "AttackingDoesntCauseCreaturesToTapIf", "args": [Permanents, Condition] }
| { "_PlayerEffect": "CanActivateAbilitiesOnlyDuringTheirTurn" }
| { "_PlayerEffect": "CanBeTheTargetOfSpellsAndAbilitiesAsThoughTheyDidntHaveHexproof", "args": SpellsAndAbilities }
| { "_PlayerEffect": "CanCastSpellsFromRevealedHandOfPlayer", "args": Player }
| { "_PlayerEffect": "CanCastSpellsOnlyAnyTimeTheyCouldCastASorcery" }
| { "_PlayerEffect": "CanCastSpellsOnlyDuringTheirTurn" }
| { "_PlayerEffect": "CanForetellCardsDuringEachPlayersTurn", "args": Players }
| { "_PlayerEffect": "CanOnlyCastSpellsFromThierHand" }
| { "_PlayerEffect": "CanOnlyUntapCardsOfTypeOfTheirChoiceDuringTheirUntapStep", "args": Array<CardType> }
| { "_PlayerEffect": "CanPlayLandsFromRevealedHandOfPlayer", "args": Player }
| { "_PlayerEffect": "CantActivateAbilities", "args": ActivatedAbilities }
| { "_PlayerEffect": "CantActivateAbilitiesOfCardsInGraveyards" }
| { "_PlayerEffect": "CantActivateNonManaAbilities" }
| { "_PlayerEffect": "CantAttackPlayer", "args": Player }
| { "_PlayerEffect": "CantAttackWithCreatures", "args": Permanents }
| { "_PlayerEffect": "CantBeAttackedExceptBy", "args": Permanents }
| { "_PlayerEffect": "CantBeCausedToDiscardCardsBySpellAndAbilities", "args": SpellsAndAbilities }
| { "_PlayerEffect": "CantBeCausedToSacrificePermanentsBySpellAndAbilities", "args": [Permanents, SpellsAndAbilities] }
| { "_PlayerEffect": "CantBeTheTargetOfSpellsOrAbilities", "args": SpellsAndAbilities }
| { "_PlayerEffect": "CantBecomeTheMonarch" }
| { "_PlayerEffect": "CantBlockWithCreatures", "args": Permanents }
| { "_PlayerEffect": "CantBlockWithMoreThanOneCreature" }
| { "_PlayerEffect": "CantCastMoreThanNumberSpellsEachTurn", "args": [GameNumber, Spells] }
| { "_PlayerEffect": "CantCastSpells", "args": Spells }
| { "_PlayerEffect": "CantCastSpellsFromExile", "args": Spells }
| { "_PlayerEffect": "CantCastSpellsFromGraveyards", "args": Spells }
| { "_PlayerEffect": "CantCastSpellsFromLibraries", "args": Spells }
| { "_PlayerEffect": "CantCastSpellsFromTheirHand", "args": Spells }
| { "_PlayerEffect": "CantCycleCards" }
| { "_PlayerEffect": "CantDrawCards" }
| { "_PlayerEffect": "CantDrawMoreThanOneCardEachTurn" }
| { "_PlayerEffect": "CantGainLife" }
| { "_PlayerEffect": "CantLoseLife" }
| { "_PlayerEffect": "CantLoseTheGame" }
| { "_PlayerEffect": "CantPayLifeToActivateAbilities", "args": ActivatedAbilities }
| { "_PlayerEffect": "CantPayLifeToCastSpells", "args": Spells }
| { "_PlayerEffect": "CantPlayCardInHand", "args": CardInHand }
| { "_PlayerEffect": "CantPlayLands" }
| { "_PlayerEffect": "CantPlayLandsFromGraveyards" }
| { "_PlayerEffect": "CantPlayLandsFromTheirHand" }
| { "_PlayerEffect": "CantPlayLandsOfType", "args": Permanents }
| { "_PlayerEffect": "CantSacrificePermanents", "args": Permanents }
| { "_PlayerEffect": "CantSacrificePermanentsToActivateAbilities", "args": [Permanents, ActivatedAbilities] }
| { "_PlayerEffect": "CantSacrificePermanentsToCastSpells", "args": [Permanents, Spells] }
| { "_PlayerEffect": "CantSearchLibraries" }
| { "_PlayerEffect": "CantUntapMoreThanNumberPermanentsDuringTheirUntapStep", "args": [GameNumber, Permanents] }
| { "_PlayerEffect": "CantVentureIntoTheDungeonMoreThanOnceEachTurn" }
| { "_PlayerEffect": "CantWinTheGame" }
| { "_PlayerEffect": "ChoosesHowCreaturesBlock", "args": Permanents }
| { "_PlayerEffect": "ChoosesHowPlayersVote" }
| { "_PlayerEffect": "ChoosesWhichCreaturesAttack" }
| { "_PlayerEffect": "ChoosesWhichCreaturesBlockAndHowTheyBlock" }
| { "_PlayerEffect": "ControlsPlayersWhileTheyAreSearchingLibraries", "args": Players }
| { "_PlayerEffect": "DamageDoesntCauseLifeLoss" }
| { "_PlayerEffect": "DamageThatWouldReduceLifeTotalToLessThanNumberReducesItToThatNumberInstead", "args": GameNumber }
| { "_PlayerEffect": "DecreaseAbilityCostOfCardsInPlayersGraveyard", "args": [Cards, Player, Array<CostReductionSymbol>] }
| { "_PlayerEffect": "DecreaseBlitzCostsForEach", "args": [Array<ManaSymbol>, GameNumber] }
| { "_PlayerEffect": "DecreaseBoastAbilityCostForEach", "args": [Array<CostReductionSymbol>, GameNumber] }
| { "_PlayerEffect": "DecreaseCostOfForetellingCardsFromHand", "args": Array<ManaSymbol> }
| { "_PlayerEffect": "DecreaseDashCost", "args": Array<CostReductionSymbol> }
| { "_PlayerEffect": "DecreaseEquipAbilityCost", "args": Array<CostReductionSymbol> }
| { "_PlayerEffect": "DecreaseEquipAbilityCostWhenTargetingPermanent", "args": [Array<CostReductionSymbol>, Permanent] }
| { "_PlayerEffect": "DecreaseNinjutsuAbilityCost", "args": Array<CostReductionSymbol> }
| { "_PlayerEffect": "DecreaseSpellCost", "args": [Spells, Array<CostReductionSymbol>] }
| { "_PlayerEffect": "DecreaseSpellCostForEach", "args": [Spells, Array<CostReductionSymbol>, GameNumber] }
| { "_PlayerEffect": "DecreaseSpellCostForEachTarget", "args": [Spells, Array<CostReductionSymbol>] }
| { "_PlayerEffect": "DecreaseSpellCostOnlyColored", "args": [Spells, Array<CostReductionSymbol>] }
| { "_PlayerEffect": "DecreaseSpellCostX", "args": [Spells, Array<CostReductionSymbolX>, GameNumber] }
| { "_PlayerEffect": "DoesntLoseColoredManaAsStepsAndPhasesEnd", "args": UnspentMana }
| { "_PlayerEffect": "DoesntLoseManaAsStepsAndPhasesEnd" }
| { "_PlayerEffect": "DoesntLoseTheGameForHaving0OrLessLife" }
| { "_PlayerEffect": "DrawsACardDuringEachPlayersUntapStep", "args": Players }
| { "_PlayerEffect": "GetsAnAdditionalVote" }
| { "_PlayerEffect": "GetsAnOptionalAdditionalVote" }
| { "_PlayerEffect": "HasNoMaximumHandSize" }
| { "_PlayerEffect": "Hexproof" }
| { "_PlayerEffect": "HexproofFrom", "args": Protectable }
| { "_PlayerEffect": "IncreaseAbilityCost", "args": [ActivatedAbilities, Cost] }
| { "_PlayerEffect": "IncreaseDevotionToColorAndColorCombinationsByNumber", "args": GameNumber }
| { "_PlayerEffect": "IncreaseFlashBackCosts", "args": Array<ManaSymbol> }
| { "_PlayerEffect": "IncreaseMaximumHandSize", "args": GameNumber }
| { "_PlayerEffect": "IncreaseSpellCost", "args": [Spells, Cost] }
| { "_PlayerEffect": "IncreaseSpellCostForEach", "args": [Spells, Cost, GameNumber] }
| { "_PlayerEffect": "IncreaseSpellCostForEachTarget", "args": [Spells, Cost] }
| { "_PlayerEffect": "LifeTotalCantChange" }
| { "_PlayerEffect": "MayActionOnce", "args": Action }
| { "_PlayerEffect": "MayActivateAbilitiesOfCreaturesAsThoughTheyHadHaste", "args": Permanents }
| { "_PlayerEffect": "MayActivateEquipAbilitiesAnyTimeTheyCouldCastAnInstant" }
| { "_PlayerEffect": "MayActivateLoyaltyAbilitiesOfPlanewalkerTwice", "args": Permanent }
| { "_PlayerEffect": "MayActivateLoyaltyAbilitiesTwiceEachTurn", "args": Permanents }
| { "_PlayerEffect": "MayActivateLoyaltyAbilityOfPlaneswalkerAnyTimeTheyCouldCastAnInstant", "args": Permanent }
| { "_PlayerEffect": "MayActivateLoyaltyAbilityOfPlaneswalkerDuringEachPlayersTurnAndAnyTimeTheyCouldCastAnInstant", "args": [Permanent, Players] }
| { "_PlayerEffect": "MayActivateLoyaltyAbilityOfPlaneswalkersDuringEachPlayersTurnAndAnyTimeTheyCouldCastAnInstant", "args": [Permanents, Players] }
| { "_PlayerEffect": "MayActivateLoyaltyAbilityOfPlanewalkerAnAdditionalNumberTimes", "args": [Permanent, GameNumber] }
| { "_PlayerEffect": "MayActivateLoyaltyAbilityOfPlanewalkerAnAdditionalTime", "args": Permanent }
| { "_PlayerEffect": "MayActivateLoyaltyAbilityOfPlanewalkersAnAdditionalTime", "args": Permanents }
| { "_PlayerEffect": "MayAttackOnlyPlayerOrPlaneswalkersControlledBy", "args": Player }
| { "_PlayerEffect": "MayCastASpellForAlternateCostOnceDuringEachPlayersTurn", "args": [Spells, Cost, Players] }
| { "_PlayerEffect": "MayCastASpellFromGraveyard", "args": [Spells, Player] }
| { "_PlayerEffect": "MayCastASpellFromGraveyardIntoExileAndMaySpendManaAsThoughAnyColorToCastOnce", "args": [Spells, Player] }
| { "_PlayerEffect": "MayCastASpellFromGraveyardIntoExileWithAdditionalCostOnceEachPlayersTurn", "args": [Spells, Array<Action>, Player] }
| { "_PlayerEffect": "MayCastASpellFromGraveyardOnceEachPlayersTurn", "args": [Spells, Player] }
| { "_PlayerEffect": "MayCastASpellFromHandOrTopOfLibraryWithoutPayingOnceEachPlayersTurn", "args": Spells }
| { "_PlayerEffect": "MayCastASpellFromTopOfLibraryOnceEachTurn", "args": Spells }
| { "_PlayerEffect": "MayCastASpellOfEachNonlandCardtypeFromAmongExiledCardsWithoutPaying", "args": CardsInExile }
| { "_PlayerEffect": "MayCastCardFromGraveyardByPayingAddedCost", "args": [CardInGraveyards, Cost] }
| { "_PlayerEffect": "MayCastCardInHandWithoutPaying", "args": CardInHand }
| { "_PlayerEffect": "MayCastExiledCard", "args": CardInExile }
| { "_PlayerEffect": "MayCastExiledCardAndMaySpendManaAsThoughAnyColorToCast", "args": CardInExile }
| { "_PlayerEffect": "MayCastExiledCardAndMaySpendManaAsThoughAnyColorToCastIf", "args": [CardInExile, Condition] }
| { "_PlayerEffect": "MayCastExiledCardAndMaySpendManaAsThoughAnyTypeToCast", "args": CardInExile }
| { "_PlayerEffect": "MayCastExiledCardForAdditionalCost", "args": [CardInExile, Cost] }
| { "_PlayerEffect": "MayCastExiledCardIntoExile", "args": CardInExile }
| { "_PlayerEffect": "MayCastExiledCardWithEffect", "args": [CardInExile, Array<SpellEffect>] }
| { "_PlayerEffect": "MayCastExiledCardWithoutPaying", "args": CardInExile }
| { "_PlayerEffect": "MayCastExiledSpell", "args": [CardInExile, Spells] }
| { "_PlayerEffect": "MayCastExiledSpellWithoutPaying", "args": [CardInExile, Spells] }
| { "_PlayerEffect": "MayCastGraveyardCard", "args": CardInGraveyards }
| { "_PlayerEffect": "MayCastGraveyardCardForAlternateCastingCost", "args": [CardInGraveyards, Cost] }
| { "_PlayerEffect": "MayCastGraveyardCardForAlternateCastingCostWithEnterActions", "args": [CardInGraveyards, Cost, Array<EnterFlag>] }
| { "_PlayerEffect": "MayCastGraveyardCardIntoExile", "args": CardInGraveyards }
| { "_PlayerEffect": "MayCastGraveyardCardIntoExileForAlternateCastingCost", "args": [CardInGraveyards, Cost] }
| { "_PlayerEffect": "MayCastGraveyardCardIntoExileIfSpell", "args": [CardInGraveyards, Spells] }
| { "_PlayerEffect": "MayCastGraveyardCardIntoExileIfSpellForIncreasedCost", "args": [CardInGraveyards, Spells, Array<ManaSymbol>] }
| { "_PlayerEffect": "MayCastGraveyardCardUsingBlitzAbility", "args": CardInGraveyards }
| { "_PlayerEffect": "MayCastGraveyardCardUsingMutateAbility", "args": CardInGraveyards }
| { "_PlayerEffect": "MayCastGraveyardCardWithEnterActions", "args": [CardInGraveyards, Array<EnterFlag>] }
| { "_PlayerEffect": "MayCastGraveyardCardWithTrigger", "args": [CardInGraveyards, Actions] }
| { "_PlayerEffect": "MayCastGraveyardCardWithoutPayingIntoExile", "args": CardInGraveyards }
| { "_PlayerEffect": "MayCastOneSpellFromAmongExiledEachTurn", "args": [Spells, CardsInExile] }
| { "_PlayerEffect": "MayCastSpellsAsThoughTheyHadFlash", "args": Spells }
| { "_PlayerEffect": "MayCastSpellsFromAmongExiled", "args": [Spells, CardsInExile] }
| { "_PlayerEffect": "MayCastSpellsFromAmongExiledAndMaySpendManaAsThoughAnyColorToCast", "args": [Spells, CardsInExile] }
| { "_PlayerEffect": "MayCastSpellsFromAmongExiledAndMaySpendManaAsThoughAnyTypeToCast", "args": [Spells, CardsInExile] }
| { "_PlayerEffect": "MayCastSpellsFromAmongExiledAndMaySpendManaFromSnowSourcesAsThoughItWereAnyColorToCast", "args": CardsInExile }
| { "_PlayerEffect": "MayCastSpellsFromAmongExiledForAlternateCastingCost", "args": [Spells, CardsInExile, Cost] }
| { "_PlayerEffect": "MayCastSpellsFromAmongExiledWithoutPaying", "args": [Spells, CardsInExile] }
| { "_PlayerEffect": "MayCastSpellsFromGraveyard", "args": Spells }
| { "_PlayerEffect": "MayCastSpellsFromGraveyardIntoExile", "args": Spells }
| { "_PlayerEffect": "MayCastSpellsFromHandWithoutPaying" }
| { "_PlayerEffect": "MayCastSpellsFromOtherPlayersGraveyards" }
| { "_PlayerEffect": "MayCastSpellsFromTheTopOfTheirGraveyardIntoExile", "args": Spells }
| { "_PlayerEffect": "MayCastSpellsFromTopOfLibrary", "args": Spells }
| { "_PlayerEffect": "MayCastSpellsFromTopOfLibraryAsThoughTheyHadFlash", "args": Spells }
| { "_PlayerEffect": "MayCastSpellsFromTopOfLibraryForAlternateCost", "args": [Spells, Cost] }
| { "_PlayerEffect": "MayCastSpellsFromTopOfLibraryWithAdditionalCost", "args": [Spells, Cost] }
| { "_PlayerEffect": "MayCastSpellsFromTopOfLibrary_SpellsWithTrigger", "args": [Spells, Spells, Actions] }
| { "_PlayerEffect": "MayCastSpellsFromTopOfPlayersLibrary", "args": [Spells, Players] }
| { "_PlayerEffect": "MayCastSpellsWithoutPaying", "args": Spells }
| { "_PlayerEffect": "MayCastSpellsWithoutPayingAndAsThoughTheyHadFlash", "args": Spells }
| { "_PlayerEffect": "MayDiscardCardAnyTimeTheyCouldCastAnInstant", "args": CardInHand }
| { "_PlayerEffect": "MayLookAtAnAdditionalNumberCardsAsTheySurveil", "args": GameNumber }
| { "_PlayerEffect": "MayLookAtAndPlayCardsFromTheTopOfOtherPlayersLibraryAndMaySpendManaAsThoughAnyColorToCast", "args": Player }
| { "_PlayerEffect": "MayLookAtFaceDownExiledCard", "args": CardInExile }
| { "_PlayerEffect": "MayLookAtFaceDownExiledCards", "args": CardsInExile }
| { "_PlayerEffect": "MayLookAtFaceDownPermanents", "args": Permanents }
| { "_PlayerEffect": "MayLookAtTopCardOfLibraryAnyTime" }
| { "_PlayerEffect": "MayPayAdditionalCostToCastSpellsForEffect", "args": [Spells, Cost, Array<EnterFlag>] }
| { "_PlayerEffect": "MayPayAlternateCostForASpellOnceEachTurn", "args": [Array<ManaSymbol>, Spells] }
| { "_PlayerEffect": "MayPayAlternateCostForFirstCyclingCostEachTurn", "args": Array<ManaSymbol> }
| { "_PlayerEffect": "MayPayAlternateCostForFirstEquipCostEachTurn", "args": Array<ManaSymbol> }
| { "_PlayerEffect": "MayPayAlternateCostForSpells", "args": [Cost, Spells] }
| { "_PlayerEffect": "MayPayAlternateCyclingCosts", "args": Array<ManaSymbol> }
| { "_PlayerEffect": "MayPayAlternateEchoCosts", "args": [Cost, Permanents] }
| { "_PlayerEffect": "MayPayLifeRatherThanMana", "args": [GameNumber, ManaSymbol] }
| { "_PlayerEffect": "MayPayLifeToProduceManaAsManaAbility", "args": [GameNumber, ManaProduceSymbol] }
| { "_PlayerEffect": "MayPayManaAnyTimeTheyCouldCastAnInstant", "args": [Array<ManaSymbol>, Array<Action>] }
| { "_PlayerEffect": "MayPayToIncrementOrDecrementADiceRoll", "args": Cost }
| { "_PlayerEffect": "MayPayToReduceColoredManaCostOfSpells", "args": [Cost, Array<ManaSymbol>, Spells] }
| { "_PlayerEffect": "MayPlayALandOrCastASpellFromAmongCardsInTheirGraveyardThatWerePutThereFromTheirLibraryOnceEachPlayers", "args": [Permanents, Spells, Cards, Player] }
| { "_PlayerEffect": "MayPlayALandOrCastASpellFromAmongExiledCardsAndMaySpendManaAsThoughAnyColorToCastOnceEachPlayersTurnWithTrigger", "args": [Permanents, Spells, CardsInExile, Player, Actions] }
| { "_PlayerEffect": "MayPlayALandOrCastASpellFromTheirGraveyardOfEachPermanentTypeDuringPlayersTurn", "args": Player }
| { "_PlayerEffect": "MayPlayALandOrCastASpellFromTheirGraveyardOnceEachPlayersTurnWithEffect", "args": [Permanents, Spells, Player, Array<SpellEffect>] }
| { "_PlayerEffect": "MayPlayAdditionalLands", "args": GameNumber }
| { "_PlayerEffect": "MayPlayAnAdditionalLand" }
| { "_PlayerEffect": "MayPlayAnyNumberOfLandsDuringThierTurn" }
| { "_PlayerEffect": "MayPlayColoredCardsFromHandAsRandomBasicLandOfThatCouldProduceOneOfThoseColors" }
| { "_PlayerEffect": "MayPlayExiledCard", "args": CardInExile }
| { "_PlayerEffect": "MayPlayExiledCardAndMaySpendManaAsThoughAnyColorToCast", "args": CardInExile }
| { "_PlayerEffect": "MayPlayExiledCardAndMaySpendManaAsThoughAnyColorToCastWithTrigger", "args": [CardInExile, Actions] }
| { "_PlayerEffect": "MayPlayExiledCardIf", "args": [CardInExile, Condition] }
| { "_PlayerEffect": "MayPlayExiledCardWithEffect", "args": [CardInExile, Array<SpellEffect>] }
| { "_PlayerEffect": "MayPlayExiledCardWithTrigger", "args": [CardInExile, Actions] }
| { "_PlayerEffect": "MayPlayExiledCardWithoutPaying", "args": CardInExile }
| { "_PlayerEffect": "MayPlayExiledCards", "args": CardsInExile }
| { "_PlayerEffect": "MayPlayExiledCardsAndMaySpendManaAsThoughAnyColorToCast", "args": CardsInExile }
| { "_PlayerEffect": "MayPlayExiledCardsWithoutPaying", "args": CardsInExile }
| { "_PlayerEffect": "MayPlayGraveyardCard", "args": CardInGraveyards }
| { "_PlayerEffect": "MayPlayGraveyardCardWithEffect", "args": [CardInGraveyards, Array<SpellEffect>] }
| { "_PlayerEffect": "MayPlayLandsFromAmongExiled", "args": CardsInExile }
| { "_PlayerEffect": "MayPlayLandsFromGraveyard", "args": CardsInGraveyards }
| { "_PlayerEffect": "MayPlayLandsFromOutsideTheGame", "args": Cards }
| { "_PlayerEffect": "MayPlayLandsFromTopOfLibrary", "args": Cards }
| { "_PlayerEffect": "MayPlayLandsFromTopOfPlayersLibrary", "args": Players }
| { "_PlayerEffect": "MayPlayOneCardFromAmongExiled", "args": CardsInExile }
| { "_PlayerEffect": "MayPlayOneCardFromAmongExiledAndPayAlternateCostToCast", "args": [CardsInExile, Cost] }
| { "_PlayerEffect": "MayPlayOneCardFromAmongExiledAndMaySpendManaAsThoughAnyColorToCast", "args": CardsInExile }
| { "_PlayerEffect": "MayPlayTopCardOfLibraryWithoutPaying" }
| { "_PlayerEffect": "MayPlayTwoCardsFromAmongExiled", "args": CardsInExile }
| { "_PlayerEffect": "MayPlaysLandsFromOtherPlayersGraveyards" }
| { "_PlayerEffect": "MayRemoveACounterOfTypeFromAPermanentToPlayPermanentsCrewCost", "args": [CounterType, Permanents, Permanent] }
| { "_PlayerEffect": "MayRevealFirstCardDrawnDuringEachPlayersTurn", "args": Players }
| { "_PlayerEffect": "MaySpendColoredManaAsThoughItWereAnotherColor", "args": [Color, Color] }
| { "_PlayerEffect": "MaySpendColoredManaAsThoughItWereAnyColor", "args": Color }
| { "_PlayerEffect": "MaySpendColoredManaAsThoughItWereAnyColorAndMaySpendOtherManaOnlyAsThoughItWereColorless", "args": Color }
| { "_PlayerEffect": "MaySpendColoredManaAsThoughItWereAnyColorToPayForAbilities", "args": [Color, Abilities] }
| { "_PlayerEffect": "MaySpendManaAsThoughItWasAnyColor" }
| { "_PlayerEffect": "MaySpendManaAsThoughItWasAnyColorToCastSpells", "args": Spells }
| { "_PlayerEffect": "MaySpendManaAsThoughItWasAnyColorToPayForAbilities", "args": Abilities }
| { "_PlayerEffect": "MaySpendManaAsThoughItWasAnyTypeToActivateAbilities", "args": ActivatedAbilities }
| { "_PlayerEffect": "MaySuspendCardsFromHand", "args": Cards }
| { "_PlayerEffect": "MayTapPermanentsTheyDontControlForManaWithModifiers", "args": [Permanents, ManaUseModifier] }
| { "_PlayerEffect": "MustAttackPlaneswalkerWithEachCreature", "args": [Permanent, Permanents] }
| { "_PlayerEffect": "MustAttackPlayerOrPlaneswalkersControlledBy", "args": Player }
| { "_PlayerEffect": "MustAttackWithANumberOfCreatures", "args": [Comparison, Permanents] }
| { "_PlayerEffect": "MustAttackWithEachCreature", "args": Permanents }
| { "_PlayerEffect": "NoteManaValueOfExiledCard" }
| { "_PlayerEffect": "OnceDuringEachPlayersTurnMayAction", "args": [Player, Action] }
| { "_PlayerEffect": "OnceEachTurnMayAction", "args": Action }
| { "_PlayerEffect": "OnceEachTurnMayPayToIncrementOrDecrementADiceRoll", "args": Cost }
| { "_PlayerEffect": "OnceEachTurnMayPayToRerollAnyNumberOfDiceRolled", "args": Cost }
| { "_PlayerEffect": "PlaysWithCardInHandRevealed", "args": CardInHand }
| { "_PlayerEffect": "PlaysWithHandRevealed" }
| { "_PlayerEffect": "PlaysWithTopOfLibraryRevealed" }
| { "_PlayerEffect": "Protection", "args": Protectable }
| { "_PlayerEffect": "ReduceActivatedCost", "args": [ActivatedAbilities, Array<CostReductionSymbol>] }
| { "_PlayerEffect": "ReduceManaCostOfActivatedAbilities", "args": [ActivatedAbilities, Array<CostReductionSymbol>] }
| { "_PlayerEffect": "ReduceManaCostOfActivatedAbilitiesNotLessThanOne", "args": [ActivatedAbilities, Array<CostReductionSymbol>] }
| { "_PlayerEffect": "ReduceMaximumHandSize", "args": GameNumber }
| { "_PlayerEffect": "ReplaceForetellCostOfFirstCardForetoldEachTurn", "args": Array<ManaSymbol> }
| { "_PlayerEffect": "RevealFirstCardDrawnDuringEachPlayersTurn", "args": Players }
| { "_PlayerEffect": "RevealFirstCardDrawnDuringPlayersTurn", "args": Player }
| { "_PlayerEffect": "RevealsEachCardDrawn" }
| { "_PlayerEffect": "SetMaximumHandSize", "args": GameNumber }
| { "_PlayerEffect": "SetMinimumSpellCost", "args": [Spells, GameNumber] }
| { "_PlayerEffect": "Shroud" }
| { "_PlayerEffect": "SkipsCombatPhase" }
| { "_PlayerEffect": "SkipsDrawStep" }
| { "_PlayerEffect": "SkipsMainPhase" }
| { "_PlayerEffect": "SkipsUntapStep" }
| { "_PlayerEffect": "SkipsUpkeepStep" }
| { "_PlayerEffect": "SpellsAndAbilitiesTheyCantCantCauseThemToSearchTheirLibrary" }
| { "_PlayerEffect": "SpellsCastFromHandHaveAbility", "args": [Spells, Array<SpellEffect>] }
| { "_PlayerEffect": "SpellsCastHaveAbility", "args": [Spells, Array<SpellEffect>] }
| { "_PlayerEffect": "SpellsControlledHaveAbility", "args": [Spells, Array<SpellEffect>] }
| { "_PlayerEffect": "TheNthSpellCastEachTurnHasAbility", "args": [GameNumber, Spells, Array<SpellEffect>] }
| { "_PlayerEffect": "UnspentManaBecomesColor", "args": Color }
| { "_PlayerEffect": "UnspentManaBecomesColorless" }
| { "_PlayerEffect": "UntapsPermanentsDuringEachPlayersUntapSteps", "args": [Permanents, Players] }
| { "_PlayerEffect": "WhileChoosingTargetsMustChooseAtLeastOnePermanentIfAble", "args": Permanents };
type PlayerId =
| number;
type PlayerOrPermanent =
| { "_PlayerOrPermanent": "Ref_AnyTarget" }
| { "_PlayerOrPermanent": "Ref_TargetPlayerOrPermanent" };
type Player =
| { "_Player": "SelfPlayer" }
| { "_Player": "Trigger_ThatOtherPlayer" }
| { "_Player": "ThePlayerThatAddedThisAbility" }
| { "_Player": "TheGiftedPlayer" }
| { "_Player": "APlayerWouldMillAnyNumberOfCards_ThatPlayer" }
| { "_Player": "ThePlayerWhoGuessedThisWay" }
| { "_Player": "ThePlayerChosenThisWay" }
| { "_Player": "ControllerOfPermanentTheLastTimeItWasBlockedByPermanentThisTurn", "args": [Permanent, Permanent] }
| { "_Player": "NextOpponentInTurnOrder" }
| { "_Player": "AsLoseUnspentMana_ThePlayerLosingMana" }
| { "_Player": "ControllerOfEachableDestroyedPermanent" }
| { "_Player": "OwnerOfSpell", "args": Spell }
| { "_Player": "ThePlayerThatChoseTheMode" }
| { "_Player": "SingleControllerOfTargetPermanents" }
| { "_Player": "WouldGainLife_ThatPlayer" }
| { "_Player": "WouldPutAPermanentOnBattlefield_ThatPlayer" }
| { "_Player": "OwnerOfTheCardReturnedToHandThisWay" }
| { "_Player": "ActionForEachPlayer_ThatPlayer" }
| { "_Player": "ActionPlayer" }
| { "_Player": "AssociatedPlayerForPermanent", "args": Permanent }
| { "_Player": "AttackingPlayer" }
| { "_Player": "ClashOpponent" }
| { "_Player": "Condition_ThatPlayer" }
| { "_Player": "ControllerOfAbility", "args": Ability }
| { "_Player": "ControllerOfDeadPermanent" }
| { "_Player": "ControllerOfDestroyedPermanent" }
| { "_Player": "ControllerOfEachableExiledPermanent" }
| { "_Player": "ControllerOfEachableRemovedPermanent" }
| { "_Player": "ControllerOfLeavingPermanent" }
| { "_Player": "ControllerOfPermanent", "args": Permanent }
| { "_Player": "ControllerOfSpell", "args": Spell }
| { "_Player": "ControllerOfSpellOrAbility", "args": SpellOrAbility }
| { "_Player": "ControllerOfTargetPermanent" }
| { "_Player": "ControllerOfTargetPermanent2" }
| { "_Player": "ControllerOfTargetSpell" }
| { "_Player": "ControllerOfTriggeredAbility", "args": Ability }
| { "_Player": "DealsDamage_ThatPlayer" }
| { "_Player": "DefendingPlayer" }
| { "_Player": "EachablePlayer" }
| { "_Player": "HostController" }
| { "_Player": "HostPlayer" }
| { "_Player": "ItsController" }
| { "_Player": "LoseLifeForEach_ThatPlayer" }
| { "_Player": "LoseLife_ThatPlayer" }
| { "_Player": "MillCards_ThatPlayer" }
| { "_Player": "NearestPlayerInChosenDirection", "args": Players }
| { "_Player": "NumPlayers_ThatPlayer" }
| { "_Player": "OpponentToTheLeftOfYou" }
| { "_Player": "OwnerOfDeadPermanent" }
| { "_Player": "OwnerOfExiledCard", "args": CardInExile }
| { "_Player": "OwnerOfGraveyrdCard", "args": CardInGraveyards }
| { "_Player": "OwnerOfPermanent", "args": Permanent }
| { "_Player": "OwnerOfTargetPermanent" }
| { "_Player": "PlayerAction_ThatPlayer" }
| { "_Player": "PlayerCreatureIsAttacking", "args": Permanent }
| { "_Player": "PlayerInTheChosenDirectionOf", "args": Player }
| { "_Player": "PlayerOrControllerOfPermanent", "args": PlayerOrPermanent }
| { "_Player": "PlayerOrControllerOfPlaneswalkerCreatureIsAttacking", "args": Permanent }
| { "_Player": "PlayerToTheLeftOf", "args": Player }
| { "_Player": "PlayerToTheRightOf", "args": Player }
| { "_Player": "PlayersRevealTopCardOfLibraryAndFindHighestManaValue_SingleWinner" }
| { "_Player": "Ref_TargetPlayer" }
| { "_Player": "Ref_TargetPlayer1" }
| { "_Player": "Ref_TargetPlayer2" }
| { "_Player": "Ref_TargetPlayer3" }
| { "_Player": "Ref_TargetPlayers_0" }
| { "_Player": "Ref_TargetPlayers_1" }
| { "_Player": "RememberedPlayer" }
| { "_Player": "SingleGraveyardOwner" }
| { "_Player": "SingleTargetPlayerOfSpell", "args": Spell }
| { "_Player": "SpellDealsDamage_ThatPlayer" }
| { "_Player": "ThatSpellsController" }
| { "_Player": "TheActivePlayer" }
| { "_Player": "TheAttackingPlayer" }
| { "_Player": "TheChosenPlayer" }
| { "_Player": "TheFirstPlayerChosenThisWay" }
| { "_Player": "TheMonarch" }
| { "_Player": "TheOtherChosenPlayer", "args": Player }
| { "_Player": "ThePlayerThatChoseAction" }
| { "_Player": "ThePlayerWhoControlsTheMostPermanents", "args": Permanents }
| { "_Player": "ThePlayerWhoCreatedThisAbility" }
| { "_Player": "ThePlayerWithTheInitiative" }
| { "_Player": "ThePlayerWithTheMostCardsInHand" }
| { "_Player": "ThePlayerWithTheMostLife" }
| { "_Player": "TheSecondPlayerChosenThisWay" }
| { "_Player": "TheThirdPlayerChosenThisWay" }
| { "_Player": "Trigger_ControllerOfThatPermanent" }
| { "_Player": "Trigger_ControllerOfThatSource" }
| { "_Player": "Trigger_ControllerOfThatSpell" }
| { "_Player": "Trigger_ControllerOfThatSpellOrAbility" }
| { "_Player": "Trigger_ControllerOfThoseCreatures" }
| { "_Player": "Trigger_DefendingPlayer" }
| { "_Player": "Trigger_ThatPlayer" }
| { "_Player": "WinningBidder" }
| { "_Player": "WouldDealDamage_ControllerOfDamageSource" }
| { "_Player": "WouldDealDamage_DamageRecipientPlayer" }
| { "_Player": "WouldDrawACard_ThatPlayer" }
| { "_Player": "You" }
| { "_Player": "ControllerOfLastSpellThatDealtDamageToPlayerThisTurn", "args": [Spells, Player] };
type PlayersAndPermanents =
| { "_PlayersAndPermanents": "APlayerOrAPermanent", "args": [Players, Permanents] };
type Players =
| { "_Players": "AnyPlayer" }
| { "_Players": "And", "args": Array<Players> }
| { "_Players": "Or", "args": Array<Players> }
| { "_Players": "Other", "args": Player }
| { "_Players": "SinglePlayer", "args": Player }
| { "_Players": "ExiledACardThisWay" }
| { "_Players": "Trigger_ThoseDefendingPlayers" }
| { "_Players": "RepeatablePlayers" }
| { "_Players": "ExiledACardWithTheHighestManaValue" }
| { "_Players": "DidntDiscardedNumberCardsOfTypeThisWay", "args": [Comparison, CardsInHand] }
| { "_Players": "NumCardsInGraveyardIs", "args": Comparison }
| { "_Players": "NumCardsOfTypeInGraveyardIs", "args": [Comparison, CardsInGraveyards] }
| { "_Players": "AControllerOfTheLeastPermanentsAmongPlayers", "args": [Players, Permanents] }
| { "_Players": "AControllerOfTheMostPermanentsAmongPlayers", "args": [Players, Permanents] }
| { "_Players": "APlayerNotedByPlayerForCardDuringDraft", "args": [Player, string] }
| { "_Players": "AllCardsInHandAre", "args": [CardsInHand, CardsInHand] }
| { "_Players": "AttackedAPlaneswalkerThisTurn", "args": Permanents }
| { "_Players": "AttackedByACreatureThisTurn", "args": Permanents }
| { "_Players": "AttackedByCreatureThisTurn", "args": Permanent }
| { "_Players": "AttackedByPlayerThisCombat", "args": Player }
| { "_Players": "AttackedByPlayerThisTurn", "args": Player }
| { "_Players": "AttackedPlayerDuringTheirLastTurn", "args": Player }
| { "_Players": "AttackedPlayerLastTurn", "args": Player }
| { "_Players": "AttackedPlayerThisTurn", "args": Player }
| { "_Players": "AttackedThisTurn" }
| { "_Players": "AttackedWithACreatureThisTurn", "args": Permanents }
| { "_Players": "AttackedWithCreatureThisTurn", "args": Permanent }
| { "_Players": "AttackedWithCreaturesThisTurn" }
| { "_Players": "AttackedWithCreaturesWithTotalPowerThisCombat", "args": Comparison }
| { "_Players": "AttackedWithNumCreaturesThisTurn", "args": [Comparison, Permanents] }
| { "_Players": "CastASpellDuringTheirLastTurn", "args": Spells }
| { "_Players": "CastASpellFromAGraveyardThisTurn", "args": [Spells, Players] }
| { "_Players": "CastASpellFromAnywhereOtherThanTheirHandThisTurn", "args": Spells }
| { "_Players": "CastASpellSincePlayersLastTurnEnded", "args": [Spells, Player] }
| { "_Players": "CastASpellThisGame", "args": Spells }
| { "_Players": "CastASpellThisTurn", "args": Spells }
| { "_Players": "CastNumSpellsThisTurn", "args": [Comparison, Spells] }
| { "_Players": "ChoseAFirstPermanentThisWay" }
| { "_Players": "ChoseAPermanentThisWay" }
| { "_Players": "ChoseASecondPermanentThisWay" }
| { "_Players": "ChoseHighestNumber" }
| { "_Players": "ChoseLowestNumber" }
| { "_Players": "ChoseWord", "args": string }
| { "_Players": "CoinCameUpTails" }
| { "_Players": "CommitedACrimeThisTurn" }
| { "_Players": "CompletedADungeon" }
| { "_Players": "ControlledAPermanentDestroyedThisWay" }
| { "_Players": "ControlledAPermanentExiledThisWay" }
| { "_Players": "ControlledAPermanentReturnToHandThisWay" }
| { "_Players": "ControlledAPermanentShuffledIntoLibraryThisWay" }
| { "_Players": "ControlsA", "args": Permanents }
| { "_Players": "ControlsALandOfEachBasicLandType" }
| { "_Players": "ControlsAPermanentOfEachColor", "args": Permanents }
| { "_Players": "ControlsAll", "args": Permanents }
| { "_Players": "ControlsLessPermanentThanPlayer", "args": [Player, Permanents] }
| { "_Players": "ControlsLessPermanentsThanEachPlayer", "args": [Players, Permanents] }
| { "_Players": "ControlsMorePermanentThanPlayer", "args": [Player, Permanents] }
| { "_Players": "ControlsMorePermanentsThanEachPlayer", "args": [Players, Permanents] }
| { "_Players": "ControlsNo", "args": Permanents }
| { "_Players": "ControlsNum", "args": [Comparison, Permanents] }
| { "_Players": "ControlsNumBasicLandTypes", "args": [Comparison, Permanents] }
| { "_Players": "ControlsNumColorsOfPermanents", "args": Comparison }
| { "_Players": "ControlsNumThatShareACreatureType", "args": [Comparison, Permanents] }
| { "_Players": "ControlsNumThatShareAName", "args": [Comparison, Permanents] }
| { "_Players": "ControlsNumWithDifferentNames", "args": [Comparison, Permanents] }
| { "_Players": "ControlsNumWithDifferentPowers", "args": [Comparison, Permanents] }
| { "_Players": "ControlsPermanent", "args": Permanent }
| { "_Players": "CouldMulligan" }
| { "_Players": "CreatedATokenThisTurn" }
| { "_Players": "CycledANumberOfCardsThisGame", "args": [Comparison, Cards] }
| { "_Players": "CycledANumberOfCardsThisTurn", "args": [Comparison, Cards] }
| { "_Players": "Descended" }
| { "_Players": "DevotionToColorsIs", "args": [Array<SimpleColor>, Comparison] }
| { "_Players": "DidntActivateAnAbilityThisTurn", "args": ActivatedAbilities }
| { "_Players": "DidntAttackPlayerThisTurn", "args": Player }
| { "_Players": "DidntAttackWithCreaturesThisTurn" }
| { "_Players": "DidntCastASpellThisTurn", "args": Spells }
| { "_Players": "DidntDiscardedACardOfTypeThisWay", "args": Cards }
| { "_Players": "DidntLoseLifeThisTurn" }
| { "_Players": "DidntPayCost" }
| { "_Players": "DidntPlayACardFromExileThisTurn", "args": Cards }
| { "_Players": "DidntPlayALandThisTurn" }
| { "_Players": "DidntReceiveAVote" }
| { "_Players": "DidntSacrificeAPermanentThisWay", "args": Permanents }
| { "_Players": "DidntWinTheSubgameThisWay" }
| { "_Players": "DiscardedACardOfTypeThisWay", "args": Cards }
| { "_Players": "DiscardedACardThisTurn" }
| { "_Players": "DiscardedACardThisWay" }
| { "_Players": "DiscardedACardWithTheHighestManaValueAmongCardsDiscardedThisWay" }
| { "_Players": "DoesntControlPermanent", "args": Permanent }
| { "_Players": "DoesntHaveMaxSpeed" }
| { "_Players": "DrewACardLastTurn" }
| { "_Players": "EveryCardInTheirCardPoolStartedTheGameInTheirLibraryOrTheCommandZone" }
| { "_Players": "ExceptFor", "args": Players }
| { "_Players": "GainedLifeAmountThisTurn", "args": Comparison }
| { "_Players": "GainedLifeThisTurn" }
| { "_Players": "GuessedCorrectlyForDraftCard", "args": string }
| { "_Players": "HadANumberOfCardsEnterTheirGraveyardFromAnywhereThisTurn", "args": [Comparison, Cards] }
| { "_Players": "HadANumberOfPermanentsEnterTheBattlefieldUnderTheirControlThisTurn", "args": [Comparison, Permanents] }
| { "_Players": "HadAPermanentEnterTheBattlefieldUnderTheirControlLastTurn", "args": Permanents }
| { "_Players": "HadAPermanentEnterTheBattlefieldUnderTheirControlThisTurn", "args": Permanents }
| { "_Players": "HasABoon" }
| { "_Players": "HasACardInGraveyard", "args": CardsInGraveyards }
| { "_Players": "HasACardInHand", "args": CardsInHand }
| { "_Players": "HasACounterOfType", "args": CounterType }
| { "_Players": "HasAFullParty" }
| { "_Players": "HasANumberOfCardsAmongCardsInGraveyardHandAndLibrary", "args": [Comparison, Cards] }
| { "_Players": "HasANumberOfCountersOfType", "args": [Comparison, CounterType] }
| { "_Players": "HasActivatedAnAbilityOfAGraveyardCardThisTurn", "args": Players }
| { "_Players": "HasBeenTemptedByTheRingNumberTimes", "args": Comparison }
| { "_Players": "HasHighestNumberOfCardsInHandAmongPlayers", "args": Players }
| { "_Players": "HasMaxSpeed" }
| { "_Players": "HasNoCardsOfTypeInHand", "args": Cards }
| { "_Players": "HasNoCardsOfTypeInLibrary", "args": Cards }
| { "_Players": "HasNoCountersOfType", "args": CounterType }
| { "_Players": "HasNotActivatedAnExhaustAbilityThisTurn" }
| { "_Players": "HasNotCompletedDungeon", "args": string }
| { "_Players": "HasTheCitysBlessing" }
| { "_Players": "HasAnEnduringStory" }
| { "_Players": "HasTheInitiative" }
| { "_Players": "HasWaterEarthFireAndAirBendedThisTurn" }
| { "_Players": "HasntBeenDealtCombatDamageSinceTheirLastTurn" }
| { "_Players": "HasntCastASpellThisGame", "args": Spells }
| { "_Players": "HasntCastASpellThisTurn", "args": Spells }
| { "_Players": "HaventAddedManaWithThisAbility" }
| { "_Players": "IsAttacked" }
| { "_Players": "IsAttackedByPlayer", "args": Player }
| { "_Players": "IsAttackingNumberPlayers", "args": [Comparison, Players] }
| { "_Players": "IsAttackingPlayer", "args": Player }
| { "_Players": "IsNotAttackingAPlayer", "args": Players }
| { "_Players": "IsNotTheMonarch" }
| { "_Players": "IsNotTheStartingPlayer" }
| { "_Players": "IsNotTheirTurn" }
| { "_Players": "IsProtectingBattle", "args": Permanent }
| { "_Players": "IsTheMonarch" }
| { "_Players": "IsTheStartingPlayer" }
| { "_Players": "IsTheirMainPhase" }
| { "_Players": "IsTheirTurn" }
| { "_Players": "IsTheirUpkeep" }
| { "_Players": "IsntBeingAttacked" }
| { "_Players": "LifeTotalIs", "args": Comparison }
| { "_Players": "LostLifeAmountThisTurn", "args": Comparison }
| { "_Players": "LostLifeLastTurn" }
| { "_Players": "LostLifeThisTurn" }
| { "_Players": "NumCardTypesInGraveyardIs", "args": Comparison }
| { "_Players": "NumCardsDrawnThisTurnIs", "args": Comparison }
| { "_Players": "NumCardsInHandAtBeginningOfTurnWas", "args": Comparison }
| { "_Players": "NumCardsInHandIs", "args": Comparison }
| { "_Players": "NumCardsInLibraryIs", "args": Comparison }
| { "_Players": "NumCardsOfTypeInHandIs", "args": [Comparison, CardsInHand] }
| { "_Players": "NumCardsOwnedInExileIs", "args": [Comparison, CardsInExile] }
| { "_Players": "NumCardtypesOnBattlefiendAndInGraveyardIs", "args": Comparison }
| { "_Players": "NumOpponentsIs", "args": Comparison }
| { "_Players": "NumPlayersPassFilter_ThosePlayers" }
| { "_Players": "NumSpellsCastLastTurnIs", "args": [Comparison, Spells] }
| { "_Players": "OneOfTheChosenPlayers" }
| { "_Players": "Opponent" }
| { "_Players": "OpponentOf", "args": Player }
| { "_Players": "OwnedAPermanentChosenThisWay" }
| { "_Players": "OwnerOfACardWithTheLowestManaValueRevealedThisWay", "args": Cards }
| { "_Players": "OwnersOfExiledCards", "args": CardsInExile }
| { "_Players": "OwnsACardInExile", "args": CardsInExile }
| { "_Players": "OwnsAPermanent", "args": Permanents }
| { "_Players": "OwnsASpell", "args": Spells }
| { "_Players": "OwnsAndControls", "args": Permanent }
| { "_Players": "OwnsAndControlsA", "args": Permanents }
| { "_Players": "PaidCost" }
| { "_Players": "PaidOrLostAnAmountOfEnergyThisTurn", "args": Comparison }
| { "_Players": "PlaneswalkedToAPlaneThisTurn", "args": Planes }
| { "_Players": "PlayedALandFromAnywhereOtherThanTheirHandThisTurn" }
| { "_Players": "PlayedALandThisTurn" }
| { "_Players": "PlayerDealtDamageThisWay" }
| { "_Players": "PlayerWhoTookActionThisWay" }
| { "_Players": "Poisoned" }
| { "_Players": "PossibleDefendingPlayerThisCombat" }
| { "_Players": "PutAPermanentOnBattleDuringTheirLastTurn", "args": Permanents }
| { "_Players": "ReceivedAVote" }
| { "_Players": "Ref_TargetPlayers" }
| { "_Players": "RolledADiceValueThisTurn", "args": Comparison }
| { "_Players": "RolledHighestD20Value" }
| { "_Players": "RolledNumberDiceThisTurn", "args": Comparison }
| { "_Players": "SacrificedAPermanentThisTurn", "args": Permanents }
| { "_Players": "SacrificedAPermanentThisWay", "args": Permanents }
| { "_Players": "SacrificedNumPermanentsThisTurn", "args": [Comparison, Permanents] }
| { "_Players": "SearchedTheirLibraryThisTurn" }
| { "_Players": "ShuffledAPermanentIntoTheirLibraryThisWay", "args": Permanents }
| { "_Players": "ShuffledLibraryThisWay" }
| { "_Players": "SpeedIs", "args": Comparison }
| { "_Players": "SpellDefendingPlayer" }
| { "_Players": "SurveilledThisTurn" }
| { "_Players": "TappedAPermanentForManaThisTurn", "args": Permanents }
| { "_Players": "TheChosenPlayers" }
| { "_Players": "Trigger_IsDefendingPlayer" }
| { "_Players": "Trigger_ThosePlayers" }
| { "_Players": "VisitedAnAttractionThisTurn" }
| { "_Players": "VotedForADifferentChoiceThanPlayer", "args": Player }
| { "_Players": "VotedForTheSameChoiceAsPlayer", "args": Player }
| { "_Players": "VotedForWord", "args": string }
| { "_Players": "WasDealtAnAmountOfCombatDamageThisTurn", "args": Comparison }
| { "_Players": "WasDealtAnAmountOfDamageThisTurn", "args": Comparison }
| { "_Players": "WasDealtCombatDamageByAPermanentThisGame", "args": Permanents }
| { "_Players": "WasDealtCombatDamageByAPermanentThisTurn", "args": Permanents }
| { "_Players": "WasDealtCombatDamageByNumPermanentsThisTurn", "args": [Comparison, Permanents] }
| { "_Players": "WasDealtCombatDamageByPermanentThisTurn", "args": Permanent }
| { "_Players": "WasDealtCombatDamageThisTurn" }
| { "_Players": "WasDealtDamageByNumPermantsThisTurn", "args": [Comparison, Permanents] }
| { "_Players": "WasDealtDamageByPermanentThisCombat", "args": Permanent }
| { "_Players": "WasDealtDamageByPermanentThisGame", "args": Permanent }
| { "_Players": "WasDealtDamageByPermanentThisTurn", "args": Permanent }
| { "_Players": "WasDealtDamageBySpellThisTurn", "args": Spells }
| { "_Players": "WasDealtDamageThisTurn" }
| { "_Players": "WasDealtDamageThisWay" }
| { "_Players": "WasTheMonarchAsTheTurnBegan" }
| { "_Players": "WasntAttackedByCreatureDuringPlayersLastCombat", "args": [Permanent, Player] }
| { "_Players": "YourTeam" };
type PregameAction =
| { "_PregameAction": "MayActions", "args": Array<PregameAction> }
| { "_PregameAction": "ExileNumberDraftedCardsNotInDeck", "args": [GameNumber, Cards] }
| { "_PregameAction": "RevealCardFromDeck" }
| { "_PregameAction": "ExileADraftedCardNotInDeck" };
type PregameCard =
| { "_PregameCard": "ThisPregameCard" };
type Preparer =
| { "_OracleCard": "Preparer", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules?: Array<Rule>, CardPT?: CardPT, Prepared: Card, };
type ProtectableColor =
| { "_ProtectableColor": "AnyColor" }
| { "_ProtectableColor": "Colored" }
| { "_ProtectableColor": "Colors", "args": Array<Color> }
| { "_ProtectableColor": "ColorsOfPermanent", "args": Permanent }
| { "_ProtectableColor": "ColorsOfPermanents", "args": Permanents }
| { "_ProtectableColor": "ColorsWithMostVotesOrTiedForMostVotes" }
| { "_ProtectableColor": "ItsOwnColors" }
| { "_ProtectableColor": "Monocolored" }
| { "_ProtectableColor": "Multicolored" }
| { "_ProtectableColor": "NotAColorInCommanderColorIdentity" }
| { "_ProtectableColor": "TheChosenColor" }
| { "_ProtectableColor": "TheColorsOfSpell", "args": Spell };
type Protectable =
| { "_Protectable": "FromActivatedAndTriggeredAbilities" }
| { "_Protectable": "FromCardName", "args": NameFilter }
| { "_Protectable": "FromTypes", "args": Cards }
| { "_Protectable": "FromColor", "args": ProtectableColor }
| { "_Protectable": "FromEverything" }
| { "_Protectable": "FromManaValue", "args": Comparison }
| { "_Protectable": "FromPermanents", "args": Permanents }
| { "_Protectable": "FromPlayers", "args": Players }
| { "_Protectable": "FromSpells", "args": Spells };
type PTMod =
| { "_PTMod": "PTMod", "args": [number, number] };
type PT =
| { "_PT": "PT", "args": [number, number] }
| { "_PT": "PTX", "args": [PTXValue, PTXValue, GameNumber] }
| { "_PT": "ManualPT", "args": [GameNumber, GameNumber] };
type PTXValue =
| { "_PTXValue": "Integer", "args": number }
| { "_PTXValue": "X" };
type PutCountersAction =
| { "_PutCountersAction": "ACounterOfTypeAtRandomThatPermanentDoesHaveOnPermanent", "args": [Array<CounterType>, Permanent, Permanent] }
| { "_PutCountersAction": "ACounterOfTypeOfMultipleChoiceOnEachPermanent", "args": [Array<CounterType>, Permanents] }
| { "_PutCountersAction": "ACounterOfTypeOnAPermanent", "args": [CounterType, Permanents] }
| { "_PutCountersAction": "ACounterOfTypeOnAPermanentOfEachColor", "args": [CounterType, Permanents] }
| { "_PutCountersAction": "ACounterOfTypeOnCardInExile", "args": [CounterType, CardInExile] }
| { "_PutCountersAction": "ACounterOfTypeOnEachCardInExile", "args": [CounterType, CardsInExile] }
| { "_PutCountersAction": "ACounterOfTypeOnEachPermanent", "args": [CounterType, Permanents] }
| { "_PutCountersAction": "ACounterOfTypeOnEachPlayer", "args": [CounterType, Players] }
| { "_PutCountersAction": "ACounterOfTypeOnPermanent", "args": [CounterType, Permanent] }
| { "_PutCountersAction": "ACounterOfTypeOnPlane", "args": [CounterType, Plane] }
| { "_PutCountersAction": "ACounterOfTypeOnPlayer", "args": [CounterType, Player] }
| { "_PutCountersAction": "ACounterOfTypeOnScheme", "args": [CounterType, SingleScheme] }
| { "_PutCountersAction": "ACounterOfTypeOnUptoNumberPermanents", "args": [CounterType, GameNumber, Permanents] }
| { "_PutCountersAction": "ACounterOfTypeOnVanguard", "args": [CounterType, SingleVanguard] }
| { "_PutCountersAction": "ADuplicateOfEachKindOfCounterAmongPermanentDistibutedToPermanents", "args": [Permanents, Permanents] }
| { "_PutCountersAction": "ADuplicateOfEachKindOfCounterAmoungPermanentsOrACounterOfTypeOnPermanent", "args": [Permanents, CounterType, Permanent] }
| { "_PutCountersAction": "ADuplicateOfEachKindOfCounterOnPermanentOnPermanent", "args": [Permanent, Permanent] }
| { "_PutCountersAction": "ADuplicateOfEachKindOfCounterOnPlayerOnPlayer", "args": [Player, Player] }
| { "_PutCountersAction": "AnAbilityCounterOnAPermanentForEachAbilityOnCardsInGraveyards", "args": [Permanents, Array<CheckHasable>, CardsInGraveyards] }
| { "_PutCountersAction": "AnAbilityCounterOnPermanentForEachAbilityOnPermanentIfItDoesntHaveIt", "args": [Permanent, Array<CheckHasable>, Permanent] }
| { "_PutCountersAction": "DifferentNumberCountersOfTypeOnEachCardInExile", "args": [GameNumber, CounterType, CardsInExile] }
| { "_PutCountersAction": "DifferentNumberCountersOfTypeOnEachPermanent", "args": [GameNumber, CounterType, Permanents] }
| { "_PutCountersAction": "DistributeNumberCountersOfTypeAmongAnyNumberOfPermanents", "args": [GameNumber, CounterType, Permanents] }
| { "_PutCountersAction": "DistributeNumberCountersOfTypeAmongPermanents", "args": [GameNumber, CounterType, Permanents] }
| { "_PutCountersAction": "DistributedCounters", "args": CounterType }
| { "_PutCountersAction": "DoubleAllCountersOnEachPermanent", "args": Permanents }
| { "_PutCountersAction": "DoubleAllCountersOnPermanent", "args": Permanent }
| { "_PutCountersAction": "DoubleAllCountersPlayerHas", "args": Player }
| { "_PutCountersAction": "DoubleCountersOfTypeOnEachPermanent", "args": [CounterType, Permanents] }
| { "_PutCountersAction": "DoubleCountersOfTypeOnPermanent", "args": [CounterType, Permanent] }
| { "_PutCountersAction": "DuplicateACounterOfAPermanentOnEachOtherPermanent", "args": [Permanents, Permanents] }
| { "_PutCountersAction": "DuplicateACounterOfAPermanentThatPermanentDoesntHaveOnPermanent", "args": [Permanents, Permanent, Permanent] }
| { "_PutCountersAction": "DuplicateACounterOfCardInExileOnCardInExile", "args": [CardInExile, CardInExile] }
| { "_PutCountersAction": "DuplicateACounterOfEachOfThoseKindsOnPermanent", "args": Permanent }
| { "_PutCountersAction": "DuplicateACounterOfPermanentOnPermanent", "args": [Permanent, Permanent] }
| { "_PutCountersAction": "DuplicateACounterOfPlayerOnPlayer", "args": [Player, Player] }
| { "_PutCountersAction": "DuplicateCountersOfPermanentOnEachPermanent", "args": [Permanent, Permanents] }
| { "_PutCountersAction": "DuplicateCountersOfPermanentOnPermanent", "args": [Permanent, Permanent] }
| { "_PutCountersAction": "DuplicateCountersOfTypeOfPermanentOnPermanent", "args": [CounterType, Permanent, Permanent] }
| { "_PutCountersAction": "DuplicateThoseCounterOnPermanent", "args": Permanent }
| { "_PutCountersAction": "ForEachPermanentMayDuplicateACounterOfPermanentOnPermanent", "args": [Permanents, Permanent, Permanent] }
| { "_PutCountersAction": "NumberCountersOfTypeOnAPermanent", "args": [GameNumber, CounterType, Permanents] }
| { "_PutCountersAction": "NumberCountersOfTypeOnCardInExile", "args": [GameNumber, CounterType, CardInExile] }
| { "_PutCountersAction": "NumberCountersOfTypeOnCardInGraveyard", "args": [GameNumber, CounterType, CardInGraveyards] }
| { "_PutCountersAction": "NumberCountersOfTypeOnEachCardInExile", "args": [GameNumber, CounterType, CardsInExile] }
| { "_PutCountersAction": "NumberCountersOfTypeOnEachPermanent", "args": [GameNumber, CounterType, Permanents] }
| { "_PutCountersAction": "NumberCountersOfTypeOnEachPlayer", "args": [GameNumber, CounterType, Players] }
| { "_PutCountersAction": "NumberCountersOfTypeOnPermanent", "args": [GameNumber, CounterType, Permanent] }
| { "_PutCountersAction": "NumberCountersOfTypeOnPlayer", "args": [GameNumber, CounterType, Player] }
| { "_PutCountersAction": "NumberCountersOfTypeOnSpell", "args": [GameNumber, CounterType, Spell] }
| { "_PutCountersAction": "UptoNumberCountersOfTypeOnPermanent", "args": [GameNumber, CounterType, Permanent] }
| { "_PutCountersAction": "UptoSingleNumberCountersOfTypeOnEachPermanent", "args": [GameNumber, CounterType, Permanents] };
type PutCountersCost =
| { "_PutCountersCost": "ACounterOfTypeOnAPermanent", "args": [CounterType, Permanents] }
| { "_PutCountersCost": "ACounterOfTypeOnCardInExile", "args": [CounterType, CardInExile] }
| { "_PutCountersCost": "ACounterOfTypeOnPermanent", "args": [CounterType, Permanent] }
| { "_PutCountersCost": "NumberCountersOfTypeOnAPermanent", "args": [GameNumber, CounterType, Permanents] }
| { "_PutCountersCost": "NumberCountersOfTypeOnPermanent", "args": [GameNumber, CounterType, Permanent] }
| { "_PutCountersCost": "NumberCountersOfTypeOnPlayer", "args": [GameNumber, CounterType, Player] };
type PutIntoGraveyardAction =
| { "_PutIntoGraveyardAction": "ExileItInstead" }
| { "_PutIntoGraveyardAction": "RevealItAndShuffleItIntoLibraryInstead" };
type PutOrRemoveCountersAction =
| { "_PutOrRemoveCountersAction": "DuplicateOrRemoveACounterOfEachKindOnPermanent", "args": Permanent };
type PutRestriction =
| { "_PutRestriction": "CantCauseTheNumberOfCountersOfTypeOnPermanentToBeGreaterThan", "args": [CounterType, Permanent, GameNumber] };
type RegularBattlefieldObject =
| NormalObject
| TransformingObject;
type RegularCard =
| { "_OracleCard": "Card", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules?: Array<Rule>, CardPT?: CardPT, Loyalty?: LoyaltyNumber, Defense?: number, }
| { "_OracleCard": "MeldPiece", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules: Array<Rule>, CardPT?: CardPT, MeldsInto: string, }
| { "_OracleCard": "Melded", Name: string, Typeline: OracleTypeline, ColorIndicator?: Array<ColorIndicatorColor>, Rules: Array<Rule>, CardPT?: CardPT, Loyalty?: LoyaltyNumber, }
| { "_OracleCard": "Adventurer", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules?: Array<Rule>, CardPT?: CardPT, Adventure: Card, }
| { "_OracleCard": "Preparer", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules?: Array<Rule>, CardPT?: CardPT, Prepared: Card, }
| { "_OracleCard": "Ominous", Name: string, Typeline: OracleTypeline, ManaCost?: CardManaCost, ColorIndicator?: Array<ColorIndicatorColor>, Rules: Array<Rule>, CardPT?: CardPT, Omen: Card, }
| { "_OracleCard": "ModalDFC", FrontFace: Card, BackFace: Card, }
| { "_OracleCard": "Transforming", FrontFace: Card, BackFace: Card, }
| { "_OracleCard": "Flip", ManaCost: Array<ManaSymbolX>, Unflipped: FlipInfo, Flipped: FlipInfo, }
| { "_OracleCard": "Room", Typeline: OracleTypeline, LeftDoor: DoorInfo, RightDoor: DoorInfo, }
| { "_OracleCard": "Split", Cards: Array<Card>, };
type RegularObject =
| NormalObject
| ModalDFCObject
| TransformingObject
| SplitObject;
type RemoveCountersAction =
| { "_RemoveCountersAction": "ACounterFromCardInExile", "args": CardInExile }
| { "_RemoveCountersAction": "ACounterFromPermanent", "args": Permanent }
| { "_RemoveCountersAction": "ACounterFromPlayer", "args": Player }
| { "_RemoveCountersAction": "ACounterOfTypeFromCardInExile", "args": [CounterType, CardInExile] }
| { "_RemoveCountersAction": "ACounterOfTypeFromEachCardInExile", "args": [CounterType, CardsInExile] }
| { "_RemoveCountersAction": "ACounterOfTypeFromEachOfAnyNumberOfPermanents", "args": [CounterType, Permanents] }
| { "_RemoveCountersAction": "ACounterOfTypeFromEachPermanent", "args": [CounterType, Permanents] }
| { "_RemoveCountersAction": "ACounterOfTypeFromPermanent", "args": [CounterType, Permanent] }
| { "_RemoveCountersAction": "AllCountersFromEachPermanent", "args": Permanents }
| { "_RemoveCountersAction": "AllCountersFromEachPlayer", "args": Players }
| { "_RemoveCountersAction": "AllCountersFromPermanent", "args": Permanent }
| { "_RemoveCountersAction": "AllCountersFromPlayer", "args": Player }
| { "_RemoveCountersAction": "AllCountersOfTypeFromAPermanent", "args": [CounterType, Permanents] }
| { "_RemoveCountersAction": "AllCountersOfTypeFromEachPermanent", "args": [CounterType, Permanents] }
| { "_RemoveCountersAction": "AllCountersOfTypeFromPermanent", "args": [CounterType, Permanent] }
| { "_RemoveCountersAction": "AllCountersOfTypeFromPlayer", "args": [CounterType, Player] }
| { "_RemoveCountersAction": "AnyNumberOfCountersFromAmongPermanents", "args": Permanents }
| { "_RemoveCountersAction": "AnyNumberOfCountersFromPermanent", "args": Permanent }
| { "_RemoveCountersAction": "NumberCountersFromPermanent", "args": [GameNumber, Permanent] }
| { "_RemoveCountersAction": "NumberCountersOfTypeFromACardInExile", "args": [GameNumber, CounterType, CardsInExile] }
| { "_RemoveCountersAction": "NumberCountersOfTypeFromCardInExile", "args": [GameNumber, CounterType, CardInExile] }
| { "_RemoveCountersAction": "NumberCountersOfTypeFromEachCardInExile", "args": [GameNumber, CounterType, CardsInExile] }
| { "_RemoveCountersAction": "NumberCountersOfTypeFromEachPermanent", "args": [GameNumber, CounterType, Permanents] }
| { "_RemoveCountersAction": "NumberCountersOfTypeFromPermanent", "args": [GameNumber, CounterType, Permanent] }
| { "_RemoveCountersAction": "TheCountersDistributedThisWay" }
| { "_RemoveCountersAction": "UptoNumberCountersFromPermanent", "args": [GameNumber, Permanent] }
| { "_RemoveCountersAction": "UptoNumberCountersFromPlayer", "args": [GameNumber, Player] }
| { "_RemoveCountersAction": "UptoNumberCountersOfTypeFromAmongPermanents", "args": [GameNumber, CounterType, Permanents] }
| { "_RemoveCountersAction": "UptoNumberCountersOfTypeFromPermanent", "args": [GameNumber, CounterType, Permanent] };
type RemoveCountersCost =
| { "_RemoveCountersCost": "ACounterFromAPermanent", "args": Permanents }
| { "_RemoveCountersCost": "ACounterFromPermanent", "args": Permanent }
| { "_RemoveCountersCost": "ACounterOfTypeFromACardInExile", "args": [CounterType, CardsInExile] }
| { "_RemoveCountersCost": "ACounterOfTypeFromAPermanent", "args": [CounterType, Permanents] }
| { "_RemoveCountersCost": "ACounterOfTypeFromEachOfNumberPermanents", "args": [CounterType, GameNumber, Permanents] }
| { "_RemoveCountersCost": "ACounterOfTypeFromPermanent", "args": [CounterType, Permanent] }
| { "_RemoveCountersCost": "AllCountersOfTypeFromPermanent", "args": [CounterType, Permanent] }
| { "_RemoveCountersCost": "AnyNumberOfCountersOfTypeFromAmongPermanents", "args": [CounterType, Permanents] }
| { "_RemoveCountersCost": "AnyNumberOfCountersOfTypeFromPermanent", "args": [CounterType, Permanent] }
| { "_RemoveCountersCost": "NumberCountersFromAPermanent", "args": [GameNumber, Permanents] }
| { "_RemoveCountersCost": "NumberCountersFromAmongPermanents", "args": [GameNumber, Permanents] }
| { "_RemoveCountersCost": "NumberCountersFromPermanent", "args": [GameNumber, Permanent] }
| { "_RemoveCountersCost": "NumberCountersOfTypeFromAmongPermanents", "args": [GameNumber, CounterType, Permanents] }
| { "_RemoveCountersCost": "NumberCountersOfTypeFromPermanent", "args": [GameNumber, CounterType, Permanent] }
| { "_RemoveCountersCost": "NumberOrMoreCountersOfTypeFromAmongPermanents", "args": [GameNumber, CounterType, Permanents] }
| { "_RemoveCountersCost": "NumberOrMoreCountersOfTypeFromPermanent", "args": [GameNumber, CounterType, Permanent] };
type ReplacableEventAnEffectWouldCreateAnyNumberOfTokens =
| { "_ReplacableEventAnEffectWouldCreateAnyNumberOfTokens": "AnEffectWouldCreateAnyNumberOfTokensUnderAPlayersControl", "args": [Permanents, Players] }
| { "_ReplacableEventAnEffectWouldCreateAnyNumberOfTokens": "AnEffectWouldCreateAnyNumberOfTokens", "args": Permanents };
type ReplacableEventAnyNumberOfTokensWouldBeCreated =
| { "_ReplacableEventAnyNumberOfTokensWouldBeCreated": "AnyNumberOfTokensWouldBeCreatedUnderAPlayersControl", "args": [Permanents, Players] }
| { "_ReplacableEventAnyNumberOfTokensWouldBeCreated": "AnyNumberOfTokensWouldBeCreated", "args": Permanents };
type ReplacableEventAPlayerWouldCreateAToken =
| { "_ReplacableEventAPlayerWouldCreateAToken": "APlayerWouldCreateAToken", "args": [Players, Permanents] };
type ReplacableEventAPlayerWouldCreateTokens =
| { "_ReplacableEventAPlayerWouldCreateTokens": "APlayerWouldCreateTokens", "args": [Players, Permanents] }
| { "_ReplacableEventAPlayerWouldCreateTokens": "APlayerWouldCreateTokensForTheFirstTimeEachTurn", "args": [Players, Permanents] };
type ReplacableEventTokensWouldBeCreatedUnderAPlayersControl =
| { "_ReplacableEventTokensWouldBeCreatedUnderAPlayersControl": "TokensWouldBeCreatedUnderAPlayersControl", "args": Players };
type ReplacableEventWouldBeginATurn =
| { "_ReplacableEventWouldBeginATurn": "PlayerWouldBeginTheirTurn", "args": Player }
| { "_ReplacableEventWouldBeginATurn": "APlayerWouldBeginAnExtraTurn", "args": Players };
type ReplacableEventWouldBeginDrawStep =
| { "_ReplacableEventWouldBeginDrawStep": "PlayerWouldBeginTheirDrawStep", "args": Player };
type ReplacableEventWouldConnive =
| { "_ReplacableEventWouldConnive": "APermanentWouldConnive", "args": Permanents };
type ReplacableEventWouldCopyASpell =
| { "_ReplacableEventWouldCopyASpell": "APlayerWouldCopyASpellAnyNumberOfTimes", "args": [Players, Spells] };
type ReplacableEventWouldCounterASpell =
| { "_ReplacableEventWouldCounterASpell": "ASpellOrAbilityWouldCounterASpell", "args": [SpellsAndAbilities, Spells] };
type ReplacableEventWouldDealDamage =
| { "_ReplacableEventWouldDealDamage": "Or", "args": Array<ReplacableEventWouldDealDamage> }
| { "_ReplacableEventWouldDealDamage": "LethalLoyaltyDamageWouldBeDealtToAPlaneswalker", "args": Permanents }
| { "_ReplacableEventWouldDealDamage": "AnAmountOfNonCombatDamageWouldBeDealtByASourceToARecipient", "args": [Comparison, DamageSources, DamageRecipientsList] }
| { "_ReplacableEventWouldDealDamage": "AnAmountOfDamageWouldBeDealtByASourceToARecipient", "args": [Comparison, DamageSources, DamageRecipientsList] }
| { "_ReplacableEventWouldDealDamage": "AnAmountOfDamageWouldBeDealtByASourceToRecipient", "args": [Comparison, DamageSources, SingleDamageRecipient] }
| { "_ReplacableEventWouldDealDamage": "CombatDamageWouldBeDealtByCreatureToRecipient", "args": [Permanent, SingleDamageRecipient] }
| { "_ReplacableEventWouldDealDamage": "CombatDamageWouldBeDealtByACreatureToARecipient", "args": [Permanents, DamageRecipientsList] }
| { "_ReplacableEventWouldDealDamage": "CombatDamageWouldBeDealtByACreatureToRecipient", "args": [Permanents, SingleDamageRecipient] }
| { "_ReplacableEventWouldDealDamage": "CombatDamageWouldBeDealtByCreature", "args": Permanent }
| { "_ReplacableEventWouldDealDamage": "CombatDamageWouldBeDealtByCreatureToARecipient", "args": [Permanent, DamageRecipientsList] }
| { "_ReplacableEventWouldDealDamage": "CombatDamageWouldBeDealtToRecipient", "args": SingleDamageRecipient }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByAPermanent", "args": Permanents }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByAPermanentToARecipient", "args": [Permanents, DamageRecipientsList] }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByAPermanentToRecipient", "args": [Permanents, SingleDamageRecipient] }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByASource", "args": DamageSources }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByASourceToARecipient", "args": [DamageSources, DamageRecipientsList] }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByASourceToRecipient", "args": [DamageSources, SingleDamageRecipient] }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByASpell", "args": Spells }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByASpellToARecipient", "args": [Spells, DamageRecipientsList] }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByASpellToRecipient", "args": [Spells, SingleDamageRecipient] }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByPermanent", "args": Permanent }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByPermanentToRecipient", "args": [Permanent, SingleDamageRecipient] }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtByPermanentToARecipient", "args": [Permanent, DamageRecipientsList] }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtBySourceToRecipient", "args": [SingleDamageSource, SingleDamageRecipient] }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtBySpell", "args": Spell }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtToARecipient", "args": DamageRecipientsList }
| { "_ReplacableEventWouldDealDamage": "DamageWouldBeDealtToRecipient", "args": SingleDamageRecipient }
| { "_ReplacableEventWouldDealDamage": "NoncombatDamageWouldBeDealtByASourceToARecipient", "args": [DamageSources, DamageRecipientsList] }
| { "_ReplacableEventWouldDealDamage": "NoncombatDamageWouldBeDealtBySpellToARecipient", "args": [Spell, DamageRecipientsList] }
| { "_ReplacableEventWouldDealDamage": "Each1DamagePlayerWouldBeDealt", "args": Player };
type ReplacableEventWouldDestroy =
| { "_ReplacableEventWouldDestroy": "PermanentWouldBeDestroyed", "args": Permanent };
type ReplacableEventWouldDiscard =
| { "_ReplacableEventWouldDiscard": "ASpellOrAbilityWouldCausePlayerToDiscardCard", "args": [SpellsAndAbilities, Player, CardInHand] }
| { "_ReplacableEventWouldDiscard": "ASpellOrAbilityWouldCausePlayerToDiscardACard", "args": [SpellsAndAbilities, Player] }
| { "_ReplacableEventWouldDiscard": "AnEffectWouldCausePlayerToDiscardACard", "args": Player };
type ReplacableEventWouldDraw =
| { "_ReplacableEventWouldDraw": "APlayerWouldDrawOneOrMoreCards", "args": Players }
| { "_ReplacableEventWouldDraw": "APlayerWouldDrawACard", "args": Players }
| { "_ReplacableEventWouldDraw": "PlayerWouldDrawACardForTheFirstTimeEachPlayersTurn", "args": [Player, Players] }
| { "_ReplacableEventWouldDraw": "PlayerWouldDrawACardForTheFirstTimeEachPlayersTurnExceptFirstDrawStepDraw", "args": Player }
| { "_ReplacableEventWouldDraw": "PlayerWouldDrawDuringTheirDrawStep", "args": Player }
| { "_ReplacableEventWouldDraw": "APlayerWouldDrawExceptFirstDrawStepDraw", "args": Players }
| { "_ReplacableEventWouldDraw": "APlayerWouldDrawTwoOrMoreCards", "args": Players }
| { "_ReplacableEventWouldDraw": "PlayerWouldDrawExceptFirstDrawStepDraw", "args": Player }
| { "_ReplacableEventWouldDraw": "ACyclingAbilityOfAPermanentWouldCausePlayerToDrawACard", "args": [Permanents, Player] };
type ReplacableEventWouldEnter =
| { "_ReplacableEventWouldEnter": "APermanentWouldEnterTheBattlefieldFromExileOrAfterBeingCastFromExile", "args": Permanents }
| { "_ReplacableEventWouldEnter": "APermanentWouldEnterTheBattlefieldUnderAPlayersControl", "args": [Permanents, Players] }
| { "_ReplacableEventWouldEnter": "APermanentWouldEnterTheBattlefieldAndWasntCast", "args": Permanents }
| { "_ReplacableEventWouldEnter": "APermanentWouldEnterTheBattlefield", "args": Permanents }
| { "_ReplacableEventWouldEnter": "PermanentWouldEnterTheBattlefieldAndWasntCastOrNoManaWasSpentToCast", "args": Permanent }
| { "_ReplacableEventWouldEnter": "PermanentWouldEnterTheBattlefield", "args": Permanent };
type ReplacableEventWouldExplore =
| { "_ReplacableEventWouldExplore": "APermanentWouldExplore", "args": Permanents };
type ReplacableEventWouldFlipACoin =
| { "_ReplacableEventWouldFlipACoin": "PlayerWouldFlipACoin", "args": Player };
type ReplacableEventWouldGainLife =
| { "_ReplacableEventWouldGainLife": "APlayerWouldGainLife", "args": Players }
| { "_ReplacableEventWouldGainLife": "PlayerWouldGainLife", "args": Player }
| { "_ReplacableEventWouldGainLife": "ASpellOrAbilityWouldCauseItsControllerToGainLife", "args": SpellsAndAbilities };
type ReplacableEventWouldGetEnergy =
| { "_ReplacableEventWouldGetEnergy": "APlayerWouldGetEnergy", "args": Players };
type ReplacableEventWouldLearn =
| { "_ReplacableEventWouldLearn": "APlayerWouldLearn", "args": Players };
type ReplacableEventWouldLeaveTheBattlefield =
| { "_ReplacableEventWouldLeaveTheBattlefield": "PermanentWouldLeaveTheBattlefield", "args": Permanent };
type ReplacableEventWouldLoseLife =
| { "_ReplacableEventWouldLoseLife": "APlayerWouldLoseLife", "args": Players };
type ReplacableEventWouldLoseTheGame =
| { "_ReplacableEventWouldLoseTheGame": "PlayerWouldLoseTheGame", "args": Player };
type ReplacableEventWouldMask =
| { "_ReplacableEventWouldMask": "PermanentWouldAssignDamageDealDamageBeDealDamageOrBecomeTapped", "args": Permanent };
type ReplacableEventWouldMill =
| { "_ReplacableEventWouldMill": "APlayerWouldMillAnyNumberOfCards", "args": Players };
type ReplacableEventWouldPayLife =
| { "_ReplacableEventWouldPayLife": "APlayerWouldPayAnAmountOfLife", "args": [Players, Comparison] };
type ReplacableEventWouldPlaneswalk =
| { "_ReplacableEventWouldPlaneswalk": "APlayerWouldPlaneswalkAsAResultOfRollingThePlanarDie", "args": Players }
| { "_ReplacableEventWouldPlaneswalk": "APlayerWouldPlaneswalk", "args": Players };
type ReplacableEventWouldProduceMana =
| { "_ReplacableEventWouldProduceMana": "TappingPermanentWouldProduceMana", "args": Permanent }
| { "_ReplacableEventWouldProduceMana": "TappingAPermanentWouldProduceMana", "args": Permanents }
| { "_ReplacableEventWouldProduceMana": "TappingAPermanentWouldProduceTwoOrMoreMana", "args": Permanents }
| { "_ReplacableEventWouldProduceMana": "PlayerTappingAPermanentWouldProduceMana", "args": [Player, Permanents] }
| { "_ReplacableEventWouldProduceMana": "ASpellOrAbilityWouldProduceColoredMana", "args": SpellsAndAbilities };
type ReplacableEventWouldProliferate =
| { "_ReplacableEventWouldProliferate": "APlayerWouldProliferate", "args": Players };
type ReplacableEventWouldPutAPermanentOnTheBattlefield =
| { "_ReplacableEventWouldPutAPermanentOnTheBattlefield": "APlayerWouldPutAPermanentOnTheBattlefield", "args": [Players, Permanents] };
type ReplacableEventWouldPutCounters =
| { "_ReplacableEventWouldPutCounters": "APlayerWouldPutAnyNumberOfCountersOfTypeOnAPermanent", "args": [Players, CounterType, Permanents] }
| { "_ReplacableEventWouldPutCounters": "APlayerWouldPutCountersOnAPermanent", "args": [Players, Permanents] }
| { "_ReplacableEventWouldPutCounters": "APlayerWouldPutCountersOnAPermanentOrAPlayer", "args": [Players, Permanents, Players] }
| { "_ReplacableEventWouldPutCounters": "AnAbilityWouldPutCountersOfTypeOnAPermanent", "args": [Abilities, CounterType, Permanents] }
| { "_ReplacableEventWouldPutCounters": "AnEffectWouldPutCountersOnAPermanent", "args": Permanents }
| { "_ReplacableEventWouldPutCounters": "AnyNumberOfCountersOfTypeWouldBePutOnAPlayer", "args": [CounterType, Players] }
| { "_ReplacableEventWouldPutCounters": "AnyNumberOfCountersWouldBePutOnAPlayer", "args": Players }
| { "_ReplacableEventWouldPutCounters": "CountersOfTypeWouldBePointOnAPermanent", "args": [CounterType, Permanents] }
| { "_ReplacableEventWouldPutCounters": "CountersWouldBePutOnAPermanent", "args": Permanents };
type ReplacableEventWouldPutIntoGraveyard =
| { "_ReplacableEventWouldPutIntoGraveyard": "Or", "args": Array<ReplacableEventWouldPutIntoGraveyard> }
| { "_ReplacableEventWouldPutIntoGraveyard": "APermanentWouldDie", "args": Permanents }
| { "_ReplacableEventWouldPutIntoGraveyard": "APermanentWouldBePutIntoAGraveyard", "args": Permanents }
| { "_ReplacableEventWouldPutIntoGraveyard": "WouldPutAPermanentIntoAPlayersGraveyard", "args": [Permanents, Players] }
| { "_ReplacableEventWouldPutIntoGraveyard": "WouldPutACardInPlayersGraveyardFromAnywhereNotCycled", "args": [Cards, Player] }
| { "_ReplacableEventWouldPutIntoGraveyard": "WouldPutACardInPlayersGraveyardFromAnywhere", "args": [Cards, Player] }
| { "_ReplacableEventWouldPutIntoGraveyard": "WouldPutACardInAPlayersGraveyardFromAnywhereOtherThanBattlefield", "args": [Cards, Players] }
| { "_ReplacableEventWouldPutIntoGraveyard": "WouldPutACardInAPlayersGraveyardFromAnywhere", "args": [Cards, Players] }
| { "_ReplacableEventWouldPutIntoGraveyard": "WouldPutACardOrTokenInAPlayersGraveyardFromAnywhere", "args": [Cards, Players] }
| { "_ReplacableEventWouldPutIntoGraveyard": "WouldPutAPermanentIntoPlayersGraveyard", "args": [Permanents, Player] }
| { "_ReplacableEventWouldPutIntoGraveyard": "WouldPutAPermanentASpellOrACardIntoAPlayersGraveyard", "args": [Permanents, Spells, Cards, Players] };
type ReplacableEventWouldReduceLife =
| { "_ReplacableEventWouldReduceLife": "PlayersLifeTotalWouldBeReducedToNumberOrLess", "args": [Player, GameNumber] };
type ReplacableEventWouldRollDice =
| { "_ReplacableEventWouldRollDice": "APlayerWouldRollANumberOfDice", "args": Players }
| { "_ReplacableEventWouldRollDice": "APlayerWouldRollANumberOfD6", "args": Players };
type ReplacableEventWouldRollPlanarDice =
| { "_ReplacableEventWouldRollPlanarDice": "APlayerWouldRollANumberOfPlanarDice", "args": Players };
type ReplacableEventWouldScry =
| { "_ReplacableEventWouldScry": "PlayerWouldScry", "args": Player };
type ReplacableEventWouldSearchLibrary =
| { "_ReplacableEventWouldSearchLibrary": "APlayerWouldSearchTheirLibrary", "args": Players };
type ReplacableEventWouldUntap =
| { "_ReplacableEventWouldUntap": "APermanentWouldUntapDuringsItsControllersUntapStep", "args": Permanents };
type ReplacementActionAnEffectWouldCreateAnyNumberOfTokens =
| { "_ReplacementActionAnEffectWouldCreateAnyNumberOfTokens": "CreateTokensInstead", "args": Array<CreatableToken> };
type ReplacementActionAnyNumberOfTokensWouldBeCreated =
| { "_ReplacementActionAnyNumberOfTokensWouldBeCreated": "CreateTokensInstead", "args": Array<CreatableToken> };
type ReplacementActionAPlayerWouldCreateAToken =
| { "_ReplacementActionAPlayerWouldCreateAToken": "CreateTokensInstead", "args": Array<CreatableToken> };
type ReplacementActionAPlayerWouldCreateTokensCost =
| { "_ReplacementActionAPlayerWouldCreateTokensCost": "ChooseAPermanent", "args": Permanents };
type ReplacementActionAPlayerWouldCreateTokens =
| { "_ReplacementActionAPlayerWouldCreateTokens": "CreateTokensInstead", "args": Array<CreatableToken> }
| { "_ReplacementActionAPlayerWouldCreateTokens": "ChooseAnAction", "args": Array<Array<ReplacementActionAPlayerWouldCreateTokens>> }
| { "_ReplacementActionAPlayerWouldCreateTokens": "MayCost", "args": ReplacementActionAPlayerWouldCreateTokensCost }
| { "_ReplacementActionAPlayerWouldCreateTokens": "IfElse", "args": [Condition, Array<ReplacementActionAPlayerWouldCreateTokens>, Array<ReplacementActionAPlayerWouldCreateTokens>] };
type ReplacementActionTokensWouldBeCreatedUnderAPlayersControl =
| { "_ReplacementActionTokensWouldBeCreatedUnderAPlayersControl": "CreateTokensUnderPlayersControlInstead", "args": [Array<CreatableToken>, Player] };
type ReplacementActionWouldAdapt =
| { "_ReplacementActionWouldAdapt": "AdaptAsThoughtItHadNoCounters", "args": CounterType };
type ReplacementActionWouldBeginATurnCost =
| { "_ReplacementActionWouldBeginATurnCost": "SkipThisTurn" };
type ReplacementActionWouldBeginATurn =
| { "_ReplacementActionWouldBeginATurn": "MayCost", "args": ReplacementActionWouldBeginATurnCost }
| { "_ReplacementActionWouldBeginATurn": "SkipTurn" }
| { "_ReplacementActionWouldBeginATurn": "UntapPermanent", "args": Permanent }
| { "_ReplacementActionWouldBeginATurn": "If", "args": [Condition, Array<ReplacementActionWouldBeginATurn>] };
type ReplacementActionWouldBeginDrawStepCost =
| { "_ReplacementActionWouldBeginDrawStepCost": "SkipThisDrawStep" };
type ReplacementActionWouldBeginDrawStep =
| { "_ReplacementActionWouldBeginDrawStep": "MayCost", "args": ReplacementActionWouldBeginDrawStepCost }
| { "_ReplacementActionWouldBeginDrawStep": "If", "args": [Condition, Array<ReplacementActionWouldBeginDrawStep>] }
| { "_ReplacementActionWouldBeginDrawStep": "GainLife", "args": GameNumber };
type ReplacementActionWouldConnive =
| { "_ReplacementActionWouldConnive": "DrawACard" }
| { "_ReplacementActionWouldConnive": "CreatureConnives", "args": Permanent };
type ReplacementActionWouldCopyASpell =
| { "_ReplacementActionWouldCopyASpell": "WouldCopyASpell_CopyAnAdditionalTimeAndMayChooseNewTargets" };
type ReplacementActionWouldCounterASpell =
| { "_ReplacementActionWouldCounterASpell": "ExileSpell", "args": Spell }
| { "_ReplacementActionWouldCounterASpell": "MayAction", "args": ReplacementActionWouldCounterASpell }
| { "_ReplacementActionWouldCounterASpell": "PlayExiledCardWithoutPaying", "args": CardInExile };
type ReplacementActionWouldDealDamageCost =
| { "_ReplacementActionWouldDealDamageCost": "Exile", "args": [Array<ExilableCost>, Array<ExileFlag>] };
type ReplacementActionWouldDealDamagePutCounters =
| { "_ReplacementActionWouldDealDamagePutCounters": "NumberCountersOfTypeOnPermanent", "args": [GameNumber, CounterType, Permanent] };
type ReplacementActionWouldDealDamageRemoveCounters =
| { "_ReplacementActionWouldDealDamageRemoveCounters": "ACounterOfTypeFromPermanent", "args": [CounterType, Permanent] }
| { "_ReplacementActionWouldDealDamageRemoveCounters": "NumberCountersOfTypeFromPermanent", "args": [GameNumber, CounterType, Permanent] };
type ReplacementActionWouldDealDamage =
| { "_ReplacementActionWouldDealDamage": "Unless", "args": [Condition, Array<ReplacementActionWouldDealDamage>] }
| { "_ReplacementActionWouldDealDamage": "PutCounters", "args": Array<ReplacementActionWouldDealDamagePutCounters> }
| { "_ReplacementActionWouldDealDamage": "RemoveCounters", "args": Array<ReplacementActionWouldDealDamageRemoveCounters> }
| { "_ReplacementActionWouldDealDamage": "LoseTheGame" }
| { "_ReplacementActionWouldDealDamage": "CancelThatDamage" }
| { "_ReplacementActionWouldDealDamage": "ContinueDealingDamage" }
| { "_ReplacementActionWouldDealDamage": "DealDamageAsThoughItHadInfect" }
| { "_ReplacementActionWouldDealDamage": "DealDamageButHealPreviousDamage" }
| { "_ReplacementActionWouldDealDamage": "DealDamageInstead", "args": GameNumber }
| { "_ReplacementActionWouldDealDamage": "DealSomeDamageToRecipientInstead", "args": [GameNumber, DamageRecipients] }
| { "_ReplacementActionWouldDealDamage": "DealToAnyTargetInstead", "args": SingleDamageRecipient }
| { "_ReplacementActionWouldDealDamage": "DealToCreatureOrPlaneswalkerInstead", "args": Permanent }
| { "_ReplacementActionWouldDealDamage": "DealToPlayerInstead", "args": Player }
| { "_ReplacementActionWouldDealDamage": "SpellDealsDamage", "args": [Spell, GameNumber, DamageRecipient] }
| { "_ReplacementActionWouldDealDamage": "MayActions", "args": Array<ReplacementActionWouldDealDamage> }
| { "_ReplacementActionWouldDealDamage": "MustCost", "args": ReplacementActionWouldDealDamageCost }
| { "_ReplacementActionWouldDealDamage": "DestroyPermanent", "args": Permanent }
| { "_ReplacementActionWouldDealDamage": "DrawNumberCards", "args": GameNumber }
| { "_ReplacementActionWouldDealDamage": "Exile", "args": [Array<Exilable>, Array<ExileFlag>] }
| { "_ReplacementActionWouldDealDamage": "GainControlOfPermanent", "args": Permanent }
| { "_ReplacementActionWouldDealDamage": "MillNumberCards", "args": GameNumber }
| { "_ReplacementActionWouldDealDamage": "PlayerAction", "args": [Player, ReplacementActionWouldDealDamage] }
| { "_ReplacementActionWouldDealDamage": "SacrificeNumberPermanents", "args": [GameNumber, Permanents] };
type ReplacementActionWouldDestroy =
| { "_ReplacementActionWouldDestroy": "RegeneratePermanent", "args": Permanent }
| { "_ReplacementActionWouldDestroy": "CancelDestroy" }
| { "_ReplacementActionWouldDestroy": "RemoveAllDamageFromPermanent", "args": Permanent }
| { "_ReplacementActionWouldDestroy": "SacrificePermanent", "args": Permanent }
| { "_ReplacementActionWouldDestroy": "CreatePermanentLayerEffectUntil", "args": [Permanent, Array<LayerEffect>, Expiration] };
type ReplacementActionWouldDiscard =
| { "_ReplacementActionWouldDiscard": "DiscardItToTopOfLibraryInstead" }
| { "_ReplacementActionWouldDiscard": "MayAction", "args": ReplacementActionWouldDiscard }
| { "_ReplacementActionWouldDiscard": "MayActions", "args": Array<ReplacementActionWouldDiscard> }
| { "_ReplacementActionWouldDiscard": "RevealItAndPutItOnTopOfLibraryInstead" }
| { "_ReplacementActionWouldDiscard": "PutItOntoTheBattlefieldInstead", "args": Array<EnterFlag> };
type ReplacementActionWouldDrawCost =
| { "_ReplacementActionWouldDrawCost": "DiscardACard" }
| { "_ReplacementActionWouldDrawCost": "PutAGraveyardCardOntoBattlefield", "args": [CardsInGraveyards, Array<EnterFlag>] }
| { "_ReplacementActionWouldDrawCost": "PutACardFromGraveyardIntoHand", "args": CardsInGraveyards }
| { "_ReplacementActionWouldDrawCost": "PayLife", "args": GameNumber };
type ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction =
| { "_ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction": "PutAGenericCardIntoGraveyard" }
| { "_ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction": "PutAGenericCardIntoHand" }
| { "_ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction": "PutAGenericCardOnTopOfLibrary" }
| { "_ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction": "PutTheRemainingCardsIntoGraveyard" }
| { "_ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction": "PutTheRemainingCardsOnTheBottomOfLibraryInARandomOrder" }
| { "_ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction": "PutTheRemainingCardsOnTheBottomOfLibraryInAnyOrder" }
| { "_ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction": "PutTheRemainingCardsOnTopOfLibraryInAnyOrder" };
type ReplacementActionWouldDrawPutCounters =
| { "_ReplacementActionWouldDrawPutCounters": "ACounterOfTypeOnPermanent", "args": [CounterType, Permanent] }
| { "_ReplacementActionWouldDrawPutCounters": "NumberCountersOfTypeOnPermanent", "args": [GameNumber, CounterType, Permanent] };
type ReplacementActionWouldDraw =
| { "_ReplacementActionWouldDraw": "AnyPlayerMayCost", "args": [Players, ReplacementActionWouldDrawCost] }
| { "_ReplacementActionWouldDraw": "CastExiledCardWithoutPaying", "args": CardInExile }
| { "_ReplacementActionWouldDraw": "ChooseAPlayer", "args": Players }
| { "_ReplacementActionWouldDraw": "ChooseAnAction", "args": Array<Array<ReplacementActionWouldDraw>> }
| { "_ReplacementActionWouldDraw": "CreatePlayerEffectUntil", "args": [Player, Array<PlayerEffect>, Expiration] }
| { "_ReplacementActionWouldDraw": "CreateTokens", "args": [Array<CreatableToken>, Array<TokenFlag>] }
| { "_ReplacementActionWouldDraw": "DiscardACard" }
| { "_ReplacementActionWouldDraw": "DiscardTheCardDrawnThisWay" }
| { "_ReplacementActionWouldDraw": "DrawACard" }
| { "_ReplacementActionWouldDraw": "DrawNumberCards", "args": GameNumber }
| { "_ReplacementActionWouldDraw": "EachPlayerAction", "args": [Players, ReplacementActionWouldDraw] }
| { "_ReplacementActionWouldDraw": "Exile", "args": [Array<Exilable>, Array<ExileFlag>] }
| { "_ReplacementActionWouldDraw": "GainLife", "args": GameNumber }
| { "_ReplacementActionWouldDraw": "If", "args": [Condition, Array<ReplacementActionWouldDraw>] }
| { "_ReplacementActionWouldDraw": "IfElse", "args": [Condition, Array<ReplacementActionWouldDraw>, Array<ReplacementActionWouldDraw>] }
| { "_ReplacementActionWouldDraw": "LookAtTheTopNumberCardsOfLibrary", "args": [GameNumber, Array<ReplacementActionWouldDrawLookAtTheTopNumberCardsOfLibraryAction>] }
| { "_ReplacementActionWouldDraw": "LoseLife", "args": GameNumber }
| { "_ReplacementActionWouldDraw": "LoseTheGame" }
| { "_ReplacementActionWouldDraw": "MayAction", "args": ReplacementActionWouldDraw }
| { "_ReplacementActionWouldDraw": "MillACard" }
| { "_ReplacementActionWouldDraw": "MustCost", "args": ReplacementActionWouldDrawCost }
| { "_ReplacementActionWouldDraw": "PermanentDealsDamage", "args": [Permanent, GameNumber, DamageRecipients] }
| { "_ReplacementActionWouldDraw": "PlayerAction", "args": [Player, ReplacementActionWouldDraw] }
| { "_ReplacementActionWouldDraw": "PlayerActions", "args": [Player, Array<ReplacementActionWouldDraw>] }
| { "_ReplacementActionWouldDraw": "PlayerMustCost", "args": [Player, ReplacementActionWouldDrawCost] }
| { "_ReplacementActionWouldDraw": "PutACardFromOutsideGameInHand", "args": Cards }
| { "_ReplacementActionWouldDraw": "PutAPermanentIntoItsOwnersHand", "args": Permanents }
| { "_ReplacementActionWouldDraw": "PutCounters", "args": Array<ReplacementActionWouldDrawPutCounters> }
| { "_ReplacementActionWouldDraw": "PutEachExiledCardOnTheBottomOfTheirOwnersLibraryInARandomOrder", "args": CardsInExile }
| { "_ReplacementActionWouldDraw": "PutExiledCardIntoOwnersHand", "args": CardInExile }
| { "_ReplacementActionWouldDraw": "PutTheTopCardOfTheExiledPileIntoHand" }
| { "_ReplacementActionWouldDraw": "PutTopOfLibraryInGraveyard" }
| { "_ReplacementActionWouldDraw": "RevealCardsFromTheTopOfLibraryUntilACardOfTypeIsRevealed", "args": [Cards, Array<RevealTheTopNumberCardsOfLibraryAction>] }
| { "_ReplacementActionWouldDraw": "RevealTheCardDrawnThisWay" }
| { "_ReplacementActionWouldDraw": "RevealTheTopNumberCardsOfLibrary", "args": [GameNumber, Array<RevealTheTopNumberCardsOfLibraryAction>] }
| { "_ReplacementActionWouldDraw": "RevealTopCardOfLibrary" }
| { "_ReplacementActionWouldDraw": "SearchLibrary", "args": Array<SearchLibraryAction> }
| { "_ReplacementActionWouldDraw": "SkipThatDraw" }
| { "_ReplacementActionWouldDraw": "Unless", "args": [Condition, Array<ReplacementActionWouldDraw>] }
| { "_ReplacementActionWouldDraw": "WinTheGame" };
type ReplacementActionWouldEnterCost =
| { "_ReplacementActionWouldEnterCost": "Exile", "args": [Array<ExilableCost>, Array<ExileFlag>] }
| { "_ReplacementActionWouldEnterCost": "DiscardACardOfType", "args": Cards }
| { "_ReplacementActionWouldEnterCost": "EntersTapped" }
| { "_ReplacementActionWouldEnterCost": "ExileTwoCardsFromAmongPlayersGraveyards", "args": [CardsInGraveyards, Players] }
| { "_ReplacementActionWouldEnterCost": "PayLife", "args": GameNumber }
| { "_ReplacementActionWouldEnterCost": "PutANumberOfExiledCardsIntoOwnersGraveyard", "args": [GameNumber, CardsInExile] }
| { "_ReplacementActionWouldEnterCost": "PutAPermanentIntoItsOwnersHand", "args": Permanents }
| { "_ReplacementActionWouldEnterCost": "RevealACardOfTypeFromHand", "args": Cards }
| { "_ReplacementActionWouldEnterCost": "RevealAnyNumberOfCardsOfTypeFromHand", "args": Cards }
| { "_ReplacementActionWouldEnterCost": "SacrificeAPermanent", "args": Permanents }
| { "_ReplacementActionWouldEnterCost": "SacrificeNumberPermanents", "args": [GameNumber, Permanents] };
type ReplacementActionWouldEnterPutCounters =
| { "_ReplacementActionWouldEnterPutCounters": "ACounterOfTypeOnAPermanent", "args": [CounterType, Permanents] }
| { "_ReplacementActionWouldEnterPutCounters": "NumberCountersOfTypeOnPlayer", "args": [GameNumber, CounterType, Player] };
type ReplacementActionWouldEnterRemoveCounters =
| { "_ReplacementActionWouldEnterRemoveCounters": "AllCountersFromAnyNumberOfPermanents", "args": Permanents }
| { "_ReplacementActionWouldEnterRemoveCounters": "AllCountersFromEachPermanent", "args": Permanents };
type ReplacementActionWouldEnter =
| { "_ReplacementActionWouldEnter": "APlayerAction", "args": [Players, ReplacementActionWouldEnter] }
| { "_ReplacementActionWouldEnter": "BecomeDay" }
| { "_ReplacementActionWouldEnter": "ChooseABasicLandType" }
| { "_ReplacementActionWouldEnter": "ChooseACardName", "args": CardsInOracle }
| { "_ReplacementActionWouldEnter": "ChooseACardtype" }
| { "_ReplacementActionWouldEnter": "ChooseACardtypeExceptFromList", "args": Array<CardType> }
| { "_ReplacementActionWouldEnter": "ChooseACardtypeFromList", "args": Array<CardType> }
| { "_ReplacementActionWouldEnter": "ChooseACardtypeSharedAmongExiledCards", "args": CardsInExile }
| { "_ReplacementActionWouldEnter": "ChooseAColor", "args": ChoosableColor }
| { "_ReplacementActionWouldEnter": "ChooseAColorAndCreatureType", "args": Array<ColorAndCreatureType> }
| { "_ReplacementActionWouldEnter": "ChooseACreatureType" }
| { "_ReplacementActionWouldEnter": "ChooseACreatureTypeFromList", "args": Array<CreatureType> }
| { "_ReplacementActionWouldEnter": "ChooseADirection" }
| { "_ReplacementActionWouldEnter": "ChooseALandType" }
| { "_ReplacementActionWouldEnter": "ChooseANumberBetween", "args": [number, number] }
| { "_ReplacementActionWouldEnter": "ChooseANumberFromAmongAtRandom", "args": Array<number> }
| { "_ReplacementActionWouldEnter": "ChooseANumberGreaterThanNumber", "args": number }
| { "_ReplacementActionWouldEnter": "ChooseAPermanent", "args": Permanents }
| { "_ReplacementActionWouldEnter": "ChooseAPlaneswalkerType" }
| { "_ReplacementActionWouldEnter": "ChooseAPlayer", "args": Players }
| { "_ReplacementActionWouldEnter": "ChooseEvenOrOdd" }
| { "_ReplacementActionWouldEnter": "ChooseLandType", "args": Array<LandType> }
| { "_ReplacementActionWouldEnter": "ChooseNumberAbilities", "args": [GameNumber, Array<Rule>] }
| { "_ReplacementActionWouldEnter": "ChooseTwoBasicLandTypes" }
| { "_ReplacementActionWouldEnter": "ChooseTwoColors" }
| { "_ReplacementActionWouldEnter": "ChooseTwoPlayers", "args": Players }
| { "_ReplacementActionWouldEnter": "ChooseUptoNumberColors", "args": [GameNumber, ChoosableColor] }
| { "_ReplacementActionWouldEnter": "ChooseWord", "args": Array<string> }
| { "_ReplacementActionWouldEnter": "CreateFutureTrigger", "args": [FutureTrigger, Actions] }
| { "_ReplacementActionWouldEnter": "DiscardAnyNumberOfCardsOfType", "args": Cards }
| { "_ReplacementActionWouldEnter": "DiscardHand" }
| { "_ReplacementActionWouldEnter": "DraftACardFromSpellBook", "args": string }
| { "_ReplacementActionWouldEnter": "EachPlayerAction", "args": [Players, ReplacementActionWouldEnter] }
| { "_ReplacementActionWouldEnter": "EnterAsACopyOfACardInAPlayersGraveyard", "args": [CardsInGraveyards, Players, CopyEffects] }
| { "_ReplacementActionWouldEnter": "EnterAsACopyOfACardInExile", "args": [CardsInExile, CopyEffects] }
| { "_ReplacementActionWouldEnter": "EnterAsACopyOfAPermanent", "args": [Permanents, CopyEffects] }
| { "_ReplacementActionWouldEnter": "EnterAsACopyOfAPermanentUntil", "args": [Permanents, CopyEffects, Expiration] }
| { "_ReplacementActionWouldEnter": "EnterAsACopyOfPermanent", "args": [Permanent, CopyEffects] }
| { "_ReplacementActionWouldEnter": "EnterAsCopyOfExiled", "args": [CardInExile, CopyEffects] }
| { "_ReplacementActionWouldEnter": "EntersAttachedToAPermanent", "args": Permanents }
| { "_ReplacementActionWouldEnter": "EntersNormally" }
| { "_ReplacementActionWouldEnter": "EntersPrepared" }
| { "_ReplacementActionWouldEnter": "EntersTapped" }
| { "_ReplacementActionWouldEnter": "EntersUnderAPlayersControl", "args": Players }
| { "_ReplacementActionWouldEnter": "EntersUnderPlayersControl", "args": Player }
| { "_ReplacementActionWouldEnter": "EntersUntapped" }
| { "_ReplacementActionWouldEnter": "EntersWithACounter", "args": CounterType }
| { "_ReplacementActionWouldEnter": "EntersWithACounterOfChoice", "args": Array<CounterType> }
| { "_ReplacementActionWouldEnter": "EntersWithACounterOfTypeForEachKindOfCounterOnPermanent", "args": Permanent }
| { "_ReplacementActionWouldEnter": "EntersWithAnAbilityCounterForEachAbilityOnACardDiscardedThisWay", "args": Array<CheckHasable> }
| { "_ReplacementActionWouldEnter": "EntersWithLayerEffect", "args": Array<LayerEffect> }
| { "_ReplacementActionWouldEnter": "EntersWithLayerEffectOfChoice", "args": Array<Array<LayerEffect>> }
| { "_ReplacementActionWouldEnter": "EntersWithLayerEffectUntil", "args": [Array<LayerEffect>, Expiration] }
| { "_ReplacementActionWouldEnter": "EntersWithNumberCombinationCountersOfChoice", "args": [GameNumber, Array<CounterType>] }
| { "_ReplacementActionWouldEnter": "EntersWithNumberCounters", "args": [GameNumber, CounterType] }
| { "_ReplacementActionWouldEnter": "EntersWithNumberCountersForEach", "args": [GameNumber, CounterType, GameNumber] }
| { "_ReplacementActionWouldEnter": "EntersWithNumberDifferentCountersOfChoice", "args": [GameNumber, Array<CounterType>] }
| { "_ReplacementActionWouldEnter": "ExchangeTextBoxesOfTwoPermanents", "args": [Permanent, Permanent] }
| { "_ReplacementActionWouldEnter": "Exile", "args": [Array<Exilable>, Array<ExileFlag>] }
| { "_ReplacementActionWouldEnter": "ExileItInstead" }
| { "_ReplacementActionWouldEnter": "ExileUptoNumberGraveyardCards", "args": [GameNumber, CardsInGraveyards] }
| { "_ReplacementActionWouldEnter": "FlipACoin_OnHeadAndOnTails", "args": [Array<ReplacementActionWouldEnter>, Array<ReplacementActionWouldEnter>] }
| { "_ReplacementActionWouldEnter": "GetAnEmblem", "args": Array<Rule> }
| { "_ReplacementActionWouldEnter": "If", "args": [Condition, Array<ReplacementActionWouldEnter>] }
| { "_ReplacementActionWouldEnter": "IfElse", "args": [Condition, Array<ReplacementActionWouldEnter>, Array<ReplacementActionWouldEnter>] }
| { "_ReplacementActionWouldEnter": "IfElsePassesFilter", "args": [Permanents, Array<ReplacementActionWouldEnter>, Array<ReplacementActionWouldEnter>] }
| { "_ReplacementActionWouldEnter": "IfPassesFilter", "args": [Permanents, Array<ReplacementActionWouldEnter>] }
| { "_ReplacementActionWouldEnter": "LookAtAPlayersHand", "args": Players }
| { "_ReplacementActionWouldEnter": "LoseLife", "args": GameNumber }
| { "_ReplacementActionWouldEnter": "MayActions", "args": Array<ReplacementActionWouldEnter> }
| { "_ReplacementActionWouldEnter": "MayCost", "args": ReplacementActionWouldEnterCost }
| { "_ReplacementActionWouldEnter": "MillNumberCards", "args": GameNumber }
| { "_ReplacementActionWouldEnter": "MillNumberCardsForEach", "args": [GameNumber, GameNumber] }
| { "_ReplacementActionWouldEnter": "MustCost", "args": ReplacementActionWouldEnterCost }
| { "_ReplacementActionWouldEnter": "NoteTheMostPrevalentCreaturTypeInAPlayersLibrary", "args": Players }
| { "_ReplacementActionWouldEnter": "PayAnyAmountOfLife" }
| { "_ReplacementActionWouldEnter": "PayAnyAmountOfLifeUpto", "args": GameNumber }
| { "_ReplacementActionWouldEnter": "PutCounters", "args": Array<ReplacementActionWouldEnterPutCounters> }
| { "_ReplacementActionWouldEnter": "PutIntoGraveyardInstead" }
| { "_ReplacementActionWouldEnter": "ReflexiveTrigger", "args": Actions }
| { "_ReplacementActionWouldEnter": "RememberLifeTotal" }
| { "_ReplacementActionWouldEnter": "RemoveCounters", "args": Array<ReplacementActionWouldEnterRemoveCounters> }
| { "_ReplacementActionWouldEnter": "RevealHand" }
| { "_ReplacementActionWouldEnter": "RollNumberD6", "args": GameNumber }
| { "_ReplacementActionWouldEnter": "RollTwoD6" }
| { "_ReplacementActionWouldEnter": "SacrificeAnyNumberOfPermanents", "args": Permanents }
| { "_ReplacementActionWouldEnter": "SacrificeEachPermanent", "args": Permanents }
| { "_ReplacementActionWouldEnter": "SecretlyChooseANumberBetween", "args": [number, number] }
| { "_ReplacementActionWouldEnter": "SecretlyChooseAPlayer", "args": Players }
| { "_ReplacementActionWouldEnter": "ShuffleItIntoLibraryInstead" }
| { "_ReplacementActionWouldEnter": "TurnEachPermanentFaceDown", "args": Permanents }
| { "_ReplacementActionWouldEnter": "Unless", "args": [Condition, Array<ReplacementActionWouldEnter>] };
type ReplacementActionWouldExplore =
| { "_ReplacementActionWouldExplore": "ItExplores" }
| { "_ReplacementActionWouldExplore": "Scry", "args": GameNumber };
type ReplacementActionWouldFlipACoin =
| { "_ReplacementActionWouldFlipACoin": "FlipTwoCoinsAndIgnoreOne" };
type ReplacementActionWouldGainLife =
| { "_ReplacementActionWouldGainLife": "DrawNumberCards", "args": GameNumber }
| { "_ReplacementActionWouldGainLife": "GainLife", "args": GameNumber }
| { "_ReplacementActionWouldGainLife": "GainNoLifeInstead" }
| { "_ReplacementActionWouldGainLife": "LoseLife", "args": GameNumber }
| { "_ReplacementActionWouldGainLife": "PlayerAction", "args": [Player, ReplacementActionWouldGainLife] };
type ReplacementActionWouldGetEnergy =
| { "_ReplacementActionWouldGetEnergy": "GetEnergy", "args": GameNumber };
type ReplacementActionWouldLearn =
| { "_ReplacementActionWouldLearn": "PutGraveyardCardOntoBattlefield", "args": [CardInGraveyards, Array<EnterFlag>] }
| { "_ReplacementActionWouldLearn": "Learn" }
| { "_ReplacementActionWouldLearn": "ChooseAnAction", "args": Array<Array<ReplacementActionWouldLearn>> };
type ReplacementActionWouldLeaveTheBattlefield =
| { "_ReplacementActionWouldLeaveTheBattlefield": "ExileItInstead" };
type ReplacementActionWouldLoseLife =
| { "_ReplacementActionWouldLoseLife": "LoseLife", "args": GameNumber };
type ReplacementActionWouldLoseTheGame =
| { "_ReplacementActionWouldLoseTheGame": "Exile", "args": [Array<Exilable>, Array<ExileFlag>] }
| { "_ReplacementActionWouldLoseTheGame": "DrawNumberCards", "args": GameNumber }
| { "_ReplacementActionWouldLoseTheGame": "ShuffleHandGraveyardAndPermanentsIntoLibrary" }
| { "_ReplacementActionWouldLoseTheGame": "SetLifeTotal", "args": GameNumber };
type ReplacementActionWouldMask =
| { "_ReplacementActionWouldMask": "TurnItFaceUpInstead" };
type ReplacementActionWouldMill =
| { "_ReplacementActionWouldMill": "PlayerAction", "args": [Player, ReplacementActionWouldMill] }
| { "_ReplacementActionWouldMill": "MillNumberCards", "args": GameNumber };
type ReplacementActionWouldPayLife =
| { "_ReplacementActionWouldPayLife": "Exile", "args": [Array<Exilable>, Array<ExileFlag>] };
type ReplacementActionWouldPlaneswalkLookAtTheTopNumberCardsOfPlanarDeckAction =
| { "_ReplacementActionWouldPlaneswalkLookAtTheTopNumberCardsOfPlanarDeckAction": "PutACardOnBottom" }
| { "_ReplacementActionWouldPlaneswalkLookAtTheTopNumberCardsOfPlanarDeckAction": "PutTheRemainingCardOnTopInAnyOrder" };
type ReplacementActionWouldPlaneswalk =
| { "_ReplacementActionWouldPlaneswalk": "ChaosEnsues" }
| { "_ReplacementActionWouldPlaneswalk": "LookAtTheTopNumberCardsOfPlanarDeck", "args": [GameNumber, Array<ReplacementActionWouldPlaneswalkLookAtTheTopNumberCardsOfPlanarDeckAction>] }
| { "_ReplacementActionWouldPlaneswalk": "Planeswalk" };
type ReplacementActionWouldProduceMana =
| { "_ReplacementActionWouldProduceMana": "WouldProduceMana_AddMana", "args": ManaProduce }
| { "_ReplacementActionWouldProduceMana": "WouldProduceMana_ProduceMultiple", "args": GameNumber }
| { "_ReplacementActionWouldProduceMana": "WouldProduceMana_ReplaceColor", "args": Color }
| { "_ReplacementActionWouldProduceMana": "WouldProduceMana_ReplaceType", "args": ManaProduce };
type ReplacementActionWouldProliferate =
| { "_ReplacementActionWouldProliferate": "ProliferateNumberTimes", "args": GameNumber };
type ReplacementActionWouldPutAPermanentOnTheBattlefield =
| { "_ReplacementActionWouldPutAPermanentOnTheBattlefield": "WouldPutPermanentOnBattlefield_PutPermanentOnBattlefield" }
| { "_ReplacementActionWouldPutAPermanentOnTheBattlefield": "SacrificeAPermanent", "args": Permanents }
| { "_ReplacementActionWouldPutAPermanentOnTheBattlefield": "PlayerAction", "args": [Player, ReplacementActionWouldPutAPermanentOnTheBattlefield] };
type ReplacementActionWouldPutCounters =
| { "_ReplacementActionWouldPutCounters": "PutNewAmount", "args": GameNumber }
| { "_ReplacementActionWouldPutCounters": "CreatePlayerEffectUntil", "args": [Player, Array<PlayerEffect>, Expiration] };
type ReplacementActionWouldPutIntoGraveyardCost =
| { "_ReplacementActionWouldPutIntoGraveyardCost": "ExileItInstead" };
type ReplacementActionWouldPutIntoGraveyardPutCounters =
| { "_ReplacementActionWouldPutIntoGraveyardPutCounters": "ACounterOfTypeOnCardInExile", "args": [CounterType, CardInExile] }
| { "_ReplacementActionWouldPutIntoGraveyardPutCounters": "NumberCountersOfTypeOnPermanent", "args": [GameNumber, CounterType, Permanent] };
type ReplacementActionWouldPutIntoGraveyard =
| { "_ReplacementActionWouldPutIntoGraveyard": "CreateFutureTrigger", "args": [FutureTrigger, Actions] }
| { "_ReplacementActionWouldPutIntoGraveyard": "CreatePlayerEffectUntil", "args": [Player, Array<PlayerEffect>, Expiration] }
| { "_ReplacementActionWouldPutIntoGraveyard": "CreateTokens", "args": [Array<CreatableToken>, Array<TokenFlag>] }
| { "_ReplacementActionWouldPutIntoGraveyard": "ExileItInstead" }
| { "_ReplacementActionWouldPutIntoGraveyard": "ExileItWithACounterInstead", "args": CounterType }
| { "_ReplacementActionWouldPutIntoGraveyard": "ExileItWithNumberCountersInstead", "args": [GameNumber, CounterType] }
| { "_ReplacementActionWouldPutIntoGraveyard": "GainLife", "args": GameNumber }
| { "_ReplacementActionWouldPutIntoGraveyard": "If", "args": [Condition, Array<ReplacementActionWouldPutIntoGraveyard>] }
| { "_ReplacementActionWouldPutIntoGraveyard": "LoseLife", "args": GameNumber }
| { "_ReplacementActionWouldPutIntoGraveyard": "MayAction", "args": ReplacementActionWouldPutIntoGraveyard }
| { "_ReplacementActionWouldPutIntoGraveyard": "MustCost", "args": ReplacementActionWouldPutIntoGraveyardCost }
| { "_ReplacementActionWouldPutIntoGraveyard": "PlayerAction", "args": [Player, ReplacementActionWouldPutIntoGraveyard] }
| { "_ReplacementActionWouldPutIntoGraveyard": "PutCounters", "args": Array<ReplacementActionWouldPutIntoGraveyardPutCounters> }
| { "_ReplacementActionWouldPutIntoGraveyard": "PutItInOwnersHandInstead" }
| { "_ReplacementActionWouldPutIntoGraveyard": "PutItOnBottomOfOwnersLibraryInstead" }
| { "_ReplacementActionWouldPutIntoGraveyard": "PutItOnTopOfOwnersLibraryInstead" }
| { "_ReplacementActionWouldPutIntoGraveyard": "ReflexiveTrigger", "args": Actions }
| { "_ReplacementActionWouldPutIntoGraveyard": "RevealItAndPutItOnBottomOfOwnersLibraryInstead" }
| { "_ReplacementActionWouldPutIntoGraveyard": "ShuffleItIntoLibraryInstead" }
| { "_ReplacementActionWouldPutIntoGraveyard": "TakeAnExtraTurn" };
type ReplacementActionWouldReduceLife =
| { "_ReplacementActionWouldReduceLife": "TransformPermanent", "args": Permanent }
| { "_ReplacementActionWouldReduceLife": "SetLifeTotal", "args": GameNumber }
| { "_ReplacementActionWouldReduceLife": "Unless", "args": [Condition, Array<ReplacementActionWouldReduceLife>] }
| { "_ReplacementActionWouldReduceLife": "LoseTheGame" };
type ReplacementActionWouldRollDice =
| { "_ReplacementActionWouldRollDice": "RollThatManyAndMayExchangeOneWithPermanentsBasePowerOrBaseToughness", "args": Permanent }
| { "_ReplacementActionWouldRollDice": "RollThatManyPlusOneAndIgnoreLowestInstead" }
| { "_ReplacementActionWouldRollDice": "RollThatManyPlusOneAndPlayerChoosesOneToIgnore", "args": Player };
type ReplacementActionWouldRollPlanarDice =
| { "_ReplacementActionWouldRollPlanarDice": "WouldRollDice_RollThatManyPlusOneAndIgnoreOne" };
type ReplacementActionWouldScry =
| { "_ReplacementActionWouldScry": "DrawNumberCards", "args": GameNumber }
| { "_ReplacementActionWouldScry": "Scry", "args": GameNumber };
type ReplacementActionWouldSearchLibrary =
| { "_ReplacementActionWouldSearchLibrary": "SearchTopNumberCardsOfLibraryInstead", "args": GameNumber };
type ReplacementActionWouldSetASchemeInMotion =
| { "_ReplacementActionWouldSetASchemeInMotion": "WouldSetASchemeInMotion_SetNumberSchemesInMotionInstead", "args": GameNumber };
type ReplacementActionWouldUntapCost =
| { "_ReplacementActionWouldUntapCost": "RemoveCounters", "args": Array<ReplacementActionWouldUntapRemoveCounters> };
type ReplacementActionWouldUntapPutCounters =
| { "_ReplacementActionWouldUntapPutCounters": "NumberCountersOfTypeOnPermanent", "args": [GameNumber, CounterType, Permanent] };
type ReplacementActionWouldUntapRemoveCounters =
| { "_ReplacementActionWouldUntapRemoveCounters": "ACounterOfTypeFromPermanent", "args": [CounterType, Permanent] }
| { "_ReplacementActionWouldUntapRemoveCounters": "AllCountersOfTypeFromPermanent", "args": [CounterType, Permanent] };
type ReplacementActionWouldUntap =
| { "_ReplacementActionWouldUntap": "If", "args": [Condition, Array<ReplacementActionWouldUntap>] }
| { "_ReplacementActionWouldUntap": "MustCost", "args": ReplacementActionWouldUntapCost }
| { "_ReplacementActionWouldUntap": "PutCounters", "args": Array<ReplacementActionWouldUntapPutCounters> }
| { "_ReplacementActionWouldUntap": "RemoveCounters", "args": Array<ReplacementActionWouldUntapRemoveCounters> }
| { "_ReplacementActionWouldUntap": "UntapPermanent", "args": Permanent };
type ResolveAction =
| { "_ResolveAction": "ExileResolvingSpell" }
| { "_ResolveAction": "ExileResolvingSpellAndPlotIt" }
| { "_ResolveAction": "ExileResolvingSpellWithNumberCountersOfTypeAndEffects", "args": [GameNumber, CounterType, Array<ExiledCardEffect>] }
| { "_ResolveAction": "CreateFutureTrigger", "args": [FutureTrigger, Actions] };
type RevealTheTopNumberCardsOfLibraryAction =
| { "_RevealTheTopNumberCardsOfLibraryAction": "PlayerAction", "args": [Player, RevealTheTopNumberCardsOfLibraryAction] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutAGenericCardOnBottomOfLibrary" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutRemainingCardsInHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ForEachColorAmongPermanentsYouMayExileACardOfThatColorFoundThisWay", "args": Permanents }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutAnyNumberOfFoundCardsOntoBattlefield", "args": Array<EnterFlag> }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ChooseAPlayer", "args": Players }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ReflexiveTrigger", "args": Actions }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerChoosesACardOfType", "args": [Players, Cards] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutAnyNumberOfGroupCardsIntoHand", "args": [Cards, GroupFilter] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayExileACardOfEachCardType" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutEachCardOfTypeIntoGraveyard", "args": Cards }
| { "_RevealTheTopNumberCardsOfLibraryAction": "CreateExiledCardEffect", "args": [CardInExile, Array<ExiledCardEffect>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ExileTheCardFoundThisWayWithNumberCountersOfType", "args": [GameNumber, CounterType] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "SacrificePermanent", "args": Permanent }
| { "_RevealTheTopNumberCardsOfLibraryAction": "SpellDealsDamage", "args": [Spell, GameNumber, DamageRecipient] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerChoosesMultipleCardsOfType", "args": [Players, Array<Cards>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutACardFoundThisWayOntoTheBattlefield", "args": Array<EnterFlag> }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerChoosesAGenericCard", "args": Players }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerChoosesAPile", "args": Players }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerChoosesFinalDestination", "args": [Players, RevealTheTopNumberCardsOfLibraryAction, RevealTheTopNumberCardsOfLibraryAction] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerExilesACardOfType", "args": [Players, Cards] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerMayCastASpellFromAmongThemWithoutPaying", "args": [Players, Spells] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerMayCastUptoNumberSpellsFromAmongThemWithoutPaying", "args": [Players, GameNumber, Spells] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerMayPutACardOfTypeOntoTheBattlefield", "args": [Players, Cards, Array<EnterFlag>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerPutsAGenericCardIntoGraveyard", "args": Players }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerPutsNumberGenericCardsIntoGraveyard", "args": [Players, GameNumber] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerPutsTheRemainingCardsOnTheTopOfLibraryInAnyOrder", "args": Players }
| { "_RevealTheTopNumberCardsOfLibraryAction": "APlayerSeparatesThoseCardsIntoTwoPiles", "args": Players }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ChooseACardThatsExactlyEachColorPair" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ChooseAnyNumberOfCards", "args": Cards }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ChooseMultipleCardsOfType", "args": Array<Cards> }
| { "_RevealTheTopNumberCardsOfLibraryAction": "CreatePermanentLayerEffect", "args": [Permanent, Array<LayerEffect>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "CreatePermanentLayerEffectUntil", "args": [Permanent, Array<LayerEffect>, Expiration] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "EachPlayerStartingWithChoosesADifferentCardToPutIntoHand", "args": [Players, Player, Cards] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ExileTheCardFoundThisWay" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ExileTheRemainingCards" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ExileTheRemainingCardsWithACounterOfType", "args": CounterType }
| { "_RevealTheTopNumberCardsOfLibraryAction": "ForEachCardPutIntoHandUnlessAnyPlayerAction", "args": [Players, RevealTheTopNumberCardsOfLibraryCost] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "IfElse", "args": [Condition, Array<RevealTheTopNumberCardsOfLibraryAction>, Array<RevealTheTopNumberCardsOfLibraryAction>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "If", "args": [Condition, Array<RevealTheTopNumberCardsOfLibraryAction>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "LeaveTheRemainingCardsOnTopOfLibraryInTheSameOrder" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayCastASpellFromAmongThemWithoutPaying", "args": Spells }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayCastTheCardFoundThisWayWithoutPaying" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutACardOfEachCardtypeAmongSpellsCastThisTurnIntoHand", "args": Spells }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutACardOfEachCardtypeIntoHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutACardOfTypeIntoHand", "args": Cards }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutACardOfTypeOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutAnyNumberOfCardsOfTypeIntoHand", "args": Cards }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutAnyNumberOfCardsOfTypeOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutMultipleCardsOfTypeIntoHand", "args": Array<Cards> }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutMultipleCardsOfTypeIntoHandOrOntoTheBattlefield", "args": [Array<Cards>, Array<EnterFlag>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutTheCardFoundThisWayOntoTheBattlefield", "args": Array<EnterFlag> }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutUptoNumberCardsOfTypeOntoTheBattlefield", "args": [GameNumber, Cards, Array<EnterFlag>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "MayPutUptoNumberGroupCardsOntoTheBattlefield", "args": [GameNumber, Cards, GroupFilter, Array<EnterFlag>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PlayerMillsNumberCards", "args": [Player, GameNumber] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutACardOfTypeIntoHand", "args": Cards }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutACardOfTypeOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutAChosenCardOntoTheBattlefield", "args": Array<EnterFlag> }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutAGenericCardFromTheChosenPileIntoHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutAGenericCardIntoHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutAPileIntoHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutEachCardOfTypeChosenThisWayOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutEachCardOfTypeIntoHand", "args": Cards }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutEachCardOfTypeOntoTheBattlefield", "args": [Cards, Array<EnterFlag>] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheCardFoundThisWayIntoHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheCardFoundThisWayOnTopOfLibrary" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheCardFoundThisWayOntoTheBattlefield", "args": Array<EnterFlag> }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheCardsFoundThisWayIntoGraveyard" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheCardsFoundThisWayIntoHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheCardsFoundThisWayOntoTheBattlefield", "args": Array<EnterFlag> }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheCardsNotFoundThisWayIntoGraveyard" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheChosenCardIntoGraveyard" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheChosenCardIntoHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheChosenCardOntoTheBattlefield", "args": Array<EnterFlag> }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheChosenCardsIntoHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheChosenPileIntoHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheRemainingCardsBackIntoLibraryAndShuffle" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheRemainingCardsIntoGraveyard" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheRemainingCardsIntoHand" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheRemainingCardsOnTheBottomOfLibraryInARandomOrder" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutTheRemainingCardsOnTheBottomOfLibraryInAnyOrder" }
| { "_RevealTheTopNumberCardsOfLibraryAction": "PutUptoNumberCardsOfTypeIntoHand", "args": [GameNumber, Cards] }
| { "_RevealTheTopNumberCardsOfLibraryAction": "SeperateThoseCardsIntoTwoPiles" };
type RevealTheTopNumberCardsOfLibraryCost =
| { "_RevealTheTopNumberCardsOfLibraryCost": "PayLife", "args": GameNumber };
type Room =
| { "_OracleCard": "Room", Typeline: OracleTypeline, LeftDoor: DoorInfo, RightDoor: DoorInfo, };
type Rule =
| { "_Rule": "AnchorWord", "args": [string, Rule] }
| { "_Rule": "StationChargedAnimate", "args": [GameRange, Array<Rule>, PT] }
| { "_Rule": "StationCharged", "args": [GameRange, Array<Rule>] }
| { "_Rule": "Station" }
| { "_Rule": "APlayerGainingLifeCausesAbilitiesToTriggerAnAdditionalTime", "args": [Players, Abilities] }
| { "_Rule": "Storied" }
| { "_Rule": "BasicMayhem" }
| { "_Rule": "Mayhem", "args": Cost }
| { "_Rule": "WebSlinging", "args": Cost }
| { "_Rule": "WarpX", "args": Cost }
| { "_Rule": "Warp", "args": Cost }
| { "_Rule": "CombatDamageCantBePrevented" }
| { "_Rule": "Firebending", "args": GameNumber }
| { "_Rule": "JobSelect" }
| { "_Rule": "StackSpellsEffect", "args": [Spells, Array<SpellEffect>] }
| { "_Rule": "StackEffect", "args": [SpellsAndAbilities, Array<StackEffect>] }
| { "_Rule": "AllDamageIsDealtAsThoughItsSourceHadWither" }
| { "_Rule": "NoMoreThanNumberCreaturesCanBlock", "args": GameNumber }
| { "_Rule": "PermanentsCantPhaseIn", "args": Permanents }
| { "_Rule": "PermanentsDyingDontCauseAbilitiesToTrigger", "args": Permanents }
| { "_Rule": "CardsInEachPlayersLibrariesCantEnterTheBattlefield", "args": [Cards, Players] }
| { "_Rule": "PermanentsEnteringTheBattlefieldDontCauseAbilitiesToTrigger", "args": Permanents }
| { "_Rule": "WardAbilitiesOfPermanentsDontTrigger", "args": Permanents }
| { "_Rule": "APlayerDrawingACardCausesAbilitiesToTriggerAnAdditionalTime", "args": [Players, Abilities] }
| { "_Rule": "APermanentAttackingCausesAbilitiesToTriggerAnAdditionalTime", "args": [Permanents, Abilities] }
| { "_Rule": "APermanentBecomingTheTargetOfASpellOrAbilityCausesAbilitiesToTriggerAnAdditionalTime", "args": [Permanents, SpellsAndAbilities, Abilities] }
| { "_Rule": "APermanentBeingDealtDamageCausesAbilitiesToTriggerAnAdditionalTime", "args": [Permanents, Abilities] }
| { "_Rule": "APermanentDealingCombatDamageToAPlayerCausesAbilitiesToTriggerAnAdditionalTime", "args": [Permanents, Players, Abilities] }
| { "_Rule": "APermanentDyingCausesAbilitiesToTriggerAnAdditionalTime", "args": [Permanents, Abilities] }
| { "_Rule": "APermanentEnteringTheBattlefieldCausesAbilitiesToTriggerAnAdditionalTime", "args": [Permanents, Abilities] }
| { "_Rule": "APermanentTurningFaceUpCausesAbilitiesToTriggerAnAdditionalTime", "args": [Permanents, Abilities] }
| { "_Rule": "APermanentLeavingTheBattlefieldCausesAbilitiesToTriggerAnAdditionalTime", "args": [Permanents, Abilities] }
| { "_Rule": "APlayerCastingOrCopyingASpellCausesAnAbilityToTriggerAnAdditionalTime", "args": [Players, Spells, Abilities] }
| { "_Rule": "AbilitiesTriggerAnAdditionalTime", "args": Abilities }
| { "_Rule": "APlayerFacingAVillainousChoiceFacesItAnAdditionalTime", "args": Players }
| { "_Rule": "TheLegendsRuleDoesntApply" }
| { "_Rule": "TheLegendsRuleDoesntApplyToPermanents", "args": Permanents }
| { "_Rule": "CraftWithCraftables", "args": [Array<Craftable>, Array<ManaSymbol>] }
| { "_Rule": "CraftWithACraftable", "args": [Craftable, Array<ManaSymbol>] }
| { "_Rule": "CraftWithANumberOfCraftables", "args": [Comparison, Craftable, Array<ManaSymbol>] }
| { "_Rule": "CraftWithANumberOfGroupCraftables", "args": [Comparison, Craftable, GroupFilter, Array<ManaSymbol>] }
| { "_Rule": "CardsCantEnterTheBattlefield", "args": Cards }
| { "_Rule": "CardsInEachPlayersGraveyardsCantEnterTheBattlefield", "args": [Cards, Players] }
| { "_Rule": "CombatDamageOfCreaturesCantBePrevented", "args": Permanents }
| { "_Rule": "DamageCantBePrevented" }
| { "_Rule": "DamageFromPermanentCantBePrevented", "args": Permanent }
| { "_Rule": "DamageIsntRemovedFromCreatureDuringCleanup", "args": Permanent }
| { "_Rule": "DamageIsntRemovedFromCreaturesDuringCleanup", "args": Permanents }
| { "_Rule": "IncreaseBuybackCosts", "args": Array<ManaSymbol> }
| { "_Rule": "IncreaseMorphCosts", "args": Array<ManaSymbol> }
| { "_Rule": "ItCantBecomeNight" }
| { "_Rule": "NoMoreThanNumberCreaturesCanAttack", "args": GameNumber }
| { "_Rule": "NoMoreThanNumberCreaturesCanAttackPermanent", "args": [GameNumber, Permanent] }
| { "_Rule": "NoMoreThanNumberCreaturesCanAttackPlayer", "args": [GameNumber, Player] }
| { "_Rule": "WhilePlayersAreSearchingTheirLibraryTheyExileEachCardTheyFindAndPlayerMayPlayThoseCardsWhileTheyRemainExiledAndMaySpendManaAsThoughItWereAnyColor", "args": [Players, Player] }
| { "_Rule": "ReplaceWouldLearn", "args": [ReplacableEventWouldLearn, Array<ReplacementActionWouldLearn>] }
| { "_Rule": "ReplaceWouldConnive", "args": [ReplacableEventWouldConnive, Array<ReplacementActionWouldConnive>] }
| { "_Rule": "StartYourEngines" }
| { "_Rule": "Harmonize", "args": Cost }
| { "_Rule": "HarmonizeX", "args": Array<ManaSymbolX> }
| { "_Rule": "Mobilize", "args": GameNumber }
| { "_Rule": "AnnihilatorX", "args": GameNumber }
| { "_Rule": "BestowX", "args": Cost }
| { "_Rule": "CrewOnceEachTurn", "args": number }
| { "_Rule": "EmergeFromArtifact", "args": Cost }
| { "_Rule": "Freerunning", "args": Cost }
| { "_Rule": "FreerunningX", "args": Cost }
| { "_Rule": "Impending", "args": [GameNumber, Cost] }
| { "_Rule": "Offspring", "args": Cost }
| { "_Rule": "Permanent_Gift", "args": Array<Action> }
| { "_Rule": "Saddle", "args": GameNumber }
| { "_Rule": "Bargain" }
| { "_Rule": "Plot", "args": Cost }
| { "_Rule": "TopCardOfPlayersLibraryEffect", "args": [Cards, Player, Array<LibraryCardEffect>] }
| { "_Rule": "Mystery", "args": [Condition, Array<Rule>] }
| { "_Rule": "Disguise", "args": Cost }
| { "_Rule": "Aftermath" }
| { "_Rule": "BasicSuspend" }
| { "_Rule": "KickerX", "args": Array<ManaSymbolX> }
| { "_Rule": "DisguiseX", "args": Array<ManaSymbolX> }
| { "_Rule": "SpaceSculptor" }
| { "_Rule": "KickerForSpellAbility", "args": [Cost, Rule] }
| { "_Rule": "SpliceOnto", "args": [Spells, Cost] }
| { "_Rule": "ReinforceX", "args": Array<ManaSymbolX> }
| { "_Rule": "MorphX", "args": Array<ManaSymbolX> }
| { "_Rule": "SurgeX", "args": Array<ManaSymbolX> }
| { "_Rule": "MiracleX", "args": Array<ManaSymbolX> }
| { "_Rule": "FlashbackX", "args": Array<ManaSymbolX> }
| { "_Rule": "Offering", "args": Cards }
| { "_Rule": "Affinity", "args": Permanents }
| { "_Rule": "Devour", "args": [Permanents, GameNumber] }
| { "_Rule": "Backup", "args": [number, Array<Rule>] }
| { "_Rule": "Suspend", "args": [GameNumber, Cost] }
| { "_Rule": "SuspendX", "args": [Array<ManaSymbolX>, ActivateModifier] }
| { "_Rule": "ProtectionAndDoesntRemovePermanents", "args": [Protectable, Permanents] }
| { "_Rule": "Prototype", "args": { ManaCost: Array<ManaSymbolX>, CardPT: CardPT, } }
| { "_Rule": "Reinforce", "args": [GameNumber, Cost] }
| { "_Rule": "Protection", "args": Protectable }
| { "_Rule": "HexproofFrom", "args": Protectable }
| { "_Rule": "TypeCycling", "args": [Cards, Cost] }
| { "_Rule": "EnchantPlayer", "args": Players }
| { "_Rule": "Fortify", "args": Cost }
| { "_Rule": "Prowl", "args": Array<ManaSymbol> }
| { "_Rule": "Absorb", "args": number }
| { "_Rule": "Equip", "args": [Permanents, Cost] }
| { "_Rule": "EquipWithModifiers", "args": [Permanents, Cost, ActivateModifier] }
| { "_Rule": "Annihilator", "args": number }
| { "_Rule": "Amplify", "args": number }
| { "_Rule": "Afterlife", "args": number }
| { "_Rule": "Afflict", "args": number }
| { "_Rule": "Surge", "args": Array<ManaSymbol> }
| { "_Rule": "Ascend" }
| { "_Rule": "Assist" }
| { "_Rule": "AuraSwamp", "args": Cost }
| { "_Rule": "Banding" }
| { "_Rule": "BandsWithOthers", "args": Permanents }
| { "_Rule": "BattleCry" }
| { "_Rule": "Bestow", "args": Cost }
| { "_Rule": "Blitz", "args": Cost }
| { "_Rule": "Bloodthirst", "args": GameNumber }
| { "_Rule": "BloodthirstX" }
| { "_Rule": "Bushido", "args": GameNumber }
| { "_Rule": "Buyback", "args": Cost }
| { "_Rule": "Cascade" }
| { "_Rule": "Casualty", "args": GameNumber }
| { "_Rule": "CasualtyX" }
| { "_Rule": "Champion", "args": Permanents }
| { "_Rule": "CommanderNinjutsu", "args": Cost }
| { "_Rule": "Compleated" }
| { "_Rule": "Conspire" }
| { "_Rule": "Convoke" }
| { "_Rule": "Crew", "args": number }
| { "_Rule": "CumulativeUpkeep", "args": Cost }
| { "_Rule": "Cycling", "args": Cost }
| { "_Rule": "CyclingX", "args": Array<ManaSymbolX> }
| { "_Rule": "Dash", "args": Cost }
| { "_Rule": "Daybound" }
| { "_Rule": "Deathtouch" }
| { "_Rule": "Decayed" }
| { "_Rule": "Defender" }
| { "_Rule": "Delve" }
| { "_Rule": "Demonstrate" }
| { "_Rule": "Dethrone" }
| { "_Rule": "Disturb", "args": Cost }
| { "_Rule": "DoubleAgenda" }
| { "_Rule": "DoubleStrike" }
| { "_Rule": "DoubleTeam" }
| { "_Rule": "Dredge", "args": GameNumber }
| { "_Rule": "Echo", "args": Cost }
| { "_Rule": "Embalm", "args": Cost }
| { "_Rule": "Emerge", "args": Cost }
| { "_Rule": "EnchantPermanent", "args": Permanents }
| { "_Rule": "EnchantGraveyardCard", "args": [CardsInGraveyards, Players] }
| { "_Rule": "Encore", "args": Cost }
| { "_Rule": "Enlist" }
| { "_Rule": "Escape", "args": Cost }
| { "_Rule": "Eternalize", "args": Cost }
| { "_Rule": "Evoke", "args": Cost }
| { "_Rule": "Evolve" }
| { "_Rule": "Exalted" }
| { "_Rule": "Exploit" }
| { "_Rule": "Extort" }
| { "_Rule": "Fabricate", "args": number }
| { "_Rule": "Fading", "args": number }
| { "_Rule": "Fear" }
| { "_Rule": "FirstStrike" }
| { "_Rule": "Flanking" }
| { "_Rule": "Flash" }
| { "_Rule": "FlashForCasters", "args": Condition }
| { "_Rule": "Flashback", "args": Cost }
| { "_Rule": "Flying" }
| { "_Rule": "ForMirrodin" }
| { "_Rule": "Foretell", "args": Cost }
| { "_Rule": "ForetellX", "args": Cost }
| { "_Rule": "Frenzy", "args": number }
| { "_Rule": "Fuse" }
| { "_Rule": "Graft", "args": number }
| { "_Rule": "Gravestorm" }
| { "_Rule": "Haste" }
| { "_Rule": "Haunt" }
| { "_Rule": "Hexproof" }
| { "_Rule": "HiddenAgenda" }
| { "_Rule": "Hideaway", "args": number }
| { "_Rule": "Horsemanship" }
| { "_Rule": "Improvise" }
| { "_Rule": "Increment" }
| { "_Rule": "Indestructible" }
| { "_Rule": "Infect" }
| { "_Rule": "Ingest" }
| { "_Rule": "Intimidate" }
| { "_Rule": "JumpStart" }
| { "_Rule": "Kicker", "args": Cost }
| { "_Rule": "KickerXWithModifiers", "args": [Array<ManaSymbolX>, CastModifier] }
| { "_Rule": "FlashbackWithModifier", "args": [Cost, CastModifier] }
| { "_Rule": "SpecializeWithModifiers", "args": [Cost, ActivateModifier] }
| { "_Rule": "Landwalk", "args": Permanents }
| { "_Rule": "Lifelink" }
| { "_Rule": "LivingMetal" }
| { "_Rule": "LivingWeapon" }
| { "_Rule": "Madness", "args": Cost }
| { "_Rule": "Megamorph", "args": Cost }
| { "_Rule": "Melee" }
| { "_Rule": "Menace" }
| { "_Rule": "Mentor" }
| { "_Rule": "Miracle", "args": Cost }
| { "_Rule": "Modular", "args": GameNumber }
| { "_Rule": "MoreThanMeetsTheEye", "args": Cost }
| { "_Rule": "Morph", "args": Cost }
| { "_Rule": "Multikicker", "args": Cost }
| { "_Rule": "Mutate", "args": Cost }
| { "_Rule": "Myriad" }
| { "_Rule": "Nightbound" }
| { "_Rule": "Ninjutsu", "args": Cost }
| { "_Rule": "Persist" }
| { "_Rule": "Phasing" }
| { "_Rule": "Poisonous", "args": number }
| { "_Rule": "Provoke" }
| { "_Rule": "Prowess" }
| { "_Rule": "Rampage", "args": number }
| { "_Rule": "Ravenous" }
| { "_Rule": "Reach" }
| { "_Rule": "ReadAhead" }
| { "_Rule": "Rebound" }
| { "_Rule": "Reconfigure", "args": Cost }
| { "_Rule": "Recover", "args": Cost }
| { "_Rule": "Renown", "args": number }
| { "_Rule": "Replicate", "args": Cost }
| { "_Rule": "Retrace" }
| { "_Rule": "Riot" }
| { "_Rule": "Ripple", "args": GameNumber }
| { "_Rule": "Scavenge", "args": Cost }
| { "_Rule": "Shadow" }
| { "_Rule": "Shroud" }
| { "_Rule": "Skulk" }
| { "_Rule": "Sneak", "args": Cost }
| { "_Rule": "Soulbond" }
| { "_Rule": "Soulshift", "args": GameNumber }
| { "_Rule": "Specialize", "args": Cost }
| { "_Rule": "SpecializeFromGraveyard", "args": Cost }
| { "_Rule": "Spectacle", "args": Cost }
| { "_Rule": "SplitSecond" }
| { "_Rule": "Squad", "args": Cost }
| { "_Rule": "StartingIntensity", "args": GameNumber }
| { "_Rule": "Storm" }
| { "_Rule": "Sunburst" }
| { "_Rule": "UmbraArmor" }
| { "_Rule": "Toxic", "args": number }
| { "_Rule": "Training" }
| { "_Rule": "Trample" }
| { "_Rule": "TrampleOverPlaneswalkers" }
| { "_Rule": "Transmute", "args": Cost }
| { "_Rule": "Tribute", "args": number }
| { "_Rule": "Undaunted" }
| { "_Rule": "Undying" }
| { "_Rule": "Unearth", "args": Cost }
| { "_Rule": "Unleash" }
| { "_Rule": "Vanishing" }
| { "_Rule": "VanishingEnters", "args": number }
| { "_Rule": "Vigilance" }
| { "_Rule": "Ward", "args": Cost }
| { "_Rule": "Outlast", "args": Cost }
| { "_Rule": "Transfigure", "args": Cost }
| { "_Rule": "Wither" }
| { "_Rule": "CDA_ColorButNotColorIdentity", "args": SettableColor }
| { "_Rule": "CDA_Color", "args": SettableColor }
| { "_Rule": "CDA_Power", "args": GameNumber }
| { "_Rule": "CDA_Toughness", "args": GameNumber }
| { "_Rule": "CDA_Types", "args": CDA_Types }
| { "_Rule": "Companion", "args": Companion }
| { "_Rule": "DeckConstruction", "args": DeckConstruction }
| { "_Rule": "ConspiracyDeck", "args": ConspiracyDeck }
| { "_Rule": "StartingHandSizeIs", "args": GameNumber }
| { "_Rule": "SpellActions", "args": Actions }
| { "_Rule": "SpellActions_Teamwork", "args": [number, CastUsingTeamwork, NotCastUsingTeamwork] }
| { "_Rule": "SpellActions_Awaken", "args": [Cost, WasAwakened, WasntAwakened] }
| { "_Rule": "SpellActions_Tiered", "args": Array<TieredAction> }
| { "_Rule": "SpellActions_Kicker", "args": [Cost, WasKicked, WasntKicked] }
| { "_Rule": "SpellActions_Cleave", "args": [Cost, CleavePaid, CleaveNotPaid] }
| { "_Rule": "SpellActions_Overload", "args": [Cost, OverloadPaid, OverloadNotPaid] }
| { "_Rule": "SpellActions_MadnessX", "args": [Cost, MadnessXWasPaid, MadnessXWasntPaid] }
| { "_Rule": "SpellActions_Gift", "args": [Action, GiftWasPromised, GiftWasntPromised] }
| { "_Rule": "SpellActions_Spree", "args": Array<SpreeAction> }
| { "_Rule": "SpellActions_AdditionalCostOptions", "args": Array<AdditionalCostOption> }
| { "_Rule": "SelfEffect", "args": Array<CardEffect> }
| { "_Rule": "SelfEffect_NonBattlefield", "args": Array<CardEffect> }
| { "_Rule": "AsSelfDraft", "args": Array<DraftAction> }
| { "_Rule": "FaceUpDraftEffect", "args": FaceUpDraftEffect }
| { "_Rule": "AsSchemeIsSetInMotion", "args": [SingleScheme, Array<SetInMotionAction>] }
| { "_Rule": "AsPutIntoAGraveyardFromAnywhere", "args": [SingleCard, Array<PutIntoGraveyardAction>] }
| { "_Rule": "AsPermanentBecomesAttachedToAPermanent", "args": [Permanent, Permanents, Array<AttachAction>] }
| { "_Rule": "AsPermanentEnters", "args": [Permanent, Array<ReplacementActionWouldEnter>] }
| { "_Rule": "AsPermanentEscapes", "args": [Permanent, Array<ReplacementActionWouldEnter>] }
| { "_Rule": "AsPermanentEntersOrIsTurnedFaceUp", "args": [Permanent, Array<EnterOrFaceUpAction>] }
| { "_Rule": "AsPermanentIsTurnedFaceUp", "args": [Permanent, Array<FaceUpAction>] }
| { "_Rule": "AsPermanentTransforms", "args": [Permanent, Array<TransformAction>] }
| { "_Rule": "PlayerEffect", "args": [Player, Array<PlayerEffect>] }
| { "_Rule": "PlayerEffect_PlayerMayPayToIgnoreEffectUntil", "args": [Players, Array<PlayerEffect>, Cost, Expiration] }
| { "_Rule": "EachPlayerEffect", "args": [Players, Array<PlayerEffect>] }
| { "_Rule": "ThisSpellEffect", "args": Array<SpellEffect> }
| { "_Rule": "CardEffect", "args": [Cards, Array<CardEffect>] }
| { "_Rule": "EachCardInPlayersLibraryEffect", "args": [Cards, Player, Array<LibraryCardEffect>] }
| { "_Rule": "EachCardInPlayersHandEffect", "args": [Cards, Player, Array<HandEffect>] }
| { "_Rule": "EachCardInEachPlayersHandEffect", "args": [Cards, Players, Array<HandEffect>] }
| { "_Rule": "EachPermanentAndSpellEffect", "args": [PermanentsAndSpells, PermanentAndSpellEffect] }
| { "_Rule": "PermanentLayerEffect", "args": [Permanent, Array<StaticLayerEffect>] }
| { "_Rule": "EachPermanentLayerEffect", "args": [Permanents, Array<StaticLayerEffect>] }
| { "_Rule": "EachPermanentStickyLayerEffect", "args": [Permanents, Array<StaticLayerEffect>, Expiration] }
| { "_Rule": "PermanentRuleEffect", "args": [Permanent, Array<PermanentRule>] }
| { "_Rule": "PermanentRuleEffect_PlayerMayPayToIgnoreEffectUntil", "args": [Permanent, Array<PermanentRule>, Player, Cost, Expiration] }
| { "_Rule": "EachPermanentRuleEffect", "args": [Permanents, Array<PermanentRule>] }
| { "_Rule": "EachCardInGraveyardEffect", "args": [CardsInGraveyards, Player, Array<GraveyardCardEffect>] }
| { "_Rule": "EachCardInAGraveyardEffect", "args": [CardsInGraveyards, Players, Array<GraveyardCardEffect>] }
| { "_Rule": "TriggerMayOnceEachTurnI", "args": [Trigger, Condition, Actions] }
| { "_Rule": "TriggerMayOnceEachTurn", "args": [Trigger, Actions] }
| { "_Rule": "TriggerModalA", "args": Array<TriggerAndActions> }
| { "_Rule": "TriggerA", "args": [Trigger, Actions] }
| { "_Rule": "TriggerOnce", "args": [Trigger, Actions] }
| { "_Rule": "TriggerOnceEachTurn", "args": [Trigger, Actions] }
| { "_Rule": "TriggerOnceEachTurnI", "args": [Trigger, Condition, Actions] }
| { "_Rule": "TriggerTwiceEachTurn", "args": [Trigger, Actions] }
| { "_Rule": "TriggerI", "args": [Trigger, Condition, Actions] }
| { "_Rule": "TriggerIOnce", "args": [Trigger, Condition, Actions] }
| { "_Rule": "TriggerIOnceEachTurn", "args": [Trigger, Condition, Actions] }
| { "_Rule": "TriggerI_Covercast", "args": [Trigger, Condition, Actions] }
| { "_Rule": "Activated", "args": [Cost, Actions] }
| { "_Rule": "ActivatedWithModifiers", "args": [Cost, Actions, ActivateModifier] }
| { "_Rule": "FromExileOrBattlefield", "args": Rule }
| { "_Rule": "FromExile", "args": Rule }
| { "_Rule": "FromExileIf", "args": [Condition, Rule] }
| { "_Rule": "FromStack", "args": Rule }
| { "_Rule": "FromStackIf", "args": [Condition, Rule] }
| { "_Rule": "FromGraveyardOrBattlefield", "args": Rule }
| { "_Rule": "FromGraveyard", "args": Rule }
| { "_Rule": "FromGraveyardIf", "args": [Condition, Rule] }
| { "_Rule": "FromTopOfLibrary_Digital", "args": Array<Rule> }
| { "_Rule": "FromHand", "args": Rule }
| { "_Rule": "FromAnyZone", "args": Rule }
| { "_Rule": "FromCommandZone", "args": Rule }
| { "_Rule": "FromCommandZoneOrBattlefield", "args": Rule }
| { "_Rule": "SagaChapters", "args": Array<SagaChapter> }
| { "_Rule": "Visit", "args": Actions }
| { "_Rule": "VisitAndPrize", "args": [Actions, Actions] }
| { "_Rule": "DungeonLevel", "args": [string, Actions, Array<string>] }
| { "_Rule": "ClassAbilities", "args": Array<ClassAbility> }
| { "_Rule": "LevelUp", "args": [Cost, Array<Level>] }
| { "_Rule": "If", "args": [Condition, Array<Rule>] }
| { "_Rule": "Unless", "args": [Condition, Array<Rule>] }
| { "_Rule": "IfElse", "args": [Condition, Array<Rule>, Array<Rule>] }
| { "_Rule": "IfCardIsInOpeningHand", "args": Array<Action> }
| { "_Rule": "MaxSpeed", "args": Rule }
| { "_Rule": "AsGameBegins", "args": Array<Action> }
| { "_Rule": "BeforeDrawingOpeningHand", "args": Array<Action> }
| { "_Rule": "DrawAnAdditionalHandBeforeMulligans" }
| { "_Rule": "YouAreTheStartingPlayer" }
| { "_Rule": "BeforeShufflingDeckToStartTheGame", "args": Array<PregameAction> }
| { "_Rule": "PreventDamage", "args": [EventPreventDamage, Array<ActionPreventDamage>] }
| { "_Rule": "ReplaceAPlayerWouldCreateAToken", "args": [ReplacableEventAPlayerWouldCreateAToken, Array<ReplacementActionAPlayerWouldCreateAToken>] }
| { "_Rule": "ReplaceAPlayerWouldCreateTokens", "args": [ReplacableEventAPlayerWouldCreateTokens, Array<ReplacementActionAPlayerWouldCreateTokens>] }
| { "_Rule": "ReplaceAnEffectWouldCreateAnyNumberOfTokens", "args": [ReplacableEventAnEffectWouldCreateAnyNumberOfTokens, Array<ReplacementActionAnEffectWouldCreateAnyNumberOfTokens>] }
| { "_Rule": "ReplaceAnyNumberOfTokensWouldBeCreated", "args": [ReplacableEventAnyNumberOfTokensWouldBeCreated, Array<ReplacementActionAnyNumberOfTokensWouldBeCreated>] }
| { "_Rule": "ReplaceWouldBeginATurn", "args": [ReplacableEventWouldBeginATurn, Array<ReplacementActionWouldBeginATurn>] }
| { "_Rule": "ReplaceWouldBeginDrawStep", "args": [ReplacableEventWouldBeginDrawStep, Array<ReplacementActionWouldBeginDrawStep>] }
| { "_Rule": "ReplaceWouldCopyASpell", "args": [ReplacableEventWouldCopyASpell, Array<ReplacementActionWouldCopyASpell>] }
| { "_Rule": "ReplaceWouldCounterASpell", "args": [ReplacableEventWouldCounterASpell, Array<ReplacementActionWouldCounterASpell>] }
| { "_Rule": "ReplaceWouldDealDamage", "args": [ReplacableEventWouldDealDamage, Array<ReplacementActionWouldDealDamage>] }
| { "_Rule": "ReplaceWouldDestroy", "args": [ReplacableEventWouldDestroy, Array<ReplacementActionWouldDestroy>] }
| { "_Rule": "ReplaceWouldDiscard", "args": [ReplacableEventWouldDiscard, Array<ReplacementActionWouldDiscard>] }
| { "_Rule": "ReplaceWouldDraw", "args": [ReplacableEventWouldDraw, Array<ReplacementActionWouldDraw>] }
| { "_Rule": "ReplaceWouldEnter", "args": [ReplacableEventWouldEnter, Array<ReplacementActionWouldEnter>] }
| { "_Rule": "ReplaceWouldExplore", "args": [ReplacableEventWouldExplore, Array<ReplacementActionWouldExplore>] }
| { "_Rule": "ReplaceWouldFlipACoin", "args": [ReplacableEventWouldFlipACoin, Array<ReplacementActionWouldFlipACoin>] }
| { "_Rule": "ReplaceWouldGainLife", "args": [ReplacableEventWouldGainLife, Array<ReplacementActionWouldGainLife>] }
| { "_Rule": "ReplaceWouldGetEnergy", "args": [ReplacableEventWouldGetEnergy, Array<ReplacementActionWouldGetEnergy>] }
| { "_Rule": "ReplaceWouldLeaveTheBattlefield", "args": [ReplacableEventWouldLeaveTheBattlefield, Array<ReplacementActionWouldLeaveTheBattlefield>] }
| { "_Rule": "ReplaceWouldLoseLife", "args": [ReplacableEventWouldLoseLife, Array<ReplacementActionWouldLoseLife>] }
| { "_Rule": "ReplaceWouldLoseTheGame", "args": [ReplacableEventWouldLoseTheGame, Array<ReplacementActionWouldLoseTheGame>] }
| { "_Rule": "ReplaceWouldMill", "args": [ReplacableEventWouldMill, Array<ReplacementActionWouldMill>] }
| { "_Rule": "ReplaceWouldPayLife", "args": [ReplacableEventWouldPayLife, Array<ReplacementActionWouldPayLife>] }
| { "_Rule": "ReplaceWouldPlaneswalk", "args": [ReplacableEventWouldPlaneswalk, Array<ReplacementActionWouldPlaneswalk>] }
| { "_Rule": "ReplaceWouldProduceMana", "args": [ReplacableEventWouldProduceMana, Array<ReplacementActionWouldProduceMana>] }
| { "_Rule": "ReplaceWouldProliferate", "args": [ReplacableEventWouldProliferate, Array<ReplacementActionWouldProliferate>] }
| { "_Rule": "ReplaceWouldPutAPermanentOnTheBattlefield", "args": [ReplacableEventWouldPutAPermanentOnTheBattlefield, Array<ReplacementActionWouldPutAPermanentOnTheBattlefield>] }
| { "_Rule": "ReplaceWouldPutCounters", "args": [ReplacableEventWouldPutCounters, Array<ReplacementActionWouldPutCounters>] }
| { "_Rule": "ReplaceWouldPutIntoGraveyard", "args": [ReplacableEventWouldPutIntoGraveyard, Array<ReplacementActionWouldPutIntoGraveyard>] }
| { "_Rule": "ReplaceWouldReduceLife", "args": [ReplacableEventWouldReduceLife, Array<ReplacementActionWouldReduceLife>] }
| { "_Rule": "ReplaceWouldRollDice", "args": [ReplacableEventWouldRollDice, Array<ReplacementActionWouldRollDice>] }
| { "_Rule": "ReplaceWouldRollPlanarDice", "args": [ReplacableEventWouldRollPlanarDice, Array<ReplacementActionWouldRollPlanarDice>] }
| { "_Rule": "ReplaceWouldScry", "args": [ReplacableEventWouldScry, Array<ReplacementActionWouldScry>] }
| { "_Rule": "ReplaceWouldSearchLibrary", "args": [ReplacableEventWouldSearchLibrary, Array<ReplacementActionWouldSearchLibrary>] }
| { "_Rule": "ReplaceWouldUntap", "args": [ReplacableEventWouldUntap, Array<ReplacementActionWouldUntap>] }
| { "_Rule": "CastEffect", "args": CastEffect }
| { "_Rule": "ActivatedAbilityEffect", "args": [ActivatedAbilities, ActivatedAbilityEffect] }
| { "_Rule": "CantVentureIntoThisDungeonUnlessNamed" }
| { "_Rule": "CountsAsACardWithNameForSpellsNamed", "args": [string, string] }
| { "_Rule": "DeckBuildingIfCommander", "args": Array<DeckBuildingAction> };
type RuleSource =
| { "_RuleSource": "Printed" }
| { "_RuleSource": "Copy", EffectSource: SourcedRule, CopiedSource: SourcedRule, }
| { "_RuleSource": "CopyModifier", EffectSource: SourcedRule, }
| { "_RuleSource": "AddCopiable", EffectSource: SourcedRule, }
| { "_RuleSource": "AddCopiableFromExiled", ExiledId: number, ExiledSource: RuleSource, }
| { "_RuleSource": "Mutate", EffectSource: SourcedRule, }
| { "_RuleSource": "BattlefieldEffect", EffectSource: SourcedRule, PermanentId: number, }
| { "_RuleSource": "Effect", EffectSource: SourcedRule, EffectId: number, }
| { "_RuleSource": "TestCase" };
type SagaChapter =
| { "_SagaChapter": "SagaChapter", "args": [Array<number>, Actions] };
type Scheme =
| { "_OracleCard": "Scheme", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, };
type Schemes =
| { "_Schemes": "SingleScheme", "args": SingleScheme }
| { "_Schemes": "IsNonSupertype", "args": SuperType };
type SearchLibraryAction =
| { "_SearchLibraryAction": "CreatePermanentLayerEffectUntil", "args": [Permanent, Array<LayerEffect>, Expiration] }
| { "_SearchLibraryAction": "CreateTokens", "args": [Array<CreatableToken>, Array<TokenFlag>] }
| { "_SearchLibraryAction": "DiscardACardAtRandom" }
| { "_SearchLibraryAction": "EachPlayerLosesLife", "args": [Players, GameNumber] }
| { "_SearchLibraryAction": "ExileLibraryAndGraveyard" }
| { "_SearchLibraryAction": "GainLife", "args": GameNumber }
| { "_SearchLibraryAction": "RollAD20" }
| { "_SearchLibraryAction": "ValueActions", "args": Array<SearchLibraryActionValueAction> }
| { "_SearchLibraryAction": "PlayerChoosesACardName", "args": [Player, CardsInOracle] }
| { "_SearchLibraryAction": "If", "args": [Condition, Array<SearchLibraryAction>] }
| { "_SearchLibraryAction": "IfElse", "args": [Condition, Array<SearchLibraryAction>, Array<SearchLibraryAction>] }
| { "_SearchLibraryAction": "MayCost", "args": SearchLibraryCost }
| { "_SearchLibraryAction": "ChooseAnAction", "args": Array<SearchLibraryAction> }
| { "_SearchLibraryAction": "FindACardOfType", "args": CardsInLibrary }
| { "_SearchLibraryAction": "FindACardOfTypeAtRandom", "args": CardsInLibrary }
| { "_SearchLibraryAction": "FindAllCardsOfType", "args": CardsInLibrary }
| { "_SearchLibraryAction": "FindAnyNumberOfCardsOfType", "args": CardsInLibrary }
| { "_SearchLibraryAction": "FindCardsOfType", "args": Array<Cards> }
| { "_SearchLibraryAction": "FindUptoNumberCardsOfType", "args": [GameNumber, CardsInLibrary] }
| { "_SearchLibraryAction": "FindNumberCardsOfType", "args": [GameNumber, CardsInLibrary] }
| { "_SearchLibraryAction": "FindAGenericCard" }
| { "_SearchLibraryAction": "FindNumberGenericCards", "args": GameNumber }
| { "_SearchLibraryAction": "FindUptoNumberGenericCards", "args": GameNumber }
| { "_SearchLibraryAction": "FindAnyNumberOfGroupCards", "args": [CardsInLibrary, GroupFilter] }
| { "_SearchLibraryAction": "FindExactlyNumberGroupCards", "args": [GameNumber, CardsInLibrary, GroupFilter] }
| { "_SearchLibraryAction": "FindNumberGroupCards", "args": [GameNumber, CardsInLibrary, GroupFilter] }
| { "_SearchLibraryAction": "FindUptoNumberGroupCards", "args": [GameNumber, CardsInLibrary, GroupFilter] }
| { "_SearchLibraryAction": "RevealFoundCards" }
| { "_SearchLibraryAction": "ExileFoundCards" }
| { "_SearchLibraryAction": "ExileFoundCardsFaceDown" }
| { "_SearchLibraryAction": "ExileFoundCardsInShuffledFaceDownPile" }
| { "_SearchLibraryAction": "APlayerChooseACardExiledThisWay", "args": Players }
| { "_SearchLibraryAction": "CastFoundCardsWithoutPaying" }
| { "_SearchLibraryAction": "MayCastFoundCardsWithoutPaying" }
| { "_SearchLibraryAction": "MayPlayFoundCardsWithoutPaying" }
| { "_SearchLibraryAction": "MayPutFoundCardsOntoBattlefield", "args": Array<EnterFlag> }
| { "_SearchLibraryAction": "PutAFoundCardIntoHand" }
| { "_SearchLibraryAction": "PutAFoundCardOntoBattlefield", "args": Array<EnterFlag> }
| { "_SearchLibraryAction": "PutFoundCardsAndExiledCardsOntoBattlefield", "args": [CardsInExile, Array<EnterFlag>] }
| { "_SearchLibraryAction": "PutFoundCardsIntoGraveyard" }
| { "_SearchLibraryAction": "PutFoundCardsIntoHand" }
| { "_SearchLibraryAction": "PutFoundCardsOnBottomOfLibrary" }
| { "_SearchLibraryAction": "PutFoundCardsOntoBattlefield", "args": Array<EnterFlag> }
| { "_SearchLibraryAction": "PutNumberFoundCardsOntoBattlefield", "args": [GameNumber, Array<EnterFlag>] }
| { "_SearchLibraryAction": "SetAsideFoundCards" }
| { "_SearchLibraryAction": "ChooseAFoundCardAtRandom" }
| { "_SearchLibraryAction": "APlayerChoosesAFoundCard", "args": Players }
| { "_SearchLibraryAction": "APlayerChoosesNumberFoundCards", "args": [Players, GameNumber] }
| { "_SearchLibraryAction": "PutChosenFoundCardIntoHand" }
| { "_SearchLibraryAction": "PutChosenFoundCardsIntoGraveyard" }
| { "_SearchLibraryAction": "PutChosenFoundCardsIntoHand" }
| { "_SearchLibraryAction": "SetAsideNonchosenFoundCards" }
| { "_SearchLibraryAction": "PutExiledCardsOnTopOfLibraryIgnoreOrder", "args": CardsInExile }
| { "_SearchLibraryAction": "DontShuffle" }
| { "_SearchLibraryAction": "Shuffle" }
| { "_SearchLibraryAction": "ShuffleLibraryIfSearched" }
| { "_SearchLibraryAction": "PutSetAsideCardsNthFromTheTop", "args": GameNumber }
| { "_SearchLibraryAction": "PutSetAsideCardsIntoHand" }
| { "_SearchLibraryAction": "PutSetAsideCardsOnTopOfLibrary" }
| { "_SearchLibraryAction": "PutSetAsideCardsOntoBattlefield", "args": Array<EnterFlag> };
type SearchLibraryActionValueAction =
| { "_SearchLibraryActionValueAction": "ValueAction", "args": [GameRange, Array<SearchLibraryAction>] };
type SearchLibraryCost =
| { "_SearchLibraryCost": "PayManaX", "args": [Array<ManaSymbolX>, GameNumber] };
type SetInMotionAction =
| { "_SetInMotionAction": "ChooseAPlayer", "args": Players };
type SettableColor =
| { "_SettableColor": "AllColors" }
| { "_SettableColor": "Colorless" }
| { "_SettableColor": "Devoid" }
| { "_SettableColor": "SimpleColorList", "args": Array<SimpleColor> }
| { "_SettableColor": "TheChosenColor" }
| { "_SettableColor": "TheChosenColors" }
| { "_SettableColor": "TheManaColorChosenThisWay" };
type SimpleColor =
| "White"
| "Blue"
| "Black"
| "Red"
| "Green";
type SingleCard =
| { "_Card": "ThisCard" }
| { "_Card": "TheCardPutOntoTheBattlefieldThisWay" }
| { "_Card": "TheCardWithTheChosenName" };
type SingleDamageRecipient =
| { "_SingleDamageRecipient": "Player", "args": Player }
| { "_SingleDamageRecipient": "DistributedAnyTarget" }
| { "_SingleDamageRecipient": "Ref_AnyTargets_1" }
| { "_SingleDamageRecipient": "Ref_AnyTargets_2" }
| { "_SingleDamageRecipient": "Ref_AnyTarget" }
| { "_SingleDamageRecipient": "Ref_TargetPlayerOrPermanent" }
| { "_SingleDamageRecipient": "Permanent", "args": Permanent };
type SingleDamageSource =
| { "_SingleDamageSource": "TheChosenDamageSource" };
type SingleDungeon =
| { "_SingleDungeon": "OwnedByAPlayer", "args": Players };
type SingleScheme =
| { "_SingleScheme": "ThisScheme" };
type SingleVanguard =
| { "_SingleVanguard": "ThisVanguard" };
type SourcedRule =
| { RuleSource: RuleSource, Rule: Rule, };
type SpellCopyEffects =
| { "_SpellCopyEffects": "NoSpellCopyEffects" };
type SpellEffect =
| { "_SpellEffect": "EntersWithLayerEffectUntil", "args": [Array<LayerEffect>, Expiration] }
| { "_SpellEffect": "WebSlinging", "args": Cost }
| { "_SpellEffect": "ResolvesIntoExileInsteadOfGraveyardWithACounter", "args": CounterType }
| { "_SpellEffect": "Wither" }
| { "_SpellEffect": "Evoke", "args": Cost }
| { "_SpellEffect": "Delve" }
| { "_SpellEffect": "CastWithPerpetualEffect", "args": Array<PerpetualEffect> }
| { "_SpellEffect": "AsResolves", "args": Array<ResolveAction> }
| { "_SpellEffect": "Offspring", "args": Array<ManaSymbol> }
| { "_SpellEffect": "Emerge", "args": Cost }
| { "_SpellEffect": "Freerunning", "args": Array<ManaSymbol> }
| { "_SpellEffect": "EntersWithLayerEffect", "args": Array<LayerEffect> }
| { "_SpellEffect": "MayCastAsThoughItHadFlash" }
| { "_SpellEffect": "Prowl", "args": Array<ManaSymbol> }
| { "_SpellEffect": "SplitSecond" }
| { "_SpellEffect": "Conspire" }
| { "_SpellEffect": "CantBeCopied" }
| { "_SpellEffect": "CantBeCountered" }
| { "_SpellEffect": "AdditionalCostForEachColorManaSymbolInCosts", "args": [Cost, Color] }
| { "_SpellEffect": "ReplaceLandTypeVariableWithNewLandTypeVariable", "args": [LandTypeWord, LandTypeWord] }
| { "_SpellEffect": "DamageToPermanentsCantBePreventedOrRedirected", "args": Permanents }
| { "_SpellEffect": "IfPermanentSpell", "args": Array<SpellEffect> }
| { "_SpellEffect": "ReplaceColorWordVariableWithNewColorWordVariable", "args": [ColorWord, ColorWord] }
| { "_SpellEffect": "Undaunted" }
| { "_SpellEffect": "ResolvesIntoExileInsteadOfGraveyard" }
| { "_SpellEffect": "If", "args": [Condition, SpellEffect] }
| { "_SpellEffect": "DecreaseManaCostForEach", "args": [Array<CostReductionSymbol>, GameNumber] }
| { "_SpellEffect": "EntersWithNumberCounters", "args": [GameNumber, CounterType] }
| { "_SpellEffect": "IncreaseManaCostForEach", "args": [Array<ManaSymbol>, GameNumber] }
| { "_SpellEffect": "SetCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_SpellEffect": "EntersWithACounterOfChoice", "args": Array<CounterType> }
| { "_SpellEffect": "IncreaseManaCost", "args": Array<ManaSymbol> }
| { "_SpellEffect": "DecreaseManaCost", "args": Array<CostReductionSymbol> }
| { "_SpellEffect": "DecreaseManaCostX", "args": [Array<CostReductionSymbolX>, GameNumber] }
| { "_SpellEffect": "EntersWithACounter", "args": CounterType }
| { "_SpellEffect": "CantBeCounteredBySpells", "args": Spells }
| { "_SpellEffect": "Ripple", "args": GameNumber }
| { "_SpellEffect": "StickerKicker", "args": Cost }
| { "_SpellEffect": "Devour", "args": [Permanents, GameNumber] }
| { "_SpellEffect": "Blitz", "args": Cost }
| { "_SpellEffect": "Affinity", "args": Permanents }
| { "_SpellEffect": "Replicate", "args": Cost }
| { "_SpellEffect": "AddColor", "args": SettableColor }
| { "_SpellEffect": "SetColor", "args": SettableColor }
| { "_SpellEffect": "AddCreatureType", "args": CreatureType }
| { "_SpellEffect": "AddCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_SpellEffect": "AddAbilityUntil", "args": [Rule, Expiration] }
| { "_SpellEffect": "AddAbility", "args": Array<Rule> }
| { "_SpellEffect": "SetPT", "args": PT }
| { "_SpellEffect": "Bloodthirst", "args": GameNumber }
| { "_SpellEffect": "Casualty", "args": GameNumber }
| { "_SpellEffect": "AddCardtype", "args": CardType }
| { "_SpellEffect": "ResolvesIntoHandInsteadOfGraveyard" }
| { "_SpellEffect": "Storm" }
| { "_SpellEffect": "HasAllCreatureTypes" }
| { "_SpellEffect": "Demonstrate" }
| { "_SpellEffect": "Improvise" }
| { "_SpellEffect": "EntersTapped" }
| { "_SpellEffect": "CantBeCast" }
| { "_SpellEffect": "Sunburst" }
| { "_SpellEffect": "IsAColorlessSourceOfDamage" }
| { "_SpellEffect": "RemoveSupertypes", "args": Array<SuperType> }
| { "_SpellEffect": "Cascade" }
| { "_SpellEffect": "Deathtouch" }
| { "_SpellEffect": "Convoke" }
| { "_SpellEffect": "Riot" }
| { "_SpellEffect": "Lifelink" }
| { "_SpellEffect": "Rebound" };
type SpellOrAbility =
| { "_SpellOrAbility": "Trigger_ThatSpellOrAbility" }
| { "_SpellOrAbility": "Ref_TargetSpellOrAbility" }
| { "_SpellOrAbility": "EachableSpellOrAbility" };
type SpellOrPermanentEffect =
| { "_SpellOrPermanentEffect": "SetColor", "args": SettableColor };
type SpellOrPermanent =
| { "_SpellOrPermanent": "Ref_TargetSpellOrPermanent" };
type SpellsAndAbilities =
| { "_SpellsAndAbilities": "AnySpellOrAbility" }
| { "_SpellsAndAbilities": "And", "args": Array<SpellsAndAbilities> }
| { "_SpellsAndAbilities": "Or", "args": Array<SpellsAndAbilities> }
| { "_SpellsAndAbilities": "Ref_TargetSpellsAndAbilities" }
| { "_SpellsAndAbilities": "ControlledByAPlayer", "args": Players }
| { "_SpellsAndAbilities": "HasXInCost" }
| { "_SpellsAndAbilities": "ManaFromATeasureWasSpentToCastItOrActivateIt" }
| { "_SpellsAndAbilities": "NotAnAbilityOfAPermanent", "args": Permanents }
| { "_SpellsAndAbilities": "HasASingleTarget" }
| { "_SpellsAndAbilities": "HasOneOrMoreTargets" }
| { "_SpellsAndAbilities": "TargetsAPermanent", "args": Permanents }
| { "_SpellsAndAbilities": "TargetsOnlyASinglePermanentOrPlayer" }
| { "_SpellsAndAbilities": "TargetsPermanent", "args": Permanent }
| { "_SpellsAndAbilities": "TargetsPlayer", "args": Player }
| { "_SpellsAndAbilities": "ActivatedAbility" }
| { "_SpellsAndAbilities": "LoyaltyAbility" }
| { "_SpellsAndAbilities": "TriggeredAbility" }
| { "_SpellsAndAbilities": "IsSpell", "args": Spells };
type SpellsAndPermanents =
| { "_SpellsAndPermanents": "AnySpellOrPermanent" };
type Spell =
| { "_Spell": "TheNthSpellCastByPlayerThisTurn", "args": [GameNumber, Spells, Player] }
| { "_Spell": "Trigger_ThatSpell" }
| { "_Spell": "TheSpellThatGrantedThisAbility" }
| { "_Spell": "TheSpellExiledThisWay" }
| { "_Spell": "ASpellWouldBeCountered_ThatSpell" }
| { "_Spell": "ThatSpell" }
| { "_Spell": "TheSpellCastThisWay" }
| { "_Spell": "TheResolvedSpellChosenThisWay" }
| { "_Spell": "Ref_TargetSpell" }
| { "_Spell": "TheSpellMostRecentlyCastThisTurn" }
| { "_Spell": "DecreaseSpellCost_ThatSpell" }
| { "_Spell": "ThatEnteringPermanent" }
| { "_Spell": "TheCopiedSpell" }
| { "_Spell": "ThisSpell" };
type Spells =
| { "_Spells": "ExceptFor", "args": Spells }
| { "_Spells": "And", "args": Array<Spells> }
| { "_Spells": "Not", "args": Spells }
| { "_Spells": "Or", "args": Array<Spells> }
| { "_Spells": "Other", "args": Spell }
| { "_Spells": "AnySpell" }
| { "_Spells": "ManaAmountOfTypeWasSpentToCastIt", "args": [Comparison, Color] }
| { "_Spells": "HasColorManaSymbolInManaCost", "args": Color }
| { "_Spells": "HasHybridManaInCost" }
| { "_Spells": "PowerIsLessThanToughness" }
| { "_Spells": "NotInAPlayersStartingDeck", "args": Players }
| { "_Spells": "WasCastFromTheirGraveyard" }
| { "_Spells": "SneakCostWasPaid" }
| { "_Spells": "WasCastForItsWarpCost" }
| { "_Spells": "WasCastUsingTeamwork" }
| { "_Spells": "DoesntHaveAbility", "args": CheckHasable }
| { "_Spells": "IsNonEnchantmentType", "args": EnchantmentType }
| { "_Spells": "DoesntShareANameWithACardInPlayersLibrary", "args": Player }
| { "_Spells": "HasAbility", "args": CheckHasable }
| { "_Spells": "ManaSpentIsLessThanManaValue" }
| { "_Spells": "HasAnAdventure" }
| { "_Spells": "HasNoAbilities" }
| { "_Spells": "HasXInManaCost" }
| { "_Spells": "IsACommander" }
| { "_Spells": "IsAllColors" }
| { "_Spells": "IsAnOutlaw" }
| { "_Spells": "IsArtifactType", "args": ArtifactType }
| { "_Spells": "IsCardtype", "args": CardType }
| { "_Spells": "IsCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_Spells": "IsCardtypeVariable", "args": CardtypeVariable }
| { "_Spells": "IsColor", "args": Color }
| { "_Spells": "IsColored" }
| { "_Spells": "IsColorless" }
| { "_Spells": "IsCreatureType", "args": CreatureType }
| { "_Spells": "IsEnchantmentType", "args": EnchantmentType }
| { "_Spells": "IsHistoric" }
| { "_Spells": "IsMonocolored" }
| { "_Spells": "IsMulticolored" }
| { "_Spells": "IsNamed", "args": NameFilter }
| { "_Spells": "IsNonCardtype", "args": CardType }
| { "_Spells": "IsNonColor", "args": Color }
| { "_Spells": "IsNonCreatureType", "args": CreatureType }
| { "_Spells": "IsNonSupertype", "args": SuperType }
| { "_Spells": "IsNumberColors", "args": Comparison }
| { "_Spells": "IsParty" }
| { "_Spells": "IsPermanent" }
| { "_Spells": "IsPlaneswalkerType", "args": PlaneswalkerType }
| { "_Spells": "IsSpellType", "args": SpellType }
| { "_Spells": "IsSupertype", "args": SuperType }
| { "_Spells": "IsYourCommander" }
| { "_Spells": "ManaValueIs", "args": Comparison }
| { "_Spells": "PowerIs", "args": Comparison }
| { "_Spells": "SharesACardtypeWithAnExiledCard", "args": CardsInExile }
| { "_Spells": "SharesACardtypeWithExiledCard", "args": CardInExile }
| { "_Spells": "SharesACardtypeWithSpell", "args": Spell }
| { "_Spells": "SharesACardtypeWithTopOfAnyPlayersLibrary", "args": Players }
| { "_Spells": "SharesAColorWith", "args": Color }
| { "_Spells": "SharesAColorWithACardInPlayersGraveyard", "args": [Cards, Player] }
| { "_Spells": "SharesAColorWithAPermanent", "args": Permanents }
| { "_Spells": "SharesAColorWithExiledCard", "args": CardInExile }
| { "_Spells": "SharesAColorWithSpell", "args": Spell }
| { "_Spells": "SharesACreatureTypeWithPermanent", "args": Permanent }
| { "_Spells": "SharesACreatureTypeWithYourCommander" }
| { "_Spells": "SharesAManaValueWithExiledCard", "args": CardInExile }
| { "_Spells": "SharesAManaValueWithSpell", "args": Spell }
| { "_Spells": "SharesANameWithAGraveyardCard", "args": CardsInGraveyards }
| { "_Spells": "SharesANameOriginallyPrintedInArabianNights" }
| { "_Spells": "SharesANameWithAPermanent", "args": Permanents }
| { "_Spells": "SharesANameWithASpellCastThisTurn" }
| { "_Spells": "SharesANameWithAnExiled", "args": CardsInExile }
| { "_Spells": "SharesANameWithCardInPlayersGraveyard", "args": [Cards, Player] }
| { "_Spells": "SharesANameWithExiled", "args": CardInExile }
| { "_Spells": "SharesANameWithPermanent", "args": Permanent }
| { "_Spells": "SharesANameWithSpell", "args": Spell }
| { "_Spells": "SharesANameWithTheCardRevealedThisWay" }
| { "_Spells": "ToughnessIs", "args": Comparison }
| { "_Spells": "AdditionalCostWasPaid" }
| { "_Spells": "AlternateCostWasPaid", "args": Array<ManaSymbol> }
| { "_Spells": "AmongCardsDrawByAPlayerThisTurn", "args": Players }
| { "_Spells": "AmongCardsDrawByPlayerThisTurn", "args": Player }
| { "_Spells": "AnAmountOfManaFromPermanentSpentWasToCastIt", "args": [Comparison, Permanents] }
| { "_Spells": "AnAmountOfManaWasSpentToCastIt", "args": Comparison }
| { "_Spells": "CanTargetOnly", "args": Permanents }
| { "_Spells": "CastByAPlayer", "args": Players }
| { "_Spells": "CastByPlayer", "args": Player }
| { "_Spells": "CastByPlayerFromHand", "args": [Player, Player] }
| { "_Spells": "ControlledByAPlayer", "args": Players }
| { "_Spells": "DoesntTargetAPermanent", "args": Permanents }
| { "_Spells": "HasASingleTarget" }
| { "_Spells": "HasPhyrexianInManaCost" }
| { "_Spells": "HasXInCost" }
| { "_Spells": "IntensityIs", "args": Comparison }
| { "_Spells": "IsCard" }
| { "_Spells": "IsFaceDown" }
| { "_Spells": "IsModal" }
| { "_Spells": "IsntTheTargetOfAnAbility", "args": Abilities }
| { "_Spells": "ManaFromAPermanentWasSpentToCastIt", "args": Permanents }
| { "_Spells": "ManaFromATeasureWasSpentToCastIt" }
| { "_Spells": "ManaFromTeasureWasSpentToCast" }
| { "_Spells": "ManaWasSpentToCastIt", "args": Array<ManaProduce> }
| { "_Spells": "ManaWasntSpentToCastIt", "args": ManaProduce }
| { "_Spells": "NoColoredManaWasSpentToCastIt" }
| { "_Spells": "NoManaWasSpentToCastIt" }
| { "_Spells": "OwnedByAPlayer", "args": Players }
| { "_Spells": "PlayerChoseAPermanentAsCast", "args": [Player, Permanents] }
| { "_Spells": "PlayerControlledAPermanentAsCast", "args": [Player, Permanents] }
| { "_Spells": "PlayerRevealedACardAsCast", "args": [Player, Cards] }
| { "_Spells": "ProwlCostWasPaid" }
| { "_Spells": "Ref_TargetSpells" }
| { "_Spells": "SingleSpell", "args": Spell }
| { "_Spells": "SnowManaOfSpellsColorWasSpentToCastIt" }
| { "_Spells": "SurgeCostWasPaid" }
| { "_Spells": "TargetsAPermanent", "args": Permanents }
| { "_Spells": "TargetsAPlayer", "args": Players }
| { "_Spells": "TargetsOnlyASinglePermanent", "args": Permanents }
| { "_Spells": "TargetsOnlyASinglePermanentOrPlayer" }
| { "_Spells": "TargetsOnlyASinglePlayer", "args": Players }
| { "_Spells": "TargetsOnlyASingleTarget" }
| { "_Spells": "TargetsOnlySinglePermanent", "args": Permanent }
| { "_Spells": "TargetsPermanent", "args": Permanent }
| { "_Spells": "TargetsPlayer", "args": Player }
| { "_Spells": "TargetsSpell", "args": Spell }
| { "_Spells": "TheNthSpellCastByPlayerThisTurn", "args": [GameNumber, Spells, Player] }
| { "_Spells": "TheNthSpellCastThisTurn", "args": GameNumber }
| { "_Spells": "TheSpellsCastThisWay" }
| { "_Spells": "WasBargained" }
| { "_Spells": "WasCastByPlayerDuringTheirMainPhase" }
| { "_Spells": "WasCastFromAPlayersGraveyard", "args": Players }
| { "_Spells": "WasCastFromAmongCardsInExile", "args": CardsInExile }
| { "_Spells": "WasCastFromAmongCardsPutIntoTheirHandThisTurn" }
| { "_Spells": "WasCastFromExile" }
| { "_Spells": "WasCastFromPlayersHand", "args": Player }
| { "_Spells": "WasCastFromTheirHand" }
| { "_Spells": "WasCastFromTheirLibrary" }
| { "_Spells": "WasForetold" }
| { "_Spells": "WasKicked" }
| { "_Spells": "WasKickedWithKicker", "args": Array<ManaSymbol> }
| { "_Spells": "WasntCast" }
| { "_Spells": "WasntCastFromExile" }
| { "_Spells": "WasntCastFromTheirHand" }
| { "_Spells": "WouldDestroyAPermanent", "args": Permanents };
type SpellType =
| "Adventure"
| "Arcane"
| "Lesson"
| "Chorus"
| "Trap"
| "Omen";
type SplitObject =
| { "_OracleCard": "Split", Cards: Array<NormalObject>, };
type Split =
| { "_OracleCard": "Split", Cards: Array<Card>, };
type SpreeAction =
| { "_SpreeAction": "SpreeAction", "args": [Cost, Actions] };
type StackEffect =
| { "_StackEffect": "CantBeCountered" };
type StaticCopyEffects =
| { "_StaticCopyEffects": "NoStaticCopyEffects" }
| { "_StaticCopyEffects": "StaticCopyEffects", "args": Array<StaticCopyEffect> };
type StaticCopyEffect =
| { "_StaticCopyEffect": "KeepName" }
| { "_StaticCopyEffect": "SetName", "args": string }
| { "_StaticCopyEffect": "MergeTypeline" }
| { "_StaticCopyEffect": "AddSupertypes", "args": Array<SuperType> }
| { "_StaticCopyEffect": "RemoveSupertypes", "args": Array<SuperType> }
| { "_StaticCopyEffect": "AddCardtypes", "args": Array<CardType> }
| { "_StaticCopyEffect": "SetCardtypes", "args": Array<CardType> }
| { "_StaticCopyEffect": "AddArtifactTypes", "args": Array<ArtifactType> }
| { "_StaticCopyEffect": "AddCreatureTypes", "args": Array<CreatureType> }
| { "_StaticCopyEffect": "AddLandTypes", "args": Array<LandType> }
| { "_StaticCopyEffect": "SetArtifactTypes", "args": Array<ArtifactType> }
| { "_StaticCopyEffect": "HasNoManaCost" }
| { "_StaticCopyEffect": "KeepColor" }
| { "_StaticCopyEffect": "AddColor", "args": SettableColor }
| { "_StaticCopyEffect": "SetColor", "args": SettableColor }
| { "_StaticCopyEffect": "AddAbility", "args": Array<Rule> }
| { "_StaticCopyEffect": "AddAbilityIfItDoesntHaveAbility", "args": [Rule, CheckHasable] }
| { "_StaticCopyEffect": "KeepPT" }
| { "_StaticCopyEffect": "SetPT", "args": CardPT };
type StaticLayer1Effect =
| { "_StaticLayerEffect": "IsACopyOf_TheObjectChosenToCopy", "args": StaticCopyEffects }
| { "_StaticLayerEffect": "IsACopyOf", "args": [NormalObject, StaticCopyEffects] }
| { "_StaticLayerEffect": "SetCopiableManaCost", "args": Array<ManaSymbolX> }
| { "_StaticLayerEffect": "SetCopiablePT", "args": CardPT }
| { "_StaticLayerEffect": "AddCopiableCardtype", "args": CardType }
| { "_StaticLayerEffect": "AddCopiableSubtype", "args": SubType }
| { "_StaticLayerEffect": "AddCopiableAbility", "args": Array<Rule> }
| { "_StaticLayerEffect": "MutateOnTop", "args": number }
| { "_StaticLayerEffect": "MutateUnder", "args": number };
type StaticLayer2Effect =
| { "_StaticLayerEffect": "SetController", "args": Player };
type StaticLayer3Effect =
| { "_StaticLayerEffect": "HasAllNamesOfNonlegendaryCreatures" }
| { "_StaticLayerEffect": "HasTextOfGraveyardCardAndTheText", "args": [CardInGraveyards, Array<Rule>] }
| { "_StaticLayerEffect": "SetNameToTheChosenName" }
| { "_StaticLayerEffect": "SetName", "args": string };
type StaticLayer4Effect =
| { "_StaticLayerEffect": "AddCardtype", "args": CardType }
| { "_StaticLayerEffect": "RemoveCardtype", "args": CardType }
| { "_StaticLayerEffect": "HasAllCreatureTypes" }
| { "_StaticLayerEffect": "AddCreatureType", "args": CreatureType }
| { "_StaticLayerEffect": "AddArtifactType", "args": ArtifactType }
| { "_StaticLayerEffect": "AddCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_StaticLayerEffect": "SetCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_StaticLayerEffect": "AddLandTypeVariable", "args": LandTypeVariable }
| { "_StaticLayerEffect": "SetLandTypeVariable", "args": LandTypeVariable }
| { "_StaticLayerEffect": "AddLandType", "args": LandType }
| { "_StaticLayerEffect": "AddSupertype", "args": SuperType }
| { "_StaticLayerEffect": "RemoveSupertype", "args": SuperType }
| { "_StaticLayerEffect": "SetArtifactType", "args": ArtifactType }
| { "_StaticLayerEffect": "SetCardtype", "args": CardType }
| { "_StaticLayerEffect": "SetCardtypes", "args": Array<CardType> }
| { "_StaticLayerEffect": "SetCreatureType", "args": CreatureType }
| { "_StaticLayerEffect": "SetCreatureTypes", "args": Array<CreatureType> }
| { "_StaticLayerEffect": "SetLandType", "args": LandType }
| { "_StaticLayerEffect": "SetLandTypes", "args": Array<LandType> }
| { "_StaticLayerEffect": "HasAllLandTypes" }
| { "_StaticLayerEffect": "RemoveAllCreatureTypes" }
| { "_StaticLayerEffect": "RemoveAllLandTypes" };
type StaticLayer5Effect =
| { "_StaticLayerEffect": "AddColor", "args": SettableColor }
| { "_StaticLayerEffect": "SetColor", "args": SettableColor };
type StaticLayer6Effect =
| { "_StaticLayerEffect": "AddAbilityVariable", "args": AbilityVariable }
| { "_StaticLayerEffect": "AddAbility", "args": Array<Rule> }
| { "_StaticLayerEffect": "AddAbilityFromAnExiledHasable_MayOnlyActivateOnecEachTurn", "args": [CardsInExile, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddAbilityFromAnExiledHasable", "args": [CardsInExile, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddAbilityFromExiledHasable", "args": [CardInExile, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddActivatedAbilitiesAndMaySpendManaAsThoughItWasAnyColorToActivate", "args": ActivatedAbilities }
| { "_StaticLayerEffect": "AddAbilityFromTopOfLibraryHasable", "args": Array<CheckHasable> }
| { "_StaticLayerEffect": "AddAbilityAndLoseAllOtherAbilities", "args": Array<Rule> }
| { "_StaticLayerEffect": "AddAbilityFromCardsRemovedFromDraftWithCardsNamedHasable", "args": [Cards, string, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddAbilityFromPermanentHasable", "args": [Permanent, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddAbilityFromEachPermanentHasable", "args": [Permanents, Array<CheckHasable>] }
| { "_StaticLayerEffect": "LosesAbility", "args": CheckHasable }
| { "_StaticLayerEffect": "LosesAllAbilities" };
type StaticLayer7Effect =
| { "_StaticLayerEffect": "SetPower", "args": GameNumber }
| { "_StaticLayerEffect": "SetToughness", "args": GameNumber }
| { "_StaticLayerEffect": "AdjustPTX", "args": [ModX, ModX, GameNumber] }
| { "_StaticLayerEffect": "AdjustPTXY", "args": [ModX, ModY, GameNumber, GameNumber] }
| { "_StaticLayerEffect": "SetPowerAndToughnessBoth", "args": GameNumber }
| { "_StaticLayerEffect": "AdjustPT", "args": [number, number] }
| { "_StaticLayerEffect": "SetPT", "args": PT }
| { "_StaticLayerEffect": "AdjustPTForEach", "args": [number, number, GameNumber] };
type StaticLayerEffect =
| { "_StaticLayerEffect": "IsACopyOf", "args": [NormalObject, StaticCopyEffects] }
| { "_StaticLayerEffect": "IsACopyOf_TheObjectChosenToCopy", "args": StaticCopyEffects }
| { "_StaticLayerEffect": "SetCopiableManaCost", "args": Array<ManaSymbolX> }
| { "_StaticLayerEffect": "SetCopiablePT", "args": CardPT }
| { "_StaticLayerEffect": "AddCopiableCardtype", "args": CardType }
| { "_StaticLayerEffect": "AddCopiableSubtype", "args": SubType }
| { "_StaticLayerEffect": "AddCopiableAbility", "args": Array<Rule> }
| { "_StaticLayerEffect": "MutateOnTop", "args": number }
| { "_StaticLayerEffect": "MutateUnder", "args": number }
| { "_StaticLayerEffect": "SetController", "args": Player }
| { "_StaticLayerEffect": "HasAllNamesOfNonlegendaryCreatures" }
| { "_StaticLayerEffect": "HasTextOfGraveyardCardAndTheText", "args": [CardInGraveyards, Array<Rule>] }
| { "_StaticLayerEffect": "SetNameToTheChosenName" }
| { "_StaticLayerEffect": "SetName", "args": string }
| { "_StaticLayerEffect": "AddCardtype", "args": CardType }
| { "_StaticLayerEffect": "RemoveCardtype", "args": CardType }
| { "_StaticLayerEffect": "HasAllCreatureTypes" }
| { "_StaticLayerEffect": "AddCreatureType", "args": CreatureType }
| { "_StaticLayerEffect": "AddArtifactType", "args": ArtifactType }
| { "_StaticLayerEffect": "AddCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_StaticLayerEffect": "SetCreatureTypeVariable", "args": CreatureTypeVariable }
| { "_StaticLayerEffect": "AddLandTypeVariable", "args": LandTypeVariable }
| { "_StaticLayerEffect": "SetLandTypeVariable", "args": LandTypeVariable }
| { "_StaticLayerEffect": "AddLandType", "args": LandType }
| { "_StaticLayerEffect": "AddSupertype", "args": SuperType }
| { "_StaticLayerEffect": "RemoveSupertype", "args": SuperType }
| { "_StaticLayerEffect": "SetArtifactType", "args": ArtifactType }
| { "_StaticLayerEffect": "SetCardtype", "args": CardType }
| { "_StaticLayerEffect": "SetCardtypes", "args": Array<CardType> }
| { "_StaticLayerEffect": "SetCreatureType", "args": CreatureType }
| { "_StaticLayerEffect": "SetCreatureTypes", "args": Array<CreatureType> }
| { "_StaticLayerEffect": "SetLandType", "args": LandType }
| { "_StaticLayerEffect": "SetLandTypes", "args": Array<LandType> }
| { "_StaticLayerEffect": "HasAllLandTypes" }
| { "_StaticLayerEffect": "RemoveAllCreatureTypes" }
| { "_StaticLayerEffect": "RemoveAllLandTypes" }
| { "_StaticLayerEffect": "AddColor", "args": SettableColor }
| { "_StaticLayerEffect": "SetColor", "args": SettableColor }
| { "_StaticLayerEffect": "AddAbilityVariable", "args": AbilityVariable }
| { "_StaticLayerEffect": "AddAbility", "args": Array<Rule> }
| { "_StaticLayerEffect": "AddAbilityFromAnExiledHasable_MayOnlyActivateOnecEachTurn", "args": [CardsInExile, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddAbilityFromAnExiledHasable", "args": [CardsInExile, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddAbilityFromExiledHasable", "args": [CardInExile, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddActivatedAbilitiesAndMaySpendManaAsThoughItWasAnyColorToActivate", "args": ActivatedAbilities }
| { "_StaticLayerEffect": "AddAbilityFromTopOfLibraryHasable", "args": Array<CheckHasable> }
| { "_StaticLayerEffect": "AddAbilityAndLoseAllOtherAbilities", "args": Array<Rule> }
| { "_StaticLayerEffect": "AddAbilityFromCardsRemovedFromDraftWithCardsNamedHasable", "args": [Cards, string, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddAbilityFromPermanentHasable", "args": [Permanent, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddAbilityFromEachPermanentHasable", "args": [Permanents, Array<CheckHasable>] }
| { "_StaticLayerEffect": "AddAbilityFromCardsInGraveyardsHasable", "args": [CardsInGraveyards, Array<CheckHasable>] }
| { "_StaticLayerEffect": "LosesAbility", "args": CheckHasable }
| { "_StaticLayerEffect": "LosesAllAbilities" }
| { "_StaticLayerEffect": "SetPower", "args": GameNumber }
| { "_StaticLayerEffect": "SetToughness", "args": GameNumber }
| { "_StaticLayerEffect": "AdjustPTX", "args": [ModX, ModX, GameNumber] }
| { "_StaticLayerEffect": "AdjustPTXY", "args": [ModX, ModY, GameNumber, GameNumber] }
| { "_StaticLayerEffect": "SetPowerAndToughnessBoth", "args": GameNumber }
| { "_StaticLayerEffect": "AdjustPT", "args": [number, number] }
| { "_StaticLayerEffect": "SetPT", "args": PT }
| { "_StaticLayerEffect": "AdjustPTForEach", "args": [number, number, GameNumber] };
type StickerSheet =
| { "_OracleCard": "StickerSheet", Stickers: Array<Sticker>, };
type Sticker =
| { "_Sticker": "NameSticker", "args": string }
| { "_Sticker": "PTSticker", "args": [number, CardPT] }
| { "_Sticker": "AbilitySticker", "args": [number, Array<Rule>] };
type SubType =
| "Undercity"
| "Siege"
| "Advisor"
| "Aetherborn"
| "Alien"
| "Ally"
| "Angel"
| "Antelope"
| "Ape"
| "Archer"
| "Archon"
| "Armadillo"
| "Army"
| "Artificer"
| "Assassin"
| "AssemblyWorker"
| "Astartes"
| "Atog"
| "Aurochs"
| "Avatar"
| "Azra"
| "Badger"
| "Balloon"
| "Barbarian"
| "Bard"
| "Basilisk"
| "Bat"
| "Bear"
| "Beast"
| "Beaver"
| "Beeble"
| "Beholder"
| "Berserker"
| "Bird"
| "Bison"
| "Blinkmoth"
| "Boar"
| "Borg"
| "Bringer"
| "Brushwagg"
| "Camarid"
| "Camel"
| "Capybara"
| "Caribou"
| "Carrier"
| "Cat"
| "Centaur"
| "Chimera"
| "Citizen"
| "Cleric"
| "Clown"
| "Cockatrice"
| "Construct"
| "Coward"
| "Coyote"
| "Crab"
| "Crocodile"
| "Ctan"
| "Custodes"
| "Cyberman"
| "Cyclops"
| "Dalek"
| "Dauthi"
| "Demigod"
| "Demon"
| "Deserter"
| "Detective"
| "Devil"
| "Dinosaur"
| "Djinn"
| "Doctor"
| "Dog"
| "Dragon"
| "Drake"
| "Dreadnought"
| "Drix"
| "Drone"
| "Druid"
| "Dryad"
| "Dwarf"
| "Echidna"
| "Efreet"
| "Egg"
| "Elder"
| "Eldrazi"
| "Elemental"
| "Elephant"
| "Elf"
| "Elk"
| "Employee"
| "Eternal"
| "Eye"
| "Faerie"
| "Ferret"
| "Fish"
| "Flagbearer"
| "Fox"
| "Fractal"
| "Frog"
| "Fungus"
| "Gamer"
| "Gamma"
| "Gargoyle"
| "Germ"
| "Giant"
| "Giraffe"
| "Gith"
| "Glimmer"
| "Gnoll"
| "Gnome"
| "Goat"
| "Goblin"
| "God"
| "Golem"
| "Gorgon"
| "Graveborn"
| "Gremlin"
| "Griffin"
| "Guest"
| "Hag"
| "Halfling"
| "Hamster"
| "Harpy"
| "Hedgehog"
| "Hellion"
| "Hero"
| "Hippo"
| "Hippogriff"
| "Homarid"
| "Homunculus"
| "Horror"
| "Horse"
| "Human"
| "Hydra"
| "Hyena"
| "Illusion"
| "Imp"
| "Incarnation"
| "Inhuman"
| "Inkling"
| "Inquisitor"
| "Insect"
| "Jackal"
| "Jellyfish"
| "Juggernaut"
| "Kangaroo"
| "Kavu"
| "Kirin"
| "Kithkin"
| "Klingon"
| "Knight"
| "Kobold"
| "Kor"
| "Kraken"
| "Kree"
| "Lamia"
| "Lammasu"
| "Leech"
| "Lemur"
| "Leviathan"
| "Lhurgoyf"
| "Licid"
| "Lizard"
| "Llama"
| "Lobster"
| "Manticore"
| "Masticore"
| "Mercenary"
| "Merfolk"
| "Metathran"
| "Minion"
| "Minotaur"
| "Mite"
| "Mole"
| "Monger"
| "Mongoose"
| "Monk"
| "Monkey"
| "Moogle"
| "Moonfolk"
| "Mount"
| "Mouse"
| "Mutant"
| "Myr"
| "Mystic"
| "Nautilus"
| "Necron"
| "Nephilim"
| "Nightmare"
| "Nightstalker"
| "Ninja"
| "Noble"
| "Noggle"
| "Nomad"
| "Nymph"
| "Octopus"
| "Officer"
| "Ogre"
| "Ooze"
| "Orb"
| "Orc"
| "Orgg"
| "Otter"
| "Ouphe"
| "Ox"
| "Oyster"
| "Pangolin"
| "Peasant"
| "Pegasus"
| "Pentavite"
| "Performer"
| "Pest"
| "Phelddagrif"
| "Phoenix"
| "Phyrexian"
| "Pilot"
| "Pincher"
| "Pirate"
| "Plant"
| "Platypus"
| "Porcupine"
| "Possum"
| "Praetor"
| "Primarch"
| "Prism"
| "Processor"
| "Q"
| "Qu"
| "Rabbit"
| "Raccoon"
| "Ranger"
| "Rat"
| "Rebel"
| "Reflection"
| "Rhino"
| "Rigger"
| "Robot"
| "Rogue"
| "Romulan"
| "Sable"
| "Salamander"
| "Samurai"
| "Sand"
| "Saproling"
| "Satyr"
| "Scarecrow"
| "Scientist"
| "Scion"
| "Scorpion"
| "Scout"
| "Sculpture"
| "Seal"
| "Serf"
| "Serpent"
| "Servo"
| "Shade"
| "Shaman"
| "Shapeshifter"
| "Shark"
| "Sheep"
| "Shiar"
| "Siren"
| "Skeleton"
| "Skrull"
| "Skunk"
| "Slith"
| "Sliver"
| "Sloth"
| "Slug"
| "Snail"
| "Snake"
| "Soldier"
| "Soltari"
| "Sorcerer"
| "Spawn"
| "Specter"
| "Spellshaper"
| "Sphinx"
| "Spider"
| "Spike"
| "Spirit"
| "Splinter"
| "Sponge"
| "Spy"
| "Squid"
| "Squirrel"
| "Starfish"
| "Surrakar"
| "Survivor"
| "Symbiote"
| "Synth"
| "Tentacle"
| "Tetravite"
| "Thalakos"
| "Thopter"
| "Thrull"
| "Tiefling"
| "TimeLord"
| "Tosk"
| "Toy"
| "Treefolk"
| "Trilobite"
| "Triskelavite"
| "Troll"
| "Turtle"
| "Tyranid"
| "Unicorn"
| "Utrom"
| "Vampire"
| "Varmint"
| "Vedalken"
| "Villain"
| "Volver"
| "Vulcan"
| "Wall"
| "Walrus"
| "Warlock"
| "Warrior"
| "Weasel"
| "Weird"
| "Werewolf"
| "Whale"
| "Wizard"
| "Wolf"
| "Wolverine"
| "Wombat"
| "Worm"
| "Wraith"
| "Wurm"
| "Yeti"
| "Zombie"
| "Zubera"
| "Cave"
| "Desert"
| "Forest"
| "Gate"
| "Island"
| "Lair"
| "Locus"
| "Mine"
| "Mountain"
| "Plains"
| "Planet"
| "PowerPlant"
| "Sphere"
| "Swamp"
| "Tower"
| "Town"
| "Urzas"
| "Adventure"
| "Arcane"
| "Lesson"
| "Chorus"
| "Trap"
| "Omen"
| "Aura"
| "Background"
| "Cartouche"
| "Case"
| "Class"
| "Curse"
| "Plan"
| "Role"
| "Room"
| "Rune"
| "Saga"
| "Shard"
| "Shrine"
| "Attraction"
| "Blood"
| "Bobblehead"
| "Book"
| "Clue"
| "Equipment"
| "Food"
| "Fortification"
| "Gold"
| "Incubator"
| "Infinity"
| "Junk"
| "Lander"
| "Map"
| "Mutagen"
| "Powerstone"
| "Spacecraft"
| "Stone"
| "Treasure"
| "Vehicle"
| "Vibranium"
| "Ajani"
| "Aminatou"
| "Angrath"
| "Arlinn"
| "Ashiok"
| "Bahamut"
| "Basri"
| "Bolas"
| "Calix"
| "Chandra"
| "Comet"
| "Dack"
| "Dakkon"
| "Daretti"
| "Davriel"
| "Deb"
| "Dellian"
| "Dihada"
| "Domri"
| "Dovin"
| "Ellywick"
| "Elminster"
| "Elspeth"
| "Estrid"
| "Freyalise"
| "Garruk"
| "Gideon"
| "Grist"
| "Guff"
| "Huatli"
| "Jace"
| "Jared"
| "Jaya"
| "Jeska"
| "Kaito"
| "Karn"
| "Kasmina"
| "Kaya"
| "Kiora"
| "Koth"
| "Liliana"
| "Lolth"
| "Lukka"
| "Minsc"
| "Mordenkainen"
| "Nahiri"
| "Narset"
| "Niko"
| "Nissa"
| "Nixilis"
| "Oko"
| "Quintorius"
| "Ral"
| "Rowan"
| "Saheeli"
| "Samut"
| "Sarkhan"
| "Serra"
| "Sivitri"
| "Sorin"
| "Szat"
| "Tamiyo"
| "Tasha"
| "Teferi"
| "Teyo"
| "Tezzeret"
| "Tibalt"
| "Tyvar"
| "Ugin"
| "Urza"
| "Venser"
| "Vivien"
| "Vraska"
| "Vronos"
| "Will"
| "Windgrace"
| "Wrenn"
| "Xenagos"
| "Yanggu"
| "Yanling"
| "Zariel"
| "Alara"
| "AlfavaMetraxis"
| "Amonkhet"
| "AndrozaniMinor"
| "Antausia"
| "Apalapucia"
| "Arcavios"
| "Arkhos"
| "Avishkar"
| "Azgol"
| "Belenon"
| "BolassMeditationRealm"
| "Capenna"
| "Cridhe"
| "Darillium"
| "Dominaria"
| "Earth"
| "Echoir"
| "Eldraine"
| "Equilor"
| "Ergamon"
| "Fabacin"
| "Fiora"
| "Gallifrey"
| "Gargantikar"
| "Gobakhan"
| "HorseheadNebula"
| "Ikoria"
| "Innistrad"
| "Iquatana"
| "Ir"
| "Ixalan"
| "Kaldheim"
| "Kamigawa"
| "Kandoka"
| "Karsus"
| "Kephalai"
| "Kinshala"
| "Kolbahan"
| "Kylem"
| "Kyneth"
| "Lorwyn"
| "Luvion"
| "Mars"
| "Mercadia"
| "Mirrodin"
| "Moag"
| "Mongseng"
| "Moon"
| "Muraganda"
| "Necros"
| "NewEarth"
| "NewPhyrexia"
| "OutsideMuttersSpiral"
| "Phyrexia"
| "Pyrulea"
| "Rabiah"
| "Rath"
| "Ravnica"
| "Regatha"
| "Segovia"
| "SerrasRealm"
| "Shadowmoor"
| "Shandalar"
| "Shenmeng"
| "Skaro"
| "Spaceship"
| "Tarkir"
| "TheAbyss"
| "TheDalekAsylum"
| "TheLibrary"
| "Theros"
| "Time"
| "Trenzalore"
| "UnknownPlanet"
| "Ulgrotha"
| "Valla"
| "Vryn"
| "Wildfire"
| "Xerex"
| "Zendikar"
| "Zhalfir";
type SuperType =
| "Basic"
| "Legendary"
| "Ongoing"
| "Snow"
| "World";
type Targets =
| { "_Targets": "Ref_AnyTargets" }
| { "_Targets": "Ref_TargetPlayersAndPermanents" };
type Target =
| { "_Target": "UptoNumberTargetPermanentsAndOrCardsInGraveyards", "args": [GameNumber, Permanents, CardsInGraveyards] }
| { "_Target": "BetweenOneAndNumberAnyTargets", "args": GameNumber }
| { "_Target": "BetweenOneAndNumberTargetGraveyardCards", "args": [GameNumber, CardsInGraveyards] }
| { "_Target": "UptoNumberTargetSpellsOrAbilities", "args": [GameNumber, SpellsAndAbilities] }
| { "_Target": "OneOrTwoTargetGraveyardCards", "args": CardsInGraveyards }
| { "_Target": "AnyNumberOfTargetGraveyardCards", "args": CardsInGraveyards }
| { "_Target": "AnyNumberOfTargetGroupGraveyardCards", "args": [CardsInGraveyards, GroupFilter] }
| { "_Target": "NumberTargetGraveyardCards", "args": [GameNumber, CardsInGraveyards] }
| { "_Target": "NumberTargetGroupGraveyardCards", "args": [GameNumber, CardsInGraveyards, GroupFilter] }
| { "_Target": "TargetGraveyardCard", "args": CardsInGraveyards }
| { "_Target": "TargetGraveyardCardAtRandom", "args": CardsInGraveyards }
| { "_Target": "TargetGraveyardCardInEachPlayersGraveyard", "args": [CardsInGraveyards, Players] }
| { "_Target": "UptoNumberTargetGraveyardCardsFromList", "args": [GameNumber, Array<CardsInGraveyards>] }
| { "_Target": "UptoNumberTargetGraveyardCards", "args": [GameNumber, CardsInGraveyards] }
| { "_Target": "UptoNumberTargetGroupGraveyardCards", "args": [GameNumber, CardsInGraveyards, GroupFilter] }
| { "_Target": "UptoOneTargetGraveyardCard", "args": CardsInGraveyards }
| { "_Target": "UptoOneTargetGraveyardCardInEachPlayersGraveyard", "args": [CardsInGraveyards, Players] }
| { "_Target": "UptoOneTargetGraveyardCardOfEachColor", "args": CardsInGraveyards }
| { "_Target": "AnyNumberOfAnyTargets" }
| { "_Target": "AnyNumberOfTargetGroupPermanents", "args": [Permanents, GroupFilter] }
| { "_Target": "AnyNumberOfTargetPermanents", "args": Permanents }
| { "_Target": "AnyNumberOfTargetPlayers", "args": Players }
| { "_Target": "AnyNumberOfTargetPlayersOrPermanents", "args": [Players, Permanents] }
| { "_Target": "AnyNumberOfTargetSpells", "args": Spells }
| { "_Target": "AnyOtherTarget", "args": OtherTarget }
| { "_Target": "AnyTarget" }
| { "_Target": "AnyTargetChosenAtRandom" }
| { "_Target": "AnyTargetExceptAPermanent", "args": Permanents }
| { "_Target": "AnyTargetExceptPermanent", "args": Permanent }
| { "_Target": "AnyTargetOfAPlayersChoice", "args": Players }
| { "_Target": "AnyTargetOfPlayersChoice", "args": Player }
| { "_Target": "AnyTargetThatWasDealtDamageThisTurn" }
| { "_Target": "NumberAnyTargets", "args": GameNumber }
| { "_Target": "NumberTargetGroupPermanents", "args": [GameNumber, Permanents, GroupFilter] }
| { "_Target": "NumberTargetPermanents", "args": [GameNumber, Permanents] }
| { "_Target": "NumberTargetPlayers", "args": [GameNumber, Players] }
| { "_Target": "OneOrMoreTargetPermanents", "args": Permanents }
| { "_Target": "OneOrTwoTargetPermanents", "args": Permanents }
| { "_Target": "TargetAbility", "args": Abilities }
| { "_Target": "TargetAnteCard", "args": Cards }
| { "_Target": "TargetGraveyardCardOfAPlayersChoice", "args": [CardsInGraveyards, Players] }
| { "_Target": "TargetExiledCard", "args": CardsInExile }
| { "_Target": "TargetPermanent", "args": Permanents }
| { "_Target": "TargetPermanentAtRandom", "args": Permanents }
| { "_Target": "TargetPermanentEachPlayerControls", "args": [Permanents, Players] }
| { "_Target": "TargetPermanentOfAPlayersChoice", "args": [Permanents, Players] }
| { "_Target": "TargetPermanentOfAPlayersChoiceTheyControl", "args": [Permanents, Players] }
| { "_Target": "TargetPermanentOfPlayersChoice", "args": [Permanents, Player] }
| { "_Target": "TargetPermanentOrExiledCard", "args": [Permanents, CardsInExile] }
| { "_Target": "TargetPlayer", "args": Players }
| { "_Target": "TargetPlayerAtRandom", "args": Players }
| { "_Target": "TargetPlayerAtTime", "args": [Players, Players] }
| { "_Target": "TargetPlayerOfPlayersChoice", "args": [Players, Player] }
| { "_Target": "TargetPlayerOrPermanent", "args": [Players, Permanents] }
| { "_Target": "TargetSpell", "args": Spells }
| { "_Target": "TargetSpellOrAbility", "args": SpellsAndAbilities }
| { "_Target": "TargetSpellOrPermanent", "args": SpellsAndPermanents }
| { "_Target": "TargetSpellOrTargetPermanent", "args": [Spells, Permanents] }
| { "_Target": "UptoNumberAnyTargets", "args": GameNumber }
| { "_Target": "UptoNumberAnyTargetsExcept", "args": [GameNumber, OtherTarget] }
| { "_Target": "UptoNumberTargetGroupPermanents", "args": [GameNumber, Permanents, GroupFilter] }
| { "_Target": "UptoNumberTargetPermanents", "args": [GameNumber, Permanents] }
| { "_Target": "UptoNumberTargetPermanentsTargetPlayerControls", "args": [GameNumber, Permanents, Players] }
| { "_Target": "UptoNumberTargetPlayers", "args": [GameNumber, Players] }
| { "_Target": "UptoNumberTargetSpells", "args": [GameNumber, Spells] }
| { "_Target": "UptoOneTargetAbility", "args": Abilities }
| { "_Target": "UptoOneTargetExiledCard", "args": CardsInExile }
| { "_Target": "UptoOneTargetPermanent", "args": Permanents }
| { "_Target": "UptoOneTargetPermanentEachPlayerControls", "args": [Permanents, Players] }
| { "_Target": "UptoOneTargetPermanent_Optional", "args": Permanents }
| { "_Target": "UptoOneTargetPlayer", "args": Players }
| { "_Target": "UptoOneTargetPlayerOrPermanent", "args": [Players, Permanents] }
| { "_Target": "UptoOneTargetSpell", "args": Spells };
type TieredAction =
| { "_TieredAction": "TieredAction", "args": [Cost, Actions] };
type TokenColorList =
| { "_TokenColorList": "AllColors" }
| { "_TokenColorList": "TheChosenColor" }
| { "_TokenColorList": "Colors", "args": Array<SimpleColor> }
| { "_TokenColorList": "Colorless" };
type TokenCopyEffects =
| { "_TokenCopyEffects": "TokenCopyEffects", "args": Array<TokenCopyEffect> }
| { "_TokenCopyEffects": "NoTokenCopyEffects" };
type TokenCopyEffect =
| { "_TokenCopyEffect": "AddSupertypes", "args": Array<SuperType> }
| { "_TokenCopyEffect": "RemoveSupertypes", "args": Array<SuperType> }
| { "_TokenCopyEffect": "AddCardtypes", "args": Array<CardType> }
| { "_TokenCopyEffect": "SetCardtypes", "args": Array<CardType> }
| { "_TokenCopyEffect": "AddCreatureTypes", "args": Array<CreatureType> }
| { "_TokenCopyEffect": "AddArtifactTypes", "args": Array<ArtifactType> }
| { "_TokenCopyEffect": "SetArtifactTypes", "args": Array<ArtifactType> }
| { "_TokenCopyEffect": "SetCreatureTypes", "args": Array<CreatureType> }
| { "_TokenCopyEffect": "AddAbility", "args": Array<Rule> }
| { "_TokenCopyEffect": "LosesAbility", "args": CheckHasable }
| { "_TokenCopyEffect": "RemoveThisAbility" }
| { "_TokenCopyEffect": "AddAbilityFromEachExiledHasable", "args": [CardsInExile, Array<CheckHasable>] }
| { "_TokenCopyEffect": "AddColor", "args": SettableColor }
| { "_TokenCopyEffect": "SetColor", "args": SettableColor }
| { "_TokenCopyEffect": "SetName", "args": string }
| { "_TokenCopyEffect": "SetPT", "args": PT }
| { "_TokenCopyEffect": "SetLoyalty", "args": GameNumber };
type TokenFlag =
| { "_TokenFlag": "EntersAttachedToAPermanent", "args": Permanents }
| { "_TokenFlag": "EntersWithACounter", "args": CounterType }
| { "_TokenFlag": "EntersBlockingAttacker", "args": Permanent }
| { "_TokenFlag": "EntersWithNumberCounters", "args": [GameNumber, CounterType] }
| { "_TokenFlag": "EntersAttackingPlayerOrPlaneswalkerControlledBy", "args": Player }
| { "_TokenFlag": "EntersWithRuleEffectUntil", "args": [Array<PermanentRule>, Expiration] }
| { "_TokenFlag": "EntersAttachedToPermanent", "args": Permanent }
| { "_TokenFlag": "EntersTapped" }
| { "_TokenFlag": "EntersAttackingPlayer", "args": Player }
| { "_TokenFlag": "EntersAttacking" };
type TokenSubtypes =
| { "_TokenSubtypes": "SubtypesList", "args": Array<SubType> }
| { "_TokenSubtypes": "TheChosenCreatureType" }
| { "_TokenSubtypes": "AllBasicLandTypes" };
type TransformAction =
| { "_TransformAction": "ChooseAPlayer", "args": Players }
| { "_TransformAction": "GetAnEmblem", "args": Array<Rule> }
| { "_TransformAction": "TransformsWithNumberCounters", "args": [GameNumber, CounterType] }
| { "_TransformAction": "AttachPermanentToAPlayer", "args": [Permanent, Players] }
| { "_TransformAction": "BecomeACopyOfAnExiledCard", "args": [CardsInExile, CopyEffects] };
type TransformingObject =
| { "_OracleCard": "Transforming", FrontFace: NormalObject, BackFace: NormalObject, };
type Transforming =
| { "_OracleCard": "Transforming", FrontFace: Card, BackFace: Card, };
type TriggerAndActions =
| [Trigger, Actions];
type Trigger =
| { "_Trigger": "WhenAPlayerFacesADilemma", "args": Players }
| { "_Trigger": "WhenAPermanentConnives", "args": Permanents }
| { "_Trigger": "WhenAPlayerWaterEarthFireOrAirBends", "args": Players }
| { "_Trigger": "WhenAPermanentBecomesTappedToPayATeamworkCost", "args": Permanents }
| { "_Trigger": "WhenAPermanentStationsAPermanent", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPlayerActivatesAnAbility", "args": [Players, ActivatedAbilities] }
| { "_Trigger": "WhenAnAbilityIsActivated", "args": ActivatedAbilities }
| { "_Trigger": "WhenAPermanentIsTappedForMana", "args": Permanents }
| { "_Trigger": "WhenAPermanentIsTappedForManaOfColor", "args": [Permanents, ManaProduce] }
| { "_Trigger": "WhenAPlayerTapsAPermanentForMana", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerTapsAPermanentForManaOfColor", "args": [Players, Permanents, ManaProduce] }
| { "_Trigger": "WhenAManaAbilityOfAPermanentResolves", "args": Permanents }
| { "_Trigger": "WhenAnAbilityCausesAPlayerToAddMana", "args": [Abilities, Players, ManaProduce] }
| { "_Trigger": "WhenAPlayerSetsASchemeInMotion", "args": [Players, Schemes] }
| { "_Trigger": "WhenAPermanentBecomesAttachedToAPermanent", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPermanentBecomesUnattachedFromAPermanent", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPlayerClaimsThePrizeOfAnAttraction", "args": Players }
| { "_Trigger": "WhenAPlayerOpensAnAttraction", "args": Players }
| { "_Trigger": "WhenAPlayerVisitsAnAttraction", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerRollsToVisitTheirAttractions", "args": Players }
| { "_Trigger": "WhenASpellBecomesTheTargetOfASpellOrAbility", "args": [Spells, SpellsAndAbilities] }
| { "_Trigger": "WhenAPlayerCastsASpellWithANumberOfTargets", "args": [Players, Spells, Comparison] }
| { "_Trigger": "WhenAPlayerCastsASpell", "args": [Players, Spells] }
| { "_Trigger": "WhenAPlayerCastsASpellThatTargetsAnyNumberOfPermanents", "args": [Players, Spells, Permanents] }
| { "_Trigger": "WhenAPlayerCastsTheirNthSpellInATurn", "args": [Players, Comparison, Spells] }
| { "_Trigger": "WhenASpellIsCast", "args": Spells }
| { "_Trigger": "WhenTheNthSpellIsCastInATurn", "args": [Spells, Comparison] }
| { "_Trigger": "WhenAPlayerCastsASpellFromAnywhereOtherThanTheirHand", "args": [Players, Spells] }
| { "_Trigger": "WhenAPlayerCastsASpellOrActivatesAnAbility", "args": [Players, Spells, ActivatedAbilities] }
| { "_Trigger": "WhenAPermanentEnteringTheBattlefieldCausesAnAbilityToTrigger", "args": Permanents }
| { "_Trigger": "WhenAPermanentEnteringTheBattlefieldUnderAPlayersControlCausesItsAbilityToTrigger", "args": [Permanents, Players] }
| { "_Trigger": "WhenAPermanentAttackingCausesItsAbilityToTrigger", "args": Permanents }
| { "_Trigger": "WhenAPermanentIsChampionedWithAPermanent", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPlayerClashes", "args": Players }
| { "_Trigger": "WhenAPlayerClashesAndWins", "args": Players }
| { "_Trigger": "WhenAClassBecomesLevel", "args": [Permanents, GameNumber] }
| { "_Trigger": "WhenAPlayerCommitsACrime", "args": Players }
| { "_Trigger": "WhenAPlayerCollectsEvidence", "args": Players }
| { "_Trigger": "WhenAPlayerConjuresAnyNumberOfOtherCards", "args": Players }
| { "_Trigger": "WhenAPlayerConjuresAnyNumberOfCards", "args": Players }
| { "_Trigger": "WhenAPlayerCopiesASpell", "args": [Players, Spells] }
| { "_Trigger": "WhenASpellIsCountered", "args": Spells }
| { "_Trigger": "WhenASpellOrAbilityCountersASpell", "args": [SpellsAndAbilities, Spells] }
| { "_Trigger": "WhenAPermanentIsExiledFromTheBattlefieldWhileAPlayerIsActivatingACraftAbility", "args": [Permanents, Players] }
| { "_Trigger": "WhenAPlayerCreatesAToken", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerCreatesAnyNumberOfTokensForTheFirstTimeEachTurn", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerCreatesAnyNumberOfTokens", "args": [Players, Permanents] }
| { "_Trigger": "WhenAVehicleBecoemsCrewedForTheFirstTimeEachTurn", "args": Permanents }
| { "_Trigger": "WhenAVehicleBecoemsCrewed", "args": Permanents }
| { "_Trigger": "WhenACreatureCrewsAVehicle", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPlayerDoesntPayAPermanentsCumulativeUpkeepCost", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerPaysAPermanentsCumulativeUpkeepCost", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPermanentsCumulativeUpkeepCostIsPaid", "args": Permanents }
| { "_Trigger": "WhenAPlayerCyclesACard", "args": [Players, CardsInHand] }
| { "_Trigger": "WhenAPlayerCyclesACardForTheFirstTimeEachTurn", "args": [Players, CardsInHand] }
| { "_Trigger": "WhenAPlayerCyclesOrDiscardsACard", "args": [Players, CardsInHand] }
| { "_Trigger": "WhenAPlayerDiscardsACard", "args": [Players, CardsInHand] }
| { "_Trigger": "WhenAPlayerDiscardsAnyNumberOfCards", "args": [Players, CardsInHand] }
| { "_Trigger": "WhenAPlayerDiscardsAnyNumberOfCardsForTheFirstTimeEachTurn", "args": [Players, CardsInHand, Players] }
| { "_Trigger": "WhenASpellOrAbilityCausesAPlayerToDiscardACard", "args": [SpellsAndAbilities, Players, CardsInHand] }
| { "_Trigger": "WhenASpellOrAbilityCausesAPlayerToDiscardAnyNumberOfCards", "args": [SpellsAndAbilities, Players] }
| { "_Trigger": "WhenAnyNumberOfPlayersDiscardAnyNumberOfCards", "args": [Players, CardsInHand] }
| { "_Trigger": "WhenDayBecomesNightOrNightBecomesDay" }
| { "_Trigger": "WhenACreatureDealsCombatDamage", "args": Permanents }
| { "_Trigger": "WhenACreatureDealsCombatDamageToAPermanent", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenACreatureDealsCombatDamageToAPlayer", "args": [Permanents, Players] }
| { "_Trigger": "WhenACreatureDealsCombatDamageToAPlayerForTheFirstTimeEachTurn", "args": [Permanents, Players] }
| { "_Trigger": "WhenACreatureDealsCombatDamageToAnyNumberOfPermanents", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPermanentDealsAnAmountDamageToAPlayer", "args": [Permanents, Comparison, Players] }
| { "_Trigger": "WhenAPermanentDealsDamage", "args": Permanents }
| { "_Trigger": "WhenAPermanentDealsDamageToAPermanent", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPermanentDealsDamageToAPlayer", "args": [Permanents, Players] }
| { "_Trigger": "WhenAPermanentDealsAnAmountDamage", "args": [Permanents, Comparison] }
| { "_Trigger": "WhenAPermanentDealsDamageToAnyNumberOfPermanents", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPermanentDealsDamageToAnyNumberOfPlayersForTheFirstTimeEachTurn", "args": [Permanents, Players] }
| { "_Trigger": "WhenAPermanentIsDealtAnAmountOfDamage", "args": [Permanents, Comparison] }
| { "_Trigger": "WhenAPermanentIsDealtCombatDamage", "args": Permanents }
| { "_Trigger": "WhenAPermanentIsDealtDamage", "args": Permanents }
| { "_Trigger": "WhenAPermanentIsDealtNoncombatDamage", "args": Permanents }
| { "_Trigger": "WhenAPermanentIsDealtDamageForTheFirstTimeEachTurn", "args": Permanents }
| { "_Trigger": "WhenAPermanentIsDealtExcessDamage", "args": Permanents }
| { "_Trigger": "WhenAPermanentIsDealtExcessNoncombatDamage", "args": Permanents }
| { "_Trigger": "WhenAPlayerIsDealtCombatDamage", "args": Players }
| { "_Trigger": "WhenAPlayerIsDealtDamage", "args": Players }
| { "_Trigger": "WhenAPlayerIsDealtNoncombatDamage", "args": Players }
| { "_Trigger": "WhenASourceDealsAnAmountOfDamageToAPermanent", "args": [DamageSources, Comparison, Permanents] }
| { "_Trigger": "WhenASourceDealsAnAmountOfDamageToAPlayer", "args": [DamageSources, Comparison, Players] }
| { "_Trigger": "WhenASourceDealsDamage", "args": DamageSources }
| { "_Trigger": "WhenASourceDealsDamageToAPermanent", "args": [DamageSources, Permanents] }
| { "_Trigger": "WhenASourceDealsNoncombatDamageToAPermanent", "args": [DamageSources, Permanents] }
| { "_Trigger": "WhenASourceDealsDamageToAPlayer", "args": [DamageSources, Players] }
| { "_Trigger": "WhenASourceDealsDamageToAnyNumberOfPlayersAndOrPermanents", "args": [DamageSources, Players, Permanents] }
| { "_Trigger": "WhenASourceDealsNoncombatDamageToAPlayer", "args": [DamageSources, Players] }
| { "_Trigger": "WhenASpellDealsDamage", "args": Spells }
| { "_Trigger": "WhenASpellDealsDamageToAPermanent", "args": [Spells, Permanents] }
| { "_Trigger": "WhenASpellDealsDamageToAPlayer", "args": [Spells, Players] }
| { "_Trigger": "WhenAnyNumberOfCreaturesAPlayerControlsDealCombatDamageToAnyNumberOfPlayers", "args": [Permanents, Players, Players] }
| { "_Trigger": "WhenAnyNumberOfCreaturesDealCombatDamageToAPermanent", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAnyNumberOfCreaturesDealCombatDamageToAPlayer", "args": [Permanents, Players] }
| { "_Trigger": "WhenAnyNumberOfCreaturesDealCombatDamageToAnyNumberOfPlayers", "args": [Permanents, Players] }
| { "_Trigger": "WhenAnyNumberOfCreaturesDealDamageToAPlayer", "args": [Permanents, Players] }
| { "_Trigger": "WhenAnyNumberOfPermanentsAreDealtExcessNoncombatDamage", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfPermanentsDealDamageToAnyNumberOfPlayers", "args": [Permanents, Players] }
| { "_Trigger": "WhenPlayersAreDealtCombatDamage", "args": Players }
| { "_Trigger": "WhenASpellOrAbilityDestroysAPermanent", "args": [SpellsAndAbilities, Permanents] }
| { "_Trigger": "WhenAPermanentIsDestroyed", "args": Permanents }
| { "_Trigger": "WhenACreatureIsDevoured", "args": Permanents }
| { "_Trigger": "WhenAPlayerDiscovers", "args": Players }
| { "_Trigger": "WhenAPlayerDrawsASpecificCard", "args": [Players, Cards] }
| { "_Trigger": "WhenAPlayerDrawsARevealedCard", "args": [Players, Cards] }
| { "_Trigger": "WhenAPlayerRevealsFirstCardDrawn", "args": [Players, Cards] }
| { "_Trigger": "WhenAPlayerDrawsACardExceptTheFirstCardDuringTheirDrawStep", "args": Players }
| { "_Trigger": "WhenAPlayerDrawsTheirNthCardEachTurn", "args": [Players, Comparison] }
| { "_Trigger": "WhenAPlayerDrawsACardDuringTheirTurn", "args": Players }
| { "_Trigger": "WhenAPlayerDrawsTheirNthCardDuringTheirTurn", "args": [Players, Comparison] }
| { "_Trigger": "WhenAPlayerDrawsACard", "args": Players }
| { "_Trigger": "WhenAPlayerDrawsTheirNthCardDuringTheirDrawStep", "args": [Players, Comparison] }
| { "_Trigger": "WhenAPlayerCompletesADungeon", "args": Players }
| { "_Trigger": "WhenAnEchoCostOfAPermanentIsPaid", "args": Permanents }
| { "_Trigger": "WhenAPlayerGetsEnergy", "args": Players }
| { "_Trigger": "WhenACardIsPutIntoAGraveyardFromAnywhereOtherThanTheBattlefield", "args": [Cards, Players] }
| { "_Trigger": "WhenACardIsPutIntoAPlayersGraveyardFromAnywhere", "args": [Cards, Players] }
| { "_Trigger": "WhenAnyNumberOfCardsArePutIntoAPlayersGraveyardFromAnywhere", "args": [Cards, Players] }
| { "_Trigger": "WhenAnyNumberOfCardsArePutIntoAPlayersGraveyardFromAnywhereForTheFirstTimeEachTurn", "args": [Cards, Players] }
| { "_Trigger": "WhenASpellOrAbilityCausesAPermanentToBePutIntoAPlayersGraveyard", "args": [SpellsAndAbilities, Permanents, Players] }
| { "_Trigger": "WhenAPermanentDies", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfCreaturesOrPlaneswalkersDie", "args": Permanents }
| { "_Trigger": "WhenAPermanentIsPutIntoAPlayersGraveyard", "args": [Permanents, Players] }
| { "_Trigger": "WhenAnyNumberOfPermanentsArePutIntoAPlayersGraveyards", "args": [Permanents, Players] }
| { "_Trigger": "WhenACardIsPutIntoAPlayersGraveyardFromTheirHand", "args": [Cards, Players] }
| { "_Trigger": "WhenACardIsPutIntoAPlayersGraveyardFromTheirLibrary", "args": [Cards, Players] }
| { "_Trigger": "WhenAnyNumberOfCardsArePutIntoAPlayersGraveyardFromTheirLibrary", "args": [Cards, Players] }
| { "_Trigger": "WhenAGraveyardCardIsPutIntoHand", "args": CardsInGraveyards }
| { "_Trigger": "WhenASpecificCardIsPutIntoAPlayersHandFromTheirLibrary", "args": [CardsInHand, Players] }
| { "_Trigger": "WhenAnyNumberOfCardsArePutIntoAPlayersLibraryFromAnywhere", "args": Players }
| { "_Trigger": "WhenAPlayerExpendsAnAmount", "args": [Players, Comparison] }
| { "_Trigger": "WhenAPlayerGivesAGift", "args": Players }
| { "_Trigger": "WhenACardBecomesPlotted", "args": CardsInHand }
| { "_Trigger": "WhenAPlayerRollsADie", "args": Players }
| { "_Trigger": "WhenAPlayerRollsADiesHighestNaturalResult", "args": Players }
| { "_Trigger": "WhenAPlayerRollsANatural20", "args": Players }
| { "_Trigger": "WhenAPlayerRollsAValueOnADie", "args": [Players, Comparison] }
| { "_Trigger": "WhenAPlayerRollsAnyNumberOfDice", "args": Players }
| { "_Trigger": "WhenAPlayerRollsTheirNthDieEachTurn", "args": [Players, GameNumber] }
| { "_Trigger": "WhenACreatureSaddlesAMount", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPlayerPlacesASticker", "args": Players }
| { "_Trigger": "WhenAPlayerPutsAStickerOnAPermanent", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerPutsAnAbilityStickerOnAPermanent", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerPutsAnArtStickerOnAPermanent", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerPutsANameStickerOnAPermanent", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerHasNumberCardsInHand", "args": [Players, Comparison] }
| { "_Trigger": "WhenAPlayerHasAnAmountOfLife", "args": [Players, Comparison] }
| { "_Trigger": "WhenAPlayerControlsAPermanent", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerControlsNoPermanents", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerControlsNumberPermanents", "args": [Players, Permanents, Comparison] }
| { "_Trigger": "WhenPlayersControlsNoPermanents", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPermanentHasNumberCountersOfType", "args": [Permanents, Comparison, CounterType] }
| { "_Trigger": "WhenAnyNumberOfPermanentsAreOnTheBattlefield", "args": Permanents }
| { "_Trigger": "WhenNoPermanentsAreOnTheBattlefield", "args": Permanents }
| { "_Trigger": "WhenAPermanentHasAbility", "args": [Permanents, CheckHasable] }
| { "_Trigger": "WhenAPermanentHasPower", "args": [Permanents, Comparison] }
| { "_Trigger": "WhenAPlayerHasNoCardsInTheirGraveyard", "args": Players }
| { "_Trigger": "WhenAColorIsntTheMostCommonOrTiedForMostCommonColorAmongPermanents", "args": [Color, Permanents] }
| { "_Trigger": "WhenACreatureAttacks", "args": Permanents }
| { "_Trigger": "WhenACreatureAttacksABattle", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenACreatureAttacksAPlaneswalker", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenACreatureAttacksAPlayer", "args": [Permanents, Players] }
| { "_Trigger": "WhenACreatureAttacksAPlayerOrPlaneswalkerTheyControl", "args": [Permanents, Players] }
| { "_Trigger": "WhenACreatureAttacksAlone", "args": Permanents }
| { "_Trigger": "WhenACreatureAttacksForTheFirstTimeEachTurn", "args": Permanents }
| { "_Trigger": "WhenANumberOfCreaturesAttack", "args": [Comparison, Permanents] }
| { "_Trigger": "WhenANumberOfCreaturesAttackAPlayer", "args": [Comparison, Permanents, Players] }
| { "_Trigger": "WhenAPlayerAttacks", "args": Players }
| { "_Trigger": "WhenAPlayerAttacksAPlaneswalkerWithAnyNumberOfCreatures", "args": [Players, Permanents, Permanents] }
| { "_Trigger": "WhenAPlayerAttacksAPlayer", "args": [Players, Players] }
| { "_Trigger": "WhenAPlayerAttacksAPlayerAndOrPlaneswalkerTheyControl", "args": [Players, Players] }
| { "_Trigger": "WhenAPlayerAttacksAPlayerWithANumberOfCreatures", "args": [Players, Players, Comparison, Permanents] }
| { "_Trigger": "WhenAPlayerAttacksAPlayerWithAnyNumberOfCreatures", "args": [Players, Players, Permanents] }
| { "_Trigger": "WhenAPlayerAttacksAnyNumberOfPlaneswalkers", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerAttacksAnyNumberOfPlayers", "args": [Players, Players] }
| { "_Trigger": "WhenAPlayerAttacksWithACreature", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerAttacksWithANumberOfCreatures", "args": [Players, Comparison, Permanents] }
| { "_Trigger": "WhenAPlayerAttacksWithASingleCreatureAndANumberOfOtherCreatures", "args": [Players, Permanents, Comparison, Permanents] }
| { "_Trigger": "WhenAPlayerAttacksWithAnyNumberOfCreatures", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerAttacksWithAnyNumberOfGroupCreatures", "args": [Players, Permanents, GroupFilter] }
| { "_Trigger": "WhenAPlayerAttacksWithAnyNumberOfGroupCreaturesForTheFirstTimeEachTurn", "args": [Players, Permanents, GroupFilter] }
| { "_Trigger": "WhenAPlayerIsAttacked", "args": Players }
| { "_Trigger": "WhenAnyNumberOfPlayersAreAttacked", "args": Players }
| { "_Trigger": "WhenASingleCreatureAndANumberOfOtherCreaturesAttack", "args": [Permanent, Comparison, Permanents] }
| { "_Trigger": "WhenASingleCreatureAndANumberOfOtherCreaturesAttackDifferentPlayers", "args": [Permanent, Comparison, Permanents] }
| { "_Trigger": "WhenASingleCreatureAttacksWithExactlyOneOtherCreature", "args": Permanent }
| { "_Trigger": "WhenAllCreaturesAttack", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfCreaturesAttack", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfCreaturesAttackAPlayer", "args": [Permanents, Players] }
| { "_Trigger": "WhenAnyNumberOfCreaturesAttackAPlayerOrPlaneswalkerTheyControl", "args": [Permanents, Players] }
| { "_Trigger": "WhenAnyNumberOfCreaturesAttackAnyNumberOfPlayers", "args": [Permanents, Players] }
| { "_Trigger": "WhenACreatureEnlistsACreature", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenACreatureAttacksAPlayerAndIsntBlocked", "args": [Permanents, Players] }
| { "_Trigger": "WhenACreatureAttacksAndIsntBlocked", "args": Permanents }
| { "_Trigger": "WhenACreatureBecomesBlocked", "args": Permanents }
| { "_Trigger": "WhenACreatureBecomesBlockedByACreature", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenACreatureBecomesBlockedByAnyNumberOfCreatures", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenACreatureBecomesBlockedByANumberOfCreatures", "args": [Permanents, Comparison, Permanents] }
| { "_Trigger": "WhenACreatureBlocks", "args": Permanents }
| { "_Trigger": "WhenACreatureBlocksACreature", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenACreatureBlocksANumberOfCreatures", "args": [Permanents, Comparison, Permanents] }
| { "_Trigger": "WhenACreatureBlocksAnyNumberOfCreatures", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenANumberOfCreaturesAttacksAPlayerAndArentBlocked", "args": [Comparison, Permanents, Players] }
| { "_Trigger": "WhenAnyNumberOfCreaturesBecomeBlocked", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfCreaturesBlock", "args": Permanents }
| { "_Trigger": "AtTheEndOfCombat" }
| { "_Trigger": "AtTheEndOfTheFirstCombat" }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldOrTheCreatureItHauntsDies", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfPermanentsEnterTheBattlefieldUnderAPlayersControl", "args": [Permanents, Players] }
| { "_Trigger": "WhenAnyNumberOfPermanentsEnterTheBattlefield", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefield", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldAttachedToAPermanent", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldAttacking", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldDuringTheDeclareAttacksStep", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldFromAPlayersGraveyard", "args": [Permanents, Players] }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldFromAPlayersHand", "args": [Permanents, Players] }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldFromAnywhereOtherThanAGraveyardOrExile", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldFromAnywhereOtherThanTheirHand", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldFromExile", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldFromExileOrWasCastFromExile", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldTapped", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldTransformed", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldUnderAPlayersControl", "args": [Permanents, Players] }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldUnderAPlayersControlWithoutBeingPlayed", "args": [Permanents, Players] }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldUntapped", "args": Permanents }
| { "_Trigger": "WhenAPermanentEntersTheBattlefieldWithAnyCounters", "args": Permanents }
| { "_Trigger": "WhenDamageThatWouldBeDealtToAPlayerIsPrevented", "args": Players }
| { "_Trigger": "WhenAPlayerProliferates", "args": Players }
| { "_Trigger": "WhenASpellOrAbilityIsPutOntoTheStack", "args": SpellsAndAbilities }
| { "_Trigger": "WhenAPermanentIsPutIntoTheCommandZone", "args": Permanents }
| { "_Trigger": "WhenACardIsPutIntoTheCommandZoneFromAnywhere", "args": Cards }
| { "_Trigger": "WhenAGraveyardCardLeaves", "args": CardsInGraveyards }
| { "_Trigger": "WhenAnyNumberOfGraveyardCardsLeave", "args": CardsInGraveyards }
| { "_Trigger": "WhenAPermanentLeavesTheBattlefield", "args": Permanents }
| { "_Trigger": "WhenAPermanentLeavesTheBattlefieldWithoutDying", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfPermanentsLeaveTheBattlefield", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfPermanentsLeaveTheBattlefieldWithoutDying", "args": Permanents }
| { "_Trigger": "WhenAPlayerGainsControlOfAPermanentFromAPlayer", "args": [Players, Permanents, Players] }
| { "_Trigger": "WhenAPlayerLosesControlOfAPermanent", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPermanentEvolves", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfPermanentsAndOrGraveyardCardsArePutIntoExile", "args": [Permanents, CardsInGraveyards] }
| { "_Trigger": "WhenAPermanentIsExiled", "args": Permanents }
| { "_Trigger": "WhenACardIsPutIntoExile", "args": Cards }
| { "_Trigger": "WhenAnyNumberOfCardsArePutIntoExile", "args": Cards }
| { "_Trigger": "WhenAnyNumberOfCardsArePutIntoExileFromAPlayersGraveyard", "args": [Cards, Players] }
| { "_Trigger": "WhenAnyNumberOfCardsArePutIntoExileFromAPlayersGraveyardAndOrLibrary", "args": [Cards, Players] }
| { "_Trigger": "WhenAnyNumberOfGenericCardsArePutIntoExileFromAPlayersHand", "args": Players }
| { "_Trigger": "WhenASpellOrAbilityExilesAnyNumberOfPermanents", "args": [SpellsAndAbilities, Permanents] }
| { "_Trigger": "WhenAPlayerPaysLife", "args": Players }
| { "_Trigger": "WhenAPlayerPaysLifeToActivateAnAbility", "args": [Players, ActivatedAbilities] }
| { "_Trigger": "WhenAPlayerForages", "args": Players }
| { "_Trigger": "WhenAPlayerInvestigatesForTheFirstTimeEachTurn", "args": Players }
| { "_Trigger": "WhenAPlayerInvestigates", "args": Players }
| { "_Trigger": "WhenAPlayerKicksASpell", "args": [Players, Spells] }
| { "_Trigger": "WhenACreatureMentorsACreature", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPlayerMillsASpecificCard", "args": [Players, Cards] }
| { "_Trigger": "WhenAPlayerMillsAnyNumberOfSpecificCards", "args": [Players, Cards] }
| { "_Trigger": "WhenAPlayerMillsAnyNumberOfCards", "args": Players }
| { "_Trigger": "WhenAnyNumberOfSpecificCardsAreMilled", "args": Cards }
| { "_Trigger": "WhenAPlayerLosesLife", "args": Players }
| { "_Trigger": "WhenAPlayerLosesLifeDuringTheirTurn", "args": Players }
| { "_Trigger": "WhenAPlayerLosesLifeForTheFirstTimeEachTurn", "args": Players }
| { "_Trigger": "WhenAnyNumberOfPlayersEachLoseAnAmountOfLife", "args": [Players, Comparison] }
| { "_Trigger": "WhenAnyNumberOfPlayersLoseLife", "args": Players }
| { "_Trigger": "WhenAPermanentExploitsAPermanent", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPermanentExplores", "args": Permanents }
| { "_Trigger": "WhenAPermanentExploresACardOfType", "args": [Permanents, Cards] }
| { "_Trigger": "WhenAPermanentFights", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfPermanentsFight", "args": Permanents }
| { "_Trigger": "WhenAPlayerWinsACoinFlip", "args": Players }
| { "_Trigger": "WhenAPlayerLosesACoinFlip", "args": Players }
| { "_Trigger": "WhenAPlayerForetellsACard", "args": Players }
| { "_Trigger": "WhenAPlayerGainsLife", "args": Players }
| { "_Trigger": "WhenAPlayerGainsLifeDuringTheirTurn", "args": Players }
| { "_Trigger": "WhenAPlayerGainsLifeForTheFirstTimeEachTurn", "args": Players }
| { "_Trigger": "WhenASpellCausesAPlayerToGainLife", "args": [Spells, Players] }
| { "_Trigger": "WhenAPlayerLosesTheGame", "args": Players }
| { "_Trigger": "WhenAPlayerManifestsDread", "args": Players }
| { "_Trigger": "WhenAPermanentBecomesMonstrous", "args": Permanents }
| { "_Trigger": "WhenACreatureMutates", "args": Permanents }
| { "_Trigger": "WhenAPermanentPhasesOut", "args": Permanents }
| { "_Trigger": "WhenAPermanentPhasesIn", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfPermanentsPhaseOut", "args": Permanents }
| { "_Trigger": "WhenAPlaneHasNumberCountersOfType", "args": [Planes, Comparison, CounterType] }
| { "_Trigger": "WhenAPlayerEncountersAPhenomenon", "args": [Players, Phenomena] }
| { "_Trigger": "WhenAPlayerPlaneswalksAwayFromAPlane", "args": [Players, Planes] }
| { "_Trigger": "WhenAPlayerPlaneswalksToAPlane", "args": [Players, Planes] }
| { "_Trigger": "WhenAPlayerRollsABlankOnThePlanarDie", "args": Players }
| { "_Trigger": "WhenAPlayerRollsThePlanarDie", "args": Players }
| { "_Trigger": "WhenChaosEnsues" }
| { "_Trigger": "WhenAPlayerPlaysACard", "args": [Players, Cards] }
| { "_Trigger": "WhenAPlayerPlaysACardFromExile", "args": [Players, CardsInExile] }
| { "_Trigger": "WhenAPlayerPlaysALand", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerPlaysALandFromAmongCardsInExile", "args": [Players, Permanents, CardsInExile] }
| { "_Trigger": "WhenAPlayerPlaysALandFromExile", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerPlaysALandFromAnywhereOtherThanTheirHand", "args": [Players, Permanents] }
| { "_Trigger": "WhenACounterOfTypeIsPutOnAPermanent", "args": [CounterType, Permanents] }
| { "_Trigger": "WhenAPlayerPutsACounterOfTypeOnAPermanent", "args": [Players, CounterType, Permanents] }
| { "_Trigger": "WhenAPlayerPutsAnyNumberOfCountersOfTypeOnAPermanent", "args": [Players, CounterType, Permanents] }
| { "_Trigger": "WhenAPlayerPutsAnyNumberOfCountersOfTypeOnAnyNumberOfPermanents", "args": [Players, CounterType, Permanents] }
| { "_Trigger": "WhenAPlayerPutsAnyNumberOfCountersOnAPermanent", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerPutsCountersOnAPlayer", "args": [Players, Players] }
| { "_Trigger": "WhenAnyNumberOfCountersArePutOnAPermanent", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfCountersArePutOnASpecificPermanentForTheFirstTimeEachTurn", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfCountersAreRemovedFromAPermanent", "args": Permanents }
| { "_Trigger": "WhenAnyNumberOfCountersOfTypeArePutOnAPermanent", "args": [CounterType, Permanents] }
| { "_Trigger": "WhenAnyNumberOfCountersOfTypeArePutOnASpecificPermanentForTheFirstTimeEachTurn", "args": [CounterType, Permanents] }
| { "_Trigger": "WhenAnyNumberOfCountersOfTypeArePutOnAnyNumberOfPermanents", "args": [CounterType, Permanents] }
| { "_Trigger": "WhenTheNthCounterOfTypeIsPutOnAPermanent", "args": [CounterType, Permanents, GameNumber] }
| { "_Trigger": "WhenAPlayerPutsAPermanentOnTheBattlefield", "args": [Players, Permanents] }
| { "_Trigger": "WhenACounterOfTypeIsRemovedFromAnExiledCard", "args": [CounterType, CardsInExile] }
| { "_Trigger": "WhenAPlayerRemovesACounterOfTypeFromAnExiledCard", "args": [Players, CounterType, CardsInExile] }
| { "_Trigger": "WhenTheLastCounterOfTypeIsRemovedFromAnExiledCard", "args": [CounterType, CardsInExile] }
| { "_Trigger": "WhenACounterOfTypeIsRemovedFromAPermanent", "args": [CounterType, Permanents] }
| { "_Trigger": "WhenAPlayerRemovesTheLastCounterOfTypeFromAPermanent", "args": [Players, CounterType, Permanents] }
| { "_Trigger": "WhenAnyNumberOfCountersOfTypeAreRemovedFromAPermanent", "args": [CounterType, Permanents] }
| { "_Trigger": "WhenTheLastCounterOfTypeIsRemovedFromAPermanent", "args": [CounterType, Permanents] }
| { "_Trigger": "WhenACreatureBecomesRenowned", "args": Permanents }
| { "_Trigger": "WhenAPermanentIsReturnedToAPlayersHand", "args": [Permanents, Players] }
| { "_Trigger": "WhenAnyNumberOfPermanentsAreReturnedToHand", "args": Permanents }
| { "_Trigger": "WhenAPlayerFullyUnlocksARoom", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerUnlocksADoor", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerChoosesARingBearer", "args": Players }
| { "_Trigger": "WhenTheRingTemptsAPlayer", "args": Players }
| { "_Trigger": "WhenAPlayerSacrificesAPermanent", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerSacrificesAPermanentForEmerge", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPlayerSacrificesAnyNumberOfPermanentsToActivateAnAbility", "args": [Players, ActivatedAbilities] }
| { "_Trigger": "WhenAPlayerSacrificesAnyNumberOfPermanents", "args": Players }
| { "_Trigger": "WhenAPermanentIsSacrificed", "args": Permanents }
| { "_Trigger": "WhenAPermanentBecomesSaddledForTheFirstTimeInATurn", "args": Permanents }
| { "_Trigger": "WhenTheFinalChapterOfASagaTriggers", "args": Permanents }
| { "_Trigger": "WhenTheFinalChapterOfASagaResolves", "args": Permanents }
| { "_Trigger": "WhenAPlayerScrys", "args": Players }
| { "_Trigger": "WhenAPlayerChoosesToPutAnyCardsOnTheBottomOfTheirLibraryWhileScrying", "args": Players }
| { "_Trigger": "WhenAPlayerSearchesTheirLibrary", "args": Players }
| { "_Trigger": "WhenAPlayerSeeksAnyNumberOfCards", "args": Players }
| { "_Trigger": "WhenASpellOrAbilityCausesAPlayerToShuffleTheirLibrary", "args": [SpellsAndAbilities, Players] }
| { "_Trigger": "WhenASpellOrAbilityCausesItsControllerToShuffleTheirLibrary", "args": SpellsAndAbilities }
| { "_Trigger": "WhenAPlayerShufflesTheirLibrary", "args": Players }
| { "_Trigger": "WhenAPlayerSolvesACase", "args": Players }
| { "_Trigger": "WhenACreatureSpecializes", "args": Permanents }
| { "_Trigger": "WhenAGraveyardCardSpecializes", "args": CardsInGraveyards }
| { "_Trigger": "WhenCardSpecializes", "args": SingleCard }
| { "_Trigger": "WhenAPlayerSurveils", "args": Players }
| { "_Trigger": "WhenAPlayerSurveilsForTheFirstTimeEachTurn", "args": Players }
| { "_Trigger": "WhenAnyNumberOfPermanentsBecomeTapped", "args": Permanents }
| { "_Trigger": "WhenAPermanentBecomesTapped", "args": Permanents }
| { "_Trigger": "WhenAPermanentBecomesTappedForTheFirstTimeEachTurn", "args": Permanents }
| { "_Trigger": "WhenAPlayerTapsAPermanent", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPermanentBecomesTheTargetOfASpell", "args": [Permanents, Spells] }
| { "_Trigger": "WhenAPermanentBecomesTheTargetOfASpellOrAbility", "args": [Permanents, SpellsAndAbilities] }
| { "_Trigger": "WhenAPermanentBecomesTheTargetOfASpellOrAbilityForTheFirstTimeEachTurn", "args": [Permanents, SpellsAndAbilities] }
| { "_Trigger": "WhenAPermanentBecomesTheTargetOfAnAbility", "args": [Permanents, Abilities] }
| { "_Trigger": "WhenAPlayerBecomesTheTargetOfAnAbility", "args": [Players, Abilities] }
| { "_Trigger": "WhenAPlayerBecomesTheTargetOfASpell", "args": [Players, Spells] }
| { "_Trigger": "WhenAPlayerBecomesTheTargetOfASpellOrAbility", "args": [Players, SpellsAndAbilities] }
| { "_Trigger": "WhenAPlayerChoosesTargetsForASpellOrAbility", "args": [Players, SpellsAndAbilities] }
| { "_Trigger": "WhenAnyNumberOfPlayersAndOrPermanentsBecomeTheTargetOfASpellOrAbility", "args": [Players, Permanents, SpellsAndAbilities] }
| { "_Trigger": "WhenAPlayerBecomesTheMonarch", "args": Players }
| { "_Trigger": "WhenAPermanentTrains", "args": Permanents }
| { "_Trigger": "WhenAPermanentTransformsFromIntoAPermanent", "args": [Permanents, Permanents] }
| { "_Trigger": "WhenAPermanentTransforms", "args": Permanents }
| { "_Trigger": "AtTheBeginningOfCombatDuringAPlayersTurn", "args": Players }
| { "_Trigger": "AtTheBeginningOfCombat" }
| { "_Trigger": "AtTheBeginningOfTheGame" }
| { "_Trigger": "WhenAPlayerExertsACreature", "args": [Players, Permanents] }
| { "_Trigger": "AtTheBeginningOfAPlayersDrawStep", "args": Players }
| { "_Trigger": "AtTheBeginningOfAPlayersEndStep", "args": Players }
| { "_Trigger": "AtTheBeginningOfAPlayersMainPhases", "args": Players }
| { "_Trigger": "AtTheBeginningOfAPlayersFirstMainPhase", "args": Players }
| { "_Trigger": "AtTheBeginningOfAPlayersSecondMainPhase", "args": Players }
| { "_Trigger": "AtTheBeginningOfAPlayersPostcombatMainPhase", "args": Players }
| { "_Trigger": "AtTheBeginningOfTheFirstUpkeepOfTheGame" }
| { "_Trigger": "AtTheBeginningOfAPlayersFirstUpkeepOfTheGame", "args": Players }
| { "_Trigger": "AtTheBeginningOfAPlayersFirstUpkeepEachTurn", "args": Players }
| { "_Trigger": "AtTheBeginningOfAPlayersUpkeep", "args": Players }
| { "_Trigger": "WhenAPlayerUntapsAnyNumberOfPermanentDuringTheirUntapStep", "args": [Players, Permanents] }
| { "_Trigger": "WhenAPermanentBecomesUntapped", "args": Permanents }
| { "_Trigger": "WhenPlayersFinishVoting" }
| { "_Trigger": "WhenAPermanentIsTurnedFaceUp", "args": Permanents }
| { "_Trigger": "WhenAPlayerTurnsAPermanentFaceUp", "args": [Players, Permanents] }
| { "_Trigger": "Or", "args": Array<Trigger> }
| { "_Trigger": "If", "args": [Condition, Trigger] };
type UnspentMana =
| { "_UnspentMana": "AnyUnspentMana" }
| { "_UnspentMana": "UnspentGreenMana" }
| { "_UnspentMana": "UnspentRedMana" };
type ValueAction =
| { "_ValueAction": "ValueAction", "args": [GameRange, Array<Action>] };
type Vanguard =
| { "_OracleCard": "Vanguard", Name: string, Typeline: OracleTypeline, Rules: Array<Rule>, LifeModifier: number, HandModifier: number, };
type WasAwakened =
| Actions;
type WasKicked =
| Actions;
type WasntAwakened =
| Actions;
type WasntKicked =
| Actions;

