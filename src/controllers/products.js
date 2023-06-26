const ProductsModel = require('../models/products')

const get = async (req, res) => {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

const post = async (req, res) => {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: "Sucess!"
    })
}

module.exports = {
    get, 
    post,
}