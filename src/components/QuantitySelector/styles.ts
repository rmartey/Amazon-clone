import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#e3e3e3",
        justifyContent: "space-between",
        width:100,
    },
    button: {
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#d1d1d1"
    },

    buttonText: {
        fontSize:18
    },
    quantity: {
        color:"#007eb9"
    }
});

export default styles;