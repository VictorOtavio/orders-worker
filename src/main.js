const router = require('./router')

module.exports = async () => {
  try {
    const port = process.env.APP_PORT
    router.listen(port, () => console.log(`App running on port ${port}!`))
  } catch (e) {
    console.error(e)
  }
}
