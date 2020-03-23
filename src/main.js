const router = require('./router')

module.exports = async () => {
  try {
    const port = 3000
    router.listen(port, () => console.log(`App running on port ${port}!`))
  } catch (e) {
    console.error(e)
  }
}
