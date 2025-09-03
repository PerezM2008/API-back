//1º passo - importar o express
const express = require ('express')

//2º passo - criar um router e importar o controller de usuario
const router = express.Router();
const userController = require('../controller/userController');

//3º passo - Criar as Rotas dos usuarios
router.get('/list', userController.getAllUsers);


router.post('/cadastro', userController.create);

module.exports = router;