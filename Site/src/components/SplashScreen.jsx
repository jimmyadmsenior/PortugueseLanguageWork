import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SplashScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showMembers, setShowMembers] = useState(false)

  const members = ['Jimmy', 'Diego', 'Victor Q.', 'Victor M.']

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 800)
    const timer2 = setTimeout(() => setCurrentStep(2), 2000)
    const timer3 = setTimeout(() => setShowMembers(true), 3200)
    const timer4 = setTimeout(() => setCurrentStep(3), 5500)
    const timer5 = setTimeout(() => onComplete(), 6500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="splash-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="splash-background">
          <div className="particle-system">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="particle"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          <motion.div className="splash-content">
            <motion.div
              className="logo-container"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <motion.span 
                className="logo-icon"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✊
              </motion.span>
            </motion.div>

            <motion.h1
              className="splash-title"
              initial={{ y: 50, opacity: 0 }}
              animate={currentStep >= 1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.span
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  background: 'linear-gradient(90deg, #000, #666, #000, #666)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Preconceito Racial
              </motion.span>
            </motion.h1>

            <motion.div
              className="subtitle"
              initial={{ y: 30, opacity: 0 }}
              animate={currentStep >= 2 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              no Brasil
            </motion.div>

            <AnimatePresence>
              {showMembers && (
                <motion.div
                  className="members-container"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.p className="members-label">Apresentado por:</motion.p>
                  <div className="members-list">
                    {members.map((member, index) => (
                      <motion.span
                        key={member}
                        className="member-name"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        {member}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="splash-progress"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SplashScreen