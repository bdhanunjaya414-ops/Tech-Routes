const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  phone: String,
  password: String,
  otp: String,
  otpExpires: Date,
  verified: {
    type: Boolean,
    default: false
  },
  photo: {
    type: String,
    default: ''
  },
  progress: {
    averageScore: {
      type: Number,
      default: 88
    }
  }
});

module.exports = mongoose.model('User', userSchema);