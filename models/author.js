const moongoose = require('mongoose');
const Schema = moongoose.Schema;
const BookSchema = new Schema({
    title:String,
    pages: Number
})

const AuthorSchema = new Schema({
    name:String,
    age: Number,
    books:[BookSchema]
})
const Author = moongoose.model('author', AuthorSchema);

module.exports = Author;
