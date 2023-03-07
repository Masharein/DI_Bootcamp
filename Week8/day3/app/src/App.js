import React from 'react';
import './App.css';
import UserC from './Components/UserC';
import SearchBox from './Components/SearchBox'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users_arr: [],
      color: 'yellow',
      filterValue: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'pink' });
    }, 5000);
  }

  showUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => this.setState({ users_arr: res }))
      .catch((error) => {
        console.log(`this is an ${error}`);
      });
  };

  handleFilterChange = (event) => {
    this.setState({ filterValue: event.target.value });
  };

  render() {
    const filteredUsers = this.state.users_arr.filter(
      (user) =>
        user.name.toLowerCase().includes(this.state.filterValue.toLowerCase()) ||
        user.email.toLowerCase().includes(this.state.filterValue.toLowerCase()) ||
        user.username.toLowerCase().includes(this.state.filterValue.toLowerCase())
    );

    return (
      <div style={{ backgroundColor: this.state.color }}>
       <SearchBox handleFilterChange={this.handleFilterChange}/>
        <button onClick={this.showUsers}>Show users</button>
        {filteredUsers.map((item, index) => {
          return (
            <UserC key={index} name={item.name} email={item.email} username={item.username} />
          );
        })}
      </div>
    );
  }
}

export default App;

