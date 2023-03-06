// import React from "react"
// const Car = ({model}) => {
//         return (<h1>This car is {model}</h1>)
//     }


// export class Car extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             name: "Ford", 
//             model: "Mustang",
//             color: "red"
//         }
//     }

//      render(){
//     return (
//       <div>This car is {this.state.color}{' '}{this.state.model}</div>
//     )
//   }
// }
// export default Car

import React from 'react';
import Garage from './Garage';

const Car = () => {
return (
<div>
<Garage size="small" />
</div>
);
};

export default Car;





