/**
 * Reto 02 · Distancia entre dos puntos
 *
 * Implementa `distancia` para calcular la distancia euclidiana entre dos
 * puntos del plano, representados como tuplas etiquetadas.
 *
 * Conceptos: tuplas, tuplas etiquetadas, desestructuración tipada.
 *
 * Ejecución: pnpm exec tsx retos/01-basicos/reto-02-distancia-tuplas.ts
 */
import assert from "node:assert/strict";

export type Punto = [x: number, y: number];

export function distancia(a: Punto, b: Punto): number {
  // TODO: implementar
  throw new Error("Pendiente de implementar");
}

// --- Verificación (no modificar) ---
assert.equal(distancia([0, 0], [3, 4]), 5);
assert.equal(distancia([1, 1], [1, 1]), 0);
assert.equal(distancia([-1, -1], [2, 3]), 5);
console.log("✔ Reto 02 superado");
