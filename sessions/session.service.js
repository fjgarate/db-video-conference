const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Session = db.Session;

module.exports = {
    create,
    getAll,
    getByUserId,
    getBySessionId,
    getByConnectionId,
    getById,
    getByFilter,
    delete: _delete
};

date2 = new Date();

async function getAll() {
    return await Session.find().select('-hash');
}
async function getByUserId(id) {
    return await Session.find({ userId: id });
}
async function getBySessionId(sessionId) {
    return await Session.find({ sessionId: sessionId });
} 
async function getByConnectionId(connectionId) {
    return await Session.find({ connectionId: connectionId });
}
async function getById(id) {
    return await Session.findById(id).select('-hash');
}
async function getByFilter(query) {
    console.log('llega')
    console.log(query)
    //return 'llega'
    return await Session.find( query );
}
async function create(sessionParam) {
    const session = new Session(sessionParam);
    await session.save();
}
async function _delete(id) {
    await Session.findByIdAndRemove(id);
}