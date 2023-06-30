
export default async function connectHiveMQ(client){
    client.on('connect', () => {
        console.log('Connected to HiveMQ broker')
        client.subscribe(topic)
    })
    // Recieve the message from the broker
    // client.on('message', (topic, message) => {
    //     console.log(`Received message on topic ${topic}: ${message.toString()}`)
    //     return message
    // })
}