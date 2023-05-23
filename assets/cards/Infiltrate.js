
 const palabras = [
    "gato", "pelota", "árbol", "casa", "computadora", "sol", "libro", "perro", "nube", "pintura",
    "camión", "flor", "piano", "mar", "reloj", "café", "puerta", "montaña", "dulce", "avión",
    "río", "mesa", "carro", "llave", "lápiz", "playa", "jardín", "caballo", "sombrero", "radio",
    "espejo", "ciudad", "fuego", "tren", "cámara", "tarjeta", "foto", "zapato", "luz", "bicicleta",
    "mapa", "ropa", "película", "pintura", "teléfono", "naturaleza", "esfera", "pasta", "piscina", "chocolate",
    "cama", "montaña", "escuela", "guitarra", "comida", "botella", "ventana", "cuchara", "globo", "bolígrafo",
    "arcoiris", "peluche", "música", "luna", "periódico", "bolso", "teléfono", "caja", "elefante", "anillo",
    "silla", "teatro", "caracol", "reloj", "manzana", "carretera", "paleta", "estrella", "palabra", "pintor",
    "sandía", "fruta", "teclado", "aventura", "ángel", "rana", "nadar", "torre", "calcetín", "pescado",
    "hierba", "sopa", "galleta", "pastel", "helado", "caballero", "robot", "invierno", "primavera", "verano",
    "mate", "asado", "milanesa", "empanada", "tango", "matear", "chamuyar", "boludo", "che", "gorra",
    "bondi", "fiaca", "quilombo", "laburar", "copa", "fernet", "choripán", "factura", "pochoclo", "pibe",
    "morfar", "birra", "yapa", "chori", "facha", "canilla", "morfi", "mateada", "rata", "fulbo",
    "economia","plata", "joda", "remis", "piola", "chamuyo", "parva", "trolo", "cafecito", "cancha",
    "boliches", "fierro", "yeta", "boliche", "medialuna", "pochoclera", "quilombo", "laburo", "chaucha", "chorra",
    "guita", "guiso", "diario", "café", "fainá", "mishi", "vereda", "careta", "telo", "topu",
    "crack", "banda", "vendehumo", "luz", "tiempo", "agua", "fuego", "aire", "tierra", "amor", "odio", "risa", "llanto",
    "calle", "ciudad", "país", "música", "arte", "color", "vida", "sueño", "trabajo", "escuela",
    "libertad", "familia", "amigo", "historia", "naturaleza", "animal", "mar", "montaña", "sol", "luna",
    "estrella", "cielo", "playa", "río", "jardín", "bosque", "camino", "viaje", "aventura", "creatividad",
    "imaginación", "alegría", "esperanza", "energía", "paz", "inspiración", "silencio", "ruido", "sabor", "olfato",
    "textura", "forma", "recuerdo", "fantasía", "gusto", "emoción", "cambio", "sorpresa", "cambio", "éxito",
    "fracaso", "sabiduría", "curiosidad", "paciencia", "coraje", "amabilidad", "generosidad", "honestidad", "amor", "felicidad",
    "tristeza", "sueño", "desafío", "logro", "satisfacción", "celebración", "pensamiento", "reflexión", "búsqueda", "despertar",
    "pizza", "hamburguesa", "ensalada", "sushi", "pasta", "queso", "pollo", "carne", "pescado", "arroz",
    "fideos", "helado", "fruta", "verdura", "pan", "torta", "chocolate", "caramelo", "galleta", "yogur",
    "té", "café", "zumo", "batido",  "taco", "burrito", "churro", "mozo", "raton", "bodegon", 
    "donut", "nuez", "almendra", "maní", "espagueti", "chicle", "chips", "palomitas", "malvavisco", "nachos",  "sopa", "salchicha", "salsa", "mayonesa", "mostaza",
    "ketchup", "huevo", "tortilla",  "leche", "manteca", "mermelada", "aceite", "vinagre", "azúcar",
    "sal", "especias", "canela", "vainilla", "pimienta", "ajo", "cebolla", "tomate", "zanahoria",
    "balón", "arco", "jugador", "equipo", "estadio", "árbitro", "entrenador", "campeonato", "liga",
    "penalti", "falta", "táctica", "goleador", "defensa", "portero", "camiseta", "afición", "remate", "saque",
    "actor", "director", "guión", "escena", "película", "cine", "estreno", "premio", "trama",
    "personaje", "reparto", "drama", "comedia", "acción", "suspenso", "aventura", "romance", "fantasía", "documental",
    "elección", "presidente", "gobierno", "partido", "ley", "democracia", "oposición", "congreso", "senado", "político",
    "votación", "corrupción", "derechos", "justicia", "economía", "impuestos", "ideología", "poder", "campaña", "manifestación",
    "celebración", "fiesta", "invitados", "música", "baile", "decoración", "diversión", "amigos", "regalos", "brindis",
    "champán", "baile", "disfraces", "globos", "luces", "alegría", "velas", "confeti", "pista", "noche", "cerveza", "vino", "licor", "whisky", "ron", "vodka", "tequila", "champán", "coctel", "copa",
    "barra", "mojito", "margarita", "ginebra", "bebida", "brindis", "alcohol", "chupito", "botella",
    "banco", "dinero", "cuenta", "intereses", "crédito", "préstamo", "ahorros", "hipoteca", "inversión", "saldo",
    "cacahuete", "pato", "calzoncillos", "plátano", "salchicha", "chiste", "risa", "payaso", "nariz", "cosquillas",
    "bufón", "pedo", "manzana", "pavo", "zapato", "pepino", "sandía", "cucurucho", "tomate", "peluche",
    "globo", "pingüino", "culo", "almohada", "hamburguesa", "pollo", "cereza", "pantaloncillos", "coco", "melón",
    "fanstasma", "mufa", "calamar", "gorila", "bostero", "gallina", "picante", 
    // Lugares del mundo (40 palabras)
    "parís", "roma", "londres", "nueva york", "tokio", "barcelona", "sídney", "rio de janeiro", "amsterdam", "berlín",
    "marrakech", "atenas", "praga", "venecia", "kyoto", "moscú", "cape town", "zurich", "vancouver", "sevilla",
    "dublín", "lisboa", "budapest", "hanoi", "auckland", "delhi", "singapur", "cairo", "méxico", "buenos aires",
    "santiago", "copenhague", "helsinki", "reykjavik", "wellington", "lima", "hong kong", "bangkok", "mumbai", "manila",
    "dakar",

    // Objetos (40 palabras)
    "teléfono", "libro", "computadora", "reloj", "bicicleta", "gafas", "bolígrafo", "cámara", "paraguas", "botella",
    "maleta", "martillo", "silla", "llave", "cuchillo", "pelota", "cepillo", "vaso", "caja", "espejo",
    "televisor", "lámpara", "coche", "sartén", "cepillo", "sombrero", "cinturón", "crema", "cepillo de dientes", "plato",
    "caja de música", "bolsa", "herramienta", "radio", "alicates", "tabla de planchar", "taza", "ventilador", "imán",
    "calcetines", "pañuelo",

    // Deportes (40 palabras)
    "fútbol", "baloncesto", "tenis", "natación", "golf", "voleibol", "béisbol", "rugby", "ciclismo", "atletismo",
    "boxeo", "surf", "patinaje", "esgrima", "hockey", "karate", "equitación", "esquí", "yoga", "pesca",
    "triatlón", "bádminton", "gimnasia", "remo", "judo", "taekwondo", "escalada", "paddleboarding", "billar", "bowling",
    "snorkel", "paracaidismo", "slackline", "kickboxing", "halterofilia", "windsurf", "cricket", "tenis de mesa", "patinaje artístico", "parkour",

    // Naturaleza (40 palabras)
    "sol", "luna", "estrella", "montaña", "playa", "río", "océano", "bosque", "pradera", "desierto",
    "cascada", "isla", "volcán", "arco iris", "nieve", "tormenta", "árbol", "flor", "animal", "ave",
    "insecto", "pez", "tigre", "león", "elefante", "jirafa", "ballena", "delfín", "serpiente", "mariposa",
    "abeja", "libélula", "cactus", "hongo", "huracán", "avalancha", "glaciar", "pradera", "selva", "coral",

    // Nombres de países (40 palabras)
    "argentina", "brasil", "méxico", "canadá", "estados unidos", "francia", "italia", "españa", "reino unido", "alemania",
    "australia", "japón", "china", "india", "sudáfrica", "rusia", "corea del sur", "colombia", "chile", "perú",
    "ecuador", "costa rica", "cuba", "egipto", "grecia", "turquía", "noruega", "suecia", "dinamarca", "finlandia",
    "brunei", "israel", "países bajos", "panamá", "filipinas", "polonia", "portugal", "qatar", "singapur", "suiza",

    // Nombres de provincias argentinas (20 palabras)
    "buenos aires", "córdoba", "mendoza", "santa fe", "salta", "tucumán", "neuquén", "entre ríos", "chubut", "jujuy",
    "santiago del estero", "corrientes", "misiones", "san juan", "río negro", "formosa", "chaco", "catamarca", "la rioja", "san luis"
]; 
export default palabras;