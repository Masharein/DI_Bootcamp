import React from 'react'

export class BuggyCounter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          count: 0
        }
    }
    handleClick = (e) => {
        e.preventDefault()
        this.setState({count: this.state.count + 1})
    }
  render() {
    if(this.state.count === 5) {
        throw Error('I crashed...')
    }
    return (
      <>
      {this.state.count}
      <button onClick = {this.handleClick}>ADD</button>
      </>
    )
  }
}

export default BuggyCounter