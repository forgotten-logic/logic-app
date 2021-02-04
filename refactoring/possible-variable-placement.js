// pretty much ignore this file for now...

// data
// currently contains: eightData, wikiLink, eightPuzzle
const movementMap = {
    9: [6, 8],
    8: [5, 7, 9],
    7: [4, 8],
    6: [3, 5, 9],
    5: [2, 4, 6, 8],
    4: [1, 5, 7],
    3: [2, 6],
    2: [1, 3, 5],
    1: [2, 4],
}; // move to data, import where needed; or keep in puzzle-utils

// puzzle.js
// currently contains: resultsDisplay, startButton
const USER = 'USER'; // import where needed
const EIGHTDATA = 'EIGHTDATA'; // import where needed

// puzzle-render-utils.js
const resultsContainer = document.getElementById('results-display'); // same element as the one declared in puzzle.js, different variable name


// app.js
// currently contains: form


// new file: game-state-utils.js ??
let solvedCount = 0;
let movesCount = 0; // indirectly used in renderResults()

// delete and define in-function ??
let user = pullFromLocStorage(USER);
const winLoseMessageEl = document.createElement('p');
const solvedEl = document.createElement('p');
const movesEl = document.createElement('p');

setInLocStorage(EIGHTDATA, eightData); // this is set globally in the render utils file; should probably be set per function if needed; it hasn't caused problems I can see, but it seems like it could represent a maintainability issue

