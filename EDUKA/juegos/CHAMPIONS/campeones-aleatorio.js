const randomUI = {
  config: document.querySelector("#random-config"), round: document.querySelector("#random-round"), results: document.querySelector("#random-results"),
  modes: [...document.querySelectorAll('input[name="random-mode"]')], decadeField: document.querySelector("#random-decade-field"), decades: document.querySelector("#random-decades"),
  message: document.querySelector("#random-config-message"), start: document.querySelector("#random-start"), modeLabel: document.querySelector("#random-mode-label"),
  year: document.querySelector("#random-year"), crest: document.querySelector("#random-crest-slot"), revealedName: document.querySelector("#random-revealed-name"),
  progress: document.querySelector("#random-progress"), errors: document.querySelector("#random-errors"), answer: document.querySelector("#random-answer"),
  suggestions: document.querySelector("#random-suggestions"), feedback: document.querySelector("#random-feedback"), check: document.querySelector("#random-check"),
  correctPercent: document.querySelector("#random-correct-percent"), wrongPercent: document.querySelector("#random-wrong-percent"), resultsBody: document.querySelector("#random-results-body"),
  dock: document.querySelector("#random-answer-dock"),
};
const randomState = { mode: "normal", selectedDecades: [], queue: [], current: null, initial: [], stats: new Map(), selectedClub: null, locked: false, timer: null, filter: "all" };

function buildRandomDecades() {
  randomUI.decades.replaceChildren(...championDecades().map(({ decade, editions }) => {
    const label = document.createElement("label"); label.className = "decade-pill";
    const input = document.createElement("input"); input.type = "checkbox"; input.value = String(decade); input.setAttribute("aria-label", `Década de los ${decade}`);
    const text = document.createElement("span"); text.textContent = `${formatChampionDecade(decade)} · ${editions.length} años`;
    label.append(input, text); return label;
  }));
}
function updateRandomConfig() {
  randomState.mode = randomUI.modes.find((input) => input.checked)?.value || "normal";
  randomState.selectedDecades = [...randomUI.decades.querySelectorAll("input:checked")].map((input) => Number(input.value));
  randomUI.decadeField.hidden = randomState.mode === "expert";
  randomUI.start.disabled = randomState.mode === "normal" && randomState.selectedDecades.length === 0;
  if (randomState.mode === "expert") randomUI.message.textContent = `Modo experto: incluye las ${championsEditions.length} finales desde 1956.`;
  else if (!randomState.selectedDecades.length) randomUI.message.textContent = "Selecciona al menos una década.";
  else {
    const count = championsEditions.filter((edition) => randomState.selectedDecades.includes(edition.decade)).length;
    randomUI.message.textContent = `Jugarás con ${count} ${count === 1 ? "año" : "años"} de las décadas seleccionadas.`;
  }
}
function startRandomRound() {
  window.clearTimeout(randomState.timer); updateRandomConfig();
  const candidates = randomState.mode === "expert" ? [...championsEditions] : championsEditions.filter((edition) => randomState.selectedDecades.includes(edition.decade));
  if (!candidates.length) return;
  randomState.initial = shuffleChampions(candidates); randomState.queue = [...randomState.initial];
  randomState.stats = new Map(candidates.map((edition) => [edition.year, { edition, club: getChampionClub(edition.clubId), attempts: 0, errors: 0, correct: false }]));
  randomUI.config.classList.add("champions-hidden"); randomUI.results.classList.add("champions-hidden"); randomUI.round.classList.remove("champions-hidden"); randomUI.dock.classList.remove("champions-hidden");
  randomUI.modeLabel.textContent = randomState.mode === "expert" ? `MODO EXPERTO · ${candidates.length} AÑOS` : `POR DÉCADAS · ${candidates.length} AÑOS`;
  renderRandomNext();
}
function renderRandomNext() {
  if (!randomState.queue.length) { finishRandomRound(); return; }
  randomState.current = randomState.queue.shift(); randomState.selectedClub = null; randomState.locked = false;
  randomUI.year.textContent = String(randomState.current.year); randomUI.crest.replaceChildren(Object.assign(document.createElement("span"), { className: "crest-hidden", textContent: "?" }));
  randomUI.revealedName.textContent = ""; randomUI.revealedName.classList.add("champions-hidden"); randomUI.answer.value = ""; randomUI.check.disabled = true;
  randomUI.feedback.className = "champions-status"; randomUI.feedback.textContent = "Empieza a escribir para ver clubes campeones.";
  closeChampionSuggestions(randomUI.answer, randomUI.suggestions);
  const done = [...randomState.stats.values()].filter((item) => item.correct).length;
  const errors = [...randomState.stats.values()].reduce((sum, item) => sum + item.errors, 0);
  randomUI.progress.textContent = `Resueltos: ${done} de ${randomState.initial.length}`; randomUI.errors.textContent = `Errores: ${errors}`;
  randomUI.answer.focus({ preventScroll: true });
}
function renderRandomSuggestions() {
  randomState.selectedClub = null; randomUI.check.disabled = true;
  if (!randomUI.answer.value.trim() || randomState.locked) { closeChampionSuggestions(randomUI.answer, randomUI.suggestions); return; }
  renderChampionSuggestions(randomUI.answer, randomUI.suggestions, randomUI.answer.value, (club) => {
    randomState.selectedClub = club; randomUI.check.disabled = false; randomUI.feedback.className = "champions-status"; randomUI.feedback.textContent = `Seleccionaste ${club.name}.`;
  }, "random-club");
}
function submitRandomAnswer() {
  if (randomState.locked || !randomState.current || !randomState.selectedClub) return;
  randomState.locked = true; randomUI.check.disabled = true; closeChampionSuggestions(randomUI.answer, randomUI.suggestions);
  const result = randomState.stats.get(randomState.current.year); result.attempts += 1;
  if (randomState.selectedClub.id !== result.club.id) {
    result.errors += 1; randomState.queue.splice(Math.min(2, randomState.queue.length), 0, randomState.current);
    randomUI.feedback.className = "champions-status is-wrong"; randomUI.feedback.textContent = `No era correcto. Ganó ${result.club.name}; el escudo sigue oculto y el año volverá a aparecer.`;
    randomState.timer = window.setTimeout(() => { if (randomState.queue.length) renderRandomNext(); else finishRandomRound(); }, 1100); return;
  }
  result.correct = true; randomUI.crest.replaceChildren(createChampionCrest(result.club)); randomUI.revealedName.textContent = result.club.name; randomUI.revealedName.classList.remove("champions-hidden");
  randomUI.feedback.className = "champions-status is-correct"; randomUI.feedback.textContent = `¡Correcto! ${result.club.name} fue campeón en ${result.edition.year}.`;
  const done = [...randomState.stats.values()].filter((item) => item.correct).length;
  const errors = [...randomState.stats.values()].reduce((sum, item) => sum + item.errors, 0);
  randomUI.progress.textContent = `Resueltos: ${done} de ${randomState.initial.length}`; randomUI.errors.textContent = `Errores: ${errors}`;
  randomState.timer = window.setTimeout(() => { if (randomState.queue.length) renderRandomNext(); else finishRandomRound(); }, 850);
}
function finishRandomRound() {
  randomState.locked = true; randomUI.round.classList.add("champions-hidden"); randomUI.dock.classList.add("champions-hidden"); randomUI.results.classList.remove("champions-hidden");
  const attempts = [...randomState.stats.values()].reduce((sum, item) => sum + item.attempts, 0);
  const errors = [...randomState.stats.values()].reduce((sum, item) => sum + item.errors, 0); const correct = attempts - errors; const base = attempts || 1;
  randomUI.correctPercent.textContent = `${Math.round(correct / base * 100)}% de respuestas correctas (${correct})`;
  randomUI.wrongPercent.textContent = `${Math.round(errors / base * 100)}% de respuestas incorrectas (${errors})`;
  randomState.filter = "all"; document.querySelectorAll("[data-random-filter]").forEach((button) => { const active = button.dataset.randomFilter === "all"; button.classList.toggle("is-active", active); button.setAttribute("aria-pressed", String(active)); });
  renderRandomResults(); document.querySelector("#random-results-title").focus({ preventScroll: true });
}
function renderRandomResults() {
  const rows = [...randomState.stats.values()].filter((item) => randomState.filter === "errors" ? item.errors > 0 : randomState.filter === "clean" ? item.errors === 0 : true).sort((a,b) => a.edition.year-b.edition.year);
  randomUI.resultsBody.replaceChildren(...rows.map((item) => { const row = document.createElement("tr"); row.innerHTML = `<td>${item.edition.year}</td><td></td><td>${item.attempts}</td><td>${item.errors}</td>`; row.cells[1].textContent = item.club.name; if (item.errors) row.classList.add("is-wrong"); else row.classList.add("is-correct"); return row; }));
}
function showRandomConfig() { window.clearTimeout(randomState.timer); randomUI.round.classList.add("champions-hidden"); randomUI.dock.classList.add("champions-hidden"); randomUI.results.classList.add("champions-hidden"); randomUI.config.classList.remove("champions-hidden"); updateRandomConfig(); }

buildRandomDecades(); randomUI.modes.forEach((input) => input.addEventListener("change", updateRandomConfig)); randomUI.decades.addEventListener("change", updateRandomConfig); randomUI.start.addEventListener("click", startRandomRound);
randomUI.answer.addEventListener("input", renderRandomSuggestions); bindChampionAutocomplete(randomUI.answer, randomUI.suggestions, submitRandomAnswer); randomUI.check.addEventListener("click", submitRandomAnswer);
document.querySelector("#random-exit").addEventListener("click", showRandomConfig); document.querySelector("#random-replay").addEventListener("click", startRandomRound); document.querySelector("#random-config-again").addEventListener("click", showRandomConfig);
document.querySelector(".result-filters").addEventListener("click", (event) => { const button = event.target.closest("[data-random-filter]"); if (!button) return; randomState.filter = button.dataset.randomFilter; document.querySelectorAll("[data-random-filter]").forEach((item) => { const active = item === button; item.classList.toggle("is-active", active); item.setAttribute("aria-pressed", String(active)); }); renderRandomResults(); });
updateRandomConfig();
