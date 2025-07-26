export const TodoList = ({ todos }) => {
  return (
    <ul className="flex flex-col gap-2 mt-4">
      {todos.map(todo => {
        return (
          <li 
            key={todo.id}
            className="flex gap-2 bg-yellow-200 p-2 rounded-lg"
          >
            {todo.title}
          </li>
        )
      })}
    </ul>
  )
}