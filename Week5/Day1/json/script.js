//convert JSON STRING into A JAVASCRIPT OBJECT
// 2 METHODS
// CONVERT FROM A JSON STRING TO JS OBJECT : JSON.parse()
// CONVERT FROM JS OBJECT TO A JSON STRING : JSON.stringify()

// USE OF JSON METHODS

/* HTTP REQUEST 
If we want to pass Javascript data to the server, in order for it to be saved to the DB for example
we will need to stringify the data
because the only type format that can be exchanged 
between a browser and a server is type string
*/

/* HTTP RESPONSE
The server brings back JSON data to the client to be displayed on the page 
we will need to parse the data
*/

const fromjson = '{"result":true, "count":42}'; //JSON
const newObj = JSON.parse(fromjson);
console.log(newObj);

function addData () {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    const text = document.createTextNode(newObj.count);
    p.appendChild(text)
    container.appendChild(p)
}

addData()


const fromobj = {username:"John", age:25};
// CONVERT THE JS OBJECT INTO JSON STRING
const newString = JSON.stringify(fromobj);
console.log(newString); //{"username":"John","age":25}


const family = {
    lastname : "Smith",
    details : {
        members : 4,
        friends : "Tom"
    }
}

const myFamily = family; //they point the same reference in the heap
myFamily.lastname = "Cohen"
console.log(family, myFamily);

const familyTwo = {
    lastname : "Smith",
    details : {
        members : 4,
        friends : "Tom"
    }
}

//...spread //shallow copy
const myNewFamily = {...familyTwo} //thye don't point to the same reference
myNewFamily.lastname = "Cohen"
console.log(myNewFamily, familyTwo); //ok
myNewFamily.details.members = 100;
console.log(myNewFamily, familyTwo);//not ok


const familyThree = {
    lastname : "Smith",
    details : {
        members : 4,
        friends : "Tom"
    }
}

//DEEP COPY // DEEP CLONE
const myGreatFamily = JSON.parse(JSON.stringify(familyThree));
myGreatFamily.details.members = 100;
console.log(myGreatFamily, familyThree);