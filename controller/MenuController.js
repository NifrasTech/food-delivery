const dbo = require('../config/database')
const objectID = dbo.objectID

exports.create=async (req,res)=>{
    let conn = await dbo.getDatabase()
    const collection = conn.collection('menus')
    let menu = {
        name: req.body.name,
        price: req.body.price
    }
    await collection.insertOne(menu)
    return res.json(menu)
}

exports.update=async (req,res)=>{
    let conn = await dbo.getDatabase()
    const collection = conn.collection('menus')
    let edit_id = req.params.edit_id
    let menu = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    }

    await collection.updateOne({_id:objectID(edit_id)},{$set:menu})
    return res.json(menu)
}

exports.all=async (req,res)=>{
    let conn = await dbo.getDatabase()
    const collection = conn.collection('menus')
    const cursor = collection.find({})
    let menus = await cursor.toArray()
    return res.json(menus)
}