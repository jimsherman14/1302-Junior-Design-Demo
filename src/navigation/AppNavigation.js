import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import EducationScreen from '../screens/EducationScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen'
import { AuthContext } from '../AuthContext';

const LoginStack = createStackNavigator();

const LoginStackScreen = () => (
  <LoginStack.Navigator screenOptions={{headerShown: false}}>
    <LoginStack.Screen name="Login" component={LoginScreen} />
  </LoginStack.Navigator>
);

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#FF9737',
      tabBarInactiveTintColor: 'grey',
      tabBarShowLabel: false,
      headerShown: false
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chart-areaspline" size={24} color={color} />
        )
      }}
    />
    <Tabs.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="magnify" size={24} color={color} />
        )
      }}
    />
    <Tabs.Screen
      name="Education"
      component={EducationScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="school-outline" size={24} color={color} />
        )
      }}
    />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={[ token, setToken ]}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <RootStack.Screen
            name="Simian"
            component={TabsScreen}
          />
        ) : (
          <RootStack.Screen
            name="Simian"
            component={LoginStackScreen}
          />
        )}
      </RootStack.Navigator>
    </AuthContext.Provider>
  );
}

const AppNavigator = () => (
  <NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
);

export default AppNavigator;