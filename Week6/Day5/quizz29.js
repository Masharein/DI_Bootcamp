// Retrieve the form element and add a submit event listener to it
const form = document.querySelector('form');
form.addEventListener('submit', postData);

// Define the function to handle form submission
async function postData(event) {
  event.preventDefault();

  // Create a new FormData object from the form data
  const formData = new FormData(event.target);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Display the response data on the DOM
    const output = document.querySelector('#output');
    const result = Object.entries(data).map(([key, value]) => {
      return `<p><strong>${key}:</strong> ${value}</p>`;
    }).join('');

    output.innerHTML = result;
  } catch (error) {
    console.error(error);
  }
}
