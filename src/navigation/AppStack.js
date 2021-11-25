import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import EducationScreen from '../screens/EducationScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createBottomTabNavigator();

const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#FF9737',
      tabBarInactiveTintColor: 'grey',
      tabBarShowLabel: false,
      headerShown: false
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chart-areaspline" size={24} color={color} />
        )
      }}
    />
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="magnify" size={24} color={color} />
        )
      }}
    />
    <Stack.Screen
      name="Education"
      component={EducationScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="school-outline" size={24} color={color} />
        )
      }}
    />
  </Stack.Navigator>
);

export default AppStack;
