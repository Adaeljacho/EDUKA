# EDUKA — Refinamientos del índice

## Intención
Actualizar la portada y el catálogo de EDUKA respetando la identidad visual actual y las modificaciones del usuario. La primera captura sirve como referencia de controles y distribución; no se trasladan sus filtros de autos. La segunda sirve como referencia de una portada limpia y centrada.

## Objetivos
- Mantener una portada sencilla: isotipo, EDUKA grande, “By Adael Jacho” y un dato curioso aleatorio debajo.
- Mostrar el enlace de la fuente junto a cada dato curioso y rotar datos de banderas, geografía, fútbol, historia, ciencia, química y música.
- Cambiar el buscador a chips de categoría más un campo de texto que busque solo por nombre y categoría; conservar una acción para limpiar.
- Actualizar tarjetas para admitir una imagen opcional, conservar el icono al lado del título, poner la categoría abajo y quitar el tipo, el objetivo y la flecha.
- Mantener la estructura de archivos que existe ahora: `index.html`, `styles.css` y `buscador.js`.

## Fuera de alcance
- No implementar las mecánicas de los juegos ni crear páginas de juego en este cambio.
- No añadir búsqueda por objetivo ni controles de año, clase u orden.
- No inventar datos curiosos; usar solo los hechos corroborados y enlazar su fuente.

## Restricciones
- Todo texto visible debe tener un tamaño mínimo de 13 px, según la especificación corregida por el usuario.
- Conservar el fondo oscuro, los acentos celestes (#69D9ED) y el isotipo existente.
- Usar HTML, CSS y JavaScript nativos, sin dependencias externas.
- Adaptar la fila de categorías a pantallas estrechas mediante desplazamiento horizontal.

## Enfoques considerados
1. Chips de categorías y campo de búsqueda por nombre: seleccionado por el usuario, coincide con la captura y mantiene los únicos criterios solicitados.
2. Menú desplegable de categoría y campo de búsqueda: opción compacta, pero se aleja más de la referencia visual elegida.

## Decisiones de implementación
- Las categorías de juegos se generan desde los registros. “Todas” reinicia el filtro. El campo de texto busca por nombre y categoría; escribir y elegir categoría se combinan.
- La acción de limpiar borra el texto y vuelve a “Todas”.
- Cada registro de juego usa `{ name, category, icon, image, href }`; `image` y `href` son opcionales. Si hay imagen, aparece en la franja superior. El icono va junto al título. La categoría queda al pie de la tarjeta. Un registro se convierte en enlace cuando tiene un `href` real.
- La tarjeta inicial “Memorizar banderas” mantiene categoría “Geografía”. Como todavía no hay página de juego, no se inventa una ruta de destino.
- La portada elimina navegación y botones de llamada a la acción para parecerse a la referencia limpia. El dato curioso muestra su tema y un enlace a la fuente.
- Se elige aleatoriamente un dato de cada una de las siete áreas. Se evita repetir inmediatamente en la pestaña actual mediante `sessionStorage`, con fallback aleatorio si el almacenamiento no está disponible.

## Datos curiosos verificados para iniciar
- **Banderas:** En la bandera de Brasil, la estrella Spica representa al estado de Pará. [Agência Espacial Brasileira](https://www.gov.br/aeb/pt-br/centrais-de-conteudo/publicacoes/instagram-do-periodo-de-defeso-eleitoral-2022/semana-espacial-100-anos-de-independencia-as-constelacoes-da-bandeira/)
- **Geografía:** El Salar de Uyuni, en Bolivia, es el salar más grande del mundo. [NASA Earth Observatory](https://science.nasa.gov/earth/earth-observatory/salar-de-uyuni-bolivia-6096/)
- **Fútbol:** La primera Copa Mundial de la FIFA se celebró en Uruguay en 1930. [FIFA](https://www.fifa.com/es/articles/cuantas-veces-gano-la-seleccion-de-uruguay-la-copa-mundial-de-la-fifa)
- **Historia:** La Carta Magna de 1215 no fue firmada por el rey Juan; un funcionario la autenticó con un sello. [UK Parliament](https://www.parliament.uk/about/living-heritage/evolutionofparliament/2015-parliament-in-the-making/2015-historic-anniversaries/magna-carta/the-making-of-magna-carta-/)
- **Ciencia:** La Luna se aleja de la Tierra aproximadamente una pulgada por año. [NASA](https://science.nasa.gov/moon/facts/)
- **Química:** El galio se funde a 29.7646 °C. [NIST](https://www.nist.gov/programs-projects/standard-platinum-resistance-thermometer-calibration-laboratory-sprtcl)
- **Música:** Bartolomeo Cristofori ya había creado un instrumento exitoso con mecanismo de piano hacia 1700. [The Metropolitan Museum of Art](https://www.metmuseum.org/es/essays/the-piano-the-pianofortes-of-bartolomeo-cristofori-1655-1731)

## Pendiente para el constructor
Actualizar HTML, estilos y lógica del catálogo; revisar cada tamaño de texto (incluidos botones, chips, placeholder y enlaces de fuente) y comprobar mediante revisión del código la búsqueda por nombre/categoría, el reinicio de chips, las tarjetas con y sin imagen y la selección aleatoria de datos con fuente. No añadir ni ejecutar pruebas automatizadas.
