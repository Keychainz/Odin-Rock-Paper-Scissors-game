
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
            console.log("Not an option, try again");
        }

    }
}

function playRound(humanChoice, computerChoice)
{
    if(humanChoice == "Rock")
    {
        if(computerChoice == "Scissors")
        {
            userScore++;
            console.log("You win this round, Rock beats Scissors!")
        }
        else if(computerChoice == "Paper")
        {
            computerScore++;
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
            userScore++;
            console.log("You win this round, Paper beats Rock!")
        }
        else if(computerChoice == "Scissors")
        {
            computerScore++;
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
            userScore++;
            console.log("You win this round, Scissors beats Paper!")
        }
        else if(computerChoice == "Rock")
        {
            computerScore++;
            console.log("Loser, Rock beats Scissors!")
        }
        else
        {
            console.log("We both went Scissors!")
        }
    }
}

function playGame(x)
{
    for(let i=0; i<x; i++)
    {
        let userChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(userChoice, computerChoice);

        // console.log(`User: ${userChoice}`);
        // console.log(`Computer: ${computerChoice}`);

        // console.log(`User Score: ${userScore}`);
        // console.log(`Computer Score: ${computerScore}`);
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

let userScore = 0;
let computerScore = 0;

playGame(5);