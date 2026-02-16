/**
 * Auth Service
 *
 * Purpose: Authentication-related API service functions
 * Responsibilities:
 * - Handle user login API calls
 * - Handle user signup API calls
 * - Manage token storage and retrieval in localStorage
 */

import { apiRequest, parseResponse } from './api';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

/**
 * Store JWT and user in localStorage
 */
export function setAuthData(token, user) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

/**
 * Get stored token from localStorage
 */
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

/**
 * Get stored user from localStorage
 */
export function getUser() {
  try {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

/**
 * Clear auth data from localStorage
 */
export function clearAuthData() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

/**
 * Signup - Create new user account
 * @param {object} data - { name, email, password }
 * @returns {Promise<{ user }>}
 */
export async function signup(data) {
  const response = await apiRequest('/auth/signup', {
    method: 'POST',
    body: data,
  });
  return parseResponse(response);
}

/**
 * Login - Authenticate user and get JWT
 * @param {object} data - { email, password }
 * @returns {Promise<{ token, user }>}
 */
export async function login(data) {
  const response = await apiRequest('/auth/login', {
    method: 'POST',
    body: data,
  });
  const result = await parseResponse(response);
  return result.data;
}
