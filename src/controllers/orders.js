const ordersRepository = require('../repositories/orders')

module.exports = {
  async index (req, res) {
    const orders = await ordersRepository.fetchAll()
    res.json(orders)
  },

  async store (req, res) {
    const order = await ordersRepository.store(req.body)
    res.status(201).json(order)
  },

  async show (req, res) {
    const order = await ordersRepository.show(req.params.id)
    res.json(order)
  }
}
