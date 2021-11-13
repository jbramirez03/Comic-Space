const mongoose = require('mongoose');

const { Schema } = mongoose;
// require('mongoose-currency').loadType(mongoose);
// const Currency = Schema.Types.Currency;

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
    tradeable: {
        type: Boolean,
    },
    price: {
        type: Number
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;