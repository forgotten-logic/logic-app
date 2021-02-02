// needs to import tileMap
// import { SOMEDATA } from '../FINISH THIS PATH';

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
// delete when tileMap can be imported
const tileMap = {
    1: {
        tileNumber: 1,
        position: 1,
        top: 0,
        left: 0
    },
    2: {
        tileNumber: 2,
        position: 2,
        top: 0,
        left: 1 * 1
    },
    3: {
        tileNumber: 3,
        position: 3,
        top: 0,
        left: 1 * 2
    },
    4: {
        tileNumber: 4,
        position: 4,
        top: 1,
        left: 0
    },
    5: {
        tileNumber: 5,
        position: 5,
        top: 1,
        left: 1
    },
    6: {
        tileNumber: 6,
        position: 6,
        top: 1,
        left: 1 * 2
    },
    7: {
        tileNumber: 7,
        position: 7,
        top: 1 * 2,
        left: 0
    },
    8: {
        tileNumber: 8,
        position: 8,
        top: 1 * 2,
        left: 1
    },
    empty: {
        position: 9,
        top: 1 * 2,
        left: 1 * 2
    }
};

// needs the selected tile for tileMap
export function movableTiles(tiles) {
    let tileNumber = tiles;
    const selectTile = tileMap[tileNumber];
    const emptyTile = tileMap.empty;
    const moveable = movementMap(emptyTile.position);
    if (moveable.includes(selectTile.position)) {
        return true;
    } else {
        return false;
    }
}
