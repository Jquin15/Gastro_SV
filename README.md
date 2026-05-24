# Gastro SV - Landing Page Gastronómica

¡Bienvenidos al equipo! Este repositorio contiene el proyecto evaluado de Desarrollo Frontend para la creación de una Landing Page interactiva, responsiva y comercial sobre la **Gastro SV**.

---

## 👥 Asignaciones del Equipo

Para mantener un flujo de trabajo limpio y evitar conflictos de código (merge conflicts), cada uno trabajará en su sección designada. 

### 🧑‍💻 Alcides — Sección: Nosotros (`#nosotros`)
* **Misión:** Desarrollar la identidad, historia del negocio, ingredientes ancestrales (maíz, loroco, chipilín) y técnicas tradicionales (comal de barro).
* **Consejos del Experto:**
    * Mantén el contenedor principal con Flexbox (`display: flex`) orientado en fila para pantallas grandes.
    * **Ojo con la responsividad:** Recuerda aplicar `flex-direction: column` dentro del Media Query de los `900px` para que el texto y las imágenes se apilen correctamente en tablets y móviles.
    * No uses imágenes genéricas; asegúrate de que reflejen la calidez de la cocina salvadoreña.

### 🧑‍💻 Hernán — Sección: Servicios / Experiencias (`#servicios`)
* **Misión:** Maquetar las tarjetas de los platos típicos, clases de cocina o tours gastronómicos utilizando las clases CSS existentes.
* **Consejos del Experto:**
    * La cuadrícula principal debe usar estrictamente CSS Grid con el patrón `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`. Esto garantiza que las tarjetas se acomoden solas según el tamaño de la pantalla.
    * Asegúrate de que cada tarjeta de servicio mantenga el atributo `data-experiencia="Nombre Exacto"` en su botón. JavaScript depende de este atributo para autoseleccionar la opción en el formulario de reservas.

### 👩‍💻 Griselda — Sección: Footer (`.footer`)
* **Misión:** Diseñar el cierre del sitio, enlaces a redes sociales, políticas de privacidad y los créditos del equipo.
* **Consejos del Experto:**
    * Utiliza Flexbox para distribuir horizontalmente el logo a la izquierda y las redes sociales a la derecha con `justify-content: space-between`.
    * Aplica `flex-wrap: wrap` para que, si el usuario abre la página desde un teléfono celular (`600px`), los elementos caigan de forma ordenada en una sola columna en lugar de amontonarse.
    * Recuerda añadir los atributos `target="_blank"` y `rel="noopener"` en los enlaces de redes sociales por seguridad y buenas prácticas de SEO.

---

## 🛠️ Reglas de Oro para Desarrollar (¡Léeme antes de picar código!)

1.  **Respetar el Diseño Global:** No cambies la paleta de colores (`:root` en CSS) ni las tipografías globales sin antes consultarlo con el grupo. Mantengamos la coherencia visual.
2.  **Cero Contenido Falso:** Está estrictamente prohibido usar *Lorem Ipsum*. Todo el texto debe ser original y enfocado en la cultura culinaria de El Salvador.
3.  **Clases Semánticas:** Si vas a crear estilos nuevos, usa nombres de clases claros (ej. `.nosotros-descripcion`, `.tarjeta-precio`) para evitar pisar los estilos de tus compañeros.
4.  **No Modificar el Formulario ni el Nav:** El Navbar y el Formulario ya cuentan con la lógica interactiva de manipulación de DOM y validación en JavaScript. Si necesitas hacer un cambio ahí, avísame primero.

---

## 🚀 Flujo de Trabajo en Git

Para que el profesor vea un historial de Git impecable, sigamos esta nomenclatura en los commits:

* Si agregas contenido nuevo: `git commit -m "feat(nosotros): añadido texto sobre la nixtamalización del maíz"`
* Si corriges un error de diseño: `git commit -m "fix(footer): corregido alineación de iconos en móviles"`
* Si mejoras estilos: `git commit -m "style(servicios): agregada transición de elevación a las tarjetas"`

---
*¡Vamos por ese 10! Si tienen dudas con Flexbox o Grid, dejen un mensaje en el grupo.*