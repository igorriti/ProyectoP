//I want to get the cards from 5Seconds, BadFriends and Cards and mix them together randomly
import cartas from "./Cards";
import {cartas as cartas3} from "./BadFriends";

let mix = cartas.concat(cartas3);
mix = (mix.sort(() => Math.random() - 0.5));
export default mix;