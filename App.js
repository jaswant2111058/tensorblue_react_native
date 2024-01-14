import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home';
import BottomNavBar from './src/components/bottomNavBar';
const Stack = createStackNavigator();


export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="BottomNav" component={BottomNavBar} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}