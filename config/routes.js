const express = require("express")
const router = express.Router()
const dbo = require('./database')

router.post("/menu/create",async (req, res)=>{
    let conn = await dbo.getDatabase()
    const collection = conn.collection('menus')
    let menu = {
        name: req.body.name,
        price: req.body.price
    }
    await collection.insertOne(menu)
   res.json(menu)
})

router.get("/menu",(req,res)=>{
    res.send('Show menu')
})

module.exports=router