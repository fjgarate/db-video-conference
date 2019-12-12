const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Session = db.Session;
var ObjectId = require('mongodb').ObjectID;
module.exports = {
    create,
    getAll,
    getByDoctorId,
    getByPatientId,
    getById,
    getByFilter,
    getLastDays,
    delete: _delete
};

date2 = new Date();

async function getAll() {
    return await Session.find().select('-hash');
}
async function getByDoctorId(id) {
    return await Session.aggregate([
        { $match: { doctorId: new ObjectId(id) } },
        {
            $lookup:
            {
                from: "users",
                localField: "patientId",
                foreignField: "_id",
                as: "users"
            }
        }
    ]);
   // return await Session.find({ userId: id });
}
async function getByPatientId(id) {
    return await Session.aggregate([
        { $match: { patientId: new ObjectId(id) } },
        {
            $lookup:
            {
                from: "users",
                localField: "patientId",
                foreignField: "_id",
                as: "users"
            }
        }
    ]);
    // return await Session.find({ userId: id });
}
async function getLastDays() {
    return await Session.aggregate([
        {
            $group: {
                _id: { $substr: ['$startAt', 0, 10] },
                numberofsessions: { $sum: 1 }
            }
        }, { $sort: { "_id": -1 } }

    ]);
    // return await Session.find({ userId: id });
}
async function getById(id) {
    return await Session.findById(id).select('-hash');
}
async function getByFilter(query) {
    return await Session.find( query );
}
async function create(sessionParam) {
    const session = new Session(sessionParam);
    await session.save();
}
async function _delete(id) {
    await Session.findByIdAndRemove(id);
}