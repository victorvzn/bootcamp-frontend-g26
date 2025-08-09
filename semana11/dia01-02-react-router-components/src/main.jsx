import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  
  </BrowserRouter>
)
