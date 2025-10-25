import { motion } from 'framer-motion'

const Rights = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>⚖️ Direitos Negligenciados</h1>
      
      <div className="quote" style={{ background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)', border: '4px solid #ff9800' }}>
        <h3 style={{ color: '#e65100' }}>📜 Constituição Federal de 1988 - Artigo 5º</h3>
        <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#bf360c' }}>
          <strong>Inciso XLII:</strong> "A prática do racismo constitui crime inafiançável e 
          imprescritível, sujeito à pena de reclusão, nos termos da lei."
        </p>
      </div>

      <h2>Marco Legal Brasileiro</h2>
      
      <p>
        A legislação brasileira estabelece um robusto arcabouço jurídico contra o racismo, 
        porém <span className="highlight">sua aplicação prática enfrenta sérios desafios</span>. 
        A disparidade entre a teoria legal e a realidade social revela a persistência 
        de violações sistemáticas dos direitos constitucionais.
      </p>

      <div className="grid">
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)' }}
        >
          <h3>📝 Lei nº 7.716/89</h3>
          <h4>Lei Caó</h4>
          <p>
            Define os <strong>crimes resultantes de preconceito de raça ou cor</strong>, 
            estabelecendo penas de reclusão de 1 a 5 anos para práticas discriminatórias 
            em estabelecimentos comerciais, educacionais e de prestação de serviços.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' }}
        >
          <h3>📚 Lei nº 10.639/03</h3>
          <h4>Ensino de História Africana</h4>
          <p>
            Torna obrigatório o <strong>ensino de história e cultura afro-brasileira</strong> 
            nas escolas, visando combater o racismo através da educação e valorização 
            da contribuição africana para a formação brasileira.
          </p>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)' }}
        >
          <h3>🎯 Lei nº 12.711/12</h3>
          <h4>Lei de Cotas</h4>
          <p>
            Estabelece <strong>reserva de vagas em universidades federais</strong> 
            para estudantes de escolas públicas, com subcotas para pretos, pardos 
            e indígenas, promovendo inclusão no ensino superior.
          </p>
        </motion.div>
      </div>

      <h2>Direitos Fundamentais Violados</h2>

      <h3>1. Direito à Igualdade</h3>
      <div className="quote" style={{ background: '#ffebee' }}>
        <p>
          <strong>Art. 5º, Caput CF/88:</strong> "Todos são iguais perante a lei, sem distinção 
          de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes 
          no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança 
          e à propriedade."
        </p>
      </div>

      <p>
        <span className="highlight">Violação Sistemática:</span> Dados demonstram que pessoas 
        negras recebem salários 44% menores que pessoas brancas em funções similares, 
        contradizindo o princípio constitucional da igualdade material.
      </p>

      <h3>2. Direito à Educação</h3>
      <div className="quote" style={{ background: '#e8f5e8' }}>
        <p>
          <strong>Art. 205 CF/88:</strong> "A educação, direito de todos e dever do Estado 
          e da família, será promovida e incentivada com a colaboração da sociedade, 
          visando ao pleno desenvolvimento da pessoa, seu preparo para o exercício 
          da cidadania e sua qualificação para o trabalho."
        </p>
      </div>

      <p>
        <span className="highlight">Negligência Institucional:</span> Apenas 27% dos 
        estudantes universitários são negros, embora representem 56% da população. 
        A Lei 10.639/03 ainda não é plenamente implementada nas escolas brasileiras.
      </p>

      <h3>3. Direito ao Trabalho Digno</h3>
      <div className="quote" style={{ background: '#fff3e0' }}>
        <p>
          <strong>Art. 7º CF/88:</strong> Estabelece direitos fundamentais dos trabalhadores, 
          incluindo proteção contra práticas discriminatórias e garantia de igual 
          remuneração para trabalho de igual valor.
        </p>
      </div>

      <p>
        <span className="highlight">Discriminação Laboral:</span> A taxa de desemprego 
        entre pessoas negras (14,1%) é 64% maior que entre pessoas brancas (8,6%). 
        Mulheres negras enfrentam dupla discriminação, ocupando majoritariamente 
        postos de trabalho precarizados.
      </p>

      <h2>Falhas na Aplicação Legal</h2>

      <motion.div 
        className="card"
        style={{ background: 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)', marginTop: '2rem' }}
        whileHover={{ scale: 1.01 }}
      >
        <h3>🚫 Obstáculos Estruturais</h3>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li><strong>Dificuldade Probatória:</strong> Complexidade em comprovar discriminação racial</li>
          <li><strong>Subnotificação:</strong> Muitas vítimas não denunciam por descrença no sistema</li>
          <li><strong>Morosidade Judicial:</strong> Processos longos desencorajam denúncias</li>
          <li><strong>Formação Deficiente:</strong> Falta capacitação de operadores do direito</li>
          <li><strong>Racismo Institucional:</strong> Discriminação dentro do próprio sistema de justiça</li>
        </ul>
      </motion.div>

      <h2>Casos Emblemáticos de Negligência</h2>

      <div className="grid" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ background: '#fff8e1' }}>
          <h4><strong>📊 Mercado de Trabalho</strong></h4>
          <p>
            Pesquisa do IPEA (2021) revela que <strong>currículos com nomes "brancos" 
            recebem 36% mais chamadas</strong> para entrevistas que currículos idênticos 
            com nomes "negros".
          </p>
        </div>
        
        <div className="card" style={{ background: '#f3e5f5' }}>
          <h4><strong>🏥 Sistema de Saúde</strong></h4>
          <p>
            Mulheres negras têm <strong>3x mais chances de morrer no parto</strong> 
            que mulheres brancas, evidenciando negligência médica e racismo 
            institucional no SUS.
          </p>
        </div>
        
        <div className="card" style={{ background: '#e8f5e8' }}>
          <h4><strong>🚔 Segurança Pública</strong></h4>
          <p>
            <strong>78% das vítimas de homicídio no Brasil são negras</strong>. 
            Jovens negros têm 2,7x mais chances de serem mortos pela polícia 
            que jovens brancos.
          </p>
        </div>
      </div>

      <div className="quote" style={{ marginTop: '3rem', background: '#e3f2fd', border: '4px solid #2196f3' }}>
        <h3 style={{ color: '#0d47a1' }}>⚖️ Necessidade de Reforma</h3>
        <p style={{ fontSize: '1.1rem' }}>
          <strong>A efetivação dos direitos constitucionais antirracistas exige:</strong> 
          reforma do sistema de justiça, capacitação de operadores do direito, 
          criação de varas especializadas em crimes raciais, ampliação das políticas 
          afirmativas e fortalecimento dos órgãos de combate à discriminação.
        </p>
      </div>

      <motion.div 
        className="card"
        style={{ 
          background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)', 
          marginTop: '2rem',
          border: '2px solid #4caf50'
        }}
        whileHover={{ scale: 1.01 }}
      >
        <h3>📈 Avanços Recentes</h3>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li><strong>STF:</strong> Equiparação da injúria racial ao crime de racismo (2023)</li>
          <li><strong>CNJ:</strong> Resolução sobre equidade racial no Poder Judiciário</li>
          <li><strong>Cotas:</strong> Extensão para concursos públicos federais</li>
          <li><strong>Observatório:</strong> Criação de núcleos de combate à discriminação</li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default Rights