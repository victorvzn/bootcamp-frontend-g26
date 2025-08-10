import { useEffect, useState } from "react"

import Header from "../components/invoice-list-page/Header"

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    fetch('http://localhost:5173/v1/invoices.json')
      .then(response => response.json())
      .then(data => setInvoices(data))
  }, [])

  return (
    <>
      <Header title='Invoices' />

      <pre>{JSON.stringify(invoices, null, 2)}</pre>
    </>
  )
}

export default InvoiceList