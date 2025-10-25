import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Definition from './pages/Definition'
import Expert from './pages/Expert'
import Rights from './pages/Rights'
import Literature from './pages/Literature'
import Questions from './pages/Questions'
import Enem from './pages/Enem'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <motion.main 
          className="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/definicao" element={<Definition />} />
            <Route path="/especialista" element={<Expert />} />
            <Route path="/direitos" element={<Rights />} />
            <Route path="/literatura" element={<Literature />} />
            <Route path="/questoes" element={<Questions />} />
            <Route path="/enem" element={<Enem />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App
