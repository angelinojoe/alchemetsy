const db = require('APP/db')
const Product = db.model('products')

module.exports = require('express').Router()

// get all products
.get('/', (req, res, next) =>
    Product.findAll()
    .then(products => res.json(products))
    .catch(next))

// get a single product by productId
.get('/:productId', (req, res, next) =>
    Product.findById(req.params.productId)
    .then(product => res.json(product))
    .catch(next))