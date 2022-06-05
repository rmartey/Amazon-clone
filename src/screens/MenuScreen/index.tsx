import { SafeAreaView } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";

import Button from "../../components/Button";

const MenuScreen = () => {
	const onLogOut = () => {
		Auth.signOut();
	};
	return (
		<SafeAreaView>
			<Button text="Sign Out" onPress={onLogOut} />
		</SafeAreaView>
	);
};

export default MenuScreen;
