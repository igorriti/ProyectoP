import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function BackButton() {
    const navigation = useNavigation();

    const handleBackPress = () => {
      navigation.goBack();
    };
  
    return (
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Ionicons name="chevron-back" size={30} color="white" />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    backButton: {
      position: 'absolute',
      top: 30,
      left: 10,
      zIndex: 40,
      padding: 5,
    },
  });
  