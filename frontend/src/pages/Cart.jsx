/**
 * Cart Page
 *
 * Purpose: Shopping cart page component
 * Responsibilities:
 * - Display items in user's cart
 * - Allow quantity updates and item removal
 * - Calculate and display cart total
 * - Handle checkout navigation
 */

export default function Cart() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Your Cart</h1>
      <p style={styles.placeholder}>Cart functionality coming soon.</p>
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
