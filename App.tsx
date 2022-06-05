import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Router from "./src/router";

import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

function App() {
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

export default withAuthenticator(App);
