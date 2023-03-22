const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/hello', (req, res) => {
  const message = `I received your POST request. This is what you sent me: ${req.body.data}`;
  console.log(req.body);
  res.send(message);
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));