import { Redirect } from 'expo-router';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

export default function Home() {
	// Prevent back navigation from this screen
	useEffect(() => {
		const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
		return () => backHandler.remove();
	}, []);

	return <Redirect href="/(tabs)/home" />;
} 