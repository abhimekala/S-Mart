/**
 * ProductDetails Page
 *
 * Purpose: Individual product detail page component
 * Responsibilities:
 * - Display detailed product information
 * - Show product images and specifications
 * - Handle add to cart functionality
 * - Display related products
 */

import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Product Details</h1>
      <p style={styles.placeholder}>Product {id} details coming soon.</p>
    </div>
  );
}

const styles = {
  page: {
    padding: '2rem 1.5rem',
    maxWidth: 800,
    margin: '0 auto',
  },
  title: {
    color: 'var(--color-sage)',
    marginBottom: '1rem',
  },
  placeholder: {
    color: 'var(--color-gray)',
  },
};
