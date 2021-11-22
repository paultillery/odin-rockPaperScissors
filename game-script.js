//Notes:
//TOP said to show results with console.log(); I opted for alert/prompt/confirm instead
//If TOP says to add GUI later, just keep that diff. in mind if they bring console.log back up

let roundNumber;
let playerScore;
let computerScore;

document.addEventListener("load", game());

function game() {
    playerScore = 0;
    computerScore = 0;
    
    for (let i = 0; i <= 5; i++) {
        
        if (i < 5) {
            //Prompt text
            roundNumber = i + 1;
            let promptText = "Round " + roundNumber + " of 5: Enter rock, paper, or scissors.";

            //Alert spawns prompt
            alert( playRound( prompt(promptText), computerPlay() ) );
        } else {
            let winnerText;

            if (playerScore === computerScore) winnerText = "It's a tie!";
            else if (playerScore > computerScore) winnerText = "You win!";
            else winnerText = "The computer wins.";
                
            //Check on line breaks here
            let gameRecap =
                "That's game! Recap:" + "\n" +
                scoreRecap() + "\n" +
                winnerText + "\n\n" +
                "Play again?";
            
            if (confirm(gameRecap)) game();
            else alert("Thanks for playing!");
        }
        
    }
}

//Function for a single round.
function playRound(playerSelection, computerSelection) {

    //Decapitalize for evaluation
    playerSelection = playerSelection.toLowerCase();
    
    //Display who played what
    let roundRecap = 
        "Round " + roundNumber + " of 5: " + 
        "you played " + playerSelection + "; " + 
        "the computer played " + computerSelection + ".";

    let roundResult;

    //Set outcome scores & text
    if (playerSelection === computerSelection) {
        roundResult = "It's a tie!";
    }
    else if
    (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        playerScore ++;
        roundResult = "You win this round!";
    }
    else {
        computerScore ++;
        roundResult = "You lose this round.";
    }

    //Separate function for use in final recap
    //let scoreRecap = "Player: " + playerScore + "\n" + "Computer: " + computerScore;

    return roundRecap + "\n" + roundResult + "\n" + scoreRecap();
}

function computerPlay() {
    let rng = Math.floor(Math.random() * 3);

    if (rng === 0) return "rock";
    else if (rng === 1) return "paper";
    else return "scissors";
}

function scoreRecap() {
    return "Player: " + playerScore + "\n" + "Computer: " + computerScore;
}