const games = [
  {
    name: "Banderas del mundo",
    category: "Geografía",
    icon: "⚑",
    image: "https://imagenes.portafolio.co/files/image_1200_600/uploads/2025/03/04/67c73f999b777.jpeg",
    href: "juegos/banderas.html",
  },
  {
    name: "Capitales del mundo",
    category: "Geografía",
    icon: "𖠿",
    image: "https://symphony.cdn.tambourine.com/hotel-washington-redesign/media/things-to-do-near-white-house-washington-dc-6973b543b6f2b.jpg",
    href: "juegos/banderas.html",
  },
  {
    name: "Ganadores del Balón de Oro",
    category: "Fútbol",
    icon: "𖣐",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtD4xPlB3jlW34byG8Hr2x5IEwuRt5TAMu22UJX_UG1pGbP5IV0woiFUtx&s=10",
    href: "juegos/banderas.html",
  },
];

const triviaFacts = [
  {
    id: "flag-spica",
    topic: "Banderas",
    text: "En la bandera de Brasil, la estrella Spica representa al estado de Pará.",
    sourceName: "Agência Espacial Brasileira",
    sourceUrl:
      "https://www.gov.br/aeb/pt-br/centrais-de-conteudo/publicacoes/instagram-do-periodo-de-defeso-eleitoral-2022/semana-espacial-100-anos-de-independencia-as-constelacoes-da-bandeira/",
  },
  {
    id: "salar-uyuni",
    topic: "Geografía",
    text: "El Salar de Uyuni, en Bolivia, es el salar más grande del mundo.",
    sourceName: "NASA Earth Observatory",
    sourceUrl: "https://science.nasa.gov/earth/earth-observatory/salar-de-uyuni-bolivia-6096/",
  },
  {
    id: "world-cup-1930",
    topic: "Fútbol",
    text: "La primera Copa Mundial de la FIFA se disputó en Uruguay, en 1930.",
    sourceName: "FIFA",
    sourceUrl:
      "https://www.fifa.com/es/articles/cuantas-veces-gano-la-seleccion-de-uruguay-la-copa-mundial-de-la-fifa",
  },
  {
    id: "magna-carta-seal",
    topic: "Historia",
    text: "La Carta Magna de 1215 no fue firmada por el rey Juan: un funcionario la autenticó con un sello de cera.",
    sourceName: "UK Parliament",
    sourceUrl:
      "https://www.parliament.uk/about/living-heritage/evolutionofparliament/2015-parliament-in-the-making/2015-historic-anniversaries/magna-carta/the-making-of-magna-carta-/",
  },
  {
    id: "moon-recession",
    topic: "Ciencia",
    text: "La Luna se aleja de la Tierra aproximadamente una pulgada cada año.",
    sourceName: "NASA",
    sourceUrl: "https://science.nasa.gov/moon/facts/",
  },
  {
    id: "gallium-melting",
    topic: "Química",
    text: "El galio se funde a 29,7646 °C, apenas por debajo de 30 °C.",
    sourceName: "NIST",
    sourceUrl:
      "https://www.nist.gov/programs-projects/standard-platinum-resistance-thermometer-calibration-laboratory-sprtcl",
  },
  {
    id: "piano-cristofori",
    topic: "Música",
    text: "Hacia 1700, Bartolomeo Cristofori ya había creado un instrumento exitoso con mecanismo de piano.",
    sourceName: "The Metropolitan Museum of Art",
    sourceUrl:
      "https://www.metmuseum.org/es/essays/the-piano-the-pianofortes-of-bartolomeo-cristofori-1655-1731",
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
