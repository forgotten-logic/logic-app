import {
    findById,
    setInLocStorage,
    pullFromLocStorage,
    EIGHTDATA,
    USER,
    findByName,
    avatars
} from '../common/utils.js';

import { movementMap } from '../data/eight-data.js';

export let user = pullFromLocStorage(USER);

// clear 'empty' tile with ID 9 from array for use with solve testing
function removeRandomEmpty(anArray) {
    let mutatedCopy = anArray.slice();

    let index = mutatedCopy.indexOf(9);
    if (index > -1) {
        mutatedCopy.splice(index, 1);
    }
    return mutatedCopy;
}

// test if generated array will be solvable
function isSolvable(anArray) {
    let inversions = 0;
    let mutatedCopy = removeRandomEmpty(anArray);
    for (let i = 0; i < mutatedCopy.length; i++) {
        for (let j = i + 1; j < mutatedCopy.length; j++) {
            if ((mutatedCopy[i] && mutatedCopy[j]), mutatedCopy[i] > mutatedCopy[j]) {
                inversions++;
            }
        }
    }
    let evenInversions = (inversions / 2);
    return evenInversions;
}

// get array of numbers to guide placement of tiles
export function getArrayOfRandomNumbers(array) {
    let randomOrderArray = [];
    while (randomOrderArray.length < array.length) {
        let randomNumber = Math.ceil(Math.random() * (array.length));
        if (!randomOrderArray.some(n => n === randomNumber)) {
            randomOrderArray.push(randomNumber);
        }
    }
    let testy = isSolvable(randomOrderArray);
    if (Number.isInteger(testy) === true) {
        return randomOrderArray;
    } else {
        return getArrayOfRandomNumbers(array);
    }

}

// GENERATED RESULTS DOM ELEMENTS //
export let movesCount = 0;
export let solvedCount = 0;
const moves = document.getElementById('user-moves');

// check if a clicked tile can be moved
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

// tile movement function
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

// check if tiles are in solved position
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

export function setUserMoves() {
    user.moves++;
    setInLocStorage(USER, user);
}

export function setUserSolves() {
    user.gamesWon++;
    setInLocStorage(USER, user);
}

export function updateUserProfileMoves() {
    movesCount++;

    moves.textContent = movesCount;
}

export function updateUserProfileSolves() {
    solvedCount++;

    const solves = document.getElementById('user-solves');
    solves.textContent = solvedCount;
}

export function clearUserMoves() {
    movesCount = 0;
    moves.textContent = 'Moves: ' + movesCount;
    user.moves = 0;
    setInLocStorage(USER, user);
}

export function winOrLose(newTiles) {
    if (checkWinCondition(newTiles) === true) {
        return true;
    }
    else false; // currently not linked to any action/result - need to update to trigger; to be used with future 'give up' button feature //
}

export function resultMessage(newTiles) {
    const resultsContainer = document.getElementById('results-display');

    let winState = checkWinCondition(newTiles);

    const winLoseMessageEl = document.createElement('p');
    winLoseMessageEl.id = 'win-or-lose';
    // ANIMATION FOR WIN/LOSE MESSAGE //
    winLoseMessageEl.style.display = 'flex';
    winLoseMessageEl.classList.add('animate__animated', 'animate__zoomInUp', 'animate__slow');
    winLoseMessageEl.addEventListener('animationend', () => {
        winLoseMessageEl.classList.remove('animate__zoomInUp');
        winLoseMessageEl.classList.add('animate__delay-2s', 'animate__hinge');
    });

    if (winState === true) {
        winLoseMessageEl.textContent = `Yahoo!!! Congrats, ${user.name}! You solved this puzzle in ${movesCount} moves!`;
    }
    else {
        winLoseMessageEl.textContent = `Awww, bummer! You couldn't solve the puzzle. Better luck next time, ${user.name}!`;
    }

    resultsContainer.append(winLoseMessageEl);
    return winLoseMessageEl;
}

export function loadUserProfile() {
    const name = document.getElementById('user-name');
    const avatar = document.getElementById('avatar');

    const user = pullFromLocStorage(USER);

    name.textContent = 'Name: ' + user.name;
    avatar.src = findByName(avatars, user.avatar);

}
