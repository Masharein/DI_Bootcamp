import React from 'react'

export class Forms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      age: '',
      errormessage: '',
      text: '',
      selectedCar: 'Volvo'
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  mySubmitHandler = (e) => {
    e.preventDefault();
    const { username, age } = this.state;
    if (username && !isNaN(age)) {
      alert(`You are submitting ${username} ${age}`);
    } if (username && isNaN(age)) {
      alert('Your age must be a number')
      this.setState({errormessage: 'Your age must be a number'});
    }
  }

  render() {
    const { username, age } = this.state;
    let header = '';
    if (username && age) {
      header = <h1>Hello {username} {age}</h1>; 
    }
    return (
      <div>
        {header}
        <form onSubmit={this.mySubmitHandler}>
          <h4>Enter your name:</h4>
          <input type='text' name='username' onChange={this.handleChange} value={username} />
          <h4>Enter your age:</h4>
          <input type='text' name='age' onChange={this.handleChange} value={age} />
          {this.state.errormessage}
          <h3><button type='submit'>Submit</button></h3>
          <textarea value = {this.state.text} name ='text'onChange={this.handleChange}></textarea>
          <div><select value={this.state.selectedCar} name ='selectedCar' onChange={this.handleChange}>
          <option value="Volvo">Volvo</option>
          <option value="Ford">Ford</option>
          <option value="Fiat">Fiat</option>
        </select></div>
        </form>
      </div>
    )
  }
}

export default Forms;
