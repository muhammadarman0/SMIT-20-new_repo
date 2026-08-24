let emailInput = document.getElementById("email")

let passwordInput = document.getElementById("password");

function loginHandler(e) {
    e.preventDefault();

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Please fill in all the fields.");

    } else if (!regex.test(emailInput.value)) {
        alert("Please enter a valid email address.");
    } else {
        let gateLoginUser = JSON.parse(localStorage.getItem("users")) || [];
        let flag = false;
        for (let i = 0; i < gateLoginUser.length; i++) {
            let user = gateLoginUser[i]
            console.log(user);
            
            if (user.mobileEmail === emailInput.value) {

                flag = true;

                if (user.password === passwordInput.value) {

                    let LoginUserID = localStorage.setItem("LoginUser", JSON.stringify(user))

                    Swal.fire({
                        title: 'Login successful!',
                        text: 'You will be redirected to the dashboard.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        window.location.href = "../Dashboard/dashboard.html";
                    });
                }
            }
        }
    }

    emailInput.value = "";
    passwordInput.value = ""

}

let createAccount = document.getElementById("createAccount")
createAccount.addEventListener("click", () => {
    window.location.href = "../sign up/signup.html";
})