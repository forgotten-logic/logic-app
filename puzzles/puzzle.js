import { generateThreeByThree, placeTilesRandomly, generatePuzzleInfo, startGame } from './puzzle-render-utils.js';
import { clearUserMoves } from './puzzle-utils.js';


const resultsDisplay = document.getElementById('results-display');
const startButton = document.createElement('button');
startButton.classList.add('start');
resultsDisplay.parentNode.insertBefore(startButton, resultsDisplay);
startButton.textContent = 'Shuffle tiles and start?';

startButton.addEventListener('click', startGame);

generatePuzzleInfo();
generateThreeByThree();


