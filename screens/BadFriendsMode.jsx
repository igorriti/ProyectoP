// BadFriendsMode.js
import React, { useEffect, useState } from 'react';
import cartas from '../assets/cards/BadFriends';
import SwipableCards from '../components/General/SwipableCards';
import CountdownModal from '../components/General/CountdownModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/General/BackButton';
import ExplanationModal from '../components/General/ExplanationModal';
import InfoButton from '../components/General/InfoButton';

export default function BadFriendsMode({route}) {
    const [cards, setCards] = useState((data) => {
        return cartas.sort(() => Math.random() - 0.5);
    });
    const [ModalVisible, setModalVisible] = useState(false);
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

        <SwipableCards cards={cards} setCards={setCards} type="badfriends" renderAdditionalComponent={showModal}  />
        <CountdownModal isVisible={ModalVisible} setVisible={setModalVisible} />
        <ExplanationModal isVisible={explanationModalVisible} onClose={()=>setExplanationModalVisible(false)} title={name} content={infoText}/>

      </SafeAreaView>
    );
}