
function getHumanChoice() {
    return new Promise((resolve) => {
        // Add event listeners to buttons to capture the user's choice
        rockButton.addEventListener("click", () => {
            resolve("Rock");
        }, { once: true }); // Ensures the event listener is removed after the first click

        paperButton.addEventListener("click", () => {
            resolve("Paper");
        }, { once: true });

        scissorsButton.addEventListener("click", () => {
            resolve("Scissors");
        }, { once: true });
    });
}
function getComputerChoice()
{
    let computerChoice = Math.floor(Math.random() * 3);
    
    if(computerChoice === 0)
    {
        return "Rock";
    }
    else if(computerChoice === 1)
    {
        return "Paper";
    }
    else if(computerChoice === 2)
    {
        return "Scissors";
    }
}

function incrementUserScore() 
{
    userScore++; // Increment the score
    userScoreElement.textContent = userScore; // Update the display
}

function incrementComputerScore() 
{
    computerScore++; // Increment the score
    computerScoreElement.textContent = computerScore; // Update the display
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice == "Rock")
    {
        if(computerChoice == "Scissors")
        {
            incrementUserScore();
            console.log("You win this round, Rock beats Scissors!")
        }
        else if(computerChoice == "Paper")
        {
            incrementComputerScore();
            console.log("Loser, Paper beats Rock!")
        }
        else
        {
            console.log("We both went Rock!")
        }
    }
    else if(humanChoice == "Paper")
    {
        if(computerChoice == "Rock")
        {
            incrementUserScore();
            console.log("You win this round, Paper beats Rock!")
        }
        else if(computerChoice == "Scissors")
        {
            incrementComputerScore();
            console.log("Loser, Scissors beats Paper!")
        }
        else
        {
            console.log("We both went Paper!")
        }
    }
    else if(humanChoice == "Scissors")
    {
        if(computerChoice == "Paper")
        {
            incrementUserScore();
            console.log("You win this round, Scissors beats Paper!")
        }
        else if(computerChoice == "Rock")
        {
            incrementComputerScore();
            console.log("Loser, Rock beats Scissors!")
        }
        else
        {
            console.log("We both went Scissors!")
        }
    }
}

async function playGame(x)
{
    announcementTextElement.textContent = "Choose Your Hand";

    for(let i=0; i<x; i++)
    {
        let userChoice = await getHumanChoice(); 
        let computerChoice = getComputerChoice();

        playRound(userChoice, computerChoice);
    }

    console.log(`User Score: ${userScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if(userScore > computerScore)
    {
        console.log("YOU WIN!")
    }
    else if(userScore < computerScore)
    {
        console.log("YOU LOSE!")
    }
    else
    {
        console.log("TIE!")
    }
}


// get element IDs for start button, scores, and announcement text
const startButton = document.getElementById("start-button");
const userScoreElement = document.querySelector("#user-score p");
const computerScoreElement = document.querySelector("#computer-score p");
const announcementTextElement = document.querySelector(".announcement-text h1");
const selectionDiv = document.querySelector(".selection");
let rockButton, paperButton, scissorsButton;


// Add event listener to the button
startButton.addEventListener("click", () => {

    startButton.remove();

    
    rockButton = document.createElement("button");
    rockButton.textContent = "Rock";
    rockButton.id = "rock-button";

    paperButton = document.createElement("button");
    paperButton.textContent = "Paper";
    paperButton.id = "paper-button";

    scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";
    scissorsButton.id = "scissors-button";

    
    selectionDiv.appendChild(rockButton);
    selectionDiv.appendChild(paperButton);
    selectionDiv.appendChild(scissorsButton);

    
    userScore = 0;
    computerScore = 0;

    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;

    // Call the playGame function
    playGame(5); // Play 5 rounds
});