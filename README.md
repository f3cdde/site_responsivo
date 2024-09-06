# Site Responsivo com HTML, CSS, PHP e Node.js

Este projeto cria um site responsivo utilizando HTML, CSS, PHP e Node.js. O site inclui uma página inicial simples e um formulário de contato que envia dados para um servidor Node.js.

## Estrutura do Projeto

site-responsivo/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── contact.html
│
├── src/
│   └── server.js
│
├── .gitignore
├── Dockerfile
├── README.md
├── package.json
└── package-lock.json

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/site-responsivo.git
   cd site-responsivo

2.  Instale as dependências:
    npm install

3.  Construa a imagem Docker:
    docker build -t site-responsivo .

4.  Execute o contêiner Docker:
    docker run -p 3000:3000 site-responsivo

5.  Acesse o site no navegador:
    http://localhost:3000