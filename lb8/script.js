document.addEventListener("DOMContentLoaded", function() {
    let playerNumber = 0;
    let playerScore = 0;
    let computerNumber = 0;
    let computerScore = 0;
    let winsNeeded = 3;

    const startGameButton = document.getElementById("startGame");
    const playerNumberElement = document.getElementById("playerNumber");
    const computerNumberElement = document.getElementById("computerNumber");
    const resultElement = document.getElementById("result");

    startGameButton.addEventListener("click", startGame);

    do{
        playerName = prompt("Please enter your name", "Player1");
        if (!playerName) {
            alert("Name cannot be empty. Please enter a valid name.");
        }
    }while (!playerName)
    const playerNameElement = document.getElementById("playerName");
    playerNameElement.textContent = playerName;
    function startGame() {
        if (playerNumber < winsNeeded && computerNumber < winsNeeded) {
            const playerNumber = Math.floor(Math.random() * 10) + 1;
            const computerNumber = Math.floor(Math.random() * 10) + 1;

            playerNumberElement.textContent = playerNumber;
            computerNumberElement.textContent = computerNumber;

            if (playerNumber > computerNumber) {
                playerScore++;
                document.getElementById('playerScore').textContent++;
                resultElement.textContent = "You win this round!";
            } else if (playerNumber < computerNumber) {
                computerScore++;
                document.getElementById('computerScore').textContent++;
                resultElement.textContent = "Computer wins this round!";
            } else {
                resultElement.textContent = "It's a tie!";
            }


            if (playerScore >= winsNeeded || computerScore >= winsNeeded) {
                endGame();
            }
        }
    }

    function endGame() {
        if (playerScore >= winsNeeded) {
            document.getElementById('playerScore').style.backgroundColor = "green";
            resultElement.textContent = "Congratulations! You win the game!";
        } else {
            document.getElementById('computerScore').style.backgroundColor = "green";
            resultElement.textContent = "Computer wins the game. Try again!";
        }

        startGameButton.removeEventListener("click", startGame);
        startGameButton.disabled = true;
    }
});
