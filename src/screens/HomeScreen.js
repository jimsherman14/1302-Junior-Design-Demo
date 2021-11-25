import React from 'react'
import { 
    StyleSheet,
    Text,
    View
} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>This is the homescreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF9737'
    }
});

export default HomeScreen;