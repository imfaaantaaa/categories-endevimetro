// AQUESTA INFORMACIÓ HA SIGUT EXTRETA DEL WEB endevimetro.cat
// SOTA CAP CONCEPTE VULL PRENDRE AUTORTIAT D'AQUESTA INFORMACIÓ, MÉS ENLLÀ D'UNES QUANTES MODIFICACIONS
// TOTS ELS DRETS RESERVATS ALS RESPONSABLES DEL WEB endevimetro.cat

const STATIONS = [
  {"name":"Hospital de Bellvitge","lines":[1]},{"name":"Bellvitge","lines":[1]},
  {"name":"Av. Carrilet","lines":[1,8]},{"name":"Rambla Just Oliveras","lines":[1]},
  {"name":"Can Serra","lines":[1]},{"name":"Florida","lines":[1]},
  {"name":"Torrassa","lines":[1,92,102]},{"name":"Santa Eulàlia","lines":[1]},
  {"name":"Mercat Nou","lines":[1]},{"name":"Plaça de Sants","lines":[1,5]},
  {"name":"Hostafrancs","lines":[1]},{"name":"Espanya","lines":[1,3,8]},
  {"name":"Rocafort","lines":[1]},{"name":"Urgell","lines":[1]},
  {"name":"Universitat","lines":[1,2]},{"name":"Catalunya","lines":[1,3,6,7]},
  {"name":"Urquinaona","lines":[1,4]},{"name":"Arc de Triomf","lines":[1]},
  {"name":"Marina","lines":[1]},{"name":"Glòries","lines":[1]},
  {"name":"Clot","lines":[1,2]},{"name":"Navas","lines":[1]},
  {"name":"La Sagrera","lines":[1,5,91,101]},{"name":"Fabra i Puig","lines":[1]},
  {"name":"Sant Andreu","lines":[1]},{"name":"Torras i Bages","lines":[1]},
  {"name":"Trinitat Vella","lines":[1]},{"name":"Baró de Viver","lines":[1]},
  {"name":"Santa Coloma","lines":[1]},{"name":"Fondo","lines":[1,91]},
  {"name":"Paral·lel","lines":[2,3]},{"name":"Sant Antoni","lines":[2]},
  {"name":"Passeig de Gràcia","lines":[2,3,4]},{"name":"Tetuan","lines":[2]},
  {"name":"Monumental","lines":[2]},{"name":"Sagrada Família","lines":[2,5]},
  {"name":"Encants","lines":[2]},{"name":"Bac de Roda","lines":[2]},
  {"name":"Sant Martí","lines":[2]},{"name":"La Pau","lines":[2,4]},
  {"name":"Verneda","lines":[2]},{"name":"Artigues | Sant Adrià","lines":[2]},
  {"name":"Sant Roc","lines":[2]},{"name":"Gorg","lines":[2,101]},
  {"name":"Pep Ventura","lines":[2]},{"name":"Badalona Pompeu Fabra","lines":[2]},
  {"name":"Zona Universitària","lines":[3,92]},{"name":"Palau Reial","lines":[3]},
  {"name":"Maria Cristina","lines":[3]},{"name":"Les Corts","lines":[3]},
  {"name":"Plaça del Centre","lines":[3]},{"name":"Sants Estació","lines":[3,5]},
  {"name":"Tarragona","lines":[3]},{"name":"Poble Sec","lines":[3]},
  {"name":"Drassanes","lines":[3]},{"name":"Liceu","lines":[3]},
  {"name":"Diagonal","lines":[3,5,6,7]},{"name":"Fontana","lines":[3]},
  {"name":"Lesseps","lines":[3]},{"name":"Vallcarca","lines":[3]},
  {"name":"Penitents","lines":[3]},{"name":"Vall d'Hebron","lines":[3,5]},
  {"name":"Montbau","lines":[3]},{"name":"Mundet","lines":[3]},
  {"name":"Valldaura","lines":[3]},{"name":"Canyelles","lines":[3]},
  {"name":"Roquetes","lines":[3]},{"name":"Trinitat Nova","lines":[3,4,11]},
  {"name":"Via Júlia","lines":[4]},{"name":"Llucmajor","lines":[4]},
  {"name":"Maragall","lines":[4,5]},{"name":"Guinardó | Hospital de Sant Pau","lines":[4]},
  {"name":"Alfons X","lines":[4]},{"name":"Joanic","lines":[4]},
  {"name":"Verdaguer","lines":[4,5]},{"name":"Girona","lines":[4]},
  {"name":"Jaume I","lines":[4]},{"name":"Barceloneta","lines":[4]},
  {"name":"Ciutadella | Vila Olímpica","lines":[4]},{"name":"Bogatell","lines":[4]},
  {"name":"Llacuna","lines":[4]},{"name":"Poblenou","lines":[4]},
  {"name":"Selva de Mar","lines":[4]},{"name":"El Maresme | Fòrum","lines":[4]},
  {"name":"Besòs Mar","lines":[4]},{"name":"Besòs","lines":[4]},
  {"name":"Cornellà Centre","lines":[5]},{"name":"Gavarra","lines":[5]},
  {"name":"Sant Ildefons","lines":[5]},{"name":"Can Boixeres","lines":[5]},
  {"name":"Can Vidalet","lines":[5]},{"name":"Ernest Lluch","lines":[5]},{"name":"Pubilla Cases","lines":[5]},
  {"name":"Collblanc","lines":[5,92,102]},{"name":"Badal","lines":[5]},
  {"name":"Entença","lines":[5]},{"name":"Hospital Clínic","lines":[5]},
  {"name":"Sant Pau | Dos de Maig","lines":[5]},{"name":"Camp de l'Arpa","lines":[5]},
  {"name":"Congrés","lines":[5]},{"name":"Virrei Amat","lines":[5]},
  {"name":"Vilapicina","lines":[5]},{"name":"Horta","lines":[5]},
  {"name":"El Carmel","lines":[5]},{"name":"El Coll | La Teixonera","lines":[5]},
  // L9 Sud (excloent Zona Universitària, Collblanc, Torrassa, ja incloses)
  {"name":"Can Tries | Gornal","lines":[92,102]},{"name":"Europa | Fira","lines":[8,92]},
  {"name":"Fira","lines":[92]},{"name":"Parc Logístic","lines":[92]},
  {"name":"Mercabarna","lines":[92]},{"name":"Les Moreres","lines":[92]},
  {"name":"El Prat Estació","lines":[92]},{"name":"Cèntric","lines":[92]},
  {"name":"Parc Nou","lines":[92]},{"name":"Mas Blau","lines":[92]},
  {"name":"Aeroport T2","lines":[92]},{"name":"Aeroport T1","lines":[92]},
  // L9 Nord (excloent La Sagrera, ja inclosa)
  {"name":"Onze de Setembre","lines":[91,101]},{"name":"Bon Pastor","lines":[91,101]},
  {"name":"Can Peixauet","lines":[91]},{"name":"Santa Rosa","lines":[91]},
  {"name":"Església Major","lines":[91]},{"name":"Singuerlín","lines":[91]},
  {"name":"Can Zam","lines":[91]},
  // L10 Sud (excloent Collblanc, Torrassa, Can Tries | Gornal)
  {"name":"Provençana","lines":[102]},{"name":"Ciutat de la Justícia","lines":[102]},
  {"name":"Foneria","lines":[102]},{"name":"Foc","lines":[102]},
  {"name":"Zona Franca","lines":[102]},{"name":"Port Comercial | La Factoria","lines":[102]},
  {"name":"Ecoparc","lines":[102]},{"name":"ZAL | Riu Vell","lines":[102]},
  // L10 Nord (excloent La Sagrera, Onze de Setembre, Bon Pastor, Gorg)
  {"name":"Llefià","lines":[101]},{"name":"La Salut","lines":[101]},
  // L11 (excloent Trinitat Nova, ja inclosa)
  {"name":"Casa de l'Aigua","lines":[11]},{"name":"Torre Baró | Vallbona","lines":[11]},
  {"name":"Ciutat Meridiana","lines":[11]},{"name":"Can Cuiàs","lines":[11]},
  // FGC L6, L7 (excloent Catalunya i Diagonal, ja incloses)
  {"name":"Provença","lines":[6,7]},{"name":"Gràcia","lines":[6,7]},
  {"name":"Sant Gervasi","lines":[6,7]},{"name":"Plaça Molina","lines":[6,7]},
  {"name":"Muntaner","lines":[6]},{"name":"Sarrià","lines":[6,12]},
  {"name":"La Bonanova","lines":[6]},{"name":"Les Tres Torres","lines":[6]},
  {"name":"Pàdua","lines":[7]},{"name":"El Putxet","lines":[7]},
  {"name":"Avinguda Tibidabo","lines":[7]},{"name":"Reina Elisenda","lines":[12]},
  // FGC L8 (excloent Espanya, Europa|Fira i Ciutat de la Justícia, ja incloses)
  {"name":"Magòria | La Campana","lines":[8]},{"name":"Ildefons Cerdà","lines":[8]},
  {"name":"Gornal","lines":[8]},{"name":"Sant Josep","lines":[8]},{"name":"Cornellà Riera","lines":[8]},
  {"name":"Almeda","lines":[8]},{"name":"Sant Boi","lines":[8]},
  {"name":"Molí Nou | Ciutat Cooperativa","lines":[8]}
];

// =============== Curated station sets (used by some predicates) ===============
// Estacions que porten el nom d'una persona concreta (històrica, cultural o religiosa).
// Inclou figures laiques (poetes, reis, polítics, urbanistes) i sants.
// Edita la llista al teu gust si vols canviar el criteri.
const PERSON_NAMES = new Set([
  // Figures laiques
  'Alfons X', 'Bac de Roda', 'Baró de Viver', 'Fabra i Puig', 'Jaume I',
  'Joanic', 'Lesseps', 'Maragall', 'Maria Cristina', 'Mundet', 'Pep Ventura',
  'Rambla Just Oliveras', 'Badalona Pompeu Fabra', 'Torras i Bages',
  'Urquinaona', 'Verdaguer', 'Virrei Amat', 'Ernest Lluch',
  // Sants
  'Sant Antoni', 'Sant Martí', 'Sant Andreu', 'Sant Roc', 'Sant Ildefons',
  'Santa Eulàlia', 'Santa Coloma', 'Santa Rosa', 'Sant Pau | Dos de Maig',
  'Artigues | Sant Adrià', 'Guinardó | Hospital de Sant Pau',
  'Sant Gervasi', 'Sant Boi', 'Sant Josep',
  // Figures FGC
  'Reina Elisenda', 'Ildefons Cerdà'
]);

// Estacions que contenen la paraula "Sant"
const IS_SANT = new Set([
  // Sants
  'Sant Antoni', 'Sant Martí', 'Sant Andreu', 'Sant Roc', 'Sant Ildefons',
  'Santa Eulàlia', 'Santa Coloma', 'Santa Rosa', 'Sant Pau | Dos de Maig',
  'Artigues | Sant Adrià', 'Guinardó | Hospital de Sant Pau', 'Sants Estació',
  'Plaça de Sants', 'Sant Gervasi', 'Sant Boi', 'Sant Josep'
]);

// Estacions amb correspondència amb FGC o Renfe (Rodalies).
// Inclou tant les correspondències dins l'estació com algunes properes a peu
// que tothom utilitza com a transbord habitual.
const RAIL_CONNECT_NAMES = new Set([
  // Estacions FGC (L6, L7, L8, L12) — totes connecten amb altres línies FGC
  'Catalunya', 'Diagonal', 'Provença', 'Gràcia', 'Sant Gervasi', 'Plaça Molina',
  'Muntaner', 'Sarrià', 'La Bonanova', 'Les Tres Torres',
  'Espanya', 'Av. Carrilet', 'Europa | Fira', 'Magòria | La Campana',
  'Ildefons Cerdà', 'Gornal', 'Sant Josep', 'Cornellà Riera',
  'Almeda', 'Sant Boi', 'Molí Nou | Ciutat Cooperativa',
  // Correspondència amb Renfe / Rodalies
  'Sants Estació', 'Passeig de Gràcia', 'Arc de Triomf', 'Clot',
  'La Sagrera', 'Aeroport T2', 'Torre Baró | Vallbona',
  // Transbord a peu / estació Renfe propera
  'El Prat Estació', 'Fabra i Puig', 'Sant Andreu', 'Cornellà Centre'
]);

// =============== Geographic / attribute sets (built from Wikipedia data) ===============
// Stations that straddle district borders are intentionally listed in EVERY district
// they touch (per the Wikipedia "Ubicació" column, which lists multiple locations).
const DISTRICTS = {
  "Ciutat Vella": new Set([
    "Universitat", "Catalunya", "Urquinaona", "Paral·lel", "Sant Antoni", "Drassanes", "Liceu",
    "Jaume I", "Barceloneta", "Ciutadella | Vila Olímpica"
  ]),
  "Eixample": new Set([
    "Espanya", "Rocafort", "Urgell", "Arc de Triomf", "Marina", "Passeig de Gràcia", "Tetuan",
    "Monumental", "Sagrada Família", "Tarragona", "Poble Sec", "Diagonal", "Verdaguer", "Girona",
    "Entença", "Hospital Clínic", "Sant Pau | Dos de Maig", "Provença",
    // Also in Ciutat Vella (per Wikipedia):
    "Catalunya", "Sant Antoni", "Universitat", "Urquinaona"
  ]),
  "Gràcia": new Set([
    "Fontana", "Lesseps", "Vallcarca", "Penitents", "Mundet", "Joanic", "El Coll | La Teixonera",
    // FGC Gràcia station straddles Gràcia and Sarrià-Sant Gervasi:
    "Gràcia"
  ]),
  "Horta-Guinardó": new Set([
    "Vall d'Hebron", "Montbau", "Valldaura", "Maragall", "Guinardó | Hospital de Sant Pau",
    "Alfons X", "Horta", "El Carmel",
    // Also in Gràcia (per Wikipedia):
    "El Coll | La Teixonera"
  ]),
  "Les Corts": new Set([
    "Zona Universitària", "Palau Reial", "Maria Cristina", "Les Corts", "Plaça del Centre",
    // Also in L'Hospitalet de Llobregat (per Wikipedia):
    "Ernest Lluch"
  ]),
  "Nou Barris": new Set([
    "Fabra i Puig", "Canyelles", "Roquetes", "Trinitat Nova", "Via Júlia", "Llucmajor",
    "Virrei Amat", "Vilapicina", "Casa de l'Aigua", "Torre Baró | Vallbona", "Ciutat Meridiana",
    // Also in Horta-Guinardó / Sant Andreu (per Wikipedia):
    "Maragall"
  ]),
  "Sant Andreu": new Set([
    "Navas", "La Sagrera", "Sant Andreu", "Torras i Bages", "Trinitat Vella", "Baró de Viver",
    "Congrés", "Onze de Setembre", "Bon Pastor",
    // Also in Nou Barris (per Wikipedia):
    "Fabra i Puig",
    // Also in Horta-Guinardó / Nou Barris (per Wikipedia):
    "Maragall"
  ]),
  "Sant Martí": new Set([
    "Glòries", "Clot", "Encants", "Bac de Roda", "Sant Martí", "La Pau", "Bogatell", "Llacuna",
    "Poblenou", "Selva de Mar", "El Maresme | Fòrum", "Besòs Mar", "Besòs", "Camp de l'Arpa",
    // Also in Eixample (per Wikipedia):
    "Marina",
    // Also in Ciutat Vella (per Wikipedia):
    "Ciutadella | Vila Olímpica"
  ]),
  "Sants-Montjuïc": new Set([
    "Mercat Nou", "Plaça de Sants", "Hostafrancs", "Sants Estació", "Badal", "Parc Logístic",
    "Mercabarna", "Foneria", "Foc", "Zona Franca", "Port Comercial | La Factoria", "Ecoparc",
    "ZAL | Riu Vell", "Magòria | La Campana",
    // Also in Ciutat Vella / Eixample (per Wikipedia):
    "Espanya", "Paral·lel", "Poble Sec", "Tarragona",
    // Also in Les Corts (per Wikipedia):
    "Plaça del Centre"
  ]),
  "Sarrià-Sant Gervasi": new Set([
    "Gràcia", "Sant Gervasi", "Plaça Molina", "Muntaner", "Sarrià", "La Bonanova",
    "Les Tres Torres", "Pàdua", "El Putxet", "Avinguda Tibidabo", "Reina Elisenda"
  ]),
};
const CITIES_OUTSIDE_BCN = {
  "Badalona": new Set([
    "Artigues | Sant Adrià", "Sant Roc", "Gorg", "Pep Ventura", "Badalona Pompeu Fabra", "Llefià",
    "La Salut"
  ]),
  "Cornellà de Llobregat": new Set([
    "Cornellà Centre", "Gavarra", "Sant Ildefons", "Cornellà Riera", "Almeda"
  ]),
  "El Prat de Llobregat": new Set([
    "Les Moreres", "El Prat Estació", "Cèntric", "Parc Nou", "Mas Blau", "Aeroport T2",
    "Aeroport T1"
  ]),
  "L'Hospitalet de Llobregat": new Set([
    "Hospital de Bellvitge", "Bellvitge", "Av. Carrilet", "Rambla Just Oliveras", "Can Serra",
    "Florida", "Torrassa", "Santa Eulàlia", "Pubilla Cases", "Collblanc", "Can Tries | Gornal",
    "Europa | Fira", "Fira", "Provençana", "Ciutat de la Justícia",
    "Can Boixeres", "Ildefons Cerdà", "Gornal", "Sant Josep",
    // Also in Esplugues de Llobregat (per Wikipedia):
    "Can Vidalet",
    // Also in Les Corts / Barcelona (per Wikipedia — border station):
    "Ernest Lluch"
  ]),
  "Sant Adrià de Besòs": new Set([
    "Verneda",
    // Also in Badalona (per Wikipedia — border station):
    "Artigues | Sant Adrià"
  ]),
  "Sant Boi de Llobregat": new Set([
    "Sant Boi", "Molí Nou | Ciutat Cooperativa"
  ]),
  "Santa Coloma de Gramenet": new Set([
    "Santa Coloma", "Fondo", "Can Peixauet", "Santa Rosa", "Església Major", "Singuerlín",
    "Can Zam"
  ]),
  "Montcada i Reixac": new Set([
    "Can Cuiàs"
  ]),
};
const OUTSIDE_BCN = new Set([
  "Aeroport T1", "Aeroport T2", "Almeda", "Artigues | Sant Adrià", "Av. Carrilet",
  "Badalona Pompeu Fabra",
  "Bellvitge", "Can Boixeres", "Can Cuiàs", "Can Peixauet", "Can Serra", "Can Tries | Gornal",
  "Can Vidalet", "Can Zam", "Ciutat de la Justícia", "Collblanc", "Cornellà Centre",
  "Cornellà Riera", "Cèntric",
  "Ernest Lluch",
  "El Prat Estació", "Església Major", "Europa | Fira", "Fira", "Florida", "Fondo", "Gavarra",
  "Gorg", "Gornal", "Hospital de Bellvitge", "Ildefons Cerdà", "La Salut", "Les Moreres",
  "Llefià", "Mas Blau", "Molí Nou | Ciutat Cooperativa", "Parc Nou",
  "Pep Ventura", "Provençana", "Pubilla Cases", "Rambla Just Oliveras", "Sant Boi",
  "Sant Ildefons", "Sant Josep",
  "Sant Roc", "Santa Coloma", "Santa Eulàlia", "Santa Rosa", "Singuerlín", "Torrassa", "Verneda"
]);
const TERMINAL_STATIONS = new Set([
  "Aeroport T1", "Avinguda Tibidabo", "Badalona Pompeu Fabra", "Can Cuiàs", "Can Zam",
  "Collblanc", "Cornellà Centre", "Espanya",
  "Fondo", "Gorg", "Hospital de Bellvitge", "La Pau", "La Sagrera",
  "Molí Nou | Ciutat Cooperativa", "Paral·lel", "Reina Elisenda", "Sarrià", "Trinitat Nova",
  "Vall d'Hebron", "ZAL | Riu Vell", "Zona Universitària"
]);
const TOP10_RIDERSHIP = new Set([
  "Catalunya", "Espanya", "Diagonal", "Sagrada Família", "La Sagrera", "Sants Estació",
  "Passeig de Gràcia", "Paral·lel", "Universitat", "Urquinaona"
]);
const OPENED_AFTER_2015 = new Set([
  "Aeroport T1", "Aeroport T2", "Can Tries | Gornal", "Ciutat de la Justícia", "Cèntric",
  "Ecoparc", "El Prat Estació", "Ernest Lluch", "Fira", "Foc", "Foneria", "Les Moreres",
  "Mas Blau", "Mercabarna", "Parc Logístic", "Parc Nou", "Port Comercial | La Factoria",
  "Provençana", "ZAL | Riu Vell", "Zona Franca"
]);

// Station 2022 ridership (from Wikipedia). Used as the prior for the rarity feature.
const STATION_RIDERSHIP = {
  "Hospital de Bellvitge": 1293232, "Bellvitge": 1738806, "Av. Carrilet": 4931061,
  "Rambla Just Oliveras": 1929979, "Can Serra": 1660522, "Florida": 2192541,
  "Torrassa": 4383679, "Santa Eulàlia": 4581923, "Mercat Nou": 1429702,
  "Plaça de Sants": 4738923, "Hostafrancs": 1598750, "Espanya": 16884942,
  "Rocafort": 3665094, "Urgell": 3197380, "Universitat": 6749801,
  "Catalunya": 25856371, "Urquinaona": 6529386, "Arc de Triomf": 4879499,
  "Marina": 3405493, "Glòries": 5700049, "Clot": 5880171, "Navas": 2133102,
  "La Sagrera": 9895562, "Fabra i Puig": 5505502, "Sant Andreu": 3912617,
  "Torras i Bages": 2240843, "Trinitat Vella": 1215689, "Baró de Viver": 384937,
  "Santa Coloma": 3116016, "Fondo": 4472878, "Paral·lel": 6932194,
  "Sant Antoni": 3517468, "Passeig de Gràcia": 8632273, "Tetuan": 2066103,
  "Monumental": 1710667, "Sagrada Família": 9899974, "Encants": 1918199,
  "Bac de Roda": 2277350, "Sant Martí": 2623647, "La Pau": 2153698,
  "Verneda": 536167, "Artigues | Sant Adrià": 3620443, "Sant Roc": 1493238,
  "Gorg": 1633097, "Pep Ventura": 1628524, "Badalona Pompeu Fabra": 3766944,
  "Zona Universitària": 2340481, "Palau Reial": 2428839, "Maria Cristina": 2597495,
  "Les Corts": 1979966, "Plaça del Centre": 1355453, "Sants Estació": 8950568,
  "Tarragona": 1102611, "Poble Sec": 3675592, "Drassanes": 3553609,
  "Liceu": 5556064, "Diagonal": 12727813, "Fontana": 3739773, "Lesseps": 4302212,
  "Vallcarca": 2284569, "Penitents": 1021694, "Vall d'Hebron": 2837092,
  "Montbau": 1112146, "Mundet": 1748751, "Valldaura": 1002341,
  "Canyelles": 1221136, "Roquetes": 1130810, "Trinitat Nova": 1490804,
  "Via Júlia": 2210079, "Llucmajor": 2769446, "Maragall": 3274913,
  "Guinardó | Hospital de Sant Pau": 1669636, "Alfons X": 2596371,
  "Joanic": 4165320, "Verdaguer": 4953871, "Girona": 1410839,
  "Jaume I": 4099688, "Barceloneta": 4661040,
  "Ciutadella | Vila Olímpica": 2490151, "Bogatell": 1307230, "Llacuna": 1943386,
  "Poblenou": 2618376, "Selva de Mar": 1506784, "El Maresme | Fòrum": 2559121,
  "Besòs Mar": 1572739, "Besòs": 989876, "Cornellà Centre": 2768552,
  "Gavarra": 1234181, "Sant Ildefons": 2814582, "Can Boixeres": 1018438,
  "Can Vidalet": 3187460, "Ernest Lluch": 1723790, "Pubilla Cases": 4262008, "Collblanc": 6007895,
  "Badal": 3625008, "Entença": 3005205, "Hospital Clínic": 5826727,
  "Sant Pau | Dos de Maig": 3640480, "Camp de l'Arpa": 2329541, "Congrés": 1144612,
  "Virrei Amat": 2627331, "Vilapicina": 1920249, "Horta": 2230238,
  "El Carmel": 2398856, "El Coll | La Teixonera": 1308167,
  "Can Tries | Gornal": 648824, "Europa | Fira": 2894848, "Fira": 523098,
  "Parc Logístic": 169976, "Mercabarna": 581574, "Les Moreres": 693100,
  "El Prat Estació": 559007, "Cèntric": 1077224, "Parc Nou": 441658,
  "Mas Blau": 369860, "Aeroport T2": 498431, "Aeroport T1": 1269529,
  "Onze de Setembre": 683118, "Bon Pastor": 1273886, "Can Peixauet": 881731,
  "Santa Rosa": 951286, "Església Major": 272570, "Singuerlín": 604127,
  "Can Zam": 331696, "Provençana": 574290, "Ciutat de la Justícia": 467432,
  "Foneria": 680210, "Foc": 559932, "Zona Franca": 133210,
  "Port Comercial | La Factoria": 89815, "Ecoparc": 122552,
  "ZAL | Riu Vell": 277227, "Llefià": 1155313, "La Salut": 1592230,
  "Casa de l'Aigua": 33831, "Torre Baró | Vallbona": 265123,
  "Ciutat Meridiana": 445287, "Can Cuiàs": 248273,
  // FGC L6, L7, L8, L12
  "Provença": 6959805, "Gràcia": 3087927, "Sant Gervasi": 506437,
  "Plaça Molina": 468574, "Muntaner": 2254110, "Sarrià": 3945245,
  "La Bonanova": 670569, "Les Tres Torres": 836526, "Pàdua": 596867,
  "El Putxet": 1375967, "Avinguda Tibidabo": 1332784, "Reina Elisenda": 414158,
  "Magòria | La Campana": 564663, "Ildefons Cerdà": 1124905, "Gornal": 597630,
  "Sant Josep": 847294, "Cornellà Riera": 1334134,
  "Almeda": 1084692, "Sant Boi": 1842793, "Molí Nou | Ciutat Cooperativa": 668301
};

// Nombres de traducción para los sets
const tempPERSON_NAMES = 'Estacions amb noms propis';
const tempIS_SANT = 'Estacions que contenen "Sant"';
const tempRAIL_CONNECT_NAMES = 'Estacions amb correspondència FGC/Renfe';
const tempDISTRICTS = 'Estacions per districte';
const tempCITIES_OUTSIDE_BCN = 'Estacions per ciutat';
const tempOUTSIDE_BCN = 'Estacions fora de Barcelona';
const tempTERMINAL_STATIONS = 'Estacions terminal';
const tempTOP10_RIDERSHIP = 'Estacions amb més passatgers';
const tempOPENED_AFTER_2015 = 'Estacions obertes després de 2015';
const tempSTATION_RIDERSHIP = 'Estacions per volum de passatgers';

// Exponer las categorías y conjuntos principales en `window.categorias`
(function () {
  const exports = {
    PERSON_NAMES,
    IS_SANT,
    RAIL_CONNECT_NAMES,
    DISTRICTS,
    CITIES_OUTSIDE_BCN,
    OUTSIDE_BCN,
    TERMINAL_STATIONS,
    TOP10_RIDERSHIP,
    OPENED_AFTER_2015,
    STATION_RIDERSHIP
  };
  window.categorias = Object.assign(window.categorias || {}, exports);

  // Mapear nombres de traducción
  window.categoryNames = {
    PERSON_NAMES: tempPERSON_NAMES,
    IS_SANT: tempIS_SANT,
    RAIL_CONNECT_NAMES: tempRAIL_CONNECT_NAMES,
    DISTRICTS: tempDISTRICTS,
    CITIES_OUTSIDE_BCN: tempCITIES_OUTSIDE_BCN,
    OUTSIDE_BCN: tempOUTSIDE_BCN,
    TERMINAL_STATIONS: tempTERMINAL_STATIONS,
    TOP10_RIDERSHIP: tempTOP10_RIDERSHIP,
    OPENED_AFTER_2015: tempOPENED_AFTER_2015,
    STATION_RIDERSHIP: tempSTATION_RIDERSHIP
  };
})();

// Construir un mapeo estación -> líneas desde la lista STATIONS.
// Convierte números de línea a formato "L1", "L2", etc.
// Para líneas 9 y 10: 91→L9N, 92→L9S, 101→L10N, 102→L10S
(function () {
  const stationLines = {};

  function lineNumToCode(lineNum) {
    if (lineNum === 91) return 'L9N';
    if (lineNum === 92) return 'L9S';
    if (lineNum === 101) return 'L10N';
    if (lineNum === 102) return 'L10S';
    return `L${lineNum}`;
  }

  STATIONS.forEach((station) => {
    if (station.name && Array.isArray(station.lines)) {
      stationLines[station.name] = station.lines.map(lineNumToCode);
    }
  });

  window.stationLines = Object.assign(window.stationLines || {}, stationLines);
})();