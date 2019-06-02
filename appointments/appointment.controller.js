const express = require('express');
const router = express.Router();
const appointmentService = require('./appointment.service');

// routes
router.post('/register', register);   //crea conversacion
router.get('/:id', getAll);              //devuelve todas las convesaciones
router.delete('/:id', _delete);
router.get('/calendar/:id', getAllCalendar);
router.get('/today/:id',getToday);


module.exports = router;
function register(req, res, next) {
    appointmentService
        .create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
function getAll(req, res, next) {
    appointmentService
        .getAll(req.params.id)
        .then(appointment => res.json(appointment))
        .catch(err => next(err));
}

function getAllCalendar(req, res, next) {
    appointmentService
        .getAllCalendar(req.params.id)
        .then(appointment => res.json(appointment))
        .catch(err => next(err));
}

function getToday(req, res, next) {
    appointmentService
        .getToday(req.params.id)
        .then(appointment => res.json(appointment))
        .catch(err => next(err));
}



function _delete(req, res, next) {
    appointmentService
        .delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

