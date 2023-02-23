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
  
   // Add event listeners to edit button
const editBtn = li.querySelector('.edit-btn');
editBtn.addEventListener('click', () => {
  // Show the edit task modal
  const modal = document.getElementById('edit-modal');
  modal.style.display = 'block';

  // Pre-populate the input fields with the current task values
  const nameInput = modal.querySelector('#edit-name');
  const descriptionInput = modal.querySelector('#edit-description');
  const startInput = modal.querySelector('#edit-start');
  const endInput = modal.querySelector('#edit-end');

  nameInput.value = task.name;
  descriptionInput.value = task.description;
  startInput.value = task.start;
  endInput.value = task.end;

  // Add event listener to the save button in the modal
  const saveBtn = modal.querySelector('#edit-save');
  saveBtn.addEventListener('click', () => {
    // Get the new task values from the input fields
    const newName = nameInput.value;
    const newDescription = descriptionInput.value;
    const newStart = startInput.value;
    const newEnd = endInput.value;

    // Update the task object with the new values
    task.name = newName;
    task.description = newDescription;
    task.start = newStart;
    task.end = newEnd;

    // Save the updated task list in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Update the task list element with the updated task values
    li.querySelector('div').innerHTML = `
      <input type="checkbox" ${task.isCompleted ? 'checked' : ''}>
      Name: ${task.name}<br>
      Description: ${task.description}<br>
      Start date and time: ${task.start}<br>
      End date and time: ${task.end}<br>
      Days Left: ${daysLeft}
      <button class="description-btn">Show/Hide Description</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;

    // Hide the edit task modal
    modal.style.display = 'none';
  });

  // Add event listener to the cancel button in the modal
  const cancelBtn = modal.querySelector('#edit-cancel');
  cancelBtn.addEventListener('click', () => {
    // Hide the edit task modal without making any changes
    modal.style.display = 'none';
  });
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
  });

