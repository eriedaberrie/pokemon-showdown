export const Formats: FormatList = [
  {
    section: 'Uranium Singles',
  },
  {
    name: '[Gen 6] Gamma',
    mod: 'gen6',
    ruleset: ['Standard', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod', 'Uranium Pokedex'],
    banlist: ['Uber', 'Shadow Tag', 'Belly Drum', 'Spore', 'Dark Void', 'Geomancy'],
  },
  {
    name: '[Gen 6] Beta',
    mod: 'gen6',
    ruleset: ['[Gen 6] Gamma'],
    banlist: ['Gamma', 'Arena Trap'],
  },
  {
    name: '[Gen 6] Alpha',
    mod: 'gen6',
    ruleset: ['[Gen 6] Beta'],
    banlist: ['Beta'],
  },
  {
    name: '[Gen 6] Ubers',
    mod: 'gen6',
    ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Uranium Pokedex'],
  },
  {
    name: '[Gen 6] NatDex OU',
    mod: 'gen6',
    ruleset: ['Standard', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod'],
    banlist: ['CanonUber', 'Uber', 'Soul Dew', 'Shadow Tag'],
  },
  {
    name: '[Gen 6] NatDex AG',
    mod: 'gen6',
    ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
  },
	{
		name: "[Gen 6] Custom Game",

		mod: 'gen6',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

  {
    section: 'Uranium Doubles',
    column: 2,
  },
  {
    name: '[Gen 6] Doubles Uranium',
    mod: 'gen6',
    gameType: 'doubles',
    ruleset: ['Standard Doubles', 'Nuclear Clause Mod', 'Uranium Pokedex'],
    banlist: ['DUber'],
  },
  {
    name: '[Gen 6] NatDex Doubles Ubers',
    mod: 'gen6',
    gameType: 'doubles',
    ruleset: ['Standard Doubles', 'Nuclear Clause Mod'],
    banlist: [],
  },
	{
		name: "[Gen 6] Doubles Custom Game",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
  
  {
    section: 'Cursed',
    column: 2,
  },
  {
    name: '[Gen 8] National Dex',
    mod: 'gen8',
    ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod',
      'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darkrai', 'Darmanitan-Galar',
			'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega',
			'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian',
			'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
      'Uber',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag',
		],
  },
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
];