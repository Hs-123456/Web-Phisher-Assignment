const mongoose = require("mongoose");

const AddStudents = new mongoose.Schema({
  id:{
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("AddStudents", AddStudents);
