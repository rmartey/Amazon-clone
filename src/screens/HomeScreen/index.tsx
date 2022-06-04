import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import ProductItem from "../../components/ProductItem";

import products from "../../data/products";

const HomeScreen = () => {
	return (
		<View style={styles.page}>
			{/* Render product component */}
			<FlatList
				data={products}
				renderItem={({ item }) => <ProductItem item={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		padding: 10,
	},
});

export default HomeScreen;