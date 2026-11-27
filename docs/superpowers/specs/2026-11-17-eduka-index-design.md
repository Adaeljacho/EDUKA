# EDUKA — Diseño del índice inicial

## Intención
Crear la página inicial de EDUKA, una plataforma personal de juegos para aprender mediante memorización. La marca debe conservar el isotipo de libro con destello, el fondo oscuro y los acentos celestes de las referencias visuales.

## Objetivos
- Mostrar el isotipo y el nombre EDUKA grandes y centrados en la portada.
- Presentar una colección de juegos en tarjetas.
- Permitir buscar juegos en vivo por nombre, campo u objetivo.
- Adaptarse a pantallas móviles y de escritorio.

## Fuera de alcance
- No implementar todavía la mecánica interna de cada juego.
- No inventar información factual sin corroborarla.

## Restricciones
- Todo texto visible debe tener un tamaño mínimo de 13 px.
- Usar la paleta oscura y celeste (#69D9ED) y el isotipo disponible en `IMAGENES/isotipo-eduka-1000.png`.
- El proyecto no tiene una estructura de aplicación existente; el índice será un único `index.html` autónomo.

## Enfoques considerados
1. Un `index.html` con estilos, datos del catálogo y búsqueda integrados: seleccionado por su sencillez y porque el usuario pidió empezar por ese archivo.
2. Separar HTML, CSS y JavaScript: facilita ampliar el proyecto, pero añade archivos antes de que haya más páginas o funciones.

## Decisiones para implementar
- El buscador filtrará tarjetas al escribir y examinará nombre, campo y objetivo.
- La colección inicial incluirá el juego de memorizar banderas mencionado por el usuario.
- El texto de objetivo se limitará a describir el propósito del juego; no se añadirán datos enciclopédicos sin fuentes verificables.
- Se usará HTML, CSS y JavaScript nativos, sin dependencias externas.

## Pendiente para el constructor
Implementar la página y el filtrado, cuidar el diseño adaptable y verificar que no haya tipografía menor a 12 px. No ejecutar pruebas automatizadas salvo que el usuario las solicite.
