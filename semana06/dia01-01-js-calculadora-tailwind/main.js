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

    console.log(buttonText)

    // TODO: Añadir la lógica de la calculadora

    
  })
})