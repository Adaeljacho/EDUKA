// Capitales recopiladas de UNGEGN (UN Geographical Names Database), con nombres en español y variantes para búsqueda.
// Sudáfrica: tres capitales según gov.za. Sri Lanka: se muestra la capital administrativa oficial, no Colombo, que es la capital comercial.
// Fuentes: https://ungegn.un.org/dashboard/cities/index | https://unstats.un.org/unsd/geoinfo/geonames/About.htm | https://www.gov.za/about-sa/south-africas-provinces | https://www.mfa.gov.lk/national-profile-and-geography | https://www.gov.kz/article/19305?lang=en | https://tscc.pna.ps/en/pages?id=palestinian_basic_law | https://www.gov.sz/images/justice/swaziland_constitution.pdf
const capitalsByCountry = [
  {
    "code": "us",
    "capitals": [
      {
        "name": "Washington, D.C.",
        "aliases": [
          "Washington"
        ]
      }
    ]
  },
  {
    "code": "mx",
    "capitals": [
      {
        "name": "Ciudad de México",
        "aliases": [
          "Mexico City"
        ]
      }
    ]
  },
  {
    "code": "br",
    "capitals": [
      {
        "name": "Brasilia",
        "aliases": []
      }
    ]
  },
  {
    "code": "ar",
    "capitals": [
      {
        "name": "Ciudad de Buenos Aires",
        "aliases": [
          "Buenos Aires"
        ]
      }
    ]
  },
  {
    "code": "co",
    "capitals": [
      {
        "name": "Bogotá",
        "aliases": [
          "Bogota"
        ]
      }
    ]
  },
  {
    "code": "ec",
    "capitals": [
      {
        "name": "Quito",
        "aliases": []
      }
    ]
  },
  {
    "code": "cl",
    "capitals": [
      {
        "name": "Santiago",
        "aliases": []
      }
    ]
  },
  {
    "code": "pe",
    "capitals": [
      {
        "name": "Lima",
        "aliases": []
      }
    ]
  },
  {
    "code": "ve",
    "capitals": [
      {
        "name": "Caracas",
        "aliases": []
      }
    ]
  },
  {
    "code": "gb",
    "capitals": [
      {
        "name": "Londres",
        "aliases": [
          "London"
        ]
      }
    ]
  },
  {
    "code": "es",
    "capitals": [
      {
        "name": "Madrid",
        "aliases": []
      }
    ]
  },
  {
    "code": "fr",
    "capitals": [
      {
        "name": "París",
        "aliases": [
          "Paris"
        ]
      }
    ]
  },
  {
    "code": "it",
    "capitals": [
      {
        "name": "Roma",
        "aliases": [
          "Rome"
        ]
      }
    ]
  },
  {
    "code": "de",
    "capitals": [
      {
        "name": "Berlín",
        "aliases": [
          "Berlin"
        ]
      }
    ]
  },
  {
    "code": "pt",
    "capitals": [
      {
        "name": "Lisboa",
        "aliases": [
          "Lisbon"
        ]
      }
    ]
  },
  {
    "code": "ru",
    "capitals": [
      {
        "name": "Moscú",
        "aliases": [
          "Moscow"
        ]
      }
    ]
  },
  {
    "code": "cn",
    "capitals": [
      {
        "name": "Beijing",
        "aliases": []
      }
    ]
  },
  {
    "code": "jp",
    "capitals": [
      {
        "name": "Tokio",
        "aliases": [
          "Tokyo"
        ]
      }
    ]
  },
  {
    "code": "in",
    "capitals": [
      {
        "name": "Nueva Delhi",
        "aliases": [
          "New Delhi"
        ]
      }
    ]
  },
  {
    "code": "ca",
    "capitals": [
      {
        "name": "Ottawa",
        "aliases": []
      }
    ]
  },
  {
    "code": "au",
    "capitals": [
      {
        "name": "Canberra",
        "aliases": []
      }
    ]
  },
  {
    "code": "eg",
    "capitals": [
      {
        "name": "El Cairo",
        "aliases": [
          "Cairo"
        ]
      }
    ]
  },
  {
    "code": "za",
    "capitals": [
      {
        "name": "Pretoria",
        "aliases": [
          "Pretoria"
        ]
      },
      {
        "name": "Ciudad del Cabo",
        "aliases": [
          "Cape Town"
        ]
      },
      {
        "name": "Bloemfontein",
        "aliases": [
          "Bloemfontein"
        ]
      }
    ]
  },
  {
    "code": "ng",
    "capitals": [
      {
        "name": "Abuja",
        "aliases": []
      }
    ]
  },
  {
    "code": "kr",
    "capitals": [
      {
        "name": "Seúl",
        "aliases": [
          "Seoul"
        ]
      }
    ]
  },
  {
    "code": "tr",
    "capitals": [
      {
        "name": "Ankara",
        "aliases": []
      }
    ]
  },
  {
    "code": "ua",
    "capitals": [
      {
        "name": "Kyiv",
        "aliases": [
          "Kiev"
        ]
      }
    ]
  },
  {
    "code": "gr",
    "capitals": [
      {
        "name": "Atenas",
        "aliases": [
          "Athens"
        ]
      }
    ]
  },
  {
    "code": "nl",
    "capitals": [
      {
        "name": "Amsterdam",
        "aliases": []
      }
    ]
  },
  {
    "code": "ch",
    "capitals": [
      {
        "name": "Berna",
        "aliases": [
          "Berne"
        ]
      }
    ]
  },
  {
    "code": "cu",
    "capitals": [
      {
        "name": "La Habana",
        "aliases": [
          "Havana"
        ]
      }
    ]
  },
  {
    "code": "uy",
    "capitals": [
      {
        "name": "Montevideo",
        "aliases": []
      }
    ]
  },
  {
    "code": "py",
    "capitals": [
      {
        "name": "Asunción",
        "aliases": []
      }
    ]
  },
  {
    "code": "bo",
    "capitals": [
      {
        "name": "Sucre",
        "aliases": [
          "Sucre"
        ]
      },
      {
        "name": "La Paz",
        "aliases": [
          "La Paz"
        ]
      }
    ]
  },
  {
    "code": "cr",
    "capitals": [
      {
        "name": "San José",
        "aliases": []
      }
    ]
  },
  {
    "code": "pa",
    "capitals": [
      {
        "name": "Panamá",
        "aliases": [
          "Panama City"
        ]
      }
    ]
  },
  {
    "code": "do",
    "capitals": [
      {
        "name": "Santo Domingo",
        "aliases": []
      }
    ]
  },
  {
    "code": "sa",
    "capitals": [
      {
        "name": "Riad",
        "aliases": [
          "Riyadh"
        ]
      }
    ]
  },
  {
    "code": "il",
    "capitals": [
      {
        "name": "Jerusalén",
        "aliases": [
          "Jerusalem"
        ]
      }
    ]
  },
  {
    "code": "th",
    "capitals": [
      {
        "name": "Bangkok",
        "aliases": []
      }
    ]
  },
  {
    "code": "id",
    "capitals": [
      {
        "name": "Yakarta",
        "aliases": [
          "Jakarta"
        ]
      }
    ]
  },
  {
    "code": "nz",
    "capitals": [
      {
        "name": "Wellington",
        "aliases": []
      }
    ]
  },
  {
    "code": "ma",
    "capitals": [
      {
        "name": "Rabat",
        "aliases": []
      }
    ]
  },
  {
    "code": "ke",
    "capitals": [
      {
        "name": "Nairobi",
        "aliases": []
      }
    ]
  },
  {
    "code": "gh",
    "capitals": [
      {
        "name": "Accra",
        "aliases": []
      }
    ]
  },
  {
    "code": "jm",
    "capitals": [
      {
        "name": "Kingston",
        "aliases": []
      }
    ]
  },
  {
    "code": "ht",
    "capitals": [
      {
        "name": "Puerto Príncipe",
        "aliases": [
          "Port-au-Prince"
        ]
      }
    ]
  },
  {
    "code": "ir",
    "capitals": [
      {
        "name": "Teherán",
        "aliases": [
          "Tehran"
        ]
      }
    ]
  },
  {
    "code": "iq",
    "capitals": [
      {
        "name": "Bagdad",
        "aliases": [
          "Baghdad"
        ]
      }
    ]
  },
  {
    "code": "pk",
    "capitals": [
      {
        "name": "Islamabad",
        "aliases": []
      }
    ]
  },
  {
    "code": "af",
    "capitals": [
      {
        "name": "Kabul",
        "aliases": []
      }
    ]
  },
  {
    "code": "al",
    "capitals": [
      {
        "name": "Tirana",
        "aliases": []
      }
    ]
  },
  {
    "code": "ad",
    "capitals": [
      {
        "name": "Andorra la Vieja",
        "aliases": [
          "Andorra la Vella"
        ]
      }
    ]
  },
  {
    "code": "ao",
    "capitals": [
      {
        "name": "Luanda",
        "aliases": []
      }
    ]
  },
  {
    "code": "ag",
    "capitals": [
      {
        "name": "Saint John's",
        "aliases": [
          "St John's"
        ]
      }
    ]
  },
  {
    "code": "dz",
    "capitals": [
      {
        "name": "Argel",
        "aliases": [
          "Algiers"
        ]
      }
    ]
  },
  {
    "code": "am",
    "capitals": [
      {
        "name": "Ereván",
        "aliases": [
          "Yerevan"
        ]
      }
    ]
  },
  {
    "code": "at",
    "capitals": [
      {
        "name": "Viena",
        "aliases": [
          "Vienna"
        ]
      }
    ]
  },
  {
    "code": "az",
    "capitals": [
      {
        "name": "Bakú",
        "aliases": [
          "Baku"
        ]
      }
    ]
  },
  {
    "code": "bs",
    "capitals": [
      {
        "name": "Nassau",
        "aliases": []
      }
    ]
  },
  {
    "code": "bd",
    "capitals": [
      {
        "name": "Dhaka",
        "aliases": []
      }
    ]
  },
  {
    "code": "bb",
    "capitals": [
      {
        "name": "Bridgetown",
        "aliases": []
      }
    ]
  },
  {
    "code": "bh",
    "capitals": [
      {
        "name": "Manama",
        "aliases": []
      }
    ]
  },
  {
    "code": "be",
    "capitals": [
      {
        "name": "Bruselas",
        "aliases": [
          "Brussels"
        ]
      }
    ]
  },
  {
    "code": "bz",
    "capitals": [
      {
        "name": "Belmopan",
        "aliases": []
      }
    ]
  },
  {
    "code": "bj",
    "capitals": [
      {
        "name": "Porto Novo",
        "aliases": [
          "Porto-Novo"
        ]
      }
    ]
  },
  {
    "code": "by",
    "capitals": [
      {
        "name": "Minsk",
        "aliases": []
      }
    ]
  },
  {
    "code": "ba",
    "capitals": [
      {
        "name": "Sarajevo",
        "aliases": []
      }
    ]
  },
  {
    "code": "bw",
    "capitals": [
      {
        "name": "Gaborone",
        "aliases": []
      }
    ]
  },
  {
    "code": "bn",
    "capitals": [
      {
        "name": "Bandar Seri Begawan",
        "aliases": []
      }
    ]
  },
  {
    "code": "bg",
    "capitals": [
      {
        "name": "Sofía",
        "aliases": [
          "Sofia"
        ]
      }
    ]
  },
  {
    "code": "bf",
    "capitals": [
      {
        "name": "Uagadugú",
        "aliases": [
          "Ouagadougou"
        ]
      }
    ]
  },
  {
    "code": "bi",
    "capitals": [
      {
        "name": "Guitega",
        "aliases": [
          "Gitega"
        ]
      }
    ]
  },
  {
    "code": "bt",
    "capitals": [
      {
        "name": "Timbu",
        "aliases": [
          "Thimphu"
        ]
      }
    ]
  },
  {
    "code": "cv",
    "capitals": [
      {
        "name": "Praia",
        "aliases": []
      }
    ]
  },
  {
    "code": "kh",
    "capitals": [
      {
        "name": "Phnom Penh",
        "aliases": []
      }
    ]
  },
  {
    "code": "cm",
    "capitals": [
      {
        "name": "Yaundé",
        "aliases": [
          "Yaoundé"
        ]
      }
    ]
  },
  {
    "code": "qa",
    "capitals": [
      {
        "name": "Doha",
        "aliases": []
      }
    ]
  },
  {
    "code": "td",
    "capitals": [
      {
        "name": "Nyamena",
        "aliases": [
          "N'Djamena"
        ]
      }
    ]
  },
  {
    "code": "cz",
    "capitals": [
      {
        "name": "Praga",
        "aliases": [
          "Prague"
        ]
      }
    ]
  },
  {
    "code": "cy",
    "capitals": [
      {
        "name": "Nicosia",
        "aliases": []
      }
    ]
  },
  {
    "code": "va",
    "capitals": [
      {
        "name": "Ciudad del Vaticano",
        "aliases": [
          "Vaticano",
          "Vatican City"
        ]
      }
    ]
  },
  {
    "code": "km",
    "capitals": [
      {
        "name": "Moroni",
        "aliases": []
      }
    ]
  },
  {
    "code": "cg",
    "capitals": [
      {
        "name": "Brazzaville",
        "aliases": []
      }
    ]
  },
  {
    "code": "kp",
    "capitals": [
      {
        "name": "Pyongyang",
        "aliases": []
      }
    ]
  },
  {
    "code": "ci",
    "capitals": [
      {
        "name": "Yamusukro",
        "aliases": [
          "Yamoussoukro"
        ]
      }
    ]
  },
  {
    "code": "hr",
    "capitals": [
      {
        "name": "Zagreb",
        "aliases": []
      }
    ]
  },
  {
    "code": "dk",
    "capitals": [
      {
        "name": "Copenhague",
        "aliases": [
          "Copenhagen"
        ]
      }
    ]
  },
  {
    "code": "dm",
    "capitals": [
      {
        "name": "Roseau",
        "aliases": []
      }
    ]
  },
  {
    "code": "sv",
    "capitals": [
      {
        "name": "San Salvador",
        "aliases": []
      }
    ]
  },
  {
    "code": "ae",
    "capitals": [
      {
        "name": "Abu Dhabi",
        "aliases": []
      }
    ]
  },
  {
    "code": "er",
    "capitals": [
      {
        "name": "Asmara",
        "aliases": []
      }
    ]
  },
  {
    "code": "sk",
    "capitals": [
      {
        "name": "Bratislava",
        "aliases": []
      }
    ]
  },
  {
    "code": "si",
    "capitals": [
      {
        "name": "Liubliana",
        "aliases": [
          "Ljubljana"
        ]
      }
    ]
  },
  {
    "code": "fm",
    "capitals": [
      {
        "name": "Palikir",
        "aliases": []
      }
    ]
  },
  {
    "code": "ee",
    "capitals": [
      {
        "name": "Tallin",
        "aliases": [
          "Tallinn"
        ]
      }
    ]
  },
  {
    "code": "sz",
    "capitals": [
      {
        "name": "Mbabane",
        "aliases": [
          "Mbabane"
        ]
      },
      {
        "name": "Lobamba",
        "aliases": [
          "Lobamba"
        ]
      }
    ]
  },
  {
    "code": "et",
    "capitals": [
      {
        "name": "Addis Abeba",
        "aliases": [
          "Addis Ababa"
        ]
      }
    ]
  },
  {
    "code": "ph",
    "capitals": [
      {
        "name": "Manila",
        "aliases": []
      }
    ]
  },
  {
    "code": "fi",
    "capitals": [
      {
        "name": "Helsinki",
        "aliases": []
      }
    ]
  },
  {
    "code": "fj",
    "capitals": [
      {
        "name": "Suva",
        "aliases": []
      }
    ]
  },
  {
    "code": "ga",
    "capitals": [
      {
        "name": "Libreville",
        "aliases": []
      }
    ]
  },
  {
    "code": "gm",
    "capitals": [
      {
        "name": "Banjul",
        "aliases": []
      }
    ]
  },
  {
    "code": "ge",
    "capitals": [
      {
        "name": "Tbilisi; Tiflis",
        "aliases": [
          "Tbilisi"
        ]
      }
    ]
  },
  {
    "code": "gd",
    "capitals": [
      {
        "name": "Saint George's",
        "aliases": [
          "St George's"
        ]
      }
    ]
  },
  {
    "code": "gt",
    "capitals": [
      {
        "name": "Guatemala",
        "aliases": [
          "Guatemala City"
        ]
      }
    ]
  },
  {
    "code": "gn",
    "capitals": [
      {
        "name": "Conakry",
        "aliases": []
      }
    ]
  },
  {
    "code": "gq",
    "capitals": [
      {
        "name": "Malabo",
        "aliases": []
      }
    ]
  },
  {
    "code": "gw",
    "capitals": [
      {
        "name": "Bissau",
        "aliases": []
      }
    ]
  },
  {
    "code": "gy",
    "capitals": [
      {
        "name": "Georgetown",
        "aliases": []
      }
    ]
  },
  {
    "code": "hn",
    "capitals": [
      {
        "name": "Tegucigalpa",
        "aliases": []
      }
    ]
  },
  {
    "code": "hu",
    "capitals": [
      {
        "name": "Budapest",
        "aliases": []
      }
    ]
  },
  {
    "code": "ie",
    "capitals": [
      {
        "name": "Dublín",
        "aliases": [
          "Dublin"
        ]
      }
    ]
  },
  {
    "code": "is",
    "capitals": [
      {
        "name": "Reykjavik",
        "aliases": []
      }
    ]
  },
  {
    "code": "mh",
    "capitals": [
      {
        "name": "Majuro",
        "aliases": []
      }
    ]
  },
  {
    "code": "sb",
    "capitals": [
      {
        "name": "Honiara",
        "aliases": []
      }
    ]
  },
  {
    "code": "jo",
    "capitals": [
      {
        "name": "Ammán",
        "aliases": [
          "Amman"
        ]
      }
    ]
  },
  {
    "code": "kz",
    "capitals": [
      {
        "name": "Astaná",
        "aliases": [
          "Astana"
        ]
      }
    ]
  },
  {
    "code": "kg",
    "capitals": [
      {
        "name": "Bishkek",
        "aliases": []
      }
    ]
  },
  {
    "code": "ki",
    "capitals": [
      {
        "name": "Bairiki",
        "aliases": []
      }
    ]
  },
  {
    "code": "kw",
    "capitals": [
      {
        "name": "Kuwait",
        "aliases": [
          "Kuwait City"
        ]
      }
    ]
  },
  {
    "code": "la",
    "capitals": [
      {
        "name": "Vientiane; Vientián",
        "aliases": [
          "Vientiane"
        ]
      }
    ]
  },
  {
    "code": "ls",
    "capitals": [
      {
        "name": "Maseru",
        "aliases": []
      }
    ]
  },
  {
    "code": "lv",
    "capitals": [
      {
        "name": "Riga",
        "aliases": []
      }
    ]
  },
  {
    "code": "lb",
    "capitals": [
      {
        "name": "Beirut",
        "aliases": []
      }
    ]
  },
  {
    "code": "lr",
    "capitals": [
      {
        "name": "Monrovia",
        "aliases": []
      }
    ]
  },
  {
    "code": "ly",
    "capitals": [
      {
        "name": "Trípoli",
        "aliases": [
          "Tripoli"
        ]
      }
    ]
  },
  {
    "code": "li",
    "capitals": [
      {
        "name": "Vaduz",
        "aliases": []
      }
    ]
  },
  {
    "code": "lt",
    "capitals": [
      {
        "name": "Vilna; Vilnius",
        "aliases": [
          "Vilnius"
        ]
      }
    ]
  },
  {
    "code": "lu",
    "capitals": [
      {
        "name": "Luxemburgo",
        "aliases": [
          "Luxembourg"
        ]
      }
    ]
  },
  {
    "code": "mk",
    "capitals": [
      {
        "name": "Skopie",
        "aliases": [
          "Skopje"
        ]
      }
    ]
  },
  {
    "code": "mg",
    "capitals": [
      {
        "name": "Antananarivo",
        "aliases": []
      }
    ]
  },
  {
    "code": "my",
    "capitals": [
      {
        "name": "Kuala Lumpur",
        "aliases": []
      }
    ]
  },
  {
    "code": "mw",
    "capitals": [
      {
        "name": "Lilongwe",
        "aliases": []
      }
    ]
  },
  {
    "code": "mv",
    "capitals": [
      {
        "name": "Malé",
        "aliases": [
          "Male'"
        ]
      }
    ]
  },
  {
    "code": "ml",
    "capitals": [
      {
        "name": "Bamako",
        "aliases": []
      }
    ]
  },
  {
    "code": "mt",
    "capitals": [
      {
        "name": "La Valetta",
        "aliases": [
          "Valletta"
        ]
      }
    ]
  },
  {
    "code": "mu",
    "capitals": [
      {
        "name": "Port Louis",
        "aliases": []
      }
    ]
  },
  {
    "code": "mr",
    "capitals": [
      {
        "name": "Nuakchot",
        "aliases": [
          "Nouakchott"
        ]
      }
    ]
  },
  {
    "code": "md",
    "capitals": [
      {
        "name": "Chisinau",
        "aliases": []
      }
    ]
  },
  {
    "code": "mc",
    "capitals": [
      {
        "name": "Mónaco",
        "aliases": [
          "Monaco"
        ]
      }
    ]
  },
  {
    "code": "mn",
    "capitals": [
      {
        "name": "Ulaanbaatar",
        "aliases": []
      }
    ]
  },
  {
    "code": "me",
    "capitals": [
      {
        "name": "Podgorica",
        "aliases": []
      }
    ]
  },
  {
    "code": "mz",
    "capitals": [
      {
        "name": "Maputo",
        "aliases": []
      }
    ]
  },
  {
    "code": "mm",
    "capitals": [
      {
        "name": "Nay Pyi Taw",
        "aliases": []
      }
    ]
  },
  {
    "code": "na",
    "capitals": [
      {
        "name": "Windhoek",
        "aliases": []
      }
    ]
  },
  {
    "code": "nr",
    "capitals": [
      {
        "name": "Yaren",
        "aliases": []
      }
    ]
  },
  {
    "code": "np",
    "capitals": [
      {
        "name": "Katmandú",
        "aliases": [
          "Kathmandu"
        ]
      }
    ]
  },
  {
    "code": "ni",
    "capitals": [
      {
        "name": "Managua",
        "aliases": []
      }
    ]
  },
  {
    "code": "ne",
    "capitals": [
      {
        "name": "Niamey",
        "aliases": []
      }
    ]
  },
  {
    "code": "no",
    "capitals": [
      {
        "name": "Oslo",
        "aliases": []
      }
    ]
  },
  {
    "code": "om",
    "capitals": [
      {
        "name": "Mascate",
        "aliases": [
          "Muscat"
        ]
      }
    ]
  },
  {
    "code": "pw",
    "capitals": [
      {
        "name": "Melekeok",
        "aliases": []
      }
    ]
  },
  {
    "code": "ps",
    "capitals": [
      {
        "name": "Jerusalén",
        "aliases": [
          "Jerusalén",
          "East Jerusalem",
          "Jerusalem"
        ]
      }
    ]
  },
  {
    "code": "pg",
    "capitals": [
      {
        "name": "Port Moresby",
        "aliases": []
      }
    ]
  },
  {
    "code": "pl",
    "capitals": [
      {
        "name": "Varsovia",
        "aliases": [
          "Warsaw"
        ]
      }
    ]
  },
  {
    "code": "cf",
    "capitals": [
      {
        "name": "Bangui",
        "aliases": []
      }
    ]
  },
  {
    "code": "cd",
    "capitals": [
      {
        "name": "Kinshasa",
        "aliases": []
      }
    ]
  },
  {
    "code": "rw",
    "capitals": [
      {
        "name": "Kigali",
        "aliases": []
      }
    ]
  },
  {
    "code": "ro",
    "capitals": [
      {
        "name": "Bucarest",
        "aliases": [
          "Bucharest"
        ]
      }
    ]
  },
  {
    "code": "ws",
    "capitals": [
      {
        "name": "Apia",
        "aliases": []
      }
    ]
  },
  {
    "code": "kn",
    "capitals": [
      {
        "name": "Basseterre",
        "aliases": []
      }
    ]
  },
  {
    "code": "sm",
    "capitals": [
      {
        "name": "San Marino",
        "aliases": []
      }
    ]
  },
  {
    "code": "vc",
    "capitals": [
      {
        "name": "Kingstown",
        "aliases": []
      }
    ]
  },
  {
    "code": "lc",
    "capitals": [
      {
        "name": "Castries",
        "aliases": []
      }
    ]
  },
  {
    "code": "st",
    "capitals": [
      {
        "name": "Santo Tomé",
        "aliases": [
          "Sao Tome"
        ]
      }
    ]
  },
  {
    "code": "sn",
    "capitals": [
      {
        "name": "Dakar",
        "aliases": []
      }
    ]
  },
  {
    "code": "rs",
    "capitals": [
      {
        "name": "Belgrado",
        "aliases": [
          "Belgrade"
        ]
      }
    ]
  },
  {
    "code": "sc",
    "capitals": [
      {
        "name": "Victoria",
        "aliases": []
      }
    ]
  },
  {
    "code": "sl",
    "capitals": [
      {
        "name": "Freetown",
        "aliases": []
      }
    ]
  },
  {
    "code": "sg",
    "capitals": [
      {
        "name": "Singapur",
        "aliases": [
          "Singapore"
        ]
      }
    ]
  },
  {
    "code": "sy",
    "capitals": [
      {
        "name": "Damasco",
        "aliases": [
          "Damascus"
        ]
      }
    ]
  },
  {
    "code": "so",
    "capitals": [
      {
        "name": "Mogadiscio",
        "aliases": [
          "Mogadishu"
        ]
      }
    ]
  },
  {
    "code": "lk",
    "capitals": [
      {
        "name": "Sri Jayawardenepura Kotte",
        "aliases": [
          "Sri Jayewardenepura Kotte",
          "Kotte"
        ]
      }
    ]
  },
  {
    "code": "sd",
    "capitals": [
      {
        "name": "Jartum",
        "aliases": [
          "Khartoum"
        ]
      }
    ]
  },
  {
    "code": "ss",
    "capitals": [
      {
        "name": "Yuba",
        "aliases": [
          "Juba"
        ]
      }
    ]
  },
  {
    "code": "se",
    "capitals": [
      {
        "name": "Estocolmo",
        "aliases": [
          "Stockholm"
        ]
      }
    ]
  },
  {
    "code": "sr",
    "capitals": [
      {
        "name": "Paramaribo",
        "aliases": []
      }
    ]
  },
  {
    "code": "tz",
    "capitals": [
      {
        "name": "Dodoma",
        "aliases": []
      }
    ]
  },
  {
    "code": "tj",
    "capitals": [
      {
        "name": "Dushanbé",
        "aliases": [
          "Dushanbe"
        ]
      }
    ]
  },
  {
    "code": "tl",
    "capitals": [
      {
        "name": "Dili",
        "aliases": []
      }
    ]
  },
  {
    "code": "tg",
    "capitals": [
      {
        "name": "Lomé",
        "aliases": []
      }
    ]
  },
  {
    "code": "to",
    "capitals": [
      {
        "name": "Nuku'alofa",
        "aliases": []
      }
    ]
  },
  {
    "code": "tt",
    "capitals": [
      {
        "name": "Puerto España",
        "aliases": [
          "Port of Spain"
        ]
      }
    ]
  },
  {
    "code": "tn",
    "capitals": [
      {
        "name": "Túnez",
        "aliases": [
          "Tunis"
        ]
      }
    ]
  },
  {
    "code": "tm",
    "capitals": [
      {
        "name": "Ashgabat; Asjabad",
        "aliases": [
          "Ashgabat"
        ]
      }
    ]
  },
  {
    "code": "tv",
    "capitals": [
      {
        "name": "Fongafale",
        "aliases": [
          "Funafuti"
        ]
      }
    ]
  },
  {
    "code": "ug",
    "capitals": [
      {
        "name": "Kampala",
        "aliases": []
      }
    ]
  },
  {
    "code": "uz",
    "capitals": [
      {
        "name": "Tashkent",
        "aliases": []
      }
    ]
  },
  {
    "code": "vu",
    "capitals": [
      {
        "name": "Port Vila; Vila",
        "aliases": [
          "Port Vila"
        ]
      }
    ]
  },
  {
    "code": "vn",
    "capitals": [
      {
        "name": "Hanoi",
        "aliases": []
      }
    ]
  },
  {
    "code": "ye",
    "capitals": [
      {
        "name": "Sana",
        "aliases": [
          "Sana'a"
        ]
      }
    ]
  },
  {
    "code": "dj",
    "capitals": [
      {
        "name": "Djibouti",
        "aliases": []
      }
    ]
  },
  {
    "code": "zm",
    "capitals": [
      {
        "name": "Lusaka",
        "aliases": []
      }
    ]
  },
  {
    "code": "zw",
    "capitals": [
      {
        "name": "Harare",
        "aliases": []
      }
    ]
  }
];
