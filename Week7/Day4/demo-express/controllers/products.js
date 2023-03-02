const {getAllProducts, getProductById} = require('../modules/products.js')

const _getAllProducts = (req, res) => {
    getAllProducts()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
    })
}

const _getProductById = (req,res) => {
    getProductById(req.params.id)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    _getAllProducts,
    _getProductById
}