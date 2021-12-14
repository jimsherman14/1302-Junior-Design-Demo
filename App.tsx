import React from 'react';
import { AuthProvider } from './src/contexts/Auth';
import AppNavigator from './src/navigation/AppNavigation';

const App = () => {
    return (
        <AuthProvider>
            <AppNavigator />
        </AuthProvider>
    );
};

export default App;
