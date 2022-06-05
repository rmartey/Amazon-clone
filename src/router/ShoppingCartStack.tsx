import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ShopingCartScreen from "../screens/ShopingCartScreen";
import AddressScreen from "../screens/AddressScreen";
const ShopingCartStack = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen component={ShopingCartScreen} name={"ShoppingCart"} />
			<Stack.Screen component={AddressScreen} name={"AddressScreen"} />
		</Stack.Navigator>
	);
};

export default ShopingCartStack;
