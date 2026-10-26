/**
 * Reto 05 · Type guard sobre un tipo de plantilla
 *
 * `Ruta` es el conjunto de cadenas que comienzan con "/".
 * Implementa `esRuta` como *type guard*: si devuelve `true`, TypeScript debe
 * tratar el valor como `Ruta` dentro del bloque que lo comprueba.
 *
 * Conceptos: tipos de plantilla (*template literal types*), predicados de
 * tipo (`valor is Ruta`), estrechamiento.
 *
 * Ejecución: pnpm exec tsx retos/01-basicos/reto-05-type-guard-ruta.ts
 */
import assert from "node:assert/strict";

export type Ruta = `/${string}`;

export function esRuta(valor: string): valor is Ruta {
  // TODO: implementar
  throw new Error("Pendiente de implementar");
}

// --- Verificación (no modificar) ---
assert.equal(esRuta("/inicio"), true);
assert.equal(esRuta("/"), true);
assert.equal(esRuta("inicio"), false);
assert.equal(esRuta(""), false);

const entrada: string = "/usuarios";
if (esRuta(entrada)) {
  const ruta: Ruta = entrada; // solo compila si el type guard está bien tipado
  assert.equal(ruta, "/usuarios");
}
console.log("✔ Reto 05 superado");
