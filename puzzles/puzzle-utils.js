import { findById } from '../common/utils.js';

// import { findById } from '../common/utils.js';

function movementMap(position) {
    if (position === 9) return [6, 8];
    if (position === 8) return [5, 7, 9];
    if (position === 7) return [4, 8];
    if (position === 6) return [3, 5, 9];
    if (position === 5) return [2, 4, 6, 8];
    if (position === 4) return [1, 5, 7];
    if (position === 3) return [2, 6];
    if (position === 2) return [1, 3, 5];
    if (position === 1) return [2, 4];
}

export function checkIfMovable(selectedTile) {
    const localStorageEightData = JSON.parse(localStorage.getItem('EIGHTDATA'));
    let tile = findById(localStorageEightData, selectedTile);
    let emptyTile = findById(localStorageEightData, 9);
    const moveable = movementMap(emptyTile.homePosition);
    if (moveable.includes(tile.homePosition)) {
        return true;
    } else {
        return false;
    }
}

export function moveTilesOnClick(selectedTile) {
    const localStorageEightData = JSON.parse(localStorage.getItem('EIGHTDATA'));
    let emptyTile = localStorageEightData.find(tile => tile.id === 9);

    let emptyhomePosition = emptyTile.homePosition;

    const selectedTileObject = findById(localStorageEightData, selectedTile);

    let selectedhomePosition = selectedTileObject.homePosition;

    emptyTile.homePosition = selectedhomePosition;

    selectedTileObject.homePosition = emptyhomePosition;


    return localStorageEightData;
}
// if i click on tile with id of 6 that tile should get the homeposition equal to the current empty tile
// the empty tile should get the homeposition of the tile we clicked
// the tile with id of 9 is our dedicated empty tile 
// tile 9s home position should change to the homeposition of what we clicked (ie tile with id of 6)