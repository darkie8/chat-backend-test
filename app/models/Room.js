const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const date = require('./../libs/timeLib')
let chatRoom = new Schema({
    roomId: {
        type: String,
        unique: true
    },
    roomName: {
        type: String,
        default: ''
    },
    users: {
        type: Array,
        default: []
    },
    created: {
        type: String,
        default: date.getLocalTime()
    },
    updated: {
        type: String
    },
    population: Number
})
mongoose.model('chatRoom', chatRoom)