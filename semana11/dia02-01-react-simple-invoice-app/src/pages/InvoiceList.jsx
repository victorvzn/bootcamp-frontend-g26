import { Link } from "react-router"

const InvoiceList = () => {
  return (
    <header className="md:w-[740px] mx-auto flex justify-between items-center py-4 mb-4">
      <div className="text-zinc-800">
        <h1 className="text-4xl font-extrabold">
          Invoices
        </h1>
        <span>There are <strong>0</strong> total invoices</span>
      </div>

      <Link to='/invoices/new'>
        <button className="bg-indigo-400 hover:bg-indigo-500 duration-300 rounded-full px-5 py-4 font-semibold min-w-[100px] text-white cursor-pointer">
          New invoice
        </button>
      </Link>
    </header>
  )
}

export default InvoiceList