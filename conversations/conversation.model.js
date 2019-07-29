const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  createdDate: { type: Date, default: Date.now },
  createUsername: { type: String, required: true },
  createUserId: { type: String, required: true },
  otherUsername: { type: String },
  participants: [{ type: String }],
  title: { type: String },
  messages: [
    {
      createdDate: { type: Date, default: Date.now },
      author: { type: String },
      text: String,
      read: { type: Boolean, default: false }
    }]});

/*const messageSchema = Schema({
  createdDate: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  text: String,
  read: Boolean
});*/
conversationSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Conversation", conversationSchema);