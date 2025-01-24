import { Drawer } from 'expo-router/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { Slot } from 'expo-router';
import 'react-native-gesture-handler';
import Sidebar from './components/Sidebar';

// Prevent cyclic dependency warnings
LogBox.ignoreLogs(['Require cycle:', 'Sending']);

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<PaperProvider>
				<Drawer
					screenOptions={{
						headerShown: false,
						drawerStyle: { width: '75%' },
						swipeEnabled: true,
						swipeEdgeWidth: 100,
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
					<Drawer.Screen
						name="index"
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