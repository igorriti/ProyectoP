import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Splash from './screens/Splash';
import Home from './screens/Home';
import OnBoardingScreen from './screens/OnBoardingScreen/OnBoardingScreen';
import GameMenu from './screens/GameMenu/GameMenu';

// import Drinks from './screens/Drinks/Drinks';
// import DrinkDetails from './screens/Drinks/DrinkDetails';

import ClassicMode from './screens/ClassicMode';
import BadFriendsMode from './screens/BadFriendsMode';
import FiveSecondsMode from './screens/FiveSecondsMode';
// import RuRoulette from './screens/RuRoulette';
import InfiltrateMode from './screens/Infiltrate/InfiltrateMode';
import InfiltrateCardsPart from './screens/Infiltrate/InfiltrateCardsPart';
import InfiltrateTimePart from './screens/Infiltrate/InfiltrateTimePart';
import HorseRacing from './screens/HorseRacing';
import Fulvo from './screens/Fulvo';
import NeverMode from './screens/NeverMode';
import TruthOrShot from './screens/TruthOrShot';
import Mix from './screens/Mix';
import OooAaaMode from './screens/OooAaaMode';
const Stack = createNativeStackNavigator();


export default function App() {
    const [fontsLoaded] = useFonts({
    'testicons': require('./assets/fonts/testicons.ttf'),
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar style="light" backgroundColor="black" />

    <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Splash" >
          <Stack.Screen
            name="Splash" 
            component={Splash}
          />
          <Stack.Screen name="Home" component={Home}  options={{ animation: "none"}}/>
          {/* <Stack.Screen name="Drinks" component={Drinks}  options={{ animation: "default"}}/> */}
          {/* <Stack.Screen name="DrinkDetails" component={DrinkDetails}  options={{ animation: "default"}}/> */}
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen}  options={{ animation: "default"}}/>
          <Stack.Screen name="GameMenu" component={GameMenu}  options={{ animation: "default"}}/>
          <Stack.Screen name="ClassicMode" component={ClassicMode}  options={{ animation: "default"}}/>
          <Stack.Screen name="BadFriendsMode" component={BadFriendsMode}  options={{ animation: "default"}}/>
          <Stack.Screen name="FiveSecondsMode" component={FiveSecondsMode}  options={{ animation: "default"}}/>
          {/* <Stack.Screen name="RuRoulette" component={RuRoulette}  options={{ animation: "default"}}/> */}
          <Stack.Screen name="Infiltrate" component={InfiltrateMode}  options={{ animation: "default"}}/>
            <Stack.Screen name="InfiltrateCardsPart" component={InfiltrateCardsPart}  options={{ animation: "default"}}/>
            <Stack.Screen name="InfiltrateTimePart" component={InfiltrateTimePart}  options={{ animation: "default"}}/>
          <Stack.Screen name="TruthOrShot" component={TruthOrShot}  options={{ animation: "default"}}/>
          <Stack.Screen name="NeverMode" component={NeverMode} options={{ animation: "default"}}/>
          <Stack.Screen name="HorseRacing" component={HorseRacing}  options={{ animation: "default"}}/>
          <Stack.Screen name="Fulvo" component={Fulvo}  options={{ animation: "default"}}/>
          <Stack.Screen name="Mix" component={Mix}  options={{ animation: "default"}}/>
          <Stack.Screen name="OooAaaMode" component={OooAaaMode}  options={{ animation: "default"}}/>
        </Stack.Navigator>


    </NavigationContainer>
    </GestureHandlerRootView>

  );
}


