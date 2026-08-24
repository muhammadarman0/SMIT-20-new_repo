const hoursHeading = document.getElementById("hours")
const minHeading = document.getElementById("min")
const secHeading = document.getElementById("sec")
const milliSec = document.getElementById("millisecond")

var stopTimer;
let hours = 0;
let minutes = 0;
let second = 0;
let milliSecond = 0;


function disable(){
    start.disabled = true
}
function enalbe(){
    start.disabled = false
}

function startTimer() {
    milliSecond++
    milliSec.innerHTML = milliSecond
    if (milliSecond >= 100) {
        second++
        secHeading.innerHTML = second
        milliSecond = 0
    }
    if (second >= 60) {
        minutes++
        minHeading.innerHTML = minutes
        second = 0
    }
    if (minutes >= 60) {
        hours++
        hoursHeading.innerHTML = hours
        minutes = 0
    }
    disable()
}


function start() {
    stopTimer = setInterval(startTimer, 10)

}

function stop() {
    clearInterval(stopTimer)
}

function reset() {
    hours = 0;
    minutes = 0;
    second = 0;
    milliSecond = 0;
    hoursHeading.innerHTML = hours
    minHeading.innerHTML = minutes
    secHeading.innerHTML = second
    milliSec.innerHTML = milliSecond
    stop()
}