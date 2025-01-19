import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, Card, List } from 'react-native-paper';

const exercises = [
	{
		title: "Morning Exercises",
		description: "Start your day with energizing movements",
		routines: [
			"Light stretching for 5-10 minutes",
			"Joint rotation exercises",
			"Brisk walking for 15-20 minutes",
			"Deep breathing exercises"
		],
		doshaBalance: "Balances Kapha dosha, energizes body and mind"
	},
	{
		title: "Afternoon Practices",
		description: "Maintain energy levels throughout the day",
		routines: [
			"Light yoga poses",
			"Mindful walking",
			"Gentle twisting movements",
			"Balance exercises"
		],
		doshaBalance: "Balances Pitta dosha, maintains steady energy"
	},
	{
		title: "Evening Routines",
		description: "Calming exercises for day's end",
		routines: [
			"Gentle stretching",
			"Relaxation poses",
			"Slow walking meditation",
			"Breathing exercises for sleep"
		],
		doshaBalance: "Balances Vata dosha, promotes restful sleep"
	}
];

export default function ExerciseScreen() {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/Sidebar.jpg')}
				style={styles.header}
			>
				<View style={styles.headerOverlay}>
					<Text variant="headlineMedium" style={styles.headerTitle}>
						Ayurvedic Exercise
					</Text>
					<Text style={styles.headerSubtitle}>
						Movement for Balance and Health
					</Text>
				</View>
			</ImageBackground>

			<ScrollView 
				style={styles.content}
				contentContainerStyle={styles.contentContainer}
			>
				<Card style={styles.introCard}>
					<Card.Content>
						<Text style={styles.introText}>
							Discover balanced exercise routines based on Ayurvedic principles to maintain optimal health and energy levels.
						</Text>
					</Card.Content>
				</Card>

				{exercises.map((exercise, index) => (
					<Card key={index} style={styles.exerciseCard}>
						<Card.Content>
							<Text variant="titleLarge" style={styles.exerciseTitle}>
								{exercise.title}
							</Text>
							<Text style={styles.exerciseDescription}>
								{exercise.description}
							</Text>
							<List.Section>
								<List.Subheader style={styles.routinesHeader}>Recommended Routines</List.Subheader>
								{exercise.routines.map((routine, idx) => (
									<List.Item
										key={idx}
										title={routine}
										left={props => <List.Icon {...props} icon="run" color="#4CAF50" />}
										titleStyle={styles.routineText}
									/>
								))}
							</List.Section>
							<Text style={styles.doshaBalance}>
								{exercise.doshaBalance}
							</Text>
						</Card.Content>
					</Card>
				))}
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
	introCard: {
		marginBottom: 16,
		backgroundColor: '#4CAF50',
	},
	introText: {
		color: 'white',
		fontSize: 16,
		lineHeight: 24,
	},
	exerciseCard: {
		marginBottom: 16,
	},
	exerciseTitle: {
		fontWeight: 'bold',
		color: '#4CAF50',
		marginBottom: 8,
	},
	exerciseDescription: {
		color: '#FFFFFF',
		marginBottom: 16,
	},
	routinesHeader: {
		color: '#4CAF50',
		fontWeight: 'bold',
	},
	routineText: {
		color: '#FFFFFF',
	},
	doshaBalance: {
		marginTop: 8,
		color: '#4CAF50',
		fontStyle: 'italic',
	},
	contentContainer: {
		paddingBottom: 24,
	},
	bottomPadding: {
		height: 16,
	},
});