import { useEffect, useRef } from 'react';
import { View, StyleSheet, ImageBackground, Animated, TouchableOpacity, BackHandler } from 'react-native';
import { useRouter } from 'expo-router';
import { Text } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

// Prevent the native splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function Index() {
	const router = useRouter();
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const buttonScale = useRef(new Animated.Value(1)).current;
	const isNavigating = useRef(false);

	const [fontsLoaded] = useFonts({
		'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
		'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
		'Sanskrit': require('../assets/fonts/NotoSansDevanagari-Regular.ttf'),
		'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
		'Amita-Bold': require('../assets/fonts/Amita-Bold.ttf'),
	});

	useEffect(() => {
		// Start our custom animations
		const fadeIn = Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 2000,
			useNativeDriver: true,
		});

		const pulseAnimation = Animated.loop(
			Animated.sequence([
				Animated.timing(buttonScale, {
					toValue: 1.1,
					duration: 1000,
					useNativeDriver: true,
				}),
				Animated.timing(buttonScale, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
			])
		);

		fadeIn.start();
		pulseAnimation.start();

		return () => {
			fadeIn.stop();
			pulseAnimation.stop();
		};
	}, []);

	// Handle back button press
	useEffect(() => {
		const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
			if (isNavigating.current) {
				return true;
			}
			BackHandler.exitApp();
			return true;
		});

		return () => backHandler.remove();
	}, []);

	if (!fontsLoaded) {
		return null;
	}

	const handleGetStarted = async () => {
		if (isNavigating.current) return;
		
		try {
			isNavigating.current = true;
			await router.push('/(tabs)/home');
		} catch (error) {
			console.warn('Navigation error:', error);
		} finally {
			isNavigating.current = false;
		}
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../assets/images/Splash.jpg')}
				style={styles.backgroundImage}
				resizeMode="cover"
			>
				<Animated.View style={[styles.content, { opacity: fadeAnim }]}>
					<Text variant="displayLarge" style={[styles.title, { fontFamily: 'Poppins-Bold' }]}>
						Self Medication
					</Text>
					<Text variant="titleLarge" style={[styles.subtitle, { fontFamily: 'Poppins-Regular' }]}>
						Ayurveda for Life
					</Text>
					<TouchableOpacity
						onPress={handleGetStarted}
						style={styles.buttonContainer}
						activeOpacity={0.8}
					>
						<Animated.View
							style={[
								styles.button,
								{ transform: [{ scale: buttonScale }] }
							]}
						>
							<Text style={[styles.buttonText, { fontFamily: 'Poppins-Bold' }]}>Get Started</Text>
						</Animated.View>
					</TouchableOpacity>
				</Animated.View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		fontSize: 48,
	},
	subtitle: {
		color: '#fff',
		textAlign: 'center',
		marginBottom: 40,
		fontSize: 24,
	},
	buttonContainer: {
		marginTop: 20,
	},
	button: {
		backgroundColor: '#0B3B2D',
		paddingHorizontal: 40,
		paddingVertical: 15,
		borderRadius: 30,
		elevation: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
	},
});