/**
 * Punto de entrada del repositorio.
 *
 * @remarks
 * Este archivo actúa como ejecutor: mantiene un registro de los módulos de
 * práctica y los carga bajo demanda mediante importación dinámica. Cada
 * módulo imprime su contenido en consola al ser importado.
 *
 * Para agregar un módulo nuevo basta con añadir una entrada a {@link modulos}.
 *
 * @example
 * ```bash
 * pnpm start                # ejecuta todos los módulos en orden
 * pnpm start tipos          # ejecuta los módulos cuyo id contenga "tipos"
 * pnpm start -- --list      # lista los módulos disponibles
 * ```
 *
 * @packageDocumentation
 */

/** Describe un módulo de práctica ejecutable. */
interface Modulo {
  /** Identificador único, con prefijo numérico para conservar el orden. */
  readonly id: string;
  /** Título legible que se muestra al ejecutar. */
  readonly titulo: string;
  /** Carga el módulo; su código se ejecuta al resolverse la promesa. */
  readonly cargar: () => Promise<unknown>;
}

/** Registro de módulos, en el orden de estudio del roadmap. */
const modulos: readonly Modulo[] = [
  {
    id: "01-tipos",
    titulo: "Fundamentos: el sistema de tipos",
    cargar: () => import("./01-basicos/tipos.js"),
  },
  {
    id: "02-funciones",
    titulo: "Fundamentos: funciones tipadas",
    cargar: () => import("./01-basicos/funciones.js"),
  },
  // Siguientes módulos (descomentar al crearlos):
  // { id: "02-funciones", titulo: "Funciones tipadas", cargar: () => import("./01-basicos/funciones.js") },
  // { id: "03-interfaces", titulo: "Objetos e interfaces", cargar: () => import("./02-objetos-e-interfaces/interfaces.js") },
  // { id: "04-genericos", titulo: "Genéricos", cargar: () => import("./03-genericos/genericos.js") },
];

/** Imprime la lista de módulos registrados. */
function listar(): void {
  console.log("Módulos disponibles:\n");
  for (const { id, titulo } of modulos) {
    console.log(`  ${id.padEnd(16)} ${titulo}`);
  }
}

/** Ejecuta, en orden, los módulos que coincidan con el filtro. */
async function main(argumentos: readonly string[]): Promise<void> {
  if (argumentos.includes("--list")) {
    listar();
    return;
  }

  const filtro = argumentos.find((a) => !a.startsWith("--"));
  const seleccion = filtro
    ? modulos.filter((m) => m.id.includes(filtro))
    : modulos;

  if (seleccion.length === 0) {
    console.error(`No hay módulos que coincidan con "${filtro}".\n`);
    listar();
    process.exitCode = 1;
    return;
  }

  for (const modulo of seleccion) {
    console.log(`\n${"#".repeat(78)}`);
    console.log(`# ${modulo.id} · ${modulo.titulo}`);
    console.log(`${"#".repeat(78)}\n`);
    await modulo.cargar();
  }
}

await main(process.argv.slice(2));

// Marca el archivo como módulo ES (necesario para `await` de nivel superior).
export {};
