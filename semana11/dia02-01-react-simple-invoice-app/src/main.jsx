import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes }  from 'react-router'

import InvoiceList from './pages/InvoiceList'
import LayoutBase from './layouts/LayoutBase'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route element={<LayoutBase />}>
        <Route path='/' element={<h1>Home Page</h1>} />

        <Route path='invoices'>
          <Route path='list' element={<InvoiceList />} />
        </Route>
      </Route>

    </Routes>
  </BrowserRouter>,
)
