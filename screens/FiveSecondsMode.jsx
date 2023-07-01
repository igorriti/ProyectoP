// BadFriendsMode.js
import React, { useState } from 'react';
import cartas from '../assets/cards/5seconds';
import SwipableCards from '../components/General/SwipableCards';
import DrinkModal from '../components/General/DrinkModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/General/BackButton';
import ExplanationModal from '../components/General/ExplanationModal';
import InfoButton from '../components/General/InfoButton';

export default function FiveSecondsMode({route}) {
    const [cards, setCards] = useState((data) => {
        return cartas.sort(() => Math.random() - 0.5);
      });
    const [modalVisible, setModalVisible] = useState(false);
    const [infoText,setInfoText] = useState(route.params.description);
    const [name, setName] = useState(route.params.name);
    const [explanationModalVisible, setExplanationModalVisible] = useState(false);
    const showModal = () => {
      setModalVisible(true);
    }
  
    return (
      <SafeAreaView style={{flex:1, backgroundColor: "#000"}}>
        <BackButton/>
        <InfoButton onPress={()=>setExplanationModalVisible(true)}/>

        <SwipableCards cards={cards} setCards={setCards} type="fivesecondsmode" renderAdditionalComponent={showModal} />
        <DrinkModal isVisible={modalVisible} setVisible={setModalVisible} />
        <ExplanationModal isVisible={explanationModalVisible} onClose={()=>setExplanationModalVisible(false)} title={name} content={infoText}/>

      </SafeAreaView>
    );
}