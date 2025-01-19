import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, Card, List } from 'react-native-paper';

const meditationTechniques = [
  {
    title: "Pranayama Meditation",
    description: "Breath control techniques to balance mind and body",
    steps: [
      "Find a comfortable seated position",
      "Close your eyes and focus on your breath",
      "Practice alternate nostril breathing",
      "Maintain for 10-15 minutes",
      "End with deep relaxation"
    ]
  },
  {
    title: "Om Meditation",
    description: "Sacred sound vibration for inner peace",
    steps: [
      "Sit in a quiet space",
      "Close your eyes and center yourself",
      "Chant 'Om' with deep resonance",
      "Feel the vibration throughout your body",
      "Practice for 10-20 minutes"
    ]
  }
];

export default function MeditationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Meditation.jpg')}
        style={styles.header}
      >
        <View style={styles.headerOverlay}>
          <Text variant="headlineMedium" style={styles.headerTitle}>
            Meditation Techniques
          </Text>
          <Text style={styles.headerSubtitle}>
            Ancient Practices for Modern Peace
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
              Discover traditional Ayurvedic meditation practices that promote mental clarity, emotional balance, and spiritual growth.
            </Text>
          </Card.Content>
        </Card>

        {meditationTechniques.map((technique, index) => (
          <Card key={index} style={styles.techniqueCard}>
            <Card.Content>
              <Text variant="titleLarge" style={styles.techniqueTitle}>
                {technique.title}
              </Text>
              <Text style={styles.techniqueDescription}>
                {technique.description}
              </Text>
              <List.Section>
                <List.Subheader style={styles.stepsHeader}>Practice Steps</List.Subheader>
                {technique.steps.map((step, idx) => (
                  <List.Item
                    key={idx}
                    title={step}
                    left={props => <List.Icon {...props} icon="meditation" color="#4CAF50" />}
                    titleStyle={styles.stepText}
                  />
                ))}
              </List.Section>
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
  contentContainer: {
    paddingBottom: 24,
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
  techniqueCard: {
    marginBottom: 16,
  },
  techniqueTitle: {
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  techniqueDescription: {
    color: '#FFFFFF',
    marginBottom: 16,
  },
  stepsHeader: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  stepText: {
    color: '#FFFFFF',
  },
  bottomPadding: {
    height: 16,
  },
}); 