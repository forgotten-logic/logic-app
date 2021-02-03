import { pullFromLocStorage, setInLocStorage, USER } from '../common/utils.js';
import eightData from '../data/eight-data.js';
import { moveTilesOnClick, checkIfMovable } from '../puzzles/puzzle-utils.js';

localStorage.setItem('EIGHTDATA', JSON.stringify(eightData));

// create a grid of nine squares on which the tiles will move
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
export function generateThreeByThree() {
<<<<<<< HEAD
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
=======
>>>>>>> ca3f62fb7234961cb10844ab9e29b3f26ab73fa4

    const tiles = generateEightTiles();

    for (let i = 0; i < spaces.length; i++) {
        spaces[i].classList.add('space');

        spaces[i].id = `pos-${i + 1}`;

        if (tiles[i]) spaces[i].append(tiles[i]);
        tileMap.append(spaces[i]);
    }


    return spaces;
}

// get 8 numbered tiles; returns an array of tiles
export function generateEightTiles() {
    const oldtiles = document.querySelectorAll('.tile');
    for (let tile of oldtiles) {
        tile.remove();
    }
    const tile1 = document.createElement('div');
    const tile2 = document.createElement('div');
    const tile3 = document.createElement('div');
    const tile4 = document.createElement('div');
    const tile5 = document.createElement('div');
    const tile6 = document.createElement('div');
    const tile7 = document.createElement('div');
    const tile8 = document.createElement('div');
<<<<<<< HEAD
	
=======
    const tile9 = document.createElement('div');
    
>>>>>>> ca3f62fb7234961cb10844ab9e29b3f26ab73fa4
    const tiles = [
        tile1,
        tile2,
        tile3,
        tile4,
        tile5,
        tile6,
        tile7,
        tile8,
        tile9
    ];

    const localStorageEightData = JSON.parse(localStorage.getItem('EIGHTDATA'));
    for (let i = 0; i < localStorageEightData.length; i++) {
        const tileData = localStorageEightData.find(item => item.homePosition === i + 1);
        if (!tileData.isEmpty) {
            tiles[i].classList.add('tile');
            tiles[i].id = tileData.id;
            tiles[i].textContent = tileData.id;
            tiles[i].addEventListener('click', () => {    
      
                const selectedTile = tileData.id;
                if (checkIfMovable(selectedTile) === true){  
                    updateMovesCounter();
                    setUserMoves();
                    const newtiles = moveTilesOnClick(selectedTile);
                    const stringytiles = JSON.stringify(newtiles);
                    localStorage.setItem('EIGHTDATA', stringytiles);
                    generateThreeByThree();

                }
            });
        }

    }
    // console.log(localStorageEightData);
    return tiles;
}

export function getArrayOfRandomNumbers(array) {
    let placementArray = [];

    while (placementArray.length < array.length) {
        let randomNumber = Math.floor(Math.random() * (array.length));
        if (!placementArray.some(n => n === randomNumber)) {
            placementArray.push(randomNumber);
        }
    }
    return placementArray;
}

export function placeTilesRandomly(nineSpaces) {
    const eightTiles = generateEightTiles();
    const placements = getArrayOfRandomNumbers(eightTiles);
    // will return something like [2, 6, 0, 3, 5, 7, 1, 4]

    let placedTiles = [];
    for (let i = 0; i < placements.length; i++) {
        if (placements[i] === 9) {
            placedTiles.push('empty');
        }
        else {
            placedTiles.push(eightTiles[placements[i]]);
        }
    }    

    for (let i = 0; i < nineSpaces.length; i++) {
        nineSpaces[i].append(placedTiles[i]);
    }
}

function setUserMoves() {
    const user = pullFromLocStorage(USER);
    user.moves++;
    setInLocStorage(user);
}

const resultsContainer = document.getElementById('results-display');
// const winLoseMessageEl = document.createElement('p');
const movesEl = document.createElement('p');
const solveEl = document.createElement('p');

export function renderResultsDisplay() {
    const user = pullFromLocStorage(USER);

    // render and track user moves in movesEl //
    movesEl.id = 'user-moves';
    movesEl.classList.add('animate__animated', 'animate__bounce');
    movesEl.textContent = 'Moves: ' + movesCount;

    // render and track user's win results in winEl //
    solveEl.id = 'user-solved';
    solveEl.textContent = 'Solved: ' + 'Solved Count Goes Here';
    // update user wins in LS upon game submit //


    setInLocStorage(user);
    // append results display elements to resultsContainer //
    resultsContainer.append(movesEl, solveEl);
    // display hidden winLoseMessageEl upon game completion. Overlay game board with pop-up result message //

}

let movesCount = 0;
function updateMovesCounter() {
    movesCount++;
    movesEl.textContent = 'Moves: ' + movesCount;
}
