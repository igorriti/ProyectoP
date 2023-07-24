import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Dimensions, StyleSheet, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default function Footer() {
  const animValue = useRef(new Animated.Value(0)).current;

  const marqueeText = 'Si tomas NO manejes' + ' '.repeat(90) + 'Si manejas NO tomes';

  const startAnimation = () => {
    // Reset the animation
    animValue.setValue(0);
    Animated.timing(animValue, {
      toValue: 1,
      duration: 15000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startAnimation());
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const translateX = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [marqueeText.length * 5.5, -marqueeText.length * 5.5], // Ajusta el valor según el ancho del texto
  });

  return (
    <View style={styles.footerContainer}>
      <Animated.Text
        numberOfLines={1}
        style={[
          styles.marqueeText,
          { transform: [{ translateX }] },
        ]}
      >
        {marqueeText}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: screenWidth,
    height: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    flexWrap: 'nowrap',

  },
  marqueeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'justify',
    width: 1000,
    fontStyle: 'italic',
    opacity: 0.9,
  },
});
