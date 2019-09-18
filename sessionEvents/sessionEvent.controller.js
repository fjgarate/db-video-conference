const express = require('express');
const router = express.Router();
const sessionEventService = require('./sessionEvent.service');

// routes
router.post('/register', register);   //crea conversacion
router.get('/', getAll);              //devuelve todas las convesaciones
router.delete('/:id', _delete);
router.get('/session/:id', getBySessionId);
router.get('/connection/:id', getByConnectionId);
router.get('/user/:id', getByUserId);
router.get('/:id', getById);
router.get('/event/filter', getByFilter);
module.exports = router;
function register(req, res, next) {
    sessionEventService
        .create(req.body)
        .then(() => res.json({}))
        .catch(err => {
            console.log(err)
            next(err)});
}
function getByFilter(req, res, next) {
    console.log('llega a getByFilter')
    console.log('query: ' + req.query.userId)
    console.log('params: ' + req.params.userId)
    sessionEventService
        .getByFilter(req.query)
        .then(session => session ? res.json(session) : res.sendStatus(404))
        .catch(err => next(err));
}
function getAll(req, res, next) {
    console.log('llega a get all')
    sessionEventService
        .getAll()
        .then(session => res.json(session))
        .catch(err => next(err));
}
function getBySessionId(req, res, next) {
    sessionEventService
        .getBySessionId(req.params.id)
        .then(session => res.json(session))
        .catch(err => next(err));

} 

function getByConnectionId(req, res, next) {
    sessionEventService
        .getByConnectionId(req.params.id)
        .then(session => res.json(session))
        .catch(err => next(err));

}
function getByUserId(req, res, next) {
    sessionEventService
        .getByUserId(req.params.id)
        .then(session => res.json(session))
        .catch(err =>{ 
            console.log(err);
            next(err)});
}

function getById(req, res, next) {
    sessionEventService
        .getById(req.params.id)
        .then(session => session ? res.json(session) : res.sendStatus(404))
        .catch(err => next(err));
}
function _delete(req, res, next) {
    sessionEventService
        .delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
