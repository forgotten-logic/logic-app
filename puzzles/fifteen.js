// import { findById } from '../common/utils.js';
// import { masterPuzzleInfo, wikiLink } from '../data/puzzle-info.js';
// import { eightData } from '../data/eight-data';
// import { fifteenData } from '../data/fifteen-data.js';

// const params = new URLSearchParams(window.location.search);
// const puzzleId = params.get('id');
// const puzzleObject = findById(masterPuzzleInfo, puzzleId);

// export function renderPuzzleInfo() {

//     for (let puzzle of masterPuzzleInfo) {
//         const puzzleInfo = document.getElementById('puzzle-info');
//         const puzzleTitle = document.createElement('h2');
//         const puzzleDescription = document.createElement('p');

//         puzzleTitle.id = puzzle.name;
//         puzzleTitle.textContent = puzzle.name;

//         puzzleDescription.id = 'description';
//         puzzleDescription.innerHTML = puzzle.description;
//         puzzleDescription.append(wikiLink);

//         puzzleInfo.append(puzzleTitle, puzzleDescription);

//     }

// }

// // puzzle list options //
// export function renderPuzzleList() {
//     const puzzleSelection = document.createElement('ui');
//     for (let puzzle of masterPuzzleInfo) {

//         const puzzleItem = document.createElement('li');
//         const a = document.createElement('a');
//         a.textContent = puzzle.name;
//         a.id = fifteenPuzzle.id;
//         a.href = `./?id=${fifteenPuzzle.id}`;

//         puzzleItem.append(a);
//     }

//     puzzleSelection.append(puzzleItem);

// }



// // render user puzzle selection to puzzle page //

