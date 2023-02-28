const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to display the hobby
app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;
  if (typeof hobby === 'string') {
    res.send(`My hobby is ${hobby}.`);
  } else {
    res.status(404).send('Invalid hobby.');
  }
});

// Route to display an HTML file with a picture
app.get('/pic', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pic.html'));
});

// Route to display an HTML form
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// Route to handle form submissions
app.post('/formData', bodyParser.urlencoded({ extended: false }), (req, res) => {
  const { email, message } = req.body;
  res.send(`${email} sent you a message "${message}".`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
