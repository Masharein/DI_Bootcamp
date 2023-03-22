import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Message from './components/Message'

function App() {
  const [data, setData] = useState({ firstName: '', lastName: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false)

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(data);
    setSubmitted(true);
  }

  function handleChange(event, name) {
    setData({ ...data, [name]: event.target.value });
  }

  function resetForm(event) {
    event.preventDefault();
    setSubmitted(false);
    setData('')
  }

  return (
    <div className="App">
      {submitted ? (<Message reset={resetForm} data={data} />) :
      (<LoginForm data={data} submit={handleFormSubmit} change={handleChange} />)
  }
    </div>
  );
}

export default App;
