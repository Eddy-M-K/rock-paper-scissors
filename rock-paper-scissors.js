let computerPlay = function() {
    let options = ["Rock", "Paper", "Scissors"];

    return options[Math.floor(Math.random()*options.length)];
};

let playRound = function(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK") {
        switch (computerSelection) {
            case "Rock":
                return 0;
                break;
            case "Paper":
                return -1;
                break;
            case "Scissors":
                return 1; 
        }
    } else if (playerSelection.toUpperCase() == "PAPER") {
        switch (computerSelection) {
            case "Rock":
                return 1;
                break;
            case "Paper":
                return 0;
                break;
            case "Scissors":
                return -1; 
        }
    } else if (playerSelection.toUpperCase() == "SCISSORS") {
        switch (computerSelection) {
            case "Rock":
                return -1;
                break;
            case "Paper":
                return 1;
                break;
            case "Scissors":
                return 0; 
        }
    } else playRound(prompt("Choose Rock, Paper, or Scissors"), computerSelection);
};

let startGame = function() {
    console.log("Welcome to the Game of Rock, Paper, Scissors! Your opponent is a computer. First to 3 wins is the overall winner!")
    let computerWins = 0, playerWins = 0;

    while (playerWins < 3 && computerWins < 3) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        let num = playRound(playerSelection, computerSelection);
        if (num == 1) {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            playerWins++;
        } else if (num == -1) {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            computerWins++;
        } else console.log("Tie!")
    }

    if (playerWins > computerWins) {
        console.log("You Won the Game!");
    } else console.log("You Lost the Game...");

    return;
};