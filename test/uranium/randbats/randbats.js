/**
 * Tests for Gen 6 randomized formats
 */
'use strict';

const assert = require('../../assert');
const {testNotBothMoves, testAlwaysHasMove, testHiddenPower, testSet} = require('../../random-battles/tools');

describe('[Gen 6] Uranium Random Battle', () => {
	const options = {format: 'gen6uraniumrandombattle'};

	it('should enforce STAB properly', () => {
		testAlwaysHasMove('gyaradosnuclear', options, 'radioacid');
	});
});
