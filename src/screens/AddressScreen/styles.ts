import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        padding: 10
    },
    row: {
        marginVertical: 5,
    },
    label: {
        fontWeight: "bold"
    },
    input: {
        backgroundColor: "white",
        padding: 5,
        marginVertical: 5,
        height: 50,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "lightgrey"
    },
    errorLabel: {
        color:"red"
    }
});


export default styles;