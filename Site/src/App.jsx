import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Definition from './pages/Definition'
import Expert from './pages/Expert'
import Rights from './pages/Rights'
import Literature from './pages/Literature'
import Questions from './pages/Questions'
import Enem from './pages/Enem'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation();
  const pageVariants = {
    initial: { opacity: 0, x: -100, scale: 0.9 },
    in: { opacity: 1, x: 0, scale: 1 },
    out: { opacity: 0, x: 100, scale: 1.1 }
  };
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="page-wrapper"
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
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  
  const handleSplashComplete = () => {
    setShowSplash(false);
  };
  return (
    <>
      <div className="parallax-bg" />
      <AnimatePresence mode="wait">
        {showSplash ? (
          <motion.div
            key="splash"
            className="splash-bg"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <SplashScreen onComplete={handleSplashComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
          <Router>
            <div className="App morphing-bg">
              {/* Advanced Background Effects */}
              <div className="advanced-bg-effects">
                <div className="floating-orbs">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`floating-orb orb-${i + 1}`}
                      animate={{
                        x: [0, 100, -100, 0],
                        y: [0, -100, 100, 0],
                        scale: [1, 1.2, 0.8, 1],
                        opacity: [0.3, 0.6, 0.2, 0.3]
                      }}
                      transition={{
                        duration: 15 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 1.5
                      }}
                    />
                  ))}
                </div>
              </div>
              <Navbar />
              <motion.main 
                className="main-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedRoutes />
              </motion.main>
            </div>
          </Router>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

// Removido export duplicado
