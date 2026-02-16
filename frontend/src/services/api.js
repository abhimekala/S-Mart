/**
 * API Service
 *
 * Purpose: Centralized API configuration and HTTP client setup
 * Responsibilities:
 * - Configure base URL and default headers
 * - Set up request interceptors for auth token injection
 * - Handle common error responses
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Get stored auth token from localStorage
 */
const getAuthToken = () => localStorage.getItem('token');

/**
 * Make API request with auth token injection
 * @param {string} endpoint - API endpoint (e.g. '/auth/login')
 * @param {object} options - Fetch options (method, body, headers)
 * @returns {Promise<Response>}
 */
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = getAuthToken();

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : options.body,
  });

  return response;
}

/**
 * Parse JSON response and handle errors
 * @param {Response} response
 * @returns {Promise<object>}
 */
export async function parseResponse(response) {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || 'Request failed');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}
