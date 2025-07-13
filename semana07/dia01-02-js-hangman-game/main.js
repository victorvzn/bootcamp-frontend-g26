// TODO: Resolver el siguiente juego

const elMaskedWord = document.querySelector('.hangman__maskedword')
const elButtons = document.querySelector('.hangman__buttons')
const elResult = document.querySelector('.hangman__results')
const elStartAgainButton = document.querySelector('.hangman__startagain')

const ANSWER_WORD = 'javascript'

const word = ANSWER_WORD.toUpperCase()

console.log(word)

// Implementar una función para renderizar los botones con cada letra del alfabeto de la A a la Z

const ALPHABET = ['A', 'B', 'C', '...', 'Z'] // TODO: Reemplazar por una función que genere las letras de la A a la Z

const renderAlphabet = () => {
  let list = ''

  ALPHABET.forEach(letter => {
    list += `
      <button class="p-2 bg-blue-500 text-white font-bold text-xl cursor-pointer hover:bg-blue-600 duration-300 rounded-md">
        ${letter}
      </button>
    `
  })

  elButtons.innerHTML = list
}

renderAlphabet()