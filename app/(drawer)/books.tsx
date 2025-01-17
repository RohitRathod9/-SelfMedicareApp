import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, Card, List } from 'react-native-paper';

const ancientBooks = [
	{
		title: "Charaka Samhita",
		description: "Foundation text of Ayurveda",
		highlights: [
			"Principles of health and disease",
			"Eight branches of Ayurveda",
			"Detailed treatment methods",
			"Herbal medicine preparations"
		]
	},
	{
		title: "Sushruta Samhita",
		description: "Ancient surgical and medical text",
		highlights: [
			"Surgical procedures and instruments",
			"Anatomy and physiology",
			"Disease classifications",
			"Treatment protocols"
		]
	},
	{
		title: "Ashtanga Hridaya",
		description: "Comprehensive medical guide",
		highlights: [
			"Daily and seasonal routines",
			"Diagnosis methods",
			"Treatment principles",
			"Preventive medicine"
		]
	}
];

export default function BooksScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/AncientBooks.jpg')}
				style={styles.header}
			>
				<View style={styles.headerOverlay}>
					<Text variant="headlineMedium" style={styles.headerTitle}>
						Ancient Books
					</Text>
					<Text style={styles.headerSubtitle}>
						Timeless Wisdom of Ayurveda
					</Text>
				</View>
			</ImageBackground>

			<ScrollView style={styles.content}>
				<Card style={styles.introCard}>
					<Card.Content>
						<Text style={styles.introText}>
							Explore the foundational texts of Ayurvedic medicine that have guided practitioners for thousands of years.
						</Text>
					</Card.Content>
				</Card>

				{ancientBooks.map((book, index) => (
					<Card key={index} style={styles.bookCard}>
						<Card.Content>
							<Text variant="titleLarge" style={styles.bookTitle}>
								{book.title}
							</Text>
							<Text style={styles.bookDescription}>
								{book.description}
							</Text>
							<List.Section>
								<List.Subheader style={styles.highlightsHeader}>Key Topics</List.Subheader>
								{book.highlights.map((highlight, idx) => (
									<List.Item
										key={idx}
										title={highlight}
										left={props => <List.Icon {...props} icon="book-open-variant" color="#4CAF50" />}
										titleStyle={styles.highlightText}
									/>
								))}
							</List.Section>
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
		marginBottom: 16,
		backgroundColor: '#4CAF50',
	},
	introText: {
		color: 'white',
		fontSize: 16,
		lineHeight: 24,
	},
	bookCard: {
		marginBottom: 16,
	},
	bookTitle: {
		fontWeight: 'bold',
		color: '#4CAF50',
		marginBottom: 8,
	},
	bookDescription: {
		color: '#666',
		marginBottom: 16,
	},
	highlightsHeader: {
		color: '#4CAF50',
		fontWeight: 'bold',
	},
	highlightText: {
		color: '#666',
	},
});