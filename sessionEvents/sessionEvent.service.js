const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const SessionEvent = db.SessionEvent;
var ObjectId = require('mongodb').ObjectID;
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
    return await SessionEvent.find().select('-hash');
}
async function getByUserId(id) {
    return await SessionEvent.aggregate([
        { $match: { userId: new ObjectId(id) } },
        {
            $lookup:
            {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "users"
            }
        }
    ]);
   // return await Session.find({ userId: id });
}
async function getBySessionId(sessionId) {
    return await SessionEvent.find({ sessionId: sessionId });
} 
async function getByConnectionId(connectionId) {
    return await SessionEvent.find({ connectionId: connectionId });
}
async function getById(id) {
    return await SessionEvent.findById(id).select('-hash');
}
async function getByFilter(query) {
    return await SessionEvent.find( query );
}
async function create(sessionParam) {
    const session = new SessionEvent(sessionParam);
    await session.save();
}
async function _delete(id) {
    await SessionEvent.findByIdAndRemove(id);
}