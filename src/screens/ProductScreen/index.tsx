import { Text, ScrollView, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

import { DataStore, Auth } from "aws-amplify";
import { Product, CartProduct } from "../../models";

import QuantitySelector from "../../components/QuantitySelector";

import Button from "../../components/Button";
import ImageCarousel from "../../components/ImageCarousel";

const ProductScreen = () => {
	const [product, setProduct] = useState<Product | undefined>(undefined);
	const [selectedOption, setSelectedOption] = useState<string | undefined>(
		undefined
	);
	const [quantity, setQuantity] = useState(1);

	const navigation = useNavigation();
	const route = useRoute();
	// console.log(route.params);

	useEffect(() => {
		if (!route.params?.id) {
			return;
		}
		DataStore.query(Product, route.params.id).then(setProduct);
	}, [route.params?.id]);

	useEffect(() => {
		if (product?.options) {
			setSelectedOption(product.options[0]);
		}
	}, [product]);

	const onAddToCart = async () => {
		const userData = await Auth.currentAuthenticatedUser();
		// console.log(userData);

		if (!product || !userData) {
			return;
		}
		const newCartProduct = new CartProduct({
			userSub: userData.attributes.sub,
			quantity,
			option: selectedOption,
			productID: product.id,
		});

		await DataStore.save(newCartProduct);
		navigation.navigate("ShopingCartStack");
	};

	if (!product) {
		return <ActivityIndicator size={"large"} color={"orange"} />;
	}
	return (
		<ScrollView style={styles.root}>
			<Text style={styles.title}>{product.title}</Text>
			{/* Image carousel */}
			<ImageCarousel images={product.images} />

			{/* Option selector */}
			<Picker
				selectedValue={selectedOption}
				onValueChange={(itemValue) => {
					setSelectedOption(itemValue);
				}}
			>
				{product.options.map((option) => (
					<Picker.Item label={option} value={option} key={option} />
				))}
			</Picker>

			{/* Price */}
			<Text style={styles.price}>
				from ${product.price.toFixed(2)}{" "}
				{product.oldPrice && (
					<Text style={styles.oldPrice}> ${product.oldPrice.toFixed(2)}</Text>
				)}
			</Text>

			{/* Description */}
			<Text style={styles.description}>{product.description}</Text>

			{/* Quantity selector */}
			<QuantitySelector quantity={quantity} setQuantity={setQuantity} />

			{/* Button */}
			<Button
				text={"Add to Cart"}
				onPress={onAddToCart}
				containerStyles={{ backgroundColor: "#e3c905" }}
			/>
			<Button
				text={"Buy Now"}
				onPress={() => {
					console.warn("Buy now");
				}}
			/>
		</ScrollView>
	);
};

export default ProductScreen;
