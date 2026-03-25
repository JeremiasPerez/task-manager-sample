import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Gestor from './components/Gestor.jsx'
import Login from './components/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Gestor></Gestor>*/}
      <Login></Login>
    </>
  )
}

export default App
