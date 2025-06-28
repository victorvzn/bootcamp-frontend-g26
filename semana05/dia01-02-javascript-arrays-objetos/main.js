// console.log('Hola JS')

// TIPOS DE DATOS NO PRIMITIVOS

// ARRAYS

// Lista de datos ordenados. Un arreglo tiene elementos de cualquier tipo de dato: cadena, números, boolean, null, arrays, objetos, etc.

// DECLARARACIÓN

const arregloVacio = []
let listaDeNumeros = [25, 36, 89, 1560]
const listaDeValores = [1, 2 , 3, 'Victor', 'Villazón', true, null, undefined, [9, 6, 2]]

console.log(arregloVacio)
console.log(listaDeNumeros);
console.log(listaDeValores)

// Lectura de la elemento de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[4]) // Villazón
console.log(listaDeValores[5]) // true
console.log(listaDeValores[99]) // undefined

// Escritura en un arreglo

console.log(listaDeValores)

listaDeValores[0] = 'Juan'
listaDeValores[3] = 9999

console.log(listaDeValores)

listaDeNumeros[0] = 'Hola'

console.log(listaDeNumeros)

// Insertar nuevos elementos en un arreglo al final

const listaDeNombres = ['Victor', 'Alessandro', 'Francesca', 'Yesica']

console.log(listaDeNombres)

listaDeNombres.push('Javascript')
listaDeNombres.push(1234)
listaDeNombres.push(false)
listaDeNombres.push([9, 8, 7])

console.log(listaDeNombres)

// Remover elementos del final del arreglo

listaDeNombres.pop()
listaDeNombres.pop()

console.log(listaDeNombres)

// Insertar un elemento en una posición determinada

listaDeNombres.splice(0, 0, 'Código')
listaDeNombres.splice(3, 0, 'Tecsup')

console.log(listaDeNombres)

// Eliminar un elemento en un posición determinada

listaDeNombres.splice(3, 1, 'hola') // Eliminamos el elemento en la posición 3 y insertamos el texto 'hola' al mismo tiempo

console.log(listaDeNombres)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length)
console.log('bienvenido'.length)

// Obtener el último elemento el arreglo

console.log(listaDeNombres[listaDeNombres.length - 1])
console.log(listaDeNombres.at(0))
console.log(listaDeNombres[0])
console.log(listaDeNombres.at(-2)) // Extrae el penúltimo elemento

// DOC: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// TODO: Otras funciones: slice (Investiguen)


// MÉTODOS DE ARREGLOS

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean (true o false)

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(languages.includes('java')) // true
console.log(languages.includes('cobol')) // false

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un boolean (true o false)

console.log('HOLA'.toLowerCase())

const resultado = languages.filter(
  function (item) {
    // return item === 'java'
    // return item === 'python'
    return item.toLowerCase().includes('c')
  }
)

console.log(resultado)

// Método MAP, evalue un arreglo y lo modifica y hay que pasarle una función

const nombresConTitulo = languages.map(function (language) {
  // return 'hola'
  return '*' + language + '*'
})

console.log(nombresConTitulo)
console.log(languages)

// Método SORT, nos ayuda a ordenar un arreglo de elementos. Muta el arreglo original.

const ordenandoLanguages = [...languages].sort() // Mutando el arreglo original

console.log(ordenandoLanguages)
console.log(languages)

// Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningun retorno de datos

const miArreglo = []

languages.forEach(function (language) {
  miArreglo.push('El mejor: ' + language)
})

console.log(miArreglo)

// Método REDUCE, nos ayuda a acumular los valores de un arreglo

const numeros = [3, 40, 100, 7, 50]

// Con un FOR
let suma = 0
for (let i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i]
}
console.log(suma)

// Con Reduce

const sumatoria = numeros.reduce(
  function(acumulador, valorActual) {
    return acumulador + valorActual
  },
  0
)

console.log(sumatoria)