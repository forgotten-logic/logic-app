import { pullFromLocStorage, setInLocStorage, USER } from '../common/utils.js';


// const moveCounter = document.getElementById('moves-counter');

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

export function getArrayOfRandomNumbers(array) {
    let placementArray = [];

    while (placementArray.length < array.length) {
        let randomNumber = Math.ceil(Math.random() * array.length);
        if (!placementArray.some(n => n === randomNumber)) {
            placementArray.push(randomNumber);
        }
    }
    return placementArray;
}

// export function placeTilesRandomly() {
//     const tileSpaces = generateThreeByThree();
//     const placements = getArrayOfRandomNumbers(tileSpaces);

// }

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
