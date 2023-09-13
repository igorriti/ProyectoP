import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import beer from '../../assets/animations/wrong.json';
import boom from '../../assets/animations/boom.json';
export default function DrinkModal({ isVisible, setVisible, explosion}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const textFade = useRef(new Animated.Value(0)).current;
  const beerAnimRef = useRef(null);

  const handleTextFade = () => {
    Animated.sequence([
      Animated.timing(textFade, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),

      Animated.delay(1500),

    ]).start(() => {

    
      Animated.timing(textFade, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => setVisible(false));
    });
  };
  useEffect(() => {
    if (isVisible) {
      if (explosion) {
        // Play explosion animation first
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),

          Animated.delay(3000),

        ]).start(() => {

        
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => setVisible(false));
        });
      } else {
        // Play the other animation directly
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          Animated.delay(1000).start(() => {
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }).start(() => setVisible(false));
          });
        });
      }
    } else {
      fadeAnim.setValue(0);
    }
  }, [isVisible, fadeAnim, explosion, setVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.overlay}>
    <Animated.View style={[styles.modal, { opacity: fadeAnim }]}>


      <Animated.Text style={[styles.go, { opacity: explosion ? textFade : 1 }]}>Perdiste!</Animated.Text>
      <AnimatedLottieView
        ref={beerAnimRef}

        style={styles.lottieBackground}
        autoPlay={!explosion}
        source={beer}
        loop={false}
      
        
      />
      {explosion && (
        <AnimatedLottieView
          style={{ position: 'absolute', width: 1000, height: 1000 }}
          autoPlay
          source={boom}
          loop={false}
          onAnimationFinish={() =>  
            {
              if (beerAnimRef.current) {
                beerAnimRef.current.play();
                handleTextFade();
              }
            }
          }
        />
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
    flex: 1,
    zIndex: 10,

  },
  modal: {
    backgroundColor: 'rgba(0,0,0,0.91)',
    width: '100%',
    height: '100%',
    flex: 1,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  go: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
  },
  lottieBackground: {
    width: 200,

  },
});
