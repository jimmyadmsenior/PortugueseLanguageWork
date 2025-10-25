import { motion } from 'framer-motion'

const Literature = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>📚 Exemplo Literário</h1>
      
      <div className="quote" style={{ background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)', border: '4px solid #9c27b0' }}>
        <h3 style={{ color: '#4a148c' }}>📖 "Olhos d'água" - Conceição Evaristo</h3>
        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#6a1b9a' }}>
          Coletânea de contos que retrata a experiência da mulher negra no Brasil, 
          abordando temas como racismo, violência doméstica, maternidade e resistência.
        </p>
        <small style={{ color: '#7b1fa2' }}>
          <strong>Editora:</strong> Pallas (2014) | <strong>Gênero:</strong> Contos
        </small>
      </div>

      <h2>Sobre a Autora</h2>
      
      <div className="grid">
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)' }}
        >
          <h3>👩‍🎓 Conceição Evaristo</h3>
          <p>
            <strong>Nascida em 1946</strong> numa favela de Belo Horizonte, Conceição Evaristo 
            é uma das principais vozes da <span className="highlight">literatura afro-brasileira 
            contemporânea</span>. Doutora em Literatura Comparada pela UFF, sua obra 
            questiona o cânone literário brasileiro e dá visibilidade às experiências 
            de mulheres negras e periféricas.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)' }}
        >
          <h3>✍️ Escrevivência</h3>
          <p>
            Conceição Evaristo cunhou o termo <span className="highlight">"escrevivência"</span> 
            para definir sua literatura: escrita que nasce da vivência, da experiência 
            concreta de ser mulher, negra e periférica no Brasil. Suas narrativas 
            rompem o silêncio sobre violências e resistências cotidianas.
          </p>
        </motion.div>
      </div>

      <h2>Análise da Obra "Olhos d'água"</h2>

      <h3>📝 Conto Destacado: "Duzu-Querença"</h3>
      
      <div className="quote" style={{ background: '#fff3e0' }}>
        <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
          <em>"Duzu-Querença sabia que seu lugar no ônibus era em pé. Mesmo quando havia 
          lugar vazio, hesitava em sentar. Não por humildade, mas porque o mundo lhe 
          ensinara a temer a reação dos outros passageiros. O olhar de nojo, o 
          sussurro malicioso, o gesto de quem se afasta."</em>
        </p>
        <small>— Conceição Evaristo, adaptação inspirada na obra</small>
      </div>

      <p>
        Este trecho exemplifica como <span className="highlight">o racismo cotidiano se manifesta 
        através de microagressões</span> que condicionam comportamentos e limitam a liberdade 
        de movimento de pessoas negras nos espaços sociais. A personagem internaliza a 
        discriminação, evidenciando os efeitos psicológicos do racismo estrutural.
      </p>

      <h2>Temáticas Centrais da Obra</h2>

      <div className="grid">
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)' }}
        >
          <h3>👩 Interseccionalidade</h3>
          <p>
            A obra retrata a <strong>tripla opressão</strong> vivida pela mulher negra: 
            racismo, machismo e classismo. As personagens enfrentam violências 
            específicas que resultam da interseção dessas múltiplas formas de 
            discriminação social.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' }}
        >
          <h3>🏠 Maternidade Negra</h3>
          <p>
            Evaristo explora as <strong>particularidades da maternidade negra</strong> 
            no Brasil, marcada pelo medo constante da violência policial, pela 
            preocupação com o futuro dos filhos e pela responsabilidade de 
            protegê-los do racismo.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%)' }}
        >
          <h3>💪 Resistência e Solidariedade</h3>
          <p>
            Apesar das adversidades, as narrativas destacam <strong>estratégias de 
            resistência</strong> e redes de apoio entre mulheres negras, evidenciando 
            força, solidariedade e capacidade de superação frente às opressões.
          </p>
        </motion.div>
      </div>

      <h2>Relevância Social da Literatura</h2>

      <h3>1. Representatividade Literária</h3>
      <p>
        "Olhos d'água" representa um <span className="highlight">marco na literatura brasileira</span> 
        por centralizar experiências negras como protagonistas das narrativas, 
        contrariando a tradição literária que historicamente marginalizou ou 
        estereotipou personagens negros.
      </p>

      <h3>2. Denúncia Social</h3>
      <div className="quote" style={{ background: '#e8f5e8' }}>
        <p>
          <strong>Função Social da Literatura:</strong> A obra funciona como instrumento 
          de denúncia das desigualdades raciais, dando visibilidade a realidades 
          frequentemente silenciadas pela literatura canônica brasileira.
        </p>
      </div>

      <h3>3. Educação Antirracista</h3>
      <p>
        As narrativas de Conceição Evaristo contribuem para a <span className="highlight">
        educação das relações étnico-raciais</span>, cumprindo o papel pedagógico 
        previsto na Lei 10.639/03 ao apresentar perspectivas afro-brasileiras 
        sobre a experiência social brasileira.
      </p>

      <h2>Conexão com a Realidade Contemporânea</h2>

      <motion.div 
        className="card"
        style={{ background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)', marginTop: '2rem' }}
        whileHover={{ scale: 1.01 }}
      >
        <h3>📊 Dados que Corroboram a Literatura</h3>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li><strong>Violência:</strong> 68% das mulheres assassinadas no Brasil são negras</li>
          <li><strong>Trabalho:</strong> 39,1% das mulheres negras trabalham sem carteira assinada</li>
          <li><strong>Educação:</strong> Taxa de analfabetismo entre mulheres negras é 3x maior</li>
          <li><strong>Saúde:</strong> Mortalidade materna de mulheres negras é 62% maior</li>
          <li><strong>Renda:</strong> Mulheres negras ganham 44% menos que homens brancos</li>
        </ul>
      </motion.div>

      <h2>Outros Contos Relevantes</h2>

      <div className="grid" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ background: '#fce4ec' }}>
          <h4><strong>"Olhos d'água"</strong></h4>
          <p>
            Conto que dá título à coletânea, explora a <strong>memória e identidade</strong> 
            através da relação entre mãe e filha, questionando a construção 
            da subjetividade negra.
          </p>
        </div>
        
        <div className="card" style={{ background: '#f3e5f5' }}>
          <h4><strong>"Ana Davenga"</strong></h4>
          <p>
            Retrata a <strong>violência urbana e seus impactos</strong> nas 
            comunidades periféricas, mostrando como o Estado falha na 
            proteção da população negra.
          </p>
        </div>
        
        <div className="card" style={{ background: '#e8f5e8' }}>
          <h4><strong>"Zaíta esqueceu de guardar os brinquedos"</strong></h4>
          <p>
            Aborda <strong>violência doméstica e racismo</strong>, evidenciando 
            como múltiplas opressões se intersectam na vida de 
            mulheres negras.
          </p>
        </div>
      </div>

      <div className="quote" style={{ marginTop: '3rem', background: '#e3f2fd', border: '4px solid #2196f3' }}>
        <h3 style={{ color: '#0d47a1' }}>💡 Impacto Educacional</h3>
        <p style={{ fontSize: '1.1rem' }}>
          <strong>"Olhos d'água" é fundamental para compreender o preconceito racial 
          no Brasil contemporâneo.</strong> A obra oferece perspectivas autênticas 
          sobre a experiência negra, contribuindo para desconstruir estereótipos 
          e promover empatia. Sua inclusão em currículos escolares fortalece a 
          implementação da Lei 10.639/03 e fomenta debates necessários sobre 
          justiça social e direitos humanos.
        </p>
      </div>

      <motion.div 
        className="card"
        style={{ 
          background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)', 
          marginTop: '2rem',
          border: '2px solid #9c27b0'
        }}
        whileHover={{ scale: 1.01 }}
      >
        <h3>🏆 Reconhecimento Literário</h3>
        <p style={{ fontSize: '1.1rem' }}>
          <strong>Conceição Evaristo</strong> recebeu diversos prêmios, incluindo o 
          Prêmio Jabuti (2015) e foi finalista do Prêmio Oceanos (2017). Sua obra 
          é traduzida para vários idiomas e estudada em universidades nacionais 
          e internacionais, consolidando-se como referência da literatura 
          afro-brasileira contemporânea.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Literature