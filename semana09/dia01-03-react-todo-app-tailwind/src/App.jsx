import { useState } from "react"
import { TodoHeader } from "./components/TodoHeader"
import { TodoList } from "./components/TodoList"

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

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('Agregando tareas...')
  }

  return (
    <main
      className="bg-yellow-100 w-[400px] mx-auto mt-10 border border-yellow-400 rounded-lg shadow-md p-4"
    >
      <TodoHeader title='Todo App + React + Tailwind' />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="¿Qué deseas hacer hoy?"
          required
          className="border w-full border-yellow-400 my-3 px-2 py-3 rounded-lg"
        />
      </form>

      <TodoList todos={todos} />

      <pre className="mt-4 border border-slate-400 p-2">{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}
