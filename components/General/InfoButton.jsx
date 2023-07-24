import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


export default function InfoButton({onPress}) {

    const handlePress = () => {
        onPress();
    };
    return (
      <TouchableOpacity onPress={handlePress} style={styles.backButton}>
        <Ionicons name="ios-information-circle-outline" size={30} color="white" />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    backButton: {
      position: 'absolute',
      top: 30,
      right: 10,
      zIndex: 40,
      padding: 5,
    },
  });