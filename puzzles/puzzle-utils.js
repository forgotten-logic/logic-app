// import { findById } from '../common/utils.js';
// import eightData from '../data/eight-data.js';
// // import { findById } from '../common/utils.js';

// function movementMap(position) {
//     if (position === 9) return [6, 8];
//     if (position === 8) return [5, 7, 9];
//     if (position === 7) return [4, 8];
//     if (position === 6) return [3, 5, 9];
//     if (position === 5) return [2, 4, 6, 8];
//     if (position === 4) return [1, 5, 7];
//     if (position === 3) return [2, 6];
//     if (position === 2) return [1, 3, 5];
//     if (position === 1) return [2, 4];
// }

// export function checkIfMovable(selectedTile) {
//     let tile = findById(eightData, selectedTile);
//     // const tileId = tile.tileId;
//     const emptyTile = eightData[eightData.length - 1].empty;
//     const moveable = movementMap(emptyTile.position);
//     if (moveable.includes(tile.position)) {
//         return true;
//     } else {
//         return false;
//     }
// }
