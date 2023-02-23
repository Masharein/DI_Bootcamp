// // 1. How to access the second element of the array `
// const nums = [3, 7, 10]
// console.log(nums[1])
// // 2. For the code below, what does `arrNums.splice(2, 0)` return?
// const arrNums = [1, 2, 3, 4, 5];
// const newArr = arrNums.splice(2, 0)
// // []
// // 3. What is the result of the following code :
// const bestNumbers = [1, 2, 3]
// const secondBestNumbers = [7, 8, 9]

// const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
// console.log(favoriteNumbers) //[4, 5, 6, 1, 2, 3, 7, 8, 9]

// // 4.What does the following code print to the console?
// const football = {
//     type: "sport",
//     clubs: {
//       france : "Paris Saint-Germain",
//       spain : "Atlético Madrid",
//     }
//   }  
  
//   football.clubs.spain = "Real Madrid";
//   console.log(football.clubs.spain); //Real Madrid
// //   5. What does the following code print to the console?
//   const myteam = "bestTeam";  
//   const football = {
//     type: "sport",
//     clubs: {
//       france : "Paris Saint-Germain",
//       spain : "Atlético Madrid",
//     }
//   }  
  
//   football.clubs[myteam] = "France national football team";
//   console.log(football.clubs); 
// //   {
// //     france: 'Paris Saint-Germain',
// //     spain: 'Atlético Madrid',
// //     bestTeam: 'France national football team'
// //   }

// // 6. Can we define the function as follows? 
//     // If yes, 
//     // * what is it called ?
//     // * what is this part ?
        
//         function (a, b){
//            return a*b;
//         } //no
       
//     // * explain how to invoke it

//     const x = function(a, b){
//        return a*b;
//     } // const result = x(a, b);

//     // 7. Variables created **without** any keyword, are always global, even if they are created inside a function ? 
//     // Yes or No and explain


//     function x() {
//     	a = 5;
//     } //yes, because the is no keyword and each variable without keyword is a global variable
  

//     // 8. In JavaScript can we pass functions as arguments to other functions? What does this code return ?

//     function sayHello() {
//        return "Hello, ";
//     }
//     function greeting(helloMessage, name) {
//       console.log(helloMessage() + name);
//     }
//     greeting(sayHello, "JavaScript!"); //Hello, JavaScript!
//     // 9. Transform this function into an arrow function. Explain what is the goal of this parameter `num1=10`.

//     //   function sum(num1=10, num2){
//     //       return num1 + num2
//     //   }
      
//     //   sum(40,2)
//     //   sum(42,0)
//     //   console.log("the answer to everything is", sum(42,0))

//       const sum = (num1=10, num2) => {
//           return num1 + num2
//       }
      
//       const result = sum(40,2)
//       console.log(result)
//       const newResult = sum(42,0)
//       console.log(newResult)
//       console.log(`the answer to everything is ${newResult}`) 
//     //   The goal of the num1=10 parameter in the original function is to provide a default value of 10 
//     //   for the num1 parameter in case no value or undefined is passed in as an argument when the function is called. 
//     //   This means that if the function is called with only one argument, the value of num1 will default to 10, 
//     //   and the function will still be able to return a valid result.

//     // 10. How would you call the `foo` function in the console.log, in order to display what the `bar` function returns ? 
//     // Explain the process and concept behind it

//     function foo () {
//       function bar() {
//         return "Poppin' bottles";
//       }
//       return bar;
//     }
    
//     const result = foo()()
//     console.log(result) // the function foo will return only function 'bar', 
//     // so when we put another brackets we call the function bar and get the result

//     // 11. Which of the following events will you add in the `addEventListener()`method? 
//     //   ☐ click
//     //   ☐ onclick //click

//     // 12. Does the `addEventListener()` method allow you to add many events to the same element?

//     x.addEventListener("mouseover", func1);
//     x.addEventListener("click", func2);
//     x.addEventListener("mouseout", func3); //yes

//     13. DOM exercise

//     //   1. Part I : Create a button in your HTML page, when the user will click the button a paragraph will be added on the DOM.
//     //             * If the number of paragraph added is a multiple of 3, the content of the paragraph is "Hello"
//     //             * else the content of the paragraph is "New Paragraph" --> MANDATORY  : use ternary operator
//     //                 * Example: if the paragraph is the 3rd one added, the content should be "Hello"
//     //     --> MANDATORY : Use arrow functions.

//     //   2. Part II : Add to each new paragraph, an event listener of mouse over. When you hover on a paragraph, the paragraph should become red (ie. color of the text).

//     const container = document.querySelector('#paragraph-container');
//     let numParagraphs = 0;
  
//     function addPara(event) {
//       event.preventDefault();
//       numParagraphs++;
//       const para = document.createElement('p');
//       para.textContent = numParagraphs % 3 === 0 ? 'Hello' : 'New Paragraph';
//       para.addEventListener('mouseover', () => {
//         para.style.color = 'red';
//       });
//       para.addEventListener('mouseout', () => {
//         para.style.color = '';
//       });
//       container.appendChild(para);
//     }
  
//     const newButton = document.querySelector('.button');
//     newButton.addEventListener('click', addPara);
    
// //   14. Do this exercise twice: first with a `for loop`, then with a `for of loop`.
// //   Console.log the sum of this array
  
      
// const marks = [67, 60, 89, 90, 67, 42];
// let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }

// console.log(sum);

// const marks = [67, 60, 89, 90, 67, 42];
// let sum = 0;

// for (let i of marks) {
//   sum += i;
// }

// console.log(sum);

// // 15. What is the value of `passed` in the following code?

//          const marks = [67, 60, 89, 90, 67, 42];

//          const passed = marks.every(function(m) {
//             return m >= 50;
//          }); //false

// // 16. What does the following code log?

// const nums = [10, 50, 88];

// const bignums = nums.filter(function(n) {
//     return n > 10;
// });

// console.log(bignums); //[ 50, 88 ]

// // 17. Use a **javascript array method** to square the value of every element in the array. 

// const input = [ 1, 2, 3, 4, 5 ];
// const newInput = input.map(num => {
// return num ** 2 ;
// });
// console.log(newInput) // [ 1, 4, 9, 16, 25]


// //    18. Use **2 javascript array methods** and chain them to return the sum of all the positives ones. 
// const secondInput = [1, -4, 12, 0, -3, 29, -150];
// const input = secondInput.filter(num => num >= 0);
// const total = input.reduce((a, b) => a + b);
// console.log(total); //42


// // 19. Use **3 javascript methods** and chain them to abbreviate the name and return the name initials.

// const input = 'George Raymond Richard Martin';
// const initials = input.split(' ')
//   .map(name => name[0])
//   .join('');
// console.log(initials); 

// // 20. How objects are passed to a function in JavaScript? By Value or By Reference ? Explain in detail, using the below example:

//     function changeTshirt (myshirt){
//         console.log("myshirt", myshirt);
//         myshirt.color = "red"
//         console.log("myshirt", myshirt); //this is the parameter 
//         console.log("tshirt", tshirt);   //this is the global variable
//     }


//     const tshirt = {
//         color : "blue",
//         price : 10 
//     }   

//     changeTshirt(tshirt)
//     // In JavaScript, objects are passed by reference to a function. When an object is passed as a parameter to a function, a reference to the memory location of the object is passed, rather than a copy of the object itself. This means that any changes made to the object within the function will affect the original object outside of the function.

// //  The changeTshirt function takes an object myshirt as a parameter. When the changeTshirt function is called with the tshirt object as an argument (changeTshirt(tshirt)), the myshirt parameter inside the function refers to the same object as the global variable tshirt.

// // The changeTshirt function modifies the color property of the myshirt object by setting it to "red". Since objects are passed by reference, this modification affects the original tshirt object outside of the function as well. 



//     // 21. How would you change the code above, so that when you modify the key `color` from the parameter `myshirt`, it won't change the global variable `tshirt` ?

//     function changeTshirt(myshirt) {
//         console.log("myshirt", myshirt)
//         const newShirt = { ...myshirt }; // create a new object and copy the values of myshirt into it
//         newShirt.color = "red"; // modify the color property of the new object
//         console.log("myshirt", newShirt);
//         console.log("tshirt", tshirt); // this is the original global variable, it won't be affected
//       }
      
//       const tshirt = {
//         color: "blue",
//         price: 10,
//       };
      
//       changeTshirt(tshirt); // call the function with the tshirt object as the argument
      
//     //   22. Use object destructuring to retrieve the value of the keys `france` and `spain`

//     const football = {
//         type: "sport",
//         clubs: {
//             france : "Paris Saint-Germain",
//             spain : "Atlético Madrid",
//         }
//         }  

//     const {type, clubs: {france, spain}} = football;
//     console.log(france)
//     console.log(spain)

//     // 23. Use object destructuring in the function to retrieve the value of the keys `france` and `spain`

//      function retrieveSports ( {type, clubs: {france : franceTeam, spain : spainTeam}}) {
//         const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
//         console.log(sentence);
//      }

//      const football = {
//          type: "sport",
//          clubs: {
//            france : "Paris Saint-Germain",
//            spain : "Atlético Madrid",
//          }
//        }  

//      retrieveSports(football)

//     //  24. What will be printed in the console
//     class Item {
//        constructor(nameProduct, priceProduct) { 
//              this.name = nameProduct;
//              this.price = priceProduct;
//        }

//        displayInfo () {
//             console.log(this.name + " is for $ " + this.price)
//        }
//     } 

//     const cake = new Item("Chocolate Cake", 10);
//     cake.displayInfo(); //Chocolate Cake is for $ 10

//     // 25. What will be the output and why ? What will be the state of the promise ?

//     Promise.resolve('Success!')
//       .then(data => {
//         return data.toUpperCase()
//       })
//       .then(data => {
//         console.log(data)
//       }) // state of the promise will be fullfilled and the out put is 'SUCCESS!'

//     //   26. What will be displayed by the following code, after 2 seconds?

//     const p = new Promise(function(resolve, reject) {
//        setTimeout(function() {
//           resolve("OK");
//        }, 2000);
//     });
    
//     p.then(function(data) {
//        console.log(data);
//     }); //OK

//     // 27. Consider the following `async` function and its output. What will be displayed to the console when calling the `test()` function? Explain the process

//     async function test() {
//       let result = 'first!'; //After the promise is resolved, the result variable is reassigned the resolved value of the promise object, which is "done!".
      
//       const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('done!'), 1000); //A new Promise object is created with a function that calls the resolve function after a timeout of one second. This creates a delay of one second before the resolve function is called.
//       });
    
//       result = await promise; // The await keyword is used to pause the execution of the test() function until the promise is resolved. This means that the test() function will not proceed to the next line until the resolve function is called after one second.
    
//       console.log(result); // The result variable is then reassigned to this resolved value of "done!" because of the assignment operation result = await promise;. This means that after the promise is resolved, the value of result changes from "first!" to "done!"
//     }
    
//     test(); 

    // 28. Use **async await**, and **the fetch API** to fetch a fact on cats and display it. Use this third party API :  `https://catfact.ninja/fact`
    // 1. In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM 
    // 2. In the JS file, create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
    // 3. Make sure to use try and catch
    const container = document.querySelector('#paragraph-container');
    const newButton = document.querySelector('.button');
    newButton.addEventListener('click', getFacts);

    async function getFacts () {
        try {
            const response = await fetch('https://catfact.ninja/fact');
            if(response.status !== 200) {
                throw new Error ("bad result")
            }
            const facts = await response.json(); 
            const para = document.createElement('p');
            para.textContent = facts.fact;
            container.appendChild(para);
        } catch (err) {
            console.error("ERROR");
        }
    }
    
    getFacts()

    

// 29. Use **async await**, and **the fetch API** to POST some data.
//     * Retrieve the data from a form (you can use new FormData), and send this data to this API : `https://jsonplaceholder.typicode.com/posts`. 
//     * The server will send you back some dummy data that you will display on the DOM.
//     * Use the documentation of the API : https://jsonplaceholder.typicode.com/guide/
//     * Use the fetch API documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data
//     * Use the new FormData documentation with Object.fromEntries() : https://gomakethings.com/the-object.fromentries-method-in-vanilla-js/
