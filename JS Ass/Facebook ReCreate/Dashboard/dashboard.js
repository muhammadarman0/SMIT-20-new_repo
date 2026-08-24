let logOut = document.getElementById("logOut")

let currentUserName = document.getElementById("currentUserName")

let CurrentUser = JSON.parse(localStorage.getItem("CurrentUser"))

function Username (){
    currentUserName.innerHTML = `${CurrentUser.Username} ${CurrentUser.akriNaam}`
}
Username()

const UserlogOut = () => {
    localStorage.removeItem("CurrentUser")
    window.location.href = "../login/login.html"
}


logOut.addEventListener("click", UserlogOut)