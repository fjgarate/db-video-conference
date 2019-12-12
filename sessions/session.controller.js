const express = require('express');
const router = express.Router();
const sessionService = require('./session.service');

// routes
router.post('/register', register);   //crea conversacion
router.get('/', getAll);              //devuelve todas las convesaciones
router.delete('/:id', _delete);
router.get('/:id', getById);
router.get('/doctor/:id', getByDoctorId);
router.get('/patient/:id', getByPatientId);
router.get('/sessions/filter', getByFilter);
router.get('/lastDays/:num', getLastDays);
module.exports = router;
function register(req, res, next) {
    sessionService
        .create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
function getByFilter(req, res, next) {
    sessionService
        .getByFilter(req.query)
        .then(session => session ? res.json(session) : res.sendStatus(404))
        .catch(err => next(err));
}
function getAll(req, res, next) {
    sessionService
        .getAll()
        .then(session => res.json(session))
        .catch(err => next(err));
}

function getByDoctorId(req, res, next) {
    sessionService
        .getByDoctorId(req.params.id)
        .then(session => res.json(session))
        .catch(err =>{ 
            console.log(err);
            next(err)});
}
function getByPatientId(req, res, next) {
    sessionService
        .getByPatientId(req.params.id)
        .then(session => res.json(session))
        .catch(err => {
            console.log(err);
            next(err)
        });
}
function getById(req, res, next) {
    sessionService
        .getById(req.params.id)
        .then(session => session ? res.json(session) : res.sendStatus(404))
        .catch(err => next(err));
}
function _delete(req, res, next) {
    appointmentService
        .delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
function getLastDays(req, res, next) {
    console.log('llega a last days: ' + req.params.num)
    sessionService
        .getLastDays()
        .then(sessionLastDays => res.json(sessionLastDays))
        .catch(err => next(err));
}