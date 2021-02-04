import { generateThreeByThree, placeTilesRandomly } from './puzzle-render-utils.js';
import { clearUserMoves } from './puzzle-utils.js';


const resultsDisplay = document.getElementById('results-display');
const startButton = document.createElement('button');
resultsDisplay.parentNode.insertBefore(startButton, resultsDisplay);

startButton.textContent = 'Shuffle tiles and start?';

startButton.addEventListener('click', () => {
    clearUserMoves();
    placeTilesRandomly();
    startButton.textContent = 'Shuffle tiles and start again?';
});

generateThreeByThree();
