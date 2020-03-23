const ordersRepository = require('../repositories/orders')
const invoiceService = require('../services/invoice')
const transferService = require('../services/transfer')

module.exports = {
  /**
   * Retorna a listagem completa de pedidos.
   * @param {Request} req Contém o objeto da requisição HTTP
   * @param {Response} res Contém o objeto da resposta HTTP
   */
  async index (req, res) {
    const orders = await ordersRepository.fetchAll()
    res.json(orders)
  },

  /**
   * Armazena um novo pedido na fila.
   * @param {Request} req Contém o objeto da requisição HTTP
   * @param {Response} res Contém o objeto da resposta HTTP
   */
  async store (req, res) {
    const order = await ordersRepository.store(req.body)
    res.status(201).json(order)
  },

  /**
   * Retorna os dados de um determinado pedido.
   * @param {Request} req Contém o objeto da requisição HTTP
   * @param {Response} res Contém o objeto da resposta HTTP
   */
  async show (req, res) {
    const order = await ordersRepository.show(req.params.id)

    if (order.status === 'Created') {
      const invoiceID = await invoiceService.create(order)
      if (invoiceID !== null) {
        order.invoiceID = invoiceID
        order.status = 'Charged'
        await order.save()
      }
    } else if (order.status === 'Charged') {
      const transferID = await transferService.create(order)
      if (transferID !== null) {
        order.transferID = transferID
        order.status = 'Completed'
        await order.save()
      }
    }

    res.json(order)
  }
}
