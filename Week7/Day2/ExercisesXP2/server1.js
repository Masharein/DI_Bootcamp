const express = require('express');
const app = express();
const port = 3000;

app.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id: id });
  console.log(`The id is ${id}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
