let studname = document.getElementById("studentName")

let fname = document.getElementById("fatherName")

let cnic = document.getElementById("cnic")

let branch = document.getElementById("branch")

let course = document.getElementById("course")

let image = document.getElementById("studentImage")

let cardContainer = document.getElementById("cardContainer")

let parentOfRegistration = document.getElementById("parentOfRegistration")

function error(m) {
    Swal.fire({
        icon: "error",
        title: "Wrong",
        text: `${m}`,
    });
}



function generateCard(e) {
    e.preventDefault()
    if (studname.value.trim() === "" || fname.value.trim() === "" || cnic.value.trim() === "") {
        error("Please Fill all fields")
        return
    }
    if (cnic.value.length < 12) {
        error("Enter your correct CNIC Number")
        return
    }

    if (branch.value === "") {
        error("Select Your branch")
        return
    }
    if (course.value === "") {
        error("Select Your Course")
        return
    }

    if (image.value === "") {
        error("Select Your Profile Picture")
        return
    }

    let createimg = file(image.files)
    let rollNum = randomRollNum()

    const Arrobj = {
        name: studname.value,
        father: fname.value,
        cnic: cnic.value,
        branch: branch.value,
        Course: course.value,
        file: createimg,
        stdId: rollNum
    }



    cardContainer.innerHTML = `
    <div class="student-card">

            <div class="card-header">
                <h2>Student ID Card</h2>
            </div>

            <div class="card-body">

                <div class="student-image">
                    <img src="${Arrobj.file}" alt="Student Photo">
                </div>

                <div class="student-info">
                    <h3>${Arrobj.name}</h3>

                    <p>
                        <span>Student ID:</span>
                       ${Arrobj.stdId}
                    </p>

                    <p>
                        <span>Father Name:</span>
                        ${Arrobj.father}
                    </p>

                    <p>
                        <span>CNIC:</span>
                        ${Arrobj.cnic}
                    </p>

                    <p>
                        <span>Course:</span>
                        ${Arrobj.Course}
                    </p>

                    <p>
                        <span>Branch:</span>
                        ${Arrobj.branch}
                    </p>
                </div>
            </div>

            <div class="card-footer">
                <p>Institute Management System</p>
            </div>

        </div>
    `
    studname.value = ""
    fname.value = ""
    branch.value = ""
    cnic.value = ""
    course.value = ""
    image.value = ""
}

function file(file){
if(file){
    const imgkeurl = URL.createObjectURL(file[0]);
    return imgkeurl;
}
}

function randomRollNum() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let roll = ""

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * num.length)
        roll += num[randomIndex]
    }
    return roll
}

randomRollNum()

// function antCard(){
//     if(cardContainer.style.display === "none"){
//         cardContainer.style.display === "block"

//     }
//     else if(cardContainer.style.display === "block"){
//         cardContainer.style.display === "none"
//     }
// }