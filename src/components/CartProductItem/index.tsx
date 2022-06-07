import { View, Text, Image } from "react-native";
import React, { useState } from "react";

import QuantitySelector from "../QuantitySelector";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

import { DataStore } from "aws-amplify";
import { CartProduct } from "../../models/";

interface CartProductItemProps {
	cartItem: CartProduct;
}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
	const { quantity, product } = cartItem;

	const updateQuantity = async (newQuantity: number) => {
		await DataStore.save(
			CartProduct.copyOf(cartItem, (updated) => {
				updated.quantity = newQuantity;
			})
		);
	};

	// const [quantity, setQuantity] = useState(quantityProp);

	return (
		<View style={styles.root}>
			<View style={styles.row}>
				<Image
					style={styles.image}
					source={{
						uri: product?.image,
					}}
				/>
				<View style={styles.rightContainer}>
					<Text style={styles.title} numberOfLines={3}>
						{product?.title}
					</Text>
					{/* Ratings */}
					<View style={styles.ratingsContainer}>
						{[0, 0, 0, 0, 0].map((el, i) => (
							<FontAwesome
								key={`${product?.id}-${i}`}
								style={styles.star}
								name={i < Math.floor(product.avgRating) ? "star" : "star-o"}
								color={"#e47911"}
								size={18}
							/>
						))}

						<Text>{product?.ratings}</Text>
					</View>
					<Text style={styles.price}>
						from ${product?.price.toFixed(2)}{" "}
						{product?.oldPrice && (
							<Text style={styles.oldPrice}>
								{" "}
								${product?.oldPrice.toFixed(2)}
							</Text>
						)}
					</Text>
				</View>
			</View>
			<View style={styles.quantityContainer}>
				<QuantitySelector quantity={quantity} setQuantity={updateQuantity} />
			</View>
		</View>
	);
};

export default CartProductItem;
