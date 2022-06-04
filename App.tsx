import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import ProductScreen from "./src/screens/ProductScreen";
import ShopingCartScreen from "./src/screens/ShopingCartScreen";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<ShopingCartScreen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
	},
});
