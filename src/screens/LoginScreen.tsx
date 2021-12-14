import React from "react";
import {
    ActivityIndicator,
    Image,
    StyleSheet,
    View
} from "react-native";
import { Button, Title } from "react-native-paper";
import { useAuth } from "../contexts";

const LoginScreen = () => {
    const auth = useAuth();

    return (
        <View style={styles.container}>
            {auth.loading ? (
                <ActivityIndicator color={"#000"} animating={true} size="small" />
            ) : (
                <> 
                    <View style={styles.logo}>
                        <Image source={require("../../assets/AppIcons/Assets.xcassets/AppIcon.appiconset/64.png")}/>
                    </View>
                    <Title style={styles.header}>See what's happening in the market right now.</Title>
                    <Button style={styles.button} color="white" mode="contained" onPress={auth.login}>
                        Get started
                    </Button>
                </>
            )}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF9737"
    },
    logo: {
        position: "absolute",
        top: 40,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: "85%",
        borderRadius: 50,
        marginTop: 20,
        height: 45,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontSize: 30,
        width: "88%",
        textAlign: "center",
        color: "white",
        marginTop: 15,
        fontWeight: "bold",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
    }
});

export default LoginScreen;
