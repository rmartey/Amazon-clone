import {
	View,
	Text,
	TextInput,
	Alert,
	KeyboardAvoidingView,
	ScrollView,
	Platform,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import countryList from "country-list";

import Button from "../../components/Button";

import styles from "./styles";

const countries = countryList.getData();

const AddressScreen = () => {
	const [country, setCountry] = useState(countries[0].code);
	const [fullName, setFullName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [addressError, setAddressError] = useState("");
	const [city, setCity] = useState("");

	const checkOut = () => {
		if (!fullName) {
			Alert.alert("Please fill in the full name field");
		}
		if (!phone) {
			Alert.alert("Please fill in the phone number field");
		}
		if (!address) {
			Alert.alert("Please fill in the addres field");
		}
		if (!city) {
			Alert.alert("Please fill in the city field");
		}
		if (addressError) {
			Alert.alert("Please fix all field errors before submitings");
		}
	};

	const validateAddress = () => {
		if (address.length < 4) {
			setAddressError("Address is too short");
		}
		if (address.length > 40) {
			setAddressError("Address is too long");
		}
		if (address.length === 0) {
			setAddressError("Address is required");
		}
	};
	return (
		<KeyboardAvoidingView
			keyboardVerticalOffset={10}
			behavior={Platform.OS == "ios" ? "padding" : "height"}
		>
			<ScrollView style={styles.root}>
				<View style={styles.row}>
					<Picker selectedValue={country} onValueChange={setCountry}>
						{countries.map((country) => (
							<Picker.Item
								label={country.name}
								value={country.code}
								key={country.code}
							/>
						))}
					</Picker>
				</View>
				{/* full name */}
				<View style={styles.row}>
					<Text style={styles.label}>Full name (First and Last name)</Text>
					<TextInput
						style={styles.input}
						placeholder={"Full Name"}
						value={fullName}
						onChangeText={setFullName}
					/>
				</View>
				{/* Phone number */}
				<View style={styles.row}>
					<Text style={styles.label}>Phone Number</Text>
					<TextInput
						style={styles.input}
						placeholder={"Phone Number"}
						value={phone}
						onChangeText={setPhone}
						keyboardType={"phone-pad"}
					/>
				</View>
				{/* Address */}
				<View style={styles.row}>
					<Text style={styles.label}>Address</Text>
					<TextInput
						style={styles.input}
						placeholder={"Address"}
						value={address}
						onChangeText={(text) => {
							setAddress(text);
							setAddressError("");
						}}
						onEndEditing={validateAddress}
					/>
					{!!addressError && (
						<Text style={styles.errorLabel}>{addressError}</Text>
					)}
				</View>
				{/* city */}
				<View style={styles.row}>
					<Text style={styles.label}>City</Text>
					<TextInput
						style={styles.input}
						placeholder={"City"}
						value={city}
						onChangeText={setCity}
					/>
				</View>

				{/* button */}
				<Button text="Checkout" onPress={checkOut} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default AddressScreen;
