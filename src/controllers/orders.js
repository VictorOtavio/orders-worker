const ordersRepository = require('../repositories/orders')

module.exports = {
  index (req, res) {
    const orders = ordersRepository.fetchAll()
    res.json(orders)
  },

  store (req, res) {
    const order = ordersRepository.store(req.body)
    res.status(201).json(order)
  },

  show (req, res) {
    const order = ordersRepository.show(req.params.id)
    res.json(order)
  }
}
