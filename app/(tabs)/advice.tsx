import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Linking, Platform } from 'react-native';
import { Text, Card, Button, Avatar, Divider, IconButton } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

// Assuming the declaration file for MaterialIcons has been added or installed
// If not, follow the instructions in the lint context to fix the issue

const doctors = [
	{
		id: 1,
		name: "Dr. Sangharsh Dhiwar",
		specialization: "Ayurvedic Physician",
		experience: "2+ years",
		location: "Ahmadnagar, Maharashtra",
		contact: "+91 98765 43210"
	},
	{
		id: 2,
		name: "Dr. Prajit Kolhe",
		specialization: "Panchakarma Specialist",
		experience: "2+ years",
		location: "Pune, Maharashtra",
		contact: "+91 98765 43211"
	}
	
];

export default function PersonalAdvice() {
	const navigation = useNavigation();

	const handleCall = (phoneNumber: string) => {
		Linking.openURL(`tel:${phoneNumber}`);
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/PersonalAdvice.jpg')}
				style={styles.header}
			>
				<View style={styles.headerOverlay}>
					<Text variant="headlineMedium" style={styles.headerTitle}>
						Personal Advice
					</Text>
					<Text style={styles.headerSubtitle}>
						Connect with Ayurvedic Experts
					</Text>
				</View>
			</ImageBackground>

			<ScrollView style={styles.content}>
				<Card style={styles.infoCard}>
					<Card.Content>
						<Text variant="titleLarge" style={styles.infoTitle}>
							Expert Consultation
						</Text>
						<Text style={styles.infoText}>
							Consult with experienced Ayurvedic practitioners for personalized treatment plans and expert guidance.
						</Text>
					</Card.Content>
				</Card>

				{doctors.map((doctor) => (
					<Card key={doctor.id} style={styles.doctorCard}>
						<Card.Content>
							<View style={styles.doctorHeader}>
								<Avatar.Icon 
									size={50} 
									icon="doctor" 
									style={styles.avatar}
									color="#D4B895"
								/>
								<View style={styles.doctorInfo}>
									<Text variant="titleLarge" style={styles.doctorName}>
										{doctor.name}
									</Text>
									<Text variant="titleSmall" style={styles.specialization}>
										{doctor.specialization}
									</Text>
								</View>
							</View>
							
							<Divider style={styles.divider} />
							
							<View style={styles.details}>
								<Text style={styles.detailText}>
									<MaterialIcons name="star" size={16} color="#D4B895" /> Experience: {doctor.experience}
								</Text>
								<Text style={styles.detailText}>
									<MaterialIcons name="location-on" size={16} color="#D4B895" /> Location: {doctor.location}
								</Text>
							</View>
							
							<Button
								mode="contained"
								onPress={() => handleCall(doctor.contact)}
								style={styles.callButton}
								icon="phone"
								contentStyle={styles.buttonContent}
								labelStyle={styles.buttonLabel}
							>
								Call Now
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
		backgroundColor: 'rgba(11, 59, 45, 0.6)',
		justifyContent: 'flex-end',
		padding: 16,
		paddingTop: Platform.OS === 'ios' ? 40 : 32,
	},
	headerTitle: {
		color: 'white',
		fontWeight: 'bold',
		marginBottom: 8,
		fontFamily: 'Poppins-Bold',
	},
	headerSubtitle: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
	},
	content: {
		flex: 1,
		padding: 16,
	},
	infoCard: {
		marginBottom: 16,
		backgroundColor: '#0B3B2D',
		borderRadius: 12,
		elevation: 4,
	},
	infoTitle: {
		color: '#D4B895',
		marginBottom: 8,
		fontFamily: 'Poppins-Bold',
	},
	infoText: {
		color: 'white',
		fontSize: 16,
		lineHeight: 24,
		fontFamily: 'Poppins-Regular',
	},
	doctorCard: {
		marginBottom: 16,
		borderRadius: 12,
		elevation: 2,
		backgroundColor: 'white',
	},
	doctorHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 16,
	},
	avatar: {
		backgroundColor: '#0B3B2D',
	},
	doctorInfo: {
		marginLeft: 16,
		flex: 1,
	},
	doctorName: {
		fontWeight: 'bold',
		color: '#0B3B2D',
		fontFamily: 'Poppins-Bold',
	},
	specialization: {
		color: '#FFFFFF',
		fontFamily: 'Poppins-Regular',
	},
	divider: {
		marginVertical: 12,
		backgroundColor: '#D4B89533',
	},
	details: {
		marginBottom: 16,
	},
	detailText: {
		fontSize: 16,
		color: '#444',
		marginBottom: 8,
		fontFamily: 'Poppins-Regular',
		flexDirection: 'row',
		alignItems: 'center',
	},
	callButton: {
		backgroundColor: '#0B3B2D',
		borderRadius: 8,
		elevation: 2,
	},
	buttonContent: {
		height: 48,
	},
	buttonLabel: {
		fontSize: 16,
		fontFamily: 'Poppins-Bold',
		color: '#D4B895',
	},
	headerContent: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 8,
		marginBottom: 16,
	},
	menuButton: {
		margin: 0,
	},
});