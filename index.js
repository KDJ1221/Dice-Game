// Create variables for the game state
let playerOneScore = 0
let playerTwoScore = 0
let player1Turn = true

// Create variables for references to the DOM 
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const game_message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function displayButtons () {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

// Main Game Setup
rollBtn.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn){
        playerOneScore += randomNumber
        player1Scoreboard.textContent = playerOneScore
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        game_message.textContent = "Player 2 Turn"
    } else {
        playerTwoScore += randomNumber
        player2Scoreboard.textContent = playerTwoScore
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        game_message.textContent = "Player 1 Turn"
        
    }

    if(playerOneScore >= 20) {
        game_message.textContent = "Player 1 has won! 🥳"
        displayButtons()
    } else if(playerTwoScore >= 20){
        game_message.textContent = "Player 2 has won! 🥳"
        displayButtons()
    }

    player1Turn = !player1Turn
})
// Reset Button Setup
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    game_message.textContent = "Player 1 Turn"

    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0

    player2Dice.textContent = "-"
    player1Dice.textContent = "-"

    playerOneScore = 0
    playerTwoScore = 0

    player1Turn = true

    resetBtn.style.display = "none"
    rollBtn.style.display = "block"   

    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}