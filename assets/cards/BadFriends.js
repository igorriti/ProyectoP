

const cartas = [
    {
        id: 1,
        description: "Quien se pide lo mas caro de la carta y se hace el boludo para dividir la cuenta entre todos",
    },
    {
        id: 2,
        description: "Uno de nosotros se hace el boludo pero esta secretamente resentido por el resultado de otra carta. Quien?",
    },
    {
        id: 3,
        description: "Quien es el mas probable de terminar en cana?",
    },
    {
        id: 4,
        description: "Atropellamos a alguien. Quien propone fugarnos?",
    },
    {
        id: 5,
        title : "Me viste Steve Wonder",
        description: "En todo grupo de amigos hay alguien que se viste para el ojete. En el nuestro es...",
    },
    {
        id: 6,
        description: "¿Quién de nosotros es secretamente un supervillano?",
    },
    {
        id: 7,
        description: "¿Quién de nosotros pide plata prestada sabiendo que nunca la va a devolver?",
    },
    {
        id: 8,
        description: "Quién de nosotros es en realidad un robot?",
    },
    {
        id: 9,
        description: "Jamás tocaría la ropa interior de...",
    },
    {
        id: 10,
        description: "Nos elijen senadores a todos. ¿Quién hace más guita cobrando coimas?",
    },
    {
        id: 11,
        description: "¿Quién se va a casar con alguien que todavía no nació?",
    },
    {
        id: 12,
        description: "¿Quién mea en la pileta?",
    },
    {
        id: 13,
        description: "¿Quién tiene más chances de ir a la cárcel por un crimen que no cometió?",
    },
    {
        id: 14,
        description: "Ganamos la lotería y dividimos el premio entre todos. ¿Quién es el primero en perder todo lo que ganó?",
    },
    {
        id: 15,
        description: "A partir de este año van a entregar un Nobel a la falta de aseo personal. ¿Quién de nosotros va a ser nominado seguro?",
    },
    {
        id: 16,
        description: "Viajamos todos a las Vegas. ¿Quién vuelve casado?",
    },
    {
        id: 17,
        description: "Uno de nosotros hace 10 años tenía un futuro muy prometedor. ¿Quién?",
    },
    {
        id: 18,
        description: "Somos todos cómplices de un crimen y nos están interrogando. ¿Quién es el primero en quebrar y confesar?",
    },
    {
        id: 19,
        description: "A uno de nosotros le encuentran una colección de chicles masticados por sus ex. ¿A quién?",
    },
    {
        id: 20,
        description: "Si nos hiciéramos mafiosos, quién sería el capo?",
    },
    {
        id: 21,
        description: "Somos los protagonistas de una peli de suspenso. Al final, ¿quién es el asesino? ",
    },
    {
        id: 22,
        description: "Un amigo en común necesita con urgencia dadores de sangre. \n ¿Quién dice que fue y no fue?         ",
    },
    {
        id: 23,
        description: "El apocalipsis zombie es una realidad, ¿Quién muere primero? ",
    },
    {
        id: 24,
        description: "Con quién te harías el dormido para no tener que escucharlo hablar en un viaje muy largo?",
    },
    {
        id: 25,
        description: "Nos anotamos en un programa de talentos. ¿Quién se va en el primer capítulo?",
    },
    {
        id: 26,
        description: "A quién no querrías jamás como jefe?",
    },
    {
        id: 27,
        description: "Uno de nosotros está envejeciendo peor que los demás. ¿Quién? ",
    },
    {
        id: 28,
        description: "En el futuro cercano, uno de nosotros va a morir, víctima de un ajuste de cuentas. ¿Quién? ",
    },
    {
        id: 29,
        description: "Uno de nosotros tiene el fetiche de comer caca. ¿Quién?",
    },
    {
        id: 30,
        description: "Uno de nosotros debutó a los 11. ¿Quién? ",
    },
    {
        id: 31,
        description: "¿A quien nunca le dejarias un hijo tuyo a cargo? ",
    },
    {
        id: 32,
        description: "Quien es el mas probable de vivir en la calle en un futuro?",
    },
    {
        id: 33,
        description: "Uno de nosotros es muy inmaduro. ¿Quién?",
    },
    {
        id: 34,
        description: "Quien de aca se cree Albert Einstein y no lo es?",
    },
    {
        id: 35,
        description: "Si todos nos dedicáramos a vivir del stand up, ¿quién se muere de hambre primero?         ",
    },
    {
        id: 36,
        description: "Vuelve la colimba. ¿Quién se pega un tiro en el pie para no hacerla? ",
    },
    {
        id: 37,
        description: "Somos los biólogos más capaces del planeta. ¿Quién se inventa un virus para después vender la cura? ",
    },
    {
        id: 38,
        description: "A quien te daria menos pena pegarle una trompada en la cara?",
    },
    {
        id: 39,
        description: "Quien de aca venderia una reliquia familiar para salir de joda?",
    },
    {
        id: 40,
        description: "Quien de nosotros se cree superior a los demas?",
    },
    {
        id: 41,
        description: "Estás en una situación complicada. ¿A quién no le pedís consejo? ",
    },
    {
        id: 42,
        description: "Quien es el que mas arrepentido puede estar de jugar a este juego?",
    },
    {
        id: 43,
        description: "¿A quién de nosotros no te animarías a hacer enojar?",
    },
    {
        id: 44,
        description: "De un día para el otro, el mundo se queda sin Internet. ¿Quién se mata primero?",
    },
    {
        id: 45,
        description: "Te llama un amigo para preguntarte si te interesa ser tu propio jefe. Quien es?",
    },
    {
        id: 46,
        description: "Uno de nosotros tiene un hijo no reconocido. ¿Quién? ",
    },
    {
        id: 47,
        description: "Uno de nosotros tiene una doble vida. ¿Quién? ",
    },
    {
        id: 48,
        description: "El día que la ciencia descubra cómo agregarnos otro set de genitales, quién es el primero en la fila?  ",
    },
    {
        id: 49,
        description: "Uno de nosotros, secretamente, le desea la muerte a todos los demás. ¿Quién?",
    },
    {
        id: 50,
        description: "Nos despertamos en una isla desierta sin ningún tipo de alimento. ¿Quién propone que nos comamos a uno de nosotros? ",
    },
    {
        id: 51,
        description: "A todos nos da miedo subirnos al auto cuando maneja... ",
    },
    {
        id: 52,
        description: "Quien es el mas probable de salir de un examen diciendo que le fue mal para despues terminar sacando 10?",
    },
    {
        id: 53,
        description: "Necesitamos a alguien para comandar a nuestras tropas. Por favor, que no sea...",
    },
    {
        id: 54,
        description: "Fuimos apóstoles. ¿Quién fue Judas?",
    },
    {
        id: 55,
        description: "Uno de nosotros tiene una cuenta secreta en OnlyFans. Quién? ",
    },
    {
        id: 56,
        description: "Viajamos en el tiempo, quien es el primero en romper la linea temporal?",
    },
    {
        id: 57,
        description: "Nos ofrecen 1000 dolares por cada cucharada de caca que nos comamos. Quien se hace rico?",
    },
    {
        id: 58,
        description: "Estamos en un avión sin control y quedan paracaídas para todos excepto uno. ¿Quién es el primero en agarrar un paracaídas y salvarse? ",
    },
    {
        id: 59,
        description: "Somos miembros de una banda de forajidos buscados en el Lejano Oeste. ¿La cabeza de quién vale menos? ",
    },
    {
        id: 60,
        description: "Fui asesinado. ¿Quién me mató?",
    },
    {
        id: 61,
        description: "Nos tiramos todos en paracaídas. ¿A quién no se le abre? ",
    },
    {
        id: 62,
        description: "Uno de nosotros cree que el mundo sería mejor sin salud pública. Quién? ",
    },
    {
        id: 63,
        description: "Entramos a twitter y vemos que uno de nosotros es Tendencia. ¿Quién? ",
    },
    {
        id: 64,
        description: "Somos candidatos a presidente. ¿Quién consigue menos votos?",
    },
    {
        id: 65,
        description: "Si todos fuésemos presidentes de un país, ¿Quién sería el primero en imponer la pena de muerte? ",
    },
    {
        id: 66,
        description: "¿Quién se gana una enorme fortuna en el casino y desaparece de nuestras vidas por completo?",
    },
    {
        id: 67,
        description: "Satán nos ofrece cumplir todos nuestros deseos a cambio de nuestra alma. ¿Quién agarra? "        ,
    },
    {
        id: 68,
        description: "Uno de nosotros está enamorado secretamente de otro. ¿Quién? ",
    },
    {
        id: 69,
        description: "Cada uno publica un libro con su propia autobiografía. ¿Cuál te interesa menos?         ",
    },
    {
        id: 70,
        description: "¿Quién de nosotros se masturbó más veces el año pasado? ",
    },
    {
        id: 71,
        description: "¿Con quién de nosotros JAMÁS participarías en un trío? ",
    },
    {
        id: 72,
        description: "Uno de ustedes quiere tener sexo conmigo. ¿Quién? " ,
    },
    {
        id: 73,
        description: "Uno de nosotros es MUY irresponsable a la hora de cuidarse durante el sexo. ¿Quién? ",
    },
    {
        id: 74,
        description: "¿Quién de nosotros JAMÁS participaría en una orgía?",
    },
    {
        id: 75,
        description: "Uno de nosotros lo exita la idea de acostarse con personas casadas. ¿A quién? ",
    },
    {
        id: 75,
        description: "Ya es posible la clonación humana. ¿Quién se clona para poder coger consigo mismo?",
    },
    {
        id: 76,
        description: "Los genitales de uno de nosotros son el molde de juguetes sexuales. ¿Los de quién? ",
    },
    {
        id: 77,
        description: 'La estrella del porno, Dirty sanchez, esta entre nosotros... Quien es?',  
    },
    {
        id: 78,
        description: "A uno de nosotros les va el voyeurismo, quien?",
    },
    {
        id: 79,
        description: "Quien le robaria la pension a su abuela para pagarse unos porros?",
    },
    {
        id: 80,
        description: "Tenes una emergencia, a quien no llamas porque no te va a atender?",
    },
    {
        id: 81,
        description: "Quien miente mas en sus anecdotas?",
    },
    {
        id: 82,
        description: "Quien de aca es mas probable que sea reemplazado por una inteligencia artificial?",
    },
    {
        id: 83,
        description: "Uno de aca tiene mas pelos en los sobacos que en la cabeza, y es...",
    },
    {
        id: 84,
        description: "Uno de nosotros entra a la casa de Gran hermano, quien es?",
    },
    {
        id: 85,
        description: "Alguno de aca no va a terminar la noche, quien es?",
    },
    {
        id: 86,
        description: "Quien siempre quiere jugar juegos estupidos de cartas?",
    },
    {
        id: 87,
        description: "Uno de nosotros muere y a su funeral no va casi nadie, quien es?",
    },
    {
        id: 88,
        description: "Todos siempre escuchamos la misma anecdota de...",
    },
    {
        id: 89,
        description: "Alguien de aca siempre se quiere hacer el distinto con la musica, y es...",
    },
    {
        id: 90,
        description: "La probabilidad de morir por un rayo es de 1 entre un millon. A quien es probable que veamos electrocutado?",
    },
    {
        id: 91,
        description: "Estas volviendo a tu casa y un piquete te impide el paso. Quien de aca te saluda con un cartel en mano?",
    },
    {
        id: 92,
        description: "Mañana vamos a ver las fotos de hoy, quien va a salir mas comprometido?",
    },
    {
        id: 93,
        description: "Sale un trend nuevo en tik tok, quien es el primero en romper los huevos para grabarlo?",
    },
    {
        id: 94,
        description: "Nunca le presentaria mi novio/a a...",
    },
    {
        id: 95,
        description: "Yo se que ... quiere conmigo",
    },
    {
        id: 96,
        description: "Es un milagro que todavia no se haya muerto ...",
    },
    {
        id: 97,
        description: "Echaria de la casa a ...",
    },
    {
        id: 98,
        description: "Ni la ciencia puede explica como salio de la cueva ...",
    },
    {
        id: 99,
        description: "... se garcharia a un familiar mio si pudiera",
    },
    {
        id: 100,
        description: "Quien estaria de nosotros estaria con alguines del mismo sexo pero despues diria que \"no es bi\"? ",
    },
    {
        id: 101,
        description: "La persona mas infumable para ver una pelicula es...",
    },
    {
        id: 102,
        description: "No le contaria ningun secreto a...",
    },
    {
        id: 103,
        description: "La persona con la higiene mas cuestionable es...",
    },
    {
        id: 104,
        description: "La persona que mas le cuesta decir \"te quiero\" es...",
    },
    {
        id: 105,
        description: "La persona que mas le cuesta entender una consigna es...",
    },
    {
        id: 106,
        description: "Quien siempre hace las preguntas mas boludas? ",
    },
    {
        id: 107,
        description: "El mas insoportable con el futbol es...",
    },
    {
        id: 108,
        description: "Siempre hay uno que quiere cortar una juntada para jugar al truco y es...",
    },
    {
        id: 109,
        description: "Quien es el mas \"mala leche\"?",
    },
    {
        id: 110,
        description: "Quien es sencillamente un sorete?",
    },
    {
        id: 111,
        description: "... anda de relacion en relacion",
    },
    {
        id: 112,
        description: "... piensa que todos le estan chamuyando",
    },
    {
        id: 113,
        description: "Quien cambia de cancion cada 30 segundos?",
    },
    {
        id: 114,
        description: "Uno de nosotros sera alcoholico en un futuro y es...",
    },
    {
        id: 115,
        description: "El mas probable en terminar en una estafa piramidal es...",
    },
    {
        id: 116,
        description: "Quien haria cosas bastante disgutantes por solo 100 dolares? ",
    },
    {
        id: 117,
        description: "La mama de quien es una t**la?",
    },
    {
        id: 118,
        description: "Me gustaria que el papa de... sea mi suggar daddy",
    },
    {
        id: 119,
        description: "Quien se rie por cualquier boludes?",
    },
    {
        id: 120,
        description: "Quien tiene mas miedo de jugar a este juego?",
    },
    {
        id: 121,
        description: "Quien pierde sus cosas todo el tiempo?",
    },
    {
        id: 122,
        description: "... tiene gustos de viejo",
    },
    {
        id: 123,
        description: "Quien tiene una excusa para todo?",
    },
    {
        id: 124,
        description: "Quien siempre cuesta la misma historia que no le causa a nadie?",
    },
    {
        id: 125,
        description: "Quien es la persona mas falsa? ",
    },
    {
        id: 126,
        description: "Quien se hace swiftie simplemente para chamuyarse a alguien?",
    },
    {
        id: 127,
        description: "La persona mas facil de convencer es...",
    },
    {
        id: 128,
        description: "Quien es el mas \"cara dura\"?",
    },
    {
        id: 129,
        description: "A quien le tenes que avisar 3 cuadras antes que estas llegando para que salga?",
    },
    {
        id: 130,
        description: "Quien seria un pesimo presidente?",
    },
    {
        id: 131,
        description: "Quien seria muy malo cuñado o cuñada?",
    },
    {
        id: 132,
        description: "Quien se esta arrepintiendo de haber venido?",
    },
    {
        id: 133,
        description: "La persona que discute todo, incluso aun sabiendo que esta equivocado es...",
    },
    {
        id: 134,
        description: "El mas vende humo de todos es...",
    },
    {
        id: 135,
        description: "Quien es mas probable que termine limpiando baños?",
    },
    {
        id: 136,
        description: "El mas probable en unirse al club de los 27 es...",
    },
    {
        id: 137,
        description: "El mas probable de poner un nombre muy feo a su hijo es...",
    },
    {
        id: 138,
        description: "La persona mas probable de dormir con alguien en la primera cita es...",
    },
    {
        id: 139,
        description: "... estaria con su jefe/a o profesor/a por un ascenso o una buena nota",
    },
    {
        id: 140,
        description: "Es muy problable encontrarse a ... en un club de strippers ",
    },
    {
        id: 141,
        description: "La persona mas gatera es...",
    },
    {
        id: 142,
        description: "Quien es mas problable de reirse en un funeral",
    },
    {
        id: 143,
        description: "Quien es capaz de chamuyarse a alguien en un velorio?",
    },
    {
        id: 144,
        description: "Quien es capaz d echamuyarse a otra persona en una cita?",
    },
    {
        id: 145,
        description: "Quien es mas probable que tape el baño?",
    },
    {
        id: 146,
        description: "Quien hace los peores mates? ",
    },
    {
        id: 147,
        description: "Quien es mas probable que se olvide de tu cumpleaños?",
    },
    {
        id: 148,
        description: "Quien cocina los peores asados?",
    },
    {
        id: 149,
        description: "Quien quiere ser el centro de atencion todo el tiempo?",
    },
    {
        id: 150,
        description: "Vienen los aliens y nos piden de ofrenda a uno de nosotros para investigarlo, a quien le damos?",
    },
    {
        id: 151,
        description: "... es un genio malvado",
    },
    {
        id: 152,
        description: "Quien tendria sexo en publico sin ningun problema?",
    },
    {
        id: 153,
        description: "Quien es mas probable que se haga un tatuaje de un meme?",
    },
    {
        id: 154,
        description: "Quien es mas probable que sea un asesino serial?",
    },
    {
        id: 155,
        description: "Quien es mas probable que sea un pesimo padre/madre?",
    },
    {
        id: 156,
        description: "Quien es mas probable que sea un pesimo novio/a?",
    },
    {
        id: 157,
        description: "Quien es mas probable que sea un muy mal jefe?",
    },
    {
        id: 158,
        description: "La purga es real, quien es el primero en festejarlo?",
    },
      
]

export default cartas;