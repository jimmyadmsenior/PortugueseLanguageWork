# 🌟 Site Preconceito Racial no Brasil

Um site React interativo e educativo sobre preconceito racial no Brasil, desenvolvido para seminário acadêmico com design limpo e funcionalidades avançadas.

## 🎯 Visão Geral

Este projeto apresenta uma análise abrangente sobre o preconceito racial no Brasil, incluindo aspectos históricos, sociológicos, legais e literários. O site foi projetado especificamente para apresentações em projetor, com fontes grandes e legíveis.

## ✨ Funcionalidades

### 📱 Interface Responsiva
- Design clean e profissional
- Navegação intuitiva com navbar responsiva
- Animações suaves com Framer Motion
- Otimizado para projetor e diferentes tamanhos de tela

### 🗂️ Páginas Temáticas
- **🏠 Início**: Apresentação geral com dados estatísticos
- **📖 Definição**: Verbete de dicionário e conceituação ampliada
- **👨‍🎓 Especialista**: Análise do sociólogo Antônio Sérgio Guimarães
- **⚖️ Direitos**: Legislação antirracista e direitos negligenciados
- **📚 Literatura**: Análise da obra "Olhos d'água" de Conceição Evaristo
- **❓ Questões**: Respostas às questões do livro didático
- **🎯 ENEM**: Questão interativa do ENEM 2012 com feedback

### 🎮 Questão ENEM Interativa
- Interface gamificada para resolução da questão
- Feedback imediato com explicações detalhadas
- Análise sociológica completa
- Possibilidade de tentar novamente

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápido e moderno
- **React Router DOM** - Navegação entre páginas
- **Framer Motion** - Animações fluidas e interativas
- **CSS Custom Properties** - Sistema de design consistente
- **ESLint** - Linting e qualidade do código

## 📋 Elementos Obrigatórios Implementados

✅ **Definição verbete de dicionário** - Página Definição  
✅ **Fala de especialista (sociólogo)** - Página Especialista  
✅ **Direito negligenciado** - Página Direitos  
✅ **Exemplo literário** - Página Literatura  
✅ **Questões do livro didático** - Página Questões  
✅ **Questão ENEM interativa** - Página ENEM  

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação
```bash
# Navegar para o diretório
cd Site

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Acessar no navegador
http://localhost:5174
```

### Build para Produção
```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
Site/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Navbar.jsx   # Navegação principal
│   │   └── Navbar.css   # Estilos da navegação
│   ├── pages/           # Páginas da aplicação
│   │   ├── Home.jsx     # Página inicial
│   │   ├── Definition.jsx # Definição
│   │   ├── Expert.jsx   # Especialista
│   │   ├── Rights.jsx   # Direitos
│   │   ├── Literature.jsx # Literatura
│   │   ├── Questions.jsx # Questões
│   │   └── Enem.jsx     # ENEM interativo
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos globais
│   └── main.jsx         # Ponto de entrada
├── .github/
│   └── copilot-instructions.md # Instruções do projeto
├── package.json         # Dependências
└── README.md           # Documentação
```

## 🎨 Design System

### Cores
- **Primária**: #2c3e50 (azul escuro)
- **Secundária**: #3498db (azul)
- **Destaque**: #e74c3c (vermelho)
- **Fundo**: #ecf0f1 (cinza claro)
- **Cartões**: #ffffff (branco)

### Tipografia
- **Fonte**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Tamanho base**: 18px (otimizado para projetor)
- **Títulos**: 2.8rem (H1), 2.2rem (H2), 1.6rem (H3)
- **Responsivo**: Ajustes para mobile e desktop grande

## 📚 Conteúdo Acadêmico

### Fontes Utilizadas
- IBGE - Dados demográficos e socioeconômicos
- IPEA - Pesquisas sobre desigualdades raciais
- Atlas da Violência - Estatísticas sobre violência
- Constituição Federal 1988
- Lei nº 7.716/89 (Lei Caó)
- Lei nº 10.639/03 (Ensino de História Africana)
- Obras de Conceição Evaristo
- Pesquisas de Antônio Sérgio Guimarães

### Metodologia
- Análise sociológica estrutural
- Interseccionalidade (raça, classe, gênero)
- Abordagem histórico-crítica
- Dados empíricos atualizados
- Perspectiva antirracista

## 🎯 Objetivos Pedagógicos

1. **Conscientização** sobre o preconceito racial no Brasil
2. **Educação antirracista** baseada na Lei 10.639/03
3. **Análise crítica** de dados e estatísticas
4. **Reflexão sociológica** sobre desigualdades estruturais
5. **Preparação** para questões do ENEM e vestibulares

## 📱 Responsividade

- **Desktop** (1200px+): Layout completo com grid 3 colunas
- **Tablet** (768px-1199px): Grid 2 colunas, navbar compacta
- **Mobile** (até 767px): Layout single column, menu hamburger

## 🔧 Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build para produção  
npm run preview    # Preview do build
npm run lint       # Verificar código com ESLint
```

## 📈 Performance

- **Vite** para build rápido e hot reload
- **Code splitting** automático por páginas
- **Lazy loading** de componentes
- **CSS otimizado** com custom properties
- **Animações** otimizadas com Framer Motion

## 🤝 Contribuições

Este é um projeto acadêmico desenvolvido para seminário sobre preconceito racial. As fontes e metodologia seguem padrões acadêmicos rigorosos.

## 📄 Licença

Projeto acadêmico - uso educacional.

---

**Desenvolvido para seminário acadêmico sobre Preconceito Racial no Brasil**  
*Tecnologia: React + Vite | Design: Responsivo e Acessível*

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
