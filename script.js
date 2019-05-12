// Rock Paper Scissors game
// Author: Kelvin Tay
// Date: May 1, 2019

const timeout = 1000; // timeout after player makes selection.

// Get the start button
const startButton = document.getElementById("start-screen")
    .getElementsByTagName("button");
startButton[0].addEventListener("click", startGame);

// Get the rock button
const rockButton = document.querySelector("#button-rock");
rockButton.addEventListener("click", selectRock);

// Get the paper button
const paperButton = document.querySelector("#button-paper");
paperButton.addEventListener("click", selectPaper);

// Get the scissors button
const scissorsButton = document.querySelector("#button-scissors");
scissorsButton.addEventListener("click", selectScissors);

// Get the display for player's choice
const playerChoice = document.querySelector("#player-choice");

//Get the display for computer's choice
const computerChoice = document.querySelector("#computer-choice");

// Get the current round
const round = document.querySelector("#div-round");

// Get the computer's score
const computerScore = document.querySelector("#computer-score");

// Get the player's score
const playerScore = document.querySelector("#player-score");

// Get the main message <p> tag
const mainMessage = document.querySelector("#main-message");



// Generates a random selection for the computer.
function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random === 1) {
        return "Rock";
    }

    if (random === 2) {
        return "Paper";
    }

    return "Scissors";
}

// Determines the winner for each round.
// Return a message displaying the winner of the round.
function playRound(playerSelection, computerSelection) {

    let playerSelectionCapitalized = playerSelection.slice(0, 1).toUpperCase()
        + playerSelection.slice(1).toLowerCase();
    const computerWinMessage = "Computer wins the round.";
    const playerWinMessage = "You win the round!"

    if (playerSelectionCapitalized === computerSelection) {

        return "It's a tie! Player and Computer both chose "
            + computerSelection;

    } else if (playerSelectionCapitalized === "Rock") {

        if (computerSelection === "Paper") {
            return computerWinMessage + " Paper beats Rock";
        } else {
            return playerWinMessage + " Rock beats Scissors";
        }

    } else if (playerSelectionCapitalized === "Paper") {

        if (computerSelection === "Scissors") {
            return computerWinMessage + " Scissors beats Paper";
        } else {
            return playerWinMessage + " Paper beats Rock";
        }

    } else if (playerSelectionCapitalized === "Scissors") {

        if (computerSelection === "Rock") {
            return computerWinMessage + " Rock beats Scissors";
        } else {
            return playerWinMessage + " Scissors beats Paper";
        }

    } else {
        return "Invalid choice";
    }
}

/*
// Run the rock, paper, scissors game
function game() {
    let roundResultMessage;
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let computerSelection;
    let currentRound = 1;

    for (let i = 1; i <= 5; ++i) {
        computerSelection = computerPlay();
        playerSelection = prompt("Please choose either Rock, Paper, or Scissors: ");
        roundResultMessage = playRound(playerSelection, computerSelection);

        while (roundResultMessage === "Invalid choice") {
            playerSelection = prompt("Invalid choice. Please choose either Rock, Paper, or Scissors: ");
            roundResultMessage = playRound(playerSelection, computerSelection);
        }

        console.log(roundResultMessage);
        if (roundResultMessage.charAt(0) === "C") {
            ++computerScore;
            console.log("Computer: " + computerScore);
            console.log("Player: " + playerScore);
        } else if (roundResultMessage.charAt(0) === "Y") {
            ++playerScore;
            console.log("Computer: " + computerScore);
            console.log("Player: " + playerScore);
        }

        console.log(currentRound++);

    }

    if (playerScore > computerScore) {
        console.log("You win! Congratulations!");
    } else if (playerScore < computerScore) {
        console.log("Oh no! Computer has beaten you!");
    } else {
        console.log("It's a tie!");
    }
    
}
*/

// Start the game by removing the start screen
function startGame() {
    const startScreen = document.querySelector("#start-screen");
    startScreen.remove();
}

// Called when rock button is clicked
function selectRock() {

    // Clear the main message display
    mainMessage.textContent = " ";

    // Display the player's choice
    playerChoice.textContent = "Rock";

    // Display the computer's choice
    displayComputerChoice();

    window.setTimeout(displayWinner, timeout);
}

// Called when paper button is clicked
function selectPaper() {

    mainMessage.textContent = " ";
    playerChoice.textContent = "Paper";
    displayComputerChoice();
    window.setTimeout(displayWinner, timeout);
}

// Called when scissors button is clicked
function selectScissors() {

    mainMessage.textContent = " ";
    playerChoice.textContent = "Scissors";
    displayComputerChoice();
    window.setTimeout(displayWinner, timeout);
}

// Display the computer's choice
function displayComputerChoice() {
    computerChoice.textContent = computerPlay();
}

// Display the round winner
function displayWinner() {

    let winnerMessage = playRound(playerChoice.textContent,
        computerChoice.textContent);
    mainMessage.textContent = winnerMessage;

    if (winnerMessage.charAt(0) === "Y") {
        updateScoreAndRound(1); // Player wins round
    } else if (winnerMessage.charAt(0) === "C") {
        updateScoreAndRound(2); // Computer wins round
    }
}

// Set the score and advance round
// number param indicates the winner of the round
// "1" means the player wins round
// "2" means the computer wins round
function updateScoreAndRound(number) {

    switch (number) {
        case 1:
            ++playerScore.textContent;
            break;
        case 2:
            ++computerScore.textContent;
            break;
        default:
            console.log("Error in function updateScoreAndRound "
                + "switch statement.");
            break;
    }

    if (round.textContent < 5) {
        ++round.textContent;
        return;
    }

    if (playerScore.textContent > computerScore.textContent) {
        mainMessage.textContent = "Game Over. You win! Congratulations!";
    } else if (playerScore < computerScore) {
        mainMessage.textContent = "Game Over. Oh no! Computer has beaten you!";
    } else {
        mainMessage.textContent = "Game Over. It's a tie!";
    }
}