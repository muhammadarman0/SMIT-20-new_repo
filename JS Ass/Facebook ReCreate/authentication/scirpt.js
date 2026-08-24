const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))

if(!currentUser){
    window.location.href = "../login/login.html"
}