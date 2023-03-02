const {db} = require('../config/db.js');

const getAllProducts = () => {
  return db('products')
  .select('id','name','price')
  .orderBy('name');
}

const getProductById = (pid) => {
  return db('products')
  .select('id','name','price')
  .where({id:pid})
}

// product = {name:'Icar', price:1000}
const insertProduct = (product) => {
  return db('products')
  .insert(product)
  .returning('*')
}

const updateProduct = (pid, product) => {
  return db('products')
  .update(product)
  .where({id:pid})
  .returning('*')
}

const deleteProduct = (id) => {
  return db('products')
  .del()
  .where({id:id})
  .returning('*')
}



module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct
}
