import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
});

const Message = mongoose.model('Message', messageSchema);

export default Message;