/**
 * Introducción ligera a TypeScript: el sistema de tipos.
 *
 * @remarks
 * TypeScript es un superconjunto tipado de JavaScript desarrollado por
 * Microsoft. Añade un sistema de tipos estático que se verifica en tiempo
 * de compilación; los tipos se borran al generar el código, por lo que en
 * ejecución solo existe JavaScript.
 *
 * Este módulo recorre los tipos del lenguaje, de los más simples a los más
 * expresivos, y muestra un valor de cada uno en consola. Las anotaciones de
 * tipo son explícitas con fines didácticos, aunque en código real
 * TypeScript suele inferirlas.
 *
 * Organización:
 * - Tipos primitivos
 * - Tipos especiales
 * - Tipos de objeto
 * - Tipos compuestos
 *
 * @example
 * Ejecución desde la raíz del proyecto:
 * ```bash
 * pnpm exec tsx src/01-basicos/tipos.ts
 * ```
 *
 * @packageDocumentation
 */

/* -------------------------------------------------------------------------- */
/* Tipos primitivos                                                           */
/* -------------------------------------------------------------------------- */

console.log("=== Tipos primitivos ===");

/** Texto: secuencia de caracteres Unicode. */
const nombre: string = "Ada Lovelace";
console.log("string   :", nombre);

/** Número: enteros y decimales comparten el mismo tipo (IEEE 754, 64 bits). */
const edad: number = 36;
const pi: number = 3.14159;
console.log("number   :", edad, pi);

/** Booleano: solo admite `true` o `false`. */
const activo: boolean = true;
console.log("boolean  :", activo);

/** Entero de precisión arbitraria; se escribe con el sufijo `n`. */
const grande: bigint = 9007199254740993n;
console.log("bigint   :", grande);

/** Valor único e inmutable, usado habitualmente como clave de propiedad. */
const id: symbol = Symbol("id");
console.log("symbol   :", id.toString());

/** Subtipo de `symbol` cuya identidad se conoce en compilación. */
const clave: unique symbol = Symbol("clave");
console.log("unique symbol:", clave.toString());

/** Ausencia intencional de valor. */
const nulo: null = null;
console.log("null     :", nulo);

/** Valor de una variable declarada pero no inicializada. */
const indefinido: undefined = undefined;
console.log("undefined:", indefinido);

/* -------------------------------------------------------------------------- */
/* Tipos especiales                                                           */
/* -------------------------------------------------------------------------- */

console.log("\n=== Tipos especiales ===");

/**
 * Desactiva la verificación de tipos. Debe evitarse: anula las garantías
 * que ofrece TypeScript.
 */
let cualquiera: any = 42;
cualquiera = "ahora soy texto";
console.log("any      :", cualquiera);

/**
 * Alternativa segura a `any`: acepta cualquier valor, pero obliga a
 * comprobar su tipo antes de usarlo (estrechamiento o *narrowing*).
 */
const desconocido: unknown = "texto de origen incierto";
if (typeof desconocido === "string") {
  console.log("unknown  :", desconocido.toUpperCase());
}

/** Indica ausencia de valor; su único valor asignable es `undefined`. */
const vacio: void = undefined;
console.log("void     :", vacio);

/**
 * Tipo sin valores posibles. Un arreglo de `never` solo puede estar vacío,
 * lo que ilustra que no existe ningún valor de este tipo.
 */
const sinValores: never[] = [];
console.log("never    :", sinValores);

/* -------------------------------------------------------------------------- */
/* Tipos de objeto                                                            */
/* -------------------------------------------------------------------------- */

console.log("\n=== Tipos de objeto ===");

/** Cualquier valor no primitivo; no permite acceder a sus propiedades. */
const objeto: object = { clave: "valor" };
console.log("object   :", objeto);

/** Objeto con forma explícita: cada propiedad tiene su propio tipo. */
const persona: { nombre: string; edad: number; correo?: string } = {
  nombre: "Grace Hopper",
  edad: 85,
};
console.log("literal de objeto:", persona);

/** Arreglo homogéneo; hay dos sintaxis equivalentes. */
const numeros: number[] = [1, 2, 3];
const palabras: Array<string> = ["uno", "dos", "tres"];
console.log("array    :", numeros, palabras);

/** Arreglo de solo lectura: no admite `push`, `pop` ni asignación por índice. */
const constantes: readonly number[] = [3.14, 2.71, 1.61];
console.log("readonly :", constantes);

/** Tupla: arreglo de longitud fija con un tipo específico por posición. */
const registro: [string, number, boolean] = ["Alan Turing", 41, true];
console.log("tuple    :", registro);

/** Tupla con elementos etiquetados, que mejora la legibilidad. */
const coordenada: [latitud: number, longitud: number] = [4.711, -74.0721];
console.log("tuple etiquetada:", coordenada);

/** Enumeración: conjunto de constantes con nombre. */
enum Direccion {
  Norte,
  Sur,
  Este,
  Oeste,
}
const rumbo: Direccion = Direccion.Este;
console.log("enum     :", rumbo, Direccion[rumbo]);

/* -------------------------------------------------------------------------- */
/* Tipos compuestos                                                           */
/* -------------------------------------------------------------------------- */

console.log("\n=== Tipos compuestos ===");

/** Tipo literal: restringe una variable a un valor exacto. */
const version: "1.0.0" = "1.0.0";
console.log("literal  :", version);

/** Unión de literales: modela un conjunto cerrado de opciones. */
type Tema = "claro" | "oscuro" | "sistema";
const tema: Tema = "oscuro";
console.log("unión de literales:", tema);

/** Unión: el valor puede ser de uno de varios tipos. */
let identificador: string | number = "A-102";
console.log("unión    :", identificador);
identificador = 102;
console.log("unión    :", identificador);

/** Intersección: el valor debe cumplir todos los tipos combinados. */
type ConNombre = { nombre: string };
type ConEdad = { edad: number };
const completo: ConNombre & ConEdad = { nombre: "Linus", edad: 55 };
console.log("intersección:", completo);

/** Tipo de plantilla: cadenas que siguen un patrón. */
type Saludo = `Hola, ${string}`;
const saludo: Saludo = "Hola, TypeScript";
console.log("template literal:", saludo);

/**
 * Los tipos se borran al compilar: `typeof` en ejecución solo distingue
 * los tipos de JavaScript, no los de TypeScript.
 */
console.log("\ntypeof en ejecución:", typeof nombre, typeof edad, typeof grande);
