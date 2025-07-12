const questions = [
  {
    id: 1111,
    order: 1,
    question: '¿Cómo se llama el método en JS que se utiliza para imprimir mensajes en la consola?',
    correctAnswer: 1,
    answerList: ['print()', 'console.log()', 'display()']
  },
  {
    id: 2222,
    order: 2,
    question: '¿Cuál es el operador utilizado para comparar el valor y el tipo de dos variables en JS?',
    correctAnswer: 2,
    answerList: ['==', '=', '===']
  },
  {
    id: 3333,
    order: 3,
    question: '¿Cuál es la función en JS que se utiliza para redondear hacia abajo el valor de un número decimal?',
    correctAnswer: 0,
    answerList: ['floor()', 'ceil()', 'round()']
  },
  {
    id: 4444,
    order: 4,
    question: '¿Qué tipo de valor devuelve el operador typeof null en JavaScript?',
    correctAnswer: 1,
    answerList: ['null', 'object', 'undefined']
  }
]

let currentQuestionIndex = 0
let correctAnswerCounter = 0 // Contador

const questionsAndResults = document.querySelector('#questionsAndResults')

function renderQuestions() {
  const currentQuestion = questions[currentQuestionIndex]

  const questionTemplate = `
    <section class="flex flex-col mb-10">
      <p class="text-md font-medium text-gray-900 mb-4">
        ${currentQuestion.order}. ${currentQuestion.question}
      </p>

      <div class="flex flex-col items-start mb-10">
        <button
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full cursor-pointer"
          onclick="respondQuestion(event, 0)"
          data-answer="0"
        >
          ${currentQuestion.answerList[0]}
        </button>
        <button
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full cursor-pointer"
          onclick="respondQuestion(event, 1)"
          data-answer="1"
        >
          ${currentQuestion.answerList[1]}
        </button>
        <button
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full cursor-pointer"
          onclick="respondQuestion(event, 2)"
          data-answer="2"
        >
          ${currentQuestion.answerList[2]}
        </button>

        <button class="hidden text-white border border-red-700 bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full">
          Respuesta incorrecta
        </button>
        <button class="hidden text-white border border-green-700 bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full">
          Respuesta correcta
        </button>
      </div>

      <div class="flex items-center">
        <button
          class="hidden text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full cursor-pointer"
          onclick="prevQuestion(event)"
        >
          Anterior
        </button>
        <button
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full cursor-pointer"
          onclick="nextQuestion(event)"
        >
          Siguiente
        </button>
        <button
          class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full cursor-pointer"
          onclick="showResultPage(event)"
        >
          Resultados
        </button>
      </div>
    </section>
  `

  questionsAndResults.innerHTML = questionTemplate
}

function nextQuestion(event) {
  // TODO: Validar cuando no tenemos más preguntas por mostrar
  if (currentQuestionIndex >= questions.length - 1) {
    return
  }

  currentQuestionIndex = currentQuestionIndex + 1

  renderQuestions()
}

function prevQuestion(event) {
  // TODO: Validar cuando nos movemos a una pregunta anterior a la primera
  if (currentQuestionIndex <= 0) {
    return
  }

  currentQuestionIndex = currentQuestionIndex - 1

  renderQuestions()
}

function respondQuestion(event, questionSelected) {
  console.log({ questionSelected })

  const currentQuestion = questions[currentQuestionIndex]

  // Incrementar el número de respuestas correctas
  if(questionSelected === currentQuestion.correctAnswer) {
    correctAnswerCounter = correctAnswerCounter + 1
    // correctAnswerCounter++

    console.log(correctAnswerCounter)
  }

  const answerButtons = document.querySelectorAll('[data-answer]')

  answerButtons.forEach(button => {
    if (Number(button.dataset.answer) === currentQuestion.correctAnswer) {
      // button.classList.toggle('bg-green-600')
      button.className = 'text-white border border-green-600 bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full'
    } else {
      // button.classList.toggle('bg-red-600')
      button.className = 'text-white border border-red-600 bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full'
    }
    button.setAttribute('disabled', 'disabled')
  })

}

function showResultPage(event) {
  // TODO: Mostrar la pantalla de resultados con los datos respectivos
}

renderQuestions()