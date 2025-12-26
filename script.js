const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
    });

    taskList.appendChild(li);
    taskInput.value = "";
});
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let time = 25 * 60;
let timerInterval = null;

startBtn.addEventListener("click", function () {
    if (timerInterval !== null) return;

    timerInterval = setInterval(function () {
        time--;

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timerDisplay.textContent = minutes + ":" + seconds;

        if (time === 0) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
});

resetBtn.addEventListener("click", function () {
    clearInterval(timerInterval);
    timerInterval = null;
    time = 25 * 60;
    timerDisplay.textContent = "25:00";
});
