import { TextInput, Text, SafeAreaView, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

interface HeaderComponentProps {
	searchValue: string;
	setSearchValue: () => void;
}
const HeaderComponent = ({
	searchValue,
	setSearchValue,
}: HeaderComponentProps) => {
	return (
		<View
			style={{
				backgroundColor: "#22e3dd",
				height: 80,
				alignItems: "center",
				justifyContent: "center",
				paddingTop: 20,
			}}
		>
			<View
				style={{
					backgroundColor: "white",
					height: 40,
					width: "90%",
					alignItems: "center",
					flexDirection: "row",
					paddingLeft: 20,
				}}
			>
				<Feather name="search" size={24} />
				<TextInput
					placeholder="Search....."
					style={{
						height: 40,
						paddingLeft: 10,
					}}
					value={searchValue}
					onChangeText={setSearchValue}
				/>
			</View>
		</View>
	);
};

export default HeaderComponent;
