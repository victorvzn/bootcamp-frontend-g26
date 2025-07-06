const taskInput = document.querySelector('.task__input')
const taskButtonClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

// console.log({ taskInput, taskButtonClear, taskList })

const tasks = [
  {
    id: 'tarea-1',
    title: 'Estudiar Javascript',
    completed: true
  },
  {
    id: 'tarea-2',
    title: 'Salir algún dia al receso',
    completed: true
  },
  {
    id: 'tarea-3',
    title: 'Resolver el reto de la semana',
    completed: false
  },
]

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
        />
        <div class="w-full">
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
  }
})

taskList.addEventListener('click', (event) => {
  const { target } = event

  if(target.tagName === 'BUTTON') {
    console.log('eliminando tarea...')
  }
})

renderTasks(tasks)