const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const objectID = mongodb.ObjectId

let database

async function getDatabase() {
    const client = await mongoClient.connect(process.env.MONGO_DB)
    database = client.db(process.env.DB_NAME);

    if (!database) {
            console.log('Database not connected');
    }

    return database
}

module.exports = {
    getDatabase,
    objectID
}