// ClassicMode.js
import React, {useState} from 'react';
import cartas from '../assets/cards/Cards';
import SwipableCards from '../components/General/SwipableCards';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/General/BackButton';
export default function ClassicMode() {
  const [cards, setCards] = useState((data) => {
    return cartas.sort(() => Math.random() - 0.5);
  });

  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#000"}}>
      <BackButton/>
      <SwipableCards cards={cards} setCards={setCards} type="classic" />
    </SafeAreaView>
  );
}
