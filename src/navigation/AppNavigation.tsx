import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "contexts";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const AppNavigator = () => {
  const { authData } = useAuth();

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
