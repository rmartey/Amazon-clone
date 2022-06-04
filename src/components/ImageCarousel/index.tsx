import { View, Text, FlatList, Image, useWindowDimensions } from "react-native";
import React, { useState, useCallback } from "react";

import styles from "./styles";

const ImageCarousel = ({ images }: { images: string[] }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const windowWidth = useWindowDimensions().width;

	const onImageUpdate = useCallback(({ viewableItems }) => {
		if (viewableItems.length > 0) {
			setActiveIndex(viewableItems[0].index || 0);
		}
		// console.log(viewableItems);
	}, []);

	return (
		<View style={styles.root}>
			<FlatList
				data={images}
				renderItem={({ item }) => (
					<Image
						key={item}
						source={{ uri: item }}
						style={[styles.image, { width: windowWidth - 40 }]}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToInterval={windowWidth - 20}
				snapToAlignment={"center"}
				decelerationRate={"fast"}
				viewabilityConfig={{
					viewAreaCoveragePercentThreshold: 50,
				}}
				onViewableItemsChanged={onImageUpdate}
			/>
			<View style={styles.dots}>
				{images.map((image, index) => (
					<View
						key={image}
						style={[
							styles.dot,
							{
								backgroundColor: index === activeIndex ? "#c9c9c9" : "#ededed",
							},
						]}
					/>
				))}
			</View>
		</View>
	);
};

export default ImageCarousel;
