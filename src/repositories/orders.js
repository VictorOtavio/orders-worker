module.exports = {
  fetchAll () {
    return [
      { asdf: '1234' }
    ]
  },

  store (model) {
    return model
  },

  show (id) {
    return { id }
  }
}
