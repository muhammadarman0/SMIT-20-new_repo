const taskInput = document.querySelector("#taskInput")

const addBtn = document.querySelector("#addBtn")

const todolist = document.querySelector("#todolist")

const clearBtn = document.querySelector(".clear-btn")

const pendingCount = document.querySelector("#pendingCount")

const showAll = document.querySelector("#showAll")

const pendingElement = document.querySelector("#pendingWork")

const completeTask = document.querySelector("#completeTask")

let taskes = JSON.parse(localStorage.getItem("tasks")) || []
let editTask = null

let taskcount = 0

let taskId = 0


// console.log(tasks);
const saveTask = () => {
    localStorage.setItem("tasks", JSON.stringify(taskes))
}

const addItems = () => {
    if (taskInput.value.trim() === "") {
        alert("Please enter a task")
        return
    }



    taskId++

    const id = `task${taskId}`;


    if (editTask !== null) {


        const oldTask = editTask.innerText;

        const index = taskes.indexOf(oldTask);

        if (index !== -1) {
            taskes[index] = taskInput.value;
        }

        saveTask();

        editTask.innerText = taskInput.value;

        editTask = null;
        addBtn.innerText = "Add Task";
        taskInput.value = "";

        return;
    } else {
        taskes.push(taskInput.value)
        saveTask()

        taskcount++;
        todolist.innerHTML += ` <li class="todo-item">
                <div class="task-info">
                    <input type="checkbox" class="task-checkbox" onchange="checkBox(this)" id="${id}">
                    <label for="${id}">${taskInput.value}</label>
                </div>

                <div class="actions">
                    <button class="edit-btn" onclick = "edittask(this)">✏️</button>
                    <button class="delete-btn" onclick="removeTask(this)">🗑️</button>
                </div>
            </li>
`
    }
    taskInput.value = ""
    // taskcount++
    pendingCount.innerHTML = taskcount
}

function loadTask() {

    // taskId++

    // const id = `task${taskId}`;


    taskes.forEach((task) => {
        taskId++
        // taskes.push(taskInput.value)
        const id = `task${taskId}`;
        todolist.innerHTML += `
            <li class="todo-item">
                <div class="task-info">
                    <input type="checkbox" class="task-checkbox" onchange="checkBox(this)" id="${id}">
                    <label for="${id}">${task}</label>
                </div>

                <div class="actions">
                    <button class="edit-btn" onclick="edittask(this)">✏️</button>
                    <button class="delete-btn" onclick="removeTask(this)">🗑️</button>
                </div>
            </li>
        `;
        taskcount++
    })
    pendingCount.innerHTML = taskcount;
}
loadTask()
const checkBox = (e) => {


    const label = e.nextElementSibling

    if (e.checked) {
        label.style.textDecoration = "line-through"
        taskcount--
        pendingCount.innerHTML = taskcount

    } else {
        label.style.textDecoration = "none"
        taskcount++
        pendingCount.innerHTML = taskcount
    }
    // console.log(taskCheckBox);

}

function removeTask(e) {
    const li = e.closest("li")

    const testTask = li.querySelector("label").innerHTML
    // console.log(testTask);
    const index = taskes.indexOf(testTask)

    if (index !== -1) {
        taskes.splice(index, 1)
    }

    saveTask()

    const checkBox = li.querySelector(".task-checkbox")
    if (!checkBox.checked) {
        taskcount--
        // return
    }
    li.remove()
    pendingCount.innerHTML = taskcount
}

function edittask(e) {

    const li = e.closest("li");
    const label = li.querySelector("label");

    taskInput.value = label.innerText;

    editTask = label;
    addBtn.innerText = "Update Task";
}

function clearCompleted(e) {
    for (let i = todolist.children.length - 1; i >= 0; i--) {

        let removeAllTask = todolist.children[i]

        const checkBox = removeAllTask.querySelector(".task-checkbox")
        if (checkBox.checked) {
            removeAllTask.remove()
            // taskcount--
            // return
        }

        pendingCount.innerHTML = taskcount

    }
    // taskcount = 0
}


const showAllTask = () => {

    for (let i = 0; i < todolist.children.length; i++) {
        todolist.children[i].style.display = "flex"

    }

}

const pendingTask = (e) => {

    for (let i = 0; i < todolist.children.length; i++) {
        const li = todolist.children[i]
        const checkBox = li.querySelector(".task-checkbox")

        if (checkBox.checked) {
            li.style.display = "none"
            pendingElement.style.backgroundColor = ""

        } else {
            li.style.display = "flex"
            pendingElement.style.backgroundColor = "#667eea"
            pendingElement.style.color = "white"


        }

    }

}

const completeYourTask = () => {
    for (let i = 0; i < todolist.children.length; i++) {
        const li = todolist.children[i]
        const checkBox = li.querySelector(".task-checkbox")

        if (checkBox.checked) {
            li.style.display = "flex"
            completeTask.style.backgroundColor = "#667eea"
            completeTask.style.color = "white"

        } else {
            li.style.display = "none"
        }

    }

}

addBtn.addEventListener("click", addItems)

showAll.addEventListener("click", showAllTask)

pendingElement.addEventListener("click", () => {
    pendingTask(this)
})

completeTask.addEventListener("click", completeYourTask)