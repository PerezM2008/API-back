

// SImulação de um Banco de Dados e memória
let users = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 2, name: 'Roberto', email: 'roberto@gmail.com'},
    {id: 3, name: 'Josue', email: 'josue@gmail.com'}
];

//Funções que irão simular  integraçõa com o banco de dados

//Funções que lista rodos os usuarios ( Se fosse em um banco de dados findAll executaria o 
// Comando Select)
const findAll = () => {
    return users;
}

const findById = (id) => {
    return users.find(user => user.id === id)
}

//Funções para adicionar um novo usuario (comando Insert)
const create = (newUser) => {

    //Gerando o id do próximo item (usuário)
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    //Criando um novo usuario com Id novo (desconstrutor)
    const userWithId = {id: newId, ...newUser};

    //Adiciona o userWithId no Array users
    users.push(userWithId);

    //Retorna o usuario cadastrado
    return userWithId;


}

module.exports = {
    findAll,
    findById,
    create
}