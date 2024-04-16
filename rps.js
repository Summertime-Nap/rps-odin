// A game of rock, paper, scissors played betweeen a person and the computer in the browser console

// First make a function that chooses rock, paper or scissors

function getComputerChoice() {
    index = Math.floor(Math.random() * 3);
    RPSArray = ['rock', 'paper', 'scissors'];
    return RPSArray[index];
};

