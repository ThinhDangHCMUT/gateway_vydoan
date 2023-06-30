import express from 'express'
import sensorsHandlers from '../controllers'

var sensorRouter = express.Router()
const handlers = new sensorsHandlers()

sensorRouter.get("/", handlers.get)

export default sensorRouter