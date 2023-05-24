// BadFriendsMode.js
import React, { useState } from 'react';
import cartas from '../assets/cards/5seconds';
import SwipableCards from '../components/General/SwipableCards';
import DrinkModal from '../components/General/DrinkModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/General/BackButton';

export default function FiveSecondsMode() {
    const [cards, setCards] = useState((data) => {
        return cartas.sort(() => Math.random() - 0.5);
      });
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
      setModalVisible(true);
    }
  
    return (
      <SafeAreaView style={{flex:1, backgroundColor: "#000"}}>
        <BackButton/>
        <SwipableCards cards={cards} setCards={setCards} type="fivesecondsmode" renderAdditionalComponent={showModal} />
        <DrinkModal isVisible={modalVisible} setVisible={setModalVisible} />
      </SafeAreaView>
    );
}