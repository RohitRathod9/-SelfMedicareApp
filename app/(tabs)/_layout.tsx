import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: styles.tabBar,
				tabBarActiveTintColor: '#D4B895',
				tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
				tabBarShowLabel: true,
				tabBarLabelStyle: styles.tabLabel,
				tabBarItemStyle: styles.tabItem,
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }) => (
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons name="home" size={24} color={color} />
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="disorders"
				options={{
					title: 'Disorders',
					tabBarIcon: ({ color, size }) => (
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons name="hospital-box" size={24} color={color} />
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="prakriti"
				options={{
					title: 'Prakruti',
					tabBarIcon: ({ color, size }) => (
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons name="account-heart" size={24} color={color} />
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="advice"
				options={{
					title: 'Advice',
					tabBarIcon: ({ color, size }) => (
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons name="message-text" size={24} color={color} />
						</View>
					),
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		height: 65,
		backgroundColor: '#0B3B2D',
		borderTopWidth: 0,
		elevation: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: -2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		paddingTop: 8,
		paddingBottom: 8,
	},
	tabLabel: {
		fontFamily: 'Poppins-Regular',
		fontSize: 10,
		marginTop: 0,
		paddingTop: 0,
		lineHeight: 16,
	},
	tabItem: {
		height: 50,
		paddingTop: 6,
		paddingBottom: 6,
	},
	iconContainer: {
		height: 24,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 2,
	},
});