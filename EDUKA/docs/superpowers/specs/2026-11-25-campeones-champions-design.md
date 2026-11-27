# Campeones de la Champions League — Diseño

**Estado:** borrador para revisión del usuario  
**Fecha:** 2026-11-25

## Objetivo

Añadir a EDUKA un juego de memoria sobre los campeones de la Copa de Europa y la UEFA Champions League, integrado en el buscador existente y dividido en una página de entrada más una página para cada modalidad.

## Estructura

Crear `juegos/CHAMPIONS/`, ya enlazada desde `buscador.js`, con:

- `champions.html`: menú con las tres modalidades.
- `campeones-decadas.html`: rejilla de campeones por año, agrupada por décadas.
- `campeones-aleatorio.html`: adivinar el campeón de años aleatorios.
- `campeones-por-club.html`: marcar todas las ediciones ganadas por el club indicado.
- CSS y JavaScript locales para las páginas; catálogo compartido de campeones y clubes, sin API de runtime.

Cada modalidad tendrá navegación de vuelta al menú y al inicio de EDUKA. El enlace de `buscador.js` se conservará como entrada del juego.

## Diseño

- Conservar estructura, tipografía, botones, campos y superficies de vidrio de EDUKA.
- Añadir una paleta inspirada en la referencia de UEFA: fondos azul noche/índigo, superficies azul real, texto blanco y acentos amarillo dorado. El color se aplicará a la interfaz existente; no se reproducirá el diseño ni la navegación de UEFA.
- Mantener texto visible en 13 px o más, cumpliendo la regla del proyecto.
- Usar imágenes de escudos con alternativa de nombre textual y estado de carga/error para evitar que la pregunta dependa solo de la imagen.

## Alcance factual

- Un registro por edición desde la final de 1956 hasta la edición completada en 2026, usando el año de la final como etiqueta; no incluir temporadas en curso ni futuras.
- La colección comprende la Copa de Europa anterior a la marca Champions League, relanzada en 1992/93.
- Los campeones y años deben cotejarse con UEFA, incluidos el cuadro de honor histórico y resultados de la edición más reciente. Los nombres de respuesta incluirán alias solo si son variantes verificables del mismo club.
- Mantener el nombre histórico del campeón para la edición y definir un identificador canónico por club para agrupar sus victorias en la tercera modalidad. Resolver explícitamente identidades históricas controvertidas en vez de unir clubes por parecido de nombre.
- Los escudos deben corresponder al club canónico o a la identidad histórica de la edición cuando la continuidad del club sea disputada; incluir fallback visual sin romper la partida.

## Modalidad 1: Campeones por décadas

- Mostrar una rejilla de ediciones cronológicas, agrupadas en décadas (1950s: 1956–1959; luego décadas completas; 2020s hasta 2026).
- Cada celda muestra el año de la final y un escudo oculto/gris al inicio.
- El usuario puede seleccionar cualquier año/celda para responder mediante un autocomplete que busca entre los clubes campeones cargados.
- Una respuesta correcta revela el escudo y nombre del campeón y enfoca automáticamente el siguiente año disponible en orden cronológico después del año escogido.
- Una incorrecta informa el campeón correcto y deja el escudo sin revelar; el usuario puede volver a intentar ese año.
- La ronda termina cuando todas las ediciones están reveladas. Mostrar progreso y resumen con aciertos/errores por año.

## Modalidad 2: Año aleatorio

- Configuración normal: seleccionar una o varias décadas.
- Modo experto: incluir todos los años cargados (1956–2026), ignorando la selección de décadas.
- Presentar los años en orden aleatorio, uno por turno. El usuario escribe el club campeón con autocomplete global de clubes.
- Mantener el escudo oculto antes de responder; mostrar escudo y nombre tras una respuesta correcta. Las respuestas incorrectas muestran el campeón y devuelven el año más adelante en la cola.
- Cerrar con porcentajes y una tabla de resultados filtrable por errores/sin errores, siguiendo el patrón de Banderas y Capitales.

## Modalidad 3: Años ganados por un club

- Solo modo experto: seleccionar aleatoriamente un club canónico y mostrar el tablero de años completo por décadas.
- El usuario marca todos los años en que ese club ganó y envía sus selecciones.
- Informar aciertos seleccionados, títulos omitidos y años incorrectos marcados; resaltar cada año por estado y permitir pasar al siguiente club.
- Registrar resultado por club y mostrar resumen al completar el conjunto de clubes con victorias en el catálogo.

## Fuera de alcance

- Partidos, temporadas en curso, marcadores, clasificación, buscador global UEFA, filtros de clubes, comparadores, cuentas o backend.
- Reproducir elementos de marca protegidos de UEFA como la página completa, su cabecera, tipografía o logotipo.

## Fuentes previstas

- UEFA, cuadro de honor histórico: https://www.uefa.com/uefachampionsleague/news/0275-1541637ad1db-88aeeefefefd-1000--all-time-european-cup-honours-board-real-madrid-make-it-14-wins/
- UEFA, resultados y campeona de la final de 2026: https://www.uefa.com/uefachampionsleague/news/029c-1e9a2f63fe2d-ebf9ad643892-1000--2025-26-champions-league-all-the-results/
- UEFA, el cambio de nombre de la competición en 1992/93: misma página del cuadro de honor.

## Aprobaciones pendientes

- Confirmar este diseño, especialmente el comportamiento de la Modalidad 1 (tras acertar un año se avanza al siguiente en orden) y el envío/retroalimentación de la Modalidad 3.
- Una vez aprobado, preparar el plan de implementación y luego construir el juego.
