// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { increment, decrement, incrementBy } from "../store/counter"

const Counter = () => {
  const counter = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div className="border rounded p-2 flex flex-col gap-2 items-center">
      <h3 className="font-bold">Counter with React</h3>

      <div className="flex items-center gap-2">
        <button
          className="bg-green-400 p-2 min-w-14 rounded font-bold cursor-pointer"
          onClick={() => dispatch(incrementBy(-5))}
        >
          -5
        </button>
        <button
          className="bg-green-400 p-2 min-w-14 rounded font-bold cursor-pointer"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <h1 className="bg-slate-200 p-2 min-w-14 rounded font-bold text-center">
          {counter}
        </h1>
        <button
          className="bg-green-400 p-2 min-w-14 rounded font-bold cursor-pointer"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="bg-green-400 p-2 min-w-14 rounded font-bold cursor-pointer"
          onClick={() => dispatch(incrementBy(5))}
        >
          +5
        </button>
      </div>
    </div>
  )
}

// Antes de usar redux usando useState

// const Counter = () => {
//   const [count, setCount] = useState(9)

//   return (
//     <div className="border rounded p-2 flex flex-col gap-2 items-center">
//       <h3 className="font-bold">Counter with React</h3>

//       <div className="flex items-center gap-2">
//         <button
//           className="bg-green-400 p-2 min-w-14 rounded font-bold cursor-pointer"
//           onClick={() => setCount(count - 1)}
//         >
//           -1
//         </button>
//         <h1 className="bg-slate-200 p-2 min-w-14 rounded font-bold text-center">
//           {count}
//         </h1>
//         <button
//           className="bg-green-400 p-2 min-w-14 rounded font-bold cursor-pointer"
//           onClick={() => setCount(count + 1)}
//         >
//           +1
//         </button>
//       </div>
//     </div>
//   )
// }

export default Counter