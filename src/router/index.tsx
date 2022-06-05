import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";

import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNav from "./bottomTabNav";
const Router = () => {
	const Root = createStackNavigator();
	return (
		<NavigationContainer>
			<Root.Navigator screenOptions={{ headerShown: false }}>
				<Root.Screen component={BottomTabNav} name={"HomeTabs"} />
			</Root.Navigator>
		</NavigationContainer>
	);
};

export default Router;
