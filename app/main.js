// Globals
var restartButton = document.getElementById("restartButton");
var spaces = document.getElementsByClassName('space');
var symbols = ['O', 'X'];
var turn = 0;
var notification = document.getElementById('notification');
var winnerMessage = document.getElementById('winnerMessage');
var xScoreColumn = document.getElementById('xScore');
var oScoreColumn = document.getElementById('oScore');
var xScore = 0;
var oScore = 0;
var whoseTurn = document.getElementById('whoseTurn');




// Waits for page to load before doing interesting things
document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		restartButton.onclick = startGame;
		startGame();
	}
};

function startGame() {

	// Reset turn counter
	turn = 0;

	// Remove winner notification and make sure div is hidden
	winnerMessage.innerHTML = '';
	notification.style.display = 'none';
	whoseTurn.style.display = 'block';
	whoseTurn.innerHTML = "It is X's turn";


	// Clear board and add click events on squares
	for (i = 0; i < spaces.length; i++ ) {
		spaces[i].innerHTML = '';
		spaces[i].addEventListener("click", takeSpace);
	}
}

function takeSpace() {

	turn++;
	var currentPlayer = symbols[turn % 2];
	whoseTurn.innerHTML = "It is " + (symbols[+!(turn % 2)]) + "'s turn";
	this.innerHTML = currentPlayer;
	this.removeEventListener("click", takeSpace);

	for (i = 0; i < wins.length; i++) {
		if (checkForWin(wins[i])) {
			
			// No more clicking!
			for (j = 0; j < spaces.length; j++ ) {
				spaces[j].removeEventListener("click", takeSpace);
			}

			// Notify the players 
			whoseTurn.style.display = 'none';
			notification.style.display = 'block';
			winnerMessage.innerHTML = "Yay! " + currentPlayer + " won!";

			if (currentPlayer == symbols[1]) {
				xScore += 1;
				xScoreColumn.innerHTML = xScore;
			} else {
				oScore += 1;
				oScoreColumn.innerHTML = oScore;
			}

		} 
		else {
			if (turn == 9) {
				if (notification.style.display != 'block') {
					notification.style.display = "block";
					winnerMessage.innerHTML = "CAT";
				}
			}
		}
	}

}

function checkForWin(winArray){

	// Wins happens if all these indices contain the same symbol

	return spaces[winArray[0]].innerHTML !== '' && 
	spaces[winArray[0]].innerHTML === spaces[winArray[1]].innerHTML &&
	spaces[winArray[0]].innerHTML === spaces[winArray[2]].innerHTML;



}