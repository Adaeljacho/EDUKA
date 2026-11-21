const CONTINENTS = ["Europa", "Sudamérica", "Norteamérica", "África", "Oceanía", "Asia"];
const elements = {
  configuration: document.querySelector("#configuration"),
  round: document.querySelector("#round"),
  results: document.querySelector("#results"),
  mode: document.querySelectorAll('input[name="mode"]'),
  normalOptions: document.querySelector("#normal-options"),
  quantityInputs: document.querySelectorAll('input[name="quantity"]'),
  starInputs: document.querySelectorAll('input[name="star-rating"]'),
  continentInputs: [...document.querySelectorAll("#continent-options input")],
  world: document.querySelector("#world-scope"),
  configMessage: document.querySelector("#config-message"),
  start: document.querySelector("#start-game"),
  modeLabel: document.querySelector("#round-mode-label"),
  progress: document.querySelector("#progress-label"),
  score: document.querySelector("#score-label"),
  progressBar: document.querySelector(".progress-track"),
  progressFill: document.querySelector("#progress-fill"),
  flagImage: document.querySelector("#flag-image"),
  flagError: document.querySelector("#flag-error"),
  answerForm: document.querySelector("#answer-form"),
  answer: document.querySelector("#country-answer"),
  suggestions: document.querySelector("#country-suggestions"),
  feedback: document.querySelector("#answer-feedback"),
  submit: document.querySelector("#submit-answer"),
  correctPercent: document.querySelector("#correct-percent"),
  incorrectPercent: document.querySelector("#incorrect-percent"),
  correctTotal: document.querySelector("#correct-total"),
  incorrectTotal: document.querySelector("#incorrect-total"),
  resultsBody: document.querySelector("#results-body"),
  resultsCount: document.querySelector("#results-count"),
};

const state = {
  phase: "configuration",
  mode: "normal",
  continents: [],
  quantity: 10,
  starRatings: [1],
  initialCountries: [],
  queue: [],
  currentCountry: null,
  attempts: [],
  countryResults: new Map(),
  suggestions: [],
  highlightedIndex: -1,
  locked: false,
  advanceTimer: null,
  resultFilter: "all",
};

function normalize(value) {
  return value.toLocaleLowerCase("es").replace(/ñ/g, "\uE000").normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").replace(/\uE000/g, "ñ").trim();
}

function selectedScope() {
  return elements.world.checked ? [...CONTINENTS] : elements.continentInputs.filter((input) => input.checked).map((input) => input.value);
}

function updateConfiguration() {
  state.mode = [...elements.mode].find((input) => input.checked)?.value || "normal";
  state.continents = selectedScope();
  state.quantity = Number([...elements.quantityInputs].find((input) => input.checked)?.value || 10);
  state.starRatings = [...elements.starInputs].filter((input) => input.checked).map((input) => Number(input.value));
  elements.normalOptions.hidden = state.mode === "expert";
  const scoped = countries.filter((country) => state.continents.includes(country.continent));
  const available = scoped.filter((country) => state.starRatings.includes(country.difficultyStars)).length;
  const actual = Math.min(state.quantity, available);
  const noStarsSelected = state.mode === "normal" && state.starRatings.length === 0;
  elements.start.disabled = state.continents.length === 0 || noStarsSelected || (state.mode === "normal" && available === 0);
  elements.configMessage.classList.toggle("is-error", state.continents.length > 0 && state.mode === "normal" && (available === 0 || noStarsSelected));
  if (!state.continents.length) {
    elements.configMessage.textContent = "Selecciona al menos un continente o todo el mundo.";
  } else if (state.mode === "expert") {
    elements.configMessage.textContent = `Modo experto: jugarás con todas las ${scoped.length} banderas de este alcance.`;
  } else if (noStarsSelected) {
    elements.configMessage.textContent = "Selecciona al menos una categoría de estrellas.";
  } else if (available === 0) {
    elements.configMessage.textContent = "No hay banderas de las categorías elegidas en este alcance. Prueba otro continente o estrellas.";
  } else {
    const starList = state.starRatings.map((stars) => `${stars} ${stars === 1 ? "estrella" : "estrellas"}`).join(", ");
    elements.configMessage.textContent = actual < state.quantity ?
      `Hay ${available} banderas de ${starList} en este alcance; jugarás con las ${actual} disponibles.` :
      `Jugarás con ${actual} banderas de ${starList}.`;
  }
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function startRound() {
  window.clearTimeout(state.advanceTimer);
  state.advanceTimer = null;
  updateConfiguration();
  if (!state.continents.length) return;
  const scoped = countries.filter((country) => state.continents.includes(country.continent));
  const ordered = [...scoped].sort((a, b) => a.familiarityRank - b.familiarityRank);
  const matchingStars = ordered.filter((country) => state.starRatings.includes(country.difficultyStars));
  const chosen = state.mode === "expert" ? ordered : matchingStars.slice(0, Math.min(state.quantity, matchingStars.length));
  if (!chosen.length) {
    updateConfiguration();
    return;
  }
  state.initialCountries = shuffle(chosen);
  state.queue = [...state.initialCountries];
  state.attempts = [];
  state.countryResults = new Map(state.initialCountries.map((country) => [country.code, { country, attempts: 0, errors: 0, correct: false }]));
  state.phase = "round";
  elements.configuration.hidden = true;
  elements.results.hidden = true;
  elements.round.hidden = false;
  const starLabel = state.starRatings.map((stars) => `${"★".repeat(stars)}${"☆".repeat(5 - stars)}`).join(" + ");
  elements.modeLabel.textContent = state.mode === "expert" ? `Ronda experta · ${chosen.length} banderas` : `Ronda normal · ${chosen.length} banderas · ${starLabel}`;
  renderNextCountry();
}

function renderProgress() {
  const correct = [...state.countryResults.values()].filter((result) => result.correct).length;
  const total = state.initialCountries.length;
  const percent = total ? Math.round((correct / total) * 100) : 0;
  elements.progress.textContent = `Banderas acertadas: ${correct} de ${total}`;
  const errors = state.attempts.filter((attempt) => !attempt.correct).length;
  elements.score.textContent = `Errores: ${errors}`;
  elements.progressFill.style.width = `${percent}%`;
  elements.progressBar.setAttribute("aria-valuenow", String(percent));
}

function renderNextCountry() {
  if (state.queue.length === 0) {
    renderResults();
    return;
  }
  state.currentCountry = state.queue.shift();
  state.locked = false;
  elements.answer.value = "";
  elements.submit.disabled = true;
  elements.feedback.className = "answer-feedback";
  elements.feedback.textContent = "Empieza a escribir para ver sugerencias.";
  closeSuggestions();
  elements.flagImage.hidden = false;
  elements.flagError.hidden = true;
  elements.flagImage.alt = "Bandera para identificar";
  elements.flagImage.src = `https://flagcdn.io/flags/4x3/${state.currentCountry.code}.svg`;
  elements.flagImage.onerror = () => {
    elements.flagImage.hidden = true;
    elements.flagError.hidden = false;
    elements.answer.disabled = true;
    elements.submit.disabled = true;
  };
  elements.flagImage.onload = () => { elements.flagImage.hidden = false; elements.flagError.hidden = true; elements.answer.disabled = false; };
  renderProgress();
  elements.answer.focus({ preventScroll: true });
}

function closeSuggestions() {
  elements.suggestions.hidden = true;
  elements.answer.setAttribute("aria-expanded", "false");
  elements.answer.removeAttribute("aria-activedescendant");
  state.suggestions = [];
  state.highlightedIndex = -1;
}

function renderSuggestions() {
  const query = normalize(elements.answer.value);
  if (!query || state.locked) {
    closeSuggestions();
    elements.submit.disabled = true;
    return;
  }
  const found = countries.filter((country) => [country.name, ...country.aliases].some((name) => normalize(name).includes(query)))
    .sort((a, b) => {
      const aStarts = [a.name, ...a.aliases].some((name) => normalize(name).startsWith(query));
      const bStarts = [b.name, ...b.aliases].some((name) => normalize(name).startsWith(query));
      return Number(bStarts) - Number(aStarts) || a.name.localeCompare(b.name, "es");
    }).slice(0, 8);
  state.suggestions = found;
  state.highlightedIndex = -1;
  elements.suggestions.replaceChildren(...found.map((country, index) => {
    const option = document.createElement("li");
    option.id = `country-option-${index}`;
    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", "false");
    option.textContent = country.name;
    option.addEventListener("mousedown", (event) => event.preventDefault());
    option.addEventListener("click", () => selectSuggestion(index));
    return option;
  }));
  elements.suggestions.hidden = found.length === 0;
  elements.answer.setAttribute("aria-expanded", String(found.length > 0));
  elements.feedback.className = "answer-feedback";
  elements.feedback.textContent = found.length ? `${found.length} sugerencia${found.length === 1 ? "" : "s"} de todos los países.` : "No encontramos coincidencias. Puedes probar otro nombre.";
  const exact = countries.find((country) => [country.name, ...country.aliases].some((name) => normalize(name) === query));
  elements.submit.disabled = !exact;
}

function selectSuggestion(index) {
  const selected = state.suggestions[index];
  if (!selected) return;
  elements.answer.value = selected.name;
  closeSuggestions();
  elements.submit.disabled = false;
  elements.feedback.textContent = "País seleccionado. Comprueba tu respuesta.";
}

function handleAnswer(event) {
  event.preventDefault();
  if (state.locked || !state.currentCountry) return;
  const response = normalize(elements.answer.value);
  const selected = countries.find((country) => [country.name, ...country.aliases].some((name) => normalize(name) === response));
  if (!selected) {
    elements.feedback.textContent = "Elige un país válido de las sugerencias.";
    elements.feedback.className = "answer-feedback is-wrong";
    elements.submit.disabled = true;
    return;
  }
  state.locked = true;
  elements.submit.disabled = true;
  closeSuggestions();
  const correct = selected.code === state.currentCountry.code;
  const result = state.countryResults.get(state.currentCountry.code);
  result.attempts += 1;
  result.correct = correct;
  if (!correct) {
    result.errors += 1;
    // La respuesta fallida vuelve tras dos elementos de la cola siempre que existan.
    state.queue.splice(Math.min(2, state.queue.length), 0, state.currentCountry);
    elements.feedback.textContent = `No era ${selected.name}. La respuesta correcta es ${state.currentCountry.name}. La bandera volverá a aparecer.`;
    elements.feedback.className = "answer-feedback is-wrong";
  } else {
    state.attempts.push({ country: state.currentCountry, correct: true });
    elements.feedback.textContent = `¡Correcto! Es ${state.currentCountry.name}.`;
    elements.feedback.className = "answer-feedback is-correct";
  }
  if (!correct) state.attempts.push({ country: state.currentCountry, correct: false });
  renderProgress();
  state.advanceTimer = window.setTimeout(() => {
    state.advanceTimer = null;
    if (state.phase === "round") renderNextCountry();
  }, 800);
}

function renderResults() {
  state.phase = "results";
  elements.round.hidden = true;
  elements.results.hidden = false;
  document.querySelector("#results-title").focus({ preventScroll: true });
  const correct = state.attempts.filter((attempt) => attempt.correct).length;
  const incorrect = state.attempts.length - correct;
  const total = state.attempts.length || 1;
  elements.correctPercent.textContent = `${Math.round((correct / total) * 100)}%`;
  elements.incorrectPercent.textContent = `${Math.round((incorrect / total) * 100)}%`;
  elements.correctTotal.textContent = `${correct} ${correct === 1 ? "acierto" : "aciertos"}`;
  elements.incorrectTotal.textContent = `${incorrect} ${incorrect === 1 ? "error" : "errores"}`;
  state.resultFilter = "all";
  document.querySelectorAll("[data-result-filter]").forEach((button) => {
    const active = button.dataset.resultFilter === "all";
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderResultRows();
}

function renderResultRows() {
  const rows = [...state.countryResults.values()].filter((result) => {
    if (state.resultFilter === "errors") return result.errors > 0;
    if (state.resultFilter === "clean") return result.errors === 0;
    return true;
  }).sort((a, b) => a.country.name.localeCompare(b.country.name, "es"));
  elements.resultsBody.replaceChildren(...rows.map((result) => {
    const row = document.createElement("tr");
    const status = result.errors ? "Repasar" : "Sin errores";
    const statusClass = result.errors ? "result-needs-review" : "result-good";
    row.innerHTML = `<td></td><td>${result.attempts}</td><td>${result.errors}</td><td class="${statusClass}"></td>`;
    row.cells[0].textContent = result.country.name;
    row.cells[3].textContent = status;
    return row;
  }));
  elements.resultsCount.textContent = `${rows.length} ${rows.length === 1 ? "bandera" : "banderas"} en esta vista.`;
}

function showConfiguration() {
  window.clearTimeout(state.advanceTimer);
  state.advanceTimer = null;
  state.phase = "configuration";
  elements.round.hidden = true;
  elements.results.hidden = true;
  elements.configuration.hidden = false;
  updateConfiguration();
}

elements.mode.forEach((input) => input.addEventListener("change", updateConfiguration));
elements.quantityInputs.forEach((input) => input.addEventListener("change", updateConfiguration));
elements.starInputs.forEach((input) => input.addEventListener("change", updateConfiguration));
elements.continentInputs.forEach((input) => input.addEventListener("change", () => {
  if (input.checked) elements.world.checked = false;
  updateConfiguration();
}));
elements.world.addEventListener("change", () => {
  if (elements.world.checked) elements.continentInputs.forEach((input) => { input.checked = false; });
  updateConfiguration();
});
elements.start.addEventListener("click", startRound);
elements.answer.addEventListener("input", renderSuggestions);
elements.answer.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" && !elements.suggestions.hidden) {
    event.preventDefault(); state.highlightedIndex = Math.min(state.highlightedIndex + 1, state.suggestions.length - 1);
  } else if (event.key === "ArrowUp" && !elements.suggestions.hidden) {
    event.preventDefault(); state.highlightedIndex = Math.max(state.highlightedIndex - 1, 0);
  } else if (event.key === "Escape") {
    closeSuggestions(); return;
  } else if (event.key === "Enter" && !elements.suggestions.hidden && state.highlightedIndex >= 0) {
    event.preventDefault(); selectSuggestion(state.highlightedIndex); return;
  } else { return; }
  [...elements.suggestions.children].forEach((option, index) => option.setAttribute("aria-selected", String(index === state.highlightedIndex)));
  const active = elements.suggestions.children[state.highlightedIndex];
  if (active) elements.answer.setAttribute("aria-activedescendant", active.id);
});
elements.answerForm.addEventListener("submit", handleAnswer);
document.querySelector("#retry-flag").addEventListener("click", () => {
  if (!state.currentCountry) return;
  elements.flagError.hidden = true;
  elements.flagImage.hidden = false;
  elements.flagImage.src = `https://flagcdn.io/flags/4x3/${state.currentCountry.code}.svg?retry=${Date.now()}`;
});
document.querySelector("#cancel-round").addEventListener("click", showConfiguration);
document.querySelector("#back-config").addEventListener("click", showConfiguration);
document.querySelector("#replay-game").addEventListener("click", startRound);
document.querySelector(".result-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-result-filter]");
  if (!button) return;
  state.resultFilter = button.dataset.resultFilter;
  document.querySelectorAll("[data-result-filter]").forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  renderResultRows();
});

updateConfiguration();
