// Campeones por año de la final, 1956–2026, según el cuadro de honor de UEFA.
// Etiquetas y registro histórico conservan los nombres UEFA; los alias son variantes de búsqueda, no fusiones de clubes.
// Steaua București 1986 se mantiene como identidad histórica independiente por las disputas posteriores sobre la continuidad del club.
// Fuentes: https://www.uefa.com/uefachampionsleague/news/0275-1541637ad1db-88aeeefefefd-1000--all-time-european-cup-honours-board/
// Archivo de 1956–2019: https://es.uefa.com/MultimediaFiles/Download/Publications/uefaorg/General/02/61/96/22/2619622_DOWNLOAD.pdf
// Final 2025/26: https://www.uefa.com/uefachampionsleague/news/029c-1e9a2f63fe2d-ebf9ad643892-1000--2025-26-champions-league-all-the-results/
// Escudos: imágenes oficiales de UEFA. Si un id no tiene emblema disponible, la interfaz muestra las iniciales del club.
const clubSeed = [
  { id: "real-madrid", name: "Real Madrid", aliases: ["Real Madrid CF", "Madrid"], uefaId: 50051 },
  { id: "benfica", name: "Benfica", aliases: ["SL Benfica", "Benfica Lisboa"], uefaId: 50147 },
  { id: "ac-milan", name: "AC Milan", aliases: ["Milan", "AC Milano"], uefaId: 50058 },
  { id: "inter", name: "Inter", aliases: ["Internazionale", "Inter Milan", "FC Internazionale Milano"], uefaId: 50138 },
  { id: "celtic", name: "Celtic", aliases: ["Celtic FC"], uefaId: 50050 },
  { id: "manchester-united", name: "Manchester United", aliases: ["Man United", "Man Utd", "Manchester United FC"], uefaId: 52682 },
  { id: "feyenoord", name: "Feyenoord", aliases: ["Feyenoord Rotterdam"], uefaId: 52749 },
  { id: "ajax", name: "Ajax", aliases: ["AFC Ajax", "Ajax Amsterdam"], uefaId: 50143 },
  { id: "bayern-munich", name: "Bayern München", aliases: ["Bayern Munich", "FC Bayern München", "Bayern de Múnich"], uefaId: 50037 },
  { id: "liverpool", name: "Liverpool", aliases: ["Liverpool FC"], uefaId: 7889 },
  { id: "nottingham-forest", name: "Nottingham Forest", aliases: ["Forest", "Nottingham Forest FC"], uefaId: null },
  { id: "aston-villa", name: "Aston Villa", aliases: ["Aston Villa FC"], uefaId: 52683 },
  { id: "hamburger-sv", name: "Hamburger SV", aliases: ["Hamburg", "HSV"], uefaId: null },
  { id: "juventus", name: "Juventus", aliases: ["Juventus FC", "Juve"], uefaId: 50139 },
  { id: "steaua-bucuresti", name: "Steaua București", aliases: ["Steaua Bucarest", "Steaua Bucharest"], uefaId: null },
  { id: "porto", name: "Porto", aliases: ["FC Porto", "Oporto"], uefaId: 50064 },
  { id: "psv", name: "PSV Eindhoven", aliases: ["PSV"], uefaId: 50062 },
  { id: "crvena-zvezda", name: "Crvena zvezda", aliases: ["Red Star Belgrade", "Estrella Roja de Belgrado", "FK Crvena zvezda"], uefaId: 50069 },
  { id: "barcelona", name: "Barcelona", aliases: ["FC Barcelona", "Barça"], uefaId: 50080 },
  { id: "marseille", name: "Marseille", aliases: ["Olympique de Marseille", "OM"], uefaId: 52748 },
  { id: "borussia-dortmund", name: "Borussia Dortmund", aliases: ["Dortmund", "BVB"], uefaId: 52758 },
  { id: "chelsea", name: "Chelsea", aliases: ["Chelsea FC"], uefaId: 52914 },
  { id: "manchester-city", name: "Manchester City", aliases: ["Man City", "Manchester City FC"], uefaId: 52919 },
  { id: "paris-saint-germain", name: "Paris Saint-Germain", aliases: ["PSG", "Paris"], uefaId: 52747 },
];

const championsWinnersByYear = [
  [1956,"real-madrid"],[1957,"real-madrid"],[1958,"real-madrid"],[1959,"real-madrid"],[1960,"real-madrid"],
  [1961,"benfica"],[1962,"benfica"],[1963,"ac-milan"],[1964,"inter"],[1965,"inter"],[1966,"real-madrid"],[1967,"celtic"],[1968,"manchester-united"],[1969,"ac-milan"],
  [1970,"feyenoord"],[1971,"ajax"],[1972,"ajax"],[1973,"ajax"],[1974,"bayern-munich"],[1975,"bayern-munich"],[1976,"bayern-munich"],[1977,"liverpool"],[1978,"liverpool"],[1979,"nottingham-forest"],
  [1980,"nottingham-forest"],[1981,"liverpool"],[1982,"aston-villa"],[1983,"hamburger-sv"],[1984,"liverpool"],[1985,"juventus"],[1986,"steaua-bucuresti"],[1987,"porto"],[1988,"psv"],[1989,"ac-milan"],
  [1990,"ac-milan"],[1991,"crvena-zvezda"],[1992,"barcelona"],[1993,"marseille"],[1994,"ac-milan"],[1995,"ajax"],[1996,"juventus"],[1997,"borussia-dortmund"],[1998,"real-madrid"],[1999,"manchester-united"],
  [2000,"real-madrid"],[2001,"bayern-munich"],[2002,"real-madrid"],[2003,"ac-milan"],[2004,"porto"],[2005,"liverpool"],[2006,"barcelona"],[2007,"ac-milan"],[2008,"manchester-united"],[2009,"barcelona"],
  [2010,"inter"],[2011,"barcelona"],[2012,"chelsea"],[2013,"bayern-munich"],[2014,"real-madrid"],[2015,"barcelona"],[2016,"real-madrid"],[2017,"real-madrid"],[2018,"real-madrid"],[2019,"liverpool"],
  [2020,"bayern-munich"],[2021,"chelsea"],[2022,"real-madrid"],[2023,"manchester-city"],[2024,"real-madrid"],[2025,"paris-saint-germain"],[2026,"paris-saint-germain"],
];

const championsEditions = championsWinnersByYear.map(([year, clubId]) => ({ year, clubId, decade: Math.floor(year / 10) * 10 }));
const championsClubs = clubSeed.map((club) => ({
  ...club,
  crest: club.uefaId ? `https://img.uefa.com/imgml/TP/teams/logos/240x240/${club.uefaId}.png` : null,
  wins: championsEditions.filter((edition) => edition.clubId === club.id).map((edition) => edition.year),
  initials: club.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 3).toUpperCase(),
}));
const championsClubById = new Map(championsClubs.map((club) => [club.id, club]));
