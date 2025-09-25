import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Necklaces from "./components/Necklaces";
import Earrings from "./components/Earings";
import Bracelets from "./components/Bracelets";
import Rings from './components/Rings'
import BestSellers from "./components/BestSellers";
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/contacts" element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
