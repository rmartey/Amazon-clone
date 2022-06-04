import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import HomeScreen from "./src/screens/HomeScreen";
import ProductScreen from "./src/screens/ProductScreen";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<ProductScreen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {},
});
