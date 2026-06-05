# 🎬 Dev Movies

Uma aplicação web inspirada na Netflix, desenvolvida com React, que consome dados da API do TMDB para exibir filmes e séries populares, detalhes completos, trailers, elenco e recomendações.

## 🚀 Funcionalidades

- 🎥 Exibição do filme em destaque na página inicial
- 📺 Listagem de filmes e séries populares
- 🎠 Carrosséis interativos
- 🔍 Página de detalhes dos filmes
- 🎬 Exibição de trailers
- 👥 Informações sobre elenco
- ⭐ Recomendações de filmes similares
- 📱 Layout responsivo
- 🎨 Interface inspirada na Netflix

---

## 🛠️ Tecnologias Utilizadas

- React
- React Router DOM
- Axios
- Styled Components
- Swiper.js
- TMDB API
- JavaScript (ES6+)

---

## 📂 Estrutura do Projeto

```bash
src/
│
├── assets/
├── components/
│   ├── Button/
│   ├── Card/
│   ├── Header/
│   └── Slider/
│
├── containers/
│   ├── Home/
│   ├── Movies/
│   ├── Series/
│   └── Detail/
│
├── layout/
├── routes/
├── services/
├── styles/
└── utils/
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/dev-movies.git
```

Entre na pasta:

```bash
cd dev-movies
```

Instale as dependências:

```bash
yarn
```

ou

```bash
npm install
```

Execute o projeto:

```bash
yarn dev
```

ou

```bash
npm run dev
```

---

## 🔑 Configuração da API

O projeto utiliza a API do TMDB.

Crie uma conta em:

https://www.themoviedb.org/

Gere sua chave da API e configure no arquivo:

```js
src/services/api.js
```

Exemplo:

```js
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "SUA_API_KEY",
    language: "pt-BR"
  }
})
```

---

## 📱 Páginas

### Home
- Filme em destaque
- Carrossel de filmes populares
- Carrossel de séries populares
- Pessoas mais populares

### Detalhes
- Banner do filme
- Trailer
- Elenco
- Filmes similares

### Filmes
- Catálogo de filmes

### Séries
- Catálogo de séries

---

## 🎯 Objetivo

Este projeto foi desenvolvido com foco em aprendizado e prática de:

- Consumo de APIs REST
- React Router
- Componentização
- Styled Components
- Manipulação de estados
- Organização de projetos React

---

## 👨‍💻 Desenvolvedor

Desenvolvido por **Rian Lucas**.

Apaixonado por tecnologia, programação e desenvolvimento web, sempre buscando criar aplicações modernas, intuitivas e escaláveis.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
