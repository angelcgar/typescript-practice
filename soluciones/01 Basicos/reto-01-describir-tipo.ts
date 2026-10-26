/**
 * Solución · Reto 01
 *
 * `typeof null` devuelve `"object"` por un error histórico de JavaScript, y
 * los arreglos también son `"object"`, así que ambos casos se tratan antes.
 * El orden importa: `null` debe descartarse primero.
 */
import assert from "node:assert/strict";

export function describirTipo(valor: unknown): string {
  if (valor === null) return "null";
  if (Array.isArray(valor)) return "array";
  return typeof valor;
}

assert.equal(describirTipo("hola"), "string");
assert.equal(describirTipo(42), "number");
assert.equal(describirTipo(10n), "bigint");
assert.equal(describirTipo(true), "boolean");
assert.equal(describirTipo(undefined), "undefined");
assert.equal(describirTipo(Symbol("s")), "symbol");
assert.equal(describirTipo(null), "null");
assert.equal(describirTipo([1, 2]), "array");
assert.equal(describirTipo({ a: 1 }), "object");
assert.equal(describirTipo(() => 1), "function");
console.log("✔ Solución 01 verificada");
