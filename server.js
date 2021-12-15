let express = require('express')
let dotenv = require('dotenv')

dotenv.config({path: '.env'})

let app = express()

app.listen(process.env.APP_PORT)