import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, Card } from 'react-native-paper';

const ayurvedaImportance = [
	{
		title: "Holistic Approach",
		content: "Ayurveda treats the person as a whole, not just the disease. It considers physical, mental, emotional, and spiritual well-being as interconnected aspects of health."
	},
	{
		title: "Preventive Care",
		content: "Focus on preventing diseases through proper lifestyle, diet, and daily routines rather than just treating symptoms after they appear."
	},
	{
		title: "Natural Healing",
		content: "Utilizes natural herbs, minerals, and therapeutic procedures that work in harmony with the body's natural healing mechanisms."
	},
	{
		title: "Personalized Treatment",
		content: "Recognizes each person's unique constitution (Prakriti) and provides customized treatment plans based on individual needs."
	}
];

const principles = [
	{
		title: "The Three Doshas",
		content: "Vata (Air & Space), Pitta (Fire & Water), and Kapha (Earth & Water) govern all physical and mental processes in the body and mind."
	},
	{
		title: "Balance is Health",
		content: "Health is achieved when there is a balance between the three doshas, proper digestion, and when body, mind, and spirit are in harmony."
	}
];

export default function ImportanceScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/ImportanceOfAyurveda.jpg')}
				style={styles.header}
			>
				<View style={styles.headerOverlay}>
					<Text variant="headlineMedium" style={styles.headerTitle}>
						Importance of Ayurveda
					</Text>
					<Text style={styles.headerSubtitle}>
						The Science of Life
					</Text>
				</View>
			</ImageBackground>

			<ScrollView style={styles.content}>
				<Card style={styles.introCard}>
					<Card.Content>
						<Text style={styles.introText}>
							Ayurveda, the ancient Indian system of medicine, has been practiced for over 5000 years. It offers a comprehensive approach to healthy and balanced living.
						</Text>
					</Card.Content>
				</Card>

				{ayurvedaImportance.map((item, index) => (
					<Card key={index} style={styles.card}>
						<Card.Content>
							<Text variant="titleMedium" style={styles.cardTitle}>
								{item.title}
							</Text>
							<Text style={styles.cardContent}>
								{item.content}
							</Text>
						</Card.Content>
					</Card>
				))}

				<Text variant="titleLarge" style={styles.sectionTitle}>
					Fundamental Principles
				</Text>

				{principles.map((principle, index) => (
					<Card key={index} style={styles.card}>
						<Card.Content>
							<Text variant="titleMedium" style={styles.cardTitle}>
								{principle.title}
							</Text>
							<Text style={styles.cardContent}>
								{principle.content}
							</Text>
						</Card.Content>
					</Card>
				))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	header: {
		height: 200,
	},
	headerOverlay: {
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.4)',
		justifyContent: 'flex-end',
		padding: 16,
	},
	headerTitle: {
		color: 'white',
		fontWeight: 'bold',
		marginBottom: 8,
	},
	headerSubtitle: {
		color: 'white',
		fontSize: 16,
	},
	content: {
		flex: 1,
		padding: 16,
	},
	introCard: {
		marginBottom: 24,
		backgroundColor: '#4CAF50',
	},
	introText: {
		color: 'white',
		fontSize: 16,
		lineHeight: 24,
	},
	sectionTitle: {
		fontWeight: 'bold',
		marginVertical: 16,
		color: '#4CAF50',
	},
	card: {
		marginBottom: 16,
		elevation: 2,
	},
	cardTitle: {
		fontWeight: 'bold',
		marginBottom: 8,
		color: '#4CAF50',
	},
	cardContent: {
		color: '#666',
		lineHeight: 22,
	},
}); 