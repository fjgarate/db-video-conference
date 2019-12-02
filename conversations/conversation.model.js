const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  createdDate: { type: Date, default: Date.now },
  createUsername: { type: String, required: true },
  createName: { type: String},
  createUserId: { type: String, required: true },
  otherUsername: { type: String },
  otherName: { type: String },
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
conversationSchema.pre('register', function (next) {
  console.log('pasa por aqui')
  var conversation = this;
  // only hash the password if it has been modified or is new
  if (!conversation.isModified('title')) return next();
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    // hashing the password using our new salt
    bcrypt.hash(conversation.title, salt, function (err, title) {
      if (err) return next(err);
      // override the password with the hashed one
      conversation.title = title;
      next();
    });
  });
});
module.exports = mongoose.model("Conversation", conversationSchema);