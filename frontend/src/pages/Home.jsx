/**
 * Home Page
 *
 * Purpose: Landing page component
 * Responsibilities:
 * - Display featured products or promotions
 * - Provide navigation to product listings
 * - Show site introduction and key features
 */

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to E-commerce Store</h1>
        <p style={styles.subtitle}>
          Discover quality products at great prices. Browse our catalog and find what you need.
        </p>
        <Link to="/products" style={styles.cta}>Browse Products</Link>
      </section>
    </div>
  );
}

const styles = {
  page: {
    padding: '2rem 1.5rem',
    maxWidth: 800,
    margin: '0 auto',
  },
  hero: {
    textAlign: 'center',
    padding: '3rem 0',
  },
  title: {
    color: 'var(--color-sage)',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  subtitle: {
    color: 'var(--color-gray)',
    fontSize: '1.1rem',
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  cta: {
    display: 'inline-block',
    backgroundColor: 'var(--color-teal)',
    color: 'var(--color-white)',
    padding: '0.75rem 1.5rem',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 600,
  },
};
