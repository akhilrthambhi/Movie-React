import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

// import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <br />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Add/>}></Route>

    </Routes>
    
    </>
  )
}

export default App
