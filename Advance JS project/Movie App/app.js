let container = document.querySelector(".container");
console.log(container);

let retryBtn = document.getElementById("retryBtn")
let backToTop = document.getElementById("backToTop")
console.log(backToTop);

let loader = document.getElementById("loader")

const reloadApp = () => {
    setTimeout(() => {
        loader.style.display = "none"
    }, 1000);

}


const movieApi = async () => {
    let apiCall = await fetch(`https://api.tvmaze.com/shows`)
    let response = await apiCall.json()
    console.log(response);
    reloadApp()

}

movieApi()

const topScroll = () => {
    window.scrollTo({
        top: 0,
       behavior: "auto"
    });
};

const updateScroll = () => {
    console.log(window.scrollY);

    if (window.scrollY > 400) {

        backToTop.style.opacity = "1";
        backToTop.style.pointerEvents = "auto";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.pointerEvents = "none";

    }

};

backToTop.addEventListener("click", topScroll);

window.addEventListener("scroll", updateScroll);

updateScroll();