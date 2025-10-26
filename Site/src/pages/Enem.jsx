import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Enem = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const correctAnswer = 'C'
  
  const answers = [
    {
      id: 'A',
      text: 'a segregação espacial é resultado de escolhas individuais dos grupos sociais.',
      explanation: 'Incorreta. A segregação espacial não resulta de escolhas individuais, mas de processos históricos de exclusão e discriminação sistemática que limitam o acesso de grupos racializados a determinados espaços urbanos.'
    },
    {
      id: 'B', 
      text: 'a desigualdade social brasileira está dissociada de questões étnico-raciais.',
      explanation: 'Incorreta. O texto evidencia justamente o contrário: a forte relação entre desigualdade social e questões étnico-raciais, como demonstram os dados sobre população carcerária, acesso universitário e distribuição de terras.'
    },
    {
      id: 'C',
      text: 'as hierarquias raciais no Brasil reproduzem e aprofundam desigualdades sociais.',
      explanation: 'Correta! O texto demonstra claramente como as hierarquias raciais (negros na população carcerária, índios nas piores terras, pobres nas piores condições) reproduzem e aprofundam as desigualdades sociais existentes.'
    },
    {
      id: 'D',
      text: 'o preconceito racial é uma questão superada pela modernização urbana.',
      explanation: 'Incorreta. O texto mostra que o preconceito racial persiste mesmo com a modernização urbana, como evidenciado pela existência das favelas e pela manutenção das desigualdades raciais em contextos urbanos.'
    },
    {
      id: 'E',
      text: 'a distribuição de oportunidades no Brasil independe de fatores raciais.',
      explanation: 'Incorreta. O texto claramente indica que a distribuição de oportunidades está diretamente relacionada a fatores raciais, como mostra a diferença entre a presença de negros nas universidades versus na população carcerária.'
    }
  ]

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswer(answerId)
    setShowResult(false)
    setShowExplanation(false)
  }

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowResult(true)
      setTimeout(() => setShowExplanation(true), 1000)
    }
  }

  const resetQuiz = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setShowExplanation(false)
  }

  return (
    <motion.div
      className="page-container"
      style={{ background: '#ffffff', color: '#000000', padding: '2rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
      initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1, ease: "backOut" }}
    >
      <h1>🎯 Questão ENEM 2012 - Interativa</h1>
      
      <div className="quote" style={{ background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)', border: '4px solid #ff9800' }}>
        <h3 style={{ color: '#e65100' }}>📋 ENEM 2012 - Questão 1 (Caderno Azul)</h3>
        <p style={{ fontSize: '1rem', color: '#bf360c', fontStyle: 'italic' }}>
          <strong>Ciências Humanas e suas Tecnologias</strong>
        </p>
      </div>

      <h2>📖 Texto para Análise</h2>
      
      <div className="quote" style={{ background: '#f5f5f5', fontSize: '1.1rem', lineHeight: '1.8' }}>
        <p>
          "O brasileiro acha natural que existam favelas. Não há brasileiro que não ache natural. 
          Alguns ficam incomodados com o fato de que as favelas, vistas de helicóptero, são uma 
          vergonha. Uma vergonha nacional. Mas o que é visto de helicóptero não é vergonha, é o 
          que é visto no nível da rua. A favela é hoje uma realidade da sociedade brasileira, 
          talvez a sua maior realidade. <span className="highlight">Os negros são a maioria da 
          população carcerária e a minoria nas universidades. Aos índios estão destinadas as 
          piores terras. Aos pobres, as piores condições. E aos ricos, a impunidade.</span>"
        </p>
        <small><strong>JAGUARIBE, H.</strong> (Adaptado)</small>
      </div>

      <h2>❓ Questão</h2>
      <div className="card" style={{ background: '#e8f5e8', border: '2px solid #4caf50' }}>
        <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1.5rem' }}>
          O texto relaciona desigualdade social e preconceito racial no Brasil. 
          No contexto da análise sociológica, o texto evidencia que:
        </p>
      </div>

      <h2>✅ Alternativas</h2>
      <div style={{ marginTop: '2rem' }}>
        {answers.map((answer) => (
          <motion.div
            key={answer.id}
            className="card"
            style={{ 
              marginBottom: '1rem', 
              cursor: 'pointer',
              background: selectedAnswer === answer.id 
                ? (showResult 
                  ? (answer.id === correctAnswer ? '#c8e6c9' : '#ffcdd2')
                  : '#e3f2fd') 
                : '#ffffff',
              border: selectedAnswer === answer.id 
                ? (showResult
                  ? (answer.id === correctAnswer ? '3px solid #4caf50' : '3px solid #f44336')
                  : '3px solid #2196f3')
                : '1px solid #e0e0e0',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: showResult ? 1 : 1.02,
              boxShadow: showResult ? '0 4px 8px rgba(0,0,0,0.1)' : '0 6px 20px rgba(0,0,0,0.15)'
            }}
            onClick={() => !showResult && handleAnswerSelect(answer.id)}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ 
                background: selectedAnswer === answer.id && showResult
                  ? (answer.id === correctAnswer ? '#4caf50' : '#f44336')
                  : (selectedAnswer === answer.id ? '#2196f3' : '#757575'),
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginRight: '1rem',
                fontSize: '1.1rem',
                flexShrink: 0,
                marginTop: '0.2rem'
              }}>
                {answer.id}
              </div>
              <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>
                {answer.text}
              </p>
            </div>
            
            <AnimatePresence>
              {showExplanation && selectedAnswer === answer.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: '1.5rem' }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: answer.id === correctAnswer ? '#e8f5e8' : '#ffebee',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: `2px solid ${answer.id === correctAnswer ? '#4caf50' : '#f44336'}`
                  }}
                >
                  <h4 style={{ 
                    color: answer.id === correctAnswer ? '#2e7d32' : '#c62828',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {answer.id === correctAnswer ? '✅ Explicação da Resposta Correta:' : '❌ Por que está incorreta:'}
                  </h4>
                  <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>
                    {answer.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        {!showResult ? (
          <motion.button
            className={`btn ${selectedAnswer ? '' : 'btn-disabled'}`}
            disabled={!selectedAnswer}
            onClick={handleSubmit}
            whileHover={selectedAnswer ? { scale: 1.05 } : {}}
            whileTap={selectedAnswer ? { scale: 0.95 } : {}}
            style={{
              background: selectedAnswer ? '#4caf50' : '#cccccc',
              cursor: selectedAnswer ? 'pointer' : 'not-allowed',
              fontSize: '1.2rem',
              padding: '1rem 3rem'
            }}
          >
            Confirmar Resposta 📝
          </motion.button>
        ) : (
          <div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  background: selectedAnswer === correctAnswer 
                    ? 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 100%)' 
                    : 'linear-gradient(135deg, #ffcdd2 0%, #ef9a9a 100%)',
                  padding: '2rem',
                  borderRadius: '15px',
                  marginBottom: '2rem',
                  border: `3px solid ${selectedAnswer === correctAnswer ? '#4caf50' : '#f44336'}`
                }}
              >
                <h3 style={{ 
                  color: selectedAnswer === correctAnswer ? '#1b5e20' : '#b71c1c',
                  fontSize: '1.8rem',
                  margin: '0 0 1rem 0'
                }}>
                  {selectedAnswer === correctAnswer ? '🎉 Parabéns! Você acertou!' : '😔 Resposta incorreta!'}
                </h3>
                <p style={{ 
                  fontSize: '1.2rem', 
                  margin: 0,
                  color: selectedAnswer === correctAnswer ? '#2e7d32' : '#c62828'
                }}>
                  {selectedAnswer === correctAnswer 
                    ? 'Você demonstrou excelente compreensão sociológica sobre as relações entre racismo e desigualdade social no Brasil!'
                    : `A resposta correta é a alternativa ${correctAnswer}. Revise a explicação para entender melhor o conceito.`
                  }
                </p>
              </motion.div>
            </AnimatePresence>
            
            <motion.button
              className="btn"
              onClick={resetQuiz}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#2196f3',
                fontSize: '1.1rem',
                padding: '1rem 2rem'
              }}
            >
              Tentar Novamente 🔄
            </motion.button>
          </div>
        )}
      </div>

      {showExplanation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="card"
          style={{ 
            marginTop: '3rem', 
            background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)',
            border: '3px solid #4caf50'
          }}
        >
          <h3 style={{ color: '#1b5e20' }}>📚 Análise Sociológica Completa</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            <strong>O texto de Hélio Jaguaribe</strong> é um exemplo clássico de análise sociológica 
            que demonstra como <span className="highlight">hierarquias raciais estruturam e perpetuam 
            desigualdades sociais no Brasil</span>. O autor utiliza dados concretos (distribuição racial 
            nas prisões e universidades, condições de vida de diferentes grupos) para evidenciar que 
            o racismo não é apenas preconceito individual, mas um <strong>sistema estrutural de 
            dominação</strong> que organiza a sociedade brasileira.
          </p>
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginTop: '1rem' }}>
            A questão avalia a capacidade do estudante de identificar <strong>processos sociológicos 
            estruturais</strong> versus explicações individualistas ou culturais superficiais, 
            competência fundamental para compreender as desigualdades sociais contemporâneas.
          </p>
        </motion.div>
      )}

      <div className="quote" style={{ marginTop: '3rem', background: '#e3f2fd', border: '4px solid #2196f3' }}>
        <h3 style={{ color: '#0d47a1' }}>🎓 Competências Avaliadas</h3>
        <ul style={{ fontSize: '1rem', lineHeight: '1.6', color: '#1565c0' }}>
          <li><strong>Interpretação de Texto:</strong> Análise crítica de argumentos sociológicos</li>
          <li><strong>Conhecimento Sociológico:</strong> Compreensão de conceitos como hierarquia racial e desigualdade estrutural</li>
          <li><strong>Pensamento Crítico:</strong> Capacidade de relacionar dados empíricos com teorias sociais</li>
          <li><strong>Cidadania:</strong> Reflexão sobre problemas sociais contemporâneos do Brasil</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Enem