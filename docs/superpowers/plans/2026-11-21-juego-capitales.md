# Juego de Capitales Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a capital memory game and its filtered capital library under `juegos/CAPITALES`.

**Architecture:** Put shared countries in `juegos/paises.js`; store a local country-code keyed capital dataset with the new game. Build one-page config/round/results game and a separate capital library, both consuming the same local data.

**Tech Stack:** HTML, CSS, vanilla JavaScript, local JSON-shaped data, FlagCDN images.

**Spec:** `docs/superpowers/specs/2026-11-21-juego-capitales-design.md`

## Global Constraints

- Todo texto visible debe medir al menos 13 px.
- Preserve EDUKA's dark/cyan glass design.
- Use the same 195-country dataset; do not include dependencies or runtime country APIs.
- No automated tests.

## Review Focus

- Shared-country and page-relative routes resolve after the move to per-game folders.
- Normal mode uses selected continents, quantity, and all checked star levels; expert uses the complete continent scope.
- Capital-to-country suggests all 195 countries; country-to-capital suggests full capital groups, including aliases and multi-capital countries.
- Wrong answers return after two others where possible; results aggregate by country and match Banderas.
- Capital library shows all countries, multi-filters, empty state, and full-screen reveal.
- Flag errors, keyboard use, responsive layout, and visible type >=13 px.

---

### Task 1: Relocate shared countries and repair flag routes

**Files:**
- Move: `juegos/BANDERAS/paises.js` → `juegos/paises.js`
- Modify: `juegos/BANDERAS/biblioteca-banderas.html`

- [x] Move the single shared catalog to `juegos/paises.js`; keep the existing Banderas page reference at `../paises.js`.
- [x] Change the flag library's logo/styles/home links to `../../...` and its catalog script to `../paises.js`.

### Task 2: Build verified local capital data

**Files:**
- Create: `juegos/CAPITALES/capitales-datos.js`

- [x] Add one record for each of the 195 country records, keyed by ISO alpha-2 code; include Spanish capital display names and normalized-lookup aliases.
- [x] Use UNGEGN city/country details and Spanish name variants; group capitals by country and preserve all validated capital names as one slash-separated suggestion.
- [x] Include a small source comment with UNGEGN/UN references; no runtime network calls.

### Task 3: Build the capitals memory game

**Files:**
- Create: `juegos/CAPITALES/capitales.html`
- Create: `juegos/CAPITALES/capitales.css`
- Create: `juegos/CAPITALES/capitales-juego.js`

- [x] Reuse Banderas' setup controls and result UI; add `Capital a país` and `País a capital` direction choices.
- [x] Render the selected prompt by direction; in country-to-capital also show the country's large flag.
- [x] Autocomplete in the expected answer type over all countries or all country capital groups; match accents/case/aliases and multi-capital membership.
- [x] Preserve wrong-answer requeue, scoring, progress, results percentages, and country table with existing filters.
- [x] Keep all visible text >=13 px and use correct relative links to shared assets/data.

### Task 4: Add the capital library

**Files:**
- Create: `juegos/CAPITALES/biblioteca-capitales.html`
- Create: `juegos/CAPITALES/biblioteca-capitales.css`
- Create: `juegos/CAPITALES/biblioteca-capitales.js`
- Modify: `juegos/CAPITALES/capitales.html`

- [x] Add a game-configuration link to the library and a link back to the game.
- [x] Render country+flag cards with multi-select continent/star filters and country-name search, based on the full shared catalog.
- [x] Clicking a card opens a full-screen dialog that displays all capital names for that country in large type; close by button, Escape, or backdrop.
- [x] Statically inspect local routes, catalog counts, JavaScript syntax, and font sizes; do not run tests.
