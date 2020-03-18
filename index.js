require('dotenv').config()
const { MongoClient } = require('mongodb')

async function processOrders(db){
    const collection = db.collection('orders')
    orders = await collection.find({}).toArray()
    orders.map(order => {
      console.log(order)
    })
}

async function main() {
  const dbUser = process.env.DB_USERNAME
  const dbPass = process.env.DB_PASSWORD
  const dbName = process.env.DB_DATABASE
  const uri = `mongodb://${dbUser}:${dbPass}@mongo:27017/${dbName}`
  console.log(uri)
  const client = new MongoClient(uri)

  try {
      await client.connect()

      const db = client.db(dbName)

      await processOrders(db)
  } catch (e) {
      console.error(e)
  } finally {
      await client.close()
  }
}

main().catch(console.error)
