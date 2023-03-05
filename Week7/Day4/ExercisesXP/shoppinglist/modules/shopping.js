const {db} = require('../config/db.js');

const insertItem = (item) => {
  return db('shoppinglist')
  .insert(item)
  .returning('*')
}

const getAllItems = () => {
  return db('shoppinglist')
  .select('id','item','quantity')
  .orderBy('id')
}

module.exports = {
  insertItem,
  getAllItems
}
