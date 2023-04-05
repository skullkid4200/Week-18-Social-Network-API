const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {String},
    reactionBody: {type: [String], required: true, maxLength: 280},
    username:  {type: [String], required: true},
    createdAt: {type: Date, default: Date.now}
  });

// Schema for what makes up a thought
const thoughtSchema = new Schema({
  thoughtText: {type: [String], required: true},
  createdAt: Date,
  username: {type: [String], required: true},
  reactions: [
    reactionSchema
  ]
},
{toJSON: {
  virtuals: true
},
id:false
});

// Initialize the Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
module.exports = thoughtSchema;
