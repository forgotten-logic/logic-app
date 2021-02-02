import { pullFromLocStorage, setInLocStorage, USER } from '../common/utils.js';


const moveCounter = document.getElementById('moves-counter'); 

// create a grid of nine squares on which the tiles will move
export function generateThreeByThree() {
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

    // const tiles = generateEightTiles();

    for (let i = 0; i < spaces.length; i++) {
        spaces[i].classList.add('space');
        spaces[i].id = `pos-${i + 1}`;
        // if (tiles[i]) spaces[i].append(tiles[i]);
        tileMap.append(spaces[i]);
    }

    return spaces;
}

// get 8 numbered tiles; returns an array of tiles
export function generateEightTiles() {
    const tile1 = document.createElement('div');
    const tile2 = document.createElement('div');
    const tile3 = document.createElement('div');
    const tile4 = document.createElement('div');
    const tile5 = document.createElement('div');
    const tile6 = document.createElement('div');
    const tile7 = document.createElement('div');
    const tile8 = document.createElement('div');

    const tiles = [
        tile1,
        tile2,
        tile3,
        tile4,
        tile5,
        tile6,
        tile7,
        tile8
    ];

    for (let i = 0; i < tiles.length; i++) {
        tiles[i].classList.add('tile');
        tiles[i].id = `${i + 1}`;
        tiles[i].textContent = `${i + 1}`;
        tiles[i].addEventListener('click', () => {            
            updateMovesCounter();
            setUserMoves();
        });
    }

    return tiles;
}

// will give array the same length as the given array
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
    // will return something like [2, 5, 7, 3, 1, 4, 6, 8]
    console.log('nineSpaces: ', nineSpaces);
    console.log('placements: ', placements);
    console.log('eightTiles: ', eightTiles);

    let placedTiles = [];
    for (let i = 0; i < placements.length; i++) {
        if (placements[i] === 9) {
            placedTiles.push('empty');
        }
        else {
            placedTiles.push(eightTiles[placements[i]]);
        }
    }
    console.log('later placement read: ', placements);
    

    for (let i = 0; i < nineSpaces.length; i++) {
        nineSpaces[i].append(placedTiles[i]);
    }
}

function setUserMoves() {
    const user = pullFromLocStorage(USER);
    user.moves++;
    setInLocStorage(user);
}

let movesCount = 0;
function updateMovesCounter() {
    moveCounter.innerText = movesCount++;
}
