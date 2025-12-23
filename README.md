# Analista de Personagens do Mahabharata

Este projeto é uma aplicação web sofisticada projetada para explorar os arquétipos, filosofia e narrativas do épico Mahabharata. Construído com uma estética "Épica" inspirada na arte clássica indiana, o app oferece uma análise profunda de personagens e acesso direto aos textos sagrados.

## 🌟 Funcionalidades

- **Biblioteca Universal**: Acesso completo aos 18 Parvas (Livros) do Mahabharata, formatados para leitura digital.
- **Busca Híbrida Inteligente**: 
  - **Nível 1**: Personagens Curados (Arjuna, Krishna, etc.) com perfis detalhados.
  - **Nível 2**: Banco de Dados Expandido (Takshaka, Yayati, etc.) com centenas de perfis secundários.
  - **Nível 3**: Índice Textual, rastreando qualquer nome mencionado no texto original.
- **Painel de Análise Profunda**: Visualize linhagem, papéis, atributos simbólicos e arco narrativo.
- **Linha do Tempo Dinâmica**: Explore aparições e eventos marcantes baseados no texto.
- **Design Imersivo**: Interface com tema escuro (Deep Blue), acentos em Ouro e Bronze, e tipografia clássica (Cinzel & Lato).

## 🛠️ Tecnologias Utilizadas

- **React V19**: Framework frontend.
- **Vite**: Build tool rápida.
- **TypeScript**: Para robustez do código.
- **Tailwind CSS v3**: Estilização com paleta personalizada (Epic Gold, Bronze).
- **Node.js Scripts**: Scripts personalizados para indexação e processamento de texto.

## 🚀 Como Executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Desenvolvimento Local (PC)
```bash
npm run dev
```

### 3. Acesso via Celular (Wi-Fi Local)
Para testar no seu celular conectado à mesma rede Wi-Fi:
```bash
npm run dev:lan
```

### 4. Build para Produção
```bash
npm run build
```
*(A pasta `dist` gerada pode ser arrastada para o [Netlify Drop](https://app.netlify.com/drop) para publicação imediata)*

## 📂 Estrutura de Dados

- `public/data/parvas`: Contém os arquivos JSON dos 18 livros processados.
- `public/data/full_character_database.json`: Banco de dados massivo com centenas de perfis.
- `src/services/mahabharataService.ts`: Lógica de busca híbrida (Memória + JSON + Índice).

---
*Desenvolvido por **Zemo-Cosmovisões** - Ferramenta de análise mitológica e filosófica.*
