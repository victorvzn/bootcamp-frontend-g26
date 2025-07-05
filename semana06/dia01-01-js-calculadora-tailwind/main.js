let numeroActual = '0'
let operador = '' // + - *
let operando = '' // Cualquier número. Ejemplo: 9

const elInputDisplay = document.querySelector('.inputDisplay')
const elButtons = document.querySelectorAll('button') // Devuelve un array

// console.log({ elInputDisplay }) // El objeto del elemento input
// elInputDisplay.value = '999'
// console.log({ elButtons })

// for(let i = 0; i < elButtons.length; i++) {
//   console.log(elButtons[i])
// }

elButtons.forEach(function(button, index) {
  // console.log(index, {button})

  button.addEventListener('click', function(event) {
    // console.log('Hice click!', event, { target: event.target })
    const buttonText = event.target.textContent

    // console.log(buttonText)

    // TODO: Añadir la lógica de la calculadora

    // 1. Evaluamos cuando hacemos click en un operador(+, -, *)
    if ('+-*'.includes(buttonText)) {
      console.log('OPERADOR')
      operador = buttonText
      operando = Number(numeroActual)
      numeroActual = '0'
    // 3. Evaluamos el botón '='
    } else if (buttonText === '=') {
      console.log('IGUAL')
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    // 4. Evaluamos el botón 'CE' y limpiamos operando, operadores y el input
    } else if (buttonText === 'CE') {
      console.log('CE')
      numeroActual = '0'
      operador = ''
      operando = ''
    // 2. Evaluamos cuando se presiona algún número
    } else {
      console.log(buttonText)
      numeroActual = Number(numeroActual + buttonText)
    }

    elInputDisplay.value = numeroActual
   })
})