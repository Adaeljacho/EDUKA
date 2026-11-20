# Biblioteca de Banderas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a separate, searchable, multi-filter flag library linked from EDUKA's flag game.

**Architecture:** Create `biblioteca-banderas.html` with its own CSS and JavaScript, linked from `banderas.html`. Load the shared `paises.js` catalog and FlagCDN images; filter selections combine without copying country data.

**Tech Stack:** HTML, CSS, vanilla JavaScript.

**Spec:** `docs/superpowers/specs/2026-11-17-biblioteca-banderas-design.md`

## Global Constraints

- Todo texto visible debe medir al menos 13 px.
- Conservar la estética oscura/celeste de EDUKA.
- Usar el catálogo local actual y FlagCDN; no añadir dependencias ni duplicar datos.
- No añadir ni ejecutar pruebas automatizadas.

## Review Focus

- No filters selected: all 195 flags appear.
- Multiple continents and star categories combine as OR within each filter and AND across filters.
- Name search ignores case and diacritics.
- Empty search results show a clear message and can be reset.
- Clicking a flag opens a full-screen dialog; close button, Escape and outside click close it and preserve filters.
- Flag image errors remain visible and accessible; responsive layout and text remain readable at 13 px or larger.

---

### Task 1: Add separate library page

**Files:**
- Create: `juegos/biblioteca-banderas.html`
- Create: `juegos/biblioteca-banderas.css`
- Modify: `juegos/banderas.html`

- [x] Add a link in game configuration to the separate library page. Build its header, search, continent checkboxes, star checkboxes, result count, clear filters, responsive flag cards, empty state, and return link.
- [x] Add an accessible full-screen dialog containing country name, large flag image, close control, and error state.
- [x] Add responsive styles in EDUKA's established palette; keep all visible text at least 13 px.

### Task 2: Implement search, filters, and dialog behavior

**Files:**
- Create: `juegos/biblioteca-banderas.js`

- [x] Load the shared country catalog without duplicating its records.
- [x] Search country name with accent/case normalization; OR multiple selected continents and star categories, then AND these filters with the name query.
- [x] Render cards from the full local country catalog and use ISO alpha-2 codes for FlagCDN image URLs.
- [x] Open the selected country in the full-screen dialog and close with its button, Escape, or backdrop click.
- [x] Statically inspect behavior and run JavaScript syntax checks only; do not run automated tests.
