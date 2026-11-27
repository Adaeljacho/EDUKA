function normalizeChampionText(value) {
  return String(value || "").toLocaleLowerCase("es").replace(/ñ/g, "\uE000").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\uE000/g, "ñ").trim().replace(/\s+/g, " ");
}
function shuffleChampions(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
  return copy;
}
function getChampionClub(id) { return championsClubById.get(id); }
function createChampionCrest(club, className = "crest-wrap") {
  const wrap = document.createElement("span"); wrap.className = className;
  if (club?.crest) {
    const image = document.createElement("img"); image.className = "crest-image"; image.src = club.crest; image.alt = `Escudo de ${club.name}`; image.loading = "lazy";
    image.addEventListener("error", () => { image.remove(); const fallback = document.createElement("span"); fallback.className = "crest-fallback"; fallback.setAttribute("aria-label", `Escudo no disponible de ${club.name}`); fallback.textContent = club.initials; wrap.append(fallback); }, { once: true });
    wrap.append(image);
  } else {
    const fallback = document.createElement("span"); fallback.className = "crest-fallback"; fallback.setAttribute("aria-label", `Escudo histórico no disponible de ${club?.name || "club"}`); fallback.textContent = club?.initials || "?"; wrap.append(fallback);
  }
  return wrap;
}
function championDecades() {
  const years = [...new Set(championsEditions.map((edition) => edition.decade))].sort((a, b) => a - b);
  return years.map((decade) => ({ decade, editions: championsEditions.filter((edition) => edition.decade === decade) }));
}
function formatChampionDecade(decade) { return decade < 2000 ? `${String(decade).slice(-2)}s` : `${decade}s`; }
function renderChampionSuggestions(input, list, query, onSelect, idPrefix = "champion-choice") {
  const normalizedQuery = normalizeChampionText(query);
  const matches = normalizedQuery ? championsClubs.filter((club) => [club.name, ...club.aliases].some((name) => normalizeChampionText(name).includes(normalizedQuery)))
    .sort((a, b) => Number([b.name, ...b.aliases].some((name) => normalizeChampionText(name).startsWith(normalizedQuery))) - Number([a.name, ...a.aliases].some((name) => normalizeChampionText(name).startsWith(normalizedQuery))) || a.name.localeCompare(b.name, "es")).slice(0, 10) : [];
  list.replaceChildren(...matches.map((club, index) => {
    const li = document.createElement("li"); const button = document.createElement("button");
    button.type = "button"; button.id = `${idPrefix}-${index}`; button.setAttribute("role", "option"); button.setAttribute("aria-selected", "false"); button.textContent = club.name;
    button.addEventListener("mousedown", (event) => event.preventDefault()); button.addEventListener("click", () => { input.value = club.name; input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant"); list.hidden = true; list.replaceChildren(); onSelect(club); });
    li.append(button); return li;
  }));
  list.hidden = matches.length === 0; input.setAttribute("aria-expanded", String(matches.length > 0)); return matches;
}
function closeChampionSuggestions(input, list) { list.hidden = true; list.replaceChildren(); input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant"); }
function bindChampionAutocomplete(input, list, submitAnswer) {
  input.addEventListener("keydown", (event) => {
    const options = [...list.querySelectorAll('[role="option"]')];
    if (event.key === "Escape") { closeChampionSuggestions(input, list); return; }
    if (event.key === "Enter" && (list.hidden || !options.length)) {
      if (submitAnswer) { event.preventDefault(); submitAnswer(); }
      return;
    }
    if (list.hidden || !options.length) return;
    const activeIndex = options.findIndex((option) => option.getAttribute("aria-selected") === "true");
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault(); const delta = event.key === "ArrowDown" ? 1 : -1;
      const next = (activeIndex + delta + options.length) % options.length;
      options.forEach((option, index) => option.setAttribute("aria-selected", String(index === next)));
      input.setAttribute("aria-activedescendant", options[next].id);
    } else if (event.key === "Enter") {
      event.preventDefault(); options[activeIndex >= 0 ? activeIndex : 0].click();
    }
  });
}
