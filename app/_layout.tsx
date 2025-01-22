import { Drawer } from 'expo-router/drawer';
import { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import Sidebar from './components/Sidebar';
import { LogBox, View } from 'react-native';

// Ignore specific warnings that might affect the UI but not functionality
LogBox.ignoreLogs([
	'Non-serializable values were found in the navigation state',
]);

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync().catch(() => {
	/* ignore error */
});

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
		'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
		'Sanskrit': require('../assets/fonts/NotoSansDevanagari-Regular.ttf'),
		'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
		'Amita-Bold': require('../assets/fonts/Amita-Bold.ttf'),
	});

	useEffect(() => {
		async function prepare() {
			try {
				// Pre-load fonts, make any API calls you need to do here
				await Promise.all([]);
			} catch (e) {
				console.warn('Error loading resources:', e);
			} finally {
				// Tell the application to render
				if (fontsLoaded) {
					try {
						await SplashScreen.hideAsync();
					} catch (e) {
						console.warn('Error hiding splash screen:', e);
					}
				}
			}
		}

		prepare();
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, backgroundColor: '#0B3B2D' }} />
		);
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<PaperProvider>
				<Drawer
					screenOptions={{
						headerShown: false,
						drawerStyle: { width: '75%' },
						lazy: true,
						swipeEnabled: true,
						swipeMinDistance: 40
					}}
					drawerContent={(props) => <Sidebar {...props} />}
				>
					<Drawer.Screen
						name="index"
						options={{
							headerShown: false,
							drawerItemStyle: { display: 'none' },
							swipeEnabled: false
						}}
					/>
					<Drawer.Screen
						name="home"
						options={{
							headerShown: false,
							drawerItemStyle: { display: 'none' },
							swipeEnabled: false
						}}
					/>
					<Drawer.Screen
						name="(tabs)"
						options={{
							headerShown: false,
							drawerItemStyle: { display: 'none' }
						}}
					/>
					<Drawer.Screen
						name="(drawer)"
						options={{
							headerShown: false,
							drawerItemStyle: { display: 'none' }
						}}
					/>
				</Drawer>
			</PaperProvider>
		</GestureHandlerRootView>
	);
}