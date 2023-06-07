const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    require: [true, 'Please provide your first name']
  },
  last_name: {
    type: String,
    require: [true, 'Please provide your last name']
  },
  email: {
    type: String,
    unique: [true, 'Email already exist'],
    require: [true, 'Please enter your email']
  },
  photo: String,
  password: {
    type: String,
    require: [true, 'Please enter password'],
    min: 8

  },
  confirm_password: {
    type: String,
    require: [true, 'Please confirm your password']
  }
})