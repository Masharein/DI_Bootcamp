const {db} = require('../config/db.js')
const getAllProducts = () => {
    return db('products')
    .select('id', 'name', 'price')
    .orderBy('name');
}

const getProductById = (pid) => {
    return db('products')
    .select('id', 'name', 'price')
    .where({id:pid})
}

    module.exports = {
        getAllProducts,
        getProductById
    }
