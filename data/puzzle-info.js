// Name, Description, Rules(if applicable) //

// Future games, add Rules property //

export const wikiLink = document.createElement('a');
wikiLink.title = '15 Puzzle';

export const eightPuzzle = {
    id: 1,
    name: '8 Puzzle',
    description: `The 8 puzzle is a smaller variant of the popular <a href='https://en.wikipedia.org/wiki/15_puzzle' target='_blank'>${wikiLink.title}</a>. The goal is to slide the tiles around the board to line them up
    sequentially from 1-8, with the empty space in the lower-left corner. `,
};
