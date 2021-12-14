import React from "react"
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useAuth } from "contexts";

const HomeScreen = () => {
    const auth = useAuth();

    return (
        <View style={styles.container}>
            <Button mode="contained" onPress={auth.logout}>Logout</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF9737"
    }
});

export default HomeScreen;