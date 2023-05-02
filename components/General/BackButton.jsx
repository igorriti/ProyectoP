import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function BackButton() {
    const navigation = useNavigation();

    const handleBackPress = () => {
      navigation.goBack();
    };
  
    return (
      <SafeAreaView style={{position:'absolute', height: "100%"}}>
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Ionicons name="chevron-back" size={30} color="white" />
      </TouchableOpacity>
      </SafeAreaView>

    );
}
const styles = StyleSheet.create({

    backButton: {
      position: 'absolute',
      top: 15,
      left: 10,
      zIndex: 10,
      padding: 5,
    },
    // ... other styles
  });
  