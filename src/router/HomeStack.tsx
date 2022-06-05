import React from "react";
import { Text, SafeAreaView } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";

const HomeStack = () => {
	const Stack = createStackNavigator();
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack.Navigator screenOptions={{ header: () => <Text>Hfas</Text> }}>
				<Stack.Screen
					component={HomeScreen}
					name={"HomeScreen"}
					options={{ title: "Home" }}
				/>
				<Stack.Screen component={ProductScreen} name={"ProductDetails"} />
			</Stack.Navigator>
		</SafeAreaView>
	);
};

export default HomeStack;
