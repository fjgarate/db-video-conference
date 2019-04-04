const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;
const Conversation = db.Conversation;
module.exports = {
  create,
  getAll,
  addMessage,
  getConversationsByUserName,
};


async function getAll() {
    
    return await Conversation.find().select("-hash");
}
async function getConversationsByUserName(userName) {

  return await Conversation.find({ participants: userName });
}
async function getById(id) {
    return await User.findById(id).select('-hash');
}

async function create(conversationParam) {
    const conversation = new Conversation(conversationParam);
    await conversation.save();
}

async function addMessage(id, newMessage) {
  const conversation = await Conversation.findById(id);

  // validate
  if (!conversation) throw "Conversation not found";
  try {
    var messages = conversation.messages;
    messages.push(newMessage);
  } catch (err) {
    throw err;
  }
  await conversation.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}
