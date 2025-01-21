import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

const content = {
	en: {
		title: "Privacy Policy",
		subtitle: "Your Data, Your Trust",
		introduction: "Welcome to Ayurvedic Self-Med, an Ayurvedic Remedies app. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share information when you use our app.",
		sections: [
			{
				title: "Information We Collect",
				content: [
					"Personal Information: If you create an account, we may collect personal details such as your name, email address, contact number, and other information required for account creation.",
					"Usage Data: We automatically collect information about how you interact with our app, such as your device information, IP address, operating system, app version, and browsing behavior.",
					"Health-Related Information: In some cases, you may choose to input health-related data (such as symptoms, ailments, etc.) to receive tailored Ayurvedic remedies. This information is used solely to personalize your experience and is kept confidential."
				]
			},
			{
				title: "How We Use Your Information",
				content: [
					"To provide you with personalized Ayurvedic remedies and suggestions.",
					"To improve and optimize the functionality and performance of the app.",
					"To communicate with you regarding app updates, promotions, or customer support inquiries.",
					"To comply with legal obligations and resolve disputes."
				]
			},
			{
				title: "Data Security",
				content: [
					"We employ appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, or disclosure.",
					"However, please note that no method of transmission over the internet is 100% secure."
				]
			},
			{
				title: "Sharing of Information",
				content: [
					"We do not sell, trade, or rent your personal data to third parties.",
					"We may share your information with trusted service providers who assist in the operation of our app.",
					"To comply with legal requirements, such as responding to a subpoena or legal process.",
					"If we are involved in a merger, acquisition, or sale of assets, we will notify you and transfer your data to the new entity."
				]
			},
			{
				title: "Your Rights",
				content: [
					"The right to access, correct, or delete your personal information.",
					"The right to opt-out of marketing communications.",
					"The right to restrict or object to the processing of your data."
				]
			},
			{
				title: "Remedies Section",
				content: [
					"In the Remedies section of our app, users may access various Ayurvedic remedies, tips, and suggestions for health and wellness.",
					"The remedies provided are intended for informational purposes only and are not a substitute for professional medical advice, diagnosis, or treatment."
				]
			}
		],
		contact: {
			title: "Contact Us",
			content: "If you have any questions about our privacy policy, please contact us at privacy@ayurvedic-app.com"
		}
	},
	mr: {
		title: "गोपनीयता धोरण",
		subtitle: "तुमची माहिती, तुमचा विश्वास",
		introduction: "आयुर्वेदिक सेल्फ-मेड, एक आयुर्वेदिक उपचार अॅपमध्ये आपले स्वागत आहे. आम्ही तुमच्या गोपनीयतेचा आदर करतो आणि तुमची वैयक्तिक माहिती संरक्षित करण्यास वचनबद्ध आहोत. हे गोपनीयता धोरण स्पष्ट करते की आम्ही तुमच्या अॅपचा वापर करताना माहिती कशी गोळा करतो, वापरतो आणि शेअर करतो.",
		sections: [
			{
				title: "आम्ही कोणती माहिती गोळा करतो",
				content: [
					"वैयक्तिक माहिती: जर तुम्ही खाते तयार केले, तर आम्ही तुमचे नाव, ईमेल पत्ता, संपर्क क्रमांक आणि खाते तयार करण्यासाठी आवश्यक असलेली इतर माहिती गोळा करू शकतो.",
					"वापर डेटा: आम्ही तुमच्या डिव्हाइस माहिती, आयपी पत्ता, ऑपरेटिंग सिस्टम, अॅप आवृत्ती आणि ब्राउझिंग वर्तन यासारख्या तुम्ही अॅपशी कसे संवाद साधता याबद्दल स्वयंचलितपणे माहिती गोळा करतो.",
					"आरोग्य-संबंधित माहिती: काही प्रकरणांमध्ये, तुम्ही सानुकूल आयुर्वेदिक उपचार प्राप्त करण्यासाठी आरोग्य-संबंधित डेटा (जसे लक्षणे, आजार, इ.) इनपुट करण्याचे निवडू शकता. ही माहिती केवळ तुमचा अनुभव वैयक्तिकृत करण्यासाठी वापरली जाते आणि गोपनीय ठेवली जाते."
				]
			},
			{
				title: "आम्ही तुमची माहिती कशी वापरतो",
				content: [
					"तुम्हाला वैयक्तिकृत आयुर्वेदिक उपचार आणि सूचना प्रदान करण्यासाठी.",
					"अॅपची कार्यक्षमता आणि कामगिरी सुधारण्यासाठी आणि अनुकूल करण्यासाठी.",
					"अॅप अपडेट्स, प्रमोशन्स किंवा ग्राहक सहाय्य चौकशींबद्दल तुमच्याशी संवाद साधण्यासाठी.",
					"कायदेशीर दायित्वांचे पालन करण्यासाठी आणि वाद सोडवण्यासाठी."
				]
			},
			{
				title: "डेटा सुरक्षा",
				content: [
					"आम्ही तुमच्या वैयक्तिक डेटाचे अनधिकृत प्रवेश, बदल किंवा प्रकटीकरणापासून संरक्षण करण्यासाठी योग्य तांत्रिक आणि संघटनात्मक उपाय वापरतो.",
					"तथापि, कृपया लक्षात घ्या की इंटरनेटवरील प्रसारणाची कोणतीही पद्धत 100% सुरक्षित नाही."
				]
			},
			{
				title: "माहिती शेअरिंग",
				content: [
					"आम्ही तुमचा वैयक्तिक डेटा तृतीय पक्षांना विकत नाही, व्यापार करत नाही किंवा भाड्याने देत नाही.",
					"आम्ही तुमची माहिती विश्वासू सेवा प्रदात्यांसह शेअर करू शकतो जे आमच्या अॅपच्या कार्यात मदत करतात.",
					"सबपीना किंवा कायदेशीर प्रक्रियेला प्रतिसाद देण्यासारख्या कायदेशीर आवश्यकतांचे पालन करण्यासाठी.",
					"जर आम्ही विलीनीकरण, अधिग्रहण किंवा मालमत्तेच्या विक्रीमध्ये सामील असू, तर आम्ही तुम्हाला सूचित करू आणि तुमचा डेटा नवीन संस्थेकडे हस्तांतरित करू."
				]
			},
			{
				title: "तुमचे अधिकार",
				content: [
					"तुमची वैयक्तिक माहिती प्रवेश करण्याचा, दुरुस्त करण्याचा किंवा हटवण्याचा अधिकार.",
					"मार्केटिंग संप्रेषणातून ऑप्ट-आउट करण्याचा अधिकार.",
					"तुमच्या डेटाच्या प्रक्रियेवर मर्यादा घालण्याचा किंवा आक्षेप घेण्याचा अधिकार."
				]
			},
			{
				title: "उपचार विभाग",
				content: [
					"आमच्या अॅपच्या उपचार विभागात, वापरकर्ते विविध आयुर्वेदिक उपचार, टिप्स आणि आरोग्य आणि कल्याणासाठी सूचना प्राप्त करू शकतात.",
					"प्रदान केलेले उपचार केवळ माहितीसाठी आहेत आणि व्यावसायिक वैद्यकीय सल्ला, निदान किंवा उपचाराचा पर्याय नाहीत."
				]
			}
		],
		contact: {
			title: "आमच्याशी संपर्क साधा",
			content: "आमच्या गोपनीयता धोरणाबद्दल तुम्हाला काही प्रश्न असल्यास, कृपया आम्हाला privacy@ayurvedic-app.com वर संपर्क साधा"
		}
	}
};

export default function PrivacyScreen() {
	const navigation = useNavigation();
	const [language, setLanguage] = useState<'en' | 'mr'>('en');

	const openDrawer = () => {
		// @ts-ignore: dispatch exists but TypeScript doesn't recognize it
		navigation.dispatch(DrawerActions.openDrawer());
	};

	const toggleLanguage = () => {
		setLanguage(prev => prev === 'en' ? 'mr' : 'en');
	};

	const currentContent = content[language];

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/Sidebar.jpg')}
				style={styles.header}
			>
				<View style={styles.headerOverlay}>
					<View style={styles.headerTop}>
						<IconButton
							icon="menu"
							iconColor="#FFFFFF"
							size={28}
							onPress={openDrawer}
							style={styles.menuButton}
						/>
						<View style={styles.translateContainer}>
							<IconButton
								icon="translate"
								iconColor="#FFFFFF"
								size={24}
								onPress={toggleLanguage}
								style={styles.translateButton}
							/>
							<Text style={styles.translateText}>
								{language === 'en' ? 'मराठी' : 'ENG'}
							</Text>
						</View>
					</View>
					<Text variant="headlineMedium" style={styles.headerTitle}>
						{currentContent.title}
					</Text>
					<Text style={styles.headerSubtitle}>
						{currentContent.subtitle}
					</Text>
				</View>
			</ImageBackground>

			<ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
				<Card style={styles.introCard}>
					<Card.Content>
						<Text style={styles.introText}>
							{currentContent.introduction}
						</Text>
					</Card.Content>
				</Card>

				{currentContent.sections.map((section, index) => (
					<Card key={index} style={styles.sectionCard}>
						<Card.Content>
							<Text variant="titleMedium" style={styles.sectionTitle}>
								{section.title}
							</Text>
							{section.content.map((item, itemIndex) => (
								<Text key={itemIndex} style={styles.sectionContent}>
									• {item}
								</Text>
							))}
						</Card.Content>
					</Card>
				))}

				<Card style={styles.contactCard}>
					<Card.Content>
						<Text variant="titleMedium" style={styles.contactTitle}>
							{currentContent.contact.title}
						</Text>
						<Text style={styles.contactText}>
							{currentContent.contact.content}
						</Text>
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
		backgroundColor: '#F3F8F4',
	},
	header: {
		height: 200,
	},
	headerOverlay: {
		height: '100%',
		backgroundColor: 'rgba(11, 59, 45, 0.6)',
		padding: 16,
	},
	headerTop: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 8,
	},
	menuButton: {
		margin: 0,
		backgroundColor: 'rgba(11, 59, 45, 0.5)',
		borderRadius: 8,
	},
	translateContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#FFFFFF',
		paddingRight: 12,
	},
	translateButton: {
		margin: 0,
	},
	translateText: {
		color: '#FFFFFF',
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
		marginLeft: -8,
	},
	headerTitle: {
		color: 'white',
		fontWeight: 'bold',
		marginBottom: 8,
		fontFamily: 'Poppins-Bold',
		marginTop: 'auto',
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
	contentContainer: {
		paddingBottom: 24,
	},
	introCard: {
		marginBottom: 16,
		backgroundColor: '#0B3B2D',
		borderRadius: 12,
	},
	introText: {
		color: 'white',
		fontSize: 16,
		lineHeight: 24,
		fontFamily: 'Poppins-Regular',
	},
	sectionCard: {
		marginBottom: 16,
		borderRadius: 12,
		backgroundColor: '#FFFFFF',
		elevation: 4,
	},
	sectionTitle: {
		fontWeight: 'bold',
		color: '#0B3B2D',
		marginBottom: 16,
		fontFamily: 'Poppins-Bold',
	},
	sectionContent: {
		color: '#0B3B2D',
		marginBottom: 8,
		lineHeight: 22,
		fontFamily: 'Poppins-Regular',
	},
	contactCard: {
		marginBottom: 24,
		borderRadius: 12,
		backgroundColor: '#FFFFFF',
		elevation: 4,
	},
	contactTitle: {
		fontWeight: 'bold',
		color: '#0B3B2D',
		marginBottom: 8,
		fontFamily: 'Poppins-Bold',
	},
	contactText: {
		color: '#0B3B2D',
		lineHeight: 22,
		fontFamily: 'Poppins-Regular',
	},
	bottomPadding: {
		height: 16,
	},
});