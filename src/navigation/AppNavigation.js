import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import EducationScreen from '../screens/EducationScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen'

import { AuthContext } from '../screens/context';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

const EducationStack = createStackNavigator();
const EducationStackScreen = () => (
  <EducationStack.Navigator>
    <EducationStack.Screen name="Education" component={EducationScreen} />
  </EducationStack.Navigator>
);

const SearchStack = createStackNavigator();
const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={SearchScreen} />
  </SearchStack.Navigator>
);

const LoginStack = createStackNavigator();
const LoginStackScreen = () => (
  <LoginStack.Navigator screenOptions={{headerShown: false}}>
    <LoginStack.Screen name="Login" component={LoginScreen} />
  </LoginStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator screenOptions={{headerShown: false}}>
    <Tabs.Screen name="Home" component={HomeScreen} />
    <Tabs.Screen name="Search" component={SearchScreen} />
    <Tabs.Screen name="Education" component={EducationScreen} />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [token, setToken] = useState(null);
  return (
    <AuthContext.Provider value={[ token, setToken ]}>
      <RootStack.Navigator>
        {token ? (
          <RootStack.Screen
            name="Simian"
            component={TabsScreen}
          />
        ) : (
          <RootStack.Screen
            name="Auth"
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