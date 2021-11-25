import React from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Auth0 from 'react-native-auth0';

// var credentials = require('./auth0-configuration.js');
// const auth0 = new Auth0(credentials);
const auth0 = new Auth0({ domain: 'dev-1b2jde8p.us.auth0.com', clientId: 'dX7LyMnHIwZ7FaZ75eZaTvwBe6UXvBGd' });

const LoginScreen = () => {
    const [accessToken, setAccessToken] = React.useState(null);

    _onLogin = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile email'
            })
            .then(credentials => setAccessToken(credentials.accessToken))
            .catch(error => console.log(error));
    };

    _onLogout = () => {
        auth0.webAuth
            .clearSession({})
            .then(success => setAccessToken(null))
            .catch(error => console.log(error));
    };

    return (
        <View style = { styles.container }>
            <Text style = { styles.header }> Welcome to Simian </Text>
            <Image source={require('./images/simian_logo.png')}/>
            <Text>
                You are{ accessToken ? ' ' : ' not ' }logged in</Text>
                <Button onPress = { accessToken ? this._onLogout : this._onLogin }
                title = { accessToken ? 'Log Out' : 'Log In \n \n Register' }/>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2BEBF5'
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    }
});

export default LoginScreen;
