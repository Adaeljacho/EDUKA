# EDUKA Index Refinements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the EDUKA landing page, game cards, category search, and rotating sourced trivia.

**Architecture:** Preserve the current split between semantic markup in `index.html`, visual styling in `styles.css`, and catalog/search behavior in `buscador.js`. Game and trivia content remain data-driven in the JavaScript file.

**Tech Stack:** HTML5, CSS, vanilla JavaScript; no external dependencies.

**Spec:** `docs/superpowers/specs/2026-11-17-eduka-index-refinements-design.md`

## Global Constraints

- Todo texto visible debe tener un tamaño mínimo de 13 px.
- Conservar el fondo oscuro, los acentos celestes (#69D9ED) y el isotipo existente.
- Mantener la estructura de archivos `index.html`, `styles.css` y `buscador.js`.
- No implementar las mecánicas de los juegos ni crear páginas de juego en este cambio.
- No inventar datos curiosos; usar solo los hechos corroborados y enlazar su fuente.
- No añadir ni ejecutar pruebas automatizadas.

## Review Focus

- Empty query plus “Todas”: all catalog entries appear.
- A category chip plus a query: results satisfy both active category and name match.
- Query text containing accents or uppercase: matching is case-insensitive and ignores acute accents while keeping `ñ` distinct from `n`.
- Game entries with and without an image or a real href: image displays when provided; placeholder appears otherwise; cards link only when href exists.
- Reload trivia selection: one of seven topics appears with its matching source link; avoid the last shown fact when session storage is available.
- No matches and clear action: show the empty state and reset the category/query to all.
- Narrow viewport: category chips can be reached horizontally; no text below 13px or clipped card controls.

---

### Task 1: Update the EDUKA page, cards, search, and trivia

**Files:**
- Modify: `index.html`
- Modify: `styles.css`
- Modify: `buscador.js`

**Interfaces:**
- Game record: `{ name: string, category: string, icon: string, image: string | null, href: string | null }`.
- Initial game: name `Memorizar banderas`, category `Geografía`, icon `⚑`, image `null`, href `null` until a real game page exists.
- Search is a normalized text query across only `name` and `category`; the active category chip is an additional AND condition.
- Trivia record: `{ id: string, topic: string, text: string, sourceName: string, sourceUrl: string }`, with exactly one sourced fact for each of the seven approved topics.

- [x] Update `index.html`: remove the top navigation and hero buttons, retain centered logo/EDUKA/author, add a trivia area below the author, add category-chip container above the name-search input, and preserve results and empty-state regions.
- [x] Update `styles.css`: style the clean hero, trivia and source link, horizontally scrollable category chips, image-led cards with icon/title row and bottom category, and responsive empty-image placeholder. Raise all visible type to at least 13px, including mobile overrides and input placeholder.
- [x] Update `buscador.js`: define the game and seven sourced trivia records; render dynamic category chips, filtering by active category and name/category query only, clear both filters, render cards with optional image and href, and choose a non-repeating random trivia item using session storage with a safe fallback.
- [x] Perform the manual source review from the seven Review Focus cases; inspect file links and text-size declarations. Do not add or run automated tests.

## Implementation record

- Task 1 complete. Updated `index.html`, `styles.css`, and `buscador.js` in the existing project workspace.
- Static review confirmed seven trivia records with seven source URLs, search limited to name/category, optional image/href handling, and zero explicit CSS pixel font sizes below 13px.
- No automated tests were added or run, per the approved scope.
- Final review: read-only review by a fresh reviewer. No Critical findings.
- Ruling: Keep the decorative artwork placeholder when a game has no image — the approved plan explicitly requires a placeholder for this case, and it keeps the card composition consistent while image support is optional — cost if wrong: cards without an image retain a decorative blank area.
- Final: minor (deferred): unused CSS tokens and the `.game-card[hidden]` rule.
