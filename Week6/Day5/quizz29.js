// 29. Use **async await**, and **the fetch API** to POST some data.
//     * Retrieve the data from a form (you can use new FormData), and send this data to this API : `https://jsonplaceholder.typicode.com/posts`. 
//     * The server will send you back some dummy data that you will display on the DOM.
//     * Use the documentation of the API : https://jsonplaceholder.typicode.com/guide/
//     * Use the fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
//     * Use the new FormData documentation with Object.fromEntries() : https://gomakethings.com/the-object.fromentries-method-in-vanilla-js/

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
      throw new Error(`Bad result`);
    }

    const data = await response.json();

    // Display the response data on the DOM
    const output = document.querySelector('#output');
    const result = Object.entries(data).map(([key, value]) => {
      return `<p>${key}: ${value}</p>`;
    });

    output.innerHTML = result;
  } catch (error) {
    console.error(error);
  }
}
