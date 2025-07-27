import { useState } from "react"
import { TodoHeader } from "./components/TodoHeader"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"

export default function App() {
  const DEFAULT_TODOS = [
    {
      id: '1',
      title: 'Aprender Javascript',
      completed: true
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: false
    },
    {
      id: '3',
      title: 'Aprender React.js + TailwindCSS',
      completed: true
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)

  const handleSubmit = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleRemoveTodo = (id) => {
    console.log('Eliminando todo', id)

    const updateTodos = todos.filter(todo => todo.id !== id)

    setTodos(updateTodos)
  }

  const handleCompleted = (id) => {
    console.log('Completando tarea:', id)

    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }

      return todo // Dejamos el objeto sin modificaciones
    })

    console.log(updatedTodos)

    setTodos(updatedTodos)
  }

  return (
    <main
      className="bg-yellow-100 w-[400px] mx-auto mt-10 border border-yellow-400 rounded-lg shadow-md p-4"
    >
      <TodoHeader title='Todo App + React + Tailwind' />

      <TodoForm onSubmit={handleSubmit} />

      {/* TODO: Llenar los datos de las estadisticas y limpiar las tareas completadas con el botón */}

      <section className="flex justify-between items-center">
        <span className="font-bold">
          2 de 3
        </span>

        <button
          className="bg-blue-500 text-white rounded-lg px-3 py-1 hover:bg-blue-700 duration-300 cursor-pointer"
        >
          Limpiar completadas
        </button>
      </section>

      <TodoList
        todos={todos}
        onRemoveTodo={handleRemoveTodo}
        onCompleted={handleCompleted}
      />

      <pre className="mt-4 border border-slate-400 p-2">{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}
