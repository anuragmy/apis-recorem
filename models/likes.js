const mongoose = require('mongoose');

const likesSchema = new mongoose.Schema({

  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blogs',
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
},
  { timestamps: true }
);

const Likes = mongoose.model("likes", likesSchema);
module.exports = Likes;