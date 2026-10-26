# TypeScript Practice

![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-gestor-F69220?logo=pnpm&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

Repositorio de estudio para aprender TypeScript de forma progresiva: módulos documentados con TSDoc que se ejecutan en consola, retos con verificación automática y un roadmap por fases.

## Contenido

- [Objetivos](#objetivos)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Retos](#retos)
- [Roadmap](#roadmap)
- [Convenciones](#convenciones)
- [Licencia](#licencia)

## Objetivos

- Comprender el sistema de tipos de TypeScript, desde lo básico hasta tipos avanzados.
- Practicar con configuración estricta (`strict: true`) para adquirir buenos hábitos desde el inicio.
- Consolidar cada tema con ejercicios verificables y soluciones comentadas.

## Requisitos

| Herramienta | Versión |
|---|---|
| [Node.js](https://nodejs.org/) | LTS (20 o superior) |
| [pnpm](https://pnpm.io/) | 10 o superior |
| [Git](https://git-scm.com/) | Cualquiera reciente |

## Instalación

```bash
git clone https://github.com/TU_USUARIO/typescript-practice.git
cd typescript-practice
pnpm install
```

> pnpm bloquea por defecto los scripts de instalación de las dependencias. Si ves `ERR_PNPM_IGNORED_BUILDS`, ejecuta `pnpm approve-builds` y aprueba `esbuild`.

## Uso

| Comando | Descripción |
|---|---|
| `pnpm start` | Ejecuta todos los módulos de `src/` en orden |
| `pnpm start tipos` | Ejecuta solo los módulos cuyo identificador contenga `tipos` |
| `pnpm start -- --list` | Lista los módulos disponibles |
| `pnpm dev` | Ejecuta en modo vigilancia: se relanza al guardar cambios |
| `pnpm typecheck` | Verifica los tipos de todo el proyecto sin generar archivos |
| `pnpm exec tsx <archivo.ts>` | Ejecuta un archivo individual |

## Estructura del proyecto

```
typescript-practice/
├── src/                      # Módulos de estudio (cada uno imprime en consola)
│   ├── index.ts              # Punto de entrada: registra y ejecuta los módulos
│   ├── 01-basicos/
│   │   └── tipos.ts
│   ├── 02-objetos-e-interfaces/
│   ├── 03-genericos/
│   ├── 04-clases/
│   └── 05-asincronia/
├── retos/                    # Enunciados con verificación automática
│   └── 01-basicos/
├── soluciones/               # Soluciones comentadas, misma ruta que los retos
│   └── 01-basicos/
├── ROADMAP.md                # Plan de estudio por fases
├── tsconfig.json
├── package.json
└── README.md
```

## Retos

Cada reto es un archivo con enunciado, una función pendiente (`// TODO`) y aserciones que validan la solución:

```bash
pnpm exec tsx retos/01-basicos/reto-01-describir-tipo.ts
```

Si el reto se resolvió correctamente imprime `✔ Reto 01 superado`; de lo contrario, falla indicando la aserción incumplida. Las soluciones están en `soluciones/` con el mismo nombre de archivo. Más detalles en [`retos/README.md`](retos/README.md).

## Roadmap

El plan completo está en [`ROADMAP.md`](ROADMAP.md). Resumen:

| Fase | Enfoque | Estado |
|---|---|---|
| 1 | Fundamentos: tipos, funciones, objetos, *narrowing* | En curso |
| 2 | Abstracción: genéricos, clases, módulos | Pendiente |
| 3 | Tipos avanzados: utilitarios, mapeados, condicionales | Pendiente |
| 4 | Práctica profesional: asincronía, errores, pruebas, calidad | Pendiente |
| 5 | Proyectos: CLI, API, acceso a datos, paquete | Pendiente |

## Convenciones

- **Documentación:** comentarios TSDoc (`/** */`) en cada módulo y en cada declaración relevante.
- **Configuración:** TypeScript en modo estricto, con `noUncheckedIndexedAccess` activado.
- **Nombres:** carpetas y archivos en minúsculas con guiones; los temas llevan prefijo numérico para conservar el orden.
- **Commits:** formato [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, `chore:`.

# Retos

Ejercicios con verificación automática. Cada archivo contiene el enunciado, una función con la marca `// TODO` y un bloque de aserciones al final.

## Cómo resolverlos

1. Abre el reto y lee el enunciado.
2. Implementa la función sin modificar el bloque de verificación.
3. Ejecútalo:

   ```bash
   pnpm exec tsx retos/01-basicos/reto-01-describir-tipo.ts
   ```

   Si imprime `✔ Reto 01 superado`, está resuelto. Si lanza un error, el mensaje indica qué aserción falló.
4. Ejecuta `pnpm typecheck` para confirmar que además cumple los tipos.
5. Solo después de intentarlo, compara con `soluciones/` en la misma ruta y nombre.

## Índice

| Tema | Reto | Conceptos |
|---|---|---|
| 01 · Básicos | 01 · Describir el tipo de un valor | `unknown`, *narrowing*, `typeof` |
| 01 · Básicos | 02 · Distancia entre dos puntos | Tuplas etiquetadas |
| 01 · Básicos | 03 · Máquina de estados | Uniones de literales, `readonly` |
| 01 · Básicos | 04 · Intersección de tipos | `&`, composición |
| 01 · Básicos | 05 · Type guard sobre una ruta | Tipos de plantilla, predicados de tipo |

## Licencia

Distribuido bajo la licencia MIT.
