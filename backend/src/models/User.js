/**
 * User Model
 * 
 * Purpose: Mongoose schema and model for User entity
 * Responsibilities:
 * - Define user schema with fields (name, email, password, role, etc.)
 * - Set up validation rules for user fields
 * - Define indexes for performance
 * - Export User model for use in controllers
 */

const mongoose = require('mongoose');

// User schema definition
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
