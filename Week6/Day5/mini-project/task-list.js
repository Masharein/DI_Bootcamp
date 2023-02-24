const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.sort((a, b) => new Date(a.start) - new Date(b.start));
const taskList = document.getElementById('task-list');
const today = new Date();
tasks.forEach((task) => {
    // Calculate days left to complete the task
    const end = new Date(task.end);
    const daysLeft = Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  
    // Create a new list item and add it to the task list
    const li = document.createElement('li');
    li.style.color = task.isCompleted ? 'green' : 'red';
    li.innerHTML = `
      <div>
        <input type="checkbox" ${task.isCompleted ? 'checked' : ''}>
        Name: ${task.name}<br>
        Start date and time: ${task.start}<br>
        End date and time: ${task.end}<br>
        Days Left: ${daysLeft}<br>
        <button class="description-btn">See the Description</button>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
      <div style="display: none">${task.description}</div>
    `;
    taskList.appendChild(li);
  
    // Add event listeners to checkbox and buttons
    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
      task.isCompleted = checkbox.checked;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      li.style.color = task.isCompleted ? 'green' : 'red';
    });
  
    const descriptionBtn = li.querySelector('.description-btn');
    descriptionBtn.addEventListener('click', () => {
      const description = li.children[1];
      description.style.display = description.style.display === 'none' ? 'block' : 'none';
    });
  
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      const confirmDelete = confirm('Are you sure you want to delete this task?');
      if (confirmDelete) {
        tasks.splice(tasks.indexOf(task), 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        li.remove();
      }
    });

    const editBtn = li.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
      // Open editing interface for the task
      const nameInput = prompt('Enter a new name for the task:', task.name);
      const startInput = prompt('Enter a new start date and time for the task (YYYY-MM-DD HH:mm):', task.start);
      const endInput = prompt('Enter a new end date and time for the task (YYYY-MM-DD HH:mm):', task.end);
      const descriptionInput = prompt('Enter a new description for the task:', task.description);
      
      // Update task object and local storage
      if (nameInput) {
        task.name = nameInput;
      }
      if (startInput) {
        task.start = startInput;
      }
      if (endInput) {
        task.end = endInput;
      }
      if (descriptionInput) {
        task.description = descriptionInput;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
      
      // Update list item display
      const end = new Date(task.end);
      const daysLeft = 
      Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));;
      li.style.color = task.isCompleted ? 'green' : 'red';
      li.innerHTML = `<div> <input type="checkbox" ${task.isCompleted ? 'checked' : ''}> Name: ${task.name}<br> Start date and time: ${task.start}<br> End date and time: ${task.end}<br> Days Left: ${daysLeft}<br> <button class="description-btn">See the Description</button> <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button> </div> <div style="display: none">${task.description}</div>`;
 
});
  });

