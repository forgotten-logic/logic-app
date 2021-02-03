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
    const moveable = movementMap(emptyTile.position);
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

export function checkWinCondition(newTiles){
      
    let condition = false;
    for (let i = 1; i < newTiles.length + 1; i++){
        let tile = newTiles.find(item => item.position === i);

        if (tile.position === tile.id){
            condition = true;
            
           
        } else {
            condition = false;
            
        }
    }
    return condition;
}