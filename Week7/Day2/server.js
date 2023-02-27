// console.log("hello")
const express = require('express');
const {products} = require('./database/product.js');
console.log(products)

const app = express();
app.listen(5000, () => {
    console.log('run on port')
})

app.get('/api/product', (req, res) => {
    res.json(products)
})