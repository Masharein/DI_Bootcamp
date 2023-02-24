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
    editBtn.addEventListener('click', function() {
        const newName = prompt('Enter a new name:', task.name);
        if (newName) {
          task.name = newName;
          const newDescription = prompt('Enter a new description:', task.description);
          if (newDescription) {
            task.description = newDescription;
            const newStart = prompt('Enter a new start date and time (YYYY-MM-DDTHH:MM):', new Date(task.start).toISOString().slice(0, 16));
            if (newStart) {
              task.start = new Date(newStart).getTime();
              const newEnd = prompt('Enter a new end date and time (YYYY-MM-DDTHH:MM):', new Date(task.end).toISOString().slice(0, 16));
              if (newEnd) {
                task.end = new Date(newEnd).getTime();
                localStorage.setItem('tasks', JSON.stringify(tasks));
                task.name.textContent =  `Name: ${task.name}<br>`
                task.description.textContent = 'Description: ' + task.description;
                task.start.textContent =  `Start date and time: ${task.start}<br>`;
                task.end.textContent = ` End date and time: ${task.end}<br>`;
              }
            }
          }
        }
      });
  });

