import {AnimationObject} from 'lottie-react-native';

const data = [
  {
    id: 1,
    animation: require('../../assets/animations/ProyectoP.json'),
    text: 'Bienvenido a\n Proyecto P!',
    subText: 'Vení que te contamos cómo funciona la mejor app para fiestas, previas, reuniones y más ;)',
    textColor: '#040926',
    backgroundColor: '#f52746',
  },
  {
    id: 2,
    animation: require('../../assets/animations/typing.json'),
    text: '10 juegos y\n +1000 consignas',
    subText: 'Vas a poder jugar desde juegos clásicos hasta juegos innovadores que se integran con tu Chromecast. Mantene apretado sobre cada juego para ver sus reglas.',
    // textColor: '#1e2169',
    // backgroundColor: '#bae4fd',
 
    textColor: '#251351',
    backgroundColor: '#6A87FC',
  },

  {
    id: 3,
    animation: require('../../assets/animations/question.json'),
    text: "P's",
    subText: 'Nuestra unidad de medida "P\'s" implica una prenda que el usuario debe cumplir. Puede ser una prenda, un baile, comer algo, un beso o simplemente nada. Ustedes eligen! ',
    textColor: '#eee',
    backgroundColor: '#111',
  },

];

export default data;