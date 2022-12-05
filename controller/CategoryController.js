const dbo = require('../config/database')
const objectID = dbo.objectID

exports.create=async (req,res)=>{
    let conn = await dbo.getDatabase()
    const collection = conn.collection('categories')
    let category = {
        name: req.body.name,
    }
    await collection.insertOne(category)
    return res.json(category)
}

exports.all=async (req,res)=>{
    let conn = await dbo.getDatabase()
    const collection = conn.collection('categories')
    const cursor = collection.find({})
    let categories = await cursor.toArray()
    return res.json(categories)
}