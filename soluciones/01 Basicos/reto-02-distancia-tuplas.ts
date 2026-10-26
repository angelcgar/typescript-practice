/**
 * Solución · Reto 02
 *
 * Se desestructuran las tuplas y se aplica el teorema de Pitágoras.
 * `Math.hypot` evita desbordamientos intermedios frente a `Math.sqrt(dx ** 2 + dy ** 2)`.
 */
import assert from "node:assert/strict";

export type Punto = [x: number, y: number];

export function distancia([x1, y1]: Punto, [x2, y2]: Punto): number {
  return Math.hypot(x2 - x1, y2 - y1);
}

assert.equal(distancia([0, 0], [3, 4]), 5);
assert.equal(distancia([1, 1], [1, 1]), 0);
assert.equal(distancia([-1, -1], [2, 3]), 5);
console.log("✔ Solución 02 verificada");
