# Campeones de la Champions League Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Champions of Europe memory game with one entry page and a separate page for each of the three approved modes.

**Architecture:** Create a local static game under `juegos/CHAMPIONS` with one verified season/club catalog consumed by three pages. Share the EDUKA controls and typography while applying a Champions-inspired blue/navy/gold palette through local CSS tokens. The main index already points to `juegos/CHAMPIONS/champions.html`.

**Tech Stack:** HTML, CSS, vanilla JavaScript, local JavaScript data, sourced static club crest images.

**Spec:** `docs/superpowers/specs/2026-11-25-campeones-champions-design.md`

## Global Constraints

- One record per final from 1956 through the completed 2026 edition, labeled by final year.
- Keep visible text at 13 px or larger.
- Use local data at runtime; no account, backend, dependency, or runtime data API.
- Preserve EDUKA layout and controls; borrow only the reference site's color palette.
- Source all winner/year and club identity claims from UEFA; retain historical club names and verified answer aliases.
- Include a readable fallback when a crest fails to load.
- Do not add or run automated tests.

## Review Focus

- Every edition from 1956–2026 is present once and references a valid club; static count and source comparison are Task 1 review checks.
- Historic team naming and canonical identity do not merge disputed clubs; document aliases and historical labels in Task 1 data.
- Normal decade filters include only selected decades while expert mode spans the full edition list; inspect Task 3/4 logic and controls.
- A wrong answer leaves the relevant crest hidden and returns a year later in the queue; inspect Task 3/4 state flow.
- Multi-year club selection reports both omitted wins and false selections; inspect Task 5 result state.
- All three screens remain usable on narrow layouts and retain 13 px minimum visible type; inspect shared CSS and each page.

### Task 1: Build a sourced Champions catalog

**Files:**
- Create: `juegos/CHAMPIONS/campeones-datos.js`

**Interfaces:**
- Produces `championsEditions`: ordered records `{year, clubId}` for 1956–2026.
- Produces `championsClubs`: records `{id, name, aliases, crest, wins}` where `wins` is the list of final years.
- Each club identity keeps a historical display name where relevant; aliases are normalized by game code at search time.

- [ ] Verify each final year and winner against the official UEFA honours board; verify 2025/26 against UEFA's season results.
- [ ] Assign canonical club IDs and add only sourced search aliases; note historical naming/identity caveats in source comments.
- [ ] Link confirmed official static UEFA crest image URLs for known active clubs; use `null` and the initials fallback where no trustworthy crest ID is available.
- [ ] Add provenance URLs in comments and inspect the resulting record count, missing years, dangling club IDs, and per-club win totals.

### Task 2: Add the Champions entry page and visual system

**Files:**
- Create: `juegos/CHAMPIONS/champions.html`
- Create: `juegos/CHAMPIONS/champions.css`
- Create: `juegos/CHAMPIONS/champions.js`
- Modify: `buscador.js` only if its existing `juegos/CHAMPIONS/champions.html` path needs adjustment

**Interfaces:**
- Consumes the shared global `championsClubs` and `championsEditions` catalog.
- Links to `campeones-decadas.html`, `campeones-aleatorio.html`, and `campeones-por-club.html`.

- [ ] Create a hub page with three clear launch cards and EDUKA home navigation.
- [ ] Define local CSS palette tokens for midnight navy, royal blue, white, and gold; reuse EDUKA panel/button structure.
- [ ] Check relative paths to global EDUKA styles, isotipo, and local game pages.

### Task 3: Implement “Campeones por décadas”

**Files:**
- Create: `juegos/CHAMPIONS/campeones-decadas.html`
- Create: `juegos/CHAMPIONS/campeones-decadas.js`

**Interfaces:**
- Consumes `championsEditions` and `championsClubs` from Task 1.
- Uses shared visual tokens and controls from Task 2.

- [ ] Render editions grouped chronologically by decade, including partial 1950s (1956–1959) and 2020s through 2026.
- [ ] Start each cell with a concealed crest and year; make the entire cell selectable.
- [ ] Add autocomplete over champion club names and aliases. Correct answers reveal badge and club name, record result, and focus the next later unresolved year; wrong answers retain concealment and allow retry.
- [ ] Finish when all editions are revealed and show progress plus a year-by-year result summary.

### Task 4: Implement “Año aleatorio”

**Files:**
- Create: `juegos/CHAMPIONS/campeones-aleatorio.html`
- Create: `juegos/CHAMPIONS/campeones-aleatorio.js`

**Interfaces:**
- Consumes `championsEditions` and `championsClubs` from Task 1.
- Reuses configuration/results patterns from `juegos/BANDERAS/banderas.html` and `juegos/CAPITALES/capitales.html`.

- [ ] Add normal decade multi-select and expert mode for all years.
- [ ] Randomize eligible years; autocomplete club answers across all Champions winners.
- [ ] Keep the crest hidden until correct, then reveal it; requeue wrong years.
- [ ] Show correct/incorrect percentages and filterable result rows by errors/clean answers.

### Task 5: Implement “Años ganados por un club”

**Files:**
- Create: `juegos/CHAMPIONS/campeones-por-club.html`
- Create: `juegos/CHAMPIONS/campeones-por-club.js`

**Interfaces:**
- Consumes the club `wins` lists from Task 1.
- Reuses decade/year grid and shared visual tokens from earlier tasks.

- [ ] Select a club from the catalog and show its name plus crest.
- [ ] Render every edition checkbox under decade headings and allow multiple selections.
- [ ] On check, report correct selected years, omitted wins, and false selections; visually distinguish all three.
- [ ] Let the user continue through the club collection and review a club-by-club summary at completion.

### Task 6: Static integration review

**Files:** all files above

- [ ] Confirm all internal links, stylesheet and script paths resolve from each page.
- [ ] Run JavaScript syntax checks and a static catalog audit; do not run automated test suites.
- [ ] Inspect CSS for visible font sizes below 13 px and review phone-width layout rules.
- [ ] Compare winner/year source data with UEFA roll of honour through the 2026 final.
- [ ] Check that every crest has meaningful alt text or uses the text fallback and that no question can be blocked by a missing image.
