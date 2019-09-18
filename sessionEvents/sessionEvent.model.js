const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    sessionId: { type: String, required: true },
    userId: { type: mongoose.Schema.ObjectId, required: true },
    connectionId: { type: String, required: true },
    susConnectionId: { type: String, required: false },
    time: { type: Date, required: true },
    comments: { type: String, required: false },
    event: { type: String, required: true },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('SessionEvent', schema);