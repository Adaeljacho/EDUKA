# EDUKA — Juego de memorizar banderas

## Intención
Añadir el primer juego de EDUKA, siguiendo la estética oscura, celeste y de vidrio ya usada por la página de inicio. La experiencia tiene tres etapas dentro de una sola página: configuración, ronda y resultados.

## Objetivos
- Enlazar la tarjeta “Memorizar banderas” del catálogo a la página del juego.
- Permitir elegir uno o varios continentes, o todo el mundo.
- En modo normal, permitir elegir por separado la cantidad (10, 20, 30, 40 o 50) y una o más categorías de dificultad (1–5 estrellas). Si el alcance y las categorías contienen menos banderas que la cantidad elegida, usar las disponibles e indicar el total real.
- Ofrecer modo Experto por los continentes seleccionados o por todo el mundo; muestra todas las banderas del alcance e ignora cantidad y estrellas.
- Mostrar una bandera grande y un campo de sugerencias con todos los países del conjunto global, incluso si el país no forma parte del alcance de la ronda.
- Contabilizar cada selección válida como acierto o error. Las banderas respondidas mal vuelven a la cola más adelante, hasta que se acierten.
- Mostrar al final porcentajes de respuestas correctas e incorrectas, una tabla por país y filtros para ver países con errores o sin errores.

## Conjunto de países y datos
- El conjunto inicial será de 195 estados: los 193 estados miembros de la ONU y los dos estados observadores no miembros (Santa Sede y Estado de Palestina). No se incluyen territorios dependientes.
- La clasificación geográfica seguirá UN M49. América Central y el Caribe se agrupan en Norteamérica; Sudamérica permanece separada. No se incluye Antártida porque no contiene países soberanos.
- Nombres comunes en español, alias de búsqueda, códigos y pertenencia regional se mantienen como datos locales versionados para que el juego no dependa de una API de países durante la partida. La lista muestra “Ciudad del Vaticano” y acepta “Santa Sede” como alias.
- Las imágenes de banderas se muestran mediante FlagCDN con código ISO alpha-2; por eso se requiere conexión a internet para cargar las imágenes.
- Cada país tiene una categoría editorial de dificultad de 1 a 5 estrellas. Una estrella representa el conjunto considerado más familiar y cinco estrellas el menos familiar. Es una regla aproximada del juego, no una medición universal ni un ranking oficial. En modo normal, se eligen una cantidad y una o más categorías de estrellas; se seleccionan hasta esa cantidad del conjunto filtrado. En modo Experto se ignoran cantidad y estrellas para preservar la regla de incluir todo el alcance.

## Flujo de la ronda
- En modo normal, la configuración permite marcar varios continentes o marcar Todo el mundo, seleccionar la cantidad deseada (10–50) y escoger una o más categorías de 1–5 estrellas.
- En modo Experto, el alcance usa las mismas casillas de continente y Todo el mundo, incluye todos los países seleccionados e ignora cantidad y estrellas.
- La ronda muestra una bandera al azar y autocompleta nombres de todos los países, sin limitar las sugerencias al alcance de la ronda. Acepta navegación por teclado y selección con ratón.
- Los aciertos retiran esa bandera de la cola. Un error se registra y la bandera vuelve a la cola después de otras dos banderas cuando haya suficientes; la ronda termina cuando todas las banderas iniciales han sido respondidas correctamente al menos una vez.
- El resumen calcula los porcentajes sobre todos los intentos válidos (aciertos e intentos incorrectos). La tabla mantiene una fila por país, muestra número de errores e intentos y permite filtrar Todas, Con errores y Sin errores.

## Enfoque elegido
1. **Una página con tres etapas y estado en memoria** — elegido por el usuario. Mantiene la cola, las estadísticas y el modo actual durante toda la ronda, con menos navegación y sin persistencia innecesaria.
2. **Tres páginas separadas para configuración, ronda y resultados** — descartado porque obligaría a guardar y restaurar el estado entre páginas sin aportar una función necesaria.

## Restricciones
- Todo texto visible debe tener un tamaño mínimo de 13 px.
- Conservar la identidad visual actual y el diseño adaptable.
- Usar HTML, CSS y JavaScript nativos, sin dependencias externas.
- No añadir ni ejecutar pruebas automatizadas.

## Fuentes de datos
- [Lista de estados miembros de la ONU](https://www.un.org/about-us/member-states)
- [Estados observadores no miembros de la ONU](https://www.un.org/en/about-us/non-member-states)
- [Clasificación regional UN M49](https://unstats.un.org/unsd/methodology/m49/overview)
- [Documentación de imágenes de banderas FlagCDN](https://flagcdn.io/docs/)

## Fuera de alcance
- No añadir territorios dependientes en la primera versión.
- No implementar usuarios, cuentas, base de datos, guardado de historial ni multijugador.
- No usar los datos de familiaridad como afirmaciones de reconocimiento universal; son una regla interna de selección de dificultad.



