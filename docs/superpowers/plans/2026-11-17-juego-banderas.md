# Juego de Banderas — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add EDUKA's first playable memory game: identify world flags, repeat misses, and review sourced results.

**Architecture:** Create a self-contained game route under `juegos/` with three UI states in one page: configuration, active round, results. Keep country records as local static data; load flag SVGs by ISO alpha-2 from FlagCDN. Update the home catalog record to link to the game.

**Tech Stack:** HTML5, CSS, vanilla JavaScript; static country metadata and FlagCDN images; no backend or external JavaScript dependencies.

**Spec:** `docs/superpowers/specs/2026-11-17-juego-banderas-design.md`

## Global Constraints

- Todo texto visible debe tener un tamaño mínimo de 13 px.
- Conservar la estética oscura/celeste y de vidrio de EDUKA.
- Usar un conjunto local de 195 estados: los 193 miembros de la ONU y los dos observadores no miembros; excluir territorios dependientes.
- Clasificar países por UN M49; agrupar América Central y el Caribe en Norteamérica y mantener Sudamérica separada.
- Normalizar búsqueda ignorando mayúsculas y tildes, preservando `ñ`.
- Mostrar sugerencias de los 195 países incluso si están fuera del alcance seleccionado.
- En modo normal, cantidad (10/20/30/40/50) y una o más categorías de dificultad (1–5 estrellas) son controles separados; limitar al número disponible en el alcance y categorías.
- Modo experto incluye todas las banderas del alcance seleccionado e ignora cantidad y estrellas.
- No añadir ni ejecutar pruebas automatizadas.

## Review Focus

- No continente elegido: no se puede iniciar la ronda.
- Uno o varios continentes / Todo el mundo: normal crea hasta la cantidad elegida usando banderas de la categoría de estrellas seleccionada.
- Experto por continente o mundo: incluye todos los países del alcance y no aplica límites normales.
- Sugerencias: cualquier país del conjunto global se puede encontrar por nombre común o alias, sin restringir por continente.
- Respuesta errónea: suma un error y la bandera vuelve después de otras dos cuando existan; la ronda no termina hasta acertar todas las banderas iniciales.
- Respuesta correcta: suma un acierto y no vuelve a la cola.
- Resultados: los porcentajes se calculan sobre intentos válidos; cada país aparece una sola vez, con errores e intentos; filtros Con errores/Sin errores muestran el grupo correcto.
- Datos e imágenes: los nombres/regiones usan los 195 registros; las banderas usan ISO alpha-2; una imagen no disponible tiene un estado de error visible y accesible.
- Móvil/teclado: configuración, autocompletado, respuesta y resultados se pueden usar en pantallas estrechas y con teclado.

---

### Task 1: Add the verified country catalog

**Files:**
- Create: `juegos/paises.js`

**Interfaces:**
- Export/global: `const countries = [...]`.
- Country record: `{ code: string, name: string, aliases: string[], continent: string, familiarityRank: number, difficultyStars: 1|2|3|4|5 }`.
- `code` is ISO 3166-1 alpha-2; `continent` is one of `Europa`, `Sudamérica`, `Norteamérica`, `África`, `Oceanía`, `Asia`.
- `familiarityRank` and `difficultyStars` are editorial game data, not a universal recognition ranking. Normal mode chooses one or more star groups and takes up to N countries in those groups.

- [ ] Create records for the 193 current UN members plus Holy See/Vatican City and State of Palestine, with Spanish common names, aliases, ISO alpha-2 codes, and UN M49 continent mapping.
- [ ] Add an explicit familiarity order and 1–5 difficulty category as game design data, separate from country facts; document that it is editorial and not a universal recognition ranking.
- [ ] Keep the country list offline/local; add source comments linking UN membership, observer status, and M49 references.

### Task 2: Build the configuration and active game flow

**Files:**
- Create: `juegos/banderas.html`
- Create: `juegos/banderas.css`
- Create: `juegos/banderas.js`
- Use: `juegos/paises.js`

**Interfaces:**
- App state: `{ phase, mode, continents, quantity, starRating, initialCountries, queue, currentCountry, attempts, countryResults }`.
- Modes: `normal` and `expert`.
- Normal quantities: `{ 10, 20, 30, 40, 50 }`; star categories: `{ 1, 2, 3, 4, 5 }`.
- Flag image: `https://flagcdn.io/flags/4x3/{code-lowercase}.svg`.

- [ ] Build responsive configuration: normal/expert mode, six continent choices, Todo el mundo option, separate quantity and multi-select star categories in normal mode, and start action disabled for empty scope or empty star selection.
- [ ] Build the active round state with large flag, progress/score, accessible country combobox, suggestions across all countries, and cancel/back-to-configuration action.
- [ ] Select up to N flags from the chosen star groups in normal mode; cap at available countries. In expert mode use every selected country.
- [ ] Verify selection immediately: on correct answer remove current country; on wrong answer count it and reinsert after two other queued flags when possible. Continue until all initially selected countries have been answered correctly at least once.
- [ ] Handle flag image loading errors with visible, accessible feedback so a failed CDN image cannot be mistaken for a country flag.

### Task 3: Add results and connect the home catalog

**Files:**
- Modify: `juegos/banderas.html`
- Modify: `juegos/banderas.css`
- Modify: `juegos/banderas.js`
- Modify: `buscador.js`

**Interfaces:**
- Results aggregate each valid attempt as correct or incorrect; `correctPercent = correct / allAttempts * 100`, `incorrectPercent = incorrect / allAttempts * 100`.
- One summary row per initially selected country contains its name, number of attempts, and number of errors.
- Filters: `Todas`, `Con errores`, `Sin errores`.

- [ ] Render final correct/incorrect percentages and the country results table with all three filters.
- [ ] Add actions to replay the same setup or return to configuration without losing the current page's visual consistency.
- [ ] Set the “Memorizar banderas” home card `href` to `juegos/banderas.html`.
- [ ] Perform the manual Review Focus checklist and inspect all visible type sizes. Do not add or run automated tests.
