---
title: "Hola Mundo"
description: "En este artículo comparto la inspiración detrás de la creación de este blog y detallo todo el proceso que seguí para construirlo"
date: 13/01/2025
category: "Relatos"
---

Este será el primer artículo de mi blog, y quiero comenzar compartiendo el origen de esta idea y el proceso que seguí para desarrollarla.

## La idea

Todo comenzó un día cualquiera mientras programaba. Me encontré con un problema de configuración muy específico en uno de mis proyectos de [Next.js](https://nextjs.org/). Pasé mucho tiempo tratando de resolverlo, ya que no encontraba suficiente información al respecto. Fue una experiencia bastante frustrante, pero al final logré solucionarlo. En ese momento, me di cuenta de algo importante: no fui el primero ni seré el último en enfrentar ese problema.

De ahí surgió la idea de empezar mi propio blog con dos objetivos principales: compartir mis soluciones con otras personas que enfrenten problemas similares y documentar mis aprendizajes. Así, en el futuro, tendría una guía clara para resolver situaciones parecidas.

## Construcción del proyecto

Este proyecto tardó cerca de un año en ver la luz y su desarrollo se dividió en dos fases.

### Fase I (Diciembre 2023 - Mayo 2024)

En la fase inicial, decidí construir el blog con [Next.js](https://nextjs.org/), una tecnología que ya conocía y dominaba en cierto grado. Por eso, me pareció la mejor opción para desarrollar este proyecto.

Pero antes de escribir la primera línea de código, decidí crear un diseño de referencia sencillo en [Figma](https://figma.com). Me inspiré en los sitios web de programadores que admiro, como [Midudev](https://midu.dev/) y [Faztweb](https://faztweb.com/), pero utilizando una paleta de colores de mi propio estilo.

El diseño lucía así:

![Imagen del diseño inicial de la página principal del proyecto](https://res.cloudinary.com/lugpdev/image/upload/v1736816305/blog/Desktop_Home_aekx2d.png)

Una vez terminado el boceto, comencé a programar utilizando mis conocimientos de [Next.js](https://nextjs.org/) y [TypeScript](https://www.typescriptlang.org/). Sin embargo, las complicaciones surgieron cuando intenté incluir el contenido del blog.

Mi primera idea fue crear archivos en formato Markdown, cargarlos en Google Drive y luego obtenerlos desde allí para mostrar el contenido en las publicaciones. Aunque logré implementarlo mediante el uso de los sdk de Google Drive, no era tan eficiente como quería.

Buscando una solución más automatizada, se me ocurrió crear un editor de texto directamente en el blog. Esto no solo facilitaría la publicación de artículos de forma rápida y sencilla, sino que también me permitiría escribir tanto en inglés como en español.

Este luciría así:

![Imagen del diseño del editor de texto del blog](https://res.cloudinary.com/lugpdev/image/upload/v1736819118/blog/Home_vuadkg.png)

Desafortunadamente, el tiempo que me tomó desarrollar esta funcionalidad, sumado a la carga de mis actividades escolares, me desanimó y llevó a que dedicara cada vez menos tiempo al proyecto, dejándolo de lado durante un largo periodo.

### Fase II (Diciembre 2024 - Enero 2025)

La segunda fase del proyecto tuvo una duración mucho menor y comenzó durante mis vacaciones de invierno de 2024, cuando decidí retomar el trabajo. Esta vez, utilicé una serie de tecnologías que simplificarían mucho el desarrollo.

La primera de ellas fue [v0](https://v0.dev/) de [Vercel](https://vercel.com/), que me permitió generar un diseño mucho más profesional y sofisticado para mi blog, ayudándome en una de mis principales debilidades: el diseño de interfaces. Gracias a esta herramienta, pude mejorar el diseño anterior en solo unas pocas horas, en comparación con las semanas que me tomó el primer diseño.

La segunda y principal tecnología fue [Astro](https://astro.build/), que ofrece por defecto una manera sencilla de gestionar contenido mediante sus [Content Collections](https://docs.astro.build/en/guides/content-collections/). ¡Perfecto para un blog!

A continuación, hago un resumen de las principales tareas que realicé para finalizar el proyecto:

1. Generación del diseño base en [v0](https://v0.dev/)
2. Mejora del diseño en [Figma](https://figma.com)
3. Programación de la aplicación con [Astro](https://astro.build/)
4. Tests unitarios con [Vitest](https://vitest.dev/)
5. Tests end to end con [Cypress](https://www.cypress.io/)
6. Implementación de [GitHub Actions](https://github.com/features/actions)
7. Despliegue final en [Vercel](https://vercel.com/).

Aún quedan muchas cosas por mejorar, pero por el momento, esto fue todo por el primer artículo. Gracias por tomarte el tiempo de leer y seguir este proyecto. Espero que encuentres valor en él y que cumpla su propósito de aportar un granito de arena a esta comunidad. ¡Nos vemos en el siguiente artículo!
