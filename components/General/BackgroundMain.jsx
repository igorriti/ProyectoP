import { View, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import particleswhite from '../../assets/animations/particleswhite.json';

export default function BackgroundMain() {
  return (
    <View style={[styles.animationContainer]}>
        <LottieView
        style={styles.lottieBackground}
        autoPlay
        source={particleswhite}
        loop={true}
        />
  </View>
  )
}

const styles = StyleSheet.create({
    animationContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
    lottieBackground: {
      width: 400,
      height: 700,
      //Flip the animation horizontally
      
      transform: [ { rotate: '90deg' }, { scale: 1.05 }],
      backgroundColor: 'transparent',
    },

});