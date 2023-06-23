const ProductsModel = require('../models/products')

const get = async (req, res) => {
    const products = await ProductsModel.find()

    res.send(products)
}

module.exports = {
    get
}