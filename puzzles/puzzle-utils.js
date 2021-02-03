import {
    findById,
    setInLocStorage,
    pullFromLocStorage,
    // clearLocStorage
} from '../common/utils.js';

const USER = 'USER';

let user = pullFromLocStorage(USER);

export function getArrayOfRandomNumbers(array) {
    let placementArray = [];

    while (placementArray.length < array.length) {
        let randomNumber = Math.ceil(Math.random() * (array.length));
        if (!placementArray.some(n => n === randomNumber)) {
            placementArray.push(randomNumber);
        }
    }
    return placementArray;
}

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

export function checkIfMovable(selectedTile) {
    const localStorageEightData = JSON.parse(localStorage.getItem('EIGHTDATA'));

    let tile = findById(localStorageEightData, selectedTile);

    let emptyTile = findById(localStorageEightData, 9);
    let position = emptyTile.position;
    const moveable = movementMap[position];

    if (moveable.includes(tile.position)) {
        return true;
    } else {
        return false;
    }
}

export function moveTilesOnClick(selectedTile) {
    const localStorageEightData = JSON.parse(localStorage.getItem('EIGHTDATA'));

    let emptyTile = localStorageEightData.find(tile => tile.id === 9);

    let emptyPosition = emptyTile.position;

    const selectedTileObject = findById(localStorageEightData, selectedTile);

    let selectedPosition = selectedTileObject.position;

    emptyTile.position = selectedPosition;

    selectedTileObject.position = emptyPosition;

    return localStorageEightData;
}

export function checkWinCondition(newTiles) {

    let condition = false;
    for (let i = 1; i < newTiles.length + 1; i++) {
        let tile = newTiles.find(item => item.position === i);
        if (tile.position !== tile.id) {
            condition = false;
            return false;
        } else {
            condition = true;
        }
    }
    return condition;
}

const movesEl = document.createElement('p');

let solvedCount = 0;
let movesCount = 0;

export function updateMovesCounter() {
    movesCount++;
    movesEl.textContent = 'Moves: ' + movesCount;
}

export function setUserMoves() {
    user.moves++;
    setInLocStorage(user);
}

export function clearUserMoves() {
    movesCount = 0;
    movesEl.textContent = 'Moves: ' + movesCount;
    user.moves = 0;
    setInLocStorage(user);
}

function winOrLose() {
    if (solvedCount >= 1) { // UPDATE BACK TO USER.GAMESWON ONCE CHECK IF SOLVED IS READY //
        return true;
    }
    else false;
}

export function renderResultsDisplay() {
    const { endBtn, winLoseMessageEl, resultsContainer, solvedEl, resetBtn } = createResultsDisplay();

    setInLocStorage(user);
    endBtn.addEventListener('click', () => {
        let winState = winOrLose();

        winLoseMessageEl.style.display = 'flex';
        winLoseMessageEl.classList.add('animate__animated', 'animate__zoomInUp', 'animate__slow');
        winLoseMessageEl.addEventListener('animationend', () => {
            winLoseMessageEl.classList.remove('animate__zoomInUp');
            winLoseMessageEl.classList.add('animate__delay-2s', 'animate__hinge');
        });
        resultMessage(winState);
    });

    resultsContainer.append(movesEl, solvedEl, endBtn, winLoseMessageEl, resetBtn);

    function createResultsDisplay() {
        const resultsContainer = document.getElementById('results-display');
        const winLoseMessageEl = document.createElement('p');
        winLoseMessageEl.id = 'win-or-lose';
        const solvedEl = document.createElement('p');
        const endBtn = document.createElement('button');
        const resetBtn = document.createElement('button');

        movesEl.id = 'user-moves';
        movesEl.classList.add('animate__animated', 'animate__bounce');
        movesEl.textContent = 'Moves: ' + movesCount;

        solvedEl.id = 'user-solved';
        solvedEl.textContent = 'Solved: ' + solvedCount;

        endBtn.textContent = 'End Game';
        resetBtn.textContent = 'Play again?';
        resetBtn.addEventListener('click', () => {
            window.location = './';
        });
        return { endBtn, winLoseMessageEl, resultsContainer, solvedEl, resetBtn };
    }

    function resultMessage(winState) {
        if (winState === true) {
            winLoseMessageEl.textContent = `Yahoo!!! Congrats, ${user.name}! You solved this puzzle in ${movesCount} moves!`;
        }
        else {
            winLoseMessageEl.textContent = `Awww, bummer! You couldn't solve the puzzle. Better luck next time, ${user.name}!`;
        }
        return winLoseMessageEl;
    }
}


export function renderNewResults(){
    solvedCount++;
    const solvedResults = document.getElementById('user-solved');
    solvedResults.textContent = 'Solved: ' + solvedCount;
}