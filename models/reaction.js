const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');


const reactionSchema = new Schema({
    reactionId: { String },
    reactionBody: { type: [String], required: true, maxLength: 280 },
    username: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now() },
  },
  {toJSON: {
    getters: true,
  },
    _id: false
    }
  );



// const Reaction = model('Reaction', reactionSchema);


  module.exports = reactionSchema;
//   module.exports = Reaction;

