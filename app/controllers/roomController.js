/**
 * module dependencies.
 */
const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const callback = require('./../libs/controllerCallbackLib')
/* Models */
const roomModel = mongoose.model('chatRoom_change')

/* Get all user Details */
let getAllrooms = (req, res) => {
    UserModel.find()
        .select(' -__v -_id')
        .lean()
        .exec((err, result) => {
        callback.crudCallback(err, result, res, 'getAllRoom' )
        })
} // end get all users


/* Get single user details */
let getSingleRoom = (req, res) => {
    UserModel.findOne({
            'roomId': req.params.roomId
        })
        .select('-password -__v -_id')
        .lean()
        .exec((err, result) => {
            callback.crudCallback(err, result, res, 'getSingleUser' )
        })
} // end get single user
