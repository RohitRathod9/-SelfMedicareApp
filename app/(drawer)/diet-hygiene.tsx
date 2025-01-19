import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, Card, List } from 'react-native-paper';

const dietTips = [
	{
		title: "Daily Diet Routine",
		items: [
			"Start your day with warm water and lemon",
			"Eat according to your dosha type",
			"Include all six tastes in your meals",
			"Avoid eating between meals",
			"Have dinner before sunset"
		]
	},
	{
		title: "Seasonal Diet Guidelines",
		items: [
			"Spring: Light, warm, and easily digestible foods",
			"Summer: Cool, sweet, and liquid foods",
			"Monsoon: Fresh, warm, and well-cooked foods",
			"Winter: Warm, nourishing, and slightly heavy foods"
		]
	}
];

const hygieneGuidelines = [
	{
		title: "Daily Hygiene Practices",
		items: [
			"Oil pulling with sesame or coconut oil",
			"Tongue scraping in the morning",
			"Self-massage with warm oil (Abhyanga)",
			"Regular exercise according to body type",
			"Proper sleep schedule (10 PM - 6 AM)"
		]
	},
	{
		title: "Mental Hygiene",
		items: [
			"Morning meditation practice",
			"Mindful eating habits",
			"Regular pranayama exercises",
			"Digital detox periods",
			"Nature walks for mental peace"
		]
	}
];

export default function DietHygieneScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/Diet.jpg')}
				style={styles.header}
			>
				<View style={styles.headerOverlay}>
					<Text variant="headlineMedium" style={styles.headerTitle}>
						Diet & Hygiene
					</Text>
					<Text style={styles.headerSubtitle}>
						Ancient Wisdom for Modern Wellness
					</Text>
				</View>
			</ImageBackground>

			<ScrollView 
				style={styles.content}
				contentContainerStyle={styles.contentContainer}
			>
				<Card style={styles.card}>
					<Card.Content>
						<Text variant="titleLarge" style={styles.sectionTitle}>
							Ayurvedic Diet Principles
						</Text>
						{dietTips.map((section, index) => (
							<List.Section key={index}>
								<List.Subheader style={styles.subheader}>{section.title}</List.Subheader>
								{section.items.map((item, idx) => (
									<List.Item
										key={idx}
										title={item}
										left={props => <List.Icon {...props} icon="leaf" color="#4CAF50" />}
										titleStyle={styles.listItemText}
									/>
								))}
							</List.Section>
						))}
					</Card.Content>
				</Card>

				<Card style={styles.card}>
					<Card.Content>
						<Text variant="titleLarge" style={styles.sectionTitle}>
							Personal Hygiene Guidelines
						</Text>
						{hygieneGuidelines.map((section, index) => (
							<List.Section key={index}>
								<List.Subheader style={styles.subheader}>{section.title}</List.Subheader>
								{section.items.map((item, idx) => (
									<List.Item
										key={idx}
										title={item}
										left={props => <List.Icon {...props} icon="water" color="#4CAF50" />}
										titleStyle={styles.listItemText}
									/>
								))}
							</List.Section>
						))}
					</Card.Content>
				</Card>
				<View style={styles.bottomPadding} />
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
	card: {
		marginBottom: 16,
		elevation: 2,
	},
	sectionTitle: {
		fontWeight: 'bold',
		marginBottom: 16,
		color: '#4CAF50',
	},
	subheader: {
		color: '#FFFFFF',
		fontSize: 18,
		fontWeight: 'bold',
	},
	listItemText: {
		fontSize: 16,
		color: '#FFFFFF',
	},
	contentContainer: {
		paddingBottom: 24,
	},
	bottomPadding: {
		height: 16,
	},
}); 