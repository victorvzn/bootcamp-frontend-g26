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
    completed: false
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
    list = list + '<li>' + task.title + '</li>'
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

renderTasks(tasks)