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
const imgRock = dod(".imgRock");
const imgPaper = dod(".imgPaper");
const imgScissors = dod(".imgScissors");


// Make a function that returns radomly rock, paper, scissors
let computerHand = [];
function computerPlay() {
    // Make first an array that contains rock, paper, scissors
    const hand = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * hand.length);
    computerHand.push(hand[random]);
    return hand[random];

}

// Make a function that turns all the display to none for the img
function turnAllImgDisplayToNone() {
    imgRock.style.display = "none";
    imgPaper.style.display = "none";
    imgScissors.style.display = "none";
}

// make a function that plays rock paper scissors
function playRound(playerSelection,computerSelection, ) {
// Take the parameters in to variables and make them case insensitive
let computer = computerSelection;
console.log(computer);
let computerForImg = computer;
console.log(computer);

let playerRaw = playerSelection ;
let player = playerRaw.toLowerCase();

img(computerForImg);

// write an if statment that says rock wins against scissors, scissors wins against paper, paper wins against rock and to give or take points
    if (computer == "rock" && player == "scissors") {
        console.log("A");
        pointsPlayer--,pointsComputer++;
        return "You Lose! Rock beats Scissor";
    } else if (computer == "scissors" && player == "rock") {
        console.log("A");
        pointsPlayer++,pointsComputer--;
        return "You Win! Rock beats Scissor";
    } else if (computer == "scissors" && player == "paper") {
        console.log("A");
        pointsPlayer--,pointsComputer++;
        return "You Lose! Scissor beats Paper";
    } else if (computer == "paper" && player == "scissors") {
        console.log("A");
        pointsPlayer++,pointsComputer--;
        return "You Win! Scissor beats Paper";
    } else if (computer == "paper" && player == "rock") {
        console.log("A");
        pointsPlayer--,pointsComputer++;
        return "You Lose! Paper beats Rock";
    } else if (computer == "rock" && player == "paper") {
        console.log("A");
        pointsPlayer++,pointsComputer--;
        return "You Win! Paper beats Rock";
    } else if (computer == "rock" && player == "rock") {
        console.log("A");
        return "Draw!";
    } else if (computer == "paper" && player == "paper") {
        console.log("A");
        return "Draw!";
    } else if (computer == "scissors" && player == "scissors") {
        console.log("A");
        return "Draw!";
    } else {
        return "Nothing";
    }
}



// Make a function that adds an event listener to the btn and plays (playRound)
function clickEventForBtn(Abtn,Abtn) {
    return Abtn.addEventListener("click", (event) => {
        playRound(Abtn.innerText,computerPlay());
        computerInput.innerText = `${pointsComputer}`;
        playerInput.innerText = `${pointsPlayer}`;
        console.log("pc",pointsComputer);
        console.log("pp",pointsPlayer);

        
    })
}
clickEventForBtn(btnRock,btnRock);
clickEventForBtn(btnPaper,btnPaper);
clickEventForBtn(btnScissors,btnScissors);


// Write a function that shows to the user images of what is the choice of the computer and to himself 
function img(computerForImg) {
if (computerForImg == "rock") {
    turnAllImgDisplayToNone()
    return imgRock.style.display = "inherit";
} else if (computerForImg == "paper") {
    turnAllImgDisplayToNone()
    return imgPaper.style.display = "inherit";
} else if (computerForImg == "scissors") {
    turnAllImgDisplayToNone()
    return imgScissors.style.display = "inherit";
}
}
