import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native';
import Auth0 from 'react-native-auth0';

import { AuthContext } from '../screens/context';

const auth0 = new Auth0({ domain: 'dev-1b2jde8p.us.auth0.com', clientId: 'dX7LyMnHIwZ7FaZ75eZaTvwBe6UXvBGd' });

const HomeScreen = () => {
    const [accessToken, setAccessToken] = useContext(AuthContext);

    _onLogout = () => {
        auth0.webAuth
            .clearSession({})
            .then(success => setAccessToken(null))
            .catch(error => console.log(error));
    };

    return (
        <View>
            <Text>
                This is the homescreen
            </Text>
            <Button title="logout" onPress = {this._onLogout}/>
        </View>
    );
}

export default HomeScreen;