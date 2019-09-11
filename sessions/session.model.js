const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    sessionId: { type: String, required: true },
    userId: { type: String, required: true },
    createdAt: { type: Date, required: true },
    comments: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Session', schema);