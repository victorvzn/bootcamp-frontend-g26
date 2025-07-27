export const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    <ul className="flex flex-col gap-2 mt-4">
      {todos.map(todo => {
        return (
          <li 
            key={todo.id}
            className="flex gap-2 bg-yellow-200 p-2 rounded-lg"
          >
            <div className="w-full flex justify-between items-center gap-2">
              <span
                className="font-medium w-full p-1"
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