const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({

  title: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    maxlength: 32,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
},
  { timestamps: true }
);

const Blogs = mongoose.model("blogs", blogsSchema);
module.exports = Blogs;