const mongoose = require("mongoose")
require("dotenv")

async function connectedToDataBase(){
  await mongoose.connect(process.env.MONGO_URI)
  console.log("connected to MongoDB")
}

module.exports = connectedToDataBase