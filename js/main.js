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

*/

//select all the cells and make it into an array
const cellsArray = Array.from(document.getElementsByClassName("cell"));
//select the restart button
const btn = document.getElementById("restartButton");

//essentially we have an array of the html elements
//1,2,3
//4,5,6
//7,8,9



//declare variables 
let playerX = 'X';
let playerO = 'O';
let currentPlayer = playerX;
let winner = '';
let countTurn=0;

//start game and play game when a cell is clicked
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
	 winningMessageText.innerText = '';
	 countTurn = 0;

});

//create a method playGame to get the value of the mark entered and store it into the cells array
function playGame(e){
	if (e.target.innerText == "" && winner == '') { //checks to see if the board is empty, and there is no winner
		e.target.innerText = currentPlayer //the mark that gets placed on the board is same as the player's title (playerO or playerX)

		countTurn++; // increment turn count
		
		if (currentPlayer == playerX) //switches the currentPlayer to the other player
			currentPlayer = playerO;
		else // if there is a mark on the board and a winner
			currentPlayer = playerX;

	
		
		winningMessageText.innerText = checkWhoWon();
	}
}


//create a method whoWon to determine the winner
function checkWhoWon(){

	//Would love clarity on how this loop works and what it's function is. 
	for (let i = 0; i < 3; i++) { // loop for three times
		if (cellsArray[i * 3].innerText != "" //if the space is not empty
		&& cellsArray[i * 3].innerText == cellsArray[i * 3 + 1].innerText 
		&& cellsArray[i * 3 + 1].innerText == cellsArray[i * 3 + 2].innerText) {
			winner = `Player ${cellsArray[i * 3].innerText} is the winner!`;
		}
	}
/***********This section checks for a vertical winner  ******************************* */
	for (let i = 0; i < 3; i++) { //loop for three times again 
		//-> This loop checks for vertical wins (in example - is the i)
		//loop 1: - 0 0   loop 2: 0 - 0  loop 3: 0 0 - 
		//loop 1: - 0 0   loop 2: 0 - 0  loop 3: 0 0 -
		//loop 1: - 0 0   loop 2: 0 - 0  loop 3: 0 0 -

		if (cellsArray[i].innerText != "" //if the space is not empty
		&& cellsArray[i].innerText == cellsArray[i + 3].innerText // if i + 3 and i + 6 and i are all the same
		&& cellsArray[i + 3].innerText == cellsArray[i + 6].innerText) {
			winner = `Player  ${cellsArray[i].innerText} is the winner!`; //a vertical winner was found.
		}
	}
	/***************************This section checks for exceptions to algorithm...***********************************************************/
     
	//This does a diagonal check for the cases that i === 0, which cannot be defined by the muliplicative for loop above.
	//Specifically it only checks this case:
	// - 0 0
	// 0 - 0
	// 0 0 -
	if(cellsArray[0].innerText != "" //checks for non empty space
	&& cellsArray[0].innerText == cellsArray[4].innerText 
	&& cellsArray[4].innerText == cellsArray[8].innerText)
	 winner = `Player ${cellsArray[0].innerText} is the winner!`;

	 //This checks for the 2nd diagonal case from top right to bottom left
	 //Example
	 // 0 0 -
	 // 0 - 0
	 // - 0 0
	if(cellsArray[2].innerText != "" // checks for non empty space
	&& cellsArray[2].innerText == cellsArray[4].innerText 
	&& cellsArray[4].innerText == cellsArray[6].innerText)
	 winner = `Player ${cellsArray[2].innerText} is the winner!`;

     //check if all 9 turns are done and there is no winner, then game is tied
	if(countTurn == 9 && winner == '')
      return 'The game is tied!';


	 return winner;

}


startGame();
