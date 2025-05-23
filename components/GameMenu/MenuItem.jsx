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
      if(item.id == 4 || item.id == 7) {
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
          <TouchableOpacity style={item.name === 'Proximamente' ? styles.comingSoonItem : styles.item} 
            onPress={item.name === 'Proximamente' ? () => {} : onPress}
            onLongPress={item.name === 'Proximamente' ? () => {} : onLongPress}
            >
              {/* Render "New" banner if item has a 'new' attribute */}
              {item.new && (
                <View style={styles.newBanner}>
                  <Text style={styles.newBannerText}>Nuevo!</Text>
                </View>
              )}
              {!fontsLoaded ? (
                  <AntDesign name="loading2" size={50} color="#fff" />
              ) : item.name === 'Proximamente' ? (
                  <Text style={styles.comingSoonText}>Proximamente...</Text>
              ) : item.name !== 'Proximamente'&&(
                  <>  
                      
                      {item.icon}
                      <Text style={styles.itemText}>{item.name}</Text>
                  </>
              )}
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
  comingSoonItem: {
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    width: "100%",
    height: 150,
    borderRadius: 15,
    borderColor: '#fff',
  },
  comingSoonText: {
      color: '#aaa',
      fontSize: 15,
      textAlign: 'center',
      fontStyle: 'italic',
  },
  newBanner: {
    position: 'absolute',
    top: 0,
    right: -10,
    backgroundColor: 'red',
    padding: 5,
    width: 70,
    height: 40, // Add height equal to width to make it round
    borderRadius: 30, // Half of width and height
    borderWidth: 3,  // Spike thickness
    borderColor: '#fff', // Spike color
    transform: [{ rotate: '35deg' }],
    zIndex: 1,
    justifyContent: 'center', // Center text horizontally
    alignItems: 'center', // Center text vertically
  },
  newBannerText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});