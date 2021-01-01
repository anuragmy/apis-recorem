const mongoose = require('mongoose');

const mentionSchema = new mongoose.Schema({
  {
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comments',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
  },
  { timestamps: true }
);

const Mentions = mongoose.model("likes", mentionSchema);
module.exports = Mentions;