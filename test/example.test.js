// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from '../utils.js';
const test = QUnit.test;

test('should return true for yes-y strings', assert => {
    //Arrange
    const yesString = isYes('yes');
    const expected = true;
    //Act
    const actual = yesString;
    //Expect
    assert.equal(actual, expected);
    
});

test('should return false for non yes-y string', expect => {
    //Arrange
    const no = 'no';
    const expected = false;
    //Act
    const actual = isYes(no);
    //Expect
    expect.equal(actual, expected);
});
