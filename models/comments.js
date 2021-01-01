const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blogs',
      required: true,
    },
  },

  { timestamps: true }
);

const Comments = mongoose.model("comments", commentSchema);
module.exports = Comments;
