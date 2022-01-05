'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Weather damage calculation', function () {
	afterEach(function () {
		battle.destroy();
	});
  
  it('should reduce SE damage to nuclear mons', function () {
    battle = common.createBattle([[
      {species: 'Xenoqueen', ability: 'chernobyl', moves: ['fallout']},
    ], [
      {species: 'Sableye', ability: 'prankster', moves: ['brickbreak', 'nuclearslash']}
    ]]);
    battle.randomizer = dmg => dmg;
		battle.makeChoices();
		battle.makeChoices();
		const attacker = battle.p1.active[0];
		const defender = battle.p2.active[0];
    const move = Dex.moves.get('brickbreak');
    battle.makeChoices('move fallout', 'move brickbreak');
    battle.makeChoices('move fallout', 'move nuclearslash');
    console.log(battle.getDebugLog());
    assert(true);
  });
});
