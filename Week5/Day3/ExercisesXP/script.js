// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.


function compareToTen(num) {
    return new Promise(function(resolve, reject) {
      if (num < 10) {
        resolve('The number is less than 10');
      } else {
        reject('The number is greater than or equal to 10');
      }
    });
  }

    compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

//     🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('success');
    }, 4000);
  });
  
  myPromise.then(function(result) {
    console.log(result);
  }).catch(function(error) {
    console.error('Oops something went wrong');
  });

//   🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Boo!");

  promise1.then(value => {
    console.log(value); 
  });
  
  promise2.catch(error => {
    console.error(error); 
  });
  
