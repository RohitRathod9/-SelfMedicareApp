import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, Card, List } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const yogaPoses = [
	{
		title: "Surya Namaskar",
		description: "A sequence of 12 powerful yoga poses",
		benefits: [
			"Improves blood circulation",
			"Strengthens muscles and joints",
			"Enhances flexibility",
			"Balances body and mind"
		]
	},
	{
		title: "Pranayama Asanas",
		description: "Breathing-focused yoga poses",
		benefits: [
			"Increases lung capacity",
			"Reduces stress and anxiety",
			"Improves concentration",
			"Balances doshas"
		]
	},
	{
		title: "Meditation Poses",
		description: "Poses for spiritual connection",
		benefits: [
			"Enhances mental clarity",
			"Promotes inner peace",
			"Improves posture",
			"Deepens meditation practice"
		]
	}
];

export default function YogaScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/Yoga.jpg')}
				style={styles.header}
			>
				<View style={styles.headerOverlay}>
					<Text variant="headlineMedium" style={styles.headerTitle}>
						Ayurvedic Yoga
					</Text>
					<Text style={styles.headerSubtitle}>
						Unite Body, Mind, and Spirit
					</Text>
				</View>
			</ImageBackground>

			<ScrollView style={styles.content}>
				<Card style={styles.introCard}>
					<Card.Content>
						<Text style={styles.introText}>
							Explore traditional yoga practices that complement Ayurvedic principles for holistic wellness.
						</Text>
					</Card.Content>
				</Card>

				{yogaPoses.map((pose, index) => (
					<Card key={index} style={styles.poseCard}>
						<Card.Content>
							<Text variant="titleLarge" style={styles.poseTitle}>
								{pose.title}
							</Text>
							<Text style={styles.poseDescription}>
								{pose.description}
							</Text>
							<List.Section>
								<List.Subheader style={styles.benefitsHeader}>Benefits</List.Subheader>
								{pose.benefits.map((benefit, idx) => (
									<List.Item
										key={idx}
										title={benefit}
										left={props => (
											<MaterialCommunityIcons name="meditation" size={24} color="#4CAF50" />
										)}
										titleStyle={styles.benefitText}
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
	poseCard: {
		marginBottom: 16,
	},
	poseTitle: {
		fontWeight: 'bold',
		color: '#4CAF50',
		marginBottom: 8,
	},
	poseDescription: {
		color: '#666',
		marginBottom: 16,
	},
	benefitsHeader: {
		color: '#4CAF50',
		fontWeight: 'bold',
	},
	benefitText: {
		color: '#666',
	},
});