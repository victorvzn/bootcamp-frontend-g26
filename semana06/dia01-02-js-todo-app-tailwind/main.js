const taskInput = document.getElementById('taskInput')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

// console.log({ taskInput, taskAdd, taskList })

// EVENTOS
// ELEMENTO.addEventListener(NOMBRE_EVENTO, CALLBACK)

taskAdd.addEventListener('click', function(event) {
  // Esta función se ejecutará cuando hagamos click en el botón 'Añadir tarea'
  console.log('Click!', taskInput.value)

  // MANEJO DEL DOM: Es una forma de crear elementos dinámicamente con el DOM de JS
  // const button = document.createElement('button')
  // button.textContent = 'Hola soy un botón!'
  // document.body.appendChild(button)

  // TODO: Valida la entrada del usuario para que no agregue tareas vacías

  // 01 - Añadir el elemento li al elemento con la clase task__list
  const li = document.createElement('li')

  // TODO: 04 - Añadir el elemento checkbox al elemento li
  const inputCheckbox = document.createElement('input')
  inputCheckbox.setAttribute('type', 'checkbox')
  li.appendChild(inputCheckbox)

  // 02 - Añadir el elemento span al elemento li
  const span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)

  // 03 - Añadir el elemento button al elemento li
  const button = document.createElement('button')
  button.textContent = 'Borrar'
  li.appendChild(button)

  console.log(li)

  taskList.appendChild(li)

  taskInput.value = ''
})

// TODO: Permitir al botón borrar remover una tarea de la lista
// 1. Añadir el evento click al botón de la lista
// 2. Eliminar el elemento li que tiene el botón borrar

taskList.addEventListener('click', function(event) {
  // const target = event.target
  const { target } = event // En target obtenemos el elemento presionado

  if (target.tagName === 'BUTTON') {
    console.log('Eliminando tarea...', target.parentElement)

    target.parentElement.remove()
  }

  // TODO: Al hacer click en el checkbox el texto de la tarea debe tacharse.
  // Ayuda CSS: "text-decoration: line-through;"
  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    // Aquí target sería el checbox seleccionado
    target.classList.toggle('completed') // toggle hace un intercambio de la clase completed
  }
})