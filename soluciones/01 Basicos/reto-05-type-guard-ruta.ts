/**
 * Solución · Reto 05
 *
 * El predicado `valor is Ruta` le promete al compilador que, si la función
 * devuelve `true`, el valor es una `Ruta`. TypeScript no verifica esa promesa:
 * la responsabilidad de que el cuerpo sea coherente con el predicado es
 * del programador.
 */
import assert from "node:assert/strict";

export type Ruta = `/${string}`;

export function esRuta(valor: string): valor is Ruta {
  return valor.startsWith("/");
}

assert.equal(esRuta("/inicio"), true);
assert.equal(esRuta("/"), true);
assert.equal(esRuta("inicio"), false);
assert.equal(esRuta(""), false);

const entrada: string = "/usuarios";
if (esRuta(entrada)) {
  const ruta: Ruta = entrada;
  assert.equal(ruta, "/usuarios");
}
console.log("✔ Solución 05 verificada");
