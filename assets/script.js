var name = prompt("What is your name?");
confirm("Welcome, " + name + "! You are playing rock, paper, scissors!");

var choices = ["R", "P", "S"];
var results = []
// prompt user to choose R P or S

var userInput = prompt("Choose R, P, or S");
// computer chooses R P or S at random
var botInput = Math.floor(Math.random()*choices.length-1);
var botChoice = choices[botInput];
var userChoice = userInput.toUpperCase();
// computer evaluates who won
if (userChoice === botChoice) {
    alert("You have tied!");
} else if (userChoice === "R" && botChoice === "S" || userChoice === "P" && botChoice === "R" || userChoice === "S" && botChoice === "P") {
    alert("You win!")
    results.push("W");
} else {
    alert("You lose!")
}
return 


// computer shows wins, losses and asks if user wants to play again
    // if user does, start back at prompt for R P or S
    // if user does not want to play again, alert with a thanks for playing and then back to first screen

