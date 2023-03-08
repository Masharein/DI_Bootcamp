import React from 'react'

export class Counter extends React.Component {
    constructor(){
        super()
            this.state={
                count: 0
        }

    }
    add = () => {
        this.setState({count: this.state.count + 1})
    }

  render() {
    if(this.state.count > 5) {
        throw Error('Crashed ......')
    }
    return (
      <div>
        {this.state.count}
        <button onClick={this.add}>ADD</button>
      </div>
    )
  }
}

export default Counter