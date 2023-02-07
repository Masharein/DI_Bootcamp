// const colors = ["blue", "red", "yellow"];

// const colorOne = colors[0];
// const colorTwo = colors[1];

// the initil array is unchanged
// destructuring 
// create 3 variable that are assigned with the value from the colors array
// in order
// const [colorOne, colorTwo, colorThree] =  colors;
// console.log(colorOne, colorTwo, colorThree);

// let [a, b, c] =  colors;
// // console.log(a);
// a = "green";
// console.log(a);
// console.log(colors);


//rest operator
//packing the 2 last elements into an array
const colors = ["blue", "red", "yellow", "green", "orange"];
let [a, b, c, ...d] =  colors;
console.log(d);  //[ "green", "orange"]
console.log(d[0]);

// spread operator
// unpack
const food = ["apple", "pear", "chocolate"];
const prices = [2, 1, 5];
console.log(...food);
const all = [...food, ...prices]; // ['apple', 'pear', 'chocolate', 2, 1, 5]
console.log(all);

const num = [1,2,3,4];
// const myNum = num; //they point to the same reference in the heap
// myNum[0] = 100;
// console.log("num" ,  num, "myNum", myNum);

//clone
const otherNums = [...num]; //they don't point to the same reference in the heap
otherNums[0] = 100;
console.log("num" ,  num, "otherNums", otherNums);

// shallow copy
// the spread opeator will clone the array only if if contains primitive data type
// as soon as it contains nested array or nested object it will still point to the same reference in the heap
const letters = ["a", "b", ["c", "d"]];
const favLetters = [...letters];
favLetters[0] = "z";
favLetters[2][0] = "y";
console.log("letters" ,  letters, "favLetters", favLetters);

