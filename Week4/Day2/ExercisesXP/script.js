// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const findSum = (a, b) => a + b
findSum(5, 2)

// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.
function findWeight(a) {
    return a * 1000
}
findWeight(6)

const findWeightSecond = (a) => {
    return a * 1000
}
findWeightSecond(3)

const findWeightThird= (a) => a * 1000
findWeightThird(5)

// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function(numberOfChildren, partnerName, geographicLocation, jobTitle){
    console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`);
}('2' , 'Stas', 'Israel' , 'doctor'))


// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function(username){
    const navbar = document.querySelector(".navbar-brand");
    console.log(navbar)
    const nameUser = username
    navbar.innerText = nameUser
    const imgUser = document.createElement("IMG")
    imgUser.src = "https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/163608135_283868429772099_3009807660294436198_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dCakrh6aUlMAX_bCoyn&_nc_ht=scontent.fhfa1-1.fna&oh=00_AfAB1yLgTc2hABucEXcpIFRow-1vGCFDgh6uf6yEEvrCCA&oe=64083674";
    imgUser.style.width = '50px';
    imgUser.style.height = '50px';
    navbar.appendChild(imgUser)
}('John'))

// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


function makeJuice(size) {
    function addIngredients (firstIngredient, secondIngredient, thirdIngredient) {
        const div = document.createElement("div")
        const body = document.body
        div.innerText = (`The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`)
        body.appendChild(div)
    }
    addIngredients('apple', 'banana', 'orange')
}
makeJuice('big')

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.




function makeJuice(size) {
    const ingredients = [];

    function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
        ingredients.push(firstIngredient, secondIngredient, thirdIngredient);
    }

    function displayJuice() {
        const div = document.createElement("div");
        const body = document.body;
        div.innerText = `The client wants a ${size} juice, containing `;

        ingredients.forEach((ingredient, index) => {
            div.innerText += ingredient;
            if (index !== ingredients.length - 1) {
                div.innerText += ', ';
            }
        });

        body.appendChild(div);
    }

    addIngredients('apple', 'orange', 'banana');
    addIngredients('peach', 'kiwi', 'tomato');
    displayJuice();
}

makeJuice("big");
   
