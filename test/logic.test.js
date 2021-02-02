// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { movableTiles } from '../puzzles/puzzle-utils.js';
import { getArrayOfRandomNumbers } from '../puzzles/puzzle-render-utils.js';

import { checkIfMovable } from '../puzzles/puzzle-utils.js';

const test = QUnit.test;

test('test movableTile function for true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    const tiles = 6;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkIfMovable(tiles);
    
    expect.equal(actual, expected);
});

test('It should return an array of random numbers equal to the length of the given array, with no number higher than the highest index in the given array, and no number repeated', (expect) => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const generatedArray = getArrayOfRandomNumbers(testArray);
    
    // compare length to given
    const expected1 = true;
    const actual1 = generatedArray.length === testArray.length + 1;

    // check that all values lower than length of given
    const expected2 = true;
    const actual2 = generatedArray.every(n => n <= testArray.length + 1);

    // check that no numbers are equal to each other
    const expected3 = true;
    const actual3 = generatedArray.reduce((a, b) => a !== b);
    
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});
