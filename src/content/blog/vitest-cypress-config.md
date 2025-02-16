---
title: "Configura Cypress y Vitest en tu proyecto Vite"
description: "Aprende a configurar Cypress y Vitest en tu proyecto Vite sin complicaciones"
date: 16/02/2025
category: "Testing"
---

## Instalación de vitest

```bash
npm install -D vitest
```

En el archivo <code class="code">tsconfig.node.json</code>, o cualquier archivo de configuración de TypeScript

```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  },
  "include": ["vite.config.ts", "__tests__/**/*"]
}
```

Añade el siguiente código a <code class="code">vite.config.ts</code>:

```javascript
import { defineConfig } from "vitest/config";

export default defineConfig({
  // ... otras configuraciones de Vite
  test: {
    globals: true,
    // Aquí irán tus configuraciones de Vitest
  },
});
```

Añade el comando a tu <code>package.json</code>:

```json
"scripts": {
  // Otros comandos...
  "test": "vitest",
},
```

Crea una nueva carpeta llamada <code class="code">\_\_tests\_\_</code> en la raíz de tu proyecto y dentro de ella crea el archivo <code class="code">sum.test.ts</code> de pruebas con el siguiente contenido:

```javascript
describe("Primer test", () => {
  test("debería pasar", () => {
    expect(1 + 1).toBe(2);
  });
});
```

Ejecuta los tests para saber si todo está funcionando correctamente:

```bash
npm run test
```

Si no hay errores, puedes continuar con la configuración de Cypress.

## Instalación de Cypress

```bash
npm install -D cypress
```

Añade los siguientes comandos a tu <code>package.json</code>:

```json
"scripts": {
  // Otros comandos...
  "cy:open": "cypress open",
  "cy:run": "cypress run",
},
```

Ejecuta el comando para abrir Cypress:

```bash
npm run cy:open
```

En la ventana emergente selecciona E2E Testing para crear la estructura de archivos de Cypress y haz click en continuar.

![configuracion de cypress](https://res.cloudinary.com/lugpdev/image/upload/v1739724973/2025-02-16-105316_2732x768_scrot_xmsdp5.png)

Puede que te aparezca un error como el siguiente:
![error de cypress](https://res.cloudinary.com/lugpdev/image/upload/v1739725994/2025-02-16-111156_2732x768_scrot_yvofey.png)

En ese caso, elimina la siguiente línea de tu <code class="code">package.json</code> y haz click en try again:

```json
{
  "type": "module" // Elimina esta línea
}
```

Crea un nuevo archivo <code class="code">tsconfig.json</code> dentro de la carpeta <code class="code">cypress</code> con el siguiente contenido:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```

Por último crea un archivo de ejemplo en <code class="code">cypress/e2e/</code> con el nombre <code class="code">example.cy.ts</code> y agrega el siguiente contenido:

```javascript
describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
```

Ejecuta el comando para correr los tests de Cypress:

```bash
npm run cy:run
```

¡Y ya todo debería estar funcionando correctamente! 🎉🎉🎉

Si quieres ver el código completo haz click <a href="https://github.com/LugpDev2022/blog-vitest-cypress-config" target="_blank">aquí</a>
