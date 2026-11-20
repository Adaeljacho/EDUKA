# EDUKA Index Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build EDUKA's responsive landing page with a centered brand and a live searchable memory-game catalog.

**Architecture:** A standalone `index.html` contains semantic markup, page styles, a small data array for games, and vanilla JavaScript for live search. Search normalizes case and accents, and matches the name, field, and objective fields.

**Tech Stack:** HTML5, CSS, vanilla JavaScript; no external dependencies.

**Spec:** `docs/superpowers/specs/2026-11-17-eduka-index-design.md`

## Global Constraints

- Todo texto visible debe tener un tamaño mínimo de 12 px.
- Usar la paleta oscura y celeste (#69D9ED) y el isotipo disponible en `IMAGENES/isotipo-eduka-1000.png`.
- El proyecto no tiene una estructura de aplicación existente; el índice será un único `index.html` autónomo.
- No implementar todavía la mecánica interna de cada juego.
- No inventar información factual sin corroborarla.

## Review Focus

- Empty search query: show all catalog entries.
- Search by name, field, and objective independently: show matching cards for each field.
- Uppercase and accented query variants: match case-insensitively and accent-insensitively.
- No match: show a clear empty state and zero results.
- Narrow viewport: keep content readable and usable without horizontal overflow.

---

### Task 1: Build the EDUKA landing page and live game search

**Files:**
- Create: `index.html`
- Use: `IMAGENES/isotipo-eduka-1000.png`

**Interfaces:**
- Catalog record shape: `{ name: string, field: string, objective: string }`.
- Initial record: “Memorizar banderas”, field “Geografía”, objective “Practicar la identificación de banderas nacionales”.
- Search matches a normalized query against all three string values; an empty query shows all records.

- [ ] Create semantic page structure with responsive header/hero, centered EDUKA branding and logo, accessible labeled search field, results summary, catalog cards, empty state, and footer.
- [ ] Add the dark/cyan visual styling in the same file; set every rendered text size to at least `12px`, including mobile overrides and placeholder text.
- [ ] Define the game catalog data and implement live, case-insensitive, accent-insensitive matching across name, field, and objective.
- [ ] Review the page source for the five Review Focus cases and confirm each behavior is represented; inspect all font-size declarations and responsive CSS for the 12px minimum. Do not add or run automated tests.
