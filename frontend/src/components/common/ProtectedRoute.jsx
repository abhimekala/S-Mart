/**
 * ProtectedRoute Component
 *
 * Purpose: Route wrapper component for protecting authenticated routes
 * Responsibilities:
 * - Check if user is authenticated via JWT token
 * - Redirect to login page if user is not authenticated
 * - Render protected component if user is authenticated
 */

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={styles.loading}>
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const styles = {
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px',
    color: 'var(--color-gray)',
    fontSize: '1rem',
  },
};
