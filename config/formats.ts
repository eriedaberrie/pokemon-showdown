export const Formats: FormatList = [
  {
    section: 'Uranium Singles',
  },
	{
		name: "[Gen 6] Uranium Random Battle",
		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
  {
    name: '[Gen 6] Gamma',
    mod: 'gen6uranium',
    ruleset: ['Standard', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod', 'Uranium Pokedex'],
    banlist: ['Uber', 'Shadow Tag', 'Belly Drum', 'Spore', 'Dark Void', 'Geomancy'],
  },
  {
    name: '[Gen 6] Beta',
    mod: 'gen6uranium',
    ruleset: ['[Gen 6] Gamma'],
    banlist: ['Gamma', 'Arena Trap'],
  },
  {
    name: '[Gen 6] Alpha',
    mod: 'gen6uranium',
    ruleset: ['[Gen 6] Beta'],
    banlist: ['Beta'],
  },
  {
    name: '[Gen 6] Ubers',
    mod: 'gen6uranium',
    ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Uranium Pokedex'],
  },
	{
		name: "[Gen 6] NatDex Random Battle",
		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
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
    section: 'Uranium OMs',
    column: 2,
  },
	{
		name: "[Gen 6] Uranium Mix and Mega",
		desc: `Mega Stones and Primal Orbs can be used on almost any Pok&eacute;mon with no Mega Evolution limit.`,

		mod: 'gen6uraniummixandmega',
		ruleset: ['Standard', 'Overflow Stat Mod', 'Uranium Pokedex', 'Nuclear Clause Mod', 'Soft Baton Pass Clause Mod'],
		banlist: ['Shadow Tag', 'Gengarite', 'Electrify', 'Spore', 'Geomancy', 'Belly Drum'],
		restricted: [],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!item.exists) continue;
        itemid = itemid.startsWith('nuclear') ? item.id.slice(0, 7) : item.id
				if (itemTable.has(itemid) && (item.megaStone || item.onPrimal)) {
					return [
						`You are limited to one of each Mega Stone and Primal Orb.`,
						`(You have more than one ${item.name.startsWith('Nuclear ') ? item.name.slice(0, 8) : item.name}.)`,
					];
				}
				itemTable.add(itemid);
			}
		},
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const item = this.dex.items.get(set.item);
			if (!item.megaEvolves && !item.onPrimal) return;
			if (species.baseSpecies === item.megaEvolves || (item.onPrimal && item.itemUser?.includes(species.baseSpecies))) {
				return;
			}
			if (this.ruleTable.isRestricted(`item:${item.id}`) || this.ruleTable.isRestrictedSpecies(species)) {
				return [`${set.species} is not allowed to hold ${item.name}.`];
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.species.get(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},

  {
    section: 'Uranium Doubles',
    column: 2,
  },
  {
    name: '[Gen 6] Doubles Uranium',
    mod: 'gen6uranium',
    gameType: 'doubles',
    ruleset: ['Standard Doubles', 'Uranium Pokedex'],
    banlist: ['DUber'],
  },
  {
    name: '[Gen 6] NatDex Doubles Ubers',
    mod: 'gen6',
    gameType: 'doubles',
    ruleset: ['Standard Doubles'],
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
      'Uber', 'Actan-Nuclear', 'Urayne-Gamma', 'Baitatao', 'Leviathao', 'Krakanao', 'Aotius', 'Mutios',
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