const router = require('express').Router()

const ProductController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS)

// GET - obter dados
// POST - enviar/receber dados
// PUT - receber dados 
// DELETE - deletar dados 


router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)


module.exports = router