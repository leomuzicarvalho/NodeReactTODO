const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({

        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        deadline: {
            type: Date,
            required: true
        }

})

module.exports = mongoose.model('Todos', TodoSchema);