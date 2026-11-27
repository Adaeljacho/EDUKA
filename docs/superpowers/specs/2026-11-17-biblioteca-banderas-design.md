# EDUKA — Biblioteca de banderas

## Objetivo
Añadir al juego de memorizar banderas una biblioteca navegable con todos los países que ya carga el juego.

## Comportamiento
- Un botón desde la configuración abre `biblioteca-banderas.html`; su encabezado incluye un enlace para volver a `banderas.html`.
- Mostrar las banderas de los 195 registros del catálogo local en tarjetas.
- Buscar por nombre con un campo de texto, ignorando mayúsculas y tildes.
- Filtrar por uno o varios continentes y por una o varias estrellas. Las selecciones múltiples dentro de cada filtro usan OR; nombre, continente y estrellas combinan entre sí con AND. Sin continentes o estrellas marcados, ese filtro no restringe resultados.
- Hacer clic en una tarjeta abre un diálogo que cubre la pantalla, con el nombre del país y la bandera grande. Se cierra con un botón, Escape o clic fuera del contenido.
- La biblioteca usa `countries` desde `paises.js` y las mismas banderas FlagCDN; el fallo de imagen muestra estado accesible.

## Diseño y límites
- Usar el estilo oscuro/celeste de EDUKA y adaptar filtros/tarjetas a pantallas estrechas.
- Todo texto visible debe medir al menos 13 px.
- No crear una segunda copia del catálogo ni dependencias externas. No añadir ni ejecutar pruebas automatizadas.

