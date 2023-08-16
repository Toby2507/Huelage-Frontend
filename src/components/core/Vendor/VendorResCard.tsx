import restuarants from '@api/mock/mockRestaurants';
import { useAppTheme } from '@hooks';
import { fonts } from '@utils';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const VendorResCard = ({ resId }: { resId: number; }) => {
	const { color } = useAppTheme();
	const restaurant = restuarants.find(res => res.id === resId);
	return (
		<View style={[styles.container, { backgroundColor: color.cardBg }]}>
			<Image style={styles.image} source={{ uri: restaurant?.imgUrl }} />
			<View style={styles.details}>
				<Text style={[styles.name, { color: color.mainText }]}>{restaurant?.name}</Text>
				<Text numberOfLines={2} style={[styles.location, { color: color.mainText }]}>{restaurant?.location}</Text>
			</View>
			<TouchableOpacity style={styles.buttonBox}>
				<Text style={styles.button}>View</Text>
			</TouchableOpacity>
		</View>
	);
};

export default VendorResCard;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: "#F0FFF0",
		borderRadius: 10,
		flexDirection: 'row',
		gap: 15,
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	details: {
		flex: 1,
		gap: 5,
		justifyContent: 'center'
	},
	image: {
		borderRadius: 35,
		height: 70,
		width: 70
	},
	name: {
		fontFamily: fonts.I_600,
		fontSize: 14
	},
	location: {
		fontFamily: fonts.I_400,
		fontSize: 12
	},
	buttonBox: {
		alignItems: 'center',
		backgroundColor: "#4CAF50",
		borderRadius: 10,
		justifyContent: 'center',
		paddingHorizontal: 25,
		paddingVertical: 8
	},
	button: {
		color: '#fff',
		fontFamily: fonts.I_500,
	}
});