import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5  from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Gameicon from '../../components/General/Gameicon';
const cartas = [
    {
        id: 1,
        title: "",
        description: "Elegi a alguien y de ahora hasta que termine el juego, tiene que tomar el doble de los que vos tomes",
        icon : <FontAwesome5  name="draft2digital" size={80} color="white" />

    },
    {
        id: 2,
        title: "",
        description: "Mencionar frases conocidas de Ricardo fort, quien repite o no sabe que decir toma",
        icon : <Gameicon name="testicons-ricky" size={80} color="white" /> //Ricky Gameicon

    },
    {
        id: 3,
        title: "Trabalenguas",
        description: "Si lo decis mal, tomas. El cielo está enladrillado,¿Quién lo desenladrillará? El que lo desenladrille, buen desenladrillador sera",
        icon : <Gameicon name="testicons-tongue" size={80} color="white" />  //Tongue Gameicon
    },
    {
        id: 4,
        title: "",
        description: "Toma la cantidad de tragos del numero de dia que es hoy. (Por ejemplo si hoy es 17 tomas 17 tragos)",
        icon : <AntDesign name="calendar" size={80} color="white" />

    },
    {
        id: 5,
        title: "",
        description: "Toman todos los que sean alergicos a algo",
        icon : <MaterialCommunityIcons name="allergy" size={80} color="white"/>

    },
    {
        id: 6,
        title: "",
        description: "Los que viven en edificio toman la cantidad de trago del piso en el que vivan",
        icon : <FontAwesome5  name="building" size={80} color="white" />

    },
    {
        id: 7,
        title: "",
        description: "Toma un trago por cada llave que tengas",
        icon :  <Gameicon name="testicons-house-keys" size={80} color="white" />

    },
    {
        id: 8,
        title: "Al revés",
        description: "Toman todos los zurdos.",
        icon : <Ionicons  name="hand-left" size={80} color="white" />

    },

    {
        id: 9,
        title: "El más viejo",
        description: "El jugador más viejo toma.",
        icon : <Gameicon name="testicons-sands-of-time" size={80} color="white" />
    },
    {
        id: 10,
        title: "Feliz cumpleaños",
        description: "Toman todos los que cumplieron años en los últimos 30 días.",
        icon : <FontAwesome5  name="birthday-cake" size={80} color="white" />

    },
    {
        id: 11,
        title: "Piedra, papel o tijera",
        description: "Desafía a alguien a piedra, papel o tijera. El perdedor toma.",
        icon : <FontAwesome name="hand-scissors-o" size={80} color="white" />

    },
    {
        id: 13,
        title: "",
        description: "Toman todos los que tengan mascotas.",
        icon : <Gameicon name="testicons-labrador-head" size={80} color="white" />  

    },
    {
        id: 14,
        title: "",
        description: "Toman todos los que tengan hermanos.",
        icon : <FontAwesome5  name="user-friends" size={80} color="white" />

    },
    {
        id: 15,
        title: "Pares",
        description: "Toman todos los jugadores cuya edad sea par.",
        icon : <MaterialCommunityIcons  name="numeric-2-box-multiple" size={80} color="white" />

    },
    {
        id: 16,
        title: "Impares",
        description: "Toman todos los jugadores cuya edad sea impar.",
        icon : <MaterialCommunityIcons  name="numeric-3-box-multiple" size={80} color="white" />

    },
    {      
        id: 17,
        title: "Cantantes",
        description: "Elige una canción. Quien no la cante o se equivoque en la letra, toma.",
        icon : <Gameicon  name="testicons-microphone" size={80} color="white" />

    },
    {
        id: 18,
        title: "",
        description: "Si tenes tatuajes, toma la cantidad de trago que tengas. Sino tomas 1",
        icon : <FontAwesome5 name="dragon" size={80} color="white" />

    },
    {
        id: 19,
        title: "Apodos",
        description: "Elegi a alguien y ponele un apodo. Todos deben llamarlo por ese apodo durante el juego o tomar.",
        icon : <Gameicon name="testicons-chat-bubble" size={80} color="white" /> 

    },
    {
        id: 20,
        title: "Historiador",
        description: "Conta una historia. Los demás jugadores deben adivinar si es verdadera o falsa. Quien se equivoque, toma.",
        icon : <Gameicon name="testicons-scroll-unfurled" size={80} color="white" />

    },
    {
        id: 21,
        title: "",
        description: "Si alguna vez te teñiste el pelo, toma 3 tragos. Sino tomas 1",
        icon : <MaterialIcons  name="invert-colors-on" size={80} color="white" />

        },
    {
        id: 22,
        title: "Repite",
        description: "Repeti la última carta jugada. Si no te la acordas, toma.",
        icon : <MaterialIcons  name="repeat" size={80} color="white" />

    },
    {
        id: 23,
        title: "Adivina adivina UT!",
        description: "Canta un tema solo usando la palabra UT. Quien no la saque, toma.",
        icon : <MaterialCommunityIcons  name="music-clef-treble" size={80} color="white" />

    },
    {
        id: 24,
        title: "",
        description: "Deci la formacion de la scaloneta en la final del mundo. Si acertas repartis 3 tragos. Sino tomas 3",
        icon : <Gameicon name="testicons-messi" size={150} color="white" /> //Messi Gameicon

    },
    {
        id: 25,
        title: "Símil",
        description: "Elige un objeto en la habitación. Los demás jugadores deben decir en qué se parece a ti. Quien no lo logre, toma.",
        icon : <MaterialCommunityIcons  name="table-furniture" size={80} color="white" />

    },
    {
        id: 26,
        title: "La salida es ezeiza?",
        description: "Habla con acento extranjero durante un minuto. Si no lo haces bien, toma.",
        icon : <MaterialCommunityIcons  name="translate" size={80} color="white" />

    },
    {
        id: 27,
        title: "",
        description: "Toman todos los que hayan visto una película en el cine en los últimos 30 días.",
        icon : <Gameicon  name="testicons-clapperboard" size={80} color="white" />

    },
    {
        id: 28,
        title: "",
        description: "Si tenes la pantalla del celular rota, toma 3 tragos. Sino tomas 1",
        icon : <Ionicons  name="phone-portrait-sharp" size={80} color="white" />

    },
    {
        id: 29,
        title: "Conductor responsable",
        description: "El o los conductores responsables deciden cuantos tragos tenes que tomar",
        icon : <MaterialCommunityIcons  name="steering" size={80} color="white" />

    },
    {
        id: 30,
        title: "Lo mejor para el final",
        description: "Toma el ultimo que llego a la fiesta",
        icon : <FontAwesome5  name="door-open" size={80} color="white" />

    },
    {
        id: 31,
        title : "",
        description : "Mencionar frases que puedas usar durante el sexo y en una cena. El que repite o no sabe que decir toma 5 tragos",
        icon : <MaterialIcons  name="dinner-dining" size={80} color="white" />

    },
    {
        id: 32,
        title: "Fiel jugador",
        description: "Si no seguis a Vaso polaco en Instagram tomas 3 tragos. Sino tomas 1",
        icon : <AntDesign  name="instagram" size={80} color="white" />

    },
    {
        id: 33,
        title: "Comodin",
        description: "Tenes la posibilidad de no aceptar la consigna de una carta que quieras",
        icon : <Gameicon name="testicons-jester-hat" size={80} color="white" /> 

    },
    {
        id: 34,
        title: "Haceme reir",
        description: "Cada uno debe intentar hacerte reir. Si lo logran tomas sino toman ellos",
        icon : <Gameicon name="testicons-clown" size={80} color="white" /> 

    },
    {
        id: 35,
        title: "Catador",
        description: "Con los ojos cerrados, proba una bebida que alguien te de. Si no la sacas, tomatela.",
        icon : <MaterialCommunityIcons  name="beer" size={80} color="white" /> 

    },
    {
        id: 36,
        title : "Dolar en la city",
        description: "Si el dolar esta mas caro que ayer, tomas. ",
        icon : <Gameicon name="testicons-money-stack" size={80} color="white" /> 

    },
    {
        id: 37,
        title : "",
        description: "Intenta chuparte el codo. Si no podés, tomas 5 tragos.",
        icon : <MaterialCommunityIcons name="arm-flex-outline" size={80} color="white" />

    },
    {
        id: 38,
        title : "",
        description: "Toma lo que te queda en el vaso",
        icon : <FontAwesome5  name="glass-whiskey" size={80} color="white" />

    },
    {
        id: 39,
        title : "Alumno ejemplar?",
        description : "Toma la cantidad de tragos del numero de puntos que sacaste en el ultimo examen. Si no te acordas, tomas 10!",
        icon : <Ionicons  name="school-sharp" size={80} color="white" />

    },
    {
        id: 40,
        title : "",
        description : "Por el resto del juego, cada vez que quieras tomar algo tenes que tomarte un shot antes",
        icon : <Gameicon name="testicons-glass-shot" size={80} color="white" />  

    },
    {
        id: 41,
        title : "",
        description : "Toma 1 trago por cada pareja que haya presente",
        icon : <Gameicon name="testicons-lovers" size={80} color="white" />  
    },
    {
        id: 42,
        title : "A la derecha",
        description : "Toma un trago la persona de tu derecha",
        icon : <AntDesign name="arrowright" size={80} color="white" />
    },
    {
        id: 43,
        title : "No se salva nadie",
        description : "Toman todos 2 tragos",
        icon : <FontAwesome name="group" size={80} color="white" />
    },
    {
        id: 44,
        title : "F",
        description : "Toma 1 trago por cada ex que tengas",
        icon : <FontAwesome5 name="heart-broken" size={80} color="white" />
    },
    {
        id: 45,
        title : "Que la fuerza te acompañe",
        description : "Toma 1 trago si cenaste algo muy liviano",
        icon : <Gameicon name="testicons-stomach" size={80} color="white" />
    },
    {
        id: 46,
        title : "",
        description : "Toma 3 tragos si no te sabes o acordas el nombre del dueño de la casa. No quien pone la casa, el dueño.",
        icon : <FontAwesome5 name="house-user" size={80} color="white" />
    },
    {
        id: 47,
        title : "",
        description : "Toma 1 trago por prenda negra que tengas puesta",
        icon : <FontAwesome5 name="tshirt" size={80} color="white" />
    },
    {
        id: 48,
        title : "🤨",
        description : "Cuando alguien te haga una pregunta, responde con otra pregunta. Si no lo haces, tomas 3 tragos",
        icon : <FontAwesome5 name="question" size={80} color="white" />
    },
    {
        id: 49,
        title : "",
        description : "Toman todos los que no tengan una sube o su tarjeta transporte publico en su billetera",
        icon : <Gameicon name="testicons-swipe-card" size={80} color="white" />
    },
    {
        id: 50,
        title : "",
        description : "El jugador con el vaso mas vacio, hace fondo",
        icon : <Gameicon name="testicons-wine-glass" size={80} color="white" />
    },
    {
        id: 51,
        title : "",
        description : "El jugador con el vaso mas lleno, toma 3 tragos",
        icon : <FontAwesome5 name="glass-martini" size={80} color="white" />
    },
    {
        id: 52,
        title : "Kamikaze",
        description : "Elegi una persona para que haga fondo con vos",
        icon : <Gameicon name="testicons-glass-celebration" size={80} color="white" />
    },
    {
        id: 53,
        title : "",
        description : "Toman todos menos vos",
        icon : <Gameicon name="testicons-king" size={80} color="white" />
    },
    {
        id: 54,
        title : "Vendetta",
        description : "Elegi una persona. Debe tomar la misma cantidad de tragos que vos decidas tomar",
        icon : <Gameicon name="testicons-angry-eyes" size={80} color="white" />
    },
    {
        id: 55,
        title : "Formas de...",
        description : "Mencionar formas de decirle al pene, quien repite o no sabe que decir toma.",
        icon : <Gameicon name="testicons-banana" size={80} color="white" />  
    },




];

    
export default cartas;
    