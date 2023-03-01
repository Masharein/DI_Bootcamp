const {db} = require('../config/db.js')
const getAllProducts = () => {
    return db('products')
    .select('id', 'name', 'price')
    .orderBy('name');


    module.exports = {
        getAllProducts
    }
}