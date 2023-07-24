import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Gameicon from '../../components/General/Gameicon';
import palabras from '../../assets/cards/Infiltrate' 
import SwipableCards from '../../components/General/SwipableCards';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../../components/General/BackButton';
import ExplanationModal from '../../components/General/ExplanationModal';
import InfoButton from '../../components/General/InfoButton';

export default function InfiltrateCardsPart({route}) {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [firstTime, setFirstTime] = useState(true);
    const [words, setWords] = useState(palabras);
    const [infiltrates, setInfiltrates] = useState(1);
    const [players, setPlayers] = useState(1);
    const [playerIds, setPlayerIds] = useState([]);
    const [cards, setCards] = useState([]);
    const [infoText,setInfoText] = useState(route.params.description);
    const [name, setName] = useState(route.params.name);
    const [explanationModalVisible, setExplanationModalVisible] = useState(false);
  
    const shuffle = (p) => {
      // Randomly select infiltrate positions
      let arrInfiltrates, arrPlayerIds, intPlayers;
      if (p) {
         arrInfiltrates = p.infiltrates;
         arrPlayerIds = p.playerIds
         intPlayers = p.players;
      } else {
         arrInfiltrates = infiltrates;
         arrPlayerIds = playerIds
         intPlayers = players;
      }
      const infiltratePositions = [];

      for (let i = 0; i < arrInfiltrates; i++) {
        const randomIndex = Math.floor(Math.random() * arrPlayerIds.length);
        infiltratePositions.push(arrPlayerIds[randomIndex]);
        arrPlayerIds.splice(randomIndex, 1); // Remove selected index to avoid repeats
      }

      // Choose a random word for the cards
      const randomWord = words[Math.floor(Math.random() * words.length)];

      // Create cards
      const cards = Array.from({ length: intPlayers }, (_, i) => {
        // First letter to uppercase
        const description = infiltratePositions.includes(i) ? 'Infiltrado' : randomWord[0].toUpperCase() + randomWord.slice(1);
        const icon = infiltratePositions.includes(i) ? (
          <Gameicon name="testicons-spy" color="white" size={80} />
        ) : ( 
          <Gameicon name="testicons-abstract-037" color="white" size={80} />
        );
          
        return {
          id: i,
          description,
          icon,
        };
      });

      return cards;
    }

    useEffect(() => {
      const fetchSettings = async () => {
        const p = JSON.parse(await AsyncStorage.getItem('players')).length
        setPlayers(p);
        const i = JSON.parse(await AsyncStorage.getItem('infiltrates'))
        setInfiltrates(i);
        const pIds = (Array.from({ length: p }, (_, i) => i))
        setPlayerIds(pIds);
        setFirstTime(false);
        const cardsShuffled = shuffle({ infiltrates: i, playerIds: pIds, players: p});
        setCards(cardsShuffled);
      };

      fetchSettings();
    }, []);

    useEffect(() => {
      if (isFocused && !firstTime) {
        const cardsShuffled = shuffle();
        setCards(cardsShuffled);
      }
    }, [isFocused]);

    const advance = () => {
      // Advance to next screen
      navigation.navigate('InfiltrateTimePart',{
        name: name,
        description: infoText,
      });
    }

    return (
      <SafeAreaView style={{flex:1, backgroundColor: "#000"}}>
        <BackButton/>
        <InfoButton onPress={()=>setExplanationModalVisible(true)}/>

        <SwipableCards cards={cards} setCards={setCards}  type="infiltrate" renderAdditionalComponent={advance}/>
        <ExplanationModal isVisible={explanationModalVisible} onClose={()=>setExplanationModalVisible(false)} title={name} content={infoText}/>

      </SafeAreaView>
    );
}
