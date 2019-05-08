const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Appointment = db.Appointment;

module.exports = {
    create,
    getAll,
    delete: _delete
};


async function getAll() {
    return await Appointment.find().select("-hash");
}


async function create(appointmentParam) {
    const appointment = new Appointment(appointmentParam);
    await appointment.save();
}


async function _delete(id) {
    await Appointment.findByIdAndRemove(id);
}
