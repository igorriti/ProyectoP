import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import Splash from './screens/Splash';
import Home from './screens/Home';
import GameMenu from './screens/GameMenu/GameMenu';

import ClassicMode from './screens/ClassicMode';
import BadFriendsMode from './screens/BadFriendsMode';
import FiveSecondsMode from './screens/FiveSecondsMode';
const Stack = createNativeStackNavigator();


export default function App() {
    const [fontsLoaded] = useFonts({
    'testicons': require('./assets/fonts/testicons.ttf'),
  });
  return (
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="GameMenu" >
          <Stack.Screen
            name="Splash"
            component={Splash}
          />
          <Stack.Screen name="Home" component={Home}  options={{ animation: "none"}}/>
          <Stack.Screen name="GameMenu" component={GameMenu}  options={{ animation: "default"}}/>
          <Stack.Screen name="ClassicMode" component={ClassicMode}  options={{ animation: "default"}}/>
          <Stack.Screen name="BadFriendsMode" component={BadFriendsMode}  options={{ animation: "default"}}/>
          <Stack.Screen name="FiveSecondsMode" component={FiveSecondsMode}  options={{ animation: "default"}}/>
        </Stack.Navigator>


    </NavigationContainer>

  );
}


