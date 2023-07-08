import cors from "cors"
import express from "express"
import bodyParser from "body-parser"
import moment from "moment"
import router from './apis/routes'
import connectMongoDB from './apis/models/connect'
const PORT = 6969
import mqtt from 'mqtt'
const brokerUrl = 'ws://broker.mqttdashboard.com:8000/mqtt'
const clientId = 'vydoan'
const topic = 'building_data'
import { MONGO_URL } from './const'


const app = express()

const client = mqtt.connect(brokerUrl, { clientId })
client.on('connect', () => {
  console.log('Connected to HiveMQ broker')
  client.subscribe(topic)
})
let result = null
client.on('message', async (topic, message) => {
  result = message
  console.log(`Received message on topic ${topic}: ${message.toString()}`)
})
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
//Setup router for this app

connectMongoDB("mongodb+srv://building:building@building.1h8pzq3.mongodb.net/?retryWrites=true&w=majority")

router(app)
app.get('/sensor', (req, res) => {
  try {
    res.json({
      data: JSON.parse(result.toString()),
      time: moment().format("YYYY-MM-DD HH:mm:ss")
    })
  } catch (err) {
    return err
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})