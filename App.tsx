import React from "react";
import { AuthProvider } from "contexts";
import { AppNavigator } from "navigation";

const App = () => {
    return (
        <AuthProvider>
            <AppNavigator />
        </AuthProvider>
    );
};

export default App;
