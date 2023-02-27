// console.log("hello")
const express = require('express');
const {products} = require('./database/product.js');
const cors = require('cors')
console.log(products)

const app = express();
app.use(cors());
app.use('/', express.static(__dirname + '/public'))
app.listen(5000, () => {
    console.log('run on port')
})

app.get('/api/product', (req, res) => {
    res.json(products)
})