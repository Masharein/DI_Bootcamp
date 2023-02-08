// Array destructuring
const colors = ["blue", "red", "yellow"];
const [first, second, third] = colors;

//Object destructuring
const product = {
    name: 'Tshirt',
    color: 'blue',
    price: 10,
}

const productName = product.name;
const productNameSecond = product["name"];

//unpacking values from the object
const {color, price} = product; //2 global variables
console.log(color, price);

//give other names the variable
const {color : productColor, price: productPrice} = product;
console.log(productColor, productPrice);


// Nested Object destructuring
const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    address: {
      city: 'Gotham'
    }
};

const adressHero = hero.address.city

const {name : heroName, address : {city : cityHero}} = hero;
console.log(heroName, cityHero);

// functions & object destructuring
function displayUser(userObj){
    const {firstName, favoriteColor} = userObj;
    const sentence = `The user ${firstName} loves ${favoriteColor}`;
    console.log(sentence);
}
  
displayUser({firstName: "Alex", favoriteColor: "purple"})
  
// {firstName, favoriteColor} = {firstName: "Alex", favoriteColor: "purple"}

function displayUserSecond({favoriteColor, firstName : fname}){
    const sentence = `The user ${fname} loves ${favoriteColor}`;
    console.log(sentence);
}
 
const obj = {firstName: "Alex", favoriteColor: "purple"}
displayUserSecond(obj);
  
// functions & nested object destructuring
function displayUserThird(userObj){
    let {friend : {username}} = userObj;
    username = "Tom";
    console.log(username, obj);
}
 
const obj2 = {
    firstName: "Alex", 
    favoriteColor: "purple",
    friend : {
        username : "John",
    }
}
displayUserThird(obj2);


// array and object destructuring
const otherProduct = {
    name: 'Tshirt',
    color: 'blue',
    price: 10,
    availibility : {
      store : ["Tel Aviv", "Herzelia", "Haifa"],
      totalNumProduct : 100
    }
}

const {
    color : colorNewProduct,
    availibility : {
        totalNumProduct,
        store : [cityOne, cityTwo], //array destructuring
    }
} = otherProduct

console.log(colorNewProduct, totalNumProduct);
console.log(cityOne, cityTwo);

// REST OPERATOR
const otherColors = ["blue", "red", "yellow"];

const [firstColor, ...allOtherColors] = otherColors; //array destructuring //rest
console.log(firstColor, allOtherColors); 
        //blue    //["red", "yellow"]

// ...newVariable -> pack the rest of the values into an array called newVariable
// ...nameArray -> unpacking the values : spread

const heroTwo = {
    name: 'Batman',
    address: 'Gotham',
    friend : "Tom",
    realName: 'Bruce Wayne',
};


// //name
// // objec containing realName & adress
const {realName, ...otherInfo} = hero;
console.log(realName); //'Bruce Wayne'
console.log(otherInfo); 
// // {
//     // name: 'Batman',
//     // address: 'Gotham',
//     // friend : "Tom",
// // }

// SPREAD OPERATOR
const colorsThree = ["blue", "red", "yellow"];

const favColors = colorsThree; //same reference heap
favColors[1] = "black"

const fav = [...colorsThree];
// fav ["blue", "red", "yellow"] // wont point to the same ref in the heap

const heroThree = {
    name: 'Batman',
    address: 'Gotham',
    colors : ["blue", "red"],
    friend : {
      fname : "John",
    }
};

const myHero = heroThree;
heroThree.name = 'Spiderman'; // point to the same reference heap

console.log(heroThree);
console.log(myHero);

const heroFour = {
    name: 'Batman',
    address: 'Gotham',
    colors : ["blue", "red"],
    friend : {
      fname : "John",
    }
};
//spread only makes a shallow copy
const favHero = {...heroFour}; //cloning without cloning the reference. Cloning the data;
heroFour.name = "Spiderman";
heroFour.friend.fname = "Lea"; //changed in both objects
heroFour.colors[0] = "black"; //changed in both objects

console.log(hero);
console.log(favHero);