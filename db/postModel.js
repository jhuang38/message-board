const mongoose = require('mongoose');

const {Schema} = mongoose;
const postSchema = new Schema({
    title: String,
    author: String,
    textContent: String,
    date: {type: Date, default: Date.now}
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;