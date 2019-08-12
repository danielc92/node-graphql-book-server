const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    pages: Number,
    summary: String,
    genre: String,
    authorId: String
},
{
    timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)