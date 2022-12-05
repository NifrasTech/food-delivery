const express = require("express")
const database = require('./config/database')
const path = require("path")
require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

//Static file
app.use(express.static(path.join(__dirname, "public")))



app.listen(port,async ()=>{
    await database.getDatabase()
    console.log('Listening to the port:'+port)
})