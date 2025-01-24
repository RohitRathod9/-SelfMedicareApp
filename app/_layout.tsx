import { Drawer } from 'expo-router/drawer';
import { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import Sidebar from './components/Sidebar';

// Prevent cyclic dependency warnings
LogBox.ignoreLogs(['Require cycle:']);

// Ensure splash screen stays visible
SplashScreen.preventAutoHideAsync().catch(() => {
	/* reloading the app might trigger some race conditions, ignore them */
});

export default function RootLayout() {
	useEffect(() => {
		async function prepare() {
			try {
				// Pre-load fonts, make any API calls you need to do here
				await Promise.all([
					// Your font loading or other initialization logic here
				]);
			} catch (e) {
				console.warn(e);
			} finally {
				await SplashScreen.hideAsync();
			}
		}

		prepare();
	}, []);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<PaperProvider>
				<Drawer
					screenOptions={{
						headerShown: false,
						drawerStyle: { width: '75%' },
					}}
					drawerContent={(props) => <Sidebar {...props} />}
				>
					<Drawer.Screen
						name="(tabs)"
						options={{
							headerShown: false,
							drawerItemStyle: { display: 'none' },
						}}
					/>
					<Drawer.Screen
						name="(drawer)"
						options={{
							headerShown: false,
							drawerItemStyle: { display: 'none' },
						}}
					/>
				</Drawer>
			</PaperProvider>
		</GestureHandlerRootView>
	);
}