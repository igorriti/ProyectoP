// ClassicMode.js
import React, {useState} from 'react';
import cartas from '../assets/cards/Cards';
import SwipableCards from '../components/General/SwipableCards';

export default function ClassicMode() {
  const [cards, setCards] = useState((data) => {
    return cartas.sort(() => Math.random() - 0.5);
  });

  return (
    <SwipableCards cards={cards} setCards={setCards} type="classic" />
  );
}
