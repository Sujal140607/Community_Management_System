const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
  adminname: {
    type: String,
    unique: [true, "User Name already exists"],
    required: [true, "User Name is required"]
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  }
})

const adminModel = mongoose.model("admins", adminSchema)
module.exports = adminModel