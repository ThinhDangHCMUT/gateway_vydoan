import mqtt from 'mqtt'
const brokerUrl = 'ws://broker.mqttdashboard.com:8000/mqtt'
const clientId = 'vydoan'
const topic = 'building_data'

export default class Sensors{
    get(req,res) {
        const client = mqtt.connect(brokerUrl, { clientId })
        client.on('connect', () => {
            console.log('Connected to HiveMQ broker')
            client.subscribe(topic)
        })
        client.on('message', async (topic, message) => {
            console.log(`Received message on topic ${topic}: ${message.toString()}`)
            res.json(
                {
                    message: "Success",
                    data: JSON.parse(message.toString())
                }
            )
        })
    }
    //post(req,res) {}
}