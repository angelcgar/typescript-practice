/**
 * Introducción ligera a las funciones en TypeScript.
 *
 * @remarks
 * En JavaScript una función acepta cualquier cantidad y tipo de argumentos.
 * TypeScript añade un contrato: declara qué parámetros recibe una función y
 * qué valor devuelve, y el compilador verifica cada llamada contra ese
 * contrato. Como los tipos se borran al compilar, el costo en ejecución
 * es nulo.
 *
 * Este módulo recorre las formas de definir y tipar funciones, de las más
 * simples a las más expresivas, y muestra el resultado de cada una en
 * consola. Las anotaciones son explícitas con fines didácticos, aunque en
 * código real TypeScript infiere muchas de ellas.
 *
 * Organización:
 * - Declaración y expresiones de función
 * - Parámetros
 * - Tipos de retorno
 * - Tipos de función
 * - Sobrecargas y `this`
 * - Genéricos y funciones de verificación de tipos
 * - Funciones asíncronas
 *
 * @example
 * Ejecución desde la raíz del proyecto:
 * ```bash
 * pnpm exec tsx src/01-basicos/funciones.ts
 * ```
 *
 * @packageDocumentation
 */

/* -------------------------------------------------------------------------- */
/* Declaración y expresiones de función                                       */
/* -------------------------------------------------------------------------- */

console.log("=== Declaración y expresiones ===");

/** Declaración de función: se eleva (*hoisting*) al inicio de su ámbito. */
function sumar(a: number, b: number): number {
  return a + b;
}
console.log("declaración :", sumar(2, 3));

/** Expresión de función: se asigna a una variable y no se eleva. */
const restar = function (a: number, b: number): number {
  return a - b;
};
console.log("expresión    :", restar(10, 4));

/** Función flecha: sintaxis breve, con `this` léxico. */
const multiplicar = (a: number, b: number): number => a * b;
console.log("flecha       :", multiplicar(3, 4));

/**
 * Los parámetros siempre requieren anotación (salvo en callbacks con tipo
 * contextual); el retorno, en cambio, se infiere: aquí es `number`.
 */
const dividir = (a: number, b: number) => a / b;
console.log("retorno inferido:", dividir(9, 3));

/* -------------------------------------------------------------------------- */
/* Parámetros                                                                 */
/* -------------------------------------------------------------------------- */

console.log("\n=== Parámetros ===");

/** Parámetro opcional (`?`): su tipo efectivo es `string | undefined`. */
function saludar(nombre: string, titulo?: string): string {
  return titulo ? `Hola, ${titulo} ${nombre}` : `Hola, ${nombre}`;
}
console.log("opcional     :", saludar("Ada"), "|", saludar("Ada", "Dra."));

/** Parámetro con valor por defecto: se vuelve opcional para quien llama. */
function potencia(base: number, exponente: number = 2): number {
  return base ** exponente;
}
console.log("por defecto  :", potencia(5), potencia(2, 10));

/** Parámetro *rest*: agrupa los argumentos restantes en un arreglo tipado. */
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((acumulado, n) => acumulado + n, 0);
}
console.log("rest         :", sumarTodos(1, 2, 3, 4, 5));

/** Desestructuración con tipo: la anotación describe el objeto completo. */
function describirUsuario({
  nombre,
  edad = 18,
}: {
  nombre: string;
  edad?: number;
}): string {
  return `${nombre} (${edad} años)`;
}
console.log("desestructurado:", describirUsuario({ nombre: "Grace" }));

/** Parámetro de solo lectura: impide modificar el arreglo recibido. */
function maximo(valores: readonly number[]): number {
  return Math.max(...valores);
}
console.log("readonly     :", maximo([4, 9, 2]));

/* -------------------------------------------------------------------------- */
/* Tipos de retorno                                                           */
/* -------------------------------------------------------------------------- */

console.log("\n=== Tipos de retorno ===");

/** `void`: la función se ejecuta por su efecto y no devuelve un valor útil. */
function registrar(mensaje: string): void {
  console.log("void         : [log]", mensaje);
}
registrar("operación completada");

/** Retorno de unión: el llamador debe tratar ambos casos. */
function buscarIndice(texto: string, letra: string): number | null {
  const indice = texto.indexOf(letra);
  return indice === -1 ? null : indice;
}
console.log("unión        :", buscarIndice("typescript", "s"), buscarIndice("ts", "z"));

/**
 * `never`: la función nunca retorna normalmente (lanza una excepción o no
 * termina). El compilador lo usa para analizar el flujo de control.
 */
function fallar(mensaje: string): never {
  throw new Error(mensaje);
}
try {
  fallar("error deliberado");
} catch (error) {
  if (error instanceof Error) {
    console.log("never        :", error.message);
  }
}

/* -------------------------------------------------------------------------- */
/* Tipos de función                                                           */
/* -------------------------------------------------------------------------- */

console.log("\n=== Tipos de función ===");

/** Alias que describe la forma de una función: parámetros y retorno. */
type Operacion = (a: number, b: number) => number;

/** Las funciones son valores: pueden pasarse como argumentos (*callbacks*). */
function aplicar(operacion: Operacion, a: number, b: number): number {
  return operacion(a, b);
}
console.log("callback     :", aplicar(sumar, 6, 4), aplicar(multiplicar, 6, 4));

/** Callback con tipo en línea: el nombre de los parámetros es solo documentación. */
function transformar(
  valores: readonly number[],
  funcion: (valor: number, indice: number) => number,
): number[] {
  return valores.map(funcion);
}
console.log("orden superior:", transformar([1, 2, 3], (v, i) => v * 10 + i));

/** Una función puede devolver otra: la interna conserva su entorno (*closure*). */
function crearMultiplicador(factor: number): (n: number) => number {
  return (n) => n * factor;
}
const triplicar = crearMultiplicador(3);
console.log("closure      :", triplicar(7));

/** Interfaz con firma de llamada: un valor que es función y a la vez objeto. */
interface Contador {
  (): number;
  reiniciar(): void;
}

function crearContador(): Contador {
  let cuenta = 0;
  return Object.assign(() => ++cuenta, {
    reiniciar: () => {
      cuenta = 0;
    },
  });
}
const contador = crearContador();
contador();
contador();
console.log("firma de llamada:", contador());
contador.reiniciar();
console.log("tras reiniciar  :", contador());

/**
 * Tipos utilitarios que extraen información de una función existente.
 * Se evalúan en compilación: `typeof sumar` obtiene el tipo de la función.
 */
type ParametrosDeSumar = Parameters<typeof sumar>;
type RetornoDeSumar = ReturnType<typeof sumar>;
const parametros: ParametrosDeSumar = [1, 2];
const retorno: RetornoDeSumar = sumar(...parametros);
console.log("Parameters/ReturnType:", parametros, "→", retorno);

/* -------------------------------------------------------------------------- */
/* Sobrecargas y `this`                                                       */
/* -------------------------------------------------------------------------- */

console.log("\n=== Sobrecargas y this ===");

/**
 * Sobrecarga: varias firmas públicas para una misma implementación. El tipo
 * de retorno depende del tipo del argumento. La firma de implementación
 * (la última) no es visible para quien llama.
 */
function duplicar(valor: string): string;
function duplicar(valor: number): number;
function duplicar(valor: string | number): string | number {
  return typeof valor === "string" ? valor.repeat(2) : valor * 2;
}
console.log("sobrecarga   :", duplicar("ab"), duplicar(21));

/** Parámetro `this` falso: declara qué contexto exige el método. */
interface Caja {
  ancho: number;
  alto: number;
  area(this: Caja): number;
}
const caja: Caja = {
  ancho: 3,
  alto: 4,
  area() {
    return this.ancho * this.alto;
  },
};
console.log("this tipado  :", caja.area());

/* -------------------------------------------------------------------------- */
/* Genéricos y funciones de verificación de tipos                             */
/* -------------------------------------------------------------------------- */

console.log("\n=== Genéricos y verificación de tipos ===");

/**
 * Función genérica: `T` se infiere de cada llamada, de modo que el tipo de
 * retorno depende del tipo de la entrada. Se estudia a fondo en el módulo
 * de genéricos.
 */
function primero<T>(elementos: readonly T[]): T | undefined {
  return elementos[0];
}
console.log("genérica     :", primero([10, 20]), primero(["a", "b"]), primero([]));

/** *Type guard*: si devuelve `true`, el valor se trata como `string`. */
function esTexto(valor: unknown): valor is string {
  return typeof valor === "string";
}
const dato: unknown = "typescript";
if (esTexto(dato)) {
  console.log("type guard   :", dato.toUpperCase());
}

/**
 * Función de aserción: si retorna, la condición es verdadera; si no, lanza
 * un error. Permite estrechar tipos sin un `if`.
 */
function afirmar(condicion: unknown, mensaje: string): asserts condicion {
  if (!condicion) throw new Error(mensaje);
}
const entrada: unknown = "42";
afirmar(typeof entrada === "string", "Se esperaba texto");
console.log("aserción     :", entrada.length);

/* -------------------------------------------------------------------------- */
/* Funciones asíncronas                                                       */
/* -------------------------------------------------------------------------- */

console.log("\n=== Funciones asíncronas ===");

/**
 * Una función `async` siempre devuelve una `Promise`. El tipo de retorno se
 * anota como `Promise<T>`, donde `T` es el valor con el que se resuelve.
 * Se profundiza en el módulo de asincronía.
 */
async function esperar(ms: number, valor: string): Promise<string> {
  await new Promise<void>((resolver) => setTimeout(resolver, ms));
  return valor;
}
console.log("async/await  :", await esperar(10, "resuelto tras una espera"));

// Marca el archivo como módulo ES (necesario para `await` de nivel superior).
export {};
