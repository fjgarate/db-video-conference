const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Session = db.Session;

module.exports = {
    create,
    getAll,
    getByUserId,
    getById,
    delete: _delete
};

date2 = new Date();

async function getAll() {
    return await Session.find().select('-hash');
}
async function getByUserId(id) {
    return await Session.find({ userId: id });
}
async function getById(sessionId) {
    return await Session.find({ sessionId: sessionId });
}
async function create(appointmentParam) {
    const session = new Session(appointmentParam);
    await session.save();
}
async function _delete(id) {
    await Session.findByIdAndRemove(id);
}