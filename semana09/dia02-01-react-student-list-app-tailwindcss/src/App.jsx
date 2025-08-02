import { useEffect, useState } from "react"
import Avatar from 'boring-avatars'
import { TbEdit, TbTrash } from "react-icons/tb";

import { fetchStudents } from "./services/students"

export default function App() {

  const DEFAULT_FORM = {
    id: '',
    name: '',
    city: ''
  }

  const [students, setStudents] = useState([])
  const [form, setForm] = useState(DEFAULT_FORM)

  useEffect(() => {
    fetchStudents()
      .then(data => setStudents(data))
  }, []) // Este useEffect se ejecutará en el primer render

  const handleChange = (event) => {
    console.log({ target: event.target })

    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Creando estudiante...')
  }

  return (
    <main className="w-[420px] mx-auto rounded-lg mt-6 p-2">

      <h1 className="text-2xl font-semibold text-center mb-3">Student list - CRUD</h1>
    
      <form
        className="flex flex-col gap-3 bg-slate-300 p-3 rounded-lg shadow-lg"
        onSubmit={handleSubmit}      
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-700 text-sm rounded-lg py-2.5 px-2"
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
            required
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>
        <input
          className=" bg-blue-800 text-white hover:bg-blue-900 font-medium rounded-lg text-sm w-full py-2.5 cursor-pointer"
          type="submit"
          value="Save student"
        />

        form state: {JSON.stringify(form)}
      </form>

      <h1 className="text-xl font-semibold text-center mb-3 my-8">Student list</h1>
      {/* TODO: Mostrar la lista de estudiantes en una tabla o lista */}

      <section className="student__list flex flex-col gap-2 mt-2">
        {students.map(student => {
          return (
            <article key={student.id} className="student__row flex justify-between items-center bg-slate-100 p-2 rounded-lg border border-slate-200">
              <Avatar size={48} variant="beam" name={student.name} />
              <div className="text-left font-semibold">{student.name}</div>
              <div className="text-left">{student.city}</div>
              <div className="flex gap-4">
                <button
                  className="text-blue-400 cursor-pointer font-semibold"
                >
                  <TbEdit size={20} />
                </button>
                <button
                  className="text-red-400 cursor-pointer font-semibold"
                >
                  <TbTrash size={20} />
                </button>
              </div>
            </article>
          )
        })}
      </section>

      <pre  className="mt-8 border border-slate-300 p-3 rounded-lg bg-slate-50 overflow-y-auto">{JSON.stringify(students, null, 2)}</pre>
    </main>
  )
}
