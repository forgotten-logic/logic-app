// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { movableTiles } from '../puzzles/puzzle.js';

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

test('test movableTile function for true', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    const tiles = 6;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = movableTiles(tiles);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
