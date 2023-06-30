import cors from "cors"
import express from "express"
import bodyParser from "body-parser"
import router from './apis/routes'
const PORT = 8000

const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
//Setup router for this app
router(app)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})