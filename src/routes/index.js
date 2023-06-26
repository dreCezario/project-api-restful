const router = require('express').Router()

const ProductController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS)

// GET - obter dados
// POST - enviar/receber dados
// PUT - receber dados 
// DELETE - deletar dados 


router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
// router.get('/products/:id', ProductController.put)
// router.get('/products/:id', ProductController.delete)


module.exports = router