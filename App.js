import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/home';
import Profile from './src/pages/profile'
import Report from './src/pages/report'
import Notification from './src/pages/notification'
const Stack = createStackNavigator();
import { DataProvider } from './src/apiHooks/api';


export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Report" component={Report} options={{ headerShown: false }} />
          <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}