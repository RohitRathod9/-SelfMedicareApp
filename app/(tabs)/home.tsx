import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import { Searchbar, Text, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Animated, { 
	FadeInDown, 
	FadeInRight,
	SlideInRight,
	withSpring,
	useAnimatedStyle,
	withRepeat,
	withTiming,
	withSequence,
	withDelay,
	useSharedValue,
	FadeIn,
} from 'react-native-reanimated';

const sections = [
	{ 
		id: 1, 
		title: 'Diet & Hygiene', 
		route: '/(drawer)/diet-hygiene', 
		image: require('../../assets/images/Diet.jpg'),
		description: 'Ancient wisdom for modern wellness'
	},
	{ 
		id: 2, 
		title: 'Importance of Ayurveda', 
		route: '/(drawer)/importance', 
		image: require('../../assets/images/ImportanceOfAyurveda.jpg'),
		description: 'Science of life and longevity'
	},
	{ 
		id: 3, 
		title: 'Prakirti Parikshan', 
		route: '/(tabs)/prakriti', 
		image: require('../../assets/images/PrakritiParikshan.jpg'),
		description: 'Discover your constitution'
	},
	{ 
		id: 4, 
		title: 'Personal Advice', 
		route: '/(tabs)/advice', 
		image: require('../../assets/images/PersonalAdvice.jpg'),
		description: 'Expert ayurvedic guidance'
	},
];

export default function HomePage() {
	const router = useRouter();
	const navigation = useNavigation();
	
	// Group all useState hooks together
	const [searchQuery, setSearchQuery] = useState('');
	const translateX = useSharedValue(-300);
	const opacity = useSharedValue(0);

	// Move useFonts before any other hooks
	const [fontsLoaded] = useFonts({
		'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
		'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
		'Sanskrit': require('../../assets/fonts/NotoSansDevanagari-Regular.ttf'),
		'Amita-Bold': require('../../assets/fonts/Amita-Bold.ttf'),
	});

	// useEffect should come after all other hooks
	useEffect(() => {
		opacity.value = withDelay(500, withTiming(1, { duration: 1000 }));
		translateX.value = withDelay(
			500,
			withRepeat(
				withSequence(
					withTiming(0, { duration: 1500 }),
					withTiming(-300, { duration: 0 })
				),
				-1,
				false
			)
		);
	}, []);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: translateX.value }],
		opacity: opacity.value,
	}));

	if (!fontsLoaded) {
		return null;
	}

	const handleSearch = (query: string) => {
		setSearchQuery(query);
		if (query.trim()) {
			router.push('/disorders');
		}
	};

	return (
		<View style={styles.container}>
			<ImageBackground
			source={require('../../assets/images/Roots.jpg')}
				style={styles.header}
				imageStyle={styles.headerImage}
			>
				<View style={styles.headerOverlay}>
					<View style={styles.headerContent}>
						<IconButton
							icon={({ size, color }) => (
								<MaterialIcons name="menu" size={30} color="#FFFFFF" />
							)}
							size={24}
							iconColor="white"
							style={styles.menuButton}
							onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
						/>
						
						<IconButton
							icon={({ size, color }) => (
								<MaterialIcons name="notifications" size={30} color="#FFFFFF" />
							)}
							size={24}
							iconColor="white"
							style={styles.notificationButton}
							onPress={() => {/* Handle notifications */}}
						/>
					</View>
				</View>
			</ImageBackground>

			<View style={styles.searchBarContainer}>
				<Searchbar
					placeholder="Search disorders..."
					onChangeText={handleSearch}
					value={searchQuery}
					style={styles.searchBar}
					inputStyle={styles.searchInput}
					iconColor="#0B3B2D"
					placeholderTextColor="#666"
				/>
			</View>

			<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
				<View style={styles.sectionsGrid}>
					{sections.map((section) => (
						<TouchableOpacity
							key={section.id}
							style={styles.sectionCard}
							onPress={() => router.push(section.route as any)}
							activeOpacity={0.8}
						>
							<ImageBackground 
								source={section.image} 
								style={styles.sectionImage}
								imageStyle={styles.sectionImageStyle}
							>
								<View style={styles.sectionOverlay}>
									<Text style={styles.sectionTitle}>{section.title}</Text>
									<Text style={styles.sectionDescription}>{section.description}</Text>
								</View>
							</ImageBackground>
						</TouchableOpacity>
					))}
				</View>

				<View style={styles.footer}>
					<View style={styles.quoteWrapper}>
						<Animated.Text 
							style={[styles.quoteText, animatedStyle]}
						>
							"स्वस्थस्य स्वास्थ्य रक्षणम्"
						</Animated.Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F3F8F4',
	},
	header: {
		height: 200,
	},
	headerImage: {
		opacity: 0.9,
	},
	headerOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		paddingTop: Platform.OS === 'ios' ? 40 : 32,
	},
	headerContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 8,
		marginBottom: 16,
	},
	menuButton: {
		margin: 0,
	},
	notificationButton: {
		margin: 0,
	},
	searchBarContainer: {
		position: 'relative',
		marginTop: -25,
		zIndex: 1,
		paddingHorizontal: 16,
	},
	searchBar: {
		borderRadius: 25,
		elevation: 8,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.25,
		shadowRadius: 5,
		borderWidth: 1,
		borderColor: 'rgba(11, 59, 45, 0.2)',
	},
	searchInput: {
		fontFamily: 'Poppins-Regular',
		fontSize: 16,
		color: '#0B3B2D',
	},
	content: {
		flex: 1,
	},
	sectionsGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		padding: 10,
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	sectionCard: {
		width: '48%',
		aspectRatio: 0.8,
		marginBottom: 9,
		marginTop: 2,
		borderRadius: 16,
		overflow: 'hidden',
		elevation: 6,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.25,
		shadowRadius: 5,
	},
	sectionImage: {
		width: '100%',
		height: '100%',
	},
	sectionImageStyle: {
		borderRadius: 16,
	},
	sectionOverlay: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
	sectionTitle: {
		color: '#FFFFFF',
		fontSize: 20,
		fontFamily: 'Poppins-Bold',
		textAlign: 'center',
		marginBottom: 8,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 0, height: 1 },
		textShadowRadius: 3,
	},
	sectionDescription: {
		color: '#D4B895',
		fontSize: 14,
		fontFamily: 'Poppins-Regular',
		textAlign: 'center',
		opacity: 2,
		textShadowColor: 'rgba(0, 0, 0, 0.75)',
		textShadowOffset: { width: 0, height: 1 },
		textShadowRadius: 3,
	},
	footer: {
		paddingVertical: 20,
		paddingHorizontal: 20,
		marginTop: 0,
		marginBottom: 80,
	},
	quoteWrapper: {
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
	},
	quoteText: {
		color: '#0B3B2D',
		fontSize: 30,
		fontFamily: 'Amita-Bold',
		textAlign: 'center',
		letterSpacing: 2,
		lineHeight: 40,
		width: '200%',
		position: 'absolute',
	},
	quoteTranslation: {
		color: '#666666',
		fontSize: 18,
		fontFamily: 'Poppins-Regular',
		fontStyle: 'italic',
		textAlign: 'center',
		letterSpacing: 1,
		marginTop: 4,
	},
});