import { useEffect, useState } from "react"

import { fetchStudents } from "./services/students"

export default function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetchStudents()
      .then(data => setStudents(data))
  }, []) // Este useEffect se ejecutará en el primer render

  return (
    <main className="w-96 mx-auto rounded-lg mt-6 p-4">

      <h1 className="text-2xl font-semibold text-center mb-3">Student list - CRUD</h1>
    
      <form className="flex flex-col gap-3 bg-slate-300 p-3 rounded-lg shadow-lg">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg py-2.5 px-2"
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">City</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg py-2.5 px-2"
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
            required
          />
        </label>
        <input
          className=" bg-blue-800 text-white hover:bg-blue-900 font-medium rounded-lg text-sm w-full py-2.5 cursor-pointer"
          type="button"
          value="Save student"
        />
      </form>

      <h1 className="text-xl font-semibold text-center mb-3 my-8">Student list</h1>

      <section className="student__list flex flex-col gap-2 mt-2">
        <article className="student__row flex justify-between items-center bg-slate-100 p-2 rounded-lg border border-slate-200">
          <div>Avatar</div>
          <div className="text-left font-semibold">NAME</div>
          <div className="text-left">CITY</div>
          <div className="flex gap-4">
            <button
              className="text-blue-400 cursor-pointer font-semibold"
            >
              EDIT
            </button>
            <button
              className="text-red-400 cursor-pointer font-semibold"
            >
              DELETE
            </button>
          </div>
        </article>
      </section>

      <pre  className="mt-8 border border-slate-300 p-3 rounded-lg bg-slate-50 overflow-y-auto">{JSON.stringify(students, null, 2)}</pre>
    </main>
  )
}
