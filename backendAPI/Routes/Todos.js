const express = require("express");
const todo = require('../models/Todo');

const router = express.Router();

router.get('/', (req,res) => {
    res.send("We are on TODOS!");
});

router.post('/createTODOtest', (req, res) => {
    var newTodo = new todo({ title: req.body.title, description: req.body.description, deadline: new Date() });

    newTodo.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    })
})

module.exports = router;