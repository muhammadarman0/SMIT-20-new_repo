let logo = document.getElementById("logo")

let head = document.getElementById("header")

let toggle = document.getElementById("toggle")

let label = document.getElementById("toggle-label")

let cardTitle = document.getElementById("card-title-1")

let cardText = document.getElementById("card-text-1")

let card1 = document.getElementById("card-1")

let card2 = document.getElementById("card-2")

let cardTitle2 = document.getElementById("card-title-2")

let cardText2 = document.getElementById("card-text-2")

let card3 = document.getElementById("card-3")

let cardTitle3 = document.getElementById("card-title-3")

let cardText3 = document.getElementById("card-text-3")


const DarkAndLightMode = () => {
    if (toggle.checked) {
        label.style.backgroundColor = "blue"
        document.body.style.backgroundColor = "black"
        card1.style.backgroundColor = "grey"
        card2.style.backgroundColor = "grey"
        card3.style.backgroundColor = "grey"
        cardTitle.style.color = "white"
        cardText.style.color = "white"
        cardTitle2.style.color = "white"
        cardText2.style.color = "white"
        cardTitle3.style.color = "white"
        cardText3.style.color = "white"
        head.style.backgroundColor = "darkblue"
        logo.style.color = "white"
    }else{
        label.style.backgroundColor = "black"
        document.body.style.backgroundColor = "white"
        card1.style.backgroundColor = "white"
        card2.style.backgroundColor = "white"
        card3.style.backgroundColor = "white"
        cardTitle.style.color = "black"
        cardText.style.color = "black"
        cardTitle2.style.color = "black"
        cardText2.style.color = "black"
        cardTitle3.style.color = "black"
        cardText3.style.color = "black"
        head.style.backgroundColor = "lightblue"
        logo.style.color = "black"
    }


    console.log(toggle.checked)

}


toggle.addEventListener("click", DarkAndLightMode)