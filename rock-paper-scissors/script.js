

// Make a function that returns radomly rock, paper, scissors
let computerHand = [];
function computerPlay() {
    // Make first an array that contains rock, paper, scissors
    const hand = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * hand.length);
    computerHand.push(hand[random]);
    return hand[random];

}
// make a function that plays rock paper scissors
function playRound(playerSelection,computerSelection ) {
// Take the parameters in to variables and make them case insensitive
let computer = computerSelection;
let player = playerSelection ;
player.toLowerCase();

// write an if statment that says rock wins against scissors, scissors wins against paper, paper wins against rock
    if (computer == "rock" && player == "scissors") {
        return "You Lose! Rock beats Scissor";
    } else if (computer == "scissors" && player == "rock") {
        return "You Win! Rock beats Scissor";
    } else if (computer == "scissors" && player == "paper") {
        return "You Lose! Scissor beats Paper";
    } else if (computer == "paper" && player == "scissors") {
        return "You Win! Scissor beats Paper";
    } else if (computer == "paper" && player == "rock") {
        return "You Lose! Paper beats Rock";
    } else if (computer == "rock" && player == "paper") {
        return "You Win! Paper beats Rock";
    } else if (computer == "rock" && player == "rock") {
        return "Draw!";
    } else if (computer == "paper" && player == "paper") {
        return "Draw!";
    } else if (computer == "scissors" && player == "scissors") {
        return "Draw!";
    } else {
        return "Nothing";
    }
}
