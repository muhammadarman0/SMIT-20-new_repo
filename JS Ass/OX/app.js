let boxes = document.querySelectorAll(".box")

let resetBtn = document.querySelector(".reset-btn")

let msgContainer = document.querySelector(".winner-box")

let win = document.getElementById("winner")

let turnoO = true

let winPattren = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnoO) {
            box.innerText = "X"
            turnoO = false
        } else {
            box.innerText = "O"
            turnoO = true
        }
        box.disabled = true
        showWinner()
    })
})

const resetGame = () => {
    msgContainer.style.display = "none"
    
    enable()
    boxes.forEach((box) => {
        box.innerText = "";
    })
}

const disabled = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const enable = () => {
    for (let box of boxes) {
        box.disabled = false
    }
}

const checkWinner = (winner) =>{
    msgContainer.style.display = "block"
    win.innerHTML = `Winner is ${winner}`
    disabled()
}

const showWinner = () => {
    for (let win of winPattren) {
        let pos1 = boxes[win[0]].innerText
        let pos2 = boxes[win[1]].innerText
        let pos3 = boxes[win[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                checkWinner(pos1)
            }
        }

    }
}

resetBtn.addEventListener("click", resetGame)