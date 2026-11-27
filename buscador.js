const games = [
  {
    name: "Banderas del mundo",
    category: "Geografía",
    icon: "⚑",
    image: "https://imagenes.portafolio.co/files/image_1200_600/uploads/2025/03/04/67c73f999b777.jpeg",
    href: "juegos/BANDERAS/banderas.html",
  },
  {
    name: "Capitales del mundo",
    category: "Geografía",
    icon: "𖠿",
    image: "https://symphony.cdn.tambourine.com/hotel-washington-redesign/media/things-to-do-near-white-house-washington-dc-6973b543b6f2b.jpg",
    href: "juegos/CAPITALES/capitales.html",
  },
  {
    name: "Campeones de la Champions League",
    category: "Fútbol",
    icon: "𖣐",
    image: "https://ichef.bbci.co.uk/images/ic/1200x675/p0m5wskq.jpg",
    href: "juegos/CHAMPIONS/champions.html",
  },
];


const triviaFacts = [
  // =========================
  // BANDERAS (10)
  // =========================
  {
    id: "flag-denmark",
    topic: "Banderas",
    text: "La bandera de Dinamarca es considerada la bandera nacional de uso continuo más antigua del mundo: su diseño actual se utiliza desde 1625.",
    sourceName: "Guinness World Records",
    sourceUrl: "https://www.guinnessworldrecords.com/world-records/oldest-continuously-used-national-flag",
  },
  {
    id: "flag-largest",
    topic: "Banderas",
    text: "La bandera más grande izada del mundo alcanzó una superficie de 3.235,79 metros cuadrados en Azerbaiyán, en 2025.",
    sourceName: "Guinness World Records",
    sourceUrl: "https://www.guinnessworldrecords.com/world-records/largest-flag-flown",
  },
  {
    id: "flag-usa-stars",
    topic: "Banderas",
    text: "La bandera de Estados Unidos tuvo 15 franjas durante un periodo de su historia, antes de volver a las 13 originales.",
    sourceName: "Smithsonian Institution",
    sourceUrl: "https://www.si.edu/spotlight/flag-day/flag-facts",
  },
  {
    id: "flag-usa-stars-count",
    topic: "Banderas",
    text: "La bandera actual de Estados Unidos tiene 50 estrellas, una por cada estado del país.",
    sourceName: "Smithsonian Institution",
    sourceUrl: "https://www.si.edu/spotlight/flag-day/flag-facts",
  },
  {
    id: "flag-nepal",
    topic: "Banderas",
    text: "Nepal tiene la única bandera nacional del mundo que no tiene forma rectangular ni cuadrada.",
    sourceName: "Britannica",
    sourceUrl: "https://www.britannica.com/topic/flag-of-Nepal",
  },
  {
    id: "flag-japan",
    topic: "Banderas",
    text: "La bandera japonesa tiene un diseño extremadamente sencillo: un disco rojo sobre fondo blanco, símbolo del sol.",
    sourceName: "Ministerio de Asuntos Exteriores de Japón",
    sourceUrl: "https://www.mofa.go.jp/policy/other/bluebook/",
  },
  {
    id: "flag-switzerland",
    topic: "Banderas",
    text: "Suiza y el Vaticano son los únicos países con banderas nacionales cuadradas.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/topic/flag-of-Switzerland",
  },
  {
    id: "flag-mozambique",
    topic: "Banderas",
    text: "La bandera de Mozambique incluye un fusil AK-47, convirtiéndola en una de las pocas banderas nacionales que muestran un arma moderna.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/topic/flag-of-Mozambique",
  },
  {
    id: "flag-paraguay",
    topic: "Banderas",
    text: "La bandera de Paraguay tiene dos caras diferentes: sus escudos no son iguales en el anverso y el reverso.",
    sourceName: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/paraguay/",
  },
  {
    id: "flag-brazil-spica",
    topic: "Banderas",
    text: "En la bandera de Brasil, la estrella Spica representa al estado de Pará y pertenece a la constelación de Virgo.",
    sourceName: "Agência Espacial Brasileira",
    sourceUrl: "https://www.gov.br/aeb/pt-br/centrais-de-conteudo/publicacoes/instagram-do-periodo-de-defeso-eleitoral-2022/semana-espacial-100-anos-de-independencia-as-constelacoes-da-bandeira/",
  },

  // =========================
  // GEOGRAFÍA (18)
  // =========================
  {
    id: "geo-everest",
    topic: "Geografía",
    text: "El monte Everest es la montaña más alta del mundo sobre el nivel del mar, con aproximadamente 8.849 metros de altura.",
    sourceName: "National Geographic",
    sourceUrl: "https://www.nationalgeographic.com/science/article/mount-everest-1",
  },
  {
    id: "geo-mariana",
    topic: "Geografía",
    text: "El abismo Challenger, en la fosa de las Marianas, alcanza aproximadamente 10.935 metros de profundidad.",
    sourceName: "NOAA",
    sourceUrl: "https://oceanexplorer.noaa.gov/explainers/mapping/",
  },
  {
    id: "geo-greenland",
    topic: "Geografía",
    text: "Groenlandia es la isla más grande del mundo que no se considera un continente.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/place/Greenland",
  },
  {
    id: "geo-jupiter-size",
    topic: "Geografía",
    text: "Júpiter es tan grande que su diámetro ecuatorial es aproximadamente 11 veces el de la Tierra.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/planet-sizes-and-locations-in-our-solar-system/",
  },
  {
    id: "geo-salar",
    topic: "Geografía",
    text: "El Salar de Uyuni, en Bolivia, es el salar más grande del planeta, con una superficie aproximada de 10.582 kilómetros cuadrados.",
    sourceName: "NASA Earth Observatory",
    sourceUrl: "https://science.nasa.gov/earth/earth-observatory/salar-de-uyuni-bolivia-6096/",
  },
  {
    id: "geo-mauna-loa",
    topic: "Geografía",
    text: "Mauna Loa, en Hawái, es el volcán activo más grande del planeta por volumen y superficie.",
    sourceName: "USGS",
    sourceUrl: "https://www.usgs.gov/faqs/where-largest-active-volcano-world",
  },
  {
    id: "geo-lake-baikal",
    topic: "Geografía",
    text: "El lago Baikal, en Rusia, contiene aproximadamente el 20 % del agua dulce superficial no congelada del planeta.",
    sourceName: "UNESCO",
    sourceUrl: "https://whc.unesco.org/en/list/754/",
  },
  {
    id: "geo-antarctica",
    topic: "Geografía",
    text: "La Antártida es el desierto más grande del mundo, aunque esté cubierta de hielo.",
    sourceName: "National Geographic",
    sourceUrl: "https://education.nationalgeographic.org/resource/desert/",
  },
  {
    id: "geo-pacific",
    topic: "Geografía",
    text: "El océano Pacífico es el océano más grande del planeta y cubre aproximadamente un tercio de la superficie terrestre.",
    sourceName: "NOAA",
    sourceUrl: "https://oceanservice.noaa.gov/facts/pacific.html",
  },
  {
    id: "geo-everest-moon",
    topic: "Geografía",
    text: "El monte Everest no es la montaña más alta si se mide desde su base: el Mauna Kea de Hawái supera los 10.000 metros desde el fondo oceánico.",
    sourceName: "USGS",
    sourceUrl: "https://www.usgs.gov/",
  },
  {
    id: "geo-dead-sea",
    topic: "Geografía",
    text: "Las orillas del mar Muerto están a más de 400 metros por debajo del nivel del mar, entre las tierras emergidas más bajas del planeta.",
    sourceName: "NASA Earth Observatory",
    sourceUrl: "https://earthobservatory.nasa.gov/",
  },
  {
    id: "geo-nile",
    topic: "Geografía",
    text: "El Nilo es tradicionalmente reconocido como el río más largo del mundo, aunque existe un debate científico sobre si el Amazonas podría superarlo.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/place/Nile-River",
  },
  {
    id: "geo-amazon",
    topic: "Geografía",
    text: "El río Amazonas transporta más agua que cualquier otro río del mundo.",
    sourceName: "National Geographic",
    sourceUrl: "https://www.nationalgeographic.com/environment/article/amazon-river",
  },
  {
    id: "geo-russia",
    topic: "Geografía",
    text: "Rusia es el país más extenso del mundo, con una superficie de aproximadamente 17,1 millones de kilómetros cuadrados.",
    sourceName: "CIA World Factbook",
    sourceUrl: "https://www.cia.gov/the-world-factbook/countries/russia/",
  },
  {
    id: "geo-vatican",
    topic: "Geografía",
    text: "El Vaticano es el país más pequeño del mundo, con una superficie aproximada de 0,49 kilómetros cuadrados.",
    sourceName: "Vatican City State",
    sourceUrl: "https://www.vaticanstate.va/",
  },
  {
    id: "geo-sahara",
    topic: "Geografía",
    text: "El Sahara es el desierto cálido más grande del mundo y ocupa gran parte del norte de África.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/place/Sahara-desert-Africa",
  },
  {
    id: "geo-mariana-everest",
    topic: "Geografía",
    text: "Si colocaras el monte Everest dentro del abismo Challenger, su cima todavía quedaría bajo el agua.",
    sourceName: "NOAA",
    sourceUrl: "https://oceanexplorer.noaa.gov/explainers/mapping/",
  },
  {
    id: "geo-mount-fuji",
    topic: "Geografía",
    text: "El monte Fuji es el volcán más alto de Japón, con 3.776 metros de altura.",
    sourceName: "Japan Meteorological Agency",
    sourceUrl: "https://www.jma.go.jp/jma/en/Activities/volcano.html",
  },

  // =========================
  // FÚTBOL (22)
  // =========================
  {
    id: "football-universitario",
    topic: "Fútbol",
    text: "Universitario de Deportes sumó 29 títulos de liga peruana al conquistar el campeonato de 2025, según el registro oficial del club.",
    sourceName: "Universitario de Deportes",
    sourceUrl: "https://universitario.pe/media/download/revista_digital/REVISTA_MONUMENTAL_U_2025.pdf",
  },
  {
    id: "football-brazil",
    topic: "Fútbol",
    text: "Brasil es la selección más ganadora de la Copa Mundial masculina, con cinco títulos.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/es/tournaments/mens/worldcup/articles/equipos-con-mas-copas-mundiales",
  },
  {
    id: "football-worldcup-first",
    topic: "Fútbol",
    text: "La primera Copa Mundial de la FIFA se disputó en Uruguay en 1930 y terminó con Uruguay como campeón.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/es/tournaments/mens/worldcup",
  },
  {
    id: "football-ronaldo-international",
    topic: "Fútbol",
    text: "Cristiano Ronaldo terminó su carrera internacional masculina con el récord de 146 goles con Portugal.",
    sourceName: "UEFA",
    sourceUrl: "https://www.uefa.com/european-qualifiers/news/0253-0d81f47dfe05-e92503acfb7d-1000--ronaldo-s-european-record/",
  },
  {
    id: "football-ronaldo-caps",
    topic: "Fútbol",
    text: "Cristiano Ronaldo disputó 234 partidos internacionales con Portugal, récord masculino de selecciones.",
    sourceName: "Guinness World Records",
    sourceUrl: "https://www.guinnessworldrecords.com/world-records/64289-most-international-caps-for-football-soccer-by-an-individual-male",
  },
  {
    id: "football-mbappe-worldcup",
    topic: "Fútbol",
    text: "Kylian Mbappé terminó el Mundial de 2026 como máximo goleador histórico de las Copas Mundiales masculinas, con 22 tantos.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/en/id/mens/worldcup/articles/fifa-world-cup-all-time-leading-scorers",
  },
  {
    id: "football-real-madrid",
    topic: "Fútbol",
    text: "El Real Madrid es el club más ganador de la UEFA Champions League masculina, con 15 títulos hasta 2026.",
    sourceName: "UEFA",
    sourceUrl: "https://www.uefa.com/uefachampionsleague/history/winners/",
  },
  {
    id: "football-worldcup-1950",
    topic: "Fútbol",
    text: "Uruguay ganó el Mundial de 1950 en el Maracaná ante Brasil, en un partido conocido como el Maracanazo.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/",
  },
  {
    id: "football-fastest-hattrick",
    topic: "Fútbol",
    text: "Tommy Ross marcó tres goles en apenas 90 segundos, récord mundial de velocidad para un hat-trick.",
    sourceName: "Guinness World Records",
    sourceUrl: "https://www.guinnessworldrecords.com/world-records/fastest-time-to-score-a-hat-trick-football",
  },
  {
    id: "football-worldcup-hattrick",
    topic: "Fútbol",
    text: "El húngaro László Kiss logró el hat-trick más rápido de la historia de los Mundiales: tres goles en siete minutos, en 1982.",
    sourceName: "Guinness World Records",
    sourceUrl: "https://www.guinnessworldrecords.com/world-records/116339-fastest-hat-trick-in-a-football-soccer-fifa-world-cup-match",
  },
  {
    id: "football-salenko",
    topic: "Fútbol",
    text: "Oleg Salenko anotó cinco goles en un solo partido del Mundial de 1994, récord individual en un encuentro de la competición masculina.",
    sourceName: "Guinness World Records",
    sourceUrl: "https://www.guinnessworldrecords.com/world-records/81369-most-football-soccer-fifa-world-cup-goals-scored-in-a-single-match-by-an-indivi",
  },
  {
    id: "football-stanis",
    topic: "Fútbol",
    text: "Stephan Stanis marcó 16 goles en un solo partido de fútbol en 1942, récord individual reconocido por Guinness.",
    sourceName: "Guinness World Records",
    sourceUrl: "https://www.guinnessworldrecords.com/world-records/64297-most-goals-in-a-match-football",
  },
  {
    id: "football-worldcup-wins",
    topic: "Fútbol",
    text: "Brasil es la selección con más victorias en la historia de los Mundiales masculinos, con 79 triunfos hasta 2026.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/en/tournaments/mens/worldcup/articles/teams-most-victories-wins",
  },
  {
    id: "football-messi-qualifiers",
    topic: "Fútbol",
    text: "Lionel Messi es el máximo goleador histórico de las eliminatorias sudamericanas para el Mundial.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/lionel-messi-argentina-records-international-football-world-cup-qualifying",
  },
  {
    id: "football-worldcup-1930-final",
    topic: "Fútbol",
    text: "La final del primer Mundial enfrentó a Uruguay y Argentina, con victoria uruguaya por 4-2.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/",
  },
  {
    id: "football-hungary-10",
    topic: "Fútbol",
    text: "Hungría venció 10-1 a El Salvador en el Mundial de 1982, una de las mayores goleadas de la historia de la competición.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/",
  },
  {
    id: "football-just-fontaine",
    topic: "Fútbol",
    text: "Just Fontaine marcó 13 goles en el Mundial de 1958, récord de tantos en una sola edición masculina.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/en/id/mens/worldcup/articles/fifa-world-cup-all-time-leading-scorers",
  },
  {
    id: "football-pele",
    topic: "Fútbol",
    text: "Pelé es el único futbolista que ha ganado tres Copas Mundiales masculinas como jugador: 1958, 1962 y 1970.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/",
  },
  {
    id: "football-maracana",
    topic: "Fútbol",
    text: "El estadio Maracaná llegó a registrar una asistencia cercana a los 200.000 espectadores durante el Mundial de 1950.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/",
  },
  {
    id: "football-cristiano-worldcups",
    topic: "Fútbol",
    text: "Cristiano Ronaldo se convirtió en el primer futbolista masculino en marcar goles en seis ediciones diferentes de la Copa Mundial.",
    sourceName: "UEFA",
    sourceUrl: "https://www.uefa.com/european-qualifiers/news/0253-0d81f47dfe05-e92503acfb7d-1000--ronaldo-s-european-record/",
  },
  {
    id: "football-oldest-hattrick",
    topic: "Fútbol",
    text: "Lionel Messi estableció en 2026 el récord de jugador más veterano en marcar un hat-trick en un Mundial masculino, con 38 años.",
    sourceName: "Guinness World Records",
    sourceUrl: "https://www.guinnessworldrecords.com/world-records/531157-oldest-player-to-score-a-hat-trick-in-the-fifa-football-soccer-world-cup",
  },
  {
    id: "football-worldcup-brazil-streak",
    topic: "Fútbol",
    text: "Brasil es la única selección masculina que ha participado en todas las ediciones de la Copa Mundial desde 1930.",
    sourceName: "FIFA",
    sourceUrl: "https://www.fifa.com/en/tournaments/mens/worldcup/articles/brazil-team-profile-history",
  },

  // =========================
  // HISTORIA (15)
  // =========================
  {
    id: "history-louis-xiv",
    topic: "Historia",
    text: "Luis XIV de Francia mantuvo el reinado documentado más largo de un monarca de un Estado soberano: 72 años y 110 días.",
    sourceName: "Guinness World Records",
    sourceUrl: "https://www.guinnessworldrecords.com/world-records/longest-ever-reigns",
  },
  {
    id: "history-oxford",
    topic: "Historia",
    text: "La Universidad de Oxford tiene evidencias de actividad académica desde al menos 1096, siendo la universidad más antigua del mundo angloparlante.",
    sourceName: "University of Oxford",
    sourceUrl: "https://www.ox.ac.uk/about/the-university/history",
  },
  {
    id: "history-magna-carta",
    topic: "Historia",
    text: "La Carta Magna de 1215 no fue firmada por el rey Juan: fue autenticada mediante un sello real de cera.",
    sourceName: "UK Parliament",
    sourceUrl: "https://www.parliament.uk/about/living-heritage/evolutionofparliament/2015-parliament-in-the-making/2015-historic-anniversaries/magna-carta/the-making-of-magna-carta-/",
  },
  {
    id: "history-cleopatra",
    topic: "Historia",
    text: "Cleopatra vivió cronológicamente más cerca del nacimiento de la inteligencia artificial moderna que de la construcción de la Gran Pirámide de Guiza.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/biography/Cleopatra-queen-of-Egypt",
  },
  {
    id: "history-gutenberg",
    topic: "Historia",
    text: "La Biblia de Gutenberg, impresa alrededor de 1455, es uno de los primeros grandes libros producidos en Europa con tipos móviles.",
    sourceName: "British Library",
    sourceUrl: "https://www.bl.uk/collection-items/gutenberg-bible",
  },
  {
    id: "history-roman",
    topic: "Historia",
    text: "El Imperio romano de Oriente, conocido como Imperio bizantino, sobrevivió casi mil años después de la caída del Imperio romano de Occidente.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/place/Byzantine-Empire",
  },
  {
    id: "history-egypt",
    topic: "Historia",
    text: "La Gran Pirámide de Guiza fue la estructura más alta construida por el ser humano durante aproximadamente 3.800 años.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/topic/Great-Pyramid-of-Giza",
  },
  {
    id: "history-ww2",
    topic: "Historia",
    text: "La Segunda Guerra Mundial fue el conflicto armado más extenso y mortífero de la historia contemporánea.",
    sourceName: "Imperial War Museums",
    sourceUrl: "https://www.iwm.org.uk/history",
  },
  {
    id: "history-mongol",
    topic: "Historia",
    text: "El Imperio mongol fue el mayor imperio terrestre contiguo de la historia, extendiéndose por millones de kilómetros cuadrados.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/place/Mongol-empire",
  },
  {
    id: "history-queen-elizabeth",
    topic: "Historia",
    text: "Isabel II fue la monarca británica con el reinado más largo: 70 años y 214 días.",
    sourceName: "Royal Family",
    sourceUrl: "https://www.royal.uk/queen-elizabeth-ii",
  },
  {
    id: "history-french-revolution",
    topic: "Historia",
    text: "La Revolución francesa comenzó en 1789 y transformó profundamente la política europea y la idea moderna de ciudadanía.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/event/French-Revolution",
  },
  {
    id: "history-inca",
    topic: "Historia",
    text: "El Imperio inca llegó a extenderse por territorios de seis países actuales de Sudamérica.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/place/Inca",
  },
  {
    id: "history-berlin-wall",
    topic: "Historia",
    text: "El Muro de Berlín permaneció en pie durante aproximadamente 28 años, desde 1961 hasta 1989.",
    sourceName: "German Historical Museum",
    sourceUrl: "https://www.dhm.de/",
  },
  {
    id: "history-ancient-egypt",
    topic: "Historia",
    text: "La civilización del antiguo Egipto perduró durante más de tres mil años, desde la unificación tradicional del país hasta la conquista romana.",
    sourceName: "The Metropolitan Museum of Art",
    sourceUrl: "https://www.metmuseum.org/toah/hd/egyp/hd_egyp.htm",
  },
  {
    id: "history-ottoman",
    topic: "Historia",
    text: "El Imperio otomano existió durante más de seis siglos, desde finales del siglo XIII hasta su disolución en 1922.",
    sourceName: "Encyclopaedia Britannica",
    sourceUrl: "https://www.britannica.com/place/Ottoman-Empire",
  },

  // =========================
  // CIENCIA (18)
  // =========================
  {
    id: "science-moon-distance",
    topic: "Ciencia",
    text: "La Luna se aleja de la Tierra aproximadamente 3,8 centímetros cada año.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/moon/facts/",
  },
  {
    id: "science-jupiter",
    topic: "Ciencia",
    text: "Júpiter es el planeta más grande del sistema solar y tiene más del doble de masa que todos los demás planetas juntos.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/solar-system/planets/jupiter/",
  },
  {
    id: "science-saturn",
    topic: "Ciencia",
    text: "Saturno tiene una densidad media inferior a la del agua, por lo que, hipotéticamente, podría flotar en un océano suficientemente grande.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/saturn/facts/",
  },
  {
    id: "science-venus",
    topic: "Ciencia",
    text: "Un día en Venus dura más que su año: tarda más en girar sobre sí mismo que en completar una órbita alrededor del Sol.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/venus/venus-facts/",
  },
  {
    id: "science-sun",
    topic: "Ciencia",
    text: "El Sol concentra aproximadamente el 99,8 % de toda la masa del sistema solar.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/sun/facts/",
  },
  {
    id: "science-neutron-star",
    topic: "Ciencia",
    text: "Una cucharadita de material de una estrella de neutrones tendría una masa de miles de millones de toneladas.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/universe/neutron-stars/",
  },
  {
    id: "science-light-speed",
    topic: "Ciencia",
    text: "La luz viaja en el vacío a aproximadamente 299.792 kilómetros por segundo.",
    sourceName: "NIST",
    sourceUrl: "https://www.nist.gov/si-redefinition/meter",
  },
  {
    id: "science-blue-whale",
    topic: "Ciencia",
    text: "La ballena azul es el animal más grande conocido que ha existido en la historia de la Tierra.",
    sourceName: "NOAA",
    sourceUrl: "https://www.fisheries.noaa.gov/species/blue-whale",
  },
  {
    id: "science-cheetah",
    topic: "Ciencia",
    text: "El guepardo es el animal terrestre más rápido y puede alcanzar velocidades cercanas a los 100 kilómetros por hora.",
    sourceName: "Smithsonian National Zoo",
    sourceUrl: "https://nationalzoo.si.edu/animals/cheetah",
  },
  {
    id: "science-olympus-mons",
    topic: "Ciencia",
    text: "El monte Olimpo de Marte es el volcán más grande conocido del sistema solar, con unos 22 kilómetros de altura.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/mars/",
  },
  {
    id: "science-microgravity",
    topic: "Ciencia",
    text: "La Estación Espacial Internacional viaja alrededor de la Tierra a unos 28.000 kilómetros por hora.",
    sourceName: "NASA",
    sourceUrl: "https://www.nasa.gov/international-space-station/",
  },
  {
    id: "science-milky-way",
    topic: "Ciencia",
    text: "La Vía Láctea tiene un diámetro aproximado de 100.000 años luz.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/universe/galaxies/milky-way/",
  },
  {
    id: "science-universe",
    topic: "Ciencia",
    text: "El universo observable tiene aproximadamente 13.800 millones de años.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/universe/",
  },
  {
    id: "science-earth-core",
    topic: "Ciencia",
    text: "El núcleo interno de la Tierra alcanza temperaturas comparables a las de la superficie del Sol.",
    sourceName: "USGS",
    sourceUrl: "https://www.usgs.gov/",
  },
  {
    id: "science-ocean-depth",
    topic: "Ciencia",
    text: "A pesar de su enorme extensión, solo alrededor del 26 % del fondo oceánico había sido cartografiado con alta resolución hasta junio de 2024.",
    sourceName: "NOAA",
    sourceUrl: "https://oceanexplorer.noaa.gov/explainers/mapping/",
  },
  {
    id: "science-antimatter",
    topic: "Ciencia",
    text: "La antimateria, al entrar en contacto con materia, puede aniquilarse y convertir su masa en energía.",
    sourceName: "CERN",
    sourceUrl: "https://home.cern/science/physics/antimatter",
  },
  {
    id: "science-water",
    topic: "Ciencia",
    text: "El agua es una de las pocas sustancias que se expanden al congelarse, por eso el hielo flota sobre el agua líquida.",
    sourceName: "USGS",
    sourceUrl: "https://www.usgs.gov/special-topics/water-science-school",
  },
  {
    id: "science-dna",
    topic: "Ciencia",
    text: "Si se estirara el ADN de una sola célula humana, alcanzaría aproximadamente dos metros de longitud.",
    sourceName: "National Human Genome Research Institute",
    sourceUrl: "https://www.genome.gov/about-genomics/fact-sheets/Deoxyribonucleic-Acid-Fact-Sheet",
  },

  // =========================
  // QUÍMICA (17)
  // =========================
  {
    id: "chem-francium",
    topic: "Química",
    text: "El francio es uno de los elementos más inestables y radiactivos conocidos: su isótopo más estudiado, francio-223, tiene una vida media de unos 22 minutos.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/87/francium",
  },
  {
    id: "chem-gallium",
    topic: "Química",
    text: "El galio se funde a unos 29,76 °C, por lo que puede derretirse en la mano.",
    sourceName: "NIST",
    sourceUrl: "https://janaf.nist.gov/tables/Ga-002.html",
  },
  {
    id: "chem-tungsten",
    topic: "Química",
    text: "El tungsteno tiene el punto de fusión más alto de todos los metales puros: aproximadamente 3.422 °C.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/74/tungsten",
  },
  {
    id: "chem-osmium",
    topic: "Química",
    text: "El osmio es el elemento más denso conocido en condiciones normales, con una densidad cercana a 22,59 gramos por centímetro cúbico.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/76/osmium",
  },
  {
    id: "chem-hydrogen",
    topic: "Química",
    text: "El hidrógeno es el elemento más abundante del universo y constituye la mayor parte de la materia ordinaria de las estrellas.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/universe/",
  },
  {
    id: "chem-helium",
    topic: "Química",
    text: "El helio fue identificado primero en el espectro del Sol, antes de descubrirse en la Tierra.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/2/helium",
  },
  {
    id: "chem-mercury",
    topic: "Química",
    text: "El mercurio es el único metal que permanece líquido a temperatura ambiente en condiciones normales.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/80/mercury",
  },
  {
    id: "chem-carbon",
    topic: "Química",
    text: "El diamante y el grafito están compuestos únicamente de carbono, pero sus estructuras atómicas diferentes producen propiedades muy distintas.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/6/carbon",
  },
  {
    id: "chem-oxygen",
    topic: "Química",
    text: "El oxígeno constituye aproximadamente el 21 % del volumen de la atmósfera terrestre.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/earth/facts/",
  },
  {
    id: "chem-gold",
    topic: "Química",
    text: "Una onza de oro puede convertirse en una lámina extremadamente fina: el metal es tan maleable que puede batirse hasta alcanzar espesores microscópicos.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/79/gold",
  },
  {
    id: "chem-lithium",
    topic: "Química",
    text: "El litio es el metal más ligero de la tabla periódica y puede flotar en el agua, aunque reacciona con ella.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/3/lithium",
  },
  {
    id: "chem-fluorine",
    topic: "Química",
    text: "El flúor es el elemento más electronegativo de la tabla periódica.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/9/fluorine",
  },
  {
    id: "chem-polonium",
    topic: "Química",
    text: "El polonio-210 es extremadamente radiactivo y tiene una vida media de aproximadamente 138,4 días.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/84/polonium",
  },
  {
    id: "chem-cesium",
    topic: "Química",
    text: "El cesio tiene un punto de fusión de aproximadamente 28,4 °C, por lo que puede fundirse en un ambiente cálido.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/55/caesium",
  },
  {
    id: "chem-neon",
    topic: "Química",
    text: "El neón emite una característica luz rojiza-anaranjada cuando se utiliza en tubos de descarga eléctrica.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/10/neon",
  },
  {
    id: "chem-mercury-thermometer",
    topic: "Química",
    text: "El mercurio se utilizó durante siglos en termómetros gracias a su expansión térmica relativamente uniforme y a que permanece líquido en un amplio intervalo de temperaturas.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/80/mercury",
  },
  {
    id: "chem-uranium",
    topic: "Química",
    text: "El uranio es el elemento natural más pesado que se encuentra en cantidades significativas en la Tierra.",
    sourceName: "Royal Society of Chemistry",
    sourceUrl: "https://periodic-table.rsc.org/element/92/uranium",
  },
];


const searchInput = document.querySelector("#game-search");
const clearButton = document.querySelector("#clear-search");
const gameGrid = document.querySelector("#game-grid");
const emptyState = document.querySelector("#empty-state");
const resultsCount = document.querySelector("#results-count");
const categoryFilters = document.querySelector("#category-filters");
const triviaTopic = document.querySelector("#trivia-topic");
const triviaText = document.querySelector("#trivia-text");
const triviaSource = document.querySelector("#trivia-source");
let activeCategory = "__all__";

function normalize(value) {
  return value
    .toLocaleLowerCase("es")
    .replace(/ñ/g, "\uE000")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\uE000/g, "ñ")
    .trim();
}

function createCategoryChip(value, label) {
  const button = document.createElement("button");
  button.className = "category-chip";
  button.type = "button";
  button.dataset.category = value;
  button.textContent = label;
  button.setAttribute("aria-pressed", String(activeCategory === value));

  if (activeCategory === value) {
    button.classList.add("is-active");
  }

  return button;
}

function renderCategoryFilters() {
  const categories = [...new Set(games.map((game) => game.category))].sort((a, b) =>
    a.localeCompare(b, "es"),
  );
  const chips = [createCategoryChip("__all__", "Todas")];

  for (const category of categories) {
    chips.push(createCategoryChip(category, category));
  }

  categoryFilters.replaceChildren(...chips);
}

function createGameCard(game) {
  const card = game.href ? document.createElement("a") : document.createElement("article");
  card.className = "game-card";
  card.setAttribute("role", "listitem");

  if (game.href) {
    card.href = game.href;
  }

  const artwork = document.createElement("div");
  artwork.className = "game-artwork";

  if (game.image) {
    artwork.classList.add("has-image");
    const image = document.createElement("img");
    image.src = game.image;
    image.alt = game.imageAlt || game.name;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      image.remove();
      artwork.classList.remove("has-image");
      artwork.classList.add("is-placeholder");
    }, { once: true });
    artwork.append(image);
  } else {
    artwork.classList.add("is-placeholder");
    artwork.setAttribute("aria-hidden", "true");
  }

  const heading = document.createElement("div");
  heading.className = "game-heading";

  const icon = document.createElement("span");
  icon.className = "card-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = game.icon;

  const title = document.createElement("h3");
  title.textContent = game.name;
  heading.append(icon, title);

  const categoryRow = document.createElement("div");
  categoryRow.className = "card-category-row";
  const category = document.createElement("span");
  category.className = "card-category";
  category.textContent = game.category;
  categoryRow.append(category);

  card.append(artwork, heading, categoryRow);
  return card;
}

function renderGames() {
  const query = normalize(searchInput.value);
  const terms = query ? query.split(/\s+/) : [];
  const filteredGames = games.filter((game) => {
    const categoryMatches = activeCategory === "__all__" || game.category === activeCategory;
    const searchableText = normalize(`${game.name} ${game.category}`);
    const textMatches = terms.every((term) => searchableText.includes(term));
    return categoryMatches && textMatches;
  });

  gameGrid.replaceChildren(...filteredGames.map(createGameCard));
  emptyState.hidden = filteredGames.length > 0;
  resultsCount.textContent = `${filteredGames.length} ${filteredGames.length === 1 ? "juego" : "juegos"} ${filteredGames.length === 1 ? "disponible" : "disponibles"}`;
  clearButton.disabled = searchInput.value.length === 0 && activeCategory === "__all__";
}

function showTrivia() {
  let previousId = null;

  try {
    previousId = sessionStorage.getItem("eduka:last-trivia");
  } catch {
    // El almacenamiento puede estar bloqueado; la selección aleatoria sigue funcionando.
  }

  const choices = triviaFacts.filter((fact) => fact.id !== previousId);
  const pool = choices.length > 0 ? choices : triviaFacts;
  const selected = pool[Math.floor(Math.random() * pool.length)];

  triviaTopic.textContent = selected.topic;
  triviaText.textContent = selected.text;
  triviaSource.href = selected.sourceUrl;
  triviaSource.textContent = `Fuente: ${selected.sourceName}`;

  try {
    sessionStorage.setItem("eduka:last-trivia", selected.id);
  } catch {
    // La página continúa mostrando el dato aunque el navegador no permita guardar la selección.
  }
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderCategoryFilters();
  renderGames();
});

searchInput.addEventListener("input", renderGames);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "__all__";
  renderCategoryFilters();
  renderGames();
  searchInput.focus();
});

renderCategoryFilters();
renderGames();
showTrivia();
