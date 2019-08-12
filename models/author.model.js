const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    first_name: String,
    last_name: String,
    country: String,
    age: Number
},
{
    timestamps: true
})

module.exports = mongoose.model('Author', authorSchema);