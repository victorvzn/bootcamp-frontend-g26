import { useState } from "react"

const useCounter = () => {
  const  [count, setCount] = useState(0)

  const decrement = () => setCount(count - 1)

  const increment = () => setCount(count + 1)

  return {
    count,
    decrement,
    increment
  }
}

const Counter = () => {
  const { count, decrement, increment } = useCounter()
  
  return (
    <div className="flex flex-col gap-2 border p-2">
      <h3 className="font-semibold">Counter</h3>

      <div className="flex gap-4 items-center">
        <button className="px-4 py-2 bg-amber-300" onClick={decrement}>-</button>
        <strong className="text-2xl">{count}</strong>
        <button className="px-4 py-2 bg-amber-300" onClick={increment}>+</button>
      </div>
    </div>
  )
}

// ANTES DE USAR CUSTOM HOOKS

// const Counter = () => {
//   const  [count, setCount] = useState(0)
  
//   return (
//     <div className="flex flex-col gap-2 border p-2">
//       <h3 className="font-semibold">Counter</h3>

//       <div className="flex gap-4 items-center">
//         <button className="px-4 py-2 bg-amber-300" onClick={() => setCount(count - 1)}>-</button>
//         <strong className="text-2xl">{count}</strong>
//         <button className="px-4 py-2 bg-amber-300" onClick={() => setCount(count + 1)}>+</button>
//       </div>
//     </div>
//   )
// }

const App = () => {
  return (
    <>
      <h1>Custom hooks</h1>

      <Counter />
    </>
  )
}

export default App