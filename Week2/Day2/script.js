// var day = 4;   //change and try with different values

// switch(day)
// {
//   case 1:      //if day = 1
//     console.log("Monday");
//     break;
//   case 2:      //if day = 2
//     console.log("Tuesday");
//     break;
//   case 3:      //if day = 3
//     console.log("Wednesday");
//     break;
//   case 4:      //if day = 4
//     console.log("Thursday");
//     break;
//   case 5:      //if day = 5
//     console.log("Friday");
//   case 6:      //if day = 6
//     console.log("Saturday");
//   case 7:      //if day = 7
//     console.log("Sunday");
//     break;
//   default:    //if day doesn't match any of above
//     console.log("Invalid");
// }

// let age = prompt('How old are you?', 18);

// if (age === 18) {
//     alert('Congratulations on your first year of driving. Enjoy the ride!')
// } else if (age > 18) {
//     alert('Powering On. Enjoy the ride')
// } else {
//     alert('Sorry, you are too young to drive this car. Powering off')
// }

// let person = {
//  userName: 'Masha',
//  password: '12345',
// }

// let database = [person];
// console.log(database)

const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object
// 2. Change the username from John to Tom
// 2. Change the price of the pear, so it will include the Taxes. (17% is 0.17)
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants

userCart["lastname"] = 'Smith';
userCart["username"] = 'Tom';
userCart["prices"]["pear"] = 0.17;
let fruit = prompt('Choose Apple, Banana or Pear').toLowerCase()

if (fruit === 'apple') {
  alert(userCart["prices"]["apple"])
} else if (fruit === 'banana') {
  alert(userCart["prices"]["banana"])
} else if (fruit === 'pear') {
  alert(userCart["prices"]["pear"])
}
else {
  alert("We don't have this fruit")
}

  

