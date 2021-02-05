import { generateTileMap, generatePuzzleInfo, startGame } from './puzzle-render-utils.js';
import eightData from '../data/eight-data.js';
import { setInLocStorage, EIGHTDATA, loadUserProfile } from '../common/utils.js';

loadUserProfile();

const resultsDisplay = document.getElementById('results-display');
const startButton = document.createElement('button');
startButton.classList.add('start');
resultsDisplay.parentNode.insertBefore(startButton, resultsDisplay);
startButton.textContent = 'Shuffle tiles and start?';

startButton.addEventListener('click', startGame);

setInLocStorage(EIGHTDATA, eightData);
generatePuzzleInfo();
generateTileMap();


