# Deployment Explorer

Dashboard interactivo en español para explorar ChatGPT Sites, Lovable, Vercel, GitHub Pages, Render y Cloudflare.

## Abrir

Abre **index.html** en cualquier navegador moderno. Es autónomo: incluye los estilos, el código y los datos; no requiere instalación, compilación, conexión a servicios ni claves.

Para usar una vista previa local:

    python -m http.server 8765

Después abre http://localhost:8765.

## Funciones

- Buscador por nombre o tipo de solución y filtros combinables.
- Selección de hasta tres plataformas, conservada al cambiar filtros.
- Comparación detallada, matriz interactiva con fuentes oficiales y barras de capacidades.
- Perfiles de crecimiento sin puntuaciones y tarjetas de costos.
- Asistente de tres preguntas con explicaciones y alternativas.
- Bloqueo de la recomendación automática para información sensible o requisitos empresariales de seguridad y auditoría.
- Diseño adaptable a escritorio, tablet y móvil, inspirado en la referencia visual entregada.

## Datos y metodología

La fuente es **especificacion.md**, entregada para este proyecto. El JSON original se conserva en **datos.json** y se incluye en index.html.

Fecha de verificación indicada en la fuente: **18 de noviembre de 2026**. No se realizó una actualización independiente de precios o capacidades. La matriz conserva los estados de la sección 4 de la especificación, incluso cuando distingue registros técnicos de auditoría organizacional.

Los filtros de proyecto, modelo de costo y administración agrupan cualitativamente los usos descritos en la especificación. Una coincidencia puede requerir un plan específico, configuración o servicios externos. No representa una garantía ni un ranking.

Para actualizar los textos y datos de las seis plataformas, edita datos.json y ejecuta:

    python actualizar_datos.py

Si cambian los estados de la matriz, sus agrupaciones o las reglas de recomendación, actualiza las constantes rows, projectSets, costSets, adminSets, growth o la función recommendation de index.html según corresponda. No hace falta reconstruir la interfaz.

## Verificación

Se comprobó la igualdad del JSON incorporado con el documento original, la sintaxis JavaScript y 24 comprobaciones en Chrome, incluidas las interacciones y la ausencia de desbordamiento horizontal en 1440 px y 390 px. El resultado está en **verificacion.json**.

Para repetir las comprobaciones en Windows con Node.js 24 y Chrome instalado en su ubicación habitual, inicia la vista previa en el puerto 8765 y ejecuta:

    node verificar.cjs

Las capturas están en vista-escritorio.png y vista-movil.png.

## Límites de la comparación

Incluido no significa gratuito ni ilimitado. Un dominio propio no restringe el acceso. La protección de infraestructura no sustituye los permisos dentro de la aplicación. Los modelos de precios no son directamente equivalentes.

Esta demostración educativa no reemplaza una evaluación técnica, contractual, legal o de seguridad.
