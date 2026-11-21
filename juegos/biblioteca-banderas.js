const libraryElements = {
  search: document.querySelector("#library-search-input"),
  continents: [...document.querySelectorAll("#library-continent-filters input")],
  stars: [...document.querySelectorAll("#library-star-filters input")],
  grid: document.querySelector("#library-grid"),
  count: document.querySelector("#library-results-count"),
  empty: document.querySelector("#library-empty"),
  clear: document.querySelector("#clear-library-filters"),
  dialog: document.querySelector("#flag-detail"),
  detailName: document.querySelector("#detail-country-name"),
  detailImage: document.querySelector("#detail-flag-image"),
  detailError: document.querySelector("#detail-flag-error"),
  detailStars: document.querySelector("#detail-country-stars"),
  closeDetail: document.querySelector("#close-flag-detail"),
};

function normalizeLibraryText(value) {
  return value.toLocaleLowerCase("es").replace(/ñ/g, "\uE000").normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/\uE000/g, "ñ").trim();
}

function selectedValues(inputs) {
  return inputs.filter((input) => input.checked).map((input) => input.value);
}

function createFlagCard(country) {
  const card = document.createElement("button");
  card.className = "library-flag-card";
  card.type = "button";
  card.setAttribute("aria-haspopup", "dialog");
  card.setAttribute("aria-label", `${country.name}, ${country.difficultyStars} ${country.difficultyStars === 1 ? "estrella" : "estrellas"}`);

  const frame = document.createElement("span");
  frame.className = "library-flag-image";
  const image = document.createElement("img");
  image.src = `https://flagcdn.io/flags/4x3/${country.code}.svg`;
  image.alt = `Bandera de ${country.name}`;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    image.remove();
    const unavailable = document.createElement("span");
    unavailable.textContent = "Imagen no disponible";
    frame.append(unavailable);
  }, { once: true });
  frame.append(image);

  const name = document.createElement("span");
  name.className = "library-flag-name";
  name.textContent = country.name;
  const stars = document.createElement("span");
  stars.className = "library-flag-stars";
  stars.setAttribute("aria-label", `${country.difficultyStars} ${country.difficultyStars === 1 ? "estrella" : "estrellas"}`);
  stars.textContent = `${"★".repeat(country.difficultyStars)}${"☆".repeat(5 - country.difficultyStars)}`;

  card.append(frame, name, stars);
  card.addEventListener("click", () => openFlagDetail(country));
  return card;
}

function renderLibrary() {
  const query = normalizeLibraryText(libraryElements.search.value);
  const continentValues = selectedValues(libraryElements.continents);
  const starValues = selectedValues(libraryElements.stars).map(Number);
  const filtered = countries.filter((country) => {
    const searchableName = normalizeLibraryText(`${country.name} ${country.aliases.join(" ")}`);
    const matchesName = !query || searchableName.includes(query);
    const matchesContinent = continentValues.length === 0 || continentValues.includes(country.continent);
    const matchesStar = starValues.length === 0 || starValues.includes(country.difficultyStars);
    return matchesName && matchesContinent && matchesStar;
  }).sort((a, b) => a.name.localeCompare(b.name, "es"));

  libraryElements.grid.replaceChildren(...filtered.map(createFlagCard));
  libraryElements.empty.hidden = filtered.length > 0;
  libraryElements.grid.hidden = filtered.length === 0;
  libraryElements.count.textContent = `${filtered.length} ${filtered.length === 1 ? "bandera" : "banderas"} de ${countries.length}`;
}

function openFlagDetail(country) {
  libraryElements.detailName.textContent = country.name;
  libraryElements.detailStars.textContent = `${"★".repeat(country.difficultyStars)}${"☆".repeat(5 - country.difficultyStars)}`;
  libraryElements.detailStars.setAttribute("aria-label", `Dificultad: ${country.difficultyStars} ${country.difficultyStars === 1 ? "estrella" : "estrellas"}`);
  libraryElements.detailError.hidden = true;
  libraryElements.detailImage.hidden = false;
  libraryElements.detailImage.alt = `Bandera de ${country.name}`;
  libraryElements.detailImage.onerror = () => {
    libraryElements.detailImage.hidden = true;
    libraryElements.detailError.hidden = false;
  };
  libraryElements.detailImage.src = `https://flagcdn.io/flags/4x3/${country.code}.svg`;
  libraryElements.dialog.showModal();
}

libraryElements.search.addEventListener("input", renderLibrary);
libraryElements.continents.forEach((input) => input.addEventListener("change", renderLibrary));
libraryElements.stars.forEach((input) => input.addEventListener("change", renderLibrary));
libraryElements.clear.addEventListener("click", () => {
  libraryElements.search.value = "";
  [...libraryElements.continents, ...libraryElements.stars].forEach((input) => { input.checked = false; });
  renderLibrary();
  libraryElements.search.focus();
});
libraryElements.closeDetail.addEventListener("click", () => libraryElements.dialog.close());
libraryElements.dialog.addEventListener("click", (event) => {
  if (event.target === libraryElements.dialog) libraryElements.dialog.close();
});

renderLibrary();
