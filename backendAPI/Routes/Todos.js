const express = require("express");
const todo = require('../models/Todo');

const router = express.Router();

router.get('/', (req,res) => {
    res.send("We are on TODOS!");
});

router.post('/createTODOtest', (req, res) => {
    var newTodo = new todo({ title: 'Math assignment', deadline: Date.now() });

    newTodo.save(function (err, todo) {
        if (err) return console.error(err);
        console.log(todo.title + " saved to TODO collection.");
      });
})

module.exports = router;