let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let daySelect = document.getElementById("days");
let monthSelect = document.getElementById("months");
let yearSelect = document.getElementById("years");
let genderSelect = document.getElementById("gender")

let mobileEmailInput = document.getElementById("mobileEmail");
let passwordInput = document.getElementById("password");




function signupHanlder(e) {
    e.preventDefault()
    if (firstNameInput.value.trim() === "" || lastNameInput.value.trim() === "" || daySelect.value === "" || monthSelect.value === "" || yearSelect.value === "" || genderSelect.value === "" || mobileEmailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Please fill in all the fields.");
        return
    } else {
        alert("Sign up successful!");
    }
    for (let i = 0; i < daySelect.length; i++) {
        if (daySelect.options[i].value === daySelect.value) {
            console.log(daySelect.options[i].value);
        }
    }

    for (let i = 0; i < monthSelect.length; i++) {
        if (monthSelect.options[i].value === monthSelect.value) {
            console.log(monthSelect.options[i].value);

        }
    }
    for (let i = 0; i < yearSelect.length; i++) {
        if (yearSelect.options[i].value === yearSelect.value) {
            console.log(yearSelect.options[i].value);

        }
    }
    for (let i = 0; i < genderSelect.length; i++) {
        if (genderSelect.options[i].value === genderSelect.value) {
            console.log(genderSelect.options[i].value);
        }
    }

    let objArr = {
        firstname: firstNameInput.value,
        lastname: lastNameInput.value,
        day: daySelect.value,
        month: monthSelect.value,
        year: yearSelect.value,
        gender: genderSelect.value,
        mobileEmail: mobileEmailInput.value,
        password: passwordInput.value
    }
    let dataSave = JSON.parse(localStorage.getItem("users"));
    dataSave.push(objArr);
    localStorage.setItem("users", JSON.stringify(dataSave))

    Swal.fire({
        title: "Congratulations! signup successfully!",
        icon: "success",
        draggable: true
    }).then(() => {
        window.location.href = "../loginForm/login.html";
    });
}

firstNameInput.value = "";
lastNameInput.value = "";
mobileEmailInput.value = "";
passwordInput.value = ""

let readyHandler = document.getElementById("readyHandler");
readyHandler.addEventListener("click", () => {
    window.location.href = "../loginForm/login.html";
})