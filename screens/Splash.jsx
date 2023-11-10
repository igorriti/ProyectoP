import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { Audio } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProyectoPStatic from '../assets/animations/ProyectoPStatic.json';
import Cooper from '../assets/fonts/COOPBL.ttf';
import { useFonts } from '@expo-google-fonts/lilita-one';

export default function Splash({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(200)).current; // Start off-screen at the bottom
  const scale = useRef(new Animated.Value(1.8)).current; // Start with a larger scale
  const [fontsLoaded] = useFonts({
    'Cooper-Black': Cooper,
  });
  const playSound = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../assets/sounds/appear.mp3'));
      await soundObject.playAsync();
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };
  
  useEffect(() => {
    playSound();
    Animated.sequence([
      // Perform animations in parallel
      Animated.parallel([
        // Fade in animation
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        // Move from the bottom to the final Y position
        Animated.timing(translateY, {
          fromValue: 500,  // Initial position at the bottom
          toValue: 0,      // Final position
          duration: 1000,
          useNativeDriver: true,
        }),
        // Scale from big size to the final size
        Animated.timing(scale, {
          fromValue: 3,  // Start with a big size
          toValue: 1.3,    // Final size
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(600),
    ]).start(() => {
      navigation.replace('Home');
    });
  }, [fadeAnim, navigation, translateY, scale]);
  
  // ...
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Animated.Text style={[styles.text]}>
          Proyecto
        </Animated.Text>
        <Animated.View
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: translateY }, { scale: scale }],
          }}
          sharedTransitionTag="tag"
          >
          <LottieView
            style={styles.lottieView}
            source={ProyectoPStatic}
            autoPlay
            loop={true}
            cacheStrategy='strong'
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
  




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  titleContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  text:{
    color: 'transparent',
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'Cooper-Black',
  },
  lottieView: {
    width: 300,
    backgroundColor: 'transparent',

  },
});
