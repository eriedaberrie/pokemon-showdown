export const Formats: FormatList = [
  {
    section: 'Uranium Singles',
  },
  {
    name: '[Gen 6 Uranium] Gamma',
    mod: 'gen6uranium',
    ruleset: ['Standard', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod'],
    banlist: ['Uber', 'Shadow Tag'],
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
    ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
  },
  {
    name: '[Gen 6 Uranium] National Dex',
    mod: 'gen6',
    ruleset: ['Standard', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod'],
    banlist: ['Uber', 'Shadow Tag'],
  },
  {
    name: '[Gen 6 Uranium] National Dex AG',
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
    ruleset: ['Standard Doubles', 'Nuclear Clause Mod'],
    banlist: ['DUber'],
  },
  {
    name: '[Gen 6 Uranium] National Dex Doubles',
    mod: 'gen6',
    gameType: 'doubles',
    ruleset: ['Standard Doubles', 'Nuclear Clause Mod'],
    banlist: ['DUber'],
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
];