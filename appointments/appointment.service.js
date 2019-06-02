const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Appointment = db.Appointment;

module.exports = {
    create,
    getAll,
    getToday,
    getAllCalendar,
    delete: _delete
};

    date2 = new Date();

async function getAll(id) {
    return await Appointment.find({userId: id}) ;
}

async function getToday(id) {
    console.log('Fecha', date2)
    return await Appointment.find({ userId: id , date: {$gte:  date2}});
}


async function getAllCalendar(id) {
    return await Appointment.find({ userId: id }, { userId: 0, id:0, _id:0});
}

async function create(appointmentParam) {
    const appointment = new Appointment(appointmentParam);
    await appointment.save();
}


async function _delete(id) {
    await Appointment.findByIdAndRemove(id);
}
