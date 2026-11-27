const library = {
  search: document.querySelector("#library-search-input"),
  continents: [...document.querySelectorAll("#library-continent-filters input")],
  stars: [...document.querySelectorAll("#library-star-filters input")],
  grid: document.querySelector("#library-grid"), count: document.querySelector("#library-results-count"), empty: document.querySelector("#library-empty"),
  clear: document.querySelector("#clear-library-filters"), dialog: document.querySelector("#capital-detail"), country: document.querySelector("#detail-country-name"),
  flag: document.querySelector("#detail-country-flag"), capitals: document.querySelector("#detail-capitals"), starsDisplay: document.querySelector("#capital-detail-stars"), close: document.querySelector("#close-capital-detail"),
};
const capitalsByCode = new Map(capitalsByCountry.map((entry) => [entry.code, entry.capitals]));
function normalizeLibraryText(value) { return value.toLocaleLowerCase("es").replace(/ñ/g, "\uE000").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\uE000/g, "ñ").trim(); }
function checkedValues(inputs) { return inputs.filter((input) => input.checked).map((input) => input.value); }
function createCountryCard(country) {
  const card = document.createElement("button"); card.className = "library-flag-card"; card.type = "button"; card.setAttribute("aria-haspopup", "dialog");
  card.setAttribute("aria-label", `${country.name}, ver capital${(capitalsByCode.get(country.code) || []).length === 1 ? "" : "es"}`);
  const frame = document.createElement("span"); frame.className = "library-flag-image";
  const image = document.createElement("img"); image.src = `https://flagcdn.io/flags/4x3/${country.code}.svg`; image.alt = `Bandera de ${country.name}`; image.loading = "lazy";
  image.addEventListener("error", () => { image.remove(); const fallback = document.createElement("span"); fallback.textContent = "Imagen no disponible"; frame.append(fallback); }, { once: true }); frame.append(image);
  const name = document.createElement("span"); name.className = "library-flag-name"; name.textContent = country.name;
  const stars = document.createElement("span"); stars.className = "library-flag-stars"; stars.setAttribute("aria-label", `Dificultad: ${country.difficultyStars} ${country.difficultyStars === 1 ? "estrella" : "estrellas"}`); stars.textContent = `${"★".repeat(country.difficultyStars)}${"☆".repeat(5-country.difficultyStars)}`;
  card.append(frame, name, stars); card.addEventListener("click", () => openCountry(country)); return card;
}
function render() {
  const query = normalizeLibraryText(library.search.value); const continents = checkedValues(library.continents); const stars = checkedValues(library.stars).map(Number);
  const found = countries.filter((country) => {
    const names = normalizeLibraryText(`${country.name} ${country.aliases.join(" ")}`);
    return (!query || names.includes(query)) && (!continents.length || continents.includes(country.continent)) && (!stars.length || stars.includes(country.difficultyStars));
  }).sort((a,b) => a.name.localeCompare(b.name, "es"));
  library.grid.replaceChildren(...found.map(createCountryCard)); library.grid.hidden = found.length === 0; library.empty.hidden = found.length > 0;
  library.count.textContent = `${found.length} ${found.length === 1 ? "país" : "países"} de ${countries.length}`;
}
function openCountry(country) {
  const entries = capitalsByCode.get(country.code) || [];
  library.country.textContent = country.name; library.flag.alt = `Bandera de ${country.name}`; library.flag.src = `https://flagcdn.io/flags/4x3/${country.code}.svg`;
  library.starsDisplay.textContent = `${"★".repeat(country.difficultyStars)}${"☆".repeat(5-country.difficultyStars)}`;
  library.starsDisplay.setAttribute("aria-label", `Dificultad: ${country.difficultyStars} ${country.difficultyStars === 1 ? "estrella" : "estrellas"}`);
  library.capitals.replaceChildren(...entries.map((entry) => { const card = document.createElement("div"); card.className = "capital-name-card"; card.textContent = entry.name; return card; }));
  library.dialog.showModal(); library.close.focus();
}
library.search.addEventListener("input", render); library.continents.forEach((input) => input.addEventListener("change", render)); library.stars.forEach((input) => input.addEventListener("change", render));
library.clear.addEventListener("click", () => { library.search.value = ""; [...library.continents, ...library.stars].forEach((input) => { input.checked = false; }); render(); library.search.focus(); });
library.close.addEventListener("click", () => library.dialog.close()); library.dialog.addEventListener("click", (event) => { if (event.target === library.dialog) library.dialog.close(); });
render();
