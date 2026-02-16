/**
 * Auth Routes
 * 
 * Purpose: Define authentication-related API routes
 * Responsibilities:
 * - Define POST /api/auth/signup route
 * - Define POST /api/auth/login route
 * - Define POST /api/auth/logout route
 * - Connect routes to auth controller functions
 */

const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// POST /api/auth/signup
router.post('/signup', signup);

// POST /api/auth/login
router.post('/login', login);

module.exports = router;
