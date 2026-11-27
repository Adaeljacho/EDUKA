const CONTINENTS = ["Europa", "Sudamérica", "Norteamérica", "África", "Oceanía", "Asia"];
const capitalLookup = new Map(capitalsByCountry.map((entry) => [entry.code, entry.capitals]));
const el = {
  config: document.querySelector("#configuration"), round: document.querySelector("#round"), results: document.querySelector("#results"),
  modes: [...document.querySelectorAll('input[name="mode"]')], directions: [...document.querySelectorAll('input[name="direction"]')],
  quantity: [...document.querySelectorAll('input[name="quantity"]')], stars: [...document.querySelectorAll('input[name="star-rating"]')],
  continents: [...document.querySelectorAll("#continent-options input")], world: document.querySelector("#world-scope"), normal: document.querySelector("#normal-options"),
  message: document.querySelector("#config-message"), start: document.querySelector("#start-game"), modeLabel: document.querySelector("#round-mode-label"),
  title: document.querySelector("#round-title"), progress: document.querySelector("#progress-label"), score: document.querySelector("#score-label"),
  progressBar: document.querySelector(".progress-track"), progressFill: document.querySelector("#progress-fill"), prompt: document.querySelector("#capital-prompt"),
  flag: document.querySelector("#flag-image"), flagError: document.querySelector("#flag-error"), answer: document.querySelector("#country-answer"),
  answerLabel: document.querySelector("#answer-label"), suggestions: document.querySelector("#country-suggestions"), feedback: document.querySelector("#answer-feedback"),
  submit: document.querySelector("#submit-answer"), form: document.querySelector("#answer-form"), correctPercent: document.querySelector("#correct-percent"),
  incorrectPercent: document.querySelector("#incorrect-percent"), correctTotal: document.querySelector("#correct-total"), incorrectTotal: document.querySelector("#incorrect-total"),
  resultsBody: document.querySelector("#results-body"), resultsCount: document.querySelector("#results-count"),
};
const state = { phase: "configuration", mode: "normal", direction: "capital-country", continents: [], quantity: 10, stars: [1], initial: [], queue: [], current: null, currentCapital: null, attempts: [], stats: new Map(), suggestions: [], selected: null, highlighted: -1, locked: false, timer: null, resultFilter: "all" };

function normalize(value) {
  return value.toLocaleLowerCase("es").replace(/ñ/g, "\uE000").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\uE000/g, "ñ").trim().replace(/\s+/g, " ");
}
function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
  return copy;
}
function currentScope() {
  return el.world.checked ? [...CONTINENTS] : el.continents.filter((input) => input.checked).map((input) => input.value);
}
function updateConfiguration() {
  state.mode = el.modes.find((input) => input.checked)?.value || "normal";
  state.direction = el.directions.find((input) => input.checked)?.value || "capital-country";
  state.continents = currentScope();
  state.quantity = Number(el.quantity.find((input) => input.checked)?.value || 10);
  state.stars = el.stars.filter((input) => input.checked).map((input) => Number(input.value));
  el.normal.hidden = state.mode === "expert";
  const scoped = countries.filter((country) => state.continents.includes(country.continent));
  const available = scoped.filter((country) => state.stars.includes(country.difficultyStars)).length;
  const noStars = state.mode === "normal" && state.stars.length === 0;
  el.start.disabled = !state.continents.length || noStars || (state.mode === "normal" && available === 0);
  el.message.classList.toggle("is-error", state.continents.length > 0 && state.mode === "normal" && (noStars || available === 0));
  if (!state.continents.length) el.message.textContent = "Selecciona al menos un continente o todo el mundo.";
  else if (state.mode === "expert") el.message.textContent = `Modo experto: jugarás con los ${scoped.length} países de este alcance.`;
  else if (noStars) el.message.textContent = "Selecciona al menos una categoría de estrellas.";
  else if (!available) el.message.textContent = "No hay países con las estrellas elegidas en este alcance.";
  else el.message.textContent = `Jugarás con ${Math.min(state.quantity, available)} países de las estrellas seleccionadas.`;
}
function startRound() {
  window.clearTimeout(state.timer); updateConfiguration();
  const scoped = countries.filter((country) => state.continents.includes(country.continent));
  const ordered = [...scoped].sort((a, b) => a.familiarityRank - b.familiarityRank);
  const eligible = ordered.filter((country) => state.stars.includes(country.difficultyStars));
  const chosen = state.mode === "expert" ? ordered : eligible.slice(0, state.quantity);
  if (!chosen.length) return;
  state.initial = shuffle(chosen); state.queue = [...state.initial]; state.attempts = [];
  state.stats = new Map(state.initial.map((country) => [country.code, { country, attempts: 0, errors: 0, correct: false }]));
  state.phase = "round"; el.config.hidden = true; el.results.hidden = true; el.round.hidden = false;
  const starsLabel = state.stars.map((star) => `${"★".repeat(star)}${"☆".repeat(5 - star)}`).join(" + ");
  el.modeLabel.textContent = state.mode === "expert" ? `Ronda experta · ${chosen.length} países` : `Ronda normal · ${chosen.length} países · ${starsLabel}`;
  el.title.textContent = state.direction === "capital-country" ? "¿De qué país es esta capital?" : "¿Cuál es la capital de este país?";
  renderNext();
}
function updateProgress() {
  const done = [...state.stats.values()].filter((item) => item.correct).length;
  const pct = state.initial.length ? Math.round(done / state.initial.length * 100) : 0;
  el.progress.textContent = `Países acertados: ${done} de ${state.initial.length}`;
  el.score.textContent = `Errores: ${state.attempts.filter((attempt) => !attempt.correct).length}`;
  el.progressFill.style.width = `${pct}%`; el.progressBar.setAttribute("aria-valuenow", String(pct));
}
function renderNext() {
  if (!state.queue.length) { renderResults(); return; }
  state.current = state.queue.shift(); state.currentCapital = null; state.selected = null; state.locked = false;
  el.answer.value = ""; el.submit.disabled = true; el.answer.disabled = false; el.feedback.className = "answer-feedback";
  el.feedback.textContent = "Empieza a escribir para ver sugerencias."; closeSuggestions(); el.flagError.hidden = true;
  if (state.direction === "capital-country") {
    const caps = capitalLookup.get(state.current.code) || [];
    state.currentCapital = caps[Math.floor(Math.random() * caps.length)];
    el.prompt.textContent = state.currentCapital.name; el.prompt.hidden = false; el.flag.hidden = true;
    el.answerLabel.textContent = "¿A qué país pertenece esta capital?"; el.answer.placeholder = "Escribe el nombre del país…";
    el.flag.onerror = null;
  } else {
    el.prompt.textContent = state.current.name; el.prompt.hidden = false; el.flag.hidden = false;
    el.flag.alt = `Bandera de ${state.current.name}`; el.flag.src = `https://flagcdn.io/flags/4x3/${state.current.code}.svg`;
    el.flag.onerror = () => { el.flag.hidden = true; el.flagError.hidden = false; };
    el.flag.onload = () => { el.flag.hidden = false; el.flagError.hidden = true; };
    el.answerLabel.textContent = "¿Cuál es la capital?"; el.answer.placeholder = "Escribe el nombre de una capital…";
  }
  updateProgress(); el.answer.focus({ preventScroll: true });
}
function closeSuggestions() { el.suggestions.hidden = true; el.answer.setAttribute("aria-expanded", "false"); el.answer.removeAttribute("aria-activedescendant"); state.suggestions = []; state.highlighted = -1; }
function allCapitalGroups() {
  return countries.map((country) => ({ country, capitals: capitalLookup.get(country.code) || [] })).filter((entry) => entry.capitals.length);
}
function matchingSuggestions(query) {
  if (state.direction === "capital-country") {
    return countries.filter((country) => [country.name, ...country.aliases].some((label) => normalize(label).includes(query)))
      .sort((a, b) => Number([b.name, ...b.aliases].some((label) => normalize(label).startsWith(query))) - Number([a.name, ...a.aliases].some((label) => normalize(label).startsWith(query))) || a.name.localeCompare(b.name, "es"))
      .slice(0, 8).map((country) => ({ country, label: country.name, keys: [country.name, ...country.aliases] }));
  }
  return allCapitalGroups().filter(({ capitals }) => capitals.some((capital) => [capital.name, ...capital.aliases].some((label) => normalize(label).includes(query))))
    .sort((a, b) => Number(b.capitals.some((capital) => [capital.name, ...capital.aliases].some((label) => normalize(label).startsWith(query)))) - Number(a.capitals.some((capital) => [capital.name, ...capital.aliases].some((label) => normalize(label).startsWith(query)))) || a.country.name.localeCompare(b.country.name, "es"))
    .slice(0, 8).map((entry) => ({ ...entry, label: entry.capitals.map((capital) => capital.name).join(" / "), keys: entry.capitals.flatMap((capital) => [capital.name, ...capital.aliases]) }));
}
function renderSuggestions() {
  const query = normalize(el.answer.value); state.selected = null;
  if (!query || state.locked) { closeSuggestions(); el.submit.disabled = true; return; }
  const found = matchingSuggestions(query); state.suggestions = found; state.highlighted = -1;
  const labelCounts = new Map();
  found.forEach((item) => labelCounts.set(normalize(item.label), (labelCounts.get(normalize(item.label)) || 0) + 1));
  el.suggestions.replaceChildren(...found.map((item, index) => {
    const option = document.createElement("li"); option.id = `capital-option-${index}`; option.setAttribute("role", "option"); option.setAttribute("aria-selected", "false");
    option.textContent = state.direction === "country-capital" && (item.capitals.length > 1 || labelCounts.get(normalize(item.label)) > 1) ? `${item.label} · ${item.country.name}` : item.label;
    option.addEventListener("mousedown", (event) => event.preventDefault()); option.addEventListener("click", () => selectSuggestion(index)); return option;
  }));
  el.suggestions.hidden = found.length === 0; el.answer.setAttribute("aria-expanded", String(found.length > 0));
  el.feedback.className = "answer-feedback"; el.feedback.textContent = found.length ? `${found.length} sugerencia${found.length === 1 ? "" : "s"} de todo el mundo.` : "No encontramos coincidencias. Prueba otra forma de escribirlo.";
  el.submit.disabled = true;
}
function selectSuggestion(index) {
  const picked = state.suggestions[index]; if (!picked) return;
  state.selected = picked; el.answer.value = picked.label; closeSuggestions(); el.submit.disabled = false;
  el.feedback.textContent = "Opción seleccionada. Comprueba tu respuesta.";
}
function handleAnswer(event) {
  event.preventDefault(); if (state.locked || !state.current || !state.selected) return;
  state.locked = true; el.submit.disabled = true; closeSuggestions();
  const correct = state.selected.country.code === state.current.code; const result = state.stats.get(state.current.code);
  result.attempts += 1; result.correct = correct;
  if (!correct) { result.errors += 1; state.queue.splice(Math.min(2, state.queue.length), 0, state.current); }
  state.attempts.push({ country: state.current, correct });
  if (correct) { el.feedback.textContent = `¡Correcto! ${state.current.name} · ${(capitalLookup.get(state.current.code) || []).map((capital) => capital.name).join(" / ")}.`; el.feedback.className = "answer-feedback is-correct"; }
  else { const correctAnswer = state.direction === "capital-country" ? state.current.name : (capitalLookup.get(state.current.code) || []).map((capital) => capital.name).join(" / "); el.feedback.textContent = `La respuesta correcta era ${correctAnswer}. Este país volverá a aparecer.`; el.feedback.className = "answer-feedback is-wrong"; }
  updateProgress(); state.timer = window.setTimeout(() => { if (state.phase === "round") renderNext(); }, 900);
}
function renderResults() {
  state.phase = "results"; el.round.hidden = true; el.results.hidden = false; document.querySelector("#results-title").focus({ preventScroll: true });
  const right = state.attempts.filter((attempt) => attempt.correct).length; const wrong = state.attempts.length - right; const total = state.attempts.length || 1;
  el.correctPercent.textContent = `${Math.round(right / total * 100)}%`; el.incorrectPercent.textContent = `${Math.round(wrong / total * 100)}%`;
  el.correctTotal.textContent = `${right} ${right === 1 ? "acierto" : "aciertos"}`; el.incorrectTotal.textContent = `${wrong} ${wrong === 1 ? "error" : "errores"}`;
  state.resultFilter = "all"; document.querySelectorAll("[data-result-filter]").forEach((button) => { const active = button.dataset.resultFilter === "all"; button.classList.toggle("is-active", active); button.setAttribute("aria-pressed", String(active)); }); renderResultRows();
}
function renderResultRows() {
  const rows = [...state.stats.values()].filter((item) => state.resultFilter === "errors" ? item.errors > 0 : state.resultFilter === "clean" ? item.errors === 0 : true).sort((a, b) => a.country.name.localeCompare(b.country.name, "es"));
  el.resultsBody.replaceChildren(...rows.map((item) => { const row = document.createElement("tr"); row.innerHTML = `<td></td><td>${item.attempts}</td><td>${item.errors}</td><td class="${item.errors ? "result-needs-review" : "result-good"}"></td>`; row.cells[0].textContent = item.country.name; row.cells[3].textContent = item.errors ? "Repasar" : "Sin errores"; return row; }));
  el.resultsCount.textContent = `${rows.length} ${rows.length === 1 ? "país" : "países"} en esta vista.`;
}
function showConfiguration() { window.clearTimeout(state.timer); state.phase = "configuration"; el.round.hidden = true; el.results.hidden = true; el.config.hidden = false; updateConfiguration(); }

el.modes.forEach((input) => input.addEventListener("change", updateConfiguration)); el.directions.forEach((input) => input.addEventListener("change", updateConfiguration));
el.quantity.forEach((input) => input.addEventListener("change", updateConfiguration)); el.stars.forEach((input) => input.addEventListener("change", updateConfiguration));
el.continents.forEach((input) => input.addEventListener("change", () => { if (input.checked) el.world.checked = false; updateConfiguration(); }));
el.world.addEventListener("change", () => { if (el.world.checked) el.continents.forEach((input) => { input.checked = false; }); updateConfiguration(); });
el.start.addEventListener("click", startRound); el.answer.addEventListener("input", renderSuggestions); el.form.addEventListener("submit", handleAnswer);
el.answer.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" && !el.suggestions.hidden) state.highlighted = Math.min(state.highlighted + 1, state.suggestions.length - 1);
  else if (event.key === "ArrowUp" && !el.suggestions.hidden) state.highlighted = Math.max(state.highlighted - 1, 0);
  else if (event.key === "Escape") { closeSuggestions(); return; }
  else if (event.key === "Enter" && !el.suggestions.hidden) { event.preventDefault(); selectSuggestion(state.highlighted >= 0 ? state.highlighted : 0); return; }
  else return;
  event.preventDefault(); [...el.suggestions.children].forEach((option, index) => option.setAttribute("aria-selected", String(index === state.highlighted)));
  const active = el.suggestions.children[state.highlighted]; if (active) el.answer.setAttribute("aria-activedescendant", active.id);
});
document.querySelector("#retry-flag").addEventListener("click", () => { if (!state.current) return; el.flagError.hidden = true; el.flag.hidden = false; el.flag.src = `https://flagcdn.io/flags/4x3/${state.current.code}.svg?retry=${Date.now()}`; });
document.querySelector("#cancel-round").addEventListener("click", showConfiguration); document.querySelector("#back-config").addEventListener("click", showConfiguration); document.querySelector("#replay-game").addEventListener("click", startRound);
document.querySelector(".result-filters").addEventListener("click", (event) => { const button = event.target.closest("[data-result-filter]"); if (!button) return; state.resultFilter = button.dataset.resultFilter; document.querySelectorAll("[data-result-filter]").forEach((item) => { const active = item === button; item.classList.toggle("is-active", active); item.setAttribute("aria-pressed", String(active)); }); renderResultRows(); });
updateConfiguration();
