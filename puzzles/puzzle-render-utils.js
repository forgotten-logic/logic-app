export function generateThreeByThree() {
    const tileMap = document.getElementById('tile-map');
    tileMap.classList.add('tile-map');
	
    const pos1 = document.createElement('div');
    const pos2 = document.createElement('div');
    const pos3 = document.createElement('div');
    const pos4 = document.createElement('div');
    const pos5 = document.createElement('div');
    const pos6 = document.createElement('div');
    const pos7 = document.createElement('div');
    const pos8 = document.createElement('div');
    const pos9 = document.createElement('div');

    const spaces = [
        pos1,
        pos2,
        pos3,
        pos4,
        pos5,
        pos6,
        pos7,
        pos8,
        pos9
    ];

    for (let i = 0; i < spaces.length; i++) {
        spaces[i].classList.add('space');
        spaces[i].id = `pos-${i + 1}`;
        tileMap.append(spaces[i]);
    }

    return tileMap;
}