const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true} ,
    type: { type: String, required: true },
    date: { type: Date, required: true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Appointment', schema);