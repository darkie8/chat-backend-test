
/**
 * Module Dependencies
 */
const mongoose = require('mongoose')
 const Schema = mongoose.Schema;

  const date = require('./../libs/timeLib')
let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: 'passskdajakdjkadsj'
  },
  email: {
    type: String,
    default: ''
  },
  mobileNumber: {
    type: Number,
    default: 0
  },
  createdOn :{
    type:Date,
    default:""
  },
rooms: {
  type: Array,
  default: ['buddy', 'buddy1']
}

})


mongoose.model('User_change', userSchema);