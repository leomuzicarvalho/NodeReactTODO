const express = require('express')
require('dotenv').config()
const app = express()
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-xj677.mongodb.net/test?retryWrites=true&w=majority`;
const port = 3000

app.get('/', (req, res) => {
    res.send(`Hello World! ${process.env.DB_HOST}`)
})

app.listen(port, () => console.log(`TODO listening on port ${port}!`))

