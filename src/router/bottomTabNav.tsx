import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import MenuScreen from "../screens/MenuScreen";
import ShopingCartStack from "./ShoppingCartStack";

import { Entypo } from "@expo/vector-icons";
import HomeStack from "./HomeStack";

const BottomTabNav = () => {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#e47911",
				tabBarInactiveTintColor: "#ffbd7d",
			}}
		>
			<Tab.Screen
				component={HomeStack}
				name="Home"
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="home" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				component={HomeScreen}
				name="Profile"
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="user" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				component={ShopingCartStack}
				name="ShopingCartStack"
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="shopping-cart" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				component={MenuScreen}
				name="Menu"
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="menu" size={24} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNav;
