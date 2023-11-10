import { Entypo,MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
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
        description: "Los jugadores deben ponerse en ronda, sacar una carta por turno y responder con tres cosas en cinco segundos.\nSi el jugador falla, recibe 1 P y el de la derecha debera responder sin repetir respuestas anteriores.\nEl juego continua hasta que alguien acierte las 3 respuestas. Una vez hecho esto, es el turno del jugador de la derecha que saco la carta al principio del turno." ,
        icon:  <GameIcons name="testicons-time-bomb" size={50} color="#fff" />,
        screen: "FiveSecondsMode"  
    },

    {   
        id: 4,
        name: 'El infiltrado',
        description: "Cada jugador debera sacar una carta y leerla en secreto. A algunos les tocara ser el infiltrado y a los demas una misma palabra. \n En ronda los jugadores deberan decir una palabra que se relacione con la que les toco. El infiltrado no la sabra pero debera hacer lo mismo,  sin que los demas se den cuenta que es el infiltrado. \n Al final de la ronda, los jugadores deberan votar quien creen que es el infiltrado. Si el infiltrado es descubierto, debera recibe 1 P. Si no, los demas jugadores deberan recibir 1. Cantidad minima de jugadores: 3" ,
        icon: <GameIcons name="testicons-spy" size={50} color="#fff" />,
        screen: "Infiltrate"  
    },
    
    {   id: 5,
        name: 'Verdad o P\'s',
        description: "Los jugadores deberan sacar una carta y responder la pregunta que le toque. Si no quiere responder, debera recibir 1 P. No seas salame y si una persona se siente incomoda, no la presiones y no arruines el ambiente." ,
        icon: <GameIcons name="testicons-card-pickup" size={50} color="#fff" />,
        screen: "TruthOrShot"  
    },
    {   
        id: 6,
        name: 'Yo nunca nunca',
        description: "En este juego una persona debera sacar una carta y leer la consigna. Los que hayan hecho lo que dice la carta, reciben 1 P.",
        icon: <GameIcons name="testicons-secret-book" size={50} color="#fff"/>,
        screen: "NeverMode"
    },
    {   id: 7,
        name: 'Carrera de caballos',
        description: "Te crees una persona con suerte? \nEn este juego integrado a tu Chromecast o Smart TV deberas apostar una cierta cantidad de P\'s a un caballo. Si tu caballo gana, podras repartir los P\'s que apostaste a los demas jugadores.\nPero ojo, para apostar P\'s primero los tenes que tomar vos. Por ejemplo: Si quiero apostar 3 P\'s, primero tengo que tomar 3 P\'s. Cantidad minima de jugadores: 3",
        icon: <GameIcons name="testicons-horseshoe" size={50} color="#fff" />,
        screen: "HorseRacing"  
    },
    {
        id: 8,
        name: 'Fulvo',
        description: "Saldra un escudo de un club argentino y deberas decir el nombre del club. Si no lo sabes, recibis 2 P\'s.",
        icon: <GameIcons name="testicons-soccer-ball" size={50} color="#fff" />,
        screen: "Fulvo"
    },
    {
        id: 9,
        name: 'Mix',
        description: "En este juego se mezclan las cartas del modo clasico, el Aca se pudre, Verdad o P\'s y Yo nunca nunca \nDeberas sacar una carta y cumplir con la consigna que le o les toque.",
        icon: <FontAwesome name="random" size={50} color="#fff" />,
        // icon: <GameIcons name="testicons-card-exchange" size={50} color="#fff" />,
        screen: "Mix"
    },
    {
        id: 10,
        name: 'Oooo aaaa',
        description: "En cada turno deberan elegir 1 persona para que salga de la habitacion y los demas jugadores deberan leer la carta que salga e indique que accion debe cumplir el jugador. \nUna vez leida la carta, el jugador que salio debera volver a entrar y tratar de adivinar que accion debe hacer.\nEl resto debe ayudarlo a adivinar la accion, pero solo diciendo oooo cuando se aleja de la respuesta correcta y aaaa cuando se acerca a la respuesta correcta. \nPueden apostar P\'s o no, eso lo deciden ustedes. No nos hacemos responsables de las puteadas de los vecinos", 
        icon : <GameIcons name="testicons-shouting" size={50} color="#fff" />,
        screen: "OooAaaMode",
        new: true

    },
    {
        id: 11,
        name: 'Proximamente',
        description: "Dentro de poco podras disfrutar de nuevos modos de juego.",
        icon: <Entypo name="arrow-right" size={50} color="#fff" />,
    },



  
  ];

export default items;