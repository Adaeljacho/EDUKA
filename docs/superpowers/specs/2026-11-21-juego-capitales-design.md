# EDUKA — Juego de capitales del mundo

## Objetivo
Crear el segundo juego de EDUKA en `juegos/CAPITALES`, con el mismo flujo/configuración que Banderas, dos direcciones de pregunta y una biblioteca de capitales.

## Organización
- Cada juego vive en su carpeta, con HTML, CSS y JavaScript propios.
- El catálogo común de países y regiones vive en `juegos/paises.js`, no en una carpeta de un juego.
- Los datos de capitales viven localmente en `juegos/CAPITALES/capitales-datos.js` y se relacionan con países mediante el código ISO alpha-2.
- Ajustar rutas existentes de Banderas y su biblioteca para que sigan cargando el catálogo, la página principal y los estilos tras esta organización.

## Juego
- Reutilizar el flujo de configuración, continentes, Todo el mundo, cantidad 10/20/30/40/50, casillas múltiples de estrellas 1–5, modo Experto (todas las banderas del alcance), ronda, cola de errores, porcentajes, tabla por país y filtros de resultados de Banderas.
- Añadir dos modos excluyentes: **Capital a país** y **País a capital**.
- Capital a país: mostrar una capital elegida de un país de la ronda; las sugerencias globales son los países.
- País a capital: mostrar el nombre del país y su bandera grande; las sugerencias globales son las capitales.
- Las capitales múltiples de un país se presentan como una opción conjunta separada con `/`. Al escribir cualquiera de sus nombres, la sugerencia muestra la lista completa y cualquiera de las ciudades de ese conjunto se acepta como correcta. Las estadísticas se agrupan por país.
- Los países/capitales de las sugerencias no se restringen al alcance de la ronda.
- En modo normal, usar las categorías editoriales `difficultyStars` y la cantidad elegida; limitar al número disponible. Experto conserva la regla de usar todos los países del alcance.

## Biblioteca
- Crear una página aparte `biblioteca-capitales.html` y un botón desde la configuración.
- Mostrar tarjetas con nombre del país y su bandera. Permitir buscar por país y filtrar por varios continentes y varias categorías de estrellas, igual que Biblioteca de Banderas.
- Al seleccionar una tarjeta, abrir diálogo a pantalla completa que revele la capital o el grupo completo de capitales en letras grandes. Cerrar con botón, Escape o clic en el fondo.
- Mantener las selecciones múltiples con OR dentro de cada grupo y AND entre búsqueda/continente/estrellas; ningún checkbox elegido equivale a no restringir por ese criterio.

## Datos y fuentes
- Usar la lista local de 195 países ya acordada: 193 miembros ONU y dos Estados observadores no miembros; no incluir territorios dependientes.
- Capitales en español y variantes/alias se almacenan localmente para no depender de una API durante el juego.
- Fuente principal de ciudades, idiomas, identificación de capital y relación país-ciudad: UNGEGN World Geographical Names API (Naciones Unidas). En países con varias capitales, aplicar las capitales que la ONU reconoce en su documento de nombres geográficos de 2019; añadir manualmente Santa Sede/Vaticano y Estado de Palestina desde el mismo documento.
- La clasificación de dificultad 1–5 conserva el carácter editorial aproximado ya usado por Banderas, no un ranking universal.

## Restricciones
- Todo texto visible debe tener un tamaño mínimo de 13 px.
- Conservar estética oscura/celeste y diseño adaptable.
- HTML, CSS y JavaScript nativos; banderas por FlagCDN.
- No añadir ni ejecutar pruebas automatizadas.

## Referencias
- [UNGEGN World Geographical Names](https://unstats.un.org/unsd/geoinfo/geonames/About.htm)
- [UNGEGN WGN public dashboard](https://ungegn.un.org/dashboard/cities/index)
- [UNGEGN country and capital names 2019](https://unstats.un.org/Unsd/geoinfo/UNGEGN/docs/1st-session/GEGN.2_2019_CRP.131_5c_World_Capital_City_Names_and_Revised_World_Country_Names_2019.pdf)
- [ONU, Estados miembros](https://www.un.org/about-us/member-states)
- [ONU, Estados observadores](https://www.un.org/en/about-us/non-member-states)
- [UN M49](https://unstats.un.org/unsd/methodology/m49/overview)
