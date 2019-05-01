// Rock Paper Scissors game
// Author: Kelvin Tay
// Date: May 1, 2019

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

function playRound(playerSelection, computerSelection) {
    
}