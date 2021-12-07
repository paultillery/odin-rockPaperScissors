//Should be working:

//Options for adding event listeners to buttons:
    //Easy: use ID querySelectors to add each one individually
    //More Elegant: use a "btn" class and querySelectorAll to add all at once, work with e variable

//Options for using the playerSelection in PlayRound
    //Easy: if each button has its own eventListener, they can each have their own function parametery
    //More elegant: if using a nodeList and forEach, playerSelection can come from a property in e

//Updates for new approach to rounds & scores:
    //No more "# of 5," but still track roundNumber 
    //Recap updates:
        //If player score is 5, display win prompt
        //Else if computer score is 5, display lose message
        //Else recap scores, ask to play again
    //Note: opting to use a prompt for win/lose, rather than adding a replay button

//Get buttons, give event listeners, have them play 

let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", function(e) {
        //console.log(e);
        //console.log(e.target.id);
        playRound(e.target.id, computerPlay() );
        //e.stopPropagation();
    }));

const playerScoreText = document.querySelector("#player-score-text");
const computerScoreText = document.querySelector("#computer-score-text");
const recapText = document.querySelector("#recap-text");
const nextPrompt = document.querySelector("#next-prompt");

//Function for a single round.
function playRound(playerSelection, computerSelection) {
    
    roundNumber ++;

    //Display who played what
    let roundRecap = 
        "Round " + roundNumber + ": " + 
        "you played " + playerSelection + "; " + 
        "the computer played " + computerSelection + ".";

    let roundResult = "";

    //Set outcome scores & text
    if (playerSelection === computerSelection) {
        roundResult = "It's a tie!";
    }
    else if
    (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerScore ++;
        playerScoreText.textContent = "Player Score: " + playerScore;
        roundResult = "You win this round!";
    }
    else {
        computerScore ++;
        computerScoreText.textContent = "Computer Score: " + computerScore;
        roundResult = "You lose this round.";
    }

    //Show recap; update play prompt after first round
    recapText.textContent = roundRecap + "\n" + roundResult;
    if (roundNumber === 1) {
        nextPrompt.textContent = "Click below to play again!";
    }

    if (playerScore === 5) {
        nextPrompt.textContent = "You won the game!";
        alert("You won the game!");
        location.reload();
    }
  
    if (computerScore === 5) {
        nextPrompt.textContent = "The computer won the game!";
        alert("The computer won the game!");
        location.reload();
    }
}

function computerPlay() {
    let rng = Math.floor(Math.random() * 3);

    if (rng === 0) return "rock";
    else if (rng === 1) return "paper";
    else return "scissors";
}