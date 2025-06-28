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

