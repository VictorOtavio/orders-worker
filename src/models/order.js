const db = require('../database')

const orderSchema = new db.Schema({
  status: String,
  price: String,
  cartID: String,
  partnerID: String,
  customerID: String
})

module.exports = db.model('Order', orderSchema)
