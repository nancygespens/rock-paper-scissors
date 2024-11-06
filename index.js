let resultDisplay = document.getElementById("resultDisplay");
let movesLeftDisplay = document.getElementById("movesLeft");
let playerScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");

let movesLeft = 5;
let playerScore = 0;
let computerScore = 0;

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let newGameButton = document.getElementById("newGameButton");

// Function to start the round
function playRound(playerChoice) {
    if (movesLeft > 0) {
        let computerChoice = getComputerChoice();
        let roundResult = determineWinner(playerChoice, computerChoice);
        
        resultDisplay.textContent = roundResult;
        updateScores();
        updateMovesLeft();
        
        if (movesLeft === 0) {
            endGame();
        }
    }
}

// Function to get random computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to determine round winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        playerScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

// Function to update score and moves left
function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

// Function to update moves left
function updateMovesLeft() {
    movesLeft--;
    movesLeftDisplay.textContent = movesLeft;
}

// Function to end the game and show the final result
function endGame() {
    if (playerScore > computerScore) {
        resultDisplay.textContent = "You won the game!";
        resultDisplay.style.color = "#606c38";  
    } else if (computerScore > playerScore) {
        resultDisplay.textContent = "Computer won the game!";
        resultDisplay.style.color = "#c1121f";  
    } else {
        resultDisplay.textContent = "It's a tie!";
        resultDisplay.style.color = '#778da9';  
    }
}

// Function to reset the game
function resetGame() {
    movesLeft = 5;
    playerScore = 0;
    computerScore = 0;
    resultDisplay.textContent = "Result will appear here";
    resultDisplay.style.color = '#778da9';
    updateScores();
    movesLeftDisplay.textContent = movesLeft;
}


// Add event listeners to buttons
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
newGameButton.addEventListener("click", resetGame);
