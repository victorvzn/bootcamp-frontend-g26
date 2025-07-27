import { useState } from "react"

export const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    // const form = document.forms['todo-form']
    console.log('Agregando tareas...', input)

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    // setTodos([...todos, newTodo])
    onSubmit(newTodo)

    setInput('')
  }

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <input
        // name="input"
        type="text"
        placeholder="¿Qué deseas hacer hoy?"
        required
        className="border w-full border-yellow-400 my-3 px-2 py-3 rounded-lg"
        onChange={(event) => setInput(event.target.value)}
        value={input}
      />
    </form>
  )
}