
let Useremail = document.getElementById("email");
let Userpassword = document.getElementById("password")

let loginBtn = document.getElementById("loginBtn")

function sweety(error, tittle) {
    Swal.fire({
        icon: `${error}`,
        title: `${tittle}`,
        // text: `${text}`,

    });
}
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const loginUser = () => {
    if (Useremail.value.trim() === "") {
        sweety("error", "Enter a email")
        return;
    }
    if (Userpassword.value.trim() === "") {
        sweety("error", "Enter a Password")
        return
    }
    if (!emailRegex.test(Useremail.value.trim())) {
        sweety("error", "Please enter a valid email")
        return
    }

    let SignUpUser = JSON.parse(localStorage.getItem("SignUpUsers")) || []

    console.log(SignUpUser[0].Useremail);

    let CurrentUser = false

    for (let i = 0; i < SignUpUser.length; i++) {
        let user = SignUpUser[i]

        if (user?.Useremail === Useremail.value) {
            CurrentUser = true
            if (user?.UserPass === Userpassword.value) {
                sweety("success", "User login successfully")

                setInterval(() => {
                    window.location.href = "../Dashboard/dashboard.html"
                }, 2000)
                localStorage.setItem("CurrentUser", JSON.stringify(user))
            } 
        }

    }

    Useremail.value = ""
    Userpassword.value = ""
    // let itExistUser = false
    // if (SignUpUser.Useremail === Useremail.value) {
    //     itExistUser = true
    //     if (itExistUser && SignUpUser.UserPass === Userpassword.value){
    //         console.log("user login"); 
    //     }
    // }

    // sweety("success","User login successfully")

}

let toggle = document.getElementById("toggle")

const Showpass = () => {

    if (Userpassword.type === "password") {
        Userpassword.type = "text"
        toggle.className = `fa-solid fa-eye`
        return
    }

    if (Userpassword.type === "text") {
        Userpassword.type = "password"
        toggle.className = `fa-solid fa-eye-slash`
        return
    }
}

loginBtn.addEventListener("click", loginUser)

toggle.addEventListener("click", Showpass)