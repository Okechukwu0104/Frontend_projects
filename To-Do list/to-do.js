
let count = 0;

const addTask = () => {
    const display = document.getElementById("tasks");
    const task = document.getElementById("task_name").value.toUpperCase();
    const description = document.getElementById("task_description").value;
    let alat = document.getElementById("error");

    if (task == "" || description == "") {
        if (alat.innerText == "") {
            alat.innerText += "No input should be left blank";
        }
        return;
    } else {
        alat.innerText = ""; 
    }

    let newTag = `
    <div id="a-task">
        <h1 class="all-tasks">${task} <input type="checkbox" id="check" onchange="slash()"></h1>
        <hr>
        <h2 class="tick">${description}</h2>
        <button onclick="remove(this)">Delete Task</button>
    </div>
    `;

    display.innerHTML += newTag;
    count++;
    countMonitor();
    save();
}

const save = () => {
    const display = document.getElementById("tasks");
    localStorage.setItem("to-do", display.innerHTML);
}

const show = () => {
    const display = document.getElementById("tasks");
    display.innerHTML = localStorage.getItem("to-do") || "";
    countMonitor();
}

const search = document.querySelector("#search");
search.addEventListener('keyup', (event) => {
    const input = event.target.value.toUpperCase();
    const taskList = document.querySelectorAll("#a-task");

    taskList.forEach(task => {
        const taskName = task.querySelector(".all-tasks").textContent.toUpperCase();
        if (taskName.includes(input)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
});
const slash = () => {
    const description = taskDiv.querySelector(".tick");
    description.style.textDecoration = checkbox.checked ? "line-through" : "none";
}
const countMonitor = () => {
    const prompted = document.getElementById("prompted");
    let alat = document.getElementById("error");
    if (count > 0) {
        prompted.innerText = "";
        alat.innerText = "";
    } else{
        prompted.innerText += "No Tasks..";
    }
    save();
}

function remove(button) {
    let taskDiv = button.parentElement;
    taskDiv.remove();
    count--;
    countMonitor();
    save();
}



document.addEventListener("DOMContentLoaded", show);
