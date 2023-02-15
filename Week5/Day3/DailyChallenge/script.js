// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

function makeAllCaps(wordArray) {
    return new Promise(function(resolve, reject) {
       const capsArray = wordArray.map((word) => {
          if (typeof(word) === 'string') {
             return word.toUpperCase();
          } else {
             reject('The array contains a non-string value');
          }
       });
       resolve(capsArray);
    });
 }
 
 makeAllCaps(['masha', 'stas'])
 .then(result => console.log(result))
 .catch(error => console.error(error));

 function sortWords(uppercasedArray) {
    return new Promise(function(resolve, reject) {
        if (uppercasedArray.length > 4) {
            const sortedArray = uppercasedArray.sort((a, b) => a > b ? 1 : -1);
            resolve(sortedArray);
        } else {
            reject('The array length is less than 4');
        }
    });
}

makeAllCaps(['masha', 'stas', 'john', 'jane', 'joe'])
.then(result => {
    sortWords(result)
    .then(sortedArray => console.log(sortedArray))
    .catch(error => console.error(error));
})
.catch(error => console.error(error));

