import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    
  <>
  <Navbar/>
    <Home/>
    <Footer/>
  </>
    
    
  )
}

export default App
