const decadeUI = {
  groups: document.querySelector("#decade-groups"), progress: document.querySelector("#decades-progress"),
  answerPanel: document.querySelector("#decades-answer-panel"), year: document.querySelector("#selected-year"), answer: document.querySelector("#decades-answer"),
  suggestions: document.querySelector("#decades-suggestions"), check: document.querySelector("#check-decades-answer"), feedback: document.querySelector("#decades-feedback"),
  results: document.querySelector("#decades-results"), resultsBody: document.querySelector("#decades-results-body"), score: document.querySelector("#decades-score"),
};
const decadeState = { selectedYear: null, selectedClub: null, resolved: new Set(), attempts: new Map() };

function renderDecadeGrid() {
  decadeUI.groups.replaceChildren(...championDecades().map(({ decade, editions }) => {
    const section = document.createElement("section"); section.className = "decade-section";
    const heading = document.createElement("h3"); heading.className = "decade-heading";
    heading.innerHTML = `<span>${formatChampionDecade(decade)}</span><small>${editions[0].year}–${editions.at(-1).year}</small>`;
    const grid = document.createElement("div"); grid.className = "year-grid";
    grid.append(...editions.map((edition) => {
      const card = document.createElement("button"); card.type = "button"; card.className = "year-card"; card.dataset.year = String(edition.year);
      card.setAttribute("aria-label", `${edition.year}: escudo oculto`);
      const year = document.createElement("span"); year.className = "year-card-year"; year.textContent = String(edition.year);
      const hidden = document.createElement("span"); hidden.className = "crest-hidden"; hidden.setAttribute("aria-hidden", "true"); hidden.textContent = "?";
      card.append(hidden, year); card.addEventListener("click", () => selectDecadeYear(edition.year)); return card;
    })); section.append(heading, grid); return section;
  }));
  updateDecadeProgress();
}
function selectDecadeYear(year) {
  if (decadeState.resolved.has(year)) return;
  window.clearTimeout(decadeUI.selectedNextTimer);
  decadeState.selectedYear = year; decadeState.selectedClub = null;
  [...decadeUI.groups.querySelectorAll(".year-card")].forEach((card) => card.classList.toggle("is-current", Number(card.dataset.year) === year));
  decadeUI.year.textContent = String(year); decadeUI.answer.value = ""; decadeUI.check.disabled = true;
  decadeUI.feedback.className = "champions-status"; decadeUI.feedback.textContent = "Elige el club campeón de la lista.";
  decadeUI.answerPanel.classList.remove("champions-hidden"); closeChampionSuggestions(decadeUI.answer, decadeUI.suggestions); decadeUI.answer.focus({ preventScroll: true });
}
function renderDecadeSuggestions() {
  decadeState.selectedClub = null; decadeUI.check.disabled = true;
  if (!decadeUI.answer.value.trim()) { closeChampionSuggestions(decadeUI.answer, decadeUI.suggestions); return; }
  renderChampionSuggestions(decadeUI.answer, decadeUI.suggestions, decadeUI.answer.value, (club) => {
    decadeState.selectedClub = club; decadeUI.check.disabled = false;
    decadeUI.feedback.className = "champions-status"; decadeUI.feedback.textContent = `Seleccionaste ${club.name}.`;
  }, "decades-club");
}
function checkDecadeAnswer() {
  if (!decadeState.selectedYear || !decadeState.selectedClub) return;
  const year = decadeState.selectedYear; const edition = championsEditions.find((item) => item.year === year);
  const expected = getChampionClub(edition.clubId); const entry = decadeState.attempts.get(year) || { club: expected, attempts: 0, errors: 0 };
  entry.attempts += 1;
  if (decadeState.selectedClub.id !== expected.id) {
    entry.errors += 1; decadeState.attempts.set(year, entry);
    decadeUI.feedback.className = "champions-status is-wrong"; decadeUI.feedback.textContent = "No es ese club. Inténtalo de nuevo.";
    updateDecadeProgress();
    decadeState.selectedClub = null; decadeUI.answer.value = ""; decadeUI.check.disabled = true; decadeUI.answer.focus(); return;
  }
  decadeState.attempts.set(year, entry); decadeState.resolved.add(year);
  const card = decadeUI.groups.querySelector(`[data-year="${year}"]`); card.classList.remove("is-current", "is-wrong"); card.classList.add("is-revealed");
  card.setAttribute("aria-label", `${year}: ${expected.name}`); card.replaceChildren(createChampionCrest(expected), Object.assign(document.createElement("span"), { className: "year-card-year", textContent: String(year) }));
  decadeUI.feedback.className = "champions-status is-correct"; decadeUI.feedback.textContent = `¡Correcto! ${expected.name} ganó en ${year}.`;
  updateDecadeProgress();
  if (decadeState.resolved.size === championsEditions.length) { window.setTimeout(finishDecades, 500); return; }
  const next = championsEditions.find((item) => item.year > year && !decadeState.resolved.has(item.year)) || championsEditions.find((item) => !decadeState.resolved.has(item.year));
  decadeUI.selectedNextTimer = window.setTimeout(() => selectDecadeYear(next.year), 650);
}
function updateDecadeProgress() {
  const errors = [...decadeState.attempts.values()].reduce((sum, item) => sum + item.errors, 0);
  decadeUI.progress.textContent = `${decadeState.resolved.size} de ${championsEditions.length} escudos revelados · ${errors} ${errors === 1 ? "error" : "errores"}`;
}
function finishDecades() {
  decadeUI.answerPanel.classList.add("champions-hidden"); decadeUI.results.classList.remove("champions-hidden");
  const errors = [...decadeState.attempts.values()].reduce((sum, item) => sum + item.errors, 0);
  decadeUI.score.innerHTML = `<span>${championsEditions.length} de ${championsEditions.length} años completados</span><span>${errors} ${errors === 1 ? "error" : "errores"}</span>`;
  decadeUI.resultsBody.replaceChildren(...championsEditions.map((edition) => {
    const result = decadeState.attempts.get(edition.year); const row = document.createElement("tr");
    row.innerHTML = `<td>${edition.year}</td><td></td><td>${result?.attempts || 0}</td><td>${result?.errors || 0}</td>`; row.cells[1].textContent = getChampionClub(edition.clubId).name; return row;
  }));
  document.querySelector("#decades-results-title").focus?.({ preventScroll: true });
}
function resetDecades() {
  window.clearTimeout(decadeUI.selectedNextTimer); decadeState.selectedYear = null; decadeState.selectedClub = null; decadeState.resolved.clear(); decadeState.attempts.clear();
  decadeUI.answerPanel.classList.add("champions-hidden"); decadeUI.results.classList.add("champions-hidden"); decadeUI.feedback.className = "champions-status"; decadeUI.feedback.textContent = "Selecciona un club de las sugerencias."; renderDecadeGrid();
}

decadeUI.answer.addEventListener("input", renderDecadeSuggestions); bindChampionAutocomplete(decadeUI.answer, decadeUI.suggestions, checkDecadeAnswer);
decadeUI.check.addEventListener("click", checkDecadeAnswer); document.querySelector("#reset-decades").addEventListener("click", resetDecades);
renderDecadeGrid();
