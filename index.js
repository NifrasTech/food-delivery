const express = require("express")
const database = require('./config/database')
const routes = require('./config/routes')
const bodyparser = require('body-parser')
const path = require("path")
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

//Static file
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyparser.urlencoded({extended:true}))

app.use('/',routes)

app.listen(port,()=>{
    console.log('Listening to the port:'+port)
})