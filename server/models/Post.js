import mongoose from 'mongoose';

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
        type: String
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;