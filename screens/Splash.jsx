import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { Audio } from 'expo-av';

export default function Splash({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const playSound = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('../assets/sounds/Beer1.mp3'));
      await soundObject.playAsync();
    } catch (error) {
      console.log('Error playing sound:', error);
    }
  };
  
  useEffect(() => {

    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.delay(1000), // Delay the translation until the animation finishes
        Animated.timing(translateX, {
          toValue: -100, // Change this value based on your desired translation distance
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -200, // Change this value based on your desired translation distance
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.65, // Change this value based on your desired translation distance
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      navigation.replace('Home');
    });
  }, [fadeAnim, navigation, translateX, translateY]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            { translateX: translateX },
            { translateY: translateY },
            { scale: scale },
          ],
        }}
      >
        <LottieView
          autoPlay
          style={{
            width: 500,
            height: 500,
            backgroundColor: '#000',
          }}
          source={require('../assets/animations/splash.json')}
          loop={false}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
