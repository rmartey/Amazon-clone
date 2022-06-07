import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { DataStore, Auth } from "aws-amplify";
import { Product, CartProduct } from "../../models";

import CartProductItem from "../../components/CartProductItem";

import Button from "../../components/Button";

const ShopingCartScreen = () => {
	const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
	const navigation = useNavigation();

	useEffect(() => {
		const fetchCartProducts = async () => {
			const userData = await Auth.currentAuthenticatedUser();
			DataStore.query(CartProduct, (cp) =>
				cp.userSub("eq", userData.attributes.sub)
			).then(setCartProducts);
		};
		fetchCartProducts();
	}, [cartProducts]);

	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		// query all products that are in
	// 		const products = await Promise.all(
	// 			cartProducts.map((cartProduct) =>
	// 				DataStore.query(Product, cartProduct.productID)
	// 			)
	// 		);
	// 	};
	// 	cartProducts.map((cartProduct) => ({
	// 		...cartProduct,
	// 		// product,
	// 	}));
	// }, [cartProducts]);

	// console.log(cartProducts);

	const totalPrice = cartProducts.reduce(
		(summedPrice, product) =>
			summedPrice + (product?.product?.price || 0) * product.quantity,
		0
	);

	const onCheckout = () => {
		navigation.navigate("AddressScreen");
	};

	return (
		<View style={styles.page}>
			{/* Render product component */}
			<FlatList
				data={cartProducts}
				renderItem={({ item }) => (
					<CartProductItem cartItem={item} />
					// render quantity selector
				)}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						<Text style={{ fontSize: 18 }}>
							Subtotal ({cartProducts.length} items){" "}
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
