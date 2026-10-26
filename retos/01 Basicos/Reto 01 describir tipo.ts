/**
 * Reto 01 · Describir el tipo de un valor
 *
 * Implementa `describirTipo` para que devuelva el nombre del tipo en tiempo
 * de ejecución. Debe comportarse como `typeof`, con dos excepciones:
 * - `null` devuelve `"null"` (y no `"object"`).
 * - Los arreglos devuelven `"array"` (y no `"object"`).
 *
 * Conceptos: `unknown`, estrechamiento de tipos (*narrowing*), `typeof`.
 *
 * Ejecución: pnpm exec tsx retos/01-basicos/reto-01-describir-tipo.ts
 */
import assert from "node:assert/strict";

export function describirTipo(valor: unknown): string {
  // TODO: implementar
  throw new Error("Pendiente de implementar");
}

// --- Verificación (no modificar) ---
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
console.log("✔ Reto 01 superado");
