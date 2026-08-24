let studentName = document.getElementById("studentName")

let father = document.getElementById("fatherName")

let cnic = document.getElementById("cnic")

let branch = document.getElementById("branch")

let course = document.getElementById("course")

let img = document.getElementById("studentImage")

let cardContainer = document.getElementById("cardContainer")

function error(m) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${m}`,

    });
}


function generateCard(e) {
    e.preventDefault();
    if (studentName.value.trim() === "" || father.value.trim() === "" || cnic.value.trim() === "" || branch.value.trim() === "" || course.value.trim() === "" || img.files.length === 0) {
        error("Please fill in all the fields and select an image.");
        return;
    }

    for (let i = 0; i < course.options.length; i++) {
        if (course.options[i].selected == true) {
            console.log(course.options[i].value)

        }
    }

    for (let i = 0; i < branch.options.length; i++) {
        if (branch.options[i].selected == true) {
            console.log(branch.options[i].value)

        }
    }
    let createImg = file(img.files)

    let randomCode = randomRollNumber()

    let Arrobj = {
        name: studentName.value,
        fatherName: father.value,
        cnic: cnic.value,
        branch: branch.value,
        course: course.value,
        image: createImg,
        rollNumber: randomCode
    }
showCard(Arrobj)


    studentName.value = "";
    father.value = "";
    cnic.value = "";
    branch.value = "";
    course.value = "";
    img.value = "";
}

function file(file) {
    if (file) {
        const imageUrl = URL.createObjectURL(file[0]);
        return imageUrl;
    }

}

function showCard(data) {

   
    cardContainer.innerHTML = `
     <div class="student-card" >

            <div class="card-header">
             <h2>Student ID Card</h2>
            </div>

            <div class="card-body">

                <div class="student-image">
                    <img src="${data.image}" alt="Student Photo">
                </div>

                <div class="student-info">
                    <h3>${data.name}</h3>

                    <p>
                        <span>Roll Number:</span>
                        ${data.rollNumber}
                    </p>

                    <p>
                        <span>Father Name:</span>
                        ${data.fatherName}
                    </p>

                    <p>
                        <span>CNIC:</span>
                        ${data.cnic}
                    </p>

                    <p>
                        <span>Course:</span>
                        ${data.course}
                    </p>

                    <p>
                        <span>Branch:</span>
                        ${data.branch}
                    </p>
                </div>

            </div>

            <div class="card-footer">
                <p>Institute Management System</p>
            </div>

        </div>


    `
 }

function randomRollNumber() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let roll = "";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * num.length);
        roll += num[randomIndex]

    }
    return roll;
}
randomRollNumber()