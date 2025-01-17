import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

export default function DrawerLayout() {
  const router = useRouter();

  const handleBack = () => {
    // Force direct navigation to home, clearing the stack
    router.navigate('/(tabs)/home');
  };

  return (
    <Stack
      screenOptions={{
        headerLeft: () => (
          <Pressable onPress={handleBack}>
            <FontAwesome name="arrow-left" size={20} style={{ marginLeft: 15 }} />
          </Pressable>
        ),
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        gestureEnabled: false,
        animation: 'none',
        // Prevent screen stacking
        presentation: 'containedModal',
      }}
    >
      <Stack.Screen 
        name="meditation" 
        options={{ 
          title: "Meditation",
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="yoga" 
        options={{ 
          title: "Yoga",
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="exercise" 
        options={{ 
          title: "Exercise",
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="books" 
        options={{ 
          title: "Ancient Books",
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="privacy" 
        options={{ 
          title: "Privacy Policy",
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="diet-hygiene" 
        options={{ 
          title: "Diet & Hygiene",
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="importance" 
        options={{ 
          title: "Importance of Ayurveda",
          headerShown: false,
        }} 
      />
    </Stack>
  );
} 