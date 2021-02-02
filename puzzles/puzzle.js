import { generateThreeByThree } from './puzzle-render-utils.js';
import { eightData } from '../data/eight-data.js';

generateThreeByThree();

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

export function movableTiles(tiles) {
    let tileNumber = tiles;
    const selectTile = eightData[tileNumber];
    const emptyTile = eightData.empty;
    const moveable = movementMap(emptyTile.position);
    if (moveable.includes(selectTile.position)) {
        return true;
    } else {
        return false;
    }
}
