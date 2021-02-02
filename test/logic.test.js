// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { movableTiles } from '../puzzles/puzzle-utils.js';
import { getArrayOfRandomNumbers } from '../puzzles/puzzle-render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// test('test movableTile function for true', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
//     const tiles = 6;

//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = movableTiles(tiles);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

test('It should return an array of random numbers equal to the length of the given array, with no number higher than the highest index in the given array, and no number repeated', (expect) => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const generatedArray = getArrayOfRandomNumbers(testArray);
    console.log(generatedArray);

    // compare length to given
    const expected1 = true;
    const actual1 = generatedArray.length === testArray.length;

    // check that all values lower than length of given
    const expected2 = true;
    const actual2 = generatedArray.every(n => n < testArray.length);

    // check that no numbers are equal to each other
    const expected3 = true;
    const actual3 = generatedArray.reduce((a, b) => a !== b);
    
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});
