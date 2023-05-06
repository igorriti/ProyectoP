// BadFriendsMode.js
import React, { useState } from 'react';
import cartas from '../assets/cards/5seconds';
import SwipableCards from '../components/General/SwipableCards';
import CountdownModal from '../components/General/CountdownModal';

export default function BadFriendsMode() {
    const [cards, setCards] = useState((data) => {
        return cartas.sort(() => Math.random() - 0.5);
      });
    const [ModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
      setModalVisible(true);
    }
  
    return (
      <>
        <SwipableCards cards={cards} setCards={setCards} type="badfriends" renderAdditionalComponent={showModal} />
        <CountdownModal isVisible={ModalVisible} setVisible={setModalVisible} />
      </>
    );
}