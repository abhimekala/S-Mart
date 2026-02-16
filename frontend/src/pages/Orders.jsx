/**
 * Orders Page
 *
 * Purpose: Order history page component
 * Responsibilities:
 * - Display user's order history
 * - Show order details and status
 * - Allow viewing individual order information
 */

export default function Orders() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Order History</h1>
      <p style={styles.placeholder}>Order history coming soon.</p>
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
