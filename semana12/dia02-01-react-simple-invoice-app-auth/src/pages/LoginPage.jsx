import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router"

const LoginPage = () => {
  const { setAuth } = useAuth()

  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }
    
    const response = await fetch('https://dummyjson.com/auth/login', options)

    if (response.ok) {
      const data = await response.json()

      console.log(data)

      setAuth(data)

      navigate('/invoices/list')
    }
  }

  return (
    <main className="w-[400px] m-auto flex flex-col gap-5">
      <div className="bg-slate-600 p-8 rounded-lg flex flex-col gap-6">
        <h2 className="text-white text-center text-4xl font-bold">Invoice app</h2>

        <p className="text-white font-light text-center">Ingresa un nombre de usuario y password</p>

        <form onSubmit={handleLogin}>
          <label className="text-white flex flex-col gap-2 mb-4">
            <span>Username</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-slate-800"
              type="text"
              name="username"
              placeholder="jhondo@login.com"
              onChange={handleChange}
              value={form.username}
            />
          </label>
          <label className="text-white flex flex-col gap-2 mb-4">
            <span>Password</span>
            <input
              className="w-full py-4 px-5 rounded-lg bg-slate-800"
              type="password"
              name="password"
              placeholder="***************"
              onChange={handleChange}
              value={form.password}
            />
          </label>
          <button
            type="submit"
            className="rounded-full px-5 py-4 font-semibold min-w-[100px] w-full bg-blue-500 hover:bg-blue-600 duration-300 cursor-pointer"
          >
            Login
          </button>

          <pre>{JSON.stringify(form, null, 2)}</pre>
        </form>
      </div>
    </main>
  )
}

export default LoginPage