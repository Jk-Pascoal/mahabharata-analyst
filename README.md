# Zemo Cosmovisões — Analista do Épico Mahabharata

Plataforma de inteligência analítica e filosófica para explorar os arquétipos, linhagens e narrativas do épico **Mahabharata**. Construída com estética imersiva "Epic Dark", a aplicação combina visualizações interativas D3.js com acesso direto ao texto sagrado.

---

## 🌟 Funcionalidades

### 🔍 Busca Híbrida de Personagens (3 Níveis)
- **Nível 1 — Perfis Curados**: Arjuna, Krishna, Karna, Bhishma e outros com análise filosófica completa.
- **Nível 2 — Banco Expandido**: Centenas de personagens secundários (Yayati, Takshaka, Shakuntala, etc.) com linhagem e psicologia.
- **Nível 3 — Índice Textual**: Rastreia qualquer nome mencionado no texto original dos 18 Parvas.

### 📜 Painel de Personagem (Dashboard)
- **Análise Arquetípica**: Virtudes, falhas trágicas e perfil psicológico profundo.
- **Relações Chave**: Lista de conexões com outros personagens (família, alianças, rivalidades).
- **Eventos Importantes (Arco Narrativo)**: Início, Ápice e Destino Final do personagem no épico.
- **Linha do Tempo Clicável**: Cards de aparições textuais com link direto para o livro correspondente na Biblioteca.
- **Árvore Genealógica Vertical**: Visualização D3.js interativa focada no personagem selecionado — ancestrais no topo, descendentes ramificando para baixo. Zoom e pan habilitados.

### 📚 Biblioteca Universal
- Acesso completo aos **18 Parvas** (livros) do Mahabharata formatados para leitura digital.
- Navegação por seções e rolagem dentro de cada livro.

### 📊 Dashboard Analítico (BI)
- **Grafo Geral**: Rede completa de relações entre personagens (D3 force-directed).
- **Árvore de Linhagem Global**: Hierarquia familiar de todo o panteão.
- **Radiografia do Conflito**: Análise dos índices de Dharma, Conflito e Transcendência.
- **Timeline do Épico**: Linha cronológica dos grandes eventos.

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|---|---|
| Frontend | React 19 + Vite |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS v3 (paleta Epic Gold/Bronze/Dark) |
| Visualizações | D3.js (grafos, árvores, timelines) |
| Dados | JSON estático + índice textual gerado por scripts Node.js |

---

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Desenvolvimento local
npm run dev
# → http://localhost:5173

# Acesso via celular (Wi-Fi local)
npm run dev:lan

# Build para produção
npm run build
# A pasta dist/ pode ser publicada no Netlify Drop
```

---

## 📂 Estrutura de Dados

```
public/data/
├── parvas/                      # 18 livros em JSON
├── full_character_database.json # Banco massivo de personagens
└── search_index.json            # Índice textual de nomes

src/
├── data/
│   ├── characters.ts            # Perfis curados (Nível 1)
│   └── extendedCharacters.ts    # Perfis expandidos (Nível 2)
├── services/
│   ├── mahabharataService.ts    # Busca híbrida (3 níveis)
│   ├── graphBuilder.ts          # Construção do grafo (nós + linhagens sintéticas)
│   └── analyticsService.ts      # Métricas: Dharma, Conflito, Transcendência
└── components/
    ├── features/
    │   ├── CharacterDashboard.tsx   # Painel completo do personagem
    │   └── analytics/               # Visualizações D3
    └── layout/Layout.tsx            # Header Zemo Cosmovisões
```

---

## 🔮 Roadmap

- [ ] Exportação de perfis em PDF
- [ ] Camada de Reencarnações (divindades → encarnações humanas)
- [ ] Expansão da base com personagens terciários
- [ ] Refinamento dos índices de Dharma/Conflito por feedback

---

*Desenvolvido por **Zemo Cosmovisões** — Ferramenta de análise mitológica e filosófica do épico indiano.*
