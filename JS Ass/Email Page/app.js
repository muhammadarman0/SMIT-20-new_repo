
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

function error(e) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${e}`
    });
}

function success() {
    Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true
    });
}

function submitHandler() {
    if (emailInput.value === "" || passwordInput.value === "") {
        error("Please fill in all fields.");
        return;
    }
    if (passwordInput.value.length < 8) {
        error("Password must be at least 8 characters long.");
        return
    }

    success()


    setTimeout(() => {
        window.location.href = "https://github.com/muhammadarman0?tab=overview&from=2026-05-01&to=2026-05-07"
    }, 4000)

    emailInput.value = "";
    passwordInput.value = "";
    console.log(emailInput.value);
    console.log(passwordInput.value);
}