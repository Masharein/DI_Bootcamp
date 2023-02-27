
const express = require('express');
const app = express();
const port = 3000;

const user = {
    firstname: 'John',
    lastname: 'Doe'
};

app.get('/', (req, res) => {
    res.json(user);
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

