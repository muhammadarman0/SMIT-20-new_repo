// let bgArr = ["red", "green", "blue", "black", "yellow", "pink", "cyan", "lightblue", "lightgreen", "lightyellow", "lightpink", "lightcyan"];

// function generateColor() {
//     let headID = document.getElementById("colorName");
//     if(document.body.style.backgroundColor === "black") {
//         headID.style.color= "white";
//     }else{
//         headID.style.color = "black"
//     }
//     let randomColor = bgArr[Math.floor(Math.random() * bgArr.length)];
//     document.body.style.backgroundColor = randomColor;
//     headID.innerHTML = randomColor
// }

function generateColor(){
    let headID = document.getElementById("colorName")
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let rgbColor = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = rgbColor;
    headID.innerHTML = rgbColor

}