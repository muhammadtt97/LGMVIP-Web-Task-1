const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span>${taskText}</span><button class="delete-button" onclick="deleteTask(this)">X</button>`;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}
