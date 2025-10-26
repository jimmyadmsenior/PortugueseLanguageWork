import { motion } from 'framer-motion'

const Definition = () => {
  return (
    <motion.div
      className="page-container enhanced-card morphing-bg"
      initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.9, ease: "backOut" }}
    >
      <motion.h1 
        className="shimmer-text typewriter"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        📖 Definição: Preconceito Racial
      </motion.h1>
      
      <div className="quote" style={{ background: '#e8f5e8', border: '4px solid #4caf50' }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#2e7d32' }}>Verbete de Dicionário</h3>
        <p style={{ fontSize: '1.3rem', fontWeight: '600', color: '#1b5e20' }}>
          <strong>Preconceito Racial:</strong> s.m. Atitude hostil ou discriminatória 
          baseada em características físicas, étnicas ou culturais de determinados grupos, 
          fundamentada em crenças infundadas sobre a superioridade ou inferioridade de raças humanas.
        </p>
        <small style={{ color: '#388e3c' }}>
          <em>Fonte: Adaptado do Dicionário Houaiss da Língua Portuguesa</em>
        </small>
      </div>

      <h2>Conceituação Ampliada</h2>
      <p>
        O preconceito racial é um fenômeno social complexo que se manifesta através de 
        <span className="highlight"> atitudes, comportamentos e práticas discriminatórias</span> 
        dirigidas a indivíduos ou grupos com base em suas características raciais ou étnicas. 
        Trata-se de um conjunto de crenças estereotipadas e generalizadas que atribuem 
        características negativas a determinados grupos raciais.
      </p>

      <div className="grid">
        <motion.div 
          className="card enhanced-card glow-effect magnetic"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, rotateY: 10, z: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ background: 'linear-gradient(135deg, rgba(255, 243, 224, 0.9) 0%, rgba(255, 224, 178, 0.8) 100%)' }}
        >
          <h3>🧠 Dimensão Psicológica</h3>
          <p>
            Envolve <strong>estereótipos, preconceitos e atitudes discriminatórias</strong> 
            internalizadas pelo indivíduo, muitas vezes de forma inconsciente, 
            influenciando percepções e comportamentos sociais.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)' }}
        >
          <h3>🏛️ Dimensão Institucional</h3>
          <p>
            Manifesta-se através de <strong>práticas discriminatórias sistemáticas</strong> 
            em instituições sociais como escola, trabalho, sistema de justiça e saúde, 
            perpetuando desigualdades estruturais.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)' }}
        >
          <h3>🌍 Dimensão Estrutural</h3>
          <p>
            Refere-se às <strong>desigualdades socioeconômicas sistemáticas</strong> 
            que resultam de processos históricos de exclusão e discriminação, 
            criando barreiras estruturais para grupos racializados.
          </p>
        </motion.div>
      </div>

      <h2>Características do Preconceito Racial</h2>
      
      <h3>1. Natureza Aprendida</h3>
      <p>
        O preconceito racial não é inato, mas <span className="highlight">aprendido através 
        da socialização</span>. Crianças absorvem atitudes discriminatórias do ambiente 
        familiar, escolar e social, reproduzindo padrões de exclusão.
      </p>

      <h3>2. Fundamento Pseudocientífico</h3>
      <p>
        Baseia-se em <span className="highlight">teorias raciais cientificamente refutadas</span> 
        que tentaram hierarquizar grupos humanos. A ciência moderna comprova que as 
        diferenças genéticas entre grupos são mínimas e não justificam classificações raciais.
      </p>

      <h3>3. Função Social de Dominação</h3>
      <p>
        Serve como <span className="highlight">mecanismo de manutenção de privilégios</span> 
        e hierarquias sociais, legitimando a exclusão de grupos racializados dos 
        espaços de poder e das oportunidades socioeconômicas.
      </p>

      <div className="quote" style={{ background: '#ffebee', border: '4px solid #f44336' }}>
        <h3 style={{ color: '#c62828' }}>⚠️ Manifestações Contemporâneas</h3>
        <p>
          No Brasil atual, o preconceito racial assume formas mais sutis, como o 
          <strong> "racismo cordial"</strong>, caracterizado pela negação da discriminação 
          enquanto se perpetuam práticas excludentes. Isso inclui desde microagressões 
          cotidianas até barreiras sistemáticas no acesso a direitos fundamentais.
        </p>
      </div>

      <h2>Diferenciação Conceitual</h2>
      
      <div className="grid" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ background: '#e3f2fd' }}>
          <h4><strong>Preconceito</strong></h4>
          <p>Atitude mental prévia, julgamento antecipado baseado em estereótipos.</p>
        </div>
        
        <div className="card" style={{ background: '#fff3e0' }}>
          <h4><strong>Discriminação</strong></h4>
          <p>Ação concreta de tratamento diferenciado baseado em preconceitos.</p>
        </div>
        
        <div className="card" style={{ background: '#ffebee' }}>
          <h4><strong>Racismo</strong></h4>
          <p>Sistema ideológico que hierarquiza raças e legitima a dominação.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Definition