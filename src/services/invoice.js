const axios = require('axios')

module.exports = {
  async create (order) {
    try {
      const res = await axios.post(process.env.INVOICE_API, order)
      return res.data.id
    } catch (e) {
      console.error(e)
      console.warn('Invoice service are offline!')
      return null
    }
  }
}
