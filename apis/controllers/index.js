const connectHiveMQ = require('../services')


export default class Sensors{
    get(req,res) {
        const data = connectHiveMQ()
        res.send(data)
    }
    //post(req,res) {}
}