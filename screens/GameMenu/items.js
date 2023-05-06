import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import GameIcons from '../../components/General/Gameicon';

const items = [
    {   
        id: 1,
        name: 'Clasico',
        description: "Uno a uno deberan sacar una carta y cumplir con la consigna que le o les toque." ,
        icon: <MaterialCommunityIcons name="cards" size={50} color="#fff" />, 
        screen: "ClassicMode"

    },
    {   
        id: 2,
        name: 'Malos amigos',
        description: "Deberan sacar una carta y cuando el juego lo indique, deberan señalar a la persona que mas se ajuste a la descripcion de la carta." ,
        icon: <GameIcons name="testicons-overkill" size={50} color="#fff" />,
        screen: "BadFriendsMode"  
    },
    {   
        id: 3,
        name: '5 segundos',
        description: "Los jugadores deben ponerse en ronda, sacar una carta por turno y responder con tres cosas en cinco segundos.\nSi el jugador falla, debe tomar un trago y el de la derecha debera responder sin repetir respuestas anteriores.\nEl juego continua hasta acertar las 3 respuestas. Una vez hecho esto, es el turno del jugador de la derecha que saco la carta al principio." ,
        icon:  <GameIcons name="testicons-time-bomb" size={50} color="#fff" />,
        screen: "FiveSecondsMode"  
    },
    {   
        id: 4,
        name: 'Match',
        description: "Dos jugadores seran seleccionados al azar, deberan cerrar los ojos y se le leera una consigna. Cuando el juego lo indique, deberan responder quien de los dos es mas probable que cumpla con la consigna. Si los dos jugadores no coinciden, deberan tomar un trago." ,
        icon:  <GameIcons name="testicons-thumb-up" size={50} color="#fff" />,
        screen: "ClassicMode"  
    },
    {   
        id: 5,
        name: 'Ruleta polaca',
        description: "Uno a uno deberan disparar la pistola de shots. Si disparan y sale el shot, deberan tomar.\nSe pueden configurar la cantidad de disparos de shots." ,
        icon: <GameIcons name="testicons-reload-gun-barrel" size={50} color="#fff" />,
        screen: "ClassicMode"  
    },

    {   id: 6,
        name: 'Verdad o shot',
        description: "Los jugadores deberan sacar una carta y responder la pregunta que le toque. Si no quiere responder, debera tomar un trago." ,
        icon: <GameIcons name="testicons-booze" size={50} color="#fff" />,
        screen: "ClassicMode"  
    },
    {   
        id: 7,
        name: 'Yo nunca nunca',
        description: "En este juego una persona debera sacar una carta y leer la consigna. Si el jugador ha hecho lo que dice la carta, debera tomar un trago.",
        icon: <GameIcons name="testicons-secret-book" size={50} color="#fff"/>,
        screen: "ClassicMode"
    },
    {   id: 8,
        name: 'Carrera de caballos',
        description: "Te crees una persona con suerte? \nEn este juego deberas apostar una cierta cantidad de tragos a un caballo. Si tu caballo gana, podras repartir los tragos que apostaste a los demas jugadores.\nPero ojo, para apostar tragos debes tomarlos primero.",
        icon: <GameIcons name="testicons-horseshoe" size={50} color="#fff" />,
        screen: "ClassicMode"  
    },

  
  ];

export default items;