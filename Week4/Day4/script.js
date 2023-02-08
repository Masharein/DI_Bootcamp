// function getDetails(details) {
//     const{name, house, goodstudent} = details
// 	console.log(name, house, goodstudent)
// }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

function getMoreDetails(newDetails) {
    const {name, house, friend : {friendName : friendName}, friend : {age :age}} = newDetails
	console.log(name, house, friendName, age)
}

getMoreDetails(
			{name: 'Hermione Granger', 
				house: 'Gryfindor', 
				friend :  {
					friendName : 'Harry Potter', 
                    age : 20
				}
			})

// Exercise5
// Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)
const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}


getElonMuskDetails(elonPerson)