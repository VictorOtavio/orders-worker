const mongoose = require('mongoose')

const dbUser = process.env.DB_USERNAME
const dbPass = process.env.DB_PASSWORD
const dbName = process.env.DB_DATABASE

const uri = `mongodb://${dbUser}:${dbPass}@mongo:27017/${dbName}`

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose
