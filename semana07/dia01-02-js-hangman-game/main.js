// TODO: Resolver el siguiente juego

const elMaskedWord = document.querySelector('.hangman__maskedword')
const elButtons = document.querySelector('.hangman__buttons')
const elResult = document.querySelector('.hangman__results')
const elStartAgainButton = document.querySelector('.hangman__startagain')

const ANSWER_WORD = 'javascript'

const word = ANSWER_WORD.toUpperCase()

console.log(word)

let correctGuess = ''
let tries = 0

// Implementar una función para renderizar los botones con cada letra del alfabeto de la A a la Z

 // TODO: Reemplazar por una función que genere las letras de la A a la Z
const ALPHABET = Array.from({ length: 26 }, (el, index) => String.fromCharCode(65 + index))

const renderAlphabet = () => {
  let list = ''

  ALPHABET.forEach(letter => {
    let statusClass = ''
    
    const isInCorrectGuesses = correctGuess.includes(letter)
    const isInAnswerWord = word.includes(letter)

    if (isInCorrectGuesses && isInAnswerWord) {
      statusClass = 'bg-green-500 hover:bg-green-600'
    } else if (isInCorrectGuesses) {
      statusClass = 'bg-red-500 hover:bg-red-600 '
    }

    list += `
      <button
        class="p-2 bg-blue-500 text-white font-bold text-xl cursor-pointer hover:bg-blue-600 duration-300 rounded-md ${statusClass}"
        onclick="selectLetter('${letter}')"
      >
        ${letter}
      </button>
    `
  })

  elButtons.innerHTML = list
}

const selectLetter = (letter) => {
  tries++

  console.log({ letter })

  correctGuess += letter
  
  console.log('intentos', correctGuess)

  renderMaskedWord()

  renderAlphabet()
}

const renderMaskedWord = () => {
  elMaskedWord.textContent = word.split('').map(
    letter => correctGuess.includes(letter) ? letter : '_'
  )
  .join('')

  console.log({tries})

  // TODO: Si gana el juego hay que agregar la lógica de mostrar el div con el texto Ganaste y sino mostraremos que perdio el juego.
  
}

renderAlphabet()