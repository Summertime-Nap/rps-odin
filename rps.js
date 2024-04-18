// A game of rock, paper, scissors played betweeen a person and the computer in the browser console

// First make a function that chooses rock, paper or scissors

function getComputerChoice() {
    index = Math.floor(Math.random() * 3);
    RPSArray = ['rock', 'paper', 'scissors'];
    return RPSArray[index];
};

//use the prompt method to get the players choice and store it in a variable

let playerChoice = prompt('Choose between rock, paper or scissors');
playerChoice = playerChoice.toLowerCase();

//function that takes in the player and computer choice to play a single round of rps, determines a winner and outputs appropriate dialogue

function playRound(computerChoice, playerChoice) {
    if (playerChoice == computerChoice) {
        return 'Its a tie';
    }else if (playerChoice == 'rock') {
        if (computerChoice == 'paper') {
            return 'you lose! paper beats rock'
        }else if (computerChoice == 'scissors') {
            return 'you win! rock beat scissors'
        }
    }else if (playerChoice == 'paper') {
        if (computerChoice == 'scissors') {
            return 'you lose! scissors beats paper'
        }else if (computerChoice == 'rock') {
            return 'you win! paper beat rock'
        }
    }else if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            return 'you lose! rock beats scissors'
        }else if (computerChoice == 'scissors') {
            return 'you win! scissors beat paper'
        }
    }else {
        return 'invalid input. please refresh the page and try agian'
    };
}

console.log(playRound(getComputerChoice(),playerChoice));