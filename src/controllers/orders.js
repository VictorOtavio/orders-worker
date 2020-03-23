const ordersRepository = require('../repositories/orders')

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
   * Armazena um novo pedido no banco de dados.
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
    res.json(order)
  }
}
