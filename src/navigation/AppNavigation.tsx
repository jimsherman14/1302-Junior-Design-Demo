import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { useAuth } from '../contexts/Auth';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const AppNavigator = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
