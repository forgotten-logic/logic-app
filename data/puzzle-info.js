export const wikiLink = document.createElement('a');
wikiLink.title = ' 15 Puzzle';

export const eightPuzzle = {
    id: 'eight-puzzle',
    name: '8 Puzzle',
    description: `The 8 puzzle is a smaller variant of the popular <a href='https://en.wikipedia.org/wiki/15_puzzle' target='_blank'>${wikiLink.title}</a>. The goal is to slide the tiles using the empty space to align them in sequential order with the empty space in the lower-right corner.`,
};
