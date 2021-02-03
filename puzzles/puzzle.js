import { generateThreeByThree, placeTilesRandomly } from './puzzle-render-utils.js';
import { renderResultsDisplay } from './puzzle-utils.js';

const startButton = document.createElement('button');

generateThreeByThree();
renderResultsDisplay();
