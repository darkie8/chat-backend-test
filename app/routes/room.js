const express = require('express');
const router = express.Router();
const chatController = require("./../../app/controllers/chatController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/room`;
}