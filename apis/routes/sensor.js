import express from 'express'
import sensorsHandlers from '../controllers'

var sensorRouter = express.Router()
const handlers = new sensorsHandlers()

sensorRouter.get("/data", handlers.getDataWarningByDate)
sensorRouter.post("/data", handlers.postDataWarning)


export default sensorRouter