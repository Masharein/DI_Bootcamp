import React from 'react'

export class Color extends React.Component {
    constructor(props){
        super(props)
            this.state = {
             favouritecolor: 'red'
            }
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({favouritecolor: 'yellow'})
        }, 5000)
      }
    changeColor = () => {
        this.setState({favouritecolor: 'blue'})
    }
  render() {
    return (
      <h1>My favourite color is {this.state.favouritecolor} <button onClick={this.changeColor}>Change color</button></h1>
    )
  }
}

export default Color