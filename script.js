let tasks = [];
}


function renderTasks() {
let list = document.getElementById("taskList");
list.innerHTML = "";


tasks.forEach((t, i) => {
list.innerHTML += `
<li>
<span>${t.name} - ${t.deadline} - ${t.priority}</span>
<div>
<button onclick="toggleDone(${i})">✔</button>
<button onclick="deleteTask(${i})" style="background:red">✖</button>
</div>
</li>`;
});
}


function toggleDone(index) {
tasks[index].done = !tasks[index].done;
renderTasks();
}


function deleteTask(index) {
tasks.splice(index, 1);
renderTasks();
}


function sortByDeadline() {
tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
renderTasks();
}


function sortByPriority() {
const order = { High: 1, Medium: 2, Low: 3 };
tasks.sort((a, b) => order[a.priority] - order[b.priority]);
renderTasks();
}


function getAiSuggestion() {
let input = document.getElementById("aiInput").value;
if (!input.trim()) {
alert("Masukkan data tugas!");
return;
}


document.getElementById("aiResult").innerText = "(Contoh AI) Prioritaskan tugas dengan deadline terdekat dan tingkat kesulitan tertinggi.";
}

