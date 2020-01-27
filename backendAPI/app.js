const express = require('express')
var mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-xj677.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const port = 3000

app.use(bodyParser.json());
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

const todosRoute = require('./Routes/Todos');
app.use('/todos', todosRoute);

app.get('/', (req, res) => {
    res.send(`Welcome to the TODO app!`)
})


app.listen(port, () => console.log(`TODO listening on port ${port}!`))

