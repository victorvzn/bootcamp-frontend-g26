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
    
      <form></form>

      <pre  className="mt-8 border border-slate-300 p-3 rounded-lg bg-slate-50 overflow-y-auto">{JSON.stringify(students, null, 2)}</pre>
    </main>
  )
}
