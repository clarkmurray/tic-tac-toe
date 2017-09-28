// Globals
var restartButton = document.getElementById("restartButton");
var spaces = document.getElementsByClassName('space');
var symbols = ['O', 'X'];
var turn = 0;
var notification = document.getElementById('notification');
var winnerMessage = document.getElementById('winnerMessage');




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

	// Remove winner notification and make sure div is hidden
	notification.style.display = 'none';
	winnerMessage.innerHTML = '';


	// Clear board and add click events on squares
	for (i = 0; i < spaces.length; i++ ) {
		spaces[i].innerHTML = '';
		spaces[i].addEventListener("click", takeSpace);
	};
}

function takeSpace() {

	turn++;
	var currentPlayer = symbols[turn % 2];
	this.innerHTML = currentPlayer;
	this.removeEventListener("click", takeSpace);

	for (i = 0; i < wins.length; i++) {
		if ( checkForWin( wins[ i ] ) ) {
			
			// No more clicking!
			for (j = 0; j < spaces.length; j++ ) {
				spaces[j].removeEventListener("click", takeSpace);
			}

			// Notify the players 
			notification.style.display = 'block';
			winnerMessage.innerHTML = "Yay! " + currentPlayer + " won!";


		} else {

			if (turn === 9) {
				notification.style.display = "block";
				winnerMessage.innerHTML = "CAT";
			}
		}
	}

}

function checkForWin(winArray){

	// Wins happens if all these indices contain the same symbol

	let result = spaces[winArray[0]].innerHTML !== '' && 
	spaces[winArray[0]].innerHTML === spaces[winArray[1]].innerHTML &&
	spaces[winArray[0]].innerHTML === spaces[winArray[2]].innerHTML;

	console.log( 'checkForWin ', result );
	return result;


}