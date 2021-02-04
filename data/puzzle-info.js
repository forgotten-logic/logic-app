// Name, Description, Rules(if applicable) //

// Future games, add Rules property //

const wikiLink = document.createElement('a');
const linkText = document.createTextNode('Learn more here.');
wikiLink.appendChild(linkText);
wikiLink.title = '15 Puzzle';
wikiLink.href = `https://en.wikipedia.org/wiki/15_puzzle`;

export const eightPuzzle = {
    id: 1,
    name: '8 Puzzle',
    description: `The 8 puzzle is a smaller variant of the popular 15 Puzzle. The goal is to slide the tiles around the board to line them up
    sequentially from 1-8, with the empty space in the lower-left corner. `,
};

export let puzzleDescription = document.createElement('p');
puzzleDescription.id = 'description';
puzzleDescription.textContent = eightPuzzle.description;
puzzleDescription.append(wikiLink);
