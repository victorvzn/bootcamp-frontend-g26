import { useEffect, useState } from "react"

import Header from "../components/invoice-list-page/Header"
import { Link } from "react-router"

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    fetch('http://localhost:5173/v1/invoices.json')
      .then(response => response.json())
      .then(data => setInvoices(data))
  }, [])

  return (
    <>
      <Header title='Invoices' invoices={invoices.length} />

      <section
        className="md:w-[740px] px-2 mx-auto flex flex-col gap-5 "
      >
        {invoices.map(invoice => {
          return (
            <article
              key={invoice.id}
              className="border rounded px-4 py-4 text-base shadow md:flex grid grid-col-2 justify-between items-center gap-3"
            >
              <div>
                #{invoice.code}
              </div>
              <div>
                {invoice.date}
              </div>
              <div>
                {invoice.fullName}
              </div>
              <div>
                {invoice.currencySymbol}
                {invoice.total}
              </div>
              <div>
                {invoice.status}
              </div>
              <div>
                <Link to={`/invoices/${invoice.id}`}>
                  ↗
                </Link>
              </div>
            </article>
          )
        })}

      </section>

      <pre className="mt-8 border p-4">{JSON.stringify(invoices, null, 2)}</pre>
    </>
  )
}

export default InvoiceList