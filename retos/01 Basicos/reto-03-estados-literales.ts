/**
 * Reto 03 · Máquina de estados con uniones de literales
 *
 * Un pedido avanza por tres estados, en este orden:
 * `"pendiente"` → `"enviado"` → `"entregado"`.
 *
 * Implementa `siguienteEstado` para devolver el estado que sigue, o `null`
 * si el pedido ya fue entregado.
 *
 * Conceptos: tipos literales, uniones, `readonly`, `noUncheckedIndexedAccess`.
 *
 * Ejecución: pnpm exec tsx retos/01-basicos/reto-03-estados-literales.ts
 */
import assert from "node:assert/strict";

export type EstadoPedido = "pendiente" | "enviado" | "entregado";

export function siguienteEstado(estado: EstadoPedido): EstadoPedido | null {
  // TODO: implementar
  throw new Error("Pendiente de implementar");
}

// --- Verificación (no modificar) ---
assert.equal(siguienteEstado("pendiente"), "enviado");
assert.equal(siguienteEstado("enviado"), "entregado");
assert.equal(siguienteEstado("entregado"), null);
console.log("✔ Reto 03 superado");
