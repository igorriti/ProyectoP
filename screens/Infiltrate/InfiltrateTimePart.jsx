import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Timer from '../../components/Infiltrate/Timer'; // Replace with your path to Timer component
import BackButton from '../../components/General/BackButton';
import BackgroundMain from '../../components/General/BackgroundMain';
import ExplanationModal from '../../components/General/ExplanationModal';
import InfoButton from '../../components/General/InfoButton';

export default function InfiltrateTimePart({route})  {
    const [randomPlayer, setRandomPlayer] = useState('');
    const [infoText,setInfoText] = useState(route.params.description);
    const [name, setName] = useState(route.params.name);
    const [explanationModalVisible, setExplanationModalVisible] = useState(false);
      
    useEffect(() => {
        getRandomPlayer();
    }, []);

    const getRandomPlayer = async () => {
        try {
        const players = await AsyncStorage.getItem('players'); 
        if (players !== null) {
            const playersArray = JSON.parse(players);
            const randomIndex = Math.floor(Math.random() * playersArray.length);
            setRandomPlayer(playersArray[randomIndex]);
        }
        } catch (e) {
        }
    }



  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <InfoButton onPress={()=>setExplanationModalVisible(true)}/>

      <BackgroundMain/>
      <Text style={styles.startingPlayerText}>La ronda comienza por {randomPlayer} </Text>
      <Timer action={route.shuffle} />
      <ExplanationModal isVisible={explanationModalVisible} onClose={()=>setExplanationModalVisible(false)} title={name} content={infoText}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#000"
  },
  startingPlayerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 100,
    marginBottom: 50,
    color: "#fff"
  }
});

