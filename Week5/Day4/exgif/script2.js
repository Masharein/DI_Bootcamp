async function getWord () {
    const response = await fetch("http://random-word-api.herokuapp.com/word?number=1")
    if(response.status !== 200){
        throw new Error ("Couldnt find a word")
    }
    const word = await response.json();
    return word[0];
}

async function getGif (word) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    if(response.status !== 200){
        throw new Error ("Couldnt find a gif")
    }

    const gif = await response.json();

    if(gif.data.length === 0) {
        throw new Error("Couldnt find a gif");
    }

    return gif.data.images.original.url;
}

async function getAll() {
    try {
        const word = await getWord();
        const gif = await getGif(word);
        displayInfo(word, gif);
    } catch (err) {
        const errorGif = "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif"
        displayInfo("ERROR", errorGif)
    }
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

getAll();