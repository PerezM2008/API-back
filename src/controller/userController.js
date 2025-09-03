
//1º Passo - importar o userModel
const userModel = require('../model/userModel');

//Função do controller que lista os usuários
const getAllUsers = (req, res) => {
    //Chamando a função FindAll do model 
    const users = userModel.findAll();

    //Devolver uma respostas para o cliente
    res.status(200).json(users);
}

module.exports = {
    getAllUsers
};