//1º passo - importar o express
const express = require ('express')

//2º passo - criar um router e importar o controller de usuario
const router = express.Router();
const userController = require('../controller/userController');

//3º passo - Criar as Rotas dos usuarios
router.get('/list', userController.getAllUsers);

//Criando a rota que ira obter os dados do usuario or id
router.get('/:id', userController.getUserById);

//Criando uma rota que ira Criar um novo usuario
router.post('/', userController.createUser);

//Criando uma rota que ira Deletar um usuario
router.delete('/:id', userController.deleteUser);

//Criando uma rota para atualizar um usuário
//localhost:8000/api/user/
router.put('/', userController.updateUser);

module.exports = router;