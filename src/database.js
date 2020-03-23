const mongoose = require('mongoose')

const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbUser = process.env.DB_USERNAME
const dbPass = process.env.DB_PASSWORD
const dbName = process.env.DB_DATABASE

const uri = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose
