const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    userId: { type: String },
    title: { type: String} ,
    date: { type: Date}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Appointment', schema);