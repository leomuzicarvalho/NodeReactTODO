const express = require("express");
const Todo = require('../models/Todo');
const mongo = require('mongodb')

const router = express.Router();


router.get('/all', async (req,res) => {
    try{
        const todo = await Todo.find()
        res.json(todo)
    }
    catch(err){
        res.json({message: err})
    }
    
});

router.get('/find/:id', async (req,res) => {
    try{
        const todo = await Todo.find({"_id" : new mongo.ObjectID(req.params.id)})
        res.json(todo)
    }
    catch(err){
        res.json({message: err})
    }
    
});

router.post('/createTODO', (req, res) => {
    var newTodo = new Todo({ title: req.body.title, description: req.body.description, deadline: req.body.deadline });

    newTodo.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    })
})

router.delete('/deleteTODO/:id', (req, res) => {
    
    Todo.deleteOne({"_id" : req.params.id})
    .then(data => {
        res.json({message: "Todo deleted!"});
    })
    .catch(err => {
        res.json({message: err});
    })
})

module.exports = router;