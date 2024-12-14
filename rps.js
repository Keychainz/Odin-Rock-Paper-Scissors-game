
function getHumanChoice() 
{
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

function createGameButtons() 
{
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
}

function playAgainButton() 
{
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.id = "play-again-button";
    selectionDiv.innerHTML = ""; // Clear existing buttons
    selectionDiv.appendChild(playAgainButton);

    playAgainButton.addEventListener("click", () => {
        // Reset game state
        userScore = 0;
        computerScore = 0;

        userScoreElement.textContent = userScore;
        computerScoreElement.textContent = computerScore;
        announcementTextElement.textContent = "";
        userPickTextElement.textContent = "";

        // Remove "Play Again" button
        playAgainButton.remove();

        // Recreate Rock, Paper, Scissors buttons
        createGameButtons();

        // Restart the game
        playGame(n); // Best out of n
    });
}

// Function to delay execution
function delay(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to announce "Rock, Paper, Scissors, Shoot!"
async function announceCycle(userChoice, computerChoice)
{
    const announcements = ["Rock", "Paper", "Scissors", "Shoot!", computerChoice];
    
    for (let i = 0; i < announcements.length; i++) 
    {
        announcementTextElement.textContent = announcements[i];
        
        if(i == 4)
        {
            userPickTextElement.textContent = userChoice;
        }

        await delay(600); // Wait .6 second before showing the next announcement
    }
    await delay(400);
}

function playRound(humanChoice, computerChoice) 
{
    if (humanChoice == "Rock") 
    {
        if (computerChoice == "Scissors") 
        {
            incrementUserScore();
            announcementTextElement.textContent = "You win this round, Rock beats Scissors!";
        } 
        else if (computerChoice == "Paper")
        {
            incrementComputerScore();
            announcementTextElement.textContent = "Loser, Paper beats Rock!";
        } 
        else
        {
            announcementTextElement.textContent = "We both went Rock! Lets try again";
        }
    } 
    else if (humanChoice == "Paper") 
    {
        if (computerChoice == "Rock") 
        {
            incrementUserScore();
            announcementTextElement.textContent = "You win this round, Paper beats Rock!";
        } 
        else if (computerChoice == "Scissors") 
        {
            incrementComputerScore();
            announcementTextElement.textContent = "Loser, Scissors beats Paper!";
        } 
        else 
        {
            announcementTextElement.textContent = "We both went Paper! Lets try again";
        }
    }
    else if (humanChoice == "Scissors") 
    {
        if (computerChoice == "Paper") 
        {
            incrementUserScore();
            announcementTextElement.textContent = "You win this round, Scissors beats Paper!";
        } 
        else if (computerChoice == "Rock") 
        {
            incrementComputerScore();
            announcementTextElement.textContent = "Loser, Rock beats Scissors!";
        }
        else 
        {
            announcementTextElement.textContent = "We both went Scissors! Lets try again";
        }
    }
}

async function playGame(x)
{
    announcementTextElement.textContent = `Best out of ${x}`;
    await delay(1000);

    while(userScore < x && computerScore < x)
    {
        announcementTextElement.textContent = "Choose Your Hand";
        
        let userChoice = await getHumanChoice(); 
        let computerChoice = getComputerChoice();

        await announceCycle(userChoice, computerChoice);

        playRound(userChoice, computerChoice);

        // Add a delay after the winner/loser announcement
        await delay(3000); // Wait 5 seconds before the next round
        userPickTextElement.textContent = "";
    }

    console.log(`User Score: ${userScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if(userScore > computerScore)
    {
        announcementTextElement.textContent = "YOU WIN!";
        console.log("YOU WIN!")
    }
    else if(userScore < computerScore)
    {
        announcementTextElement.textContent = "YOU LOSE!";
        console.log("YOU LOSE!")
    }
    else
    {
        // Shouldnt be possible but whatever
        announcementTextElement.textContent = "TIE!";
        console.log("TIE!")
    }

    // Display "Play Again" button
    playAgainButton();
}

const n = 3; // Number of games

// get element IDs for start button, scores, and announcement text
const startButton = document.getElementById("start-button");
const userScoreElement = document.querySelector("#user-score p");
const computerScoreElement = document.querySelector("#computer-score p");
const announcementTextElement = document.querySelector(".announcement-text h1");
const userPickTextElement = document.querySelector(".user-pick h1");
const selectionDiv = document.querySelector(".selection");
let rockButton, paperButton, scissorsButton;


// Add event listener to the button
startButton.addEventListener("click", () => {

    startButton.remove();

    createGameButtons();

    
    userScore = 0;
    computerScore = 0;

    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;

    // Call the playGame function
    playGame(n); // Best out of n
});