let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");
let confirmPassword = document.getElementById("confirmPassword")


function error(m) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${m}`,
    });
}

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

// let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$/

function submitHandler(e) {
    e.preventDefault()
    console.log("ma chala");

    if (fullName.value.trim() === "") {
        error("Fill Enter a Full name")
        return;
    } else {
        console.log(fullName.value.trim());

    }

    if (email.value.trim() === "") {
        error("Fill Enter a Email")
        return;
    } else {
        console.log(email.value.trim());

    }

    if (!emailRegex.test(email.value.trim())) {
        error("Please enter a valid email")
        return;
    }

    if (pass.value.trim() === "") {
        error("Fill Enter a Password")
        return;
    } else {
        console.log(pass.value.trim());

    }

    if (pass.value.length < 8 || pass.value.length > 18) {
        error("Password length must be 8")
        return;
    }

    if (pass.value != confirmPassword.value) {
        error("Please enter a Same password")
        return
    }

    // if (!passRegex.test(pass.value.trim())) {
    //     error("Please enter a strong password")
    //     return;
    // }



    setInterval(() => {
        window.location.href = "https://www.instagram.com/fullstack_developer2/"
    }, 3000)


    fullName.value = ""
    email.value = ""
    pass.value = ""
    confirmPassword.value = ""

}

//  true ye osko false karde tha ha
 
// aur jo false hoti ha osko true karde tha ha