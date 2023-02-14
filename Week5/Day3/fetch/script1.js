// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"

const gifsContainer = document.querySelector("#gifsContainer");

function getWord() {
  return fetch(`http://random-word-api.herokuapp.com/word?number=1`)
    .then(response => response.json())
    .then(data => getWordGif(data[0]))
    .catch(error => {
      console.error(error);
    });
}

function displayGifWord(data, word) {
  const gifUrl = data.data.images.original.url;
  const gifElement = document.createElement("img");
  gifElement.src = gifUrl;
  const wordElement = document.createElement("h3");
  const text = document.createTextNode(word);
  wordElement.appendChild(text);
  gifsContainer.appendChild(gifElement);
  gifsContainer.appendChild(wordElement);
}

function getWordGif(word) {
      fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
        .then(response => response.json())
        .then(data => {
          displayGifWord(data, word);
        })
        .catch(error => {
          console.error(error);
          const wordError = document.createElement("h3");
          const textError = document.createTextNode("404 ERROR");
          wordError.appendChild(textError);
          gifsContainer.appendChild(wordError);
        });
}

getWord()