	// Get the form and add a submit event listener
    const form = document.getElementById('task-form');
    form.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault(); // prevent the default form submission

        // Get the form inputs
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const start = new Date(document.getElementById('start-time').value);
        const end = new Date(document.getElementById('end-time').value);

        // Calculate the number of days left to complete the task
        const today = new Date();
        const daysLeft = Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

        // Create a new task object
        const task = {
            name: name,
            description: description,
            start: start.toISOString(),
            end: end.toISOString(),
            isCompleted: false
        };

        // Save the task in localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Redirect to the second HTML page
        window.location.href = 'task-list.html';
    }