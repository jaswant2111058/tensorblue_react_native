import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home';
import Profile from './src/pages/profile'
const Stack = createStackNavigator();


export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}