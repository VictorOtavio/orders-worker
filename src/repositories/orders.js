const Order = require('../models/order')

module.exports = {
  async fetchAll () {
    const orders = await Order.find()
    return orders
  },

  async store (data) {
    const order = new Order(data)
    await order.save()
    return order
  },

  async show (id) {
    const order = await Order.findById(id)
    return order
  }
}
