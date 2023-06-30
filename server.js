import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const routerSetup = require('./apis/routes')
const PORT = 8000

const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
//Setup router for this app
routerSetup(app)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})