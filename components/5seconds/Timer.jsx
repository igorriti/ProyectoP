import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
const Timer = ({action}) => {
  const [seconds, setSeconds] = useState(5);
  const [running, setRunning] = useState(false);

  const toggleTimer = () => {
    if (running) {
      resetTimer(1000);
    }
    setRunning(!running);
  };

  const resetTimer = (delay) => {
    //Wait 2 second before reseting the timer
    setTimeout(() => {
      
      setSeconds(5);
    }, delay);
  };

  const playSound = async () => {
    const sound = new Audio.Sound();
    try {
      await sound.loadAsync(require('../../assets/sounds/wrongBuzzer.mp3'));
      await sound.playAsync();
    } catch (error) {
      console.log('Error loading or playing sound:', error);
    }
  };

  useEffect(() => {
    if (running && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0) {
      playSound();
      action()
      resetTimer(2500);
    }
  }, [running, seconds]);

  const displayTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{displayTime(seconds)}</Text>
      <TouchableOpacity style={[styles.button , {backgroundColor: running ? "#db1a37" : "#6a87fc"}] } onPressIn={()=>toggleTimer()}>
        
        <View style={styles.buttonText }>{running ? <Ionicons name="stop" size={30} color="white"/>  : <Ionicons name="play" size={30}  color="white"/> }</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  timer: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  button: {
    backgroundColor: '#6a87fc',
    padding: 10,
    borderRadius: 50,
    marginTop: 40,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,

  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Timer;
