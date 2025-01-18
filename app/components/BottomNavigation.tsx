import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomNavigation as PaperBottomNavigation } from 'react-native-paper';
import { useRouter, usePathname } from 'expo-router';

export default function BottomNavigation() {
	const router = useRouter();
	const pathname = usePathname();

	const routes = [
		{ key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
		{ key: 'disorders', title: 'Disorders', focusedIcon: 'magnify', unfocusedIcon: 'magnify' },
		{ key: 'prakruti', title: 'Prakruti', focusedIcon: 'account-heart', unfocusedIcon: 'account-heart-outline' },
		{ key: 'advice', title: 'Advice', focusedIcon: 'doctor', unfocusedIcon: 'doctor' },
		{ key: 'diet', title: 'Diet', focusedIcon: 'diet', unfocusedIcon: 'diet' },
		{ key: 'importance', title: 'Importance', focusedIcon: 'ayurveda', unfocusedIcon: 'ayurveda' },
	];

	const getRouteIndex = () => {
		const route = routes.findIndex(r => pathname.includes(r.key));
		return route >= 0 ? route : 0;
	};

	const handleIndexChange = (index: number) => {
		const route = routes[index];
		router.push(`/${route.key}`);
	};

	const renderScene = () => null;

	return (
		<View style={styles.container}>
			<PaperBottomNavigation
				navigationState={{
					index: getRouteIndex(),
					routes,
				}}
				onIndexChange={handleIndexChange}
				renderScene={renderScene}
				barStyle={styles.bar}
				activeColor="#4CAF50"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	},
	bar: {
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: '#e0e0e0',
	},
});