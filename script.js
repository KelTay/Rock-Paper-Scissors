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
    } else if (playerSelectionLowerCase === "scissors") { 
        if (computerSelection  === "rock") {
            return computerWinMessage + " Rock beats Scissors";
        } else {
            return playerWinMessage + " Scissors beats Paper";
        }
    } else {
        return "Invalid choice";
    }
}


function game() {
    let roundResultMessage;
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let computerSelection;

    console.log("Rock, Paper, Scissors. Best of 5 rounds.\n");

    for (let i = 1; i <= 5; ++i) {
        computerSelection = computerPlay();
        playerSelection = prompt("Please choose either Rock, Paper, or Scissors: ");
        roundResultMessage = playRound(playerSelection, computerSelection);

        console.log(roundResultMessage);
        if (roundResultMessage.charAt(0) === "C") {
            ++computerScore;
            console.log("Computer: " + computerScore);
            console.log("Player: " + playerScore);
        } else if (roundResultMessage.charAt(0) === "Y") {
            ++playerScore;
            console.log("Computer: " + computerScore);
            console.log("Player: " + playerScore);
        } else {
            console.log("Invalid choice");
        }
    }

    if (playerScore > computerScore) {
        console.log("You win! Congratulations!");
    } else if (playerScore < computerScore) {
        console.log("Oh no! Computer has beaten you!");
    } else {
        console.log("It's a tie!");
    }
    
}