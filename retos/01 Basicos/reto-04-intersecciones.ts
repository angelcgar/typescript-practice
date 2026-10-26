/**
 * Reto 04 · Intersección de tipos
 *
 * Un `Admin` es un `Usuario` con una lista de permisos de solo lectura.
 * Implementa:
 * - `crearAdmin`: construye un `Admin` a partir de un `Usuario` y sus permisos.
 * - `tienePermiso`: indica si el administrador posee un permiso dado.
 *
 * Conceptos: intersección (`&`), `readonly`, composición de tipos.
 *
 * Ejecución: pnpm exec tsx retos/01-basicos/reto-04-intersecciones.ts
 */
import assert from "node:assert/strict";

export type Usuario = { id: number; nombre: string };
export type Admin = Usuario & { permisos: readonly string[] };

export function crearAdmin(usuario: Usuario, permisos: readonly string[]): Admin {
  // TODO: implementar
  throw new Error("Pendiente de implementar");
}

export function tienePermiso(admin: Admin, permiso: string): boolean {
  // TODO: implementar
  throw new Error("Pendiente de implementar");
}

// --- Verificación (no modificar) ---
const admin = crearAdmin({ id: 1, nombre: "Ada" }, ["leer", "escribir"]);
assert.deepEqual(admin, { id: 1, nombre: "Ada", permisos: ["leer", "escribir"] });
assert.equal(tienePermiso(admin, "leer"), true);
assert.equal(tienePermiso(admin, "borrar"), false);
console.log("✔ Reto 04 superado");
