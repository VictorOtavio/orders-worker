const express = require('express')
const orders = require('./controllers/orders')

const router = express()
router.use(express.json())

router.get('/orders', orders.index)
router.post('/orders', orders.store)
router.get('/orders/:id', orders.show)

module.exports = router
