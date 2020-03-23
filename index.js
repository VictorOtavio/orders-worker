require('dotenv').config()
const { MongoClient } = require('mongodb')

async function processOrdersQueue (db) {
  const orders = await db.collection('orders').find({}).toArray()
  orders.map(processOrder)
}

function processOrder (order) {
  console.log(order)
}

async function main () {
  const dbUser = process.env.DB_USERNAME
  const dbPass = process.env.DB_PASSWORD
  const dbName = process.env.DB_DATABASE
  const uri = `mongodb://${dbUser}:${dbPass}@mongo:27017/${dbName}`
  const client = new MongoClient(uri)

  try {
    await client.connect()

    const db = client.db(dbName)

    await processOrdersQueue(db)
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

main().catch(console.error)
