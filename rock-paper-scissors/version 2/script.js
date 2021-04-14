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
const playerH4Rock = id("playerH4Rock");
const playerH4Paper = id("playerH4Paper");  
const playerH4Scissors = id("playerH4Scissors");
const computerH4Rock = id("computerH4Rock");
const computerH4Paper = id("computerH4Paper");
const computerH4Scissors = id("computerH4Scissors");
let scorePlayer = dod(".scorePlayer");
let scoreComputer = dod(".scoreComputer");

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
    playerH4Rock.firstElementChild.style.display = "none";
    playerH4Paper.firstElementChild.style.display = "none";
    playerH4Scissors.firstElementChild.style.display = "none";
    
    computerH4Rock.firstElementChild.style.display = "none";
    computerH4Paper.firstElementChild.style.display = "none";
    computerH4Scissors.firstElementChild.style.display = "none";
}


// make a function that plays rock paper scissors
function playRound(playerSelection,computerSelection) {
    // Take the parameters in to variables and make them case insensitive
    let computer = computerSelection;
    let playerRaw = playerSelection ;
    let player = playerRaw.toLowerCase();

    turnAllImgDisplayToNone();
    playerDisplayPhotos(player);
    computerDisplayPhotos(computer);
    winLose(computer,player)
    displayScore(pointsPlayer,pointsComputer);
    console.log(pointsPlayer);
    }




    // a function that decites who wins
    function winLose(computer,player) {
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
        }
        console.log( "hello")
    }


    // Make a function that adds an event listener to the btn and plays (playRound)
function AddEventOnBtn(a,b) {
    return a.addEventListener("click", (event) => {
        playRound(b.innerText,computerPlay())
        
    })
}
    function playerDisplayPhotos(playerChoise) {
         // make an if statment that chose the correct photo to display
        if (playerChoise == "rock") {
                return playerH4Rock.firstElementChild.style.display = "inherit";
            } else if (playerChoise == "paper") {
                return playerH4Paper.firstElementChild.style.display = "inherit";
            } else if (playerChoise == "scissors") {
                return playerH4Scissors.firstElementChild.style.display = "inherit";
            }
    }

    function computerDisplayPhotos(computerChoise)  {     
        // make an if statment that chose the correct photo to display
        if (computerChoise == "rock") {
            return computerH4Rock.firstElementChild.style.display = "inherit";
        } else if (computerChoise == "paper") {
            return computerH4Paper.firstElementChild.style.display = "inherit";
        } else if (computerChoise == "scissors") {
            return computerH4Scissors.firstElementChild.style.display = "inherit";
        }
    }

    // make a function that takes the points of the players and displays it 
    function displayScore( Player,Computer) {
        scorePlayer.innerText =   Player;
        scoreComputer.innerText = Computer;
    }

    




AddEventOnBtn(btnRock,btnRock);
AddEventOnBtn(btnPaper,btnPaper);
AddEventOnBtn(btnScissors,btnScissors);