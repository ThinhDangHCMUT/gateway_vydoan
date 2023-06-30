import sensorRouter from "./sensor"


export default function router(app){
    app.use('/sensor',sensorRouter)

    app.get('/', (req, res) => {
        res.send('Hello server')
    })
}