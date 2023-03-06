import React from 'react';

class Sunrise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'Israel',
      city: 'Tel-Aviv',
      hoursunrise: '',
    };
  }

  componentDidMount() {
    fetch('https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818')
      .then((res) => res.json())
      .then((res) => this.setState({ hoursunrise: res.results.sunrise }))
      .catch((error) => {
        console.log(`this is an ${error}`);
      });
  }

  render() {
    let { country, city, hoursunrise } = this.state;
    return (
      <>
        <h1>In {country}</h1>
        <p>
          The hour of the sunrise in {city} is {hoursunrise}
        </p>
      </>
    );
  }
}

export default Sunrise;
