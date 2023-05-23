// BadFriendsMode.js
import React, { useState } from 'react';
import cartas from '../assets/cards/5seconds';
import SwipableCards from '../components/General/SwipableCards';
import DrinkModal from '../components/General/DrinkModal';

export default function FiveSecondsMode() {
    const [cards, setCards] = useState((data) => {
        return cartas.sort(() => Math.random() - 0.5);
      });
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
      setModalVisible(true);
    }
  
    return (
      <>
        <SwipableCards cards={cards} setCards={setCards} type="fivesecondsmode" renderAdditionalComponent={showModal} />
        <DrinkModal isVisible={modalVisible} setVisible={setModalVisible} />
      </>
    );
}