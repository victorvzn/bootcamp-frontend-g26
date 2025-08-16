import { Link, Outlet } from "react-router"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router"

const LayoutAuth = () => {
  const navigate = useNavigate()

  const { logout, user } = useAuth()

  const handleLogout = () => {
    // borrar el LS, con la funcion logout del custom hook useAuth
    logout()
    // Redirigir al usuario al login
    navigate('/')
  }

  return (
    <>
      <header className="py-4 px-6 bg-amber-300">
        <div className="container mx-auto flex justify-between">
          <Link to='/'>
            <h1 className="font-bold">Invoice app - ADMIN</h1>
          </Link>

          <div className="font-medium flex gap-2">
            <span>Bienvenid@ {user?.username}</span>
            <button
              className="text-red-500 font-medium"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mt-3 flex gap-3">
          <Link to='/invoices/list'>Invoices</Link>
          <Link to='/products'>Products</Link>
        </div>
      </header>

      <main className="my-6">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default LayoutAuth