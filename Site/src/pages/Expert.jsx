import { motion } from 'framer-motion'

const Expert = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>👨‍🎓 Análise de Especialista</h1>
      
      <motion.div 
        className="quote enhanced-card glow-effect" 
        style={{ 
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 100%)', 
          border: '2px solid rgba(0, 0, 0, 0.1)',
          position: 'relative'
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="pulse-glow"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/s200_antonio.sergio.jpg" 
              alt="Dr. Antônio Sérgio Guimarães" 
              style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                marginRight: '1.5rem',
                border: '3px solid #666666',
                objectFit: 'cover',
                filter: 'grayscale(100%) contrast(1.1)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
              }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format"
              }}
            />
          </motion.div>
          <div>
            <motion.h3 
              style={{ margin: 0, color: '#000000' }}
              className="gradient-text shimmer-text"
            >
              Dr. Antônio Sérgio Alfredo Guimarães
            </motion.h3>
            <motion.p 
              style={{ margin: 0, color: '#666666', fontStyle: 'italic' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Sociólogo, Professor Titular da USP, Especialista em Relações Raciais
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <h2>Perspectiva Sociológica sobre o Racismo Brasileiro</h2>
      
      <div className="quote">
        <p style={{ fontSize: '1.2rem' }}>
          <strong>"O racismo no Brasil opera de forma peculiar, combinando a negação oficial 
          da discriminação racial com a perpetuação sistemática de desigualdades baseadas 
          na cor da pele. Este fenômeno, que denomino de 'racismo cordial', é mais perverso 
          que formas explícitas de discriminação, pois dificulta o reconhecimento e o combate 
          ao problema."</strong>
        </p>
        <small>— Prof. Dr. Antônio Sérgio Guimarães, 2022</small>
      </div>

      <h2>Principais Contribuições Teóricas</h2>

      <div className="grid">
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)' }}
        >
          <h3>🔍 Teoria do Racismo Cordial</h3>
          <p>
            Guimarães conceptualiza o <span className="highlight">"racismo à brasileira"</span> 
            como um sistema que nega formalmente o preconceito racial, mas mantém 
            práticas discriminatórias sutis e estruturais que perpetuam desigualdades.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)' }}
        >
          <h3>📊 Análise Estrutural</h3>
          <p>
            Demonstra como <span className="highlight">indicadores socioeconômicos</span> 
            revelam a persistência de desigualdades raciais, contradizendo o 
            mito da "democracia racial" brasileira.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)' }}
        >
          <h3>⚖️ Políticas de Ação Afirmativa</h3>
          <p>
            Defende a necessidade de <span className="highlight">políticas compensatórias</span> 
            como as cotas raciais para superar séculos de exclusão sistemática 
            da população negra dos espaços de poder.
          </p>
        </motion.div>
      </div>

      <h2>Diagnóstico da Realidade Brasileira</h2>

      <h3>1. Negação e Invisibilização</h3>
      <p>
        Segundo Guimarães, o primeiro obstáculo ao enfrentamento do racismo no Brasil é 
        <span className="highlight"> a negação coletiva de sua existência</span>. A sociedade 
        brasileira desenvolveu mecanismos discursivos que minimizam ou invisibilizam 
        práticas discriminatórias, dificultando políticas de combate efetivas.
      </p>

      <h3>2. Discriminação por Aparência</h3>
      <div className="quote" style={{ background: '#fff3e0' }}>
        <p>
          <em>"No Brasil, diferentemente dos Estados Unidos, a discriminação não se baseia 
          na ancestralidade, mas na aparência física. Quanto mais escura a pele, maior a 
          probabilidade de sofrer discriminação. Isso cria um continuum de discriminação 
          que torna o problema mais complexo e difícil de combater."</em>
        </p>
      </div>

      <h3>3. Interseccionalidade das Opressões</h3>
      <p>
        O sociólogo enfatiza que o racismo brasileiro intersecta com 
        <span className="highlight"> desigualdades de classe e gênero</span>, criando 
        formas específicas de opressão. Mulheres negras, por exemplo, enfrentam 
        discriminação múltipla que amplifica sua vulnerabilidade social.
      </p>

      <h2>Propostas de Intervenção</h2>

      <motion.div 
        className="card"
        style={{ background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)', marginTop: '2rem' }}
        whileHover={{ scale: 1.01 }}
      >
        <h3>🎯 Estratégias Recomendadas</h3>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li><strong>Reconhecimento Legal:</strong> Fortalecimento da legislação antirracista e criminalização efetiva</li>
          <li><strong>Educação Antirracista:</strong> Implementação da Lei 10.639/03 e formação de professores</li>
          <li><strong>Cotas Raciais:</strong> Expansão das políticas afirmativas para universidades e serviço público</li>
          <li><strong>Mídia Responsável:</strong> Combate aos estereótipos e promoção da representatividade negra</li>
          <li><strong>Dados Raciais:</strong> Coleta sistemática de dados desagregados por raça/cor</li>
        </ul>
      </motion.div>

      <div className="quote" style={{ marginTop: '3rem', background: '#e3f2fd' }}>
        <h3 style={{ color: '#1565c0' }}>💡 Reflexão Final</h3>
        <p>
          <strong>"A superação do racismo no Brasil exige não apenas mudanças individuais 
          de mentalidade, mas transformações estruturais profundas. Precisamos de políticas 
          públicas consistentes, educação antirracista e, sobretudo, do reconhecimento 
          coletivo de que o racismo é um problema real e urgente da sociedade brasileira."</strong>
        </p>
        <small style={{ color: '#1976d2' }}>
          — Prof. Dr. Antônio Sérgio Guimarães
        </small>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <h4>📚 Principais Obras:</h4>
        <ul>
          <li>"Racismo e Anti-racismo no Brasil" (2009)</li>
          <li>"Classes, Raças e Democracia" (2002)</li>
          <li>"Preconceito Racial: Modos, Temas e Tempos" (2008)</li>
          <li>"O insulto racial: as ofensas verbais registradas em queixas de discriminação" (2007)</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Expert