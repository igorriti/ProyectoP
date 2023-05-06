import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DrinkModal from './DrinkModal';

const Timer = () => {
  const [seconds, setSeconds] = useState(300);
  const [running, setRunning] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleTimer = () => {
    setRunning(!running);
  };

  const resetTimer = () => {
    setSeconds(300);
  };

  useEffect(() => {
    if (running && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0) {
      setModalVisible(true);
      resetTimer();
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
      <TouchableOpacity style={styles.button} onPress={toggleTimer}>
        <Text style={styles.buttonText}>{running ? 'Stop' : 'Play'}</Text>
      </TouchableOpacity>
      <DrinkModal visible={modalVisible} setVisible={setModalVisible} />
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
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Timer;
