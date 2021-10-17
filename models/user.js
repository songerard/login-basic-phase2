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
  },
  session_id: {
    type: String
  },
  session_dateTimeStamp: {
    type: Date
  }
})

// export model
module.exports = mongoose.model('User', userSchema)