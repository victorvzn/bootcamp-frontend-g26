const taskInput = document.querySelector('.task__input')
const taskButtonClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

// console.log({ taskInput, taskButtonClear, taskList })

// Localstorage

// Escritura LS
localStorage.setItem('frutas', 'manzana, pera, plátano')
localStorage.setItem('colores', ['rojo', 'verde', 'amarillo'])
localStorage.setItem('persona', { edad: 38 }) // [object Object]
localStorage.setItem('unNumero', 24)
localStorage.setItem('curso', JSON.stringify({ name: 'Algoritmos', nota: 19 })) // ✅

// Lectura LS
console.log(localStorage.getItem('nombre'))
console.log(localStorage.getItem('frutas'))
console.log(localStorage.getItem('persona'))
console.log(typeof localStorage.getItem('unNumero'))
console.log(localStorage.getItem('unNumero'))
console.log(JSON.parse(localStorage.getItem('curso'))) // ✅

// Que pasa si no exite la clave?
console.log(localStorage.getItem('keyQueNoExiste')) // null

// Eliminar LS
localStorage.removeItem('persona')

let tasks = JSON.parse(localStorage.getItem('tasks')) ?? []

// let tasks = [
  // {
  //   id: 'tarea-1',
  //   title: 'Estudiar Javascript',
  //   completed: true
  // },
  // {
  //   id: 'tarea-2',
  //   title: 'Salir algún dia al receso',
  //   completed: true
  // },
  // {
  //   id: 'tarea-3',
  //   title: 'Resolver el reto de la semana',
  //   completed: false
  // },
// ]

function saveTasksInLocaStorage(tasks = []) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function renderTasks(tasks = []) {
  let list = ''

  tasks.forEach(task => {
    // console.log(task)
    // list = list + '<li>' + task.title + '</li>'
    list = list + `
      <li class="flex justify-center items-center gap-4 py-1">
        <input
          type="checkbox"
          ${task.completed ? 'checked' : ''}
          data-id="${task.id}"
        />
        <div
          class="w-full ${task.completed ? 'line-through' : '' }"
        >
          ${task.title}
        </div>
        <div class="flex gap-2">
          <button
            class="task-item__edit border border-green-700 font-medium text-sm p-1 px-3 text-green-900 hover:text-white hover:bg-green-700 duration-300 rounded-lg"
          >
            ✏
          </button>
          <button
            class="task-item__remove border border-red-700 font-medium text-sm p-1 px-3 text-red-900 hover:text-white hover:bg-red-700 duration-300 rounded-lg"
            data-id="${task.id}"
          >
            ❌
          </button>
        </div>
      </li>
    `
  })

  taskList.innerHTML = list
}

// 01 - Al presionar enter en la caja de texto debemos agregar una nueva tarea a la lista.
taskInput.addEventListener('keydown', (event) => {
  // console.log(event.key)

  const { value } = event.target

  if (event.key === 'Enter') {
    console.log('Estamos agregando una nueva tarea', value)

    const newTask = {
      id: crypto.randomUUID(),
      title: value,
      completed: false
    }

    console.log(newTask)

    tasks.push(newTask)

    console.log(tasks)

    // Agregar la tarea en la lista
    renderTasks(tasks)

    taskInput.value = ''

    saveTasksInLocaStorage(tasks)
  }
})

taskList.addEventListener('click', (event) => {
  const { target } = event

  if(target.tagName === 'BUTTON' && target.classList.contains('task-item__remove')) {
    console.log('eliminando tarea...')
    console.log(target.dataset)

    const { id } = target.dataset // id a remover de la lista 'tasks'

    tasks = tasks.filter(task => task.id !== id )

    renderTasks(tasks)

    saveTasksInLocaStorage(tasks)
  }

  if(target.tagName === 'INPUT' && target.type === 'checkbox') {
    // console.log('COmpletando la tarea....')
    const { id } = target.dataset

    const taskSelectedIndex = tasks.findIndex(task => {
      return task.id === id
    })

    tasks[taskSelectedIndex] = {
      ...tasks[taskSelectedIndex],
      completed: !tasks[taskSelectedIndex].completed
    }

    console.log(tasks)

    renderTasks(tasks)

    saveTasksInLocaStorage(tasks)
  }
})

// TODO: Al hacer click en el botón 'Limpiar tareas completadas' debemos remover todas las tareas completadas. Hay que llamar al método render también.

taskButtonClear.addEventListener('click', (event) => {
  const incompletedTasks = tasks.filter(task => {
    return task.completed === false
  })

  tasks = incompletedTasks

  renderTasks(tasks)

  saveTasksInLocaStorage(tasks)
})

renderTasks(tasks)