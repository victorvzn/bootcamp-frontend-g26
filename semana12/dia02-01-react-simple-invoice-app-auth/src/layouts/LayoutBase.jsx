import { Link, Outlet } from "react-router"

const LayoutBase = () => {
  return (
    <>
      <header className="py-4 px-6 bg-amber-300">
        <div className="container mx-auto flex justify-between">
          <Link to='/'>
            <h1 className="font-bold">Invoice app</h1>
          </Link>

          <div className="font-medium">
            Other links
          </div>
        </div>

        <div className="mt-3 flex gap-3">
          <Link to='/invoices/list'>Invoices</Link>
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