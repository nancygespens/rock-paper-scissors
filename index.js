// Select DOM elements
const resultDisplay = document.getElementById("resultDisplay");
const movesLeftDisplay = document.getElementById("remainingMoves");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const newGameButton = document.getElementById("newGameButton");

// Game state variables
let remainingMoves = 5;
let playerScore = 0;
let computerScore = 0;

// Play a round
function playRound(playerChoice) {
    if (remainingMoves > 0) {
        const computerChoice = getComputerChoice();
        const roundResult = determineWinner(playerChoice, computerChoice);

        resultDisplay.textContent = roundResult;
        resultDisplay.className = ""; // Reset result styling
        resultDisplay.classList.add(getResultClass(roundResult));
        
        updateScores();
        updateMovesLeft();

        if (remainingMoves === 0) {
            endGame();
        }
    }
}

// Random computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Determine winner
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

// Get result class for styling
function getResultClass(result) {
    if (result === "You win this round!") return "win";
    if (result === "It's a tie!") return "tie";
    if (result === "Computer wins this round!") return "lose"; // Specific class for computer win
    return "";
}

// Update scores
function updateScores() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

// Update remaining moves
function updateMovesLeft() {
    remainingMoves--;
    movesLeftDisplay.textContent = remainingMoves;
}

// End game
function endGame() {
    if (playerScore > computerScore) {
        resultDisplay.textContent = "You won the game!";
        resultDisplay.classList.add("win");
    } else if (computerScore > playerScore) {
        resultDisplay.textContent = "Computer won the game!";
        resultDisplay.classList.add("lose");
    } else {
        resultDisplay.textContent = "It's a tie!";
        resultDisplay.classList.add("tie");
    }
}

// Reset game
function resetGame() {
    remainingMoves = 5;
    playerScore = 0;
    computerScore = 0;
    resultDisplay.textContent = "Result will appear here";
    resultDisplay.className = "tie";
    updateScores();
    movesLeftDisplay.textContent = remainingMoves;
}

// Add event listeners
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
newGameButton.addEventListener("click", resetGame);
