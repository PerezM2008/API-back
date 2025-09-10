//Importa o Express
const express = require('express');

//Importar o arquivo das rotas do usuarios
const userRoutes = require('./src/routes/usersRoutes')

//Criar uma aplicação express
const app = express();
app.use(express.json());

//Definir a port aem que o servidor irá funcionar (executar)
const porta = 8000;

//Rota de teste da API
app.get('/api', (req, res) =>{

    res.send("API de usuários está funcionando");

});

//configurando as rotas do Usuario
app.use('/api/users', userRoutes)

//Rota para Cadastrar um usuario
app.post('./api/listar', (req, res) => {
    //Cadastro um Usuario
})

//Inicia o servidor 
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})