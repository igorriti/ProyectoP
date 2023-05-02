import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExplanationModal({ isVisible, onClose, title, content }) {
  const [modalAnimValue] = useState(new Animated.Value(0));



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
    } else {
      animateModal(0);
    }
  }, [isVisible]);

  if (!isVisible && modalOpacity.__getValue() === 0) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.modal, modalStyle]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Ionicons
          name="ios-close-outline"
          size={30}
          color="#666"
          onPress={handleClose}
          style={styles.closeButton}
        />
      </Animated.View>
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
    marginTop: 10,
  },
  content: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'justify',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
