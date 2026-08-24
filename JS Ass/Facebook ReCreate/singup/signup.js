let FirstName = document.getElementById("firstName")

let lastName = document.getElementById("lastName")

let date = document.getElementById("day")

let month = document.getElementById("month")

let year = document.getElementById("year")

let gend = document.getElementsByName("Gender")

let email = document.getElementById("email")

let pass = document.getElementById("password")


function error(error, tittle) {
    Swal.fire({
        icon: `${error}`,
        title: `${tittle}`,
        // text: `${text}`,

    });
}

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function saveLocalStorage(e) {
    e.preventDefault()




    if (FirstName.value.trim() === "" || lastName.value.trim() === "") {
        error("error", "Please Enter a Name")
        return
    }

    if (email.value.trim() === "" || pass.value.trim() === "") {
        error("error", "Please Enter valid email & password")
        return
    }

    if (!emailRegex.test(email.value.trim())) {
        error("error", "Please enter a valid email")
        return
    }

    if (pass.value.length < 12) {
        error("error", "Password Lenght must be 12")
        return
    }

    const objArr = {
        Username: FirstName.value,
        akriNaam: lastName.value,
        Userday: date.value,
        Usermonth: month.value,
        Useryear: year.value,
        Useremail: email.value,
        UserPass: pass.value,
    }

    for (let i = 0; i < gend.length; i++) {
        if (gend[i].checked) {
            // console.log(gend[i].value);
            objArr.UserGender = gend[i].value
        }
    }
    let signUpUsers = JSON.parse(localStorage.getItem("SignUpUsers")) || []

    signUpUsers.push(objArr)

    localStorage.setItem("SignUpUsers", JSON.stringify(signUpUsers))

    FirstName.value = ""
    lastName.value = ""
    gend.value = ""
    email.value = ""
    pass.value = ""

    error("success", "Sign Up Successfully")
    setInterval(() => {
        window.location.href = "../login/login.html"
    }, 2000)
}


let toggle = document.getElementById("toggle")


const showPass = () => {

    if (pass.type === "text") {
        pass.type = "password"
        toggle.className = `fa-solid fa-eye-slash`
        return
    }
    if (pass.type === "password") {
        pass.type = "text"
        toggle.className = `  
fa-solid fa-eye
        `
        return
    }
}

toggle.addEventListener("click", showPass)
