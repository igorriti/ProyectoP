import React, {useState, useEffect}from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import BackgroundMain from '../../components/General/BackgroundMain';
import BackButton from '../../components/General/BackButton';
import ExplanationModal from '../../components/GameMenu/ExplanationModal';
import MenuItem from '../../components/GameMenu/MenuItem';
import items from './items';
const numColumns = 2;

export default function GameMenu() {
    const [games, setGames] = useState(items);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');
    const [loadAnimation, setLoadAnimation] = useState(false);

    useEffect(() => {

      const timer = setTimeout(() => {
        setLoadAnimation(true);
      }, 100); // Adjust the delay before starting the animations
  
      return () => clearTimeout(timer);
    }, []);

    const handleItemPress = (title, content) => {
      setModalTitle(title);
      setModalContent(content);
      setModalVisible(true);
    };
  
    const handleModalClose = () => {
      setModalVisible(false);
    };

    let [fontsLoaded] = useFonts({
        'testicons': require('../../assets/fonts/testicons.ttf')
      });

    return (
    <SafeAreaView style={styles.container}>
        <BackButton/>
        <BackgroundMain/>
        <Text style={styles.title}>Juegos</Text>
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
    marginBottom: 20,
    backgroundColor: 'transparent',
  },

});