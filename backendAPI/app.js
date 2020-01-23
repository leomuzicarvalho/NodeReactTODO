const express = require('express')
require('dotenv').config()
const app = express()
var mongoose = require('mongoose')
const pass = encodeURIComponent(process.env.DB_PASS) //The password must be encoded in case of special characters
const uri = `mongodb+srv://${process.env.DB_USER}:${pass}@cluster0-xj677.mongodb.net/test?retryWrites=true&w=majority`;
const port = 3000

mongoose.connect(uri, { useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");

  var todoSchema = mongoose.Schema({
    title: String,
    deadline: Date
  });

  var todo = mongoose.model('todo', todoSchema, 'todo');

});

app.get('/', (req, res) => {
    res.send(`Welcome to the TODO app!`)
})

app.get('/createTODOtest', (req, res) => {
    var newTodo = new todo({ title: 'Math assignment', deadline: Date.now() });

    newTodo.save(function (err, todo) {
        if (err) return console.error(err);
        console.log(todo.title + " saved to TODO collection.");
      });
})


app.listen(port, () => console.log(`TODO listening on port ${port}!`))

