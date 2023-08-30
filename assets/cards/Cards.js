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
        description: "Elegi a alguien y de ahora hasta que termine el juego, tiene que tomar el doble de los que vos tomes",
        icon : <FontAwesome5  name="draft2digital" size={80} color="white" />

    },
    {
        id: 2,
        title: "",
        description: "Mencionar frases conocidas de Ricardo fort, quien repite o no sabe que decir toma",
        icon : <Gameicon name="testicons-ricky" size={100} color="white" /> //Ricky Gameicon

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
    {
        id: 56,
        title: "Estan entre nosotros",
        description: "Toman todos los que crean que los extraterrestres existen",
        icon: <MaterialCommunityIcons name="alien-outline" size={80} color="white" />
    },
    {
        id: 57,
        title: "Y va el tercero?",
        description: "Toma 1 trago por cada gol que haya recibido tu equipo en el ultimo partido",
        icon: <Gameicon name="testicons-goal-keeper" size={80} color="white" />
    },
    {
        id: 58,
        title: "Sin leer la carta en voz alta",
        description: "Si crees que no le ganas en una pelea a la persona que esta a tu derecha, tomas 3 tragos",
        icon: <Gameicon name="testicons-high-punch" size={80} color="white" />    
    },
    {
        id: 59,
        title: "Mas bostero que...",
        description: "Mencionar cosas que sean mas bosteras que... Quien repite o no sabe que decir toma",
        icon: <Gameicon name="testicons-soccer-ball" size={80} color="white" />
        //HACER ROMAN
    },
    {
        id: 60,
        title: "Hippie con osde",
        description: "La gente debera votar si sos un hippie con osde, si la mayoria dice que si, tomas 1 shot",
        icon: <MaterialCommunityIcons name="hand-peace" size={80} color="white" />
    },
    {
        id: 61,
        title: "La ovalada es mi vida",
        description: "Si sos o tenes pasado como rugbier, tomas 3 tragos",
        icon: <MaterialCommunityIcons name="rugby" size={80} color="white" />
    },
    {
        id: 62,
        title: "Toman ellas",
        description: "Toman todas las mujeres",
        icon: <MaterialCommunityIcons name="face-woman-shimmer" size={80} color="white" />
    },
    {
        id: 63,
        title: "Toman ellos",
        description: "Toman todos los hombres",
        icon: <MaterialCommunityIcons name="face-man-shimmer" size={80} color="white" />
    },
    {
        id: 64,
        title: "Billie Jean",
        description: "Toman todos los que tengan un jean puesto",
        icon: <Gameicon name="testicons-trousers" size={80} color="white" />
    },
    {
        id: 65,
        title: "Jirafa",
        description: "Toman todos los que sean mas altos que vos",
        icon: <Gameicon name="testicons-body-height" size={80} color="white" />
    },
    {
        id: 66,
        title: "Color color...",
        description: "Elegi a alguien y adivina el color de su ropa interior. Si acertas, esa persona toma 2 tragos, sino tomas vos",
        icon: <Gameicon name="testicons-clothes" size={80} color="white" />
        //HACER: icono pantis
    },
    {
        id: 67,
        title: "Quien sos???",
        description: "La persona con mas seguidores en instagram toma 3 tragos",
        icon: <MaterialCommunityIcons name="instagram" size={80} color="white" />
    },
    {
        id: 68,
        title: "",
        description: "Toman todos los del sexo opuesto",
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
        description: "Si la persona a la que le diste tu ultimo beso esta jugando, tomas",
        icon: <MaterialIcons name="history" size={80} color="white" />

    },
    {
        id : 71,
        title : "Peti",
        description : "Toman todos los que sean mas petisos que vos",
        icon : <Gameicon name="testicons-body-height" size={80} color="white" />
    },
    {   
        id : 72,
        title : "",
        description : "Toman todos los solteros",
        icon : <Gameicon name="testicons-chained-heart" size={80} color="white" />
    }, 
    {   
        id : 73,
        title : "",
        description : "Toman todas las solteras",
        icon : <Gameicon name="testicons-chained-heart" size={80} color="white" />
    },  
    {
        id: 74,
        title: "Colorin colorado",
        description: "Nombrar colores. Quien repite o no sabe que decir toma",
        icon: <Gameicon name="testicons-palette" size={80} color="white" />
    },
    {
        id: 75,
        title: "Arriba las manos",
        description: "Toman todos a los que les hayan robado alguna vez",
        icon: <Gameicon name="testicons-robber" size={80} color="white" />
    },
    {
        id: 76,
        title: "#CuidemosLosInodoros",
        description: "La ultima persona que fue al baño toma 3 tragos",
        icon: <FontAwesome5 name="toilet" size={80} color="white" />
    }, 
    {
        id: 77,
        title: "El mundo del reves",
        description: "Por un minuto tenes que parpadear al reves. Si no lo haces tomas 3 tragos",
        icon: <Gameicon name="testicons-eyelashes" size={80} color="white" />
    },
    {
        id: 78,
        title: "",
        description: "Por los proximos 2 turnos tenes que tener los ojos cerrados. Si los abris tomas 2 tragos",
        icon: <Gameicon name="testicons-blindfold" size={80} color="white" />
    },
    {
        id: 79,
        title: "Te juro que no estoy borracho",
        description: "Parate y hace el 4. Si el resto determina que lo hiciste bien tomas 3 tragos, sino tomas 1 trago",
        icon: <MaterialCommunityIcons name="numeric-4-box-multiple" size={80} color="white" />
    },
    {
        id: 80,
        title: "",
        description: "Toman todos los que esten usando una prenda oversize",
        icon: <Ionicons name="shirt-sharp" size={80} color="white" />
    },
    {
        id: 81,
        title: "Camaleon",
        description: "Imita a otro jugador. El primero en adivinar elige a alguien para que tome",
        icon: <Gameicon name="testicons-chameleon-glyph" size={80} color="white" />
    },
    {
        id: 82,
        title: "",
        description: "Elegi a alguien para un concurso de puteadas. El que se quede sin ideas toma 2 tragos",
        icon: <Gameicon name="testicons-discussion" size={80} color="white" />
    },
    {
        id: 83,
        title: "Democracia",
        description: "Todos votan a alguien para que tome",
        icon: <Gameicon name="testicons-vote" size={80} color="white" />
    },
    {
        id: 84,
        title: "Oscar al mas borracho",
        description: "Imita una escena de una pelicula. El primero en adivinar elige a alguien para que tome",
        icon: <Gameicon name="testicons-film-projector" size={80} color="white" />
    },
    {
        id: 85,
        title: "",
        description: "Toman todas las personas cuyo nombre empiece con una vocal",
        icon: <MaterialCommunityIcons name="alpha-a-box" size={80} color="white" />
    },
    {
        id: 86,
        title: "",
        description: "Mencionar marcas de cerveza. Quien repite o no sabe que decir toma",
        icon: <Gameicon name="testicons-beer-stein" size={80} color="white" />
    },
    {
        id: 87,
        title: "Vecino de cumpleaños",
        description: "Toman todos los que hayan nacido en el mismo mes que vos",
        icon: <Gameicon name="testicons-calendar" size={80} color="white" />
    },
    {
        id: 88,
        title: "",
        description: "A la cuenta de 3 todos deben levantar o bajar el pulgar. Quienes hagan lo contrario a vos toman",
        icon: <Gameicon name="testicons-thumb-up" size={80} color="white" />

    },
    {
        id: 89,
        title: "Shhhhhh",
        description: "A partir de ahora debe reinar el silencio. Quien hable o se ria toma 3 tragos",
        icon: <Gameicon name="testicons-mute" size={80} color="white" />
    },
    {
        id: 90,
        title: "",
        description: "Conta 2 verdades y 1 mentira. Si la persona que deseo adivinar no acierta toma 2 tragos, sino toma vos",
        icon: <Gameicon name="testicons-think" size={80} color="white" />
    },
    {
        id: 91,
        title: "",
        description: "Toman todos los que usen anteojos",
        icon: <Gameicon name="testicons-sunglasses" size={80} color="white" />
    },
    {
        id: 92,
        title: "",
        description: "Todos los que hayan desaprobado o nunca hayan rendido el examen de conducir toman",
        icon: <Gameicon name="testicons-steering-wheel" size={80} color="white" />
    },
    {
        id: 93,
        title: "",
        description: "Toman todos menos vos",
        icon: <Gameicon name="testicons-podium-winner" size={80} color="white" />
    },
    {
        id: 94,
        title: "",
        description: "Tomas vos y los de tus costados",
        icon: <Gameicon name="testicons-three-friends" size={80} color="white" />
    },
    {
        id: 95,
        title: "",
        description: "Hace tu mejor sonido de gemido o toma 2 tragos",
        icon: <Gameicon name="testicons-shouting" size={80} color="white" />
    },
    {
        id: 96,
        title: "",
        description: "Mencionar gente que salga en Luzu. Quien repita o no sepa que decir toma",
        icon: <AntDesign name="youtube" size={80} color="white" />
    },
    {
        id: 97,
        title: "Cara de poker",
        description: "Por los proximos 5 turnos tienen que estar completamente serios. Quien no lo cumpla toma 1 trago",
        icon: <Gameicon name="testicons-angry-eyes" size={80} color="white" />
    },
    {
        id: 98,
        title: "Whiskyy",
        description: "Entre todos deberan elegir un objeto para que te saques una foto y la subas a una story. Si no lo haces tomas 2 tragos",
        icon: <MaterialCommunityIcons name="instagram" size={80} color="white" />
    },
    {
        id: 99,
        title: "",
        description: "Subi esta carta a tu historia. Por cada like tomas 1 trago",
        icon: <Gameicon name="testicons-glass-shot" size={80} color="white" />
    },
    {
        id: 100,
        title: "",
        description: "Subi esta carta a tu historia. Por cada respuesta tomas 1 trago",
        icon: <Gameicon name="testicons-glass-celebration" size={80} color="white" />
    },
    {
        id: 101,
        title: "Desconocidos",
        description: "Por 5 turnos no se pueden decir nombres. Quien lo haga toma 1 trago",
        icon: <Gameicon name="testicons-talk" size={80} color="white" />
    },
    {
        id: 102,
        title: "Game Over",
        description: "Esta carta te da la posibilidad de terminar el juego. Si la usas, todos los demas toman 2 tragos",
        icon: <Gameicon name="testicons-finish-line" size={80} color="white" />
    },
    {
        id: 103,
        title: "",
        description: "Toma si tenes una story subida. Si es de comida, toma 2 tragos. Si es una selfie, borrala.",
        icon: <MaterialCommunityIcons name="food-variant-off" size={80} color="white" />
    },
    {
        id: 104,
        title: "",
        description: "Si durante el juego, te tiraste un pedo. Toma 2 tragos",
        icon: <Gameicon name="testicons-smoke-bomb" size={80} color="white" />
    },
    {
        id: 105,
        title: "Jugo cagoneta pa?",
        description: "Conta cuando fue la ultima vez que te cagaste encima. Si no lo haces tomas 2 tragos",
        icon: <FontAwesome5 name="toilet-paper" size={80} color="white" />
    },
    {
        id: 106,
        title: "Mucho maple",
        description: "Si hay mas varones que mujeres, toman todos los varones.",
        icon: <Gameicon name="testicons-egg-clutch" size={80} color="white" />
    },
    {
        id: 107,
        title: "",
        description: "Toman todos los que no te hayan saludado en tu ultimo cumpleaños",
        icon: <Gameicon name="testicons-cake-slice" size={80} color="white" />
    },
    {
        id: 108,
        title: "",
        description: "Si preferis gatos antes que perros, andate de la fiesta. Na joda, toma 2 tragos... y andate de la fiesta",
        icon: <Gameicon name="testicons-cat" size={80} color="white" />
    },
    {
        id: 109,
        title: "",
        description: "Si tuviste una cita con alguien de una app de citas, toma 2 tragos",
        icon: <Fontisto name="tinder" size={80} color="white" />
    },
    {
        id: 110,
        title: "",
        description: "Aquel con el talle de zapas mas grande, toma. Ey.. buena tula bro",
        icon: <Gameicon name="testicons-running-shoe" size={80} color="white" />
    },
    {
        id: 111,
        title: "",
        description: "Toma si no tenes mas de 2 neuronas, es decir, si usas lentes de sol en la noche o dentro de tu casa",
        icon: <Gameicon name="testicons-sunglasses" size={80} color="white" />
    },
    {
        id: 112,
        title: "",
        description: "Mostra tu documento. Si estas sonriendo en la foto, toma.",
        icon: <Gameicon name="testicons-id-card" size={80} color="white" />
    },
    {
        id: 113,
        title: "",
        description: "El jugador mas cercano a la puerta toma",
        icon: <Gameicon name="testicons-door" size={80} color="white" />
    },
    {
        id: 114,
        title: "Cazabobos",
        description: "Levanten las manos todos los que les gusta la pizza con anana... Quien lo haga toma 2 tragos y es invitado cordialmente a retirarse",
        icon: <Gameicon name="testicons-pineapple" size={80} color="white" />
    },
    {
        id: 115,
        title: "QEPD Peso",
        description: "Toma si hoy revisaste el precio del dolar, se que lo necesitas...",
        icon: <Gameicon name="testicons-dolar" size={80} color="white" />
    },
    {
        id: 116,
        title: "",
        description: "Si hay un colorado en la fiesta, toman todos los que no lo sean. Y... tocate el izquierdo",
        icon: <MaterialCommunityIcons name="face-man-profile" size={80} color="red" />
    },
    {
        id: 117,
        title: "La musica murio hace 80 años",
        description: "Si tu cancion favorita es un reggaeton, toma 2 tragos y anda a escuchar musica de verdad",
        icon: <Gameicon name="testicons-musical-notes" size={80} color="white" />
    },
    {
        id: 118,
        title: "",
        description: "Si estas estudiando, toma 1 trago por cada año que te falte para recibirte",
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
        description: "Si tus medias tienen un agujero, toma 2 tragos",
        icon: <Gameicon name="testicons-socks" size={80} color="white" />
    },
    {
        id: 121,
        title: "",
        description: "Toman todos los que hayan sobrevivido a la pandemia sin contagiarse",
        icon: <MaterialIcons name="coronavirus" size={80} color="white" />
    },
    {
        id: 122,
        title: "Como amigos",
        description: "Toma un trago por cada vez que te friendzonearon, lo necesitas",
        icon: <Gameicon name="testicons-broken-heart" size={80} color="white" />
    },
    {
        id: 123,
        title: "Sisi ya te vimos",
        description: "Si sos estudiante de medicina evita subir una historia mostrando lo mucho que estudias. Como se que es imposible, toman 2 tragos.",
        icon: <Gameicon name="testicons-stethoscope" size={80} color="white" />
    },
    {
        id: 124,
        title: "",
        description: "Toman todos los militantes de algun partido politico, el que se ponga a discutir toma 3 tragos mas",
        icon: <Gameicon name="testicons-vote" size={80} color="white" />
    },
    {
        id: 125,
        title: "",
        description: "Todos deben poner su celular en el medio de la mesa. El primero que lo toque o recibe una notificacion, toma 2 tragos",
        icon: <Gameicon name="testicons-vibrating-smartphone" size={80} color="white" />
    },
    {
        id: 126,
        title: "",
        description: "Si te llamas Juan, Agustin, Tomas, Sofia, Camila o  Milagros toma 2 tragos en honor a la poca originalidad de tus viejos",
        icon: <Gameicon name="testicons-baby-face" size={80} color="white" />
    },
    {
        id: 127,
        title: "",
        description: "Cuenten hasta 3 y voten a alguien para que tome. Cada uno toma 1 trago por cada voto recibido",
        icon: <Gameicon name="testicons-pointing" size={80} color="white" />
    },
    {
        id: 128,
        title: "Repeticion",
        description: "Toman de nuevo todos los que hayan tomado en la carta anterior",
        icon: <Gameicon name="testicons-cycle" size={80} color="white" />
    },
    {
        id: 129,
        title: "",
        description: "Si tuviste fotolog, toma 2 tragos viejo",
        icon: <Fontisto name="photograph" size={80} color="white" />
    },
    {
        id: 130,
        title: "",
        description: "Si alguna vez intentaste ser youtuber o streamer, toma",
        icon: <Gameicon name="testicons-video-camera" size={80} color="white" />
    },
    {
        id: 131,
        title: "A nadie le importa",
        description: "Toma si en tu descripcion de instagram tenes la ciudad donde vivis",
        icon: <Gameicon name="testicons-position-marker" size={80} color="white" />
    },
    {
        id: 132,
        title: "Mejores amigos",
        description: "Toma 1 trago por cada 10 personas que tengas en tus mejores amigos de instagram",
        icon: <MaterialCommunityIcons name="star-circle" size={80} color="white" />
    },
    {
        id: 133,
        title: "Disfruten la fiesta",
        description: "Todos los que esten usando el celular toman 2 tragos",
        icon: <Gameicon name="testicons-smartphone" size={80} color="white" />
    },
    {
        id: 134,
        title: "En condicion de Android",
        description: "Toma si tenes un celular con Android",
        icon: <MaterialCommunityIcons name="android" size={80} color="white" />
    },
    {
        id: 135,
        title: "En condicion de Iphone",
        description: "Toma si tenes un celular con Iphone",
        icon: <MaterialCommunityIcons name="apple" size={80} color="white" />
    },
    {
        id: 136,
        title:"",
        description: "Toman los que alguna vez hayan tenido un blackberry",
        icon: <FontAwesome5 name="blackberry" size={80} color="white" />
    },
    {
        id: 137,
        title: "",
        description: "Si fuiste a un casino, toma. Si perdiste plata, toma 2 tragos",
        icon: <Gameicon name="testicons-slot-machine" size={80} color="white" />
    },
    {
        id: 138,
        title: "",
        description: "Si alguna vez te sacaste una selfie llorando, toma",
        icon: <Gameicon name="testicons-tear-tracks" size={80} color="white" />
    },
    {
        id: 139,
        title: "",
        description: "Si alguien vomito en la ultima fiesta que fuiste, toma 2 tragos",
        icon: <Gameicon name="testicons-vomiting" size={80} color="white" />
    },
    {
        id: 140,
        title: "Vendepatria",
        description: "Toma si te queres ir del pais",
        icon: <Gameicon name="testicons-boarding-pass" size={80} color="white" />
    },
    {
        id: 141,
        title: "Precavido vale por dos",
        description: "Toma si tenes un condon en tu billetera o cartera",
        icon: <Gameicon name="testicons-shield-bash" size={80} color="white" />
    },
    {
        id: 142,
        title: "",
        description: "Si tu pelicula favorita es el lobo de wall street, probablemente estes en un ponzi. Toma 2 tragos",
        icon: <Entypo name="line-graph" size={80} color="white" />
    },
    {
        id: 143,
        title: "",
        description: "Toma si tenes muchas alarmas seguidas en tu celular",
        icon: <Gameicon name="testicons-alarm-clock" size={80} color="white" />
    },
    {
        id: 144,
        title: "",
        description: "Toma si alguna vez te quedaste dormido en el colectivo",
        icon: <Gameicon name="testicons-bus" size={80} color="white" />
    },
    {
        id: 145,
        title: "",
        description: "Si alguna vez viste un ovni, conta tu experiencia y toma",
        icon: <Gameicon name="testicons-ufo" size={80} color="white" />
    },
    {
        id: 146,
        title: "Musico",
        description: "Toma 1 trago por cada instrumento que sepas tocar",
        icon: <Gameicon name="testicons-trumpet" size={80} color="white" />
    },
    {
        id: 147,
        title: "",
        description: "Si tenes alguna discusion pendiente con alguien, este es el momento para resolverla. Quien salga votado como perdedor toma",
        icon: <Gameicon name="testicons-tribunal-jury" size={80} color="white" />
    },
    {
        id: 148,
        title: "",
        description: "Si te lavaste los dientes antes de venir a la fiesta, toma 2 tragos. Si no tomas sos un hdp",
        icon: <Gameicon name="testicons-toothbrush" size={80} color="white" />
    },
    {
        id: 149,
        title: "En cualquier parte",
        description: "Si estan jugando Vaso Polaco en un bar, toman todos",
        icon: <Gameicon name="testicons-tavern-sign" size={80} color="white" />
    },
    {
        id: 150,
        title: "",
        description: "Si te vacunaste en el ultimo año, toma",
        icon: <Gameicon name="testicons-syringe" size={80} color="white" />
    },
    {
        id: 151,
        title: "",
        description: "Si alguien ya ensucio el piso con bebidas, toma el culpable",
        icon: <Gameicon name="testicons-sticky-boot" size={80} color="white" />
    },
    {
        id: 152,
        title: "",
        description: "Toman todos los vegetarianos y veganos",
        icon: <Gameicon name="testicons-raddish" size={80} color="white" />
    },
    {
        id: 153,
        title: "",
        description: "Si comiste pizza antes de venir a la fiesta, toma 2 tragos",
        icon: <Gameicon name="testicons-pizza-slice" size={80} color="white" />
    },
    {
        id: 154,
        title: "",
        description: "Toma el mas fuerte de la fiesta",
        icon: <Gameicon name="testicons-muscle-up" size={80} color="white" />
    },
    {
        id: 155,
        title: "",
        description: "Toman todos los que tengan los abdominales marcados",
        icon: <Gameicon name="testicons-muscular-torso" size={80} color="white" />
    },
    {
        id: 156,
        title: "",
        description: "Toman todos los que hayan sido detenidos alguna vez",
        icon: <Gameicon name="testicons-mug-shot" size={80} color="white" />
    },
    {
        id: 157,
        title: "",
        description: "Si estan jugando en ronda, toma",
        icon: <Gameicon name="testicons-meeple-circle" size={80} color="white" />
    },
    {
        id: 158,
        title: "",
        description: "Si alguno esta tomando alguna medicacion, toma... Espero que no sea alcohol",
        icon: <Gameicon name="testicons-medicine-pills" size={80} color="white" />
    },
    {
        id: 159,
        title: "",
        description: "Toma si alguna vez te pico una abeja",
        icon: <Gameicon name="testicons-bee" size={80} color="white" />
    },
    {
        id: 160,
        title: "",
        description: "La proxima persona que te mire fijo a los ojos, toma 2 tragos",
        icon: <Gameicon name="testicons-look-at" size={80} color="white" />
    },
    {
        id: 161,
        title: "",
        description: "Hasta que vuelvas a sacar una carta, todos deben darte un cumplido cada vez que te toque tomar.",
        icon: <Gameicon name="testicons-love-letter" size={80} color="white" />
    }
];

    
export default cartas;
    