const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({

        title: {
            type: String,
            required: true
        },
        deadline: {
            type: Date,
            required: true
        }

})

module.exports = mongoose.model('Todos', TodoSchema);