import { useState } from "react"

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

  return (
    <main>
      <header>
        <h1>
          Todo App
        </h1>
      </header>


      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}
