/**
 * AuthContext Component
 *
 * Purpose: React Context for managing authentication state
 * Responsibilities:
 * - Provide authentication state to all components
 * - Manage user login/logout state
 * - Store and update JWT token in localStorage
 * - Provide authentication helper functions
 */

import { createContext, useContext, useState, useEffect } from 'react';
import * as authService from '../services/authService';

export const AuthContext = createContext(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthContextProvider');
  }
  return context;
}

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(authService.getToken());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restore auth state from localStorage on mount
    const storedToken = authService.getToken();
    const storedUser = authService.getUser();

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { token: newToken, user: userData } = await authService.login({
      email,
      password,
    });
    authService.setAuthData(newToken, userData);
    setToken(newToken);
    setUser(userData);
  };

  const signup = async (name, email, password) => {
    await authService.signup({ name, email, password });
    // Auto-login after signup
    const { token: newToken, user: userData } = await authService.login({
      email,
      password,
    });
    authService.setAuthData(newToken, userData);
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    authService.clearAuthData();
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    isAuthenticated: !!token,
    loading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
