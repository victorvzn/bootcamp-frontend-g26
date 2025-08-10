import { Link, Outlet } from "react-router"

const LayoutBase = () => {
  return (
    <>
      <header className="bg-yellow-300 p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold">React router</h1>

          <nav className="flex gap-4">
            <Link to='/'>Home</Link>
            <Link to='/login'>Logout</Link>
          </nav>
        </div>
      </header> 

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutBase