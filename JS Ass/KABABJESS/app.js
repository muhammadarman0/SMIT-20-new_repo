let scrollBox = document.getElementById("categoryScroll")
console.log(scrollBox);

let btnArrow = document.getElementById("scrollArrow")

function scrollRight() {
    let lengthContainer = scrollBox.clientWidth * 0.6;
    scrollBox.scrollBy({ left: lengthContainer, behavior: "smooth" })
}

function updateScroll() {
    // let reveseContainer = scrollBox.scrollWidth - scrollBox.clientWidth;
    // if (scrollBox.scrollLeft >= reveseContainer - 5) {
    //     btnArrow.style.opacity = "0";
    //     btnArrow.style.pointerEvents = "none"
    // } else {
    //     btnArrow.style.opacity = "1";
    //     btnArrow.style.pointerEvents = "auto"
    // }

}
scrollBox.addEventListener("scroll", updateScroll)
window.addEventListener("resize", updateScroll)


// Section 4

// const textWrap = [
//     "Family Comdo 3",
//     "Juciy Buger",
//     "Crunch & Munch",
//     "THE MAJESTY",
//     "CHESS SILECC"
// ]
// let inp = document.getElementById("inputVal")

// let a = 0;
// let b = 0;
// let boolean = false
// console.log(inp.placeholder);
// setInterval(() => {
//     boolean ? b-- : b++;
//     inp.placeholder.innerHTML = textWrap[a].slice(0, b)
//     if (b === textWrap[a].length + 1) boolean = true
//     if (b === 0 % boolean) {
//         boolean = false
//         a = (a + 1) % textWrap.length
//     }
// }, 120)
