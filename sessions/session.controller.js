const express = require('express');
const router = express.Router();
const sessionService = require('./session.service');

// routes
router.post('/register', register);   //crea conversacion
router.get('/', getAll);              //devuelve todas las convesaciones
router.delete('/:id', _delete);
router.get('/session/:id', getBySessionId);
router.get('/connection/:id', getByConnectionId);
router.get('/user/:id', getByUserId);
router.get('/:id', getById);
router.get('/filter', getByFilter);
module.exports = router;
function register(req, res, next) {
    sessionService
        .create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
function getAll(req, res, next) {
    sessionService
        .getAll()
        .then(session => res.json(session))
        .catch(err => next(err));
}
function getBySessionId(req, res, next) {
    sessionService
        .getBySessionId(req.params.id)
        .then(session => res.json(session))
        .catch(err => next(err));

} 

function getByConnectionId(req, res, next) {
    sessionService
        .getByConnectionId(req.params.id)
        .then(session => res.json(session))
        .catch(err => next(err));

}
function getByUserId(req, res, next) {
    sessionService
        .getByUserId(req.params.id)
        .then(session => res.json(session))
        .catch(err => next(err));
}
function getByFilter(req, res, next) {
    sessionService
        .getByFilter(req.query)
        .then(session => session ? res.json(session) : res.sendStatus(404))
        .catch(err => next(err));
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
