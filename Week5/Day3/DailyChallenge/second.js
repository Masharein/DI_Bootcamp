// 2nd Daily Challenge
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---

const morse = `{
      "0": "-----",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      "a": ".-",
      "b": "-...",
      "c": "-.-.",
      "d": "-..",
      "e": ".",
      "f": "..-.",
      "g": "--.",
      "h": "....",
      "i": "..",
      "j": ".---",
      "k": "-.-",
      "l": ".-..",
      "m": "--",
      "n": "-.",
      "o": "---",
      "p": ".--.",
      "q": "--.-",
      "r": ".-.",
      "s": "...",
      "t": "-",
      "u": "..-",
      "v": "...-",
      "w": ".--",
      "x": "-..-",
      "y": "-.--",
      "z": "--..",
      ".": ".-.-.-",
      ",": "--..--",
      "?": "..--..",
      "!": "-.-.--",
      "-": "-....-",
      "/": "-..-.",
      "@": ".--.-.",
      "(": "-.--.",
      ")": "-.--.-"
    }`

    function toJs() {
        return new Promise(function (resolve, reject) {
            let jsObj = JSON.parse(morse)
            if (Object.keys(jsObj).length === 0) {
                reject('ERROR, javaScript object is empty')
            } else {
                resolve(jsObj)
            }
        })
    }
    // The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
    // This function asks the user for a word or a sentence.
    // if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
    // else return an array with the morse translation of the user’s word.
    // if the user enters the word "Hello", the promise resolves with this value["....", ".", ".-..", ".-..", "---"]
    // if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
    function toMorse(morseJS) {
        return new Promise(function (resolve, reject) {
            let userInput = prompt('Please enter a word or sentence').toLowerCase()
            userInput = userInput.replace(/\s/g, '');   // to remove spaces in case string is a sentence and not just a word
            let arr = userInput.split('')
            let availableChars = Object.keys(morseJS)
            if (arr.every(char => availableChars.includes(char))) {
                let morseTranslatedArr = arr.map(char => morseJS[char])
                resolve(morseTranslatedArr)
            } else {
                reject('ERROR, the promise rejects because the character doesn\'t exist in the morse javascript object')
            }
        })
    }
    // The third function called joinWords(morseTranslation), takes one argument: the morse translation array
    // this function joins the morse translation by using line break and display it on the page(ie.On the DOM)
    function joinWords(morseTranslation) {
        const container = document.getElementById('container')
        const div = document.createElement('div')
        const p = document.createElement('p')
        const text = document.createTextNode(morseTranslation.join(' '))
        p.appendChild(text)
        div.appendChild(p)
        container.appendChild(div)
    }
    toJs()
        .then((jsObj) => toMorse(jsObj))
        .then((resOne) => joinWords(resOne))
        .catch((err) => console.log(err))
    
    
    
    
    
    
    
    
    
    
    
    
    

