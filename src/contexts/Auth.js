import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth0 from 'react-native-auth0';

const AuthContext = createContext(null);
// var credentials = require('./auth0-configuration.js');
// const auth0 = new Auth0(credentials);
const auth0 = new Auth0({ domain: 'dev-1b2jde8p.us.auth0.com', clientId: 'dX7LyMnHIwZ7FaZ75eZaTvwBe6UXvBGd' });

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);
  
  async function loadStorageData() {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken) { 
          setAuthData(accessToken); 
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email'
      });
      console.log(credentials);
      setAuthData(credentials.accessToken);
      await AsyncStorage.setItem('accessToken', credentials.accessToken);

    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
      await auth0.webAuth.clearSession({});
      setAuthData(null);
      await AsyncStorage.removeItem('accessToken');
  };

  return (
    <AuthContext.Provider value={{authData, loading, login, logout}}>
        {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth};
