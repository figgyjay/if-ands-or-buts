const prompt = require('prompt-sync')({sigint: true})

let Player1 = (prompt("Player 1: Pick Paper, Rock or Scissors "))

let Player2 = (prompt("Player 1: Pick Paper, Rock or Scissors "))

//if player one wins

if (Player1 === "rock" && Player2 === "scissors"){
    console.log("Player 1 wins! ")
}
if (Player1 === "scissors" && Player2 === "paper"){
    console.log("Player 1 wins! ")
}
if (Player1 === "paper" && Player2 === "rock"){
    console.log("Player 1 wins! ")
}

//if player two wins:

if (Player2 === "rock" && Player1 === "scissors"){
    console.log("Player 1 wins! ")
}
if (Player2 === "scissors" && Player1 === "paper"){
    console.log("Player 1 wins! ")
}
if (Player2 === "paper" && Player1 === "rock"){
    console.log("Player 1 wins! ")
}

// if there is a tie:
if (Player1 === "rock" && Player2 === "rock"){
    console.log(" Tie! ")
}
if (Player1 === "scissors" && Player2 === "scissors"){
    console.log(" Tie! ")
}
if (Player1 === "paper" && Player2 === "paper"){
    console.log(" Tie! ")
}
