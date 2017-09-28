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

	// Clear board


	// Reset turn counter
	turn = 0;

	// Remove winner notification

	// Add click events on squares
	for (i = 0; i < spaces.length; i++ ) {
		spaces[i].innerHTML = '';
		spaces[i].addEventListener("click", takeSpace);
	};
}

function takeSpace() {
	turn++;
	this.innerHTML = symbols[turn % 2];
	this.removeEventListener("click", takeSpace);


}