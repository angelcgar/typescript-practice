/**
 * Solución · Reto 04
 *
 * El operador de propagación (`...`) copia las propiedades de `Usuario`
 * y se añaden los permisos; el resultado satisface `Usuario & { permisos }`.
 */
import assert from "node:assert/strict";

export type Usuario = { id: number; nombre: string };
export type Admin = Usuario & { permisos: readonly string[] };

export function crearAdmin(usuario: Usuario, permisos: readonly string[]): Admin {
  return { ...usuario, permisos };
}

export function tienePermiso(admin: Admin, permiso: string): boolean {
  return admin.permisos.includes(permiso);
}

const admin = crearAdmin({ id: 1, nombre: "Ada" }, ["leer", "escribir"]);
assert.deepEqual(admin, { id: 1, nombre: "Ada", permisos: ["leer", "escribir"] });
assert.equal(tienePermiso(admin, "leer"), true);
assert.equal(tienePermiso(admin, "borrar"), false);
console.log("✔ Solución 04 verificada");
