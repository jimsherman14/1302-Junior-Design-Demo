import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Auth0 from 'react-native-auth0';

// var credentials = require('./auth0-configuration.js');
// const auth0 = new Auth0(credentials);
const auth0 = new Auth0({ domain: 'dev-df4tovlx.us.auth0.com', clientId: 'i1sQjjVOGJXE7z9QKiKocRdfBsMjo6FK' });

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
            <Text style = { styles.header }> Auth0Sample - Login </Text>
            <Text>
                You are{ accessToken ? ' ' : ' not ' }logged in . </Text>
                <Button onPress = { accessToken ? this._onLogout : this._onLogin }
                title = { accessToken ? 'Log Out' : 'Log In' }/>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default LoginScreen;
