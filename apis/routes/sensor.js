const express = require('express')
const sensorsHandlers = require('../controllers')

var sensorRouter = express.Router()

sensorRouter.route('/').get(sensorsHandlers.get)

export default sensorRouter