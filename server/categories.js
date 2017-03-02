const db = require('APP/db')
const Category = db.model('categories')

module.exports = require('express').Router()

.get('/', (req, res, next) =>
    Category.findAll()
    .then(categories => res.json(categories))
    .catch(next))
