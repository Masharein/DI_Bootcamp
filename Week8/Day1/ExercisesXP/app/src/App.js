import logo from './logo.svg';
import './App.css';
import React from "react"
import Exercise4  from './Exercise4';
import './Exercise4.css';
// import UserFavoriteColors from './UserFavoriteColors';

// function App() {
//   return ( 
//     <h1>I do not use JSX</h1>
//   )
// }
// export default App;

// Exercise 1 : No JSX
// const myelement = React.createElement('h1', {}, 'I do not use JSX!');
// function App() {
//   return ( 
//     myelement
//   )
// }
// export default App;

// Exercise 2: With JSX
// const myelement = <h1>I Love JSX!</h1>;
// const sum = 5 + 5;
// function App() {
//   return ( 
//     <div>
//       Hello!
//      {myelement}
//      <p>React is {sum} times better with JSX</p>
//     </div>
//   )
// }
// export default App;

// Exercise 4: 
// In the React App, render the first name and the last name of the user in two <h3>.
// In a separate Javascript file, create a new Component called UserFavoriteColors. Use props to pass the fav_animals array to the UserFavoriteColors component.
// In the UserFavoriteColors component, use the map function to create a new array of <li>‘s.
// Each <li> corresponds to one animal from the fav_animals array.
// Display the <li>‘s. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item

// const user = {
//   firstName: 'Bob',
//   lastName: 'Dylan',
//   favAnimals : ['Horse','Turtle','Elephant','Monkey']
// };



function App() {
  return ( 
    // <div>
    //   <h1>{user.firstName}</h1>
    //   <h1>{user.lastName}</h1>
    // </div>
  //   <div>
  //    <UserFavoriteColors favAnimals={user.favAnimals}/>
  // </div>
  <Exercise4/>
  )
}
export default App;

