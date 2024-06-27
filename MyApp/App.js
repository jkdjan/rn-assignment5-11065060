import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native';
import SettingsScreen from './Screens/SettingsScreen'
import HomeScreen from './Screens/HomeScreen'
import { ThemeProvider, ThemeContext } from './ThemeContext';

const Stack = createStackNavigator()

export default function App() {
  return (
    <>
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>        
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
