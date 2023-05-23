import React, { useState, useEffect} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from "lottie-react-native";
import { useFonts, LilitaOne_400Regular } from '@expo-google-fonts/lilita-one';
import { ThemedButton } from "react-native-really-awesome-button";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Timer() {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(null);
  const [initialTime, setInitialTime] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [loop, setLoop] = useState(true);
  const soundObject = new Audio.Sound();

  const getTimeFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('time') * 60;
      if (value !== null) {
        setSeconds(Number(value));
        setInitialTime(Number(value));
      }
    } catch (e) {
      console.log(e);
    }
  }

  const [fontsLoaded] = useFonts({
    LilitaOne_400Regular,
  });
  useEffect(() => {
    getTimeFromStorage();
  }, []);

  const playSound = async () => {
    try {
      await soundObject.loadAsync(require('../../assets/sounds/ding.mp3'));
      await soundObject.playAsync();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (seconds !== null && seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0) { 
      setLoop(false);
      playSound();
      setShowButton(true);
    }
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const goBack = () => {
    navigation.navigate('InfiltrateCardsPart');
  }

  return (
    <View style={styles.container}>
      <LottieView  source={require('../../assets/animations/sandTime.json')} autoPlay loop={loop} style={{ width: 200}} />
      {seconds !== null && fontsLoaded && (
        <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      )}
      {showButton && (
        <ThemedButton 
          name="cartman"
          type="danger"
          style={styles.startAgainButton}
          before={<FontAwesome name="repeat" color="#fff" size={15} style={{marginRight:5}}/>}
          // borderColor="#6a87fc"
          // backgroundDarker="#365db7"
          borderColor="#f79824"
          backgroundDarker="#c57300"
          textColor="#fff"

          onPress={goBack}
        >
          Jugar de nuevo
        </ThemedButton>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: 250,
  },
  timerText: {
    fontSize: 60,
    color: "#fff",
    fontFamily: "LilitaOne_400Regular"
  },
  startAgainButton: {
    padding: 10,
    marginTop: 50,
  },
  buttonText: {
    color: '#fff'
  }
});

