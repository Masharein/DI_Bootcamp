const form = document.getElementById("MyForm");
const list = document.querySelector(".listTasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("text");
  const task = input.value;
  if (!task) {
    return;
  }
  const newTask = document.createElement("div");
  newTask.classList.add("listStyle")
  newTask.innerHTML = task;
  list.appendChild(newTask);
  input.value = "";
});
