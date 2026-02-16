/**
 * Product Model
 * 
 * Purpose: Mongoose schema and model for Product entity
 * Responsibilities:
 * - Define product schema with fields (name, description, price, stock, images, etc.)
 * - Set up validation rules for product fields
 * - Define indexes for search and filtering
 * - Export Product model for use in controllers
 */

const mongoose = require('mongoose');

// Product schema definition

module.exports = mongoose.model('Product', {});
