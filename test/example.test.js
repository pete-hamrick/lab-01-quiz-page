// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from '../utils.js';
const test = QUnit.test;

test('should return true for yes-y strings', assert => {
    const yesString = isYes('yes');
    assert.equal(yesString, true);
});

test('should return false for non yes-y string', assert => {

});
