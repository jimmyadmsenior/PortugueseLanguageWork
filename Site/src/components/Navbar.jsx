import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { path: '/', label: 'Início', icon: '🏠' },
    { path: '/definicao', label: 'Definição', icon: '📖' },
    { path: '/especialista', label: 'Especialista', icon: '👨‍🎓' },
    { path: '/direitos', label: 'Direitos', icon: '⚖️' },
    { path: '/literatura', label: 'Literatura', icon: '📚' },
    { path: '/questoes', label: 'Questões', icon: '❓' },
    { path: '/enem', label: 'ENEM', icon: '🎯' }
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">✊</span>
          <span className="logo-text">Preconceito Racial no Brasil</span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar