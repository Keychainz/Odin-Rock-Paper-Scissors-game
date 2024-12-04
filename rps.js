console.log("Hello World");

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

function getHumanChoice()
{
    let validInput = false;

    while(!validInput)
    {
        let userChoice = prompt("Enter Rock, Paper, or Scissors?");

        if(userChoice.toLowerCase() == "rock")
        {
            validInput = true;
            return "Rock";
        }
        else if(userChoice.toLowerCase() == "paper")
        {
            validInput = true;
            return "Paper";
        }
        else if(userChoice.toLowerCase() == "scissors" || userChoice.toLowerCase() == "scissor")
        {
            validInput = true;
            return "Scissors";
        }
        else
        {
            console.clear(); 
            console.log("Not an option, try again");
        }

    }
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice == "Rock")
    {
        if(computerChoice == "Paper")
        {
            computerScore++;
        }
        else if(computerChoice == "Scissors")
        {
            userScore++;
        }
    }
    else if(humanChoice == "Paper")
    {
        if(computerChoice == "Rock")
        {
            userScore++;
        }
        else if(computerChoice == "Scissors")
        {
            computerScore++;
        }
    }
    else if(humanChoice == "Scissors")
        {
            if(computerChoice == "Paper")
            {
                userScore++;
            }
            else if(computerChoice == "Rock")
            {
                computerScore++;
            }
        }
}

let computerScore = 0;
let userScore = 0;

playRound(getHumanChoice(), getComputerChoice());