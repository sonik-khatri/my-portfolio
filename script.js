const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText + " ";

    // Toggle completed state when clicking the task
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Prevent delete click from also toggling completion
    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});
