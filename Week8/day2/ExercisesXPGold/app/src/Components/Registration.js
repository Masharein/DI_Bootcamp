import React from 'react';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      errors: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      },
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email } = this.state;
    const errors = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    };

    if (firstName.trim() === '') {
      errors.firstName = 'First name is required';
    }
    if (lastName.trim() === '') {
      errors.lastName = 'Last name is required';
    }
    if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (Object.values(errors).every((error) => error === '')) {
      // Form is valid, do something with the data
      console.log('Valid form data', this.state);
    } else {
      // Form is invalid, update state with errors
      this.setState({ errors });
    }
  };

  render() {
    const { firstName, lastName, phone, email, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          label="First Name"
          name="firstName"
          value={firstName}
          error={errors.firstName}
          onChange={this.handleInputChange}
        />
        <Input
          label="Last Name"
          name="lastName"
          value={lastName}
          error={errors.lastName}
          onChange={this.handleInputChange}
        />
        <Input
          label="Phone"
          name="phone"
          value={phone}
          error={errors.phone}
          onChange={this.handleInputChange}
        />
        <Input
          label="Email"
          name="email"
          value={email}
          error={errors.email}
          onChange={this.handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function Input({ label, name, value, error, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} value={value} onChange={onChange} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Registration