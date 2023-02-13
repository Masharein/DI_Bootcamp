// Instructions
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
let theForm = document.forms.theForm;
console.log(theForm);
theForm.addEventListener("submit", checkTheValue);

function checkTheValue(evt) {
  evt.preventDefault();
  const search = document.querySelector("#search").value;
  console.log(search);

  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`,
    true
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      displayGif(data);
    }
  };
  xhr.send();
}

function displayGif(data) {
  const gifsContainer = document.querySelector("#gifsContainer")
  const gifUrl = data.data[0].images.original.url;
  const gifElement = document.createElement("img");
  gifElement.src = gifUrl;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", () => {
    gifsContainer.removeChild(gifElement);
    gifsContainer.removeChild(deleteBtn);
  });
  const deleteAllBtn = document.createElement("button");
  deleteAllBtn.innerHTML = "Delete all";
  deleteAllBtn.addEventListener("click", () => {
    gifsContainer.remove(gifElement);
    gifsContainer.remove(deleteAllBtn);
  });
  gifsContainer.appendChild(gifElement);
  gifsContainer.appendChild(deleteBtn);
  gifsContainer.appendChild(deleteAllBtn);
}

deleteAllBtn.addEventListener("click", () => {
  gifsContainer.innerHTML = "";
});







