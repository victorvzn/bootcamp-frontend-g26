import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes }  from 'react-router'

import InvoiceList from './pages/InvoiceList'
import InvoiceNew from './pages/InvoiceNew'
import InvoiceView from './pages/InvoiceView'
import InvoiceEdit from './pages/InvoiceEdit'

import LayoutBase from './layouts/LayoutBase'
import LayoutAuth from './layouts/LayoutAuth'

import LoginPage from './pages/LoginPage'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route element={<LayoutBase />}>
        <Route path='/' element={<LoginPage />} />
      </Route>

      <Route element={<LayoutAuth />}>
        <Route path='invoices'>
          <Route path='list' element={<InvoiceList />} />
          <Route path='new' element={<InvoiceNew />} />
          <Route path=':id' element={<InvoiceView />} />
          <Route path=':id/edit' element={<InvoiceEdit />} />
        </Route>
      </Route>

    </Routes>
  </BrowserRouter>,
)
