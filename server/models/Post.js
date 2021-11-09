const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    comicId: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;