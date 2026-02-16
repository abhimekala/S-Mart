/**
 * LoginForm Component
 *
 * Purpose: Form component for user login
 * Responsibilities:
 * - Display login form fields (email, password)
 * - Handle form submission
 * - Display validation errors
 * - Redirect on successful login
 */

import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Login</h2>
      {error && <div style={styles.error}>{error}</div>}
      <div style={styles.field}>
        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={styles.input}
          autoComplete="email"
          disabled={loading}
        />
      </div>
      <div style={styles.field}>
        <label htmlFor="password" style={styles.label}>Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          style={styles.input}
          autoComplete="current-password"
          disabled={loading}
        />
      </div>
      <button type="submit" style={styles.submit} disabled={loading}>
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
      <p style={styles.footer}>
        Don't have an account? <Link to="/signup" style={styles.link}>Sign up</Link>
      </p>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: 400,
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: 'var(--color-white)',
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    border: '1px solid var(--color-light-gray)',
  },
  title: {
    color: 'var(--color-sage)',
    fontSize: '1.75rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  error: {
    backgroundColor: '#fee',
    color: '#c33',
    padding: '0.75rem',
    borderRadius: 8,
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
  field: {
    marginBottom: '1.25rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: 'var(--color-gray)',
    fontSize: '0.9rem',
    fontWeight: 500,
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid var(--color-light-gray)',
    borderRadius: 8,
    fontSize: '1rem',
    outline: 'none',
  },
  submit: {
    width: '100%',
    padding: '0.75rem 1.5rem',
    backgroundColor: 'var(--color-teal)',
    color: 'var(--color-white)',
    border: 'none',
    borderRadius: 8,
    fontSize: '1rem',
    fontWeight: 600,
    marginTop: '0.5rem',
  },
  footer: {
    marginTop: '1.5rem',
    textAlign: 'center',
    color: 'var(--color-gray)',
    fontSize: '0.95rem',
  },
  link: {
    color: 'var(--color-teal)',
    fontWeight: 500,
  },
};
