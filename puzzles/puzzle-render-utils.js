
import { 
    setInLocStorage,
    pullFromLocStorage, 
    EIGHTDATA
} from '../common/utils.js';
import { eightPuzzle, wikiLink } from '../data/puzzle-info.js';
import {
    moveTilesOnClick,
    checkIfMovable,
    updateAndSetUserMoves,
    checkWinCondition,
    renderResults,
    getArrayOfRandomNumbers,
    clearUserMoves
} from '../puzzles/puzzle-utils.js';

const spaces = makeArrayOfDivs(9);

// create a grid of nine squares on which the tiles will move
export function generateThreeByThree() {
    const tileMap = document.getElementById('tile-map');
    tileMap.classList.add('tile-map');
    const tiles = generateEightTiles();
    
    for (let i = 0; i < spaces.length; i++) {
        spaces[i].classList.add('space');
        spaces[i].id = `pos-${i + 1}`;
        if (tiles[i]) spaces[i].append(tiles[i]);
        tileMap.append(spaces[i]);
    }
    return spaces;
}

// click handler for start/shuffle button
let clickedStart = false;
export function startGame() {
    const startButton = document.querySelector('.start');
    clickedStart = true;
    clearUserMoves();
    placeTilesRandomly();
    startButton.textContent = 'Shuffle tiles and start again?';
}

function makeArrayOfDivs(quantity) {
    let divArray = [];
    for (let i = 0; i < quantity; i++) {
        divArray.push(document.createElement('div'));
    }
    return divArray;
}

// get 8 numbered tiles and 1 empty; returns an array of tiles

function removeOldTiles() {
    const oldTiles = document.querySelectorAll('.tile');
    for (let tile of oldTiles) {
        tile.remove();
    }
}

function moveTileAndUpdate(tileData) {
    const selectedTile = tileData.id;
	// maybe add 'clickedStart' argument here
    if (checkIfMovable(selectedTile, clickedStart) === true) {
        const newTiles = moveTilesOnClick(selectedTile);
        let solved = checkWinCondition(newTiles);
        updateAndSetUserMoves();
        setInLocStorage(EIGHTDATA, newTiles);
        generateThreeByThree();
		
        if (solved === true) {
            renderResults();
        }
    }
}

export function generateEightTiles() {
    removeOldTiles();
    const tiles = makeArrayOfDivs(9);
    const localStorageEightData = pullFromLocStorage(EIGHTDATA);
    
    // loop through tiles and add properties and functionality
    for (let i = 0; i < localStorageEightData.length; i++) {
        
        const tileData = localStorageEightData.find(item => item.position === i + 1);

        if (!tileData.isEmpty) {
            tiles[i].classList.add('tile');
            tiles[i].id = tileData.id;
            tiles[i].textContent = tileData.id;
            
            // on-click behavior for non-empty tiles
            tiles[i].addEventListener('click', () => {
                moveTileAndUpdate(tileData);
            });
        }
    }
    return tiles;
}

export function generatePuzzleInfo() {
    let puzzleInfo = document.getElementById('puzzle-info');
    let puzzleTitle = document.createElement('h2');
    let puzzleDescription = document.createElement('p');

    puzzleTitle.id = 'puzzle-name';
    puzzleTitle.textContent = eightPuzzle.name;

    puzzleDescription.id = 'description';
    puzzleDescription.innerHTML = eightPuzzle.description;
    puzzleDescription.append(wikiLink);

    puzzleInfo.append(puzzleTitle, puzzleDescription);
}

export function placeTilesRandomly() {
    // get the array of tile objects from localStorage
    const tileObjects = pullFromLocStorage(EIGHTDATA);

    // get an array like [2, 6, 3, 5, 7, 1, 4, 9, 8]
    const tileOrder = getArrayOfRandomNumbers(tileObjects);
    
    // make an array of tile objects with positions updated to reflect the random array
    let orderedTiles = [];
    for (let i = 0; i < tileOrder.length; i++) {
        const tileObject = tileObjects.find(tile => tile.id === tileOrder[i]);
        tileObject.position = i + 1;
        orderedTiles.push(tileObject);
    }

    // set shuffled tile positions in local storage
    setInLocStorage(EIGHTDATA, orderedTiles);

    // generate the grid with the updated position data
    generateThreeByThree();
} 
