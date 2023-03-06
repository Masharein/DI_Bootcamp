import React from 'react'

class Car extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color: 'red',
            brand: 'ford',
            model: 'Mustang',
            year: 1964
        }
    }

    changeColor = () => {
        this.setState({color: 'blue'})
    }

    changeRandomColor = () => {
        let {colors} = this.props
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        this.setState({color:randomColor})
    }
    render(){
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p style={{backgroundColor: this.state.color}}>It is a {this.state.color}{' '}
                {this.state.model}{' '}
                from {this.state.year}</p>
                <button type='button' onClick={this.changeRandomColor}>Change color</button>
            </div>
        )
    }
}

export default Car

