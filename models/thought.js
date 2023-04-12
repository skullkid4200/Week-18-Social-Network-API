const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const reactionSchema = require('./reaction')


// Schema for what makes up a thought
const thoughtSchema = new Schema({
  thought_text: { type: [String], required: true },
  createdAt: Date,
  username: { type: [String], required: true },
  reactions: [
    reactionSchema
  ]
},
  {
    toJSON: {
      virtuals: true
    },
    id: false
  });

// Initialize the Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = thoughtSchema;
module.exports = Thought;

