const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({

  name: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    maxlength: 32,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    maxlength: 32,
  },
  password: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    maxlength: 32,
  },
},
  { timestamps: true }
);

const Users = mongoose.model("users", usersSchema);
module.exports = Users;