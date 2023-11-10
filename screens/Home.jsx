import React, { useRef, useEffect,useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedButton as OriginalThemedButton } from "react-native-really-awesome-button";
const ThemedButton = React.memo(OriginalThemedButton); //REVISAR ESTO
import { useFonts } from '@expo-google-fonts/lilita-one';
import LottieView from 'lottie-react-native';
import ProyectoP from '../assets/animations/ProyectoP.json';
import particleswhite from '../assets/animations/particleswhite.json';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cooper from '../assets/fonts/COOPBL.ttf';

export default function Home() {
  const navigation = useNavigation();
  const textOpacity = useRef(new Animated.Value(0)).current;
  const button1Opacity = useRef(new Animated.Value(0)).current;
  const button1TranslateY = useRef(new Animated.Value(40)).current;
  const frankyTranslateX = useRef(new Animated.Value(-3020)).current; // Adjust this value


  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('onboardingCompleted');
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.error("Error fetching 'onboardingCompleted'", error);
    }
    return false;
  };
  


  const handlePlayButton = async () => {
    const hasSeenOnboarding = await checkOnboarding();
    if (!hasSeenOnboarding) {
      navigation.navigate("OnBoardingScreen");
    } else {
      navigation.navigate("GameMenu");
    }
  };
  // const animateFranky = () => {
  //   // Reset position to the start
  //   frankyTranslateX.setValue(-200); 

  //   // Animate to the end
  //   Animated.timing(frankyTranslateX, {
  //     toValue: 400,  // assuming 400 is off the right screen
  //     duration: 6000,  // duration of the animation
  //     useNativeDriver: true
  //   }).start(() => {
  //     if (hallo === "franky") {
  //       setHallo("vampi");
  //     } else {
  //       setHallo("franky");
  //     }

  //   });
  // }

  useEffect(() => {
    // Animate text opacity
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      // Once the text animation is done, start the button animations
      Animated.parallel([
        Animated.timing(button1Opacity, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.timing(button1TranslateY, {
          toValue: 0,
          duration: 2500,
          useNativeDriver: true,
        }),
      ]).start();
    });
 
  }, []);
  

  const [fontsLoaded] = useFonts({
    'Cooper-Black': Cooper,
  });

  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <SafeAreaView style={styles.container}>

      <Animated.View style={[styles.animationContainer, {opacity: textOpacity}]}>
        <LottieView
          style={styles.lottieBackground}
          autoPlay
          source={particleswhite}
          loop={true}
        />
      </Animated.View>

      
      <View style={styles.titleContainer}>
          <Animated.Text
            style={[styles.text, { opacity: textOpacity }]}
          >
            Proyecto
          </Animated.Text>
          <Animated.View style={styles.animationTransform}  >
            <LottieView
              style={styles.lottieView}
              source={ProyectoP}
              autoPlay
              loop={false}
              cacheStrategy='strong'
              onAnimationFinish={() => setIsAnimationLoaded(true)} // Add this line

            />
          </Animated.View>
        {/* </Animated.View> */}
      </View>
      {isAnimationLoaded && 
            <>
              <ThemedButton  name="bruce" type="secondary" style={{marginTop:100, opacity: button1Opacity, transform: [{ translateY: button1TranslateY},{scale:0.95}]}}  onPress={handlePlayButton}>Jugar</ThemedButton>
              {/* <ThemedButton  name="bruce" type="secondary" style={[styles.button,{opacity: button2Opacity, transform: [{ translateY: button2TranslateY }]}]} onPress={()=>navigation.navigate("Drinks")}>Tragos</ThemedButton> */}

            </>

      }
      {/* <ThemedButton  name="bruce" type="secondary" style={styles.button}>Opciones</ThemedButton> */}
      {/* <Footer/> */}

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  titleContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  animationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationTransform: {
    transform: [
      { scale: 1.3},
    ],
  },

  lottieView: {
    width: 300,
    backgroundColor: 'transparent',
  },
  lottieBackground: {
    width: 400,
    height: 700,
    
    transform: [ { rotate: '90deg' }, { scale: 1.05 }],
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: 'Cooper-Black',
    fontSize: 60,
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  // franky: {
  //   width: 150,
  //   height: 150,
  //   backgroundColor: 'transparent',
  // },
});
