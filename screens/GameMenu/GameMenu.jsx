import React, {useState, useEffect}from 'react';
import { StyleSheet, TouchableOpacity, Text, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import BackgroundMain from '../../components/General/BackgroundMain';
import BackButton from '../../components/General/BackButton';
import ExplanationModal from '../../components/GameMenu/ExplanationModal';
import MenuItem from '../../components/GameMenu/MenuItem';
import items from './items';
import PlayersModal from '../../components/GameMenu/PlayersModal';
const numColumns = 2;

export default function GameMenu() {
    const [games, setGames] = useState(items);
    const [modalVisible, setModalVisible] = useState(false);
    const [playersModalVisible, setPlayersModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [loadAnimation, setLoadAnimation] = useState(false);



    const handleItemPress = (title, content) => {
      setModalTitle(title);
      setModalContent(content);
      setModalVisible(true);
    };
  
    const handleModalClose = () => {
      setModalVisible(false);
    };

    const handlePlayersModalClose = () => {
      setPlayersModalVisible(false);
    };

    let [fontsLoaded] = useFonts({
        'testicons': require('../../assets/fonts/testicons.ttf')
    });

    useEffect(() => {

        const timer = setTimeout(() => {
          setLoadAnimation(true);
        }, 1000); // Adjust the delay before starting the animations
    
        return () => clearTimeout(timer);
    }, []);
    return (
    <SafeAreaView style={styles.container}>

        <BackgroundMain/>
        {/* <BackButton/> */}
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{ padding: 5}}>
            <Ionicons name="chevron-back" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Juegos</Text>
          <TouchableOpacity onPress={()=>{setPlayersModalVisible(true)}} style={{ padding: 5}}>
            <FontAwesome name="users" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <FlatList
            data={games}
            renderItem={({ item, index }) => (
              <MenuItem
                item={item}
                index={index}
                handleItemPress={handleItemPress}
                loadAnimation={loadAnimation}

                fontsLoaded={fontsLoaded}
              /> 
            )}
            numColumns={numColumns}
            style={{    paddingHorizontal: 10,
                paddingBottom: 20,}}
        />
        <ExplanationModal
              isVisible={modalVisible}
              onClose={handleModalClose}
              title={modalTitle}
              content={modalContent}
        />
        <PlayersModal isVisible={playersModalVisible} onClose={handlePlayersModalClose} />
        {/* {Object.keys(glyphMap).slice(0, 30).map((icon, i) => (
            <View key={i}>
                <GameIcons name={icon} size={50} color="#fff" />
                <Text style={{color: "#fff"}}>{icon}</Text>
            </View>
        ))} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  innerContainer:{
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,

  },

});