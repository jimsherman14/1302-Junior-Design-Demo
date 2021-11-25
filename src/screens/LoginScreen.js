import React, { useState } from 'react';
import {
    ActivityIndicator,
    Image,
    StyleSheet,
    View
} from 'react-native';
import { Button, Title } from 'react-native-paper';
import { useAuth } from '../contexts/Auth';

const LoginScreen = () => {
    const [loading, setLoading] = useState(false);
    const auth = useAuth();

    const login = async () => {
        setLoading(true);
        await auth.login();
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator color={'#000'} animating={true} size="small" />
            ) : (
                <> 
                    <View style={styles.logo}>
                        <Image source={require('../../assets/simian_logo.png')}/>
                    </View>
                    <Title style={styles.header}>Welcome to Simian</Title>
                    <Button style={styles.button} color='white' mode='contained' onPress={login}>
                        Join now
                    </Button>
                </>
            )}
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
