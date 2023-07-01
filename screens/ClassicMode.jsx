// ClassicMode.js
import React, {useState} from 'react';
import cartas from '../assets/cards/Cards';
import SwipableCards from '../components/General/SwipableCards';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/General/BackButton';
import ExplanationModal from '../components/General/ExplanationModal';
import InfoButton from '../components/General/InfoButton';

export default function ClassicMode({route}) {
  const [cards, setCards] = useState((data) => {
    return cartas.sort(() => Math.random() - 0.5);
  });
  const [infoText,setInfoText] = useState(route.params.description);
  const [name, setName] = useState(route.params.name);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#000"}}>
      <BackButton/>
      <InfoButton onPress={()=>setModalVisible(true)}/>
      <SwipableCards cards={cards} setCards={setCards} type="classic" />
      <ExplanationModal isVisible={modalVisible} onClose={()=>setModalVisible(false)} title={name} content={infoText}/>

    </SafeAreaView>
  );
}
