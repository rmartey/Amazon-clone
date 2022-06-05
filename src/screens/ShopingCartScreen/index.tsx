import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import CartProductItem from "../../components/CartProductItem";
import products from "../../data/cart";
import Button from "../../components/Button";

const ShopingCartScreen = () => {
	const navigation = useNavigation();
	const totalPrice = products.reduce(
		(summedPrice, product) =>
			summedPrice + product.item.price * product.quantity,
		0
	);

	const onCheckout = () => {
		navigation.navigate("AddressScreen");
	};
	return (
		<View style={styles.page}>
			{/* Render product component */}
			<FlatList
				data={products}
				renderItem={({ item }) => (
					<CartProductItem cartItem={item} />
					// render quantity selector
				)}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						<Text style={{ fontSize: 18 }}>
							Subtotal ({products.length} items){" "}
							<Text style={{ color: "#e47911", fontWeight: "bold" }}>
								${totalPrice.toFixed(2)}
							</Text>
						</Text>
						<Button
							text={"Proceed to checkout"}
							onPress={onCheckout}
							containerStyles={{
								backgroundColor: "#f7e300",
								borderColor: "#c7b702",
							}}
						/>
					</View>
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	page: {
		padding: 10,
	},
});

export default ShopingCartScreen;
