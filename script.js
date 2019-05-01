// Rock Paper Scissors game
// Author: Kelvin Tay
// Date: May 1, 2019

// Generates a random selection for the computer.
function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        return "rock";
    }

    if (random === 2) {
        return "paper";
    }

    return "scissors";
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    const computerWinMessage = "Computer Wins!";
    const playerWinMessage = "You Win!"

    if (playerSelectionLowerCase === computerSelection) {

        return "It's a tie! Player and Computer both chose "
                + computerSelection;
                
    } else if (playerSelectionLowerCase === "rock") {
        
        if (computerSelection  === "paper") {
            return computerWinMessage + " Paper beats Rock";
        } else {
            return playerWinMessage + " Rock beats Scissors";
        }

    } else if (playerSelectionLowerCase === "paper") {
        if (computerSelection  === "scissors") {
            return computerWinMessage + " Scissors beats Paper";
        } else {
            return playerWinMessage + " Paper beats Rock";
        }
    } else { // Player chooses scissors
        if (computerSelection  === "rock") {
            return computerWinMessage + " Rock beats Scissors";
        } else {
            return playerWinMessage + " Scissors beats Paper";
        }
    }
}