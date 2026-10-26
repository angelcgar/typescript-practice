# Roadmap

Plan de estudio de este repositorio, organizado en fases de dificultad creciente. Cada tema incluye un módulo en `src/` y retos con solución en `retos/` y `soluciones/`.

**Leyenda:** `[x]` completado · `[ ]` pendiente

## Fase 1 · Fundamentos

- [x] Sistema de tipos: primitivos, especiales, objetos, tuplas, enums, literales, uniones e intersecciones
- [ ] Funciones tipadas: parámetros opcionales, valores por defecto, *rest*, sobrecargas, `this`
- [ ] Objetos: `interface` frente a `type`, propiedades opcionales y `readonly`, firmas de índice
- [ ] Estrechamiento de tipos: `typeof`, `instanceof`, `in`, uniones discriminadas, type guards
- [ ] Inferencia y aserciones: `as`, `satisfies`, `as const`, operador `!`

## Fase 2 · Abstracción

- [ ] Genéricos: funciones, interfaces, restricciones con `extends`, valores por defecto
- [ ] Clases: modificadores de acceso, `readonly`, propiedades de parámetro, getters y setters
- [ ] Herencia y polimorfismo: clases abstractas, `implements`, composición
- [ ] Módulos: `import`/`export`, módulos de tipos, resolución de módulos

## Fase 3 · Tipos avanzados

- [ ] Tipos utilitarios: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `ReturnType`, `Awaited`
- [ ] Tipos mapeados y modificadores (`+readonly`, `-?`)
- [ ] Tipos condicionales y `infer`
- [ ] Operadores de tipo: `keyof`, `typeof`, tipos indexados
- [ ] Tipos de plantilla avanzados y manipulación de cadenas a nivel de tipo

## Fase 4 · Práctica profesional

- [ ] Asincronía tipada: `Promise`, `async/await`, concurrencia con `Promise.all`
- [ ] Manejo de errores: errores tipados, patrón `Result`, validación en la frontera con Zod
- [ ] Pruebas con Vitest, incluyendo pruebas de tipos
- [ ] Calidad de código: ESLint (typescript-eslint) y Prettier
- [ ] Integración continua con GitHub Actions: typecheck y pruebas en cada *push*

## Fase 5 · Proyectos

- [ ] Herramienta de línea de comandos tipada
- [ ] API REST con Node.js (Fastify o Express) y validación de esquemas
- [ ] Acceso a datos tipado (Prisma o Drizzle) sobre SQL
- [ ] Mini biblioteca publicada como paquete, con tipos exportados

## Criterio de avance

Un tema se marca como completado cuando existe su módulo en `src/` con TSDoc, sus retos resueltos y verificados, y el comando `pnpm typecheck` no reporta errores.
