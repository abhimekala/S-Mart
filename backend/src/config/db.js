/**
 * Database Configuration
 * 
 * Purpose: MongoDB database connection configuration
 * Responsibilities:
 * - Establish connection to MongoDB using Mongoose
 * - Handle connection events (connected, error, disconnected)
 * - Export database connection instance
 */

const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection setup using Mongoose
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

module.exports = connectDB;
