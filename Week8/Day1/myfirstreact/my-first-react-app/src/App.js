// import logo from './logo.svg';
// import './App.css';
// import Hello from './hello';
// import Actor from './Actor';


// // const charactersJson = {
// //   "people": [
// //     {
// //       "id" : "1",
// //       "name": "Luke Skywalker",
// //       "height": "172",
// //       "mass": "77",
// //       "hair_color": "blond",
// //     },
// //     {
// //       "id" : "2",
// //       "name": "C-3PO",
// //       "height": "167",
// //       "mass": "75",
// //       "hair_color": "n/a",
// //     },
// //     {
// //       "id" : "3",
// //       "name": "R2-D2",
// //       "height": "96",
// //       "mass": "32",
// //       "hair_color": "n/a",
// //     }
// //   ]
// // }

// const actors = [
//   {
//     firstName: 'Brad',
//     lastName: 'Pitt',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXey9JhLlplwK0JI9GY7GcNHf0FNqiaDZf-b-nVaCOXw&s'
//   },
//   {
//     firstName: 'Tom',
//     lastName: 'Hanks',
//     img: 'https://pyxis.nymag.com/v1/imgs/a04/de0/a4fd1320fa31b11ef5198c647e79e54c00-tom-hanks.rhorizontal.w700.jpg'
//   },
//   {
//     firstName: 'Tom',
//     lastName: 'Hardi',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfO8VgAJimBzeQU9C4GIdd6xowWF4xUKE3y--3ZrdmA&s'
//   }
// ]
// function App() {
//   // const carName = 'Lightning McQween'
//   // const Brand = 'Ford'
//   // const listCars = [
//   //   {
//   //     id : 1,
//   //     name: "dodge d200",
//   //     year: "1970-01-01",
//   //     origin: "USA"
//   //   },
//   //   {
//   //     id : 2,
//   //     name: "hi 1200d",
//   //     year: "1970-01-01",
//   //     origin: "USA"
//   //   },
//   //   {
//   //     id : 3,
//   //     name: "datsun pl510",
//   //     year: "1971-01-01",
//   //     origin: "Japan"
//   //   },
//   //   {
//   //     id : 4,
//   //     name: "chevrolet vega 2300",
//   //     year: "1971-01-01",
//   //     origin: "USA"
//   //   }
//   // ]

  
//   return (
//     <div className="App">
//   {/* <Hello/> */}
//   {/* <p>My name is {carName}</p> */}
//   {
//     actors.map(actor => (
//         <ul>
//           <li>{actor.firstName}</li>
//           <li>{actor.lastName}</li>
//           <li>{actor.img}</li>
//         </ul>
//     ))
//   }
//   {/* <Car carBrand={Brand} name="mcLaren"/> */}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Actor from './Actor';

const actors = [
  {
    firstName: 'Tom',
    lastName: 'Hanks',
    image: 'https://pyxis.nymag.com/v1/imgs/a04/de0/a4fd1320fa31b11ef5198c647e79e54c00-tom-hanks.rhorizontal.w700.jpg'
  },
  {
    firstName: 'Emma',
    lastName: 'Watson',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGDVIMGjWpzsLwPHuTEjcXfDlBe8PjMpsTBD9yYyH&s'
  },
  {
    firstName: 'Brad',
    lastName: 'Pitt',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXey9JhLlplwK0JI9GY7GcNHf0FNqiaDZf-b-nVaCOXw&s'
  }
];

const App = () => {
  return (
    <div>
      {actors.map((actor, index) => (
        <Actor key={index} firstName={actor.firstName} lastName={actor.lastName} image={actor.image} />
      ))}
    </div>
  );
};

export default App;