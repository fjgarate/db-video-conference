const express = require('express');
const router = express.Router();
const conversationService = require('./conversation.service');
const userController = require("../users/users.controller");
// routes
router.post('/register', register);   //crea conversacion
//router.post("/message", addMessage);  //añade mensaje
router.get('/', getAll);              //devuelve todas las convesaciones
router.get("/user/:id", getConversationsByUserId);          //devuelve todas las conversaciones en las que participa
router.put('/:id', addMessage);
router.delete('/:id', _delete);
router.put('/update/:id', update);
router.get('/:id', getById);



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
  conversationService
    .addMessage(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

/*function getConversationsByUserName(req, res, next) {
  conversationService
    .getConversationsByUserName(req.params.userName)
    .then(conversation => res.json(conversation))
    .catch(err => next(err));
}*/
function getConversationsByUserId(req, res, next) {
  conversationService
    .getConversationsByUserId(req.params.id)
    .then(conversation => res.json(conversation))
    .catch(err => next(err));
}

function getMessageById(req, res, next) {
  conversationService
    .getConversationsByUserId(req.params.id)
    .then(conversation => res.json(conversation))
    .catch(err => next(err));
}

function update(req, res, next) {
  conversationService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  conversationService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getById(req, res, next) {
  conversationService
    .getById(req.params.id)
    .then(conversation => res.json(conversation))
    .catch(err => next(err));
}