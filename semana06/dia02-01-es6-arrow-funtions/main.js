// FUNCIONES por declaración

// Funciones sin parámetros

function nombreDeLaFuncion() { // Estamos declarando la función
  console.log('Hola a todos!')
}

nombreDeLaFuncion() // Ejecutamos la función

// Funciones con parámetros por defecto con retorno y en múltiples líneas

function calcularSiEsMayorDe18(edad = 1) {
  if (edad > 18) {
    return 'Es mayor de edad'
  } else {
    return 'Es menor de edad'
  }
}

console.log(calcularSiEsMayorDe18())
console.log(calcularSiEsMayorDe18(25))

// ARROW FUNCTION (funciones flecha)  =>

// Arrow function sin parámetros en un línea

  const imprimirSaludo = () => console.log('Hola a todos!')

  imprimirSaludo()

// Arrow function con parámetros en un línea y con retorno implicito

const suma = (numero1, numero2) => numero1 + numero2

console.log(suma(2, 5))

// Arrow function con parámetros y retorno en múltiples líneas

const saludoEnMayusculas = (nombre) => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayusculas + '!'
}

console.log(saludoEnMayusculas('Jose'))

// Arrow function con parámetros por defecto con retorno y en múltiples líneas

const otroSaludoEnMayusculas = (nombre='Anónimo') => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayusculas + '!'
}

console.log(otroSaludoEnMayusculas())
console.log(otroSaludoEnMayusculas('Jose'))

// Template Strings

const nombre = 'Victor'
const edad = 39
const stack = 'Javascript'
const saludo = 'Hola soy, ' + nombre + '! Tengo ' + edad + ' años. Y mi stack es ' + stack

console.log(saludo)

const saludo2 = `Hola soy,
${nombre}! Tengo ${edad} años.
Y mi stack es ${stack}`

console.log(saludo2)

// Otros ejemplos

const a = 5
const b = 3
console.log(`La suma de ${a} + ${b} es ${a + b}`) // "La suma de 5 + 3 es 8"

const gritar = texto => texto.toUpperCase()
console.log(`¡${gritar('hola')}!`) // ¡HOLA!

const producto = 'laptop'
const precio = 1200
console.log(`El producto es ${producto} y cuesta $${precio}`)
