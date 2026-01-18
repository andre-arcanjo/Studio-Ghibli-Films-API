# 🎬 Studio Ghibli Films

Uma aplicação React moderna para explorar os filmes do Studio Ghibli, consumindo a API oficial do Studio Ghibli.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-06B6D4?style=flat&logo=tailwindcss)

## Demonstração



## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **DevQuest - React Avançado**, apresentando uma aplicação que lista e exibe detalhes dos filmes do Studio Ghibli. A aplicação utiliza tecnologias modernas e boas práticas de desenvolvimento.

## ✨ Funcionalidades

- 📱 **Lista de Filmes**: Exibe os 10 primeiros filmes do Studio Ghibli ordenados alfabeticamente
- 🎯 **Detalhes do Filme**: Visualize informações detalhadas de cada filme
- 🔄 **Carregamento Otimizado**: Sistema de cache inteligente com React Query
- 🎨 **Interface Responsiva**: Design moderno com Tailwind CSS
- 🚦 **Rotas Dinâmicas**: Navegação fluida com React Router
- ⚡ **Performance**: Otimização de consultas e estados de loading/erro

## 🛠️ Tecnologias Utilizadas

- **[React](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vite.dev/)** - Build tool e dev server ultrarrápido
- **[React Router](https://reactrouter.com/)** - Gerenciamento de rotas
- **[TanStack Query (React Query)](https://tanstack.com/query/)** - Gerenciamento de estado assíncrono e cache
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Studio Ghibli API](https://ghibliapi.vercel.app/)** - API pública dos filmes

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd desafio-studio-ghibli
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria a build de produção
npm run preview  # Visualiza a build de produção
npm run lint     # Executa o linter ESLint
```

## 📁 Estrutura do Projeto

```
desafio-studio-ghibli/
├── src/
│   ├── components/
│   │   ├── FilmsDetails/
│   │   │   └── FilmDetail.tsx      # Componente de detalhes do filme
│   │   └── RenderFilms/
│   │       └── RenderFilms.tsx      # Componente de listagem de filmes
│   ├── hooks/
│   │   └── fetchfilms.ts            # Custom hooks com React Query
│   ├── styles/
│   │   └── globals.css              # Estilos globais
│   ├── types/
│   │   └── types.ts                 # Definições de tipos TypeScript
│   ├── App.tsx                      # Componente principal
│   └── main.tsx                     # Entry point da aplicação
├── public/                          # Arquivos públicos estáticos
├── index.html                       # Template HTML
├── package.json                     # Dependências e scripts
├── tsconfig.json                    # Configuração TypeScript
├── vite.config.ts                   # Configuração Vite
└── eslint.config.js                 # Configuração ESLint
```

## 🎯 Características Técnicas

### Custom Hooks
- `useFilms()`: Busca e organiza a lista de filmes
- `useFilm(id)`: Busca detalhes de um filme específico

### Gerenciamento de Estado
- Utilização do React Query para cache inteligente
- Desabilitação de refetch desnecessários
- Estados de loading e erro bem definidos

### Otimizações
- Organização alfabética automática dos filmes
- Limitação a 10 filmes para melhor performance
- Cache de requisições para evitar chamadas redundantes

## 🎨 Interface

A interface conta com:
- Design limpo e minimalista
- Cards interativos com hover effects
- Transições suaves
- Estados visuais para loading e erro
- Layout responsivo
