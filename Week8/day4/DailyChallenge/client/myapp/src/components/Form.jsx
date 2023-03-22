import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    message: '',
    inputValue: '',
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:5000/api/hello');
    const message = response.data;
    this.setState({ message });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { inputValue } = this.state;
    const response = await axios.post('http://localhost:5000/api/hello', { data: inputValue });
    console.log(response.data);
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { message, inputValue } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={inputValue} onChange={this.handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
