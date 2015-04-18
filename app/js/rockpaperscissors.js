////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`	
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
        if (playerMove === computerMove) {
                return "tie";
	} 
	if (playerMove + computerMove === "rockscissors" || playerMove + computerMove === "paperrock" || playerMove + computerMove === "scissorspaper") {
                return "player wins";
        } 
	return "computer wins";

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors" + '\n');
    var playerWins = 0;
    var computerWins = 0;
    
    for (var i=1; playerWins<5 && computerWins<5; i +=1) {
        console.log("Let's go for Round " + i);
        var playerMove; var computerMove;
        var winner;
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);

        console.log(winner + ' -> Player chose ' + playerMove + ' while Computer chose ' + computerMove + '\n');        
        if (winner === 'player wins') {
            playerWins +=1;
        } else if (winner === 'computer wins') {
            computerWins +=1;
        }   
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

function playToX(x) {
    console.log("Let's play Rock, Paper, Scissors" + '\n');
    var playerWins = 0;
    var computerWins = 0;
    
    for (var i=1; playerWins<x && computerWins<x; i +=1) {
        console.log("Let's go for Round " + i);
        var playerMove; var computerMove;
        var winner;
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);
        console.log(winner + ' -> Player chose ' + playerMove + ' while Computer chose ' + computerMove + '\n');
        
        if (winner === 'player wins') {
            playerWins +=1;
        } else if (winner === 'computer wins') {
            computerWins +=1;
        } 
        
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}