import { AntDesign,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
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
        name: 'Aca se pudre',
        description: "Deberan sacar una carta y cuando el juego lo indique, deberan señalar a la persona que mas se ajuste a la descripcion de la carta." ,
        icon: <GameIcons name="testicons-pyromaniac" size={50} color="#fff" />,
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
        name: 'Ruleta polaca',
        description: "Uno a uno deberan disparar la pistola de shots. Si disparan y sale el shot, deberan tomar.\n" ,
        icon: <GameIcons name="testicons-reload-gun-barrel" size={50} color="#fff" />,
        screen: "RuRoulette"
    },
    {   
        id: 5,
        name: 'El infiltrado',
        description: "Cada jugador debera sacar una carta y leerla en secreto. A algunos les tocara ser el infiltrado y a los demas una misma palabra. \n En ronda los jugadores deberan decir una palabra que se relacione con la que les toco. El infiltrado no la sabra pero debera hacer lo mismo,  sin que los demas se den cuenta que es el infiltrado. \n Al final de la ronda, los jugadores deberan votar quien creen que es el infiltrado. Si el infiltrado es descubierto, debera tomar un trago. Si no, los demas jugadores deberan tomar un trago." ,
        icon: <GameIcons name="testicons-spy" size={50} color="#fff" />,
        screen: "Infiltrate"  
    },
    
    {   id: 6,
        name: 'Verdad o shot',
        description: "Los jugadores deberan sacar una carta y responder la pregunta que le toque. Si no quiere responder, debera tomar un trago. No seas salame y si una persona se siente incomoda, no la presiones y no arruines el ambiente." ,
        icon: <GameIcons name="testicons-booze" size={50} color="#fff" />,
        screen: "TruthOrShot"  
    },
    {   
        id: 7,
        name: 'Yo nunca nunca',
        description: "En este juego una persona debera sacar una carta y leer la consigna. Los que hayan hecho lo que dice la carta, deberan tomar un trago.",
        icon: <GameIcons name="testicons-secret-book" size={50} color="#fff"/>,
        screen: "NeverMode"
    },
    {   id: 8,
        name: 'Carrera de caballos',
        description: "Te crees una persona con suerte? \nEn este juego deberas apostar una cierta cantidad de tragos a un caballo. Si tu caballo gana, podras repartir los tragos que apostaste a los demas jugadores.\nPero ojo, para apostar tragos debes tomarlos primero.",
        icon: <GameIcons name="testicons-horseshoe" size={50} color="#fff" />,
        screen: "HorseRacing"  
    },
    {
        id: 9,
        name: 'Fulvo',
        description: "Saldra un escudo de un club argentino y deberas decir el nombre del club. Si no lo sabes, deberas tomar 2 tragos.",
        icon: <GameIcons name="testicons-soccer-ball" size={50} color="#fff" />,
        screen: "Fulvo"
    },
    {
        id: 10,
        name: 'Mix',
        description: "En este juego se mezclan las cartas del modo clasico, el aca se pudre, 5 segundos, Verdad o shot y Yo nunca nunca \nDeberas sacar una carta y cumplir con la consigna que le o les toque.",
        icon: <FontAwesome name="random" size={50} color="#fff" />,
        // icon: <GameIcons name="testicons-card-exchange" size={50} color="#fff" />,
        screen: "Mix"
    }

  
  ];

export default items;