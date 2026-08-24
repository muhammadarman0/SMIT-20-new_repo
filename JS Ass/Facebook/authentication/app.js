let loginUser = JSON.parse(localStorage.getItem("LoginUser"));

if(!loginUser){
    window.location.href = "../loginForm/login.html";
}