import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import GestorPage from './pages/GestorPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/" element={<GestorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
