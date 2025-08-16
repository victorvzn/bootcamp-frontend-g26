import { Link, Outlet } from "react-router"

const LayoutBase = () => {
  return (
    <>
      <header className="py-4 px-6 bg-blue-300">
        <div className="container mx-auto flex justify-between">
          <Link to='/'>
            <h1 className="font-bold">Invoice app - LOGIN</h1>
          </Link>
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

export default LayoutBase