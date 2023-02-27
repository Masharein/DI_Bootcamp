// console.log("hello")
const express = require('express');
const {products} = require('./database/product.js');
const cors = require('cors')
console.log(products)

const app = express();
app.use(cors());
app.use('/', express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.listen(5000, () => {
    console.log('run on port')
})

app.get('/api/product', (req, res) => {
    res.json(products)
})

app.get('/api/product/:id', (req, res) => {
    const product_id = req.params.id;
    const product = products.find(item => {
        return item.id == product_id
    })
    if(!product) {
        return res.status(404).json({msg:'not found'})
    }
    res.json(product)
})


app.get('/api/search/', (req, res) => {
    const name = req.query.q;
    const filterProducts = products.filter(item => {
        return item.name.toLowerCase().includes(name.toLowerCase())
    })
    if(filterProducts.length === 0) {
        return res.status(200).json({msg:'no such product'})
    }
    res.json(filterProducts);
})

app.post('/api/product', (req,res) => {
    const newProduct = {
        id: products.length+1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    console.log(products)
    res.status(200).json(products)
    // res.sendStatus(200);
})