import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: styles.tabBar,
				tabBarActiveTintColor: '#D4B895',
				tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.7)',
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: 'मुख्यपृष्ठ',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="disorders"
				options={{
					title: 'व्याधी',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="hospital-box" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="prakriti"
				options={{
					title: 'प्रकृती',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="account-heart" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="सल्ला"
				options={{
					title: 'Advice',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="message-text" size={24} color={color} />
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
	},
});