import React, { useRef, useEffect,useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedButton as OriginalThemedButton } from "react-native-really-awesome-button";
const ThemedButton = React.memo(OriginalThemedButton); //REVISAR ESTO
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import LottieView from 'lottie-react-native';
import staticCup from '../assets/animations/staticCup.json';
import particleswhite from '../assets/animations/particleswhite.json';

export default function Home() {
  const navigation = useNavigation();
  const textOpacity = useRef(new Animated.Value(0)).current;
  const button1Opacity = useRef(new Animated.Value(0)).current;
  const button2Opacity = useRef(new Animated.Value(0)).current
  const button1TranslateY = useRef(new Animated.Value(20)).current;
  const button2TranslateY = useRef(new Animated.Value(20)).current;
  const cupRotation = useRef(new Animated.Value(0)).current;

  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
  const onLongPressButton1 = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(cupRotation, {
          toValue: 45,
          duration: 500, // Adjust the duration of the rotation animation
          useNativeDriver: true,
        }),
        Animated.timing(cupRotation, {
          toValue: -45,
          duration: 1000, // Adjust the duration of the rotation animation
          useNativeDriver: true,
        }),
        Animated.timing(cupRotation, {
          toValue: 0,
          duration: 500, // Adjust the duration of the rotation animation
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 1, // You can adjust the number of times the sequence will be repeated
      }
    ).start();
  };
  
  useEffect(() => {

    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.sequence([
      Animated.parallel([
      Animated.timing(button1Opacity, {
        toValue: 1,
        duration: 500, // Adjust the duration of the button animation
        useNativeDriver: true,
        delay: 1000, // Adjust the delay to start the button animation after the text animation
      }),
      Animated.timing(button1TranslateY, {
        toValue: 0,
        duration: 500, // Adjust the duration of the button animation
        useNativeDriver: true,
      }),
      ]),
      Animated.parallel([
        Animated.timing(button2Opacity, {
          toValue: 1,
          duration: 500, // Adjust the duration of the button animation
          useNativeDriver: true,
        }),
        Animated.timing(button2TranslateY, {
          toValue: 0,
          duration: 500, // Adjust the duration of the button animation
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [textOpacity]);

  const [fontsLoaded] = useFonts({
    LilitaOne_400Regular,
  });

  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>

      <Animated.View style={[styles.animationContainer, {opacity: textOpacity}]}>
        <LottieView
          style={styles.lottieBackground}
          autoPlay
          source={particleswhite}
          loop={true}
        />
      </Animated.View>
      <View style={styles.animationContainer}>
        <Animated.View style={styles.animationTransform}>
          <LottieView
            style={styles.lottieView}
            source={staticCup}
            autoPlay
            loop={false}
            cacheStrategy='strong'
            onAnimationFinish={() => setIsAnimationLoaded(true)} // Add this line

          />
        </Animated.View>
      </View>
      <View style={styles.animationContainer}>
        <Animated.View style={styles.textTransform}>
          <Animated.Text
            style={[styles.text, { opacity: textOpacity }]}
            numberOfLines={2}
          >
            VASO{'\n'}POLACO
          </Animated.Text>
        </Animated.View>
      </View>
      {isAnimationLoaded && 
            <>
              <ThemedButton  name="bruce" type="secondary" style={[styles.button,{opacity: button1Opacity, transform: [{ translateY: button1TranslateY }]}]} onPress={()=>navigation.navigate("GameMenu")}>Iniciar Juego</ThemedButton>
              <ThemedButton  name="bruce" type="secondary" style={[styles.button,{opacity: button2Opacity, transform: [{ translateY: button2TranslateY }]}]}>Opciones</ThemedButton>

            </>

      }
      {/* <ThemedButton  name="bruce" type="secondary" style={styles.button}>Opciones</ThemedButton> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
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
      { translateX: -100 },
      { translateY: -200 },
      { scale: 0.65 },
    ],
  },
  textTransform: {
    transform: [
      { translateX: 50 },
      { translateY: -200 },
    ],
  },
  lottieView: {
    width: 500,
    height: 500,
    backgroundColor: 'transparent',
  },
  lottieBackground: {
    width: 400,
    height: 700,
    //Flip the animation horizontally
    
    transform: [ { rotate: '90deg' }, { scale: 1.05 }],
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: 'LilitaOne_400Regular',
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    marginTop: 50,
  },
});
