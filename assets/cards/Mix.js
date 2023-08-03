import Cards from "./Cards";
import BadFriends from "./BadFriends";
import Truth from "./Truth";
import NeverHaveIEver from "./NeverHaveIEver";

function fisherYatesShuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}
  
let allCards = [...Cards, ...BadFriends, ...Truth, ...NeverHaveIEver];
allCards = fisherYatesShuffle(allCards);
export default allCards;
