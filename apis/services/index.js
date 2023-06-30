const mqtt = require("mqtt")
const brokerUrl = 'ws://broker.mqttdashboard.com:8000/mqtt'
const clientId = 'vydoan'
const topic = 'building_data'
const client = mqtt.connect(brokerUrl, { clientId })


module.exports = connectHiveMQ 

function connectHiveMQ(){
    let lastMessage = null
    client.on('connect', () => {
        console.log('Connected to HiveMQ broker')
        client.subscribe(topic)
    })
    // Recieve the message from the broker
    client.on('message', (topic, message) => {
        lastMessage = message.toString()
        console.log(`Received message on topic ${topic}: ${message.toString()}`)
    })
    return lastMessage
}