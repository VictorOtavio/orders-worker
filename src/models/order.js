const db = require('../database')

/**
 * Representa os dados de um Pedido
 */
const orderSchema = new db.Schema({
  status: String,
  price: String,
  cartID: String,
  partnerID: String,
  customerID: String,
  invoiceID: String,
  transferID: String
})

module.exports = db.model('Order', orderSchema)
