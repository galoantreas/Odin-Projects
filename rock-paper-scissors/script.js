function dod(a) {
    return document.querySelector(a);
}

// variables from .html 
const allBtn = dod(".btn");
const btnRock = dod(".rock");
const btnPaper = dod(".paper");
const btnScissors = dod(".scissors");
const score = dod(".score");
const computerInput = dod(".computerInput");
const playerInput = dod(".playerInput");
let pointsPlayer = 0;
let pointsComputer = 0;


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
let playerRaw = playerSelection ;
let player = playerRaw.toLowerCase();

// write an if statment that says rock wins against scissors, scissors wins against paper, paper wins against rock and to give or take points
    if (computer == "rock" && player == "scissors") {
        pointsPlayer--,pointsComputer++;
        return "You Lose! Rock beats Scissor";
    } else if (computer == "scissors" && player == "rock") {
        pointsPlayer++,pointsComputer--;
        return "You Win! Rock beats Scissor";
    } else if (computer == "scissors" && player == "paper") {
        pointsPlayer--,pointsComputer++;
        return "You Lose! Scissor beats Paper";
    } else if (computer == "paper" && player == "scissors") {
        pointsPlayer++,pointsComputer--;
        return "You Win! Scissor beats Paper";
    } else if (computer == "paper" && player == "rock") {
        pointsPlayer--,pointsComputer++;
        return "You Lose! Paper beats Rock";
    } else if (computer == "rock" && player == "paper") {
        pointsPlayer++,pointsComputer--;
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


// Make a function that adds an event listener to the btn and plays (playRound)
function clickEventForBtn(Abtn,Abtn) {
    return Abtn.addEventListener("click", (event) => {
        console.log(playRound(Abtn.innerText,computerPlay()));
        playRound(Abtn.innerText,computerPlay());
        computerInput.innerText = `${pointsComputer}`;
        playerInput.innerText = `${pointsPlayer}`;
        
    })
}
clickEventForBtn(btnRock,btnRock);
clickEventForBtn(btnPaper,btnPaper);
clickEventForBtn(btnScissors,btnScissors);

