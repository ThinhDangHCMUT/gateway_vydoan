import { SensorModel } from '../models/sensor_model'
import dayjs from 'dayjs'

export default class Sensors {
    postDataWarning(req, res) {
        if (req.body.name) {
            console.log(req.body)
            SensorModel.create(req.body).then((data) => {
                console.log('---->', data)
                res.status(201).send(data)
            })
        }
    }
    async getDataWarningByDate(req, res) {

        if (req.query.date) {
            const startDate = new Date(`${req.query.date}T00:00:00.000Z`)
            const endDate = new Date(`${req.query.date}T23:59:59.999Z`)

            console.log(endDate)
            const query = {
                createdAt: {
                    $gte: startDate,
                    $lte: endDate,
                },
            };
            const data = await SensorModel.find(query)
            res.status(201).send(data)
        }
    }

    //post(req,res) {}
}