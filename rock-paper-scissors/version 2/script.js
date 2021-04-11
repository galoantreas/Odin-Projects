function dod(a) {
    return document.querySelector(a);
}

function id(a) {
    return document.getElementById(a);
}

// variables from .html 
const image = dod(".image");
const allBtn = dod(".btn");
const btnRock = dod(".btnRock");
const btnPaper = dod(".btnPaper");
const btnScissors = dod(".btnScissors");
const score = dod(".score");
const computerInput = dod(".computerInput");
const playerInput = dod(".playerInput");
let pointsPlayer = 0;
let pointsComputer = 0;
const playerImgRock = id("playerImgRock");
const playerImgPaper = id("playerImgPaper");
const playerImgScissors = id("playerImgScissors");
const computerImgRock = id("computerImgRock");
const computerImgPaper = id("computerImgPaper");
const computerImgScissors = id("computerImgScissors");

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
    image.style.display = "none";
    
}


// make a function that plays rock paper scissors
function playRound(playerSelection,computerSelection) {
    // Take the parameters in to variables and make them case insensitive
    let computer = computerSelection;
    console.log(computer);
    let playerRaw = playerSelection ;
    let player = playerRaw.toLowerCase();
    console.log(player);
    
    turnAllImgDisplayToNone();
    // make an if statment that chose the correct photo to display
        if (computer == "rock") {
            return computerImgRock.style.display = "inhert";
        } else if (computer == "paper") {
            return computerImgPaper.style.display = "inhert";
        } else if (computer == "scissors") {
            return computerImgScissors.style.display = "inhert";
        }


        if (player == "rock") {
            return playerImgRock.style.display = "inhert";
        } else if (player == "paper") {
            return playerImgPaper.style.display = "inhert";
        } else if (player == "scissors") {
            return playerImgScissors.style.display = "inhert";
        }

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

    // make an if statment that chose the correct photo to display
    function displayCorrectImg() {

    }

    // Make a function that adds an event listener to the btn and plays (playRound)
function AddEventOnBtn(a,b) {
    return a.addEventListener("click", (event) => {
        playRound(b.innerText,computerPlay())
        
    })
}

AddEventOnBtn(btnRock,btnRock)