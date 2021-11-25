import React, { useContext } from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';
import { Button, Title } from 'react-native-paper';
import Auth0 from 'react-native-auth0';

import { AuthContext } from '../screens/context';

// var credentials = require('./auth0-configuration.js');
// const auth0 = new Auth0(credentials);
const auth0 = new Auth0({ domain: 'dev-1b2jde8p.us.auth0.com', clientId: 'dX7LyMnHIwZ7FaZ75eZaTvwBe6UXvBGd' });

const LoginScreen = () => {
    const [accessToken, setAccessToken] = useContext(AuthContext);

    const login = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile email'
            })
            .then(credentials => setAccessToken(credentials.accessToken))
            .catch(error => console.log(error));
    };

    const logout = () => {
        auth0.webAuth
            .clearSession({})
            .then(() => setAccessToken(null))
            .catch(error => console.log(error));
    };

    if (accessToken) {
        console.log('Successfully logged in!')
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../../assets/simian_logo.png')}/>
            </View>
            <Title style={styles.header}>Welcome to Simian</Title>
            <Button style={styles.button} color='white' mode='contained' onPress={accessToken ? logout : login}>
                Join now
            </Button>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9737'
    },
    logo: {
        width: 225,
        height: 225,
        borderRadius: 112.5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '90%',
        borderRadius: 15,
        marginTop: 20
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        marginTop: 15,
        fontWeight: 'bold'
    }
});

export default LoginScreen;
