import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Splash from './screens/Splash';
import Home from './screens/Home';
import GameMenu from './screens/GameMenu/GameMenu';

import Drinks from './screens/Drinks/Drinks';
import DrinkDetails from './screens/Drinks/DrinkDetails';

import ClassicMode from './screens/ClassicMode';
import BadFriendsMode from './screens/BadFriendsMode';
import FiveSecondsMode from './screens/FiveSecondsMode';
import RuRoulette from './screens/RuRoulette';
import InfiltrateMode from './screens/Infiltrate/InfiltrateMode';
import InfiltrateCardsPart from './screens/Infiltrate/InfiltrateCardsPart';
import InfiltrateTimePart from './screens/Infiltrate/InfiltrateTimePart';
import HorseRacing from './screens/HorseRacing';
import Fulvo from './screens/Fulvo';
const Stack = createNativeStackNavigator();


export default function App() {
    const [fontsLoaded] = useFonts({
    'testicons': require('./assets/fonts/testicons.ttf'),
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar style="light" backgroundColor="black" />

    <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Home" >
          <Stack.Screen
            name="Splash" 
            component={Splash}
          />
          <Stack.Screen name="Home" component={Home}  options={{ animation: "none"}}/>
          <Stack.Screen name="Drinks" component={Drinks}  options={{ animation: "default"}}/>
          <Stack.Screen name="DrinkDetails" component={DrinkDetails}  options={{ animation: "default"}}/>

          <Stack.Screen name="GameMenu" component={GameMenu}  options={{ animation: "default"}}/>
          <Stack.Screen name="ClassicMode" component={ClassicMode}  options={{ animation: "default"}}/>
          <Stack.Screen name="BadFriendsMode" component={BadFriendsMode}  options={{ animation: "default"}}/>
          <Stack.Screen name="FiveSecondsMode" component={FiveSecondsMode}  options={{ animation: "default"}}/>
          <Stack.Screen name="RuRoulette" component={RuRoulette}  options={{ animation: "default"}}/>
          <Stack.Screen name="Infiltrate" component={InfiltrateMode}  options={{ animation: "default"}}/>
            <Stack.Screen name="InfiltrateCardsPart" component={InfiltrateCardsPart}  options={{ animation: "default"}}/>
            <Stack.Screen name="InfiltrateTimePart" component={InfiltrateTimePart}  options={{ animation: "default"}}/>
          {/* ACA VA EL VERDAD O SHOT Y EL YO NUNCA NUNCA */}
          <Stack.Screen name="HorseRacing" component={HorseRacing}  options={{ animation: "none"}}/>
          <Stack.Screen name="Fulvo" component={Fulvo}  options={{ animation: "none"}}/>
        </Stack.Navigator>


    </NavigationContainer>
    </GestureHandlerRootView>

  );
}


