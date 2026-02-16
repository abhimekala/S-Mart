/**
 * Express App Configuration
 * 
 * Purpose: Express application setup and middleware configuration
 * Responsibilities:
 * - Initialize Express application
 * - Configure middleware (body-parser, cors, etc.)
 * - Register API routes
 * - Set up error handling middleware
 */

const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // JSON body parser
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

module.exports = app;
