import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import HeaderComponent from "../components/HeaderComponent";

const HomeStack = () => {
	const [searchValue, setSearchValue] = useState("");
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator
			screenOptions={{
				header: () => (
					<HeaderComponent
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
				),
			}}
		>
			<Stack.Screen name={"HomeScreen"} options={{ title: "Home" }}>
				{() => <HomeScreen searchValue={searchValue} />}
			</Stack.Screen>
			<Stack.Screen component={ProductScreen} name={"ProductDetails"} />
		</Stack.Navigator>
	);
};

export default HomeStack;
