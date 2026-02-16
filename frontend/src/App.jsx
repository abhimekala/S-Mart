/**
 * App Component
 *
 * Purpose: Root application component
 * Responsibilities:
 * - Set up React Router
 * - Provide AuthContext to all components
 * - Configure global app settings
 * - Render main application layout
 */

import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div style={styles.app}>
          <Header />
          <main style={styles.main}>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
  },
};
