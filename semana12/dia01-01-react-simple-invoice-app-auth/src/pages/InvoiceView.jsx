import { useEffect, useState } from "react"
import { Link } from "react-router"

import { useParams } from "react-router"

const InvoiceView = () => {
  const { id } = useParams()

  const [invoice, setInvoice] = useState()

  // http://localhost:5173/v1/3bd3285e-9511-4cf4-b956-47c6715934a8.json

  useEffect(() => {
    fetch('http://localhost:5173/v1/3bd3285e-9511-4cf4-b956-47c6715934a8.json')
      .then(response => response.json())
      .then(data => setInvoice(data))
  }, [])

  return (
    <>
      <section
        className="md:w-[740px] px-2 mx-auto flex flex-col gap-5 "
      >
        <div>
          <Link to='/invoices/list'>
            Go back
          </Link>
        </div>

        <div className="py-4 flex justify-between items-center">
          <div className="flex gap-2">
            <strong>Status</strong>

            <span>{invoice?.status}</span> 
          </div>

          <div className="flex gap-2">
            <Link to={`/invoices/${id}/edit`}>
              <button className="bg-slate-400 hover:bg-slate-500 duration-300 rounded-full px-5 py-4 font-semibold min-w-[100px] text-white cursor-pointer">
              Edit
            </button>
            </Link>

            <button className="bg-red-400 hover:bg-red-500 duration-300 rounded-full px-5 py-4 font-semibold min-w-[100px] text-white cursor-pointer">
              Delete
            </button>

            <button className="bg-indigo-400 hover:bg-indigo-500 duration-300 rounded-full px-5 py-4 font-semibold min-w-[100px] text-white cursor-pointer">
              Mark as Paid
            </button>
          </div>
        </div>
      </section>

      <pre>{JSON.stringify(invoice, null, 2)}</pre>
    </>
  )
}

export default InvoiceView