//declare all the variables
/*
let winningCombinations= [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

TODO: implement restart button
function clearBoard(){

}
*/

//select all the cells and make it into an array
const cellsArray = Array.from(document.getElementsByClassName("cell"))
//select the restart button
const btn = document.getElementById("restartButton")

//declare variables for X and O

let playerX = 'X';
let playerO = 'O';
let currentPlayer = playerX;
let winner = '';
//let cellsArray = [9];

//create a method playGame to get the value of the mark entered and store it into the cells array
//when a cell is clicked start game



function startGame(){
cellsArray.forEach(function(cell){
	cell.addEventListener('click', playGame)
});
}

//add an event listener to the restart button to clear the board for a new game
btn.addEventListener('click', function (){
    
	for (let i = 0; i <= cellsArray.length-1; i++) {
		cellsArray[i].innerText = "";
    
     }
	 currentPlayer = playerX;
	 winner = '';

});



//playGame()

function playGame(e){
	if (e.target.innerText == "" && winner == '') {
		e.target.innerText = currentPlayer;

		if (currentPlayer == playerX)
			currentPlayer = playerO;
		else
			currentPlayer = playerX;

		winningMessageText.innerText = checkWhoWon();
	}
}

//create a method whoWon to determine the winner
function checkWhoWon(){
	for (let i = 0; i < 3; i++) {
		if (cellsArray[i * 3].innerText != "" && cellsArray[i * 3].innerText == cellsArray[i * 3 + 1].innerText && cellsArray[i * 3 + 1].innerText == cellsArray[i * 3 + 2].innerText) {
			winner = 'Player' + cellsArray[i * 3].innerText + ' is the winner!';
		}
	}
	for (let i = 0; i < 3; i++) {
		if (cellsArray[i].innerText != "" && cellsArray[i].innerText == cellsArray[i + 3].innerText && cellsArray[i + 3].innerText == cellsArray[i + 6].innerText) {
			winner = 'Player' + cellsArray[i].innerText + ' is the winner!';
		}
	}
     
	if(cellsArray[0].innerText != "" && cellsArray[0].innerText == cellsArray[4].innerText && cellsArray[4].innerText == cellsArray[8].innerText)
	 winner = 'Player' + cellsArray[0].innerText + ' is the winner!';

	if(cellsArray[2].innerText != "" && cellsArray[2].innerText == cellsArray[4].innerText && cellsArray[4].innerText == cellsArray[6].innerText)
	 winner = 'Player' + cellsArray[2].innerText + ' is the winner!';

     //check to see if the game is tied
	
	if(!cellsArray.includes("") && winner == '')
	 return 'The game is tied!';

	 return winner;

}

startGame();