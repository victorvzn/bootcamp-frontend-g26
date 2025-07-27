export const TodoList = ({ todos, onRemoveTodo, onCompleted }) => {
  // TODO: Agregar un checkbox en cada fila y cambiar el estado de cada todo en su key completed
  // TODO: Y además debemos tachar el texto si la tarea está completada

  // TODO: Editar el título de la tarea haciendo doble click en el título, esto hará que aparezca una caja de texto. Y para guardarlo solo debemos presionar enter en la caja de texto y actualizamos el estados todos.

  return (
    <ul className="flex flex-col gap-2 mt-4">
      {todos.map(todo => {
        return (
          <li 
            key={todo.id}
            className="flex gap-2 bg-yellow-200 p-2 rounded-lg"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onCompleted(todo.id)}
            />
            <div className="w-full flex justify-between items-center gap-2">
              <span
                className={`font-medium w-full p-1 ${todo.completed ? 'line-through' : '' }`}
              >
                {todo.title}
              </span>

              <button
                className="bg-red-300 rounded-lg px-2 py-1 cursor-pointer"
                onClick={() => onRemoveTodo(todo.id)}
              >
                ❌
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}