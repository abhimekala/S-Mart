/**
 * Main Entry Point
 *
 * Purpose: Application entry point that renders the root component
 * Responsibilities:
 * - Initialize React application
 * - Mount App component to DOM
 * - Set up global providers if needed
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/common/ErrorBoundary';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
