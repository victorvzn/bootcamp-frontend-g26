import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router'

import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import CharacterPage from './pages/CharacterPage.jsx'
import LayoutBase from './layouts/LayoutBase.jsx'

// TODO: 01 - Renderizar en la ruta home los personajes del api de Dragonball (https://web.dragonball-api.com/). El resultado debe mostrarse en una grilla de 3x3

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <Routes>
      <Route element={<LayoutBase />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/characters/:id' element={<CharacterPage />} />
      </Route>

      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  
  </BrowserRouter>
)
