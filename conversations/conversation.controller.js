const express = require('express');
const router = express.Router();
const conversationService = require('./conversation.service');

// routes
router.post('/register', register);   //crea conversacion
//router.post("/message", addMessage);  //añade mensaje
router.get('/', getAll);              //devuelve todas las convesaciones
//router.get('/:id', getById);          //devuelve todas las conversaciones en las que participa
router.put('/:id', addMessage);
//router.delete('/:id', _delete);

module.exports = router;



function register(req, res, next) {
  conversationService
      .create(req.body)
      .then(() => res.json({}))
      .catch(err => next(err));
}
function getAll(req, res, next) {
  conversationService
    .getAll()
    .then(conversation => res.json(conversation))
    .catch(err => next(err));
}
function addMessage(req, res, next) {
  console.log('llega')
  conversationService
    .addMessage(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}