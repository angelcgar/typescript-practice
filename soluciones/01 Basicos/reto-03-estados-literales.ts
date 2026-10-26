/**
 * Solución · Reto 03
 *
 * El flujo se declara una sola vez como arreglo de solo lectura y el estado
 * siguiente es el elemento contiguo. Con `noUncheckedIndexedAccess`, acceder
 * fuera de rango tiene tipo `T | undefined`, por lo que `?? null` cubre el
 * último estado sin condicionales.
 */
import assert from "node:assert/strict";

export type EstadoPedido = "pendiente" | "enviado" | "entregado";

const flujo: readonly EstadoPedido[] = ["pendiente", "enviado", "entregado"];

export function siguienteEstado(estado: EstadoPedido): EstadoPedido | null {
  return flujo[flujo.indexOf(estado) + 1] ?? null;
}

assert.equal(siguienteEstado("pendiente"), "enviado");
assert.equal(siguienteEstado("enviado"), "entregado");
assert.equal(siguienteEstado("entregado"), null);
console.log("✔ Solución 03 verificada");
