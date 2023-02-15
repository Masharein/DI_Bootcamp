// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"



function getWord () {
    fetch("http://random-word-api.herokuapp.com/word?number=1")
    .then((resOne) => {
        if(resOne.status !== 200){
            throw new Error ("Couldnt find a word")
        }
        return resOne.json();
    })
    .then((resTwo) => {
        console.log(resTwo[0]);
        getGif(resTwo[0]);
    })
    .catch((err) => {
        const errorGif = "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif"
        displayInfo(`ERROR WORD NOT FOUND ${err}`, errorGif)
    })
}


function getGif (word) {
    fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then((resOne) => {
        if(resOne.status !== 200){
            throw new Error ("Couldnt find a word");
        }
        return resOne.json();
    })
    .then((resTwo) => {
        if(resTwo.data.length === 0) {
            throw new Error("Couldnt find a gif");
        } else {
            const gif = resTwo.data.images.original.url;
            displayInfo(word, gif);
            console.log(gif);
        }
       
    })
    .catch((err) => {
        const errorGif = "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif"
        displayInfo("ERROR", errorGif)
    })
}


function displayInfo(wordUser, gifUser) {
    const container = document.getElementById("container");
    const div = document.createElement("div");
    const para = document.createElement("p");
    const image = document.createElement("img");

    const text = document.createTextNode(wordUser);
    para.appendChild(text);
    image.src = gifUser;

    div.append(para, image);
    container.appendChild(div);
}

getWord()