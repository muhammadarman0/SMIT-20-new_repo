let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".winner")
let msg = document.querySelector("#winner-name");
let ResetBtn = document.querySelector("#reset-btn")
let turn0 = true;


const resetGame = () => {
    boxes.disabled = false;
    msgContainer.style.display = "none"
    enableBoxes()
    boxes.forEach((box) => {
        box.innerText = "";
    });
}

let winpattren = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];
// console.log(winpattren[3]);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false
        } else {
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true;
        checkWin()
    })
})

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
    }
}


const poseWinner = (winner) => {
    msg.innerText = winner + " is Winner";
    msgContainer.style.display = "block"
    disableBoxes()
   
}


const checkWin = () => {
    for (let win of winpattren) {
        let pos1 = boxes[win[0]].innerText;
        let pos2 = boxes[win[1]].innerText;
        let pos3 = boxes[win[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // console.log(pos1 + " is winner");
                poseWinner(pos1)
            }
        }
    }
}

newBtn.addEventListener("click", resetGame)
ResetBtn.addEventListener("click", resetGame)

