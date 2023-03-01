const express = require('express');
const cors = require('cors');
const {products} = require('./database/products.js');
const dotenv = require('dotenv');

dotenv.config()

// console.log(products);
const app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use('/',express.static(__dirname + '/public'))

app.listen(process.env.PORT, ()=>{
  console.log(`run on port ${process.env.PORT}`);
})

// CRUD
// Read
app.get('/api/products',(req,res)=>{
  res.json(products)
})

app.get('/api/products/:id', (req,res)=>{
  const product_id = req.params.id;
  const product = products.find(item => {
    return item.id == product_id
  })
  if(!product){
    return res.status(404).json({msg:'not found'})
  }
  res.json(product)
})

app.get('/api/search', (req,res)=>{
  const name = req.query.q;
  const filter_products = products.filter(item => {
    return item.name.toLowerCase().includes(name.toLowerCase())
  })

  if(filter_products.length === 0){
    return res.status(200).json({msg:'no such product'})
  }
  res.json(filter_products)
})

//CRUD
//Create
app.post('/api/products',(req,res)=>{
   const new_product = {
     id: products.length+1,
     name: req.body.name,
     price:req.body.price
   }
   products.push(new_product)
   res.status(200).json(products);
   // res.sendStatus(200);
})

//CRUD
//Update - PUT
app.put('/api/products/:id',(req,res)=>{
  const id = req.params.id;
  const index = products.findIndex(item => item.id == id);

  if(index === -1){
    return res.status(404).json({msg:'Product not found'})
  }
  const updatedProduct = {
    id: products[index].id,
    name: req.body.name,
    price: req.body.price
  }

  products[index] = updatedProduct;
  res.status(200).json(products)
})


//CRUD
//Delete - Delete
app.delete('/api/products/:id', (req,res)=>{
  const id = req.params.id;
  const index = products.findIndex(item => item.id == id);

  if(index === -1){
    return res.status(404).json({msg:'Product not found'})
  }
  products.splice(index,1)
  res.status(200).json(products);
})
