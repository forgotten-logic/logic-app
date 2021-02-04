import eightData from '../data/eight-data.js';

import {
    moveTilesOnClick,
    checkIfMovable,
    updateAndSetUserMoves,
    checkWinCondition,
    renderResults,
    getArrayOfRandomNumbers
} from '../puzzles/puzzle-utils.js';

import { pullFromLocStorage, setInLocStorage } from '../common/utils.js';

const EIGHTDATA = 'EIGHTDATA';

setInLocStorage(EIGHTDATA, eightData);

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
    const oldTiles = document.querySelectorAll('.tile');
    for (let tile of oldTiles) {
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
    const tile9 = document.createElement('div');

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

    const localStorageEightData = pullFromLocStorage(EIGHTDATA);
    for (let i = 0; i < localStorageEightData.length; i++) {
        const tileData = localStorageEightData.find(item => item.position === i + 1);

        if (!tileData.isEmpty) {
            tiles[i].classList.add('tile');
            tiles[i].id = tileData.id;
            tiles[i].textContent = tileData.id;
            tiles[i].addEventListener('click', () => {

                const selectedTile = tileData.id;
                if (checkIfMovable(selectedTile) === true) {
                    const newTiles = moveTilesOnClick(selectedTile);

                    let solved = checkWinCondition(newTiles);

                    updateAndSetUserMoves();
                    setInLocStorage(EIGHTDATA, newTiles);
                    generateThreeByThree();
                    if (solved === true) {
                        renderResults();
                    }
                }
            });
        }
    }
    return tiles;
}

export function generatePuzzleInfo() {
    
}

export function placeTilesRandomly() {

    // get the array of tile objects from localStorage
    const tileObjects = JSON.parse(localStorage.getItem('EIGHTDATA'));
    // get an array like [2, 6, 3, 5, 7, 1, 4, 9, 8]
    const placements = getArrayOfRandomNumbers(tileObjects);
    
    // make an array of tile objects with positions updated to reflect the random array
    let placedTiles = [];
    for (let i = 0; i < placements.length; i++) {
        const tileObject = tileObjects.find(tile => tile.id === placements[i]);
        tileObject.position = i + 1;
        placedTiles.push(tileObject);
    }
        // set shuffled tile positions in local storage
    localStorage.setItem('EIGHTDATA', JSON.stringify(placedTiles));

            // generate the grid with the updated position data
    generateThreeByThree();
} 
