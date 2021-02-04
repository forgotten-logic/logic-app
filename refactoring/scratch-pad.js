



// RENAME: generateThreeByThree, generateEightTiles, localStorageEightData

function moveTileAndUpdate(tileData) {
    const selectedTile = tileData.id;
	// maybe add 'clickedStart' argument here
    if (checkIfMovable(selectedTile, clickedStart) === true) {
        const newTiles = moveTilesOnClick(selectedTile);
        let solved = checkWinCondition(newTiles);
        updateAndSetUserMoves();
        setInLocStorage(EIGHTDATA, newTiles);
        generateThreeByThree();
		
        if (solved === true) {
            renderResults();
        }
    }
}