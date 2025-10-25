import { motion } from 'framer-motion'

const Questions = () => {
  return (
    <motion.div
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>❓ Análise das Questões do Livro Didático</h1>
      
      <div className="quote" style={{ background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)', border: '4px solid #4caf50' }}>
        <h3 style={{ color: '#1b5e20' }}>📚 Questões Analisadas</h3>
        <p style={{ fontSize: '1.1rem', color: '#2e7d32' }}>
          Com base na resenha do livro "Olhos d'água" de Conceição Evaristo e nas 
          orientações pedagógicas apresentadas, desenvolvemos análises críticas 
          que conectam literatura, sociedade e educação antirracista.
        </p>
      </div>

      <h2>Questão B: Pontos Positivos da Resenha</h2>
      
      <div className="card" style={{ background: '#fff8e1', border: '2px solid #ff9800' }}>
        <h3>📝 Resposta Desenvolvida</h3>
        <p>
          Os principais pontos positivos da resenha destacados pela autora incluem:
        </p>
        
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8', marginTop: '1rem' }}>
          <li>
            <strong>Valorização da Literatura Afro-brasileira:</strong> A resenha reconhece 
            a importância de "Olhos d'água" como marco na representação de experiências 
            negras na literatura brasileira.
          </li>
          <li>
            <strong>Análise da Interseccionalidade:</strong> Destaca como a obra aborda 
            múltiplas opressões (racismo, machismo, classismo) vivenciadas por mulheres negras.
          </li>
          <li>
            <strong>Contextualização Social:</strong> Conecta a ficção literária com dados 
            estatísticos reais sobre desigualdades raciais no Brasil.
          </li>
          <li>
            <strong>Relevância Pedagógica:</strong> Enfatiza o potencial educativo da obra 
            para implementação da Lei 10.639/03 nas escolas.
          </li>
          <li>
            <strong>Reconhecimento do Conceito de Escrevivência:</strong> Valoriza a 
            contribuição teórica de Conceição Evaristo para os estudos literários.
          </li>
        </ul>
      </div>

      <h2>Questão C: Diferenças entre Resumo e Resenha</h2>

      <div className="grid">
        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' }}
        >
          <h3>📄 Resumo</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <li><strong>Função:</strong> Condensar o conteúdo principal</li>
            <li><strong>Objetividade:</strong> Apresentação neutra e imparcial</li>
            <li><strong>Estrutura:</strong> Sequência lógica dos temas abordados</li>
            <li><strong>Linguagem:</strong> Concisa e informativa</li>
            <li><strong>Extensão:</strong> Geralmente mais breve</li>
            <li><strong>Propósito:</strong> Informar sobre o conteúdo</li>
          </ul>
        </motion.div>

        <motion.div 
          className="card"
          whileHover={{ scale: 1.02 }}
          style={{ background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)' }}
        >
          <h3>📝 Resenha</h3>
          <ul style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <li><strong>Função:</strong> Analisar e avaliar criticamente</li>
            <li><strong>Subjetividade:</strong> Inclui opinião fundamentada do resenhista</li>
            <li><strong>Estrutura:</strong> Combina descrição com análise crítica</li>
            <li><strong>Linguagem:</strong> Argumentativa e reflexiva</li>
            <li><strong>Extensão:</strong> Mais extensa e detalhada</li>
            <li><strong>Propósito:</strong> Orientar e influenciar o leitor</li>
          </ul>
        </motion.div>
      </div>

      <div className="quote" style={{ background: '#f1f8e9', marginTop: '2rem' }}>
        <h4 style={{ color: '#388e3c' }}>💡 Exemplo Prático:</h4>
        <p>
          <strong>Resumo:</strong> "Olhos d'água é uma coletânea de 15 contos de Conceição 
          Evaristo que retrata experiências de mulheres negras no Brasil contemporâneo."
        </p>
        <p style={{ marginTop: '1rem' }}>
          <strong>Resenha:</strong> "Olhos d'água representa um marco fundamental na literatura 
          brasileira por dar protagonismo às experiências de mulheres negras, oferecendo 
          narrativas autênticas que desafiam estereótipos e promovem reflexão crítica 
          sobre desigualdades sociais. A obra merece destaque pela qualidade literária 
          e relevância social."
        </p>
      </div>

      <h2>Questão D: Influência da Resenha na Escolha de Leitura</h2>

      <div className="card" style={{ background: '#fce4ec', border: '2px solid #e91e63' }}>
        <h3>📖 Análise Crítica</h3>
        <p>
          Sim, a leitura desta resenha despertaria significativo interesse pelo livro 
          de Conceição Evaristo, pelos seguintes motivos:
        </p>
        
        <h4 style={{ marginTop: '1.5rem' }}>🎯 Fatores de Atração:</h4>
        <ul style={{ fontSize: '1rem', lineHeight: '1.7' }}>
          <li>
            <strong>Relevância Social:</strong> A resenha evidencia que a obra aborda 
            questões urgentes da sociedade brasileira, despertando curiosidade sobre 
            perspectivas frequentemente silenciadas.
          </li>
          <li>
            <strong>Qualidade Literária:</strong> O reconhecimento crítico e os prêmios 
            mencionados sugerem excelência artística, atraindo leitores interessados 
            em boa literatura.
          </li>
          <li>
            <strong>Representatividade:</strong> Para leitores negros, a obra oferece 
            identificação e representação; para outros, proporciona ampliação de 
            perspectivas culturais.
          </li>
          <li>
            <strong>Impacto Educativo:</strong> A dimensão pedagógica desperta interesse 
            de educadores e estudantes comprometidos com educação antirracista.
          </li>
          <li>
            <strong>Inovação Conceitual:</strong> O conceito de "escrevivência" intriga 
            leitores interessados em renovação dos estudos literários.
          </li>
        </ul>
      </div>

      <h2>Conexão com o Preconceito Racial</h2>

      <motion.div 
        className="card"
        style={{ background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)', marginTop: '2rem' }}
        whileHover={{ scale: 1.01 }}
      >
        <h3>🔗 Síntese Analítica</h3>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          As questões analisadas demonstram como <span className="highlight">a literatura 
          funciona como instrumento de combate ao preconceito racial</span>. A resenha 
          de "Olhos d'água" exemplifica a importância de:
        </p>
        
        <ul style={{ fontSize: '1rem', lineHeight: '1.7', marginTop: '1rem' }}>
          <li><strong>Crítica Literária Engajada:</strong> Resenhas que valorizam obras antirracistas</li>
          <li><strong>Visibilidade Editorial:</strong> Divulgação de autores negros marginalizados</li>
          <li><strong>Educação Crítica:</strong> Formação de leitores conscientes das desigualdades</li>
          <li><strong>Representatividade Cultural:</strong> Legitimação de perspectivas afro-brasileiras</li>
          <li><strong>Transformação Social:</strong> Literatura como agente de mudança social</li>
        </ul>
      </motion.div>

      <h2>Atividade Pedagógica Proposta</h2>

      <div className="quote" style={{ background: '#fff3e0', border: '4px solid #ff9800' }}>
        <h3 style={{ color: '#e65100' }}>🎓 Para Reflexão em Grupo</h3>
        <p>
          <strong>Proposta da Questão 4:</strong> Reunir-se em grupos de quatro alunos 
          e fazer uma revisão crítica sobre preconceito racial, discutindo definições 
          e criando material educativo (vídeos, textos, apresentações) que abranja 
          diferentes formatos midiáticos para conscientização sobre o tema.
        </p>
      </div>

      <div className="grid" style={{ marginTop: '2rem' }}>
        <div className="card" style={{ background: '#e8f5e8' }}>
          <h4><strong>🎬 Sugestões de Formato</strong></h4>
          <ul>
            <li>Documentário curto sobre racismo no Brasil</li>
            <li>Podcast com depoimentos de experiências</li>
            <li>Infográficos com dados estatísticos</li>
            <li>Teatro com situações de preconceito</li>
          </ul>
        </div>
        
        <div className="card" style={{ background: '#e3f2fd' }}>
          <h4><strong>📚 Fontes Recomendadas</strong></h4>
          <ul>
            <li>Obras de Conceição Evaristo</li>
            <li>Dados do IBGE e IPEA</li>
            <li>Legislação antirracista brasileira</li>
            <li>Pesquisas acadêmicas sobre relações raciais</li>
          </ul>
        </div>
      </div>

      <div className="quote" style={{ marginTop: '3rem', background: '#e3f2fd', border: '4px solid #2196f3' }}>
        <h3 style={{ color: '#0d47a1' }}>🎯 Objetivo Educacional</h3>
        <p style={{ fontSize: '1.1rem' }}>
          <strong>Esta análise das questões do livro didático demonstra como o estudo 
          crítico da literatura pode contribuir para a educação antirracista.</strong> 
          Ao conectar teoria literária, realidade social e prática pedagógica, 
          desenvolvemos competências analíticas essenciais para compreender e 
          combater o preconceito racial na sociedade brasileira contemporânea.
        </p>
      </div>
    </motion.div>
  )
}

export default Questions