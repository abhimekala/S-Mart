/**
 * Products Page
 *
 * Purpose: Product listing page component
 * Responsibilities:
 * - Display list of all available products
 * - Implement product filtering and sorting
 * - Handle pagination if needed
 * - Navigate to product details page
 */

export default function Products() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Products</h1>
      <p style={styles.placeholder}>Product listing coming soon.</p>
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
