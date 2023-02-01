const form = document.getElementById("MyForm");
const list = document.querySelector(".listTasks");
const tasks = [];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("text");
  const task = input.value;
  if (!task) {
    return;
  } else {
    tasks.push(task);
    console.log(tasks)
} 
const newTask = document.createElement("div");
newTask.classList.add("listStyle");
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
const label = document.createElement("label");
label.innerHTML = task;
newTask.appendChild(checkbox);
newTask.appendChild(label);
const removeButton = document.createElement("i");
removeButton.classList.add("fa-solid", "fa-square-xmark");
newTask.appendChild(removeButton);
list.appendChild(newTask);
input.value = "";
});
