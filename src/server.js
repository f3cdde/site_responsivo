const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar o middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Configurar o middleware para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para lidar com o envio do formulário de contato
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
    res.json({ success: true });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
