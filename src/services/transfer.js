const axios = require('axios')

module.exports = {
  async create (order) {
    try {
      const res = await axios.post(process.env.TRANSFER_API, order)
      return res.data.id
    } catch (e) {
      console.error(e)
      console.warn('Transfer service are offline!')
      return null
    }
  }
}
