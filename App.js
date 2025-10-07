import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import ColorScreen from "./src/screens/ColorScreen";
import ScreenSquare from './src/screens/ScreenSquare';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Component" component={ComponentsScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Square" component={ScreenSquare} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}