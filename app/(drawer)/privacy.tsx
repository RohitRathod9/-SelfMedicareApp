import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, Card } from 'react-native-paper';

const privacyPolicySections = [
	{
		title: "Information Collection",
		content: "We collect minimal personal information necessary for app functionality. This includes your preferences and health-related inputs for personalized recommendations."
	},
	{
		title: "Data Usage",
		content: "Your data is used solely to provide personalized Ayurvedic recommendations and improve app functionality. We do not share your personal information with third parties."
	},
	{
		title: "Data Security",
		content: "We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure."
	},
	{
		title: "User Rights",
		content: "You have the right to access, modify, or delete your personal information at any time through the app settings."
	}
];

export default function PrivacyScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/Sidebar.jpg')}
				style={styles.header}
			>
				<View style={styles.headerOverlay}>
					<Text variant="headlineMedium" style={styles.headerTitle}>
						Privacy Policy
					</Text>
					<Text style={styles.headerSubtitle}>
						Your Privacy Matters
					</Text>
				</View>
			</ImageBackground>

			<ScrollView style={styles.content}>
				<Card style={styles.introCard}>
					<Card.Content>
						<Text style={styles.introText}>
							We are committed to protecting your privacy and ensuring the security of your personal information.
						</Text>
					</Card.Content>
				</Card>

				{privacyPolicySections.map((section, index) => (
					<Card key={index} style={styles.sectionCard}>
						<Card.Content>
							<Text variant="titleMedium" style={styles.sectionTitle}>
								{section.title}
							</Text>
							<Text style={styles.sectionContent}>
								{section.content}
							</Text>
						</Card.Content>
					</Card>
				))}

				<Card style={styles.contactCard}>
					<Card.Content>
						<Text variant="titleMedium" style={styles.contactTitle}>
							Contact Us
						</Text>
						<Text style={styles.contactText}>
							If you have any questions about our privacy policy, please contact us at privacy@ayurvedic-app.com
						</Text>
					</Card.Content>
				</Card>
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
	sectionCard: {
		marginBottom: 16,
	},
	sectionTitle: {
		fontWeight: 'bold',
		color: '#4CAF50',
		marginBottom: 8,
	},
	sectionContent: {
		color: '#FFFFFF',
		lineHeight: 22,
	},
	contactCard: {
		marginBottom: 24,
		backgroundColor: '#f8f8f8',
	},
	contactTitle: {
		fontWeight: 'bold',
		color: '#4CAF50',
		marginBottom: 8,
	},
	contactText: {
		color: '#FFFFFF',
		lineHeight: 22,
	},
});