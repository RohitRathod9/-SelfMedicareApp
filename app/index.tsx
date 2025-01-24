import { useEffect, useCallback } from 'react';
import { View, StyleSheet, ImageBackground, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { Text } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync().catch(() => {
	/* Ignore errors as they only happen during development */
});

export default function Index() {
	const router = useRouter();
	const fadeAnim = new Animated.Value(0);

	const onNavigateHome = useCallback(async () => {
		try {
			// Navigate to home
			await router.replace('/(tabs)/home');
		} catch (error) {
			console.error("Navigation error:", error);
			// Fallback navigation
			router.push('/(tabs)/home');
		}
	}, [router]);

	useEffect(() => {
		async function prepare() {
			try {
				// Start fade in animation
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration: 800,
					useNativeDriver: true,
				}).start();

				// Wait for animation
				await new Promise(resolve => setTimeout(resolve, 1000));

				// Hide splash screen
				await SplashScreen.hideAsync();

				// Navigate after a small delay
				setTimeout(() => {
					onNavigateHome();
				}, 200);

			} catch (error) {
				console.error("Initialization error:", error);
				// Ensure navigation happens even if there's an error
				onNavigateHome();
			}
		}

		prepare();
	}, [onNavigateHome]);

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/images/Splash.jpg')}
				style={styles.backgroundImage}
				resizeMode="cover"
			>
				<Animated.View style={[styles.content, { opacity: fadeAnim }]}>
					<Text variant="displayLarge" style={styles.title}>
						Self Medication
					</Text>
					<Text variant="titleLarge" style={styles.subtitle}>
						Ayurveda for Life
					</Text>
				</Animated.View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF', // Fallback background color
	},
	backgroundImage: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.4)',
	},
	title: {
		color: '#fff',
		textAlign: 'center',
		marginBottom: 10,
		fontWeight: 'bold',
	},
	subtitle: {
		color: '#fff',
		textAlign: 'center',
		marginBottom: 40,
	},
});