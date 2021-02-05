/* From puzzle-utils.js: */

// Variables:
const USER = 'USER';
const EIGHTDATA = 'EIGHTDATA';
let user = pullFromLocStorage(USER);

let solvedCount = 0;
let movesCount = 0;
const resultsContainer = document.getElementById('results-display');
const winLoseMessageEl = document.createElement('p');
const solvedEl = document.createElement('p');
const movesEl = document.createElement('p');

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
};

// Functions:
// Do not use variables in global scope:
isSolvable(anArray);
getArrayOfRandomNumbers(array);
checkWinCondition(newTiles);

// Use variables in global scope
checkIfMovable(selectedTile, startStatus); // uses EIGHTDATA
moveTilesOnClick(selectedTile); // uses EIGHTDATA
updateAndSetUserMoves(); // uses movesCount, movesEl, USER, user
clearUserMoves(); // uses movesCount, movesEl, USER, user
winOrLose(); // uses user
renderResults(); // uses solvedCount, movesCount, user, solvedEl, USER, winLoseMessageEl, resultsContainer
	// nested function:
resultMessage(winState); // uses winLoseMessageEl, user, movesCount

///////////////////////////////////////

/* From puzzle-render-utils.js */

// Variables & Actions:

const EIGHTDATA = 'EIGHTDATA';

setInLocStorage(EIGHTDATA, eightData);

// tile grid constants
const tileMap = document.getElementById('tile-map');
tileMap.classList.add('tile-map');

const pos1 = document.createElement('div');
const pos2 = document.createElement('div');
const pos3 = document.createElement('div');
const pos4 = document.createElement('div');
const pos5 = document.createElement('div');
const pos6 = document.createElement('div');
const pos7 = document.createElement('div');
const pos8 = document.createElement('div');
const pos9 = document.createElement('div');

const spaces = [
    pos1,
    pos2,
    pos3,
    pos4,
    pos5,
    pos6,
    pos7,
    pos8,
    pos9
];

const startButton = document.createElement('button');

let clickedStart = false;

// Functions:
// Do not use variables in global scope:
generatePuzzleInfo(); // uses eightPuzzle and wikiLink, which are imported variables

// Use variables in global scope:
generateThreeByThree(); // uses spaces, tileMap
startGame(); // uses startButton, clickedStart
generateEightTiles(); // uses EIGHTDATA, clickedStart
placeTilesRandomly(); // uses EIGHTDATA

//////////////////////////////////////

/* From utils.js */

// Variables:


// Do not use variables in global scope
pullFromLocStorage(key);
setInLocStorage(magicKey, key2);
clearLocStorage();
findById(someArray, id);


// Use variables in global scope:
createUser(formData) // uses USER

/////////////////////////////////////

/* Variables in page-called js files */

// puzzle.js
const resultsDisplay = document.getElementById('results-display');
const startButton = document.createElement('button');

// app.js
const form = document.getElementById('newUser');


