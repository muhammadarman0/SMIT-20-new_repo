// const { use } = require("react");

let userScore = 0;
let compScore = 0;

let userScoreBoard = document.getElementById("user-score")
let compScoreBoard = document.getElementById("comp-score")
const msg = document.getElementById("msg")
const choices = document.querySelectorAll(".choice")

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"]
    const indexValue = Math.floor(Math.random() * 3)
    return option[indexValue]
}

const Draw = () => {
    msg.style.backgroundColor = "grey"
    msg.style.color = "white"
    msg.innerHTML = ` It's a tie!`
}

const showWinner = (userWins) => {
    if (userWins) {
        userScore++;
        userScoreBoard.innerHTML = userScore;
        // msg.innerHTML = `You win ${userChoice} beats by ${compChoice}`
        msg.innerHTML = `You Win a game`
        msg.style.backgroundColor = "green"
        msg.style.color = "white"
        console.log("You won");

    } else {
        compScore++;
        compScoreBoard.innerHTML = compScore;
        // msg.innerHTML = `You win ${compChoice} beats by ${userChoice}`
        msg.innerHTML = `Computer Win a game`
        msg.style.backgroundColor = "red"
        msg.style.color = "white"
        console.log("You lose");

    }
}

const playGame = (userChoice) => {
    console.log("User choice", userChoice);
    let compChoice = genCompChoice()
    console.log("Comp choice", compChoice);
    if (userChoice === compChoice) {
        Draw()
    } else {
        let userWins = true;
        if (userChoice === "rock") {
            userWins = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            userWins = compChoice === "scissors" ? false : true
        } else {
            userWins = compChoice === "rock" ? false : true
        }
        showWinner(userWins)
    }


}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })

})

