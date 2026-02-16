/**
 * Login Page
 *
 * Purpose: Main login page component
 * Responsibilities:
 * - Render LoginForm component
 * - Handle page-level layout and styling
 * - Manage navigation after successful login
 */

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/auth/LoginForm';

export default function Login() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div style={styles.page}>
        <div style={styles.loading}>Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div style={styles.page}>
      <LoginForm />
    </div>
  );
}

const styles = {
  page: {
    minHeight: 'calc(100vh - 120px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
    backgroundColor: 'var(--color-light-gray)',
  },
  loading: {
    color: 'var(--color-gray)',
    fontSize: '1rem',
  },
};
