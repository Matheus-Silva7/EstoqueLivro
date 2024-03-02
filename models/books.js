const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema (
    {
        title: {
            type: String, 
            required: true, 
        },
        author:{
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        publisher: {
            type: String, 
            required: true
        },
        pages: {
            type: Number,
            required: true
        },
        stockQuantity: {
            type: Number,
            required: true
        }
    }
)

module.exports = mongoose.model('Books', bookSchema)