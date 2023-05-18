import { MongoClient } from 'mongodb'
// MONGODB_URI="mongodb://localhost:27017/enter"
// const { MongoClient } = require("mongodb");
// const mongoClient = new MongoClient("mongodb://localhost:27017");
const uri = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Add Mongo URI to env file')
// }

client = new MongoClient("mongodb://localhost:27017", options)
clientPromise = client.connect()


export default clientPromise