export const Formats: FormatList = [
  {
    section: 'Uranium Singles',
  },
  {
    name: '[Gen 6 Uranium] Gamma',
    mod: 'gen6uranium',
    ruleset: ['Standard', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod', 'Uranium Pokedex'],
    banlist: ['Uber', 'Shadow Tag', 'Belly Drum'],
  },
  {
    name: '[Gen 6 Uranium] Beta',
    mod: 'gen6uranium',
    ruleset: ['[Gen 6 Uranium] Gamma'],
    banlist: ['Gamma', 'Arena Trap'],
  },
  {
    name: '[Gen 6 Uranium] Alpha',
    mod: 'gen6uranium',
    ruleset: ['[Gen 6 Uranium] Beta'],
    banlist: ['Beta'],
  },
  {
    name: '[Gen 6 Uranium] Anything Goes',
    mod: 'gen6uranium',
    ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Uranium Pokedex'],
  },
  {
    name: '[Gen 6] National Dex',
    mod: 'gen6',
    ruleset: ['Standard', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod'],
    banlist: ['Uber', 'Soul Dew', 'Shadow Tag'],
  },
  {
    name: '[Gen 6] National Dex AG',
    mod: 'gen6',
    ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
  },
	{
		name: "[Gen 6 Uranium] Custom Game",

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
    name: '[Gen 6 Uranium] Double Battle',
    mod: 'gen6uranium',
    gameType: 'doubles',
    ruleset: ['Standard Doubles', 'Nuclear Clause Mod', 'Uranium Pokedex'],
    banlist: ['DUber'],
  },
  {
    name: '[Gen 6] National Dex Doubles',
    mod: 'gen6',
    gameType: 'doubles',
    ruleset: ['Standard Doubles', 'Nuclear Clause Mod'],
    banlist: ['DUber', 'Soul Dew', 'Dark Void'],
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
    ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod'],
  },
  {
    name: '[Gen 8] National Dex Doubles',
    mod: 'gen8',
		gameType: 'doubles',
    ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod'],
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