import React from "react"
import { 
    StyleSheet,
    Text,
    View
} from "react-native";

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                This is the search screen
            </Text>
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

export default SearchScreen;