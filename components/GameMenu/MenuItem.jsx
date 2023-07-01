import { View, Text,Animated,TouchableOpacity,StyleSheet} from 'react-native'
import React, {useEffect} from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';

export default function MenuItem({ item, index, handleItemPress, loadAnimation, fontsLoaded,  setPlayersModalVisible }) {
    const translateY = new Animated.Value(-50);
    const opacity = new Animated.Value(0);
    const initialDelay = 290;
    const navigation = useNavigation();

    const isExpired = (timestamp) => {
      const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      const now = new Date().getTime();
      const difference = now - parseInt(timestamp, 10);
    
      return difference >= oneDay;
    };

    const onPress = async () => {
      if(item.id == 5) {
        try {
          const timestamp = await AsyncStorage.getItem("timestamp");
          if (!timestamp || isExpired(timestamp)) {
            // If timestamp is not set or it's expired, we don't fetch players
            //Delete all players
            await AsyncStorage.removeItem('players');
            await AsyncStorage.removeItem('timestamp');
            setPlayersModalVisible(true);
            return;
          } 
          const value = await AsyncStorage.getItem('players');
          if (value !== null) {
            const players = JSON.parse(value);
            if (players.length >= 3) {
              navigation.navigate(item.screen,{
                name : item.name,
                description: item.description,
              });
            } else {
              setPlayersModalVisible(true);
            }
          } else {
            setPlayersModalVisible(true);
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        navigation.navigate(item.screen,{
          name : item.name,
          description: item.description,
        });
      }
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
    width: 150,
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