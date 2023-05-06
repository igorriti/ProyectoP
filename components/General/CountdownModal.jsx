import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Audio } from 'expo-av';
import AnimatedLottieView from 'lottie-react-native';
import circle from '../../assets/animations/circle.json';
export default function CountdownModal({ isVisible, setVisible, delay = 500 }) {
  const [countdown, setCountdown] = useState(4);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const playSound = async () => {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(require('../../assets/sounds/countdown.mp3'));
      await sound.playAsync();
    } catch (error) {
      console.log('Error loading or playing sound:', error);
    }
  };

  useEffect(() => {
    if (isVisible) {
      const initialTimer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
        playSound(); // Play sound only when 3 appears
        Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }).start(); 
      }, 100);
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      return () => {
        clearTimeout(initialTimer);
        clearInterval(timer);
      };
    } else {
      setCountdown(4);
      fadeAnim.setValue(0);
    }
  }, [isVisible, delay]);

  useEffect(() => {
    if (countdown === 0) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, // Adjust this value for a smoother disappearing animation
        delay: 1500, // Adjust this value for a smoother disappearing animation
        useNativeDriver: true,
      }).start(() => {
        setVisible(false);
        setCountdown(4); // Reset the countdown
      });
    }
  }, [countdown, fadeAnim]);

  if (!isVisible || countdown === 4) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.modal, { opacity: fadeAnim }]}>
      <AnimatedLottieView
            style={styles.lottieBackground}
            autoPlay
            source={circle}
            loop={true}
        />
        {countdown > 0 ? (
          <Text style={styles.countdown}>{countdown}</Text>
        ) : (
          <Text style={styles.go}>YA!</Text>
        )}

      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modal: {
        backgroundColor: 'transparent',
        backgroundColor: 'rgba(0,0,0,0.91)',

        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    countdown: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
    },
    go: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
    },
    lottieBackground: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    }
});
