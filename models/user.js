// require mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// export model
module.exports = mongoose.model('User', userSchema)