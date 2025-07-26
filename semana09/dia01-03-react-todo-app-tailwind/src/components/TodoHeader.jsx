export const TodoHeader = ({ title }) => {
  // props => { title: 'Todo App ...' }

  return (
    <header>
      <h1 className="text-xl font-bold underline text-center">
        {title}
      </h1>
    </header>
  )
}