const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const date = require('./../libs/timeLib')
let chatRoom = new Schema({
    roomId: {
        type: String,
        unique: true
    },
    admin: {
    type: Array,
    default: []
    },
    roomName: {
        type: String,
        default: 'buddy'
    },
    users: {
        type: Array,
        default: []
    },
    created: {
        type: String,
        default: date.now()
    },
    updated: {
        type: String
    },
    population: Number
})
mongoose.model('chatRoom_change', chatRoom)

