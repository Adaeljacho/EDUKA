const clubUI = {
  startPanel: document.querySelector("#club-start-panel"), round: document.querySelector("#club-round"), results: document.querySelector("#club-results"),
  count: document.querySelector("#club-count-summary"), editions: document.querySelector("#club-edition-summary"), start: document.querySelector("#club-start"),
  progress: document.querySelector("#club-progress-label"), crest: document.querySelector("#club-crest"), name: document.querySelector("#club-name"), groups: document.querySelector("#club-decade-groups"),
  feedback: document.querySelector("#club-feedback"), check: document.querySelector("#club-check"), next: document.querySelector("#club-next"), totalScore: document.querySelector("#club-total-score"), resultsBody: document.querySelector("#club-results-body"),
};
const clubState = { queue: [], current: null, results: [], selected: new Set(), checked: false };

clubUI.count.textContent = `${championsClubs.length} clubes campeones`;
clubUI.editions.textContent = `${championsEditions.length} años en el tablero`;
function startClubChallenge() {
  clubState.queue = shuffleChampions(championsClubs); clubState.results = []; clubState.selected.clear();
  clubUI.startPanel.classList.add("champions-hidden"); clubUI.results.classList.add("champions-hidden"); clubUI.round.classList.remove("champions-hidden");
  renderClubPrompt();
}
function renderClubPrompt() {
  if (!clubState.queue.length) { finishClubChallenge(); return; }
  clubState.current = clubState.queue.shift(); clubState.selected = new Set(); clubState.checked = false;
  clubUI.name.textContent = clubState.current.name; clubUI.crest.replaceChildren(createChampionCrest(clubState.current));
  clubUI.progress.textContent = `CLUB ${clubState.results.length + 1} DE ${championsClubs.length}`;
  clubUI.feedback.className = "champions-status"; clubUI.feedback.textContent = "Aún no has enviado tus selecciones.";
  clubUI.check.disabled = false; clubUI.check.classList.remove("champions-hidden"); clubUI.next.classList.add("champions-hidden");
  renderClubYearGrid();
}
function renderClubYearGrid() {
  clubUI.groups.replaceChildren(...championDecades().map(({ decade, editions }) => {
    const section = document.createElement("section"); section.className = "decade-section";
    const heading = document.createElement("h3"); heading.className = "decade-heading"; heading.textContent = formatChampionDecade(decade);
    const grid = document.createElement("div"); grid.className = "champion-year-table";
    grid.append(...editions.map((edition) => {
      const label = document.createElement("label"); label.className = "champion-year-check"; label.dataset.year = String(edition.year);
      const input = document.createElement("input"); input.type = "checkbox"; input.value = String(edition.year); input.setAttribute("aria-label", `Año ${edition.year}`);
      const text = document.createElement("span"); text.textContent = String(edition.year);
      input.addEventListener("change", () => { if (input.checked) clubState.selected.add(edition.year); else clubState.selected.delete(edition.year); });
      label.append(input, text); return label;
    })); section.append(heading, grid); return section;
  }));
}
function verifyClubYears() {
  if (!clubState.current || clubState.checked) return;
  clubState.checked = true;
  const correctYears = new Set(clubState.current.wins);
  let hits = 0; let missed = 0; let falsePicks = 0;
  clubUI.groups.querySelectorAll(".champion-year-check").forEach((label) => {
    const year = Number(label.dataset.year); const checked = clubState.selected.has(year); const isWin = correctYears.has(year); const input = label.querySelector("input");
    input.disabled = true;
    if (isWin && checked) { hits += 1; label.classList.add("is-correct"); }
    else if (isWin) { missed += 1; label.classList.add("is-missed"); }
    else if (checked) { falsePicks += 1; label.classList.add("is-false"); }
  });
  const clubResult = { club: clubState.current, hits, missed, falsePicks, totalWins: correctYears.size };
  clubState.results.push(clubResult);
  clubUI.feedback.className = `champions-status ${missed === 0 && falsePicks === 0 ? "is-correct" : "is-wrong"}`;
  clubUI.feedback.textContent = `${hits} correcto${hits === 1 ? "" : "s"} · ${missed} omitido${missed === 1 ? "" : "s"} · ${falsePicks} selección${falsePicks === 1 ? " incorrecta" : "es incorrectas"}. Los años en dorado son victorias que faltaron; los rojos son años que no ganó.`;
  clubUI.check.disabled = true; clubUI.next.classList.remove("champions-hidden");
  if (!clubState.queue.length) clubUI.next.textContent = "Ver resumen →";
}
function finishClubChallenge() {
  clubUI.round.classList.add("champions-hidden"); clubUI.results.classList.remove("champions-hidden");
  const totalHits = clubState.results.reduce((sum, item) => sum + item.hits, 0);
  const totalMissed = clubState.results.reduce((sum, item) => sum + item.missed, 0);
  const totalFalse = clubState.results.reduce((sum, item) => sum + item.falsePicks, 0);
  const perfect = clubState.results.filter((item) => item.missed === 0 && item.falsePicks === 0).length;
  clubUI.totalScore.innerHTML = `<span>${perfect} de ${championsClubs.length} clubes perfectos</span><span>${totalHits} años acertados</span><span>${totalMissed} omitidos</span><span>${totalFalse} años elegidos de más</span>`;
  clubUI.resultsBody.replaceChildren(...clubState.results.map((item) => {
    const row = document.createElement("tr"); row.className = item.missed === 0 && item.falsePicks === 0 ? "is-correct" : "is-wrong";
    row.innerHTML = `<td></td><td>${item.hits} / ${item.totalWins}</td><td>${item.missed}</td><td>${item.falsePicks}</td>`; row.cells[0].textContent = item.club.name; return row;
  }));
  document.querySelector("#club-results-title").focus({ preventScroll: true });
}
function exitClubChallenge() { clubUI.round.classList.add("champions-hidden"); clubUI.results.classList.add("champions-hidden"); clubUI.startPanel.classList.remove("champions-hidden"); }

clubUI.start.addEventListener("click", startClubChallenge); clubUI.check.addEventListener("click", verifyClubYears);
clubUI.next.addEventListener("click", renderClubPrompt); document.querySelector("#club-exit").addEventListener("click", exitClubChallenge); document.querySelector("#club-replay").addEventListener("click", startClubChallenge);
