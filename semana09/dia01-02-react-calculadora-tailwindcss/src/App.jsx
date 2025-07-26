export default function App() {
  return (
    <main className="bg-blue-400 w-[340px] my-0 mx-auto mt-5 p-4 rounded-md shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">
        Calculador + React.js
      </h1>

      <section className="flex flex-col gap-2">
        <input
          type="text"
          className="border p-2 text-right text-2xl font-bold rounded-md"
          value="0"
          readOnly
        />

        <div className="grid grid-cols-3 gap-3">
          <button className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300">
            +
          </button>
          <button className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300">
            -
          </button>
          <button className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300">
            *
          </button>

          <button className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300">
            7
          </button>
          <button className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300">
            8
          </button>
          <button className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300">
            9
          </button>
          <button className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300">
            4
          </button>
          <button className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300">
            5
          </button>
          <button className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300">
            6
          </button>
          <button className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300">
            1
          </button>
          <button className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300">
            2
          </button>
          <button className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300">
            3
          </button>
          <button className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300">
            0
          </button>

          <button className="button bg-green-400 p-2 rounded-md hover:bg-green-500 duration-300">
            AC
          </button>
          <button className="button bg-green-400 p-2 rounded-md hover:bg-green-500 duration-300">
            =
          </button>
        </div>
      </section>
    </main>
  )
}
