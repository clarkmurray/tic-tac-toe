// Globals
var restartButton = document.getElementById("restartButton");
var spaces = document.getElementsByClassName('space');
var symbols = ['O', 'X'];
var turn = 0;




// Waits for page to load before doing interesting things
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		restartButton.onclick = startGame;
		startGame();
	};
};

function startGame() {

	// Reset turn counter
	turn = 0;

	// Remove winner notification

	// Clear board and add click events on squares
	for (i = 0; i < spaces.length; i++ ) {
		spaces[i].innerHTML = '';
		spaces[i].addEventListener("click", takeSpace);
	};
}

function takeSpace() {

	turn++;
	this.innerHTML = symbols[turn % 2];
	this.removeEventListener("click", takeSpace);

	for (i = 0; i < wins.length; i++) {
		if (checkForWin(wins[i])) {
			alert("Whoo hoo! Someone won!");
		}
	}
}

function checkForWin(winArray){

	// Wins happens if all these indices contain the same symbol

	return spaces[winArray[0]] !== '' && 
	spaces[winArray[0]] === spaces[winArray[1]] &&
	spaces[winArray[0]] === spaces[winArray[2]];


}