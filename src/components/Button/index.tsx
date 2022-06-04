import { Pressable, Text } from "react-native";
import React from "react";
import styles from "./styles";
interface ButtonProps {
	text: string;
	onPress: () => void;
	containerStyles?: object;
}

const Button = ({ text, onPress, containerStyles }: ButtonProps) => {
	return (
		<Pressable style={[styles.root, containerStyles]} onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
};

export default Button;
