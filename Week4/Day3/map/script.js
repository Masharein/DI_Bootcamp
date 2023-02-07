const restaurant = [20,15.2,10];

const TAXES = 1.17;

// --- WITHOUT MAP ---

const withTaxes = [];
//create a new array, containing the price with taxes
function createPriceWithTaxes () {
    for(let price of restaurant) {
        const newPrice = price*TAXES;
        withTaxes.push(newPrice);
    }
}

createPriceWithTaxes();
console.log(withTaxes);

// --- WITH MAP ---
//map method loop trhough the restaurant array
// and push every element that we return into a new Array
// map returns an array filled with data
const withTaxesTwo = restaurant.map((elem) => elem*TAXES);

// CLONING AN ARRAY
const restaurant2 = restaurant.map((elem) => elem);

restaurant[0] = 100;

//restaurant and restaurant2 have the same value but don't point to the same reference in the heap
console.log("restaurant ", restaurant, "restaurant2", restaurant2);

// ------- LOOPS WITH DOM NODES -----
const allP = document.querySelectorAll("p");
console.log(allP);

for(let i = 0; i<allP.length; i++){
    console.log(allP[i]);
}

for(let p of allP){
    console.log(p);
}

allP.forEach(elem => console.log(elem))

// map doesn't work
// const newP = allP.map(elem => elem);

let firstP = allP[0];
let testP = firstP;
firstP.textContent = "John"; 
//point to the same reference so if the textContent of firstP is changed
//the textContent of testP is also changed

console.log("firstP", firstP, "testP", testP);

// ------- MAP AND ARRAY OF OBJECTS

const students = [
	{name: 'Rich', score: 33}, 
	{name: 'Peter', score: 55}
];

// Use map to create a new array containing only the score of the students
// result => [33,55]

// const scores = students.map((elem, index) => console.log(`In the ${index+1} loop, element is `, elem))
const scores = students.map((elem) => elem.score)
console.log(scores);








let obj1 = {member:5};
let obj2 = obj1;
// obj1.member = 2;
// obj2 = {member:3}

console.log("obj1", obj1, "obj2", obj2);








