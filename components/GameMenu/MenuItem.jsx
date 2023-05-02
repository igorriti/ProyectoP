import { View, Text,Animated,TouchableOpacity,StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MenuItem({ item, index, handleItemPress, loadAnimation, fontsLoaded }) {
    const translateY = new Animated.Value(-50);
    const opacity = new Animated.Value(0);
    const initialDelay = 290;
    const navigation = useNavigation();

    const onPress = () => {
      //navigate to classicMode screen
      navigation.navigate(item.screen);
    };
    const onLongPress = () => {
      handleItemPress(item.name, item.description);
    };
    
    const itemStyle = {
      transform: [{ translateY }],
      opacity,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      margin: 10,
    };
    useEffect(() => {
      if (loadAnimation) {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          delay: initialDelay + 200 * index,
          useNativeDriver: true,
        }).start();
  
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          delay: initialDelay + 200 * index,
          useNativeDriver: true,
        }).start();
      }
    }, [loadAnimation]);

    return (
      <Animated.View style={itemStyle}>
        <TouchableOpacity style={styles.item} onLongPress={onLongPress} onPress={onPress}>
          {!fontsLoaded ? (
            <AntDesign name="loading2" size={50} color="#fff" />
          ) : (
            item.icon
          )}
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    height: 150,
    width: "100%",
    borderRadius: 15,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#fff',
  },
  itemText: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
});