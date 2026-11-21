// Catálogo: 193 miembros ONU y los dos Estados observadores no miembros.
// Regiones y códigos ISO basados en UN M49. Familiaridad y estrellas son una clasificación editorial del juego, no un dato oficial.
// 1 estrella representa el grupo más familiar y 5 el menos familiar; los 195 registros se distribuyen en cinco grupos equilibrados.
// Fuentes: https://www.un.org/about-us/member-states | https://www.un.org/en/about-us/non-member-states | https://unstats.un.org/unsd/methodology/m49/overview
const countries = [
  {
    "code": "us",
    "name": "Estados Unidos",
    "aliases": [
      "Estados Unidos de América",
      "EE. UU.",
      "USA",
      "United States of America"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 1,
    "difficultyStars": 1
  },
  {
    "code": "mx",
    "name": "México",
    "aliases": [
      "Mexico"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 2,
    "difficultyStars": 1
  },
  {
    "code": "br",
    "name": "Brasil",
    "aliases": [
      "Brazil"
    ],
    "continent": "Sudamérica",
    "familiarityRank": 3,
    "difficultyStars": 1
  },
  {
    "code": "ar",
    "name": "Argentina",
    "aliases": [],
    "continent": "Sudamérica",
    "familiarityRank": 4,
    "difficultyStars": 1
  },
  {
    "code": "co",
    "name": "Colombia",
    "aliases": [],
    "continent": "Sudamérica",
    "familiarityRank": 5,
    "difficultyStars": 1
  },
  {
    "code": "ec",
    "name": "Ecuador",
    "aliases": [],
    "continent": "Sudamérica",
    "familiarityRank": 6,
    "difficultyStars": 1
  },
  {
    "code": "cl",
    "name": "Chile",
    "aliases": [],
    "continent": "Sudamérica",
    "familiarityRank": 7,
    "difficultyStars": 1
  },
  {
    "code": "pe",
    "name": "Perú",
    "aliases": [
      "Peru"
    ],
    "continent": "Sudamérica",
    "familiarityRank": 8,
    "difficultyStars": 1
  },
  {
    "code": "ve",
    "name": "Venezuela",
    "aliases": [
      "República Bolivariana de Venezuela",
      "Venezuela (Bolivarian Republic of)"
    ],
    "continent": "Sudamérica",
    "familiarityRank": 9,
    "difficultyStars": 1
  },
  {
    "code": "gb",
    "name": "Reino Unido",
    "aliases": [
      "Gran Bretaña",
      "United Kingdom",
      "United Kingdom of Great Britain and Northern Ireland"
    ],
    "continent": "Europa",
    "familiarityRank": 10,
    "difficultyStars": 1
  },
  {
    "code": "es",
    "name": "España",
    "aliases": [
      "Spain"
    ],
    "continent": "Europa",
    "familiarityRank": 11,
    "difficultyStars": 1
  },
  {
    "code": "fr",
    "name": "Francia",
    "aliases": [
      "France"
    ],
    "continent": "Europa",
    "familiarityRank": 12,
    "difficultyStars": 1
  },
  {
    "code": "it",
    "name": "Italia",
    "aliases": [
      "Italy"
    ],
    "continent": "Europa",
    "familiarityRank": 13,
    "difficultyStars": 1
  },
  {
    "code": "de",
    "name": "Alemania",
    "aliases": [
      "Germany"
    ],
    "continent": "Europa",
    "familiarityRank": 14,
    "difficultyStars": 1
  },
  {
    "code": "pt",
    "name": "Portugal",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 15,
    "difficultyStars": 1
  },
  {
    "code": "ru",
    "name": "Rusia",
    "aliases": [
      "Federación de Rusia",
      "Russian Federation"
    ],
    "continent": "Europa",
    "familiarityRank": 16,
    "difficultyStars": 1
  },
  {
    "code": "cn",
    "name": "China",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 17,
    "difficultyStars": 1
  },
  {
    "code": "jp",
    "name": "Japón",
    "aliases": [
      "Japan"
    ],
    "continent": "Asia",
    "familiarityRank": 18,
    "difficultyStars": 1
  },
  {
    "code": "in",
    "name": "India",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 19,
    "difficultyStars": 1
  },
  {
    "code": "ca",
    "name": "Canadá",
    "aliases": [
      "Canada"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 20,
    "difficultyStars": 1
  },
  {
    "code": "au",
    "name": "Australia",
    "aliases": [],
    "continent": "Oceanía",
    "familiarityRank": 21,
    "difficultyStars": 1
  },
  {
    "code": "eg",
    "name": "Egipto",
    "aliases": [
      "Egypt"
    ],
    "continent": "África",
    "familiarityRank": 22,
    "difficultyStars": 1
  },
  {
    "code": "za",
    "name": "Sudáfrica",
    "aliases": [
      "South Africa"
    ],
    "continent": "África",
    "familiarityRank": 23,
    "difficultyStars": 1
  },
  {
    "code": "ng",
    "name": "Nigeria",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 24,
    "difficultyStars": 1
  },
  {
    "code": "kr",
    "name": "Corea del Sur",
    "aliases": [
      "República de Corea",
      "Republic of Korea"
    ],
    "continent": "Asia",
    "familiarityRank": 25,
    "difficultyStars": 1
  },
  {
    "code": "tr",
    "name": "Turquía",
    "aliases": [
      "Türkiye"
    ],
    "continent": "Asia",
    "familiarityRank": 26,
    "difficultyStars": 1
  },
  {
    "code": "ua",
    "name": "Ucrania",
    "aliases": [
      "Ukraine"
    ],
    "continent": "Europa",
    "familiarityRank": 27,
    "difficultyStars": 1
  },
  {
    "code": "gr",
    "name": "Grecia",
    "aliases": [
      "Greece"
    ],
    "continent": "Europa",
    "familiarityRank": 28,
    "difficultyStars": 1
  },
  {
    "code": "nl",
    "name": "Países Bajos",
    "aliases": [
      "Netherlands (Kingdom of the)"
    ],
    "continent": "Europa",
    "familiarityRank": 29,
    "difficultyStars": 1
  },
  {
    "code": "ch",
    "name": "Suiza",
    "aliases": [
      "Switzerland"
    ],
    "continent": "Europa",
    "familiarityRank": 30,
    "difficultyStars": 1
  },
  {
    "code": "cu",
    "name": "Cuba",
    "aliases": [],
    "continent": "Norteamérica",
    "familiarityRank": 31,
    "difficultyStars": 1
  },
  {
    "code": "uy",
    "name": "Uruguay",
    "aliases": [],
    "continent": "Sudamérica",
    "familiarityRank": 32,
    "difficultyStars": 1
  },
  {
    "code": "py",
    "name": "Paraguay",
    "aliases": [],
    "continent": "Sudamérica",
    "familiarityRank": 33,
    "difficultyStars": 1
  },
  {
    "code": "bo",
    "name": "Bolivia",
    "aliases": [
      "Estado Plurinacional de Bolivia",
      "Bolivia (Plurinational State of)"
    ],
    "continent": "Sudamérica",
    "familiarityRank": 34,
    "difficultyStars": 1
  },
  {
    "code": "cr",
    "name": "Costa Rica",
    "aliases": [],
    "continent": "Norteamérica",
    "familiarityRank": 35,
    "difficultyStars": 1
  },
  {
    "code": "pa",
    "name": "Panamá",
    "aliases": [
      "Panama"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 36,
    "difficultyStars": 1
  },
  {
    "code": "do",
    "name": "República Dominicana",
    "aliases": [
      "Dominican Republic"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 37,
    "difficultyStars": 1
  },
  {
    "code": "sa",
    "name": "Arabia Saudí",
    "aliases": [
      "Saudi Arabia"
    ],
    "continent": "Asia",
    "familiarityRank": 38,
    "difficultyStars": 1
  },
  {
    "code": "il",
    "name": "Israel",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 39,
    "difficultyStars": 1
  },
  {
    "code": "th",
    "name": "Tailandia",
    "aliases": [
      "Thailand"
    ],
    "continent": "Asia",
    "familiarityRank": 40,
    "difficultyStars": 2
  },
  {
    "code": "id",
    "name": "Indonesia",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 41,
    "difficultyStars": 2
  },
  {
    "code": "nz",
    "name": "Nueva Zelanda",
    "aliases": [
      "New Zealand"
    ],
    "continent": "Oceanía",
    "familiarityRank": 42,
    "difficultyStars": 2
  },
  {
    "code": "ma",
    "name": "Marruecos",
    "aliases": [
      "Morocco"
    ],
    "continent": "África",
    "familiarityRank": 43,
    "difficultyStars": 2
  },
  {
    "code": "ke",
    "name": "Kenia",
    "aliases": [
      "Kenya"
    ],
    "continent": "África",
    "familiarityRank": 44,
    "difficultyStars": 2
  },
  {
    "code": "gh",
    "name": "Ghana",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 45,
    "difficultyStars": 2
  },
  {
    "code": "jm",
    "name": "Jamaica",
    "aliases": [],
    "continent": "Norteamérica",
    "familiarityRank": 46,
    "difficultyStars": 2
  },
  {
    "code": "ht",
    "name": "Haití",
    "aliases": [
      "Haiti"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 47,
    "difficultyStars": 2
  },
  {
    "code": "ir",
    "name": "Irán",
    "aliases": [
      "Iran (Islamic Republic of)"
    ],
    "continent": "Asia",
    "familiarityRank": 48,
    "difficultyStars": 2
  },
  {
    "code": "iq",
    "name": "Irak",
    "aliases": [
      "Iraq"
    ],
    "continent": "Asia",
    "familiarityRank": 49,
    "difficultyStars": 2
  },
  {
    "code": "pk",
    "name": "Pakistán",
    "aliases": [
      "Pakistan"
    ],
    "continent": "Asia",
    "familiarityRank": 50,
    "difficultyStars": 2
  },
  {
    "code": "af",
    "name": "Afganistán",
    "aliases": [
      "Afghanistan"
    ],
    "continent": "Asia",
    "familiarityRank": 51,
    "difficultyStars": 2
  },
  {
    "code": "al",
    "name": "Albania",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 52,
    "difficultyStars": 2
  },
  {
    "code": "ad",
    "name": "Andorra",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 53,
    "difficultyStars": 2
  },
  {
    "code": "ao",
    "name": "Angola",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 54,
    "difficultyStars": 2
  },
  {
    "code": "ag",
    "name": "Antigua y Barbuda",
    "aliases": [
      "Antigua and Barbuda"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 55,
    "difficultyStars": 2
  },
  {
    "code": "dz",
    "name": "Argelia",
    "aliases": [
      "Algeria"
    ],
    "continent": "África",
    "familiarityRank": 56,
    "difficultyStars": 2
  },
  {
    "code": "am",
    "name": "Armenia",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 57,
    "difficultyStars": 2
  },
  {
    "code": "at",
    "name": "Austria",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 58,
    "difficultyStars": 2
  },
  {
    "code": "az",
    "name": "Azerbaiyán",
    "aliases": [
      "Azerbaijan"
    ],
    "continent": "Asia",
    "familiarityRank": 59,
    "difficultyStars": 2
  },
  {
    "code": "bs",
    "name": "Bahamas",
    "aliases": [],
    "continent": "Norteamérica",
    "familiarityRank": 60,
    "difficultyStars": 2
  },
  {
    "code": "bd",
    "name": "Bangladés",
    "aliases": [
      "Bangladesh"
    ],
    "continent": "Asia",
    "familiarityRank": 61,
    "difficultyStars": 2
  },
  {
    "code": "bb",
    "name": "Barbados",
    "aliases": [],
    "continent": "Norteamérica",
    "familiarityRank": 62,
    "difficultyStars": 2
  },
  {
    "code": "bh",
    "name": "Baréin",
    "aliases": [
      "Bahrain"
    ],
    "continent": "Asia",
    "familiarityRank": 63,
    "difficultyStars": 2
  },
  {
    "code": "be",
    "name": "Bélgica",
    "aliases": [
      "Belgium"
    ],
    "continent": "Europa",
    "familiarityRank": 64,
    "difficultyStars": 2
  },
  {
    "code": "bz",
    "name": "Belice",
    "aliases": [
      "Belize"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 65,
    "difficultyStars": 2
  },
  {
    "code": "bj",
    "name": "Benín",
    "aliases": [
      "Benin"
    ],
    "continent": "África",
    "familiarityRank": 66,
    "difficultyStars": 2
  },
  {
    "code": "by",
    "name": "Bielorrusia",
    "aliases": [
      "Belarus"
    ],
    "continent": "Europa",
    "familiarityRank": 67,
    "difficultyStars": 2
  },
  {
    "code": "ba",
    "name": "Bosnia y Herzegovina",
    "aliases": [
      "Bosnia and Herzegovina"
    ],
    "continent": "Europa",
    "familiarityRank": 68,
    "difficultyStars": 2
  },
  {
    "code": "bw",
    "name": "Botsuana",
    "aliases": [
      "Botswana"
    ],
    "continent": "África",
    "familiarityRank": 69,
    "difficultyStars": 2
  },
  {
    "code": "bn",
    "name": "Brunéi",
    "aliases": [
      "Brunei Darussalam"
    ],
    "continent": "Asia",
    "familiarityRank": 70,
    "difficultyStars": 2
  },
  {
    "code": "bg",
    "name": "Bulgaria",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 71,
    "difficultyStars": 2
  },
  {
    "code": "bf",
    "name": "Burkina Faso",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 72,
    "difficultyStars": 2
  },
  {
    "code": "bi",
    "name": "Burundi",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 73,
    "difficultyStars": 2
  },
  {
    "code": "bt",
    "name": "Bután",
    "aliases": [
      "Bhutan"
    ],
    "continent": "Asia",
    "familiarityRank": 74,
    "difficultyStars": 2
  },
  {
    "code": "cv",
    "name": "Cabo Verde",
    "aliases": [
      "Cape Verde"
    ],
    "continent": "África",
    "familiarityRank": 75,
    "difficultyStars": 2
  },
  {
    "code": "kh",
    "name": "Camboya",
    "aliases": [
      "Cambodia"
    ],
    "continent": "Asia",
    "familiarityRank": 76,
    "difficultyStars": 2
  },
  {
    "code": "cm",
    "name": "Camerún",
    "aliases": [
      "Cameroon"
    ],
    "continent": "África",
    "familiarityRank": 77,
    "difficultyStars": 2
  },
  {
    "code": "qa",
    "name": "Catar",
    "aliases": [
      "Qatar"
    ],
    "continent": "Asia",
    "familiarityRank": 78,
    "difficultyStars": 2
  },
  {
    "code": "td",
    "name": "Chad",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 79,
    "difficultyStars": 3
  },
  {
    "code": "cz",
    "name": "Chequia",
    "aliases": [
      "República Checa",
      "Czechia"
    ],
    "continent": "Europa",
    "familiarityRank": 80,
    "difficultyStars": 3
  },
  {
    "code": "cy",
    "name": "Chipre",
    "aliases": [
      "Cyprus"
    ],
    "continent": "Asia",
    "familiarityRank": 81,
    "difficultyStars": 3
  },
  {
    "code": "va",
    "name": "Ciudad del Vaticano",
    "aliases": [
      "Santa Sede",
      "Vaticano",
      "Estado de la Ciudad del Vaticano",
      "Holy See"
    ],
    "continent": "Europa",
    "familiarityRank": 82,
    "difficultyStars": 3
  },
  {
    "code": "km",
    "name": "Comoras",
    "aliases": [
      "Comoros"
    ],
    "continent": "África",
    "familiarityRank": 83,
    "difficultyStars": 3
  },
  {
    "code": "cg",
    "name": "Congo",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 84,
    "difficultyStars": 3
  },
  {
    "code": "kp",
    "name": "Corea del Norte",
    "aliases": [
      "República Popular Democrática de Corea",
      "Democratic People's Republic of Korea"
    ],
    "continent": "Asia",
    "familiarityRank": 85,
    "difficultyStars": 3
  },
  {
    "code": "ci",
    "name": "Costa de Marfil",
    "aliases": [
      "Côte d’Ivoire"
    ],
    "continent": "África",
    "familiarityRank": 86,
    "difficultyStars": 3
  },
  {
    "code": "hr",
    "name": "Croacia",
    "aliases": [
      "Croatia"
    ],
    "continent": "Europa",
    "familiarityRank": 87,
    "difficultyStars": 3
  },
  {
    "code": "dk",
    "name": "Dinamarca",
    "aliases": [
      "Denmark"
    ],
    "continent": "Europa",
    "familiarityRank": 88,
    "difficultyStars": 3
  },
  {
    "code": "dm",
    "name": "Dominica",
    "aliases": [],
    "continent": "Norteamérica",
    "familiarityRank": 89,
    "difficultyStars": 3
  },
  {
    "code": "sv",
    "name": "El Salvador",
    "aliases": [],
    "continent": "Norteamérica",
    "familiarityRank": 90,
    "difficultyStars": 3
  },
  {
    "code": "ae",
    "name": "Emiratos Árabes Unidos",
    "aliases": [
      "United Arab Emirates"
    ],
    "continent": "Asia",
    "familiarityRank": 91,
    "difficultyStars": 3
  },
  {
    "code": "er",
    "name": "Eritrea",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 92,
    "difficultyStars": 3
  },
  {
    "code": "sk",
    "name": "Eslovaquia",
    "aliases": [
      "Slovakia"
    ],
    "continent": "Europa",
    "familiarityRank": 93,
    "difficultyStars": 3
  },
  {
    "code": "si",
    "name": "Eslovenia",
    "aliases": [
      "Slovenia"
    ],
    "continent": "Europa",
    "familiarityRank": 94,
    "difficultyStars": 3
  },
  {
    "code": "fm",
    "name": "Estados Federados de Micronesia",
    "aliases": [
      "Micronesia",
      "Micronesia (Federated States of)"
    ],
    "continent": "Oceanía",
    "familiarityRank": 95,
    "difficultyStars": 3
  },
  {
    "code": "ee",
    "name": "Estonia",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 96,
    "difficultyStars": 3
  },
  {
    "code": "sz",
    "name": "Esuatini",
    "aliases": [
      "Suazilandia",
      "Eswatini"
    ],
    "continent": "África",
    "familiarityRank": 97,
    "difficultyStars": 3
  },
  {
    "code": "et",
    "name": "Etiopía",
    "aliases": [
      "Ethiopia"
    ],
    "continent": "África",
    "familiarityRank": 98,
    "difficultyStars": 3
  },
  {
    "code": "ph",
    "name": "Filipinas",
    "aliases": [
      "Philippines"
    ],
    "continent": "Asia",
    "familiarityRank": 99,
    "difficultyStars": 3
  },
  {
    "code": "fi",
    "name": "Finlandia",
    "aliases": [
      "Finland"
    ],
    "continent": "Europa",
    "familiarityRank": 100,
    "difficultyStars": 3
  },
  {
    "code": "fj",
    "name": "Fiyi",
    "aliases": [
      "Fiji"
    ],
    "continent": "Oceanía",
    "familiarityRank": 101,
    "difficultyStars": 3
  },
  {
    "code": "ga",
    "name": "Gabón",
    "aliases": [
      "Gabon"
    ],
    "continent": "África",
    "familiarityRank": 102,
    "difficultyStars": 3
  },
  {
    "code": "gm",
    "name": "Gambia",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 103,
    "difficultyStars": 3
  },
  {
    "code": "ge",
    "name": "Georgia",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 104,
    "difficultyStars": 3
  },
  {
    "code": "gd",
    "name": "Granada",
    "aliases": [
      "Grenada"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 105,
    "difficultyStars": 3
  },
  {
    "code": "gt",
    "name": "Guatemala",
    "aliases": [],
    "continent": "Norteamérica",
    "familiarityRank": 106,
    "difficultyStars": 3
  },
  {
    "code": "gn",
    "name": "Guinea",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 107,
    "difficultyStars": 3
  },
  {
    "code": "gq",
    "name": "Guinea Ecuatorial",
    "aliases": [
      "Equatorial Guinea"
    ],
    "continent": "África",
    "familiarityRank": 108,
    "difficultyStars": 3
  },
  {
    "code": "gw",
    "name": "Guinea-Bisáu",
    "aliases": [
      "Guinea-Bissau"
    ],
    "continent": "África",
    "familiarityRank": 109,
    "difficultyStars": 3
  },
  {
    "code": "gy",
    "name": "Guyana",
    "aliases": [],
    "continent": "Sudamérica",
    "familiarityRank": 110,
    "difficultyStars": 3
  },
  {
    "code": "hn",
    "name": "Honduras",
    "aliases": [],
    "continent": "Norteamérica",
    "familiarityRank": 111,
    "difficultyStars": 3
  },
  {
    "code": "hu",
    "name": "Hungría",
    "aliases": [
      "Hungary"
    ],
    "continent": "Europa",
    "familiarityRank": 112,
    "difficultyStars": 3
  },
  {
    "code": "ie",
    "name": "Irlanda",
    "aliases": [
      "Ireland"
    ],
    "continent": "Europa",
    "familiarityRank": 113,
    "difficultyStars": 3
  },
  {
    "code": "is",
    "name": "Islandia",
    "aliases": [
      "Iceland"
    ],
    "continent": "Europa",
    "familiarityRank": 114,
    "difficultyStars": 3
  },
  {
    "code": "mh",
    "name": "Islas Marshall",
    "aliases": [
      "Marshall Islands"
    ],
    "continent": "Oceanía",
    "familiarityRank": 115,
    "difficultyStars": 3
  },
  {
    "code": "sb",
    "name": "Islas Salomón",
    "aliases": [
      "Solomon Islands"
    ],
    "continent": "Oceanía",
    "familiarityRank": 116,
    "difficultyStars": 3
  },
  {
    "code": "jo",
    "name": "Jordania",
    "aliases": [
      "Jordan"
    ],
    "continent": "Asia",
    "familiarityRank": 117,
    "difficultyStars": 3
  },
  {
    "code": "kz",
    "name": "Kazajistán",
    "aliases": [
      "Kazakhstan"
    ],
    "continent": "Asia",
    "familiarityRank": 118,
    "difficultyStars": 4
  },
  {
    "code": "kg",
    "name": "Kirguistán",
    "aliases": [
      "Kyrgyzstan"
    ],
    "continent": "Asia",
    "familiarityRank": 119,
    "difficultyStars": 4
  },
  {
    "code": "ki",
    "name": "Kiribati",
    "aliases": [],
    "continent": "Oceanía",
    "familiarityRank": 120,
    "difficultyStars": 4
  },
  {
    "code": "kw",
    "name": "Kuwait",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 121,
    "difficultyStars": 4
  },
  {
    "code": "la",
    "name": "Laos",
    "aliases": [
      "República Democrática Popular Lao",
      "Lao People's Democratic Republic"
    ],
    "continent": "Asia",
    "familiarityRank": 122,
    "difficultyStars": 4
  },
  {
    "code": "ls",
    "name": "Lesoto",
    "aliases": [
      "Lesotho"
    ],
    "continent": "África",
    "familiarityRank": 123,
    "difficultyStars": 4
  },
  {
    "code": "lv",
    "name": "Letonia",
    "aliases": [
      "Latvia"
    ],
    "continent": "Europa",
    "familiarityRank": 124,
    "difficultyStars": 4
  },
  {
    "code": "lb",
    "name": "Líbano",
    "aliases": [
      "Lebanon"
    ],
    "continent": "Asia",
    "familiarityRank": 125,
    "difficultyStars": 4
  },
  {
    "code": "lr",
    "name": "Liberia",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 126,
    "difficultyStars": 4
  },
  {
    "code": "ly",
    "name": "Libia",
    "aliases": [
      "Libya"
    ],
    "continent": "África",
    "familiarityRank": 127,
    "difficultyStars": 4
  },
  {
    "code": "li",
    "name": "Liechtenstein",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 128,
    "difficultyStars": 4
  },
  {
    "code": "lt",
    "name": "Lituania",
    "aliases": [
      "Lithuania"
    ],
    "continent": "Europa",
    "familiarityRank": 129,
    "difficultyStars": 4
  },
  {
    "code": "lu",
    "name": "Luxemburgo",
    "aliases": [
      "Luxembourg"
    ],
    "continent": "Europa",
    "familiarityRank": 130,
    "difficultyStars": 3
  },
  {
    "code": "mk",
    "name": "Macedonia del Norte",
    "aliases": [
      "Macedonia",
      "North Macedonia"
    ],
    "continent": "Europa",
    "familiarityRank": 131,
    "difficultyStars": 4
  },
  {
    "code": "mg",
    "name": "Madagascar",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 132,
    "difficultyStars": 4
  },
  {
    "code": "my",
    "name": "Malasia",
    "aliases": [
      "Malaysia"
    ],
    "continent": "Asia",
    "familiarityRank": 133,
    "difficultyStars": 4
  },
  {
    "code": "mw",
    "name": "Malaui",
    "aliases": [
      "Malawi"
    ],
    "continent": "África",
    "familiarityRank": 134,
    "difficultyStars": 5
  },
  {
    "code": "mv",
    "name": "Maldivas",
    "aliases": [
      "Maldives"
    ],
    "continent": "Asia",
    "familiarityRank": 135,
    "difficultyStars": 4
  },
  {
    "code": "ml",
    "name": "Mali",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 136,
    "difficultyStars": 4
  },
  {
    "code": "mt",
    "name": "Malta",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 137,
    "difficultyStars": 4
  },
  {
    "code": "mu",
    "name": "Mauricio",
    "aliases": [
      "Mauritius"
    ],
    "continent": "África",
    "familiarityRank": 138,
    "difficultyStars": 4
  },
  {
    "code": "mr",
    "name": "Mauritania",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 139,
    "difficultyStars": 4
  },
  {
    "code": "md",
    "name": "Moldavia",
    "aliases": [
      "Moldova",
      "República de Moldova",
      "Republic of Moldova"
    ],
    "continent": "Europa",
    "familiarityRank": 140,
    "difficultyStars": 4
  },
  {
    "code": "mc",
    "name": "Mónaco",
    "aliases": [
      "Monaco"
    ],
    "continent": "Europa",
    "familiarityRank": 141,
    "difficultyStars": 4
  },
  {
    "code": "mn",
    "name": "Mongolia",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 142,
    "difficultyStars": 4
  },
  {
    "code": "me",
    "name": "Montenegro",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 143,
    "difficultyStars": 4
  },
  {
    "code": "mz",
    "name": "Mozambique",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 144,
    "difficultyStars": 4
  },
  {
    "code": "mm",
    "name": "Myanmar",
    "aliases": [
      "Birmania"
    ],
    "continent": "Asia",
    "familiarityRank": 145,
    "difficultyStars": 4
  },
  {
    "code": "na",
    "name": "Namibia",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 146,
    "difficultyStars": 4
  },
  {
    "code": "nr",
    "name": "Nauru",
    "aliases": [
      "Naoero"
    ],
    "continent": "Oceanía",
    "familiarityRank": 147,
    "difficultyStars": 4
  },
  {
    "code": "np",
    "name": "Nepal",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 148,
    "difficultyStars": 4
  },
  {
    "code": "ni",
    "name": "Nicaragua",
    "aliases": [],
    "continent": "Norteamérica",
    "familiarityRank": 149,
    "difficultyStars": 4
  },
  {
    "code": "ne",
    "name": "Níger",
    "aliases": [
      "Niger"
    ],
    "continent": "África",
    "familiarityRank": 150,
    "difficultyStars": 4
  },
  {
    "code": "no",
    "name": "Noruega",
    "aliases": [
      "Norway"
    ],
    "continent": "Europa",
    "familiarityRank": 151,
    "difficultyStars": 4
  },
  {
    "code": "om",
    "name": "Omán",
    "aliases": [
      "Oman"
    ],
    "continent": "Asia",
    "familiarityRank": 152,
    "difficultyStars": 4
  },
  {
    "code": "pw",
    "name": "Palaos",
    "aliases": [
      "Palau"
    ],
    "continent": "Oceanía",
    "familiarityRank": 153,
    "difficultyStars": 4
  },
  {
    "code": "ps",
    "name": "Palestina",
    "aliases": [
      "Estado de Palestina",
      "State of Palestine"
    ],
    "continent": "Asia",
    "familiarityRank": 154,
    "difficultyStars": 4
  },
  {
    "code": "pg",
    "name": "Papúa Nueva Guinea",
    "aliases": [
      "Papua New Guinea"
    ],
    "continent": "Oceanía",
    "familiarityRank": 155,
    "difficultyStars": 4
  },
  {
    "code": "pl",
    "name": "Polonia",
    "aliases": [
      "Poland"
    ],
    "continent": "Europa",
    "familiarityRank": 156,
    "difficultyStars": 2
  },
  {
    "code": "cf",
    "name": "República Centroafricana",
    "aliases": [
      "Central African Republic"
    ],
    "continent": "África",
    "familiarityRank": 157,
    "difficultyStars": 5
  },
  {
    "code": "cd",
    "name": "República Democrática del Congo",
    "aliases": [
      "Democratic Republic of the Congo"
    ],
    "continent": "África",
    "familiarityRank": 158,
    "difficultyStars": 5
  },
  {
    "code": "rw",
    "name": "Ruanda",
    "aliases": [
      "Rwanda"
    ],
    "continent": "África",
    "familiarityRank": 159,
    "difficultyStars": 5
  },
  {
    "code": "ro",
    "name": "Rumanía",
    "aliases": [
      "Romania"
    ],
    "continent": "Europa",
    "familiarityRank": 160,
    "difficultyStars": 5
  },
  {
    "code": "ws",
    "name": "Samoa",
    "aliases": [],
    "continent": "Oceanía",
    "familiarityRank": 161,
    "difficultyStars": 5
  },
  {
    "code": "kn",
    "name": "San Cristóbal y Nieves",
    "aliases": [
      "Saint Kitts and Nevis"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 162,
    "difficultyStars": 5
  },
  {
    "code": "sm",
    "name": "San Marino",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 163,
    "difficultyStars": 5
  },
  {
    "code": "vc",
    "name": "San Vicente y las Granadinas",
    "aliases": [
      "Saint Vincent and the Grenadines"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 164,
    "difficultyStars": 5
  },
  {
    "code": "lc",
    "name": "Santa Lucía",
    "aliases": [
      "Saint Lucia"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 165,
    "difficultyStars": 5
  },
  {
    "code": "st",
    "name": "Santo Tomé y Príncipe",
    "aliases": [
      "Sao Tome and Principe"
    ],
    "continent": "África",
    "familiarityRank": 166,
    "difficultyStars": 5
  },
  {
    "code": "sn",
    "name": "Senegal",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 167,
    "difficultyStars": 1
  },
  {
    "code": "rs",
    "name": "Serbia",
    "aliases": [],
    "continent": "Europa",
    "familiarityRank": 168,
    "difficultyStars": 3
  },
  {
    "code": "sc",
    "name": "Seychelles",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 169,
    "difficultyStars": 5
  },
  {
    "code": "sl",
    "name": "Sierra Leona",
    "aliases": [
      "Sierra Leone"
    ],
    "continent": "África",
    "familiarityRank": 170,
    "difficultyStars": 5
  },
  {
    "code": "sg",
    "name": "Singapur",
    "aliases": [
      "Singapore"
    ],
    "continent": "Asia",
    "familiarityRank": 171,
    "difficultyStars": 5
  },
  {
    "code": "sy",
    "name": "Siria",
    "aliases": [
      "República Árabe Siria",
      "Syrian Arab Republic"
    ],
    "continent": "Asia",
    "familiarityRank": 172,
    "difficultyStars": 5
  },
  {
    "code": "so",
    "name": "Somalia",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 173,
    "difficultyStars": 5
  },
  {
    "code": "lk",
    "name": "Sri Lanka",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 174,
    "difficultyStars": 5
  },
  {
    "code": "sd",
    "name": "Sudán",
    "aliases": [
      "Sudan"
    ],
    "continent": "África",
    "familiarityRank": 175,
    "difficultyStars": 5
  },
  {
    "code": "ss",
    "name": "Sudán del Sur",
    "aliases": [
      "South Sudan"
    ],
    "continent": "África",
    "familiarityRank": 176,
    "difficultyStars": 5
  },
  {
    "code": "se",
    "name": "Suecia",
    "aliases": [
      "Sweden"
    ],
    "continent": "Europa",
    "familiarityRank": 177,
    "difficultyStars": 2
  },
  {
    "code": "sr",
    "name": "Surinam",
    "aliases": [
      "Suriname"
    ],
    "continent": "Sudamérica",
    "familiarityRank": 178,
    "difficultyStars": 5
  },
  {
    "code": "tz",
    "name": "Tanzania",
    "aliases": [
      "República Unida de Tanzania",
      "United Republic of Tanzania"
    ],
    "continent": "África",
    "familiarityRank": 179,
    "difficultyStars": 5
  },
  {
    "code": "tj",
    "name": "Tayikistán",
    "aliases": [
      "Tajikistan"
    ],
    "continent": "Asia",
    "familiarityRank": 180,
    "difficultyStars": 5
  },
  {
    "code": "tl",
    "name": "Timor Oriental",
    "aliases": [
      "Timor-Leste"
    ],
    "continent": "Asia",
    "familiarityRank": 181,
    "difficultyStars": 5
  },
  {
    "code": "tg",
    "name": "Togo",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 182,
    "difficultyStars": 5
  },
  {
    "code": "to",
    "name": "Tonga",
    "aliases": [],
    "continent": "Oceanía",
    "familiarityRank": 183,
    "difficultyStars": 5
  },
  {
    "code": "tt",
    "name": "Trinidad y Tobago",
    "aliases": [
      "Trinidad and Tobago"
    ],
    "continent": "Norteamérica",
    "familiarityRank": 184,
    "difficultyStars": 5
  },
  {
    "code": "tn",
    "name": "Túnez",
    "aliases": [
      "Tunisia"
    ],
    "continent": "África",
    "familiarityRank": 185,
    "difficultyStars": 4
  },
  {
    "code": "tm",
    "name": "Turkmenistán",
    "aliases": [
      "Turkmenistan"
    ],
    "continent": "Asia",
    "familiarityRank": 186,
    "difficultyStars": 5
  },
  {
    "code": "tv",
    "name": "Tuvalu",
    "aliases": [],
    "continent": "Oceanía",
    "familiarityRank": 187,
    "difficultyStars": 5
  },
  {
    "code": "ug",
    "name": "Uganda",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 188,
    "difficultyStars": 5
  },
  {
    "code": "uz",
    "name": "Uzbekistán",
    "aliases": [
      "Uzbekistan"
    ],
    "continent": "Asia",
    "familiarityRank": 189,
    "difficultyStars": 5
  },
  {
    "code": "vu",
    "name": "Vanuatu",
    "aliases": [],
    "continent": "Oceanía",
    "familiarityRank": 190,
    "difficultyStars": 5
  },
  {
    "code": "vn",
    "name": "Vietnam",
    "aliases": [
      "Viet Nam"
    ],
    "continent": "Asia",
    "familiarityRank": 191,
    "difficultyStars": 3
  },
  {
    "code": "ye",
    "name": "Yemen",
    "aliases": [],
    "continent": "Asia",
    "familiarityRank": 192,
    "difficultyStars": 5
  },
  {
    "code": "dj",
    "name": "Yibuti",
    "aliases": [
      "Djibouti"
    ],
    "continent": "África",
    "familiarityRank": 193,
    "difficultyStars": 5
  },
  {
    "code": "zm",
    "name": "Zambia",
    "aliases": [],
    "continent": "África",
    "familiarityRank": 194,
    "difficultyStars": 5
  },
  {
    "code": "zw",
    "name": "Zimbabue",
    "aliases": [
      "Zimbabwe"
    ],
    "continent": "África",
    "familiarityRank": 195,
    "difficultyStars": 5
  }
];
