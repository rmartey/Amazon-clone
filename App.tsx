import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Router from "./src/router";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			{/* <StatusBar style="auto" /> */}
			<Router />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
