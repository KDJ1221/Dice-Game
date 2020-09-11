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

rollBtn.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber)

    if (player1Turn){
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        game_message.textContent = "Player 2 Turn"
    } else {
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        game_message.textContent = "Player 1 Turn"
        
    }

    player1Turn = !player1Turn
})