import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Linking } from 'react-native';
import { Text, Card, List, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const books = [
	{
		id: 1,
		title: 'Charaka Samhita',
		description: 'The foundational text of Ayurveda, focusing on internal medicine and treatment principles.',
		highlights: [
			'Principles of health and disease',
			'Eight branches of Ayurveda',
			'Detailed treatment methods',
			'Herbal medicine preparations'
		],
		downloadLink: 'https://www.carakasamhitaonline.com/mediawiki-1.32.1/index.php?title=Charaka_Samhita',
	},
	{
		id: 2,
		title: 'Sushruta Samhita',
		description: 'Ancient Sanskrit text on surgery and surgical procedures in Ayurvedic medicine.',
		highlights: [
			'Surgical procedures and instruments',
			'Anatomy and physiology',
			'Disease classifications',
			'Treatment protocols'
		],
		downloadLink: 'https://www.wisdomlib.org/hinduism/book/sushruta-samhita-volume-1-sutrasthana',
	},
	{
		id: 3,
		title: 'Ashtanga Hridaya',
		description: 'Comprehensive treatise on Ayurvedic medicine and healthcare practices.',
		highlights: [
			'Daily and seasonal routines',
			'Diagnosis methods',
			'Treatment principles',
			'Preventive medicine'
		],
		downloadLink: 'https://www.wisdomlib.org/hinduism/book/ashtanga-hridaya-sutrasthana',
	},
];

export default function BooksScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/AncientBooks.jpg')}
				style={styles.header}
			>
				<View style={styles.headerOverlay}>
					<Text style={styles.headerTitle}>Ancient References</Text>
					<Text style={styles.headerSubtitle}>Timeless Wisdom of Ayurveda</Text>
				</View>
			</ImageBackground>

			<ScrollView 
				style={styles.content}
				contentContainerStyle={styles.contentContainer}
			>
				<Card style={styles.introCard}>
					<Card.Content>
						<Text style={styles.introText}>
							Explore the foundational texts of Ayurvedic medicine that have guided practitioners for thousands of years.
						</Text>
					</Card.Content>
				</Card>

				{books.map((book) => (
					<Card key={book.id} style={styles.bookCard}>
						<Card.Content>
							<Text style={styles.bookTitle}>{book.title}</Text>
							<Text style={styles.bookDescription}>{book.description}</Text>
							
							<List.Section>
								<List.Subheader style={styles.highlightsHeader}>Key Topics</List.Subheader>
								{book.highlights.map((highlight, idx) => (
									<List.Item
										key={idx}
										title={highlight}
										left={props => (
											<MaterialCommunityIcons 
												name="book-open-variant" 
												size={24} 
												color="#0B3B2D" 
												style={{ marginLeft: 8, marginRight: -8 }}
											/>
										)}
										titleStyle={styles.highlightText}
									/>
								))}
							</List.Section>

							<Button
								mode="contained"
								onPress={() => Linking.openURL(book.downloadLink)}
								style={styles.readButton}
								labelStyle={styles.buttonLabel}
								contentStyle={styles.buttonContent}
								icon={({size, color}) => (
									<MaterialCommunityIcons 
										name="book-open-page-variant" 
										size={32} 
										color="#FFFFFF" 
										style={styles.buttonIcon}
									/>
								)}
							>
								READ ONLINE
							</Button>
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
		backgroundColor: '#F3F8F4',
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
		color: '#FFFFFF',
		fontSize: 32,
		fontWeight: 'bold',
		fontFamily: 'Poppins-Bold',
		marginBottom: 8,
	},
	headerSubtitle: {
		color: '#D4B895',
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
	},
	content: {
		flex: 1,
		padding: 16,
	},
	contentContainer: {
		paddingBottom: 24,
	},
	introCard: {
		marginBottom: 16,
		backgroundColor: '#0B3B2D',
		elevation: 4,
		borderRadius: 12,
	},
	introText: {
		color: '#FFFFFF',
		fontSize: 16,
		lineHeight: 24,
		fontFamily: 'Poppins-Regular',
	},
	bookCard: {
		marginBottom: 16,
		elevation: 4,
		borderRadius: 12,
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#0B3B2D20',
	},
	bookTitle: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#0B3B2D',
		marginBottom: 12,
		fontFamily: 'Poppins-Bold',
		letterSpacing: 0.5,
	},
	bookDescription: {
		fontSize: 16,
		color: '#0B3B2D',
		marginBottom: 20,
		lineHeight: 24,
		fontFamily: 'Poppins-Regular',
		opacity: 0.8,
	},
	highlightsHeader: {
		color: '#0B3B2D',
		fontWeight: 'bold',
		fontSize: 22,
		fontFamily: 'Poppins-Bold',
		marginBottom: 8,
		letterSpacing: 0.5,
	},
	highlightText: {
		color: '#0B3B2D',
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
		opacity: 0.8,
		lineHeight: 24,
	},
	readButton: {
		marginTop: 20,
		backgroundColor: '#0B3B2D',
		borderRadius: 8,
		elevation: 4,
		borderWidth: 1,
		borderColor: '#D4B89555',
	},
	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 8,
		gap: 12,
	},
	buttonLabel: {
		fontSize: 18,
		fontWeight: 'bold',
		fontFamily: 'Poppins-Bold',
		color: '#FFFFFF',
		letterSpacing: 1,
	},
	buttonIcon: {
		marginRight: 4,
	},
});