import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    image: {
        height: 300,
        resizeMode: "contain",
        margin:10,
    },
    root: {},
    dot: {
        width: 10,
        height: 10,
        borderRadius:25,
        borderWidth: 1,
        borderColor: "#c9c9c9",
        margin: 5,
        backgroundColor:"#ededed"
    },
    dots: {
        flexDirection: "row",
        justifyContent:"center"
    }
});


export default styles;