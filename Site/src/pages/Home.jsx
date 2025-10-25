import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>
      
      <motion.div
        className="page-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      <h1>Preconceito Racial no Brasil</h1>
      
      <div className="quote">
        <p>
          "O racismo é uma ideologia que postula a existência de raças humanas distintas e a superioridade de umas sobre outras, servindo para justificar a dominação dos grupos considerados superiores sobre os inferiores."
        </p>
        <small>— Definição Sociológica</small>
      </div>

      <div className="grid">
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3>📊 Dados Alarmantes</h3>
          <p>
            No Brasil, <span className="highlight">78% das vítimas de homicídio são negras</span>, 
            segundo o Atlas da Violência 2021. A população negra representa apenas 
            <span className="highlight"> 27% dos estudantes universitários</span>, 
            mas constitui <span className="highlight">67% da população carcerária</span>.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3>⚖️ Marco Legal</h3>
          <p>
            A <span className="highlight">Lei nº 7.716/89</span> define os crimes resultantes 
            de preconceito de raça ou cor, estabelecendo penas de reclusão de 1 a 5 anos. 
            A Constituição Federal de 1988 considera o racismo crime inafiançável e imprescritível.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3>📈 Desigualdade Social</h3>
          <p>
            A renda média de pessoas brancas é <span className="highlight">73% maior</span> 
            que a de pessoas negras. No mercado de trabalho, a taxa de desemprego entre 
            negros é <span className="highlight">64% maior</span> que entre brancos.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3>🎓 Educação</h3>
          <p>
            Apenas <span className="highlight">4,7% da população negra</span> possui 
            ensino superior completo, comparado a <span className="highlight">11,3% da população branca</span>. 
            As políticas de cotas representam um avanço na democratização do acesso.
          </p>
        </motion.div>
      </div>

      <h2>Objetivos deste Trabalho</h2>
      <p>
        Este site apresenta uma análise abrangente sobre o preconceito racial no Brasil, 
        abordando suas manifestações, consequências e os instrumentos legais de combate. 
        Nosso objetivo é contribuir para a reflexão crítica sobre esta realidade social 
        que ainda marca profundamente a sociedade brasileira.
      </p>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/definicao" className="btn">
          Começar Exploração 📖
        </Link>
      </div>

      <div className="quote" style={{ marginTop: '3rem', fontSize: '1rem' }}>
        <p>
          <strong>Metodologia:</strong> Este trabalho baseia-se em dados do IBGE, IPEA, 
          Atlas da Violência, legislação brasileira e literatura acadêmica especializada, 
          seguindo os elementos obrigatórios estabelecidos para o seminário.
        </p>
      </div>
    </motion.div>
    </>
  )
}

export default Home