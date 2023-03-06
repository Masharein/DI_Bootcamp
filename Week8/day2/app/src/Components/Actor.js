import React from 'react'
class Actor extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: 'Brad',
            lastName: 'Pitt',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXey9JhLlplwK0JI9GY7GcNHf0FNqiaDZf-b-nVaCOXw&s',
        }
    }
    render(){
        return (
            <div>
                <h1>My favourite actor is {this.state.firstName}{' '}{this.state.lastName}</h1>
                <img src={this.state.image} alt = 'brad'></img>
            </div>
        )
    }
}

export default Actor;
