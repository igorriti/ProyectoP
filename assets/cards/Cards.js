import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5  from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Gameicon from '../../components/General/Gameicon';
import Fontisto from '@expo/vector-icons/Fontisto';
const cartas = [
    {
        id: 1,
        title: "",
        description: "Elegi a alguien y de ahora hasta que termine el juego, recibe el doble de polaquitos de los que vos recibas",
        icon : <FontAwesome5  name="draft2digital" size={80} color="white" />

    },
    {
        id: 2,
        title: "",
        description: "Mencionar frases conocidas de Ricardo fort, quien repite o no sabe que decir recibe 1 polaquito",
        icon : <Gameicon name="testicons-ricky" size={100} color="white" /> //Ricky Gameicon

    },
    {
        id: 3,
        title: "Trabalenguas",
        description: "Si lo decis mal, recibis 1 polaquito. El cielo está enladrillado,¿Quién lo desenladrillará? El que lo desenladrille, buen desenladrillador sera",
        icon : <Gameicon name="testicons-tongue" size={80} color="white" />  //Tongue Gameicon
    },
    {
        id: 4,
        title: "",
        description: "Recibi la cantidad de polaquitos del numero de dia que es hoy. (Por ejemplo si hoy es 17 te tocan 17 polaquitos)",
        icon : <AntDesign name="calendar" size={80} color="white" />

    },
    {
        id: 5,
        title: "",
        description: "Reciben 1 polaquitos todos los que sean alergicos a algo",
        icon : <MaterialCommunityIcons name="allergy" size={80} color="white"/>

    },
    {
        id: 6,
        title: "",
        description: "Los que viven en edificio reciben la cantidad de polaquitos equivalentes al piso en el que vivan",
        icon : <FontAwesome5  name="building" size={80} color="white" />

    },
    {
        id: 7,
        title: "",
        description: "Recibis 1 polaquito po por cada llave que tengas",
        icon :  <Gameicon name="testicons-house-keys" size={80} color="white" />

    },
    {
        id: 8,
        title: "Al revés",
        description: "Todos los zurdos reciben 1 polaquito.",
        icon : <Ionicons  name="hand-left" size={80} color="white" />

    },

    {
        id: 9,
        title: "El más viejo",
        description: "El jugador más viejo recibe un polaquito.",
        icon : <Gameicon name="testicons-sands-of-time" size={80} color="white" />
    },
    {
        id: 10,
        title: "Feliz cumpleaños",
        description: "Todos los que cumplieron años en los últimos 30 días reciben 1 polaquito.",
        icon : <FontAwesome5  name="birthday-cake" size={80} color="white" />

    },
    {
        id: 11,
        title: "Piedra, papel o tijera",
        description: "Desafía a alguien a piedra, papel o tijera. El perdedor recibe 1 polaquito.",
        icon : <FontAwesome name="hand-scissors-o" size={80} color="white" />

    },
    {
        id: 13,
        title: "",
        description: "Todos los que tengan mascotas reciben 1 polaquito.",
        icon : <Gameicon name="testicons-labrador-head" size={80} color="white" />  

    },
    {
        id: 14,
        title: "",
        description: "Todos los que tengan hermanos reciben 1 polaquito.",
        icon : <FontAwesome5  name="user-friends" size={80} color="white" />

    },
    {
        id: 15,
        title: "Pares",
        description: "Reciben 1 polaquito todos los jugadores cuya edad sea par.",
        icon : <MaterialCommunityIcons  name="numeric-2-box-multiple" size={80} color="white" />

    },
    {
        id: 16,
        title: "Impares",
        description: "Reciben 1 polaquito todos los jugadores cuya edad sea impar.",
        icon : <MaterialCommunityIcons  name="numeric-3-box-multiple" size={80} color="white" />

    },
    {      
        id: 17,
        title: "Cantantes",
        description: "Elige una canción. Quien no la cante o se equivoque en la letra, recibe 1 polaquito.",
        icon : <Gameicon  name="testicons-microphone" size={80} color="white" />

    },
    {
        id: 18,
        title: "",
        description: "Si tenes tatuajes, recibis la cantidad de polaquitos equivalentes a cuantos tengas. Sino recibis 1 solo.",
        icon : <FontAwesome5 name="dragon" size={80} color="white" />

    },
    {
        id: 19,
        title: "Apodos",
        description: "Elegi a alguien y ponele un apodo. Todos deben llamarlo por ese apodo durante el juego o sino reciben 1 polaquito.",
        icon : <Gameicon name="testicons-chat-bubble" size={80} color="white" /> 

    },
    {
        id: 20,
        title: "Historiador",
        description: "Conta una historia. Los demás jugadores deben adivinar si es verdadera o falsa. Quien se equivoque, recibe 1 polaquito.",
        icon : <Gameicon name="testicons-scroll-unfurled" size={80} color="white" />

    },
    {
        id: 21,
        title: "",
        description: "Si alguna vez te teñiste el pelo, recibis 1 polaquito. Sino recibis 1",
        icon : <MaterialIcons  name="invert-colors-on" size={80} color="white" />

        },
    {
        id: 22,
        title: "Repite",
        description: "Repeti la última carta jugada. Si no te la acordas, recibis 1 polaquito.",
        icon : <MaterialIcons  name="repeat" size={80} color="white" />

    },
    {
        id: 23,
        title: "Adivina adivina UT!",
        description: "Canta un tema solo usando la palabra UT. Quien no la saque, recibe 1 polaquito.",
        icon : <MaterialCommunityIcons  name="music-clef-treble" size={80} color="white" />

    },
    {
        id: 24,
        title: "",
        description: "Deci la formacion de la scaloneta en la final del mundo. Si acertas repartis 3 polaquitos. Sino recibis 3",
        icon : <Gameicon name="testicons-messi" size={150} color="white" /> //Messi Gameicon

    },
    {
        id: 25,
        title: "Símil",
        description: "Elige un objeto en la habitación. Los demás jugadores deben decir en qué se parece a ti. Quien no lo logre, 1 polaquito...",
        icon : <MaterialCommunityIcons  name="table-furniture" size={80} color="white" />

    },
    {
        id: 26,
        title: "La salida es ezeiza?",
        description: "Habla con acento extranjero durante un minuto. Si no lo haces bien, 1 polaquito.",
        icon : <MaterialCommunityIcons  name="translate" size={80} color="white" />

    },
    {
        id: 27,
        title: "",
        description: "1 polaquito todos los que hayan visto una película en el cine en los últimos 30 días.",
        icon : <Gameicon  name="testicons-clapperboard" size={80} color="white" />

    },
    {
        id: 28,
        title: "",
        description: "Si tenes la pantalla del celular rota, recibis 3 polaquitos. Sino recibis 1",
        icon : <Ionicons  name="phone-portrait-sharp" size={80} color="white" />

    },
    {
        id: 29,
        title: "Conductor responsable",
        description: "El o los conductores responsables deciden cuantos polaquitos recibis",
        icon : <MaterialCommunityIcons  name="steering" size={80} color="white" />

    },
    {
        id: 30,
        title: "Lo mejor para el final",
        description: "El ultimo que llego a la fiesta cobra 1 polaquito.",
        icon : <FontAwesome5  name="door-open" size={80} color="white" />

    },
    {
        id: 31,
        title : "",
        description : "Mencionar frases que puedas usar durante el sexo y en una cena. El que repite o no sabe que decir recibe 3 polaquitos",
        icon : <MaterialIcons  name="dinner-dining" size={80} color="white" />

    },
    {
        id: 32,
        title: "Fiel jugador",
        description: "Si no seguis a Vaso Polaco en Instagram recibis 3 polaquitos . Sino recibis 1",
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
        description: "Cada uno debe intentar hacerte reir. Si lo logran recibis 1 polaquito sino lo reciben ellos",
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
        description: "Si el dolar esta mas caro que ayer, recibis un polaquito. ",
        icon : <Gameicon name="testicons-money-stack" size={80} color="white" /> 

    },
    {
        id: 37,
        title : "",
        description: "Intenta chuparte el codo. Si no podés, recibis 3 polaquitos.",
        icon : <MaterialCommunityIcons name="arm-flex-outline" size={80} color="white" />

    },
    {
        id: 38,
        title : "",
        description: "Si estas tomando, termina la bebida.", 
        icon : <FontAwesome5  name="glass-whiskey" size={80} color="white" />

    },
    {
        id: 39,
        title : "Alumno ejemplar?",
        description : "Recibis 1 polaquito por cada punto que sacaste en el ultimo examen. Si no te acordas, recibis 10!",
        icon : <Ionicons  name="school-sharp" size={80} color="white" />

    },
    {
        id: 40,
        title : "",
        description : "Por el resto del juego, cada vez que recibas un polaquito, recibis 2.",
        icon : <Gameicon name="testicons-glass-shot" size={80} color="white" />  

    },
    {
        id: 41,
        title : "",
        description : "Cobras 1 polaquito por cada pareja que haya presente",
        icon : <Gameicon name="testicons-lovers" size={80} color="white" />  
    },
    {
        id: 42,
        title : "A la derecha",
        description : "La persona de tu derecha recibe 1 polaquito",
        icon : <AntDesign name="arrowright" size={80} color="white" />
    },
    {
        id: 43,
        title : "No se salva nadie",
        description : "Todos reciben 2 polaquitos",
        icon : <FontAwesome name="group" size={80} color="white" />
    },
    {
        id: 44,
        title : "F",
        description : "Por cada ex que tengas recibis 1 polaquito",
        icon : <FontAwesome5 name="heart-broken" size={80} color="white" />
    },
    {
        id: 45,
        title : "Que la fuerza te acompañe",
        description : "Recibis 1 polaquito si cenaste algo muy liviano",
        icon : <Gameicon name="testicons-stomach" size={80} color="white" />
    },
    {
        id: 46,
        title : "",
        description : "Recibis 3 polaquitos si no te sabes o acordas el nombre del dueño de la casa. No quien pone la casa, el dueño.",
        icon : <FontAwesome5 name="house-user" size={80} color="white" />
    },
    {
        id: 47,
        title : "",
        description : "Recibis 1 polaquitos por cada prenda negra que tengas puesta",
        icon : <FontAwesome5 name="tshirt" size={80} color="white" />
    },
    {
        id: 48,
        title : "🤨",
        description : "Cuando alguien te haga una pregunta, responde con otra pregunta. Si no lo haces, cobras 2 polaquitos",
        icon : <FontAwesome5 name="question" size={80} color="white" />
    },
    {
        id: 49,
        title : "",
        description : "Polaquito para todos los que no tengan una sube o su tarjeta transporte publico en su billetera",
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
        description : "El jugador con el vaso mas lleno, recibe 3 polaquitos",
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
        description : "Reciben todos 1 polaquito menos vos",
        icon : <Gameicon name="testicons-king" size={80} color="white" />
    },
    {
        id: 54,
        title : "Vendetta",
        description : "Elegi una persona. Esa persona recibe 1 polaquito por cada polaquitos que vos decidas recibir",
        icon : <Gameicon name="testicons-angry-eyes" size={80} color="white" />
    },
    {
        id: 55,
        title : "Formas de...",
        description : "Mencionar formas de decirle al pene, quien repite o no sabe que decir cobra 1 polaquito.",
        icon : <Gameicon name="testicons-banana" size={80} color="white" />  
    },
    {
        id: 56,
        title: "Estan entre nosotros",
        description: "Reciben 1 polaquitos todos los que crean que los extraterrestres existen",
        icon: <MaterialCommunityIcons name="alien-outline" size={80} color="white" />
    },
    {
        id: 57,
        title: "Y va el tercero?",
        description: "Recibi 1 polaquito por cada gol que haya recibido tu equipo en el ultimo partido",
        icon: <Gameicon name="testicons-goal-keeper" size={80} color="white" />
    },
    {
        id: 58,
        title: "Sin leer la carta en voz alta",
        description: "Si crees que no le ganas en una pelea a la persona que esta a tu derecha, recibis 3 polaquitos",
        icon: <Gameicon name="testicons-high-punch" size={80} color="white" />    
    },
    {
        id: 59,
        title: "Mas bostero que...",
        description: "Mencionar cosas que sean mas bosteras que... Quien repite o no sabe que decir se gana 1 polaquito",
        icon: <Gameicon name="testicons-soccer-ball" size={80} color="white" />
        //HACER ROMAN
    },
    {
        id: 60,
        title: "Hippie con osde",
        description: "La gente debera votar si sos un hippie con osde, si la mayoria dice que si, recibis 1 polaquito",
        icon: <MaterialCommunityIcons name="hand-peace" size={80} color="white" />
    },
    {
        id: 61,
        title: "La ovalada es mi vida",
        description: "Si sos o tenes pasado como rugbier, recibis 3 polaquitos",
        icon: <MaterialCommunityIcons name="rugby" size={80} color="white" />
    },
    {
        id: 62,
        title: "Polacas",
        description: "Todas las mujeres reciben 1 polaquito",
        icon: <MaterialCommunityIcons name="face-woman-shimmer" size={80} color="white" />
    },
    {
        id: 63,
        title: "Polacos",
        description: "Todos los hombres reciben 1 polaquito",
        icon: <MaterialCommunityIcons name="face-man-shimmer" size={80} color="white" />
    },
    {
        id: 64,
        title: "Billie Jean",
        description: "1 polaquito para todos los que tengan un jean puesto",
        icon: <Gameicon name="testicons-trousers" size={80} color="white" />
    },
    {
        id: 65,
        title: "Jirafa",
        description: "1 polaquito para todos los que sean mas altos que vos",
        icon: <Gameicon name="testicons-body-height" size={80} color="white" />
    },
    {
        id: 66,
        title: "Color color...",
        description: "Elegi a alguien y adivina el color de su ropa interior. Si acertas, esa persona recibe 2 polaquitos, sino los recibis vos",
        icon: <Gameicon name="testicons-clothes" size={80} color="white" />
        //HACER: icono pantis
    },
    {
        id: 67,
        title: "Quien sos???",
        description: "La persona con mas seguidores en instagram recibe 3 polaquitos",
        icon: <MaterialCommunityIcons name="instagram" size={80} color="white" />
    },
    {
        id: 68,
        title: "",
        description: "Reciben 1 polaquito todos los del sexo opuesto",
        icon: <Gameicon name="testicons-dark-squad" size={80} color="white" />
    },
    {
        id: 69,
        title: "Pico pico pico",
        description: "Dale un pico a alguien o hace fondo",
        icon: <Gameicon name="testicons-lips" size={80} color="white" />
    },
    {
        id: 70,
        title: "Historial",
        description: "Si la persona a la que le diste tu ultimo beso esta jugando, recibis 1 polaquito",
        icon: <MaterialIcons name="history" size={80} color="white" />

    },
    {
        id : 71,
        title : "Peti",
        description : "Polaquito para todos los que sean mas petisos que vos",
        icon : <Gameicon name="testicons-body-height" size={80} color="white" />
    },
    {   
        id : 72,
        title : "",
        description : "Polaquito para todos los solteros",
        icon : <Gameicon name="testicons-chained-heart" size={80} color="white" />
    }, 
    {   
        id : 73,
        title : "",
        description : "Polaquito para todas las solteras",
        icon : <Gameicon name="testicons-chained-heart" size={80} color="white" />
    },  
    {
        id: 74,
        title: "Colorin colorado",
        description: "Nombrar colores. Quien repite o no sabe que decir recibe 1 polaquito",
        icon: <Gameicon name="testicons-palette" size={80} color="white" />
    },
    {
        id: 75,
        title: "Arriba las manos",
        description: "Reciben 1 polaquito todos los que les hayan robado alguna vez",
        icon: <Gameicon name="testicons-robber" size={80} color="white" />
    },
    {
        id: 76,
        title: "#CuidemosLosInodoros",
        description: "La ultima persona que fue al baño recibe 3 polaquitos",
        icon: <FontAwesome5 name="toilet" size={80} color="white" />
    }, 
    {
        id: 77,
        title: "El mundo del reves",
        description: "Por un minuto tenes que parpadear al reves. Si no lo haces recibis 3 polaquitos",
        icon: <Gameicon name="testicons-eyelashes" size={80} color="white" />
    },
    {
        id: 78,
        title: "",
        description: "Por los proximos 2 turnos tenes que tener los ojos cerrados. Si los abris recibis 2 polaquitos",
        icon: <Gameicon name="testicons-blindfold" size={80} color="white" />
    },
    {
        id: 79,
        title: "Te juro que no estoy borracho",
        description: "Parate y hace el 4. Si el resto determina que lo hiciste bien recibis 3 polaquitos, sino recibis 1",
        icon: <MaterialCommunityIcons name="numeric-4-box-multiple" size={80} color="white" />
    },
    {
        id: 80,
        title: "",
        description: "1 polaquito todos los que esten usando una prenda oversize",
        icon: <Ionicons name="shirt-sharp" size={80} color="white" />
    },
    {
        id: 81,
        title: "Camaleon",
        description: "Imita a otro jugador. El primero en adivinar elige a alguien para que reciba 2 polaquitos",
        icon: <Gameicon name="testicons-chameleon-glyph" size={80} color="white" />
    },
    {
        id: 82,
        title: "",
        description: "Elegi a alguien para un concurso de puteadas. El que se quede sin ideas recibe 2 polaquitos",
        icon: <Gameicon name="testicons-discussion" size={80} color="white" />
    },
    {
        id: 83,
        title: "Democracia",
        description: "Todos votan a alguien para que reciba 1 polaquito",
        icon: <Gameicon name="testicons-vote" size={80} color="white" />
    },
    {
        id: 84,
        title: "And the Oscar goes to...",
        description: "Imita una escena de una pelicula. El primero en adivinar elige a alguien para que reciba 2 polaquitos",
        icon: <Gameicon name="testicons-film-projector" size={80} color="white" />
    },
    {
        id: 85,
        title: "",
        description: "1 polaquito para todas las personas cuyo nombre empiece con una vocal",
        icon: <MaterialCommunityIcons name="alpha-a-box" size={80} color="white" />
    },
    {
        id: 86,
        title: "",
        description: "Mencionar marcas de cerveza. Quien repite o no sabe que decir recibe 1 polaquito",
        icon: <Gameicon name="testicons-beer-stein" size={80} color="white" />
    },
    {
        id: 87,
        title: "Vecino de cumpleaños",
        description: "Reciben 1 polaquito todos los que hayan nacido en el mismo mes que vos",
        icon: <Gameicon name="testicons-calendar" size={80} color="white" />
    },
    {
        id: 88,
        title: "",
        description: "A la cuenta de 3 todos deben levantar o bajar el pulgar. Quienes hagan lo contrario a vos reciben 1 polaquito",
        icon: <Gameicon name="testicons-thumb-up" size={80} color="white" />

    },
    {
        id: 89,
        title: "Shhhhhh",
        description: "A partir de ahora debe reinar el silencio. Quien hable o se ria recibe 3 polaquitos",
        icon: <Gameicon name="testicons-mute" size={80} color="white" />
    },
    {
        id: 90,
        title: "",
        description: "Conta 2 verdades y 1 mentira. Si la persona que deseo adivinar no acierta recibe 2 polaquitos, sino los recibis vos",
        icon: <Gameicon name="testicons-think" size={80} color="white" />
    },
    {
        id: 91,
        title: "",
        description: "Todos los que usen anteojos reciben 1 polaquito",
        icon: <Gameicon name="testicons-sunglasses" size={80} color="white" />
    },
    {
        id: 92,
        title: "",
        description: "Todos los que hayan desaprobado o nunca hayan rendido el examen de conducir reciben 1 polaquito",
        icon: <Gameicon name="testicons-steering-wheel" size={80} color="white" />
    },
    {
        id: 93,
        title: "",
        description: "Todos reciben 1 polaquito menos vos",
        icon: <Gameicon name="testicons-podium-winner" size={80} color="white" />
    },
    {
        id: 94,
        title: "",
        description: "Vos y los de tus costados reciben 1 polaquito",
        icon: <Gameicon name="testicons-three-friends" size={80} color="white" />
    },
    {
        id: 95,
        title: "",
        description: "Hace tu mejor sonido de gemido o recibis 2 polaquitos",
        icon: <Gameicon name="testicons-shouting" size={80} color="white" />
    },
    {
        id: 96,
        title: "",
        description: "Mencionar gente que salga en Luzu. Quien repita o no sepa que decir recibe 1 polaquito",
        icon: <AntDesign name="youtube" size={80} color="white" />
    },
    {
        id: 97,
        title: "Cara de poker",
        description: "Por los proximos 5 turnos tienen que estar completamente serios. Quien no lo cumpla recibe 1 polaquito",
        icon: <Gameicon name="testicons-angry-eyes" size={80} color="white" />
    },
    {
        id: 98,
        title: "Whiskyy",
        description: "Entre todos deberan elegir un objeto para que te saques una foto y la subas a una story. Si no lo haces recibis 2 polaquitos",
        icon: <MaterialCommunityIcons name="instagram" size={80} color="white" />
    },
    {
        id: 99,
        title: "",
        description: "Subi esta carta a tu historia. Por cada like recibis 1 polaquito",
        icon: <Gameicon name="testicons-glass-shot" size={80} color="white" />
    },
    {
        id: 100,
        title: "",
        description: "Subi esta carta a tu historia. Por cada respuesta recibis 1 polaquito",
        icon: <Gameicon name="testicons-glass-celebration" size={80} color="white" />
    },
    {
        id: 101,
        title: "Desconocidos",
        description: "Por 5 turnos no se pueden decir nombres. Quien lo haga reciba 1 polaquito",
        icon: <Gameicon name="testicons-talk" size={80} color="white" />
    },
    {
        id: 102,
        title: "Game Over",
        description: "Esta carta te da la posibilidad de terminar el juego. Si la usas, todos los demas reciben 2 polaquitos",
        icon: <Gameicon name="testicons-finish-line" size={80} color="white" />
    },
    {
        id: 103,
        title: "",
        description: "Recibis 1 polaquito si tenes una story subida. Si es de comida, recibis 2. Si es una selfie, borrala.",
        icon: <MaterialCommunityIcons name="food-variant-off" size={80} color="white" />
    },
    {
        id: 104,
        title: "",
        description: "Si durante el juego, te tiraste un pedo. Recibis 2 polaquitos",
        icon: <Gameicon name="testicons-smoke-bomb" size={80} color="white" />
    },
    {
        id: 105,
        title: "Jugo cagoneta pa?",
        description: "Conta cuando fue la ultima vez que te cagaste encima. Si no lo haces recibis 2 polaquitos",
        icon: <FontAwesome5 name="toilet-paper" size={80} color="white" />
    },
    {
        id: 106,
        title: "Mucho maple",
        description: "Si hay mas varones que mujeres, polaquito para todos los varones.",
        icon: <Gameicon name="testicons-egg-clutch" size={80} color="white" />
    },
    {
        id: 107,
        title: "",
        description: "Polaquito para todos los que no te hayan saludado en tu ultimo cumpleaños",
        icon: <Gameicon name="testicons-cake-slice" size={80} color="white" />
    },
    {
        id: 108,
        title: "",
        description: "Si preferis gatos antes que perros, andate de la fiesta. Na joda, recibis 2 polaquitos... y andate de la fiesta",
        icon: <Gameicon name="testicons-cat" size={80} color="white" />
    },
    {
        id: 109,
        title: "",
        description: "Si tuviste una cita con alguien de una app de citas, recibis 2 polaquitos",
        icon: <Fontisto name="tinder" size={80} color="white" />
    },
    {
        id: 110,
        title: "",
        description: "Aquel con el talle de zapas mas grande, recibe 1 polaquito. Ey.. buena tula bro",
        icon: <Gameicon name="testicons-running-shoe" size={80} color="white" />
    },
    {
        id: 111,
        title: "",
        description: "1 polaquito si no tenes mas de 2 neuronas, es decir, si usas lentes de sol en la noche o dentro de tu casa",
        icon: <Gameicon name="testicons-sunglasses" size={80} color="white" />
    },
    {
        id: 112,
        title: "",
        description: "Mostra tu documento. Si estas sonriendo en la foto, recibis 1 polaquito.",
        icon: <Gameicon name="testicons-id-card" size={80} color="white" />
    },
    {
        id: 113,
        title: "",
        description: "El jugador mas cercano a la puerta recibe 1 polaquito",
        icon: <Gameicon name="testicons-door" size={80} color="white" />
    },
    {
        id: 114,
        title: "Cazabobos",
        description: "Levanten las manos todos los que les gusta la pizza con anana... Quien lo haga recibe 3 polaquitos y es invitado cordialmente a retirarse",
        icon: <Gameicon name="testicons-pineapple" size={80} color="white" />
    },
    {
        id: 115,
        title: "QEPD Peso",
        description: "Cobra 1 polaquito si hoy revisaste el precio del dolar, se que lo necesitas...",
        icon: <Gameicon name="testicons-dolar" size={80} color="white" />
    },
    {
        id: 116,
        title: "",
        description: "Si hay un colorado en la fiesta, reciben 1 polaquito todos los que no lo sean. Y... tocate el izquierdo",
        icon: <MaterialCommunityIcons name="face-man-profile" size={80} color="red" />
    },
    {
        id: 117,
        title: "La musica murio hace 80 años",
        description: "Si tu cancion favorita es un reggaeton, recibis 2 polaquitos y anda a escuchar musica de verdad",
        icon: <Gameicon name="testicons-musical-notes" size={80} color="white" />
    },
    {
        id: 118,
        title: "",
        description: "Si estas estudiando, recibis 1 polaquito por cada año que te falte para recibirte",
        icon: <Gameicon name="testicons-graduate-cap" size={80} color="white" />
    },
    {
        id: 119,
        title: "Fondo",
        description: "Terminate tu vaso.",
        icon: <Gameicon name="testicons-wine-glass" size={80} color="white" />
    },
    {
        id: 120,
        title: "",
        description: "Si tus medias tienen un agujero, recibis 2 polaquitos",
        icon: <Gameicon name="testicons-socks" size={80} color="white" />
    },
    {
        id: 121,
        title: "",
        description: "1 polaquito para todos los que hayan sobrevivido a la pandemia sin contagiarse",
        icon: <MaterialIcons name="coronavirus" size={80} color="white" />
    },
    {
        id: 122,
        title: "Como amigos",
        description: "Cobras 1 polaquito por cada vez que te friendzonearon, lo necesitas",
        icon: <Gameicon name="testicons-broken-heart" size={80} color="white" />
    },
    {
        id: 123,
        title: "Sisi ya te vimos",
        description: "Si sos estudiante de medicina evita subir una historia mostrando lo mucho que estudias. Como se que es imposible, reciben 2 polaquitos.",
        icon: <Gameicon name="testicons-stethoscope" size={80} color="white" />
    },
    {
        id: 124,
        title: "",
        description: "1 polaquito para todos los militantes de algun partido politico, el que se ponga a discutir recibe 3 mas",
        icon: <Gameicon name="testicons-vote" size={80} color="white" />
    },
    {
        id: 125,
        title: "",
        description: "Todos deben poner su celular en el medio de la mesa. El primero que lo toque o recibe una notificacion, recibe 2 polaquitos",
        icon: <Gameicon name="testicons-vibrating-smartphone" size={80} color="white" />
    },
    {
        id: 126,
        title: "",
        description: "Si te llamas Juan, Agustin, Tomas, Sofia, Camila o  Milagros recibis 2 polaquitos en honor a la poca originalidad de tus viejos",
        icon: <Gameicon name="testicons-baby-face" size={80} color="white" />
    },
    {
        id: 127,
        title: "",
        description: "Cuenten hasta 3 y voten a alguien para que ligue 1 polaquito. Cada uno cobra 1 polaquito por cada voto recibido",
        icon: <Gameicon name="testicons-pointing" size={80} color="white" />
    },
    {
        id: 128,
        title: "Repeticion",
        description: "1 polaquito de nuevo todos los que hayan recibido uno en la carta anterior",
        icon: <Gameicon name="testicons-cycle" size={80} color="white" />
    },
    {
        id: 129,
        title: "",
        description: "Si tuviste fotolog, recibis 2 polaquitos viejo",
        icon: <Fontisto name="photograph" size={80} color="white" />
    },
    {
        id: 130,
        title: "",
        description: "Si alguna vez intentaste ser youtuber o streamer, recibis 1 polaquito",
        icon: <Gameicon name="testicons-video-camera" size={80} color="white" />
    },
    {
        id: 131,
        title: "A nadie le importa",
        description: "1 polaquito si en tu descripcion de instagram tenes la ciudad donde vivis",
        icon: <Gameicon name="testicons-position-marker" size={80} color="white" />
    },
    {
        id: 132,
        title: "Mejores amigos",
        description: "1 polaquito por cada 10 personas que tengas en tus mejores amigos de instagram",
        icon: <MaterialCommunityIcons name="star-circle" size={80} color="white" />
    },
    {
        id: 133,
        title: "Disfruten la fiesta",
        description: "Todos los que esten usando el celular reciben 2 polaquitos",
        icon: <Gameicon name="testicons-smartphone" size={80} color="white" />
    },
    {
        id: 134,
        title: "En condicion de Android",
        description: "1 polaquito si tenes un celular con Android",
        icon: <MaterialCommunityIcons name="android" size={80} color="white" />
    },
    {
        id: 135,
        title: "En condicion de Iphone",
        description: "1 polaquito si tenes un celular con Iphone",
        icon: <MaterialCommunityIcons name="apple" size={80} color="white" />
    },
    {
        id: 136,
        title:"",
        description: "1 polaquito los que alguna vez hayan tenido un blackberry",
        icon: <FontAwesome5 name="blackberry" size={80} color="white" />
    },
    {
        id: 137,
        title: "",
        description: "Si fuiste a un casino, ligas 1 polaquito. Si perdiste plata, ligas otros 2",
        icon: <Gameicon name="testicons-slot-machine" size={80} color="white" />
    },
    {
        id: 138,
        title: "",
        description: "Si alguna vez te sacaste una selfie llorando, recibis 1 polaquito",
        icon: <Gameicon name="testicons-tear-tracks" size={80} color="white" />
    },
    {
        id: 139,
        title: "",
        description: "Si alguien vomito en la ultima fiesta que fuiste, recibis 2 polaquitos",
        icon: <Gameicon name="testicons-vomiting" size={80} color="white" />
    },
    {
        id: 140,
        title: "Vendepatria",
        description: "1 polaquito si te queres ir del pais",
        icon: <Gameicon name="testicons-boarding-pass" size={80} color="white" />
    },
    {
        id: 141,
        title: "Precavido vale por dos",
        description: "Recibis 1 polaquito si tenes un condon en tu billetera o cartera",
        icon: <Gameicon name="testicons-shield-bash" size={80} color="white" />
    },
    {
        id: 142,
        title: "",
        description: "Si tu pelicula favorita es el lobo de wall street, probablemente estes en un ponzi y tenes que recibir 2 polaquitos",
        icon: <Entypo name="line-graph" size={80} color="white" />
    },
    {
        id: 143,
        title: "",
        description: "Recibis 1 polaquito si tenes muchas alarmas seguidas en tu celular",
        icon: <Gameicon name="testicons-alarm-clock" size={80} color="white" />
    },
    {
        id: 144,
        title: "",
        description: "Si alguna vez te quedaste dormido en el colectivo recibis 1 polaquito",
        icon: <Gameicon name="testicons-bus" size={80} color="white" />
    },
    {
        id: 145,
        title: "",
        description: "Si alguna vez viste un ovni, conta tu experiencia y tomate 1 polaquito",
        icon: <Gameicon name="testicons-ufo" size={80} color="white" />
    },
    {
        id: 146,
        title: "Musico",
        description: "Recibis 1 polaquito por cada instrumento que sepas tocar",
        icon: <Gameicon name="testicons-trumpet" size={80} color="white" />
    },
    {
        id: 147,
        title: "",
        description: "Si tenes alguna discusion pendiente con alguien, este es el momento para resolverla. Quien salga votado como perdedor recibe 1 polaquito",
        icon: <Gameicon name="testicons-tribunal-jury" size={80} color="white" />
    },
    {
        id: 148,
        title: "",
        description: "Si te lavaste los dientes antes de venir a la fiesta, recibis 2 polaquitos. Si no recibis polaquitos sos un hdp",
        icon: <Gameicon name="testicons-toothbrush" size={80} color="white" />
    },
    {
        id: 149,
        title: "En cualquier parte",
        description: "Si estan jugando Vaso Polaco en un bar, todos reciben 1 polaquito, incluido el barman",
        icon: <Gameicon name="testicons-tavern-sign" size={80} color="white" />
    },
    {
        id: 150,
        title: "",
        description: "Si te vacunaste en el ultimo año, recibis 1 polaquito",
        icon: <Gameicon name="testicons-syringe" size={80} color="white" />
    },
    {
        id: 151,
        title: "",
        description: "Si alguien ya ensucio el piso con bebidas, 1 polaquito para el culpable",
        icon: <Gameicon name="testicons-sticky-boot" size={80} color="white" />
    },
    {
        id: 152,
        title: "",
        description: "1 polaquito para todos los vegetarianos y veganos",
        icon: <Gameicon name="testicons-raddish" size={80} color="white" />
    },
    {
        id: 153,
        title: "",
        description: "Si comiste pizza antes de venir a la fiesta, recibis 2 polaquitos",
        icon: <Gameicon name="testicons-pizza-slice" size={80} color="white" />
    },
    {
        id: 154,
        title: "",
        description: "1 polaquito para el mas fuerte de la fiesta",
        icon: <Gameicon name="testicons-muscle-up" size={80} color="white" />
    },
    {
        id: 155,
        title: "",
        description: "1 polaquito para todos los que tengan los abdominales marcados",
        icon: <Gameicon name="testicons-muscular-torso" size={80} color="white" />
    },
    {
        id: 156,
        title: "",
        description: "3 polaquitos todos los que hayan sido detenidos alguna vez",
        icon: <Gameicon name="testicons-mug-shot" size={80} color="white" />
    },
    {
        id: 157,
        title: "",
        description: "Si estan jugando en ronda, recibis 2 polaquitos",
        icon: <Gameicon name="testicons-meeple-circle" size={80} color="white" />
    },
    {
        id: 158,
        title: "",
        description: "Si alguno esta tomando alguna medicacion, recibe 2 polaquitos... ",
        icon: <Gameicon name="testicons-medicine-pills" size={80} color="white" />
    },
    {
        id: 159,
        title: "",
        description: "1 polaquito si alguna vez te pico una abeja",
        icon: <Gameicon name="testicons-bee" size={80} color="white" />
    },
    {
        id: 160,
        title: "",
        description: "La proxima persona que te mire fijo a los ojos, recibe 3 polaquitos",
        icon: <Gameicon name="testicons-look-at" size={80} color="white" />
    },
    {
        id: 161,
        title: "",
        description: "Hasta que vuelvas a sacar una carta, todos deben darte un cumplido cada vez que recibas 1 polaquito.",
        icon: <Gameicon name="testicons-love-letter" size={80} color="white" />
    },
    {
        id: 162,
        title: "Pero habla bien...",
        description: "Si alguno presente usa la palabra 'pedilo', lo tiene que pedir y recibe 3 polaquitos",
        icon: <Gameicon name="testicons-talk" size={80} color="white" />
    }
];

    
export default cartas;
    