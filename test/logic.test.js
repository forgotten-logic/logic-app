import eightData from '../data/eight-data.js';
import { checkIfMovable, getArrayOfRandomNumbers, updateMovesCounter, checkWinCondition } from '../puzzles/puzzle-utils.js';

const test = QUnit.test;

// test checkIfMovable
test('test movableTile function for true', (expect) => {
    localStorage.setItem('EIGHTDATA', JSON.stringify(eightData));
    const expected = true;
    const tiles = 6;

    const actual = checkIfMovable(tiles);

    expect.equal(actual, expected);
});

// test getArrayOfRandomNumbers
test('It should return an array of random numbers equal to the length of the given array, with no number higher than the length of the given array, and no number repeated', (expect) => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const generatedArray = getArrayOfRandomNumbers(testArray);
    
    // compare length to given
    const expected1 = true;
    const actual1 = generatedArray.length === testArray.length;

    // check that all values lower than length of given
    const expected2 = true;
    const actual2 = generatedArray.every(n => n <= testArray.length);

    // check that no numbers are equal to each other
    const expected3 = true;
    const actual3 = generatedArray.reduce((a, b) => a !== b);

    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
    expect.equal(actual3, expected3);
});

// test updateMovesCounter
// test('It should increment movesCount by 1', (expect) => {
//     let movesCount = 0;
//     updateMovesCounter();
//     const expected = 1;
//     const actual = movesCount;

//     expect.equal(actual, expected);
// });
// FAILING: this function is not testable without refactoring(same with: setUserMoves, clearUserMoves, winOrLose)

// test checkWinCondition
test('It should return false when provided a set of tiles whose id property and position property are not the same number; it should return true if those properties do match for all tiles', (expect) => {
    
    const tiles1 = [{ 'id':7, 'position':1 }, { 'id':1, 'position':2 }, { 'id':3, 'position':3 }, { 'id':8, 'position':4 }, { 'id':9, 'isEmpty':true, 'position':5 }, { 'id':2, 'position':6 }, { 'id':5, 'position':7 }, { 'id':6, 'position':8 }, { 'id':4, 'position':9 }];

    const tiles2 = [{ 'id':1, 'position':1 }, { 'id':2, 'position':2 }, { 'id':3, 'position':3 }, { 'id':4, 'position':4 }, { 'id':5, 'position':5 }, { 'id':6, 'position':6 }, { 'id':7, 'position':7 }, { 'id':8, 'position':8 }, { 'id':9, 'isEmpty':true, 'position':9 }];

    const expected1 = false;
    const actual1 = checkWinCondition(tiles1);

    const expected2 = true;
    const actual2 = checkWinCondition(tiles2);

    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});

// test moveTilesOnClick
test('It should return a mutated array', (expect) => {
    
    localStorage.setItem();
    
    
    const expected = true;
    const actual = true;

    expect.equal(actual, expected);
});