import { useState } from "react"
import { Link } from "react-router"
import Header from "../components/invoice-list-page/Header"

const InvoiceNew = () => {
  const INITIAL_INVOICE_FORM = {
    id: '',
    fullName: '',
    address: '',
    email: '',
    date: '',
    description: '',
    items: [
      { name: 'Item 1', qty: 1, price: 0, total: 0 },
      { name: 'Item 2', qty: 1, price: 0, total: 0 },
    ]
  }

  const [form, setForm] = useState(INITIAL_INVOICE_FORM)

  return (
    <section
        className="md:w-[740px] px-2 mx-auto flex flex-col gap-5 "
      >
        <div>
          <Link to='/invoices/list'>
            Go back
          </Link>
        </div>

        <Header title='New Invoice' />

        <form>
          <h4 className="text-zinc  -500 font-bold mb-5">Bill form</h4>

          {/* INPUT FULLNAME */}
          {/* INPUT ADDRESS */}
          {/* INPUT EMAIL */}

          <h4 className="text-zinc  -500 font-bold mb-5">Invoice info</h4>

          {/* INPUT DATE */}
          {/* INPUT DESCRIPTION */}

          <h4 className="text-zinc  -500 font-bold mb-5">Item list</h4>

          {/* INPUT NAME / QTY / TOTAL */}
          {/* INPUT NAME / QTY / TOTAL */}

          {/* BUTTON ADD NEW ITEM */}

        </form>
    </section>
  )
}

export default InvoiceNew