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

  // TODO: 04 - Añadir el elemento checkbox al elemento li

  // 01 - Añadir el elemento li al elemento con la clase task__list
  const li = document.createElement('li')
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
})