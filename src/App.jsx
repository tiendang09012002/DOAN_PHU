import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/User/Home'
import Header from './shared/Header'
import Footer from './shared/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
