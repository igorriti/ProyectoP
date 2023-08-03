import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, FlatList, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import {Ionicons } from '@expo/vector-icons';

export default function WinnersModal({ isVisible, winners, onClose }) {
  const [modalAnimValue] = useState(new Animated.Value(0));
  const [animationPlaying, setAnimationPlaying] = useState(true);
  const lottieRef = React.createRef();

  const modalOpacity = modalAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const modalScale = modalAnimValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const modalStyle = {
    opacity: modalOpacity,
    transform: [{ scale: modalScale }],
  };

  

  const onAnimationFinish = () => {
    setAnimationPlaying(false);
  };

  const animateModal = (toValue, callback) => {
    Animated.timing(modalAnimValue, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (callback) callback();
    });
  };

  const handleClose = () => {
    animateModal(0, onClose);
  };

  useEffect(() => {
    if (isVisible) {
      animateModal(1);
      if (lottieRef.current) {
        lottieRef.current.play();
      }
    } else {
      animateModal(0);
      if (lottieRef.current) {
        lottieRef.current.reset();
      }
      setAnimationPlaying(true);
    }
  }, [isVisible]);


  if (!isVisible && modalOpacity.__getValue() === 0) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.modal, modalStyle]}>
        <Text style={styles.title}>Ganadores</Text>
        <FlatList
          style={{width: "100%", maxHeight: 210}}
          data={winners}
          renderItem={({item, index}) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Ionicons name="checkmark-done" size={20} color="white" />
          <Text style={{color: "white"}}>Listo</Text>
        </TouchableOpacity>
      </Animated.View>
      {animationPlaying &&
        <LottieView
          ref={lottieRef}
          source={require('../../assets/animations/confetti.json')}
          loop={false}
          onAnimationFinish={onAnimationFinish}
          style={{flex: 1, position: 'absolute', top: 0, left: 0, transform: [  { scale: 1.3 }] }}
        />
      }
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    width: "100%",
    height: 50,
    justifyContent: 'center',
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    padding: 10,
  },
  closeButton: {
    backgroundColor: "#00b3a6",
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  closeButtonText: {
    color: "#fff",
  },
});
