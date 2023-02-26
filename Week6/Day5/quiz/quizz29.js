// 29. Use **async await**, and **the fetch API** to POST some data.
//     * Retrieve the data from a form (you can use new FormData), and send this data to this API : `https://jsonplaceholder.typicode.com/posts`. 
//     * The server will send you back some dummy data that you will display on the DOM.
//     * Use the documentation of the API : https://jsonplaceholder.typicode.com/guide/
//     * Use the fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
//     * Use the new FormData documentation with Object.fromEntries() : https://gomakethings.com/the-object.fromentries-method-in-vanilla-js/
const sendData = async (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  let formObj = Object.fromEntries(formData);
  console.log(formObj);
  const url = `https://jsonplaceholder.typicode.com/posts`
  try {
      const result = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(formObj),
          headers: { 'Content-type': 'application/json; charset=UTF-8', }
      })
      if (result.ok) {
          const data = await result.json();
          displayData(data);
      } else {
          throw new Error("something is wrong")
      }
  } catch (error) {
      console.log(error)
  }

}

const displayData = (data) => {
  const output = document.getElementById('output');
  for (let key in data) {
      const listItem = document.createElement("li");
      const text = document.createTextNode(`${key} : ${data[key]}`)
      listItem.appendChild(text);
      output.appendChild(listItem);
  }
}

document.forms[0].addEventListener('submit', sendData)