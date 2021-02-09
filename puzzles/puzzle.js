import { generateTileMap, generatePuzzleInfo, startGame } from './puzzle-render-utils.js';
import {
    loadUserProfile
} from './puzzle-utils.js';
import eightData from '../data/eight-data.js';
import { setInLocStorage, EIGHTDATA } from '../common/utils.js';

loadUserProfile();
const main = document.querySelector('main');
const tileMap = document.getElementById('tile-map');
const startButton = document.createElement('button');
startButton.classList.add('start');

main.insertBefore(startButton, tileMap);
startButton.textContent = 'Shuffle tiles and start?';

startButton.addEventListener('click', startGame);

setInLocStorage(EIGHTDATA, eightData);
generatePuzzleInfo();
generateTileMap();


