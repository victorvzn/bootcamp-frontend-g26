// Comentarios

// console.log('Hola JS desde main.js')

/*
  Comentario
  de
  múltiples
  líneas
*/

// Declarar variables (Guardan información) con let y const

// NOTA: Usemos let para valores que cambian y const para valores fijos.

const pi = 3.1415 // Es obligatorio inicializarlo
let nombre // No es obligatori inicializarlo

console.log(nombre) // Undefined

nombre = 1500
console.log(nombre) // 1500
nombre = 'Victor'

console.log(pi * 3)
console.log(nombre) // Victor

// Tipos de datos

// PRIMITIVOS: Number, String, Boolean(true, false), undefined, null. BigInt, Symbol, etc.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

// NUMBER

console.log(20)
console.log(15.69)
console.log(0.9999)
console.log(-39)

console.log(typeof 20) // number
console.log(typeof 15.69) // number
console.log(typeof 0.9999) // number
console.log(typeof -39) // number

// STRING

console.log('Claudia')
console.log("Jose")
console.log("200")
console.log("🤪😍😤😵😂") // La codificación UTF-8

console.log(typeof 'Claudia')
console.log(typeof "Jose")
console.log(typeof "200")
console.log(typeof "🤪😍😤😵😂") // La codificación UTF-8

// BOOLEAN -> false o true

console.log(true)
console.log(typeof false)

// UNDEFINED

let name
console.log(name) // Hasta aquí la variable name no se le asigno un valor por eso es undefined
console.log(typeof name)

// NULL

let lastName = null
console.log(lastName)
console.log(typeof lastName)

// BIGINT -> Permite almacenar números muy grandes.
// SYMBOL -> Ayudan a crear valores únicos e irrepetibles.

// NOTA: typeof devuelve el tipo de dato de una variable o valor

// OPERADORES MATEMÁTICOS

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2) // Residuo
console.log(2 ** 3) // Dos elevado al cubo
console.log(Math.pow(2, 3)) // Hace lo mismo que 2 ** 3

// OPERADOR DE ASIGNACIÓN (=)

const genero = 'femenino'

console.log(genero)

// OPERADORES DE COMPARACIÓN

// Operador de igualdad y desiguadad NO ESTRICTA (==, !=)
// Devuelve un valor booleano (true o false)
// Este operador no toma en cuenta el tipo de dato al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true ❓❓
console.log(1 != '1') // false ❓❓

// Operador de igualdad y desigualdad ESTRICTA (===, !==) (ES RECOMENDABLE USARLO CASI SIEMPRE)
// Devuelve un valor booleano (true o false)
// Este operado si toma en cuenta el tipo de datos y sus valores al comparar

console.log(1 === 1) // true ✅
console.log(1 === '1') // false ✅ 
console.log(1 !== '1') // true ✅

// OPERADORES DE COMPARACIÓN (siempre devuelven un booleano)

console.log(8 > 5)
console.log(5 < 1)
console.log(8 >= 5)
console.log(5 <= 1)

// OPERADORES LÓGICOS (AND, OR, NEGACIÓN)

console.log(true && false) // AND
console.log(true || false) // OR
console.log(!true) // NEGACIÓN

// OPERADORES DE CADENA (CONCATENACIÓN)

const saludo = 'Hola, '
const nombreCompleto = 'Victor' + ' ' + 'Villazón'
const miEdad = 39

const imprimirSaludo = saludo + nombreCompleto + ". Tengo " + miEdad + ' años'

console.log(nombreCompleto)
console.log(imprimirSaludo)

// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false

const cadena1 = 'codigox'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length)

// 2. (TODO) Retornar true si un numero es menor que 40 sino devolver false
// 3. (TODO) Retornar True si un numero es menor que 60 sino devolver False
// 4. (TODO) Retornar True si un numero es par sino devolver False
// 5. (TODO) Retornar True si un numero es impar sino devolver False
// 6. (TODO) calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%

// Scope (Ámbito)

// Define donde una variable existe.
// Tenemos dos tipos: Global(Fuera de las funciones) y Local (Dentro de funciones o bloques de código)

let global = 'VARIABLE GLOBAL'

function prueba() {
  let local = 'VARIABLE LOCAL'

  console.log('IMPRIMIENDO DESDE UN BLOQUE:', local)
}

console.log(global)
// console.log(local) // ❌ Uncaught ReferenceError: local is not defined
prueba()


// CONDICIONALES (IF)

if (true) {
  // El bloque que se ejecuta si la condición es verdadera (true)
}

const numero = 33

const esPar = numero % 2 === 0 // boolean

if (esPar) {
  console.log('>>> Este número es par', numero)
}

// CONDICIONALES (IF, ELSE)

if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else {
  // Se ejecuta este bloque si la condición es falsa
}

if (esPar) { // true, 1, 'hola'
  console.log('Este número es par', numero)
} else {
  console.log('Este número es impar', numero)
}

// CONDICIONALES (IF, ELSE IF, ELSE)

if (false) {
  // Se ejecuta este bloque si la condición es verdadera
} else if (false) {
  // Se ejecuta este bloque si la condición es verdadera
} else if (false) {
  // Se ejecuta este bloque si la condición es verdadera
} else {
  // Se ejecuta este bloque si ninguna condición se cumple
}

let heroe = 'Spiderman'

if (heroe === 'Batman') {
  console.log('Hola soy Bruce')
} else if (heroe === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (heroe === 'Ironman') {
  console.log('Hola soy Tony')
} else {
  console.log('No soy un heroe 😒')
}

// CONDICIONALES (SWITCH)

heroe = 'Ironman'

switch (heroe) {
  case 'Batman':
    console.log('Hola soy Bruce')
    break
  case 'Spiderman':
    console.log('Hola soy Peter')
    break
  case 'Ironman':
    console.log('Hola soy Tony')
    break
  default:
    console.log('No soy un heroe 😒')
}

// ESTRUCTURAS REPETITIVAS

// FOR (Sirve para repetir una o varias instrucciones)

for(let i = 0; i < 10; i++) {
  console.log('for', i)
}

// WHILE

let j = 0

while (j < 10) {
  console.log('while', j)
  // j = j + 1
  j++
}

// DO WHILE

let k = 0

do {
  console.log('do while', k)
  k = k + 1
  // k++
} while (k < 10)

// EJERCICIOS

// 1. Determinar si la edad de una persona es mayor o menor de edad mostrando 'Mayor de edad' o 'Menor de edad' según corresponda.

const edadPersona = 15

if (edadPersona >= 18) {
  console.log('Mayor de edad')
} else {
  console.log('Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

