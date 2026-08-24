const quizzes = {
    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language",
                "Hyper Text Main Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which tag is used to create a hyperlink?",
            options: [
                "<a>",
                "<link>",
                "<href>",
                "<url>"
            ],
            answer: "<a>"
        },
        {
            question: "Which HTML tag is used for the largest heading?",
            options: [
                "<h6>",
                "<heading>",
                "<h1>",
                "<head>"
            ],
            answer: "<h1>"
        },
        {
            question: "Which tag is used to insert an image?",
            options: [
                "<picture>",
                "<img>",
                "<image>",
                "<src>"
            ],
            answer: "<img>"
        },
        {
            question: "Which attribute is used to uniquely identify an element?",
            options: [
                "class",
                "name",
                "id",
                "style"
            ],
            answer: "id"
        }
    ],

    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Which property changes the text color?",
            options: [
                "font-color",
                "text-color",
                "color",
                "background"
            ],
            answer: "color"
        },
        {
            question: "Which property changes the background color?",
            options: [
                "bg-color",
                "background-color",
                "background",
                "color"
            ],
            answer: "background-color"
        },
        {
            question: "Which CSS property makes corners rounded?",
            options: [
                "border-style",
                "border-radius",
                "radius",
                "round"
            ],
            answer: "border-radius"
        },
        {
            question: "Which property is used to add space inside an element?",
            options: [
                "margin",
                "padding",
                "spacing",
                "border"
            ],
            answer: "padding"
        }
    ],

    javascript: [
        {
            question: "Which keyword declares a constant variable?",
            options: [
                "let",
                "var",
                "const",
                "constant"
            ],
            answer: "const"
        },
        {
            question: "Which method selects an element by ID?",
            options: [
                "querySelectorAll()",
                "getElementById()",
                "getElementsByClassName()",
                "createElement()"
            ],
            answer: "getElementById()"
        },
        {
            question: "Which array method returns a new array with matching elements?",
            options: [
                "map()",
                "filter()",
                "find()",
                "forEach()"
            ],
            answer: "filter()"
        },
        {
            question: "Which event is triggered when a button is clicked?",
            options: [
                "mouseover",
                "click",
                "change",
                "submit"
            ],
            answer: "click"
        },
        {
            question: "Which operator checks both value and data type?",
            options: [
                "==",
                "=",
                "===",
                "!="
            ],
            answer: "==="
        }
    ]
};

// console.log(quizzes.html[0].options);

const option1 = document.querySelector(".option1")

const dropDown = document.querySelector("#quiz")

const select = document.querySelector("#select")

const quizQuestion = document.querySelector(".not-show")

const questionHead = document.querySelector("#quetion-text")

const questionOption = document.querySelectorAll(".correct-wrong")


const correctAnswer = document.querySelector(".correct-answer")

const timer = document.querySelector(".timer")

const option2 = document.querySelector("#option2")

const hidden3 = document.querySelector(".hidden3")

const yourNumber = document.querySelector("#number")

const showPassFailed = document.querySelector("#showPassed-Failed")

const option3 = document.querySelector(".option3")
const quizResult = document.getElementById("quizResult")
let ans = false


let indexVal = 0;

let score = 0



// console.log(dropDown)



// let changeQ = selectQuiz[indexVal]



const showQuizHtml = () => {
    let selectQuiz = quizzes[dropDown.value]
    let changeQ = selectQuiz[indexVal]
    

    // console.log(changeQ.options[0]);
    correctAnswer.innerHTML = `Question ${indexVal + 1}/ ${selectQuiz.length}`

    if (!dropDown.value === "") {
        alert("Please select your quiz")
        return
    }
    if (dropDown.selected) {
        option1.style.backgroundColor = "blue"
    }
    if (changeQ) {
        select.style.display = "none";
        quizQuestion.style.display = "block"
        questionHead.innerHTML = changeQ.question

        questionOption.forEach((btn, index) => {
            btn.textContent = changeQ.options[index]
            btn.style.opacity = "1"
            btn.disabled = false
            btn.style.backgroundColor = ""
        })
    }

}
// document.body.style.
const checkAnswer = (event) => {
    // console.log(event.target.textContent);

    const btnTextContent = event.target.textContent;
    let selectQuiz = quizzes[dropDown.value]


    let changeQ = selectQuiz[indexVal]
    ans = true
    if (btnTextContent === changeQ.answer) {
        // console.log(btnTextContent);
        score++
    }

    questionOption.forEach((btn) => {
        if (btn.textContent === changeQ.answer) {
            btn.style.backgroundColor = "green";
        }

        if (btn === event.target && btn.textContent !== changeQ.answer) {
            btn.style.backgroundColor = "red";
        }
        btn.style.opacity = "0.5"
        btn.disabled = true
    })
}

const nextQuestion = () => {
    let selectQuiz = quizzes[dropDown.value]

    if (!ans) {
        alert("please select your answer")
        return
    }

    indexVal++
    if (indexVal >= selectQuiz.length) {
        quizQuestion.style.display = "none"
        hidden3.style.display = "block"
        showResult()
        return
    }

    ans = false
    showQuizHtml()
}

const showResult = () => {
    let selectQuiz = quizzes[dropDown.value]
    yourNumber.innerHTML = `${score} / ${selectQuiz.length}`
    if (score >= 3) {
        showPassFailed.innerHTML = "Passed"
        quizResult.style.backgroundColor = "green"

    } else {
        showPassFailed.innerHTML = "Failed"
        quizResult.style.backgroundColor = "red"
    }
}

const restartQuiz = () => {

    indexVal = 0;
    score = 0;
    ans = false

    hidden3.style.display = "none"
    quizQuestion.style.display = "none"
    select.style.display = "block"
    dropDown.value = "";
}

questionOption.forEach((btn) => {
    btn.addEventListener("click", checkAnswer)

})

option1.addEventListener("click", showQuizHtml)


option2.addEventListener("click", nextQuestion)

option3.addEventListener("click", restartQuiz)