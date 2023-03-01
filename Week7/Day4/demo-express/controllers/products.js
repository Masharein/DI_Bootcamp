const {getAllProducts} = require('../modules/products.js')

const _getAllProducts = (req, res) => {
    getAllProducts()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    _getAllProducts
}