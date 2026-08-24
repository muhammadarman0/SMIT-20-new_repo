let todolist = document.getElementById("todolist");

let taskInput = document.getElementById("taskInput")

let counter = document.getElementById("pendingCount")

let pendingTask = 0;



function addtask() {

    // console.log(taskInput.value)


    if (taskInput.value.trim() == "") {
        alert("Please Enter a Task")
        return;
    }
    todolist.innerHTML += `
  <li class="todo-item">
                <div class="task-info">
                    <input type="checkbox" id="task1">
                    <label for="task1">${taskInput.value}</label>
                </div>

                <div class="actions">
                    <button class="edit-btn" onclick="edittask(this)">✏️</button>
                    <button class="delete-btn" onclick="deletetask(this)">🗑️</button>
                </div>
            </li>
`
    taskInput.value = "";
    pendingTask++;
    counter.innerText = pendingTask;
}


function edittask(e) {
    let taskInfo = e.parentElement.previousElementSibling;
    let label = taskInfo.querySelector("label");
    let currentTask = label.innerText;
    let newTask = prompt("Edit Task", currentTask);
    if (newTask !== null && newTask.trim() !== "") {
        label.innerText = newTask.trim();
    }
}


function deletetask(e) {
    e.parentElement.parentElement.remove();
    pendingTask--;
    counter.innerText = pendingTask;
}



function clearCompleted(e) {

    if (todolist.children.length == 0) {
        alert("No task to clear")
    }

    for (let i = 0; i < todolist.children.length; i++) {
        let task = todolist.children[i];
        task.remove();
        i--;
    }
    pendingTask = 0;
    counter.innerText = pendingTask;

}