/**
 * Header Component
 *
 * Purpose: Main navigation header component displayed across all pages
 * Responsibilities:
 * - Display site logo and navigation links
 * - Show user authentication status
 * - Provide navigation to cart, orders, and logout
 */

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          E-commerce Store
        </Link>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          {isAuthenticated ? (
            <>
              <Link to="/cart" style={styles.link}>Cart</Link>
              <Link to="/orders" style={styles.link}>Orders</Link>
              <span style={styles.userName}>{user?.name}</span>
              <button onClick={handleLogout} style={styles.logoutBtn}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/signup" style={styles.signupLink}>Sign up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'var(--color-sage)',
    color: 'var(--color-white)',
    padding: '0.75rem 1.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: 'var(--color-white)',
    fontSize: '1.25rem',
    fontWeight: 700,
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  link: {
    color: 'var(--color-white)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    opacity: 0.95,
  },
  signupLink: {
    backgroundColor: 'var(--color-teal)',
    color: 'var(--color-white)',
    padding: '0.5rem 1rem',
    borderRadius: 8,
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
  },
  userName: {
    fontSize: '0.9rem',
    opacity: 0.9,
  },
  logoutBtn: {
    backgroundColor: 'transparent',
    color: 'var(--color-white)',
    border: '1px solid rgba(255,255,255,0.6)',
    padding: '0.5rem 1rem',
    borderRadius: 8,
    fontSize: '0.9rem',
  },
};
