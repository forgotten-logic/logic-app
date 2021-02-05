import {
    findById,
    setInLocStorage,
    pullFromLocStorage,
    EIGHTDATA,
    USER
} from '../common/utils.js';

import { movementMap } from '../data/eight-data.js';

let user = pullFromLocStorage(USER);

function removeRandomEmpty(anArray) {
    let mutatedCopy = anArray.slice();

    let index = mutatedCopy.indexOf(9);
    if (index > -1) {
        mutatedCopy.splice(index, 1);
    }
    return mutatedCopy;
}

function isSolvable(anArray) {
    let inversions = 0;
    let mutatedCopy = removeRandomEmpty(anArray);
    for (let i = 0; i < mutatedCopy.length; i++){
        for (let j = i + 1; j < mutatedCopy.length; j++) {
            if ((mutatedCopy[i] && mutatedCopy[j]), mutatedCopy[i] > mutatedCopy[j]) {
                inversions++;
            }
        }
    }
    let evenInversions = (inversions / 2);
    return evenInversions;
}

// test passing
export function getArrayOfRandomNumbers(array) {
    let randomOrderArray = [];
    while (randomOrderArray.length < array.length) {
        let randomNumber = Math.ceil(Math.random() * (array.length));
        if (!randomOrderArray.some(n => n === randomNumber)) {
            randomOrderArray.push(randomNumber);
        }
    }
    let testy = isSolvable(randomOrderArray);
    if (Number.isInteger(testy) === true){
        return randomOrderArray;
    } else {
        return getArrayOfRandomNumbers(array);
    }

}

// GENERATED RESULTS DOM ELEMENTS //
let solvedCount = 0;
let movesCount = 0;
const resultsContainer = document.getElementById('results-display');
const winLoseMessageEl = document.createElement('p');
winLoseMessageEl.id = 'win-or-lose';
const solvedEl = document.createElement('p');
solvedEl.id = 'user-solved';
solvedEl.textContent = 'Solved: ' + solvedCount;

const movesEl = document.createElement('p');
movesEl.id = 'user-moves';
movesEl.classList.add('animate__animated', 'animate__bounce');
movesEl.textContent = 'Moves: ' + movesCount;

// test passing
export function checkIfMovable(selectedTile, startStatus) {
    if (!startStatus) return false;
    
    const tileObjects = pullFromLocStorage(EIGHTDATA);
    let tile = findById(tileObjects, selectedTile);

    let emptyTile = findById(tileObjects, 9);
    let position = emptyTile.position;
    const moveable = movementMap[position];

    if (moveable.includes(tile.position)) {
        return true;
    } else {
        return false;
    }
}

// test passing
export function moveTilesOnClick(selectedTile) {
    const tileObjects = pullFromLocStorage(EIGHTDATA);
    const selectedTileObject = findById(tileObjects, selectedTile);

    let emptyTile = tileObjects.find(tile => tile.id === 9);
    let emptyPosition = emptyTile.position;
    let selectedPosition = selectedTileObject.position;

    emptyTile.position = selectedPosition;
    selectedTileObject.position = emptyPosition;

    return tileObjects;
}

// tests passing
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

export function updateAndSetUserMoves() {
    movesCount++;
    movesEl.textContent = 'Moves: ' + movesCount;
    user.moves++;
    setInLocStorage(USER, user);
}

export function clearUserMoves() {
    movesCount = 0;
    movesEl.textContent = 'Moves: ' + movesCount;
    user.moves = 0;
    setInLocStorage(USER, user);
}

export function winOrLose() {
    if (user.gamesWon >= 1) {
        return true;
    }
    else false; // currently not linked to any action/result - need to update to trigger //
}

export function renderResults() {
    solvedCount++;
    user.gamesWon++;
    solvedEl.textContent = 'Solved: ' + solvedCount;

    setInLocStorage(USER, user);

    let winState = winOrLose();

    // DISPLAY OF WINLOSE MESSAGE //
    winLoseMessageEl.style.display = 'flex';
    winLoseMessageEl.classList.add('animate__animated', 'animate__zoomInUp', 'animate__slow');
    winLoseMessageEl.addEventListener('animationend', () => {
        winLoseMessageEl.classList.remove('animate__zoomInUp');
        winLoseMessageEl.classList.add('animate__delay-2s', 'animate__hinge');
    });
    resultMessage(winState);

    resultsContainer.append(movesEl, solvedEl, winLoseMessageEl);

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