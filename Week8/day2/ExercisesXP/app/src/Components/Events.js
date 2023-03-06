import React from 'react'

export class Events extends React.Component {
  clickMe = () => {
    return alert('I was clicked')
  }
  render() {
    return (
      <div><button onClick={this.clickMe}>Click Me</button></div>
    )
  }
}

export default Events