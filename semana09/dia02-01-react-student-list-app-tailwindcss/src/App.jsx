import { useEffect, useState } from "react"
import Avatar from 'boring-avatars'
import { TbEdit, TbTrash } from "react-icons/tb";
import Swal from 'sweetalert2'

import { createStudent, fetchStudents, removeStudent } from "./services/students"

export default function App() {

  const DEFAULT_FORM = {
    id: '',
    name: '',
    city: ''
  }

  const [students, setStudents] = useState([])
  const [form, setForm] = useState(DEFAULT_FORM)

  useEffect(() => {
    refreshStudents()
  }, []) // Este useEffect se ejecutará en el primer render

  const handleChange = (event) => {
    console.log({ target: event.target })

    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const refreshStudents = () => {
    fetchStudents()
      .then(data => setStudents(data))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const newStudent = {
      name: form.name,
      city: form.city
    }

    const response = await createStudent(newStudent)

    if (response) {
      console.log('Student has been created')

      refreshStudents()
    }

    setForm(DEFAULT_FORM)
  }

  const handleRemove = async (id) => {
    console.log('Eliminando student...')

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await removeStudent(id)

        if (response) {
          console.log('Student has been deleted')

          refreshStudents()
        }
      } else {
        console.log('El usuario cancelo la eliminación')
      }
    });
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
            value={form.name}
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
            value={form.city}
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
                  onClick={() => handleRemove(student.id)}
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
