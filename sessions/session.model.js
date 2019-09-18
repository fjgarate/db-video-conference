const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    doctorId: { type: mongoose.Schema.ObjectId, required: true },
    patientId: { type: mongoose.Schema.ObjectId, required: true },
    startAt: { type: Date, required: true },
    endAt: { type: Date, required: true },
    duration: { type: String, required: true },
    comments: { type: String, required: false },

});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Session', schema);