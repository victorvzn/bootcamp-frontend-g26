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
