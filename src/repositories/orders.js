const Order = require('../models/order')

module.exports = {
  /**
   * Retorna um array de pedidos cadastrados no banco de dados.
   * @return Array
   */
  async fetchAll () {
    const orders = await Order.find()
    return orders
  },

  /**
   * Retorna um array de pedidos cadastrados no banco de dados.
   * @param {Object} data Objeto com os dados do pedido.
   * @return {Array}
   */
  async store (data) {
    const order = new Order(data)
    await order.save()
    return order
  },

  /**
   * Retorna um array de pedidos cadastrados no banco de dados.
   * @param {String} id ID do pedido no banco de dados.
   * @return {Order}
   */
  async show (id) {
    const order = await Order.findById(id)
    return order
  }
}
