import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, Card, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import symptomsData from '../data/symptoms.json';

export default function SymptomsPage() {
	const { id } = useLocalSearchParams();
	const router = useRouter();
	const [language, setLanguage] = useState('mr');
	const disorder = symptomsData.symptoms.find(s => s.disorderId === Number(id));

	if (!disorder) {
		return (
			<View style={styles.container}>
				<Text>Disorder not found</Text>
			</View>
		);
	}

	const toggleLanguage = () => {
		setLanguage(prev => prev === 'mr' ? 'en' : 'mr');
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/Symptoms.jpg')}
				style={styles.header}
			>
				<View style={styles.headerOverlay}>
					<IconButton
						icon="arrow-left"
						iconColor="white"
						size={24}
						onPress={() => router.back()}
						style={styles.backButton}
					/>
					<Text variant="headlineMedium" style={styles.headerTitle}>
						{disorder.name}
					</Text>
				</View>
			</ImageBackground>

			<ScrollView style={styles.content}>
				<Card style={styles.card}>
					<Card.Content>
						<View style={styles.cardHeader}>
							<Text variant="titleLarge" style={styles.sectionTitle}>
								Symptoms
							</Text>
							<IconButton
								icon="translate"
								size={24}
								onPress={toggleLanguage}
								style={styles.translateButton}
								iconColor="#0B3B2D"
							/>
						</View>
						{Array.isArray(disorder.symptoms[language]) && disorder.symptoms[language].map((symptom: string, index: number) => (
							<View key={index.toString()} style={styles.listItem}>
								<Text style={styles.bullet}>•</Text>
								<Text style={styles.listText}>{symptom}</Text>
							</View>
						))}
					</Card.Content>
				</Card>

				<Card style={styles.remedyCard}>
					<Card.Content>
						<View style={styles.cardHeader}>
							<Text variant="titleLarge" style={styles.remedyTitle}>
								Ayurvedic Remedies
							</Text>
							<IconButton
								icon="translate"
								size={24}
								onPress={toggleLanguage}
								style={styles.translateButton}
								iconColor="#D4B895"
							/>
						</View>
						{Array.isArray(disorder.remedies[language]) && disorder.remedies[language].map((remedy: string, index: number) => (
							<View key={index.toString()} style={styles.remedyItem}>
								<Text style={styles.remedyBullet}>•</Text>
								<Text style={styles.remedyText}>{remedy}</Text>
							</View>
						))}
					</Card.Content>
				</Card>
			</ScrollView>
		</View>
	);
}

const additionalStyles = StyleSheet.create({
	cardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 16,
	},
	translateButton: {
		margin: 0,
		padding: 0,
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F3F8F4',
	},
	header: {
		height: 200,
	},
	headerOverlay: {
		height: '100%',
		backgroundColor: 'rgba(11, 59, 45, 0.6)',
		justifyContent: 'flex-end',
		padding: 16,
	},
	backButton: {
		position: 'absolute',
		top: 16,
		left: 16,
	},
	headerTitle: {
		color: 'white',
		fontWeight: 'bold',
		marginBottom: 16,
		fontFamily: 'Poppins-Bold',
	},
	content: {
		flex: 1,
		padding: 16,
	},
	card: {
		marginBottom: 16,
		elevation: 4,
		borderRadius: 12,
		backgroundColor: 'white',
	},
	sectionTitle: {
		fontFamily: 'Poppins-Bold',
		marginBottom: 16,
		color: '#0B3B2D',
		fontSize: 20,
	},
	listItem: {
		flexDirection: 'row',
		marginBottom: 12,
		paddingVertical: 4,
	},
	bullet: {
		marginRight: 12,
		color: '#D4B895',
		fontSize: 18,
	},
	listText: {
		flex: 1,
		color: '#444',
		fontSize: 16,
		lineHeight: 24,
		fontFamily: 'Poppins-Regular',
	},
	remedyCard: {
		marginBottom: 16,
		elevation: 4,
		borderRadius: 12,
		backgroundColor: '#0B3B2D',
	},
	remedyTitle: {
		fontFamily: 'Poppins-Bold',
		marginBottom: 16,
		color: '#D4B895',
		fontSize: 20,
	},
	remedyItem: {
		flexDirection: 'row',
		marginBottom: 12,
		paddingVertical: 4,
	},
	remedyBullet: {
		marginRight: 12,
		color: '#D4B895',
		fontSize: 18,
	},
	remedyText: {
		flex: 1,
		color: 'white',
		fontSize: 16,
		lineHeight: 24,
		fontFamily: 'Poppins-Regular',
	},
	...additionalStyles,
});